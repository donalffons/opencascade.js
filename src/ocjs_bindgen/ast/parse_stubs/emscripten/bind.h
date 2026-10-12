// Parse-only Embind stub for libclang AST extraction.
// See parse_stubs/README.md for rationale.
//
// This header is NEVER seen by emcc — the real link uses the real
// `<emscripten/bind.h>` from emsdk's sysroot. The AST producer
// (`ast/parse.py::parse_binding_source`) puts `parse_stubs/` first
// on the include path so libclang shadows the real header.
//
// We declare every Embind registration entry point as a real C++
// template function with `const char* name` as the first runtime
// argument so `class_<T>("Name")` parses as a CALL_EXPR whose first
// argument is a STRING_LITERAL — exactly what `extract_class_registrations`
// walks for.

#pragma once

namespace emscripten {

namespace internal {
struct InitFunc {
  template <typename F>
  InitFunc(F) {}
};
}  // namespace internal

template <typename T, typename... Bases>
struct class_ {
  explicit class_(const char* name) { (void)name; }
  template <typename... Args>
  class_& constructor(Args...) { return *this; }
  template <typename... Args>
  class_& function(const char* name, Args...) { (void)name; return *this; }
  template <typename... Args>
  class_& class_function(const char* name, Args...) { (void)name; return *this; }
  template <typename... Args>
  class_& property(const char* name, Args...) { (void)name; return *this; }
  template <typename... Args>
  class_& field(const char* name, Args...) { (void)name; return *this; }
  template <typename... Args>
  class_& smart_ptr(Args...) { return *this; }
  template <typename WrapperType, typename... Args>
  class_& allow_subclass(const char* name, Args...) {
    (void)name;
    return *this;
  }
};

template <typename T>
struct wrapper : T {
  template <typename ReturnType, typename... Args>
  ReturnType call(const char* name, Args&&...) const;
};

template <typename T>
struct base {};

template <typename T>
struct enum_ {
  explicit enum_(const char* name) { (void)name; }
  template <typename V>
  enum_& value(const char* name, V) { (void)name; return *this; }
};

template <typename T>
struct value_object {
  explicit value_object(const char* name) { (void)name; }
  template <typename... Args>
  value_object& field(const char* name, Args...) { (void)name; return *this; }
};

template <typename T>
struct value_array {
  explicit value_array(const char* name) { (void)name; }
  template <typename... Args>
  value_array& element(Args...) { return *this; }
};

template <typename T>
void register_vector(const char* name) { (void)name; }

template <typename K, typename V>
void register_map(const char* name) { (void)name; }

// Unnamed, matching emsdk's `register_optional<T>()`: embind names optional
// types itself, so there is no string literal for the walker to collect.
template <typename T>
void register_optional() {}

template <typename Callable, typename... Policies>
void function(const char* name, Callable, Policies...) { (void)name; }

template <typename Signature>
Signature* select_overload(Signature* function) {
  return function;
}

template <typename Signature, typename ClassType>
auto select_overload(Signature (ClassType::*method)) -> decltype(method) {
  return method;
}

// Embind helpers referenced from BUILTIN_BINDINGS_SOURCE callbacks.
inline int allow_raw_pointers() { return 0; }
struct pure_virtual {};
template <typename T>
T optional_override(T t) { return t; }

}  // namespace emscripten

// EMSCRIPTEN_BINDINGS expands to a callable definition the AST walker
// descends into — same shape as the real macro (a static init function)
// minus the InitFunc struct registration that requires the real Embind
// runtime to link.
#define EMSCRIPTEN_BINDINGS(name) \
  static void embind_init_##name()

// The real macro declares a forwarding constructor for the JS wrapper.
// Construction is irrelevant to registration extraction, so the parse-only
// shadow intentionally expands to nothing.
#define EMSCRIPTEN_WRAPPER(name)
