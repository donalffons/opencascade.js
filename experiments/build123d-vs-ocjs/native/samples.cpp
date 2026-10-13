// Frontier OCCT 8.0.0 native C++ workloads mirroring ocjs/samples.mjs and
// python/samples.py.
//
// Every sample that batches >1 boolean operation uses the canonical
// `BRepAlgoAPI_BuilderAlgo` multi-tool form (`SetArguments + SetTools + Build`)
// — the iterative `Op(prev, next)` chain is the previous-baseline anti-pattern
// (preserved historically in F13's per-engine 09b/09 + 10b/10 ratios). See
// F14 — Frontier benchmark sample (see experiments/build123d-vs-ocjs/README.md).
// Performance — is the canonical comparison and uses these samples directly.

#include "samples.hpp"

#include <stdexcept>

#include <BRep_Tool.hxx>
#include <BRepAlgoAPI_Cut.hxx>
#include <BRepAlgoAPI_Fuse.hxx>
#include <BRepBuilderAPI_MakeEdge.hxx>
#include <BRepBuilderAPI_MakeWire.hxx>
#include <BRepFilletAPI_MakeFillet.hxx>
#include <BRepMesh_IncrementalMesh.hxx>
#include <BRepOffsetAPI_MakeFilling.hxx>
#include <BRepOffsetAPI_MakePipeShell.hxx>
#include <BRepOffsetAPI_ThruSections.hxx>
#include <BRepPrimAPI_MakeBox.hxx>
#include <BRepPrimAPI_MakeCylinder.hxx>
#include <ChFi3d_FilletShape.hxx>
#include <GeomAbs_Shape.hxx>
#include <Geom_Circle.hxx>
#include <Message_ProgressRange.hxx>
#include <NCollection_List.hxx>
#include <Poly_MeshPurpose.hxx>
#include <Poly_Triangulation.hxx>
#include <TopAbs_ShapeEnum.hxx>
#include <TopExp_Explorer.hxx>
#include <TopLoc_Location.hxx>
#include <TopoDS.hxx>
#include <TopoDS_Edge.hxx>
#include <TopoDS_Face.hxx>
#include <TopoDS_Shape.hxx>
#include <TopoDS_Wire.hxx>
#include <gp_Ax2.hxx>
#include <gp_Dir.hxx>
#include <gp_Pnt.hxx>

namespace {

inline void require(bool ok, const char* what) {
  if (!ok) throw std::runtime_error(what);
}

// `TopTools_ListOfShape` is deprecated in OCCT 8.0 in favour of the canonical
// `NCollection_List<TopoDS_Shape>` template instantiation. We use the canonical
// form directly so the C++ code mirrors the JS surface (`oc.NCollection_List_TopoDS_Shape`).
using ListOfShape = NCollection_List<TopoDS_Shape>;

}  // namespace

void sample01_primitive_box() {
  BRepPrimAPI_MakeBox mk(10, 20, 30);
  TopoDS_Shape shape = mk.Shape();
  require(!shape.IsNull(), "null shape");
}

void sample02_primitive_cylinder() {
  BRepPrimAPI_MakeCylinder mk(5, 15);
  TopoDS_Shape shape = mk.Shape();
  require(!shape.IsNull(), "null shape");
}

void sample03_boolean_fuse() {
  BRepPrimAPI_MakeBox b1(10, 10, 10);
  BRepPrimAPI_MakeBox b2(5, 5, 5);
  TopoDS_Shape s1 = b1.Shape();
  TopoDS_Shape s2 = b2.Shape();
  Message_ProgressRange pr;
  BRepAlgoAPI_Fuse fuse(s1, s2, pr);
  Message_ProgressRange pr2;
  fuse.Build(pr2);
  TopoDS_Shape out = fuse.Shape();
  require(!out.IsNull(), "null fuse");
}

