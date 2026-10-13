# Native C++ OCCT benchmark — apples-to-apples-to-apples

This adds a third (and fourth) engine to the existing `build123d-vs-ocjs` benchmark
so the same 10 OCCT workloads can be compared across:

| Engine alias | Stack | Source |
| --- | --- | --- |
| `build123d` | CPython 3.13 + pybind11 + native OCCT 7.9 | `cadquery-ocp-novtk` wheel |
| `native-lto` | C++17 + native OCCT 8.0.0 (ThinLTO ON) | `repos/opencascade.js/deps/OCCT/` |
| `native-nolto` | C++17 + native OCCT 8.0.0 (LTO OFF) | `repos/opencascade.js/deps/OCCT/` |
| `ocjs` | Node 24 + V8 13.6 + WASM OCCT 8.0.0 | local `repos/opencascade.js/dist/` (commit `cb07385` + OCCT 8.0.0 final `d3056ef`) |

The two `native-*` variants exist specifically to **measure the LTO impact** that finding F1 in
the build123d-vs-ocjs performance benchmark doc in this experiment directory
estimated at 20–40%. Pairwise ratios in `results/comparison.json` then attribute each
remaining slice of the gap to a specific layer (WASM SIMD, dlmalloc, EH, pybind11).

### Sibling allocator PoC

[`../wasm-allocators/`](../wasm-allocators/README.md) extends the comparison sideways: three
minimal samples-only OCJS WASM builds that differ ONLY in the trailing `-sMALLOC=…` flag
(`dlmalloc` / `emmalloc` / `mimalloc`). The benchmark answers "which WASM allocator wins on
the OCCT workload?" — see finding F12 in the research doc. Headline: **`mimalloc` wins 6/10
samples (4.6% geomean speedup, 8.6% on the worst-case boolean cut grid, 29% faster cold
load)**; `emmalloc` is ruled out (1.5% slower than `dlmalloc` baseline).

## Files

| File | Purpose |
| --- | --- |
| `samples.hpp` / `samples.cpp` | 10 C++ workloads, identical to `../ocjs/samples.mjs` and `../python/samples.py` |
| `main.cpp` | Bench harness — `--warmup`, `--iters`, `--out`, `--engine`, `--lto` flags; emits the same JSON shape as the python/ocjs runners |
| `CMakeLists.txt` | Bench binary build; consumes a previously-installed OCCT via `find_package(OpenCASCADE CONFIG)` |
| `configure-occt-lto.sh` | One-shot cmake configure for the LTO OCCT build |
| `configure-occt-nolto.sh` | One-shot cmake configure for the noLTO OCCT build |
| `build-bench.sh` | Configures + builds the bench binary against either OCCT install |
| `run-bench.sh` | Runs the bench binary, writes `../results/native-{lto,nolto}-latest.json` |

## End-to-end reproduction

From the OCJS repo root (`repos/opencascade.js/`):

```bash
EXP=experiments/build123d-vs-ocjs/native

# 1. Configure both OCCT variants (3-5 sec each)
$EXP/configure-occt-lto.sh
$EXP/configure-occt-nolto.sh

# 2. Build OCCT (~30-60 min each on M2 Pro with -j6)
cmake --build build-native-occt-lto   --parallel 6 --target install
cmake --build build-native-occt-nolto --parallel 6 --target install

# 3. Build bench binary against each (~1 min each)
$EXP/build-bench.sh lto
$EXP/build-bench.sh nolto

# 4. Run bench (each <1 min)
$EXP/run-bench.sh lto
$EXP/run-bench.sh nolto

# 5. Run the other two engines (covered by ../README.md)
.venv/bin/python ../python/run_bench.py --warmup 2 --iters 7 --out ../results/python-latest.json
node ../ocjs/run-bench.mjs --warmup 2 --iters 7 \
  --artifact-dir /tmp/ocjs-published/package/dist \
  --out ../results/ocjs-latest.json

# 6. Merge all 4 into a side-by-side comparison
node ../ocjs/merge-results.mjs \
  ../results/python-latest.json \
  ../results/native-lto-latest.json \
  ../results/native-nolto-latest.json \
  ../results/ocjs-latest.json \
  --out ../results/comparison.json
```

## How OCCT upstream itself builds (the "what would the maintainers do?" answer)

To validate that LTO is the right thing to enable, here's what the upstream OCCT
maintainers themselves do in CI. Sources:

- [`deps/OCCT/.github/workflows/build-and-test-multiplatform.yml`](../../../deps/OCCT/.github/workflows/build-and-test-multiplatform.yml) — runs on every PR
- [`deps/OCCT/.github/workflows/master-validation.yml`](../../../deps/OCCT/.github/workflows/master-validation.yml) — runs on pushes to `master`
- [`deps/OCCT/.github/actions/configure-occt/action.yml`](../../../deps/OCCT/.github/actions/configure-occt/action.yml) — the shared cmake configure action
- [`deps/OCCT/adm/cmake/occt_defs_flags.cmake`](../../../deps/OCCT/adm/cmake/occt_defs_flags.cmake) — defines `BUILD_OPT_PROFILE`

The key cmake variable is `BUILD_OPT_PROFILE`, with two settings:

| Profile | Compile flags (Clang/GCC) | Link flags | Used by |
| --- | --- | --- | --- |
| `Default` | `-O3` (CMake's default Release flags) | none added | PR-time CI (every PR) |
| `Production` | `-O3 -fomit-frame-pointer -flto` (+ `-ffunction-sections` on non-macOS) | `-flto` (+ `-Wl,--gc-sections` on Linux) | **Master-validation CI** + downstream packagers (conda-forge, vcpkg, Linux distros) |

The actual cmake snippet from `occt_defs_flags.cmake:151-181`:

```cmake
elseif (CMAKE_COMPILER_IS_GNUCC OR CMAKE_COMPILER_IS_GNUCXX OR (CMAKE_CXX_COMPILER_ID MATCHES "[Cc][Ll][Aa][Nn][Gg]"))
  set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -Wall -Wextra")

  if ("${BUILD_OPT_PROFILE}" STREQUAL "Production")
    set(CMAKE_CXX_FLAGS_RELEASE "${CMAKE_CXX_FLAGS_RELEASE} -O3 -fomit-frame-pointer")
    set(CMAKE_C_FLAGS_RELEASE   "${CMAKE_C_FLAGS_RELEASE}   -O3 -fomit-frame-pointer")

    # Apply LTO optimization on all platforms
    set(CMAKE_CXX_FLAGS_RELEASE "${CMAKE_CXX_FLAGS_RELEASE} -flto")
    set(CMAKE_C_FLAGS_RELEASE   "${CMAKE_C_FLAGS_RELEASE}   -flto")
    ...
    set(CMAKE_EXE_LINKER_FLAGS_RELEASE    "${CMAKE_EXE_LINKER_FLAGS_RELEASE}    -flto")
    set(CMAKE_SHARED_LINKER_FLAGS_RELEASE "${CMAKE_SHARED_LINKER_FLAGS_RELEASE} -flto")
    set(CMAKE_STATIC_LINKER_FLAGS_RELEASE "${CMAKE_STATIC_LINKER_FLAGS_RELEASE} -flto")
    ...
```

For MSVC/Windows the equivalent flags are `/GL` (whole program optimization) +
`/LTCG` (link-time code generation). All three platforms (Linux/macOS/Windows)
get LTO when `BUILD_OPT_PROFILE=Production`.

### Where "Production" is actually used

```bash
# PR validation (cheap, every PR) → BUILD_OPT_PROFILE=Default (no LTO)
.github/workflows/build-and-test-multiplatform.yml
   uses: ./.github/actions/build-occt
   with:
     build-opt-profile: 'Default'    # default is 'Production', PR override

# Master validation (release-quality, after merge) → BUILD_OPT_PROFILE=Production (LTO ON)
.github/workflows/master-validation.yml
   uses: ./.github/actions/cmake-build-full
   with:
     opt-profile: "Production"       # explicit
     use-tbb: "ON"
```

PR CI uses `Default` purely to keep PR build time short — LTO can add
30-60% to OCCT build wall-time. Master-branch CI flips back to `Production`
so the validation runs against the configuration distributed to users.

### What downstream packagers ship

| Distribution | LTO setting | Source |
| --- | --- | --- |
| **conda-forge `occt`** | ON via `CMAKE_INTERPROCEDURAL_OPTIMIZATION=TRUE` (cmake's portable LTO toggle) | [conda-forge/occt-feedstock `recipe/build.sh`](https://github.com/conda-forge/occt-feedstock/blob/main/recipe/build.sh) |
| **conda-forge `cadquery-ocp`** (build123d's underlying engine) | inherits LTO from the `occt` dependency | meta.yaml depends on `occt={{OCCT_VER}}=all*` |
| **vcpkg `opencascade`** | ON (uses `BUILD_OPT_PROFILE=Production`) | [`deps/OCCT/adm/vcpkg/ports/opencascade/portfile.cmake`](../../../deps/OCCT/adm/vcpkg/ports/opencascade/portfile.cmake) |
| **opencascade.js (local `cb07385`)** | **OFF** (`OCJS_LTO=0` in `build-configs/configurations.json::O3-noLTO-wasmExc-single`) | this repo |
| **opencascade.js v3.0.0-beta.1 (published)** | **OFF** (same `O3-noLTO-wasmExc-single` config but built against pre-OCCT-8.0.0-beta1 snapshot `0ebbbedb`; **15-35% slower than local rebuild on most workloads** — see F11 in research doc) | npm registry |

So **OCJS is the only commonly-used OCCT distribution shipping without LTO**.
The forensic estimate in F1 (20-40% overhead from missing LTO) is consistent
with upstream's deliberate choice to enable it for everyone they ship to —
they wouldn't pay 30-60% longer build times on master if the runtime gain
weren't substantial.

### Other production tunings worth noting

OCCT upstream's CI also enables, by default:

- `BUILD_USE_PCH=ON` — precompiled headers, ~3-5× faster build, no runtime impact
- `USE_TBB=ON` — parallelism via Intel TBB on master-validation Linux/Windows builds. **Not** used in our benchmark (`USE_TBB=OFF` matches OCJS's single-threaded constraint), but production downstream consumers get TBB-accelerated BOPAlgo by default
- `BUILD_OPT_PROFILE=Production` adds `-fomit-frame-pointer` and `-ffunction-sections` (non-macOS) on top of LTO

Our `configure-occt-lto.sh` matches the upstream `Production` profile's *runtime-relevant* flags
(`-O3 -flto`) via cmake's portable `CMAKE_INTERPROCEDURAL_OPTIMIZATION=TRUE`, which under the hood
also emits `-flto` for clang. We deliberately leave `USE_TBB=OFF` in both `native-*` variants so
the comparison vs OCJS measures single-threaded performance honestly — comparing TBB-parallel
native against single-threaded WASM would conflate threading with codegen quality. A future
expansion could add a fifth `native-lto-tbb` engine to quantify TBB headroom separately.

## Build-flag invariants vs OCJS

The `configure-occt-*.sh` scripts mirror the OCJS WASM build configuration as closely as
possible so the only intentional differences between `native-nolto` and `ocjs` are:

| Flag | OCJS | native-nolto | native-lto |
| --- | --- | --- | --- |
| `CMAKE_BUILD_TYPE` | Release | Release | Release |
| Optimization | `-O3` | `-O3` | `-O3` |
| **LTO** | OFF (`OCJS_LTO=0`) | **OFF** | **ON** |
| Exceptions | wasm native EH | C++ Itanium | C++ Itanium |
| SIMD | `-msimd128` (WASM) | NEON (auto-vectorize) | NEON (auto-vectorize) |
| `BUILD_USE_PCH` | OFF | OFF | OFF |
| `USE_TBB` | OFF | OFF | OFF |
| Modules disabled | Visualization, AppFw, DataExchange, Draw | same | same |
| Library type | static (linked into single .wasm) | shared (.dylib) | shared (.dylib) |

Differences that we cannot remove:
- WASM dlmalloc vs Apple libmalloc (allocator)
- WASM SIMD-128 vs ARM64 NEON (codegen ABI)
- V8 JIT vs native ARM64 (final machine code)
- WASM exception handling vs Itanium ABI EH

These are the residual contributors that the `ocjs / native-nolto` ratio isolates.

## Build flags actually emitted

After running `configure-occt-lto.sh`, the LTO build's compile/link flags are
captured in `build-native-occt-lto/CMakeCache.txt`. Verify with:

```bash
grep -E "BUILD_TYPE|INTERPROCEDURAL|RELEASE_FLAGS|EXCEPTIONS|MODULE_" \
     ../../../../build-native-occt-lto/CMakeCache.txt
```

## Outputs

Each run emits a JSON file with the same shape as `python/run_bench.py` and `ocjs/run-bench.mjs`:

```json
{
  "engine": "native-cpp-occt-lto",
  "occtVersion": "8.0.0",
  "ltoEnabled": true,
  "warmup": 2,
  "iterations": 7,
  "samples": {
    "01_primitive_box": { "medianMs": ..., "meanMs": ..., "minMs": ..., "maxMs": ..., "timesMs": [...] },
    ...
  }
}
```

`merge-results.mjs` consumes any combination of these and produces:

```json
{
  "engines": ["build123d", "native-lto", "native-nolto", "ocjs"],
  "rows": [
    { "name": "09_fuse_many_boxes",
      "medians": { "build123d": ..., "native-lto": ..., "native-nolto": ..., "ocjs": ... },
      "ratios": {
        "native-nolto/native-lto": ...,    // pure LTO uplift (F1)
        "ocjs/native-nolto": ...,          // pure WASM penalty
        "ocjs/native-lto": ...,            // total OCJS gap
        "build123d/native-lto": ...,       // pybind11 wrapper overhead
        "ocjs/build123d": ...
      } } ] }
```
