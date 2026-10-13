// bindings-optional.cpp — Corpus B: what bindgen would emit POST-R5.
//
// Same surface as bindings-current.cpp, but every C++ trailing default
// becomes std::optional<T> in the lambda signature with .value_or(default)
// in the body. ONE registration per overload — the arity fan-out cascade
// is eliminated wholesale.
//
// The headline payload: BRepMesh_IncrementalMesh's 5-arg ctor — which
// production bindgen fans out into 4 registrations (arity 2..5) — collapses
// to a SINGLE registration here, plus register_optional<bool>() and
// register_optional<double>() each called once.
//
// Trailing-default translation rule (mechanical, deterministic):
//
//   C++:  func(T1 a, T2 b, T3 c = default_c)
//   JS:   func.emit(optional_override([](T1 a, T2 b, std::optional<T3> c) {
//           return func(a, b, c.value_or(default_c));
//         }));
//   + register_optional<T3>() once globally.

#include <emscripten/bind.h>
#include <emscripten/val.h>
#include <memory>
#include <optional>

#include <gp_Pnt.hxx>
#include <gp_Vec.hxx>
#include <gp_Dir.hxx>
#include <gp_Ax2.hxx>
#include <gp_XYZ.hxx>
#include <TopoDS_Shape.hxx>
#include <TopoDS_Face.hxx>
#include <TopoDS.hxx>
#include <TopAbs_ShapeEnum.hxx>
#include <TopExp_Explorer.hxx>
#include <TopLoc_Location.hxx>
#include <BRepPrimAPI_MakeBox.hxx>
#include <BRepPrimAPI_MakeSphere.hxx>
#include <BRepMesh_IncrementalMesh.hxx>
#include <BRep_Tool.hxx>
#include <Poly_Triangulation.hxx>
#include <Message_ProgressRange.hxx>
#include <Standard_Handle.hxx>
#include <Precision.hxx>

using namespace emscripten;

// U3 lifecycle tracker — defined at file scope because static data members
// are not allowed in local (function-scope) structs.
struct LifecycleTrack {
  static int ctorCount;
  static int copyCount;
  static int moveCount;
  static int dtorCount;
  int payload;
  LifecycleTrack() : payload(0) { ++ctorCount; }
  explicit LifecycleTrack(int p) : payload(p) { ++ctorCount; }
  LifecycleTrack(const LifecycleTrack& o) : payload(o.payload) { ++copyCount; }
  LifecycleTrack(LifecycleTrack&& o) noexcept : payload(o.payload) { ++moveCount; }
  LifecycleTrack& operator=(const LifecycleTrack&) = default;
  LifecycleTrack& operator=(LifecycleTrack&&) = default;
  ~LifecycleTrack() { ++dtorCount; }
};

