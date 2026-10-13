import { defineConfig } from 'tsdown';

/**
 * Build `src/` → `dist/` (ESM + `.d.ts`). The package publishes no raw `.ts`.
 *
 * `unbundle` is load-bearing, not a style choice: `src/**` reads `generated/`
 * at runtime through paths relative to the importing module
 * (`new URL('../../generated/symbol-catalog.json', import.meta.url)`,
 * `import … from '../../generated/images.json'`). Mirroring the input file
 * structure keeps every one of those depths identical in `dist/`, so
 * `dist/config/render.js` resolves `../../generated/…` to the same published
 * file `src/config/render.ts` did.
 *
 * `generated/` is external for the same reason — it is data and types the
 * package ships as files, not something to inline into the bundle.
 */
export default defineConfig({
  entry: ['src/index.ts', 'src/driver/index.ts', 'src/cli.ts'],
  format: 'esm',
  outDir: 'dist',
  unbundle: true,
  dts: true,
  clean: ['dist'],
  sourcemap: false,
  deps: { neverBundle: [/^\.\.\/\.\.\/generated\//] },
  outExtensions: () => ({ js: '.js', dts: '.d.ts' }),
});
