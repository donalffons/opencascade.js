# vite-three-glb

Vite 6 + TS + three.js 0.180+ + `libcascade`. Builds a box-with-hole compound shape, meshes it to GLB via `RWGltf_CafWriter`, and renders it through three.js with `OrbitControls`.

## Stack

- Vite 6 (`pnpm dev` → http://localhost:5173)
- three.js 0.180+ (GLTFLoader + OrbitControls from `three/examples/jsm`)
- The ready `libcascade` root, with automatic variant and hashed-WASM selection

## Files

| File                   | Role                                                                  |
| ---------------------- | --------------------------------------------------------------------- |
| `src/main.ts`          | Boots the viewer, runs the pipeline, surfaces decoded errors          |
| `src/build-shape.ts`   | Constructs the demo compound (`BRepPrimAPI_MakeBox` + `MakeCylinder` + `BRepAlgoAPI_Cut`) |
| `src/shape-to-glb.ts`  | Meshes (`BRepMesh_IncrementalMesh`) and writes GLB (`RWGltf_CafWriter`) |
| `src/three-viewer.ts`  | three.js scene + camera + lights + `OrbitControls`; exposes `.load(glb)` |
| `index.html`           | Single-canvas shell                                                   |
| `vite.config.ts`       | Keeps libcascade out of dependency pre-bundling                         |

## Run

```bash
pnpm install
pnpm dev          # http://localhost:5173
# … or for the production preview build:
pnpm build
pnpm preview     # http://localhost:4173
```

## Test plan

1. `pnpm install --frozen-lockfile` → ok
2. `pnpm typecheck` → ok (strict `tsconfig.json` with `noUncheckedIndexedAccess`)
3. `pnpm build` → ok; `dist/` contains hashed single- and multi-variant assets named by the convenience root
4. `pnpm preview &` then `pnpm smoke` → exits 0:
   - canvas `#libcascade-canvas` mounts within 30s
   - the 16×16 centre sample contains more than one distinct colour (geometry painted)
   - Chromium requests the selected single-threaded WASM and never requests the multi-threaded WASM
   - no `console.error` matching `/OCCT|OpenCascade|emscripten/` observed
5. Visual sanity: a box with a circular hole rotates with the mouse via `OrbitControls`

The smoke script is `node ../_shared/smoke-render.mjs --url http://localhost:4173 --canvas '#libcascade-canvas' --screenshot smoke.png`. CI uploads the screenshot artifact on failure.
