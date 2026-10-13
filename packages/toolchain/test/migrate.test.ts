/**
 * Migrate every reference yml, load and render the emitted config, compare the
 * result with the source modulo documented flag normalizations, and typecheck
 * the emitted TypeScript.
 */
import { spawnSync } from 'node:child_process';
import * as fs from 'node:fs';
import * as os from 'node:os';
import * as path from 'node:path';

import { parse } from 'yaml';
import { afterAll, describe, expect, it } from 'vitest';

import { loadBuildConfig } from '../src/cli.ts';
import { renderBuild } from '../src/config/render.ts';
import { migrate, type MigrateResult, type YmlSource } from '../src/migrate/index.ts';
import {
  applyEmsdk605ExceptionDelta,
  dropDeprecatedUsePthreads,
  flagMultiset,
} from './reference-deltas.ts';

const PACKAGE_ROOT = path.resolve(import.meta.dirname, '..');
const OCJS_ROOT = path.resolve(PACKAGE_ROOT, '../..');
const REPLICAD_BUILD_CONFIG = path.resolve(
  OCJS_ROOT,
  '../replicad/packages/replicad-opencascadejs/build-config',
);
/** Frozen ytt output retained as a migration and render reference. */
const REPLICAD_REFERENCE_DIRECTORY = path.join(import.meta.dirname, 'fixtures/reference/replicad');
const TSC = path.join(OCJS_ROOT, 'node_modules/typescript/lib/tsc.js');

const scratchDirectories: string[] = [];
const scratch = (prefix: string): string => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), `libcascade-${prefix}-`));
  scratchDirectories.push(directory);
  return directory;
};

afterAll(() => {
  for (const directory of scratchDirectories) fs.rmSync(directory, { recursive: true, force: true });
});

/**
 * A reference yml, and the directory whose relative `.cpp` paths it was written
 * against.
 *
 * The replicad references were frozen into `test/fixtures/` but their
 * `wrappers/*.cpp` stayed in the replicad package, so the two are named
 * separately — the migrator resolves the wrappers from `directory`, which is
 * how it can read their symbols at all.
 */
type Reference = { readonly label: string; readonly file: string; readonly directory: string };

const REFERENCES: readonly Reference[] = [
  {
    label: 'custom_build_single.yml',
    file: path.join(REPLICAD_REFERENCE_DIRECTORY, 'custom_build_single.yml'),
    directory: REPLICAD_BUILD_CONFIG,
  },
  {
    label: 'custom_build_multi.yml',
    file: path.join(REPLICAD_REFERENCE_DIRECTORY, 'custom_build_multi.yml'),
    directory: REPLICAD_BUILD_CONFIG,
  },
  {
    label: 'full.yml',
    file: path.join(OCJS_ROOT, 'build-configs/full.yml'),
    directory: path.join(OCJS_ROOT, 'build-configs'),
  },
  {
    label: 'full_multi.yml',
    file: path.join(OCJS_ROOT, 'build-configs/full_multi.yml'),
    directory: path.join(OCJS_ROOT, 'build-configs'),
  },
];

const asSource = (reference: Reference): YmlSource => ({
  label: reference.label,
  directory: reference.directory,
  contents: fs.readFileSync(reference.file, 'utf8'),
});

/** Migrate into a fresh scratch directory and write the config there. */
const migrateToScratch = (
  references: readonly Reference[],
): { readonly configPath: string; readonly result: MigrateResult } => {
  const directory = scratch('migrate');
  const result = migrate({
    sources: references.map(asSource),
    outputDirectory: directory,
    date: '2026-08-07',
  });
  const configPath = path.join(directory, 'libcascade.config.ts');
  fs.writeFileSync(configPath, result.contents);
  return { configPath, result };
};

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

/**
 * Render every variant of a migrated config and compare each against the yml it
 * came from.
 *
 * @param references - The ymls that were migrated together.
 * @param configPath - The emitted config.
 */
const assertRoundTrip = async (
  references: readonly Reference[],
  configPath: string,
): Promise<void> => {
  const { config, configDirectory } = await loadBuildConfig(configPath);
  expect(config.variants).toHaveLength(references.length);

  for (const reference of references) {
    const expected = parse(fs.readFileSync(reference.file, 'utf8')) as ReferenceYaml;
    const rendered = config.variants
      .map((variant) =>
        renderBuild({
          config,
          variant,
          configDirectory,
          // The yml's own directory: that is what its relative cpp paths mean.
          outputDirectory: reference.directory,
        }),
      )
      .find((build) => `${build.outputName}.js` === expected.mainBuild.name);

    expect(rendered, `no rendered variant produces ${expected.mainBuild.name}`).toBeDefined();
    const actual = parse(rendered!.contents) as ReferenceYaml;

    expect(actual.mainBuild.bindings).toStrictEqual(expected.mainBuild.bindings);
    expect(actual.mainBuild.additionalBindFiles ?? []).toStrictEqual(
      expected.mainBuild.additionalBindFiles ?? [],
    );
    expect(actual.additionalCppFiles ?? []).toStrictEqual(expected.additionalCppFiles ?? []);
    expect(actual.generateTypescriptDefinitions ?? true).toBe(
      expected.generateTypescriptDefinitions ?? true,
    );
    expect(flagMultiset(actual.mainBuild.emccFlags)).toStrictEqual(
      flagMultiset(dropDeprecatedUsePthreads(applyEmsdk605ExceptionDelta(expected.mainBuild.emccFlags))),
    );
  }
};

