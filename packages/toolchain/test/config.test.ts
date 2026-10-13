import * as path from 'node:path';

import { describe, expect, it } from 'vitest';

import type { BuildConfig, BuildVariant } from '../src/config/index.ts';
import {
  defineBuild,
  mergeCompilerFlags,
  validateBuildConfig,
  variantCapabilities,
  variantOutputName,
  variantRequiresThreads,
} from '../src/config/index.ts';
import { mergeSettings, renderEmccFlags, serializeSetting } from '../src/config/render.ts';

const OCJS_ROOT = path.resolve(import.meta.dirname, '../../..');

const minimalConfig = defineBuild({
  name: 'demo',
  bindings: ['gp_Pnt'],
  variants: [{ name: 'single' }],
});

describe('validateBuildConfig', () => {
  it('accepts a minimal config', () => {
    expect(() => {
      validateBuildConfig(minimalConfig, OCJS_ROOT);
    }).not.toThrow();
  });

  it('rejects an empty bindings list', () => {
    expect(() => {
      validateBuildConfig({ ...minimalConfig, bindings: [] }, OCJS_ROOT);
    }).toThrow(/`bindings` is empty/);
  });

  it('rejects duplicate variant names', () => {
    expect(() => {
      validateBuildConfig(
        { ...minimalConfig, variants: [{ name: 'single' }, { name: 'single' }] },
        OCJS_ROOT,
      );
    }).toThrow(/Duplicate variant name "single"/);
  });

  it('rejects an empty variants list', () => {
    expect(() => {
      validateBuildConfig({ ...minimalConfig, variants: [] }, OCJS_ROOT);
    }).toThrow(/`variants` is empty/);
  });

  it('prints the resolved absolute path for a missing wrapper file', () => {
    expect(() => {
      validateBuildConfig(
        {
          ...minimalConfig,
          customBindings: [{ file: 'wrappers/nope.cpp', symbols: ['Nope'] }],
        },
        OCJS_ROOT,
      );
    }).toThrow(path.join(OCJS_ROOT, 'wrappers/nope.cpp'));
  });

  it('accepts a wrapper file that exists', () => {
    expect(() => {
      validateBuildConfig(
        {
          ...minimalConfig,
          customBindings: [
            { file: 'build-configs/full-bindings.cpp', symbols: ['TopoDS_Cast'], scope: 'main' },
          ],
        },
        OCJS_ROOT,
      );
    }).not.toThrow();
  });

  it('rejects a wrapper file that declares no symbols', () => {
    expect(() => {
      validateBuildConfig(
        {
          ...minimalConfig,
          customBindings: [{ file: 'build-configs/full-bindings.cpp', symbols: [] }],
        },
        OCJS_ROOT,
      );
    }).toThrow(/declares no symbols/);
  });

  it('rejects unsetting a base setting the base never declared', () => {
    expect(() => {
      validateBuildConfig(
        {
          ...minimalConfig,
          settings: { WASM_BIGINT: true },
          variants: [{ name: 'multi', settings: { EVAL_CTORS: null } }],
        },
        OCJS_ROOT,
      );
    }).toThrow(/unsets `settings.EVAL_CTORS`/);
  });

  it('aggregates every problem into one error', () => {
    expect(() => {
      validateBuildConfig({ name: '', bindings: [], variants: [] }, OCJS_ROOT);
    }).toThrow(/3 problems/);
  });
});

describe('serializeSetting', () => {
  it('renders booleans as 0/1', () => {
    expect(serializeSetting('USE_FREETYPE', true)).toBe('-sUSE_FREETYPE=1');
    expect(serializeSetting('ERROR_ON_UNDEFINED_SYMBOLS', false)).toBe(
      '-sERROR_ON_UNDEFINED_SYMBOLS=0',
    );
  });

  it('renders numbers and strings verbatim', () => {
    expect(serializeSetting('STACK_SIZE', 8_388_608)).toBe('-sSTACK_SIZE=8388608');
    expect(serializeSetting('INITIAL_MEMORY', '128MB')).toBe('-sINITIAL_MEMORY=128MB');
    expect(serializeSetting('PTHREAD_POOL_SIZE', 'navigator.hardwareConcurrency')).toBe(
      '-sPTHREAD_POOL_SIZE=navigator.hardwareConcurrency',
    );
  });

  it('renders list settings with emcc bracket syntax', () => {
    expect(serializeSetting('EXPORTED_RUNTIME_METHODS', ['FS', 'wasmMemory'])).toBe(
      '-sEXPORTED_RUNTIME_METHODS=["FS","wasmMemory"]',
    );
  });

  it('renders ENVIRONMENT as a comma list', () => {
    expect(serializeSetting('ENVIRONMENT', ['web', 'worker', 'node'])).toBe(
      '-sENVIRONMENT=web,worker,node',
    );
  });
});

