"""Generated contract for modern direct-return OCCT overloads."""

from __future__ import annotations

import json
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
FRAGMENT = (
  REPO_ROOT
  / "build"
  / "bindings"
  / "ModelingAlgorithms"
  / "TKShHealing"
  / "ShapeAnalysis"
  / "ShapeAnalysis_FreeBounds.hxx"
)


def test_connect_edges_to_wires_uses_only_the_modern_overload() -> None:
  cpp = (FRAGMENT / "ShapeAnalysis_FreeBounds.cpp").read_text()
  declaration = json.loads(
    (FRAGMENT / "ShapeAnalysis_FreeBounds.d.ts.json").read_text()
  )[".d.ts"]

  assert cpp.count('.class_function("ConnectEdgesToWires"') == 1
  assert "select_overload<occ::handle<NCollection_HSequence<TopoDS_Shape>>" in cpp
  assert declaration.count("static ConnectEdgesToWires(") == 1
  assert "ConnectEdgesToWires_" not in declaration
  assert (
    "static ConnectEdgesToWires(edges: NCollection_HSequence_TopoDS_Shape, "
    "toler: number, shared: boolean): NCollection_HSequence_TopoDS_Shape;"
    in declaration
  )
  assert "{ wires: NCollection_HSequence_TopoDS_Shape" not in declaration
