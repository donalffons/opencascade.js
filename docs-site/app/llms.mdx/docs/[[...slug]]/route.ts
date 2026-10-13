import { notFound } from 'next/navigation';
import { source } from '../../../../lib/source';
import { getLlmText } from '../../../../lib/get-llms-text';

type RouteParams = { readonly params: Promise<{ readonly slug?: string[] }> };

export const revalidate = false;

/**
 * Raw-Markdown handler for hand-written docs.
 *
 * URL shape exposed to consumers: `/docs/<path>.mdx` (rewritten in
 * `next.config.ts` to `/llms.mdx/docs/<path>` so the literal `.mdx`
 * sits on a static parent folder — the dynamic catch-all sibling of
 * `.mdx` is the Next.js / Turbopack edge case that produces a 404).
 *
 * The more-specific synthesised API handler lives at
 * `app/llms.mdx/docs/api/[[...slug]]/route.ts`.
 */
export const GET = async (_request: Request, { params }: RouteParams): Promise<Response> => {
  const resolved = (await params) ?? {};
  if (resolved.slug?.[0] === 'package' && resolved.slug?.[1] === 'api') notFound();
  const page = source.getPage(resolved.slug);
  if (!page || page.type !== 'docs') notFound();
  const text = await getLlmText(page);
  return new Response(text, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};

export const generateStaticParams = (): Array<{ slug: string[] }> =>
  source
    .generateParams()
    .filter(
      (entry) =>
        Array.isArray(entry.slug) &&
        entry.slug.length > 0 &&
        !(entry.slug[0] === 'package' && entry.slug[1] === 'api'),
    );
