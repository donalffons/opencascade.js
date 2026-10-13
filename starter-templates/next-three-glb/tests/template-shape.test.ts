/**
 * Fork-internal shape guard for the `next-three-glb` v3 starter template.
 *
 * Runs from the fork's root `vitest.config.ts` (the `include` glob picks up
 * `starter-templates/<name>/tests/**` so the whole fork runs a single
 * vitest invocation — no per-template runner is wired). Assertions cover the
 * load-bearing surface a consumer first encounters: README presence, the
 * canonical `libcascade` npm dependency, the `libcascade-<name>` local package name,
 * the optional CI-gated lockfile, and the canonical memoized-Promise
 * singleton in `lib/libcascade-init.ts`.
 */
import { describe, it, expect } from 'vitest';
import * as fs from 'node:fs';
import * as path from 'node:path';

const TEMPLATE_ROOT = path.resolve(__dirname, '..');
const TEMPLATE_NAME = 'next-three-glb';
const EXPECTED_PACKAGE_NAME = 'libcascade-next-three-glb';
const INIT_PATH = path.join(TEMPLATE_ROOT, 'lib', 'libcascade-init.ts');

interface PackageJson {
  name?: string;
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
}

const readPackageJson = (): PackageJson => {
  const raw = fs.readFileSync(path.join(TEMPLATE_ROOT, 'package.json'), 'utf8');
  return JSON.parse(raw) as PackageJson;
};

describe(`starter-templates/${TEMPLATE_NAME} shape`, () => {
  it('ships a top-level README.md', () => {
    expect(fs.existsSync(path.join(TEMPLATE_ROOT, 'README.md'))).toBe(true);
  });

  it('package.json declares the canonical libcascade- name', () => {
    const pkg = readPackageJson();
    expect(pkg.name).toBe(EXPECTED_PACKAGE_NAME);
  });

  it('should depend on libcascade while retaining the libcascade local project name', () => {
    const pkg = readPackageJson();
    const deps = { ...(pkg.dependencies ?? {}), ...(pkg.devDependencies ?? {}) };
    expect(
      Object.prototype.hasOwnProperty.call(deps, 'libcascade'),
      `package.json must list "libcascade" as a dependency. Got keys: ${Object.keys(deps).join(', ')}`,
    ).toBe(true);
  });

  it.skipIf(process.env.CI !== 'true')(
    'commits pnpm-lock.yaml so CI consumers reproduce byte-for-byte',
    () => {
      expect(fs.existsSync(path.join(TEMPLATE_ROOT, 'pnpm-lock.yaml'))).toBe(true);
    },
  );

  describe('lib/libcascade-init.ts canonical memoized-Promise singleton', () => {
    const readInit = (): string => fs.readFileSync(INIT_PATH, 'utf8');

    it('exists at the canonical path', () => {
      expect(fs.existsSync(INIT_PATH)).toBe(true);
    });

    it('declares the module-scoped `let cached` slot', () => {
      const src = readInit();
      expect(
        /\blet\s+cached\b/.test(src),
        `lib/libcascade-init.ts must declare a module-scoped \`let cached\` slot. Got first 300 chars:\n${src.slice(0, 300)}`,
      ).toBe(true);
    });

    it('gates the init call on `if (cached === null)`', () => {
      const src = readInit();
      expect(
        /if\s*\(\s*cached\s*===\s*null\s*\)/.test(src),
        `lib/libcascade-init.ts must gate on \`if (cached === null)\`. Got first 300 chars:\n${src.slice(0, 300)}`,
      ).toBe(true);
    });

    it('invokes createInstance({...}) exactly once', () => {
      const src = readInit();
      const codeOnly = src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/[^\n]*/g, '');
      const matches = codeOnly.match(/\bcreateInstance\s*\(\s*\{/g) ?? [];
      expect(
        matches.length,
        `lib/libcascade-init.ts must invoke createInstance({...}) exactly once outside comments (got ${matches.length}). Code-only source:\n${codeOnly}`,
      ).toBe(1);
    });
  });
});
