import type { InferPageType } from 'fumadocs-core/source';
import { decodeHtmlEntities } from './decode-html-entities';
import { source } from './source';

type DocsPage = Extract<InferPageType<typeof source>, { type: 'docs' }>;

export const getLlmText = async (page: DocsPage): Promise<string> => {
  const processed = decodeHtmlEntities(await page.data.getText('processed'));
  return `# ${page.data.title}
URL: ${page.url}

${processed}`;
};

type Section = {
  title: string;
  pages: Array<InferPageType<typeof source>>;
};

const formatSectionTitle = (slug: string): string =>
  slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

/**
 * Generates a Stripe-style `llms.txt` reference document — overview of all docs
 * pages with their titles, URLs and `description` frontmatter.
 */
export const getLlmRefText = ({
  siteTitle,
  siteUrl,
  pathPrefix,
}: {
  siteTitle: string;
  siteUrl: string;
  pathPrefix?: string;
}): string => {
  const normalizedPrefix =
    pathPrefix && pathPrefix.length > 0 ? pathPrefix.replace(/\/$/, '') : undefined;

  let pages = source.getPages();
  if (normalizedPrefix) {
    pages = pages.filter(
      (page) => page.url === normalizedPrefix || page.url.startsWith(`${normalizedPrefix}/`),
    );
  }

  const sections = new Map<string, Section>();

  for (const page of pages) {
    let sectionKey: string;
    let sectionTitle: string;

    if (normalizedPrefix) {
      const remainder = page.url === normalizedPrefix ? '' : page.url.slice(normalizedPrefix.length).replace(/^\//, '');
      const firstSegment = remainder.split('/').find((part) => part.length > 0);
      if (firstSegment) {
        sectionKey = firstSegment;
        sectionTitle = formatSectionTitle(firstSegment);
      } else {
        sectionKey = 'overview';
        sectionTitle = 'Overview';
      }
    } else {
      const pathParts = page.url.split('/').filter((part) => part.length > 0);
      sectionKey = 'docs';
      sectionTitle = 'Documentation';
      if (pathParts.length > 1 && pathParts[1]) {
        sectionKey = pathParts[1];
        sectionTitle = formatSectionTitle(sectionKey);
      }
    }

    if (!sections.has(sectionKey)) {
      sections.set(sectionKey, { title: sectionTitle, pages: [] });
    }
    sections.get(sectionKey)?.pages.push(page);
  }

  const output: string[] = [];
  output.push(`# ${siteTitle}`);

  for (const section of sections.values()) {
    if (section.pages.length === 0) continue;
    output.push('', `## ${section.title}`);
    for (const page of section.pages) {
      const { title } = page.data;
      const url = `${siteUrl}${page.url}`;
      const description = page.data.description ?? '';
      if (description) {
        output.push(`- [${title}](${url}): ${description}`);
      } else {
        output.push(`- [${title}](${url})`);
      }
    }
  }

  return output.join('\n');
};
