/**
 * Fork-internal shape guard for the `vite-three-glb` v3 starter template.
 *
 * Runs from the fork's root `vitest.config.ts` (the `include` glob picks up
 * `starter-templates/<name>/tests/**` so the whole fork runs a single
 * vitest invocation — no per-template runner is wired). Assertions cover the
 * load-bearing surface a consumer first encounters: README presence, the
 * canonical `libcascade` npm dependency, the `libcascade-<name>` local package name,
 * the optional CI-gated lockfile, and the self-locating eager root.
 */
import { describe, it, expect } from 'vitest';
import * as fs from 'node:fs';
import * as path from 'node:path';

const TEMPLATE_ROOT = path.resolve(__dirname, '..');
const TEMPLATE_NAME = 'vite-three-glb';
const EXPECTED_PACKAGE_NAME = 'libcascade-vite-three-glb';
const MAIN_PATH = path.join(TEMPLATE_ROOT, 'src', 'main.ts');

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

  describe('self-locating eager root', () => {
    it('imports the ready instance from the package root', () => {
      const src = fs.readFileSync(MAIN_PATH, 'utf8');
      expect(src).toContain("import oc from 'libcascade';");
      expect(src).not.toContain('createInstance');
    });

    it('has no duplicate initializer wrapper', () => {
      expect(fs.existsSync(path.join(TEMPLATE_ROOT, 'src', 'libcascade-init.ts'))).toBe(false);
    });
  });
});
