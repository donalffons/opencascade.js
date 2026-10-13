# poc-overload-dispatch-cost — Suffix-Free Overload Dispatch Cost Quantification

Quantifies the runtime cost of the C1 (same-arity, type-based) dispatch mechanism added by `src/patches/libembind-overloading.patch` against pristine upstream embind 5.0.1, using a mock OCCT corpus sized to the call distribution of the birdhouse example (`libs/tau-examples/src/kernels/replicad/birdhouse/main.ts`).

Design spec: [`docs/research/ocjs-suffix-free-overload-cost-experiment-design.md`](../../../../docs/research/ocjs-suffix-free-overload-cost-experiment-design.md).

## Headline result

**The C1 same-arity dispatch path costs ~5 µs per birdhouse render, equating to 0.003 – 0.011% of total wall time on a typical OCJS CAD workload (50–200 ms render).**

Per-call:

- **~265 ns per same-arity call** (the dispatcher tax on calls that actually need type-based discrimination at runtime)
- **~6 ns per single-overload call** (the tax the patched libembind imposes on every embind-wrapped method even when no discrimination is needed)
- **~4–5 ns per extra overload** added to the same arity bucket when the target is first in the scan, **~45 ns per extra overload** when it is last

Bundle: **+6.6 KB uncompressed JS glue** (closure-compiled in OCJS production would shrink further; this is corpus-B's unconditional delta against a no-C1 build).

## Run

```bash
# Build all variants (does NOT modify the vendored libembind beyond the apply step)
./apply-libembind-patch.sh baseline   && ./build.sh b baseline
./apply-libembind-patch.sh patched    && ./build.sh b patched
                                         ./build.sh a patched-a-n2 -DCORPUS_A_N=2
                                         ./build.sh a patched-a-n4 -DCORPUS_A_N=4
                                         ./build.sh a patched-a-n6 -DCORPUS_A_N=6
                                         ./build.sh a patched-a-n8 -DCORPUS_A_N=8

# Sanity check that every variant dispatches to the right C++ overload
node sanity.mjs

# Run the bench matrix (~60s end-to-end)
node bench.mjs
# → writes results.json + results.md
```

## Layout

| File                                  | Purpose                                                                                                |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `apply-libembind-patch.sh`            | Toggles vendored `emsdk/.../libembind.js` between pristine 5.0.1 and OCJS-patched snapshots            |
| `libembind.upstream-5.0.1.js`         | Pristine emscripten 5.0.1 libembind.js (fetched from emscripten-core/emscripten@5.0.1)                 |
| `libembind.ocjs-patched.js`           | OCJS-patched libembind.js as vendored in `assimpjs/emsdk` (older variant of the overloading patch)     |
| `build.sh`                            | Compiles either corpus against the currently-active libembind state                                    |
| `mock-occt.hpp`                       | Trivial OCCT-shaped types (gp_Lin, gp_Circ, gp_Elips, gp_Hypr, gp_Parab, Geom_Curve, …) + EdgeMaker/FaceMaker/AlgoBoolean factories |
| `corpus-b-unique-named.cpp`           | Each overload exposed as a distinct top-level function (`makeEdge_FromLin`, …) — links against both libembind states |
| `corpus-a-overloaded.cpp`             | Same C++ bodies, all registered under a single JS name `EdgeMaker(...)` — only links against patched libembind. `-DCORPUS_A_N=k` selects N ∈ {2,4,6,8} same-arity 1-arg ctors |
| `bench.mjs`                           | Unified bench runner; emits `results.json` + `results.md`                                              |
| `sanity.mjs`                          | Pre-bench correctness pin: confirms every dispatcher routes to the expected EdgeMaker.routed value     |
| `results.json` / `results.md`         | Auto-generated bench output                                                                            |

## Methodology

The mock C++ corpus is intentionally trivial — every C++ body is a single integer member assignment so the JS-side dispatch cost dominates the measured ns/op. This isolates the C1 mechanism cost from OCCT compute cost.

To convert the isolated dispatcher overhead into a "% of wall time" answer, the bench derives a birdhouse-render dispatch budget by counting OCCT calls in `libs/tau-examples/.../birdhouse/main.ts` (15 same-arity 1-arg MakeEdge calls + 4 same-arity 2-arg MakeEdge calls + ~10 single-overload calls per render) and brackets that budget against real OCJS sample timings from `experiments/build123d-vs-ocjs/results/frontier/ocjs-full-local.json` (50–200 ms typical for a model in the birdhouse's complexity class).

## Decision relevance

For the strategic-direction recommendation in [`docs/research/ocjs-libembind-strategic-direction-assessment.md`](../../../../docs/research/ocjs-libembind-strategic-direction-assessment.md) (Option C: keep C1, retire C2):

- **Per-call same-arity tax (~265 ns)** is dominated by the per-arg `instanceof` chain in `getSignature`. This is the *only* dispatch path libembind exposes for type-based discrimination — it is competitive with (and often faster than) the hand-written JS-side `instanceof` dispatcher consumers would write today (M3 = 305–393 ns).
- **Per-call single-overload tax (~6 ns)** is well below the ~270 ns embind invoker baseline and is undetectable in any real workload. The patch does not need a per-class opt-in.
- **% of wall time on real CAD models (0.003 – 0.011%)** falls well below the "<5%" pre-registered threshold (H3 in the design spec). **Option C is defended unconditionally on perf grounds.**
- **Worst-case scan slope (~45 ns/overload)** is meaningful only if a single arity bucket grows past ~20 overloads, which no observed OCCT class does (largest = `BRepBuilderAPI_MakeEdge` 3-arg bucket with 10 overloads). No bindgen-side most-selective-first ordering is needed.
