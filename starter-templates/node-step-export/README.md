# node-step-export

Headless Node 22+ ESM CLI that builds a primitive shape with `libcascade` and writes it to a STEP AP214 file. Demonstrates the canonical Node-side loader pattern (`import.meta.resolve` for `locateFile`), AP214 schema selection, and a fail-loud `IFSelect_ReturnStatus` check.

## Stack

- Node 22+ (ESM, `import.meta.resolve`)
- `tsx` for dev/CI execution; no bundler
- `libcascade` initialised once via a memoized `Promise` in `src/libcascade-init.ts`

## Files

| File                                | Role                                                                  |
| ----------------------------------- | --------------------------------------------------------------------- |
| `src/main.ts`                       | CLI: `--shape box|sphere|cylinder`, `--size`, `--radius`, `--height`, `--out` |
| `src/libcascade-init.ts`                  | Memoized init; resolves WASM via `import.meta.resolve`                 |
| `src/build-shape.ts`                | `BRepPrimAPI_MakeBox` / `MakeSphere_1` / `MakeCylinder_1`              |
| `src/shape-to-step.ts`              | `STEPControl_Writer` with `write.step.schema=AP214CD`; checks `IFSelect_RetDone` |
| `scripts/assert-step-magic.mjs`     | Asserts the output begins with `ISO-10303-21;` (the ISO header magic)  |
| `bin/libcascade-step.mjs`                 | Thin executable shim that forwards to `tsx src/main.ts`                |

## Run

```bash
pnpm install
pnpm start -- --shape sphere --radius 10 --out sphere.step
# or via the bin:
pnpm exec libcascade-step --shape box --size 25 --out box.step
```

## Test plan

1. `pnpm install --frozen-lockfile` → ok
2. `pnpm typecheck` → ok (strict, `noUncheckedIndexedAccess`)
3. `pnpm smoke` →
   - runs `tsx src/main.ts --shape sphere --radius 10 --out smoke.step`
   - then runs `node ./scripts/assert-step-magic.mjs smoke.step`
   - the magic check fails non-zero if the output is missing the `ISO-10303-21;` header or shorter than 256 bytes (catches a writer that returned `IFSelect_RetDone` but emitted an empty payload)
4. Manual sanity: open `smoke.step` in any STEP viewer (FreeCAD, OnShape, KiCad) — the sphere appears

## Why the magic-byte check

ISO 10303-21 mandates the literal token `ISO-10303-21;` at the start of the file. Any divergence (extra BOM, wrong newline encoding, partial write) breaks downstream STEP parsers. Asserting the magic bytes is the cheapest possible end-to-end conformance check — it never opens a parser, never depends on geometry, and runs in a few milliseconds.