// Multi-tool BRepAlgoAPI_Cut: 1 BOPDS init over base + 25 cylinder tools
// instead of 25 separate inits over (current, tool). See F14.
void sample04_boolean_cut_grid() {
  BRepPrimAPI_MakeBox baseMaker(100, 100, 10);
  TopoDS_Shape base = baseMaker.Shape();
  ListOfShape args, tools;
  args.Append(base);
  for (int i = 0; i < 5; ++i) {
    for (int j = 0; j < 5; ++j) {
      gp_Pnt origin(10 + i * 20.0, 10 + j * 20.0, -5);
      gp_Ax2 ax(origin, gp_Dir(0, 0, 1));
      BRepPrimAPI_MakeCylinder cylMaker(ax, 2, 20);
      tools.Append(cylMaker.Shape());
    }
  }
  BRepAlgoAPI_Cut cut;
  cut.SetArguments(args);
  cut.SetTools(tools);
  Message_ProgressRange pr;
  cut.Build(pr);
  TopoDS_Shape out = cut.Shape();
  require(!out.IsNull(), "null cut grid");
}

void sample05_loft_thru_sections() {
  BRepOffsetAPI_ThruSections loft(true, false, 1e-6);
  struct P { double z, radius; };
  const P profiles[] = {{0, 10}, {15, 5}, {30, 8}};
  for (const auto& p : profiles) {
    gp_Pnt center(0, 0, p.z);
    gp_Dir dir(0, 0, 1);
    gp_Ax2 ax(center, dir);
    Handle(Geom_Circle) circle = new Geom_Circle(ax, p.radius);
    BRepBuilderAPI_MakeEdge em(circle);
    TopoDS_Edge e = em.Edge();
    BRepBuilderAPI_MakeWire wm(e);
    TopoDS_Wire w = wm.Wire();
    loft.AddWire(w);
  }
  loft.CheckCompatibility(false);
  TopoDS_Shape shape = loft.Shape();
  require(!shape.IsNull(), "null loft");
}

void sample06_pipe_shell_sweep() {
  gp_Pnt p1(0, 0, 0), p2(0, 0, 30);
  BRepBuilderAPI_MakeEdge spineEdge(p1, p2);
  TopoDS_Edge eSpine = spineEdge.Edge();
  BRepBuilderAPI_MakeWire spineWire(eSpine);

  gp_Pnt axOrigin(0, 0, 0);
  gp_Dir axDir(0, 0, 1);
  gp_Ax2 ax(axOrigin, axDir);
  Handle(Geom_Circle) circle = new Geom_Circle(ax, 5);
  BRepBuilderAPI_MakeEdge profileEdge(circle);
  TopoDS_Edge eProf = profileEdge.Edge();
  BRepBuilderAPI_MakeWire profileWire(eProf);

  TopoDS_Wire sw = spineWire.Wire();
  BRepOffsetAPI_MakePipeShell pipeShell(sw);
  TopoDS_Wire pw = profileWire.Wire();
  pipeShell.Add(pw, false, false);
  Message_ProgressRange progress;
  pipeShell.Build(progress);
  pipeShell.MakeSolid();
  TopoDS_Shape shape = pipeShell.Shape();
  require(!shape.IsNull(), "null pipe");
}

void sample07_surface_filling_patch() {
  gp_Pnt p1(0, 0, 0), p2(10, 0, 0), p3(10, 10, 0), p4(0, 10, 0);
  BRepBuilderAPI_MakeEdge em1(p1, p2);
  BRepBuilderAPI_MakeEdge em2(p2, p3);
  BRepBuilderAPI_MakeEdge em3(p3, p4);
  BRepBuilderAPI_MakeEdge em4(p4, p1);
  TopoDS_Edge e1 = em1.Edge();
  TopoDS_Edge e2 = em2.Edge();
  TopoDS_Edge e3 = em3.Edge();
  TopoDS_Edge e4 = em4.Edge();

  BRepOffsetAPI_MakeFilling filling(3, 15, 2, false, 1e-3, 1e-4, 1e-1, 0.1, 8, 9);
  filling.Add(e1, GeomAbs_C0, true);
  filling.Add(e2, GeomAbs_C0, true);
  filling.Add(e3, GeomAbs_C0, true);
  filling.Add(e4, GeomAbs_C0, true);
  Message_ProgressRange pr;
  filling.Build(pr);
  TopoDS_Shape face = filling.Shape();
  require(!face.IsNull(), "null fill");
}

