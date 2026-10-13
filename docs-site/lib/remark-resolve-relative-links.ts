import path from 'node:path';

type VirtualFileLike = {
  readonly path?: string | undefined;
  readonly history?: string[] | undefined;
};

export type RemarkResolveRelativeLinksTransformer = (tree: unknown, file: VirtualFileLike) => void;

const routeGroupPattern = /^\([^)]+\)$/u;
const skipRelativePrefixRegex = /^(?:[a-z][\d+.a-z-]*:|mailto:|tel:|ftp:|\/\/)/iu;

const splitHrefPathnameAndSuffix = (href: string): { pathname: string; suffix: string } => {
  const hashIndex = href.indexOf('#');
  const queryIndex = href.indexOf('?');
  if (queryIndex !== -1 && (hashIndex === -1 || queryIndex < hashIndex)) {
    return { pathname: href.slice(0, queryIndex), suffix: href.slice(queryIndex) };
  }
  if (hashIndex !== -1) {
    return { pathname: href.slice(0, hashIndex), suffix: href.slice(hashIndex) };
  }
  return { pathname: href, suffix: '' };
};

export const findContentDocsDirectory = (filePath: string): string | undefined => {
  let current = path.dirname(path.resolve(filePath));
  for (let depth = 0; depth < 40; depth += 1) {
    if (path.basename(current) === 'docs' && path.basename(path.dirname(current)) === 'content') {
      return current;
    }
    const parent = path.dirname(current);
    if (parent === current) return undefined;
    current = parent;
  }
  return undefined;
};

export const markdownPathToDocsUrlPath = (
  resolvedMarkdownPathWithoutExtension: string,
  docsRoot: string,
): string | undefined => {
  const resolved = path.normalize(resolvedMarkdownPathWithoutExtension);
  const normalizedRoot = path.normalize(docsRoot);
  let relative = path.relative(normalizedRoot, resolved);
  if (relative.startsWith(`..${path.sep}`) || relative === '..') return undefined;
  relative = relative === '' ? '' : relative;
  let segments =
    relative === ''
      ? []
      : relative
          .split(path.sep)
          .filter(Boolean)
          .filter((segment) => !routeGroupPattern.test(segment));
  while (segments.length > 0 && segments.at(-1) === 'index') {
    segments = segments.slice(0, -1);
  }
  if (segments.length === 0) return '/docs';
  return `/docs/${segments.join('/')}`;
};

const rewriteHref = (rawUrl: string, sourceFilePath: string, docsRoot: string): string => {
  if (rawUrl === '' || skipRelativePrefixRegex.test(rawUrl) || rawUrl.startsWith('/') || rawUrl.startsWith('#')) {
    return rawUrl;
  }
  if (!(rawUrl.startsWith('./') || rawUrl.startsWith('../'))) return rawUrl;
  const { pathname, suffix } = splitHrefPathnameAndSuffix(rawUrl);
  const sourceDirectory = path.dirname(sourceFilePath);
  const resolvedTarget = path.resolve(sourceDirectory, pathname);
  const urlPath = markdownPathToDocsUrlPath(resolvedTarget, docsRoot);
  if (urlPath === undefined) return rawUrl;
  return `${urlPath}${suffix}`;
};

const readMdxHrefStringLiteral = (jsxAttribute: unknown): string | undefined => {
  if (typeof jsxAttribute !== 'object' || jsxAttribute === null || !('value' in jsxAttribute)) {
    return undefined;
  }
  const record = jsxAttribute as Record<string, unknown>;
  const raw = record['value'];
  return typeof raw === 'string' ? raw : undefined;
};

const isMdxJsxAttribute = (
  candidate: unknown,
): candidate is {
  readonly name: string;
  readonly type: 'mdxJsxAttribute';
  readonly value?: unknown;
} => {
  if (!candidate || typeof candidate !== 'object') return false;
  const object = candidate as { type?: unknown; name?: unknown };
  return object.type === 'mdxJsxAttribute' && typeof object.name === 'string';
};

const rewriteMdxHrefAttributeValue = (
  attributes: readonly unknown[],
  sourceFilePath: string,
  docsRoot: string,
): void => {
  for (const attribute of attributes) {
    if (!isMdxJsxAttribute(attribute) || attribute.name !== 'href') continue;
    const hrefCandidate = readMdxHrefStringLiteral(attribute);
    if (hrefCandidate === undefined) continue;
    (attribute as { value?: string }).value = rewriteHref(hrefCandidate, sourceFilePath, docsRoot);
  }
};

const visitRemarkTree = (node: unknown, sourceFilePath: string, docsRoot: string): void => {
  if (!node || typeof node !== 'object') return;
  const record = node as {
    readonly type?: string;
    readonly children?: unknown;
    readonly url?: string;
    readonly attributes?: readonly unknown[];
  };
  switch (record.type) {
    case 'link':
    case 'definition': {
      if (typeof record.url === 'string') {
        (record as { url: string }).url = rewriteHref(record.url, sourceFilePath, docsRoot);
      }
      break;
    }
    case 'mdxJsxFlowElement':
    case 'mdxJsxTextElement': {
      if (Array.isArray(record.attributes)) {
        rewriteMdxHrefAttributeValue(record.attributes, sourceFilePath, docsRoot);
      }
      break;
    }
    default:
      break;
  }
  const { children } = record;
  if (Array.isArray(children)) {
    for (const child of children) {
      visitRemarkTree(child, sourceFilePath, docsRoot);
    }
  }
};

/**
 * Remark plugin: resolve `./` / `../` markdown links against the MDX source file path
 * and rewrite them to absolute `/docs/…` URLs. Aligns compiled output with RFC 3986 +
 * browser behaviour (index pages served at `/docs` would otherwise collapse `./api/foo`
 * → `/api/foo`).
 */
export const remarkResolveRelativeLinks = (): RemarkResolveRelativeLinksTransformer => {
  return (tree: unknown, file: VirtualFileLike): void => {
    const pathname = file.path ?? file.history?.at(0);
    if (pathname === undefined) return;
    const docsRoot = findContentDocsDirectory(pathname);
    if (docsRoot === undefined) return;
    visitRemarkTree(tree, pathname, docsRoot);
  };
};
