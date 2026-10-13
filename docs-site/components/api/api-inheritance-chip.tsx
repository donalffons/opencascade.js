import type { ReactNode } from 'react';
import { ApiTypeLink } from './api-type-link';

export type ApiInheritanceChipProps = {
  readonly type: string;
};

/**
 * Clickable type chip used in the inheritance chain (`extends`) row of
 * `ApiClassCard`. Rendered with the `plain` tone so the parent class name
 * reads as a quiet, foreground-coloured chip rather than a coloured type
 * reference — the chip's border + muted background already signal it as a
 * distinct element. Resolves through `ApiTypeLink`; misses render as a plain
 * chip.
 */
export const ApiInheritanceChip = ({ type }: ApiInheritanceChipProps): ReactNode => {
  const trimmed = (type ?? '').trim();
  if (!trimmed) return undefined;
  return (
    <span className="inline-flex items-center rounded-md border border-fd-border/60 bg-fd-muted/40 px-2 py-0.5 font-mono text-[0.6875rem] leading-relaxed transition-colors hover:border-fd-border">
      <ApiTypeLink name={trimmed} tone="plain" />
    </span>
  );
};
