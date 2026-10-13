/**
 * Scan JavaScript and TypeScript for statically written OCCT symbol references.
 * `detect` produces a starting binding set; `check` reports referenced symbols
 * missing from a config. Dynamic, computed, and indirect class access is not
 * detected, so `check` is a drift guard rather than a completeness proof.
 */
import * as fs from 'node:fs';
import * as path from 'node:path';

import type { BuildConfig } from '../config/index.ts';

/** One entry of `generated/symbol-catalog.json`. */
export type CatalogSymbol = {
  readonly name: string;
  readonly kind: 'alias' | 'builtin' | 'class' | 'enum';
  /** Ancestor chain, verbatim from the api-reference — may name non-bindable classes. */
  readonly parents?: readonly string[];
  /** Member-signature types, already filtered to the bindable universe. */
  readonly referencedTypes?: readonly string[];
};

/** The bindable symbol universe, keyed by name. */
export type SymbolCatalog = ReadonlyMap<string, CatalogSymbol>;

const CATALOG_URL = new URL('../../generated/symbol-catalog.json', import.meta.url);

let catalogCache: SymbolCatalog | undefined;

/**
 * Load `generated/symbol-catalog.json` into a name-keyed map.
 *
 * Read through `fs` rather than a JSON import on purpose: a static import makes
 * `tsc` model 6,257 object literals as a union, and makes every `libcascade
 * build` pay the parse.
 *
 * @returns The bindable symbol universe, cached per process.
 */
export const loadSymbolCatalog = (): SymbolCatalog => {
  if (catalogCache !== undefined) return catalogCache;
  const parsed = JSON.parse(fs.readFileSync(CATALOG_URL, 'utf8')) as {
    readonly symbols: readonly CatalogSymbol[];
  };
  catalogCache = new Map(parsed.symbols.map((symbol) => [symbol.name, symbol]));
  return catalogCache;
};

/** Extensions treated as consumer source. */
const SOURCE_EXTENSIONS = new Set([
  '.cjs',
  '.cts',
  '.js',
  '.jsx',
  '.mjs',
  '.mts',
  '.ts',
  '.tsx',
]);

/**
 * Directories never descended into.
 *
 * `dist`/`build`/`out` hold compiled copies of the same source — scanning them
 * doubles the work and reports build artifacts as the provenance of a symbol.
 */
const SKIP_DIRECTORIES = new Set([
  '.cache',
  '.git',
  '.libcascade',
  '.next',
  '.turbo',
  'build',
  'coverage',
  'dist',
  'node_modules',
  'out',
]);

/** Declaration files, excluded — see {@link collectSourceFiles}. */
const isDeclarationFile = (fileName: string): boolean =>
  fileName.endsWith('.d.ts') || fileName.endsWith('.d.mts') || fileName.endsWith('.d.cts');

/**
 * Collect the source files under a directory (or the file itself).
 *
 * `.d.ts` is excluded because the generated OCCT `.d.ts` declares *every* bound
 * symbol — scanning it makes the seed set vacuously equal to the current
 * bindings and the whole scan meaningless (the typescript-detection session's
 * first false start).
 *
 * @param root - Directory or file to scan.
 * @returns Absolute paths, sorted so output is deterministic.
 */
export const collectSourceFiles = (root: string): readonly string[] => {
  const resolved = path.resolve(root);
  const stats = fs.statSync(resolved, { throwIfNoEntry: false });
  if (stats === undefined) {
    throw new Error(
      `Source path not found: ${resolved}. Pass the directory holding the code that uses \`oc.*\`, ` +
        'e.g. `libcascade detect src`.',
    );
  }
  if (stats.isFile()) {
    return isDeclarationFile(path.basename(resolved)) ? [] : [resolved];
  }

  const found: string[] = [];
  const walk = (directory: string): void => {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true }).sort((a, b) =>
      a.name.localeCompare(b.name),
    )) {
      const entryPath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        if (!SKIP_DIRECTORIES.has(entry.name)) walk(entryPath);
        continue;
      }
      if (isDeclarationFile(entry.name)) continue;
      if (SOURCE_EXTENSIONS.has(path.extname(entry.name))) found.push(entryPath);
    }
  };
  walk(resolved);
  return found;
};

/**
 * Comments and string literals, in one alternation so a `//` inside a string
 * (a URL, say) cannot blank the rest of a real line.
 */
