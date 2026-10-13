import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { mkdtemp, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { tmpdir } from 'node:os';

const exec = promisify(execFile);
const FIXTURES = resolve(import.meta.dirname, '__fixtures__');
const SCRIPT = resolve(import.meta.dirname, '../../scripts/sync-api-reference.mjs');
const SHA = 'd5736f09aabbccddeeff00112233445566778899';
const HASH = 'a'.repeat(64);
const CHILD_ENV = { ...process.env, OCJS_EXPECTED_SHA: '' };

type FixturePackage = { name: string; [key: string]: unknown };
type FixtureToolkit = { packages: FixturePackage[]; [key: string]: unknown };
type FixtureModule = { toolkits: FixtureToolkit[]; [key: string]: unknown };

const createFeed = async () => {
  const index = JSON.parse(await readFile(join(FIXTURES, 'index.json'), 'utf8'));
  const shards = new Map(
    await Promise.all(
      ['FixtureModule__TKFixture__Fix', 'FixtureModule__TKFixture__Bar'].map(async (key) => [
        key,
        JSON.parse(await readFile(join(FIXTURES, `${key}.json`), 'utf8')).classes,
      ] as const),
    ),
  );
  const modules = (index.modules as FixtureModule[]).map((module) => ({
    ...module,
    toolkits: module.toolkits.map((toolkit) => ({
      ...toolkit,
      packages: toolkit.packages.map((pkg) => ({
        name: pkg.name,
        classes: shards.get(`FixtureModule__TKFixture__${pkg.name}`),
      })),
    })),
  }));
  return {
    schema: 'ocjs-api-reference-v1',
    package: { name: 'libcascade', version: '3.0.0-canary.d5736f09' },
    source: {
      repository: 'https://github.com/taucad/opencascade.js',
      commit: SHA,
      generatedAt: '2026-05-14T10:46:52.000Z',
    },
    inputs: {
      bindings: { sha256: HASH, fileCount: 3 },
      declarations: { sha256: HASH },
      symbols: { sha256: HASH },
      buildManifest: { sha256: HASH },
      provenance: { sha256: HASH },
    },
    provenance: {
      schema: 'wasm-build-provenance-v2',
      occtCommit: SHA,
      nCollectionManifest: { linked: 0, total: 0 },
    },
    manifest: {
      wasmBytes: 1,
      dtsBytes: 1,
      jsBytes: 1,
      validationPassed: true,
      requested: 3,
      compiled: 3,
      occtYaml: 'full.yml',
      builtAt: '2026-05-14T10:46:52.000Z',
    },
    totals: { modules: 1, toolkits: 1, packages: 2, classes: 3, members: 8 },
    modules,
  };
};

describe('sync-api-reference script', () => {
  let workDir: string;
  let feedPath: string;
  let dataDir: string;

  beforeAll(async () => {
    workDir = await mkdtemp(join(tmpdir(), 'ocjs-docs-sync-test-'));
    feedPath = join(workDir, 'api-reference.json');
    dataDir = join(workDir, 'data');
    await writeFile(feedPath, JSON.stringify(await createFeed()));
    await exec('node', [SCRIPT, '--from', feedPath, '--output', dataDir], { env: CHILD_ENV });
  });

  afterAll(async () => {
    await rm(workDir, { recursive: true, force: true });
  });

  it('should derive site shards and human-readable search anchors from the canonical feed', async () => {
    const index = JSON.parse(await readFile(join(dataDir, 'index.json'), 'utf8'));
    const search = JSON.parse(await readFile(join(dataDir, 'api-search-index.json'), 'utf8'));
    expect(index.source.commit).toBe(SHA);
    expect(index.project).toBe('ocjs');
    expect(index.package).toEqual({ name: 'libcascade', version: '3.0.0-canary.d5736f09' });
    expect(index.inputs.bindings.sha256).toBe(HASH);
    expect(search.find(({ title }: { title: string }) => title === 'Fix_Point.scale')?.url)
      .toContain('#Fix_Point-scale0');
  });

  it('should be byte-idempotent and remove shards deleted from the feed', async () => {
    const before = await Promise.all(
      (await readdir(dataDir)).sort().map(async (name) => [name, await readFile(join(dataDir, name), 'utf8')]),
    );
    await exec('node', [SCRIPT, '--from', feedPath, '--output', dataDir], { env: CHILD_ENV });
    const after = await Promise.all(
      (await readdir(dataDir)).sort().map(async (name) => [name, await readFile(join(dataDir, name), 'utf8')]),
    );
    expect(after).toEqual(before);

    const feed = JSON.parse(await readFile(feedPath, 'utf8'));
    feed.modules[0].toolkits[0].packages = feed.modules[0].toolkits[0].packages
      .filter(({ name }: { name: string }) => name !== 'Bar');
    feed.modules[0].toolkits[0].classCount = 2;
    feed.modules[0].classCount = 2;
    feed.totals.packages = 1;
    feed.totals.classes = 2;
    await writeFile(feedPath, JSON.stringify(feed));
    await exec('node', [SCRIPT, '--from', feedPath, '--output', dataDir], { env: CHILD_ENV });
    expect(await readdir(dataDir)).not.toContain('FixtureModule__TKFixture__Bar.json');
  });
});
