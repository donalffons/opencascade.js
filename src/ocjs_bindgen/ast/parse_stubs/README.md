# `parse_stubs/` — libclang-only stub headers for the AST producer

Architectural-fixture include directory used **exclusively** by
`ocjs_bindgen.ast.parse.parse_binding_source`. The headers here
declare just enough Embind / Emscripten surface for libclang 18 to
produce real `CALL_EXPR` cursors for `class_<T>("Name")`,
`enum_<T>("Name")`, `value_object<T>("Name")`, `register_vector<T>("Name")`,
`register_map<K,V>("Name")`, and `value_array<T>("Name")` calls in
`BUILTIN_BINDINGS_SOURCE + consumer additionalBindFiles` translation
units.

## Why stubs instead of the real `<emscripten/bind.h>`?

The real `<emscripten/bind.h>` in `emsdk/upstream/emscripten/system/include/`
pulls in `<emscripten/val.h>` which depends on `<bit>` /
`<__bit/countr.h>`. `emsdk`'s sysroot ships **libc++ 23** whose
`__bit/countr.h` calls `__builtin_ctzg` / `__builtin_clzg` — builtins
that only landed in Clang 19. We pin
[`clang==18.1.1`](../../../../requirements/requirements.in) on the
parse side; this version cannot resolve those builtins, so the real
header chain fails to parse and libclang error-recovers all the way
past `EMSCRIPTEN_BINDINGS(...)`, yielding **zero** registrations.

Using the vendored llvm-17 libc++ instead would solve the builtin
mismatch but then conflicts with `--target=wasm32-unknown-emscripten`
(host SDK libc is incompatible with the wasm target).

The producer/consumer manifest contract gives us a clean alternative:
the actual link still uses `emcc -c` to compile the real source — only
the AST extraction sees the stubs. The stub declarations don't have to
produce correct WASM; they only have to make `class_<T>("Name")` parse
as a template-function call expression so the AST walker can extract
the JS-visible Name.

## Maintenance

If a future OCJS BUILTIN_BINDINGS_SOURCE block or replicad-style
consumer `additionalBindFiles` source references a new Embind registration entry
point, add it to:
1. `_EMBIND_REGISTRATION_SPELLINGS` in `ast/walker.py`
2. The stub declaration set in `bind.h` below

The Phase 2 AST unit suite (`tests/unit/test_additional_bind_symbols_ast.py`)
exercises the canonical and consumer-flavoured registration shapes and
will surface regressions.
