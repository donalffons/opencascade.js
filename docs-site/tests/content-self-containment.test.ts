import { describe, it, expect } from 'vitest';
import { promises as fs } from 'node:fs';
import { join, resolve } from 'node:path';

const DOCS_DIR = resolve(import.meta.dirname, '../content/docs');
const EXCLUDED = new Set(['api']);

const collectMdxFiles = async (dir: string, acc: string[] = []): Promise<string[]> => {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (EXCLUDED.has(entry.name)) continue;
      await collectMdxFiles(full, acc);
    } else if (entry.name.endsWith('.mdx')) {
      acc.push(full);
    }
  }
  return acc;
};

const parseFrontmatter = (body: string): Record<string, string> => {
  const match = body.match(/^---\n([\s\S]+?)\n---\n/);
  if (!match) return {};
  const out: Record<string, string> = {};
  for (const line of match[1]!.split('\n')) {
    const m = line.match(/^([A-Za-z_-]+):\s*(.*)$/);
    if (!m) continue;
    let value = m[2]!.trim();
    if (value.startsWith("'") && value.endsWith("'")) {
      value = value.slice(1, -1).replaceAll("''", "'");
    } else if (value.startsWith('"') && value.endsWith('"')) {
      value = value.slice(1, -1);
    }
    out[m[1]!] = value;
  }
  return out;
};

