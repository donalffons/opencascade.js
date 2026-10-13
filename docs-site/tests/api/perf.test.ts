import { describe, it, expect } from 'vitest';
import { promises as fs } from 'node:fs';
import { resolve } from 'node:path';
import { gzipSync } from 'node:zlib';

const NEXT_DIR = resolve(import.meta.dirname, '../../.next');
const SEARCH_INDEX = resolve(import.meta.dirname, '../../data/api-search-index.json');

const exists = async (path: string): Promise<boolean> => {
  try {
    await fs.access(path);
    return true;
  } catch {
    return false;
  }
};

describe('performance budget thresholds', () => {
  it('should keep the gzipped search-index payload under 6 MB', async () => {
    if (!(await exists(SEARCH_INDEX))) {
      throw new Error(
        `Search index missing at ${SEARCH_INDEX} — run \`pnpm prebuild\` before \`pnpm test --run\`.`,
      );
    }
    const raw = await fs.readFile(SEARCH_INDEX);
    const gz = gzipSync(raw);
    expect(gz.byteLength).toBeLessThan(6 * 1024 * 1024);
    expect(raw.byteLength).toBeLessThan(30 * 1024 * 1024);
  });

  it('should keep the docs route table compact: no 275 generated MDX routes', async () => {
    if (!(await exists(NEXT_DIR))) {
      throw new Error('.next/ missing — run `pnpm build` before `pnpm test:postbuild`.');
    }
    const appDir = resolve(NEXT_DIR, 'server/app');
    if (!(await exists(appDir))) {
      throw new Error(`Next app route output missing at ${appDir}.`);
    }
    const files = await fs.readdir(appDir, { recursive: true });
    // The /docs/package/api subtree should resolve via a single dynamic route, not
    // hundreds of generated per-package server chunks. Pre-rendered HTML
    // pages for the dynamic route are still allowed.
    const apiRouteSegments = files.filter(
      (f) => typeof f === 'string' && f.includes('/api/') && f.endsWith('/page.js'),
    );
    expect(apiRouteSegments.length).toBeLessThan(5);
  });
});
