import { describe, it, expect } from 'vitest';
import { promises as fs } from 'node:fs';
import { resolve } from 'node:path';

const DOCS_ROUTE = resolve(import.meta.dirname, '../../app/llms.mdx/docs/[[...slug]]/route.ts');
const API_ROUTE = resolve(import.meta.dirname, '../../app/llms.mdx/docs/package/api/[[...slug]]/route.ts');
const API_PAGE = resolve(import.meta.dirname, '../../app/docs/package/api/[[...slug]]/page.tsx');
const NEXT_CONFIG = resolve(import.meta.dirname, '../../next.config.ts');

describe('docs/api .mdx routing', () => {
  it('should serve hand-written pages from the catch-all but exclude virtual API entries', async () => {
    const body = await fs.readFile(DOCS_ROUTE, 'utf8');
    expect(body).toContain("'Content-Type': 'text/plain; charset=utf-8'");
    expect(body).toMatch(/source\.getPage\(/);
    expect(body).toMatch(/notFound\(\)/);
    expect(body).toMatch(/source\s*\.generateParams\(\)/);
    expect(body).toContain("resolved.slug?.[0] === 'package' && resolved.slug?.[1] === 'api'");
    expect(body).toContain("entry.slug[0] === 'package' && entry.slug[1] === 'api'");
  });

  it('should serve generated API package pages from a dedicated route synthesising Markdown from shard JSON', async () => {
    const body = await fs.readFile(API_ROUTE, 'utf8');
    expect(body).toContain("'Content-Type': 'text/plain; charset=utf-8'");
    expect(body).toContain('shardToMarkdown');
    expect(body).toContain('loadShard');
    expect(body).toContain('enumerateApiRoutes');
  });

  it('should expose a dedicated page route for the API tree with generateStaticParams pre-rendering', async () => {
    const body = await fs.readFile(API_PAGE, 'utf8');
    expect(body).toContain('enumerateApiRoutes');
    expect(body).toContain('resolveApiRoute');
    expect(body).toContain('generateStaticParams');
    expect(body).toContain('ApiPackagePage');
  });

  it("should rewrite user-facing /docs/**/<path>.mdx URLs to the /llms.mdx/docs/** handlers (Fumadocs convention; sidesteps Next's broken [[...slug]].mdx catch-all extension routing)", async () => {
    const body = await fs.readFile(NEXT_CONFIG, 'utf8');
    expect(body).toContain('async rewrites()');
    expect(body).toMatch(/source:\s*'\/docs\.mdx'/);
    expect(body).toMatch(/source:\s*'\/docs\/package\/api\.mdx'/);
    expect(body).toMatch(/source:\s*'\/docs\/:path\+\.mdx'/);
    expect(body).toMatch(/destination:\s*'\/llms\.mdx\/docs'/);
    expect(body).toMatch(/source:\s*'\/docs\/package\/api\.mdx'/);
    expect(body).toMatch(/destination:\s*'\/llms\.mdx\/docs\/package\/api'/);
    expect(body).toMatch(/destination:\s*'\/llms\.mdx\/docs\/:path\+'/);
  });
});
