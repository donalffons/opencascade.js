// POC for NCollection Option D — boundary narrowing with adapter returns.
//
// Validates that the proposed boundary-narrowing strategy actually delivers
// what the research doc claims:
//
//  - Strategy A (status quo):       class_<NCollection_Array1<Pnt3>> registration → opaque per-permutation handle in .d.ts
//  - Strategy C (BindingType<>):    typed marshalling so a function returning NCollection_Array1<T> auto-converts to JS Array
//  - Strategy D (per-API adapter):  function returns a typed JS Array directly, with register_type<>() naming the TS surface
//
// Builds a single small WASM module exposing all three strategies side-by-side
// over an in-toy NCollection_Array1<Pnt3> implementation that mirrors OCCT's
// shape (Lower/Upper/Value/ChangeValue + member typedef `reference`). The
// runner (`experiment.mjs`) calls each strategy, asserts data parity, prints
// timing, and the build script emits the .d.ts via `--emit-tsd` so we can
// inspect type-quality directly.
//
// Build: ./build.sh
// Run  : node experiment.mjs

#include <emscripten/bind.h>
#include <emscripten/val.h>
#include <cstddef>
#include <cstdint>
#include <vector>

using namespace emscripten;

// ── Stand-in for gp_Pnt — value type, embind value_object marshalled ──

struct Pnt3 {
  double x{0.0}, y{0.0}, z{0.0};
  Pnt3() = default;
  Pnt3(double xv, double yv, double zv) : x(xv), y(yv), z(zv) {}
  double X() const { return x; }
  double Y() const { return y; }
  double Z() const { return z; }
};

// ── Stand-in for NCollection_Array1<T> — mirrors the OCCT shape closely
//    enough to reproduce the audit's `reference`/`const_reference` member
//    typedef pattern that triggered R8 in audit V2.

template <typename TheItemType>
class NCollection_Array1_Stub {
public:
  using value_type      = TheItemType;
  using reference       = TheItemType&;
  using const_reference = const TheItemType&;

  NCollection_Array1_Stub() : lower_(0), upper_(-1) {}
  NCollection_Array1_Stub(int lower, int upper)
    : lower_(lower), upper_(upper), data_(static_cast<std::size_t>(upper - lower + 1)) {}

  int Lower() const { return lower_; }
  int Upper() const { return upper_; }
  int Length() const { return upper_ - lower_ + 1; }

  const_reference Value(int i)       const { return data_[static_cast<std::size_t>(i - lower_)]; }
  reference       ChangeValue(int i)       { return data_[static_cast<std::size_t>(i - lower_)]; }
  void            SetValue(int i, const TheItemType& v) { data_[static_cast<std::size_t>(i - lower_)] = v; }

  // Iteration helpers used by all three strategies.
  template <typename F>
  void ForEach(F&& f) const {
    for (auto const& v : data_) f(v);
  }

private:
  int lower_;
  int upper_;
  std::vector<TheItemType> data_;
};

// Producer that all three strategies wrap. Returns a fresh sample container
// of `n` synthetic points so the timing comparison sees identical inputs.
static NCollection_Array1_Stub<Pnt3> makeSamplePoints(int n) {
  NCollection_Array1_Stub<Pnt3> pts(0, n - 1);
  for (int i = 0; i < n; ++i) {
    pts.SetValue(i, Pnt3{double(i), double(i) * 2.0, double(i) * 3.0});
  }
  return pts;
}

// =====================================================================
// Strategy A — STATUS QUO: bind the templated container as a class_<>
// =====================================================================
//
// This is exactly the pattern that produced 613 NCollection_* class
// registrations in dist/opencascade_single.d.ts. Each permutation gets its
// own class_<> — no generics, no marshalling, member typedef `reference`
// returns end up as `unknown` (or `Pnt3` if the audit V2 R8 path is
// applied).

// Heap-allocate so embind can transfer ownership across the wire without
// the by-value copy quirks that bite default-constructed containers.
static NCollection_Array1_Stub<Pnt3>* getPoints_strategyA(int n) {
  return new NCollection_Array1_Stub<Pnt3>(makeSamplePoints(n));
}

EMSCRIPTEN_BINDINGS(strategy_a_status_quo) {
  value_object<Pnt3>("Pnt3")
    .field("x", &Pnt3::x)
    .field("y", &Pnt3::y)
    .field("z", &Pnt3::z);

  class_<NCollection_Array1_Stub<Pnt3>>("NCollection_Array1_Pnt3")
    .constructor<>()
    .constructor<int, int>()
    .function("Lower",       &NCollection_Array1_Stub<Pnt3>::Lower)
    .function("Upper",       &NCollection_Array1_Stub<Pnt3>::Upper)
    .function("Length",      &NCollection_Array1_Stub<Pnt3>::Length)
    .function("Value",       &NCollection_Array1_Stub<Pnt3>::Value)
    .function("ChangeValue", &NCollection_Array1_Stub<Pnt3>::ChangeValue)
    .function("SetValue",    &NCollection_Array1_Stub<Pnt3>::SetValue);

  function("getPoints_strategyA", &getPoints_strategyA, return_value_policy::take_ownership());
}

