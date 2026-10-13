// Parse-only EM_JS stub for libclang AST extraction.
// See parse_stubs/README.md for rationale.
//
// The real `<emscripten/em_js.h>` expands EM_JS into a function decl
// with `__attribute__((section("em_js")))`. The `section("em_js")`
// attribute requires the wasm32-unknown-emscripten target — but that
// target paired with libclang 18 + emsdk's libcxx-23 fails on
// `__builtin_ctzg` etc. (Clang 19+ builtins). For the AST producer we
// don't need EM_JS to LINK; we only need its expansion to PARSE so
// libclang reaches the surrounding `EMSCRIPTEN_BINDINGS(...)` block.
//
// Reduce EM_JS to a plain function declaration with no attributes —
// libclang accepts it on any target.

#pragma once

#define EM_JS(ret, name, params, ...) ret name params
#define EM_ASYNC_JS(ret, name, params, ...) ret name params
#define EMSCRIPTEN_KEEPALIVE
