# Optimization Analysis

Analysis of all optimization flags applied across the libcascade WASM build pipeline, identifying what is in use, what is structurally blocked by OCCT, and what remains actionable. Conducted March 2026 against Emscripten 5.0.1 / Binaryen 125 / LLVM 20 / OCCT 8.

## Build Pipeline

```
OCCT C++ sources (.cxx)
  │
  ├─ emcmake cmake + cmake --build     ← Stage 1: Compile (Clang/LLVM → .a static libs)
  │  └─ Flags from build-wasm.sh: OCJS_OPT, SIMD, exceptions, defines
  │
  ├─ emcc -c (bindings .cpp → .o)      ← Stage 1b: Compile bindings
  │  └─ Flags from Common.py / compileBindings.py
  │
  ├─ emcc -lembind (link)              ← Stage 2: Link (wasm-ld + emcc JS gen)
  │  ├─ YAML emccFlags (consumer-controlled)
  │  ├─ Fill-not-strip: OCJS_OPT / -flto if missing from YAML
  │  └─ emcc built-in wasm-opt pipeline runs at -O2+ (auto passes)
  │
  └─ wasm-opt (standalone)             ← Stage 3: Post-link (buildFromYaml.py)
     ├─ OCJS_WASM_OPT_LEVEL (default -O3, production -O4)
     ├─ --traps-never-happen, --strip-debug, --strip-producers
     ├─ --converge (if OCJS_CONVERGE=true)
     └─ Feature enables: SIMD, exception-handling, bulk-memory, etc.
```

## Current State (`single-threaded` preset)

### Stage 1: OCCT Compile (CMake via build-wasm.sh)


| Flag                                                 | Source               | Purpose                                          |
| ---------------------------------------------------- | -------------------- | ------------------------------------------------ |
| `-O3`                                                | `OCJS_OPT`           | LLVM aggressive optimization                     |
| `-msimd128` (+ `-mrelaxed-simd` when `OCJS_RELAXED_SIMD=1`) | `OCJS_SIMD=1`        | WASM SIMD instructions (Relaxed SIMD is opt-in — Safari 26.x does not implement it) |
| `-frtti`                                             | `build-wasm.sh`      | Required — OCCT uses `dynamic_cast`              |
| `-DIGNORE_NO_ATOMICS=1`                              | `build-wasm.sh`      | Suppress atomics warnings                        |
| `-DOCCT_NO_PLUGINS`                                  | `build-wasm.sh`      | Disable OCCT plugin system                       |
| `-DHAVE_RAPIDJSON`                                   | `build-wasm.sh`      | Enable RapidJSON support                         |
| `-DOCCT_NO_DUMP`                                     | `OCJS_DEFINES`       | Strip `Standard_Dump` debugging code             |
| `-UOCC_CONVERT_SIGNALS`                              | `OCJS_UNDEFINES`     | Remove signal→exception conversion (N/A in WASM) |
| `-fwasm-exceptions`                                  | exceptions build     | Native WASM exception handling                   |
| `-sSUPPORT_LONGJMP=0 -sDISABLE_EXCEPTION_CATCHING=1` | non-exceptions build | Disable EH overhead                              |


**OCCT's own cmake** (`occt_defs_flags.cmake`) unconditionally adds `-fexceptions` for non-MSVC compilers. In the non-exceptions build, this means LLVM generates EH landing pads that are stripped at link time by `DISABLE_EXCEPTION_CATCHING=1`. This is unavoidable — OCCT has `try/catch` blocks that require `-fexceptions` to compile.

### Stage 2: emcc Link (YAML emccFlags)


