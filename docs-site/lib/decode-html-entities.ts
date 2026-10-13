const namedEntities: Record<string, string> = {
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  apos: "'",
};

const htmlEntityPattern = /&(?:#x([\dA-Fa-f]+)|#(\d+)|([A-Za-z]+));/g;

const decodeEntityReplacement = (match: string, ...captures: Array<string | undefined>): string => {
  const hex = captures[0] ?? '';
  const dec = captures[1] ?? '';
  const name = captures[2] ?? '';
  if (hex.length > 0) {
    const code = Number.parseInt(hex, 16);
    return Number.isFinite(code) ? String.fromCodePoint(code) : match;
  }

  if (dec.length > 0) {
    const code = Number.parseInt(dec, 10);
    return Number.isFinite(code) ? String.fromCodePoint(code) : match;
  }

  if (name.length > 0) {
    const entity = namedEntities[name];
    if (entity !== undefined) {
      return entity;
    }
  }

  return match;
};

/**
 * Decode HTML numeric and a small set of named character references in plain-text LLM output.
 * Safe for `getText('processed')` strings served as `text/plain` — output is not reparsed as HTML/MDX.
 */
export const decodeHtmlEntities = (input: string): string =>
  input.replaceAll(htmlEntityPattern, decodeEntityReplacement);
