/**
 * Parses an OCCT-flavored JSDoc comment into a structured shape so the
 * renderer can lay out each tag in its own dedicated section instead of
 * dumping the raw text (`@param ... @returns ...`) into a single paragraph.
 *
 * Observed tag inventory across all shipped shards (May 2026):
 *
 *   @param      — 10045 occurrences (by far the most common; each binds a
 *                 description to one of the method's typed parameters)
 *   @returns    — 3051 occurrences
 *   @link       — 858 occurrences (handled separately by `ApiProse`)
 *   @remarks    — 243 occurrences
 *   @deprecated — 172 occurrences
 *   @see        — 44 occurrences
 *   @Returns    — 2 occurrences (capitalisation typo upstream; aliased)
 *
 * `{@link ...}` references stay embedded in each description fragment and
 * are resolved downstream by `ApiProse`, so the parser deliberately does
 * not try to interpret them itself.
 */

export type ParsedComment = {
  readonly description: string;
  readonly params: ReadonlyMap<string, string>;
  readonly returns: string | null;
  readonly remarks: string | null;
  readonly deprecated: string | null;
  readonly see: readonly string[];
};

const EMPTY: ParsedComment = {
  description: '',
  params: new Map(),
  returns: null,
  remarks: null,
  deprecated: null,
  see: [],
};

/**
 * A block-level tag boundary. Tags are matched only at the start of a line
 * after optional whitespace; this prevents stray `@param` strings inside
 * the description body from being treated as section delimiters. The regex
 * also tolerates one-leading-asterisk prose (OCCT JSDoc sometimes retains
 * the leading `*` even after the bindgen strip).
 */
const BLOCK_TAG_RE = /(^|\n)\s*\*?\s*@([a-zA-Z]+)\b[ \t]*/g;

const collapseWhitespace = (text: string): string =>
  text.replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim();

/**
 * Split a `@param` body into `(name, description)`. The first whitespace-
 * separated token is the parameter name; the rest is its description.
 * Handles the upstream pattern `@param theFoo description ...` and
 * gracefully degrades when the description is empty.
 */
const splitParam = (raw: string): { name: string; description: string } | null => {
  const trimmed = raw.trim();
  if (!trimmed) return null;
  const match = trimmed.match(/^([A-Za-z_][\w$]*)\s*(.*)$/s);
  if (!match) return null;
  return { name: match[1]!, description: match[2]!.trim() };
};

export const parseComment = (raw: string | undefined | null): ParsedComment => {
  if (!raw || !raw.trim()) return EMPTY;

  const segments: Array<{ tag: string | null; body: string }> = [];
  let cursor = 0;
  let currentTag: string | null = null;

  BLOCK_TAG_RE.lastIndex = 0;
  for (const match of raw.matchAll(BLOCK_TAG_RE)) {
    const startOfTag = match.index! + match[1]!.length;
    segments.push({ tag: currentTag, body: raw.slice(cursor, startOfTag) });
    currentTag = match[2]!.toLowerCase();
    cursor = match.index! + match[0].length;
  }
  // Always push the trailing segment, even when its body is empty — this is
  // what makes a body-less `@deprecated` register as a present-but-empty
  // marker rather than disappearing entirely.
  segments.push({ tag: currentTag, body: raw.slice(cursor) });

  let description = '';
  const params = new Map<string, string>();
  let returns: string | null = null;
  let remarks: string | null = null;
  let deprecated: string | null = null;
  const see: string[] = [];

  for (const seg of segments) {
    const body = collapseWhitespace(seg.body);
    if (seg.tag === null) {
      description = body;
      continue;
    }
    switch (seg.tag) {
      case 'param': {
        const parsed = splitParam(body);
        if (parsed && parsed.name) params.set(parsed.name, parsed.description);
        break;
      }
      case 'returns':
      case 'return': {
        returns = body || returns;
        break;
      }
      case 'remarks':
      case 'remark': {
        remarks = body || remarks;
        break;
      }
      case 'deprecated': {
        deprecated = body || '';
        break;
      }
      case 'see': {
        if (body) see.push(body);
        break;
      }
      default:
        break;
    }
  }

  return { description, params, returns, remarks, deprecated, see };
};
