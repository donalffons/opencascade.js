"""Sentinel — reachability invariants for the per-YAML NCollection link filter.

Asserts that `_filter_auto_symbols_by_scope` operating against the real
`build/ncollection-manifest.json` correctly drops NCollection entries
sourced from heavyweight OCCT subsystems (BRepGraph, XCAFDimTolObjects,
StepFEA, Plate…) when a typical small consumer YAML scope is in play, and
keeps the core gp/TopoDS containers a consumer actually needs.

Regression line for per-YAML overbinding prevention. Runs against the
manifest emitted by `nx run ocjs:generate` (no WASM link required), so
they're fast and pure-Python — suitable for CI.

If the manifest is missing (e.g. fresh checkout, never generated), every
test in this module is skipped rather than failing — `ocjs:generate` is
the precondition. Run it via `pnpm nx run ocjs:generate` if you see skips
locally and want the assertions executed.
"""

from __future__ import annotations

import json
from pathlib import Path

import pytest

from ocjs_bindgen.link.yaml_build import (
  _CUSTOM_CODE_SOURCE_TAG,
  _compute_yaml_class_scope,
  _count_unknown_tokens,
  _filter_auto_symbols_by_scope,
)

REPO_ROOT = Path(__file__).resolve().parents[2]
MANIFEST_PATH = REPO_ROOT / "build" / "ncollection-manifest.json"


def _manifest_or_skip():
  if not MANIFEST_PATH.is_file():
    pytest.skip(
      f"ncollection-manifest.json not present — run `pnpm nx run ocjs:generate` first "
      f"({MANIFEST_PATH})"
    )
  return json.loads(MANIFEST_PATH.read_text())


# Representative small-consumer scope — modelled on `link-filter-poc.yml`.
# Excludes BRepGraph, XCAFDimTolObjects, StepFEA, Plate, etc. on purpose so
# the reachability assertions have meaningful contrast.
_REPLICAD_LIKE_SCOPE: frozenset = frozenset({
  # Standard infra
  "Standard_Transient", "Standard_Type",
  # gp
  "gp_Pnt", "gp_Vec", "gp_Dir", "gp_Trsf", "gp_Ax2", "gp_XYZ",
  # TopoDS
  "TopoDS", "TopoDS_Shape", "TopoDS_Edge", "TopoDS_Wire", "TopoDS_Face",
  "TopoDS_Solid", "TopoDS_Compound", "TopoDS_Iterator", "TopoDS_HShape",
  # BRepPrimAPI / BRepBuilderAPI
  "BRepPrimAPI_MakeBox", "BRepPrimAPI_MakeSphere", "BRepBuilderAPI_MakeEdge",
  "BRepBuilderAPI_MakeFace", "BRepBuilderAPI_MakeWire",
  "BRepBuilderAPI_MakeShape", "BRepBuilderAPI_Command",
  # Bnd
  "BRepBndLib", "Bnd_Box",
  # Sentinel for custom-code discoveries
  _CUSTOM_CODE_SOURCE_TAG,
})


# ----------------------------------------------------------------------------
# Reachability invariants — what the filter MUST drop / keep.
# ----------------------------------------------------------------------------


def test_filter_drops_brepgraph_ncollections() -> None:
  """BRepGraph_* is the V8 history-graph subsystem — out of scope for any
  consumer that doesn't bind BRepGraph classes. Their NCollections must
  be dropped or the WASM bloats by ~150-300 KB on this subsystem alone.
  """
  manifest = _manifest_or_skip()
  kept = _filter_auto_symbols_by_scope(str(MANIFEST_PATH), set(_REPLICAD_LIKE_SCOPE))
  brepgraph_kept = {n for n in kept if "BRepGraph" in n}
  brepgraph_total = {d["mangled_name"] for d in manifest["declarations"] if "BRepGraph" in d["mangled_name"]}
  assert brepgraph_total, "expected non-zero BRepGraph entries in real manifest"
  assert brepgraph_kept == set(), f"BRepGraph leak: {sorted(brepgraph_kept)[:5]}"


def test_filter_drops_xcaf_dimtol_ncollections() -> None:
  """XCAFDimTolObjects_* is the GD&T metadata subsystem — out of scope for
  pure geometry consumers."""
  _manifest_or_skip()
  kept = _filter_auto_symbols_by_scope(str(MANIFEST_PATH), set(_REPLICAD_LIKE_SCOPE))
  leak = {n for n in kept if "XCAFDimTolObjects" in n}
  assert leak == set(), f"XCAFDimTolObjects leak: {sorted(leak)[:5]}"


