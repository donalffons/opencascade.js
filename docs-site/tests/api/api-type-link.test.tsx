import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import type { ReactNode } from 'react';

vi.mock('next/link', () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

vi.mock('../../lib/api-type-index', () => ({
  loadTypeIndex: () =>
    Promise.resolve({
      denylist: new Set([
        'void', 'boolean', 'string', 'number', 'null', 'undefined', 'any', 'unknown',
        'never', 'bigint', 'symbol', 'readonly', 'infer', 'abstract', 'declare',
        'extends', 'implements', 'keyof', 'object', 'this', 'true', 'false', 'return',
      ]),
      entries: new Map([
        [
          'Fix_Point',
          { url: '/docs/package/api/fixture-module/tk-fixture/fix', fragment: 'Fix_Point', shard: 'FixtureModule__TKFixture__Fix' },
        ],
      ]),
    }),
}));

import { ApiTypeLink } from '../../components/api/api-type-link';

const renderAsync = async (node: Promise<ReactNode>): Promise<ReturnType<typeof render>> => {
  return render((await node) as React.ReactElement);
};

describe('ApiTypeLink', () => {
  it('should render a denylisted TypeScript keyword as plain code without a link', async () => {
    const { container } = await renderAsync(ApiTypeLink({ name: 'number' }));
    expect(container.querySelectorAll('a').length).toBe(0);
    expect(container.textContent).toBe('number');
  });

  it('should render a known OCCT class as a Next link to its package page', async () => {
    const { container } = await renderAsync(ApiTypeLink({ name: 'Fix_Point' }));
    const link = container.querySelector('a');
    expect(link, 'expected hit to render a link').not.toBeNull();
    expect(link!.getAttribute('href')).toBe('/docs/package/api/fixture-module/tk-fixture/fix#Fix_Point');
  });

  it('should render an unknown identifier as plain code (miss)', async () => {
    const { container } = await renderAsync(ApiTypeLink({ name: 'SomeUnknownType' }));
    expect(container.querySelectorAll('a').length).toBe(0);
    expect(container.textContent).toBe('SomeUnknownType');
  });
});
