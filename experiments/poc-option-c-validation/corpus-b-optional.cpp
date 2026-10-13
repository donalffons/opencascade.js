// corpus-b-optional.cpp — what bindgen would emit POST-R5 under Option C.
//
// Translation rule: every C++ trailing default argument becomes a
// std::optional<T> in the lambda signature, unwrapped via .value_or(default)
// in the body. register_optional<T>() is called once per distinct T at the
// top of the bindings block. ONE registration per overload — no arity fan-out.
//
// Upstream embind's relaxed-arity verifier (Emscripten 3.1.68 / PR #22591)
// materialises std::nullopt for trailing args omitted from the JS call BEFORE
// the C1 dispatcher's getSignature runs. The C1 dispatcher sees the same
// arity it registered. No conflict between std::optional and same-arity
// type-based dispatch is possible by construction.
#include <emscripten/bind.h>
#include <optional>
#include <string>
#include "mock-occt.hpp"

using namespace emscripten;

EMSCRIPTEN_BINDINGS(corpus_b) {
  // === C1 §B1 control — same-arity type dispatch (unchanged, no trailing defaults) ===
  class_<XYZ>("XYZ")
    .constructor<double, double, double>()
    .property("x", &XYZ::x).property("y", &XYZ::y).property("z", &XYZ::z);
  class_<Vec3>("Vec3")
    .constructor<double, double, double>()
    .property("x", &Vec3::x).property("y", &Vec3::y).property("z", &Vec3::z);
  class_<Pnt>("Pnt")
    .constructor<double, double, double>()
    .constructor<const XYZ&>()
    .constructor<const Vec3&>()
    .property("routed", &Pnt::routed);

  // === register_optional<T> for every wrapped T (deduplicated globally) ===
  register_optional<ProgressRange>();
  register_optional<OpenMode>();
  register_optional<double>();

  // === FO-R3: derived class with multi-overload + trailing default ===
  // Each overload registers ONCE. Same-arity type dispatch picks the right one
  // (C1 dispatcher); std::optional handles the trailing default within each.
  // The arity-1 with-progress version becomes a true single registration since
  // ProgressRange has no default in C++ (here it's the explicit-arg version).
  // The arity-0 version is its own registration.
  value_object<ProgressRange>("ProgressRange").field("handle", &ProgressRange::handle);
  class_<Base_Algo>("Base_Algo")
    .constructor<>()
    .function("Build", select_overload<void()>(&Base_Algo::Build))
    .function("Build", select_overload<void(const ProgressRange&)>(&Base_Algo::Build))
    .property("lastBuildBy", &Base_Algo::lastBuildBy);
  class_<Derived_Algo, base<Base_Algo>>("Derived_Algo")
    .constructor<>()
    .function("Build", select_overload<void()>(&Derived_Algo::Build))
    .function("Build", select_overload<void(const ProgressRange&)>(&Derived_Algo::Build));

  // === TR-CW: cstring + trailing default ===
  enum_<OpenMode>("OpenMode").value("ReadOnly", ReadOnly).value("ReadWrite", ReadWrite);
  class_<StrTool>("StrTool")
    .constructor<>()
    // Single registration; std::optional<OpenMode> unwraps to ReadOnly.
    .function("Set", optional_override([](StrTool& self, std::string name, std::optional<OpenMode> mode) {
      self.Set(name.c_str(), mode.value_or(ReadOnly));
    }))
    .property("routed", &StrTool::routed);

  // === TR-MO: same-arity overload group + trailing default ===
  class_<Edge>("Edge").constructor<>().property("id", &Edge::id);
  class_<Loc>("Loc").constructor<>().property("id", &Loc::id);
  class_<Sampler>("Sampler")
    .constructor<>()
    // Each overload registered ONCE with std::optional<double> for first/last.
    // Same-arity type dispatch (C1) picks (Edge, Loc, ...) vs (Edge, ...);
    // std::optional handles the trailing defaults inside each lambda.
    .function("Sample", optional_override([](Sampler& self, const Edge& e, const Loc& l, std::optional<double> first, std::optional<double> last) {
      self.Sample(e, l, first.value_or(0.0), last.value_or(1.0));
    }))
    .function("Sample", optional_override([](Sampler& self, const Edge& e, std::optional<double> first, std::optional<double> last) {
      self.Sample(e, first.value_or(0.0), last.value_or(1.0));
    }))
    .property("routed", &Sampler::routed);

  // === TR-RBV: value_object return + trailing default ===
  value_object<CurveResult>("CurveResult")
    .field("handle", &CurveResult::handle)
    .field("first",  &CurveResult::first)
    .field("last",   &CurveResult::last);
  class_<CurveTool>("CurveTool")
    .constructor<>()
    // std::optional composes inside the lambda body BEFORE the value_object
    // envelope is constructed — no gate parity needed.
    .function("GetCurve", optional_override([](CurveTool& self, const Edge& e, std::optional<double> tol) {
      return self.GetCurve(e, tol.value_or(CurveTool::DEFAULT_TOL));
    }))
    .property("routed", &CurveTool::routed);

  // === TR-GATE: cstring + RBV combined ===
  class_<Combo>("Combo")
    .constructor<>()
    // Both wrappers (cstring + RBV) compose naturally with std::optional
    // because every transformation happens INSIDE the single lambda body.
    .function("Proc", optional_override([](Combo& self, std::string name, std::optional<double> t) {
      return self.Proc(name.c_str(), t.value_or(Combo::DEFAULT_T));
    }))
    .property("routed", &Combo::routed);
}
