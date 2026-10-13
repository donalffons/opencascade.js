/** Max bound classes per statically pre-rendered API package page (Vercel ISR body limit). */
export const API_PACKAGE_PAGE_SIZE = 100;

const PAGE_SEGMENT_RE = /^page-(\d+)$/;

export const packagePageCount = (classCount: number): number =>
  Math.max(1, Math.ceil(classCount / API_PACKAGE_PAGE_SIZE));

export const isPaginatedPackage = (classCount: number): boolean =>
  classCount > API_PACKAGE_PAGE_SIZE;

export const pageSegmentFor = (page: number): string | undefined =>
  page > 1 ? `page-${page}` : undefined;

export const parsePageSegment = (segment: string | undefined): number | undefined => {
  if (segment === undefined) return 1;
  const match = PAGE_SEGMENT_RE.exec(segment);
  if (!match) return undefined;
  const page = Number.parseInt(match[1] ?? '', 10);
  if (!Number.isFinite(page) || page < 2) return undefined;
  return page;
};

export const slicePackageClasses = <T>(
  classes: readonly T[],
  page: number,
): { readonly slice: readonly T[]; readonly page: number; readonly pageCount: number } => {
  const pageCount = packagePageCount(classes.length);
  const clampedPage = Math.min(Math.max(page, 1), pageCount);
  const start = (clampedPage - 1) * API_PACKAGE_PAGE_SIZE;
  return {
    slice: classes.slice(start, start + API_PACKAGE_PAGE_SIZE),
    page: clampedPage,
    pageCount,
  };
};
