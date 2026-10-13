import type { ReactNode } from 'react';

/** Matches fumadocs-ui prose `:where(code)` styling for non-MDX React strings. */
const INLINE_CODE_CLASS =
  'rounded-[5px] border border-fd-border bg-fd-muted px-[3px] py-[3px] text-[13px] font-normal text-fd-foreground';

/**
 * Renders plain text with `` `backtick` `` segments as styled inline `<code>`.
 * Used on the home page where copy is authored as strings, not MDX.
 */
export const renderInlineCode = (text: string): ReactNode => {
  const segments = text.split(/(`[^`]+`)/g);
  if (segments.length === 1) return text;

  return segments.map((segment, index) => {
    if (segment.startsWith('`') && segment.endsWith('`')) {
      return (
        <code key={index} className={INLINE_CODE_CLASS}>
          {segment.slice(1, -1)}
        </code>
      );
    }
    return segment;
  });
};
