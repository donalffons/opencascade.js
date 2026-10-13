import Link from 'next/link';
import type { ReactNode } from 'react';

export type ApiPackagePaginationProps = {
  readonly basePath: string;
  readonly page: number;
  readonly pageCount: number;
  readonly classCount: number;
};

export const ApiPackagePagination = ({
  basePath,
  page,
  pageCount,
  classCount,
}: ApiPackagePaginationProps): ReactNode => {
  if (pageCount <= 1) return null;

  const pageHref = (target: number): string =>
    target === 1 ? basePath : `${basePath}/page-${target}`;

  return (
    <nav
      aria-label="Package pages"
      className="not-prose flex flex-wrap items-center gap-2 rounded-md border border-fd-border bg-fd-muted/30 px-3 py-2 text-sm"
    >
      <span className="text-fd-muted-foreground">
        Page {page} of {pageCount}
        <span className="ml-1 tabular-nums">({classCount} classes)</span>
      </span>
      <span className="ml-auto flex flex-wrap gap-1">
        {page > 1 ? (
          <Link
            href={pageHref(page - 1)}
            className="rounded px-2 py-0.5 text-fd-foreground no-underline hover:bg-fd-accent/50"
          >
            Previous
          </Link>
        ) : null}
        {page < pageCount ? (
          <Link
            href={pageHref(page + 1)}
            className="rounded px-2 py-0.5 text-fd-foreground no-underline hover:bg-fd-accent/50"
          >
            Next
          </Link>
        ) : null}
      </span>
    </nav>
  );
};
