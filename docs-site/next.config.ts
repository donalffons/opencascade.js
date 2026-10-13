import type { NextConfig } from 'next';
import { createMDX } from 'fumadocs-mdx/next';
import { resolve } from 'node:path';
import redirectsJson from './redirects.json' with { type: 'json' };

const withMDX = createMDX();

const config: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: resolve(import.meta.dirname, '..'),
  },
  experimental: {
    optimizePackageImports: ['fumadocs-ui', 'fumadocs-core'],
  },
  async redirects() {
    return [
      ...redirectsJson,
      { source: '/docs-site/:path*', destination: '/docs/package/api/:path*', permanent: true },
      { source: '/docs-site', destination: '/docs/package/api', permanent: true },
      { source: '/docs/api', destination: '/docs/package/api', permanent: true },
      { source: '/docs/api/:path*', destination: '/docs/package/api/:path*', permanent: true },
      { source: '/reference-docs', destination: '/docs/package/api', permanent: true },
      { source: '/reference-docs/:path*', destination: '/docs/package/api/:path*', permanent: true },
    ];
  },
  /**
   * Expose raw-Markdown URLs ending in `.mdx` that route into the
   * `app/llms.mdx/docs/**` handlers. The literal `.mdx` lives on a
   * static parent folder (Fumadocs convention — see
   * https://fumadocs.dev/docs/integrations/llms#md-extension) because
   * Next.js App Router silently drops `.mdx` from the route regex
   * when used as a suffix on a dynamic catch-all folder like
   * `[[...slug]].mdx`, which collides with the sibling page route.
   */
  async rewrites() {
    return [
      { source: '/docs.mdx', destination: '/llms.mdx/docs' },
      { source: '/docs/package/api.mdx', destination: '/llms.mdx/docs/package/api' },
      { source: '/docs/:path+.mdx', destination: '/llms.mdx/docs/:path+' },
    ];
  },
};

export default withMDX(config);
