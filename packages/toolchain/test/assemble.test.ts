/**
 * `libcascade assemble` coverage.
 *
 * Driven by a synthetic two-variant dist so the suite stays fast and runs
 * without a container: the real 11 MB variant d.ts files have the same shape,
 * asserted by {@link parseVariantDts}'s anchors.
 */
import * as fs from 'node:fs';
import * as os from 'node:os';
import * as path from 'node:path';
import { pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';

import { afterAll, describe, expect, it } from 'vitest';

import {
  ASSEMBLE_OUTPUTS,
  assemble,
  collectSymbols,
  mergePackageExports,
  mergePackageFiles,
  variantInitFile,
  variantInitTypesFile,
  writePackageExports,
} from '../src/assemble/index.ts';
import { parseVariantDts, splitDeclarations } from '../src/assemble/dts.ts';
import type { BuildConfig } from '../src/config/index.ts';

/**
 * Build a d.ts in the exact shape the container's `dts` step emits.
 *
 * @param symbols - Bound symbols (classes) the variant exposes.
 * @param aliases - Type-only aliases the variant exports.
 * @returns The file contents.
 */
const variantDts = (symbols: readonly string[], aliases: readonly string[] = []): string =>
  [
    ...symbols.map((symbol) => `/** ${symbol} doc. */\ndeclare class ${symbol} {\n  delete(): void;\n}\n`),
    ...aliases.map((alias) => `type ${alias} = number;\n`),
    ...symbols.map((symbol) => `export type { ${symbol} };`),
    ...aliases.map((alias) => `export type { ${alias} };`),
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

const CONFIG: BuildConfig = {
  name: 'demo',
  bindings: ['gp_Pnt'],
  variants: [
    { name: 'single' },
    { name: 'multi', requires: ['threads'] },
  ],
};

/** A glue asset reference — what Vite's `vite:asset-import-meta-url` emits an asset for. */
const GLUE_URL_RE = /new URL\('\.\/[^']+', import\.meta\.url\)/g;

const roots: string[] = [];

/**
 * Materialise a package root with a `dist/` holding both variants' artifacts.
 *
 * @param multiSymbols - Symbols the multi variant binds (single always binds the base two).
 * @returns The package root directory.
 */
const makePackage = (multiSymbols: readonly string[] = ['gp_Pnt', 'BRepPrimAPI_MakeBox']): string => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'libcascade-assemble-'));
  roots.push(root);
  fs.mkdirSync(path.join(root, 'dist'));
  fs.writeFileSync(
    path.join(root, 'package.json'),
    JSON.stringify({
      name: 'demo-pkg',
      type: 'module',
      exports: {
        '.': './dist/demo_single.js',
        './wasm': './dist/demo_single.wasm',
        './api-reference.json': './dist/api-reference.json',
      },
      files: [
        'dist/demo_single.js',
        'dist/demo_single.d.ts',
        'dist/init.stale.js',
        'dist/api-reference.json',
        'README.md',
      ],
    }),
  );
  const write = (variant: string, symbols: readonly string[]): void => {
    fs.writeFileSync(
      path.join(root, 'dist', `demo_${variant}.d.ts`),
      variantDts(symbols, ['Alias_Only']),
    );
    fs.writeFileSync(
      path.join(root, 'dist', `demo_${variant}.build-manifest.json`),
      JSON.stringify({ symbols: { requested: [...symbols, 'OSD_ThreadPool'] } }),
    );
    fs.writeFileSync(
      path.join(root, 'dist', `demo_${variant}.js`),
      `${
        variant === 'multi'
          ? 'const spawnWorker = () => new Worker(new URL("demo_multi.js",\nimport.meta.url),{type:"module"});\n'
          : ''
      }export default async (options) => ({ variant: '${variant}', options });\n`,
    );
  };
  write('single', ['gp_Pnt', 'BRepPrimAPI_MakeBox']);
  write('multi', multiSymbols);
  return root;
};

afterAll(() => {
  for (const root of roots) fs.rmSync(root, { recursive: true, force: true });
});

describe('parseVariantDts', () => {
  it('reads the declarations, exported names, and instance members', () => {
    const parsed = parseVariantDts('single', variantDts(['gp_Pnt'], ['Alias_Only']), 'demo.d.ts');

    expect(parsed.valueSymbols).toStrictEqual(['gp_Pnt']);
    expect(parsed.exportedNames).toStrictEqual(['gp_Pnt', 'Alias_Only']);
    expect(parsed.declarations).toContain('declare class gp_Pnt');
    expect(parsed.declarations).not.toContain('export type {');
    expect(parsed.instancePrelude).toContain('FS: typeof FS;');
    expect(parsed.optionsBlock.trimEnd().endsWith('};')).toBe(true);
  });

  it('names the missing anchor when the generated shape changes', () => {
    expect(() => parseVariantDts('single', 'declare class gp_Pnt {}\n', 'demo.d.ts')).toThrow(
      /demo\.d\.ts has no `export type \{ … \}` block/,
    );
  });
});

