# libcascade v3 starter templates

Production-ready, copy-and-go starters for `libcascade`. Each template demonstrates a canonical loading pattern, a representative geometry pipeline, and a smoke test that ships green in CI.

## Templates

| Template                             | Stack                                                                     | What it shows                                                  |
| ------------------------------------ | ------------------------------------------------------------------------- | -------------------------------------------------------------- |
| [`vite-three-glb`](./vite-three-glb) | Vite 6 + TS + three.js 0.180+                                             | Build a Shape, mesh to GLB, render in three.js with OrbitControls |
| [`vite-three-glb-multi`](./vite-three-glb-multi) | Vite 6 + TS + three.js + threaded `libcascade`   | Same GLB pipeline with COOP/COEP + pthread wasm + parallel mesh/boolean |
| [`next-three-glb`](./next-three-glb) | Next 15 App Router + React 19 + `@react-three/fiber` + `@react-three/drei` | Client-only libcascade init via `dynamic(..., { ssr: false })` inside `'use client'` |
| [`node-step-export`](./node-step-export) | Node 22+ ESM + `tsx`                                                  | Headless `cli build sphere --out sphere.step` with `import.meta.resolve` |

Each subdirectory is self-contained: a `package.json` with a single canonical dependency (`libcascade`), a pinned `pnpm-lock.yaml`, and a `README.md` with the exact reproduction steps used by CI.

## Shared canonical patterns

Every v3 template implements the same handful of contracts. If you start from these, you avoid the common pitfalls that bit v2-beta consumers.

| Concern                | Canonical pattern                                                                                              | Why                                                                                                   |
| ---------------------- | -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| libcascade init              | Use the ready root for the simplest Vite app; memoize a fixed `single/init` or `multi/init` Promise when lifecycle control is required | Module evaluation or the memoized Promise keeps one runtime per realm |
| `locateFile`           | Resolve the matching `single/wasm` or `multi/wasm` export when a bundler/deployment relocates the binary | Keeps initializer and WASM variant aligned without `dist/*` imports |
| Shape disposal         | `using shape = ...` (TC39 explicit-resource-management) at the call site                                       | Deterministic free of WASM-side `Standard_Transient` objects without leaking into long-lived closures |
| Exception decoding     | `try { ... } catch (e) { console.error(oc.getExceptionMessage?.(e) ?? e); throw e; }` at consumer boundaries   | The native-WASM-exceptions build returns opaque pointers in JS; `getExceptionMessage` resolves them   |
| GLB export             | `BRepGProp_Face` + `BRepMesh_IncrementalMesh` → triangulation → flatten into a single `RWGltf_CafWriter` doc   | Self-contained pipeline; no third-party meshers required                                              |
| STEP export            | `STEPControl_Writer` with `IFSelect_RetDone` magic-byte assertion (`ISO-10303-21`)                             | Guarantees byte-level conformance to AP214; smoke-testable without parsing                            |
| CI smoke               | Either `_shared/smoke-render.mjs` (Playwright pixel sniff for web targets) or magic-byte file probe (Node)     | Catches the failure modes a `pnpm build` cannot see                                                   |

If a template diverges from any row above, it documents why in its own README.

## Smoke test helper

[`_shared/smoke-render.mjs`](./_shared/smoke-render.mjs) is the canonical Playwright pixel-sniff helper used by the `vite-three-glb`, `vite-three-glb-multi`, and `next-three-glb` smokes. It loads the dev server URL, waits for the canvas to mount, samples a 16×16 region at the canvas centre, and fails fast if every sampled pixel collapses to a single colour (the symptom of a render that never actually painted geometry).

Driven from CI:

```bash
node _shared/smoke-render.mjs --url http://localhost:5173 --canvas '#three-canvas' --screenshot out.png
```

The helper exits non-zero on any of:

- Canvas selector never appears within 30s
- All sampled pixels share an RGBA value (background colour leakage; nothing painted)
- The page emits a `console.error` whose text matches `OCCT|OpenCascade|emscripten` (catches loader/init failures that did not crash the test outright)

See the per-template READMEs for the wired-up invocations.
