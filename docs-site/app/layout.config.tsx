import Link from 'next/link';
import type { ReactNode } from 'react';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { GITHUB_REPO_URL } from '../lib/site';

export const NavTitle = (): ReactNode => (
  <span className="flex items-center gap-2">
    {/* eslint-disable-next-line @next/next/no-img-element -- inline SVG brand mark in nav chrome */}
    <img src="/logo.svg" alt="" className="h-5 w-5" />
    libcascade
  </span>
);

export const TauAttributionFooter = (): ReactNode => (
  <p className="order-first mb-2 border-t border-fd-border px-4 py-3 text-xs text-fd-muted-foreground">
    Maintained by{' '}
    <a href="https://tau.new" className="text-fd-primary hover:underline">
      Tau
    </a>{' '}
    — see the{' '}
    <Link href="/docs/package/getting-started/faq" className="text-fd-primary hover:underline">
      FAQ
    </Link>
    .
  </p>
);

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: <NavTitle />,
  },
  githubUrl: GITHUB_REPO_URL,
  links: [
    { text: 'Package', url: '/docs/package' },
    { text: 'Toolchain', url: '/docs/toolchain' },
    { text: 'API', url: '/docs/package/api' },
  ],
};
