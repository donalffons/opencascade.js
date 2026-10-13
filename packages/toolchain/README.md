# `@libcascade/toolchain`

Typed build configuration and container driver for **custom** [libcascade](https://www.npmjs.com/package/libcascade) WASM builds.

Most consumers should install the prebuilt `libcascade` package instead. This one is a dev-time tool for the minority who compile their own symbol subset. It never runs on `postinstall`.

## Install

```bash
npm install --save-dev @libcascade/toolchain
```

## Configure

```typescript
// libcascade.config.ts
import { defineBuild } from '@libcascade/toolchain';

export default defineBuild({
  name: 'myapp',
  bindings: ['gp_Pnt', 'BRepPrimAPI_MakeBox', 'TopoDS_Shape'],
  customBindings: [{ file: 'wrappers/mesh-extractor.cpp', symbols: ['MyMeshExtractor'] }],
  settings: {
    ALLOW_MEMORY_GROWTH: true,
    INITIAL_MEMORY: '100MB',
    EXPORTED_RUNTIME_METHODS: ['FS', 'wasmMemory'],
    ENVIRONMENT: ['web', 'worker', 'node'],
    EVAL_CTORS: 2,
  },
  compilerFlags: { exceptions: 'wasm', noEntry: true, simd: true, optimize: 'O3' },
  variants: [
    { name: 'single' },
    // `EVAL_CTORS: null` REMOVES the inherited base setting — constructor
    // evaluation order is non-deterministic under pthread workers.
    // `compilerFlags` merges over the base one key at a time, and `threads`
    // renders `-pthread` — which also infers `requires: ['threads']`.
    {
      name: 'multi',
      compilerFlags: { threads: true },
      settings: { EVAL_CTORS: null, SHARED_MEMORY: true },
    },
  ],
});
```

Serialization rules for `settings`: `boolean` → `1`/`0`, numbers and strings verbatim, arrays → emcc's bracketed list (`["FS","wasmMemory"]`) except `ENVIRONMENT`, which is comma-joined. Anything the typed surface cannot express goes in `rawFlags`, appended verbatim after every typed flag.

## Build

`libcascade build` requires Docker (or another supported container engine) to
be installed and running. `--render-only`, `assemble`, `detect`, `check`, and
using a package that has already been built do not need a container engine.

```bash
npx libcascade build                     # every variant
npx libcascade build --variant multi     # one variant
npx libcascade build --render-only       # render the yml(s) and stop (no container needed)
```

`build` renders one container-side yml per variant into `.libcascade/`, runs `<engine> run … link <yml>` with `OCJS_OUTPUT_DIR` pointed at a scratch mount, moves the artifacts into `dist/` only after the run succeeds, and fails loudly when the produced `build-manifest.json` reports `validation_passed: false` (printing the missing symbols and binding-report deltas — missing bindings otherwise fail at *runtime* with a `BindingError`).

The rendered ymls and the raw container output stay in `.libcascade/` for inspection after a failure. Add it to `.gitignore`.

## Assemble

```bash
npx libcascade assemble                  # generate the packaging surface into dist/
npx libcascade assemble --write-exports  # …and merge the exports map into package.json
```

`assemble` is pure Node — it never touches a container. It reads the per-variant `<outputName>.d.ts` + `<outputName>.build-manifest.json` that `build` left in `dist/` and writes, next to them:

| File | Contents |
| --- | --- |
| `types.d.ts` | One d.ts unioning every variant's surface. Symbols only some variants bind are typed optional. Replaces the N near-identical per-variant d.ts files, so single and multi instances are structurally comparable. |
| `init.js` / `init.d.ts` | The `./init` subpath: `createInstance({ variant, threadCount, wasmBinary, wasmMemory, locateFile })`. Owns variant selection, pthread worker loading, Node `file:` URL → path conversion, and OCCT thread-pool sizing. |
| `init.<variant>.js` / `init.<variant>.d.ts` | The `./<variant>/init` subpath: a fixed-variant initializer that names one glue asset, accepts no selector, and exposes only that variant's valid options. Emitted only for a multi-variant package. |
| `index.js` / `index.d.ts` | The eager root: it selects once, self-locates the matching WASM asset, initializes it, and exports the instance plus every bound value. |
| `variant.d.ts` | Types for the raw per-variant glue subpaths (`./single`, `./multi`, …): the module factory plus the shared instance type. |
| `exports.json` | The generated `exports` fragment, for review or manual merging. |

The d.ts and the eager barrel are rendered from one symbol list, so they cannot drift apart.

### One root contract

The package root is always eager. It probes capabilities, selects one variant,
self-locates that variant's WASM asset, initializes it with top-level `await`,
and exports the instance plus a named-value barrel (`export const gp_Pnt =
oc.gp_Pnt;` …). Import `./init` instead when initialization must remain under
consumer control; importing that subpath never evaluates the root.

Selection picks the most capable variant whose capabilities all probe true (configuration order breaks ties). A variant's capabilities are its declared `requires` **plus** whatever its build flags imply — `compilerFlags.threads`, a `-pthread` raw flag, or a truthy `USE_PTHREADS`/`SHARED_MEMORY` setting all infer `threads`, so it is normally not declared at all. `threads` probes `SharedArrayBuffer` present ∧ (`globalThis.crossOriginIsolated` ?? running under Node). Override before importing the root:

```javascript
globalThis[Symbol.for('libcascade.select')] = 'single';
```

### Entry subpaths

| Subpath | Target | Reach for it when |
| --- | --- | --- |
| `.` | `index.js` | Default consumers that want a ready instance and named OCCT values. |
| `./init` | `init.js` | You want the most capable variant this host supports, picked at load time. |
| `./<variant>/init` | `init.<variant>.js` | You already know which variant you want; the import path fixes it and excludes every other glue asset. |
| `./<variant>` | `<outputName>.js` | Escape hatch: the raw Emscripten module factory, no plumbing. |
| `./<variant>/wasm` | `<outputName>.wasm` | A `locateFile` target. |

`./init` is the shared selector. `./<variant>/init` is a distinct, genuinely
pinned API: it exports no selector, rejects a `variant` option, ignores the
shared override symbol, and names exactly one glue file. The shared entry has
to be able to *reach* every variant, so it contains one `new
URL('./<glue>.js', import.meta.url)` per variant — and Vite's
`vite:asset-import-meta-url` transform emits an asset for each at transform
time, **before** tree-shaking. A fixed-variant consumer should therefore import
the pinned subpath.

The multi-megabyte `.wasm` is unaffected either way: the glue import is deliberately opaque to bundlers, so only a `.wasm` the consumer references itself — through `./<variant>/wasm` or `locateFile` — enters a build.

```javascript
import { createInstance } from 'my-occt-package/multi/init'; // one glue, no selector
```

A single-variant package gets no `./<variant>/init`: its `./init` already resolves exactly one glue, so the pinned entry would be a duplicate.

A pinned entry knows about one variant and nothing else. Passing any `variant`
option is a type error and a runtime error; a `Symbol.for('<pkg>.select')`
override has no effect on it. A single-threaded pinned entry also omits
`threadCount`, while a threaded pinned entry accepts it.

### Exports merge

`--write-exports` merges the generated fragment into the package's own
`package.json`: generated subpaths (`.`, `./init`, `./<variant>`,
`./<variant>/init`, `./<variant>/wasm`) win, and every other subpath already
declared is preserved in place. It also replaces generated entries in `files`
with the exact current surface while preserving hand-maintained files.

### What `dist/` holds, and what ships

`dist/` mixes three classes of file. **`files` in your `package.json` is the authoritative statement of which ones ship** — the directory itself makes no such claim.

| Class | Files | Ships? |
| --- | --- | --- |
| Shipped surface | `types.d.ts`, `init.js` / `init.d.ts`, `init.<variant>.js` / `init.<variant>.d.ts`, `index.js` / `index.d.ts`, `variant.d.ts`, `<outputName>.js`, `<outputName>.wasm` | Yes — this is what `exports` points at. |
| Durable records | `<outputName>.build-manifest.json`, `<outputName>.provenance.json`, `<outputName>.js.symbols` | Your call. They are build *records*, worth committing (build-parity gates diff them) and worth publishing if you want consumers to audit what went into the binary. `libcascade` itself ships all three. |
| In-repo build products | `<outputName>.d.ts`, one per variant, plus `exports.json` | No. |

The per-variant `<outputName>.d.ts` is **not** stale output. It is the container `dts` step's artifact, and it has two real consumers: `assemble` parses every one of them to build the shared `types.d.ts` (without them `assemble` cannot run), and in this repository 30 files under `tests/` import it directly — `import type { … } from '../dist/opencascade_single'` — because it is the bindgen artifact under test. They cannot be repointed at `types.d.ts`, which is a different artifact (a cross-variant union). So it is a build product consumed in-repo that does not publish: leave it in `dist/`, leave it out of `files`.

`exports.json` is a review aid for `--write-exports` and never ships.

`assemble --write-exports` keeps custom packages slim by default: it does not
add durable records to `files`. List any records you intentionally publish in
your package's existing `files`; the merge preserves those explicit entries.

For pthread builds, `assemble` replaces Emscripten 6's build-time glue-file
self-reference with `import.meta.url`. This keeps worker loading valid when a
bundler hashes the glue asset. Under Vite, the consumer also needs `worker: {
format: 'es' }` because Emscripten's worker is an ES module with top-level
await (Vite's default `iife` cannot emit it).

## Detect and check

Two commands that answer one question — *which symbols does this code actually reference?* — in the two directions that matter.

```bash
npx libcascade detect src                    # onboarding: seed a bindings list
npx libcascade detect src lib --json         # same, machine-readable
npx libcascade check src                     # CI drift guard: exits 1 on an unbound reference
npx libcascade check src --verbose           # …also listing the `oc.*` members that are not OCCT symbols
```

**Neither command is a size tool, and neither ever removes anything.** The measurement behind that: dropping **14% of symbols bought 0.9% of brotli size**, because the ~5,400 embind registrations are GC roots — unbound symbols free glue, not kernel code (`--gufa` is a measured size *regression* on top). What detection is worth instead is the failure asymmetry: **a missing binding links successfully and fails at runtime with `BindingError`.** `libcascade build` cannot catch it; only running the code path can.

### `detect` — the first bindings list

Writing the initial `bindings` array is the scariest step of custom-build onboarding. `detect` scans your source for symbol references, closes over the catalog, and prints a paste-ready fragment with per-symbol provenance:

```text
  bindings: [
    'BRepBuilderAPI_MakeShape', // closure: base of BRepPrimAPI_MakeBox
    'BRepPrimAPI_MakeBox',      // seed: src/shapes.ts:41
    'gp_XYZ',                   // closure: member type of gp_Pnt
  ],
```

The output is a **starting set, not a minimal one**, and it is not an audit of what you can drop. The scan cannot see symbols reserved for external callers or referenced only by custom C++ files. Review every consumer; never delete the difference from an existing config automatically.

### `check` — the drift guard

`check` recomputes the referenced set and fails when any of it is missing from `bindings ∪ customBindings[].symbols`, naming each symbol, the first `file:line` that references it, and the fix. That is its whole point: **it converts the runtime `BindingError` class into a build-time failure**, so put it in CI next to your typecheck.

```text
libcascade check: 1 referenced symbol is not bound by libcascade.config.ts.

  ChFi2d_FilletAPI
      first referenced at src/fillet.ts:13
```

Symbols bound under an OCCT typedef alias (`TColgp_Array1OfPnt` for `NCollection_Array1_gp_Pnt`) count as bound. Names that are not in the catalog at all — your `customBindings` symbols, Emscripten runtime members such as `oc.FS`, typos — are never failures; `--verbose` lists them as ignored.

### Scan rules

| Rule | Behaviour |
| --- | --- |
| Strong signal | `oc.Symbol` (also `this.oc.Symbol`) |
| Weak signal | any bare identifier that exactly matches a catalog name **and contains an underscore** — this is what catches type-only imports like `import type { TopoDS_Shape }`. Single-word catalog names (`Draft`, `Expr`, `BRepTools`) are excluded from bare matching because they collide with ordinary identifiers; write them as `oc.BRepTools` |
| Overload suffixes | `Geom2d_Line_1` → `Geom2d_Line`, but only when the full name is not itself a symbol |
| Excluded | `.d.ts` (an OCCT d.ts declares every symbol, which makes the scan vacuous), `node_modules`, `dist`, `build`, `out`, `coverage` |
| Comments | blanked before matching, so a comment naming a deliberately-omitted class is not a reference |
| Strings | scanned, which is what makes `oc['gp_Pnt']` visible |
| Builtins | `OCJS`, `TopoDS` and friends are registered unconditionally, so they are never detected or demanded |

The scanner is regex/token-based, not AST-based — the package's dependencies stay `jiti` + `yaml`. It therefore cannot see dynamic access (`oc[name]`), names built by concatenation, or symbols only your C++ wrappers call. `check` is a drift guard, not a proof.

## Migrate a v2 yml build

```bash
npx libcascade migrate build-config/custom_build_single.yml \
                       build-config/custom_build_multi.yml \
                       --out libcascade.config.ts
```

Pass every variant's yml at once: sibling ymls that differ only in flags and artifact name are one config with one variant each, and that is what it emits — shared values in the base, differences in the variants. `-sNAME=…` becomes a typed `settings` entry, the curated compiler flags become `compilerFlags`, and anything left lands in `rawFlags` verbatim and is listed in the generated header. Nothing is dropped; an unknown yml *key* is an error, and a wrapper whose symbols cannot be read out of its `.cpp` gets a `TODO` marker with the candidate names rather than a guess. It refuses to overwrite an existing `--out` without `--force`.

One shot, not a sync — the config is the source afterwards. Full walkthrough: [Migrate from a yml build](https://ocjs.org/docs/toolchain/getting-started/migrate-from-yaml).

## Environment

| Variable | Effect |
| --- | --- |
| `LIBCASCADE_CONTAINER_CMD` | Container engine to probe first. Default order: `docker`, then `podman`. |
| `LIBCASCADE_IMAGE` | Image reference override (wins over a config-level `image:`). Skips digest verification and prints a provenance warning — dev loop only. |
| `LIBCASCADE_PLATFORM` | Passed to the engine as `--platform`. Unset by default; the images are multi-arch. |

`-u uid:gid` is emitted only on Linux native engines; Docker Desktop on macOS/Windows maps ownership itself.

## Escape hatch

```typescript
import { createContainerDriver } from '@libcascade/toolchain/driver';
```

## Generated types

`bindings` is the `OcctSymbol` union of every symbol the pinned image can bind (OCCT classes and enums, OCCT typedef aliases, Embind builtins) plus exactly the symbols this config's own `customBindings[].symbols` declare — a typo is a compile error with a "did you mean" suggestion. `settings` is `EmccSettings`, generated from the image's emsdk `settings.js`: unknown `-s` names, `'100mb'`-style memory strings, and `ENVIRONMENT: 'web,worker'` are all compile errors. Images are pinned by digest and verified after pull.

See `generated/README.md` for the artifacts, their sources, and the release-version argument required to regenerate them.

## Status

`detect` and `check` are experimental.
