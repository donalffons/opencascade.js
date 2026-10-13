import { apiTree } from '../../../../../lib/api-source';
import { SITE_TITLE, SITE_URL } from '../../../../../lib/site';

export const revalidate = false;

/**
 * Compact, AI-consumer index of every API package with a stable Markdown
 * deep link. The accompanying `[[...slug]].mdx` route renders one package
 * at a time as full Markdown — fetch a specific package via, e.g.
 * `/docs/package/api/foundation-classes/tk-math/gp.mdx`.
 */
export const GET = (): Response => {
  const lines: string[] = [];
  lines.push(`# ${SITE_TITLE} — API Reference`);
  lines.push(`Site: ${SITE_URL}`, '');
  lines.push(
    `This index lists every bound OCCT package. Fetch the full per-package reference as Markdown by appending \`.mdx\` to any URL below.`,
    '',
  );
  for (const ocModule of apiTree.modules) {
    lines.push(`## ${ocModule.name}`);
    if (ocModule.description) lines.push(ocModule.description);
    lines.push('');
    for (const toolkit of ocModule.toolkits) {
      lines.push(`### ${toolkit.name}`);
      if (toolkit.description) lines.push(toolkit.description);
      for (const pkg of toolkit.packages) {
        const url = `${SITE_URL}/docs/package/api/${ocModule.slug}/${toolkit.slug}/${pkg.slug}`;
        lines.push(`- [${pkg.name}](${url}): ${pkg.description}`);
      }
      lines.push('');
    }
  }
  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
