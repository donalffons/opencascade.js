<p align="center">
  <img src="images/banner.svg" alt="libcascade" width="100%">
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/libcascade"><img src="https://img.shields.io/npm/v/libcascade?logo=npm&amp;logoColor=white&amp;label=npm&amp;color=cb3837&amp;cacheSeconds=21600" alt="npm version"></a>
  <a href="https://github.com/taucad/opencascade.js/actions/workflows/docker.yml?query=branch%3Amain"><img src="https://github.com/taucad/opencascade.js/actions/workflows/docker.yml/badge.svg?branch=main&amp;event=push" alt="docker build"></a>
  <a href="https://github.com/taucad/opencascade.js/pkgs/container/opencascade.js/versions?filters%5Bversion_type%5D=tagged&amp;q=single-threaded"><img src="images/badges/ghcr-single-threaded.svg" alt="ghcr single-threaded image"></a>
  <a href="https://github.com/taucad/opencascade.js/pkgs/container/opencascade.js/versions?filters%5Bversion_type%5D=tagged&amp;q=multi-threaded"><img src="images/badges/ghcr-multi-threaded.svg" alt="ghcr multi-threaded image"></a>
</p>

<p align="center">
  The <a href="https://www.opencascade.com/">OpenCASCADE</a> 3D CAD kernel, compiled to WebAssembly with TypeScript bindings.
  <br />
  <a href="https://libcascade.xyz/"><strong>Documentation</strong></a>
  ·
  <a href="https://github.com/taucad/opencascade.js/issues">Issues</a>
</p>

