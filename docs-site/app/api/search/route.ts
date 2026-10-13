import 'server-only';
import { promises as fs } from 'node:fs';
import { resolve } from 'node:path';
import { initAdvancedSearch } from 'fumadocs-core/search/server';
import type { AdvancedIndex } from 'fumadocs-core/search/server';
import { source } from '../../../lib/source';

type ApiSearchEntry = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly url: string;
  readonly tag: string;
  readonly structured: {
    contents: ReadonlyArray<{ heading: string; content: string }>;
  };
};

const SEARCH_INDEX_PATH = resolve(process.cwd(), 'data/api-search-index.json');

/**
 * Read the 20 MB JSON once per server process. Lives outside the Next
 * module graph (no `import './api-search-index'`), so Turbopack / webpack
 * never have to parse or bundle it.
 */
const loadApiEntries = async (): Promise<readonly ApiSearchEntry[]> => {
  try {
    const raw = await fs.readFile(SEARCH_INDEX_PATH, 'utf8');
    return JSON.parse(raw) as readonly ApiSearchEntry[];
  } catch {
    return [];
  }
};

const toAdvancedIndex = (entry: ApiSearchEntry): AdvancedIndex => ({
  id: entry.id,
  title: entry.title,
  description: entry.description,
  url: entry.url,
  tag: entry.tag,
  structuredData: {
    headings: [],
    contents: entry.structured.contents.map((c) => ({ heading: c.heading, content: c.content })),
  },
});

const buildServer = async (): Promise<ReturnType<typeof initAdvancedSearch>> => {
  // Hand-written docs: include only pages that carry MDX-derived
  // structuredData. Virtual API pages (from `lib/api-source.ts`) have none,
  // so they're filtered out here — their content is contributed by the
  // dedicated `api-search-index.json` entries with `tag` of class | method |
  // property below.
  const sourceIndexes: AdvancedIndex[] = [];
  for (const page of source.getPages()) {
    if (page.type !== 'docs') continue;
    if (page.url.startsWith('/docs/package/api/') || page.url === '/docs/package/api') continue;
    const structuredData = page.data.structuredData;
    if (!structuredData) continue;
    sourceIndexes.push({
      id: page.url,
      title: page.data.title ?? page.url,
      description: page.data.description ?? '',
      url: page.url,
      tag: 'docs',
      structuredData,
    });
  }

  const apiEntries = await loadApiEntries();
  const apiIndexes = apiEntries.map(toAdvancedIndex);

  return initAdvancedSearch({
    indexes: [...sourceIndexes, ...apiIndexes],
    language: 'english',
  });
};

const serverPromise = buildServer();

export const GET = async (request: Request): Promise<Response> => {
  const server = await serverPromise;
  const url = new URL(request.url);
  const query = url.searchParams.get('query') ?? '';
  const tag = url.searchParams.get('tag') ?? undefined;
  const results = await server.search(query, tag ? { tag } : undefined);
  return new Response(JSON.stringify(results), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