describe('content self-containment', () => {
  it('should have a non-empty title and description ≤160 chars in every narrative MDX page', async () => {
    const files = await collectMdxFiles(DOCS_DIR);
    expect(files.length, 'no MDX pages found — content tree missing').toBeGreaterThan(0);
    const violations: string[] = [];
    for (const file of files) {
      const body = await fs.readFile(file, 'utf8');
      const fm = parseFrontmatter(body);
      if (!fm.title) violations.push(`${file}: missing title`);
      if (!fm.description) violations.push(`${file}: missing description`);
      else if (fm.description.length > 160) {
        violations.push(`${file}: description length ${fm.description.length} > 160`);
      }
    }
    expect(violations, violations.join('\n')).toEqual([]);
  });

  it('should contain zero references to internal research docs in narrative MDX', async () => {
    const forbiddenPrefix = ['docs', 'research'].join('/') + '/';
    const files = await collectMdxFiles(DOCS_DIR);
    const hits: string[] = [];
    for (const file of files) {
      const body = await fs.readFile(file, 'utf8');
      if (body.includes(forbiddenPrefix)) hits.push(file);
    }
    expect(hits, hits.join('\n')).toEqual([]);
  });

  it('should never mention `asyncDispose` / `await using` in narrative docs — libcascade only exposes the synchronous `Symbol.dispose` API', async () => {
    const bannedPatterns: ReadonlyArray<RegExp> = [/asyncDispose/i, /await\s+using\b/];
    const files = await collectMdxFiles(DOCS_DIR);
    const hits: string[] = [];
    for (const file of files) {
      const body = await fs.readFile(file, 'utf8');
      for (const pattern of bannedPatterns) {
        if (pattern.test(body)) {
          hits.push(`${file}: matches ${pattern}`);
          break;
        }
      }
    }
    expect(hits, hits.join('\n')).toEqual([]);
  });

  it('should not surface v2-era patterns in Concepts MDX — Handle_* constructors, .get() unwraps, _N overload suffixes, TopTools aliases, pre-D1 downcasts, build-flags.json path, .value on enums, "stripped" prose', async () => {
    const conceptsDirs = [
      join(DOCS_DIR, 'package/concepts'),
      join(DOCS_DIR, 'toolchain/concepts'),
    ];
    const files = (
      await Promise.all(conceptsDirs.map((dir) => collectMdxFiles(dir)))
    ).flat();
    expect(files.length, 'concepts MDX dir empty').toBeGreaterThan(0);

    const bannedRegex: ReadonlyArray<{ readonly label: string; readonly pattern: RegExp }> = [
      {
        label: 'Handle_* constructor — `new oc.Handle_Foo(...)` is the pre-V3 wrapper class pattern; V3 returns Transients directly.',
        pattern: /\bnew\s+oc\.Handle_[A-Z]/,
      },
      {
        label: 'Handle.get() unwrap — pre-V3 pattern; V3 wrappers ARE the Handle.',
        pattern: /Handle[A-Za-z_]*\.get\(\)/,
      },
      {
        label: '`_N` overload suffix on a common type (`gp_Pnt_2`, `BRepPrimAPI_MakeBox_3`, …) — pre-B1 syntax.',
        pattern: /\boc\.(?:gp_Pnt|gp_Vec|gp_Dir|gp_Pnt2d|gp_Ax1|gp_Ax2|gp_XY|BRepPrimAPI_MakeBox|BRepBuilderAPI_MakeEdge|TopoDS_Shape)_\d+\b/,
      },
      {
        label: 'TopTools_ListOfShape used as a live binding — legacy NCollection alias; use NCollection_List_TopoDS_Shape. (Educational mentions are fine; banned forms are `new oc.TopTools_ListOfShape` and `oc.TopTools_ListOfShape(`.)',
        pattern: /\boc\.TopTools_ListOfShape\s*[(]|new\s+oc\.TopTools_ListOfShape\b/,
      },
      {
        label: 'Pre-D1 downcast — root-level `oc.TopoDS_Edge(...)` etc; use the namespace bridge `oc.TopoDS.Edge(...)`.',
        pattern: /\boc\.TopoDS_(?:Edge|Face|Wire|Vertex|Shell|Solid|CompSolid|Compound)\s*\(/,
      },
      {
        label: 'Wrong build-flags path — `dist/opencascade_single.build-flags.json` is not shipped; use `build/build-flags.json` (in-repo) or `dist/opencascade_single.provenance.json` (tarball).',
        pattern: /dist\/opencascade_single\.build-flags\.json/,
      },
      {
        label: 'Enum `.value` access — `oc.SomeEnum.Member.value` does not exist; the member IS the string.',
        pattern: /\boc\.[A-Z]\w+\.[A-Z]\w+\.value\b/,
      },
    ];

    const bannedSubstrings: ReadonlyArray<{ readonly label: string; readonly needle: string }> = [
      {
        label: '"primitive output params are stripped" — wrong; primitive/enum outputs use input-passthrough placeholders.',
        needle: 'primitive output params are stripped',
      },
      {
        label: '"primitive outputs are stripped" — wrong; primitive/enum outputs use input-passthrough placeholders.',
        needle: 'primitive outputs are stripped',
      },
      {
        label: '"are removed from the signature" — implies a zero-arg call site; libcascade retains placeholder positions for primitive/enum outputs.',
        needle: 'are removed from the signature',
      },
      {
        label: 'Pre-V3 envelope field name — `result` was renamed to `returnValue` in B4.',
        needle: 'r.result',
      },
    ];

    const hits: string[] = [];
    for (const file of files) {
      const body = await fs.readFile(file, 'utf8');
      for (const { label, pattern } of bannedRegex) {
        const match = body.match(pattern);
        if (match) hits.push(`${file}: ${label}\n    matched: ${JSON.stringify(match[0])}`);
      }
      for (const { label, needle } of bannedSubstrings) {
        if (body.includes(needle)) hits.push(`${file}: ${label}\n    matched: ${JSON.stringify(needle)}`);
      }
    }
    expect(hits, hits.join('\n')).toEqual([]);
  });

  // The wasm binary is exposed through the `libcascade/wasm`
  // subpath export. Deep imports under `libcascade/dist/...`
  // bypass the package's `exports` map (so they break the moment the
  // map declares anything) and force consumers to know internal layout.
  // Catch any doc snippet that regresses to the old deep-import shape.
  it('should never deep-import `libcascade/dist/...` in narrative docs — use the `/wasm` subpath export', async () => {
    const files = await collectMdxFiles(DOCS_DIR);
    const bannedPath = 'libcascade/dist/';
    const hits: string[] = [];
    for (const file of files) {
      const body = (await fs.readFile(file, 'utf8')).replace(/<auto-type-table\b[^>]*\/>/g, '');
      if (body.includes(bannedPath)) {
        hits.push(
          `${file}: deep import of libcascade/dist/* — replace with the \`/wasm\` subpath export`,
        );
      }
    }
    expect(hits, hits.join('\n')).toEqual([]);
  });
});
