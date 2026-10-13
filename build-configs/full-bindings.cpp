#include <TopoDS.hxx>
#include <TopoDS_Vertex.hxx>
#include <TopoDS_Edge.hxx>
#include <TopoDS_Wire.hxx>
#include <TopoDS_Face.hxx>
#include <TopoDS_Shell.hxx>
#include <TopoDS_Solid.hxx>
#include <TopoDS_CompSolid.hxx>
#include <TopoDS_Compound.hxx>
#include <FairCurve_Batten.hxx>
#include <FairCurve_MinimalVariation.hxx>
#include <FairCurve_AnalysisCode.hxx>

struct TopoDS_Cast {};
using namespace emscripten;

EMSCRIPTEN_BINDINGS(ocjs_additional) {
  function("FairCurve_Batten_Compute", optional_override([](FairCurve_Batten& self, int nbIter, double tol) -> int {
    FairCurve_AnalysisCode code;
    self.Compute(code, nbIter, tol);
    return static_cast<int>(code);
  }));
  function("FairCurve_MinimalVariation_Compute", optional_override([](FairCurve_MinimalVariation& self, int nbIter, double tol) -> int {
    FairCurve_AnalysisCode code;
    self.Compute(code, nbIter, tol);
    return static_cast<int>(code);
  }));
  class_<TopoDS_Cast>("TopoDS_Cast")
    .class_function("Edge", optional_override([](const TopoDS_Shape& s) -> TopoDS_Edge { return TopoDS::Edge(s); }))
    .class_function("Wire", optional_override([](const TopoDS_Shape& s) -> TopoDS_Wire { return TopoDS::Wire(s); }))
    .class_function("Face", optional_override([](const TopoDS_Shape& s) -> TopoDS_Face { return TopoDS::Face(s); }))
    .class_function("Vertex", optional_override([](const TopoDS_Shape& s) -> TopoDS_Vertex { return TopoDS::Vertex(s); }))
    .class_function("Shell", optional_override([](const TopoDS_Shape& s) -> TopoDS_Shell { return TopoDS::Shell(s); }))
    .class_function("Solid", optional_override([](const TopoDS_Shape& s) -> TopoDS_Solid { return TopoDS::Solid(s); }))
    .class_function("Compound", optional_override([](const TopoDS_Shape& s) -> TopoDS_Compound { return TopoDS::Compound(s); }));
}