| Flag                                                   | Purpose                                                             |
| ------------------------------------------------------ | ------------------------------------------------------------------- |
| `-O3`                                                  | Link-time optimization (triggers emcc wasm-opt pipeline + meta-DCE) |
| `-sWASM_BIGINT`                                        | BigInt for i64 — eliminates legalization pass                       |
| `-sEVAL_CTORS=2`                                       | Compile-time constructor evaluation (ignores external input)        |
| `-sALLOW_MEMORY_GROWTH=1`                              | Dynamic heap growth                                                 |
| `-sINITIAL_MEMORY=100MB`                               | 100 MB initial memory                                               |
| `-sMAXIMUM_MEMORY=4GB`                                 | 4 GB maximum memory                                                 |
| `-sSTACK_SIZE=8388608`                                 | 8 MB stack                                                          |
| `-sEXPORT_ES6=1 -sMODULARIZE`                          | ES module output                                                    |
| `-sUSE_FREETYPE=1`                                     | FreeType font support                                               |
| `--closure 1`                                          | Google Closure Compiler on JS glue                                  |
| `--emit-symbol-map`                                    | Debug symbol map (no runtime cost)                                  |
| `--no-entry`                                           | Library mode (no `main`)                                            |


**emcc auto-enabled passes** (at `-O3` link): `--strip-target-features`, `--post-emscripten`, `-O3`, `--low-memory-unused` (GLOBAL_BASE ≥ 1024), `--zero-filled-memory`, `--pass-arg=directize-initial-contents-immutable`, meta-DCE (OPT_LEVEL=3, no ASSERTIONS), StackIR optimization.

### Stage 3: Standalone wasm-opt (buildFromYaml.py)


| Flag                                  | Purpose                                                                |
| ------------------------------------- | ---------------------------------------------------------------------- |
| `-O4`                                 | Flatten IR for deeper optimization (wasm-opt only, not valid for emcc) |
| `--traps-never-happen`                | Assume no trap is reached — strongest unsafe assumption                |
| `--strip-debug`                       | Remove debug info                                                      |
| `--strip-producers`                   | Remove producers section                                               |
| `--converge`                          | Run passes iteratively until binary size stabilizes                    |
| `--enable-mutable-globals`            | Enable mutable globals feature                                         |
| `--enable-bulk-memory`                | Enable bulk memory operations                                          |
| `--enable-sign-ext`                   | Enable sign extension                                                  |
| `--enable-nontrapping-float-to-int`   | Enable nontrapping FP→int                                              |
| `--enable-exception-handling`         | Enable EH (always, for both build paths)                               |
| `--enable-simd` (+ `--enable-relaxed-simd` when `OCJS_RELAXED_SIMD=1`) | Enable SIMD features (when `OCJS_SIMD=1`); Relaxed SIMD opt-in for Chrome/Firefox-only consumers |


**Dual wasm-opt pipeline**: The build runs wasm-opt twice — once via emcc's built-in pipeline at `-O3` (with `--low-memory-unused`, `--zero-filled-memory`, `--directize`, meta-DCE), then our standalone pass at `-O4` with `--traps-never-happen` and `--converge`. The second pass with `-O4` (which flattens IR) can find optimizations invisible to the structured-IR first pass.

## Gap Analysis

### Flags not used — Structurally blocked by OCCT

These optimizations are unavailable due to OCCT's C++ design and cannot be enabled without rewriting OCCT source code.


| Flag                 | Type  | Potential Gain  | Why Blocked                                                                                                                                                                                                                                                                               |
| -------------------- | ----- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `-fno-rtti`          | size  | 3–5% WASM size  | OCCT uses `dynamic_cast`, `Standard_Type`, and RTTI-based `Handle` hierarchy throughout. Removing RTTI breaks hundreds of call sites.                                                                                                                                                     |
| `-fno-exceptions`    | size  | 5–10% WASM size | OCCT has extensive `try { ... } catch (Standard_Failure&) { ... }` blocks. `occt_defs_flags.cmake` unconditionally adds `-fexceptions` for non-MSVC. Would cause compile errors.                                                                                                          |
| `-ffast-math` (LLVM) | speed | 2–5% runtime    | **Unsafe for a CAD kernel.** OCCT relies on precise IEEE 754 semantics for tolerance-based geometric comparisons, surface intersection (`IntPatch`, `IntCurve`), and boolean operations (`BRepAlgoAPI`). OCCT's own cmake enforces `/fp:precise` on MSVC, explicitly rejecting fast-math. |


**These three flags represent the largest theoretical optimization headroom (~10–20% combined) but are permanently blocked.** This is inherent to any C++ CAD kernel compiled to WASM.

### Flags not used — Empirically harmful or high cost


