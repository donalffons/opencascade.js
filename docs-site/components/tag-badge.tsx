'use client';

import { useState } from 'react';
import type { ReactNode } from 'react';

export type TagBadgeProps = {
  /** GHCR tag, e.g. `ghcr.io/taucad/opencascade.js:3.0.0-beta.5` */
  readonly tag: string;
  readonly label?: string;
};

/**
 * Inline pill rendering a container image / GHCR tag with one-click copy.
 */
export const TagBadge = ({ tag, label }: TagBadgeProps): ReactNode => {
  const [copied, setCopied] = useState(false);
  const display = label ?? tag;

  const handleClick = async (): Promise<void> => {
    await globalThis.navigator?.clipboard?.writeText(tag);
    setCopied(true);
    globalThis.setTimeout?.(() => setCopied(false), 1200);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      title={copied ? 'Copied' : 'Click to copy'}
      className="inline-flex items-center gap-1 rounded-md border border-fd-border bg-fd-muted/40 px-2 py-0.5 font-mono text-xs text-fd-foreground transition-colors hover:bg-fd-muted"
    >
      <span aria-hidden>{copied ? '✓' : '📋'}</span>
      <span>{display}</span>
    </button>
  );
};
