// bindings-current.cpp — Corpus A: mirror what production bindgen emits TODAY.
//
// For every C++ constructor with trailing default arguments, this file
// registers ONE optional_override lambda per arity. Where the bindgen gate
// trips (cstring args, RBV envelope, same-arity overload group) the arity
// truncations are SKIPPED — see catalog defects TR-CW, TR-MO, TR-RBV, TR-GATE
// in docs/research/ocjs-libembind-strategic-direction-assessment.md.
//
// Bindings cover only the minimum needed to build a sphere/cube, mesh it,
// and read triangle counts back — but they use REAL OCCT headers and link
// against the prebuilt OCCT WASM toolkit archives. This is the same shape
// of code production bindgen emits, hand-pruned to one representative
// chain.
//
// Trailing-default surface exercised on real OCCT:
//   1. BRepMesh_IncrementalMesh(Shape, double, bool=F, double=0.5, bool=F)
//      — 3 trailing defaults of mixed primitive types. Production bindgen
//      fans this out into 4 arity-truncated registrations (verified in
//      build/bindings/.../BRepMesh_IncrementalMesh.cpp:5529-5544). This is
//      the worst-case fan-out cost we're trying to retire under Option C.
//
//   2. BRepMesh_IncrementalMesh::Perform(Message_ProgressRange = MPR())
//      — 1 trailing default of OBJECT type. Production fans out to arity
//      0 + arity 1 forms.
//
//   3. BRepPrimAPI_MakeSphere(...) — 11 ctor overloads, some with trailing
//      doubles. Same-arity dispatch (C1) + trailing defaults compose here.
//      We bind a focused subset to keep linking fast.

#include <emscripten/bind.h>
#include <emscripten/val.h>
#include <memory>

#include <gp_Pnt.hxx>
#include <gp_Vec.hxx>
#include <gp_Dir.hxx>
#include <gp_Ax2.hxx>
#include <gp_XYZ.hxx>
#include <TopoDS_Shape.hxx>
#include <TopoDS_Face.hxx>
#include <TopoDS.hxx>
#include <TopAbs_ShapeEnum.hxx>
#include <TopExp_Explorer.hxx>
#include <TopLoc_Location.hxx>
#include <BRepPrimAPI_MakeBox.hxx>
#include <BRepPrimAPI_MakeSphere.hxx>
#include <BRepMesh_IncrementalMesh.hxx>
#include <BRep_Tool.hxx>
#include <Poly_Triangulation.hxx>
#include <Message_ProgressRange.hxx>
#include <Standard_Handle.hxx>

using namespace emscripten;

