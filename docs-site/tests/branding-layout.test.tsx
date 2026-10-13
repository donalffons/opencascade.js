import { afterEach, describe, it, expect } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { metadata } from '../app/layout';
import HomePage from '../app/(home)/page';
import { NavTitle, TauAttributionFooter } from '../app/layout.config';
import { ApiClassCount } from '../components/api-class-count';
import { apiTree } from '../lib/api-source';

afterEach(cleanup);

describe('branding layout metadata', () => {
  it('should configure favicon icons', () => {
    // SVG first so modern browsers get the vector mark; the .ico stays behind
    // it for anything that cannot take one.
    expect(metadata.icons).toEqual({
      icon: [
        { url: '/favicon.svg', type: 'image/svg+xml' },
        { url: '/favicon.ico', sizes: '32x32' },
      ],
      apple: '/favicon.ico',
    });
  });
});

describe('branding layout chrome', () => {
  it('should render nav title with logo and site name', () => {
    const { container } = render(<NavTitle />);
    expect(container.querySelector('img')?.getAttribute('src')).toBe('/logo.svg');
    expect(screen.getByText('libcascade')).toBeTruthy();
  });

  it('should render Tau attribution footer linking to the FAQ', () => {
    render(<TauAttributionFooter />);
    const faqLink = screen.getByRole('link', { name: 'FAQ' });
    expect(faqLink.getAttribute('href')).toBe('/docs/package/getting-started/faq');
    expect(screen.getByText(/Maintained by/i)).toBeTruthy();
    expect(screen.getByRole('link', { name: 'Tau' }).getAttribute('href')).toBe('https://tau.new');
  });

  it('should render the exact synced API class total', () => {
    const count = apiTree.totals.classes.toLocaleString();
    render(<HomePage />);
    expect(screen.getByText(new RegExp(`${count} classes`))).toBeTruthy();
    expect(ApiClassCount()).toBe(count);
  });
});
