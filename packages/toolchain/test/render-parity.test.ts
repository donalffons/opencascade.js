/**
 * Compare rendered configs with the hand-maintained and ytt references.
 * Bindings and C++ file lists retain exact order. `emccFlags` compare as a
 * multiset after normalizing bare boolean settings, redundant pthread aliases,
 * and exception-helper exports through `reference-deltas.ts`. Exact rendered
 * flag order is covered by `config.test.ts`.
 */
import * as fs from 'node:fs';
import * as path from 'node:path';

import { parse } from 'yaml';
import { describe, expect, it } from 'vitest';

import type { BuildConfig, BuildVariant } from '../src/config/index.ts';
import { renderBuild } from '../src/config/render.ts';
import {
  applyEmsdk605ExceptionDelta,
  dropDeprecatedUsePthreads,
  flagMultiset,
} from './reference-deltas.ts';

import libcascadeConfig from '../../../libcascade.config.ts';
import replicadConfig from '../../../../replicad/packages/replicad-opencascadejs/libcascade.config.ts';

const OCJS_ROOT = path.resolve(import.meta.dirname, '../../..');
const REPLICAD_ROOT = path.resolve(
  import.meta.dirname,
  '../../../../replicad/packages/replicad-opencascadejs',
);

/** Frozen ytt outputs used only as renderer parity references. */
const REPLICAD_REFERENCE_DIRECTORY = path.join(import.meta.dirname, 'fixtures/reference/replicad');

type ReferenceYaml = {
  mainBuild: {
    name: string;
    bindings: { symbol: string }[];
    emccFlags: string[];
    additionalBindFiles?: string[];
  };
  additionalCppFiles?: string[];
  generateTypescriptDefinitions?: boolean;
};

const assertParity = (
  config: BuildConfig,
  variant: BuildVariant,
  configDirectory: string,
  referencePath: string,
  options: {
    readonly referenceFlagRewrite?: (flags: readonly string[]) => string[];
    /**
     * Directory the reference yml was written for, when it no longer lives
     * there. Relative `additionalBindFiles` paths are rendered from it.
     * @defaultValue the reference file's own directory
     */
    readonly outputDirectory?: string;
  } = {},
): void => {
  const reference = parse(fs.readFileSync(referencePath, 'utf8')) as ReferenceYaml;
  if (options.referenceFlagRewrite) {
    reference.mainBuild.emccFlags = options.referenceFlagRewrite(reference.mainBuild.emccFlags);
  }
  const rendered = renderBuild({
    config,
    variant,
    configDirectory,
    outputDirectory: options.outputDirectory ?? path.dirname(referencePath),
  });
  const actual = parse(rendered.contents) as ReferenceYaml;

  expect(actual.mainBuild.name).toBe(reference.mainBuild.name);
  expect(actual.mainBuild.bindings).toStrictEqual(reference.mainBuild.bindings);
  expect(actual.mainBuild.additionalBindFiles ?? []).toStrictEqual(
    reference.mainBuild.additionalBindFiles ?? [],
  );
  expect(actual.additionalCppFiles ?? []).toStrictEqual(reference.additionalCppFiles ?? []);
  expect(actual.generateTypescriptDefinitions ?? true).toBe(
    reference.generateTypescriptDefinitions ?? true,
  );
  expect(flagMultiset(actual.mainBuild.emccFlags)).toStrictEqual(
    flagMultiset(reference.mainBuild.emccFlags),
  );
};

const variantNamed = (config: BuildConfig, name: string): BuildVariant => {
  const variant = config.variants.find((candidate) => candidate.name === name);
  if (variant === undefined) throw new Error(`no variant "${name}"`);
  return variant;
};

describe('libcascade.config.ts', () => {
  it('renders build-configs/full.yml', () => {
    assertParity(
      libcascadeConfig,
      variantNamed(libcascadeConfig, 'single'),
      OCJS_ROOT,
      path.join(OCJS_ROOT, 'build-configs/full.yml'),
    );
  });

  it('renders build-configs/full_multi.yml', () => {
    assertParity(
      libcascadeConfig,
      variantNamed(libcascadeConfig, 'multi'),
      OCJS_ROOT,
      path.join(OCJS_ROOT, 'build-configs/full_multi.yml'),
    );
  });

  it('names both variants by the `<name>_<variant>` convention', () => {
    const rendered = renderBuild({
      config: libcascadeConfig,
      variant: variantNamed(libcascadeConfig, 'single'),
      configDirectory: OCJS_ROOT,
      outputDirectory: path.join(OCJS_ROOT, '.libcascade'),
    });
    expect(rendered.fileName).toBe('opencascade_single.yml');
    expect(rendered.outputName).toBe('opencascade_single');
  });

  it('rewrites cpp paths relative to the yml directory', () => {
    const rendered = renderBuild({
      config: libcascadeConfig,
      variant: variantNamed(libcascadeConfig, 'single'),
      configDirectory: OCJS_ROOT,
      outputDirectory: path.join(OCJS_ROOT, '.libcascade'),
    });
    const document = parse(rendered.contents) as ReferenceYaml;
    expect(document.mainBuild.additionalBindFiles).toStrictEqual([
      '../build-configs/full-bindings.cpp',
    ]);
  });
});

describe('replicad libcascade.config.ts', () => {
  const assertReplicadParity = (variant: string, referenceName: string): void => {
    assertParity(
      replicadConfig,
      variantNamed(replicadConfig, variant),
      REPLICAD_ROOT,
      path.join(REPLICAD_REFERENCE_DIRECTORY, referenceName),
      {
        referenceFlagRewrite: (flags) =>
          dropDeprecatedUsePthreads(applyEmsdk605ExceptionDelta(flags)),
        outputDirectory: path.join(REPLICAD_ROOT, 'build-config'),
      },
    );
  };

  it('renders the retired custom_build_single.yml (modulo the documented deltas)', () => {
    assertReplicadParity('single', 'custom_build_single.yml');
  });

  it('renders the retired custom_build_multi.yml (modulo the documented deltas)', () => {
    assertReplicadParity('multi', 'custom_build_multi.yml');
  });

  it('declares every custom symbol that appears in bindings', () => {
    const declared = new Set(
      (replicadConfig.customBindings ?? []).flatMap((customBinding) => customBinding.symbols),
    );
    const bound = new Set(replicadConfig.bindings);
    expect([...declared].filter((symbol) => !bound.has(symbol))).toStrictEqual([]);
    // The 18 `Replicad*` / `*Wrapper` classes the 11
    // wrapper files bind (the blueprint's "17" undercounted by one).
    expect(declared.size).toBe(18);
  });
});