/**
 * Typecheck an emitted config the way a consumer's editor would.
 *
 * Same mechanism as `fixtures.test.ts`: a real `tsc --project` over a real
 * project, whose only inputs are the emitted file and the `@libcascade/toolchain`
 * mapping. The scratch project lives outside the repo so no repo-wide compiler
 * option can mask a config that would not compile for the consumer who runs
 * `migrate`.
 *
 * @param configPath - The emitted config.
 * @returns tsc's output, empty when it is clean.
 */
const typecheck = (configPath: string): string => {
  const directory = path.dirname(configPath);
  fs.writeFileSync(path.join(directory, 'package.json'), '{ "type": "module" }\n');
  fs.writeFileSync(
    path.join(directory, 'tsconfig.json'),
    JSON.stringify({
      compilerOptions: {
        module: 'ESNext',
        moduleResolution: 'bundler',
        target: 'ESNext',
        lib: ['ESNext'],
        types: ['node'],
        typeRoots: [path.join(OCJS_ROOT, 'node_modules/@types')],
        strict: true,
        skipLibCheck: true,
        resolveJsonModule: true,
        allowImportingTsExtensions: true,
        noEmit: true,
        paths: { '@libcascade/toolchain': [path.join(PACKAGE_ROOT, 'src/index.ts')] },
      },
      include: ['./libcascade.config.ts'],
    }),
  );
  const result = spawnSync(process.execPath, [TSC, '--project', directory, '--pretty', 'false'], {
    encoding: 'utf8',
    cwd: directory,
  });
  return `${result.stdout}${result.stderr}`.trim();
};

describe('libcascade migrate — round trip', () => {
  for (const reference of REFERENCES) {
    it(`re-renders ${reference.label} from the config it emits`, async () => {
      const { configPath } = migrateToScratch([reference]);
      await assertRoundTrip([reference], configPath);
    });
  }

  it('re-renders both replicad ymls from one merged config', async () => {
    const replicad = REFERENCES.slice(0, 2);
    const { configPath } = migrateToScratch(replicad);
    await assertRoundTrip(replicad, configPath);
  });

  it('re-renders both libcascade ymls from one merged config', async () => {
    const libcascade = REFERENCES.slice(2);
    const { configPath } = migrateToScratch(libcascade);
    await assertRoundTrip(libcascade, configPath);
  });
});

describe('libcascade migrate — the emitted config typechecks', () => {
  it('compiles the merged replicad config with no diagnostics', () => {
    const { configPath } = migrateToScratch(REFERENCES.slice(0, 2));
    expect(typecheck(configPath)).toBe('');
  });

  it('compiles the merged libcascade config with no diagnostics', () => {
    const { configPath } = migrateToScratch(REFERENCES.slice(2));
    expect(typecheck(configPath)).toBe('');
  });
});

