"""Per-YAML NCollection reachability filter for the link step.

Covers `_compute_yaml_class_scope` and `_filter_auto_symbols_by_scope`
in `ocjs_bindgen.link.yaml_build`. Asserts that auto-discovered NCollection
entries are dropped when their source class is outside the consumer YAML's
reachable scope, and kept when an in-scope class's method signature mentions them.
"""

from __future__ import annotations

import json
import os

import pytest

from ocjs_bindgen.link.yaml_build import (
  _CUSTOM_CODE_SOURCE_TAG,
  _compute_yaml_class_scope,
  _filter_auto_symbols_by_scope,
  verifyBindings,
)

# ----------------------------------------------------------------------------
# `_compute_yaml_class_scope` — direct bindings, ancestors, custom code.
# ----------------------------------------------------------------------------


def _write_dts_fragment(library_base, package, stem, ancestors, referenced_classes=None):
  """Write a synthetic `.d.ts.json` fragment with the given ancestor chains.

  R1 (W10 structural fix) — `referenced_classes` is the structurally
  serialised set of every C++ class identifier the resolver attempted to
  emit while rendering the fragment. The link-time scope computer lifts
  it into the YAML scope so cross-class references converge on the next
  link cycle. Defaults to ``None`` so the legacy fixtures keep working
  without retrofitting every callsite.
  """
  dirpath = os.path.join(library_base, "bindings", package)
  os.makedirs(dirpath, exist_ok=True)
  payload = {
    ".d.ts": "",
    "kind": "class",
    "exports": [stem],
    "ancestors": ancestors,
  }
  if referenced_classes is not None:
    payload["referenced_classes"] = sorted(referenced_classes)
  with open(os.path.join(dirpath, f"{stem}.d.ts.json"), "w") as f:
    json.dump(payload, f)


def _build_config(symbols, extra_builds=None):
  return {
    "mainBuild": {"name": "test.js", "bindings": [{"symbol": s} for s in symbols]},
    "extraBuilds": extra_builds or [],
  }


def test_scope_includes_direct_bindings(tmp_path) -> None:
  scope = _compute_yaml_class_scope(_build_config(["gp_Pnt", "TopoDS_Shape"]), str(tmp_path))
  assert {"gp_Pnt", "TopoDS_Shape"} <= scope


def test_scope_includes_custom_sentinel(tmp_path) -> None:
  scope = _compute_yaml_class_scope(_build_config(["gp_Pnt"]), str(tmp_path))
  assert _CUSTOM_CODE_SOURCE_TAG in scope


def test_scope_includes_extra_builds_bindings(tmp_path) -> None:
  config = _build_config(
    ["gp_Pnt"],
    extra_builds=[{"name": "extra.js", "bindings": [{"symbol": "Geom_Curve"}]}],
  )
  scope = _compute_yaml_class_scope(config, str(tmp_path))
  assert {"gp_Pnt", "Geom_Curve"} <= scope


def test_scope_lifts_ancestor_chains_from_dts_fragments(tmp_path) -> None:
  """Binding `BRepBuilderAPI_MakeEdge` should automatically pull in
  `BRepBuilderAPI_MakeShape` and `BRepBuilderAPI_Command` via the
  serialised ancestor chain — those parents' NCollection-touching
  methods are inherited and therefore reachable from JS.
  """
  _write_dts_fragment(
    str(tmp_path), "ModelingAlgorithms/TKBO/BRepBuilderAPI", "BRepBuilderAPI_MakeEdge",
    ancestors={"BRepBuilderAPI_MakeEdge": ["BRepBuilderAPI_MakeShape", "BRepBuilderAPI_Command"]},
  )
  scope = _compute_yaml_class_scope(
    _build_config(["BRepBuilderAPI_MakeEdge"]), str(tmp_path)
  )
  assert {"BRepBuilderAPI_MakeEdge", "BRepBuilderAPI_MakeShape", "BRepBuilderAPI_Command"} <= scope


def test_scope_includes_custom_code_class_names(tmp_path) -> None:
  """Custom-code classes compiled into `build/bindings/myMain.h/` must
  enter the scope so any NCollection their methods reference survives
  the link filter."""
  custom_dir = os.path.join(str(tmp_path), "bindings", "myMain.h")
  os.makedirs(custom_dir)
  with open(os.path.join(custom_dir, "BRepToolsWrapper.d.ts.json"), "w") as f:
    json.dump({".d.ts": "", "kind": "class", "exports": ["BRepToolsWrapper"]}, f)
  with open(os.path.join(custom_dir, "ReplicadMeshData.d.ts.json"), "w") as f:
    json.dump({".d.ts": "", "kind": "class", "exports": ["ReplicadMeshData"]}, f)

  scope = _compute_yaml_class_scope(_build_config(["gp_Pnt"]), str(tmp_path))
  assert {"BRepToolsWrapper", "ReplicadMeshData"} <= scope


