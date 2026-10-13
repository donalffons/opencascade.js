import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const BUNDLER_PATH = resolve(
  import.meta.dirname,
  '../content/docs/package/guides/bundler-locatefile.mdx',
);

describe('bundler recipes', () => {
  it('should document Webpack 5 and legacy bundler disclaimer', () => {
    const body = readFileSync(BUNDLER_PATH, 'utf8');
    expect(body).toContain('## Webpack 5');
    expect(body).toContain('## Legacy bundlers');

    const legacyStart = body.indexOf('## Legacy bundlers');
    const legacySection = body.slice(legacyStart);
    expect(legacySection).toContain('Create-React-App');

    const beforeLegacy = body.slice(0, legacyStart);
    expect(beforeLegacy.includes('Create-React-App')).toBe(false);
  });
});
