import 'server-only';
import { apiTree } from './api-source';
import { packagePageCount, pageSegmentFor, parsePageSegment } from './api-package-pagination';

export type ApiRouteResolution =
  | { readonly kind: 'root' }
  | { readonly kind: 'module'; readonly moduleName: string; readonly moduleSlug: string }
  | {
      readonly kind: 'toolkit';
      readonly moduleName: string;
      readonly moduleSlug: string;
      readonly toolkitName: string;
      readonly toolkitSlug: string;
    }
  | {
      readonly kind: 'package';
      readonly moduleName: string;
      readonly moduleSlug: string;
      readonly toolkitName: string;
      readonly toolkitSlug: string;
      readonly packageName: string;
      readonly packageSlug: string;
      readonly shardKey: string;
      readonly description: string;
      readonly classCount: number;
      readonly page: number;
      readonly pageCount: number;
    };

/**
 * Resolves a Next route slug under `/docs/api/[[...slug]]` to a typed
 * navigation node sourced from `data/api-tree.json`. Returns `undefined`
 * when the slug doesn't match any known module / toolkit / package.
 */
export const resolveApiRoute = (slug: readonly string[] | undefined): ApiRouteResolution | undefined => {
  if (!slug || slug.length === 0) return { kind: 'root' };

  const moduleSlug = slug[0];
  if (moduleSlug === undefined) return { kind: 'root' };
  const ocModule = apiTree.modules.find((m) => m.slug === moduleSlug);
  if (!ocModule) return undefined;

  if (slug.length === 1) {
    return { kind: 'module', moduleName: ocModule.name, moduleSlug: ocModule.slug };
  }

  const toolkitSlug = slug[1];
  if (toolkitSlug === undefined) return undefined;
  const toolkit = ocModule.toolkits.find((t) => t.slug === toolkitSlug);
  if (!toolkit) return undefined;

  if (slug.length === 2) {
    return {
      kind: 'toolkit',
      moduleName: ocModule.name,
      moduleSlug: ocModule.slug,
      toolkitName: toolkit.name,
      toolkitSlug: toolkit.slug,
    };
  }

  if (slug.length !== 3 && slug.length !== 4) return undefined;
  const packageSlug = slug[2];
  if (packageSlug === undefined) return undefined;
  const pkg = toolkit.packages.find((p) => p.slug === packageSlug);
  if (!pkg) return undefined;

  const classCount = pkg.classCount ?? pkg.classNames.length;
  const pages = packagePageCount(classCount);
  const page = slug.length === 3 ? 1 : parsePageSegment(slug[3]);
  if (page === undefined || page > pages) return undefined;

  return {
    kind: 'package',
    moduleName: ocModule.name,
    moduleSlug: ocModule.slug,
    toolkitName: toolkit.name,
    toolkitSlug: toolkit.slug,
    packageName: pkg.name,
    packageSlug: pkg.slug,
    shardKey: pkg.shardKey,
    description: pkg.description,
    classCount,
    page,
    pageCount: pages,
  };
};

/**
 * Every API route under /docs/api, including the root and every module /
 * toolkit / package leaf — used by `generateStaticParams()` to pre-render
 * the API tree at build time.
 */
export const enumerateApiRoutes = (): Array<{ readonly slug: string[] }> => {
  const out: Array<{ slug: string[] }> = [];
  out.push({ slug: [] });
  for (const ocModule of apiTree.modules) {
    out.push({ slug: [ocModule.slug] });
    for (const toolkit of ocModule.toolkits) {
      out.push({ slug: [ocModule.slug, toolkit.slug] });
      for (const pkg of toolkit.packages) {
        const classCount = pkg.classCount ?? pkg.classNames.length;
        const pages = packagePageCount(classCount);
        for (let page = 1; page <= pages; page++) {
          const routeSlug = [ocModule.slug, toolkit.slug, pkg.slug];
          const segment = pageSegmentFor(page);
          if (segment) routeSlug.push(segment);
          out.push({ slug: routeSlug });
        }
      }
    }
  }
  return out;
};