// =====================================================================
// Strategy C — BindingType<> specialization: per-shape marshaller
// =====================================================================
//
// One C++-side specialization makes every function returning
// NCollection_Array1_Stub<T> emit a native JS Array on the wire. No
// per-permutation class_<> needed; the container surface in JS is the
// standard Array<T>.
//
// Caveat (verified during the POC): the .d.ts generator types this as
// `any` because the wire type is `val`. Strategy D resolves this with
// `register_type<>()`.

namespace emscripten { namespace internal {

template <typename T>
struct BindingType<NCollection_Array1_Stub<T>> {
  using ValBinding = BindingType<val>;
  using WireType   = ValBinding::WireType;

  static WireType toWireType(NCollection_Array1_Stub<T> const& arr,
                             rvp::default_tag /*policy*/) {
    val js_arr = val::array();
    int idx = 0;
    arr.ForEach([&](T const& v) {
      js_arr.set(idx++, val(v));
    });
    return ValBinding::toWireType(js_arr, rvp::default_tag{});
  }

  static NCollection_Array1_Stub<T> fromWireType(WireType value) {
    val js_arr = ValBinding::fromWireType(value);
    int n = js_arr["length"].as<int>();
    NCollection_Array1_Stub<T> out(0, n - 1);
    for (int i = 0; i < n; ++i) {
      out.SetValue(i, js_arr[i].as<T>());
    }
    return out;
  }
};

}}  // namespace emscripten::internal

static NCollection_Array1_Stub<Pnt3> getPoints_strategyC(int n) {
  return makeSamplePoints(n);
}

EMSCRIPTEN_BINDINGS(strategy_c_binding_type) {
  function("getPoints_strategyC", &getPoints_strategyC);
}

// =====================================================================
// Strategy D — per-API adapter + register_type<>() for stable TS naming
// =====================================================================
//
// `EMSCRIPTEN_DECLARE_VAL_TYPE` declares a phantom type on the C++ side;
// `register_type<Pnt3Array>("Pnt3Array", "Pnt3[]")` (PR #25272, Oct 2025)
// pipes a hand-authored TypeScript type definition into the generated
// .d.ts. This is the missing piece that makes Option D produce a clean
// `Pnt3[]` surface instead of `any`.

EMSCRIPTEN_DECLARE_VAL_TYPE(Pnt3Array);

static Pnt3Array getPoints_strategyD(int n) {
  val arr = val::array();
  for (int i = 0; i < n; ++i) {
    arr.set(i, val(Pnt3{double(i), double(i) * 2.0, double(i) * 3.0}));
  }
  return Pnt3Array(arr);
}

// Bonus: a generic-looking TS alias proving we can name the surface
// however we want (e.g. `NCollection_Array1<Pnt3>` if we wanted to keep
// the container shape visible at the type level).
EMSCRIPTEN_DECLARE_VAL_TYPE(GenericPnt3Container);

static GenericPnt3Container getPoints_strategyD_generic(int n) {
  val arr = val::array();
  for (int i = 0; i < n; ++i) {
    arr.set(i, val(Pnt3{double(i), double(i) * 2.0, double(i) * 3.0}));
  }
  return GenericPnt3Container(arr);
}

// =====================================================================
// Strategy D extra — the same pattern for a Map-shaped container,
// covering the NCollection_DataMap<K,V,H> family (122/613 instantiations).
// Returns a JS object literal { keys: K[], values: V[] } — the closest
// natural surface for OCCT's DataMap (we could also use Map<K,V> if the
// keys are primitive).

EMSCRIPTEN_DECLARE_VAL_TYPE(StringPnt3DataMap);

static StringPnt3DataMap getDataMap_strategyD(int n) {
  val keys = val::array();
  val values = val::array();
  for (int i = 0; i < n; ++i) {
    keys.set(i, val(std::string("pt") + std::to_string(i)));
    values.set(i, val(Pnt3{double(i), double(i) * 2.0, double(i) * 3.0}));
  }
  val out = val::object();
  out.set("keys", keys);
  out.set("values", values);
  return StringPnt3DataMap(out);
}

EMSCRIPTEN_BINDINGS(strategy_d_adapter) {
  register_type<Pnt3Array>("Pnt3[]");
  register_type<GenericPnt3Container>("NCollection_Array1<Pnt3>");
  register_type<StringPnt3DataMap>("{ keys: string[], values: Pnt3[] }");

  function("getPoints_strategyD",         &getPoints_strategyD);
  function("getPoints_strategyD_generic", &getPoints_strategyD_generic);
  function("getDataMap_strategyD",        &getDataMap_strategyD);
}
