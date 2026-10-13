import Link from 'next/link';
import type { ReactNode } from 'react';
import { loadIndex } from './api-data';

const kebab = (input: string): string =>
  input
    .replace(/([a-z\d])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();

export type ApiToolkitIndexProps = {
  readonly moduleName: string;
  readonly toolkitName: string;
};

/**
 * Package grid for a single toolkit. Uses `not-prose` to opt out of
 * Fumadocs prose typography (which underlines every link by default).
 */
export const ApiToolkitIndex = async ({
  moduleName,
  toolkitName,
}: ApiToolkitIndexProps): Promise<ReactNode> => {
  const index = await loadIndex();
  const ocModule = index.modules.find((m) => m.name === moduleName);
  const toolkit = ocModule?.toolkits.find((t) => t.name === toolkitName);
  if (!ocModule || !toolkit) {
    return (
      <div className="not-prose">
        Unknown toolkit: {moduleName}/{toolkitName}
      </div>
    );
  }
  const moduleSlug = kebab(ocModule.name);
  const toolkitSlug = kebab(toolkit.name);
  return (
    <div className="not-prose space-y-6">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {toolkit.packages.map((pkg) => (
          <Link
            key={pkg.name}
            href={`/docs/package/api/${moduleSlug}/${toolkitSlug}/${kebab(pkg.name)}`}
            className="group block rounded-lg border border-fd-border bg-fd-card p-4 no-underline transition-colors hover:border-fd-primary/60 hover:bg-fd-accent/30"
          >
            <div className="font-mono text-sm font-semibold text-fd-foreground">
              {pkg.name}
            </div>
            <div className="mt-2 flex items-center gap-1.5 text-xs text-fd-muted-foreground">
              <span className="tabular-nums">{pkg.classes.length}</span>
              <span>{pkg.classes.length === 1 ? 'class' : 'classes'}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
