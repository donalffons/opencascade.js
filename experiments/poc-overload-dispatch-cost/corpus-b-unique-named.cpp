// Corpus B — unique-named per-overload registrations.
//
// Each EdgeMaker constructor variant is exposed as a distinct top-level
// function (`makeEdge_FromLin`, `makeEdge_FromCirc`, ...). This avoids
// libembind's same-arity name collision entirely, so the binary links
// against BOTH the pristine upstream libembind.js AND the OCJS-patched
// libembind.js without throwing at module init.
//
// Two roles:
//   1. Establish the dispatcher-free floor (M1 in the experiment design).
//   2. Provide the substrate for a JS-side `instanceof` dispatcher (M3),
//      modelling what library consumers would have to write if libembind
//      didn't support C1 same-arity dispatch.

#include <emscripten/bind.h>
#include "mock-occt.hpp"

using namespace emscripten;

static EdgeMaker makeEdge_FromLin   (const gp_Lin&     x) { return EdgeMaker(x); }
static EdgeMaker makeEdge_FromCirc  (const gp_Circ&    x) { return EdgeMaker(x); }
static EdgeMaker makeEdge_FromElips (const gp_Elips&   x) { return EdgeMaker(x); }
static EdgeMaker makeEdge_FromHypr  (const gp_Hypr&    x) { return EdgeMaker(x); }
static EdgeMaker makeEdge_FromParab (const gp_Parab&   x) { return EdgeMaker(x); }
static EdgeMaker makeEdge_FromCurve (const Geom_Curve& x) { return EdgeMaker(x); }
static EdgeMaker makeEdge_FromPnt2  (const gp_Pnt& a, const gp_Pnt& b) { return EdgeMaker(a, b); }
static FaceMaker makeFace_FromFace  (const TopoDS_Face& f) { return FaceMaker(f); }
static FaceMaker makeFace_FromWire  (const TopoDS_Wire& w) { return FaceMaker(w); }
static AlgoBoolean makeAlgo         (const TopoDS_Shape& a, const TopoDS_Shape& b) { return AlgoBoolean(a, b); }

EMSCRIPTEN_BINDINGS(corpus_b) {
  class_<gp_Lin>("gp_Lin").constructor<double>().property("a", &gp_Lin::a);
  class_<gp_Circ>("gp_Circ").constructor<double>().property("a", &gp_Circ::a);
  class_<gp_Elips>("gp_Elips").constructor<double>().property("a", &gp_Elips::a);
  class_<gp_Hypr>("gp_Hypr").constructor<double>().property("a", &gp_Hypr::a);
  class_<gp_Parab>("gp_Parab").constructor<double>().property("a", &gp_Parab::a);
  class_<Geom_Curve>("Geom_Curve").constructor<double>().property("a", &Geom_Curve::a);
  class_<gp_Pnt>("gp_Pnt").constructor<double, double, double>()
    .property("x", &gp_Pnt::x).property("y", &gp_Pnt::y).property("z", &gp_Pnt::z);
  class_<gp_Vec>("gp_Vec").constructor<double, double, double>();
  class_<TopoDS_Shape>("TopoDS_Shape").constructor<int>().property("kind", &TopoDS_Shape::kind);
  class_<TopoDS_Edge, base<TopoDS_Shape>>("TopoDS_Edge").constructor<int>();
  class_<TopoDS_Wire, base<TopoDS_Shape>>("TopoDS_Wire").constructor<int>();
  class_<TopoDS_Face, base<TopoDS_Shape>>("TopoDS_Face").constructor<int>();

  class_<EdgeMaker>("EdgeMaker").constructor<>().property("routed", &EdgeMaker::routed);
  class_<FaceMaker>("FaceMaker").constructor<>().property("routed", &FaceMaker::routed);
  class_<AlgoBoolean>("AlgoBoolean").constructor<>().property("routed", &AlgoBoolean::routed);

  class_<Sink>("Sink").constructor<>()
    .function("acceptEdge", &Sink::acceptEdge)
    .function("acceptFace", &Sink::acceptFace)
    .function("acceptAlgo", &Sink::acceptAlgo)
    .property("total", &Sink::total);

  function("makeEdge_FromLin",    &makeEdge_FromLin);
  function("makeEdge_FromCirc",   &makeEdge_FromCirc);
  function("makeEdge_FromElips",  &makeEdge_FromElips);
  function("makeEdge_FromHypr",   &makeEdge_FromHypr);
  function("makeEdge_FromParab",  &makeEdge_FromParab);
  function("makeEdge_FromCurve",  &makeEdge_FromCurve);
  function("makeEdge_FromPnt2",   &makeEdge_FromPnt2);
  function("makeFace_FromFace",   &makeFace_FromFace);
  function("makeFace_FromWire",   &makeFace_FromWire);
  function("makeAlgo",            &makeAlgo);
}
