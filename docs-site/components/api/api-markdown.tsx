'use client';

import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';
import { Streamdown, defaultRemarkPlugins } from 'streamdown';
import remarkBreaks from 'remark-breaks';

/**
 * The `remarkPlugins` prop replaces Streamdown's defaults rather than extending
 * them, so we re-include the bundled defaults (GFM + code-meta) and append
 * `remark-breaks` to honour single-newline line breaks.
 */
const REMARK_PLUGINS = [...Object.values(defaultRemarkPlugins), remarkBreaks];

/**
 * Matches fumadocs-ui prose `:where(code)` styling (kept in sync with
 * `lib/inline-code-text.tsx`) so inline code inside API prose reads the same as
 * inline code in the surrounding MDX docs.
 */
const INLINE_CODE_CLASS =
  'rounded-[5px] border border-fd-border bg-fd-muted px-[0.3em] py-[0.15em] font-mono text-[0.85em] font-normal text-fd-foreground';

/**
 * Cross-reference link styling, carried over verbatim from `ApiTypeLink` so
 * `{@link ...}` references resolved into markdown links keep their existing
 * appearance: function/class purple, no rest-state underline, a subtle
 * underline on hover.
 */
const LINK_CLASS =
  'text-api-fn underline decoration-current/0 underline-offset-2 transition-[text-decoration-color] hover:decoration-current/60';

/**
 * Renders a markdown link. Internal cross-references (resolved from
 * `{@link ...}` to an absolute `/docs/...` path during the server pre-pass) use
 * Next's `<Link>` for client-side navigation; anything else (absolute URLs in
 * the upstream JSDoc) falls back to a new-tab anchor. Both share the API
 * cross-reference styling so linkification never visually regresses.
 */
const MarkdownLink = ({ href, children }: ComponentProps<'a'>): ReactNode => {
  if (typeof href === 'string' && href.startsWith('/')) {
    return (
      <Link href={href} className={LINK_CLASS}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noreferrer noopener" className={LINK_CLASS}>
      {children}
    </a>
  );
};

const InlineCode = ({ children }: ComponentProps<'code'>): ReactNode => (
  <code className={INLINE_CODE_CLASS}>{children}</code>
);

const Strong = ({ children }: ComponentProps<'strong'>): ReactNode => (
  <strong className="font-semibold text-fd-foreground">{children}</strong>
);

const Emphasis = ({ children }: ComponentProps<'em'>): ReactNode => <em className="italic">{children}</em>;

export type ApiMarkdownProps = {
  /** Pre-resolved markdown (with `{@link ...}` already turned into links). */
  readonly markdown: string;
  /** Render as inline flow (no block paragraph margins). */
  readonly inline?: boolean;
  readonly className?: string;
};

/**
 * Renders OCCT JSDoc prose as real markdown via Streamdown: bold, lists,
 * inline code, fenced code blocks, tables, and paragraph/line breaks. Runs in
 * static (non-streaming) mode with link-safety modals disabled and Shiki
 * pinned to the GitHub light/dark themes that the rest of the API surface is
 * sampled from.
 *
 * `remark-breaks` is added so the upstream JSDoc's single-newline line breaks
 * (one logical statement per line) survive as visible breaks instead of being
 * collapsed into run-on paragraphs.
 *
 * Inline mode collapses paragraphs to plain inline flow so short prose
 * (parameter descriptions, `@returns`, `@remarks`, `@see`, `@deprecated`) reads
 * as a sentence rather than a stacked block, while still resolving bold, inline
 * code, and `{@link}` links.
 */
export const ApiMarkdown = ({ markdown, inline = false, className }: ApiMarkdownProps): ReactNode => {
  if (inline) {
    return (
      <Streamdown
        mode="static"
        parseIncompleteMarkdown={false}
        controls={false}
        linkSafety={{ enabled: false }}
        shikiTheme={['github-light', 'github-dark']}
        remarkPlugins={REMARK_PLUGINS}
        className={className ?? 'inline'}
        components={{
          a: ({ href, children }) => <MarkdownLink href={href}>{children}</MarkdownLink>,
          inlineCode: ({ children }) => <InlineCode>{children}</InlineCode>,
          strong: ({ children }) => <Strong>{children}</Strong>,
          em: ({ children }) => <Emphasis>{children}</Emphasis>,
          p: ({ children }) => <span>{children}</span>,
          ul: ({ children }) => (
            <ul className="mt-1 list-disc space-y-0.5 pl-5 marker:text-fd-muted-foreground">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="mt-1 list-decimal space-y-0.5 pl-5 marker:text-fd-muted-foreground">{children}</ol>
          ),
          li: ({ children }) => <li className="leading-relaxed">{children}</li>,
        }}
      >
        {markdown}
      </Streamdown>
    );
  }

  return (
    <Streamdown
      mode="static"
      parseIncompleteMarkdown={false}
      controls={false}
      linkSafety={{ enabled: false }}
      shikiTheme={['github-light', 'github-dark']}
      remarkPlugins={REMARK_PLUGINS}
      className={className}
      components={{
        a: ({ href, children }) => <MarkdownLink href={href}>{children}</MarkdownLink>,
        inlineCode: ({ children }) => <InlineCode>{children}</InlineCode>,
        strong: ({ children }) => <Strong>{children}</Strong>,
        em: ({ children }) => <Emphasis>{children}</Emphasis>,
        p: ({ children }) => <p className="leading-relaxed [&:not(:first-child)]:mt-3">{children}</p>,
        ul: ({ children }) => (
          <ul className="mt-2 list-disc space-y-1 pl-5 marker:text-fd-muted-foreground">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="mt-2 list-decimal space-y-1 pl-5 marker:text-fd-muted-foreground">{children}</ol>
        ),
        li: ({ children }) => <li className="leading-relaxed [&>ul]:mt-1 [&>ol]:mt-1">{children}</li>,
        h1: ({ children }) => <h1 className="mt-4 text-base font-semibold text-fd-foreground">{children}</h1>,
        h2: ({ children }) => <h2 className="mt-4 text-base font-semibold text-fd-foreground">{children}</h2>,
        h3: ({ children }) => <h3 className="mt-4 text-sm font-semibold text-fd-foreground">{children}</h3>,
        h4: ({ children }) => <h4 className="mt-3 text-sm font-semibold text-fd-foreground">{children}</h4>,
        blockquote: ({ children }) => (
          <blockquote className="mt-3 border-l-2 border-fd-border pl-3 text-fd-muted-foreground italic">
            {children}
          </blockquote>
        ),
        hr: () => <hr className="my-4 border-fd-border" />,
      }}
    >
      {markdown}
    </Streamdown>
  );
};
