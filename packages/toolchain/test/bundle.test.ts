/**
 * Build synthetic two-variant packages with Vite and inspect their assets.
 * Variant-specific init imports contain one glue asset; shared init contains
 * both glue assets; the eager root contains both glue and WASM assets. Small
 * stubs keep the test independent of container artifacts.
 */
import * as fs from 'node:fs';
import * as os from 'node:os';
import * as path from 'node:path';

import { build } from 'vite';
import { afterAll, describe, expect, it } from 'vitest';

import { assemble } from '../src/assemble/index.ts';
import type { BuildConfig } from '../src/config/index.ts';

const CONFIG: BuildConfig = {
  name: 'demo',
  bindings: ['gp_Pnt'],
  variants: [{ name: 'single' }, { name: 'multi', compilerFlags: { threads: true } }],
};

/**
 * Total bytes a single-variant host app may ship.
 *
 * Measured on this fixture: the pinned host builds to 19,908 B (entry chunk +
 * one 12 KB stub glue + the stub wasm) and the shared-`./init` host to
 * 31,900 B. A regression that re-adds the other variant's glue lands at ~31.9 KB
 * and blows straight through this.
 */
const PINNED_BUDGET_BYTES = 24_000;

/** Padding that makes each stub glue big enough for the size budget to bite. */
const GLUE_PADDING = 'x'.repeat(12_000);

const MARKERS = {
  singleGlue: 'STUB_GLUE_SINGLE_MARKER',
  multiGlue: 'STUB_GLUE_MULTI_MARKER',
  singleWasm: 'STUB_WASM_SINGLE_MARKER',
  multiWasm: 'STUB_WASM_MULTI_MARKER',
} as const;

const roots: string[] = [];

afterAll(() => {
  for (const root of roots) fs.rmSync(root, { recursive: true, force: true });
});

/**
 * A `.d.ts` in the shape the container's `dts` step emits — assemble's input.
 *
 * @param symbols - Bound symbols the variant exposes.
 * @returns The file contents.
 */
const variantDts = (symbols: readonly string[]): string =>
  [
    ...symbols.map((symbol) => `declare class ${symbol} {\n  delete(): void;\n}\n`),
    ...symbols.map((symbol) => `export type { ${symbol} };`),
    '',
    'export type OpenCascadeInstance = {',
    '  FS: typeof FS;',
    '} & {',
    ...symbols.map((symbol) => `  ${symbol}: typeof ${symbol};`),
    '};',
    '',
    'export type InitOpenCascadeOptions = {',
    '  wasmBinary?: ArrayBuffer | Uint8Array;',
    '};',
    '',
    'export default function init(options?: InitOpenCascadeOptions): Promise<OpenCascadeInstance>;',
  ].join('\n');

/**
 * Materialise an assembled two-variant package with stub artifacts.
 *
 * @returns The package root, with `dist/` assembled and `exports` written.
 */
const makeAssembledPackage = (): string => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'libcascade-bundle-pkg-'));
  roots.push(root);
  const dist = path.join(root, 'dist');
  fs.mkdirSync(dist);

  for (const variant of ['single', 'multi'] as const) {
    const marker = variant === 'single' ? MARKERS.singleGlue : MARKERS.multiGlue;
    const wasmMarker = variant === 'single' ? MARKERS.singleWasm : MARKERS.multiWasm;
    fs.writeFileSync(path.join(dist, `demo_${variant}.d.ts`), variantDts(['gp_Pnt']));
    fs.writeFileSync(
      path.join(dist, `demo_${variant}.build-manifest.json`),
      JSON.stringify({ symbols: { requested: ['gp_Pnt'] } }),
    );
    // Stub glue: never parsed by the bundler (the `new URL` makes it an asset
    // and the import is opaque), so it only has to be findable by its marker.
    fs.writeFileSync(
      path.join(dist, `demo_${variant}.js`),
      `// ${marker}\nconst PAD = '${GLUE_PADDING}';\n${
        variant === 'multi'
          ? 'const spawnWorker = () => new Worker(new URL("demo_multi.js",import.meta.url),{type:"module"});\n'
          : ''
      }export default async () => ({ PAD });\n`,
    );
    fs.writeFileSync(path.join(dist, `demo_${variant}.wasm`), `${wasmMarker}\n`);
  }

  fs.writeFileSync(
    path.join(root, 'package.json'),
    JSON.stringify({ name: 'demo-pkg', type: 'module', version: '0.0.0' }),
  );
  const { exports } = assemble({ config: CONFIG, configDirectory: root });
  fs.writeFileSync(
    path.join(root, 'package.json'),
    JSON.stringify({ name: 'demo-pkg', type: 'module', version: '0.0.0', exports }, undefined, 2),
  );
  return root;
};

type BuiltHost = {
  /** Every emitted file's contents, concatenated — searched for the stub markers. */
  readonly contents: string;
  /** Sum of every emitted file's size. */
  readonly bytes: number;
  /** Emitted file names, for failure messages. */
  readonly files: readonly string[];
};

const walk = (directory: string): string[] =>
  fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });

/**
 * Vite-build a one-module host app against the assembled package.
 *
 * @param packageRoot - The assembled package (linked in as `demo-pkg`).
 * @param options - Entry and fixed/shared variant selection for the host.
 * @returns The emitted output, flattened.
 */
const buildHost = async (
  packageRoot: string,
  options: {
    readonly entrySpecifier: string;
    readonly wasmVariant?: 'single' | 'multi';
    readonly requestedVariant?: 'single' | 'multi';
    readonly eager?: boolean;
  },
): Promise<BuiltHost> => {
  const host = fs.mkdtempSync(path.join(os.tmpdir(), 'libcascade-bundle-host-'));
  roots.push(host);
  fs.mkdirSync(path.join(host, 'node_modules'), { recursive: true });
  fs.symlinkSync(packageRoot, path.join(host, 'node_modules', 'demo-pkg'), 'dir');
  const source = options.eager === true
    ? `import oc from '${options.entrySpecifier}';\nglobalThis.boot = () => oc;\n`
    : `import { createInstance } from '${options.entrySpecifier}';\n` +
      `import wasmUrl from 'demo-pkg/${options.wasmVariant ?? 'single'}/wasm?url';\n` +
      `globalThis.boot = () => createInstance({${
        options.requestedVariant === undefined
          ? ''
          : ` variant: '${options.requestedVariant}',`
      } locateFile: () => wasmUrl });\n`;
  fs.writeFileSync(path.join(host, 'main.js'), source);

  const outDir = path.join(host, 'out');
  await build({
    root: host,
    configFile: false,
    logLevel: 'silent',
    // W4: Emscripten spawns its pthread workers as ES modules with top-level
    // await; Vite's default `iife` worker format cannot emit them.
    worker: { format: 'es' },
    build: {
      outDir,
      emptyOutDir: true,
      minify: false,
      // Keep every asset a real file, so the markers stay greppable and the
      // byte budget measures what actually ships.
      assetsInlineLimit: 0,
      rollupOptions: { input: path.join(host, 'main.js') },
    },
  });

  const files = walk(outDir);
  return {
    contents: files.map((file) => fs.readFileSync(file, 'utf8')).join('\n'),
    bytes: files.reduce((total, file) => total + fs.statSync(file).size, 0),
    files: files.map((file) => path.relative(outDir, file)),
  };
};

describe('host bundles', () => {
  const packageRoot = makeAssembledPackage();

  it('ships only the imported variant when the host uses `./<variant>/init`', async () => {
    const output = await buildHost(packageRoot, {
      entrySpecifier: 'demo-pkg/single/init',
      wasmVariant: 'single',
    });

    expect(output.contents).toContain(MARKERS.singleGlue);
    expect(output.contents).toContain(MARKERS.singleWasm);
    expect(output.contents).not.toContain(MARKERS.multiGlue);
    expect(output.contents).not.toContain(MARKERS.multiWasm);
    expect(output.bytes).toBeLessThan(PINNED_BUDGET_BYTES);
  });

  it('ships only the multi variant when the host pins `./multi/init`', async () => {
    const output = await buildHost(packageRoot, {
      entrySpecifier: 'demo-pkg/multi/init',
      wasmVariant: 'multi',
    });

    expect(output.contents).toContain(MARKERS.multiGlue);
    expect(output.contents).toContain(MARKERS.multiWasm);
    expect(output.contents).not.toContain(MARKERS.singleGlue);
    expect(output.contents).not.toContain(MARKERS.singleWasm);
    expect(output.contents).toContain('new Worker(new URL(import.meta.url),{type:"module"})');
    expect(output.contents).not.toContain('new URL("demo_multi.js",import.meta.url)');
  });

  it('carries every glue when the host uses the shared `./init` selector', async () => {
    const pinned = await buildHost(packageRoot, {
      entrySpecifier: 'demo-pkg/single/init',
      wasmVariant: 'single',
    });
    const shared = await buildHost(packageRoot, {
      entrySpecifier: 'demo-pkg/init',
      requestedVariant: 'single',
      wasmVariant: 'single',
    });

    // Documented, not a defect: the selector takes the variant at runtime, so
    // no branch is statically dead and every `new URL` becomes an asset.
    expect(shared.contents).toContain(MARKERS.singleGlue);
    expect(shared.contents).toContain(MARKERS.multiGlue);
    // The unselected variant's *wasm* still stays out — that is what the
    // bundler-opaque glue import buys, and it must not regress.
    expect(shared.contents).not.toContain(MARKERS.multiWasm);
    // The pinned entry's whole reason to exist: one fewer glue on the wire.
    expect(shared.bytes - pinned.bytes).toBeGreaterThan(GLUE_PADDING.length * 0.9);
  });

  it('emits every selectable asset for the self-locating eager root', async () => {
    const output = await buildHost(packageRoot, {
      entrySpecifier: 'demo-pkg',
      eager: true,
    });

    expect(output.contents).toContain(MARKERS.singleGlue);
    expect(output.contents).toContain(MARKERS.multiGlue);
    expect(output.contents).toContain(MARKERS.singleWasm);
    expect(output.contents).toContain(MARKERS.multiWasm);
    expect(output.contents).toMatch(/file\.endsWith\(["']\.wasm["']\)/);
  });
});
