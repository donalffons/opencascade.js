#include "./A.hxx"
#include <emscripten/bind.h>
using namespace emscripten;

EMSCRIPTEN_BINDINGS(A) {
  class_<A>("A")
    .function("hello", &A::hello);
}
