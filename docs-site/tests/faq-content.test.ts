import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const FAQ_PATH = resolve(
  import.meta.dirname,
  '../content/docs/package/getting-started/faq.mdx',
);

describe('faq content', () => {
  it('should describe current maintenance, lineage, and contribution without subordinate-fork claims', () => {
    const body = readFileSync(FAQ_PATH, 'utf8');
    const headings = [...body.matchAll(/^## (.+)$/gm)].map((m) => m[1]!.toLowerCase());
    expect(headings.some((h) => h.includes('maintain'))).toBe(true);
    expect(headings.some((h) => h.includes('contribute'))).toBe(true);
    expect(body).toContain('taucad/opencascade.js');
    expect(body).toContain('Sebastian Alff');
    for (const rejected of [
      'Tau-maintained fork',
      'upstream is dormant',
      'merge back upstream',
      'maintainer-of-record',
    ]) {
      expect(body).not.toContain(rejected);
    }
  });
});
