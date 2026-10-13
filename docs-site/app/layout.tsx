import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { SITE_TITLE, SITE_DESCRIPTION, SITE_URL } from '../lib/site';
import './global.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: '%s — libcascade' },
  description: SITE_DESCRIPTION,
  icons: {
    // SVG first for anything modern; the .ico stays as the fallback.
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    apple: '/favicon.ico',
  },
};

const RootLayout = ({ children }: { readonly children: ReactNode }): React.JSX.Element => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
};

export default RootLayout;
