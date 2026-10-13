/**
 * Extracts TypeScript fences from the toolchain documentation and typechecks them together.
 * Fences marked `notypecheck` are standalone-incomplete excerpts and are excluded.
 */
import { spawnSync } from 'node:child_process';
import * as fs from 'node:fs';
import * as os from 'node:os';
import * as path from 'node:path';

import { describe, expect, it } from 'vitest';

const REPO_ROOT = path.resolve(import.meta.dirname, '../..');
const DOCS_DIRECTORY = path.join(REPO_ROOT, 'docs-site/content/docs/toolchain');
const TOOLCHAIN_ENTRY = path.join(REPO_ROOT, 'packages/toolchain/src/index.ts');
const TSC = path.join(REPO_ROOT, 'node_modules/typescript/lib/tsc.js');

/** Opt-out token in a fence info string; see the module docblock. */
const SKIP_MARKER = 'notypecheck';

type Sample = {
  /** Repo-relative source page. */
  readonly page: string;
  /** 1-based line of the opening fence. */
  readonly line: number;
  readonly code: string;
};

const mdxFiles = (directory: string): string[] =>
  fs
    .readdirSync(directory, { withFileTypes: true })
    .flatMap((entry) =>
      entry.isDirectory()
        ? mdxFiles(path.join(directory, entry.name))
        : entry.name.endsWith('.mdx')
          ? [path.join(directory, entry.name)]
          : [],
    );

/**
 * Pull every checkable TypeScript block out of one MDX page.
 *
 * @param file - Absolute path to the page.
 * @returns One entry per unmarked `ts` / `typescript` fence.
 */
export const extractSamples = (file: string): Sample[] => {
  const page = path.relative(REPO_ROOT, file);
  const lines = fs.readFileSync(file, 'utf8').split('\n');
  const samples: Sample[] = [];

  let openedAt: number | undefined;
  let info = '';
  let body: string[] = [];

  for (const [index, line] of lines.entries()) {
    const fence = /^```(.*)$/.exec(line);
    if (fence === null) {
      if (openedAt !== undefined) body.push(line);
      continue;
    }
    if (openedAt === undefined) {
      openedAt = index + 1;
      info = fence[1]!.trim();
      body = [];
      continue;
    }
    const language = info.split(/\s+/)[0];
    if (
      (language === 'ts' || language === 'typescript') &&
      !info.split(/\s+/).includes(SKIP_MARKER)
    ) {
      samples.push({ page, line: openedAt, code: body.join('\n') });
    }
    openedAt = undefined;
  }
  return samples;
};

/**
 * A consumer-shaped project: `strict`, bundler resolution, no repo-specific
 * compiler options. The scratch directory lives outside the repo, so the type
 * roots and the `@libcascade/toolchain` mapping are absolute — and
 * `allowImportingTsExtensions` is here only because the mapping resolves to the
 * package's own TypeScript sources, which import each other with `.ts`.
 */
const TSCONFIG = {
  compilerOptions: {
    module: 'ESNext',
    moduleResolution: 'bundler',
    target: 'ESNext',
    lib: ['ESNext', 'DOM'],
    types: ['node'],
    typeRoots: [path.join(REPO_ROOT, 'node_modules/@types')],
    strict: true,
    skipLibCheck: true,
    resolveJsonModule: true,
    allowImportingTsExtensions: true,
    noEmit: true,
    paths: { '@libcascade/toolchain': [TOOLCHAIN_ENTRY] },
  },
  include: ['./*.ts'],
};

/**
 * Write every sample into a scratch project and typecheck it in one pass.
 *
 * @param samples - Extracted blocks.
 * @returns The scratch directory, the tsc output, and the file→sample index.
 */
const typecheckSamples = (
  samples: readonly Sample[],
): { readonly raw: string; readonly status: number; readonly named: Map<string, Sample> } => {
  const scratch = fs.mkdtempSync(path.join(os.tmpdir(), 'libcascade-docs-samples-'));
  const named = new Map<string, Sample>();

  fs.writeFileSync(path.join(scratch, 'package.json'), '{ "type": "module" }\n');
  fs.writeFileSync(path.join(scratch, 'tsconfig.json'), JSON.stringify(TSCONFIG, undefined, 2));

  for (const sample of samples) {
    const name = `${sample.page.replaceAll(/[^A-Za-z0-9]+/g, '_')}_L${sample.line}.ts`;
    named.set(name, sample);
    fs.writeFileSync(path.join(scratch, name), `${sample.code}\n`);
  }

  const result = spawnSync(process.execPath, [TSC, '--project', scratch, '--pretty', 'false'], {
    encoding: 'utf8',
    cwd: scratch,
  });
  fs.rmSync(scratch, { recursive: true, force: true });
  return { raw: `${result.stdout}${result.stderr}`, status: result.status ?? -1, named };
};

const samples = mdxFiles(DOCS_DIRECTORY).sort().flatMap(extractSamples);

describe('toolchain docs TypeScript samples', () => {
  it('finds samples to check on the pages that teach the config', () => {
    const pages = new Set(samples.map((sample) => sample.page));
    expect(pages).toContain('docs-site/content/docs/toolchain/getting-started/quick-start.mdx');
    expect(pages).toContain('docs-site/content/docs/toolchain/reference/config.mdx');
    expect(samples.length).toBeGreaterThanOrEqual(4);
  });

  it('compiles every unmarked sample against the shipped toolchain types', () => {
    const { raw, status, named } = typecheckSamples(samples);
    const attributed = raw
      .split('\n')
      .filter((line) => line.includes('error TS'))
      .map((line) => {
        const file = /^([^(]+)\(/.exec(line.trim())?.[1];
        const sample = file === undefined ? undefined : named.get(path.basename(file));
        return sample === undefined ? line : `${sample.page}:${sample.line} → ${line.trim()}`;
      });
    expect(attributed, attributed.join('\n')).toEqual([]);
    expect(status).toBe(0);
  });
});
