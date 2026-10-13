/**
 * The published shape.
 *
 * Everything here is a property of the *tarball*, not of the source tree, so it
 * runs the real `npm pack --dry-run` against the build produced by the package
 * test script. The three properties it pins:
 *
 * - the package is MIT with a `LICENSE` and a `NOTICE`, and both ship;
 * - the Emscripten attribution the `NOTICE` promises is baked into
 *   `generated/emcc-settings.d.ts` by the generator, so regenerating cannot drop
 *   it (`scripts/generate-emcc-settings.mjs`);
 * - no raw TypeScript source ships, and every `exports`/`bin` target is present.
 */
import { spawnSync } from 'node:child_process';
import * as fs from 'node:fs';
import * as path from 'node:path';

import { describe, expect, it } from 'vitest';

const PACKAGE_ROOT = path.resolve(import.meta.dirname, '..');

const manifest = JSON.parse(
  fs.readFileSync(path.join(PACKAGE_ROOT, 'package.json'), 'utf8'),
) as {
  license: string;
  files: string[];
  bin: Record<string, string>;
  exports: Record<string, string | Record<string, string>>;
};

/** Every path `npm pack` would put in the tarball, package-root relative. */
const packedFiles = (): string[] => {
  const packed = spawnSync('npm', ['pack', '--dry-run', '--json', '--ignore-scripts'], {
    cwd: PACKAGE_ROOT,
    encoding: 'utf8',
  });
  expect(packed.status, packed.stderr).toBe(0);
  const [entry] = JSON.parse(packed.stdout) as [{ files: { path: string }[] }];
  return entry.files.map((file) => file.path);
};

describe('license', () => {
  it('is MIT and ships LICENSE + NOTICE', () => {
    expect(manifest.license).toBe('MIT');
    for (const file of ['LICENSE', 'NOTICE']) {
      expect(manifest.files).toContain(file);
      expect(fs.existsSync(path.join(PACKAGE_ROOT, file))).toBe(true);
    }
    expect(fs.readFileSync(path.join(PACKAGE_ROOT, 'LICENSE'), 'utf8')).toContain('MIT License');
  });

  it('carries the Emscripten attribution in the generated settings d.ts', () => {
    // MIT's retention obligation for the doc comments `emcc-settings.d.ts`
    // reproduces verbatim from Emscripten's `src/settings.js`. The generator
    // emits this header, so a regeneration cannot quietly drop it.
    const generated = fs.readFileSync(
      path.join(PACKAGE_ROOT, 'generated/emcc-settings.d.ts'),
      'utf8',
    );
    const generator = fs.readFileSync(
      path.join(PACKAGE_ROOT, 'scripts/generate-emcc-settings.mjs'),
      'utf8',
    );
    const attribution = 'Copyright (c) 2010-2014 Emscripten authors, see AUTHORS file.';
    expect(generated).toContain(attribution);
    expect(generator).toContain(attribution);
    expect(fs.readFileSync(path.join(PACKAGE_ROOT, 'NOTICE'), 'utf8')).toContain(attribution);
  });
});

describe('tarball', () => {
  const files = packedFiles();

  it('ships no raw TypeScript source', () => {
    const sources = files.filter((file) => file.endsWith('.ts') && !file.endsWith('.d.ts'));
    expect(sources).toStrictEqual([]);
    expect(files.filter((file) => file.startsWith('src/'))).toStrictEqual([]);
  });

  it('ships every exports and bin target', () => {
    const targets = [
      ...Object.values(manifest.bin),
      ...Object.values(manifest.exports).flatMap((entry) =>
        typeof entry === 'string' ? [entry] : Object.values(entry),
      ),
    ].map((target) => target.replace(/^\.\//, ''));

    expect(targets.filter((target) => !files.includes(target))).toStrictEqual([]);
  });

  it('ships the generated data layer unbundled', () => {
    // `dist/**` reads these at their published paths; bundling them would both
    // duplicate ~1.3 MB and break `libcascade migrate`, which reads the d.ts.
    for (const file of [
      'generated/emcc-settings.d.ts',
      'generated/emcc-settings.meta.json',
      'generated/images.json',
      'generated/occt-symbols.d.ts',
      'generated/symbol-catalog.json',
    ]) {
      expect(files).toContain(file);
    }
  });
}, 60_000);