EMSCRIPTEN_BINDINGS(corpus_a_current) {
  // ── topology + math primitives ──────────────────────────────────────
  // Note on `gp_Pnt(double=0, double=0, double=0)`: the actual primary
  // ctor in gp_Pnt.hxx has three trailing defaults at the C++ level,
  // but production bindgen drops them entirely (gp_Pnt is in the
  // bindgen-filters exclusion path for inline/constexpr ctors). We
  // bind the 3-arg form explicitly — this isn't the trailing-default
  // surface we're studying.
  class_<gp_Pnt>("gp_Pnt")
    .constructor<double, double, double>()
    .function("X", &gp_Pnt::X)
    .function("Y", &gp_Pnt::Y)
    .function("Z", &gp_Pnt::Z);
  class_<gp_Dir>("gp_Dir")
    .constructor<double, double, double>();
  class_<gp_Ax2>("gp_Ax2")
    .constructor<const gp_Pnt&, const gp_Dir&>();

  // ── TopoDS hierarchy (shape + face only — minimum for meshing) ──────
  class_<TopoDS_Shape>("TopoDS_Shape")
    .constructor<>()
    .function("IsNull", &TopoDS_Shape::IsNull)
    .function("ShapeType", &TopoDS_Shape::ShapeType);
  class_<TopoDS_Face, base<TopoDS_Shape>>("TopoDS_Face")
    .constructor<>();

  enum_<TopAbs_ShapeEnum>("TopAbs_ShapeEnum")
    .value("COMPOUND",  TopAbs_COMPOUND)
    .value("COMPSOLID", TopAbs_COMPSOLID)
    .value("SOLID",     TopAbs_SOLID)
    .value("SHELL",     TopAbs_SHELL)
    .value("FACE",      TopAbs_FACE)
    .value("WIRE",      TopAbs_WIRE)
    .value("EDGE",      TopAbs_EDGE)
    .value("VERTEX",    TopAbs_VERTEX)
    .value("SHAPE",     TopAbs_SHAPE);

  // TopExp_Explorer — production bindgen fans out the 2-arg/3-arg ctor
  // because the trailing TopAbs_SHAPE default qualifies. We mirror that.
  class_<TopExp_Explorer>("TopExp_Explorer")
    .constructor<>()
    .constructor(optional_override([](const TopoDS_Shape& s, TopAbs_ShapeEnum f) {
      return std::unique_ptr<TopExp_Explorer>(new TopExp_Explorer(s, f));
    }))
    .constructor(optional_override([](const TopoDS_Shape& s, TopAbs_ShapeEnum f, TopAbs_ShapeEnum a) {
      return std::unique_ptr<TopExp_Explorer>(new TopExp_Explorer(s, f, a));
    }))
    .function("More",    &TopExp_Explorer::More)
    .function("Next",    &TopExp_Explorer::Next)
    .function("Current", &TopExp_Explorer::Current);

  class_<TopLoc_Location>("TopLoc_Location").constructor<>();

  // ── TopoDS:: free-function casts (production-style helper) ──────────
  // Mirrors the TopoDS_Cast helper from build-configs/full.yml.
  struct TopoDS_Cast {};
  class_<TopoDS_Cast>("TopoDS_Cast")
    .class_function("Face", optional_override([](const TopoDS_Shape& s) -> TopoDS_Face {
      return TopoDS::Face(s);
    }));

  // ── Builder API (raw, no handle) ────────────────────────────────────
  // BRepBuilderAPI_MakeShape::Shape() is inherited; wrap explicitly so
  // embind sees a callable bound to the derived type. (Production bindgen
  // does the equivalent via the `base<BRepBuilderAPI_MakeShape>` chain
  // which we skip here to keep the binding tight.)
  class_<BRepPrimAPI_MakeBox>("BRepPrimAPI_MakeBox")
    .constructor<double, double, double>()
    .function("Shape", optional_override([](BRepPrimAPI_MakeBox& self) -> TopoDS_Shape {
      return self.Shape();
    }));

  // BRepPrimAPI_MakeSphere has many overloads; we bind the two most-used
  // forms (radius, gp_Pnt+radius). These are the same-arity 2-arg group
  // that exercises C1 type-based dispatch on real OCCT.
  class_<BRepPrimAPI_MakeSphere>("BRepPrimAPI_MakeSphere")
    .constructor<double>()
    .constructor<const gp_Pnt&, double>()
    .function("Shape", optional_override([](BRepPrimAPI_MakeSphere& self) -> TopoDS_Shape {
      return self.Shape();
    }));

  // ── Message_ProgressRange — default-constructible OBJECT trailing default ──
  class_<Message_ProgressRange>("Message_ProgressRange").constructor<>();

  // ── BRepMesh_IncrementalMesh — the headline target ──────────────────
  // Production bindgen emits 7 ctor registrations (verified at
  // build/bindings/.../BRepMesh_IncrementalMesh.cpp:5525-5544).
  // We replicate the 4 arity-truncated variants of the primary 5-arg
  // ctor exactly as production emits — this is the cost surface Option C
  // aims to collapse to a single std::optional<T> registration.
  class_<BRepMesh_IncrementalMesh>("BRepMesh_IncrementalMesh")
    .constructor<>()
    .constructor(optional_override([](const TopoDS_Shape& s, double d) {
      return std::unique_ptr<BRepMesh_IncrementalMesh>(
        new BRepMesh_IncrementalMesh(s, d));
    }))
    .constructor(optional_override([](const TopoDS_Shape& s, double d, bool rel) {
      return std::unique_ptr<BRepMesh_IncrementalMesh>(
        new BRepMesh_IncrementalMesh(s, d, rel));
    }))
    .constructor(optional_override([](const TopoDS_Shape& s, double d, bool rel, double ang) {
      return std::unique_ptr<BRepMesh_IncrementalMesh>(
        new BRepMesh_IncrementalMesh(s, d, rel, ang));
    }))
    .constructor(optional_override([](const TopoDS_Shape& s, double d, bool rel, double ang, bool par) {
      return std::unique_ptr<BRepMesh_IncrementalMesh>(
        new BRepMesh_IncrementalMesh(s, d, rel, ang, par));
    }))
    .function("IsDone", optional_override([](BRepMesh_IncrementalMesh& self) -> bool {
      return self.IsDone();
    }));

  // ── BRep_Tool::Triangulation — read mesh back out ───────────────────
  // Static method, single trailing default (Poly_MeshPurpose=NONE).
  // We wrap in a small free-function helper so JS can pull the triangle
  // count without binding TopLoc_Location's full surface.
  function("BRep_Tool_NbTriangles", optional_override([](const TopoDS_Face& f) -> int {
    TopLoc_Location loc;
    const auto& tri = BRep_Tool::Triangulation(f, loc);
    return tri.IsNull() ? 0 : tri->NbTriangles();
  }));

  // ── Cross-cutting helper: sum triangle count across all faces ───────
  function("count_triangles", optional_override([](const TopoDS_Shape& s) -> int {
    int total = 0;
    for (TopExp_Explorer ex(s, TopAbs_FACE); ex.More(); ex.Next()) {
      TopLoc_Location loc;
      const auto& tri = BRep_Tool::Triangulation(TopoDS::Face(ex.Current()), loc);
      if (!tri.IsNull()) total += tri->NbTriangles();
    }
    return total;
  }));
}
