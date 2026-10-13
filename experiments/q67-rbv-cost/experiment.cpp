// Q6/Q7 PoC: measure the per-call cost of class-RBV variants for
// `Geom_Curve::D2`-shaped methods (one gp_Pnt-like output + two gp_Vec-like outputs).
//
// Variants benchmarked:
//   V1 baseline_ref:        output-by-reference (the legacy proxy-mutation pattern)
//   V2 value_object:        return value_object with class fields (POJO, no dispose)
//   V3 value_object_v3pp:   V2 + JS-side post-wrap that adds Symbol.dispose
//   V4 val_object_no_dispose: emscripten::val::object() with fields (dynamic JS object)
//   V5 val_object_dispose:  V4 + Symbol.dispose attached on C++ side
//
// All variants share the same underlying C++ computation (parametric curve eval).
// Build: emcc -O3 -lembind -sMODULARIZE=1 -sEXPORT_ES6=1 -sEXPORT_NAME=createModule experiment.cpp -o experiment.mjs

#include <emscripten/bind.h>
#include <emscripten/val.h>
#include <cmath>

using namespace emscripten;

// ── Geometry primitives mirroring gp_Pnt / gp_Vec ────────────────────

struct Pnt3 {
  double x{0.0}, y{0.0}, z{0.0};
  Pnt3() = default;
  Pnt3(double xv, double yv, double zv) : x(xv), y(yv), z(zv) {}
  double X() const { return x; }
  double Y() const { return y; }
  double Z() const { return z; }
  void SetCoord(double xv, double yv, double zv) { x = xv; y = yv; z = zv; }
};

struct Vec3 {
  double x{0.0}, y{0.0}, z{0.0};
  Vec3() = default;
  Vec3(double xv, double yv, double zv) : x(xv), y(yv), z(zv) {}
  double X() const { return x; }
  double Y() const { return y; }
  double Z() const { return z; }
  void SetCoord(double xv, double yv, double zv) { x = xv; y = yv; z = zv; }
};

// ── Curve under test: D2(u, P, V1, V2) mirroring Geom_Curve::D2 ──────

class Curve {
public:
  // Helix-ish parametric curve so the compiler doesn't fold us away.
  void D2(double u, Pnt3& P, Vec3& V1, Vec3& V2) const {
    const double s = std::sin(u);
    const double c = std::cos(u);
    P.SetCoord(c, s, u);
    V1.SetCoord(-s, c, 1.0);
    V2.SetCoord(-c, -s, 0.0);
  }
};

// ── V2/V3: value_object return shape ─────────────────────────────────

struct CurveD2Result {
  Pnt3 theP;
  Vec3 theV1;
  Vec3 theV2;
};

// (lambdas defined inline below for optional_override compatibility)

EMSCRIPTEN_BINDINGS(q67) {
  class_<Pnt3>("Pnt3")
    .constructor<>()
    .constructor<double, double, double>()
    .function("X", &Pnt3::X)
    .function("Y", &Pnt3::Y)
    .function("Z", &Pnt3::Z);

  class_<Vec3>("Vec3")
    .constructor<>()
    .constructor<double, double, double>()
    .function("X", &Vec3::X)
    .function("Y", &Vec3::Y)
    .function("Z", &Vec3::Z);

  value_object<CurveD2Result>("CurveD2Result")
    .field("theP", &CurveD2Result::theP)
    .field("theV1", &CurveD2Result::theV1)
    .field("theV2", &CurveD2Result::theV2);

  class_<Curve>("Curve")
    .constructor<>()
    // V1: output-by-reference (legacy proxy-mutation pattern)
    .function("D2_baseline", &Curve::D2, allow_raw_pointers())
    // V2: value_object (POJO, no dispose)
    .function("D2_value_object", optional_override(
      [](const Curve& self, double u) -> CurveD2Result {
        Pnt3 P; Vec3 V1, V2;
        self.D2(u, P, V1, V2);
        return CurveD2Result{P, V1, V2};
      }))
    // V4: val::object() without dispose
    .function("D2_val_no_dispose", optional_override(
      [](const Curve& self, double u) -> val {
        Pnt3 P; Vec3 V1, V2;
        self.D2(u, P, V1, V2);
        val out = val::object();
        out.set("theP", P);
        out.set("theV1", V1);
        out.set("theV2", V2);
        return out;
      }))
    // V5: val::object() with dispose attached on C++ side
    .function("D2_val_with_dispose", optional_override(
      [](const Curve& self, double u) -> val {
        Pnt3 P; Vec3 V1, V2;
        self.D2(u, P, V1, V2);
        val out = val::object();
        out.set("theP", P);
        out.set("theV1", V1);
        out.set("theV2", V2);
        val sym = val::global("Symbol")["dispose"];
        val disposer = val::module_property("__rbvDispose__");
        out.set(sym, disposer.call<val>("bind", out));
        return out;
      }));
}
