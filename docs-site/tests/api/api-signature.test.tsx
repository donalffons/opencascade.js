import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { ApiSignature } from '../../components/api/api-signature';
import type { ApiMethod } from '../../components/api/types';

vi.mock('next/link', () => ({
  default: ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href}>{children}</a>
  ),
}));

// `ApiTypeLink` is an async RSC; bypass it in component-level unit tests
// (see tests/api/api-type-link.test.tsx for its dedicated coverage).
vi.mock('../../components/api/api-type-link', () => ({
  ApiTypeLink: ({ name, children }: { name: string; children?: React.ReactNode }) => (
    <code>{children ?? name}</code>
  ),
}));

const sample: ApiMethod = {
  name: 'translate',
  signature: '(dx: number, point: Fix_Point): void',
  parameters: [
    { name: 'dx', type: 'number', optional: false, rest: false },
    { name: 'point', type: 'Fix_Point', optional: false, rest: false },
  ],
  returnType: 'void',
  comment: 'Translate the point.',
};

describe('ApiSignature', () => {
  it('should render every parameter name, type, and the return type', () => {
    const { container } = render(<ApiSignature method={sample} />);
    const text = container.textContent ?? '';
    expect(text).toContain('dx');
    expect(text).toContain('number');
    expect(text).toContain('point');
    expect(text).toContain('Fix_Point');
    expect(text).toContain('void');
  });

  it('should preserve parameter ordering and separator commas', () => {
    const { container } = render(<ApiSignature method={sample} />);
    const text = container.textContent ?? '';
    expect(text.indexOf('dx')).toBeLessThan(text.indexOf('point'));
    expect(text).toMatch(/dx:\s*number,\s*point:\s*Fix_Point\):\s*void/);
  });
});
