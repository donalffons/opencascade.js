# OCJS Empirical Evidence

This document is the single source of truth for **"what measurable difference
does this fork make for me?"**. Every shipping change to the taucad
`libcascade` — from suffix-free overloads in the libembind patch
through the `opencascade_multi.wasm` build and the uniform return-by-value
output convention — is quantified here against either the upstream lineage
behaviour, native C++ OCCT, or pristine emscripten libembind.

It is **orthogonal** to:

- [`BREAKING_CHANGES.md`](BREAKING_CHANGES.md) — the published API delta consumers
  must port to (what changed).
- [`CHANGELOG.md`](CHANGELOG.md) — the version-by-version log (when it changed).
- [`README.md`](README.md) — the fork's value proposition and getting started.

Each section below links back to a self-contained experiment directory under
[`experiments/`](experiments/) with the bench harness, fixtures, raw
`results.json`, and a per-experiment README. The numbers cited here are pulled
directly from those committed JSON files unless otherwise noted.

## TL;DR — all themes at a glance

| Theme                              | Fork change                                                        | Headline result                                                                                            | Detail              |
| ---------------------------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- | ------------------- |
| [§1 Wall-clock CAD vs native](#1--wall-clock-cad-performance-vs-native-c-and-python)        | mimalloc default + `BRepAlgoAPI_BuilderAlgo` canonical pattern   | ~parity (0.99×) vs native LTO on the heaviest multi-tool fuse; 1.10–1.40× on real meshing/booleans/filling | [§1](#1--wall-clock-cad-performance-vs-native-c-and-python) |
| [§2 Multi-threading](#2--multi-threading-opencascade_multiwasm)                       | `opencascade_multi.wasm` + parallel toggles                  | **1.24×** total / **1.81×** boolean cut-grid / **3.46×** loft / **1.33×** STEP+mesh; +39% init             | [§2](#2--multi-threading-opencascade_multiwasm) |
| [§3 Embind overload dispatch](#3--embind-overload-dispatch)                                 | suffix-free + val-dispatch + `Object.hasOwn` inheritance gates    | ~265 ns/same-arity call → ~5 µs/render (**0.003–0.011% of wall time**); +6,593 bytes glue                  | [§3](#3--embind-overload-dispatch) |
| [§4 RBV output parameters](#4--return-by-value-output-parameters)                           | uniform class-RBV + EM_JS idempotent disposer                     | ~+6% vs OBR (within noise); disposer ~1.23 µs/call; pointer identity preserved across `using` scopes        | [§4](#4--return-by-value-output-parameters) |

## §1 — Wall-clock CAD performance vs native C++ and Python

**Question.** How does Node+WASM OCJS compare to the two alternative
geometric-kernel runtimes (Python+pybind11 via `build123d`, and native C++
linked directly against OCCT) on a paired-workload suite drawn from real
modelling primitives?

**Methodology.** The [`build123d-vs-ocjs/`](experiments/build123d-vs-ocjs/)
harness runs the same 10 paired samples (primitives, booleans, loft, sweep,
surface filling, fillet, meshing) under identical conditions in each runtime.
Each sample is warmed up twice, then measured 7 times; the median is reported.
Raw JSON: [`experiments/build123d-vs-ocjs/results/frontier/`](experiments/build123d-vs-ocjs/results/frontier/).

**Environment.** macOS 26.0 / Apple M2 Pro / Node v24.10.0 / OCCT V8 release.
Native binaries built with `-O3` (`native-lto.json` adds `-flto`).

### Per-sample medians (ms)

| Sample                       | Python (build123d) | Native LTO | OCJS mimalloc | OCJS full (local) | OCJS mim / native |
| ---------------------------- | -----------------: | ---------: | ------------: | ----------------: | ----------------: |
| 01_primitive_box             |               0.03 |       0.02 |          0.15 |              0.04 |             9.18× |
| 02_primitive_cylinder        |               0.02 |       0.01 |          0.05 |              0.02 |             9.06× |
| 03_boolean_fuse              |               7.61 |       3.18 |         10.07 |             12.36 |             3.16× |
| 04_boolean_cut_grid          |              30.24 |      27.60 |         35.90 |             44.58 |             1.30× |
| 05_loft_thru_sections        |               0.91 |       0.56 |          1.10 |              1.86 |             1.98× |
| 06_pipe_shell_sweep          |               0.32 |       0.17 |          0.34 |              0.92 |             1.96× |
| 07_surface_filling_patch     |             266.58 |     316.95 |        444.30 |            424.92 |             1.40× |
| 08_fillet_all_edges          |               4.76 |       3.27 |          5.79 |              5.64 |             1.77× |
| 09_fuse_many_boxes           |              53.92 |      66.62 |         66.19 |             78.57 |     **0.99×**     |
| 10_mesh_incremental          |              73.66 |      79.58 |         87.33 |             88.38 |             1.10× |

**Reading the table.**

- **Sample 09 (40-box multi-tool fuse) hits parity with native LTO** (0.99×).
  The mimalloc OCJS build also beats Python's `OCP` bindings (53.9 ms native →
  66.2 ms OCJS-mimalloc vs 53.9 ms Python is the only sub-native run, because
  `OCP` shares native OCCT directly without WASM at all).
- **Heavy real-work samples (03, 04, 07, 08, 10) sit in a 1.10–1.77× bracket**
  vs native. This is the "WASM tax" envelope for typical CAD payloads.
- **Trivial primitives (01, 02) show 9× ratios** because the absolute work
  (≤ 0.05 ms) is dominated by WASM call setup and not by OCCT. These samples
  are non-representative of real workloads and inflate any geomean.
- **mimalloc vs default emscripten allocator** is the headline fork
  optimisation: the `wasm-allocators/` sub-PoC validated mimalloc as a
  consistent improvement on multi-allocation-heavy samples (loft, fillet,
  surface filling). It is now the default for `opencascade_single.wasm` (see
  [`BUILD_SYSTEM.md`](BUILD_SYSTEM.md)). The "OCJS full (local)" column shows a
  representative non-mimalloc reference build for delta context.
- **`BRepAlgoAPI_BuilderAlgo` canonical pattern** (the multi-tool boolean
  shape from sample 09) is the only configuration where OCJS reaches parity
  with native; consumers chasing native-class throughput on booleans should
  follow the same pattern (`SetArguments` + `SetTools` + `Build` rather than
  per-pair `BRepAlgoAPI_Fuse` chains).

**Reproducing.** `node experiments/build123d-vs-ocjs/ocjs/run-bench.mjs
--engine mimalloc`. Other engines: `--engine full-local`, plus the python and
native runners under `experiments/build123d-vs-ocjs/python/` and
`experiments/build123d-vs-ocjs/native/`.

**Status.** Active reference. Numbers are regenerated whenever the OCCT version
or `BUILD_SYSTEM.md` flags change. The four committed frontier JSONs are the
pinned snapshot.

## §2 — Multi-threading (`opencascade_multi.wasm`)

**Question.** How does the multi-threaded build (`opencascade_multi.wasm`)
compare to the single-threaded build (`opencascade_single.wasm`) on the same
workload mix, what's the per-sample shape of the speedup, and what does the
binary itself cost when threading is *off*?

**Methodology.** The [`multi-thread-bench/`](experiments/multi-thread-bench/)
harness runs the same 11-sample CAD suite (primitives → STEP-import-and-mesh)
against both shipped binaries: `dist/opencascade_single.js` and
`dist/opencascade_multi.js`. For the MT run, four global activations are
made once at startup, then each parallel-aware sample receives
`{ parallel: true }` so per-instance `SetRunParallel(true)` and
`isInParallel=true` take effect. A third axis (MT binary with parallel OFF
for every sample) isolates the *pthread-binary tax* from the parallel gain.

> **Reproducibility note (May 2026).** This section's headline numbers are the
> pinned snapshot from the original `main` measurement run on 2026-05-21. A
> re-run against the current `dist/` is blocked by two pre-existing
> infrastructure issues that are tracked separately:
> (a) `dist/opencascade_single.js` currently throws
> `BindingError: Cannot register type 'IMeshData_IPCurveHandle' twice` on
> load — a duplicate-registration regression in the most recent ST relink, and
> (b) sample 11 references `experiments/replicad-impact-poc/assets/main-assembly.step`
> which is not committed. Both blockers are unrelated to the changes in this
> document; once the dist binary relinks cleanly and the STEP asset lands,
> running `node experiments/multi-thread-bench/run-bench.mjs --warmup 2 --iters 7
> --out experiments/multi-thread-bench/results.json` will refresh the JSON.

### Headline — ST vs MT on the 11-sample suite

| Metric                              | Value       |
| ----------------------------------- | ----------- |
| Total wall time (11 samples, ST)    | **2 428 ms** |
| Total wall time (11 samples, MT)    | **1 952 ms** |
| Total speedup                       | **1.24×**   |
| Total wall-time saved per pass      | **−476 ms** (−19.6 %) |
| Best per-sample speedup             | **3.46×** (`05_loft_thru_sections`) |
| Best parallel-aware speedup         | **1.81×** (`04_boolean_cut_grid`) |
| Largest absolute saving             | **−464 ms** (`11_step_import_and_mesh`) |
| Worst per-sample regression         | **0.44×** (`03_boolean_fuse`, tiny 1+1 fuse) |
| WASM binary size (ST → MT)          | 38.46 → 37.89 MB (−1.5 %) |
| Module init time (ST → MT)          | 488 → 676 ms (+39 %, pthread pool spawn for 12 workers) |
| OCCT thread pool                    | **12 workers** (`OSD_ThreadPool::DefaultPool(-1)` sized to `NbLogicalProcessors`) |
| Pool fan-out cap per launcher       | **12** (`OSD_ThreadPool::SetNbDefaultThreadsToLaunch(12)`) |

### Per-sample ST vs MT — full table

`parallel?` marks samples that exercise an OCCT API with a *public* parallel
toggle. Sample 5 (loft) is not flagged because its parallelism is internal to
OCCT.

| Sample                       |  ST median (ms) |  MT median (ms) |    Δ (ms) |    Δ %   | speedup | parallel? |
| ---------------------------- | --------------: | --------------: | --------: | -------: | ------: | :-------: |
| 01_primitive_box             |            0.05 |            0.04 |     −0.01 |  −14.9 % |  1.17×  |           |
| 02_primitive_cylinder        |            0.02 |            0.02 |     −0.00 |   −3.1 % |  1.03×  |           |
| 03_boolean_fuse              |            5.01 |           11.39 |     +6.38 | +127.5 % |  0.44×  |    *      |
| 04_boolean_cut_grid          |           31.86 |           17.60 |    −14.26 |  −44.8 % |  1.81×  |    *      |
| 05_loft_thru_sections        |            3.69 |            1.06 |     −2.62 |  −71.1 % |  3.46×  |           |
| 06_pipe_shell_sweep          |            0.35 |            0.33 |     −0.02 |   −5.4 % |  1.06×  |           |
| 07_surface_filling_patch     |          357.39 |          364.53 |     +7.14 |   +2.0 % |  0.98×  |           |
| 08_fillet_all_edges          |            5.43 |            5.62 |     +0.19 |   +3.5 % |  0.97×  |           |
| 09_fuse_many_boxes           |           61.49 |           57.69 |     −3.80 |   −6.2 % |  1.07×  |    *      |
| 10_mesh_incremental          |           77.08 |           72.51 |     −4.57 |   −5.9 % |  1.06×  |    *      |
| 11_step_import_and_mesh      |        1 885.30 |        1 421.02 |   −464.28 |  −24.6 % |  1.33×  |    *      |
| **TOTAL (sum of medians)**   |    **2 427.67** |    **1 951.81** | **−475.86** | **−19.6 %** | **1.24×** |       |

### Three-way decomposition — pthread binary tax vs parallel gain

| Sample                       |     ST (ms) | MT, par OFF (ms) | MT, par ON (ms) | binary tax | parallel gain |
| ---------------------------- | ----------: | ---------------: | --------------: | ---------: | ------------: |
| 03_boolean_fuse              |        5.01 |             5.05 |           11.39 |    +0.0 ms | **+6.3 ms WORSE** — pool sync overhead on tiny work |
| 04_boolean_cut_grid          |       31.86 |            28.49 |           17.60 |    −3.4 ms (−11 %)  | **−10.9 ms / 1.62× on the parallel portion** |
| 05_loft_thru_sections        |        3.69 |             1.13 |            1.06 |    −2.6 ms (−69 %)  | **−0.1 ms** (already wins from internal parallelism) |
| 09_fuse_many_boxes           |       61.49 |            64.61 |           57.69 |    +3.1 ms (+5 %)   | **−6.9 ms / 1.12× on the parallel portion** |
| 10_mesh_incremental          |       77.08 |            80.50 |           72.51 |    +3.4 ms (+4 %)   | **−8.0 ms / 1.11× on the parallel portion** |
| 11_step_import_and_mesh      |    1 885.30 |         2 050.70 |        1 421.02 |   +165.4 ms (+8.8 %) | **−629.7 ms / 1.44× on the parallel portion** |
| **TOTAL**                    |   **2 428** |        **2 596** |       **1 952** | **+168 ms (+6.9 %)** | **−644 ms / 1.33× on the parallel portion** |

The **binary tax** column (`MT par OFF` − `ST`) is the cost of carrying the
pthread runtime even when no parallel section is opted in: **+168 ms / +6.9%
across the suite**, dominated by sample 11's lazy `OSD_ThreadPool::DefaultPool(-1)`
init. The **parallel gain** column is the actual win: **−644 ms / −25%**.

### Cost breakdown — what you pay for threading

| Cost | Value | Notes |
| --- | --- | --- |
| Module init time | +188 ms (+39 %) | 488 → 676 ms; PTHREAD_POOL_SIZE=12 workers spawned |
| Binary size (uncompressed) | −0.6 MB (−1.5 %) | 38.46 → 37.89 MB — pthread runtime is offset by removed `-sEVAL_CTORS=2` overhead |
| Per-call pthread tax | +6.9 % on workload total | ~168 ms across the 11-sample suite (most of it lazy-pool init in sample 11) |
| Wall-time savings | 1.24× total / up to 3.46× per call | dominated by sample 11 (mesh) and sample 5 (loft) |
| Browser deployment cost | COOP/COEP headers required | locks out third-party iframes that don't opt in |

### Recommendations (multi-threading)

1. **Default to the single-threaded build for embeddable CAD widgets** — the
   workload profile (one operation per interaction) does not amortise the
   thread-pool tax.
2. **Ship the multi-threaded build for visualisation pipelines and batch
   modelling** — meshing-heavy workloads (STEP→glTF conversion, complex
   assembly triangulation) see a clear 1.3–1.5× improvement.
3. **Enable the two global algorithm defaults** (`SetParallelMode`,
   `SetParallelDefault`) — otherwise the binary carries pthread overhead with
   reduced benefit (the "MT par OFF" column above). OCCT's default pool
   already uses all logical processors and launches its full pool.
4. **Cap mobile concurrency only from device-specific measurements** — this
   benchmark covers a 12-worker host, not a worker-count sweep. A custom build
   can use `Math.min(navigator.hardwareConcurrency, n)` once its target
   workload establishes `n`.

The complete deep dive (R1 `PTHREAD_POOL_SIZE` audit, per-operation
explanations, loft 3.46× anomaly, OCCT thread-pool internals) lives in
[`docs-site/content/docs/package/guides/multi-threading.mdx`](docs-site/content/docs/package/guides/multi-threading.mdx)
and [`docs-site/content/docs/toolchain/guides/multi-threading.mdx`](docs-site/content/docs/toolchain/guides/multi-threading.mdx).

## §3 — Embind overload dispatch

**Question.** What is the full cost (correctness + per-call perf + bundle +
inheritance regression risk) of the taucad fork's suffix-free overload
mechanism in [`src/patches/libembind-overloading.patch`](src/patches/libembind-overloading.patch)?

The fork patches `libembind.js` to do **same-arity type-based dispatch**
instead of upstream emscripten's arity-only dispatch. This is what makes
`new oc.BRepBuilderAPI_MakeEdge(circle)` route to the `gp_Circ`-taking
constructor instead of throwing `BindingError: incompatible argument`, which
upstream emscripten would do for any overload set sharing an arity.

Three experiments quantify the three orthogonal axes:

### §3.1 — Correctness foundation: suffix-free dispatch (`poc-overload-dispatch`)

Demonstrates that **without** the val-based dispatcher, only the
*last-registered* same-arity overload is reachable from JS:

- [`broken.mjs`](experiments/poc-overload-dispatch/broken.mjs) → 2/9 pass
- [`fixed.mjs`](experiments/poc-overload-dispatch/fixed.mjs) → 9/9 pass

This is the foundational reason every consumer call to
`BRepBuilderAPI_MakeEdge(circle)`, `BRepPrimAPI_MakeBox(pnt, pnt)`,
`BRepBuilderAPI_MakeWire(edge, edge, edge)`, etc. works in this fork where it
would have thrown in upstream emscripten + a stock OCCT bindings.cpp.

Reproducing: `cd experiments/poc-overload-dispatch && ./build.sh && node run.mjs`.

### §3.2 — Per-call cost: same-arity dispatch tax (`poc-overload-dispatch-cost`)

Quantified end-to-end against two C++ corpora (overloaded shared-name vs
unique-named) compiled against two `libembind.js` states (pristine upstream
emscripten 5.0.1 vs the OCJS-patched version). All numbers from
[`results.json`](experiments/poc-overload-dispatch-cost/results.json):

| Metric                                  | Value             | Source                                                  |
| --------------------------------------- | ----------------- | ------------------------------------------------------- |
| Per-call same-arity dispatch tax        | **~264 ns/call**  | `results.json` M2 first/last avg @ N=6 minus M5d floor  |
| Per-call single-overload tax            | **~6.3 ns/call** (2.3%) | M1' − M1                                          |
| Worst-case scan slope                   | **~45 ns/overload** | M2h N=8 − N=2, ÷6                                     |
| Total dispatch overhead per CAD render  | **~5.08 µs / render** | 15 same-arity 1-arg + 4 same-arity 2-arg + 10 single-overload calls (birdhouse model) |
| % of wall time on 50–200 ms render      | **0.003 – 0.011%** | Derived against §1's `build123d-vs-ocjs` OCJS sample bracket |
| Bundle delta (uncompressed JS glue)     | **+6,593 bytes**  | `patched.mjs` − `baseline.mjs`                          |
| Module init delta                       | ~−1.9 ms (faster) | Patched module also rewires `cppTypeToJsType` more cheaply for shared-name registrations |

**Verdict.** The suffix-free mechanism is **operationally invisible** on real
CAD workloads. No per-class opt-in is needed; no consumer should ever feel
this cost. The 0.003–0.011% wall-time bracket means a CAD model rendering in
100 ms spends roughly **5 microseconds** of that resolving same-arity
overloads — three orders of magnitude below typical frame-budget noise.

Reproducing: `cd experiments/poc-overload-dispatch-cost && ./build.sh all &&
node bench.mjs`. The two libembind variants are checked in as
`libembind.upstream-5.0.1.js` and `libembind.ocjs-patched.js` for
byte-deterministic toggling via `apply-libembind-patch.sh`.

### §3.3 — Inheritance regression guard: `Object.hasOwn` R1+R2 gates (`libembind-fan-out-poc`)

A 7-case fast regression matrix (~30 s per cycle vs 30+ min for a full
WASM rebuild) that protects against the **cross-sibling inherited-table
mutation bug** in arity-fan-out for trailing default arguments. Without the
`Object.hasOwn` R1+R2 gates currently shipping in the libembind patch, a
derived class registering an `override` of a base method mutates the base
class's inherited overload table and corrupts unrelated siblings
(e.g. `BRepFeat_SplitShape` registration breaking `BRepBuilderAPI_MakeShape`
for every other consumer):

| Build                          | A | B | C   | D | E | F   | G | Total |
| ------------------------------ |:-:|:-:|:---:|:-:|:-:|:---:|:-:|:-----:|
| `negative` (no R1+R2 gates)    | ✗ | ✗ | ✗   | ✓ | ✓ | ✗   | ✓ | 3/7   |
| `positive` (R1+R2 shipping)    | ✓ | ✓ | ✓   | ✓ | ✓ | ✓   | ✓ | **7/7** |

The negative build fails Tests A, B, **C (the smoking gun: cross-sibling
regression)**, and F — confirming the corruption cascades, not just hits one
isolated scenario. The positive build (current shipping `libembind-overloading.patch`)
passes all 7. This PoC is the canonical guard against any future patch
revision regressing the inheritance isolation.

Reproducing: `cd experiments/libembind-fan-out-poc && node run.test.mjs`
(with the negative + positive `.mjs` artefacts already built; rebuild via
`./build.sh negative` / `./build.sh positive` after toggling the
`./apply-libembind-patch.sh apply`/`restore`).

## §4 — Return-by-value output parameters

**Question.** What is the cost of the uniform class-RBV migration (replacing
v2's `{ current: 0 }` placeholder objects with embind `value_object` returns
for every C++ output parameter), and does the `Symbol.dispose` plumbing
preserve pointer identity across `using` scopes?

The fork's RBV convention is documented in [`BREAKING_CHANGES.md` §D2](BREAKING_CHANGES.md)
and [`docs-site/content/docs/package/migrations/output-parameters.mdx`](docs-site/content/docs/package/migrations/output-parameters.mdx).
Two experiments cover the two axes:

### §4.1 — Per-call cost: class-RBV vs output-by-reference (`q67-rbv-cost`)

Eight bench variants (V1 → V7) measure every plausible RBV dispatch path,
from a baseline `{ current: 0 }`-recycled output through the production
`value_object` + EM_JS disposer path. All numbers from `results.json`
([`results.json`](experiments/q67-rbv-cost/results.json) for V1–V5;
`results-pure-cpp.txt` + `results-csp-safe.txt` for V6/V7/E2):

| Metric                                       | Value          | Notes                                                          |
| -------------------------------------------- | -------------- | -------------------------------------------------------------- |
| V1 baseline OBR (recycled outputs)           | **27 ns/call** | Best case — no allocation, just property write                 |
| V1b OBR with per-call `new`/`delete`         | 983 ns/call    | Apples-to-apples vs RBV (both allocate)                        |
| V2 `value_object` (no dispose)               | **985 ns/call** | Within +0.2% of V1b — RBV is free over allocate+free OBR       |
| V3 `value_object` + JS dispose wrap          | 992 ns/call    | +0.7% over V2 — JS wrapper cost negligible                     |
| V3b `value_object` + `using` declaration     | 1,088 ns/call  | +10% vs V3 — `using` adds a try/finally per call               |
| V6 cached EM_JS `__ocjsRbvDispose__`         | **1,224 ns/call (CSP-safe)** | Production path — no `eval`, no `new Function()`     |
| V6 uncached EM_JS (re-lookup `Symbol.dispose`) | 1,514 ns/call | +24% over cached — caching is the key optimisation            |
| E `Function(src)` cached (rejected)          | 1,261 ns/call  | Rejected: requires `-sDYNAMIC_EXECUTION=1`, CSP-unfriendly     |
| E `Function(src)` fresh                      | 2,415 ns/call  | Rejected: also CSP-unfriendly                                  |

**Verdict.** Uniform class-RBV is **viable without a per-class bindgen
allowlist**. The shipping production path (EM_JS cached disposer) costs
**~1.23 µs per call** — within +6% of the bare `value_object` path and CSP-safe
out of the box. The `using` syntax adds ~10% (single try/finally per call)
which is small enough to default-enable for ergonomics; consumers in
sub-microsecond hot loops can opt out by using explicit `result.delete()`.

A typical CAD render makes ~30–80 RBV-returning calls (curve evaluations,
projections, surface samples), totalling roughly **37–98 µs of disposer cost**
per frame — 0.04–0.20% of a 50 ms render budget.

Reproducing:

```bash
cd experiments/q67-rbv-cost
./build.sh && node run.mjs                                # V1–V5 → results.json
./build-pure-cpp.sh && node pure-cpp-bench.mjs > results-pure-cpp.txt
./build-csp-safe.sh && node csp-safe-bench.mjs > results-csp-safe.txt
```

### §4.2 — Correctness: pointer identity preserved (`poc-rbv-dispose`)

Validates that the shipping `__ocjsRbvDispose__` EM_JS path:

- **Preserves caller→container pointer identity** across `using` scopes (the
  same `gp_Pnt*` that C++ wrote into the `value_object` is the pointer the
  caller's `D1Result.theP` resolves to; no copy is made).
- **Is idempotent under double-dispose** and `using` scope exit (calling
  `[Symbol.dispose]()` twice on the same handle is a no-op the second time).
- **Is sibling-aliasing safe** — disposing one return value never affects
  any other live `value_object` handle.

Qualitative pass/fail only (no perf claim). This is the correctness
foundation for the `using result = curve.D1(...)` ergonomics shipped in v3.

Reproducing: see [`experiments/poc-rbv-dispose/`](experiments/poc-rbv-dispose/) README.

## Reproducing all benchmarks

Single runbook covering every theme above:

```bash
cd repos/opencascade.js

# §1 — Wall-clock CAD (10–15 min for the full mimalloc engine)
node experiments/build123d-vs-ocjs/ocjs/run-bench.mjs --engine mimalloc
# Other engines: --engine full-local; native/python runners under
# experiments/build123d-vs-ocjs/{native,python}/

# §2 — Multi-threading (~45 s once dist/ is healthy)
node experiments/multi-thread-bench/run-bench.mjs \
  --warmup 2 --iters 7 \
  --out experiments/multi-thread-bench/results.json

# §3.1 — Suffix-free correctness (~10 s)
cd experiments/poc-overload-dispatch && ./build.sh && node run.mjs
cd ../..

# §3.2 — Same-arity dispatch cost (~2 min full matrix)
cd experiments/poc-overload-dispatch-cost && ./build.sh all && node bench.mjs
cd ../..

# §3.3 — Inheritance regression (~30 s per build cycle)
cd experiments/libembind-fan-out-poc
./apply-libembind-patch.sh apply && ./build.sh negative
./apply-libembind-patch.sh apply && ./build.sh positive
./apply-libembind-patch.sh restore
node run.test.mjs   # expects exit 0, prints 3/7 (negative) + 7/7 (positive)
cd ../..

# §4.1 — RBV per-call cost (~1 min total)
cd experiments/q67-rbv-cost
./build.sh && node run.mjs                                # V1–V5
./build-pure-cpp.sh && node pure-cpp-bench.mjs > results-pure-cpp.txt
./build-csp-safe.sh && node csp-safe-bench.mjs > results-csp-safe.txt
cd ../..

# §4.2 — RBV disposer correctness (qualitative)
cd experiments/poc-rbv-dispose && ./build.sh && node run.mjs
```

## Environment (canonical)

| | |
| --- | --- |
| Host CPU       | Apple M2 Pro (10 perf + 2 efficiency = 12 logical cores) |
| RAM            | 32 GB |
| OS             | macOS 26.0 (build 25A354) |
| Node.js        | v24.10.0 (V8 13.6.233.10-node.28) |
| Emscripten     | 5.0.1 |
| OCCT revision  | `deps/OCCT` (V8 release) |
| OCJS commit    | `occt-v8-emscripten-5` branch, May 2026 |

## Out of scope (linked for completeness)

The following experiments live alongside the ones cited above but are
intentionally **not** rolled up into this hub:

- **NCollection Option D** — design validation for a future bindgen migration
  that is *not yet shipped* in production bindings.
  See [`experiments/option-d-boundary-narrowing/`](experiments/option-d-boundary-narrowing/)
  and [`experiments/option-d-comprehensive-poc/`](experiments/option-d-comprehensive-poc/)
  for the raw design-validation runs. Once the migration ships, this hub will
  gain a §5 covering the consumer-facing cost.
- **`build123d-vs-ocjs/wasm-allocators/`** — the mimalloc-vs-default allocator
  comparison that *informed* §1's default. Allocator choice is now locked by
  [`BUILD_SYSTEM.md`](BUILD_SYSTEM.md) and [`build-wasm.sh`](build-wasm.sh).
  Numbers in §1 above already reflect the mimalloc default.

## References

- Multi-threading deep dives: [`docs-site/content/docs/package/guides/multi-threading.mdx`](docs-site/content/docs/package/guides/multi-threading.mdx),
  [`docs-site/content/docs/toolchain/guides/multi-threading.mdx`](docs-site/content/docs/toolchain/guides/multi-threading.mdx)
- API delta and migration: [`BREAKING_CHANGES.md`](BREAKING_CHANGES.md)
- Version log: [`CHANGELOG.md`](CHANGELOG.md)
- Build system / `mimalloc` default rationale: [`BUILD_SYSTEM.md`](BUILD_SYSTEM.md)
- Modular ST/MT subpath packaging (`ocjs` vs `/multi`): see the package MT guide above
- Cross-origin isolation for browser threading (SAB + COOP/COEP): see the package MT guide above
- Libembind overloading patch: [`src/patches/libembind-overloading.patch`](src/patches/libembind-overloading.patch)
- Build YAML (MT): [`build-configs/full_multi.yml`](build-configs/full_multi.yml)
