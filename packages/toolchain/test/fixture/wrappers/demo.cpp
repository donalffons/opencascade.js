// Fixture bind file for the CLI render-only test. Never compiled.
#include <emscripten/bind.h>

using namespace emscripten;

class DemoWrapper {
 public:
  static int answer() { return 42; }
};

EMSCRIPTEN_BINDINGS(demo_wrapper) {
  class_<DemoWrapper>("DemoWrapper").class_function("answer", &DemoWrapper::answer);
}