const COMMENT_OR_STRING =
  /\/\*[\s\S]*?\*\/|\/\/[^\n]*|"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'|`(?:[^`\\]|\\.)*`/g;

/**
 * Replace comment bodies with spaces while preserving newlines and string
 * literals. Static bracket access in strings remains detectable; prose class
 * names inside strings also count as references.
 *
 * ponytail: regex tokenization can misread `//` inside regex literals; use an
 * AST scanner if that case becomes material.
 *
 * @param source - File contents.
 * @returns Text with comment bodies replaced by spaces.
 */
export const blankComments = (source: string): string =>
  source.replace(COMMENT_OR_STRING, (match) =>
    match.startsWith('//') || match.startsWith('/*') ? match.replace(/[^\n]/g, ' ') : match,
  );

/**
 * `oc.Symbol` — a member read off an instance conventionally named `oc`.
 *
 * The `\b` also matches inside `this.oc.X` and `_oc.X` is deliberately excluded
 * (`_` is a word character, so no boundary). This is the strong signal.
 */
const MEMBER_REFERENCE = /\boc\.([A-Za-z_][A-Za-z0-9_]*)/g;

/** Any identifier, filtered against the catalog by {@link resolveSymbolName}. */
const IDENTIFIER = /[A-Za-z_][A-Za-z0-9_]*/g;

/**
 * Resolve a scanned token to a catalog symbol.
 *
 * Overload-suffix strip: the generated d.ts names overloads `Geom2d_Line_1`,
 * `Geom2d_Line_2`, … while the binding is the base class. The full name is
 * tried **first** so a real symbol ending in digits survives — the catalog has
 * exactly one, `PCDM_ReadWriter_1`.
 *
 * @param token - The raw identifier.
 * @param catalog - The bindable universe.
 * @returns The catalog name, or `undefined` when the token is not a symbol.
 */
export const resolveSymbolName = (token: string, catalog: SymbolCatalog): string | undefined => {
  if (catalog.has(token)) return token;
  const stripped = token.replace(/_\d+$/, '');
  return stripped !== token && catalog.has(stripped) ? stripped : undefined;
};

/**
 * Whether a bare (non-`oc.`-prefixed) identifier may seed the scan.
 *
 * OCCT names are `Package_Class`; the catalog also holds 152 single-word names
 * (`Draft`, `Expr`, `Hermit`, `BRepTools`, …) that collide with ordinary
 * program identifiers. Requiring an underscore keeps type-only imports —
 * `import { TopoDS_Shape } from 'replicad-opencascadejs'`, which is how a
 * consumer references a class it never constructs — while not turning a local
 * called `Draft` into a demanded binding. Single-word symbols are still picked
 * up in their `oc.BRepTools` form.
 */
const isBareTokenCandidate = (name: string): boolean => name.includes('_');

/**
 * Whether a symbol is registered unconditionally by the bindgen.
 *
 * `kind: 'builtin'` names come from `src/ocjs_bindgen/embind_builtins.py`'s
 * `class_<…>("Name")` registrations (`OCJS`, `TopoDS`,
 * `TColStd_IndexedDataMapOfStringString`) — they exist in every build whatever
 * `bindings` says. They are therefore never *detected* (listing them is noise)
 * and never *demanded* by `check`: replicad's evaluator reads `oc.OCJS` to pull
 * kernel error data, and that must not be a drift failure.
 */
const isAlwaysBound = (symbol: CatalogSymbol): boolean => symbol.kind === 'builtin';

/** Where a symbol was first seen. */
export type SymbolReference = {
  readonly symbol: string;
  /** Absolute path. */
  readonly file: string;
  /** 1-based. */
  readonly line: number;
};

export type ScanResult = {
  /** Catalog symbols referenced by the source, first reference wins. */
  readonly referenced: ReadonlyMap<string, SymbolReference>;
  /**
   * `oc.X` members that are not catalog symbols: custom-binding names
   * (`ReplicadMeshExtractor`), Emscripten runtime members (`FS`, `wasmMemory`),
   * and typos. Never a failure — `check` cannot tell the three apart.
   */
  readonly unresolved: ReadonlyMap<string, SymbolReference>;
  readonly files: readonly string[];
};

/**
 * Scan consumer source for referenced OCCT symbols.
 *
 * @param roots - Directories (or files) to scan.
 * @param catalog - The bindable universe.
 * @returns Referenced symbols with first-reference provenance.
 */
