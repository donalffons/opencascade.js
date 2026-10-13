// Mock OCCT primitive types and factory classes for the dispatch-cost PoC.
//
// Types mirror the shape of the OCCT classes that drive same-arity overload
// resolution in real CAD workloads (verified against
// repos/opencascade.js/deps/OCCT/.../BRepBuilderAPI_MakeEdge.hxx and
// repos/replicad/packages/replicad/src/shapeHelpers.ts call sites).
//
// Bodies are intentionally trivial (single member write) so the JS-side
// dispatch cost dominates the measured ns/op. The `routed` member is the
// "optimizer cannot elide" anchor — the JS bench reads it to sanity-check
// the dispatcher routed to the correct overload.
//
// See docs/research/ocjs-suffix-free-overload-cost-experiment-design.md.

#pragma once
#include <cstdint>

struct gp_Lin    { double a; gp_Lin   (double v = 0) : a(v) {} };
struct gp_Circ   { double a; gp_Circ  (double v = 0) : a(v) {} };
struct gp_Elips  { double a; gp_Elips (double v = 0) : a(v) {} };
struct gp_Hypr   { double a; gp_Hypr  (double v = 0) : a(v) {} };
struct gp_Parab  { double a; gp_Parab (double v = 0) : a(v) {} };
struct Geom_Curve { double a; Geom_Curve(double v = 0) : a(v) {} };
// Two extras for the N=8 scan-cost bench. They model OCCT's
// Handle_Geom2d_Curve and Handle_Adaptor3d_HCurve — both also single-arg
// targets to BRepBuilderAPI_MakeEdge in the broader OCCT surface.
struct Geom2d_Curve  { double a; Geom2d_Curve (double v = 0) : a(v) {} };
struct Adaptor3d_Curve { double a; Adaptor3d_Curve(double v = 0) : a(v) {} };

struct gp_Pnt   { double x, y, z; gp_Pnt(double X = 0, double Y = 0, double Z = 0) : x(X), y(Y), z(Z) {} };
struct gp_Vec   { double x, y, z; gp_Vec(double X = 0, double Y = 0, double Z = 0) : x(X), y(Y), z(Z) {} };
struct TopoDS_Shape { int kind; TopoDS_Shape(int k = 0) : kind(k) {} };
struct TopoDS_Edge  : TopoDS_Shape { TopoDS_Edge(int k = 0)  : TopoDS_Shape(k) {} };
struct TopoDS_Wire  : TopoDS_Shape { TopoDS_Wire(int k = 0)  : TopoDS_Shape(k) {} };
struct TopoDS_Face  : TopoDS_Shape { TopoDS_Face(int k = 0)  : TopoDS_Shape(k) {} };

// EdgeMaker — mirrors BRepBuilderAPI_MakeEdge's 1-arg same-arity overload
// group. OCCT exposes 6 single-arg overloads here (gp_Lin/Circ/Elips/Hypr/
// Parab/Geom_Curve). The body is just a routed-tag write so the entire
// per-call timing is dominated by JS dispatch + embind invoker overhead.
struct EdgeMaker {
  int routed = 0;
  EdgeMaker() = default;
  EdgeMaker(const gp_Lin&    ) : routed(1) {}
  EdgeMaker(const gp_Circ&   ) : routed(2) {}
  EdgeMaker(const gp_Elips&  ) : routed(3) {}
  EdgeMaker(const gp_Hypr&   ) : routed(4) {}
  EdgeMaker(const gp_Parab&  ) : routed(5) {}
  EdgeMaker(const Geom_Curve&) : routed(6) {}
  EdgeMaker(const Geom2d_Curve&) : routed(7) {}
  EdgeMaker(const Adaptor3d_Curve&) : routed(8) {}

  // 2-arg group — mirrors BRepBuilderAPI_MakeEdge(gp_Pnt, gp_Pnt) and
  // (TopoDS_Vertex, TopoDS_Vertex) usage. Birdhouse uses the 2-arg gp_Pnt
  // variant 4 times per sketch outline.
  EdgeMaker(const gp_Pnt&, const gp_Pnt&) : routed(11) {}
  EdgeMaker(const TopoDS_Edge&, const TopoDS_Edge&) : routed(12) {}
};

// FaceMaker — mirrors BRepBuilderAPI_MakeFace 2-arg and 1-arg buckets.
struct FaceMaker {
  int routed = 0;
  FaceMaker() = default;
  FaceMaker(const TopoDS_Face&) : routed(1) {}
  FaceMaker(const TopoDS_Wire&) : routed(2) {}
};

// AlgoBoolean — mirrors BRepAlgoAPI_Fuse/Cut/Common shape. Single-overload
// per arity bucket; included so M1/M1' can measure dispatcher tax on
// methods that DON'T need same-arity discrimination (the common case).
struct AlgoBoolean {
  int routed = 0;
  AlgoBoolean() = default;
  AlgoBoolean(const TopoDS_Shape&, const TopoDS_Shape&) : routed(1) {}
};

// Sink — keeps an observable mutation that prevents DCE on the entire chain
// from the bench loop. The JS side periodically reads .total to confirm the
// dispatcher is doing work.
struct Sink {
  std::int64_t total = 0;
  void acceptEdge(const EdgeMaker& e)  { total += e.routed; }
  void acceptFace(const FaceMaker& f)  { total += f.routed; }
  void acceptAlgo(const AlgoBoolean& a){ total += a.routed; }
};