def test_scope_skips_all_manifest_owned_stems_under_mymain(tmp_path) -> None:
  """Generated fragments are identified by the manifest, not a name prefix."""
  custom_dir = os.path.join(str(tmp_path), "bindings", "myMain.h")
  os.makedirs(custom_dir)
  # Real consumer custom class.
  with open(os.path.join(custom_dir, "BRepToolsWrapper.d.ts.json"), "w") as f:
    json.dump({".d.ts": "", "kind": "class", "exports": ["BRepToolsWrapper"]}, f)
  # Auto-generated NCollection fragment cached from a prior build.
  with open(os.path.join(custom_dir, "NCollection_Array1_TopoDS_Shape.d.ts.json"), "w") as f:
    json.dump({".d.ts": "", "kind": "class", "exports": ["NCollection_Array1_TopoDS_Shape"]}, f)
  with open(os.path.join(custom_dir, "SomeTemplate_double.d.ts.json"), "w") as f:
    json.dump({".d.ts": "", "kind": "class", "exports": ["SomeTemplate_double"]}, f)
  _write_manifest(tmp_path, [
    {
      "mangled_name": "NCollection_Array1_TopoDS_Shape",
      "container": "NCollection_Array1",
      "args": ["TopoDS_Shape"],
      "source_classes": ["TopoDS_Iterator"],
    },
    {
      "mangled_name": "SomeTemplate_double",
      "container": "SomeTemplate",
      "args": ["double"],
      "source_classes": ["UsesSomeTemplate"],
    },
  ])

  scope = _compute_yaml_class_scope(_build_config(["gp_Pnt"]), str(tmp_path))
  assert "BRepToolsWrapper" in scope
  assert "NCollection_Array1_TopoDS_Shape" not in scope
  assert "SomeTemplate_double" not in scope


def test_scope_ignores_bindings_dir_when_absent(tmp_path) -> None:
  """A pristine workspace with no `build/bindings/` must not crash —
  the scope falls back to direct bindings + sentinel only."""
  scope = _compute_yaml_class_scope(_build_config(["gp_Pnt"]), str(tmp_path))
  assert scope == {"gp_Pnt", _CUSTOM_CODE_SOURCE_TAG}


def test_compute_yaml_class_scope_lifts_referenced_classes_field(tmp_path) -> None:
  """R1 / W10 structural fix — the structurally-serialised
  `referenced_classes` field on each in-scope fragment must be lifted into
  scope, replacing the legacy `_NCOLLECTION_TOKEN_RE` regex scrape.

  Smoking-gun assertion: `Geom_Plane` is neither an ancestor of
  `Poly_Triangulation` nor an `NCollection_*` token, so the legacy regex
  could never have lifted it; the structural lift via the `referenced_classes`
  list MUST. This pins the contract that any C++ class identifier the
  resolver attempted to emit lands in scope on the next link cycle.
  """
  _write_dts_fragment(
    str(tmp_path),
    "ModelingData/TKMath/Poly",
    "Poly_Triangulation",
    ancestors={"Poly_Triangulation": ["Standard_Transient"]},
    referenced_classes=[
      "Geom_Plane",
      "NCollection_HArray1_gp_Pnt",
      "TColgp_Array1OfPnt",
    ],
  )
  scope = _compute_yaml_class_scope(
    _build_config(["Poly_Triangulation"]), str(tmp_path)
  )
  assert "Geom_Plane" in scope, (
    "structural referenced_classes lift regression: non-NCollection "
    "non-ancestor identifier Geom_Plane must be lifted into scope "
    "from the fragment's serialised referenced_classes list"
  )
  assert "NCollection_HArray1_gp_Pnt" in scope
  assert "TColgp_Array1OfPnt" in scope
  assert "Standard_Transient" in scope, (
    "ancestor lift must keep working alongside the new structural lift"
  )


