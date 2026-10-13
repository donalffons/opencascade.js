// Minimal C++ corpus that mirrors the OCCT inheritance shapes implicated in
// the cross-sibling overload-table mutation bug surfaced by
// docs/research/ocjs-trailing-default-arity-fan-out.md.
//
// The corpus deliberately covers six variations:
//   1. Base class with `Build(const ProgressRange& = ProgressRange())` — the
//      template for "trailing default" methods.
//   2. Derived class with explicit `override` of `Build` (`ThruSections`,
//      `SplitShape`).
//   3. Derived class through an intermediate base with NO override
//      (`MakeChamfer : Command : MakeShape`) — the cross-sibling victim.
//   4. Derived class with implicit override (no `override` keyword,
//      `LegacyDerived`) — validates removing the bindgen `is_override` guard.
//   5. Independent class with the same method name but no inheritance link
//      (`IndependentBuild`) — independence sanity.
//   6. Static method with trailing defaults (`Statics::Compute`) — exercises
//      `_embind_register_class_class_function`.
//
// Each class reports which implementation actually executed via
// `lastBuildBy` so JS-side tests can prove virtual dispatch + arity fan-out
// land on the right C++ symbol regardless of registration ordering.
#pragma once

#include <string>

class ProgressRange {
public:
  ProgressRange() = default;
  int dummy = 0;
};

class MakeShape {
public:
  virtual ~MakeShape() = default;

  virtual void Build(const ProgressRange& = ProgressRange()) {
    lastBuildBy = "MakeShape";
  }

  std::string lastBuildBy;
};

class ThruSections : public MakeShape {
public:
  void Build(const ProgressRange& = ProgressRange()) override {
    lastBuildBy = "ThruSections";
  }

  // Multi-arity primitive trailing defaults (mirrors
  // BRepOffsetAPI_ThruSections::Init(bool, bool, double)).
  // Defaults: isSolid=false, ruled=false, pres3d=1e-6.
  void Init(bool isSolid = false, bool ruled = false, double pres3d = 1e-6) {
    initState = 0;
    if (isSolid) initState |= 1;
    if (ruled)   initState |= 2;
    if (pres3d > 0.0) initState |= 4;
  }

  int initState = 0;
};

class SplitShape : public MakeShape {
public:
  void Build(const ProgressRange& = ProgressRange()) override {
    lastBuildBy = "SplitShape";
  }
};

class Command : public MakeShape {
public:
  bool IsDone() const { return true; }
};

class MakeChamfer : public Command {
public:
  // Deliberately NO override of Build. JS calls to `chamfer.Build()` /
  // `chamfer.Build(progress)` must resolve via prototype chain to
  // MakeShape's Build dispatcher and through C++ virtual dispatch back here.
  int chamferData = 42;
};

class LegacyDerived : public MakeShape {
public:
  // Pre-C++11 implicit-override pattern (no `override` keyword, no
  // CXX_OVERRIDE_ATTR). This exists to prove that R3 (removing the
  // bindgen is_override guard) is safe once R1+R2 land in libembind.
  void Build(const ProgressRange& = ProgressRange()) {
    lastBuildBy = "LegacyDerived";
  }
};

class IndependentBuild {
public:
  void Build(const ProgressRange& = ProgressRange()) {
    lastBuildBy = "Independent";
  }

  std::string lastBuildBy;
};

class Statics {
public:
  static int Compute(int a = 1, int b = 2) {
    return a + b;
  }
};
