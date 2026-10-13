"""
Frontier OCCT workloads using build123d + OCP (mirrors ocjs/samples.mjs and
native/samples.cpp).

Every sample that batches >1 boolean operation uses the canonical
`BRepAlgoAPI_BuilderAlgo` multi-tool form (`SetArguments + SetTools + Build`)
— the iterative `Op(prev, next)` chain is the previous-baseline anti-pattern
(preserved historically in F13's per-engine 09b/09 + 10b/10 ratios). See
F14 — Frontier benchmark sample.
Performance — is the canonical comparison and uses these samples directly.

Each function builds geometry and touches the result so work is not DCE'd.
"""

from __future__ import annotations

from build123d.geometry import Location, Vector
from build123d.topology import Edge, Face, Solid, Wire

from OCP.BRepAlgoAPI import BRepAlgoAPI_Cut, BRepAlgoAPI_Fuse
from OCP.BRepMesh import BRepMesh_IncrementalMesh
from OCP.BRepPrimAPI import BRepPrimAPI_MakeBox, BRepPrimAPI_MakeCylinder
from OCP.gp import gp_Ax2, gp_Dir, gp_Pnt
from OCP.Message import Message_ProgressRange
from OCP.TopAbs import TopAbs_ShapeEnum
from OCP.TopExp import TopExp_Explorer
from OCP.TopTools import TopTools_ListOfShape


def _touch_solid(s: Solid) -> bool:
    return s.wrapped is not None and not s.wrapped.IsNull()


def sample01_primitive_box() -> None:
    s = Solid.make_box(10, 20, 30)
    assert _touch_solid(s)


def sample02_primitive_cylinder() -> None:
    s = Solid.make_cylinder(5, 15)
    assert _touch_solid(s)


def sample03_boolean_fuse() -> None:
    a = Solid.make_box(10, 10, 10)
    b = Solid.make_box(5, 5, 5)
    r = a.fuse(b)
    assert r.wrapped is not None


def sample04_boolean_cut_grid() -> None:
    """Multi-tool BRepAlgoAPI_Cut: 1 BOPDS init over base + 25 cylinders.

    Replaces the previous iterative `s = s.cut(cyl)` chain that ran 25 separate
    BOPDS inits. See F14 in build123d-vs-ocjs-wasm-performance.md.
    """
    base = BRepPrimAPI_MakeBox(100, 100, 10).Shape()
    tool_shapes = []
    for i in range(5):
        for j in range(5):
            origin = gp_Pnt(10 + i * 20, 10 + j * 20, -5)
            ax = gp_Ax2(origin, gp_Dir(0, 0, 1))
            tool_shapes.append(BRepPrimAPI_MakeCylinder(ax, 2, 20).Shape())
    args = TopTools_ListOfShape()
    tools = TopTools_ListOfShape()
    args.Append(base)
    for t in tool_shapes:
        tools.Append(t)
    cut = BRepAlgoAPI_Cut()
    cut.SetArguments(args)
    cut.SetTools(tools)
    cut.Build(Message_ProgressRange())
    out = cut.Shape()
    assert not out.IsNull()


def sample05_loft_thru_sections() -> None:
    profiles = [
        Wire.make_circle(10).moved(Location((0, 0, 0))),
        Wire.make_circle(5).moved(Location((0, 0, 15))),
        Wire.make_circle(8).moved(Location((0, 0, 30))),
    ]
    solid = Solid.make_loft(profiles, ruled=False)
    assert _touch_solid(solid)


def sample06_pipe_shell_sweep() -> None:
    solid = Solid.sweep(
        Wire.make_circle(5),
        Edge.make_line(Vector(0, 0, 0), Vector(0, 0, 30)),
        make_solid=True,
        is_frenet=False,
    )
    assert _touch_solid(solid)


def sample07_surface_filling_patch() -> None:
    pts = [
        Vector(0, 0, 0),
        Vector(10, 0, 0),
        Vector(10, 10, 0),
        Vector(0, 10, 0),
    ]
    edges = [
        Edge.make_line(pts[0], pts[1]),
        Edge.make_line(pts[1], pts[2]),
        Edge.make_line(pts[2], pts[3]),
        Edge.make_line(pts[3], pts[0]),
    ]
    face = Face.make_surface(edges)
    assert face.wrapped is not None


def sample08_fillet_all_edges() -> None:
    solid = Solid.make_box(20, 20, 20)
    edges = solid.edges()
    solid2 = solid.fillet(3, edges)
    assert _touch_solid(solid2)


def _fuse_overlapping_boxes_multi_tool(
    count: int = 40, spacing: float = 3.0, side: float = 4.0
):
    """One-shot multi-tool fuse over `count` overlapping boxes.

    Builds 40 boxes spaced 3 units apart (so each 4-unit box overlaps the next
    by 1 unit), then runs `BRepAlgoAPI_Fuse::SetArguments + SetTools + Build`
    once instead of 39 separate `Fuse(prev, next)` calls. See F13/F14.
    """
    boxes = [
        BRepPrimAPI_MakeBox(gp_Pnt(i * spacing, 0, 0), side, side, side).Shape()
        for i in range(count)
    ]
    args = TopTools_ListOfShape()
    tools = TopTools_ListOfShape()
    args.Append(boxes[0])
    for s in boxes[1:]:
        tools.Append(s)
    fuse = BRepAlgoAPI_Fuse()
    fuse.SetArguments(args)
    fuse.SetTools(tools)
    fuse.Build(Message_ProgressRange())
    return fuse.Shape()


def sample09_fuse_many_boxes() -> None:
    shape = _fuse_overlapping_boxes_multi_tool()
    assert shape is not None and not shape.IsNull()


def sample10_mesh_incremental() -> None:
    shape = _fuse_overlapping_boxes_multi_tool()
    assert shape is not None and not shape.IsNull()
    BRepMesh_IncrementalMesh(shape, 0.25, False, 0.5, False)
    exp = TopExp_Explorer(shape, TopAbs_ShapeEnum.TopAbs_FACE, TopAbs_ShapeEnum.TopAbs_SHAPE)
    assert exp.More()


SAMPLES = {
    "01_primitive_box": sample01_primitive_box,
    "02_primitive_cylinder": sample02_primitive_cylinder,
    "03_boolean_fuse": sample03_boolean_fuse,
    "04_boolean_cut_grid": sample04_boolean_cut_grid,
    "05_loft_thru_sections": sample05_loft_thru_sections,
    "06_pipe_shell_sweep": sample06_pipe_shell_sweep,
    "07_surface_filling_patch": sample07_surface_filling_patch,
    "08_fillet_all_edges": sample08_fillet_all_edges,
    "09_fuse_many_boxes": sample09_fuse_many_boxes,
    "10_mesh_incremental": sample10_mesh_incremental,
}
