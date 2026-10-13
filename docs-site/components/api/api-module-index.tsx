import Link from 'next/link';
import type { ReactNode } from 'react';
import { loadIndex } from './api-data';

const kebab = (input: string): string =>
  input
    .replace(/([a-z\d])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();

export type ApiModuleIndexProps = {
  readonly moduleName: string;
};

/**
 * Toolkit grid for a single OCCT module. Rendered inside Fumadocs'
 * `<DocsBody>`, which applies Tailwind Typography prose styles by default —
 * `not-prose` opts the structured nav out so links don't pick up the
 * underline-everything `prose a` rule.
 */
export const ApiModuleIndex = async ({ moduleName }: ApiModuleIndexProps): Promise<ReactNode> => {
  const index = await loadIndex();
  const ocModule = index.modules.find((m) => m.name === moduleName);
  if (!ocModule) {
    return <div className="not-prose">Unknown module: {moduleName}</div>;
  }
  const moduleSlug = kebab(ocModule.name);
  return (
    <div className="not-prose space-y-6">
      <div className="grid gap-3 sm:grid-cols-2">
        {ocModule.toolkits.map((toolkit) => (
          <Link
            key={toolkit.name}
            href={`/docs/package/api/${moduleSlug}/${kebab(toolkit.name)}`}
            className="group block rounded-lg border border-fd-border bg-fd-card p-4 no-underline transition-colors hover:border-fd-primary/60 hover:bg-fd-accent/30"
          >
            <div className="font-mono text-sm font-semibold text-fd-foreground">
              {toolkit.name}
            </div>
            <div className="mt-1.5 text-sm leading-snug text-fd-muted-foreground">
              {toolkit.headline}
            </div>
            <div className="mt-3 flex items-center gap-1.5 text-xs text-fd-muted-foreground">
              <span className="tabular-nums">{toolkit.classCount}</span>
              <span>{toolkit.classCount === 1 ? 'class' : 'classes'}</span>
              <span aria-hidden className="text-fd-border">·</span>
              <span className="tabular-nums">{toolkit.packages.length}</span>
              <span>{toolkit.packages.length === 1 ? 'package' : 'packages'}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
