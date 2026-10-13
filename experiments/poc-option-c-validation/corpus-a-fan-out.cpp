// corpus-a-fan-out.cpp — what `src/ocjs_bindgen/codegen/bindings.py` emits TODAY.
//
// For each class with trailing C++ default arguments, this corpus follows the
// current bindgen rules:
//
//   1. Full-arity binding registered via optional_override lambda.
//   2. Arity-N-1, N-2, ... truncations registered ONLY IF every gate predicate
//      passes (`numOverloads == 1`, `!hasCStringArgs`, `!returnIsCString`,
//      `!_returnTypeRequiresValueWrapper`, `!hasOutputParams`).
//
// Where a gate currently SKIPS the truncation emission, this file registers
// only the full-arity binding — that is the catalog defect being reproduced.
// Each such omission is marked with a `// ⚠ catalog defect: XX` comment.
#include <emscripten/bind.h>
#include <string>
#include "mock-occt.hpp"

using namespace emscripten;

EMSCRIPTEN_BINDINGS(corpus_a) {
  // === C1 §B1 control — same-arity type dispatch ===
  // XYZ and Vec3 are registered as class_<> (not value_object<>) so that
  // the C1 dispatcher's `args[i] instanceof registeredClass.constructor`
  // check can disambiguate them — value_object<> is incompatible with the
  // C1 type-dispatch path (a separate, orthogonal limitation).
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

  // === FO-R3: derived class with multi-overload + trailing default ===
  // numOverloads > 1 on each Build group → bindgen's gate skips truncation
  // emission for the derived class's arity-0 group as well as the arity-1 group.
  // ⚠ catalog defect: FO-R3 — derived.Build() (arity 0) is NOT registered,
  // even though the consumer expects the inherited arity-0 to route.
  value_object<ProgressRange>("ProgressRange").field("handle", &ProgressRange::handle);
  class_<Base_Algo>("Base_Algo")
    .constructor<>()
    // Base has its own multi-overload Build group; truncation gated.
    .function("Build", select_overload<void()>(&Base_Algo::Build))
    .function("Build", select_overload<void(const ProgressRange&)>(&Base_Algo::Build))
    .property("lastBuildBy", &Base_Algo::lastBuildBy);
  class_<Derived_Algo, base<Base_Algo>>("Derived_Algo")
    .constructor<>()
    // Derived overrides both — multi-overload gate trips, no truncation emit.
    .function("Build", select_overload<void()>(&Derived_Algo::Build))
    .function("Build", select_overload<void(const ProgressRange&)>(&Derived_Algo::Build));

  // === TR-CW: cstring + trailing default ===
  enum_<OpenMode>("OpenMode").value("ReadOnly", ReadOnly).value("ReadWrite", ReadWrite);
  class_<StrTool>("StrTool")
    .constructor<>()
    // Full arity only — bindgen wraps the cstring via a lambda. The
    // hasCStringArgs gate skips the arity-1 truncation that would let
    // JS callers omit the OpenMode arg.
    .function("Set", optional_override([](StrTool& self, std::string name, OpenMode mode) {
      self.Set(name.c_str(), mode);
    }))
    // ⚠ catalog defect: TR-CW — `tool.Set("file")` will throw BindingError.
    .property("routed", &StrTool::routed);

  // === TR-MO: same-arity overload group + trailing default ===
  class_<Edge>("Edge").constructor<>().property("id", &Edge::id);
  class_<Loc>("Loc").constructor<>().property("id", &Loc::id);
  class_<Sampler>("Sampler")
    .constructor<>()
    // Both Sample overloads register at their full arity; numOverloads > 1
    // gate skips the truncation cascade that would let either be invoked
    // with fewer args.
    .function("Sample", select_overload<void(const Edge&, const Loc&, double, double)>(&Sampler::Sample))
    .function("Sample", select_overload<void(const Edge&,             double, double)>(&Sampler::Sample))
    // ⚠ catalog defect: TR-MO — `sampler.Sample(edge)` will throw or
    // dispatch ambiguously, never reaching the (Edge, double, double) overload
    // with defaults.
    .property("routed", &Sampler::routed);

  // === TR-RBV: value_object return + trailing default ===
  value_object<CurveResult>("CurveResult")
    .field("handle", &CurveResult::handle)
    .field("first",  &CurveResult::first)
    .field("last",   &CurveResult::last);
  class_<CurveTool>("CurveTool")
    .constructor<>()
    // Full arity only — bindgen wraps the return via a value_object envelope.
    // The _returnTypeRequiresValueWrapper gate skips truncation.
    .function("GetCurve", optional_override([](CurveTool& self, const Edge& e, double tol) {
      return self.GetCurve(e, tol);
    }))
    // ⚠ catalog defect: TR-RBV — `tool.GetCurve(edge)` will throw.
    .property("routed", &CurveTool::routed);

  // === TR-GATE: cstring + RBV combined (parity of gates) ===
  class_<Combo>("Combo")
    .constructor<>()
    // Both hasCStringArgs AND _returnTypeRequiresValueWrapper trip; doubly
    // skipped truncation.
    .function("Proc", optional_override([](Combo& self, std::string name, double t) {
      return self.Proc(name.c_str(), t);
    }))
    // ⚠ catalog defect: TR-GATE — `combo.Proc("x")` will throw.
    .property("routed", &Combo::routed);
}
