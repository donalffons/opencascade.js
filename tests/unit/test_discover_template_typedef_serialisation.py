"""V1 RE-SHIP — `discover.write_manifest` serialises the typedef-alias
map into `template_typedefs` so the manifest_registry consumer can
resolve aliases without re-running libclang.

Pre-RE-SHIP, `_build_typedef_alias_map` ran in-memory inside
`discover_ncollection_types` but the result was never serialised — only
`declarations[*].source_classes` (a reachability tag) reached disk. The
post-link `validate-build.py` consumer misread `source_classes` as an
alias map, producing the "10 NCollection typedef aliases reported as
truly missing" smoking-gun the audit identified.

This sentinel pins the producer-side contract:

* The v2 schema discriminator is present (`ncollection-manifest-v2`).
* `template_typedefs` round-trips every `tuInfo.templateTypedefs` whose
  canonical IS in `discovered` (entries with no canonical-side match
  drop — emitting them would re-introduce the false-positive vector).
* `_parse_template_spelling` handles nested templates (depth-tracking
  comma split).

Test design follows `docs/policy/testing-policy.md`:
* pytest `tmp_path` for the manifest artefact.
* `cursor_mock` chains for the fake `tuInfo.templateTypedefs`.
* Structural assertions on the parsed JSON — no string matching.
"""

from __future__ import annotations

import json
import os
from types import SimpleNamespace

import pytest

from ocjs_bindgen.discover import (
  NCOLLECTION_MANIFEST_SCHEMA,
  _parse_template_spelling,
  _serialise_template_typedef_aliases,
  write_manifest,
)


# V1 RE-SHIP — `_serialise_template_typedef_aliases` and
# `discover_ncollection_types` now consult a separate libclang TU
# (`TypedefDiscoveryTuInfo`) that parses
# `Deprecated/NCollectionAliases/*.hxx` for OCCT V8 historic alias
# resolution. The unit-test fixtures mock the codegen TU only, so this
# autouse fixture redirects the discovery-TU singleton to a stub built
# from the test's mock `templateTypedefs` so the producer reads the
# expected typedef set.
class _StubDiscoveryTu:
  def __init__(self, templateTypedefs=None):
    self.templateTypedefs = templateTypedefs or []
    self.classDict = {}
    self.typedefs = []
    self.typedefUnderlyingMultimap = {}
    self.templateTypedefUnderlyingMultimap = {}


@pytest.fixture(autouse=True)
def _stub_discovery_tu(monkeypatch):
  """Make `TypedefDiscoveryTuInfo.instance()` return an EMPTY stub so
  the serialiser's "pick the larger typedef source" heuristic falls
  back to the test's mock `tuInfo.templateTypedefs`. Without this,
  the real libclang parse runs and pollutes the typedef map with
  hundreds of OCCT typedefs the test never declared.
  """
  from ocjs_bindgen.ast import cursors as _cursors

  monkeypatch.setattr(
    _cursors.TypedefDiscoveryTuInfo,
    "instance",
    classmethod(lambda cls: _StubDiscoveryTu()),
  )
  yield
  _cursors.TypedefDiscoveryTuInfo._instance = None


# ----------------------------------------------------------------------------
# `_parse_template_spelling` — nested-template-aware comma split.
# ----------------------------------------------------------------------------


def test_parse_template_spelling_simple() -> None:
  assert _parse_template_spelling("NCollection_Array1<gp_Pnt>") == (
    "NCollection_Array1",
    ["gp_Pnt"],
  )


def test_parse_template_spelling_multi_arg() -> None:
  parsed = _parse_template_spelling(
    "NCollection_DataMap<TCollection_AsciiString, gp_Pnt, ShapeMapHasher>"
  )
  assert parsed == (
    "NCollection_DataMap",
    ["TCollection_AsciiString", "gp_Pnt", "ShapeMapHasher"],
  )