def test_compute_yaml_class_scope_tolerates_missing_referenced_classes(tmp_path) -> None:
  """Backwards-compat: pre-R1 fragments (no `referenced_classes` key) must
  not crash the link. The lift no-ops cleanly when the field is absent —
  the rest of the scope (direct bindings, ancestor chains, custom sentinel)
  is unaffected. Required so a partial rebuild against an older bindings
  tree degrades gracefully instead of failing the link with a KeyError.
  """
  _write_dts_fragment(
    str(tmp_path),
    "FoundationClasses/TKMath/gp",
    "gp_Pnt",
    ancestors={"gp_Pnt": []},
  )
  scope = _compute_yaml_class_scope(_build_config(["gp_Pnt"]), str(tmp_path))
  assert {"gp_Pnt", _CUSTOM_CODE_SOURCE_TAG} <= scope


# ----------------------------------------------------------------------------
# `_filter_auto_symbols_by_scope` — reachability intersection + transitive
# closure + fail-loud guard.
# ----------------------------------------------------------------------------


def _write_manifest(tmp_path, declarations):
  manifest_path = os.path.join(str(tmp_path), "ncollection-manifest.json")
  with open(manifest_path, "w") as f:
    json.dump(
      {
        "symbols": sorted(d["mangled_name"] for d in declarations),
        "declarations": declarations,
      },
      f,
    )
  return manifest_path


def test_filter_keeps_entries_whose_source_intersects_yaml_scope(tmp_path) -> None:
  manifest = _write_manifest(tmp_path, [
    {
      "mangled_name": "NCollection_Array1_gp_Pnt",
      "container": "NCollection_Array1",
      "args": ["gp_Pnt"],
      "source_classes": ["TColgp_Array1OfPnt"],
    },
  ])
  kept = _filter_auto_symbols_by_scope(manifest, {"TColgp_Array1OfPnt"})
  assert kept == {"NCollection_Array1_gp_Pnt"}


def test_filter_drops_entries_whose_source_is_out_of_scope(tmp_path) -> None:
  manifest = _write_manifest(tmp_path, [
    {
      "mangled_name": "NCollection_DynamicArray_BRepGraphInc_VertexRef",
      "container": "NCollection_DynamicArray",
      "args": ["BRepGraphInc_VertexRef"],
      "source_classes": ["BRepGraph_FacesOfEdge"],
    },
  ])
  kept = _filter_auto_symbols_by_scope(manifest, {"gp_Pnt", "TopoDS_Shape"})
  assert kept == set()


def test_filter_keeps_when_any_of_multiple_sources_in_scope(tmp_path) -> None:
  """R1 dedup aggregates sources per canonical key — the filter passes
  the entry through as soon as ANY source is in scope."""
  manifest = _write_manifest(tmp_path, [
    {
      "mangled_name": "NCollection_Array1_TopoDS_Shape",
      "container": "NCollection_Array1",
      "args": ["TopoDS_Shape"],
      "source_classes": ["TopoDS_HShape", "TopoDS_Iterator"],
    },
  ])
  # Only TopoDS_Iterator in scope — still kept.
  kept = _filter_auto_symbols_by_scope(manifest, {"TopoDS_Iterator"})
  assert kept == {"NCollection_Array1_TopoDS_Shape"}


def test_filter_includes_transitive_nested_ncollections(tmp_path) -> None:
  """`NCollection_DataMap<TopoDS_Shape, NCollection_List_TopoDS_Shape>`
  must be kept iff the inner `NCollection_List_TopoDS_Shape` is kept,
  even if the outer entry has no direct source intersection."""
  manifest = _write_manifest(tmp_path, [
    {
      "mangled_name": "NCollection_List_TopoDS_Shape",
      "container": "NCollection_List",
      "args": ["TopoDS_Shape"],
      "source_classes": ["TopoDS_Iterator"],
    },
    {
      "mangled_name": "NCollection_DataMap_TopoDS_Shape_NCollection_List_TopoDS_Shape",
      "container": "NCollection_DataMap",
      "args": ["TopoDS_Shape", "NCollection_List_TopoDS_Shape"],
      # No direct source intersect with scope — kept only via transitive closure.
      "source_classes": ["UnboundClass"],
    },
  ])
  kept = _filter_auto_symbols_by_scope(manifest, {"TopoDS_Iterator"})
  assert "NCollection_List_TopoDS_Shape" in kept
  assert "NCollection_DataMap_TopoDS_Shape_NCollection_List_TopoDS_Shape" in kept


