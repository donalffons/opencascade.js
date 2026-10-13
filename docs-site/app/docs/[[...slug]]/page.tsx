import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/page';
import { MarkdownCopyButton, ViewOptionsPopover } from 'fumadocs-ui/layouts/docs/page';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { TypeTable } from 'fumadocs-ui/components/type-table';
import { source } from '../../../lib/source';
import { Mermaid } from '../../../components/mermaid';
import { TagBadge } from '../../../components/tag-badge';
import { GITHUB_REPO_URL, DOCS_DIR } from '../../../lib/site';

type PageProps = {
  readonly params: Promise<{ readonly slug?: string[] }>;
};

const DocsPageRoute = async ({ params }: PageProps): Promise<React.JSX.Element> => {
  const { slug } = await params;
  // Virtual API pages (from `lib/api-source.ts`) are served by
  // `app/docs/package/api/[[...slug]]/page.tsx`, which is a more-specific route and
  // wins under Next routing. This guard is defensive: it ensures that if
  // routing ever changes, a virtual page with no MDX `body` can never reach
  // the catch-all renderer below (which would crash on `page.data.body`).
  if (slug?.[0] === 'package' && slug?.[1] === 'api') notFound();
  const page = source.getPage(slug);
  if (!page || page.type !== 'docs') notFound();

  const MdxContent = page.data.body;
  const markdownUrl = `${page.url}.mdx`;
  const githubUrl = `${GITHUB_REPO_URL}/blob/main/${DOCS_DIR}/${page.path}`;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <div className="flex flex-row gap-2 items-center border-b pt-2 pb-6">
        <MarkdownCopyButton markdownUrl={markdownUrl} />
        <ViewOptionsPopover markdownUrl={markdownUrl} githubUrl={githubUrl} />
      </div>
      <DocsBody>
        <MdxContent
          components={{
            ...defaultMdxComponents,
            Mermaid,
            TagBadge,
            TypeTable,
          }}
        />
      </DocsBody>
    </DocsPage>
  );
};

export default DocsPageRoute;

export const generateStaticParams = (): Array<{ slug: string[] }> => source.generateParams();

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const { slug } = await params;
  const page = source.getPage(slug);
  if (!page) return {};
  return {
    title: page.data.title,
    description: page.data.description,
  };
};