export const scanSources = (roots: readonly string[], catalog: SymbolCatalog): ScanResult => {
  const referenced = new Map<string, SymbolReference>();
  const unresolved = new Map<string, SymbolReference>();
  const files = roots.flatMap((root) => collectSourceFiles(root));

  for (const file of files) {
    const lines = blankComments(fs.readFileSync(file, 'utf8')).split('\n');
    lines.forEach((line, index) => {
      const record = (target: Map<string, SymbolReference>, symbol: string): void => {
        if (!target.has(symbol)) target.set(symbol, { symbol, file, line: index + 1 });
      };
      const recordResolved = (name: string): void => {
        if (!isAlwaysBound(catalog.get(name) as CatalogSymbol)) record(referenced, name);
      };
      for (const match of line.matchAll(MEMBER_REFERENCE)) {
        const token = match[1] ?? '';
        const name = resolveSymbolName(token, catalog);
        if (name === undefined) record(unresolved, token);
        else recordResolved(name);
      }
      for (const match of line.matchAll(IDENTIFIER)) {
        const token = match[0];
        if (!isBareTokenCandidate(token)) continue;
        const name = resolveSymbolName(token, catalog);
        if (name !== undefined) recordResolved(name);
      }
    });
  }

  return { referenced, unresolved, files: [...files].sort((a, b) => a.localeCompare(b)) };
};

/** Why a symbol is in the detected set. */
export type Provenance =
  | { readonly kind: 'seed'; readonly file: string; readonly line: number }
  | { readonly kind: 'base'; readonly of: string }
  | { readonly kind: 'member'; readonly of: string };

/**
 * Fixpoint closure over the catalog.
 *
 * Two edge kinds, both mandatory for a build that survives runtime:
 *
 * - **parents** — an unbound base class makes the derived class's embind
 *   registration fail. `parents` is verbatim from the api-reference and names
 *   non-bindable ancestors too; those are skipped (not in the universe ⇒ cannot
 *   be requested).
 * - **referencedTypes** — member-signature types, already universe-filtered by
 *   the catalog generator. Calling a method whose return type is unbound is the
 *   textbook `BindingError`.
 *
 * Breadth-first so the recorded provenance is the shortest path to a seed.
 *
 * @param seeds - Symbol names from the scan.
 * @param catalog - The bindable universe.
 * @param seedReferences - Optional first-reference map, for `seed` provenance.
 * @returns Every symbol in the closure with its provenance.
 */
export const closeOverCatalog = (
  seeds: Iterable<string>,
  catalog: SymbolCatalog,
  seedReferences?: ReadonlyMap<string, SymbolReference>,
): ReadonlyMap<string, Provenance> => {
  const closed = new Map<string, Provenance>();
  const queue: string[] = [];
  for (const seed of seeds) {
    if (!catalog.has(seed) || closed.has(seed)) continue;
    const reference = seedReferences?.get(seed);
    closed.set(
      seed,
      reference === undefined
        ? { kind: 'seed', file: '', line: 0 }
        : { kind: 'seed', file: reference.file, line: reference.line },
    );
    queue.push(seed);
  }

  for (let head = 0; head < queue.length; head += 1) {
    const name = queue[head] as string;
    const symbol = catalog.get(name);
    if (symbol === undefined) continue;
    const edges: readonly (readonly [string, Provenance])[] = [
      ...(symbol.parents ?? []).map(
        (parent) => [parent, { kind: 'base', of: name }] as readonly [string, Provenance],
      ),
      ...(symbol.referencedTypes ?? []).map(
        (type) => [type, { kind: 'member', of: name }] as readonly [string, Provenance],
      ),
    ];
    for (const [next, provenance] of edges) {
      const target = catalog.get(next);
      if (closed.has(next) || target === undefined || isAlwaysBound(target)) continue;
      closed.set(next, provenance);
      queue.push(next);
    }
  }

  return closed;
};

/**
 * Expand a set of bound names with their typedef equivalents.
 *
 * The catalog carries OCCT typedefs as `alias` entries whose single
 * `referencedTypes` entry is the class the bindgen actually registers
 * (`TColgp_Array1OfPnt` → `NCollection_Array1_gp_Pnt`). A config may bind
 * either spelling while the source writes the other — replicad does exactly
 * this for `TColgp_Array1OfPnt`, `TColgp_Array1OfPnt2d` and
 * `TopTools_ListOfShape` — so `check` compares equivalence classes, not names.
 *
 * @param names - Bound symbol names.
 * @param catalog - The bindable universe.
 * @returns The names plus every alias equivalent, in both directions.
 */