Build solids, run booleans, fillet edges, mesh, and read/write STEP — in a
browser tab, a Node CLI, or an LLM tool call. Source lives in
[`taucad/opencascade.js`](https://github.com/taucad/opencascade.js); this is not
an official Open CASCADE Technology distribution.

| I want to…                     | Go to                                                                             |
| ------------------------------ | --------------------------------------------------------------------------------- |
| Use OCCT from JS or TS         | [Install](#install)                                                               |
| Run the threaded build         | [Multi-threading](#multi-threading)                                               |
| Build a trimmed or custom WASM | [Toolchain](#toolchain)                                                           |
| Pull a container image         | [Container images](#container-images)                                             |
| See what changed in v3         | [What's new in v3](#whats-new-in-v3) · [BREAKING_CHANGES.md](BREAKING_CHANGES.md) |
| Build OCCT WASM from source    | [MAINTAINER.md](MAINTAINER.md)                                                    |
| Contribute                     | [CONTRIBUTING.md](CONTRIBUTING.md)                                                |

## Install

```bash
npm install libcascade
```

```ts
import oc from 'libcascade';

using box = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
const shape = box.Shape();
```

The root export is an initialised instance, selected for the variant the host
supports. Every bound symbol is also a named export.

### Entry points

| Import                          | What it gives you                                       |
| ------------------------------- | -------------------------------------------------------- |
| `libcascade`                    | Initialised instance, variant selected for the host      |
| `libcascade/init`               | Shared lazy selector                                      |
| `libcascade/single/init`        | Fixed single-threaded initializer                         |
| `libcascade/multi/init`         | Fixed multi-threaded initializer                          |
| `libcascade/single/wasm` · `libcascade/multi/wasm` | Binary URL, for bundlers that relocate assets |
| `libcascade/api-reference.json` | Class/member hierarchy, source commit, build provenance   |

Pass options through a fixed initializer when the variant is known:

```ts
// Vite / browser, with a relocated wasm asset
import { createInstance } from 'libcascade/single/init';
import wasmUrl from 'libcascade/single/wasm?url';

const oc = await createInstance({ locateFile: () => wasmUrl });
```

The package is ESM-only. The WASM resolves on its own — reach for `locateFile`
only when a bundler or deployment moves the binary. Deep imports into `dist/`
are not a supported surface.

### Distribution

The tarball ships `dist/opencascade_single.{wasm,js}` and
`dist/opencascade_multi.{wasm,js}`, each with a `provenance.json` sidecar naming
the exact toolchain and source commits. Both variants share one assembled
`types.d.ts` surface. Releases publish through GitHub OIDC Trusted Publishing
with Sigstore provenance — see the
[release flow](MAINTAINER.md#ci-and-release-ownership).

## Multi-threading

For batch meshing, boolean grids, and STEP→glTF pipelines that use OCCT's
internal thread pool, ask for the pthread build:

```ts
import { createInstance } from 'libcascade/multi/init';

const oc = await createInstance();

// Run once after init — flip OCCT global parallel defaults.
oc.BOPAlgo_Options.SetParallelMode(true); // booleans fan out
oc.BRepMesh_IncrementalMesh.SetParallelDefault(true); // meshing fans out
```

`createInstance` owns the pthread plumbing: worker self-reference, Node path
conversion, and thread-pool sizing. Under Vite, set `worker: { format: 'es' }`
— Emscripten's workers are ES modules.

Browsers need `Cross-Origin-Opener-Policy: same-origin` and
`Cross-Origin-Embedder-Policy: require-corp` on every page that loads the
threaded binary. The [multi-threading guide](https://libcascade.xyz/docs/package/guides/multi-threading)
covers activation, measured speedups, and when not to ship threaded.

## Toolchain

Reach for `@libcascade/toolchain` when you need a binary the prebuilt one is
not: a trimmed symbol set, your own C++ wrappers, or different Emscripten link
settings. It drives digest-pinned Docker images for you, so there is no
`docker run` string to maintain. A container engine must be installed and
running.

```bash
npm install --save-dev @libcascade/toolchain
```

```ts
// libcascade.config.ts
import { defineBuild } from '@libcascade/toolchain';

export default defineBuild({
  name: 'myapp',
  bindings: ['BRepPrimAPI_MakeBox', 'TopoDS_Shape', 'gp_Pnt'],
  settings: { MODULARIZE: true, EXPORT_ES6: true, ALLOW_MEMORY_GROWTH: true },
  compilerFlags: { optimize: 'O3', simd: true, exceptions: 'wasm', noEntry: true },
  variants: [{ name: 'single' }],
});
```

```bash
npx libcascade build       # link each variant through the pinned image → dist/
npx libcascade assemble    # shared types.d.ts + ./init entry + exports map
npx libcascade check src   # CI drift guard: referenced symbols ⊆ bound symbols
```

Symbol names and `-s` settings are compile-checked against unions generated from
the pinned image, so a typo is a TypeScript error rather than a runtime
`BindingError`.

- [Toolchain quickstart](https://libcascade.xyz/docs/toolchain/getting-started/quick-start)
- [Config reference](https://libcascade.xyz/docs/toolchain/reference/config)
- [Migrate from a yml build](https://libcascade.xyz/docs/toolchain/getting-started/migrate-from-yaml)

## Container images

Images publish to
[ghcr.io/taucad/opencascade.js](https://github.com/taucad/opencascade.js/pkgs/container/opencascade.js)
as multi-arch manifest lists (`linux/amd64` + `linux/arm64`). Docker resolves the
architecture itself, Apple Silicon runs natively, and no `--platform` flag is
needed.

| Tag                                        | What it points at                                                        |
| ------------------------------------------ | ------------------------------------------------------------------------ |
| `:single-threaded`                         | Latest release, single-threaded warm cache (default for browser CAD UIs) |
| `:multi-threaded`                          | Latest release, multi-threaded warm cache (requires COOP/COEP)           |
| `:bindgen-base`                            | Post-PCH/generate, pre-compile — the custom-bindings starting point      |
| `:{{version}}-<stage>`                     | Pinned release for any of the three stages above                         |
| `:{{version}}-canary.<sha8>-<stage>`       | Immutable maintainer-dispatched canary, retained for seven days          |
| `:branch-main[-<full-sha>]`                | Current or immutable `main`, single-threaded                             |
| `:multi-threaded-branch-main[-<full-sha>]` | Current or immutable `main`, multi-threaded                              |
| `:bindgen-base-branch-main[-<full-sha>]`   | Current or immutable `main`, bindgen-base                                |

Building the image, or driving it directly, is covered in
[MAINTAINER.md](MAINTAINER.md#docker-end-to-end-validation).

## What's new in v3

| Change                       | Detail                                                                                     |
| ---------------------------- | ------------------------------------------------------------------------------------------ |
| **OCCT 8.0.1**               | 1,085+ upstream commits; 22–31% faster boolean operations                                  |
| **Emscripten 6.0.5**         | LLVM 24, modern WASM features                                                               |
| **Native WASM exceptions**   | `-fwasm-exceptions` replaces JS invoke trampolines; decodable via `oc.getExceptionMessage` |
| **ESM-only distribution**    | `"type": "module"`, eager root plus fixed and shared lazy entries                           |
| **Full TypeScript bindings** | Doxygen-derived JSDoc, rendered in Monaco IntelliSense                                      |
| **Suffix-free overloads**    | One symbol per class with val-based dispatch — no `_2`/`_3` subclasses                     |
| **Reproducible builds**      | `DEPS.json` pins every dependency to a commit; per-build `provenance.json`                  |
| **Incremental builds**       | Content-addressed cache turns 10–30 minute clean builds into seconds on hit                 |

Overload dispatch measures ~264 ns/call, under 0.011% of wall time on typical
CAD models. [BENCHMARKS.md](BENCHMARKS.md) carries the evidence: CAD wall-clock
against native C++, threading speedup, embind dispatch cost, and RBV overhead.
[CHANGELOG.md](CHANGELOG.md) has the full entry.

## Documentation

| Document                                                                        | Covers                                              |
| ------------------------------------------------------------------------------- | --------------------------------------------------- |
| [libcascade.xyz](https://libcascade.xyz/)                                         | Full docs: package, toolchain, API reference        |
| [BREAKING_CHANGES.md](BREAKING_CHANGES.md)                                        | v3 consumer migration                               |
| [BENCHMARKS.md](BENCHMARKS.md)                                                    | Measured performance, end to end                    |
| [CHANGELOG.md](CHANGELOG.md)                                                      | Release notes                                       |
| [MAINTAINER.md](MAINTAINER.md)                                                    | Native build, env vars, release ownership           |
| [BUILD_SYSTEM.md](BUILD_SYSTEM.md)                                                | `OCJS_*` env-var matrix and configuration authoring |
| [Trim symbols](https://libcascade.xyz/docs/toolchain/guides/trim-symbols)          | Cutting the binding set to a consumer-sized build   |
| [Extend with C++](https://libcascade.xyz/docs/toolchain/guides/extend-with-cpp)    | `customBindings` scopes                             |
| [Reproducible CI](https://libcascade.xyz/docs/toolchain/guides/reproducible-ci)    | Digest pinning, provenance, SBOM, lockfiles         |

## Projects using libcascade

- [ArchiYou](https://archiyou.com/) — library, code-CAD design tool, community hub
- [BitByBit](https://bitbybit.dev/) — code- and node-based CAD tool
- [CascadeStudio](https://github.com/zalo/CascadeStudio) — library and code-CAD design tool
- [Replicad](https://replicad.xyz/) — library and code-CAD design tool
- [Tau](https://tau.new/) — AI-native CAD platform for the web

## Contributing

Start with [CONTRIBUTING.md](CONTRIBUTING.md), check [TODO.md](TODO.md) for the
backlog, and use [MAINTAINER.md](MAINTAINER.md) to build from source.

## License

See [LICENSE](LICENSE).
