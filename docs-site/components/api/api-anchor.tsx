'use client';

import { useState } from 'react';
import type { ReactNode } from 'react';
import { Link2, Check } from 'lucide-react';

export type ApiAnchorProps = {
  /** Stable element id this anchor targets (also becomes the URL hash). */
  readonly anchorId: string;
  /** Human-readable label (class or member name) for accessible naming. */
  readonly label: string;
};

/**
 * Copy a class or member deep link. The control appears on hover or keyboard
 * focus, replaces the URL hash without scrolling, and dispatches `hashchange`
 * so `ApiHashHighlight` confirms the target.
 */
export const ApiAnchor = ({ anchorId, label }: ApiAnchorProps): ReactNode => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (): Promise<void> => {
    const origin = globalThis.location?.origin ?? '';
    const pathname = globalThis.location?.pathname ?? '';
    // Update the hash + flash the target first so the anchor still works even
    // if the Clipboard API is unavailable (it rejects when the document is
    // unfocused or permission is denied). The tick only shows on a real copy.
    globalThis.history?.replaceState(null, '', `#${anchorId}`);
    globalThis.dispatchEvent?.(new HashChangeEvent('hashchange'));
    try {
      await globalThis.navigator?.clipboard?.writeText(`${origin}${pathname}#${anchorId}`);
      setCopied(true);
      globalThis.setTimeout?.(() => setCopied(false), 1200);
    } catch {
      // Clipboard blocked; the address-bar hash is already updated, so the
      // deep-link remains shareable via the URL bar.
    }
  };

  const Icon = copied ? Check : Link2;
  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? `Copied link to ${label}` : `Copy link to ${label}`}
      title={copied ? 'Copied link' : 'Copy link'}
      className={`ml-1 inline-flex size-5 shrink-0 translate-y-px items-center justify-center rounded text-fd-muted-foreground transition-[opacity,color] hover:text-fd-foreground focus-visible:opacity-100 group-hover:opacity-100 ${
        copied ? 'text-fd-foreground opacity-100' : 'opacity-0'
      }`}
    >
      <Icon aria-hidden className="size-3.5" />
    </button>
  );
};
