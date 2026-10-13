#!/usr/bin/env node
/**
 * Generate API navigation, type-link, and search indexes from package shards.
 * Outputs JSON beside the input data and does not add MDX or TypeScript modules
 * to the Next.js graph.
 *
 * @example
 * ```sh
 * node scripts/generate-api-data.mjs --in ./data
 * ```
 */

import { promises as fs } from 'node:fs';
import { dirname, join, resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildDate } from '../../scripts/lib/source-date-epoch.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const FALLBACK_ROOT = resolve(HERE, '..');

const parseArgs = (argv) => {
  const out = {};
  for (let i = 0; i < argv.length; i++) {
    const flag = argv[i];
    if (!flag.startsWith('--')) continue;
    const value = argv[i + 1];
    if (!value || value.startsWith('--')) {
      out[flag.slice(2)] = true;
      continue;
    }
    out[flag.slice(2)] = value;
    i++;
  }
  return out;
};

/**
 * Standard kebab-case for module / toolkit / package names.
 *
 * `FoundationClasses` → `foundation-classes`
 * `TKMath` → `tk-math` (acronym + word — single dash before the last upper-then-lower run)
 * `BRepPrimAPI` → `b-rep-prim-api`
 * `gp` → `gp`
 */
const kebab = (input) =>
  String(input)
    .replace(/([a-z\d])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();

const ensureDir = async (path) => {
  await fs.mkdir(path, { recursive: true });
};

const writeJson = async (path, value) => {
  await ensureDir(dirname(path));
  await fs.writeFile(path, JSON.stringify(value));
};

const stripSummary = (raw) => {
  const oneLine = String(raw ?? '')
    .replace(/\s+/g, ' ')
    .replace(/\{@link\s+[^}|]+(?:\s*\|\s*`([^`]+)`)?\s*\}/g, (_match, label) => label ?? '')
    .trim();
  if (oneLine.length <= 158) return oneLine;
  const truncated = oneLine.slice(0, 155).replace(/\s+\S*$/, '');
  return `${truncated}…`;
};

const summarizePackage = (pkg) => {
  const classCount = pkg.classes?.length ?? 0;
  const classNames = (pkg.classes ?? [])
    .slice(0, 4)
    .map((cls) => cls.name)
    .join(', ');
  if (classCount === 0) return `OCCT package ${pkg.name} (no bound classes).`;
  if (classCount <= 4) return `OCCT package ${pkg.name}: ${classNames}.`;
  return `OCCT package ${pkg.name}: ${classNames}, and ${classCount - 4} more bound classes.`;
};

const kindToTag = (kind) => {
  switch (kind) {
    case 'class':
    case 'interface':
      return 'class';
    case 'method':
      return 'method';
    case 'property':
      return 'property';
    default:
      return kind;
  }
};

const buildSearchEntry = (entry) => {
  const moduleName = entry.p?.split('/')[0] ?? '';
  const toolkitName = entry.p?.split('/')[1] ?? '';
  const packageName = entry.p?.split('/')[2] ?? '';
  const url = `/docs/package/api/${kebab(moduleName)}/${kebab(toolkitName)}/${kebab(packageName)}`;
  const tag = kindToTag(entry.k);
  return {
    id: `${entry.s}#${entry.a}`,
    title: entry.n,
    description: tag,
    url: `${url}#${entry.a}`,
    tag,
    structured: { contents: [{ heading: '', content: entry.n }] },
  };
};

const TS_KEYWORD_DENYLIST = [
  'void', 'boolean', 'string', 'number', 'null', 'undefined', 'any', 'unknown',
  'never', 'bigint', 'symbol', 'readonly', 'infer', 'abstract', 'declare',
  'extends', 'implements', 'keyof', 'object', 'this', 'true', 'false', 'return',
];

