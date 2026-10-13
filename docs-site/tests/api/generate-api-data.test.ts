import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { promises as fs } from 'node:fs';
import { mkdtemp, rm, mkdir, copyFile, readdir } from 'node:fs/promises';
import { join, resolve, basename } from 'node:path';
import { tmpdir } from 'node:os';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const exec = promisify(execFile);
const FIXTURES = resolve(import.meta.dirname, '__fixtures__');
const SCRIPT = resolve(import.meta.dirname, '../../scripts/generate-api-data.mjs');

describe('generate-api-data script', () => {
  let workDir: string;
  let dataDir: string;

  beforeAll(async () => {
    workDir = await mkdtemp(join(tmpdir(), 'ocjs-data-'));
    dataDir = join(workDir, 'data');
    await mkdir(dataDir, { recursive: true });
    for (const name of await readdir(FIXTURES)) {
      await copyFile(join(FIXTURES, name), join(dataDir, basename(name)));
    }
    await exec('node', [SCRIPT, '--in', dataDir]);
  }, 30_000);

  afterAll(async () => {
    await rm(workDir, { recursive: true, force: true });
  });

  it('should write api-tree.json with module / toolkit / package navigation', async () => {
    const tree = JSON.parse(await fs.readFile(join(dataDir, 'api-tree.json'), 'utf8'));
    expect(tree.schema).toBe(1);
    expect(tree.modules).toHaveLength(1);
    const [fixtureModule] = tree.modules;
    expect(fixtureModule.name).toBe('FixtureModule');
    expect(fixtureModule.slug).toBe('fixture-module');
    expect(fixtureModule.toolkits).toHaveLength(1);
    const [toolkit] = fixtureModule.toolkits;
    expect(toolkit.name).toBe('TKFixture');
    expect(toolkit.slug).toBe('tk-fixture');
    expect(toolkit.packages.map((p: { slug: string }) => p.slug)).toEqual(['fix', 'bar']);
    const fix = toolkit.packages[0];
    expect(fix.shardKey).toBe('FixtureModule__TKFixture__Fix');
    expect(fix.url).toBe('/docs/package/api/fixture-module/tk-fixture/fix');
    expect(fix.classNames).toContain('Fix_Point');
    expect(fix.classNames).toContain('Fix_Vec');
  });

  it('should write api-type-index.json with one entry per bound class plus a denylist', async () => {
    const idx = JSON.parse(await fs.readFile(join(dataDir, 'api-type-index.json'), 'utf8'));
    expect(idx.schema).toBe(1);
    expect(idx.denylist).toContain('void');
    expect(idx.denylist).toContain('number');
    const entries = idx.entries as Array<[string, { url: string; fragment: string; shard: string }]>;
    const names = entries.map(([n]) => n);
    expect(names).toContain('Fix_Point');
    expect(names).toContain('Fix_Vec');
    expect(names).toContain('Bar_Tool');
    const fixPoint = entries.find(([n]) => n === 'Fix_Point')!;
    expect(fixPoint[1].url).toBe('/docs/package/api/fixture-module/tk-fixture/fix');
  });

  it('should write api-search-index.json as a flat array of search entries with class | method | property tags', async () => {
    const entries = JSON.parse(
      await fs.readFile(join(dataDir, 'api-search-index.json'), 'utf8'),
    ) as Array<{ tag: string; url: string; title: string }>;
    expect(entries.length).toBe(5);
    expect(entries.find((e) => e.title === 'Fix_Point')!.tag).toBe('class');
    expect(entries.find((e) => e.title === 'translate')!.tag).toBe('method');
    expect(entries.every((e) => e.url.startsWith('/docs/package/api/'))).toBe(true);
    const tags = new Set(entries.map((e) => e.tag));
    for (const tag of tags) {
      expect(['class', 'method', 'property']).toContain(tag);
    }
    expect(tags.has('class')).toBe(true);
    expect(tags.has('method')).toBe(true);
  });

  it('should NOT emit any MDX stubs or TS modules (content/docs/package/api stays empty, lib/api-*.ts stays unwritten)', async () => {
    const files = await readdir(dataDir);
    for (const file of files) {
      expect(file).not.toMatch(/\.mdx$/);
      expect(file).not.toMatch(/\.ts$/);
    }
    expect(files).toContain('api-tree.json');
    expect(files).toContain('api-type-index.json');
    expect(files).toContain('api-search-index.json');
  });
});
