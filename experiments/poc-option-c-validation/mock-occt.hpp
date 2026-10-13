// mock-occt.hpp — minimum C++ corpus for the Option C bifurcation PoC.
//
// Each class is a stand-in for a real OCCT pattern that today trips one of the
// five trailing-default catalog defects (FO-R3, TR-CW, TR-MO, TR-RBV, TR-GATE).
// Bodies are trivial (set a `routed` member) to isolate dispatch behaviour from
// real C++ logic — the PoC validates how the binding mechanism routes calls,
// not what the C++ does once routed.
#pragma once

// === C1 §B1 control — same-arity type dispatch ===
struct XYZ  { double x, y, z; XYZ (double xv = 0, double yv = 0, double zv = 0) : x(xv), y(yv), z(zv) {} };
struct Vec3 { double x, y, z; Vec3(double xv = 0, double yv = 0, double zv = 0) : x(xv), y(yv), z(zv) {} };

// Mimics gp_Pnt with same-arity constructors (one 3-double, two 1-arg variants
// that differ only by type). The C1 dispatcher must pick the right one.
struct Pnt {
  int routed = 0;
  Pnt(double, double, double) : routed(1) {}
  Pnt(const XYZ&)             : routed(2) {}
  Pnt(const Vec3&)            : routed(3) {}
};

// === FO-R3: arity-0 truncation in a multi-overload inheritance chain ===
// Pure FO-R3 (single-overload derived) is already fixed by R1+R2 Object.hasOwn
// gates (validated in libembind-fan-out-poc). The residual FO-R3 case in the
// catalog is: derived class with MULTIPLE same-arity overloads and trailing
// defaults — the `numOverloads > 1` gate trips and bindgen emits no truncation
// at all on the derived class, even though the base's arity-0 binding is what
// the consumer expects to resolve to.
struct ProgressRange { int handle = 0; };

struct Base_Algo {
  int lastBuildBy = 0;
  virtual ~Base_Algo() = default;
  virtual void Build()                          { lastBuildBy = 1; }
  virtual void Build(const ProgressRange& /*pr*/) { lastBuildBy = 2; }
};

struct Derived_Algo : Base_Algo {
  void Build()                          override { lastBuildBy = 11; }
  void Build(const ProgressRange& /*pr*/) override { lastBuildBy = 12; }
};

// === TR-CW: cstring arg + trailing default ===
enum OpenMode { ReadOnly = 0, ReadWrite = 1 };

struct StrTool {
  int routed = 0;
  void Set(const char* /*name*/, OpenMode mode = ReadOnly) { routed = (mode == ReadOnly) ? 1 : 2; }
};

// === TR-MO: same-arity overload group + trailing default ===
struct Edge { int id = 0; };
struct Loc  { int id = 0; };

struct Sampler {
  int routed = 0;
  void Sample(const Edge&, const Loc&, double first = 0.0, double last = 1.0) { routed = 1; (void)first; (void)last; }
  void Sample(const Edge&,             double first = 0.0, double last = 1.0) { routed = 2; (void)first; (void)last; }
};

// === TR-RBV: value_object return + trailing default ===
// IMPORTANT: tol's default is chosen to be DETECTABLY different from what
// `undefined`-cast-to-double would produce (0.0). This distinguishes
// "C++ default truly applied" from "JS undefined → 0 silent miss" — embind's
// relaxed-arity verifier passes undefined through to numeric args as 0,
// which is a correctness bug consumers would never notice on numeric defaults.
struct CurveResult { int handle = 0; double first = 0; double last = 0; };

struct CurveTool {
  int routed = 0;
  static constexpr double DEFAULT_TOL = 0.99;
  CurveResult GetCurve(const Edge&, double tol = DEFAULT_TOL) {
    // routed = 1 means "C++ default applied" (tol ≈ 0.99).
    // routed = 2 means "explicit small tol passed OR undefined→0 silent miss".
    routed = (tol > 0.5) ? 1 : 2;
    return CurveResult{1, 0.0, 1.0};
  }
};

// === TR-GATE: cstring + RBV combined ===
struct Combo {
  int routed = 0;
  static constexpr double DEFAULT_T = 0.99;
  CurveResult Proc(const char* /*name*/, double t = DEFAULT_T) {
    routed = (t > 0.5) ? 1 : 2;
    return CurveResult{2, 0.0, 1.0};
  }
};
