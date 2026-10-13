# matrix-row-bench — per-row bench fixture for the 38-row trailing-default emission matrix

**Status**: scaffolded · **Phase**: pre-Phase-3 (Phase 0 complete; Phase 1 detector + bindgen emission still landing in parallel) · **Coverage**: 38 of 38 rows scaffolded with per-row test files; representative-subset live execution is gated on building the bindings WASM artefacts (see [How to run live](#how-to-run-live) below).

## What this is

A per-row bench fixture for the OCJS trailing-default emission matrix that scores every row on six axes (correctness × JS-glue bytes × WASM bytes × runtime × dispatch-error-clarity × TS-fidelity) plus an in-line Q3 quantification of val-vs-optional per-call overhead.

The fixture is a sibling of `experiments/poc-occt-integration/` and reuses its emsdk + prebuilt OCCT toolkit artefacts. Sibling-layout chosen (vs in-tree extension of the PoC) because the per-row scoring concern is orthogonal to the PoC's risk-coverage concern; the PoC's `R*`/`T*`/`U*` tests should stay focused on dispatcher validation.

## Files

| Path | Role |
| --- | --- |
| `rows/registry.mjs` | Single source of truth for all 38 rows — `id`, `slug`, `primitive`, `productionInstances`, `speculative`, `blockedByPhase1`, `bothPrimitives`, `testSubject`, `shapes`, `description`. Drives every other file. |
| `rows/row-NN-<slug>.test.mjs` | Per-row test file (38 total). Each calls `defineRow(NN, runner)` from `harness.mjs`. |
| `harness.mjs` | Common per-row infrastructure: loads the bindings module, invokes the row's runner against each expected shape, scores correctness + error-clarity + runtime, writes `results/per-row/row-NN.json`. |
| `bench-runner.mjs` | Orchestrator: runs the per-row tests, aggregates results, runs Q3 val-vs-optional bench, emits the `bench-baseline-YYYY-MM-DD.{json,md}` reports. |
| `scoring/glue-size-diff.mjs` | Bundle-size measurement (`mod-rows.{wasm,mjs}` baseline vs `mod-rows-val.*` vs `mod-rows-optional.*`). |
| `scoring/runtime-bench.mjs` | Microbench harness (`performance.now()` N=10000 + warmup; reports mean/p95/p99). |
| `scoring/error-clarity.mjs` | Rolls up per-shape `BindingError` message scores into a per-row 0–3 score. |
| `scoring/ts-fidelity.mjs` | Compares bindgen-emitted `.d.ts` overloads against runtime-callable signatures (TODO: wires to bindgen Python; scaffold marker today). |
| `bindings/bindings-rows.cpp` | Combined synthetic + targeted-real-OCCT bindings used by `mod-rows.{mjs,wasm}`. Each row's binding is preceded by its matrix-row citation. |
| `bindings/bindings-rows-val.cpp` | Q3 quantification: val-primitive ONLY for rows 1, 2, 24, 33, 34, 36. |
| `bindings/bindings-rows-optional.cpp` | Q3 quantification: optional-primitive ONLY for the same rows. |
| `build.sh` | emcc link script. Targets: `rows` / `val` / `optional` / `all`. Reuses the sibling PoC's emsdk + OCCT toolkit archives. |
| `results/bench-baseline-YYYY-MM-DD.{json,md}` | Aggregated baseline report. JSON is the source-of-truth machine-readable artefact; Markdown is the human-readable rendering of the same data. |
| `results/per-row/row-NN.json` | Per-row structured result (one per row test invocation). |

## Scoring axes

| Axis | Metric | Pass criterion | Notes |
| --- | --- | --- | --- |
| Correctness | bool | every expected JS call shape returns the expected behaviour | `errorExpected: true` flips the assertion for negative shapes (e.g. row 1's `null-rejected`). |
| Error-message clarity | 0–3 score | ≥2 considered acceptable | 0: bare `BindingError`; 1: non-empty but no position/type detail; 2: names position OR expected/received type; 3: names position + expected + received. |
| TS fidelity | bool + diff | declared `.d.ts` overloads match runtime-callable shapes | Live wiring TODO; harness emits a `pending-ts-emitter` marker until Phase 1 lands the bindgen integration. |
| JS-glue bytes | signed int delta | informational; threshold per row | Δ between baseline (no row binding emitted) and each primitive variant (val/optional). |
| WASM bytes | signed int delta | informational; threshold per row | As above. |
| Runtime | ns/call mean ± p95 + p99 | informational; threshold per row (Q3 ceiling: +15% val over optional) | N=10000 iterations per call shape per primitive; warmup 100. |

## How to run (scaffold mode — works today)

```bash
cd repos/opencascade.js/experiments/matrix-row-bench
node bench-runner.mjs
```

Outputs `results/bench-baseline-YYYY-MM-DD.{json,md}`. Every row reports `mode=scaffold` and `verdict=pending-build` (or `pending-phase-1` for rows 8, 24, 27, 34). The baseline report shows the full 38-row coverage matrix and the Q3 axis structure pre-build.

You can also run a representative subset:

```bash
node bench-runner.mjs --rows 1,2,8,12,16,21,22,33
```

## How to run live

Live mode requires the bindings WASM to be present. Build first, then re-run:

```bash
./build.sh all                        # ~10–30s; needs prebuilt OCCT + emsdk
node bench-runner.mjs                 # now reports live verdicts
```

Prerequisites:
- `repos/assimpjs/emsdk/emsdk_env.sh` exists (sibling PoC depends on it too).
- `repos/opencascade.js/build/occt-cmake/lin32/clang/lib/libTK*.a` and `repos/opencascade.js/build/occt-includes/` exist (prebuilt OCCT toolkit archives).

Both are present on a developer machine that has run the sibling PoC at least once.

## How to add a new row

1. Append a new entry to `ROWS` in `rows/registry.mjs` (incrementing `id`).
2. Create `rows/row-NN-<slug>.test.mjs` (use the generator at `/tmp/gen-row-tests.mjs` or hand-write following the row-01 template).
3. Add the binding for the row's test subject to `bindings/bindings-rows.cpp` (synthetic) or wire to a real OCCT class (use `_emitValDispatchMethod` / `register_optional<T>` shapes per the row's primitive).
4. If the row is Q3-relevant (both primitives candidates), add the variant to `bindings/bindings-rows-val.cpp` AND `bindings/bindings-rows-optional.cpp`.
5. Rebuild via `./build.sh all`, then `node bench-runner.mjs`. The new row appears in the report.

## Relationship to other experiments

| Experiment | Concern | Relationship |
| --- | --- | --- |
| `poc-occt-integration` | Dispatcher (libembind patch) validation across 96 R/T/U risks | Complete; this fixture reuses its emsdk + OCCT toolkit + `apply-libembind.sh`. |
| `matrix-row-bench` (this dir) | Per-row scoring of every emission strategy | Phase 3 input; Phase 1 emission detector lands in parallel. |

## Open questions / TODO

- TS-fidelity wiring: the bindgen TS emitter integration is a follow-up. Today the harness emits `pending-ts-emitter` per row; the actual wire-up will live behind a `node bench-runner.mjs --with-ts-emitter` flag once the bindgen Python exposes a per-class TS-only mode.
- Phase-1-blocked rows (8, 24, 27, 34) cannot be scored end-to-end until the rule 2 / rule 3 detector lands. The harness already tags them `pending-phase-1` and the runner skips them gracefully.
- Full real-OCCT row coverage in `bindings-rows.cpp` requires bindgen to emit the per-class bindings (BRepGProp_Face, TCollection_AsciiString, etc.); today the bench includes only a minimal slice of real classes and relies on the synthetic Row01..Row37 shapes for harness validation.

## References

- Policy: `docs/policy/ocjs-trailing-default-emission-policy.md`
- Sibling PoC: `experiments/poc-occt-integration/README.md`