describe('libcascade migrate — two ymls become one config', () => {
  const { configPath, result } = migrateToScratch(REFERENCES.slice(0, 2));
  const emitted = fs.readFileSync(configPath, 'utf8');

  it('derives the config name and the variant names from the artifact names', async () => {
    const { config } = await loadBuildConfig(configPath);
    expect(config.name).toBe('replicad');
    expect(config.variants.map((variant) => variant.name)).toStrictEqual(['single', 'multi']);
    // `<name>_<variant>` reproduces both artifact names, so the escape hatch is
    // not needed and not emitted.
    expect(config.variants.map((variant) => variant.outputName)).toStrictEqual([
      undefined,
      undefined,
    ]);
    expect(emitted).not.toContain('outputName');
  });

  it('emits exactly the flags that differed as the variant deltas', async () => {
    const { config } = await loadBuildConfig(configPath);
    const [single, multi] = config.variants as [
      (typeof config.variants)[number],
      (typeof config.variants)[number],
    ];
    // The two ymls differ in exactly these: single has EVAL_CTORS=2, while
    // multi has the pthread settings and its guarded worker-count expression.
    expect(single.settings).toBeUndefined();
    expect(single.compilerFlags).toBeUndefined();
    expect(single.rawFlags).toBeUndefined();
    expect(multi.settings).toStrictEqual({
      EVAL_CTORS: null,
      SHARED_MEMORY: true,
    });
    expect(multi.compilerFlags).toStrictEqual({ threads: true });
    expect(multi.rawFlags).toStrictEqual([
      '-sPTHREAD_POOL_SIZE=globalThis.navigator?.hardwareConcurrency??4',
    ]);
    expect(config.settings?.EVAL_CTORS).toBe(2);
  });

  it('never emits `requires` — `variantCapabilities` infers it from the flags', () => {
    expect(emitted).not.toContain('requires');
  });

  it('records provenance, the modernizations, and the review list in the header', () => {
    expect(emitted).toContain('custom_build_single.yml');
    expect(emitted).toContain('custom_build_multi.yml');
    expect(emitted).toContain('@libcascade/toolchain 3.0.0-beta.0');
    expect(emitted).not.toContain('assemble.exports');
    // Both modernizations, each commented at its site.
    expect(emitted).toContain('deprecated legacy alias of `-pthread`');
    expect(emitted).toContain('emsdk 6.0.5 hard-fails a `-fwasm-exceptions` link');
    // Both ymls carry the stale exception setting; only the multi one carries
    // the pthread alias — two distinct modernizations, three applications.
    expect(new Set(result.notes.filter((note) => note.startsWith('Modernization: ')))).toHaveLength(
      2,
    );
  });

  it('reads all 18 custom symbols out of the eleven wrapper files', async () => {
    const { config } = await loadBuildConfig(configPath);
    const symbols = (config.customBindings ?? []).flatMap((binding) => binding.symbols);
    expect(config.customBindings).toHaveLength(11);
    expect(symbols).toHaveLength(18);
    // Every non-OCCT binding is accounted for — this is what makes the emitted
    // config compile.
    expect(symbols).toContain('ReplicadShapeHasher');
    expect(symbols).toContain('ReplicadBooleanBatch');
    expect(config.customBindings?.every((binding) => binding.scope === undefined)).toBe(true);
  });

  it("scopes libcascade's binding TU file to 'main'", async () => {
    const { config } = await loadBuildConfig(migrateToScratch(REFERENCES.slice(2)).configPath);
    expect(config.customBindings).toStrictEqual([
      { file: expect.stringContaining('full-bindings.cpp'), symbols: ['TopoDS_Cast'], scope: 'main' },
    ]);
  });
});

describe('libcascade migrate — failure modes', () => {
  const source = (contents: string): YmlSource => ({
    label: 'probe.yml',
    directory: REPLICAD_BUILD_CONFIG,
    contents,
  });
  const run = (contents: string): MigrateResult =>
    migrate({ sources: [source(contents)], outputDirectory: scratch('probe') });

  it('refuses an unknown top-level key rather than dropping it', () => {
    expect(() =>
      run('mainBuild:\n  name: demo_single.js\n  emccFlags: [-O3]\npostBuildHook: ./tidy.sh\n'),
    ).toThrow(/unknown top-level key\(s\): postBuildHook/);
  });

  it('refuses an unknown mainBuild key', () => {
    expect(() => run('mainBuild:\n  name: demo_single.js\n  stripDebug: true\n')).toThrow(
      /unknown key\(s\): stripDebug/,
    );
  });

  it('refuses ymls that are not variants of one build', () => {
    expect(() =>
      migrate({
        sources: [
          source('mainBuild:\n  name: a_single.js\n  bindings:\n  - symbol: gp_Pnt\n'),
          { ...source('mainBuild:\n  name: a_multi.js\n  bindings:\n  - symbol: gp_Dir\n'), label: 'other.yml' },
        ],
        outputDirectory: scratch('probe'),
      }),
    ).toThrow(/not variants of one build: they disagree on bindings/);
  });

  it('marks a wrapper whose symbols it cannot determine with a TODO, never a silent omission', () => {
    const result = run(
      'mainBuild:\n  name: demo_single.js\n  bindings:\n  - symbol: gp_Pnt\n  - symbol: MysteryWrapper\n' +
        'additionalCppFiles:\n- wrappers/absent.cpp\n',
    );
    expect(result.contents).toContain('TODO(libcascade migrate): could not read');
    expect(result.contents).toContain("{ file: '../../../");
    expect(result.contents).toContain('symbols: []');
    // The unclaimed binding is named in the header so the human has candidates.
    expect(result.contents).toContain('   - MysteryWrapper');
    expect(result.notes.some((note) => note.includes('emitted a TODO'))).toBe(true);
  });

  it('keeps an unmodelled flag verbatim in rawFlags and says so', () => {
    const result = run(
      'mainBuild:\n  name: demo_single.js\n  bindings:\n  - symbol: gp_Pnt\n' +
        '  emccFlags: [-O3, --closure=1, -sNOT_A_REAL_SETTING=7]\n',
    );
    expect(result.contents).toContain("rawFlags: ['--closure=1', '-sNOT_A_REAL_SETTING=7']");
    expect(result.notes).toContain(
      'probe.yml: mainBuild: kept `--closure=1` in rawFlags — no typed `compilerFlags` member models it.',
    );
    expect(result.notes.some((note) => note.includes('NOT_A_REAL_SETTING` is not a setting'))).toBe(
      true,
    );
  });

  it('falls back to `outputName` when the artifact names do not fit the convention', async () => {
    const directory = scratch('probe');
    const { contents } = migrate({
      sources: [
        { ...source('mainBuild:\n  name: alpha.js\n  bindings:\n  - symbol: gp_Pnt\n'), label: 'alpha.yml' },
        { ...source('mainBuild:\n  name: beta.js\n  bindings:\n  - symbol: gp_Pnt\n'), label: 'beta.yml' },
      ],
      outputDirectory: directory,
    });
    const configPath = path.join(directory, 'libcascade.config.ts');
    fs.writeFileSync(configPath, contents);
    const { config } = await loadBuildConfig(configPath);
    expect(config.name).toBe('alpha');
    expect(config.variants).toStrictEqual([
      { name: 'alpha', outputName: 'alpha' },
      { name: 'beta', outputName: 'beta' },
    ]);
  });
});