void sample08_fillet_all_edges() {
  BRepPrimAPI_MakeBox box(20, 20, 20);
  TopoDS_Shape boxShape = box.Shape();
  BRepFilletAPI_MakeFillet fillet(boxShape, ChFi3d_Rational);
  TopExp_Explorer explorer(boxShape, TopAbs_EDGE, TopAbs_SHAPE);
  while (explorer.More()) {
    const TopoDS_Shape& cur = explorer.Current();
    TopoDS_Edge edge = TopoDS::Edge(cur);
    fillet.Add(3, edge);
    explorer.Next();
  }
  Message_ProgressRange pr;
  fillet.Build(pr);
  TopoDS_Shape shape = fillet.Shape();
  require(!shape.IsNull(), "null fillet");
}

namespace {

// Multi-tool BRepAlgoAPI_Fuse: 1 BOPDS init over args + 39 box tools instead
// of 39 separate (prev, next) inits in a chain. See F13/F14.
TopoDS_Shape fuse_overlapping_boxes_multi_tool(int count, double spacing, double side) {
  ListOfShape args, tools;
  for (int i = 0; i < count; ++i) {
    gp_Pnt origin(i * spacing, 0, 0);
    BRepPrimAPI_MakeBox mk(origin, side, side, side);
    if (i == 0) args.Append(mk.Shape());
    else tools.Append(mk.Shape());
  }
  BRepAlgoAPI_Fuse fuse;
  fuse.SetArguments(args);
  fuse.SetTools(tools);
  Message_ProgressRange pr;
  fuse.Build(pr);
  return fuse.Shape();
}

}  // namespace

void sample09_fuse_many_boxes() {
  TopoDS_Shape shape = fuse_overlapping_boxes_multi_tool(40, 3.0, 4.0);
  require(!shape.IsNull(), "null multi-tool fuse");
}

void sample10_mesh_incremental() {
  TopoDS_Shape shape = fuse_overlapping_boxes_multi_tool(40, 3.0, 4.0);
  require(!shape.IsNull(), "null multi-tool fuse");
  BRepMesh_IncrementalMesh mesh(shape, 0.25, false, 0.5, false);
  (void)mesh;
  TopLoc_Location loc;
  TopExp_Explorer expf(shape, TopAbs_FACE, TopAbs_SHAPE);
  require(expf.More(), "no faces");
  const TopoDS_Shape& fc = expf.Current();
  TopoDS_Face face = TopoDS::Face(fc);
  Handle(Poly_Triangulation) tri = BRep_Tool::Triangulation(face, loc, Poly_MeshPurpose_NONE);
  require(!tri.IsNull() && tri->NbTriangles() >= 1, "no triangles");
}

const std::vector<Sample>& all_samples() {
  static const std::vector<Sample> kSamples = {
      {"01_primitive_box", sample01_primitive_box},
      {"02_primitive_cylinder", sample02_primitive_cylinder},
      {"03_boolean_fuse", sample03_boolean_fuse},
      {"04_boolean_cut_grid", sample04_boolean_cut_grid},
      {"05_loft_thru_sections", sample05_loft_thru_sections},
      {"06_pipe_shell_sweep", sample06_pipe_shell_sweep},
      {"07_surface_filling_patch", sample07_surface_filling_patch},
      {"08_fillet_all_edges", sample08_fillet_all_edges},
      {"09_fuse_many_boxes", sample09_fuse_many_boxes},
      {"10_mesh_incremental", sample10_mesh_incremental},
  };
  return kSamples;
}
