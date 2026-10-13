import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { renderInlineCode } from '../lib/inline-code-text';

describe('renderInlineCode', () => {
  it('should return plain text unchanged when no backticks are present', () => {
    expect(renderInlineCode('No code here')).toBe('No code here');
  });

  it('should render backtick segments as code elements', () => {
    render(<span>{renderInlineCode('Call `init()` once.')}</span>);
    expect(screen.getByText('init()').tagName).toBe('CODE');
    expect(screen.getByText(/Call/)).toBeTruthy();
  });

  it('should handle multiple inline code spans', () => {
    render(<span>{renderInlineCode('`gp_Pnt`, not `gp_Pnt_3`.')}</span>);
    expect(screen.getByText('gp_Pnt').tagName).toBe('CODE');
    expect(screen.getByText('gp_Pnt_3').tagName).toBe('CODE');
  });
});
