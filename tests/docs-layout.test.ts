/**
 * Fork-internal layout guards for the `docs/` tree.
 *
 * Public documentation lives in `docs-site/content/docs`; the root `docs/`
 * tree contains only repository policy, research, and implementation notes.
 * Every relative link here must resolve and every Markdown file needs an H1.
 *
 * These guards stay inside the fork and assert filesystem facts only.
 */
import { describe, it, expect } from 'vitest';
import * as fs from 'node:fs';
import * as path from 'node:path';

const REPO_ROOT = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(REPO_ROOT, 'docs');

const walkMarkdownFiles = (root: string): string[] => {
  const out: string[] = [];
  const stack: string[] = [root];
  while (stack.length > 0) {
    const dir = stack.pop();
    if (dir === undefined) continue;
    let entries: fs.Dirent[];
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
      continue;
    }
    for (const ent of entries) {
      const full = path.join(dir, ent.name);
      if (ent.isDirectory()) {
        stack.push(full);
      } else if (ent.isFile() && ent.name.endsWith('.md')) {
        out.push(full);
      }
    }
  }
  return out;
};

// Strip fenced code blocks so links inside ``` ... ``` (e.g. shell examples)
// are not mistaken for navigable Markdown links.
const stripCodeFences = (src: string): string =>
  src.replace(/```[\s\S]*?```/g, '').replace(/`[^`\n]*`/g, '');

// Matches `[label](target)` markdown links. Excludes the leading `!` (image
// references) by anchoring on a non-`!` character or string start.
const MARKDOWN_LINK_RE = /(^|[^!])\[([^\]]+)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;

interface LinkRef {
  file: string;
  rawTarget: string;
  line: number;
}

const extractRelativeLinks = (file: string): LinkRef[] => {
  const src = fs.readFileSync(file, 'utf8');
  const stripped = stripCodeFences(src);
  const out: LinkRef[] = [];
  let m: RegExpExecArray | null;
  const lines = stripped.split('\n');
  while ((m = MARKDOWN_LINK_RE.exec(stripped)) !== null) {
    const target = m[3];
    if (target === undefined) continue;
    if (
      target.startsWith('http://') ||
      target.startsWith('https://') ||
      target.startsWith('mailto:') ||
      target.startsWith('#')
    ) {
      continue;
    }
    const before = stripped.slice(0, m.index);
    const line = before.split('\n').length;
    out.push({ file, rawTarget: target, line });
  }
  // Suppress lint by referencing lines.
  void lines.length;
  return out;
};

describe('docs/ markdown relative links resolve', () => {
  it('every relative link points at an existing file or directory', () => {
    const files = walkMarkdownFiles(DOCS_DIR);
    expect(files.length, 'expected at least one markdown file under docs/').toBeGreaterThan(0);
    const broken: string[] = [];
    for (const file of files) {
      const links = extractRelativeLinks(file);
      for (const link of links) {
        const [pathPart] = link.rawTarget.split('#');
        if (pathPart === undefined || pathPart === '') continue;
        const resolved = path.resolve(path.dirname(file), pathPart);
        if (!fs.existsSync(resolved)) {
          broken.push(
            `${path.relative(REPO_ROOT, file)}:${link.line} -> ${link.rawTarget} (resolved: ${path.relative(REPO_ROOT, resolved)})`,
          );
        }
      }
    }
    expect(
      broken,
      `Broken relative links in docs/:\n  ${broken.join('\n  ')}`,
    ).toHaveLength(0);
  });
});

describe('docs/ markdown H1 presence', () => {
  it('every markdown file under docs/ starts with an H1 within the first 5 lines', () => {
    const files = walkMarkdownFiles(DOCS_DIR);
    const offenders: string[] = [];
    for (const file of files) {
      const source = fs.readFileSync(file, 'utf8');
      const body = source.startsWith('---\n')
        ? source.slice(source.indexOf('\n---\n', 4) + 5)
        : source;
      const head = body.split('\n').slice(0, 5);
      const hasH1 = head.some((line) => /^#\s+\S/.test(line));
      if (!hasH1) {
        offenders.push(
          `${path.relative(REPO_ROOT, file)}: first 5 lines:\n    ${head.join('\n    ')}`,
        );
      }
    }
    expect(
      offenders,
      `Markdown files missing an H1 in the first 5 lines:\n  ${offenders.join('\n  ')}`,
    ).toHaveLength(0);
  });
});