| Flag                        | Type       | Measured Effect                  | Why Skipped                                                                                |
| --------------------------- | ---------- | -------------------------------- | ------------------------------------------------------------------------------------------ |
| LTO (`-flto`) at compile    | size/speed | **+21% binary bloat** (measured) | See detailed analysis below.                                                               |
| `--closure 2`               | size       | minimal                          | Runs Closure on all code including wasm2js. Not recommended by Emscripten docs.            |
| `ENVIRONMENT=web`           | size       | ~2KB JS                          | Breaks Node.js test runs and consumers who use OCCT in Node.                               |
| `INCOMING_MODULE_JS_API=[]` | size       | ~2.5% JS                         | Risky — consumers may use various Module attributes.                                       |
| `MINIMAL_RUNTIME`           | size       | significant JS                   | Too aggressive for a general-purpose library (removes POSIX compat, Module object).        |
| `SUPPORT_ERRNO=0`           | size       | ~0.5KB                           | OCCT calls C stdlib functions that set `errno`. Could break file I/O error handling.       |
| `FILESYSTEM=0`              | size       | ~50KB JS                         | OCCT uses Emscripten FS for file I/O (STEP/IGES import/export). FS is explicitly exported. |


#### LTO at compile time — Empirically catastrophic for OCCT

**Measured result**: Compiling with `OCJS_LTO=1` (which passes `-flto` to all 4,156 `.o` files, producing LLVM bitcode instead of regular WASM objects) caused the single-threaded WASM binary to grow from **17.67 MB to 21.38 MB** (+21%). The root cause is LLVM cross-module inlining:


| Metric                | Without LTO | With LTO | Delta                |
| --------------------- | ----------- | -------- | -------------------- |
| WASM binary           | 17.67 MB    | 21.38 MB | +3.71 MB (+21%)      |
| Function count        | 31,607      | 21,344   | -10,263 (-32%)       |
| Avg function size     | 256 B       | 923 B    | +3.6×                |
| Functions >1KB        | —           | —        | +9.88 MB growth      |
| Tiny functions (<64B) | 17,942      | 4,063    | -13,879 inlined away |


When LLVM has visibility across all compilation units (via LTO bitcode), it aggressively inlines small/medium helper functions — `Handle::DownCast()`, tolerance comparisons, coordinate accessors — into every call site. A helper called from 50 sites gets its body copied 50 times. The function count drops but total code size explodes.

**Why this hurts speed too**: WASM is JIT-compiled by the browser engine (V8 Liftoff + TurboFan). The inflated functions from LTO inlining produce even larger machine code at the JIT layer, causing L1 instruction cache thrashing. At `-O2` without LTO, hot helper functions remain compact and deduplicated, staying resident in the CPU cache.

**Additional pathology**: LTO masks runtime dependency failures. Functions from "filtered" packages survive in the binary because they were inlined into callers from non-filtered packages, making dependency analysis unreliable.

**Current approach**: `OCJS_LTO=0` (regular WASM `.o` files). The `-flto` flag in YAML `emccFlags` only affects the link step, where it enables binaryen's wasm-opt pass without triggering LLVM cross-module inlining. This matches the V7.6.2 pipeline that produced the smallest binary.

### Flags not used — Actionable


| Flag                   | Type  | Expected Gain    | Risk       | Recommendation                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---------------------- | ----- | ---------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| wasm-opt `--fast-math` | speed | 0.5–1.5% runtime | Low-medium | **Test it.** wasm-opt's `--fast-math` is much less aggressive than LLVM's — it only affects wasm-level NaN handling patterns, not how LLVM compiled the code. OCCT shouldn't produce NaN in normal operation (NaN in OCCT is always a bug). Risk: some algorithms carefully order FP operations for numerical stability, and reassociation could change results enough to fail tolerance checks on degenerate geometry. Run full smoke suite to validate. |


### Flags already in use — Comprehensive coverage


