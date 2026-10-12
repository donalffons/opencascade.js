## 3.0.3 (2026-10-12)

### 🩹 Fixes

- Fingerprint the CMake scratch identity from the `EMSDK`, `FREETYPE_ROOT` and `RAPIDJSON_ROOT` directories the build actually uses, so builds with those set outside `deps/` no longer fail or hash the wrong checkout. ([#43](https://github.com/taucad/opencascade.js/pull/43), [#36](https://github.com/taucad/opencascade.js/issues/36))
- Serve the README's static ghcr badges from the repository and cache the npm version badge longer, so the npm package page stops showing broken badge images, and point the CI badge at `main` push runs. ([#41](https://github.com/taucad/opencascade.js/pull/41))
- Write STEP material densities in gram per cubic centimetre. OCCT's STEPCAF writer labelled the density unit as g³·cm², so other CAD tools read the wrong unit; libcascade now patches the two unit exponents to g·cm⁻³. ([#44](https://github.com/taucad/opencascade.js/pull/44))
- Let image builds reuse binding objects from a previous image. The compiled stages copy `build/compiled-bindings/` from optional `binding-objects-seed-{threading}` build contexts, which are empty by default; CI points them at the latest release images. `compileBindings.py` keeps a seeded object only when its identity (source, command, PCH, patched OCCT state, compiler) matches, so a bindgen change recompiles only the bindings it touched. Release reproducibility builds still compile everything cold. ([#46](https://github.com/taucad/opencascade.js/pull/46), [#42](https://github.com/taucad/opencascade.js/issues/42), [#45](https://github.com/taucad/opencascade.js/issues/45))
- Fix the multi-threaded image recompiling all of OCCT on every consumer link. `compile-sources` and `compile-bindings` hashed `build/build-flags.json` and `build/pch.h.pch` from the file snapshot Nx takes when a run starts, so the image baked a cache entry keyed on the single-threaded flags left by the shared bindgen layer. They now hash the `pch` task's outputs after it runs, and a new `.nxignore` keeps `build/` and `deps/` out of Nx's file map inside the image. ([#46](https://github.com/taucad/opencascade.js/pull/46), [#42](https://github.com/taucad/opencascade.js/issues/42), [#45](https://github.com/taucad/opencascade.js/issues/45))
- Compile OCCT in its own Docker stage keyed only on the inputs that shape the static libraries, and install npm dependencies from version-free manifests. Bindgen, filter, YAML and release version changes no longer recompile OCCT in the published images. `build-wasm.sh` now reuses `build/occt-libraries/` when it was already published for the same CMake identity and still matches its ledger, and gains an `occt-libraries` command for a build tree that holds only OCCT. ([#46](https://github.com/taucad/opencascade.js/pull/46), [#42](https://github.com/taucad/opencascade.js/issues/42), [#45](https://github.com/taucad/opencascade.js/issues/45))
- Add approval-gated Claude review automation running on the latest Claude Opus through the `opus` model alias, and exclude that non-package workflow from future package version-plan checks. ([#37](https://github.com/taucad/opencascade.js/pull/37))

### ❤️ Thank You

- Claude Opus 5.5
- Claude Opus 5.5 (1M context)
- paulftw @paulftw
- Richard Fontein @rifont

## 3.0.2 (2026-08-16)

### 🩹 Fixes

- Prefer non-deprecated OCCT overloads when compatibility methods collapse to the same JavaScript signature, keeping runtime bindings and TypeScript declarations aligned. ([#33](https://github.com/taucad/opencascade.js/pull/33))

### ❤️ Thank You

- Richard Fontein @rifont

## 3.0.1 (2026-08-15)

### 🩹 Fixes

- Restore the complete immutable OCCT archive closure for custom builds, including strict single- and multi-threaded colored GLB export through `RWGltf_CafWriter`. Keep strict undefined-symbol linking enabled for every allocator by making OCCT's optional `mallinfo` integration weak, restore the remaining declared OCCT definitions, and refresh libcascade's public branding and documentation. ([#31](https://github.com/taucad/opencascade.js/pull/31))

### ❤️ Thank You

- Richard Fontein @rifont

# 3.0.0 (2026-08-13)

### ⚠️  Breaking Changes

- v3 is a ground-up modernisation: OCCT V8 (GA), native WebAssembly exceptions, ES modules, full TypeScript bindings with idiomatic JSDoc, content-addressed build caching, and reproducible builds via pinned dependency commits. ([#4](https://github.com/taucad/opencascade.js/pull/4), [#3](https://github.com/taucad/opencascade.js/issues/3), [#5](https://github.com/taucad/opencascade.js/issues/5), [#6](https://github.com/taucad/opencascade.js/issues/6))

  **Full v2 → v3 migration guide:** [BREAKING_CHANGES.md](BREAKING_CHANGES.md) — every consumer-visible change with Before / After code samples and migration steps.

  ### Highlights

  - **OCCT V8.0.1** (GA, up from V7.6.2) and **Emscripten 6.0.5** (up from 3.1.14).
  - **libclang 18.1.1** for the bindgen parser (up from `15.0.6.1`), paired with vendored **LLVM 17.0.6** libc++ + clang resource headers to satisfy the LLVM project's libc++/clang N-1 compat-window policy. This is what makes the v3 bindings _accurate_ for OCCT V8 — libclang 18 exposes `templateTypedefs`, sees through `DEFINE_STANDARD_HANDLE` expansions, and resolves `NCollection_*` template instantiations that v2's libclang 15 either skipped, mislabelled as `UNEXPOSED`, or surfaced as duplicate registrations. The parse environment is hermetic: `src/ocjs_bindgen/config/paths.py` routes libclang at the vendored libc++ headers and clang resource directory, not at the host system's clang.
  - **Native WebAssembly exceptions** (`-fwasm-exceptions`) replace JS `invoke_*` trampolines: ~12% gzipped size overhead vs. the prior ~80%, with zero happy-path performance cost. `WebAssembly.Exception` is decodable end-to-end through instance helpers such as `oc.getExceptionMessage` — see [§C](BREAKING_CHANGES.md#section-c--webassembly-exception-handling).
  - **Performance vs. V7.6.2**: 22-31% faster boolean operations, 16-19% faster fillets, 23-29% faster complex models. Full numbers in [Appendix G](BREAKING_CHANGES.md#appendix-g--performance--size).
  - **ES module distribution** — `"type": "module"`; the package root selects and initializes a supported variant, self-locates its WASM, and exports the live instance plus bound values. `libcascade/init` is the shared lazy selector, while `libcascade/single/init` and `libcascade/multi/init` are genuinely fixed runtime and type contracts that let bundlers exclude the other glue. Matching `single/wasm` and `multi/wasm` subpaths support explicit relocation — see [§A](BREAKING_CHANGES.md#section-a--module-loading).
  - **Suffix-free overload symbols** — a single `gp_Pnt`, `BRepPrimAPI_MakeBox`, `BRepBuilderAPI_MakeEdge`, etc., with a value-based dispatcher that picks the right C++ overload from your argument types. The `_N`-suffixed overload subclasses are gone except for genuinely ambiguous same-arity cases. Same-arity dispatch is now unified across `class_function` + instance overload sets, fixing v2's silently-clobbered registrations. See [§B1](BREAKING_CHANGES.md#b1--suffix-free-overloads) and [§D7](BREAKING_CHANGES.md#d7--same-arity-overload-dispatch-unified-legacy-intsize_t-pairs-deduplicated). Dispatcher cost measured at ~264 ns/call (~5 µs per typical CAD render, 0.003–0.011% of wall time) — see [BENCHMARKS.md §3](BENCHMARKS.md#3--embind-overload-dispatch).
  - **Output-parameter return shape redesigned** — methods with class output parameters (`gp_Pnt&`, `Bnd_Box&`, `GProp_GProps&`, …) mutate the caller's instance in place and read directly from it (no envelope mirroring). Methods with primitive / enum / elided-Handle outputs return a structured envelope; v2's `{ current: 0 }` placeholders are gone. See [§B2](BREAKING_CHANGES.md#b2--output-parameter-return-shape-class-outputs-mutate-in-place-envelopes-only-when-js-truly-needs-them).
  - **Non-const `Handle<T>&` output positions elided** from the JS signature — callers no longer allocate `new oc.Handle_<T>()` placeholders for output-only Handle slots. Drop the position from the call entirely and read the freshly-assigned Handle from the envelope. ~2.29× wall-clock speedup on affected call sites. See [§B3](BREAKING_CHANGES.md#b3--non-const-handlet-output-positions-elided-from-the-js-signature).
  - **`TopoDS` namespace bridge** — `oc.TopoDS.Edge(shape)`, `oc.TopoDS.Face(shape)`, etc., replacing v2's mix of `prototype.Edge`, `_TopoDS_Edge`, manual `getPointer` patterns. See [§D1](BREAKING_CHANGES.md#d1--topods-namespace-bridge).
  - **Baseline WebAssembly SIMD** (`-msimd128`) on by default. Relaxed-SIMD ops (`-mrelaxed-simd`) are gated behind `OCJS_RELAXED_SIMD=1` because Safari 26.x cannot parse them.
  - **`-sWASM_BIGINT`** on by default — eliminates the Emscripten i64 legalisation pass.
  - **Full TypeScript bindings** with Doxygen-derived JSDoc rendered correctly in Monaco IntelliSense, fixed-width primitive types (`int8_t`, `uint32_t`, `int64_t`) mapped to TS scalars, sized-tuple emission for C array parameters, and string enums.
  - **File-backed custom build inputs** — `additionalCppFiles` drives generated bindings and per-build `additionalBindFiles` drives raw Embind. Ordered paths and SHA-256 digests are recorded in build manifests and provenance.
  - **`Symbol.dispose` lifecycle** on every disposable binding — explicit resource management is wired in for both class wrappers and envelope returns that own Handle resources. The disposer is idempotent and alias-safe.
  - **Reproducible builds** via `DEPS.json` (every external dependency — OCCT, rapidjson, freetype, Emscripten, LLVM 17 — pinned to an exact commit hash) plus a `provenance.json` sidecar shipped alongside every release artefact.
  - **Cached, incremental builds** through Nx with content-addressed inputs — 10-30 minute clean builds become seconds on a hit.

  ### Breaking changes

  Each entry deep-links into [BREAKING_CHANGES.md](BREAKING_CHANGES.md) for Before / After code samples and migration steps.

  - **[A — Module loading](BREAKING_CHANGES.md#section-a--module-loading)** — ESM-only universal eager root, shared and fixed lazy initializers, single- and multi-threaded artifacts, zero-configuration initialization, and matching WASM relocation subpaths (no `dist/*` deep imports).
  - **[B — JS / TS API surface](BREAKING_CHANGES.md#section-b--js--ts-api-surface-changes)** — `_N`-suffixed overload subclasses collapsed to single symbols; output-parameter return shape redesigned (class outputs mutate in place, primitives / enums / elided Handles ride a structured envelope); non-const `Handle<T>&` output positions elided from the JS signature; envelope native-return field is `envelope.returnValue` (reserved to avoid collision with OCCT parameters named `result`).
  - **[C — WebAssembly exception handling](BREAKING_CHANGES.md#section-c--webassembly-exception-handling)** — caught exceptions are `WebAssembly.Exception` instances; decode via `oc.getExceptionMessage`.
  - **[D — OCCT V8 API](BREAKING_CHANGES.md#section-d--occt-v8-api-breaking-changes)** — `TopoDS` namespace bridge replaces direct namespace binding; `Bnd_Box::Get` removed (use `CornerMin` / `CornerMax`); `Poly_Triangulation` normals API now value-returning; `BRepMesh_IncrementalMesh` constructor signature; `TopoDS_Shape::HashCode` removed with no shipped replacement; same-arity overload dispatch unified across static + instance variants; JS-indistinguishable `int`/`size_t` NCollection pairs collapsed at codegen time (V8's `size_t` migration).
  - **[E — Removed symbol families](BREAKING_CHANGES.md#section-e--removed-symbol-families)** — `OpenGl_*` / `Aspect_Window` / rest of `TKOpenGl` (headless target); `TopOpe*` (use `BOPAlgo_*` / `BRepAlgoAPI_*`); legacy `Standard_Transient`-based collections (use auto-discovered `NCollection_*`); `GCE2d_*` aliases (use `GC_*2d`).
  - **[F — Build flag changes](BREAKING_CHANGES.md#section-f--build-flag-changes)** — source-build CLI replaced (`src/buildFromYaml.py` → `build-wasm.sh` with explicit subcommands and an optional `--config <name>` selecting an optimisation profile from `configurations.json`); reference `full.yml` bundled inside the Docker image as the starting point for custom builds; native WebAssembly exceptions on by default; Emscripten flag renames and additions from the 3.x → 6.x toolchain upgrade.

  ### Build system

  - **Native WASM exceptions as the baseline link mode** — replaces `-fexceptions` JS `invoke_*` trampolines with `-fwasm-exceptions`, cutting exception-build size overhead from ~80% to ~12% gzipped.
  - **`build-wasm.sh` unified entry point** (Docker `ENTRYPOINT` + host CLI parity) — explicit subcommands (`full`, `link`, `validate`, `generate`, `bindings`, `sources`, `pch`), `--help`, optional `--config <name>` from `configurations.json`, and build-summary output.
  - **Named compile configurations** in `configurations.json` — `single-threaded` (production default), `single-threaded-smallest` (size-tuned `-Os`), `multi-threaded` (SAB threading), `multi-threaded-browser` (resizable-buffer browsers), and `debug`. Link-only BigInt and eval-ctors settings live in each YAML's `emccFlags`.
  - **Reference `full.yml` bundled inside the Docker image** at `/opencascade.js/build-configs/full.yml` — the complete symbol list the published tarball builds from. Extract it as a starting point using the [trim-symbols guide](https://libcascade.xyz/docs/toolchain/guides/trim-symbols).
  - **`DEPS.json` dependency pinning** — every external dependency (OCCT, rapidjson, freetype, Emscripten, LLVM 17) is pinned to an exact commit hash with version metadata. `clone-deps.sh` automates setup.
  - **Hermetic libclang parse environment** — `src/ocjs_bindgen/config/paths.py` is now the single source of truth for include resolution during the bindgen discover pass. It points libclang at the vendored LLVM 17 libc++ headers + clang resource directory (matching libclang 18's expectations under the N-1 policy) and at the OCCT flat-include symlink farm, so source generation is reproducible across hosts and immune to whatever system clang the developer happens to have. The same parse contract is validated on `darwin-arm64`, `linux-x86_64`, and `linux-aarch64` with `uv`-managed Python 3.14.4; native final-link bytes may differ by host toolchain.
  - **Build provenance** — every build emits a `provenance.json` sidecar capturing toolchain versions, source commits, compile / link flags, cache key, and output sizes. Shipped alongside the WASM in the published tarball.
  - **Nx-based caching** — the full pipeline (`apply-patches` → `pch` → `generate-bindings` → `compile-bindings` → `compile-sources` → `link` → `validate` → `provenance`) is wired through Nx with content-addressed inputs (including git-ignored files), so partial rebuilds are surgical. Clean full build ≈ 30 minutes; cache hits skip compilation entirely. Stale `.o` files compiled with one set of flags are invalidated when the flags change.
  - **Validation harness** (`build-wasm.sh validate <yaml>`) — post-build checks that every requested symbol has a compiled `.o`, the `.wasm` exists at a reasonable size, and Emscripten EH helpers are present in the linked JS glue when requested.
  - **Configurable optimisation** — `wasm-opt` runs at `-O4` for production configs and `-O3` for size-tuned; `--traps-never-happen` is enabled; `OCJS_EXTRA_CFLAGS` passes arbitrary flags through to `emcc`.
  - **Updated Dockerfile** to `emscripten/emsdk:6.0.5` with pinned digest, dependencies cloned at exact commits from `DEPS.json`, entrypoint via `build-wasm.sh` with env-var passthrough; a Docker E2E validation script is included.

  ### Tests

  - **Comprehensive smoke suite** under [`tests/smoke/`](tests/smoke/) — primitives, smart pointers, topology, transforms, wire/face building, fillets/chamfers, sweep/loft, OBJ I/O, XCAF, intersections, output params, enum dispatch, BRep tool overloads, embind machinery, missing-OCCT-modules detection, suffix-free overload resolution, Handle-output elision, exception decode, `Symbol.dispose` disposal, and modern `NCollection` bindings.
  - **Type-only tests** (`tests/types.test-d.ts`, `enum-dispatch.test-d.ts`, `enums.test-d.ts`, `namespaces.test-d.ts`, `output-params.test-d.ts`, `disposable-containers.test-d.ts`) — lock the published `.d.ts` shape against regression.
  - **Bindgen output-shape regression** (`tests/bindgen-output-shape.test.ts`) — asserts the codegen never emits envelope fields that mirror concrete class outputs and that class outputs always forward via `*val::as<T*>(allow_raw_pointers())`.
  - **Semantic-diagnostic and `dts-validation` harnesses** — type-check the codegen output end-to-end and track the `any` count in the generated `.d.ts` to prevent silent type-resolution regressions.

  ### Documentation

  - New [BREAKING_CHANGES.md](BREAKING_CHANGES.md) — single comprehensive v2 → v3 consumer migration guide with Before / After code samples for every breaking change.
  - Rewritten [README.md](README.md) with quick start, Docker workflow, environment-variable reference, and customisation pointers.
  - [BUILD_SYSTEM.md](BUILD_SYSTEM.md) — full `OCJS_*` env-var matrix, configuration authoring guide, and the v2 → v3 build-system migration table.
  - [Custom emcc flags](https://libcascade.xyz/docs/toolchain/guides/custom-emcc-flags) — size vs. speed, LTO, defines, and `wasm-opt`.
  - [YAML schema](https://libcascade.xyz/docs/toolchain/reference/yaml-schema) — build configuration and customisation reference.

  ### Source pinning (this release)

  Full commit hashes live in [DEPS.json](DEPS.json).

  - OCCT `V8_0_1` (GA, commit `b8f597c6`)
  - rapidjson post-1.1.0 (commit `24b5e7a8`)
  - freetype `VER-2-13-0` (commit `de8b92dd`)
  - Emscripten `6.0.5` (LLVM 24; digest `sha256:76a44fff…`)
  - libclang `18.1.1` (Python binding, pinned in `pyproject.toml` and `uv.lock`; up from v2's `15.0.6.1`)
  - LLVM `17.0.6` (vendored prebuilt — parse-side libc++ + clang resource headers; N-1 compat with libclang 18.1.1)

### ❤️ Thank You

- Richard Fontein @rifont

## 3.0.0-beta.3 (2026-08-10)

### ⚠️  Breaking Changes

- v3 is a ground-up modernisation: OCCT V8 (GA), native WebAssembly exceptions, ES modules, full TypeScript bindings with idiomatic JSDoc, content-addressed build caching, and reproducible builds via pinned dependency commits. ([#4](https://github.com/taucad/opencascade.js/pull/4), [#3](https://github.com/taucad/opencascade.js/issues/3), [#5](https://github.com/taucad/opencascade.js/issues/5), [#6](https://github.com/taucad/opencascade.js/issues/6))

  **Full v2 → v3 migration guide:** [BREAKING_CHANGES.md](BREAKING_CHANGES.md) — every consumer-visible change with Before / After code samples and migration steps.

  ### Highlights

  - **OCCT V8.0.1** (GA, up from V7.6.2) and **Emscripten 6.0.5** (up from 3.1.14).
  - **libclang 18.1.1** for the bindgen parser (up from `15.0.6.1`), paired with vendored **LLVM 17.0.6** libc++ + clang resource headers to satisfy the LLVM project's libc++/clang N-1 compat-window policy. This is what makes the v3 bindings _accurate_ for OCCT V8 — libclang 18 exposes `templateTypedefs`, sees through `DEFINE_STANDARD_HANDLE` expansions, and resolves `NCollection_*` template instantiations that v2's libclang 15 either skipped, mislabelled as `UNEXPOSED`, or surfaced as duplicate registrations. The parse environment is hermetic: `src/ocjs_bindgen/config/paths.py` routes libclang at the vendored libc++ headers and clang resource directory, not at the host system's clang.
  - **Native WebAssembly exceptions** (`-fwasm-exceptions`) replace JS `invoke_*` trampolines: ~12% gzipped size overhead vs. the prior ~80%, with zero happy-path performance cost. `WebAssembly.Exception` is decodable end-to-end through instance helpers such as `oc.getExceptionMessage` — see [§C](BREAKING_CHANGES.md#section-c--webassembly-exception-handling).
  - **Performance vs. V7.6.2**: 22-31% faster boolean operations, 16-19% faster fillets, 23-29% faster complex models. Full numbers in [Appendix G](BREAKING_CHANGES.md#appendix-g--performance--size).
  - **ES module distribution** — `"type": "module"`; the package root selects and initializes a supported variant, self-locates its WASM, and exports the live instance plus bound values. `libcascade/init` is the shared lazy selector, while `libcascade/single/init` and `libcascade/multi/init` are genuinely fixed runtime and type contracts that let bundlers exclude the other glue. Matching `single/wasm` and `multi/wasm` subpaths support explicit relocation — see [§A](BREAKING_CHANGES.md#section-a--module-loading).
  - **Suffix-free overload symbols** — a single `gp_Pnt`, `BRepPrimAPI_MakeBox`, `BRepBuilderAPI_MakeEdge`, etc., with a value-based dispatcher that picks the right C++ overload from your argument types. The `_N`-suffixed overload subclasses are gone except for genuinely ambiguous same-arity cases. Same-arity dispatch is now unified across `class_function` + instance overload sets, fixing v2's silently-clobbered registrations. See [§B1](BREAKING_CHANGES.md#b1--suffix-free-overloads) and [§D7](BREAKING_CHANGES.md#d7--same-arity-overload-dispatch-unified-legacy-intsize_t-pairs-deduplicated). Dispatcher cost measured at ~264 ns/call (~5 µs per typical CAD render, 0.003–0.011% of wall time) — see [BENCHMARKS.md §3](BENCHMARKS.md#3--embind-overload-dispatch).
  - **Output-parameter return shape redesigned** — methods with class output parameters (`gp_Pnt&`, `Bnd_Box&`, `GProp_GProps&`, …) mutate the caller's instance in place and read directly from it (no envelope mirroring). Methods with primitive / enum / elided-Handle outputs return a structured envelope; v2's `{ current: 0 }` placeholders are gone. See [§B2](BREAKING_CHANGES.md#b2--output-parameter-return-shape-class-outputs-mutate-in-place-envelopes-only-when-js-truly-needs-them).
  - **Non-const `Handle<T>&` output positions elided** from the JS signature — callers no longer allocate `new oc.Handle_<T>()` placeholders for output-only Handle slots. Drop the position from the call entirely and read the freshly-assigned Handle from the envelope. ~2.29× wall-clock speedup on affected call sites. See [§B3](BREAKING_CHANGES.md#b3--non-const-handlet-output-positions-elided-from-the-js-signature).
  - **`TopoDS` namespace bridge** — `oc.TopoDS.Edge(shape)`, `oc.TopoDS.Face(shape)`, etc., replacing v2's mix of `prototype.Edge`, `_TopoDS_Edge`, manual `getPointer` patterns. See [§D1](BREAKING_CHANGES.md#d1--topods-namespace-bridge).
  - **Baseline WebAssembly SIMD** (`-msimd128`) on by default. Relaxed-SIMD ops (`-mrelaxed-simd`) are gated behind `OCJS_RELAXED_SIMD=1` because Safari 26.x cannot parse them.
  - **`-sWASM_BIGINT`** on by default — eliminates the Emscripten i64 legalisation pass.
  - **Full TypeScript bindings** with Doxygen-derived JSDoc rendered correctly in Monaco IntelliSense, fixed-width primitive types (`int8_t`, `uint32_t`, `int64_t`) mapped to TS scalars, sized-tuple emission for C array parameters, and string enums.
  - **File-backed custom build inputs** — `additionalCppFiles` drives generated bindings and per-build `additionalBindFiles` drives raw Embind. Ordered paths and SHA-256 digests are recorded in build manifests and provenance.
  - **`Symbol.dispose` lifecycle** on every disposable binding — explicit resource management is wired in for both class wrappers and envelope returns that own Handle resources. The disposer is idempotent and alias-safe.
  - **Reproducible builds** via `DEPS.json` (every external dependency — OCCT, rapidjson, freetype, Emscripten, LLVM 17 — pinned to an exact commit hash) plus a `provenance.json` sidecar shipped alongside every release artefact.
  - **Cached, incremental builds** through Nx with content-addressed inputs — 10-30 minute clean builds become seconds on a hit.

  ### Breaking changes

  Each entry deep-links into [BREAKING_CHANGES.md](BREAKING_CHANGES.md) for Before / After code samples and migration steps.

  - **[A — Module loading](BREAKING_CHANGES.md#section-a--module-loading)** — ESM-only universal eager root, shared and fixed lazy initializers, single- and multi-threaded artifacts, zero-configuration initialization, and matching WASM relocation subpaths (no `dist/*` deep imports).
  - **[B — JS / TS API surface](BREAKING_CHANGES.md#section-b--js--ts-api-surface-changes)** — `_N`-suffixed overload subclasses collapsed to single symbols; output-parameter return shape redesigned (class outputs mutate in place, primitives / enums / elided Handles ride a structured envelope); non-const `Handle<T>&` output positions elided from the JS signature; envelope native-return field is `envelope.returnValue` (reserved to avoid collision with OCCT parameters named `result`).
  - **[C — WebAssembly exception handling](BREAKING_CHANGES.md#section-c--webassembly-exception-handling)** — caught exceptions are `WebAssembly.Exception` instances; decode via `oc.getExceptionMessage`.
  - **[D — OCCT V8 API](BREAKING_CHANGES.md#section-d--occt-v8-api-breaking-changes)** — `TopoDS` namespace bridge replaces direct namespace binding; `Bnd_Box::Get` removed (use `CornerMin` / `CornerMax`); `Poly_Triangulation` normals API now value-returning; `BRepMesh_IncrementalMesh` constructor signature; `TopoDS_Shape::HashCode` removed with no shipped replacement; same-arity overload dispatch unified across static + instance variants; JS-indistinguishable `int`/`size_t` NCollection pairs collapsed at codegen time (V8's `size_t` migration).
  - **[E — Removed symbol families](BREAKING_CHANGES.md#section-e--removed-symbol-families)** — `OpenGl_*` / `Aspect_Window` / rest of `TKOpenGl` (headless target); `TopOpe*` (use `BOPAlgo_*` / `BRepAlgoAPI_*`); legacy `Standard_Transient`-based collections (use auto-discovered `NCollection_*`); `GCE2d_*` aliases (use `GC_*2d`).
  - **[F — Build flag changes](BREAKING_CHANGES.md#section-f--build-flag-changes)** — source-build CLI replaced (`src/buildFromYaml.py` → `build-wasm.sh` with explicit subcommands and an optional `--config <name>` selecting an optimisation profile from `configurations.json`); reference `full.yml` bundled inside the Docker image as the starting point for custom builds; native WebAssembly exceptions on by default; Emscripten flag renames and additions from the 3.x → 6.x toolchain upgrade.

  ### Build system

  - **Native WASM exceptions as the baseline link mode** — replaces `-fexceptions` JS `invoke_*` trampolines with `-fwasm-exceptions`, cutting exception-build size overhead from ~80% to ~12% gzipped.
  - **`build-wasm.sh` unified entry point** (Docker `ENTRYPOINT` + host CLI parity) — explicit subcommands (`full`, `link`, `validate`, `generate`, `bindings`, `sources`, `pch`), `--help`, optional `--config <name>` from `configurations.json`, and build-summary output.
  - **Named compile configurations** in `configurations.json` — `single-threaded` (production default), `single-threaded-smallest` (size-tuned `-Os`), `multi-threaded` (SAB threading), `multi-threaded-browser` (resizable-buffer browsers), and `debug`. Link-only BigInt and eval-ctors settings live in each YAML's `emccFlags`.
  - **Reference `full.yml` bundled inside the Docker image** at `/opencascade.js/build-configs/full.yml` — the complete symbol list the published tarball builds from. Extract it as a starting point using the [trim-symbols guide](https://libcascade.xyz/docs/toolchain/guides/trim-symbols).
  - **`DEPS.json` dependency pinning** — every external dependency (OCCT, rapidjson, freetype, Emscripten, LLVM 17) is pinned to an exact commit hash with version metadata. `clone-deps.sh` automates setup.
  - **Hermetic libclang parse environment** — `src/ocjs_bindgen/config/paths.py` is now the single source of truth for include resolution during the bindgen discover pass. It points libclang at the vendored LLVM 17 libc++ headers + clang resource directory (matching libclang 18's expectations under the N-1 policy) and at the OCCT flat-include symlink farm, so source generation is reproducible across hosts and immune to whatever system clang the developer happens to have. The same parse contract is validated on `darwin-arm64`, `linux-x86_64`, and `linux-aarch64` with `uv`-managed Python 3.14.4; native final-link bytes may differ by host toolchain.
  - **Build provenance** — every build emits a `provenance.json` sidecar capturing toolchain versions, source commits, compile / link flags, cache key, and output sizes. Shipped alongside the WASM in the published tarball.
  - **Nx-based caching** — the full pipeline (`apply-patches` → `pch` → `generate-bindings` → `compile-bindings` → `compile-sources` → `link` → `validate` → `provenance`) is wired through Nx with content-addressed inputs (including git-ignored files), so partial rebuilds are surgical. Clean full build ≈ 30 minutes; cache hits skip compilation entirely. Stale `.o` files compiled with one set of flags are invalidated when the flags change.
  - **Validation harness** (`build-wasm.sh validate <yaml>`) — post-build checks that every requested symbol has a compiled `.o`, the `.wasm` exists at a reasonable size, and Emscripten EH helpers are present in the linked JS glue when requested.
  - **Configurable optimisation** — `wasm-opt` runs at `-O4` for production configs and `-O3` for size-tuned; `--traps-never-happen` is enabled; `OCJS_EXTRA_CFLAGS` passes arbitrary flags through to `emcc`.
  - **Updated Dockerfile** to `emscripten/emsdk:6.0.5` with pinned digest, dependencies cloned at exact commits from `DEPS.json`, entrypoint via `build-wasm.sh` with env-var passthrough; a Docker E2E validation script is included.

  ### Tests

  - **Comprehensive smoke suite** under [`tests/smoke/`](tests/smoke/) — primitives, smart pointers, topology, transforms, wire/face building, fillets/chamfers, sweep/loft, OBJ I/O, XCAF, intersections, output params, enum dispatch, BRep tool overloads, embind machinery, missing-OCCT-modules detection, suffix-free overload resolution, Handle-output elision, exception decode, `Symbol.dispose` disposal, and modern `NCollection` bindings.
  - **Type-only tests** (`tests/types.test-d.ts`, `enum-dispatch.test-d.ts`, `enums.test-d.ts`, `namespaces.test-d.ts`, `output-params.test-d.ts`, `disposable-containers.test-d.ts`) — lock the published `.d.ts` shape against regression.
  - **Bindgen output-shape regression** (`tests/bindgen-output-shape.test.ts`) — asserts the codegen never emits envelope fields that mirror concrete class outputs and that class outputs always forward via `*val::as<T*>(allow_raw_pointers())`.
  - **Semantic-diagnostic and `dts-validation` harnesses** — type-check the codegen output end-to-end and track the `any` count in the generated `.d.ts` to prevent silent type-resolution regressions.

  ### Documentation

  - New [BREAKING_CHANGES.md](BREAKING_CHANGES.md) — single comprehensive v2 → v3 consumer migration guide with Before / After code samples for every breaking change.
  - Rewritten [README.md](README.md) with quick start, Docker workflow, environment-variable reference, and customisation pointers.
  - [BUILD_SYSTEM.md](BUILD_SYSTEM.md) — full `OCJS_*` env-var matrix, configuration authoring guide, and the v2 → v3 build-system migration table.
  - [Custom emcc flags](https://libcascade.xyz/docs/toolchain/guides/custom-emcc-flags) — size vs. speed, LTO, defines, and `wasm-opt`.
  - [YAML schema](https://libcascade.xyz/docs/toolchain/reference/yaml-schema) — build configuration and customisation reference.

  ### Source pinning (this release)

  Full commit hashes live in [DEPS.json](DEPS.json).

  - OCCT `V8_0_1` (GA, commit `b8f597c6`)
  - rapidjson post-1.1.0 (commit `24b5e7a8`)
  - freetype `VER-2-13-0` (commit `de8b92dd`)
  - Emscripten `6.0.5` (LLVM 24; digest `sha256:76a44fff…`)
  - libclang `18.1.1` (Python binding, pinned in `pyproject.toml` and `uv.lock`; up from v2's `15.0.6.1`)
  - LLVM `17.0.6` (vendored prebuilt — parse-side libc++ + clang resource headers; N-1 compat with libclang 18.1.1)

### ❤️ Thank You

- Richard Fontein @rifont

## 3.0.0-beta.2 (2026-08-10)

### ⚠️  Breaking Changes

- v3 is a ground-up modernisation: OCCT V8 (GA), native WebAssembly exceptions, ES modules, full TypeScript bindings with idiomatic JSDoc, content-addressed build caching, and reproducible builds via pinned dependency commits. ([#4](https://github.com/taucad/opencascade.js/pull/4), [#3](https://github.com/taucad/opencascade.js/issues/3), [#5](https://github.com/taucad/opencascade.js/issues/5), [#6](https://github.com/taucad/opencascade.js/issues/6))

  **Full v2 → v3 migration guide:** [BREAKING_CHANGES.md](BREAKING_CHANGES.md) — every consumer-visible change with Before / After code samples and migration steps.

  ### Highlights

  - **OCCT V8.0.1** (GA, up from V7.6.2) and **Emscripten 6.0.5** (up from 3.1.14).
  - **libclang 18.1.1** for the bindgen parser (up from `15.0.6.1`), paired with vendored **LLVM 17.0.6** libc++ + clang resource headers to satisfy the LLVM project's libc++/clang N-1 compat-window policy. This is what makes the v3 bindings _accurate_ for OCCT V8 — libclang 18 exposes `templateTypedefs`, sees through `DEFINE_STANDARD_HANDLE` expansions, and resolves `NCollection_*` template instantiations that v2's libclang 15 either skipped, mislabelled as `UNEXPOSED`, or surfaced as duplicate registrations. The parse environment is hermetic: `src/ocjs_bindgen/config/paths.py` routes libclang at the vendored libc++ headers and clang resource directory, not at the host system's clang.
  - **Native WebAssembly exceptions** (`-fwasm-exceptions`) replace JS `invoke_*` trampolines: ~12% gzipped size overhead vs. the prior ~80%, with zero happy-path performance cost. `WebAssembly.Exception` is decodable end-to-end through instance helpers such as `oc.getExceptionMessage` — see [§C](BREAKING_CHANGES.md#section-c--webassembly-exception-handling).
  - **Performance vs. V7.6.2**: 22-31% faster boolean operations, 16-19% faster fillets, 23-29% faster complex models. Full numbers in [Appendix G](BREAKING_CHANGES.md#appendix-g--performance--size).
  - **ES module distribution** — `"type": "module"`; the package root selects and initializes a supported variant, self-locates its WASM, and exports the live instance plus bound values. `libcascade/init` is the shared lazy selector, while `libcascade/single/init` and `libcascade/multi/init` are genuinely fixed runtime and type contracts that let bundlers exclude the other glue. Matching `single/wasm` and `multi/wasm` subpaths support explicit relocation — see [§A](BREAKING_CHANGES.md#section-a--module-loading).
  - **Suffix-free overload symbols** — a single `gp_Pnt`, `BRepPrimAPI_MakeBox`, `BRepBuilderAPI_MakeEdge`, etc., with a value-based dispatcher that picks the right C++ overload from your argument types. The `_N`-suffixed overload subclasses are gone except for genuinely ambiguous same-arity cases. Same-arity dispatch is now unified across `class_function` + instance overload sets, fixing v2's silently-clobbered registrations. See [§B1](BREAKING_CHANGES.md#b1--suffix-free-overloads) and [§D7](BREAKING_CHANGES.md#d7--same-arity-overload-dispatch-unified-legacy-intsize_t-pairs-deduplicated). Dispatcher cost measured at ~264 ns/call (~5 µs per typical CAD render, 0.003–0.011% of wall time) — see [BENCHMARKS.md §3](BENCHMARKS.md#3--embind-overload-dispatch).
  - **Output-parameter return shape redesigned** — methods with class output parameters (`gp_Pnt&`, `Bnd_Box&`, `GProp_GProps&`, …) mutate the caller's instance in place and read directly from it (no envelope mirroring). Methods with primitive / enum / elided-Handle outputs return a structured envelope; v2's `{ current: 0 }` placeholders are gone. See [§B2](BREAKING_CHANGES.md#b2--output-parameter-return-shape-class-outputs-mutate-in-place-envelopes-only-when-js-truly-needs-them).
  - **Non-const `Handle<T>&` output positions elided** from the JS signature — callers no longer allocate `new oc.Handle_<T>()` placeholders for output-only Handle slots. Drop the position from the call entirely and read the freshly-assigned Handle from the envelope. ~2.29× wall-clock speedup on affected call sites. See [§B3](BREAKING_CHANGES.md#b3--non-const-handlet-output-positions-elided-from-the-js-signature).
  - **`TopoDS` namespace bridge** — `oc.TopoDS.Edge(shape)`, `oc.TopoDS.Face(shape)`, etc., replacing v2's mix of `prototype.Edge`, `_TopoDS_Edge`, manual `getPointer` patterns. See [§D1](BREAKING_CHANGES.md#d1--topods-namespace-bridge).
  - **Baseline WebAssembly SIMD** (`-msimd128`) on by default. Relaxed-SIMD ops (`-mrelaxed-simd`) are gated behind `OCJS_RELAXED_SIMD=1` because Safari 26.x cannot parse them.
  - **`-sWASM_BIGINT`** on by default — eliminates the Emscripten i64 legalisation pass.
  - **Full TypeScript bindings** with Doxygen-derived JSDoc rendered correctly in Monaco IntelliSense, fixed-width primitive types (`int8_t`, `uint32_t`, `int64_t`) mapped to TS scalars, sized-tuple emission for C array parameters, and string enums.
  - **File-backed custom build inputs** — `additionalCppFiles` drives generated bindings and per-build `additionalBindFiles` drives raw Embind. Ordered paths and SHA-256 digests are recorded in build manifests and provenance.
  - **`Symbol.dispose` lifecycle** on every disposable binding — explicit resource management is wired in for both class wrappers and envelope returns that own Handle resources. The disposer is idempotent and alias-safe.
  - **Reproducible builds** via `DEPS.json` (every external dependency — OCCT, rapidjson, freetype, Emscripten, LLVM 17 — pinned to an exact commit hash) plus a `provenance.json` sidecar shipped alongside every release artefact.
  - **Cached, incremental builds** through Nx with content-addressed inputs — 10-30 minute clean builds become seconds on a hit.

  ### Breaking changes

  Each entry deep-links into [BREAKING_CHANGES.md](BREAKING_CHANGES.md) for Before / After code samples and migration steps.

  - **[A — Module loading](BREAKING_CHANGES.md#section-a--module-loading)** — ESM-only universal eager root, shared and fixed lazy initializers, single- and multi-threaded artifacts, zero-configuration initialization, and matching WASM relocation subpaths (no `dist/*` deep imports).
  - **[B — JS / TS API surface](BREAKING_CHANGES.md#section-b--js--ts-api-surface-changes)** — `_N`-suffixed overload subclasses collapsed to single symbols; output-parameter return shape redesigned (class outputs mutate in place, primitives / enums / elided Handles ride a structured envelope); non-const `Handle<T>&` output positions elided from the JS signature; envelope native-return field is `envelope.returnValue` (reserved to avoid collision with OCCT parameters named `result`).
  - **[C — WebAssembly exception handling](BREAKING_CHANGES.md#section-c--webassembly-exception-handling)** — caught exceptions are `WebAssembly.Exception` instances; decode via `oc.getExceptionMessage`.
  - **[D — OCCT V8 API](BREAKING_CHANGES.md#section-d--occt-v8-api-breaking-changes)** — `TopoDS` namespace bridge replaces direct namespace binding; `Bnd_Box::Get` removed (use `CornerMin` / `CornerMax`); `Poly_Triangulation` normals API now value-returning; `BRepMesh_IncrementalMesh` constructor signature; `TopoDS_Shape::HashCode` removed with no shipped replacement; same-arity overload dispatch unified across static + instance variants; JS-indistinguishable `int`/`size_t` NCollection pairs collapsed at codegen time (V8's `size_t` migration).
  - **[E — Removed symbol families](BREAKING_CHANGES.md#section-e--removed-symbol-families)** — `OpenGl_*` / `Aspect_Window` / rest of `TKOpenGl` (headless target); `TopOpe*` (use `BOPAlgo_*` / `BRepAlgoAPI_*`); legacy `Standard_Transient`-based collections (use auto-discovered `NCollection_*`); `GCE2d_*` aliases (use `GC_*2d`).
  - **[F — Build flag changes](BREAKING_CHANGES.md#section-f--build-flag-changes)** — source-build CLI replaced (`src/buildFromYaml.py` → `build-wasm.sh` with explicit subcommands and an optional `--config <name>` selecting an optimisation profile from `configurations.json`); reference `full.yml` bundled inside the Docker image as the starting point for custom builds; native WebAssembly exceptions on by default; Emscripten flag renames and additions from the 3.x → 6.x toolchain upgrade.

  ### Build system

  - **Native WASM exceptions as the baseline link mode** — replaces `-fexceptions` JS `invoke_*` trampolines with `-fwasm-exceptions`, cutting exception-build size overhead from ~80% to ~12% gzipped.
  - **`build-wasm.sh` unified entry point** (Docker `ENTRYPOINT` + host CLI parity) — explicit subcommands (`full`, `link`, `validate`, `generate`, `bindings`, `sources`, `pch`), `--help`, optional `--config <name>` from `configurations.json`, and build-summary output.
  - **Named compile configurations** in `configurations.json` — `single-threaded` (production default), `single-threaded-smallest` (size-tuned `-Os`), `multi-threaded` (SAB threading), `multi-threaded-browser` (resizable-buffer browsers), and `debug`. Link-only BigInt and eval-ctors settings live in each YAML's `emccFlags`.
  - **Reference `full.yml` bundled inside the Docker image** at `/opencascade.js/build-configs/full.yml` — the complete symbol list the published tarball builds from. Extract it as a starting point using the [trim-symbols guide](https://libcascade.xyz/docs/toolchain/guides/trim-symbols).
  - **`DEPS.json` dependency pinning** — every external dependency (OCCT, rapidjson, freetype, Emscripten, LLVM 17) is pinned to an exact commit hash with version metadata. `clone-deps.sh` automates setup.
  - **Hermetic libclang parse environment** — `src/ocjs_bindgen/config/paths.py` is now the single source of truth for include resolution during the bindgen discover pass. It points libclang at the vendored LLVM 17 libc++ headers + clang resource directory (matching libclang 18's expectations under the N-1 policy) and at the OCCT flat-include symlink farm, so source generation is reproducible across hosts and immune to whatever system clang the developer happens to have. The same parse contract is validated on `darwin-arm64`, `linux-x86_64`, and `linux-aarch64` with `uv`-managed Python 3.14.4; native final-link bytes may differ by host toolchain.
  - **Build provenance** — every build emits a `provenance.json` sidecar capturing toolchain versions, source commits, compile / link flags, cache key, and output sizes. Shipped alongside the WASM in the published tarball.
  - **Nx-based caching** — the full pipeline (`apply-patches` → `pch` → `generate-bindings` → `compile-bindings` → `compile-sources` → `link` → `validate` → `provenance`) is wired through Nx with content-addressed inputs (including git-ignored files), so partial rebuilds are surgical. Clean full build ≈ 30 minutes; cache hits skip compilation entirely. Stale `.o` files compiled with one set of flags are invalidated when the flags change.
  - **Validation harness** (`build-wasm.sh validate <yaml>`) — post-build checks that every requested symbol has a compiled `.o`, the `.wasm` exists at a reasonable size, and Emscripten EH helpers are present in the linked JS glue when requested.
  - **Configurable optimisation** — `wasm-opt` runs at `-O4` for production configs and `-O3` for size-tuned; `--traps-never-happen` is enabled; `OCJS_EXTRA_CFLAGS` passes arbitrary flags through to `emcc`.
  - **Updated Dockerfile** to `emscripten/emsdk:6.0.5` with pinned digest, dependencies cloned at exact commits from `DEPS.json`, entrypoint via `build-wasm.sh` with env-var passthrough; a Docker E2E validation script is included.

  ### Tests

  - **Comprehensive smoke suite** under [`tests/smoke/`](tests/smoke/) — primitives, smart pointers, topology, transforms, wire/face building, fillets/chamfers, sweep/loft, OBJ I/O, XCAF, intersections, output params, enum dispatch, BRep tool overloads, embind machinery, missing-OCCT-modules detection, suffix-free overload resolution, Handle-output elision, exception decode, `Symbol.dispose` disposal, and modern `NCollection` bindings.
  - **Type-only tests** (`tests/types.test-d.ts`, `enum-dispatch.test-d.ts`, `enums.test-d.ts`, `namespaces.test-d.ts`, `output-params.test-d.ts`, `disposable-containers.test-d.ts`) — lock the published `.d.ts` shape against regression.
  - **Bindgen output-shape regression** (`tests/bindgen-output-shape.test.ts`) — asserts the codegen never emits envelope fields that mirror concrete class outputs and that class outputs always forward via `*val::as<T*>(allow_raw_pointers())`.
  - **Semantic-diagnostic and `dts-validation` harnesses** — type-check the codegen output end-to-end and track the `any` count in the generated `.d.ts` to prevent silent type-resolution regressions.

  ### Documentation

  - New [BREAKING_CHANGES.md](BREAKING_CHANGES.md) — single comprehensive v2 → v3 consumer migration guide with Before / After code samples for every breaking change.
  - Rewritten [README.md](README.md) with quick start, Docker workflow, environment-variable reference, and customisation pointers.
  - [BUILD_SYSTEM.md](BUILD_SYSTEM.md) — full `OCJS_*` env-var matrix, configuration authoring guide, and the v2 → v3 build-system migration table.
  - [Custom emcc flags](https://libcascade.xyz/docs/toolchain/guides/custom-emcc-flags) — size vs. speed, LTO, defines, and `wasm-opt`.
  - [YAML schema](https://libcascade.xyz/docs/toolchain/reference/yaml-schema) — build configuration and customisation reference.

  ### Source pinning (this release)

  Full commit hashes live in [DEPS.json](DEPS.json).

  - OCCT `V8_0_1` (GA, commit `b8f597c6`)
  - rapidjson post-1.1.0 (commit `24b5e7a8`)
  - freetype `VER-2-13-0` (commit `de8b92dd`)
  - Emscripten `6.0.5` (LLVM 24; digest `sha256:76a44fff…`)
  - libclang `18.1.1` (Python binding, pinned in `pyproject.toml` and `uv.lock`; up from v2's `15.0.6.1`)
  - LLVM `17.0.6` (vendored prebuilt — parse-side libc++ + clang resource headers; N-1 compat with libclang 18.1.1)

### ❤️ Thank You

- Richard Fontein @rifont

## 3.0.0-beta.1 (2026-08-09)

### ⚠️  Breaking Changes

- v3 is a ground-up modernisation: OCCT V8 (GA), native WebAssembly exceptions, ES modules, full TypeScript bindings with idiomatic JSDoc, content-addressed build caching, and reproducible builds via pinned dependency commits. ([#4](https://github.com/taucad/opencascade.js/pull/4), [#3](https://github.com/taucad/opencascade.js/issues/3), [#5](https://github.com/taucad/opencascade.js/issues/5), [#6](https://github.com/taucad/opencascade.js/issues/6))

  **Full v2 → v3 migration guide:** [BREAKING_CHANGES.md](BREAKING_CHANGES.md) — every consumer-visible change with Before / After code samples and migration steps.

  ### Highlights

  - **OCCT V8.0.1** (GA, up from V7.6.2) and **Emscripten 6.0.5** (up from 3.1.14).
  - **libclang 18.1.1** for the bindgen parser (up from `15.0.6.1`), paired with vendored **LLVM 17.0.6** libc++ + clang resource headers to satisfy the LLVM project's libc++/clang N-1 compat-window policy. This is what makes the v3 bindings _accurate_ for OCCT V8 — libclang 18 exposes `templateTypedefs`, sees through `DEFINE_STANDARD_HANDLE` expansions, and resolves `NCollection_*` template instantiations that v2's libclang 15 either skipped, mislabelled as `UNEXPOSED`, or surfaced as duplicate registrations. The parse environment is hermetic: `src/ocjs_bindgen/config/paths.py` routes libclang at the vendored libc++ headers and clang resource directory, not at the host system's clang.
  - **Native WebAssembly exceptions** (`-fwasm-exceptions`) replace JS `invoke_*` trampolines: ~12% gzipped size overhead vs. the prior ~80%, with zero happy-path performance cost. `WebAssembly.Exception` is decodable end-to-end through instance helpers such as `oc.getExceptionMessage` — see [§C](BREAKING_CHANGES.md#section-c--webassembly-exception-handling).
  - **Performance vs. V7.6.2**: 22-31% faster boolean operations, 16-19% faster fillets, 23-29% faster complex models. Full numbers in [Appendix G](BREAKING_CHANGES.md#appendix-g--performance--size).
  - **ES module distribution** — `"type": "module"`; the package root selects and initializes a supported variant, self-locates its WASM, and exports the live instance plus bound values. `libcascade/init` is the shared lazy selector, while `libcascade/single/init` and `libcascade/multi/init` are genuinely fixed runtime and type contracts that let bundlers exclude the other glue. Matching `single/wasm` and `multi/wasm` subpaths support explicit relocation — see [§A](BREAKING_CHANGES.md#section-a--module-loading).
  - **Suffix-free overload symbols** — a single `gp_Pnt`, `BRepPrimAPI_MakeBox`, `BRepBuilderAPI_MakeEdge`, etc., with a value-based dispatcher that picks the right C++ overload from your argument types. The `_N`-suffixed overload subclasses are gone except for genuinely ambiguous same-arity cases. Same-arity dispatch is now unified across `class_function` + instance overload sets, fixing v2's silently-clobbered registrations. See [§B1](BREAKING_CHANGES.md#b1--suffix-free-overloads) and [§D7](BREAKING_CHANGES.md#d7--same-arity-overload-dispatch-unified-legacy-intsize_t-pairs-deduplicated). Dispatcher cost measured at ~264 ns/call (~5 µs per typical CAD render, 0.003–0.011% of wall time) — see [BENCHMARKS.md §3](BENCHMARKS.md#3--embind-overload-dispatch).
  - **Output-parameter return shape redesigned** — methods with class output parameters (`gp_Pnt&`, `Bnd_Box&`, `GProp_GProps&`, …) mutate the caller's instance in place and read directly from it (no envelope mirroring). Methods with primitive / enum / elided-Handle outputs return a structured envelope; v2's `{ current: 0 }` placeholders are gone. See [§B2](BREAKING_CHANGES.md#b2--output-parameter-return-shape-class-outputs-mutate-in-place-envelopes-only-when-js-truly-needs-them).
  - **Non-const `Handle<T>&` output positions elided** from the JS signature — callers no longer allocate `new oc.Handle_<T>()` placeholders for output-only Handle slots. Drop the position from the call entirely and read the freshly-assigned Handle from the envelope. ~2.29× wall-clock speedup on affected call sites. See [§B3](BREAKING_CHANGES.md#b3--non-const-handlet-output-positions-elided-from-the-js-signature).
  - **`TopoDS` namespace bridge** — `oc.TopoDS.Edge(shape)`, `oc.TopoDS.Face(shape)`, etc., replacing v2's mix of `prototype.Edge`, `_TopoDS_Edge`, manual `getPointer` patterns. See [§D1](BREAKING_CHANGES.md#d1--topods-namespace-bridge).
  - **Baseline WebAssembly SIMD** (`-msimd128`) on by default. Relaxed-SIMD ops (`-mrelaxed-simd`) are gated behind `OCJS_RELAXED_SIMD=1` because Safari 26.x cannot parse them.
  - **`-sWASM_BIGINT`** on by default — eliminates the Emscripten i64 legalisation pass.
  - **Full TypeScript bindings** with Doxygen-derived JSDoc rendered correctly in Monaco IntelliSense, fixed-width primitive types (`int8_t`, `uint32_t`, `int64_t`) mapped to TS scalars, sized-tuple emission for C array parameters, and string enums.
  - **File-backed custom build inputs** — `additionalCppFiles` drives generated bindings and per-build `additionalBindFiles` drives raw Embind. Ordered paths and SHA-256 digests are recorded in build manifests and provenance.
  - **`Symbol.dispose` lifecycle** on every disposable binding — explicit resource management is wired in for both class wrappers and envelope returns that own Handle resources. The disposer is idempotent and alias-safe.
  - **Reproducible builds** via `DEPS.json` (every external dependency — OCCT, rapidjson, freetype, Emscripten, LLVM 17 — pinned to an exact commit hash) plus a `provenance.json` sidecar shipped alongside every release artefact.
  - **Cached, incremental builds** through Nx with content-addressed inputs — 10-30 minute clean builds become seconds on a hit.

  ### Breaking changes

  Each entry deep-links into [BREAKING_CHANGES.md](BREAKING_CHANGES.md) for Before / After code samples and migration steps.

  - **[A — Module loading](BREAKING_CHANGES.md#section-a--module-loading)** — ESM-only universal eager root, shared and fixed lazy initializers, single- and multi-threaded artifacts, zero-configuration initialization, and matching WASM relocation subpaths (no `dist/*` deep imports).
  - **[B — JS / TS API surface](BREAKING_CHANGES.md#section-b--js--ts-api-surface-changes)** — `_N`-suffixed overload subclasses collapsed to single symbols; output-parameter return shape redesigned (class outputs mutate in place, primitives / enums / elided Handles ride a structured envelope); non-const `Handle<T>&` output positions elided from the JS signature; envelope native-return field is `envelope.returnValue` (reserved to avoid collision with OCCT parameters named `result`).
  - **[C — WebAssembly exception handling](BREAKING_CHANGES.md#section-c--webassembly-exception-handling)** — caught exceptions are `WebAssembly.Exception` instances; decode via `oc.getExceptionMessage`.
  - **[D — OCCT V8 API](BREAKING_CHANGES.md#section-d--occt-v8-api-breaking-changes)** — `TopoDS` namespace bridge replaces direct namespace binding; `Bnd_Box::Get` removed (use `CornerMin` / `CornerMax`); `Poly_Triangulation` normals API now value-returning; `BRepMesh_IncrementalMesh` constructor signature; `TopoDS_Shape::HashCode` removed with no shipped replacement; same-arity overload dispatch unified across static + instance variants; JS-indistinguishable `int`/`size_t` NCollection pairs collapsed at codegen time (V8's `size_t` migration).
  - **[E — Removed symbol families](BREAKING_CHANGES.md#section-e--removed-symbol-families)** — `OpenGl_*` / `Aspect_Window` / rest of `TKOpenGl` (headless target); `TopOpe*` (use `BOPAlgo_*` / `BRepAlgoAPI_*`); legacy `Standard_Transient`-based collections (use auto-discovered `NCollection_*`); `GCE2d_*` aliases (use `GC_*2d`).
  - **[F — Build flag changes](BREAKING_CHANGES.md#section-f--build-flag-changes)** — source-build CLI replaced (`src/buildFromYaml.py` → `build-wasm.sh` with explicit subcommands and an optional `--config <name>` selecting an optimisation profile from `configurations.json`); reference `full.yml` bundled inside the Docker image as the starting point for custom builds; native WebAssembly exceptions on by default; Emscripten flag renames and additions from the 3.x → 6.x toolchain upgrade.

  ### Build system

  - **Native WASM exceptions as the baseline link mode** — replaces `-fexceptions` JS `invoke_*` trampolines with `-fwasm-exceptions`, cutting exception-build size overhead from ~80% to ~12% gzipped.
  - **`build-wasm.sh` unified entry point** (Docker `ENTRYPOINT` + host CLI parity) — explicit subcommands (`full`, `link`, `validate`, `generate`, `bindings`, `sources`, `pch`), `--help`, optional `--config <name>` from `configurations.json`, and build-summary output.
  - **Named compile configurations** in `configurations.json` — `single-threaded` (production default), `single-threaded-smallest` (size-tuned `-Os`), `multi-threaded` (SAB threading), `multi-threaded-browser` (resizable-buffer browsers), and `debug`. Link-only BigInt and eval-ctors settings live in each YAML's `emccFlags`.
  - **Reference `full.yml` bundled inside the Docker image** at `/opencascade.js/build-configs/full.yml` — the complete symbol list the published tarball builds from. Extract it as a starting point using the [trim-symbols guide](https://libcascade.xyz/docs/toolchain/guides/trim-symbols).
  - **`DEPS.json` dependency pinning** — every external dependency (OCCT, rapidjson, freetype, Emscripten, LLVM 17) is pinned to an exact commit hash with version metadata. `clone-deps.sh` automates setup.
  - **Hermetic libclang parse environment** — `src/ocjs_bindgen/config/paths.py` is now the single source of truth for include resolution during the bindgen discover pass. It points libclang at the vendored LLVM 17 libc++ headers + clang resource directory (matching libclang 18's expectations under the N-1 policy) and at the OCCT flat-include symlink farm, so source generation is reproducible across hosts and immune to whatever system clang the developer happens to have. The same parse contract is validated on `darwin-arm64`, `linux-x86_64`, and `linux-aarch64` with `uv`-managed Python 3.14.4; native final-link bytes may differ by host toolchain.
  - **Build provenance** — every build emits a `provenance.json` sidecar capturing toolchain versions, source commits, compile / link flags, cache key, and output sizes. Shipped alongside the WASM in the published tarball.
  - **Nx-based caching** — the full pipeline (`apply-patches` → `pch` → `generate-bindings` → `compile-bindings` → `compile-sources` → `link` → `validate` → `provenance`) is wired through Nx with content-addressed inputs (including git-ignored files), so partial rebuilds are surgical. Clean full build ≈ 30 minutes; cache hits skip compilation entirely. Stale `.o` files compiled with one set of flags are invalidated when the flags change.
  - **Validation harness** (`build-wasm.sh validate <yaml>`) — post-build checks that every requested symbol has a compiled `.o`, the `.wasm` exists at a reasonable size, and Emscripten EH helpers are present in the linked JS glue when requested.
  - **Configurable optimisation** — `wasm-opt` runs at `-O4` for production configs and `-O3` for size-tuned; `--traps-never-happen` is enabled; `OCJS_EXTRA_CFLAGS` passes arbitrary flags through to `emcc`.
  - **Updated Dockerfile** to `emscripten/emsdk:6.0.5` with pinned digest, dependencies cloned at exact commits from `DEPS.json`, entrypoint via `build-wasm.sh` with env-var passthrough; a Docker E2E validation script is included.

  ### Tests

  - **Comprehensive smoke suite** under [`tests/smoke/`](tests/smoke/) — primitives, smart pointers, topology, transforms, wire/face building, fillets/chamfers, sweep/loft, OBJ I/O, XCAF, intersections, output params, enum dispatch, BRep tool overloads, embind machinery, missing-OCCT-modules detection, suffix-free overload resolution, Handle-output elision, exception decode, `Symbol.dispose` disposal, and modern `NCollection` bindings.
  - **Type-only tests** (`tests/types.test-d.ts`, `enum-dispatch.test-d.ts`, `enums.test-d.ts`, `namespaces.test-d.ts`, `output-params.test-d.ts`, `disposable-containers.test-d.ts`) — lock the published `.d.ts` shape against regression.
  - **Bindgen output-shape regression** (`tests/bindgen-output-shape.test.ts`) — asserts the codegen never emits envelope fields that mirror concrete class outputs and that class outputs always forward via `*val::as<T*>(allow_raw_pointers())`.
  - **Semantic-diagnostic and `dts-validation` harnesses** — type-check the codegen output end-to-end and track the `any` count in the generated `.d.ts` to prevent silent type-resolution regressions.

  ### Documentation

  - New [BREAKING_CHANGES.md](BREAKING_CHANGES.md) — single comprehensive v2 → v3 consumer migration guide with Before / After code samples for every breaking change.
  - Rewritten [README.md](README.md) with quick start, Docker workflow, environment-variable reference, and customisation pointers.
  - [BUILD_SYSTEM.md](BUILD_SYSTEM.md) — full `OCJS_*` env-var matrix, configuration authoring guide, and the v2 → v3 build-system migration table.
  - [Custom emcc flags](https://libcascade.xyz/docs/toolchain/guides/custom-emcc-flags) — size vs. speed, LTO, defines, and `wasm-opt`.
  - [YAML schema](https://libcascade.xyz/docs/toolchain/reference/yaml-schema) — build configuration and customisation reference.

  ### Source pinning (this release)

  Full commit hashes live in [DEPS.json](DEPS.json).

  - OCCT `V8_0_1` (GA, commit `b8f597c6`)
  - rapidjson post-1.1.0 (commit `24b5e7a8`)
  - freetype `VER-2-13-0` (commit `de8b92dd`)
  - Emscripten `6.0.5` (LLVM 24; digest `sha256:76a44fff…`)
  - libclang `18.1.1` (Python binding, pinned in `pyproject.toml` and `uv.lock`; up from v2's `15.0.6.1`)
  - LLVM `17.0.6` (vendored prebuilt — parse-side libc++ + clang resource headers; N-1 compat with libclang 18.1.1)

### ❤️ Thank You

- Richard Fontein @rifont

## Earlier releases (v0.1.x – v1.1.x)

Pre-v3 release notes, preserved verbatim. The two giant class lists from `v1.1.0` are wrapped in `<details>` for readability — expand to view.

### v1.1.4 (unreleased)

version only used for testing on npm

### v1.1.3 (unreleased)

version only used for testing on npm

### v1.1.2 (unreleased)

- CI-Testing system implemented, which uses some of the code in the `opencascade-examples` repository (but can also define stand-alone tests).

### v1.1.1

- Removed support for `TColQuantity_Array1OfLength` and `TopoDS_ListOfShape`, as they cause errors during initialization of the library.

### v1.1.0

- More accurate way of counting supported and unsupported classes.
- Removed support for classes `Aspect_Background`, `Aspect_CircularGrid`, `Aspect_GenId`, `Aspect_GradientBackground`, `Aspect_Grid`, `Aspect_RectangularGrid`, `Aspect_Touch`, `Aspect_VKeySet`, `Aspect_Window`, `math_Householder`, `math_IntegerVector`, `math_Matrix`, `math_Vector` due to an error (breaking change).
- Added support for many `IntPatch_*`, `Interface_*`, `OSD_*`, `OpenGl_*`, and `WNT_ClassDefinitionError` classes.

  <details>
  <summary>Full added-classes list</summary>

  `IntPatch_ALine`, `IntPatch_ALineToWLine`, `IntPatch_ArcFunction`, `IntPatch_CSFunction`, `IntPatch_CurvIntSurf`, `IntPatch_GLine`, `IntPatch_HCurve2dTool`, `IntPatch_HInterTool`, `IntPatch_ImpImpIntersection`, `IntPatch_ImpPrmIntersection`, `IntPatch_InterferencePolyhedron`, `IntPatch_LineConstructor`, `IntPatch_PolyArc`, `IntPatch_PolyLine`, `IntPatch_Polygo`, `IntPatch_PolyhedronTool`, `IntPatch_PrmPrmIntersection`, `IntPatch_PrmPrmIntersection_T3Bits`, `IntPatch_SpecialPoints`, `IntPatch_TheIWLineOfTheIWalking`, `IntPatch_TheIWalking`, `IntPatch_ThePathPointOfTheSOnBounds`, `IntPatch_TheSOnBounds`, `IntPatch_TheSearchInside`, `IntPatch_TheSegmentOfTheSOnBounds`, `IntPatch_TheSurfFunction`, `IntPatch_WLineTool`, `Interface_Category`, `Interface_CheckFailure`, `Interface_CheckTool`, `Interface_CopyMap`, `Interface_EntityCluster`, `Interface_FileParameter`, `Interface_GTool`, `Interface_GlobalNodeOfGeneralLib`, `Interface_GlobalNodeOfReaderLib`, `Interface_IntVal`, `Interface_InterfaceMismatch`, `Interface_NodeOfGeneralLib`, `Interface_NodeOfReaderLib`, `Interface_ParamList`, `Interface_ParamSet`, `Interface_ReportEntity`, `Interface_STAT`, `Interface_ShareFlags`, `Interface_ShareTool`, `Interface_SignLabel`, `Interface_Static`, `Interface_TypedValue`, `Interface_UndefinedContent`, `OSD`, `OSD_Directory`, `OSD_DirectoryIterator`, `OSD_Disk`, `OSD_Environment`, `OSD_Exception`, `OSD_Exception_ACCESS_VIOLATION`, `OSD_Exception_ARRAY_BOUNDS_EXCEEDED`, `OSD_Exception_CTRL_BREAK`, `OSD_Exception_FLT_DENORMAL_OPERAND`, `OSD_Exception_FLT_DIVIDE_BY_ZERO`, `OSD_Exception_FLT_INEXACT_RESULT`, `OSD_Exception_FLT_INVALID_OPERATION`, `OSD_Exception_FLT_OVERFLOW`, `OSD_Exception_FLT_STACK_CHECK`, `OSD_Exception_FLT_UNDERFLOW`, `OSD_Exception_ILLEGAL_INSTRUCTION`, `OSD_Exception_INT_DIVIDE_BY_ZERO`, `OSD_Exception_INT_OVERFLOW`, `OSD_Exception_INVALID_DISPOSITION`, `OSD_Exception_IN_PAGE_ERROR`, `OSD_Exception_NONCONTINUABLE_EXCEPTION`, `OSD_Exception_PRIV_INSTRUCTION`, `OSD_Exception_STACK_OVERFLOW`, `OSD_Exception_STATUS_NO_MEMORY`, `OSD_FileIterator`, `OSD_Host`, `OSD_MAllocHook`, `OSD_MemInfo`, `OSD_OSDError`, `OSD_PerfMeter`, `OSD_Process`, `OSD_Protection`, `OSD_SIGBUS`, `OSD_SIGHUP`, `OSD_SIGILL`, `OSD_SIGINT`, `OSD_SIGKILL`, `OSD_SIGQUIT`, `OSD_SIGSEGV`, `OSD_SIGSYS`, `OSD_SharedLibrary`, `OSD_Signal`, `OpenGl_Aspects`, `OpenGl_AspectsProgram`, `OpenGl_AspectsSprite`, `OpenGl_AspectsTextureSet`, `OpenGl_BackgroundArray`, `OpenGl_CappingAlgo`, `OpenGl_CappingPlaneResource`, `OpenGl_Caps`, `OpenGl_Clipping`, `OpenGl_ClippingIterator`, `OpenGl_ClippingState`, `OpenGl_Context`, `OpenGl_Element`, `OpenGl_Flipper`, `OpenGl_Font`, `OpenGl_FrameBuffer`, `OpenGl_FrameStats`, `OpenGl_FrameStatsPrs`, `OpenGl_GraduatedTrihedron`, `OpenGl_GraphicDriver`, `OpenGl_Group`, `OpenGl_IndexBuffer`, `OpenGl_LayerList`, `OpenGl_LightSourceState`, `OpenGl_LineAttributes`, `OpenGl_MaterialState`, `OpenGl_ModelWorldState`, `OpenGl_NamedResource`, `OpenGl_OitState`, `OpenGl_PointSprite`, `OpenGl_PrimitiveArray`, `OpenGl_ProjectionState`, `OpenGl_RaytraceGeometry`, `OpenGl_Resource`, `OpenGl_Sampler`, `OpenGl_SetOfPrograms`, `OpenGl_SetOfShaderPrograms`, `OpenGl_ShaderManager`, `OpenGl_ShaderObject`, `OpenGl_ShaderProgram`, `OpenGl_ShaderUniformLocation`, `OpenGl_StateCounter`, `OpenGl_StateInterface`, `OpenGl_StencilTest`, `OpenGl_Structure`, `OpenGl_StructureShadow`, `OpenGl_Text`, `OpenGl_TextBuilder`, `OpenGl_Texture`, `OpenGl_TextureBufferArb`, `OpenGl_TextureFormat`, `OpenGl_TextureSet`, `OpenGl_TriangleSet`, `OpenGl_VariableSetterSelector`, `OpenGl_VertexBuffer`, `OpenGl_VertexBufferCompat`, `OpenGl_Window`, `OpenGl_Workspace`, `OpenGl_WorldViewState`, `WNT_ClassDefinitionError`.

  </details>

- Added support for many `NCollection_Array1` template specializations.

  <details>
  <summary>Full `NCollection_Array1` specialization list</summary>

  `TColStd_Array1OfByte`, `Graphic3d_Array1OfAttribute`, `TColgp_Array1OfPnt`, `TColgp_Array1OfPnt2d`, `Poly_Array1OfTriangle`, `TColStd_Array1OfInteger`, `TShort_Array1OfShortReal`, `Quantity_Array1OfColor`, `TColgp_Array1OfDir`, `TColStd_Array1OfTransient`, `TColStd_Array1OfAsciiString`, `Interface_Array1OfHAsciiString`, `TColStd_Array1OfReal`, `TColGeom_Array1OfSurface`, `AppParCurves_Array1OfMultiPoint`, `TColgp_Array1OfVec`, `TColgp_Array1OfVec2d`, `AppDef_Array1OfMultiPointConstraint`, `AppParCurves_Array1OfConstraintCouple`, `AppParCurves_Array1OfMultiBSpCurve`, `AppParCurves_Array1OfMultiCurve`, `Approx_Array1OfAdHSurface`, `Approx_Array1OfGTrsf2d`, `BOPDS_VectorOfPave`, `BRepAdaptor_Array1OfCurve`, `TColStd_Array1OfBoolean`, `Extrema_Array1OfPOnCurv`, `Extrema_Array1OfPOnSurf`, `Bnd_Array1OfSphere`, `GeomFill_Array1OfLocationLaw`, `TopTools_Array1OfShape`, `GeomPlate_Array1OfSequenceOfReal`, `Plate_Array1OfPinpointConstraint`, `TColgp_Array1OfXYZ`, `GeomPlate_Array1OfHCurve`, `TColGeom2d_Array1OfCurve`, `GeomFill_Array1OfSectionLaw`, `ChFiDS_SecArray1`, `Bnd_Array1OfBox`, `Message_ArrayOfMsg`, `Bnd_Array1OfBox2d`, `TColStd_Array1OfListOfInteger`, `ChFiDS_StripeArray1`, `Expr_Array1OfNamedUnknown`, `Expr_Array1OfGeneralExpression`, `Expr_Array1OfSingleRelation`, `Extrema_Array1OfPOnCurv2d`, `TColgp_Array1OfXY`, `TColgp_Array1OfCirc2d`, `GccEnt_Array1OfPosition`, `TColgp_Array1OfLin2d`, `TColGeom2d_Array1OfBSplineCurve`, `TColGeom2d_Array1OfBezierCurve`, `TColGeom_Array1OfBSplineCurve`, `TColGeom_Array1OfBezierCurve`, `GeomLib_Array1OfMat`, `Graphic3d_ArrayOfIndexedMapOfStructure`, `HLRAlgo_Array1OfPHDat`, `HLRAlgo_Array1OfPINod`, `HLRAlgo_Array1OfPISeg`, `HLRAlgo_Array1OfTData`, `HLRBRep_Array1OfEData`, `HLRBRep_Array1OfFData`, `Intf_Array1OfLin`, `IGESAppli_Array1OfNode`, `IGESAppli_Array1OfFiniteElement`, `IGESData_Array1OfIGESEntity`, `IGESDraw_Array1OfConnectPoint`, `IGESGraph_Array1OfTextDisplayTemplate`, `IGESAppli_Array1OfFlow`, `IGESDefs_Array1OfTabularData`, `IGESGraph_Array1OfTextFontDef`, `IGESDimen_Array1OfGeneralNote`, `IGESBasic_Array1OfLineFontEntity`, `IGESData_Array1OfDirPart`, `IGESDimen_Array1OfLeaderArrow`, `IGESDraw_Array1OfViewKindEntity`, `IGESGraph_Array1OfColor`, `IGESGeom_Array1OfBoundary`, `IGESGeom_Array1OfCurveOnSurface`, `IGESGeom_Array1OfTransformationMatrix`, `IGESSolid_Array1OfLoop`, `IGESSolid_Array1OfFace`, `IGESSolid_Array1OfShell`, `IGESSolid_Array1OfVertexList`, `IntTools_Array1OfRange`, `IntTools_Array1OfRoots`, `Interface_Array1OfFileParameter`, `MeshVS_Array1OfSequenceOfInteger`, `StepDimTol_Array1OfDatumReferenceModifier`, `StepRepr_Array1OfRepresentationItem`, `StepVisual_Array1OfTessellatedItem`, `StepDimTol_Array1OfDatumSystemOrReference`, `StepVisual_Array1OfPresentationStyleSelect`, `StepVisual_Array1OfPresentationStyleAssignment`, `TColgp_Array1OfDir2d`, `TColGeom_Array1OfCurve`, `TColStd_Array1OfExtendedString`, `TDataStd_LabelArray1`, `TDataXtd_Array1OfTrsf`, `StepAP203_Array1OfApprovedItem`, `StepAP203_Array1OfCertifiedItem`, `StepAP203_Array1OfChangeRequestItem`, `StepAP203_Array1OfClassifiedItem`, `StepAP203_Array1OfContractedItem`, `StepAP203_Array1OfDateTimeItem`, `StepAP203_Array1OfPersonOrganizationItem`, `StepAP203_Array1OfSpecifiedItem`, `StepAP203_Array1OfStartRequestItem`, `StepAP203_Array1OfWorkItem`, `StepRepr_Array1OfMaterialPropertyRepresentation`, `StepFEA_Array1OfNodeRepresentation`, `StepAP214_Array1OfApprovalItem`, `StepAP214_Array1OfDateAndTimeItem`, `StepAP214_Array1OfDateItem`, `StepAP214_Array1OfDocumentReferenceItem`, `StepAP214_Array1OfExternalIdentificationItem`, `StepAP214_Array1OfGroupItem`, `StepAP214_Array1OfOrganizationItem`, `StepAP214_Array1OfPersonAndOrganizationItem`, `StepAP214_Array1OfPresentedItemSelect`, `StepAP214_Array1OfSecurityClassificationItem`, `StepAP214_Array1OfAutoDesignDateAndPersonItem`, `StepAP214_Array1OfAutoDesignDateAndTimeItem`, `StepAP214_Array1OfAutoDesignDatedItem`, `StepAP214_Array1OfAutoDesignGeneralOrgItem`, `StepAP214_Array1OfAutoDesignGroupedItem`, `StepAP214_Array1OfAutoDesignPresentedItemSelect`, `StepAP214_Array1OfAutoDesignReferencingItem`, `StepBasic_Array1OfApproval`, `StepBasic_Array1OfDerivedUnitElement`, `StepBasic_Array1OfDocument`, `StepBasic_Array1OfNamedUnit`, `StepBasic_Array1OfOrganization`, `StepBasic_Array1OfPerson`, `StepBasic_Array1OfProductContext`, `StepBasic_Array1OfProduct`, `StepBasic_Array1OfProductDefinition`, `StepBasic_Array1OfUncertaintyMeasureWithUnit`, `StepData_Array1OfField`, `StepDimTol_Array1OfDatumReference`, `StepDimTol_Array1OfDatumReferenceCompartment`, `StepDimTol_Array1OfDatumReferenceElement`, `StepDimTol_Array1OfGeometricToleranceModifier`, `StepDimTol_Array1OfToleranceZoneTarget`, `StepRepr_Array1OfShapeAspect`, `StepElement_Array1OfCurveElementEndReleasePacket`, `StepElement_Array1OfCurveElementSectionDefinition`, `StepElement_Array1OfHSequenceOfCurveElementPurposeMember`, `StepElement_Array1OfHSequenceOfSurfaceElementPurposeMember`, `StepElement_Array1OfMeasureOrUnspecifiedValue`, `StepElement_Array1OfSurfaceSection`, `StepElement_Array1OfVolumeElementPurpose`, `StepElement_Array1OfVolumeElementPurposeMember`, `StepFEA_Array1OfCurveElementEndOffset`, `StepFEA_Array1OfCurveElementEndRelease`, `StepFEA_Array1OfCurveElementInterval`, `StepFEA_Array1OfDegreeOfFreedom`, `StepFEA_Array1OfElementRepresentation`, `StepGeom_Array1OfCompositeCurveSegment`, `StepGeom_Array1OfBoundaryCurve`, `StepGeom_Array1OfCartesianPoint`, `StepGeom_Array1OfCurve`, `StepGeom_Array1OfPcurveOrSurface`, `StepGeom_Array1OfSurfaceBoundary`, `StepGeom_Array1OfTrimmingSelect`, `StepRepr_Array1OfPropertyDefinitionRepresentation`, `StepShape_Array1OfFaceBound`, `StepShape_Array1OfEdge`, `StepShape_Array1OfConnectedEdgeSet`, `StepShape_Array1OfFace`, `StepShape_Array1OfConnectedFaceSet`, `StepShape_Array1OfGeometricSetSelect`, `StepShape_Array1OfOrientedClosedShell`, `StepShape_Array1OfOrientedEdge`, `StepShape_Array1OfShapeDimensionRepresentationItem`, `StepShape_Array1OfShell`, `StepShape_Array1OfValueQualifier`, `StepVisual_Array1OfAnnotationPlaneElement`, `StepVisual_Array1OfBoxCharacteristicSelect`, `StepVisual_Array1OfCameraModelD3MultiClippingInterectionSelect`, `StepVisual_Array1OfCameraModelD3MultiClippingUnionSelect`, `StepVisual_Array1OfCurveStyleFontPattern`, `StepVisual_Array1OfDirectionCountSelect`, `StepVisual_Array1OfDraughtingCalloutElement`, `StepVisual_Array1OfFillStyleSelect`, `StepVisual_Array1OfInvisibleItem`, `StepVisual_Array1OfLayeredItem`, `StepVisual_Array1OfStyleContextSelect`, `StepVisual_Array1OfSurfaceStyleElementSelect`, `StepVisual_Array1OfTextOrCharacter`, `Storage_ArrayOfCallBack`, `Storage_ArrayOfSchema`, `Storage_PArray`, `TColQuantity_Array1OfLength`, `TColStd_Array1OfCharacter`, `TDF_AttributeArray1`, `TFunction_Array1OfDataMapOfGUIDDriver`, `TopOpeBRep_Array1OfVPointInter`, `TopOpeBRep_Array1OfLineInter`, `TopTools_Array1OfListOfShape`, `TopOpeBRepDS_Array1OfDataMapOfIntegerListOfInterference`, `math_Array1OfValueAndWeight`.

  </details>

- Added support for many `NCollection_List` template specializations.

  <details>
  <summary>Full `NCollection_List` specialization list</summary>

  `TColStd_ListOfInteger`, `PrsMgr_ListOfPresentations`, `PrsMgr_ListOfPresentableObjects`, `SelectMgr_TriangFrustums`, `TopoDS_ListOfShape`, `AIS_ListOfInteractive`, `AIS_NListOfEntityOwner`, `SelectMgr_ListOfFilter`, `TopTools_ListOfShape`, `TColStd_ListOfTransient`, `V3d_ListOfLight`, `V3d_ListOfView`, `Message_ListOfAlert`, `BOPAlgo_ListOfCheckResult`, `BOPDS_ListOfPave`, `BOPDS_ListOfPaveBlock`, `IntSurf_ListOfPntOn2S`, `BOPTools_ListOfConnexityBlock`, `TopTools_ListOfListOfShape`, `BRep_ListOfPointRepresentation`, `BOPAlgo_ListOfEdgeInfo`, `DBRep_ListOfEdge`, `DBRep_ListOfFace`, `HLRBRep_ListOfBPoint`, `DBRep_ListOfHideData`, `BOPTools_ListOfCoupleOfShape`, `BRep_ListOfCurveRepresentation`, `BRepCheck_ListOfStatus`, `BRepFill_ListOfOffsetWire`, `ChFiDS_ListOfStripe`, `ChFiDS_Regularities`, `BRepOffset_ListOfInterval`, `TDF_LabelList`, `CDM_ListOfReferences`, `CDM_ListOfDocument`, `TColStd_ListOfReal`, `TopOpeBRepDS_ListOfInterference`, `ChFiDS_ListOfHElSpine`, `Law_Laws`, `DDF_TransactionStack`, `ExprIntrp_StackOfGeneralExpression`, `ExprIntrp_StackOfGeneralRelation`, `ExprIntrp_StackOfGeneralFunction`, `TColStd_ListOfAsciiString`, `FEmTool_ListOfVectors`, `Font_NListOfSystemFont`, `HLRAlgo_InterferenceList`, `HLRAlgo_ListOfBPoint`, `HLRBRep_ListOfBPnt2D`, `HLRTopoBRep_ListOfVData`, `IntAna_ListOfCurve`, `IntPolyh_ListOfCouples`, `IntTools_ListOfCurveRangeSample`, `IntTools_ListOfSurfaceRangeSample`, `IntTools_ListOfBox`, `MeshVS_PolyhedronVerts`, `Message_ListOfMsg`, `NLPlate_StackOfPlate`, `Poly_ListOfTriangulation`, `Prs3d_NListOfSequenceOfPnt`, `QANCollection_ListOfPnt`, `TDataStd_ListOfExtendedString`, `TDataStd_ListOfByte`, `TDF_AttributeList`, `TNaming_ListOfNamedShape`, `TDF_AttributeDeltaList`, `TDF_IDList`, `TDF_DeltaList`, `TNaming_ListOfIndexedDataMapOfShapeListOfShape`, `TNaming_ListOfMapOfShape`, `TopBas_ListOfTestInterference`, `TopOpeBRep_ListOfBipoint`, `TopOpeBRepBuild_ListOfLoop`, `TopOpeBRepBuild_ListOfListOfLoop`, `TopOpeBRepBuild_ListOfShapeListOfShape`, `TopOpeBRepBuild_ListOfPave`, `TopOpeBRepTool_ListOfC2DF`, `VrmlData_ListOfNode`.

  </details>

### v1.0.2

- Added constructors for `TColgp_Array1OfPnt` as manual bindings.

### v1.0.1

- Updated builds.

### v1.0.0

- First version using Embind and automatically generated bindings.
- Lots of breaking changes in this version. Most notably:
  - Overloaded methods and constructors are now fully supported (on all supported classes). Please have a look at the [conventions](embind/conventions.md) for details.
  - Static methods have a slightly different interface. Before, you would call them via `openCascade.ClassName.prototype.staticMethod()`. Now, you call them via `openCascade.ClassName.staticMethod()`.
- Largely improved coverage of the OpenCascade API.
- TypeScript support has been removed. It will be added back in, soon.

### v0.1.19

- Last version with WebIDL bindings.
