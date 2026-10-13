// Parse-only emscripten::val stub for libclang AST extraction.
// See parse_stubs/README.md for rationale.
//
// OCJS_RBV_PREAMBLE in `yaml_build.py` references `emscripten::val`
// for `Module["__ocjsRbvDispose__"]` plumbing. The AST producer does
// not exercise that runtime path; we only need val to compile as a
// declaration so the surrounding `EMSCRIPTEN_BINDINGS(...)` block is
// reachable.

#pragma once

namespace emscripten {

struct val {
  val() = default;
  template <typename T>
  val(T) {}
  static val module_property(const char*) { return val{}; }
  static val global(const char*) { return val{}; }
  val operator[](const char*) const { return val{}; }
  val operator[](int) const { return val{}; }
};

}  // namespace emscripten
