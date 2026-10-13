import { source } from '../../lib/source';
import { getLlmText } from '../../lib/get-llms-text';
import { apiTree } from '../../lib/api-source';

export const revalidate = false;

export const GET = async (): Promise<Response> => {
  const sections: string[] = [];
  for (const page of source.getPages()) {
    // Virtual API pages (under /docs/package/api/*) have no MDX body. They expose
    // their full reference content through `/docs/package/api/<...>.mdx` instead,
    // which is synthesised from the shard JSON in
    // `app/docs/package/api/[[...slug]].mdx/route.ts`.
    if (page.type !== 'docs') continue;
    if (page.url === '/docs/package/api' || page.url.startsWith('/docs/package/api/')) continue;
    sections.push(await getLlmText(page));
  }
  sections.push(
    `# API Reference\nThe full bound OCCT API (${apiTree.totals.classes.toLocaleString()} classes) is exposed as one synthesised Markdown page per package at \`/docs/package/api/<module>/<toolkit>/<package>.mdx\`. Use the search endpoint at \`/api/search?query=…\` to discover entries.`,
  );
  return new Response(sections.join('\n\n---\n\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
