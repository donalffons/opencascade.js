# Build System

The libcascade build system uses **Nx** for task orchestration and caching, replacing the custom `build-cache.py` system. The underlying Python build scripts (`Common.py`, `compileBindings.py`, `buildFromYaml.py`) remain, but are now invoked through Nx targets with correct input hashing and cache management.

## Architecture

The central design principle: **compile-time configuration and link-time flags are orthogonal concerns controlled by different actors**.

### Channel 1: Compile-time configuration (maintainer-controlled)

- Defined in `build-configs/configurations.json` as named configurations
- Selected via `--config <name>` CLI argument or `OCJS_CONFIG` env var
- Sets `OCJS_*` env vars for compile, wasm-opt, and closure compiler steps
- Individual env vars can override any config value

### Channel 2: Link-time flags (consumer-controlled)

- Defined in the consumer YAML's `emccFlags` array
- Passed **verbatim** to `emcc` at link time — no stripping, no filtering
- Exactly the same API consumers have used since v7.6.2

## Component Glossary

A reference map of every moving part in the bindgen pipeline. Grouped by role so the layering is visible: how source code flows from OCCT headers, through a parser, through a code generator, into a compiler, into a linker, and out as a WebAssembly module.

The whole pipeline can be read top-to-bottom as: **F generates C++ from E using B/C/G; D then compiles+links that C++ into H.**

### A. Toolchain meta-installers

These manage *other* toolchains. They are not compilers or libraries themselves.

| name | role |
| --- | --- |
| **emsdk** (Emscripten SDK) | A Python-based meta-installer that downloads and version-locks the entire Emscripten toolchain (clang, `emcc`, libc++, sysroot, node, etc.) as a single bundle. We pin a specific emsdk release in `DEPS.json`; running `scripts/clone-deps.sh` installs it under `deps/emsdk/`. The bundle's exact clang/libc++ commits come from emsdk's manifest, not from us. |
| **uv** (Astral) | Hermetic Python interpreter + venv manager. Reads `.python-version`, `pyproject.toml`, and `uv.lock` to install an exact CPython and an exact set of Python packages into `.venv/`. Has no role in C++ — it only sets up the Python that runs the bindgen scripts. |

### B. The C++ frontend (what reads source code)

Two distinct copies of clang are in play here. The distinction matters.

| name | role |
| --- | --- |
| **clang** (the driver, from emsdk) | The `clang++` executable at `deps/emsdk/upstream/bin/clang`. Drives preprocessing → parsing → codegen → linking. Wrapped by `emcc` to inject wasm-specific defaults. Version is whatever emsdk's manifest pinned (currently ahead of any released LLVM). |
| **libclang** (the Python binding) | The pip package `libclang` exposes ctypes bindings to a `libclang.{so,dylib}` — the C library form of the clang frontend. The bindgen's discover pass uses this to parse OCCT headers into an AST it can walk. **This is a separate clang from the driver above** and its version is independent. Pinned in `pyproject.toml` and locked in `uv.lock`. |
| **clang resource directory** | A small directory of compiler-builtin headers (`stddef.h`, `stdint.h`, `arm_neon.h`, intrinsic shims) that ships *with* every clang at `lib/clang/<N>/include/`. Defines macros and types that depend on the compiler's own version (`__INT32_C`, `__builtin_ctzg`, etc.) and **must match the clang version reading them**. |

> **Important pairing rule:** libclang and libc++ are released together from the LLVM monorepo and the LLVM project only supports pairings within ±1 major release (per the official libc++ compiler-support policy). The parse-side libclang version and the libc++ headers libclang reads must stay aligned. See "C. The C++ standard library" below.

### C. The C++ standard library

| name | role |
| --- | --- |
| **libc++** (a.k.a. **libcxx**) | LLVM's C++ standard library implementation — `std::vector`, `std::optional`, `<algorithm>`, etc. **At parse time only the headers matter**; the runtime is irrelevant to libclang. libc++ headers `#include` compiler intrinsics from the clang resource directory and assume a minimum clang version. The libc++ release that ships in `deps/emsdk/upstream/emscripten/system/lib/libcxx/include/` is whatever emsdk's vendored clang shipped with. |
| **libc++abi** | Companion runtime to libc++ providing exception types, RTTI helpers, demanglers. Statically linked into the wasm at compile/link time. Not consumed during parse. |

### D. The emscripten compile/link layer

