"""Shared symbol-resolution manifest registry unit tests.

Covers the three canonical loaders + `resolve_requested_symbols` partition
contract in `ocjs_bindgen.link.manifest_registry`. The registry is the
single source of truth for both link-time `verifyBindings` and the
post-link `validate-build.py` script; these tests pin the contract those
two consumers depend on.

Test design follows `docs/policy/testing-policy.md`:
- pytest `tmp_path` fixture for any on-disk artefact
- no system clock, network, or writable global filesystem access
- structural assertions on the typed `SymbolResolution` dataclass rather
  than regex over print output
"""

from __future__ import annotations

import json
import os

import pytest

from ocjs_bindgen.link.manifest_registry import (
  ADDITIONAL_BIND_SYMBOLS_SCHEMA,
  NCOLLECTION_MANIFEST_SCHEMA,
  ManifestSchemaError,
  SymbolResolution,
  builtin_binding_symbols,
  collect_compiled_symbols,
  load_ncollection_alias_index,
  resolve_requested_symbols,
)

# ----------------------------------------------------------------------------
# collect_compiled_symbols — dual-path walk (compiled-bindings + legacy).
# ----------------------------------------------------------------------------


def _touch(path: str) -> None:
  os.makedirs(os.path.dirname(path), exist_ok=True)
  with open(path, "wb"):
    pass


def test_collect_compiled_symbols_walks_compiled_bindings_layout(tmp_path) -> None:
  """Primary layout — `build/compiled-bindings/<pkg>/<sym>.cpp.o`.
  Every `.cpp.o` stem must surface as a symbol key.
  """
  _touch(os.path.join(str(tmp_path), "compiled-bindings", "Foundation", "gp_Pnt.cpp.o"))
  _touch(os.path.join(str(tmp_path), "compiled-bindings", "Modeling", "TopoDS_Shape.cpp.o"))
  assert collect_compiled_symbols(str(tmp_path)) == {"gp_Pnt", "TopoDS_Shape"}


def test_collect_compiled_symbols_walks_legacy_bindings_layout(tmp_path) -> None:
  """Legacy layout — `build/bindings/<pkg>/<sym>.cpp.o` (pre-compile-stage split).
  When `compiled-bindings/` is absent the loader must fall through to
  `bindings/` so partial builds against older trees still resolve.
  """
  _touch(os.path.join(str(tmp_path), "bindings", "Foundation", "gp_Pnt.cpp.o"))
  assert collect_compiled_symbols(str(tmp_path)) == {"gp_Pnt"}


def test_collect_compiled_symbols_unions_both_layouts(tmp_path) -> None:
  """When both directories exist (mid-migration), the loader returns the
  union so no compiled symbol gets dropped just because some live in the
  legacy tree and some in the modern one.
  """
  _touch(os.path.join(str(tmp_path), "compiled-bindings", "Modeling", "TopoDS_Shape.cpp.o"))
  _touch(os.path.join(str(tmp_path), "bindings", "Foundation", "gp_Pnt.cpp.o"))
  assert collect_compiled_symbols(str(tmp_path)) == {"gp_Pnt", "TopoDS_Shape"}


def test_collect_compiled_symbols_returns_empty_when_nothing_compiled(tmp_path) -> None:
  """Pristine workspace — neither directory exists. The loader degrades
  silently to the empty set (no traceback) so the verifier can still
  report what's truly missing on a first-ever build.
  """
  assert collect_compiled_symbols(str(tmp_path)) == set()


def test_collect_compiled_symbols_ignores_non_object_files(tmp_path) -> None:
  """Anything that isn't `.cpp.o` (raw `.cpp`, `.d.ts.json`, stray
  `.txt`) must not become a symbol key.
  """
  _touch(os.path.join(str(tmp_path), "compiled-bindings", "Foundation", "gp_Pnt.cpp"))
  _touch(os.path.join(str(tmp_path), "compiled-bindings", "Foundation", "gp_Pnt.d.ts.json"))
  _touch(os.path.join(str(tmp_path), "compiled-bindings", "Foundation", "gp_Pnt.cpp.o"))
  assert collect_compiled_symbols(str(tmp_path)) == {"gp_Pnt"}


