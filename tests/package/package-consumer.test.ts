import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { PACKAGE_FILES, validateExactFiles } from '../../scripts/package-candidate.mjs';

const tarball = process.env.OCJS_PACKAGE_TARBALL;
if (!tarball) throw new Error('OCJS_PACKAGE_TARBALL is required');

let workDir: string;
let packageDir: string;
let consumerPath: string;

const walk = (root: string, relative = ''): string[] => fs.readdirSync(path.join(root, relative), {
  withFileTypes: true,
}).flatMap((entry) => {
  const child = path.join(relative, entry.name);
  return entry.isDirectory() ? walk(root, child) : [child.replaceAll(path.sep, '/')];
});

beforeAll(() => {
  workDir = fs.mkdtempSync(path.join(os.tmpdir(), 'ocjs-package-'));
  fs.writeFileSync(path.join(workDir, 'package.json'), '{"private":true,"type":"module"}');
  execFileSync('npm', ['install', '--ignore-scripts', '--no-audit', '--no-fund', '--no-package-lock', path.resolve(tarball)], {
    cwd: workDir,
    stdio: 'inherit',
  });
  packageDir = path.join(workDir, 'node_modules/libcascade');
  consumerPath = path.join(workDir, 'consumer.mjs');
  fs.writeFileSync(consumerPath, `
import * as root from 'libcascade';
import * as single from 'libcascade/single';
import * as multi from 'libcascade/multi';

const results = [];
for (const [name, module, eager] of [
  ['root', root, true],
  ['single', single, false],
  ['multi', multi, false],
]) {
  const oc = eager ? module.default : await module.default();
  const threaded = oc.wasmMemory.buffer instanceof SharedArrayBuffer;
  const box = new oc.BRepPrimAPI_MakeBox(1, 2, 3);
  const shape = box.Shape();
  oc.FS.writeFile('/owned.bin', new Uint8Array([3, 1, 4, 1, 5]));
  const bytes = oc.FS.readFile('/owned.bin');
  const independentBuffer = bytes.buffer !== oc.wasmMemory.buffer;
  oc.FS.unlink('/owned.bin');
  const pool = threaded ? oc.OSD_ThreadPool.DefaultPool(-1) : undefined;
  results.push({
    name,
    defaultIsFactory: typeof module.default === 'function',
    hasNamedBox: typeof module.BRepPrimAPI_MakeBox === 'function',
    threaded,
    memory: oc.wasmMemory.buffer.constructor.name,
    shapeIsNull: shape.IsNull(),
    exceptionHelper: typeof oc.getExceptionMessage,
    independentBuffer,
    bytesAfterUnlink: [...bytes],
    threads: pool?.NbThreads() ?? 1,
  });
  pool?.delete();
  shape.delete();
  box.delete();
  oc.PThread?.terminateAllThreads?.();
}
console.log(JSON.stringify(results));
`);
});

afterAll(() => fs.rmSync(workDir, { recursive: true, force: true }));

describe('installed npm candidate', () => {
  it('contains exactly the public package contract', () => {
    validateExactFiles(walk(packageDir), PACKAGE_FILES, 'installed package');
  });

  it('resolves every public export', () => {
    const manifest = JSON.parse(fs.readFileSync(path.join(packageDir, 'package.json'), 'utf8'));
    expect(manifest.name).toBe('libcascade');
    expect(Object.keys(manifest.exports).sort()).toEqual([
      '.',
      './api-reference.json',
      './init',
      './multi',
      './multi/init',
      './multi/wasm',
      './package.json',
      './single',
      './single/init',
      './single/wasm',
      './wasm',
    ]);
    const reference = JSON.parse(
      fs.readFileSync(path.join(packageDir, 'dist', 'api-reference.json'), 'utf8'),
    );
    expect(reference).toMatchObject({
      schema: 'ocjs-api-reference-v1',
      package: { name: 'libcascade', version: manifest.version },
    });
    expect(reference.source.commit).toMatch(/^[0-9a-f]{40}$/);
  });

  it('boots the adaptive root and both raw variants without options and preserves owned file bytes', () => {
    const stdout = execFileSync(process.execPath, [consumerPath], {
      cwd: workDir,
      encoding: 'utf8',
      timeout: 120_000,
    });
    const results = JSON.parse(stdout.trim().split('\n').at(-1) ?? '[]');

    expect(results).toEqual([
      expect.objectContaining({
        name: 'root',
        defaultIsFactory: false,
        hasNamedBox: true,
        threaded: true,
        memory: 'SharedArrayBuffer',
        shapeIsNull: false,
        exceptionHelper: 'function',
        independentBuffer: true,
        bytesAfterUnlink: [3, 1, 4, 1, 5],
        threads: expect.any(Number),
      }),
      {
        name: 'single',
        defaultIsFactory: true,
        hasNamedBox: false,
        threaded: false,
        memory: 'ArrayBuffer',
        shapeIsNull: false,
        exceptionHelper: 'function',
        independentBuffer: true,
        bytesAfterUnlink: [3, 1, 4, 1, 5],
        threads: 1,
      },
      expect.objectContaining({
        name: 'multi',
        defaultIsFactory: true,
        hasNamedBox: false,
        threaded: true,
        memory: 'SharedArrayBuffer',
        shapeIsNull: false,
        exceptionHelper: 'function',
        independentBuffer: true,
        bytesAfterUnlink: [3, 1, 4, 1, 5],
        threads: expect.any(Number),
      }),
    ]);
    expect(results[0].threads).toBeGreaterThan(1);
    expect(results[2].threads).toBeGreaterThan(1);

    for (const wasm of ['opencascade_single.wasm', 'opencascade_multi.wasm']) {
      expect(fs.statSync(path.join(packageDir, 'dist', wasm)).size).toBeGreaterThan(1_000_000);
    }
  });
});
