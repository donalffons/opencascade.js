/**
 * Contracts the committed generated layer must satisfy.
 *
 * These run without Docker: they read the committed artifacts and the two real
 * configs. The determinism check at the bottom does need the image and is gated
 * on `$LIBCASCADE_IMAGE` (the local-image dev loop) so a bare checkout never
 * pulls a 12 GB image from a unit test.
 */
import { spawnSync } from 'node:child_process';
import * as crypto from 'node:crypto';
import * as fs from 'node:fs';
import * as path from 'node:path';

import { describe, expect, it } from 'vitest';

import libcascadeConfig from '../../../libcascade.config.ts';
import replicadConfig from '../../../../replicad/packages/replicad-opencascadejs/libcascade.config.ts';

import images from '../generated/images.json' with { type: 'json' };
import settingsMeta from '../generated/emcc-settings.meta.json' with { type: 'json' };

const GENERATED_DIRECTORY = path.resolve(import.meta.dirname, '../generated');
const OCJS_ROOT = path.resolve(import.meta.dirname, '../../..');

const readGenerated = (fileName: string): string =>
  fs.readFileSync(path.join(GENERATED_DIRECTORY, fileName), 'utf8');

/** The `OcctSymbol` union members, read back out of the emitted d.ts. */
const occtSymbols = new Set(
  [...readGenerated('occt-symbols.d.ts').matchAll(/^ {2}\| '([^']+)'[;]?$/gm)].map(
    (match) => match[1]!,
  ),
);

const catalog = JSON.parse(readGenerated('symbol-catalog.json')) as {
  symbols: { name: string; kind: string; parents?: string[]; referencedTypes?: string[] }[];
};

const customSymbols = (config: typeof libcascadeConfig): Set<string> =>
  new Set((config.customBindings ?? []).flatMap((customBinding) => customBinding.symbols));

describe('occt-symbols.d.ts', () => {
  it('covers every symbol libcascade full binds', () => {
    // The blueprint's acceptance number: the full build requests 4,496 symbols
    // and every one of them must be expressible in a typed config.
    expect(libcascadeConfig.bindings).toHaveLength(4496);
    expect(libcascadeConfig.bindings.filter((symbol) => !occtSymbols.has(symbol))).toStrictEqual([]);
  });

  it('covers every OCCT symbol replicad binds', () => {
    const custom = customSymbols(replicadConfig);
    expect(
      replicadConfig.bindings.filter((symbol) => !occtSymbols.has(symbol) && !custom.has(symbol)),
    ).toStrictEqual([]);
  });

  it('includes typedef aliases and Embind builtins, not just api-reference classes', () => {
    // `TopoDS` is an Embind builtin and `TColgp_Array1OfPnt` an OCCT typedef;
    // neither appears as a class in api-reference.json, and replicad binds both.
    expect(occtSymbols.has('TopoDS')).toBe(true);
    expect(occtSymbols.has('TColgp_Array1OfPnt')).toBe(true);
  });

  it('never lists a custom-binding symbol', () => {
    for (const symbol of customSymbols(replicadConfig)) {
      expect(occtSymbols.has(symbol)).toBe(false);
    }
  });

  it('is sorted and free of duplicates', () => {
    const listed = [...readGenerated('occt-symbols.d.ts').matchAll(/^ {2}\| '([^']+)'[;]?$/gm)].map(
      (match) => match[1]!,
    );
    expect(listed).toStrictEqual([...listed].sort());
    expect(listed).toHaveLength(occtSymbols.size);
  });
});

describe('symbol-catalog.json', () => {
  it('describes exactly the symbols in the union', () => {
    expect(new Set(catalog.symbols.map((symbol) => symbol.name))).toStrictEqual(occtSymbols);
  });

  it('carries ancestor chains and member-referenced types', () => {
    const shape = catalog.symbols.find((symbol) => symbol.name === 'TopoDS_Solid');
    expect(shape?.parents).toContain('TopoDS_Shape');
    const maker = catalog.symbols.find((symbol) => symbol.name === 'BRepPrimAPI_MakeBox');
    expect(maker?.referencedTypes).toContain('gp_Pnt');
  });

  it('references only symbols that exist in the universe', () => {
    const dangling = catalog.symbols
      .flatMap((symbol) => symbol.referencedTypes ?? [])
      .filter((name) => !occtSymbols.has(name));
    expect([...new Set(dangling)]).toStrictEqual([]);
  });

  it('keeps ancestors verbatim, including non-bindable ones', () => {
    // Ancestor chains are reported as OCCT declares them, so a chain is never
    // silently shortened: `std::exception`, filtered-out classes, and the like
    // stay visible. W5's closure intersects against the bindings list anyway.
    const failure = catalog.symbols.find((symbol) => symbol.name === 'Standard_Failure');
    expect(failure?.parents).toContain('exception');
    expect(occtSymbols.has('exception')).toBe(false);
  });

  it('carries no prose', () => {
    expect(readGenerated('symbol-catalog.json')).not.toMatch(/"summary"|"comment"/);
  });
});

