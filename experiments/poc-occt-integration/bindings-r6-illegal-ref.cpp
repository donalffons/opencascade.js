// bindings-r6-illegal-ref.cpp — R6 loud-fail verification.
//
// This file is INTENTIONALLY BROKEN. It is NOT part of the normal build.
// It exists to empirically prove that `std::optional<T&>` is rejected at
// COMPILE time (C++ standard until C++26), so a hypothetical bindgen bug
// that emits this shape will fail loudly at build-time, never escaping
// to a runtime data-corruption mode.
//
// Build with: ./build.sh r6-illegal (defined in build.sh — will FAIL).
//
// Expected failure: a templated error from <optional> regarding
// "static_assert ... !is_reference_v<T>" or similar.

#include <emscripten/bind.h>
#include <optional>
#include <gp_Pnt.hxx>

using namespace emscripten;

// The bad emit. Bindgen forming this shape from a `T&` parameter would
// produce this code, which is rejected by the C++ standard library.
EMSCRIPTEN_BINDINGS(r6_illegal_ref) {
  function("r6_illegal", optional_override([](std::optional<gp_Pnt&> out) {
    // Body intentionally empty — we only need to provoke the type itself.
  }));
}