export const expandAliases = (
  names: Iterable<string>,
  catalog: SymbolCatalog,
): ReadonlySet<string> => {
  const expanded = new Set(names);
  for (const symbol of catalog.values()) {
    if (symbol.kind !== 'alias') continue;
    const targets = symbol.referencedTypes ?? [];
    if (expanded.has(symbol.name)) for (const target of targets) expanded.add(target);
    else if (targets.some((target) => expanded.has(target))) expanded.add(symbol.name);
  }
  return expanded;
};

/** Mandatory caveats. Every user-facing detect/check surface prints these. */
export const CAVEATS: readonly string[] = [
  'This is a STARTING SET, not a minimal set. Review it; do not treat it as an answer.',
  'A successful build proves nothing about completeness — a missing binding links fine and fails at RUNTIME with `BindingError`. Only running the code exercises it.',
  'Not a size tool. Measured ceiling: −14% symbols bought −0.9% brotli (embind registrations are GC roots, so dropped bindings free glue, not kernel code); `--gufa` is a size regression.',
  'Never auto-remove. `detect` cannot see symbols reserved for external callers or referenced only by custom C++; review every consumer before dropping bindings.',
  'Regex/token scan, not AST: dynamic access (`oc[name]`) and names built by concatenation are invisible to it.',
];

/** Format a reference path for humans: relative when that is shorter. */
const displayPath = (file: string, baseDirectory: string): string => {
  const relative = path.relative(baseDirectory, file);
  return relative.startsWith('..') || path.isAbsolute(relative) ? file : relative;
};

export type DetectOptions = {
  readonly roots: readonly string[];
  readonly catalog?: SymbolCatalog;
  /** Paths are printed relative to this. @defaultValue `process.cwd()` */
  readonly baseDirectory?: string;
};

export type DetectResult = {
  readonly scan: ScanResult;
  readonly closure: ReadonlyMap<string, Provenance>;
  /** Closure names, sorted — the emitted `bindings` order. */
  readonly bindings: readonly string[];
};

/**
 * Run the seed scan and the closure.
 *
 * @param options - Roots to scan and the catalog to close over.
 * @returns The scan, the closure, and the sorted binding list.
 */
export const detect = (options: DetectOptions): DetectResult => {
  const catalog = options.catalog ?? loadSymbolCatalog();
  const scan = scanSources(options.roots, catalog);
  const closure = closeOverCatalog(scan.referenced.keys(), catalog, scan.referenced);
  return { scan, closure, bindings: [...closure.keys()].sort((a, b) => a.localeCompare(b)) };
};

/**
 * Render the ready-to-paste `bindings` fragment.
 *
 * @param result - The {@link detect} result.
 * @param options - Roots (echoed into the header) and the path display base.
 * @returns A TypeScript fragment with the caveats as a leading comment block.
 */
export const renderBindings = (result: DetectResult, options: DetectOptions): string => {
  const baseDirectory = options.baseDirectory ?? process.cwd();
  const seedCount = result.scan.referenced.size;
  const closureCount = result.bindings.length - seedCount;

  const lines: string[] = [
    `// Generated by \`libcascade detect ${options.roots.join(' ')}\``,
    `// ${result.scan.files.length} source files scanned · ${seedCount} symbols referenced · ` +
      `${closureCount} added by closure (base classes + member-signature types).`,
    '//',
    ...CAVEATS.map((caveat) => `// ${caveat}`),
    '',
    '  bindings: [',
  ];

  for (const name of result.bindings) {
    const provenance = result.closure.get(name);
    const note =
      provenance === undefined
        ? ''
        : provenance.kind === 'seed'
          ? provenance.file === ''
            ? ' // seed'
            : ` // seed: ${displayPath(provenance.file, baseDirectory)}:${provenance.line}`
          : provenance.kind === 'base'
            ? ` // closure: base of ${provenance.of}`
            : ` // closure: member type of ${provenance.of}`;
    lines.push(`    '${name}',${note}`);
  }
  lines.push('  ],');

  if (result.scan.unresolved.size > 0) {
    lines.push(
      '',
      `// ${result.scan.unresolved.size} \`oc.*\` members are not OCCT symbols. Custom C++ bindings`,
      '// belong in `customBindings`; the rest are Emscripten runtime members or typos:',
      ...[...result.scan.unresolved.keys()]
        .sort((a, b) => a.localeCompare(b))
        .map((name) => {
          const reference = result.scan.unresolved.get(name) as SymbolReference;
          return `//   ${name} — ${displayPath(reference.file, baseDirectory)}:${reference.line}`;
        }),
    );
  }

  return `${lines.join('\n')}\n`;
};