describe('splitDeclarations', () => {
  it('keys top-level declarations by name and keeps their JSDoc', () => {
    const chunks = splitDeclarations(
      '/** doc. */\ndeclare class A {\n  x(): void;\n}\n\ntype B = number;\n',
    );

    expect([...chunks.keys()]).toStrictEqual(['A', 'B']);
    expect(chunks.get('A')).toContain('/** doc. */');
    expect(chunks.get('A')).toContain('x(): void;');
  });
});

describe('collectSymbols', () => {
  it('marks symbols only some variants bind as exclusive', () => {
    const symbols = collectSymbols([
      parseVariantDts('single', variantDts(['A', 'B']), 'single.d.ts'),
      parseVariantDts('multi', variantDts(['A', 'C']), 'multi.d.ts'),
    ]);

    expect(symbols.values).toStrictEqual(['A', 'B', 'C']);
    expect([...symbols.exclusive]).toStrictEqual([
      ['B', ['single']],
      ['C', ['multi']],
    ]);
  });
});

describe('assemble', () => {
  it('renders the d.ts and the eager barrel from one symbol list', () => {
    const root = makePackage();
    const result = assemble({ config: CONFIG, configDirectory: root });

    const types = fs.readFileSync(path.join(root, 'dist', ASSEMBLE_OUTPUTS.types), 'utf8');
    const barrel = fs.readFileSync(path.join(root, 'dist', ASSEMBLE_OUTPUTS.root), 'utf8');
    const exported = [...types.matchAll(/^ {2}(\w+),$/gm)].map((match) => match[1]);
    const barrelled = [...barrel.matchAll(/^export const (\w+) = oc\./gm)].map((match) => match[1]);

    expect(result.sharedSymbolCount).toBe(2);
    expect(result.exclusiveSymbols.size).toBe(0);
    expect(barrelled).toStrictEqual(['gp_Pnt', 'BRepPrimAPI_MakeBox']);
    // Value exports + the type-only alias, from the same union.
    expect(exported).toStrictEqual(['gp_Pnt', 'BRepPrimAPI_MakeBox', 'Alias_Only']);
    expect(types).toContain('  gp_Pnt: typeof gp_Pnt;');
    expect(barrel).toContain("import { createInstance, selectVariant } from './init.js';");
    expect(barrel).toContain("new URL('./demo_single.wasm', import.meta.url).href");
    expect(barrel).toContain("new URL('./demo_multi.wasm', import.meta.url).href");
    expect(barrel).toContain("file.endsWith('.wasm') ? wasmPath");

    // Subpath isolation: importing `./init` must never evaluate the eager root.
    const init = fs.readFileSync(path.join(root, 'dist', ASSEMBLE_OUTPUTS.init), 'utf8');
    expect(init).not.toContain(ASSEMBLE_OUTPUTS.root);
    expect(init).not.toContain('await createInstance');
  });

  it('types variant-exclusive symbols optional and unions their declarations', () => {
    const root = makePackage(['gp_Pnt', 'BRepPrimAPI_MakeBox', 'OSD_ThreadPool']);
    const result = assemble({ config: CONFIG, configDirectory: root });

    const types = fs.readFileSync(path.join(root, 'dist', ASSEMBLE_OUTPUTS.types), 'utf8');
    expect([...result.exclusiveSymbols]).toStrictEqual([['OSD_ThreadPool', ['multi']]]);
    expect(types).toContain('  OSD_ThreadPool?: typeof OSD_ThreadPool;');
    // The declaration only the multi variant carries is present exactly once.
    expect(types.match(/declare class OSD_ThreadPool /g)).toHaveLength(1);
  });

  it('loads variant glue opaquely while still emitting it as an asset', () => {
    const root = makePackage();
    assemble({ config: CONFIG, configDirectory: root });
    const init = fs.readFileSync(path.join(root, 'dist', ASSEMBLE_OUTPUTS.init), 'utf8');

    // `new URL(...)` keeps each glue a first-class bundler asset …
    expect(init).toContain("new URL('./demo_multi.js', import.meta.url).href");
    // … while the import stays opaque: a statically analysable import makes
    // bundlers re-bundle the pthread glue as a worker entry (it contains
    // `new Worker(new URL(<glue>, import.meta.url))`) and pull every variant's
    // .wasm into apps that load only one.
    expect(init).toContain('import(/* webpackIgnore: true */ /* @vite-ignore */ href)');
    expect(init).not.toContain("import('./demo_multi.js')");
    expect(init).not.toContain("import('./demo_single.js')");
  });

  it('keeps threaded glue self-references valid after bundlers hash the asset', () => {
    const root = makePackage();
    const gluePath = path.join(root, 'dist', 'demo_multi.js');

    assemble({ config: CONFIG, configDirectory: root });
    const once = fs.readFileSync(gluePath, 'utf8');
    expect(once).toContain('new Worker(new URL(import.meta.url),{type:"module"})');
    expect(once).not.toContain('new URL("demo_multi.js",import.meta.url)');

    assemble({ config: CONFIG, configDirectory: root });
    expect(fs.readFileSync(gluePath, 'utf8')).toBe(once);
  });

  it('keeps lazy and raw entries type-only while the eager root exports values', () => {
    const root = makePackage();
    assemble({ config: CONFIG, configDirectory: root });
    const read = (name: string): string =>
      fs.readFileSync(path.join(root, 'dist', name), 'utf8');

    // `import { gp_Pnt } from '<pkg>'` in type position keeps working, but the
    // lazy entries never claim to export it as a value.
    for (const entry of [ASSEMBLE_OUTPUTS.initTypes, ASSEMBLE_OUTPUTS.variantTypes]) {
      expect(read(entry)).toContain("export type * from './types.js';");
      expect(read(entry)).not.toContain("export * from './types.js';\n");
    }
    expect(read(ASSEMBLE_OUTPUTS.rootTypes)).toContain("export * from './types.js';");
  });

  it('generates one subpath per variant plus the root and init entries', () => {
    const root = makePackage();
    const { exports } = assemble({ config: CONFIG, configDirectory: root });

    expect(exports).toStrictEqual({
      '.': { types: './dist/index.d.ts', default: './dist/index.js' },
      './init': { types: './dist/init.d.ts', default: './dist/init.js' },
      './single': { types: './dist/variant.d.ts', default: './dist/demo_single.js' },
      './single/init': { types: './dist/init.single.d.ts', default: './dist/init.single.js' },
      './single/wasm': './dist/demo_single.wasm',
      './multi': { types: './dist/variant.d.ts', default: './dist/demo_multi.js' },
      './multi/init': { types: './dist/init.multi.d.ts', default: './dist/init.multi.js' },
      './multi/wasm': './dist/demo_multi.wasm',
    });
  });

  it('pins each `./<variant>/init` entry to exactly one glue asset', () => {
    const root = makePackage();
    assemble({ config: CONFIG, configDirectory: root });
    const read = (name: string): string => fs.readFileSync(path.join(root, 'dist', name), 'utf8');

    for (const [pinned, other] of [
      ['single', 'multi'],
      ['multi', 'single'],
    ] as const) {
      const entry = read(variantInitFile(pinned));
      // The whole point: one `new URL(…, import.meta.url)`. Vite emits an asset
      // for every one of those before tree-shaking, so a second would ship the
      // other variant's glue to a consumer that never loads it.
      expect(entry.match(GLUE_URL_RE)).toHaveLength(1);
      expect(entry).toContain(`new URL('./demo_${pinned}.js', import.meta.url).href`);
      expect(entry).not.toContain(`demo_${other}`);
      // It must not reach the selector through `init.js` either — that import
      // would drag the every-variant `glueUrl` straight back in.
      expect(entry).not.toContain("from './init.js'");
      expect(entry).not.toContain(`from './${ASSEMBLE_OUTPUTS.init}'`);
      expect(entry).not.toContain('SELECT_OVERRIDE');
      expect(entry).not.toContain('selectVariant');
      // …while the bundler-opaque glue import is preserved verbatim.
      expect(entry).toContain('import(/* webpackIgnore: true */ /* @vite-ignore */ glueUrl())');

      const types = read(variantInitTypesFile(pinned));
      expect(types).not.toContain('variant?:');
      expect(types).not.toContain('SELECT_OVERRIDE');
      expect(types).not.toContain('selectVariant');
    }

    expect(read(variantInitTypesFile('single'))).not.toContain('threadCount?:');
    expect(read(variantInitTypesFile('multi'))).toContain('threadCount?: number;');
    expect(read(variantInitFile('single'))).not.toContain('configureThreadPool');
    expect(read(variantInitFile('multi'))).toContain('configureThreadPool');

    // The shared selector still names every glue — that is Finding 1's
    // documented behaviour, and what the pinned entries exist to avoid.
    const init = read(ASSEMBLE_OUTPUTS.init);
    expect(init.match(GLUE_URL_RE)).toHaveLength(2);
  });

  it('rejects a runtime variant and ignores the shared selector override in pinned entries', async () => {
    const root = makePackage();
    assemble({ config: CONFIG, configDirectory: root });
    const override = Symbol.for('demo-pkg.select');

    for (const [pinned, other] of [
      ['single', 'multi'],
      ['multi', 'single'],
    ] as const) {
      const module = (await import(
        `${pathToFileURL(path.join(root, 'dist', variantInitFile(pinned))).href}?${Date.now()}`
      )) as {
        createInstance: (options?: Record<string, unknown>) => Promise<{ variant: string }>;
        selectVariant?: unknown;
        SELECT_OVERRIDE?: unknown;
      };
      expect(module.selectVariant).toBeUndefined();
      expect(module.SELECT_OVERRIDE).toBeUndefined();
      await expect(module.createInstance({ variant: other })).rejects.toThrow(
        `The "${pinned}" variant is fixed`,
      );

      Reflect.set(globalThis, override, other);
      await expect(module.createInstance()).resolves.toMatchObject({ variant: pinned });
      Reflect.deleteProperty(globalThis, override);
    }
  });

  it('exposes exact fixed-variant option types', () => {
    const root = makePackage();
    const result = assemble({ config: CONFIG, configDirectory: root });
    writePackageExports(root, result.exports, result.files);
    const host = fs.mkdtempSync(path.join(os.tmpdir(), 'libcascade-assemble-types-'));
    roots.push(host);
    fs.mkdirSync(path.join(host, 'node_modules'));
    fs.symlinkSync(root, path.join(host, 'node_modules', 'demo-pkg'), 'dir');
    fs.writeFileSync(
      path.join(host, 'consumer.ts'),
      `import { createInstance as single } from 'demo-pkg/single/init';
import { createInstance as multi } from 'demo-pkg/multi/init';

single({ wasmBinary: new Uint8Array() });
// @ts-expect-error the import path fixes the variant
single({ variant: 'single' });
// @ts-expect-error the single build has no thread pool
single({ threadCount: 2 });
multi({ threadCount: 2 });
// @ts-expect-error the import path fixes the variant
multi({ variant: 'multi' });
`,
    );
    fs.writeFileSync(path.join(host, 'globals.d.ts'), 'declare const FS: unknown;\n');
    fs.writeFileSync(
      path.join(host, 'tsconfig.json'),
      JSON.stringify({
        compilerOptions: {
          lib: ['ES2024'],
          module: 'NodeNext',
          moduleResolution: 'NodeNext',
          noEmit: true,
          strict: true,
          types: [],
        },
        include: ['consumer.ts', 'globals.d.ts'],
      }),
    );

    execFileSync(
      process.execPath,
      [path.resolve(import.meta.dirname, '../../../node_modules/typescript/bin/tsc'), '-p', host],
      { stdio: 'pipe' },
    );
  });

  it('demands a build before it packages', () => {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), 'libcascade-assemble-empty-'));
    roots.push(root);

    expect(() => assemble({ config: CONFIG, configDirectory: root })).toThrow(
      /Run `libcascade build --variant single` first/,
    );
  });

  it('emits no capability probe when no variant requires one', () => {
    const root = makePackage();
    fs.renameSync(
      path.join(root, 'dist', 'demo_multi.d.ts'),
      path.join(root, 'dist', 'demo_alt.d.ts'),
    );
    fs.renameSync(
      path.join(root, 'dist', 'demo_multi.build-manifest.json'),
      path.join(root, 'dist', 'demo_alt.build-manifest.json'),
    );
    assemble({
      config: { ...CONFIG, variants: [{ name: 'single' }, { name: 'alt' }] },
      configDirectory: root,
    });

    const init = fs.readFileSync(path.join(root, 'dist', ASSEMBLE_OUTPUTS.init), 'utf8');
    expect(init).not.toContain('SharedArrayBuffer');
    expect(init).toContain('const CAPABILITIES = {\n};');
  });

  it('only guards the thread pool when a variant binds the symbol', () => {
    const root = makePackage();
    fs.writeFileSync(
      path.join(root, 'dist', 'demo_multi.build-manifest.json'),
      JSON.stringify({ symbols: { requested: ['gp_Pnt'] } }),
    );
    fs.writeFileSync(
      path.join(root, 'dist', 'demo_single.build-manifest.json'),
      JSON.stringify({ symbols: { requested: ['gp_Pnt'] } }),
    );
    assemble({ config: CONFIG, configDirectory: root });

    const init = fs.readFileSync(path.join(root, 'dist', ASSEMBLE_OUTPUTS.init), 'utf8');
    expect(init).not.toContain('configureThreadPool');
  });
});

