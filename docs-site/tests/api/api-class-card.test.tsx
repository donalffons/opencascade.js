import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { ApiClassCard } from '../../components/api/api-class-card';
import type { ApiClass } from '../../components/api/types';

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

vi.mock('../../components/api/api-prose', () => ({
  ApiProse: ({ text }: { text: string }) => <span>{text}</span>,
}));

const sample: ApiClass = {
  name: 'Fix_Vec',
  kind: 'class',
  summary: 'Vector derived from Fix_Point.',
  extends: ['Fix_Point'],
  ancestors: ['Fix_Point'],
  constructors: [
    { name: 'constructor', signature: '()', parameters: [], returnType: 'Fix_Vec', comment: 'Default' },
  ],
  staticMethods: [
    { name: 'identity', signature: '(): Fix_Vec', parameters: [], returnType: 'Fix_Vec', comment: 'Identity' },
  ],
  instanceMethods: [
    { name: 'scale', signature: '(s: number): void', parameters: [{ name: 's', type: 'number', optional: false, rest: false }], returnType: 'void', comment: 'overload 1' },
    { name: 'scale', signature: '(sx: number, sy: number): void', parameters: [{ name: 'sx', type: 'number', optional: false, rest: false }, { name: 'sy', type: 'number', optional: false, rest: false }], returnType: 'void', comment: 'overload 2' },
    { name: 'magnitude', signature: '(): number', parameters: [], returnType: 'number', comment: 'Length' },
  ],
  properties: [],
};

describe('ApiClassCard', () => {
  it('should emit collision-free human-readable anchor ids', () => {
    const { container } = render(<ApiClassCard cls={sample} />);
    expect(container.querySelector('#Fix_Vec-Constructor')).not.toBeNull();
    expect(container.querySelector('#Fix_Vec-identity')).not.toBeNull();
    expect(container.querySelector('#Fix_Vec-scale0')).not.toBeNull();
    expect(container.querySelector('#Fix_Vec-scale1')).not.toBeNull();
    expect(container.querySelector('#Fix_Vec-magnitude')).not.toBeNull();
  });

  it('should render the inheritance chip for every extends entry', () => {
    const { container } = render(<ApiClassCard cls={sample} />);
    expect(container.textContent).toContain('Fix_Point');
  });

  it('should mark adjacent same-name members as overloads via the dashed border class', () => {
    const { container } = render(<ApiClassCard cls={sample} />);
    const scale0 = container.querySelector('#Fix_Vec-scale0')!;
    const scale1 = container.querySelector('#Fix_Vec-scale1')!;
    const magnitude = container.querySelector('#Fix_Vec-magnitude')!;
    expect(scale0.className).toContain('border-dashed');
    expect(scale1.className).toContain('border-dashed');
    expect(magnitude.className).not.toContain('border-dashed');
  });

  it('should present sections in canonical order: constructors, static, instance, properties', () => {
    const { container } = render(<ApiClassCard cls={sample} />);
    const text = container.textContent ?? '';
    const ctorIdx = text.indexOf('Constructors');
    const staticIdx = text.indexOf('Static methods');
    const instIdx = text.indexOf('Instance methods');
    expect(ctorIdx).toBeGreaterThan(-1);
    expect(staticIdx).toBeGreaterThan(ctorIdx);
    expect(instIdx).toBeGreaterThan(staticIdx);
  });
});