| name | role |
| --- | --- |
| **emcc** | Emscripten's `clang++` wrapper at `deps/emsdk/upstream/emscripten/emcc`. Adds `-target wasm32-unknown-emscripten`, points clang at the emscripten sysroot, calls `wasm-ld` at link time, then runs `wasm-opt`. Build scripts invoke `emcc`, not `clang` directly. |
| **wasm-ld** (a.k.a. **lld**) | LLVM's WebAssembly linker. Takes `.o` files compiled by emcc and links them into a `.wasm` module. Performs dead-code elimination of unreferenced symbols — this is where the link-time NCollection filter operates. |
| **binaryen / wasm-opt** | Post-link wasm bytecode optimiser. Shrinks and optimises the linked module. Invoked by `emcc` at `-O2` and above. |
| **emscripten sysroot** | A faux POSIX environment for wasm builds (`inttypes.h`, `wchar.h`, pthread shims, OpenGL/EGL stubs, etc.) under `system/include/` and `cache/sysroot/include/`. Replaces the host OS's C library headers so wasm builds are OS-independent. |
| **embind** | C++ template library shipped inside emscripten that generates the JS↔C++ glue from `EMSCRIPTEN_BINDINGS(name) { class_<X>(…); }` macro blocks. **This is the actual binding mechanism** — the bindgen emits embind code; embind expands at compile time to produce the JS shims. |

### E. The OCCT source being wrapped

| name | role |
| --- | --- |
| **OCCT** (OpenCASCADE Technology) | The CAD kernel we produce bindings for. ~13,000 C++ headers organised into "packages" (TKMath, TKGeomBase, TKBRep, etc.). Cloned to `deps/OCCT/` at the commit pinned in `DEPS.json`. |
| **NCollection** | OCCT's home-grown template-based container library (`NCollection_Array1<T>`, `NCollection_HArray1<T>`, `NCollection_Sequence<T>`, `NCollection_DataMap<K,V>`, etc.). Used pervasively as parameter and return types. The bindgen enumerates the specific instantiations reachable from bound classes and produces concrete wrappers for each — without this enumeration step the generated `.d.ts` would lose its type fidelity. |
| **Standard / Standard_Macro / Standard_Integer** | OCCT's foundational type system. `Standard_Integer = int`, `Standard_Real = double`, `Standard_EXPORT` = compiler visibility attribute, `Handle(T) = opencascade::handle<T>`. Every OCCT header transitively includes this; its successful parse is a precondition for any class body downstream to parse. |
| **rapidjson** | Header-only JSON parser. OCCT uses it for glTF I/O. Pure headers, no compile required. Cloned to `deps/rapidjson/`. |
| **FreeType** | Font rendering library. OCCT depends on it for text annotations and 3D text features. Compiled to wasm and statically linked. Cloned to `deps/freetype/`. |

### F. The bindgen (`src/ocjs_bindgen/`)

Our code. Generates embind C++ from OCCT headers, then drives `emcc` to compile+link the result.