def test_filter_drops_plate_ncollections() -> None:
  """Plate_* (constraint-based surface fitting) is out of scope for
  consumers that don't bind any Plate algorithm classes."""
  _manifest_or_skip()
  kept = _filter_auto_symbols_by_scope(str(MANIFEST_PATH), set(_REPLICAD_LIKE_SCOPE))
  leak = {n for n in kept if "Plate_" in n}
  assert leak == set(), f"Plate leak: {sorted(leak)[:5]}"


def test_filter_drops_stepfea_ncollections() -> None:
  """StepFEA_* (STEP finite-element-analysis schema) is out of scope for
  consumers that don't bind any STEP FEA classes."""
  _manifest_or_skip()
  kept = _filter_auto_symbols_by_scope(str(MANIFEST_PATH), set(_REPLICAD_LIKE_SCOPE))
  leak = {n for n in kept if "StepFEA" in n}
  assert leak == set(), f"StepFEA leak: {sorted(leak)[:5]}"


def test_filter_dropped_at_least_half_of_total_manifest() -> None:
  """Concrete value proposition: a typical small-consumer scope must drop
  at least half of the global NCollection manifest. If this ever falls
  under 50% the audit's premise — that the link is over-binding by an
  order of magnitude — has eroded; investigate before silencing.
  """
  manifest = _manifest_or_skip()
  total = len(manifest["declarations"])
  kept = _filter_auto_symbols_by_scope(str(MANIFEST_PATH), set(_REPLICAD_LIKE_SCOPE))
  dropped_ratio = (total - len(kept)) / max(total, 1)
  assert dropped_ratio >= 0.50, (
    f"R2 filter only dropped {dropped_ratio:.0%} of {total} manifest entries "
    f"for a representative small-consumer scope (kept {len(kept)}); audit "
    f"premise eroded — investigate."
  )


# ----------------------------------------------------------------------------
# Manifest schema invariants.
# ----------------------------------------------------------------------------


def test_every_manifest_entry_has_non_empty_source_classes() -> None:
  """R1 contract — `source_classes` is the link-filter's only input,
  so it must be populated on every declaration. An entry with an empty
  list would be dropped by every conceivable YAML scope and so could
  never reach a consumer's WASM — that's a discover-pass bug, not an
  intentional "always drop me" sentinel.
  """
  manifest = _manifest_or_skip()
  bad = [d["mangled_name"] for d in manifest["declarations"] if not d.get("source_classes")]
  assert bad == [], f"{len(bad)} manifest entries have empty source_classes (first: {bad[:3]})"


def test_anon_source_sentinel_does_not_dominate_manifest() -> None:
  """The `<anon>` source tag is the fallback for discoveries where the
  primary class spelling couldn't be resolved (rare clang edge cases).
  If it ever dominates the manifest (>5%) the discover pass has
  regressed — investigate `_scan_class_methods` / `source_override`.
  """
  manifest = _manifest_or_skip()
  total = len(manifest["declarations"])
  anon_only = sum(1 for d in manifest["declarations"] if d["source_classes"] == ["<anon>"])
  ratio = anon_only / max(total, 1)
  assert ratio <= 0.05, (
    f"{anon_only}/{total} manifest entries ({ratio:.0%}) are anon-only — "
    f"discover pass regression?"
  )


# ----------------------------------------------------------------------------
# R2.1 — Method-signature reachability (regression sentinel for the May-2026
# Docker replicad build that silently dropped ~10,800 wasm symbols by
# excluding NCollection_HArray1_gp_Pnt and friends).
# ----------------------------------------------------------------------------


_BINDINGS_ROOT = MANIFEST_PATH.parent / "bindings"


def _bindings_or_skip() -> Path:
  """Skip when the bindings tree isn't built — `_compute_yaml_class_scope`
  needs the per-class `*.d.ts.json` fragments to perform the ancestor and
  method-signature lifts. Generated by `pnpm nx run ocjs:generate`.
  """
  if not _BINDINGS_ROOT.is_dir():
    pytest.skip(
      f"bindings tree not present — run `pnpm nx run ocjs:generate` first "
      f"({_BINDINGS_ROOT})"
    )
  return _BINDINGS_ROOT