/** Machine-readable `detect --json` payload. */
export const toDetectJson = (
  result: DetectResult,
  options: DetectOptions,
): Record<string, unknown> => {
  const baseDirectory = options.baseDirectory ?? process.cwd();
  return {
    $generatedBy: `libcascade detect ${options.roots.join(' ')}`,
    caveats: CAVEATS,
    filesScanned: result.scan.files.length,
    bindings: result.bindings,
    symbols: result.bindings.map((name) => {
      const provenance = result.closure.get(name) as Provenance;
      return provenance.kind === 'seed'
        ? {
            name,
            origin: 'seed',
            ...(provenance.file === ''
              ? {}
              : { file: displayPath(provenance.file, baseDirectory), line: provenance.line }),
          }
        : { name, origin: `closure:${provenance.kind}`, from: provenance.of };
    }),
    unresolved: [...result.scan.unresolved.values()]
      .map((reference) => ({
        name: reference.symbol,
        file: displayPath(reference.file, baseDirectory),
        line: reference.line,
      }))
      .sort((a, b) => a.name.localeCompare(b.name)),
  };
};

export type CheckResult = {
  readonly scan: ScanResult;
  /** Referenced symbols absent from `bindings` ∪ `customBindings[].symbols`. */
  readonly missing: readonly SymbolReference[];
  /** Referenced symbol count (catalog names only). */
  readonly referencedCount: number;
};

/**
 * The `check` comparison: referenced ⊆ bound.
 *
 * Compares against the **seed scan only**, never the closure. The closure is a
 * safety over-approximation for onboarding; demanding it in CI would fail every
 * config that a human has since curated.
 *
 * @param config - The loaded build config.
 * @param roots - Source directories to scan.
 * @param catalog - The bindable universe.
 * @returns The scan plus the missing symbols, sorted by name.
 */
export const check = (
  config: BuildConfig,
  roots: readonly string[],
  catalog: SymbolCatalog = loadSymbolCatalog(),
): CheckResult => {
  const scan = scanSources(roots, catalog);
  const bound = expandAliases(
    [...config.bindings, ...(config.customBindings ?? []).flatMap((entry) => entry.symbols)],
    catalog,
  );
  const missing = [...scan.referenced.values()]
    .filter((reference) => !bound.has(reference.symbol))
    .sort((a, b) => a.symbol.localeCompare(b.symbol));
  return { scan, missing, referencedCount: scan.referenced.size };
};

/**
 * Render the `check` failure report.
 *
 * @param result - The {@link check} result (must have missing symbols).
 * @param configPath - Config file to name in the fix instructions.
 * @param baseDirectory - Path display base.
 * @returns The multi-line error message.
 */
export const renderCheckFailure = (
  result: CheckResult,
  configPath: string,
  baseDirectory: string,
): string =>
  [
    `libcascade check: ${result.missing.length} referenced symbol` +
      `${result.missing.length === 1 ? ' is' : 's are'} not bound by ` +
      `${displayPath(configPath, baseDirectory)}.`,
    '',
    ...result.missing.map(
      (reference) =>
        `  ${reference.symbol}\n      first referenced at ${displayPath(reference.file, baseDirectory)}:${reference.line}`,
    ),
    '',
    `Fix: add ${result.missing.length === 1 ? 'it' : 'them'} to \`bindings\` in ${displayPath(configPath, baseDirectory)}:`,
    '',
    '  bindings: [',
    '    // …',
    ...result.missing.map((reference) => `    '${reference.symbol}',`),
    '  ],',
    '',
    'This is why the check exists: a missing binding does NOT fail `libcascade build`.',
    'It links successfully and throws `BindingError` at runtime, on whichever code path',
    'first touches the symbol. `check` converts that runtime failure into a build-time one.',
  ].join('\n');