| Category            | Flags                                            | Status                                                    |
| ------------------- | ------------------------------------------------ | --------------------------------------------------------- |
| LLVM optimization   | `-O3`                                            | Maximum safe level for OCCT                               |
| SIMD                | `-msimd128` (+ `-mrelaxed-simd` when `OCJS_RELAXED_SIMD=1`) | Baseline WASM SIMD; Relaxed SIMD opt-in (not in Safari)   |
| BigInt              | `-sWASM_BIGINT`                                  | Eliminates i64 legalization overhead                      |
| Constructor eval    | `-sEVAL_CTORS=2`                                 | Aggressive compile-time evaluation                        |
| Closure Compiler    | `--closure 1`                                    | JS glue minimized                                         |
| wasm-opt level      | `-O4` (standalone)                               | Maximum (includes IR flattening)                          |
| Unsafe assumptions  | `--traps-never-happen`                           | Strongest assumption — subsumes `--ignore-implicit-traps` |
| Zero memory         | `--zero-filled-memory`                           | Auto-enabled by emcc at `-O3`                             |
| Low memory          | `--low-memory-unused`                            | Auto-enabled by emcc (GLOBAL_BASE=1024)                   |
| Convergence         | `--converge`                                     | Iterative optimization until stable                       |
| Meta-DCE            | Automatic at `-O3` link                          | Cross-language dead code elimination                      |
| Stripping           | `--strip-debug --strip-producers`                | Minimal metadata in output                                |
| Exception disabling | `DISABLE_EXCEPTION_CATCHING=1 SUPPORT_LONGJMP=0` | No EH runtime overhead (non-exceptions build)             |
| WASM exceptions     | `-fwasm-exceptions`                              | Native EH, smaller than JS-based (exceptions build)       |
| Debugging code      | `-DOCCT_NO_DUMP -UOCC_CONVERT_SIGNALS`           | Remove OCCT debugging and signal handling                 |
| Symbol map          | `--emit-symbol-map`                              | Debug info without runtime cost                           |


## Conclusion

**The build pipeline is near the optimization ceiling for OCCT compiled to WASM.** The dual wasm-opt pipeline (`-O3` via emcc → `-O4` + `--traps-never-happen` + `--converge` standalone) is more aggressive than most production WASM builds.

The largest theoretical gains (`-fno-rtti`: 3–5%, `-fno-exceptions`: 5–10%) are structurally blocked by OCCT's C++ design. LTO at compile time was empirically measured to cause **+21% binary bloat** due to LLVM cross-module inlining (cross-module inlining pulls unrelated translation units into the final wasm). The only actionable flag is wasm-opt `--fast-math` (~0.5–1.5% speed), which should be validated against the full test suite before adoption.

**The next frontier for runtime performance is not compiler flags but architectural:**

1. **Multi-threaded WASM** (`THREADING=multi-threaded`, SharedArrayBuffer) — OCCT's `Standard_ThreadPool` enables parallel algorithm execution but requires consumer support (`Cross-Origin-Isolation` headers, worker architecture)
2. **Algorithmic selection** — choosing faster OCCT algorithm variants at the API level (e.g., mesh incremental vs batch, linear vs BVH spatial indexing)
3. **Selective binding** — smaller WASM binaries via consumer-specific YAML configs (only bind what's needed) reduces download time, the dominant real-world bottleneck

## Appendix: Configuration Reference

The production configurations in `build-configs/configurations.json`:


| Config                       | Compile | wasm-opt | SIMD | Threading        | Exceptions | BigInt | EVAL_CTORS | Closure | Converge |
| ---------------------------- | ------- | -------- | ---- | ---------------- | ---------- | ------ | ---------- | ------- | -------- |
| `single-threaded` (default)  | `-O3`   | `-O4`    | yes  | single-threaded  | WASM       | yes    | yes (=2)   | yes     | yes      |
| `single-threaded-smallest`   | `-Os`   | `-O3`    | yes  | single-threaded  | WASM       | yes    | yes (=2)   | yes     | yes      |
| `multi-threaded`             | `-O3`   | `-O4`    | yes  | multi-threaded   | WASM       | yes    | yes (=2)   | yes     | yes      |
| `debug`                      | `-O0`   | `-O0`    | no   | single-threaded  | WASM       | no     | yes (=2)   | yes     | no       |


See `BUILD_SYSTEM.md` for full documentation of the build system, configuration keys, and workflows.
