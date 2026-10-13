// bindings-r2-dup-optional.cpp — R2 second translation unit.
//
// Validates that two separately-compiled TUs each calling
// `register_optional<double>()` (and `<bool>()`) can be linked into the
// same module without the runtime throwing on duplicate registration.
//
// Production OCJS generates per-toolkit binding TUs, each of which would
// emit `register_optional<T>()` for every T it uses — without TU-level
// global dedup at emission time, the same T will be registered N times
// where N = number of toolkits referencing T.
//
// Expected (good) outcome: silent acceptance — `_embind_register_optional`
// is idempotent OR `sharedRegisterType` honours `ignoreDuplicateRegistrations`.
// Expected (bad) outcome: runtime BindingError "Cannot register type
// 'std::optional<double>' twice".
//
// This TU intentionally exposes NO bindings — only the duplicate
// `register_optional<T>()` calls. The `bindings-optional.cpp` TU contains
// the primary bindings; both are linked together in a `mod-r2.mjs` module
// to specifically isolate the registration-collision question.

#include <emscripten/bind.h>
#include <emscripten/val.h>
#include <optional>

using namespace emscripten;

EMSCRIPTEN_BINDINGS(r2_dup_optional_registry) {
  // Same T's as in EMSCRIPTEN_BINDINGS(corpus_b_optional). On startup
  // both EMSCRIPTEN_BINDINGS blocks run, both call these — if the second
  // call throws, the module will fail to initialise.
  register_optional<bool>();
  register_optional<double>();
}