# ----------------------------------------------------------------------------
# load_ncollection_alias_index — alias-to-canonical mapping.
# ----------------------------------------------------------------------------


def _write_ncollection_manifest_v2(
  tmp_path,
  declarations,
  template_typedefs=None,
  schema=NCOLLECTION_MANIFEST_SCHEMA,
) -> None:
  """Write a v2 schema manifest fixture matching the real producer
  emitted by `discover.write_manifest`. The `template_typedefs` field
  is the typedef-alias map serialised from `tuInfo.templateTypedefs` —
  the V1 RE-SHIP made this a first-class manifest field, supplanting
  the v1 misreading of `source_classes[]` as an alias map.
  """
  manifest_path = os.path.join(str(tmp_path), "ncollection-manifest.json")
  payload = {
    "schema": schema,
    "symbols": sorted(d["mangled_name"] for d in declarations),
    "declarations": declarations,
    "template_typedefs": dict(template_typedefs or {}),
  }
  with open(manifest_path, "w") as f:
    json.dump(payload, f)


def test_load_ncollection_alias_index_maps_typedef_aliases_to_canonical(tmp_path) -> None:
  """Every `template_typedefs` entry must surface as `{alias: canonical}`
  so callers can swap the alias name (e.g. `TColgp_Array1OfPnt`) for the
  compiled canonical (`NCollection_Array1_gp_Pnt`). The v2 schema
  serialises `_build_typedef_alias_map`'s output — the in-memory
  mapping the v1 schema silently dropped.
  """
  _write_ncollection_manifest_v2(
    tmp_path,
    declarations=[
      {
        "mangled_name": "NCollection_Array1_gp_Pnt",
        "container": "NCollection_Array1",
        "args": ["gp_Pnt"],
        "source_classes": ["gp_Pnt"],
      },
    ],
    template_typedefs={
      "TColgp_Array1OfPnt": "NCollection_Array1_gp_Pnt",
      "TColgp_HArray1OfPnt": "NCollection_Array1_gp_Pnt",
    },
  )
  index = load_ncollection_alias_index(str(tmp_path))
  assert index == {
    "TColgp_Array1OfPnt": "NCollection_Array1_gp_Pnt",
    "TColgp_HArray1OfPnt": "NCollection_Array1_gp_Pnt",
  }


def test_load_ncollection_alias_index_returns_empty_when_no_typedefs(tmp_path) -> None:
  """A v2 manifest with no typedef aliases (e.g. only direct `using`
  declarations in `additionalCppFiles`) must yield an empty alias index —
  not a crash. `source_classes[]` is no longer consulted for alias
  resolution; its presence/absence doesn't enter this code path.
  """
  _write_ncollection_manifest_v2(
    tmp_path,
    declarations=[
      {
        "mangled_name": "NCollection_Array1_CustomThing",
        "container": "NCollection_Array1",
        "args": ["CustomThing"],
        "source_classes": ["__custom__"],
      },
    ],
    template_typedefs={},
  )
  assert load_ncollection_alias_index(str(tmp_path)) == {}


def test_load_ncollection_alias_index_returns_empty_when_manifest_missing(tmp_path) -> None:
  """Pristine workspace — manifest never generated. The loader degrades
  to an empty dict so the verifier still runs on a first build (no
  NCollection bindings discovered = nothing to map).
  """
  assert load_ncollection_alias_index(str(tmp_path)) == {}


def test_load_ncollection_alias_index_rejects_pre_v2_schema(tmp_path) -> None:
  """A pre-v2 manifest (no `schema` discriminator, or wrong
  discriminator value) must raise `ManifestSchemaError` with a
  regenerate-pointer — silently falling through to the v1 `source_classes`
  misreading was the V1 regression vector this RE-SHIP eliminates.
  """
  _write_ncollection_manifest_v2(
    tmp_path,
    declarations=[
      {
        "mangled_name": "NCollection_Array1_gp_Pnt",
        "container": "NCollection_Array1",
        "args": ["gp_Pnt"],
        "source_classes": ["TColgp_Array1OfPnt"],
      },
    ],
    schema=None,  # simulates a v1 manifest that pre-dates the discriminator
  )
  with pytest.raises(ManifestSchemaError, match="ncollection-manifest"):
    load_ncollection_alias_index(str(tmp_path))


