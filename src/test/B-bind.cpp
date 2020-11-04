#include "./B.hxx"
#include <emscripten/bind.h>
using namespace emscripten;

EMSCRIPTEN_BINDINGS(B) {
  class_<B, base<A>>("B")
    .constructor<>()
    .function("world", &B::world);
}