def test_parse_template_spelling_nested_template() -> None:
  """Nested `<...>` must not break the comma split. The depth tracker
  keeps the inner `NCollection_List<...>` as a single argument.
  """
  parsed = _parse_template_spelling(
    "NCollection_DataMap<TopoDS_Shape, NCollection_List<TopoDS_Shape>, Hasher>"
  )
  assert parsed == (
    "NCollection_DataMap",
    ["TopoDS_Shape", "NCollection_List<TopoDS_Shape>", "Hasher"],
  )


def test_parse_template_spelling_rejects_non_template() -> None:
  """A spelling without `<>` returns `None` so the caller can skip
  typedef aliases that don't resolve to NCollection-shaped templates.
  """
  assert _parse_template_spelling("gp_Pnt") is None
  assert _parse_template_spelling("gp_Pnt<") is None


# ----------------------------------------------------------------------------
# `_serialise_template_typedef_aliases` — typedef → mangled mapping.
# ----------------------------------------------------------------------------


def _typedef(alias: str, underlying: str) -> SimpleNamespace:
  """Fake libclang typedef cursor with the minimal surface
  `_build_typedef_alias_map` consumes.
  """
  return SimpleNamespace(
    spelling=alias,
    underlying_typedef_type=SimpleNamespace(spelling=underlying),
  )


def test_serialise_template_typedef_aliases_emits_only_canonical_resolvable() -> None:
  """Only typedefs whose underlying spelling resolves to a canonical
  present in `discovered` are emitted. Without this filter, the
  manifest would advertise aliases whose canonical wasn't auto-discovered
  — and the link-time verifier would still see them as missing.
  """
  tu_info = SimpleNamespace(
    templateTypedefs=[
      _typedef("TColgp_Array1OfPnt", "NCollection_Array1<gp_Pnt>"),
      _typedef("TopTools_ListOfShape", "NCollection_List<TopoDS_Shape>"),
      _typedef("NotDiscovered", "NCollection_Sequence<UnknownType>"),
    ]
  )
  discovered = {
    ("NCollection_Array1_gp_Pnt", "NCollection_Array1", ("gp_Pnt",), ("gp_Pnt",)),
    ("NCollection_List_TopoDS_Shape", "NCollection_List", ("TopoDS_Shape",), ("TopoDS_Shape",)),
  }
  result = _serialise_template_typedef_aliases(tu_info, discovered)
  assert result == {
    "TColgp_Array1OfPnt": "NCollection_Array1_gp_Pnt",
    "TopTools_ListOfShape": "NCollection_List_TopoDS_Shape",
  }


def test_serialise_template_typedef_aliases_resolves_alias_chains() -> None:
  """`using A = B; using B = NCollection_X<Y>;` — `_normalize_arg`
  walks the chain to fixed point. The serialiser must follow the chain
  and emit `A -> NCollection_X_Y`.
  """
  tu_info = SimpleNamespace(
    templateTypedefs=[
      _typedef("AliasOne", "AliasTwo"),
      _typedef("AliasTwo", "NCollection_Array1<gp_Pnt>"),
    ]
  )
  discovered = {
    ("NCollection_Array1_gp_Pnt", "NCollection_Array1", ("gp_Pnt",), ("gp_Pnt",)),
  }
  result = _serialise_template_typedef_aliases(tu_info, discovered)
  assert result["AliasOne"] == "NCollection_Array1_gp_Pnt"
  assert result["AliasTwo"] == "NCollection_Array1_gp_Pnt"


def test_serialise_template_typedef_aliases_applies_container_alias() -> None:
  """The `NCollection_Vector -> NCollection_DynamicArray` container
  alias (from `discover.CONTAINER_ALIASES`) must apply during
  resolution so vector typedefs map to the dynamic-array canonical.
  """
  tu_info = SimpleNamespace(
    templateTypedefs=[
      _typedef("MyVectorAlias", "NCollection_Vector<gp_Pnt>"),
    ]
  )
  discovered = {
    ("NCollection_DynamicArray_gp_Pnt", "NCollection_DynamicArray", ("gp_Pnt",), ("gp_Pnt",)),
  }
  result = _serialise_template_typedef_aliases(tu_info, discovered)
  assert result == {"MyVectorAlias": "NCollection_DynamicArray_gp_Pnt"}