const buildTree = (index) => ({
  schema: 1,
  generatedAt: index.generatedAt ?? buildDate().toISOString(),
  manifest: index.manifest ?? {},
  totals: index.totals ?? {},
  modules: index.modules.map((module) => {
    const moduleSlug = kebab(module.name);
    return {
      slug: moduleSlug,
      name: module.name,
      url: `/docs/package/api/${moduleSlug}`,
      headline: module.headline ?? '',
      description: stripSummary(module.headline) || `${module.classCount} classes across ${module.toolkitCount} toolkits.`,
      classCount: module.classCount ?? 0,
      toolkitCount: module.toolkitCount ?? (module.toolkits?.length ?? 0),
      toolkits: (module.toolkits ?? []).map((toolkit) => {
        const toolkitSlug = kebab(toolkit.name);
        return {
          slug: toolkitSlug,
          name: toolkit.name,
          url: `/docs/package/api/${moduleSlug}/${toolkitSlug}`,
          headline: toolkit.headline ?? '',
          description: stripSummary(toolkit.headline) || `${toolkit.classCount} classes across ${toolkit.packages?.length ?? 0} packages.`,
          classCount: toolkit.classCount ?? 0,
          packageCount: toolkit.packages?.length ?? 0,
          packages: (toolkit.packages ?? []).map((pkg) => {
            const pkgSlug = kebab(pkg.name);
            const shardKey = `${module.name}__${toolkit.name}__${pkg.name}`;
            return {
              slug: pkgSlug,
              name: pkg.name,
              url: `/docs/package/api/${moduleSlug}/${toolkitSlug}/${pkgSlug}`,
              description: stripSummary(summarizePackage(pkg)),
              shardKey,
              shard: pkg.shard ?? `${shardKey}.json`,
              classCount: pkg.classes?.length ?? 0,
              classNames: (pkg.classes ?? []).map((cls) => cls.name),
            };
          }),
        };
      }),
    };
  }),
});

const buildTypeIndex = (index) => {
  const entries = [];
  const seen = new Set();
  for (const entry of index.searchIndex ?? []) {
    if (entry.k !== 'class') continue;
    if (seen.has(entry.n)) continue;
    seen.add(entry.n);
    const moduleName = entry.p?.split('/')[0] ?? '';
    const toolkitName = entry.p?.split('/')[1] ?? '';
    const packageName = entry.p?.split('/')[2] ?? '';
    entries.push([
      entry.n,
      {
        url: `/docs/package/api/${kebab(moduleName)}/${kebab(toolkitName)}/${kebab(packageName)}`,
        fragment: entry.a,
        shard: entry.s,
      },
    ]);
  }
  return { schema: 1, denylist: TS_KEYWORD_DENYLIST, entries };
};

const buildSearchIndex = (index) => (index.searchIndex ?? []).map(buildSearchEntry);

const main = async () => {
  const args = parseArgs(process.argv.slice(2));
  const inDir = resolve(FALLBACK_ROOT, args.in ?? './data');
  const treePath = resolve(FALLBACK_ROOT, args.tree ?? join(inDir, 'api-tree.json'));
  const typeIndexPath = resolve(FALLBACK_ROOT, args['type-index'] ?? join(inDir, 'api-type-index.json'));
  const searchIndexPath = resolve(FALLBACK_ROOT, args['search-index'] ?? join(inDir, 'api-search-index.json'));

  const indexPath = join(inDir, 'index.json');
  const indexRaw = await fs.readFile(indexPath, 'utf8').catch((err) => {
    console.error(`generate-api-data: cannot read ${indexPath}: ${err.message}`);
    console.error(
      'Run `npm exec nx -- run ocjs:docs-sync` from the fork root to regenerate the data shards first.',
    );
    process.exit(1);
  });
  const index = JSON.parse(indexRaw);

  const tree = buildTree(index);
  const typeIndex = buildTypeIndex(index);
  const searchEntries = buildSearchIndex(index);

  await writeJson(treePath, tree);
  await writeJson(typeIndexPath, typeIndex);
  await writeJson(searchIndexPath, searchEntries);

  const packageCount = tree.modules.reduce(
    (sum, m) => sum + m.toolkits.reduce((s, t) => s + t.packages.length, 0),
    0,
  );

  console.log(
    `generate-api-data: ${tree.modules.length} modules, ${packageCount} packages, ${typeIndex.entries.length} type entries, ${searchEntries.length} search entries`,
  );
  console.log(`  → ${relative(FALLBACK_ROOT, treePath)}`);
  console.log(`  → ${relative(FALLBACK_ROOT, typeIndexPath)}`);
  console.log(`  → ${relative(FALLBACK_ROOT, searchIndexPath)}`);
};

await main().catch((err) => {
  console.error('generate-api-data failed:', err);
  process.exit(1);
});