EMSCRIPTEN_BINDINGS(corpus_b_optional) {
  // ── register_optional<T>() once per distinct T (deduped globally) ───
  register_optional<bool>();
  register_optional<double>();
  register_optional<TopAbs_ShapeEnum>();

  // ── topology + math primitives (no trailing defaults → identical) ───
  class_<gp_Pnt>("gp_Pnt")
    .constructor<double, double, double>()
    .function("X", &gp_Pnt::X)
    .function("Y", &gp_Pnt::Y)
    .function("Z", &gp_Pnt::Z);
  class_<gp_Dir>("gp_Dir")
    .constructor<double, double, double>();
  class_<gp_Ax2>("gp_Ax2")
    .constructor<const gp_Pnt&, const gp_Dir&>();

  class_<TopoDS_Shape>("TopoDS_Shape")
    .constructor<>()
    .function("IsNull", &TopoDS_Shape::IsNull)
    .function("ShapeType", &TopoDS_Shape::ShapeType);
  class_<TopoDS_Face, base<TopoDS_Shape>>("TopoDS_Face")
    .constructor<>();

  enum_<TopAbs_ShapeEnum>("TopAbs_ShapeEnum")
    .value("COMPOUND",  TopAbs_COMPOUND)
    .value("COMPSOLID", TopAbs_COMPSOLID)
    .value("SOLID",     TopAbs_SOLID)
    .value("SHELL",     TopAbs_SHELL)
    .value("FACE",      TopAbs_FACE)
    .value("WIRE",      TopAbs_WIRE)
    .value("EDGE",      TopAbs_EDGE)
    .value("VERTEX",    TopAbs_VERTEX)
    .value("SHAPE",     TopAbs_SHAPE);

  // TopExp_Explorer ctor has trailing TopAbs_SHAPE default → single
  // lambda with std::optional<TopAbs_ShapeEnum>. Replaces 2 fan-out
  // registrations (arity 2 + arity 3) from Corpus A.
  class_<TopExp_Explorer>("TopExp_Explorer")
    .constructor<>()
    .constructor(optional_override([](const TopoDS_Shape& s, TopAbs_ShapeEnum f,
                                      std::optional<TopAbs_ShapeEnum> a) {
      return std::unique_ptr<TopExp_Explorer>(
        new TopExp_Explorer(s, f, a.value_or(TopAbs_SHAPE)));
    }))
    .function("More",    &TopExp_Explorer::More)
    .function("Next",    &TopExp_Explorer::Next)
    .function("Current", &TopExp_Explorer::Current);

  class_<TopLoc_Location>("TopLoc_Location").constructor<>();

  struct TopoDS_Cast {};
  class_<TopoDS_Cast>("TopoDS_Cast")
    .class_function("Face", optional_override([](const TopoDS_Shape& s) -> TopoDS_Face {
      return TopoDS::Face(s);
    }));

  class_<BRepPrimAPI_MakeBox>("BRepPrimAPI_MakeBox")
    .constructor<double, double, double>()
    .function("Shape", optional_override([](BRepPrimAPI_MakeBox& self) -> TopoDS_Shape {
      return self.Shape();
    }));

  // BRepPrimAPI_MakeSphere — production-density multi-arity ctor set.
  // Real OCCT exposes 11 overloads at C++ level; we bind a representative
  // 4 (arities 1, 2 with C1 same-arity sibling, 3, 4) to stress the
  // dispatcher with a {1, 2, 3, 4} arity set:
  //   arity 1 → R
  //   arity 2 → R+angle  OR  Pnt+R   (C1 type-dispatch sibling pair)
  //   arity 3 → R+angle1+angle2
  //   arity 4 → R+angle1+angle2+angle3
  // The interesting test cases:
  //   - `new MakeSphere(R, angle)` → exact arity 2 → C1 picks (R, angle) by type
  //   - `new MakeSphere(pnt, R)`   → exact arity 2 → C1 picks (Pnt, R) by type
  //   - `new MakeSphere(R)`        → exact arity 1 → no padding (already smallest)
  class_<BRepPrimAPI_MakeSphere>("BRepPrimAPI_MakeSphere")
    .constructor<double>()
    .constructor<double, double>()
    .constructor<const gp_Pnt&, double>()
    .constructor<double, double, double>()
    .constructor<double, double, double, double>()
    .function("Shape", optional_override([](BRepPrimAPI_MakeSphere& self) -> TopoDS_Shape {
      return self.Shape();
    }));

  // ── Gate 2 edge case: arity-pad + C1 type-dispatch interaction ──────
  // Synthetic class with arity set {0, 2} where arity 2 has TWO same-arity
  // overloads (one taking gp_Pnt, one taking gp_Dir). When JS calls with
  // arity 1, arity-pad targets arity 2 → dispatcher must resolve via C1
  // type-dispatch on the partially-padded args.
  //
  // The padded position is `undefined`. The arity-2 lambdas take an
  // std::optional<double> for that position, so the binding semantics
  // are well-defined. But the C1 dispatcher's getSignature currently
  // matches `typeof undefined === 'undefined'` against the type table —
  // this test surfaces what actually happens.
  struct AmbigCtor {
    int routedBy;  // 1 = Pnt overload, 2 = Dir overload
    double tail;
    AmbigCtor() : routedBy(0), tail(0.0) {}
    AmbigCtor(const gp_Pnt& /*p*/, double t) : routedBy(1), tail(t) {}
    AmbigCtor(const gp_Dir& /*d*/, double t) : routedBy(2), tail(t) {}
  };
  class_<AmbigCtor>("AmbigCtor")
    .constructor<>()
    .constructor(optional_override([](const gp_Pnt& p, std::optional<double> t) {
      return std::unique_ptr<AmbigCtor>(new AmbigCtor(p, t.value_or(99.0)));
    }))
    .constructor(optional_override([](const gp_Dir& d, std::optional<double> t) {
      return std::unique_ptr<AmbigCtor>(new AmbigCtor(d, t.value_or(99.0)));
    }))
    .property("routedBy", &AmbigCtor::routedBy)
    .property("tail", &AmbigCtor::tail);

  class_<Message_ProgressRange>("Message_ProgressRange").constructor<>();

  // ── BRepMesh_IncrementalMesh — the headline win ─────────────────────
  // Corpus A emits 5 ctor registrations (default + arity-2 + arity-3 +
  // arity-4 + arity-5 for the primary ctor). Corpus B emits 2:
  //   - default ctor
  //   - ONE lambda with std::optional<bool>, std::optional<double>,
  //     std::optional<bool> for the 3 trailing defaults of the 5-arg form.
  // The arity-2 form (Shape, double) is the unwrapped-default path —
  // identical surface to Corpus A's arity-2 registration but achieved
  // through std::optional materialisation instead of a separate lambda.
  // BRepMesh_IncrementalMesh — bound here with the std::unique_ptr return
  // pattern (simplifies smart_ptr machinery for the headline Option C test).
  class_<BRepMesh_IncrementalMesh>("BRepMesh_IncrementalMesh")
    .constructor<>()
    .constructor(optional_override([](
      const TopoDS_Shape& s,
      double d,
      std::optional<bool> rel,
      std::optional<double> ang,
      std::optional<bool> par
    ) {
      return std::unique_ptr<BRepMesh_IncrementalMesh>(
        new BRepMesh_IncrementalMesh(
          s, d,
          rel.value_or(false),
          ang.value_or(0.5),
          par.value_or(false)));
    }))
    .function("IsDone", optional_override([](BRepMesh_IncrementalMesh& self) -> bool {
      return self.IsDone();
    }));

  // ── Gate 3: production-style smart_ptr<handle<T>> + std::optional ─────
  // Mirror the EXACT shape production bindgen emits for OCCT classes:
  //   .smart_ptr<opencascade::handle<T>>("Handle_T")
  //   .constructor(optional_override([](...) {
  //     return opencascade::handle<T>(new T(...));
  //   }))
  //
  // We define a thin alias subclass `IM_Handled` so embind sees it as a
  // distinct C++ type from `BRepMesh_IncrementalMesh` (already bound
  // above with the unique_ptr shape). This lets the same physical IM
  // ctor surface participate in both bindings and isolates the smart_ptr
  // path for the Gate-3 test.
  //
  // The compose claim being validated: std::optional<T> + .value_or()
  // inside the ctor lambda BODY interacts correctly with
  // opencascade::handle<T> as the lambda RETURN type, AND the
  // arity-pad + std::optional dispatch logic works end-to-end against
  // smart_ptr-bound classes.
  struct IM_Handled : public BRepMesh_IncrementalMesh {
    using BRepMesh_IncrementalMesh::BRepMesh_IncrementalMesh;
  };
  // (base<BRepMesh_DiscretRoot> intentionally omitted — the base class
  // isn't bound in this PoC, and the smart_ptr machinery doesn't require
  // it for the test surface we're validating.)
  class_<IM_Handled>("HandleIM")
    .smart_ptr<opencascade::handle<IM_Handled>>("Handle_HandleIM")
    .constructor(optional_override([](
      const TopoDS_Shape& s,
      double d,
      std::optional<bool> rel,
      std::optional<double> ang,
      std::optional<bool> par
    ) {
      return opencascade::handle<IM_Handled>(
        new IM_Handled(
          s, d,
          rel.value_or(false),
          ang.value_or(0.5),
          par.value_or(false)));
    }));

  function("HandleIM_IsDone",
    optional_override([](const opencascade::handle<IM_Handled>& h) -> bool {
      return !h.IsNull() && h->IsDone();
    }));

  // ── R3: std::optional<opencascade::handle<T>> as a trailing param ────
  // Validates the cross-product of std::optional + smart_ptr. Real OCCT
  // signatures of the shape:
  //   void f(const TopoDS_Shape&, const Handle(ProgressIndicator)& = Handle())
  // would be translated under Option C to:
  //   void f(const TopoDS_Shape&, std::optional<opencascade::handle<T>>)
  //
  // Open questions answered by this binding's tests:
  //   (a) does register_optional<opencascade::handle<T>>() compile?
  //   (b) does EmValOptionalType.toWireType accept a JS Handle_HandleIM
  //       object and pass it through genericPointerToWireType?
  //   (c) does .value_or(opencascade::handle<T>()) (null handle default)
  //       return a value the OCCT call accepts?
  //   (d) what do null / undefined inputs unwrap to?
  //
  // The function returns an int-encoded outcome so the JS test can assert
  // exact behaviour:
  //    -1  shape is null (defensive guard)
  //     0  handle param was nullopt / null handle    → C++ default applied
  //     1  handle param was a non-null handle        → caller's handle used
  function("optional_handle_probe", optional_override([](
      const TopoDS_Shape& shape,
      std::optional<opencascade::handle<IM_Handled>> h) -> int {
    if (shape.IsNull()) return -1;
    // .value_or() needs an rvalue null handle as the default — exactly
    // the OCCT idiom for `= Handle_XXX()` trailing defaults.
    opencascade::handle<IM_Handled> resolved = h.value_or(opencascade::handle<IM_Handled>());
    if (resolved.IsNull()) return 0;
    // Sanity-touch the caller's handle so we know it actually crossed the
    // wire intact (not a stale pointer / wrong type).
    return resolved->IsDone() ? 1 : 1;
  }));
  // register_optional<T>() for the new T this surface uses. Idempotent
  // per R2's thread_local guard — safe to repeat across TUs and within
  // the same TU.
  register_optional<opencascade::handle<IM_Handled>>();

  // ── R4: same-arity emscripten::val vs std::optional<T> ambiguity ─────
  // Two sibling overloads at arity 1, one taking `emscripten::val` and
  // one taking `std::optional<double>`. Both register as
  // `emscripten::val`-typed slots in the C1 signaturesArray (the
  // EmValOptionalType.name is literally "emscripten::val"). Open
  // question: with our optional-wildcard added to $getSignature, does
  // the dispatcher silently misdispatch, or does C1's match-loop pick
  // the first-registered sibling deterministically?
  //
  // ValOptAmbig::probe returns:
  //   "val"      → val-overload was dispatched
  //   "opt-X.X"  → std::optional<double> overload was dispatched, with
  //                .value_or(99) so unset shows "opt-99.0"
  struct ValOptAmbig {
    std::string lastDispatched;
    ValOptAmbig() : lastDispatched("ctor") {}
  };
  class_<ValOptAmbig>("ValOptAmbig")
    .constructor<>()
    .function("probe", optional_override([](ValOptAmbig& self, emscripten::val /*v*/) {
      self.lastDispatched = "val";
    }))
    .function("probe", optional_override([](ValOptAmbig& self, std::optional<double> d) {
      double v = d.value_or(99.0);
      self.lastDispatched = "opt-" + std::to_string(v);
    }))
    .property("lastDispatched", &ValOptAmbig::lastDispatched);

  // Reverse registration order — same surface, opt FIRST. Confirms whether
  // the winner is "first-registered" or "val-always-wins".
  struct ValOptAmbigRev {
    std::string lastDispatched;
    ValOptAmbigRev() : lastDispatched("ctor") {}
  };
  class_<ValOptAmbigRev>("ValOptAmbigRev")
    .constructor<>()
    .function("probe", optional_override([](ValOptAmbigRev& self, std::optional<double> d) {
      double v = d.value_or(99.0);
      self.lastDispatched = "opt-" + std::to_string(v);
    }))
    .function("probe", optional_override([](ValOptAmbigRev& self, emscripten::val /*v*/) {
      self.lastDispatched = "val";
    }))
    .property("lastDispatched", &ValOptAmbigRev::lastDispatched);

  // ── R5: real OCCT trailing-default shapes ────────────────────────────
  // Four function bindings, each demonstrating ONE of the trailing-default
  // shapes OCCT actually uses. The expected bindgen output is the
  // optional_override lambda body — these are the lambdas verbatim that
  // bindgen would emit per shape. Each returns an int probe value so the
  // JS test can assert behaviour when the trailing arg is omitted vs
  // explicit.

  // -- Shape 1: function-call expression default (Precision::Confusion()) --
  // Real OCCT: `bool foo(double v, double tol = Precision::Confusion())`
  // Translation: std::optional<double> tol; tol.value_or(Precision::Confusion())
  // Note: value_or RVALUE conversion semantics — Precision::Confusion() is an
  // rvalue double, perfectly forwardable. Trivial.
  function("r5_funccall_default", optional_override([](
      double v, std::optional<double> tol) -> double {
    return v + tol.value_or(Precision::Confusion());
  }));

  // -- Shape 2: handle expression default (null handle) --
  // Real OCCT: `void f(..., const Handle(ProgressIndicator)& = Handle())`
  // Translation: std::optional<opencascade::handle<T>>; .value_or(handle<T>())
  // Already validated in R3 — re-bind here as a self-contained probe so
  // the R5 test file is single-source-of-truth for the four shapes.
  // Returns 1 if null-handle default applied, 0 if non-null handle passed.
  function("r5_handle_default", optional_override([](
      const TopoDS_Shape& s,
      std::optional<opencascade::handle<IM_Handled>> h) -> int {
    auto resolved = h.value_or(opencascade::handle<IM_Handled>());
    return resolved.IsNull() ? 1 : 0;
  }));

  // -- Shape 3: class-constructed VALUE default (default-ctor object) --
  // Real OCCT: many builders take `... = TopLoc_Location()`. When the
  // signature is BY VALUE (not const&), std::optional<T> + .value_or(T{})
  // is trivial. TopLoc_Location is small + cheap to default-construct.
  function("r5_classvalue_default", optional_override([](
      const TopoDS_Shape& s,
      std::optional<TopLoc_Location> loc) -> int {
    TopLoc_Location resolved = loc.value_or(TopLoc_Location());
    // IsIdentity() is true for default-constructed TopLoc_Location.
    return resolved.IsIdentity() ? 1 : 0;
  }));

  // -- Shape 4: const T& with anonymous temporary default --
  // Real OCCT: `void f(..., const TopLoc_Location& loc = TopLoc_Location())`
  // The signature uses `const T&`, but std::optional<const T&> is FORBIDDEN
  // by the C++ standard. Bindgen MUST translate to `std::optional<T>`
  // (by-value at the JS boundary), then bind the value_or result to a
  // const& at call time inside the lambda body. The ABI shift is invisible
  // to the JS caller — but documented because it's the most surprising of
  // the four shapes.
  function("r5_constref_default", optional_override([](
      const TopoDS_Shape& s,
      std::optional<TopLoc_Location> loc) -> int {
    // value_or returns T by value; we bind it to const& explicitly here to
    // demonstrate the construction the bindgen-emitted lambda body uses
    // when forwarding to an OCCT call that takes const T&.
    const TopLoc_Location& resolved = loc.value_or(TopLoc_Location());
    return resolved.IsIdentity() ? 1 : 0;
  }));
  register_optional<TopLoc_Location>();

  // ── R6: deliberately-wrong "output param as std::optional" binding ───
  // OCCT idiom: `void Compute(const Input&, Output& out)` where `out` is
  // a non-const reference SINK the function writes into. The TR-OUT
  // strategic category covers this — production bindgen emits these via
  // RBV or a value-object envelope. Under Option C this MUST NOT happen,
  // because std::optional<T> is by-value at the JS boundary — the caller
  // never sees the C++-side mutation.
  //
  // First, we verify std::optional<T&> (reference) is FORBIDDEN at
  // COMPILE time by the standard — but we cannot directly express that
  // in a runtime test. So we test the misclassification mode bindgen
  // could realistically hit: emitting std::optional<T> BY VALUE for a
  // parameter that the original C++ signature has as `T&`.
  //
  // ground_truth_output_sink_inplace mutates its `out` reference; that's
  // the correct OCCT-style binding (passed via embind's reference
  // mechanism). It writes `42` into out.
  //
  // bad_output_sink_via_optional accepts std::optional<gp_Pnt> by value
  // — bindgen's misclassification mode — and "mutates" the value_or
  // result. The mutation is LOST: the JS caller's gp_Pnt is unaffected
  // because the value crossed the wire by value. The probe lets the JS
  // test demonstrate the silent-corruption mode.
  function("r6_correct_output_sink", optional_override([](
      const TopoDS_Shape& s, gp_Pnt& out) {
    out = gp_Pnt(42.0, 43.0, 44.0);
  }));
  function("r6_bad_output_via_optional", optional_override([](
      const TopoDS_Shape& s, std::optional<gp_Pnt> out) {
    // Even if bindgen "tries" to write into the optional value, the
    // mutation never reaches the JS caller — std::optional<T> wraps a
    // VALUE, not a reference. Demonstrate the failure mode.
    gp_Pnt copy = out.value_or(gp_Pnt(0, 0, 0));
    copy.SetX(42.0); copy.SetY(43.0); copy.SetZ(44.0);
    // (copy is discarded — JS caller's gp_Pnt is unchanged)
  }));
  register_optional<gp_Pnt>();
  // Note on std::optional<gp_Pnt&>: this would fail to compile because
  // std::optional<T&> is forbidden by the C++ standard until C++26 (and
  // is not in the libembind register_optional surface). Bindgen
  // ATTEMPTING to emit it would produce a COMPILE-TIME error, not a
  // runtime one — which is the desired loud failure mode. We do not
  // include such a binding here because it would intentionally break
  // the build; the loud-fail property is documented instead.

  // ── BRep_Tool::Triangulation — same wrapper (no trailing-default surface here) ──
  function("BRep_Tool_NbTriangles", optional_override([](const TopoDS_Face& f) -> int {
    TopLoc_Location loc;
    const auto& tri = BRep_Tool::Triangulation(f, loc);
    return tri.IsNull() ? 0 : tri->NbTriangles();
  }));

  function("count_triangles", optional_override([](const TopoDS_Shape& s) -> int {
    int total = 0;
    for (TopExp_Explorer ex(s, TopAbs_FACE); ex.More(); ex.Next()) {
      TopLoc_Location loc;
      const auto& tri = BRep_Tool::Triangulation(TopoDS::Face(ex.Current()), loc);
      if (!tri.IsNull()) total += tri->NbTriangles();
    }
    return total;
  }));

  // ── single-overload free function on real OCCT — isolates multi-ctor limitation ──
  // Same operation as the IM ctor + count_triangles, but exposed as a SINGLE
  // free function (one overload, one arity). The relaxed-arity verifier's
  // upstream path handles single-overload calls without ambiguity, so this
  // proves std::optional padding works on real OCCT in isolation. The IM
  // ctor failure is therefore strictly attributable to multi-overload-arity
  // ctor sets (the Option C′ gap), not to std::optional itself.
  function("mesh_sphere_via_optional",
    optional_override([](double radius, double linDef,
                         std::optional<bool> rel,
                         std::optional<double> ang,
                         std::optional<bool> par) -> int {
      auto shape = BRepPrimAPI_MakeSphere(radius).Shape();
      BRepMesh_IncrementalMesh im(shape, linDef,
        rel.value_or(false),
        ang.value_or(0.5),
        par.value_or(false));
      if (!im.IsDone()) return -1;
      int total = 0;
      for (TopExp_Explorer ex(shape, TopAbs_FACE); ex.More(); ex.Next()) {
        TopLoc_Location loc;
        const auto& tri = BRep_Tool::Triangulation(TopoDS::Face(ex.Current()), loc);
        if (!tri.IsNull()) total += tri->NbTriangles();
      }
      return total;
    }));

  // ── T1: multi-optional same-arity wildcard collision determinism ─────
  // Two siblings at arity 2 where ALL positions are std::optional<T> →
  // both keys' isKeyMatched returns true (via our optional-wildcard) →
  // C1's keys.some() loop picks the first matching key. We register two
  // pairs in opposite orders to determine whether the winner is
  // "first-registered" or "type-priority-driven" (R4 found val wins by
  // type-priority; for two pure-optional siblings there's no type
  // priority to apply, so registration order is the only signal left).
  struct MultiOptAmbig {
    std::string lastDispatched;
    MultiOptAmbig() : lastDispatched("ctor") {}
  };
  class_<MultiOptAmbig>("MultiOptAmbig")
    .constructor<>()
    // Two arity-2 siblings, ALL positions std::optional. Different T's
    // so the C++ overloads are actually distinct functions.
    .function("probe", optional_override([](MultiOptAmbig& s,
                                            std::optional<double> /*d*/,
                                            std::optional<bool>   /*b*/) {
      s.lastDispatched = "double+bool";
    }))
    .function("probe", optional_override([](MultiOptAmbig& s,
                                            std::optional<int>    /*i*/,
                                            std::optional<std::string> /*str*/) {
      s.lastDispatched = "int+string";
    }))
    .property("lastDispatched", &MultiOptAmbig::lastDispatched);

  struct MultiOptAmbigRev {
    std::string lastDispatched;
    MultiOptAmbigRev() : lastDispatched("ctor") {}
  };
  class_<MultiOptAmbigRev>("MultiOptAmbigRev")
    .constructor<>()
    .function("probe", optional_override([](MultiOptAmbigRev& s,
                                            std::optional<int>    /*i*/,
                                            std::optional<std::string> /*str*/) {
      s.lastDispatched = "int+string";
    }))
    .function("probe", optional_override([](MultiOptAmbigRev& s,
                                            std::optional<double> /*d*/,
                                            std::optional<bool>   /*b*/) {
      s.lastDispatched = "double+bool";
    }))
    .property("lastDispatched", &MultiOptAmbigRev::lastDispatched);
  register_optional<int>();
  register_optional<std::string>();

  // ── T2: static (class_function) dispatcher coverage with std::optional ──
  // The Gate-1 arity-pad hunk lives in $ensureOverloadTable. Static
  // methods (.class_function) go through the SAME machinery as instance
  // methods per emscripten internals, so this should work — but it's
  // unverified empirically. One probe is enough to confirm.
  struct StaticOptProbe {
    static int probe(std::optional<double> v) {
      return static_cast<int>(v.value_or(99.0));
    }
  };
  class_<StaticOptProbe>("StaticOptProbe")
    .constructor<>()
    .class_function("probe", &StaticOptProbe::probe);

  // ── T3: std::optional<T> as RETURN type (exercises fromWireType) ─────
  // All R1–R6 bindings use std::optional<T> as a PARAMETER (toWireType).
  // Production bindgen will need to return std::optional<T> for Maybe-
  // shaped APIs. This exercises EmValOptionalType.fromWireType, which is
  // a separate code path with separate failure modes.
  function("t3_maybe_value", optional_override([](bool produce) -> std::optional<double> {
    if (produce) return std::optional<double>(42.0);
    return std::nullopt;
  }));

  // ── T4: register_optional<T> for non-default-constructible T ─────────
  // OCCT classes like BRepPrimAPI_MakeBox have no default constructor
  // (the smallest ctor is (double, double, double)). std::optional<T>
  // itself does not require T to be default-constructible — it can hold
  // nullopt without ever constructing a T. EmValOptionalType's toWireType
  // / fromWireType use the copy/move ctor and destructor.
  //
  // We use a synthetic NonDefault class so the test is portable and
  // doesn't depend on which OCCT class happens to be non-default-ctor at
  // the moment. (BRepPrimAPI_MakeBox is also non-default-ctor; both
  // categories of T should work identically.)
  struct NonDefault {
    int x;
    NonDefault(int x_) : x(x_) {}
    NonDefault(const NonDefault&) = default;
    NonDefault(NonDefault&&) = default;
    // NO default ctor.
  };
  class_<NonDefault>("NonDefault")
    .constructor<int>()
    .property("x", &NonDefault::x);
  // If THIS line fails to compile, bindgen needs a default-ctor
  // precondition check before emitting std::optional<T> for any T.
  register_optional<NonDefault>();
  // Round-trip: take a std::optional<NonDefault>, return its .x or -1.
  function("t4_optional_nondefault", optional_override([](
      std::optional<NonDefault> nd) -> int {
    if (!nd.has_value()) return -1;
    return nd->x;
  }));

  // ── U1: mixed C2 fan-out + std::optional in SAME class/module ────────
  // Migration sequencing risk: during incremental rollout some methods
  // will be fan-out style and others will be std::optional style WITHIN
  // ONE module. The dispatcher must handle both patterns without
  // confusion. We bind `MixedClass` with:
  //   - method_fanout: 4 same-name arity registrations (mimics what
  //     production bindgen emits TODAY for a 3-default-trailing-arg
  //     method).
  //   - method_optional: 1 same-name lambda using std::optional for
  //     each trailing default (mimics post-R5 bindgen output for the
  //     equivalent C++ signature).
  // Both methods take a leading int (so they're DIFFERENT method names,
  // can't be confused with each other) and end up calling the same
  // underlying compute. JS calls all arity shapes for both methods and
  // we assert each returns the expected computed value.
  struct MixedClass {
    int salt;
    MixedClass(int s) : salt(s) {}
    int compute(int a, bool b, double c, bool d) const {
      return salt + a + (b ? 100 : 0) + static_cast<int>(c * 1000) + (d ? 10000 : 0);
    }
  };
  class_<MixedClass>("MixedClass")
    .constructor<int>()
    // Fan-out style — four arity-truncated registrations under the same
    // method name. This is the pre-migration shape.
    .function("method_fanout", optional_override([](const MixedClass& m, int a) {
      return m.compute(a, false, 0.5, false);
    }))
    .function("method_fanout", optional_override([](const MixedClass& m, int a, bool b) {
      return m.compute(a, b, 0.5, false);
    }))
    .function("method_fanout", optional_override([](const MixedClass& m, int a, bool b, double c) {
      return m.compute(a, b, c, false);
    }))
    .function("method_fanout", optional_override([](const MixedClass& m, int a, bool b, double c, bool d) {
      return m.compute(a, b, c, d);
    }))
    // std::optional style — single lambda with optional trailing args.
    // This is the post-R5 shape. Lives alongside method_fanout in the
    // same registeredClass entry — must coexist.
    .function("method_optional", optional_override([](const MixedClass& m,
                                                      int a,
                                                      std::optional<bool> b,
                                                      std::optional<double> c,
                                                      std::optional<bool> d) {
      return m.compute(a, b.value_or(false), c.value_or(0.5), d.value_or(false));
    }));

  // ── U3: lifetime / destructor balance for std::optional<class T> ─────
  // For non-trivially-destructible class T, the toWireType path
  // constructs a T inside std::optional<T> via copy/move. The lambda
  // body's .value_or(T{}) may construct another T. The optional itself
  // destroys T on scope exit. Net ctor/dtor count must balance — any
  // imbalance is a leak (more ctors) or a double-free (more dtors).
  //
  // LifecycleTrack (file-scope; see top of file) carries static counters
  // incremented in each special member function. JS-side asserts read
  // the counts after each call and verify (ctors == dtors) at the end.
  class_<LifecycleTrack>("LifecycleTrack")
    .constructor<int>()
    .property("payload", &LifecycleTrack::payload);
  register_optional<LifecycleTrack>();

  // Read+reset counter helpers so the JS test can snapshot before/after.
  function("u3_counts", optional_override([]() {
    val o = val::object();
    o.set("ctors", LifecycleTrack::ctorCount);
    o.set("copies", LifecycleTrack::copyCount);
    o.set("moves", LifecycleTrack::moveCount);
    o.set("dtors", LifecycleTrack::dtorCount);
    return o;
  }));
  function("u3_reset_counts", optional_override([]() {
    LifecycleTrack::ctorCount = 0;
    LifecycleTrack::copyCount = 0;
    LifecycleTrack::moveCount = 0;
    LifecycleTrack::dtorCount = 0;
  }));

  // The actual under-test function: takes a std::optional<LifecycleTrack>,
  // returns the payload or -1 for nullopt. Two flavours so we can isolate
  // (a) the omitted-arg path (no T crosses the wire) from (b) the
  // explicit-arg path (T copy-constructed inside the optional).
  function("u3_optional_consume", optional_override([](
      std::optional<LifecycleTrack> t) -> int {
    if (!t.has_value()) return -1;
    return t->payload;
  }));
  // Side-by-side baseline: same function but T by const&, no optional.
  // Lets us compare the wire-level ctor/copy count for the optional path
  // against the simplest possible non-optional path.
  function("u3_ref_consume", optional_override([](
      const LifecycleTrack& t) -> int {
    return t.payload;
  }));

  // ── U4: refcount balance for std::optional<opencascade::handle<T>> ───
  // R3 verified routing (omitted/null/handle/undefined) but not
  // refcount. opencascade::handle<T> increments T's refcount on copy/
  // assignment and decrements on destruction. If the optional path
  // doesn't balance these correctly, long-lived JS handles could leak
  // OCCT memory.
  //
  // u4_handle_refcount returns the current refcount of the handle so
  // JS can compare before-call vs after-call.
  function("u4_handle_refcount", optional_override([](
      const opencascade::handle<IM_Handled>& h) -> int {
    if (h.IsNull()) return 0;
    return h->GetRefCount();
  }));
  // Probe that takes std::optional<handle>, exercises it (call IsDone
  // through it), and discards. Refcount must return to baseline.
  function("u4_optional_exercise", optional_override([](
      std::optional<opencascade::handle<IM_Handled>> h) -> int {
    auto resolved = h.value_or(opencascade::handle<IM_Handled>());
    if (resolved.IsNull()) return 0;
    return resolved->IsDone() ? 1 : 0;
  }));
}

int LifecycleTrack::ctorCount = 0;
int LifecycleTrack::copyCount = 0;
int LifecycleTrack::moveCount = 0;
int LifecycleTrack::dtorCount = 0;