describe('single-variant packages', () => {
  const SINGLE_CONFIG: BuildConfig = {
    name: 'demo',
    bindings: ['gp_Pnt'],
    variants: [{ name: 'single' }],
  };

  it('emits no glue-pinned entry — `./init` already resolves exactly one glue', () => {
    const root = makePackage();
    const { exports, written } = assemble({ config: SINGLE_CONFIG, configDirectory: root });

    expect(Object.keys(exports)).toStrictEqual(['.', './init', './single', './single/wasm']);
    expect(written.map((file) => path.basename(file)).sort()).toStrictEqual(
      [...Object.values(ASSEMBLE_OUTPUTS)].sort(),
    );
  });

  /**
   * Byte-identity gate for the N=1 shape (geospec's config).
   *
   * The glue-pinned entries added for N>1 must not perturb a single-variant
   * package: its `./init` is already the narrowest possible entry. The snapshot
   * was taken before those entries existed, so any drift here is a regression.
   */
  it('renders the shared init byte-identically', () => {
    const root = makePackage();
    assemble({ config: SINGLE_CONFIG, configDirectory: root, packageName: 'demo-pkg' });

    expect(fs.readFileSync(path.join(root, 'dist', ASSEMBLE_OUTPUTS.init), 'utf8')).toMatchSnapshot();
  });
});

