import { describe, it, expect } from 'vitest';
import { promises as fs } from 'node:fs';
import { join, resolve, dirname, posix } from 'node:path';

const DOCS_DIR = resolve(import.meta.dirname, '../content/docs');
const PUBLIC_DIR = resolve(import.meta.dirname, '../public');
const API_TREE_PATH = resolve(import.meta.dirname, '../data/api-tree.json');
const EXCLUDED = new Set(['api']);

const collectMdxFiles = async (dir: string, acc: string[] = []): Promise<string[]> => {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (EXCLUDED.has(entry.name)) continue;
      await collectMdxFiles(full, acc);
    } else if (entry.name.endsWith('.mdx')) {
      acc.push(full);
    }
  }
  return acc;
};

const MD_LINK_RE = /\[[^\]]+\]\(([^)\s]+)\)/g;
// Inline code referencing a /docs/... path — these MUST be authored as Markdown
// links instead, otherwise they render as monospace text with no navigation.
const BARE_DOCS_INLINE_CODE_RE = /`\/docs\/[^`\s]+`/g;

const exists = async (path: string): Promise<boolean> => {
  try {
    await fs.access(path);
    return true;
  } catch {
    return false;
  }
};

type ApiNode = { readonly slug?: string; readonly url?: string };
type ApiTree = {
  readonly modules?: ReadonlyArray<ApiNode & {
    readonly toolkits?: ReadonlyArray<ApiNode & {
      readonly packages?: ReadonlyArray<ApiNode>;
    }>;
  }>;
};

const loadApiUrls = async (): Promise<ReadonlySet<string>> => {
  const tree = JSON.parse(await fs.readFile(API_TREE_PATH, 'utf8')) as ApiTree;
  const urls = new Set<string>(['/docs/package/api']);
  const collect = (node: ApiNode | undefined): void => {
    if (!node?.url) return;
    urls.add(node.url);
  };
  for (const ocModule of tree.modules ?? []) {
    collect(ocModule);
    for (const toolkit of ocModule.toolkits ?? []) {
      collect(toolkit);
      for (const pkg of toolkit.packages ?? []) collect(pkg);
    }
  }
  return urls;
};

const collectMdxRoutes = async (): Promise<ReadonlySet<string>> => {
  const routes = new Set<string>();
  const files = await collectMdxFiles(DOCS_DIR);
  for (const file of files) {
    const rel = file.substring(DOCS_DIR.length).replace(/\\/g, '/');
    const route = `/docs${rel.replace(/\.mdx$/, '').replace(/\/index$/, '')}`;
    routes.add(route);
  }
  return routes;
};

const routeForFile = (file: string): string => {
  const rel = file.substring(DOCS_DIR.length).replace(/\\/g, '/');
  return `/docs${rel.replace(/\.mdx$/, '').replace(/\/index$/, '')}`;
};

const docTargetRoute = (file: string, target: string): string | undefined => {
  const [pathOnly] = target.split('#');
  if (!pathOnly || pathOnly.startsWith('http')) return undefined;
  if (pathOnly === '/docs' || pathOnly.startsWith('/docs/')) return pathOnly.replace(/\/$/, '');
  if (pathOnly.startsWith('/')) return undefined;
  return posix.normalize(posix.join(posix.dirname(routeForFile(file)), pathOnly)).replace(/\/$/, '');
};

const headingSlug = (heading: string): string =>
  heading
    .replace(/<[^>]+>/g, '')
    .replace(/[`*_~]/g, '')
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .replace(/\s/g, '-');

const collectAnchors = (body: string): ReadonlySet<string> => {
  const anchors = new Set<string>();
  for (const match of body.matchAll(/^#{1,6}\s+(.+)$/gm)) anchors.add(headingSlug(match[1]!));
  for (const match of body.matchAll(/\bid=["']([^"']+)["']/g)) anchors.add(match[1]!);
  return anchors;
};

describe('link validity', () => {
  it('should never escape the fork root with ../../ relative paths', async () => {
    const escapePrefix = '..' + '/..' + '/docs/';
    const files = await collectMdxFiles(DOCS_DIR);
    const hits: string[] = [];
    for (const file of files) {
      const body = await fs.readFile(file, 'utf8');
      for (const match of body.matchAll(MD_LINK_RE)) {
        const target = match[1]!;
        if (target.includes(escapePrefix)) hits.push(`${file}: ${target}`);
      }
    }
    expect(hits, hits.join('\n')).toEqual([]);
  });

  it('should resolve every relative file link and public asset', async () => {
    const files = await collectMdxFiles(DOCS_DIR);
    const broken: string[] = [];
    for (const file of files) {
      const body = await fs.readFile(file, 'utf8');
      for (const match of body.matchAll(MD_LINK_RE)) {
        const target = match[1]!;
        if (target.startsWith('http')) continue;
        if (target.startsWith('#')) continue;
        const pathOnly = target.split(/[?#]/)[0]!;
        if (!posix.extname(pathOnly)) continue;
        const resolved = pathOnly.startsWith('/')
          ? resolve(PUBLIC_DIR, `.${pathOnly}`)
          : resolve(dirname(file), pathOnly);
        if (!(await exists(resolved))) broken.push(`${file}: ${target}`);
      }
    }
    expect(broken, broken.join('\n')).toEqual([]);
  });

  it('should resolve every relative /docs/... markdown link via the rendered content tree', async () => {
    const files = await collectMdxFiles(DOCS_DIR);
    const apiUrls = await loadApiUrls();
    const mdxRoutes = await collectMdxRoutes();
    const routeFiles = new Map(files.map((file) => [routeForFile(file), file]));
    const broken: string[] = [];
    for (const file of files) {
      const body = await fs.readFile(file, 'utf8');
      for (const match of body.matchAll(MD_LINK_RE)) {
        const target = match[1]!;
        const route = docTargetRoute(file, target);
        if (!route || /\.(mdx?|json|ts)$/.test(route)) continue;
        if (!mdxRoutes.has(route) && !apiUrls.has(route)) {
          broken.push(`${file}: ${target}`);
          continue;
        }
        const fragment = target.split('#')[1];
        const targetFile = routeFiles.get(route);
        if (!fragment || !targetFile) continue;
        const anchors = collectAnchors(await fs.readFile(targetFile, 'utf8'));
        if (!anchors.has(decodeURIComponent(fragment))) broken.push(`${file}: ${target}`);
      }
    }
    expect(broken, broken.join('\n')).toEqual([]);
  });

  // Bare /docs/... in inline backticks renders as monospace text with no
  // navigation. Authors must use Markdown link syntax instead so cross-page
  // navigation works. Relative (`./`, `../`) MDX links are preferred per the
  // documentation policy; absolute `/docs/package/api/...` is acceptable for the
  // auto-generated API tree (no source MDX to anchor a relative link).
  it('should never reference /docs/... paths inside inline backticks', async () => {
    const files = await collectMdxFiles(DOCS_DIR);
    const hits: string[] = [];
    for (const file of files) {
      const body = await fs.readFile(file, 'utf8');
      for (const match of body.matchAll(BARE_DOCS_INLINE_CODE_RE)) {
        hits.push(`${file}: ${match[0]}`);
      }
    }
    expect(hits, hits.join('\n')).toEqual([]);
  });
});