def test_filter_respects_custom_sentinel(tmp_path) -> None:
  manifest = _write_manifest(tmp_path, [
    {
      "mangled_name": "NCollection_Array1_RandomCustomType",
      "container": "NCollection_Array1",
      "args": ["RandomCustomType"],
      "source_classes": [_CUSTOM_CODE_SOURCE_TAG],
    },
  ])
  kept = _filter_auto_symbols_by_scope(manifest, {_CUSTOM_CODE_SOURCE_TAG, "gp_Pnt"})
  assert kept == {"NCollection_Array1_RandomCustomType"}


def test_filter_fails_loud_when_source_classes_field_missing(tmp_path) -> None:
  """No backwards-compat fallback — pre-R1 manifests must be regenerated.
  Per audit's 'no shortcuts on unreleased APIs' principle."""
  manifest = _write_manifest(tmp_path, [
    {
      "mangled_name": "NCollection_Array1_gp_Pnt",
      "container": "NCollection_Array1",
      "args": ["gp_Pnt"],
      # source_classes intentionally missing — simulates a stale manifest.
    },
  ])
  with pytest.raises(RuntimeError, match="source_classes"):
    _filter_auto_symbols_by_scope(manifest, {"gp_Pnt"})


def test_filter_returns_empty_when_manifest_missing(tmp_path) -> None:
  """A fresh workspace without a manifest yields the empty set so the
  link step's first run on a clean tree doesn't crash."""
  assert _filter_auto_symbols_by_scope(
    os.path.join(str(tmp_path), "no-manifest.json"), {"gp_Pnt"}
  ) == set()


# ----------------------------------------------------------------------------
# R5 — `verifyBindings` demotion: alias-resolved missing-binding WARNING
# should fire as INFO instead, with the canonical mangled name appended.
# ----------------------------------------------------------------------------


def _write_compiled_bindings_tree(tmp_path, compiled_symbols) -> str:
  """Lay out a minimal `compiled-bindings/<sym>.cpp.o` tree the way
  `manifest_registry.collect_compiled_symbols` expects. Returns the
  libraryBasePath that `verifyBindings` accepts.
  """
  compiled_dir = os.path.join(str(tmp_path), "compiled-bindings")
  os.makedirs(compiled_dir, exist_ok=True)
  for sym in compiled_symbols:
    # Touch a 0-byte `.cpp.o` so the walker counts the stem.
    with open(os.path.join(compiled_dir, f"{sym}.cpp.o"), "wb"):
      pass
  return str(tmp_path)


def _write_bind_symbols_manifest(tmp_path, symbols=()) -> None:
  """Write a stub `additional-bind-symbols.json` next to `compiled-bindings/`.

  V3 RE-SHIP made the bind-symbols stage a hard prerequisite for any
  link/validate path — `builtin_binding_symbols` now raises
  `ManifestSchemaError` when the file is missing. Tests that exercise
  `verifyBindings` must therefore stand up a v1 manifest in their tmp
  fixture even when the test itself doesn't care about builtin
  registrations.
  """
  from ocjs_bindgen.link.manifest_registry import ADDITIONAL_BIND_SYMBOLS_SCHEMA

  manifest_path = os.path.join(str(tmp_path), "additional-bind-symbols.json")
  with open(manifest_path, "w") as f:
    json.dump(
      {
        "schema": ADDITIONAL_BIND_SYMBOLS_SCHEMA,
        "symbols": sorted(symbols),
      },
      f,
    )


def _write_ncollection_manifest(tmp_path, declarations) -> None:
  """Write `ncollection-manifest.json` next to `compiled-bindings/` so
  `manifest_registry.load_ncollection_alias_index` can build the
  typedef-alias index.

  V1 RE-SHIP: serialises the v2 schema with the explicit
  ``template_typedefs`` alias map derived from each declaration's
  ``source_classes``. Without the v2 discriminator,
  ``load_ncollection_alias_index`` hard-fails.
  """
  from ocjs_bindgen.discover import NCOLLECTION_MANIFEST_SCHEMA

  template_typedefs: dict[str, str] = {}
  for decl in declarations:
    mangled = decl["mangled_name"]
    for alias in decl.get("source_classes", []):
      template_typedefs[alias] = mangled

  manifest_path = os.path.join(str(tmp_path), "ncollection-manifest.json")
  with open(manifest_path, "w") as f:
    json.dump(
      {
        "schema": NCOLLECTION_MANIFEST_SCHEMA,
        "symbols": sorted(d["mangled_name"] for d in declarations),
        "declarations": declarations,
        "template_typedefs": dict(sorted(template_typedefs.items())),
      },
      f,
    )