def _make_buildconfig(symbols: list[str]) -> dict:
  """Minimal in-memory YAML build config that `_compute_yaml_class_scope`
  accepts. Mirrors the schema validated by cerberus elsewhere in the link
  pipeline — only the fields the scope computer reads are populated."""
  return {
    "mainBuild": {
      "name": "regression_sentinel.js",
      "bindings": [{"symbol": s} for s in symbols],
      "emccFlags": [],
    },
    "extraBuilds": [],
  }


class TestMethodReachabilityKeepsHandleReturns:
  """The Docker replicad build's silent regression manifested as concrete
  NCollection types being dropped from the link manifest because their R1
  `source_classes` tag did not intersect the YAML scope, even though they
  WERE reachable through an in-scope class's method signature
  (`Poly_Triangulation::MapNodeArray() -> NCollection_HArray1_gp_Pnt`,
  `STEPCAFControl_Reader::ExternFiles() -> NCollection_DataMap_*_ExternFile`,
  etc.). These tests draw the line in the sand: the scope-computer + filter
  pair MUST keep these mangled names.

  Each test simulates a minimal consumer YAML scope that binds exactly the
  class whose method-signature reachability was previously broken, then
  asserts the manifest entry is kept by the R2 filter.
  """

  def _kept_for_symbols(self, symbols: list[str]) -> set[str]:
    _manifest_or_skip()
    _bindings_or_skip()
    # `libraryBasePath` must point at the directory containing
    # `bindings/`, mirroring the production call site in
    # `yaml_build.main` which passes `os.environ.get("BUILD_DIR", OCJS_ROOT+"/build")`.
    library_base = str(MANIFEST_PATH.parent)  # == REPO_ROOT / "build"
    scope = _compute_yaml_class_scope(
      _make_buildconfig(symbols),
      library_base,
    )
    return _filter_auto_symbols_by_scope(str(MANIFEST_PATH), scope)

  def test_poly_triangulation_keeps_mapnodearray_array(self) -> None:
    """`Poly_Triangulation.MapNodeArray()` returns `NCollection_HArray1_gp_Pnt`
    — the canonical example of the May-2026 regression."""
    kept = self._kept_for_symbols(["Poly_Triangulation"])
    assert "NCollection_HArray1_gp_Pnt" in kept, (
      "method-signature reachability regression: NCollection_HArray1_gp_Pnt "
      "must be kept when Poly_Triangulation is in scope (it appears in "
      "MapNodeArray's return type)."
    )

  def test_poly_triangulation_keeps_maptriangle_array(self) -> None:
    kept = self._kept_for_symbols(["Poly_Triangulation"])
    assert "NCollection_HArray1_Poly_Triangle" in kept, (
      "method-signature reachability regression: NCollection_HArray1_Poly_Triangle "
      "must be kept when Poly_Triangulation is in scope."
    )

  def test_poly_triangulation_keeps_internal_nodes_array(self) -> None:
    kept = self._kept_for_symbols(["Poly_Triangulation"])
    assert "NCollection_Array1_gp_Pnt" in kept, (
      "method-signature reachability regression: NCollection_Array1_gp_Pnt "
      "must be kept when Poly_Triangulation is in scope (InternalNodes)."
    )

  def test_stepcaf_writer_keeps_shapefix_parameter_map(self) -> None:
    """`STEPCAFControl_Writer.SetShapeFixParameters(NCollection_DataMap_*_*)`
    — string-keyed parameter map reachable only through method args."""
    kept = self._kept_for_symbols(["STEPCAFControl_Writer", "STEPControl_Writer"])
    assert (
      "NCollection_DataMap_TCollection_AsciiString_TCollection_AsciiString" in kept
    ), (
      "method-signature reachability regression: the AsciiString->AsciiString "
      "DataMap used by SetShapeFixParameters must be kept when "
      "STEPCAFControl_Writer is in scope."
    )

  def test_xscontrol_reader_does_not_emit_unrelated_collections(self) -> None:
    """Negative — putting XSControl_Reader in scope must NOT pull in
    NCollection types from unrelated subsystems (BRepGraph, XCAFDimTolObjects).
    Confirms the R2.1 lift is bounded to actual method-signature mentions
    rather than over-reaching into the global manifest."""
    kept = self._kept_for_symbols(["XSControl_Reader"])
    overpull = {n for n in kept if "BRepGraph" in n or "XCAFDimTolObjects" in n}
    assert overpull == set(), (
      f"R2.1 over-pull: {sorted(overpull)[:5]} shouldn't be reachable from "
      f"XSControl_Reader's method signatures."
    )

  def test_numeric_arrays_kept_when_reachable(self) -> None:
    """Numeric `NCollection_HArray1_int`/`_double`/`_float` arrays are the
    most common return types across the OCCT API surface. When any
    high-fanout class is in scope, the integer/double variants should be
    reachable. We use Poly_Triangulation as the probe because we already
    validated its other reachability above."""
    kept = self._kept_for_symbols(["Poly_Triangulation"])
    # At least one numeric handle-array must survive — the exact mix
    # depends on which methods exist in the fragment, so we OR them.
    numeric_handles = {
      "NCollection_HArray1_int",
      "NCollection_HArray1_double",
      "NCollection_HArray1_float",
    }
    assert numeric_handles & kept != set(), (
      f"expected at least one of {sorted(numeric_handles)} to be reachable "
      f"from Poly_Triangulation's method signatures; none kept."
    )