# ----------------------------------------------------------------------------
# `write_manifest` — full v2 schema round-trip on disk.
# ----------------------------------------------------------------------------


def test_write_manifest_emits_v2_schema_discriminator_and_template_typedefs(
  tmp_path,
) -> None:
  """The on-disk manifest carries `schema=ncollection-manifest-v2` and
  the `template_typedefs` field so the consumer's hard-fail guard sees
  the producer's contract intact.
  """
  tu_info = SimpleNamespace(
    templateTypedefs=[
      _typedef("TColgp_Array1OfPnt", "NCollection_Array1<gp_Pnt>"),
    ]
  )
  discovered = {
    ("NCollection_Array1_gp_Pnt", "NCollection_Array1", ("gp_Pnt",), ("gp_Pnt",)),
  }
  manifest_path = write_manifest(discovered, str(tmp_path), tuInfo=tu_info)
  with open(manifest_path) as f:
    manifest = json.load(f)
  assert set(manifest) == {
    "schema",
    "symbols",
    "declarations",
    "template_typedefs",
  }
  assert manifest["schema"] == NCOLLECTION_MANIFEST_SCHEMA
  assert manifest["template_typedefs"] == {
    "TColgp_Array1OfPnt": "NCollection_Array1_gp_Pnt",
  }
  assert manifest["symbols"] == ["NCollection_Array1_gp_Pnt"]
  assert len(manifest["declarations"]) == 1


def test_write_manifest_emits_empty_template_typedefs_when_tuinfo_absent(
  tmp_path,
) -> None:
  """Legacy call sites that don't pass `tuInfo` (none should exist in
  the v2-ready pipeline; this is a safety net) emit
  `template_typedefs={}` so the on-disk shape is always v2-conformant.
  Consumers will hard-fail with `template_typedefs absent` if `tuInfo`
  was meant to be present — surfaces the integration gap loudly.
  """
  discovered = {
    ("NCollection_Array1_gp_Pnt", "NCollection_Array1", ("gp_Pnt",), ("gp_Pnt",)),
  }
  manifest_path = write_manifest(discovered, str(tmp_path), tuInfo=None)
  with open(manifest_path) as f:
    manifest = json.load(f)
  assert manifest["template_typedefs"] == {}
  assert manifest["schema"] == NCOLLECTION_MANIFEST_SCHEMA


def test_write_manifest_template_typedefs_is_sorted(tmp_path) -> None:
  """JSON ordering matters for diff hygiene + deterministic content
  hashing. The `template_typedefs` map must round-trip with sorted keys.
  """
  tu_info = SimpleNamespace(
    templateTypedefs=[
      _typedef("ZebraAlias", "NCollection_Array1<gp_Pnt>"),
      _typedef("AlphaAlias", "NCollection_Array1<gp_Pnt>"),
      _typedef("MikeAlias", "NCollection_Array1<gp_Pnt>"),
    ]
  )
  discovered = {
    ("NCollection_Array1_gp_Pnt", "NCollection_Array1", ("gp_Pnt",), ("gp_Pnt",)),
  }
  manifest_path = write_manifest(discovered, str(tmp_path), tuInfo=tu_info)
  with open(manifest_path) as f:
    raw = f.read()
  # File ordering of the keys, not just dict iteration order.
  alpha_idx = raw.index('"AlphaAlias"')
  mike_idx = raw.index('"MikeAlias"')
  zebra_idx = raw.index('"ZebraAlias"')
  assert alpha_idx < mike_idx < zebra_idx
  os.unlink(manifest_path)
