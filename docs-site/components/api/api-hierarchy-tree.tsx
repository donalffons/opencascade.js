import Link from 'next/link';
import type { ReactNode } from 'react';
import { loadIndex } from './api-data';

const kebab = (input: string): string =>
  input
    .replace(/([a-z\d])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();

const ApiStat = ({ label, value }: { readonly label: string; readonly value: ReactNode }): ReactNode => (
  <div className="flex flex-col gap-0.5">
    <span className="text-[0.6875rem] uppercase tracking-wider text-fd-muted-foreground">
      {label}
    </span>
    <span className="font-medium text-fd-foreground tabular-nums">{value}</span>
  </div>
);

/**
 * Renders the full API hierarchy on the `/docs/package/api` landing page as a
 * Module / Toolkit / Package tree. Reads `data/index.json` at build time;
 * no client JS.
 */
export const ApiHierarchyTree = async (): Promise<ReactNode> => {
  const index = await loadIndex();
  const manifest = index.manifest;

  return (
    <div className="not-prose space-y-6">
      <div className="rounded-lg border border-fd-border bg-fd-muted/20 px-5 py-4">
        <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:grid-cols-3 lg:grid-cols-5">
          <ApiStat
            label="wasm"
            value={manifest?.wasm_bytes ? `${Math.round(manifest.wasm_bytes / 1_000_000)} MB` : '—'}
          />
          <ApiStat label="compiled" value={manifest?.compiled ?? '—'} />
          <ApiStat label="requested" value={manifest?.requested ?? '—'} />
          <ApiStat label="classes" value={index.totals?.classes ?? '—'} />
          <ApiStat label="search entries" value={index.totals?.searchEntries ?? '—'} />
        </div>
      </div>

      <div className="space-y-3">
        {index.modules.map((ocModule) => {
          const moduleSlug = kebab(ocModule.name);
          return (
            <details
              key={ocModule.name}
              className="group rounded-lg border border-fd-border bg-fd-card transition-colors open:border-fd-border [&[open]>summary]:border-b [&[open]>summary]:border-fd-border"
            >
              <summary className="flex cursor-pointer list-none items-baseline gap-2 px-4 py-2.5 font-medium select-none">
                <span
                  aria-hidden
                  className="text-xs text-fd-muted-foreground transition-transform group-open:rotate-90"
                >
                  ▸
                </span>
                <Link
                  href={`/docs/package/api/${moduleSlug}`}
                  className="text-fd-foreground no-underline transition-colors hover:text-fd-primary"
                >
                  {ocModule.name}
                </Link>
                <span className="ml-auto text-xs text-fd-muted-foreground">
                  <span className="tabular-nums">{ocModule.classCount}</span> classes ·{' '}
                  <span className="tabular-nums">{ocModule.toolkitCount}</span> toolkits
                </span>
              </summary>
              <div className="space-y-3 px-4 py-3 text-sm">
                {ocModule.toolkits.map((toolkit) => {
                  const toolkitSlug = kebab(toolkit.name);
                  return (
                    <div key={toolkit.name}>
                      <div className="flex items-baseline gap-2">
                        <Link
                          href={`/docs/package/api/${moduleSlug}/${toolkitSlug}`}
                          className="font-mono font-medium text-fd-foreground no-underline transition-colors hover:text-fd-primary"
                        >
                          {toolkit.name}
                        </Link>
                        <span className="text-xs text-fd-muted-foreground">
                          <span className="tabular-nums">{toolkit.classCount}</span> classes
                        </span>
                      </div>
                      <div className="ml-4 mt-1.5 flex flex-wrap gap-x-3 gap-y-1 text-xs">
                        {toolkit.packages.map((pkg) => (
                          <Link
                            key={pkg.name}
                            href={`/docs/package/api/${moduleSlug}/${toolkitSlug}/${kebab(pkg.name)}`}
                            className="font-mono text-fd-muted-foreground no-underline transition-colors hover:text-fd-foreground"
                          >
                            {pkg.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </details>
          );
        })}
      </div>
    </div>
  );
};
