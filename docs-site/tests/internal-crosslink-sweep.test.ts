import { describe, it, expect } from 'vitest';
import { promises as fs } from 'node:fs';
import { join, resolve } from 'node:path';

const DOCS_DIR = resolve(import.meta.dirname, '../content/docs');
const LEGACY_PREFIX = /^\/docs\/(getting-started|guides|concepts|reference|examples|api)\//;

const collectMdxFiles = async (dir: string, acc: string[] = []): Promise<string[]> => {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) await collectMdxFiles(full, acc);
    else if (entry.name.endsWith('.mdx')) acc.push(full);
  }
  return acc;
};

describe('internal cross-link sweep', () => {
  it('should not reference unprefixed legacy /docs/<category>/ paths in MDX bodies', async () => {
    const files = await collectMdxFiles(DOCS_DIR);
    const hits: string[] = [];
    for (const file of files) {
      const body = await fs.readFile(file, 'utf8');
      for (const line of body.split('\n')) {
        const match = line.match(/\/docs\/[^\s"'`)]+/g);
        if (!match) continue;
        for (const target of match) {
          if (LEGACY_PREFIX.test(`${target}/`)) hits.push(`${file}: ${target}`);
        }
      }
    }
    expect(hits, hits.join('\n')).toEqual([]);
  });
});
