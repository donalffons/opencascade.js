// CSP-safe probe: can we get pure-C++ codebase ownership (no separate .js file)
// AND CSP-safety (no `eval` / `Function(src)`) by using `EM_JS` to embed the
// disposer source in C++? EM_JS emits a normal named JS function via a section
// of the .o file picked up at link time — no runtime eval.
//
// Build: ./build-csp-safe.sh

#include <emscripten/bind.h>
#include <emscripten/val.h>
#include <emscripten/em_js.h>

using namespace emscripten;

struct Pnt3 { Pnt3() = default; ~Pnt3() = default; };
class Container {};

EM_JS(void, ocjs_register_rbv_dispose, (), {
  Module["__ocjsRbvDispose__"] = function () {
    for (const k in this) {
      if (Object.prototype.hasOwnProperty.call(this, k)) {
        const v = this[k];
        if (v && typeof v.delete === 'function') v.delete();
      }
    }
  };
});

static val getRbvDispose() {
  static const auto _init = []() { ocjs_register_rbv_dispose(); return 0; }();
  (void)_init;
  static val cached = val::module_property("__ocjsRbvDispose__");
  return cached;
}

static val getSymbolDispose() {
  static val cached = val::global("Symbol")["dispose"];
  return cached;
}

EMSCRIPTEN_BINDINGS(csp_safe_probe) {
  class_<Pnt3>("Pnt3").constructor<>();

  class_<Container>("Container")
    .constructor<>()
    .class_function("makeViaEmJs", optional_override([]() -> val {
      val out = val::object();
      out.set("theP", Pnt3{});
      out.set("theV1", Pnt3{});
      val sym = val::global("Symbol")["dispose"];
      out.set(sym, val::module_property("__ocjsRbvDispose__"));
      return out;
    }))
    .class_function("makeViaEmJsCached", optional_override([]() -> val {
      val out = val::object();
      out.set("theP", Pnt3{});
      out.set("theV1", Pnt3{});
      out.set(getSymbolDispose(), getRbvDispose());
      return out;
    }))
    .class_function("makeWithoutDispose", optional_override([]() -> val {
      val out = val::object();
      out.set("theP", Pnt3{});
      out.set("theV1", Pnt3{});
      return out;
    }));
}
