# next-three-glb

Next 15 App Router + React 19 + `@react-three/fiber` + `@react-three/drei` + `libcascade`. Demonstrates the canonical SSR-safe pattern for libcascade: a `'use client'` viewer component dynamically imported with `{ ssr: false }`, with `opencascade_single.wasm` copied into `public/` at install time.

## Stack

- Next 15 App Router (`pnpm dev` → http://localhost:3000)
- React 19 client components
- `@react-three/fiber` + `@react-three/drei` for the Canvas + OrbitControls
- `libcascade` initialised once per session via `lib/libcascade-init.ts`

## Files

| File                              | Role                                                                       |
| --------------------------------- | -------------------------------------------------------------------------- |
| `app/layout.tsx`                  | Root layout; sets dark background and full-viewport height                 |
| `app/page.tsx`                    | RSC home; lazy-loads `LibcascadeViewer` with `{ ssr: false }`                    |
| `components/LibcascadeViewer.tsx`       | `'use client'` Canvas + drei `OrbitControls`; runs the libcascade pipeline       |
| `lib/libcascade-init.ts`                | Memoized-`Promise` singleton; `locateFile` returns `/opencascade_single.wasm` |
| `lib/build-shape.ts`              | Box-with-hole compound shape                                               |
| `lib/shape-to-glb.ts`             | Mesh + `RWGltf_CafWriter`                                                  |
| `scripts/copy-wasm.mjs`           | `postinstall`: resolves `libcascade/single/wasm` and copies it into `public/` |
| `next.config.ts`                  | COOP/COEP headers; WASM resource rule                                      |

## Run

```bash
pnpm install     # postinstall copies opencascade_single.wasm to public/
pnpm dev         # http://localhost:3000

# … or production build:
pnpm build
pnpm start
```

## Test plan

1. `pnpm install --frozen-lockfile` → ok; `public/opencascade_single.wasm` exists and matches the byte size of the file resolved through the `libcascade/single/wasm` subpath export
2. `pnpm typecheck` → ok (strict tsconfig, React 19 types)
3. `pnpm build` → ok; `.next/` includes a client chunk that fetches `/opencascade_single.wasm`
4. `pnpm start &` then `pnpm smoke` → exits 0:
   - the `<canvas>` inside `#libcascade-canvas` mounts within 30s
   - the 16×16 centre sample contains more than one distinct colour
   - no `console.error` matching `/OCCT|OpenCascade|emscripten/` observed
5. Visual sanity: a box with a circular hole rotates via OrbitControls

The smoke script is `node ../_shared/smoke-render.mjs --url http://localhost:3000 --canvas '#libcascade-canvas canvas' --screenshot smoke.png`.

## SSR notes

`LibcascadeViewer` is `'use client'` because it touches the DOM `Canvas` and instantiates the WASM runtime, neither of which is available during server render. Loading it via `dynamic(() => import(...), { ssr: false })` from `app/page.tsx` keeps the libcascade pipeline strictly client-side without manual `typeof window` guards.
