// Hand-rolled embind glue mirroring exactly what `bindings.py` would emit
// after wiring `_countTrailingDefaults` into `processMethodOrProperty` for
// the Embind C++ emit path (see
// docs/research/ocjs-trailing-default-arity-fan-out.md, R1+R2). Every class
// with trailing-default methods registers BOTH the full-arity binding AND a
// truncation lambda per missing trailing arg — including override methods on
// derived classes (i.e. the bindgen `is_override` skip is INTENTIONALLY
// absent so the negative build reproduces the cross-sibling regression).
#include <emscripten/bind.h>

#include "mini-occt.hpp"

using namespace emscripten;

EMSCRIPTEN_BINDINGS(poc) {
  class_<ProgressRange>("ProgressRange")
    .constructor<>();

  // Mirrors BRepBuilderAPI_MakeShape — base class with trailing default.
  class_<MakeShape>("MakeShape")
    .constructor<>()
    .property("lastBuildBy", &MakeShape::lastBuildBy)
    .function("Build", &MakeShape::Build)
    .function("Build", optional_override([](MakeShape& self) {
      self.Build(ProgressRange());
    }));

  // Mirrors BRepOffsetAPI_ThruSections — explicit override + Init fan-out.
  class_<ThruSections, base<MakeShape>>("ThruSections")
    .constructor<>()
    .property("initState", &ThruSections::initState)
    .function("Build", &ThruSections::Build)
    .function("Build", optional_override([](ThruSections& self) {
      self.Build(ProgressRange());
    }))
    .function("Init", &ThruSections::Init)
    .function("Init", optional_override([](ThruSections& self) {
      self.Init();
    }))
    .function("Init", optional_override([](ThruSections& self, bool isSolid) {
      self.Init(isSolid);
    }))
    .function("Init", optional_override([](ThruSections& self, bool isSolid, bool ruled) {
      self.Init(isSolid, ruled);
    }));

  // Mirrors BRepFeat_SplitShape — explicit override only. The trigger that
  // mutated MakeShape's overloadTable in production.
  class_<SplitShape, base<MakeShape>>("SplitShape")
    .constructor<>()
    .function("Build", &SplitShape::Build)
    .function("Build", optional_override([](SplitShape& self) {
      self.Build(ProgressRange());
    }));

  // Intermediate base in the inheritance chain (mirrors
  // BRepBuilderAPI_Command). No override of Build.
  class_<Command, base<MakeShape>>("Command")
    .function("IsDone", &Command::IsDone);

  // Mirrors BRepFilletAPI_MakeChamfer — the cross-sibling victim. No own
  // Build registration; relies on prototype chain + virtual dispatch.
  class_<MakeChamfer, base<Command>>("MakeChamfer")
    .constructor<>()
    .property("chamferData", &MakeChamfer::chamferData);

  // Implicit-override (no `override` keyword) — validates removing the
  // bindgen is_override guard after R1+R2 land.
  class_<LegacyDerived, base<MakeShape>>("LegacyDerived")
    .constructor<>()
    .function("Build", &LegacyDerived::Build)
    .function("Build", optional_override([](LegacyDerived& self) {
      self.Build(ProgressRange());
    }));

  // Independent class — same method name, no inheritance link.
  class_<IndependentBuild>("IndependentBuild")
    .constructor<>()
    .property("lastBuildBy", &IndependentBuild::lastBuildBy)
    .function("Build", &IndependentBuild::Build)
    .function("Build", optional_override([](IndependentBuild& self) {
      self.Build(ProgressRange());
    }));

  // Static method fan-out — exercises _embind_register_class_class_function
  // (R2). With two trailing defaults we emit the full-arity binding plus
  // two truncation lambdas (arity 0 and arity 1).
  class_<Statics>("Statics")
    .class_function("Compute", &Statics::Compute)
    .class_function("Compute", optional_override([]() {
      return Statics::Compute();
    }))
    .class_function("Compute", optional_override([](int a) {
      return Statics::Compute(a);
    }));
}
