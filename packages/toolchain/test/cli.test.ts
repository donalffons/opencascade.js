/**
 * End-to-end coverage for the `libcascade` bin through `--render-only`, which is
 * the Docker-free path CI and reviewers use.
 */
import { execFileSync } from 'node:child_process';
import * as fs from 'node:fs';
import * as path from 'node:path';

import { parse } from 'yaml';
import { afterAll, describe, expect, it } from 'vitest';

import { assertManifestPassed, resolveToolchainAlias } from '../src/cli.ts';

const PACKAGE_ROOT = path.resolve(import.meta.dirname, '..');
const FIXTURE_DIR = path.join(PACKAGE_ROOT, 'test/fixture');
const SCRATCH_DIR = path.join(FIXTURE_DIR, '.libcascade');
const BIN = path.join(PACKAGE_ROOT, 'bin/libcascade.mjs');

const runCli = (args: readonly string[]): string =>
  execFileSync(process.execPath, [BIN, ...args], { encoding: 'utf8', cwd: PACKAGE_ROOT });

afterAll(() => {
  fs.rmSync(SCRATCH_DIR, { recursive: true, force: true });
});

describe('libcascade build --render-only', () => {
  it('renders one yml per variant and prints their paths', () => {
    const stdout = runCli([
      'build',
      '--config',
      path.join(FIXTURE_DIR, 'libcascade.config.ts'),
      '--render-only',
    ]);

    const printed = stdout.trim().split('\n');
    expect(printed).toStrictEqual([
      path.join(SCRATCH_DIR, 'demo_single.yml'),
      path.join(SCRATCH_DIR, 'demo_multi.yml'),
    ]);
    for (const rendered of printed) expect(fs.existsSync(rendered)).toBe(true);

    const single = parse(fs.readFileSync(printed[0]!, 'utf8'));
    expect(single.mainBuild.name).toBe('demo_single.js');
    expect(single.mainBuild.bindings).toStrictEqual([
      { symbol: 'gp_Pnt' },
      { symbol: 'BRepPrimAPI_MakeBox' },
      { symbol: 'DemoWrapper' },
    ]);
    // Rendered next to the config's `.libcascade/`, so the wrapper is one level up.
    expect(single.additionalCppFiles).toStrictEqual(['../wrappers/demo.cpp']);
    expect(single.mainBuild.emccFlags).toContain('-sEVAL_CTORS=2');

    const multi = parse(fs.readFileSync(printed[1]!, 'utf8'));
    expect(multi.mainBuild.emccFlags).not.toContain('-sEVAL_CTORS=2');
    expect(multi.mainBuild.emccFlags).toContain('-sENVIRONMENT=web,worker,node');
    expect(multi.mainBuild.emccFlags.at(-1)).toBe('-pthread');
  });

  it('renders a single variant with --variant', () => {
    const stdout = runCli([
      'build',
      '--config',
      path.join(FIXTURE_DIR, 'libcascade.config.ts'),
      '--variant',
      'multi',
      '--render-only',
    ]);
    expect(stdout.trim()).toBe(path.join(SCRATCH_DIR, 'demo_multi.yml'));
  });

  it('lists the declared variants when --variant is unknown', () => {
    expect(() =>
      runCli([
        'build',
        '--config',
        path.join(FIXTURE_DIR, 'libcascade.config.ts'),
        '--variant',
        'nope',
        '--render-only',
      ]),
    ).toThrow(/Unknown variant "nope"\. Declared variants: single, multi\./);
  });

  it('names the resolved path when --config points nowhere', () => {
    expect(() => runCli(['build', '--config', 'does-not-exist.config.ts'])).toThrow(
      /Config file not found: .*does-not-exist\.config\.ts/,
    );
  });

  it('prints usage with --help', () => {
    expect(runCli(['--help'])).toMatch(/libcascade build \[options\]/);
  });
});

describe('resolveToolchainAlias', () => {
  it('emits no alias when the config directory resolves the package itself', () => {
    // This package's own directory resolves `@libcascade/toolchain` through the
    // repo's node_modules, so an installed consumer never gets the fallback.
    expect(resolveToolchainAlias(PACKAGE_ROOT)).toStrictEqual({});
  });

  it('falls back to the running CLI when the config cannot resolve the package', () => {
    const alias = resolveToolchainAlias(path.parse(PACKAGE_ROOT).root);
    expect(Object.keys(alias)).toStrictEqual([
      '@libcascade/toolchain',
      '@libcascade/toolchain/driver',
    ]);
    expect(fs.existsSync(alias['@libcascade/toolchain'] ?? '')).toBe(true);
  });
});

describe('assertManifestPassed', () => {
  const manifestPath = path.join(SCRATCH_DIR, 'demo_single.build-manifest.json');

  const writeManifest = (manifest: unknown): string => {
    fs.mkdirSync(SCRATCH_DIR, { recursive: true });
    fs.writeFileSync(manifestPath, JSON.stringify(manifest));
    return manifestPath;
  };

  it('passes when the container validated the build', () => {
    expect(() => {
      assertManifestPassed(writeManifest({ validation_passed: true }));
    }).not.toThrow();
  });

  it('reports the missing-symbol and binding-report deltas', () => {
    const written = writeManifest({
      validation_passed: false,
      symbols: { requested: ['gp_Pnt', 'gp_Dir'], missing: ['gp_Dir'] },
      binding_report: {
        failed: 1,
        total: 2,
        failures: [{ file: 'myMain.h/gp_Dir.cpp', message: 'compile error' }],
      },
    });
    expect(() => {
      assertManifestPassed(written);
    }).toThrow(/missing symbols \(1\): gp_Dir[\s\S]*binding failures: 1 of 2[\s\S]*BindingError/);
  });

  it('explains a missing manifest', () => {
    expect(() => {
      assertManifestPassed(path.join(SCRATCH_DIR, 'absent.build-manifest.json'));
    }).toThrow(/Build produced no manifest/);
  });
});
