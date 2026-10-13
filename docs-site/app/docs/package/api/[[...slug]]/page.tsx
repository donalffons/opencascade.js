import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/page';
import { MarkdownCopyButton, ViewOptionsPopover } from 'fumadocs-ui/layouts/docs/page';
import { source } from '../../../../../lib/source';
import {
  enumerateApiRoutes,
  resolveApiRoute,
  type ApiRouteResolution,
} from '../../../../../lib/api-route-resolver';
import { ApiHierarchyTree } from '../../../../../components/api/api-hierarchy-tree';
import { ApiModuleIndex } from '../../../../../components/api/api-module-index';
import { ApiToolkitIndex } from '../../../../../components/api/api-toolkit-index';
import { ApiPackagePage } from '../../../../../components/api/api-package-page';

type PageProps = {
  readonly params: Promise<{ readonly slug?: string[] }>;
};

const renderBody = (resolution: ApiRouteResolution): React.ReactNode => {
  switch (resolution.kind) {
    case 'root':
      return <ApiHierarchyTree />;
    case 'module':
      return <ApiModuleIndex moduleName={resolution.moduleName} />;
    case 'toolkit':
      return (
        <ApiToolkitIndex
          moduleName={resolution.moduleName}
          toolkitName={resolution.toolkitName}
        />
      );
    case 'package':
      return (
        <ApiPackagePage
          shardKey={resolution.shardKey}
          basePath={`/docs/package/api/${resolution.moduleSlug}/${resolution.toolkitSlug}/${resolution.packageSlug}`}
          page={resolution.page}
          pageCount={resolution.pageCount}
          classCount={resolution.classCount}
        />
      );
  }
};

const titleFor = (resolution: ApiRouteResolution): string => {
  switch (resolution.kind) {
    case 'root':
      return 'API Reference';
    case 'module':
      return resolution.moduleName;
    case 'toolkit':
      return resolution.toolkitName;
    case 'package':
      return resolution.pageCount > 1
        ? `${resolution.packageName} (page ${resolution.page} of ${resolution.pageCount})`
        : resolution.packageName;
    default: {
      const _exhaustive: never = resolution;
      return _exhaustive;
    }
  }
};

const descriptionFor = (resolution: ApiRouteResolution): string | undefined => {
  if (resolution.kind === 'package') return resolution.description;
  if (resolution.kind === 'root') {
    return 'All bound OCCT classes, methods, and properties across every toolkit.';
  }
  const slug = resolution.kind === 'module' ? [resolution.moduleSlug] : [resolution.moduleSlug, resolution.toolkitSlug];
  const page = source.getPage(['package', 'api', ...slug]);
  return page?.data.description;
};

const ApiRoutePage = async ({ params }: PageProps): Promise<React.JSX.Element> => {
  const { slug } = await params;
  const resolution = resolveApiRoute(slug);
  if (!resolution) notFound();

  // Tie into the Fumadocs source so the sidebar tree highlights the right
  // node and so `<DocsPage>` picks up the toc context. The virtual page
  // exists in `lib/api-source.ts`.
  const page = source.getPage(['package', 'api', ...(slug ?? [])]);
  const title = page?.data.title ?? titleFor(resolution);
  const description = page?.data.description ?? descriptionFor(resolution);
  const slugPath = (slug ?? []).join('/');
  const markdownUrl = slugPath.length > 0 ? `/docs/package/api/${slugPath}.mdx` : '/docs/package/api.mdx';

  return (
    <DocsPage>
      <DocsTitle>{title}</DocsTitle>
      {description ? <DocsDescription>{description}</DocsDescription> : null}
      <div className="flex flex-row gap-2 items-center border-b pt-2 pb-6">
        <MarkdownCopyButton markdownUrl={markdownUrl} />
        <ViewOptionsPopover markdownUrl={markdownUrl} />
      </div>
      <DocsBody>{renderBody(resolution)}</DocsBody>
    </DocsPage>
  );
};

export default ApiRoutePage;

export const generateStaticParams = (): Array<{ slug: string[] }> => enumerateApiRoutes();

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const { slug } = await params;
  const resolution = resolveApiRoute(slug);
  if (!resolution) return {};
  return {
    title: titleFor(resolution),
    description: descriptionFor(resolution),
  };
};
