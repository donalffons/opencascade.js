/**
 * Fork-internal shape guard for the `vite-three-glb-multi` v3 starter template.
 */
import { describe, it, expect } from 'vitest';
import * as fs from 'node:fs';
import * as path from 'node:path';

const TEMPLATE_ROOT = path.resolve(__dirname, '..');
const TEMPLATE_NAME = 'vite-three-glb-multi';
const EXPECTED_PACKAGE_NAME = 'libcascade-vite-three-glb-multi';
const INIT_PATH = path.join(TEMPLATE_ROOT, 'src', 'libcascade-init.ts');
const VITE_CONFIG_PATH = path.join(TEMPLATE_ROOT, 'vite.config.ts');

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

  it('vite.config.ts sets COOP/COEP headers and dev port 3003', () => {
    const src = fs.readFileSync(VITE_CONFIG_PATH, 'utf8');
    expect(src).toContain('Cross-Origin-Opener-Policy');
    expect(src).toContain('Cross-Origin-Embedder-Policy');
    expect(src).toContain('port: 3003');
  });

  describe('src/libcascade-init.ts multi-threaded singleton', () => {
    const readInit = (): string => fs.readFileSync(INIT_PATH, 'utf8');

    it('exists at the canonical path', () => {
      expect(fs.existsSync(INIT_PATH)).toBe(true);
    });

    it('imports createInstance and the multi wasm asset', () => {
      const src = readInit();
      expect(src).toContain("libcascade/multi/init'");
      expect(src).not.toContain("variant: 'multi'");
      expect(src).toContain('libcascade/multi/wasm?url');
    });

    it('activates OCCT parallel defaults after init', () => {
      const src = readInit();
      expect(src).toContain('BOPAlgo_Options.SetParallelMode(true)');
      expect(src).toContain('BRepMesh_IncrementalMesh.SetParallelDefault(true)');
    });

    it('declares the module-scoped `let cached` slot', () => {
      const src = readInit();
      expect(/\blet\s+cached\b/.test(src)).toBe(true);
    });

    it('gates the init call on `if (cached === null)`', () => {
      const src = readInit();
      expect(/if\s*\(\s*cached\s*===\s*null\s*\)/.test(src)).toBe(true);
    });
  });
});
