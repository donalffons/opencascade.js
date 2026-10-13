import { loader } from 'fumadocs-core/source';
import { docs } from '@/.source/server';
import { apiSource } from './api-source';
import { resolveIcon } from './icon-resolver';

/**
 * Two sources composed under a single base URL:
 *
 *  - `docs` — hand-written MDX pages compiled by `fumadocs-mdx` from
 *    `content/docs/**`. Pages carry MDX-derived data (`body`, `getText`,
 *    `toc`, `full`, `structuredData`).
 *  - `api` — virtual pages emitted by `lib/api-source.ts` for every OCCT
 *    module / toolkit / package. Metadata-only (title + description); no
 *    MDX body. Rendered by the dedicated route at
 *    `app/docs/api/[[...slug]]/page.tsx`.
 *
 * `source.getPage(slug)` returns a discriminated union keyed by `type`.
 * Narrow on `page.type === 'docs'` before touching MDX-only fields.
 */
export const source = loader({
  baseUrl: '/docs',
  icon: resolveIcon,
  source: {
    docs: docs.toFumadocsSource(),
    api: apiSource,
  },
});
