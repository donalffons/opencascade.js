import { notFound } from 'next/navigation';
import { resolveApiRoute, enumerateApiRoutes } from '../../../../../../lib/api-route-resolver';
import { slicePackageClasses } from '../../../../../../lib/api-package-pagination';
import { loadShard } from '../../../../../../components/api/api-data';
import { shardToMarkdown } from '../../../../../../lib/shard-to-markdown';
import { apiTree } from '../../../../../../lib/api-source';

type RouteParams = { readonly params: Promise<{ readonly slug?: string[] }> };

export const revalidate = false;

const renderListing = (title: string, url: string, links: ReadonlyArray<{ name: string; url: string; description?: string }>): string => {
  const lines: string[] = [];
  lines.push(`# ${title}`, `URL: ${url}`, '');
  for (const link of links) {
    if (link.description) {
      lines.push(`- [${link.name}](${link.url}): ${link.description}`);
    } else {
      lines.push(`- [${link.name}](${link.url})`);
    }
  }
  return lines.join('\n');
};

/**
 * Raw-Markdown handler for synthesised OCCT API package pages.
 *
 * URL shape exposed to consumers: `/docs/package/api/<path>.mdx` and
 * `/docs/package/api.mdx` for the root — rewritten in `next.config.ts` to
 * `/llms.mdx/docs/package/api/<path>` and `/llms.mdx/docs/package/api` respectively
 * so the literal `.mdx` lives on a static parent folder. The
 * `[[...slug]].mdx` folder pattern (literal extension on a dynamic
 * catch-all) is silently broken in Next.js App Router and produces
 * a route regex that collides with the sibling `[[...slug]]/page.tsx`.
 */
export const GET = async (_request: Request, { params }: RouteParams): Promise<Response> => {
  const resolved = (await params) ?? {};
  const resolution = resolveApiRoute(resolved.slug);
  if (!resolution) notFound();

  let body: string;
  if (resolution.kind === 'package') {
    const shard = await loadShard(resolution.shardKey);
    const { slice } = slicePackageClasses(shard.classes ?? [], resolution.page);
    const title =
      resolution.pageCount > 1
        ? `${resolution.packageName} (page ${resolution.page} of ${resolution.pageCount})`
        : resolution.packageName;
    const baseUrl = `/docs/package/api/${resolution.moduleSlug}/${resolution.toolkitSlug}/${resolution.packageSlug}`;
    const url =
      resolution.page > 1 ? `${baseUrl}/page-${resolution.page}` : baseUrl;
    body = shardToMarkdown({ ...shard, classes: [...slice] }, { title, url });
  } else if (resolution.kind === 'toolkit') {
    const ocModule = apiTree.modules.find((m) => m.slug === resolution.moduleSlug);
    const toolkit = ocModule?.toolkits.find((t) => t.slug === resolution.toolkitSlug);
    const packages = toolkit?.packages ?? [];
    body = renderListing(
      `${resolution.toolkitName} — Packages`,
      `/docs/package/api/${resolution.moduleSlug}/${resolution.toolkitSlug}`,
      packages.map((p) => ({
        name: p.name,
        url: `/docs/package/api/${resolution.moduleSlug}/${resolution.toolkitSlug}/${p.slug}`,
        description: p.description,
      })),
    );
  } else if (resolution.kind === 'module') {
    const ocModule = apiTree.modules.find((m) => m.slug === resolution.moduleSlug);
    const toolkits = ocModule?.toolkits ?? [];
    body = renderListing(
      `${resolution.moduleName} — Toolkits`,
      `/docs/package/api/${resolution.moduleSlug}`,
      toolkits.map((t) => ({
        name: t.name,
        url: `/docs/package/api/${resolution.moduleSlug}/${t.slug}`,
        description: t.description,
      })),
    );
  } else {
    body = renderListing(
      'API Reference',
      '/docs/package/api',
      apiTree.modules.map((m) => ({
        name: m.name,
        url: `/docs/package/api/${m.slug}`,
        description: m.description,
      })),
    );
  }

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};

export const generateStaticParams = (): Array<{ slug: string[] }> =>
  enumerateApiRoutes().filter((entry) => entry.slug.length > 0);