def test_load_ncollection_alias_index_rejects_v2_missing_template_typedefs(tmp_path) -> None:
  """A manifest with the correct schema discriminator but no
  `template_typedefs` field (corrupted producer state) must hard-fail
  — the field is a v2 requirement.
  """
  manifest_path = os.path.join(str(tmp_path), "ncollection-manifest.json")
  with open(manifest_path, "w") as f:
    json.dump(
      {
        "schema": NCOLLECTION_MANIFEST_SCHEMA,
        "symbols": [],
        "declarations": [],
      },
      f,
    )
  with pytest.raises(ManifestSchemaError, match="template_typedefs"):
    load_ncollection_alias_index(str(tmp_path))


# ----------------------------------------------------------------------------
# builtin_binding_symbols — Phase 2 JSON loader.
# ----------------------------------------------------------------------------


def _write_bind_symbols_manifest(
  tmp_path,
  symbols,
  schema=ADDITIONAL_BIND_SYMBOLS_SCHEMA,
) -> None:
  """Write a v1 schema `additional-bind-symbols.json` fixture matching
  the real producer emitted by `ocjs_bindgen.bind_symbols.write_manifest`.
  """
  manifest_path = os.path.join(str(tmp_path), "additional-bind-symbols.json")
  payload = {"schema": schema, "symbols": sorted(symbols)}
  with open(manifest_path, "w") as f:
    json.dump(payload, f)


def test_builtin_binding_symbols_loads_manifest(tmp_path) -> None:
  """Embind registration names from the bind-symbols stage's manifest
  must surface as a frozenset for hashable bucket membership. The v1
  schema discriminator round-trips so the consumer can pin the
  producer contract.
  """
  _write_bind_symbols_manifest(
    tmp_path,
    {"OCJS", "TopoDS", "TColStd_IndexedDataMapOfStringString"},
  )
  result = builtin_binding_symbols(str(tmp_path))
  assert result == frozenset({"OCJS", "TopoDS", "TColStd_IndexedDataMapOfStringString"})
  assert isinstance(result, frozenset)


def test_builtin_binding_symbols_hard_fails_when_manifest_missing(tmp_path) -> None:
  """V3 RE-SHIP: missing manifest = bind-symbols stage was skipped =
  hard-fail with regenerate-pointer. The previous soft-fall-through-to-
  empty was the V3 regression vector that bucketed every Embind builtin
  into `truly_missing` when the in-process producer was ordered after
  its consumer.
  """
  with pytest.raises(ManifestSchemaError, match="bind-symbols"):
    builtin_binding_symbols(str(tmp_path))


def test_builtin_binding_symbols_hard_fails_on_pre_schema_manifest(tmp_path) -> None:
  """A manifest without the v1 schema discriminator (stale pre-RE-SHIP
  build tree) must hard-fail with a regenerate-pointer pointing at the
  bind-symbols NX target.
  """
  manifest_path = os.path.join(str(tmp_path), "additional-bind-symbols.json")
  with open(manifest_path, "w") as f:
    json.dump({"symbols": ["OCJS"]}, f)
  with pytest.raises(ManifestSchemaError, match="bind-symbols"):
    builtin_binding_symbols(str(tmp_path))


# ----------------------------------------------------------------------------
# resolve_requested_symbols — bucket partitioning contract.
# ----------------------------------------------------------------------------


def test_resolve_requested_symbols_buckets_each_mechanism() -> None:
  """The smoking-gun contract: a mixed request set with one entry of
  each resolution class must partition cleanly into the four buckets.
  """
  requested = {
    "gp_Pnt",                    # directly compiled
    "TColgp_Array1OfPnt",        # NCollection typedef alias
    "TopoDS",                    # Embind builtin
    "IMeshData_IPCurveHandle",   # unsupported handle alias: truly missing
  }
  compiled = {"gp_Pnt", "NCollection_Array1_gp_Pnt"}
  alias_index = {"TColgp_Array1OfPnt": "NCollection_Array1_gp_Pnt"}
  builtins = frozenset({"TopoDS", "OCJS"})

  resolution = resolve_requested_symbols(
    requested,
    compiled,
    alias_index,
    builtins,
  )

  assert isinstance(resolution, SymbolResolution)
  assert resolution.satisfied_by_compiled == frozenset({"gp_Pnt"})
  assert resolution.alias_resolved == {"TColgp_Array1OfPnt": "NCollection_Array1_gp_Pnt"}
  assert resolution.builtin == frozenset({"TopoDS"})
  assert resolution.truly_missing == frozenset({"IMeshData_IPCurveHandle"})