describe('emcc-settings', () => {
  it('types every setting the two real configs use', () => {
    const declaration = readGenerated('emcc-settings.d.ts');
    const used = new Set([
      ...Object.keys(libcascadeConfig.settings ?? {}),
      ...Object.keys(replicadConfig.settings ?? {}),
      ...[...libcascadeConfig.variants, ...replicadConfig.variants].flatMap((variant) =>
        Object.keys(variant.settings ?? {}),
      ),
    ]);
    expect([...used].filter((setting) => !declaration.includes(`readonly ${setting}?:`))).toStrictEqual(
      [],
    );
  });

  it('applies the memory-size grammar to the whole TOTAL_MEMORY family', () => {
    expect([...settingsMeta.memorySizes].sort()).toStrictEqual([
      'BINARYEN_MEM_MAX',
      'INITIAL_MEMORY',
      'MAXIMUM_MEMORY',
      'STACK_SIZE',
      'TOTAL_MEMORY',
      'TOTAL_STACK',
      'WASM_MEM_MAX',
    ]);
  });

  it('drives the renderer serialisation buckets from generated data', () => {
    expect(settingsMeta.commaLists).toStrictEqual(['ENVIRONMENT']);
    expect(settingsMeta.bracketLists).toContain('EXPORTED_RUNTIME_METHODS');
    expect(settingsMeta.bracketLists).toContain('EXPORTED_FUNCTIONS');
    expect(settingsMeta.boolInts).toContain('EVAL_CTORS');
  });

  it('carries the settings.js documentation onto the fields', () => {
    expect(readGenerated('emcc-settings.d.ts')).toMatch(
      /\* The initial amount of memory to use\.[\s\S]*?readonly INITIAL_MEMORY\?: MemorySize;/,
    );
  });

  it('limits JSDoc suppressions to the two copied Emscripten field regions', () => {
    const declaration = readGenerated('emcc-settings.d.ts');
    const disable =
      '/* eslint-disable ocjs-lint/jsdoc-quality -- copied verbatim from pinned Emscripten settings.js */';
    const enable = '/* eslint-enable ocjs-lint/jsdoc-quality */';
    const directives = declaration
      .split('\n')
      .filter((line) => line.includes('eslint-') && line.includes('ocjs-lint/jsdoc-quality'));

    expect(directives).toStrictEqual([disable, enable, disable, enable]);
  });

  it('records the emsdk version the settings came from', () => {
    expect(settingsMeta.emsdkVersion).toMatch(/^\d+\.\d+\.\d+$/);
    expect(readGenerated('emcc-settings.d.ts')).toContain(`emsdk ${settingsMeta.emsdkVersion}`);
  });
});

describe('images.json', () => {
  it('pins both variants by digest', () => {
    expect(images.repository).toBe('ghcr.io/taucad/opencascade.js');
    for (const image of [images.singleThreaded, images.multiThreaded]) {
      expect(image.digest).toMatch(/^sha256:[0-9a-f]{64}$/);
      expect(image.tag).not.toBe('');
    }
  });
});

/**
 * Regenerating must be a no-op on a clean tree — stable ordering, no timestamps.
 * Needs the image, so it only runs in the local-image dev loop.
 */
describe.skipIf(!process.env.LIBCASCADE_IMAGE)('generate:toolchain determinism', () => {
  const hashGenerated = (): Record<string, string> =>
    Object.fromEntries(
      fs
        .readdirSync(GENERATED_DIRECTORY)
        .sort()
        .map((entry) => [
          entry,
          crypto.hash('sha256', fs.readFileSync(path.join(GENERATED_DIRECTORY, entry)), 'hex'),
        ]),
    );

  it(
    'produces byte-identical artifacts twice in a row, matching what is committed',
    () => {
      const committed = hashGenerated();
      for (let pass = 0; pass < 2; pass += 1) {
        const result = spawnSync('npm', ['run', 'generate:toolchain'], {
          cwd: OCJS_ROOT,
          encoding: 'utf8',
        });
        expect(result.status, `${result.stdout}${result.stderr}`).toBe(0);
        expect(hashGenerated()).toStrictEqual(committed);
      }
    },
    600_000,
  );
});
