# Comprehensive Option D POC — All NCollection Shapes

Validates Option D — Boundary Narrowing with Adapter Returns for NCollection binding across **all 10 NCollection container shapes** with empirical bench data and resolution of every open question.

## Layout

| File | Purpose |
| ---- | ------- |
| `element-types.hxx` | `Pnt3`, `Vec3`, `EdgeKey`, `OString`, `HandleStub<T>` (refcounted handle stub) |
| `shapes.hxx` | 10 stub NCollection container templates mirroring OCCT's public surface |
| `experiment.cpp` | Strategy A baseline + Strategy D adapters + Strategy Dp fast-path + Strategy F live handle + OQ1/4/5 hooks |
| `build.sh` | `emcc 5.0.1 --emit-tsd` build invocation |
| `experiment.{mjs,wasm,d.ts}` | Build artefacts |
| `parity.mjs` | Asserts Strategy A == Strategy D == Strategy Dp data parity per shape |
| `bench.mjs` | Per-(shape × strategy × size) median µs/call + heap deltas → `results.json` |
| `mutation.mjs` | OQ2 — Strategy A live, Strategy D copy isolation, Strategy Dp shared-storage view |
| `leak.mjs` | 100k-iteration leak detection; verifies `.delete()` discipline / GC-only / explicit-free contracts |
| `dts-assert.mjs` | Asserts every Strategy D adapter signature matches its registered TS string and zero `unknown` appears |
| `run.mjs` | Orchestrator — runs all 5 harnesses |
| `results.json` | Bench output (auto-generated) |

## Running

```bash
./build.sh
node --expose-gc run.mjs
```

Or run a single harness:

```bash
node parity.mjs
node mutation.mjs
node --expose-gc leak.mjs
node dts-assert.mjs
node --expose-gc bench.mjs
```

## Strategies under test

| Strategy | C++ surface | TS surface | Notes |
| -------- | ----------- | ---------- | ----- |
| A — status quo | `class_<NCollection_X<…>>` per permutation | per-shape `interface NCollection_*` | live handle, requires `.delete()` |
| D — boundary-narrowed adapter | `EMSCRIPTEN_DECLARE_VAL_TYPE` + `register_type<>()` returning `val::array()` / `val::object()` / `val::global("Map")` | exact registered TS literal (`Pnt3[]`, `Map<string, Pnt3>`, `{ keys, values }`, etc.) | GC-only; per-call copy |
| Dp — primitive zero-copy fast-path | `val(emscripten::typed_memory_view(n, ptr))` | `Float64Array` / `Int32Array` | shared-storage view; either explicit-free envelope or documented leak |
| F — long-tail live handle | single `class_<NCollectionLiveHandle>` with element-type-tag + container-kind enum | one shared interface | dispatch-by-tag; bench data informs whether to use this for the long tail |

## Open questions resolved (see research doc for measured detail)

- **OQ1** — Handle-wrapping shape: split-API (`acquireHandleArray1` + `materializeFromHandle`) is the production default; the consumer composes `{ handle, items }` JS-side.
- **OQ2** — Mutation semantics: A is live, D is per-call copy isolation, Dp shares storage with the wasm heap (must be flagged "view, not copy" in JSDoc).
- **OQ4** — Iterator vs bulk: iterator path is ~5× slower than bulk-copy at every size measured; bulk-copy wins universally for OCCT element costs.
- **OQ5** — Long-tail live handle: `NCollectionLiveHandle.At(i)` is ~1.6× slower than Strategy A's per-permutation `.Value(i)`. Acceptable for the long tail; per-permutation classes only worth keeping for hot paths.
