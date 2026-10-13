'use client';

import { useEffect } from 'react';

const FLASH_CLASS = 'api-anchor-flash';

/**
 * Scrolls the element matching the current URL hash into view and briefly
 * flashes a highlight ring on it. Re-adding the animation class after a forced
 * reflow restarts the keyframes even when the same target is re-linked.
 */
const focusHash = (): void => {
  const hash = globalThis.location?.hash;
  if (!hash || hash.length < 2) return;
  const id = decodeURIComponent(hash.slice(1));
  const element = globalThis.document?.getElementById(id);
  if (!element) return;
  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  element.classList.remove(FLASH_CLASS);
  void element.offsetWidth;
  element.classList.add(FLASH_CLASS);
  globalThis.setTimeout?.(() => element.classList.remove(FLASH_CLASS), 1600);
};

/**
 * Client-only behaviour for API anchor deep-links. On initial mount (page
 * loaded with a `#Class` / `#Class-Member` hash) and on every subsequent
 * `hashchange` — whether from clicking a member-name link or copying a link
 * via `ApiAnchor` — smooth-scrolls the target into view and flashes a
 * highlight so the linked class/member is easy to spot. Renders nothing.
 */
export const ApiHashHighlight = (): null => {
  useEffect(() => {
    // Defer the initial pass so the SSR'd target is in the DOM and any native
    // hash jump has settled before the smooth-scroll + flash.
    const initial = globalThis.setTimeout?.(focusHash, 60);
    globalThis.addEventListener?.('hashchange', focusHash);
    return () => {
      globalThis.clearTimeout?.(initial);
      globalThis.removeEventListener?.('hashchange', focusHash);
    };
  }, []);
  return null;
};