| component | role |
| --- | --- |
| **`config/paths.py`** | Resolves include paths for the libclang parse, including the libc++ headers libclang reads. Single source of truth for where headers come from. |
| **`config/flags.py`** | Build-flag state machine consumed by the compile/link drivers. Implements the env-var precedence rules documented under [Flag Precedence](#flag-precedence). |
| **`ast/parse.py`** | The single `libclang.Index.parse()` call site. Builds the giant `myMain.h` translation unit from all OCCT includes and hands it to libclang. |
| **`discover.py`** | The NCollection enumeration pass. Walks bound class methods, extracts template instantiations from their parameter and return types, mangles them into manifest entries (e.g. `NCollection_HArray1<gp_Pnt>` → `NCollection_HArray1_gp_Pnt`). Writes `build/ncollection-manifest.json`. |
| **`codegen/embind/`** | Generates the `EMSCRIPTEN_BINDINGS(name) { class_<X>("X").function("foo", &X::foo); }` C++ source files that `emcc` compiles. |
| **`link/rewrite.py`** | Applies the link-time NCollection filter — restricts the wasm-ld link set to symbols actually reachable from the consumer's bound classes. |
| **`filters/`** | Header-level and package-level exclusion rules (read from `bindgen-filters.yaml`). Drops OCCT packages that have no wasm meaning (OpenGL platform headers, OSD platform abstractions, etc.) before they reach the parse stage. |
| **`docs/`** | Doxygen-comment extractor; folds OCCT's `/** … */` blocks into JSDoc on the generated `.d.ts`. |
| **`build_drivers/`** | Subprocess wrappers around `emcc`, `wasm-ld`, `wasm-opt`, Closure Compiler, etc. The boundary between Python orchestration and shell processes. |

### G. Per-build artifacts (regenerated each run)

These are *not* source — they're intermediate files the pipeline produces and re-uses.

| artifact | role |
| --- | --- |
| **`build/occt-includes/`** (the **flat include directory**) | A symlink farm aliasing every OCCT header by its bare basename, so `#include "Poly_Triangulation.hxx"` resolves without enumerating every OCCT subdirectory on `-I`. Built by `buildFlatIncludes()` in `paths.py`. |
| **`build/pch.h`** + **`build/pch.h.pch`** (the **precompiled header**) | A single header that `#include`s every OCCT and embind header, then precompiled by emcc into a binary form. Every embind translation unit at compile time loads the PCH instead of re-parsing thousands of headers — gives a ~25× compilation speedup. Pure compile-side optimisation; does not affect the libclang discover pass. |
| **`build/ncollection-manifest.json`** | Deduped list of `NCollection_*<T...>` instantiations the discover pass enumerated from the consumer's bound classes. Consumed by the link-time filter to retain only the symbols actually needed. |
| **`build/occt-cmake/`** | The one incremental CMake scratch tree. A complete semantic-identity marker permits reuse; mismatched or interrupted state is discarded before compilation. It is not an Nx output. |
| **`build/occt-libraries/`** | The immutable, manifest-backed static-library inventory published from successful CMake scratch. This is the cache-owned OCCT input consumed by linking. |
| **`build/bindings-manifest.json`** | Sorted content ledger for the complete generated binding tree. Generation happens in a fresh staging tree and replaces the live tree atomically. |
| **`build/link-core/`** | Cache-owned link artifacts for one YAML/configuration identity. They are copied exactly into `OCJS_OUTPUT_DIR` by the uncached materialization target. |

### H. Support tooling

| name | role |
| --- | --- |
| **CMake** | Configures and drives OCCT's own C++ build (compiles OCCT's `.cxx` into object archives) before `emcc` links them into wasm. Run via `emcmake cmake` to inject `emcc` as the compiler. Pinned in `pyproject.toml` and locked in `uv.lock`. |
| **Doxygen** | Parses OCCT's `/** … */` comments into XML; `extract-docs.py` folds that into the generated `.d.ts` JSDoc. Does not touch the wasm itself. Uses the system-installed `doxygen`. |
| **Nx** | Workspace build orchestrator. Caches per-task outputs so re-running unchanged steps is a no-op. The host build pipeline goes through Nx targets. See [Caching Behavior](#caching-behavior). |
| **Docker** | Alternative isolation: the same scripts run inside a Linux container with emsdk pre-installed. See [Consumer Workflows → Docker](#docker). |
| **Node.js** | Runs the JS-side smoke tests and `npm pack` for distribution. Pinned via `.nvmrc`. Not in the parse or compile pipelines. |

### Build outputs (what the pipeline produces)

The output set per consumer YAML. Names come from the YAML's `mainBuild.name` (here illustrated as `my_build`).

| artifact | role |
| --- | --- |
| **`my_build.wasm`** | The compiled WebAssembly module — OCCT geometry kernel, embind glue, all linked together. The thing browsers and Node load. |
| **`my_build.js`** | JS wrapper emitted by `emcc` — module loader, exported function thunks, embind runtime. Imports the `.wasm` and exposes the JS API. |
| **`my_build.d.ts`** | TypeScript declarations emitted by the bindgen's codegen. Type fidelity here depends on the discover pass having enumerated every reachable NCollection instantiation; gaps surface as `: number` or `: unknown` downgrades. |
| **`my_build.js.symbols`** | Function index to name map for the shipped `.wasm`, written by the link step's final `wasm-opt` pass (`--emit-symbol-map`). Use it to symbolize `wasm-function[N]` stack frames, or diff two builds to see which functions were retained or dropped. |

### CI validation boundaries

Every push builds `final-single`, `final-multi`, and `bindgen-base` natively on both amd64 and arm64. The final stages each perform one bounded consumer link, validate all six outputs, and run the same runtime smoke. Bindgen-base instead exercises the smallest source-generation boundary with `tests/docker/fixtures/simple.yml`. Native host toolchains are not byte-reproducible across architectures, so the amd64 ST and MT outputs are the canonical npm inputs while both successful native image digests are required for GHCR promotion.

The packed candidate is the sole package-test input. Node runtime, declarations, docs, and starter templates run independently; a dedicated COOP/COEP server then validates ST and MT under Chromium, Firefox, and WebKit. Template render tests remain Chromium-only because they own bundler, WebGL, and compositor behavior rather than browser-engine runtime compatibility.

For direct image validation, invoke the same script CI uses rather than a second orchestration wrapper:

```bash
OCJS_E2E_IMAGE=<image> \
OCJS_E2E_STAGE=final-single \
OCJS_E2E_BUILD_CONFIG=build-configs/full.yml \
OCJS_DOCKER_PLATFORM=linux/amd64 \
OCJS_EXPECTED_SHA=<full-commit-sha> \
SOURCE_DATE_EPOCH=<commit-epoch> \
./scripts/docker-e2e-validate.sh
```

Use `final-multi` with `build-configs/full_multi.yml`, or `bindgen-base` without a full-build config. Hosted candidate and reproducibility jobs use GitHub's native four-hour job timeout. Build timing and cache observations stay in logs; the published provenance and build-manifest sidecars deliberately exclude execution-local state so their bytes can prove host independence.

### How the components flow together

A single end-to-end build, with each step labelled by which component does the work:

1. **A** (`clone-deps.sh`) materialises **emsdk**, **OCCT**, **rapidjson**, **FreeType** under `deps/`.
2. **A** (`uv`) creates `.venv/` and installs **F**'s Python dependencies (including the **B** `libclang` binding).
3. **F** (`paths.py`, `buildFlatIncludes()`) builds **G** (the flat include directory).
4. **F** (`paths.py`, `buildPch()`) calls **D** (`emcc`) to build **G** (the PCH).
5. **F** (`ast/parse.py`) calls **B** (`libclang`) to parse **E** (OCCT headers via the flat include dir) using **C** (`libc++` headers).
6. **F** (`discover.py`) walks the resulting AST and writes **G** (`ncollection-manifest.json`).
7. **F** (`codegen/embind/`) generates embind C++ source.
8. **D** (`emcc`) compiles the generated source + OCCT source into `.o` files, using the **G** PCH for speed.
9. **D** (`wasm-ld`) links the `.o` set into a `.wasm`, with **F** (`link/rewrite.py`) applying the NCollection filter.
10. **D** (`wasm-opt`) shrinks the linked wasm.
11. The build outputs (`my_build.wasm`, `.js`, `.d.ts`, `.symbols`) land in the consumer's chosen output directory.

The [Task Graph](#task-graph) below is the Nx-orchestrated version of steps 4–10 with the parallelism and caching annotations.

## Task Graph

```text
setup → apply-patches ─┬→ pch ───────────────┬→ compile-bindings ─┐
                       ├→ docs → generate ────┘                    ├→ link-core
                       └→ compile-sources ─────────────────────────┤
                            pch → bind-symbols ─────────────────────┘

link-core (cached) → materialize (uncached) → validate → provenance → link → build
```

`apply-patches` is deliberately uncached because it owns mutations in dependency
clones. The expensive generated, compiled, and linked results remain Nx-cached.
Only `materialize` observes `OCJS_OUTPUT_DIR`, so an Nx cache hit still populates
an empty consumer directory instead of returning stale or missing artifacts.

## configurations.json

All named compile-time configurations live in `build-configs/configurations.json`. Each entry is a map of `OCJS_*` environment variable names to values.

### Supported keys

The **bare default** column is what `build-wasm.sh` would fall back to if you set neither an env var nor `--config`. The **`single-threaded` config** column is what `configurations.json`'s `single-threaded` entry sets — the production compile preset selected when `OCJS_CONFIG` and `--config` are both unset. Link-only flags such as `-sWASM_BIGINT` and `-sEVAL_CTORS=2` remain in consumer YAML. A consumer YAML that leaves `-sSTACK_SIZE` unset links with an 8 MB stack rather than emcc's 64 KB default.

| Key                   | Description                                             | Bare default      | `single-threaded` config |
| --------------------- | ------------------------------------------------------- | ----------------- | ------------------------ |
| `OCJS_OPT`            | Compile optimization level (`-O0`, `-O2`, `-O3`, `-Os`) | `-O2`             | `-O3`                    |
| `OCJS_LTO`            | Enable LTO at compile time (`0` or `1`)                 | `0`               | `0`                      |
| `OCJS_EXCEPTIONS`     | Enable native WASM exceptions (`0` or `1`)              | `0`               | `1`                      |
| `OCJS_EH_MODE`        | Exception handling mode (`wasm` or `js`)                | `wasm`            | `wasm`                   |
| `OCJS_SIMD`           | Enable baseline SIMD (`-msimd128`, `0` or `1`)          | `0`               | `1`                      |
| `OCJS_RELAXED_SIMD`   | Enable Relaxed SIMD opcodes (requires `OCJS_SIMD=1`; Safari 26.x does not yet implement Relaxed SIMD) | `0` | `0`           |
| `THREADING`           | Threading mode (`single-threaded` or `multi-threaded`)  | `single-threaded` | `single-threaded`        |
| `OCJS_DEFINES`        | Comma-separated C preprocessor defines                  | _(empty)_         | `OCCT_NO_DUMP`           |
| `OCJS_UNDEFINES`      | Comma-separated C preprocessor undefines                | _(empty)_         | `OCC_CONVERT_SIGNALS`    |
| `OCJS_WASM_OPT_LEVEL` | wasm-opt optimization level                             | `-O3`             | `-O4`                    |
| `OCJS_CLOSURE`        | Run Closure Compiler (`true` or `false`)                | `false`           | `true`                   |
| `OCJS_CONVERGE`       | Use `--converge` in wasm-opt (`true` or `false`)        | `false`           | `true`                   |
| `OCJS_MALLOC`         | Heap allocator (`dlmalloc` or `mimalloc`)               | `dlmalloc`        | `mimalloc`               |
| `OCJS_EXTRA_CFLAGS`   | Extra compile flags appended to C/CXX                   | _(empty)_         | _(empty)_                |

### Adding a new configuration

Add an entry to `build-configs/configurations.json`:

```json
{
  "my-experiment": {
    "OCJS_OPT": "-O3",
    "OCJS_LTO": "1",
    "OCJS_EXCEPTIONS": "0",
    "OCJS_SIMD": "1",
    "THREADING": "single-threaded",
    "OCJS_WASM_OPT_LEVEL": "-O4",
    "OCJS_CLOSURE": "true",
    "OCJS_CONVERGE": "true"
  }
}
```

Unspecified keys fall back to the bare defaults in `build-wasm.sh` (see the table above).

## Consumer YAML Format

The consumer YAML format is unchanged from v7.6.2:

```yaml
mainBuild:
  name: my_build.js
  bindings:
    - symbol: TopoDS_Shape
    - symbol: BRepBuilderAPI_MakeEdge
  emccFlags:
    - -O3
    - -flto
    - -fwasm-exceptions
    - -sEXPORT_ES6=1
    - -sMODULARIZE
    - -sALLOW_MEMORY_GROWTH=1
    - -sWASM_BIGINT
    - --no-entry
```

All `emccFlags` are passed **verbatim** to `emcc` at link time. The consumer has full control over link-time behavior.

## Fill-Not-Strip Rules

When linking, the build system applies "fill-not-strip" logic for optimization and LTO flags:

1. If consumer `emccFlags` already contains an `-O*` flag → used as-is
2. If consumer `emccFlags` lacks `-O*` → the config's `OCJS_OPT` value is added (default: `-O2`)
3. If consumer `emccFlags` already contains `-flto` → used as-is
4. If consumer `emccFlags` lacks `-flto` and `OCJS_LTO=1` → `-flto` is added

Consumer flags are never stripped or modified.

## Flag Precedence

For compile-time flags, precedence is (highest to lowest):

1. Explicit env var in the shell (e.g., `OCJS_OPT=-Os`)
2. Value from `configurations.json` entry (via `--config`)
3. `build-wasm.sh` built-in defaults

## Consistency Validation

The build system warns (non-fatal) when compile-time and link-time flags are mismatched:

- Compiled with `OCJS_EXCEPTIONS=1` but emccFlags has `-sDISABLE_EXCEPTION_CATCHING=1`
- Compiled with `OCJS_SIMD=1` but emccFlags lacks `-msimd128`
- Compiled without exceptions but emccFlags has `-fwasm-exceptions`

## Caching Behavior

Nx computes cache keys from `namedInputs` defined in `nx.json`:

- **compileConfig**: `configurations.json` content, `OCJS_CONFIG`, and all compile-time `OCJS_*` env vars
- **linkConfig**: Post-processing env vars (`OCJS_WASM_OPT_LEVEL`, `OCJS_CLOSURE`, `OCJS_CONVERGE`, etc.)
- **toolchain**: `emcc --version` output
- **depsVersion**: `DEPS.json` content
- **generatorCode**: All `src/**/*.py` files and `bindgen-filters.yaml`

### Cache sharing

Same config + different consumer YAMLs → compile targets cache-hit, link target cache-miss.
Different configs → fully separate compile caches.

### Debugging cache misses

```bash
npx nx show project ocjs         # Show resolved project config
NX_VERBOSE_LOGGING=true npx nx run ocjs:pch  # Verbose logging
```

## Maintainer Workflows

### Full build with a named configuration

```bash
./build-wasm.sh --config single-threaded full path/to/consumer.yml
```

### Link only (reuses compile cache)

```bash
./build-wasm.sh --config single-threaded link path/to/consumer.yml
```

### Override a single flag from the config

```bash
OCJS_WASM_OPT_LEVEL=-O4 ./build-wasm.sh --config single-threaded full consumer.yml
```

### Using Nx directly

```bash
OCJS_CONFIG=single-threaded OCJS_YAML=path/to/consumer.yml npx nx run ocjs:build
```

### Running individual targets

```bash
OCJS_CONFIG=single-threaded npx nx run ocjs:pch
OCJS_CONFIG=single-threaded npx nx run ocjs:generate
OCJS_CONFIG=single-threaded npx nx run ocjs:compile-bindings
OCJS_CONFIG=single-threaded npx nx run ocjs:compile-sources
OCJS_CONFIG=single-threaded OCJS_YAML=consumer.yml npx nx run ocjs:link
```

## Consumer Workflows

### Docker

```bash
docker run --rm \
  -v "$(pwd):/src" \
  -u "$(id -u):$(id -g)" \
  ghcr.io/taucad/opencascade.js:single-threaded \
  link my-config.yml
```

### Checkout-based

```bash
cd repos/opencascade.js
./scripts/clone-deps.sh
./build-wasm.sh --config single-threaded full path/to/consumer.yml
```

## Self-Contained Dependencies

Run `scripts/clone-deps.sh` to clone all dependencies into `deps/` (pass
`--dest <dir>` to target a different location, e.g. `--dest ..` for the
legacy sibling layout):

- `deps/emsdk/` — Emscripten SDK (version from `DEPS.json`)
- `deps/OCCT/` — OpenCASCADE Technology (pinned commit)
- `deps/rapidjson/` — RapidJSON (pinned commit)
- `deps/freetype/` — FreeType (pinned commit)

The script is idempotent and validates pinned commits when `OCJS_STRICT_DEPS=1`.

## Migration from v2

v2 drove the source build through the Python entry point `src/buildFromYaml.py` (wrapped by the Docker image's `ENTRYPOINT`). v3 replaces that with a single shell wrapper, `build-wasm.sh`, sitting on top of Nx-managed bindgen / compile / link steps. Behaviours that consumers of a v2 custom build may need to adjust:

| v2                                   | v3                                                        |
| ------------------------------------ | --------------------------------------------------------- |
| `src/buildFromYaml.py <yaml>`        | `./build-wasm.sh [--config <name>] <subcommand> <yaml>`   |
| `../assimpjs/emsdk` (relative path)  | `deps/emsdk/` (cloned via `clone-deps.sh`)                |
| Flag stripping in `buildFromYaml.py` | Fill-not-strip (consumer flags pass through verbatim)     |
| `OCJS_BIGINT` env var appendage      | Consumer specifies `-sWASM_BIGINT` directly in emccFlags  |
| `OCJS_EVAL_CTORS` env var appendage  | Consumer specifies `-sEVAL_CTORS=N` directly in emccFlags |

Cache and task-graph mechanics (Nx content-hashing, `npx nx reset` for cleanup, the `dependsOn` task graph) are v3-only and have no v2 equivalent — they replace the implicit single-shot Python pipeline.

## Troubleshooting

### Stale dependencies

```bash
rm -rf deps/ && ./scripts/clone-deps.sh
```

### Unexpected cache miss

Set `NX_VERBOSE_LOGGING=true` to see which inputs changed.

### Flag consistency warnings

These are non-fatal. They indicate a mismatch between compile-time configuration and consumer link-time flags. Review both your `--config` choice and consumer YAML's `emccFlags`.

### Full cache reset

```bash
npx nx reset
```
