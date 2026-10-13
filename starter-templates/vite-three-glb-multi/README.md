# vite-three-glb-multi

Vite 6 + TS + three.js 0.180+ + the threaded `libcascade` variant. Same box-with-hole → GLB → three.js pipeline as [`vite-three-glb`](../vite-three-glb), but loads the pthread-enabled wasm with COOP/COEP headers and activates OCCT parallel mesh/boolean defaults at init.

## Stack

- Vite 6 (`pnpm dev` → http://localhost:3003)
- `createInstance()` from the fixed `libcascade/multi/init` entry
- Pthread-enabled wasm at `libcascade/multi/wasm?url`
- Cross-origin isolation headers in `vite.config.ts` (required for `SharedArrayBuffer`)
- Global parallel activation in `src/libcascade-init.ts` per the [multi-threading guide](https://github.com/taucad/opencascade.js/blob/main/docs-site/content/docs/package/guides/multi-threading.mdx)

## Files

| File                   | Role                                                                  |
| ---------------------- | --------------------------------------------------------------------- |
| `src/main.ts`          | Boots the viewer, runs the pipeline, surfaces thread count + errors   |
| `src/libcascade-init.ts`     | Memoized threaded init + parallel activation              |
| `src/build-shape.ts`   | Demo compound; booleans fan out via `SetParallelMode(true)`           |
| `src/shape-to-glb.ts`  | Parallel mesh + GLB export via `SetParallelDefault(true)`             |
| `src/three-viewer.ts`  | three.js scene + `OrbitControls`                                      |
| `vite.config.ts`       | Port 3003, COOP/COEP headers, `optimizeDeps.exclude` for libcascade         |

## Run

```bash
pnpm install
pnpm dev          # http://localhost:3003
# … or for the production preview build:
pnpm build
pnpm preview     # http://localhost:4173
```

## Test plan

1. `pnpm install --frozen-lockfile` → ok
2. `pnpm typecheck` → ok
3. `pnpm build` → ok; `dist/` bundles `opencascade_multi.wasm`
4. `pnpm preview &` then `pnpm smoke` → exits 0 (canvas paints geometry)
5. Visual sanity: status line reports thread count > 1; box-with-hole rotates via OrbitControls