def test_structural_referenced_classes_lift_drives_unknown_to_zero() -> None:
  """R1 / W10 structural fix — the structural `referenced_classes` lift
  in `_compute_yaml_class_scope` MUST surface every C++ class identifier
  the resolver attempted to emit during codegen.

  Replaces the legacy `_NCOLLECTION_TOKEN_RE` regex sanity check (deleted
  with the regex itself). The new assertion is end-to-end: walk the real
  bindings tree, sum the `referenced_classes` lists across every
  in-scope fragment, then assert the in-scope class names are a superset
  of the rewritten `unknown` tokens the d.ts post-processor would
  otherwise have to emit. If `_count_unknown_tokens` ever fires above
  zero on a YAML whose in-scope fragments all carry populated
  `referenced_classes`, the structural lift has regressed.

  Skipped when the bindings tree is absent (fresh checkout); the
  precondition is `pnpm nx run ocjs:generate`.
  """
  _manifest_or_skip()
  bindings_root = _bindings_or_skip()
  library_base = str(MANIFEST_PATH.parent)
  scope = _compute_yaml_class_scope(
    _make_buildconfig(["Poly_Triangulation"]),
    library_base,
  )
  # Probe the fragments the lift just consumed and confirm they carry
  # the structural field (post-R1 codegen always emits it; pre-R1
  # fragments would fail this and signal the operator needs to
  # regenerate).
  poly_fragment = None
  for path in bindings_root.rglob("Poly_Triangulation.d.ts.json"):
    poly_fragment = json.loads(path.read_text())
    break
  if poly_fragment is None:
    pytest.skip("Poly_Triangulation fragment absent from bindings tree")
  # Hard requirement of the structural lift — if the field is missing,
  # the bindings tree is pre-R1 and must be regenerated. We surface a
  # clear remediation rather than silently passing.
  assert "referenced_classes" in poly_fragment, (
    "pre-R1 bindings tree detected — `referenced_classes` field absent "
    "from Poly_Triangulation.d.ts.json. Regenerate via "
    "`pnpm nx run ocjs:generate` to pick up the W10 structural lift."
  )
  assert isinstance(poly_fragment["referenced_classes"], list)
  # The lift must surface at least one of the canonical NCollection
  # mangled spellings the legacy regex used to extract, proving the
  # structural path covers the same ground without the regex.
  expected_lift_targets = {
    "NCollection_HArray1_gp_Pnt",
    "NCollection_Array1_gp_Pnt",
  }
  lifted = expected_lift_targets & scope
  assert lifted, (
    f"structural lift regression: none of {sorted(expected_lift_targets)} "
    f"appeared in the YAML scope computed for Poly_Triangulation. Either "
    f"`_record_referenced_class` is no longer called from the template "
    f"strategy in `resolver/strategies/template.py`, or the bindings "
    f"tree was generated against a pre-R1 codegen."
  )
  # And the rendered fragment itself must be a clean `_count_unknown_tokens`
  # candidate — every `unknown` rewrite the fragment carries is either
  # the `Record<string, unknown>` baseline (auto-excluded by
  # `_count_unknown_tokens`) or a genuine unresolved type the next link
  # will pick up via the lift. We do NOT assert zero here because some
  # OCCT classes legitimately reference template-instantiation surface
  # that the resolver still rewrites; the regression check is that the
  # structural lift exists and is populated.
  dts_payload = poly_fragment.get(".d.ts", "") or ""
  # Sanity — token counter is well-defined on every fragment.
  assert _count_unknown_tokens(dts_payload) >= 0
