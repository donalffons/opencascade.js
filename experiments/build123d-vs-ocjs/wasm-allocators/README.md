# WASM Allocator PoC — dlmalloc vs emmalloc vs mimalloc

Sibling of the `build123d-vs-ocjs` benchmark. Builds three minimal samples-only
OCJS WASM artifacts that differ ONLY in the `-sMALLOC=…` link-time flag, then
runs the existing 10-sample benchmark against each to identify the most
performant allocator on the OCCT workload.

## Files

| File | Purpose |
| --- | --- |
| `samples-dlmalloc.yml` | Minimal binding list + `-sMALLOC=dlmalloc` (current OCJS production default, made explicit for symmetry) |
| `samples-emmalloc.yml` | Same bindings + `-sMALLOC=emmalloc` (Emscripten's compact allocator) |
| `samples-mimalloc.yml` | Same bindings + `-sMALLOC=mimalloc` + `INITIAL_MEMORY=128MB` (Microsoft's modern allocator; uses more memory per Emscripten docs) |
| `build-variant.sh <allocator>` | Re-link the OCJS WASM with one allocator flag, into `dist-<allocator>/` |
| `run-variant.sh <allocator>` | Run the existing `ocjs/run-bench.mjs` harness against `dist-<allocator>/`, write `../results/wasm-alloc-<allocator>-latest.json` |
| `merge-allocator-results.mjs` | Merge the three result JSONs into `wasm-allocator-comparison.json` with allocator-specific pairwise ratios + per-sample winner tally |
| `run-all.sh` | One-shot: build + bench all three variants + merge |

## Why this exists

The 4-engine benchmark documented in the parent experiment README
identified the WASM compute layer (allocator + SIMD + EH) as the dominant
remaining performance gap between OCJS and native OCCT. Recommendation R3-NEW
proposed swapping `dlmalloc` for `mimalloc` or `emmalloc`. This PoC measures
the swap directly to either confirm the recommendation, demote it, or split it
based on data.

Per-allocator background:

- **dlmalloc** (current OCJS default): Doug Lea's general-purpose allocator. Mature; per Emscripten docs "often worth the extra size if the workload allocates many small objects" (which OCCT does). Defensive metadata-corruption checks. Single global lock under pthreads.
- **emmalloc**: Emscripten's compact allocator. Smaller code size than dlmalloc; fewer defensive checks. Recommended only if NOT dominated by small allocs.
- **mimalloc**: Microsoft's modern allocator (`mimalloc` v2.x in Emscripten). Per-thread heaps, segregated free lists, designed for multi-threaded contention. Slightly larger binary (~+60 KB per Emscripten test bounds). Single-threaded benchmarks may understate its value but the segregated-free-list design typically beats coalescing-tree allocators on small-object churn.

## Reproduction

```bash
cd experiments/build123d-vs-ocjs/wasm-allocators

# One-shot build + bench all three variants + merge:
./run-all.sh

# Or one allocator at a time:
./build-variant.sh dlmalloc      # ~3-15 min depending on warm cache
./run-variant.sh dlmalloc        # ~30 s
./build-variant.sh emmalloc
./run-variant.sh emmalloc
./build-variant.sh mimalloc
./run-variant.sh mimalloc

# Merge results (auto-orders dlmalloc → emmalloc → mimalloc):
node merge-allocator-results.mjs \
  ../results/wasm-alloc-dlmalloc-latest.json \
  ../results/wasm-alloc-emmalloc-latest.json \
  ../results/wasm-alloc-mimalloc-latest.json \
  --out ../results/wasm-allocator-comparison.json
```

## Outputs

| Path | Contents |
| --- | --- |
| `dist-<allocator>/opencascade_single.{js,wasm,wasm-symbols.json,provenance.json}` | The minimal samples-only WASM artifact for one allocator |
| `../results/wasm-alloc-<allocator>-latest.json` | Per-iteration timings for each of the 10 samples |
| `../results/wasm-allocator-comparison.json` | Side-by-side merge with `emmalloc/dlmalloc`, `mimalloc/dlmalloc`, `mimalloc/emmalloc` ratios + per-sample winner + geometric-mean overall ratio + winner tally |

## Build invariants

These are held identical across all 3 variants so any timing delta is
attributable to the allocator alone:

- Toolchain: emscripten 5.0.1 / llvm 17 / wasmOpt (`build/build-flags.json`)
- OCCT commit: matches `build/build-flags.json` (current local working tree)
- Compile flags: `-O3`, `-fwasm-exceptions`, `-msimd128`, `-fno-rtti=0`, single-threaded
- Link flags: identical except trailing `-sMALLOC=…` and (mimalloc-only) `INITIAL_MEMORY` bump
- wasm-opt: `-O3` (parity with the published OCJS build — the current `single-threaded` preset ships with `OCJS_LTO=0` and wasm-opt at `-O4`; this experiment held wasm-opt at `-O3` to isolate the allocator delta from binaryen's `-O4` passes)
- `OCJS_LTO=0` (matches current OCJS production setting)
- Bindings: 28 symbols (mirror of what `samples.mjs` uses) + auto-included NCollection from `build/ncollection-manifest.json`

## What if the binding list is incomplete?

The first link may emit "undefined symbol" or "missing binding" errors if the
28 hand-listed symbols are not enough (the codegen sometimes references
transitive types like `Standard_Type` even when not declared). If this
happens:

1. Read the error message — the missing symbol name appears verbatim
2. Add `- symbol: <missing-name>` to all three sibling YAMLs
3. Re-run `./build-variant.sh dlmalloc` (subsequent variants pick up the fix from the symbol list change because the YAML hashes change)

## Adding a fourth allocator

To add a 4th allocator (e.g. `emmalloc-debug` for correctness validation),
copy `samples-dlmalloc.yml` to `samples-<name>.yml`, change the `-sMALLOC=…`
flag, extend `case "$ALLOCATOR" in` in both shell scripts and the `for ALLOC
in …` loop in `run-all.sh`, and extend `ALIAS` + `order` in
`merge-allocator-results.mjs`.