describe('variant merge semantics', () => {
  const config = defineBuild({
    name: 'demo',
    bindings: ['gp_Pnt'],
    settings: { WASM_BIGINT: true, EVAL_CTORS: 2, INITIAL_MEMORY: '100MB' },
    compilerFlags: { exceptions: 'wasm', noEntry: true, simd: true, optimize: 'O3' },
    rawFlags: ['--emit-symbol-map'],
    variants: [
      { name: 'single' },
      {
        name: 'multi',
        compilerFlags: { threads: true },
        settings: { EVAL_CTORS: null, INITIAL_MEMORY: '128MB', SHARED_MEMORY: true },
      },
    ],
  });
  const [single, multi] = config.variants;

  it('keeps base settings for a variant with no overrides', () => {
    expect([...mergeSettings(config, single!)]).toStrictEqual([
      ['WASM_BIGINT', true],
      ['EVAL_CTORS', 2],
      ['INITIAL_MEMORY', '100MB'],
    ]);
  });

  it('removes a base setting when the variant sets it to null', () => {
    const merged = mergeSettings(config, multi!);
    expect(merged.has('EVAL_CTORS')).toBe(false);
  });

  it('overrides in place and appends variant-only keys', () => {
    expect([...mergeSettings(config, multi!)]).toStrictEqual([
      ['WASM_BIGINT', true],
      ['INITIAL_MEMORY', '128MB'],
      ['SHARED_MEMORY', true],
    ]);
  });

  it('inherits base compiler flags a variant does not mention', () => {
    expect(mergeCompilerFlags(config, single!)).toStrictEqual({
      exceptions: 'wasm',
      noEntry: true,
      simd: true,
      optimize: 'O3',
    });
  });

  it('adds the variant compiler flags on top, key by key', () => {
    expect(mergeCompilerFlags(config, multi!)).toStrictEqual({
      exceptions: 'wasm',
      noEntry: true,
      simd: true,
      optimize: 'O3',
      threads: true,
    });
  });

  it('lets a variant override a base compiler flag for itself only', () => {
    const debugged = { ...multi!, compilerFlags: { optimize: 'O0' } } as const;
    expect(mergeCompilerFlags(config, debugged).optimize).toBe('O0');
    expect(mergeCompilerFlags(config, single!).optimize).toBe('O3');
  });

  it('treats an explicitly undefined variant flag as absent, not as an unset', () => {
    const noisy = { ...single!, compilerFlags: { simd: undefined } };
    expect(mergeCompilerFlags(config, noisy).simd).toBe(true);
  });

  it('renders flags in the canonical order with rawFlags last', () => {
    expect(renderEmccFlags(config, multi!)).toStrictEqual([
      '-fwasm-exceptions',
      '-sWASM_BIGINT=1',
      '-sINITIAL_MEMORY=128MB',
      '-sSHARED_MEMORY=1',
      '--no-entry',
      '-pthread',
      '-msimd128',
      '-O3',
      '--emit-symbol-map',
    ]);
  });

  it('renders no -pthread for a variant that does not ask for threads', () => {
    expect(renderEmccFlags(config, single!)).not.toContain('-pthread');
  });
});

describe('variantCapabilities', () => {
  const base = defineBuild({ name: 'demo', bindings: ['gp_Pnt'], variants: [{ name: 'v' }] });
  const capabilities = (variant: BuildVariant, overrides: Partial<BuildConfig> = {}) =>
    variantCapabilities({ ...base, ...overrides }, variant);

  it('is empty for a variant with no threading anywhere', () => {
    expect(capabilities({ name: 'single' })).toStrictEqual([]);
  });

  it('infers threads from compilerFlags.threads', () => {
    expect(capabilities({ name: 'multi', compilerFlags: { threads: true } })).toStrictEqual([
      'threads',
    ]);
  });

  it('infers threads from an inherited base compilerFlags.threads', () => {
    expect(capabilities({ name: 'multi' }, { compilerFlags: { threads: true } })).toStrictEqual([
      'threads',
    ]);
  });

  it('infers threads from a -pthread raw flag, base or variant', () => {
    expect(capabilities({ name: 'multi', rawFlags: ['-pthread'] })).toStrictEqual(['threads']);
    expect(capabilities({ name: 'multi' }, { rawFlags: ['-pthread'] })).toStrictEqual(['threads']);
  });

  it('infers threads from SHARED_MEMORY or the deprecated USE_PTHREADS', () => {
    expect(capabilities({ name: 'multi', settings: { SHARED_MEMORY: true } })).toStrictEqual([
      'threads',
    ]);
    expect(capabilities({ name: 'multi', settings: { USE_PTHREADS: 1 } })).toStrictEqual(['threads']);
  });

  it('does not infer threads from a disabled setting', () => {
    expect(capabilities({ name: 'multi', settings: { SHARED_MEMORY: false } })).toStrictEqual([]);
    expect(capabilities({ name: 'multi', settings: { USE_PTHREADS: 0 } })).toStrictEqual([]);
  });

  it('honours a variant unsetting an inherited threading setting', () => {
    expect(
      capabilities({ name: 'single', settings: { SHARED_MEMORY: null } }, {
        settings: { SHARED_MEMORY: true },
      }),
    ).toStrictEqual([]);
  });

  it('unions inference with an explicit requires rather than replacing it', () => {
    expect(capabilities({ name: 'multi', requires: ['threads'] })).toStrictEqual(['threads']);
    expect(
      capabilities({ name: 'multi', requires: ['threads'], compilerFlags: { threads: true } }),
    ).toStrictEqual(['threads']);
  });

  it('cannot be opted out of by an empty requires — the flags are the cause', () => {
    expect(
      capabilities({ name: 'multi', requires: [], compilerFlags: { threads: true } }),
    ).toStrictEqual(['threads']);
    expect(
      variantRequiresThreads(base, { name: 'multi', requires: [], settings: { SHARED_MEMORY: true } }),
    ).toBe(true);
  });
});

describe('variantOutputName', () => {
  it('defaults to <name>_<variant>', () => {
    expect(variantOutputName(minimalConfig, { name: 'single' })).toBe('demo_single');
  });

  it('honours the per-variant override', () => {
    expect(variantOutputName(minimalConfig, { name: 'single', outputName: 'demo' })).toBe('demo');
  });
});
