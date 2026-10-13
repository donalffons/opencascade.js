import { describe, it, expect, vi } from 'vitest';

vi.mock('../lib/source', () => ({
  source: {
    getPages: () => [
      {
        url: '/docs',
        data: { title: 'Home', description: 'Landing page.', getText: async () => '' },
      },
      {
        url: '/docs/getting-started/quick-start-npm',
        data: { title: 'Quick start (npm)', description: 'Install and run.', getText: async () => '' },
      },
      {
        url: '/docs/guides/render-with-three-js',
        data: { title: 'Render GLB with three.js', description: 'Hook GLB into three.', getText: async () => '' },
      },
    ],
  },
}));

import { getLlmRefText } from '../lib/get-llms-text';

describe('llms.txt reference', () => {
  it('should emit a heading with the site title and a bullet per page', () => {
    const out = getLlmRefText({ siteTitle: 'libcascade', siteUrl: 'https://libcascade.xyz' });
    expect(out).toMatch(/^# libcascade$/m);
    expect(out).toContain('[Home](https://libcascade.xyz/docs)');
    expect(out).toContain('[Quick start (npm)](https://libcascade.xyz/docs/getting-started/quick-start-npm)');
    expect(out).toContain('[Render GLB with three.js](https://libcascade.xyz/docs/guides/render-with-three-js)');
  });

  it('should include the page description suffixed with a colon when present', () => {
    const out = getLlmRefText({ siteTitle: 'libcascade', siteUrl: 'https://libcascade.xyz' });
    expect(out).toContain('): Install and run.');
    expect(out).toContain('): Hook GLB into three.');
  });

  it('should group pages by their first URL segment with Title Case headings', () => {
    const out = getLlmRefText({ siteTitle: 'libcascade', siteUrl: 'https://libcascade.xyz' });
    expect(out).toContain('## Getting Started');
    expect(out).toContain('## Guides');
  });
});
