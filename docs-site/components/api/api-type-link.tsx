import Link from 'next/link';
import type { ReactNode } from 'react';
import { loadTypeIndex } from '../../lib/api-type-index';

export type ApiTypeLinkProps = {
  readonly name: string;
  readonly children?: ReactNode;
  /**
   * Colour tone for the rendered token:
   * - `type` (default) — VSCode semantic highlighting for a type position:
   *   keywords take the keyword hue, everything else (primitives, resolved
   *   and unresolved OCCT identifiers) takes the type hue.
   * - `plain` — foreground colour regardless of resolution. Used by the
   *   `extends` inheritance chip, which the design keeps as a quiet,
   *   foreground-coloured chip rather than a coloured type reference.
   */
  readonly tone?: 'type' | 'plain';
};

/**
 * TypeScript keywords that the build-time denylist
 * (`data/api-type-index.json`) lumps together with primitive type names.
 * VSCode's semantic highlighting colours these two groups differently — true
 * keywords (`extends`, `readonly`, …) take the keyword hue, while primitive
 * types (`void`, `boolean`, `number`, …) take the type hue — so we split the
 * flat denylist back apart here.
 */
const TS_KEYWORDS = new Set([
  'readonly',
  'infer',
  'abstract',
  'declare',
  'extends',
  'implements',
  'keyof',
  'this',
  'return',
  'new',
  'typeof',
]);

/**
 * Inline type reference. Colours follow VSCode's default TypeScript semantic
 * highlighting so a signature reads like the editor would render it:
 *
 * - TypeScript keywords (`readonly`, `extends`, …) → keyword hue, no link.
 * - Primitive types (`void`, `boolean`, `number`, …) → type hue, no link.
 * - Resolved OCCT identifiers (`TopoDS_Face`, `Geom_Surface`, …) → type hue,
 *   navigable Next link with a subtle hover underline (no rest-state
 *   underline — matches the rest of the API surface).
 * - Unresolved identifiers → type hue, no link (still a type position).
 *
 * With `tone="plain"` every branch renders in plain foreground instead, used
 * by the `extends` inheritance chip.
 *
 * Resolution data comes from the build-time `data/api-type-index.json`.
 * Async RSC — no client JS for the lookup.
 */
export const ApiTypeLink = async ({
  name,
  children,
  tone = 'type',
}: ApiTypeLinkProps): Promise<ReactNode> => {
  const trimmed = name.trim();
  const label = children ?? trimmed;
  const { denylist, entries } = await loadTypeIndex();

  if (denylist.has(trimmed) || denylist.has(trimmed.toLowerCase())) {
    const isKeyword = TS_KEYWORDS.has(trimmed) || TS_KEYWORDS.has(trimmed.toLowerCase());
    const keywordClass = isKeyword ? 'text-api-keyword' : 'text-api-type';
    return <span className={tone === 'plain' ? 'text-fd-foreground' : keywordClass}>{label}</span>;
  }

  const colorClass = tone === 'plain' ? 'text-fd-foreground' : 'text-api-type';
  const hit = entries.get(trimmed);
  if (!hit) {
    return <span className={colorClass}>{label}</span>;
  }
  return (
    <Link
      href={`${hit.url}#${hit.fragment}`}
      data-shard={hit.shard}
      data-anchor={hit.fragment}
      className={`${colorClass} underline decoration-current/0 underline-offset-2 transition-[text-decoration-color] hover:decoration-current/60`}
    >
      {label}
    </Link>
  );
};
