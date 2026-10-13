import { describe, it, expect } from 'vitest';
import { readFileSync, globSync } from 'node:fs';
import { resolve } from 'node:path';
import { MAX_PROSE_WORDS, countWords } from '../tools/eslint-plugin/prose-rules.js';

/**
 * Vale owns the prose vocabulary — slop, superlatives, filler, temporal claims,
 * and internal planning references, over both `.mdx` and `.md`. It has no way
 * to express "this paragraph is too long to scan": `occurrence` counts token
 * matches, not words. That one check lives here, sharing its threshold with the
 * JSDoc rule so code comments and documentation are held to the same length.
 */
const DOCUMENTS = [
  'README.md',
  ...globSync('docs-site/content/**/*.mdx', { cwd: resolve(import.meta.dirname, '..') }).sort(),
] as const;

type Block = { readonly text: string; readonly line: number };

/**
 * Prose blocks only: fenced code, tables, and HTML are how a document carries
 * data rather than argument, and none of them are prose to be trimmed.
 */
const proseBlocks = (markdown: string): Block[] => {
  const lines = markdown.split(/\r?\n/u);
  const blocks: Block[] = [];
  let current: string[] = [];
  let start = 0;
  let fenced = false;

  const flush = (): void => {
    const text = current.join(' ').trim();
    if (text) blocks.push({ text, line: start + 1 });
    current = [];
  };

  for (const [index, raw] of lines.entries()) {
    // A blockquote is a wrapper, not a paragraph: strip the marker so the
    // structure inside it (lists, headings) is seen for what it is.
    const line = raw.replace(/^\s*>\s?/u, '');
    if (/^\s*```/u.test(line)) {
      flush();
      fenced = !fenced;
      continue;
    }
    if (fenced) continue;
    // Tables, HTML blocks, headings, and blank lines are structure.
    if (/^\s*(?:\||<|#)/u.test(line) || line.trim() === '') {
      flush();
      continue;
    }
    // A list item is its own thought; ten of them are not one long paragraph.
    if (/^\s*(?:[-*+]|\d+\.)\s/u.test(line)) flush();
    if (current.length === 0) start = index;
    current.push(line.trim());
  }
  flush();

  return blocks;
};

describe('prose length', () => {
  it('should have documents to check', () => {
    expect(DOCUMENTS.length).toBeGreaterThan(1);
  });

  it.each(DOCUMENTS)('should keep every prose block in %s scannable', (document) => {
    const markdown = readFileSync(resolve(import.meta.dirname, '..', document), 'utf8');
    const offenders = proseBlocks(markdown)
      .map((block) => ({ block, words: countWords(block.text) }))
      .filter(({ words }) => words > MAX_PROSE_WORDS)
      .map(({ block, words }) => `${document}:${block.line} — ${words} words`);
    expect(offenders).toEqual([]);
  });
});