describe('mergePackageExports', () => {
  it('keeps hand-declared aliases the generator does not own', () => {
    const merged = mergePackageExports(
      { '.': './old.js', './wasm': './dist/demo_single.wasm', './package.json': './package.json' },
      { '.': { default: './dist/index.js' }, './multi': { default: './dist/demo_multi.js' } },
    );

    expect(merged).toStrictEqual({
      '.': { default: './dist/index.js' },
      './wasm': './dist/demo_single.wasm',
      './package.json': './package.json',
      './multi': { default: './dist/demo_multi.js' },
    });
  });

  it('replaces generated dist files and preserves hand-maintained entries', () => {
    expect(
      mergePackageFiles(
        [
          'dist/old.js',
          'dist/old.d.ts',
          'dist/demo.js.symbols',
          'dist/demo.build-manifest.json',
          'dist/demo.provenance.json',
          'dist/api-reference.json',
          'README.md',
        ],
        ['dist/index.js', 'dist/index.d.ts'],
        'dist',
      ),
    ).toStrictEqual([
      'dist/index.js',
      'dist/index.d.ts',
      'dist/demo.js.symbols',
      'dist/demo.build-manifest.json',
      'dist/demo.provenance.json',
      'dist/api-reference.json',
      'README.md',
    ]);
  });

  it('writes the merge back into the package manifest', () => {
    const root = makePackage();
    const { exports, files } = assemble({ config: CONFIG, configDirectory: root });
    writePackageExports(root, exports, files);

    const packageJson = JSON.parse(
      fs.readFileSync(path.join(root, 'package.json'), 'utf8'),
    ) as { name: string; exports: Record<string, unknown>; files: string[] };
    expect(packageJson.name).toBe('demo-pkg');
    expect(packageJson.exports['./wasm']).toBe('./dist/demo_single.wasm');
    expect(packageJson.exports['./api-reference.json']).toBe('./dist/api-reference.json');
    expect(packageJson.exports['.']).toStrictEqual({
      types: './dist/index.d.ts',
      default: './dist/index.js',
    });
    expect(packageJson.files).toContain('dist/init.single.js');
    expect(packageJson.files).toContain('dist/init.multi.js');
    expect(packageJson.files).toContain('dist/api-reference.json');
    expect(packageJson.files).toContain('README.md');
    expect(packageJson.files).not.toContain('dist/demo_single.js.symbols');
    expect(packageJson.files).not.toContain('dist/demo_single.build-manifest.json');
    expect(packageJson.files).not.toContain('dist/demo_single.provenance.json');
    expect(packageJson.files).not.toContain('dist/demo_single.d.ts');
    expect(packageJson.files).not.toContain('dist/init.stale.js');
  });
});