def test_resolve_requested_symbols_all_resolved() -> None:
  """Every requested entry resolves — `truly_missing` is empty."""
  resolution = resolve_requested_symbols(
    requested={"gp_Pnt", "TopoDS"},
    compiled={"gp_Pnt"},
    alias_index={},
    builtins=frozenset({"TopoDS"}),
  )
  assert resolution.truly_missing == frozenset()
  assert resolution.satisfied_by_compiled == frozenset({"gp_Pnt"})
  assert resolution.builtin == frozenset({"TopoDS"})


def test_resolve_requested_symbols_all_truly_missing() -> None:
  """Nothing resolves anywhere — every entry lands in `truly_missing`."""
  resolution = resolve_requested_symbols(
    requested={"A", "B", "C"},
    compiled=set(),
    alias_index={},
    builtins=frozenset(),
  )
  assert resolution.truly_missing == frozenset({"A", "B", "C"})
  assert resolution.satisfied_by_compiled == frozenset()
  assert resolution.alias_resolved == {}
  assert resolution.builtin == frozenset()


def test_resolve_requested_symbols_compiled_wins_over_alias() -> None:
  """If a symbol IS in `compiled` AND has an alias entry, the directly-
  compiled bucket wins — precedence pins the link-time outcome.
  """
  resolution = resolve_requested_symbols(
    requested={"TColgp_Array1OfPnt"},
    compiled={"TColgp_Array1OfPnt", "NCollection_Array1_gp_Pnt"},
    alias_index={"TColgp_Array1OfPnt": "NCollection_Array1_gp_Pnt"},
    builtins=frozenset(),
  )
  assert resolution.satisfied_by_compiled == frozenset({"TColgp_Array1OfPnt"})
  assert resolution.alias_resolved == {}


def test_resolve_requested_symbols_alias_unsatisfied_when_canonical_absent() -> None:
  """An alias entry whose canonical was NOT compiled does not rescue
  the request — it falls through to `truly_missing` so the operator
  sees the real link gap.
  """
  resolution = resolve_requested_symbols(
    requested={"TColgp_Array1OfPnt"},
    compiled={"gp_Pnt"},  # canonical not present
    alias_index={"TColgp_Array1OfPnt": "NCollection_Array1_gp_Pnt"},
    builtins=frozenset(),
  )
  assert resolution.truly_missing == frozenset({"TColgp_Array1OfPnt"})
  assert resolution.alias_resolved == {}


def test_resolve_requested_symbols_alias_wins_over_builtin() -> None:
  """When both an alias entry and a builtin name claim the same symbol,
  the alias path wins because the alias has a verified canonical `.cpp.o`
  while the builtin is a registration that may not have a separate
  compiled stem.
  """
  resolution = resolve_requested_symbols(
    requested={"Foo"},
    compiled={"NCollection_Foo"},
    alias_index={"Foo": "NCollection_Foo"},
    builtins=frozenset({"Foo"}),
  )
  assert resolution.alias_resolved == {"Foo": "NCollection_Foo"}
  assert resolution.builtin == frozenset()


def test_resolve_requested_symbols_empty_request_set() -> None:
  """No requested entries — every bucket must be empty."""
  resolution = resolve_requested_symbols(
    requested=set(),
    compiled={"gp_Pnt"},
    alias_index={"X": "Y"},
    builtins=frozenset({"OCJS"}),
  )
  assert resolution.satisfied_by_compiled == frozenset()
  assert resolution.alias_resolved == {}
  assert resolution.builtin == frozenset()
  assert resolution.truly_missing == frozenset()
