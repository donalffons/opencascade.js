import type { ReactNode } from 'react';
import { loadTypeIndex } from '../../lib/api-type-index';
import { ApiMarkdown } from './api-markdown';

export type ApiProseProps = {
  readonly text: string;
  /** Render as inline flow (parameter descriptions, `@returns`, `@see`, …). */
  readonly inline?: boolean;
  readonly className?: string;
};

const LINK_RE = /\{@link\s+([^}|]+?)(?:\s*\|\s*`?([^`}]+?)`?)?\s*\}/g;

/**
 * Splits prose into alternating non-code / code segments. Fenced blocks
 * (```` ``` ````) and inline code (`` ` `` or `` `` ``) are captured so callers
 * can transform only the prose between them.
 */
const CODE_SEGMENT_RE = /(```[\s\S]*?```|``[^`]*``|`[^`]*`)/g;

const isCodeSegment = (segment: string): boolean => segment.startsWith('`');

/**
 * Strips one optional layer of backticks/whitespace from a `{@link}` label so
 * it can be re-wrapped consistently as inline code in the emitted markdown.
 */
const cleanLabel = (raw: string): string => raw.trim().replace(/^`(.*)`$/s, '$1').trim();

/**
 * Escapes stray `<`/`>` that appear in prose (e.g. the C++ template arguments
 * in `BRepGraph_Iterator<NodeType>`). Left unescaped, Streamdown's HTML
 * sanitizer parses them as raw HTML tags and silently drops the enclosed text.
 * Code spans and fenced blocks are skipped so C++ snippets containing `<`/`>`
 * (and `&`) render verbatim.
 */
const escapeStrayHtml = (text: string): string =>
  text
    .split(CODE_SEGMENT_RE)
    .map((segment) =>
      isCodeSegment(segment)
        ? segment
        : segment.replace(/&(?![a-zA-Z#][a-zA-Z0-9]*;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'),
    )
    .join('');

/**
 * Resolves OCCT JSDoc prose into standard markdown so it can be rendered by
 * `ApiMarkdown` (Streamdown). The only transform applied here is turning
 * `{@link Target | Label}` references into markdown links — every other
 * markdown construct (bold, lists, inline/fenced code, paragraphs) is authored
 * in the upstream comment and passes through untouched.
 *
 * Targets are resolved against the build-time `data/api-type-index.json`:
 *
 * - resolved identifier → `[`Label`](/docs/.../shard#fragment)` (a real
 *   markdown link; the label stays wrapped in code so cross-references read as
 *   monospace identifiers, matching the previous `ApiTypeLink` rendering);
 * - denylisted / unresolved identifier → `` `Label` `` (inline code, no link),
 *   so nothing turns into a dead link.
 *
 * Runs on the server (RSC) because the type index lives on disk.
 */
const resolveLinks = async (text: string): Promise<string> => {
  if (!text.includes('{@link')) return text;
  const { denylist, entries } = await loadTypeIndex();
  return text.replace(LINK_RE, (_match, rawTarget: string, rawLabel: string | undefined) => {
    const target = rawTarget.trim();
    const label = cleanLabel(rawLabel ?? target);
    const code = `\`${label}\``;
    if (denylist.has(target) || denylist.has(target.toLowerCase())) return code;
    const hit = entries.get(target);
    if (!hit) return code;
    return `[${code}](${hit.url}#${hit.fragment})`;
  });
};

const resolveProseMarkdown = async (text: string): Promise<string> => {
  if (!text) return '';
  // Resolve `{@link}` first (targets may contain template `<...>`), then escape
  // any remaining stray angle brackets in the prose. Resolved labels are wrapped
  // in code spans, so the escape pass leaves them — and any C++ snippets —
  // untouched.
  const linked = await resolveLinks(text);
  return escapeStrayHtml(linked);
};

/**
 * Renders OCCT JSDoc prose as real markdown. `{@link Target | Label}`
 * references are resolved to markdown links (cross-package navigation comes
 * from the build-time `nameToHit` map) before the text is handed to
 * `ApiMarkdown`, which renders bold, lists, inline/fenced code, tables, and
 * paragraph/line breaks via Streamdown.
 */
export const ApiProse = async ({ text, inline, className }: ApiProseProps): Promise<ReactNode> => {
  if (!text) return undefined;
  const markdown = await resolveProseMarkdown(text);
  return <ApiMarkdown markdown={markdown} inline={inline} className={className} />;
};
