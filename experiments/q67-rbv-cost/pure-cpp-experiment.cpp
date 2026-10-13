// Pure-C++ probe: can we attach `Symbol.dispose` to a `val::object()` entirely
// from C++ source — no post.js, no --pre-js, no --js-library, no JS file at all
// (except embind's own machinery) — and have V8 13.6 (Node 24.x) accept it in
// a `using` declaration?
//
// Variants:
//   V6 fn_ctor:    `Function(src)` constructor — JS source authored inline in C++ as a string literal
//   V7 embind_fn:  emscripten::function(...) free-function registered via embind
//   V8 cls_fn:     emscripten::class_function on a stub class
//   V9 cls_method: regular instance method on an empty stub class (receiver mismatch expected)
//   V10 fn_ctor_cached: V6 but cached at first use to avoid the per-call Function(src) compile
//
// Build: ./build-pure-cpp.sh

#include <emscripten/bind.h>
#include <emscripten/val.h>

using namespace emscripten;

struct Pnt3 {
  Pnt3() = default;
  ~Pnt3() = default;
};

class Container {};
class StubDispatcher {
public:
  StubDispatcher() = default;
  void disposeInstance() {}
};

static val makeFnFromSource() {
  return val::global("Function")(std::string(
    "for (const k in this) {"
    "  if (Object.prototype.hasOwnProperty.call(this, k)) {"
    "    const v = this[k];"
    "    if (v && typeof v.delete === 'function') v.delete();"
    "  }"
    "}"
  ));
}

static val pureCppDisposeStatic() {
  return val::undefined();
}

static void embindFreeDispose() {}

class StubClass {
public:
  StubClass() = default;
  void disposeMember() {}
  static void disposeStatic() {}
};

EMSCRIPTEN_BINDINGS(pure_cpp_probe) {
  class_<Pnt3>("Pnt3").constructor<>();

  class_<Container>("Container")
    .constructor<>()
    .class_function("makeV6_fn_ctor", optional_override([]() -> val {
      val out = val::object();
      out.set("theP", Pnt3{});
      out.set("theV1", Pnt3{});
      val sym = val::global("Symbol")["dispose"];
      out.set(sym, makeFnFromSource());
      return out;
    }))
    .class_function("makeV6_cached", optional_override([]() -> val {
      static val cachedFn = makeFnFromSource();
      val out = val::object();
      out.set("theP", Pnt3{});
      out.set("theV1", Pnt3{});
      val sym = val::global("Symbol")["dispose"];
      out.set(sym, cachedFn);
      return out;
    }))
    .class_function("makeV7_embind_fn", optional_override([]() -> val {
      val out = val::object();
      out.set("theP", Pnt3{});
      out.set("theV1", Pnt3{});
      val sym = val::global("Symbol")["dispose"];
      val fn = val::module_property("__embind_dispose__");
      out.set(sym, fn);
      return out;
    }))
    .class_function("makeV8_cls_static", optional_override([]() -> val {
      val out = val::object();
      out.set("theP", Pnt3{});
      out.set("theV1", Pnt3{});
      val sym = val::global("Symbol")["dispose"];
      val StubCls = val::module_property("StubClass");
      val fn = StubCls["disposeStatic"];
      out.set(sym, fn);
      return out;
    }))
    .class_function("makeV9_cls_proto_method", optional_override([]() -> val {
      val out = val::object();
      out.set("theP", Pnt3{});
      out.set("theV1", Pnt3{});
      val sym = val::global("Symbol")["dispose"];
      val StubCls = val::module_property("StubClass");
      val fn = StubCls["prototype"]["disposeMember"];
      out.set(sym, fn);
      return out;
    }))
    .class_function("makeV11_typeof_check", optional_override([]() -> val {
      val out = val::object();
      val sym = val::global("Symbol")["dispose"];
      out.set(sym, makeFnFromSource());
      val typeofFn = val::global("Object")["getPrototypeOf"];
      return out;
    }));

  emscripten::function("__embind_dispose__", &embindFreeDispose);

  class_<StubClass>("StubClass")
    .constructor<>()
    .function("disposeMember", &StubClass::disposeMember)
    .class_function("disposeStatic", &StubClass::disposeStatic);
}
