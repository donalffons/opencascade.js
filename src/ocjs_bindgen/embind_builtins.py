"""Embind built-in registration source.

The literal C++ text compiled with every ``additionalBindFiles`` translation
unit at link time. Hosted as a module-level constant so the dedicated
``ocjs_bindgen.bind_symbols`` NX stage can parse it via libclang without
importing ``ocjs_bindgen.link.yaml_build`` (which would transitively pull
in the entire link driver — and thus break NX dep-graph isolation between
the ``bind-symbols`` and ``link`` stages).

Both this module and ``link.yaml_build`` import ``BUILTIN_BINDINGS_SOURCE``
from here so the link compile and the bind-symbols extractor always see
byte-identical source. ``OCJS_RBV_PREAMBLE`` is included for the same
reason — the binding preamble injected into every generated binding TU
shares the forward-decl + inline-namespace helpers that
``BUILTIN_BINDINGS_SOURCE`` itself depends on, so co-locating both
constants keeps the producer/consumer surface in one file.
"""

from __future__ import annotations

OCJS_RBV_PREAMBLE = r"""
#include <emscripten/val.h>
#include <type_traits>
#include <utility>

namespace ocjs {
  // True when `delete p` is well-formed for `T*`: the destructor is
  // accessible and class-scope `operator delete` lookup finds a usual
  // (non-placement) form. Access and lookup failures are SFINAE errors.
  template <typename T, typename = void>
  struct is_deletable : std::false_type {};
  template <typename T>
  struct is_deletable<T, std::void_t<decltype(delete std::declval<T*>())>> : std::true_type {};

  // Backs the `raw_destructor<T>` specializations bindgen emits for classes
  // that declare placement `operator delete` or a non-public destructor.
  // Frees the object when C++ allows it, and leaves it alone otherwise.
  template <typename T>
  void destroy(T* ptr) {
    if constexpr (is_deletable<T>::value) {
      delete ptr;
    }
  }
}

extern "C" void ocjs_register_rbv_dispose();

namespace ocjs {
  // Magic-static + cached val: registration runs exactly once per TU on first
  // call, after the emscripten runtime is up. Subsequent calls return the
  // cached val handle directly — no JS<->WASM crossings per RBV call.
  // `ocjs_register_rbv_dispose` is idempotent (assigns to Module), so multiple
  // TU-local registrations are safe.
  inline ::emscripten::val getRbvDispose() {
    static const auto _init = []() { ocjs_register_rbv_dispose(); return 0; }();
    (void)_init;
    static ::emscripten::val cached = ::emscripten::val::module_property("__ocjsRbvDispose__");
    return cached;
  }
  inline ::emscripten::val getSymbolDispose() {
    static ::emscripten::val cached = ::emscripten::val::global("Symbol")["dispose"];
    return cached;
  }
}
"""

BUILTIN_BINDINGS_SOURCE = r"""
#include <TopoDS.hxx>
#include <TopoDS_Vertex.hxx>
#include <TopoDS_Edge.hxx>
#include <TopoDS_Wire.hxx>
#include <TopoDS_Face.hxx>
#include <TopoDS_Shell.hxx>
#include <TopoDS_Solid.hxx>
#include <TopoDS_CompSolid.hxx>
#include <TopoDS_Compound.hxx>
#include <TColStd_IndexedDataMapOfStringString.hxx>
#include <Standard_Failure.hxx>
#include <emscripten/em_js.h>
""" + OCJS_RBV_PREAMBLE + r"""

// Shared disposer for val::object() RBV containers. Authored via EM_JS so the
// JS body is emitted at link time (CSP-strict / -sDYNAMIC_EXECUTION=0 compatible).
// The disposer is UNBOUND — `using` invokes it as a method call so `this` is
// naturally the container, sidestepping the V8 13.6 Function.prototype.bind
// `using` rejection.
//
// Idempotency and alias-safety: Embind retains the `.delete` method on the
// prototype after the underlying instance is destroyed, so a naïve
// `typeof v.delete === 'function'` guard does NOT prevent a second call from
// throwing `BindingError: <T> instance already deleted`. Two cases hit this
// in practice: (a) a caller invokes `result[Symbol.dispose]()` manually and
// then `using` re-disposes at scope exit; (b) Input-Passthrough RBV legitimately
// produces aliased handles across sibling containers that disposed earlier.
// We make the disposer truly one-shot by (1) swallowing a redundant `.delete()`
// throw and (2) clearing the slot via `this[k] = undefined` so subsequent
// iterations find nothing to delete.
EM_JS(void, ocjs_register_rbv_dispose, (), {
  Module["__ocjsRbvDispose__"] = function () {
    for (const k in this) {
      if (Object.prototype.hasOwnProperty.call(this, k)) {
        const v = this[k];
        if (v && typeof v.delete === 'function') {
          try { v.delete(); } catch {}
          this[k] = undefined;
        }
      }
    }
  };
});

struct TopoDS_Bind_ {};
class OCJS {
public:
  static Standard_Failure* getStandard_FailureData(intptr_t exceptionPtr) {
    return reinterpret_cast<Standard_Failure*>(exceptionPtr);
  }
  static bool exceptionsEnabled() {
#ifdef OCJS_EXCEPTIONS_ENABLED
    return true;
#else
    return false;
#endif
  }
};
using namespace emscripten;
EMSCRIPTEN_BINDINGS(ocjs_builtins) {
  class_<OCJS>("OCJS")
    .class_function("getStandard_FailureData", &OCJS::getStandard_FailureData, allow_raw_pointers())
    .class_function("exceptionsEnabled", &OCJS::exceptionsEnabled)
    ;
  class_<NCollection_IndexedDataMap<TCollection_AsciiString, TCollection_AsciiString>>("TColStd_IndexedDataMapOfStringString")
    .constructor<>()
    ;
  class_<TopoDS_Bind_>("TopoDS")
    .class_function("Edge", optional_override([](const TopoDS_Shape& s) -> TopoDS_Edge { return TopoDS::Edge(s); }))
    .class_function("Wire", optional_override([](const TopoDS_Shape& s) -> TopoDS_Wire { return TopoDS::Wire(s); }))
    .class_function("Face", optional_override([](const TopoDS_Shape& s) -> TopoDS_Face { return TopoDS::Face(s); }))
    .class_function("Vertex", optional_override([](const TopoDS_Shape& s) -> TopoDS_Vertex { return TopoDS::Vertex(s); }))
    .class_function("Shell", optional_override([](const TopoDS_Shape& s) -> TopoDS_Shell { return TopoDS::Shell(s); }))
    .class_function("Solid", optional_override([](const TopoDS_Shape& s) -> TopoDS_Solid { return TopoDS::Solid(s); }))
    .class_function("Compound", optional_override([](const TopoDS_Shape& s) -> TopoDS_Compound { return TopoDS::Compound(s); }))
    ;
}
"""