describe('libcascade migrate — CLI', () => {
  const BIN = path.join(PACKAGE_ROOT, 'bin/libcascade.mjs');
  const run = (args: readonly string[]): { status: number; stdout: string; stderr: string } => {
    const result = spawnSync(process.execPath, [BIN, ...args], {
      encoding: 'utf8',
      cwd: OCJS_ROOT,
    });
    return { status: result.status ?? -1, stdout: result.stdout, stderr: result.stderr };
  };

  it('writes the config to --out and reports its findings on stderr', () => {
    const out = path.join(scratch('cli'), 'libcascade.config.ts');
    const { status, stdout, stderr } = run([
      'migrate',
      'build-configs/full.yml',
      'build-configs/full_multi.yml',
      '--out',
      out,
    ]);
    expect(status).toBe(0);
    expect(stdout.trim()).toBe(out);
    expect(stderr).toContain('libcascade migrate: build-configs/full.yml:');
    expect(fs.readFileSync(out, 'utf8')).toContain('export default defineBuild({');
  });

  /**
   * The modernization notice needs a yml that still carries legacy syntax. The
   * live `build-configs/*.yml` no longer do — they were modernized alongside
   * `libcascade.config.ts` — so this asserts against the frozen v2 references,
   * which is the input shape `migrate` actually exists to consume.
   */
  it('reports each modernization it applied on stderr', () => {
    const out = path.join(scratch('cli-legacy'), 'libcascade.config.ts');
    const reference = path.relative(
      OCJS_ROOT,
      path.join(import.meta.dirname, 'fixtures/reference/replicad/custom_build_multi.yml'),
    );
    const { status, stderr } = run(['migrate', reference, '--out', out]);
    expect(status).toBe(0);
    // Both modernizations, each named on stderr.
    expect(stderr).toContain('Modernization: `-sUSE_PTHREADS` → `compilerFlags: { threads: true }`');
    expect(stderr).toContain('Modernization: exception helpers added');
  });

  it('never overwrites without --force', () => {
    const out = path.join(scratch('cli'), 'libcascade.config.ts');
    fs.writeFileSync(out, '// mine\n');
    expect(run(['migrate', 'build-configs/full.yml', '--out', out]).status).toBe(1);
    expect(run(['migrate', 'build-configs/full.yml', '--out', out]).stderr).toMatch(
      /Refusing to overwrite .*--force/,
    );
    expect(fs.readFileSync(out, 'utf8')).toBe('// mine\n');
    expect(run(['migrate', 'build-configs/full.yml', '--out', out, '--force']).status).toBe(0);
    expect(fs.readFileSync(out, 'utf8')).toContain('defineBuild');
  });

  it('writes to stdout with no --out', () => {
    const { status, stdout } = run(['migrate', 'build-configs/full.yml']);
    expect(status).toBe(0);
    expect(stdout).toContain("import { defineBuild } from '@libcascade/toolchain';");
  });

  it('asks for a yml when given none', () => {
    const { status, stderr } = run(['migrate']);
    expect(status).toBe(1);
    expect(stderr).toMatch(/needs at least one container yml/);
  });
});
