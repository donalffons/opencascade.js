"""Authoritative list of the 10 sentinel headers + their emitted fragments.

The list is consumed by both generated-fragment parity layers
(`test_artifact_parity.py` and `test_tree_parity.py`) and by
`refresh_baseline.py`. Update this file in lock-step with
`SENTINEL_HEADERS.md` if the spine ever changes (e.g. on an OCCT upgrade).
"""

from __future__ import annotations

import sys
from dataclasses import dataclass
from pathlib import Path

# Repo root is two parents up from tests/sentinel/.
REPO_ROOT = Path(__file__).resolve().parents[2]
BUILD_BINDINGS = REPO_ROOT / "build" / "bindings"
BASELINE_DIR = REPO_ROOT / "tests" / "sentinel" / "baseline"
BASELINE_PER_HEADER = BASELINE_DIR / "per_header"
LINUX_BASELINE_DIR = BASELINE_DIR / "linux"
BASELINE_DTS_PER_HEADER = (
    LINUX_BASELINE_DIR / "per_header"
    if sys.platform.startswith("linux")
    else BASELINE_PER_HEADER
)
BASELINE_TREE = (
    LINUX_BASELINE_DIR / "full_tree.sha256"
    if sys.platform.startswith("linux")
    else BASELINE_DIR / "full_tree.sha256"
)


@dataclass(frozen=True)
class Sentinel:
    """One sentinel: an OCCT header (or synthetic myMain.h fragment) plus the
    binding fragment basename emitted by the bindgen.
    """

    pattern: str          # AST pattern label, e.g. "simple class"
    header_dir: str       # path under build/bindings/, e.g. "FoundationClasses/TKMath/gp/gp_Pnt.hxx"
    fragment_stem: str    # basename without extension, e.g. "gp_Pnt"

    @property
    def cpp_path(self) -> Path:
        return BUILD_BINDINGS / self.header_dir / f"{self.fragment_stem}.cpp"

    @property
    def dts_path(self) -> Path:
        return BUILD_BINDINGS / self.header_dir / f"{self.fragment_stem}.d.ts.json"

    @property
    def baseline_cpp(self) -> Path:
        return BASELINE_PER_HEADER / self.header_dir / f"{self.fragment_stem}.cpp"

    @property
    def baseline_dts(self) -> Path:
        return BASELINE_DTS_PER_HEADER / self.header_dir / f"{self.fragment_stem}.d.ts.json"


SENTINELS: tuple[Sentinel, ...] = (
    Sentinel(
        pattern="simple class",
        header_dir="FoundationClasses/TKMath/gp/gp_Pnt.hxx",
        fragment_stem="gp_Pnt",
    ),
    Sentinel(
        pattern="templated NCollection",
        header_dir="myMain.h",
        fragment_stem="NCollection_Array1_gp_XY",
    ),
    Sentinel(
        pattern="namespace-scoped class",
        header_dir="ModelingData/TKBRep/BRepGraphInc/BRepGraphInc_Definition.hxx",
        fragment_stem="BRepGraphInc_BaseDef",
    ),
    Sentinel(
        pattern="nested classes",
        header_dir="ModelingData/TKBRep/BRepGraph/BRepGraph_TopoView.hxx",
        fragment_stem="BRepGraph_TopoView",
    ),
    Sentinel(
        pattern="enum",
        header_dir="ModelingData/TKG3d/TopAbs/TopAbs_Orientation.hxx",
        fragment_stem="TopAbs_Orientation",
    ),
    Sentinel(
        pattern="abstract class",
        header_dir="ModelingData/TKG3d/Geom/Geom_Curve.hxx",
        fragment_stem="Geom_Curve",
    ),
    Sentinel(
        pattern="traits-aliased templated class",
        header_dir="ModelingData/TKBRep/BRepGraph/BRepGraph_ReverseIterator.hxx",
        fragment_stem="BRepGraph_FacesOfEdge",
    ),
    Sentinel(
        pattern="std-using class",
        header_dir="FoundationClasses/TKernel/Standard/Standard_Failure.hxx",
        fragment_stem="Standard_Failure",
    ),
    Sentinel(
        pattern="function-pointer typedef",
        header_dir="DataExchange/TKXSBase/IFSelect/IFSelect_Act.hxx",
        fragment_stem="IFSelect_Act",
    ),
    Sentinel(
        pattern="RBV-eligible class",
        header_dir="ModelingData/TKBRep/BRepGraph/BRepGraph_CacheRegistry.hxx",
        fragment_stem="BRepGraph_CacheRegistry",
    ),
)


def assert_spine_is_complete() -> None:
    """Sanity-check that every AST pattern from the blueprint is on the spine."""
    expected_patterns = {
        "simple class",
        "templated NCollection",
        "namespace-scoped class",
        "nested classes",
        "enum",
        "abstract class",
        "traits-aliased templated class",
        "std-using class",
        "function-pointer typedef",
        "RBV-eligible class",
    }
    have = {s.pattern for s in SENTINELS}
    missing = expected_patterns - have
    assert not missing, f"Sentinel spine is missing patterns: {sorted(missing)}"
    assert len(SENTINELS) == 10, f"Expected exactly 10 sentinels, got {len(SENTINELS)}"