def test_verify_bindings_demotes_alias_resolved_to_info(tmp_path, capsys) -> None:
  """R5 — when a missing binding is an NCollection typedef alias whose
  canonical mangled spelling IS compiled, `verifyBindings` must emit an
  INFO line (not WARNING) so operators see the link-time alias
  substitution without the warning stream blowing up.

  Smoking-gun fixture: `TColgp_Array1OfPnt` is a typedef for
  `NCollection_Array1<gp_Pnt>`; the manifest's `source_classes` field
  records that mapping; the canonical `NCollection_Array1_gp_Pnt.cpp.o`
  exists; the user's YAML asks for `TColgp_Array1OfPnt`. Verifier must
  recognise this and not warn.
  """
  library_base = _write_compiled_bindings_tree(
    tmp_path, ["NCollection_Array1_gp_Pnt", "gp_Pnt"]
  )
  _write_ncollection_manifest(
    tmp_path,
    [
      {
        "mangled_name": "NCollection_Array1_gp_Pnt",
        "container": "NCollection_Array1",
        "args": ["gp_Pnt"],
        "source_classes": ["TColgp_Array1OfPnt"],
      },
    ],
  )
  _write_bind_symbols_manifest(tmp_path)
  verifyBindings(
    [{"symbol": "TColgp_Array1OfPnt"}, {"symbol": "gp_Pnt"}],
    library_base,
  )
  captured = capsys.readouterr()
  combined = captured.out + captured.err
  assert "INFO" in combined
  assert "alias-resolved" in combined
  assert "TColgp_Array1OfPnt -> NCollection_Array1_gp_Pnt" in combined
  # WARNING must NOT fire for the alias-resolved case — every missing
  # binding either resolved via alias OR is truly missing, never both.
  assert "WARNING" not in combined


def test_verify_bindings_raises_for_truly_missing(tmp_path, capsys) -> None:
  """V10 — when a missing binding has no canonical alias resolution and
  no Embind builtin registration, `verifyBindings` must hard-fail
  unconditionally. The earlier behaviour (WARNING + optional raise
  gated by `OCJS_STRICT_VERIFY=1`) is gone: the env-var was a silent
  CI regression vector and the alias/builtin filters now bucket every
  legitimate false positive out of `truly_missing` by construction.
  """
  library_base = _write_compiled_bindings_tree(tmp_path, ["gp_Pnt"])
  _write_ncollection_manifest(tmp_path, [])
  _write_bind_symbols_manifest(tmp_path)
  with pytest.raises(RuntimeError, match="SomeClass_That_Was_Never_Compiled"):
    verifyBindings(
      [{"symbol": "SomeClass_That_Was_Never_Compiled"}],
      library_base,
    )
  captured = capsys.readouterr()
  combined = captured.out + captured.err
  assert "ERROR" in combined
  assert "SomeClass_That_Was_Never_Compiled" in combined
  # No alias resolution for this entry — INFO must NOT fire.
  assert "alias-resolved" not in combined


def test_verify_bindings_clean_input_emits_nothing(tmp_path, capsys) -> None:
  """Sanity — every requested binding has a compiled `.o`; the verifier
  is silent (no INFO, no WARNING). Pins the no-op contract so future
  refactors don't accidentally chatter on clean builds.
  """
  library_base = _write_compiled_bindings_tree(
    tmp_path, ["gp_Pnt", "TopoDS_Shape"]
  )
  _write_ncollection_manifest(tmp_path, [])
  verifyBindings(
    [{"symbol": "gp_Pnt"}, {"symbol": "TopoDS_Shape"}],
    library_base,
  )
  captured = capsys.readouterr()
  assert captured.out == ""
  assert captured.err == ""


def test_verify_bindings_accepts_yaml_custom_compiled_object(tmp_path) -> None:
  """A class declared by ``additionalCppFiles`` is compiled into the
  YAML-owned link-work tree, not the global compiled-bindings tree.
  """
  library_base = _write_compiled_bindings_tree(tmp_path, ["TopoDS_Shape"])
  custom_compiled_root = os.path.join(
    str(tmp_path),
    "link-work",
    "fixture-hash",
    "compiled-bindings",
  )
  os.makedirs(custom_compiled_root, exist_ok=True)
  with open(os.path.join(custom_compiled_root, "Test.cpp.o"), "wb"):
    pass
  _write_ncollection_manifest(tmp_path, [])
  _write_bind_symbols_manifest(tmp_path)

  verifyBindings(
    [{"symbol": "TopoDS_Shape"}, {"symbol": "Test"}],
    library_base,
    custom_compiled_root=custom_compiled_root,
  )
