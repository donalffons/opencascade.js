import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'libcascade + three.js GLB starter',
  description: 'v3 starter: build a TopoDS shape, mesh to GLB, render in three.js inside Next 16',
};

export default function RootLayout({ children }: { children: ReactNode }): React.ReactElement {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          height: '100vh',
          background: '#1a1a1a',
          color: '#ddd',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {children}
      </body>
    </html>
  );
}
