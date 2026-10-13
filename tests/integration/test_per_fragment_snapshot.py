"""Per-fragment snapshot test (PR 3.3).

Confirms that the two simplest spine sentinels — `gp_Pnt` (simple class)
and `Standard_Failure` (std-using class) — are byte-identical to their
frozen baselines. Reuses the byte-parity helpers from
`tests/sentinel/sentinels.py` so the asserter and baseline coordinates
stay in lock-step.

Cost: <1 s when `build/bindings/` is warm; skips with a clear pointer
when no fragments are present.

This is the cheap fast-cycle regression checkpoint for the whole
generate path. The full 10-spine sentinel suite remains in
`tests/sentinel/test_artifact_parity.py` and runs in CI exit
validation.
"""

from __future__ import annotations

import filecmp
import sys
from pathlib import Path

import pytest

# `tests/sentinel/sentinels.py` carries the canonical Sentinel + path
# definitions. Make it importable here without forcing the user to set
# PYTHONPATH.
_HERE = Path(__file__).resolve().parent
_SENTINEL_DIR = _HERE.parent / "sentinel"
if str(_SENTINEL_DIR) not in sys.path:
  sys.path.insert(0, str(_SENTINEL_DIR))

from sentinels import BUILD_BINDINGS, SENTINELS, Sentinel  # noqa: E402

# Pick the two cheapest, most-coverage-dense fragments. `gp_Pnt` is the
# canonical simple class; `Standard_Failure` exercises the std-using
# constructor + handle wiring.
_TARGETED_PATTERNS = {"simple class", "std-using class"}
_TARGETED: tuple[Sentinel, ...] = tuple(
  s for s in SENTINELS if s.pattern in _TARGETED_PATTERNS
)


def _bindings_present() -> bool:
  return BUILD_BINDINGS.is_dir() and any(BUILD_BINDINGS.iterdir())


@pytest.fixture(scope="module", autouse=True)
def _require_bindings() -> None:
  if not _bindings_present():
    pytest.skip(
      f"build/bindings/ is empty at {BUILD_BINDINGS}. "
      "Run `nx run ocjs:generate` to populate it before this test."
    )


@pytest.mark.parametrize("sentinel", _TARGETED, ids=lambda s: s.fragment_stem)
def test_cpp_fragment_byte_identical(sentinel: Sentinel) -> None:
  fresh = sentinel.cpp_path
  baseline = sentinel.baseline_cpp
  assert fresh.is_file(), f"Missing fresh fragment: {fresh}"
  assert baseline.is_file(), f"Missing baseline: {baseline}"
  assert filecmp.cmp(fresh, baseline, shallow=False), (
    f"\n  [{sentinel.pattern}] {sentinel.fragment_stem}.cpp drifted from baseline."
    f"\n    fresh:    {fresh}"
    f"\n    baseline: {baseline}"
  )


@pytest.mark.parametrize("sentinel", _TARGETED, ids=lambda s: s.fragment_stem)
def test_dts_fragment_byte_identical(sentinel: Sentinel) -> None:
  fresh = sentinel.dts_path
  baseline = sentinel.baseline_dts
  assert fresh.is_file(), f"Missing fresh fragment: {fresh}"
  assert baseline.is_file(), f"Missing baseline: {baseline}"
  assert filecmp.cmp(fresh, baseline, shallow=False), (
    f"\n  [{sentinel.pattern}] {sentinel.fragment_stem}.d.ts.json drifted from baseline."
    f"\n    fresh:    {fresh}"
    f"\n    baseline: {baseline}"
  )


# ---------------------------------------------------------------------------
# R1 content assertions — verify the recursive class walker produces the
# expected inner-class registrations. This sits ALONGSIDE the byte-parity
# test rather than replacing it, because R1 deliberately moves bytes for
# the `nested classes` sentinel and we want a positive-content probe that
# survives the rebaseline.
# ---------------------------------------------------------------------------


_TOPO_VIEW = next(s for s in SENTINELS if s.pattern == "nested classes")


_EXPECTED_TOPOVIEW_INNER_CLASSES = (
  "FaceOps",
  "EdgeOps",
  "WireOps",
  "VertexOps",
  "CoEdgeOps",
  "ShellOps",
  "SolidOps",
  "CompoundOps",
  "CompSolidOps",
  "ProductOps",
  "OccurrenceOps",
  "GenOps",
  "GeometryOps",
)


@pytest.mark.parametrize("inner_class", _EXPECTED_TOPOVIEW_INNER_CLASSES)
def test_topoview_nested_class_registered_in_cpp(inner_class: str) -> None:
  """R1.a — `BRepGraph::TopoView::<*Ops>` inner classes must each have a
  fragment emitted by the recursive class walker.

  Before R1 the walker stopped at the namespace boundary, so each of
  these inner classes was silently dropped. After R1 the walker
  recurses into PUBLIC class bodies, so every Ops type is enumerated
  and gets its own per-fragment `.cpp` (or appears as a
  `class_<BRepGraph::TopoView::<Ops>>` block inside the TopoView
  fragment). This test asserts the latter — at minimum, the inner
  class spelling must appear inside the TopoView fragment OR as a
  separate fragment file.
  """
  fragment_dir = _TOPO_VIEW.cpp_path.parent
  if not fragment_dir.is_dir():
    pytest.skip(f"Fragment dir absent: {fragment_dir}")

  cpp_files = list(fragment_dir.glob("*.cpp"))
  assert cpp_files, f"No .cpp fragments under {fragment_dir}"

  found = False
  for cpp in cpp_files:
    body = cpp.read_text(encoding="utf-8", errors="replace")
    if (
      f"class_<BRepGraph::TopoView::{inner_class}>" in body
      or f"BRepGraph_TopoView_{inner_class}" in body
    ):
      found = True
      break
  assert found, (
    f"R1 expectation: inner class BRepGraph::TopoView::{inner_class} "
    f"must produce a class_<…> registration or appear as a "
    f"BRepGraph_TopoView_{inner_class} reference somewhere in "
    f"{fragment_dir}/*.cpp. Found none — the recursive class walker "
    f"is not enumerating the TopoView body."
  )


def test_topoview_dts_references_full_inner_class_names() -> None:
  """R1.b/c — the per-fragment `.d.ts.json` for `TopoView` must reference
  inner classes by their FULL public name (`BRepGraph_TopoView_FaceOps`,
  not the truncated `TopoView_FaceOps`). This is the runtime contract
  audit Finding 2 calls out: a truncated name in the `.d.ts.json` causes
  the link-time `_replace_undeclared_with_unknown` rewriter to collapse
  the reference to `unknown` because no top-level class with that
  spelling is declared.
  """
  dts_path = _TOPO_VIEW.dts_path
  if not dts_path.is_file():
    pytest.skip(f"TopoView .d.ts.json absent: {dts_path}")
  body = dts_path.read_text(encoding="utf-8", errors="replace")

  # At least one inner-class reference MUST use the fully-qualified
  # public name. We don't pin every Ops class because some may not be
  # mentioned by the TopoView fragment itself (they are emitted as
  # standalone fragments via the walker).
  assert any(
    f"BRepGraph_TopoView_{inner}" in body
    for inner in _EXPECTED_TOPOVIEW_INNER_CLASSES
  ), (
    "R1.b/c expectation: TopoView .d.ts.json must reference inner Ops "
    "classes by their fully-qualified `BRepGraph_TopoView_<Ops>` public "
    "name. Found none — the encoder / nested-type resolver is still "
    "producing one-level (truncated) names."
  )
