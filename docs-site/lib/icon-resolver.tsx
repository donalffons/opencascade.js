import { createElement, type ReactNode } from 'react';
import { icons, type LucideIcon } from 'lucide-react';

const LIB_ICONS = {
  npm: '/icons/npm.svg',
  docker: '/icons/docker.svg',
  webassembly: '/icons/webassembly.svg',
} as const;

type LibIconId = keyof typeof LIB_ICONS;

const isLibIconId = (id: string): id is LibIconId => id in LIB_ICONS;

/**
 * Parses Tau-style icon strings of the form `"namespace:icon-id extra classes"`
 * and renders them as React elements. Mirrors `apps/ui/app/components/icons/docs-icon.tsx`
 * so `meta.json` icons stay consistent with the upstream Tau pattern.
 *
 * Supported namespaces:
 *  - `lucide` — Lucide React icons
 *  - `lib` — brand SVGs shipped under `public/icons/`
 *
 * Examples:
 *  - `"lucide:package"` → `<Package />`
 *  - `"lucide:wrench text-amber"` → `<Wrench className="text-amber" />`
 *  - `"lib:npm"` → npm brand mark
 *  - `"lib:webassembly"` → WebAssembly brand mark
 */
export const resolveIcon = (icon: string | undefined): ReactNode => {
  if (icon === undefined) return undefined;
  const trimmed = icon.trim();
  if (trimmed === '') return undefined;

  const wsMatch = /\s/.exec(trimmed);
  const head = wsMatch === null ? trimmed : trimmed.slice(0, wsMatch.index);
  const tail = wsMatch === null ? undefined : trimmed.slice(wsMatch.index).trim();
  const className = tail !== undefined && tail !== '' ? tail : undefined;

  const colonIndex = head.indexOf(':');
  const namespace = colonIndex === -1 ? 'lucide' : head.slice(0, colonIndex);
  const id = colonIndex === -1 ? head : head.slice(colonIndex + 1);

  if (namespace === 'lib') {
    if (!isLibIconId(id)) {
      console.warn(`[icon-resolver] Unknown lib icon: "${id}"`);
      return undefined;
    }

    return (
      // eslint-disable-next-line @next/next/no-img-element -- brand marks are static SVG assets
      <img
        src={LIB_ICONS[id]}
        alt=""
        className={
          className === undefined
            ? 'size-4 shrink-0 object-contain'
            : `size-4 shrink-0 object-contain ${className}`
        }
      />
    );
  }

  if (namespace !== 'lucide' || id === '') {
    console.warn(`[icon-resolver] Unsupported icon string: "${icon}"`);
    return undefined;
  }

  const pascalCase = id
    .split('-')
    .map((segment) => (segment.length === 0 ? segment : segment[0]!.toUpperCase() + segment.slice(1)))
    .join('');

  const Component = (icons as Record<string, LucideIcon | undefined>)[pascalCase];
  if (!Component) {
    console.warn(`[icon-resolver] Unknown lucide icon: "${id}" (PascalCase: "${pascalCase}")`);
    return undefined;
  }

  return createElement(Component, { className });
};
