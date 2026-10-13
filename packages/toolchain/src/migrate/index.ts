/**
 * Convert one or more container yml files into a typed
 * `libcascade.config.ts`. Unknown keys fail; untyped flags remain in
 * `rawFlags`; custom symbols are derived from C++ files; common values become
 * the base config and differences become variant overrides.
 */
import * as fs from 'node:fs';
import * as path from 'node:path';

import { parse } from 'yaml';

import type { EmccSettingValue } from '../config/index.ts';
import { blankComments, loadSymbolCatalog } from '../detect/index.ts';

import packageJson from '../../package.json' with { type: 'json' };
import settingsMeta from '../../generated/emcc-settings.meta.json' with { type: 'json' };

/** One yml to migrate. */
export type YmlSource = {
  /** Path as the user typed it; used in the provenance header and in errors. */
  readonly label: string;
  /** Directory the yml's relative `.cpp` paths resolve against. */
  readonly directory: string;
  readonly contents: string;
};

export type MigrateOptions = {
  readonly sources: readonly YmlSource[];
  /**
   * Directory the emitted config will live in. `customBindings[].file` paths
   * are rendered relative to it, because that is what the config loader
   * resolves them against.
   */
  readonly outputDirectory: string;
  /** Provenance date. @defaultValue UTC date at migration time */
  readonly date?: string;
};

export type MigrateResult = {
  /** The `libcascade.config.ts` text. */
  readonly contents: string;
  /** Human-facing findings; the CLI prints these to stderr. */
  readonly notes: readonly string[];
};

/** The exception helpers emsdk 6.0.5 requires of a `-fwasm-exceptions` link. */
const EXCEPTION_HELPERS = [
  'getExceptionMessage',
  'incrementExceptionRefcount',
  'decrementExceptionRefcount',
] as const;

const TOP_LEVEL_KEYS = new Set([
  'mainBuild',
  'extraBuilds',
  'additionalCppFiles',
  'generateTypescriptDefinitions',
]);
const BUILD_KEYS = new Set(['name', 'bindings', 'emccFlags', 'additionalBindFiles']);

/** Settings the renderer serialises as a comma list rather than a bracketed one. */
const COMMA_LIST_SETTINGS = new Set<string>(settingsMeta.commaLists);

/**
 * `name → declared value type`, read back out of the generated
 * `emcc-settings.d.ts`.
 *
 * The value grammar has to be *deserialised*, and only the generated types know
 * it: `-sEVAL_CTORS=2` is a number, `-sMODULARIZE=1` is a boolean, and nothing
 * in the flag string itself distinguishes them. `emcc-settings.meta.json` only
 * carries the serialisation buckets the renderer needs, so this reads the same
 * generator's other output.
 *
 * ponytail: regex over a generated file with a fixed emitter shape, not a
 * TypeScript parse. Upgrade path is the generator emitting the type map into
 * the meta json — a generator change, which C4 is not.
 */
let settingTypeCache: ReadonlyMap<string, string> | undefined;
const settingTypes = (): ReadonlyMap<string, string> => {
  if (settingTypeCache !== undefined) return settingTypeCache;
  const declarations = fs.readFileSync(
    new URL('../../generated/emcc-settings.d.ts', import.meta.url),
    'utf8',
  );
  const types = new Map<string, string>();
  // `EmccSettings` comes first in the file; `VariantEmccSettings` repeats every
  // field with `| null` appended, so first-wins keeps the undecorated type.
  for (const match of declarations.matchAll(/^ {2}readonly (\w+)\?: (.+);$/gm)) {
    if (!types.has(match[1]!)) types.set(match[1]!, match[2]!);
  }
  settingTypeCache = types;
  return types;
};

/**
 * One `mainBuild` or `extraBuilds[]` entry, normalised.
 *
 * `cppFiles` and `generateTypescriptDefinitions` come from the yml's top level
 * and are therefore shared by every build in that file.
 */
type Build = {
  readonly label: string;
  readonly directory: string;
  /** Artifact base name — `mainBuild.name` without the `.js`. */
  readonly base: string;
  readonly bindings: readonly string[];
  readonly bindFiles: readonly string[];
  readonly cppFiles: readonly string[];
  readonly generateTypescriptDefinitions: boolean;
  readonly flags: readonly string[];
};

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const stringList = (value: unknown, where: string): readonly string[] => {
  if (value === undefined) return [];
  if (!Array.isArray(value) || value.some((entry) => typeof entry !== 'string')) {
    throw new Error(`${where} must be a list of strings (got ${JSON.stringify(value)}).`);
  }
  return value as readonly string[];
};

/**
 * Normalise one yml into its builds.
 *
 * @param source - The yml text and where it came from.
 * @returns `mainBuild` first, then each `extraBuilds` entry.
 * @throws Error naming any key the typed config cannot express.
 */
const parseSource = (source: YmlSource): readonly Build[] => {
  const document: unknown = parse(source.contents);
  if (!isRecord(document)) {
    throw new Error(`${source.label} is not a yml mapping.`);
  }

  const unknownKeys = Object.keys(document).filter((key) => !TOP_LEVEL_KEYS.has(key));
  if (unknownKeys.length > 0) {
    throw new Error(
      `${source.label} has ${unknownKeys.length} unknown top-level key(s): ${unknownKeys.join(', ')}. ` +
        `The container yml schema declares only ${[...TOP_LEVEL_KEYS].join(', ')} ` +
        '(src/customBuildSchema.py). Migrating it would silently drop them — remove the key, or ' +
        'migrate this file by hand.',
    );
  }

  const cppFiles = stringList(document['additionalCppFiles'], `${source.label}: additionalCppFiles`);
  const generateTypescriptDefinitions = document['generateTypescriptDefinitions'] ?? true;
  if (typeof generateTypescriptDefinitions !== 'boolean') {
    throw new Error(`${source.label}: generateTypescriptDefinitions must be a boolean.`);
  }

  const toBuild = (entry: unknown, label: string): Build => {
    if (!isRecord(entry)) throw new Error(`${label} is not a mapping.`);
    const unknown = Object.keys(entry).filter((key) => !BUILD_KEYS.has(key));
    if (unknown.length > 0) {
      throw new Error(
        `${label} has unknown key(s): ${unknown.join(', ')}. The schema declares only ` +
          `${[...BUILD_KEYS].join(', ')}.`,
      );
    }
    const name = entry['name'];
    if (typeof name !== 'string' || !name.endsWith('.js')) {
      throw new Error(
        `${label}: name must be a string ending in ".js" (got ${JSON.stringify(name)}). ` +
          'The renderer derives the artifact base name from it.',
      );
    }
    const bindings = entry['bindings'];
    if (bindings !== undefined && !Array.isArray(bindings)) {
      throw new Error(`${label}: bindings must be a list.`);
    }
    return {
      label,
      directory: source.directory,
      base: name.slice(0, -'.js'.length),
      bindings: ((bindings ?? []) as readonly unknown[]).map((binding, index) => {
        if (!isRecord(binding) || typeof binding['symbol'] !== 'string') {
          throw new Error(`${label}: bindings[${index}] is not \`{ symbol: <string> }\`.`);
        }
        const extra = Object.keys(binding).filter((key) => key !== 'symbol');
        if (extra.length > 0) {
          throw new Error(`${label}: bindings[${index}] has unknown key(s): ${extra.join(', ')}.`);
        }
        return binding['symbol'];
      }),
      bindFiles: stringList(entry['additionalBindFiles'], `${label}: additionalBindFiles`),
      cppFiles,
      generateTypescriptDefinitions,
      flags: stringList(entry['emccFlags'], `${label}: emccFlags`),
    };
  };

  const extraBuilds = document['extraBuilds'] ?? [];
  if (!Array.isArray(extraBuilds)) throw new Error(`${source.label}: extraBuilds must be a list.`);

  return [
    toBuild(document['mainBuild'], `${source.label}: mainBuild`),
    ...extraBuilds.map((entry, index) => toBuild(entry, `${source.label}: extraBuilds[${index}]`)),
  ];
};

/** Strip emcc's bracketed-list syntax and split it. */
const parseList = (raw: string): readonly string[] => {
  const inner = raw.startsWith('[') && raw.endsWith(']') ? raw.slice(1, -1) : raw;
  if (inner.trim() === '') return [];
  return inner
    .split(',')
    .map((item) => item.trim())
    .map((item) =>
      (item.startsWith('"') && item.endsWith('"')) || (item.startsWith("'") && item.endsWith("'"))
        ? item.slice(1, -1)
        : item,
    );
};

/**
 * Deserialise one `-sNAME[=VALUE]` into the value the typed `settings` surface
 * wants, using the grammar the generated types declare.
 *
 * @param setting - Setting name, without the `-s`.
 * @param raw - Everything after the `=`; `undefined` for a bare `-sNAME`.
 * @returns The value, or `undefined` when this setting/value pair has no typed
 *   representation — the caller then keeps the flag verbatim in `rawFlags`.
 */
export const deserializeSetting = (
  setting: string,
  raw: string | undefined,
): EmccSettingValue | undefined => {
  const type = settingTypes().get(setting);
  if (type === undefined) return undefined;
  // emcc reads a valueless `-sNAME` as `-sNAME=1`.
  if (raw === undefined) return type.includes('boolean') ? true : undefined;

  if (type === 'MemorySize') {
    if (/^\d+$/.test(raw)) return Number(raw);
    return /^\d+(KB|MB|GB)$/.test(raw) ? raw : undefined;
  }
  if (type === 'readonly []') return parseList(raw).length === 0 ? [] : undefined;
  if (type.endsWith('[]')) return COMMA_LIST_SETTINGS.has(setting) ? raw.split(',') : parseList(raw);
  if (type === "number | 'navigator.hardwareConcurrency'") {
    if (/^\d+$/.test(raw)) return Number(raw);
    return raw === 'navigator.hardwareConcurrency' ? raw : undefined;
  }
  if (type.includes('boolean') && /number|\b0\b|\b1\b/.test(type)) {
    if (raw === '0') return false;
    if (raw === '1') return true;
    return /^-?\d+$/.test(raw) ? Number(raw) : undefined;
  }
  if (type === 'boolean') {
    if (raw === '0' || raw === 'false') return false;
    return raw === '1' || raw === 'true' ? true : undefined;
  }
  if (type === 'number') return /^-?\d+(\.\d+)?$/.test(raw) ? Number(raw) : undefined;
  if (type === 'string') return raw;
  // A closed string-literal union (`'quiet' | 'verbose'`).
  return type.includes(`'${raw}'`) ? raw : undefined;
};

type ParsedFlags = {
  readonly settings: Map<string, EmccSettingValue>;
  readonly compilerFlags: Map<string, string | boolean>;
  readonly rawFlags: string[];
};

/** `-flag` → the `CompilerFlags` key/value it means. */
const TYPED_FLAGS = new Map<string, readonly [string, string | boolean]>([
  ['-fwasm-exceptions', ['exceptions', 'wasm']],
  ['-fexceptions', ['exceptions', 'emscripten']],
  ['-flto', ['lto', true]],
  ['--no-entry', ['noEntry', true]],
  ['-pthread', ['threads', true]],
  ['-msimd128', ['simd', true]],
]);

const SETTING_FLAG = /^-s([A-Za-z0-9_]+)(?:=([\s\S]*))?$/;

/**
 * Classify one build's `emccFlags` into the three typed buckets.
 *
 * | Flag shape | Bucket |
 * | --- | --- |
 * | `-fwasm-exceptions`, `-fexceptions`, `-flto`, `--no-entry`, `-pthread`, `-msimd128` | `compilerFlags` |
 * | `-O0`…`-O3`, `-Os`, `-Oz` | `compilerFlags.optimize` |
 * | `-sNAME[=VALUE]` with a representable value | `settings` |
 * | everything else, including an unrepresentable `-sNAME=VALUE` | `rawFlags`, verbatim |
 *
 * The last row is the honest bucket, not the failure bucket: `rawFlags` renders
 * back byte-identically, so a flag nobody modelled still reaches emcc. What
 * would be dishonest is not saying so — every entry is listed in the emitted
 * config's review block and in {@link MigrateResult.notes}.
 *
 * @param build - The build whose flags to classify.
 * @param notes - Collector for human-facing findings.
 * @returns The three buckets.
 */
const parseFlags = (build: Build, notes: string[]): ParsedFlags => {
  const parsed: ParsedFlags = { settings: new Map(), compilerFlags: new Map(), rawFlags: [] };

  for (const flag of build.flags) {
    const typed = TYPED_FLAGS.get(flag);
    if (typed !== undefined) {
      parsed.compilerFlags.set(typed[0], typed[1]);
      continue;
    }
    if (/^-O[0123sz]$/.test(flag)) {
      parsed.compilerFlags.set('optimize', flag.slice(1));
      continue;
    }
    const setting = SETTING_FLAG.exec(flag);
    if (setting !== null) {
      const value = deserializeSetting(setting[1]!, setting[2]);
      if (value !== undefined) {
        if (parsed.settings.has(setting[1]!)) {
          notes.push(
            `${build.label}: -s${setting[1]!} appears more than once; kept the last occurrence ` +
              '(emcc\'s own rule). Check the rendered flags against the original.',
          );
        }
        parsed.settings.set(setting[1]!, value);
        continue;
      }
      notes.push(
        `${build.label}: kept \`${flag}\` in rawFlags — ` +
          (settingTypes().has(setting[1]!)
            ? 'its value has no representation in the generated value grammar.'
            : `\`${setting[1]!}\` is not a setting of emsdk ${settingsMeta.emsdkVersion} (the pinned image).`),
      );
      parsed.rawFlags.push(flag);
      continue;
    }
    notes.push(`${build.label}: kept \`${flag}\` in rawFlags — no typed \`compilerFlags\` member models it.`);
    parsed.rawFlags.push(flag);
  }

  return parsed;
};

/** A comment the emitter writes above the thing it explains. */
type Annotation = { readonly target: string; readonly lines: readonly string[] };

/**
 * Record one explanation, at most once per target.
 *
 * Every build gets modernized independently, so N builds carrying the same
 * stale flag would otherwise stack N copies of the same comment above the one
 * key they all resolve to.
 */
const annotate = (annotations: Annotation[], annotation: Annotation): void => {
  if (annotations.some((existing) => existing.target === annotation.target)) return;
  annotations.push(annotation);
};

/**
 * Replace `USE_PTHREADS` with the typed thread flag and ensure wasm-exception
 * runtime helpers are exported. Each rewrite is recorded in output annotations
 * and migration notes.
 *
 * @param parsed - One build's classified flags, mutated in place.
 * @param annotations - Collector for emitted explanations.
 * @param notes - Collector for human-facing findings.
 */
const modernize = (parsed: ParsedFlags, annotations: Annotation[], notes: string[]): void => {
  const usePthreads = parsed.settings.get('USE_PTHREADS');
  if (usePthreads !== undefined) {
    parsed.settings.delete('USE_PTHREADS');
    if (usePthreads === false || usePthreads === 0) {
      notes.push('Dropped `-sUSE_PTHREADS=0`: the config expresses "not threaded" by omission.');
    } else {
      parsed.compilerFlags.set('threads', true);
      annotate(annotations, {
        target: 'threads',
        lines: [
          'Was `-sUSE_PTHREADS=1` in the yml — emcc keeps that name only as a',
          'deprecated legacy alias of `-pthread`, so the config states it once.',
        ],
      });
      notes.push('Modernization: `-sUSE_PTHREADS` → `compilerFlags: { threads: true }` (deprecated alias).');
    }
  }

  if (parsed.compilerFlags.get('exceptions') !== 'wasm') return;

  const hadHelpersSetting = parsed.settings.delete('EXPORT_EXCEPTION_HANDLING_HELPERS');
  const exported = parsed.settings.get('EXPORTED_RUNTIME_METHODS');
  const methods = Array.isArray(exported) ? [...(exported as readonly string[])] : [];
  const missing = EXCEPTION_HELPERS.filter((helper) => !methods.includes(helper));
  if (missing.length === 0 && !hadHelpersSetting) return;

  parsed.settings.set('EXPORTED_RUNTIME_METHODS', [...methods, ...missing]);
  annotate(annotations, {
    target: 'EXPORTED_RUNTIME_METHODS',
    lines: [
      'emsdk 6.0.5 hard-fails a `-fwasm-exceptions` link unless these three',
      'helpers are exported, and it removed `-sEXPORT_EXCEPTION_HANDLING_HELPERS`',
      `(which the yml carried). Added: ${missing.join(', ') || 'nothing, already present'}.`,
    ],
  });
  notes.push(
    'Modernization: exception helpers added to `EXPORTED_RUNTIME_METHODS`' +
      (hadHelpersSetting ? ' and `-sEXPORT_EXCEPTION_HANDLING_HELPERS` dropped' : '') +
      ' (emsdk 6.0.5).',
  );
};

const sameValue = (left: EmccSettingValue | undefined, right: EmccSettingValue | undefined): boolean =>
  Array.isArray(left) && Array.isArray(right)
    ? left.length === right.length && left.every((item, index) => item === right[index])
    : left === right;

const commonPrefix = (values: readonly string[]): string => {
  const [first = '', ...rest] = values;
  let length = first.length;
  for (const value of rest) {
    while (length > 0 && value.slice(0, length) !== first.slice(0, length)) length -= 1;
  }
  return first.slice(0, length);
};

/**
 * Split `<name>_<variant>` artifact names into a config name and variant names.
 * Inputs without a shared delimited prefix use yml-derived variant names and
 * retain their artifact names through `outputName`.
 *
 * @param builds - The builds, in declaration order.
 * @returns The config name and positional variant names.
 */
const deriveNames = (
  builds: readonly Build[],
): { readonly name: string; readonly variantNames: readonly string[] } => {
  const bases = builds.map((build) => build.base);
  const prefix = commonPrefix(bases);
  const cut = prefix.endsWith('_') ? prefix.length - 1 : prefix.lastIndexOf('_');
  if (cut > 0 && bases.every((base) => base.length > cut + 1)) {
    return { name: prefix.slice(0, cut), variantNames: bases.map((base) => base.slice(cut + 1)) };
  }

  const seen = new Set<string>();
  const variantNames = builds.map((build, index) => {
    const stem = path.basename(build.label.split(':')[0]!.trim()).replace(/\.ya?ml$/, '');
    const candidate = /^[A-Za-z0-9_-]+$/.test(stem) ? stem : `variant${index + 1}`;
    const unique = seen.has(candidate) ? `${candidate}${index + 1}` : candidate;
    seen.add(unique);
    return unique;
  });
  return { name: bases[0]!, variantNames };
};

/**
 * Extract top-level class, struct, and Embind registration names from a custom
 * C++ file.
 *
 * ponytail: regex over comment-free source excludes indented nested classes;
 * use libclang if supported wrappers exceed this grammar.
 *
 * @param file - Absolute path to the `.cpp`.
 * @returns Names in file order, or `undefined` when the file cannot be read.
 */
export const extractSymbols = (file: string): readonly string[] | undefined => {
  let source: string;
  try {
    source = blankComments(fs.readFileSync(file, 'utf8'));
  } catch {
    return undefined;
  }
  const symbols = new Set<string>();
  for (const match of source.matchAll(/^(?:class|struct)\s+([A-Za-z_]\w*)\s*(?:final\s*)?(?::[^{;]*)?\{/gm)) {
    symbols.add(match[1]!);
  }
  for (const match of source.matchAll(/\bclass_<[^>]*>\s*\(\s*"([^"]+)"/g)) {
    symbols.add(match[1]!);
  }
  return [...symbols];
};

const quote = (value: string): string => `'${value.replaceAll('\\', '\\\\').replaceAll("'", "\\'")}'`;

const literal = (value: EmccSettingValue | null): string => {
  if (value === null) return 'null';
  if (Array.isArray(value)) return `[${value.map((item) => quote(item)).join(', ')}]`;
  if (typeof value === 'string') return quote(value);
  return String(value);
};

/** Emit `key: value` lines for a settings map, with any annotation above. */
const renderSettings = (
  settings: ReadonlyMap<string, EmccSettingValue | null>,
  annotations: readonly Annotation[],
  indent: string,
): string =>
  [...settings]
    .flatMap(([setting, value]) => {
      const oneLine = `${indent}${setting}: ${literal(value)},`;
      return [
        ...annotations
          .filter((annotation) => annotation.target === setting)
          .flatMap((annotation) => annotation.lines.map((line) => `${indent}// ${line}`)),
        ...(oneLine.length <= 100 || !Array.isArray(value)
          ? [oneLine]
          : [
              `${indent}${setting}: [`,
              ...(value as readonly string[]).map((item) => `${indent}  ${quote(item)},`),
              `${indent}],`,
            ]),
      ];
    })
    .join('\n');

const renderCompilerFlags = (flags: ReadonlyMap<string, string | boolean>): string =>
  `{ ${[...flags].map(([flag, value]) => `${flag}: ${typeof value === 'string' ? quote(value) : String(value)}`).join(', ')} }`;

/**
 * Migrate one or more v2 container ymls into a typed config.
 *
 * @param options - Sources, and the directory the config will live in.
 * @returns The config text and the findings a human must review.
 * @throws Error when a yml carries a construct the typed config cannot express,
 *   or when the ymls are not variants of one build.
 */
export const migrate = ({ sources, outputDirectory, date }: MigrateOptions): MigrateResult => {
  if (sources.length === 0) throw new Error('migrate needs at least one yml.');

  const notes: string[] = [];
  const builds = sources.flatMap(parseSource);

  // One config describes ONE binding set built N ways: `bindings`,
  // `customBindings` and `generateTypescriptDefinitions` are config-level, with
  // no per-variant form to fall back to. Two ymls that disagree on them are two
  // configs, and merging them would silently build one of them wrong.
  const [reference, ...others] = builds as [Build, ...Build[]];
  const differences = others.flatMap((build) => [
    ...(build.bindings.join('\n') === reference.bindings.join('\n')
      ? []
      : [`bindings (${reference.bindings.length} vs ${build.bindings.length} symbols)`]),
    ...(build.bindFiles.join('\n') === reference.bindFiles.join('\n')
      ? []
      : ['additionalBindFiles']),
    ...(build.cppFiles.join('\n') === reference.cppFiles.join('\n') ? [] : ['additionalCppFiles']),
    ...(build.generateTypescriptDefinitions === reference.generateTypescriptDefinitions
      ? []
      : ['generateTypescriptDefinitions']),
  ]);
  if (differences.length > 0) {
    throw new Error(
      `These ymls are not variants of one build: they disagree on ${[...new Set(differences)].join(', ')}. ` +
        'A libcascade config has one `bindings` list and one `customBindings` set shared by every ' +
        'variant — only flags and the artifact name may differ. Migrate them one at a time instead.',
    );
  }
  if (new Set(builds.map((build) => build.base)).size !== builds.length) {
    throw new Error(
      `Duplicate artifact name(s) among ${builds.map((build) => build.base).join(', ')}. ` +
        'Each build must produce a distinct file.',
    );
  }

  const annotations: Annotation[] = [];
  const parsed = builds.map((build) => {
    const flags = parseFlags(build, notes);
    modernize(flags, annotations, notes);
    return flags;
  });

  // Base = the value the most builds agree on — *including* "not set at all",
  // which is why a setting only the threaded build carries lands on that variant
  // rather than in the base with a `null` unset in every other one. Ties go to
  // the first yml, which is what makes the two-yml case read the way a human
  // writes it: the base is the first build, each other build is its delta.
  const settingNames = [...new Set(parsed.flatMap((flags) => [...flags.settings.keys()]))];
  const baseSettings = new Map<string, EmccSettingValue>();
  const variantSettings = parsed.map(() => new Map<string, EmccSettingValue | null>());
  for (const setting of settingNames) {
    const values = parsed.map((flags) => flags.settings.get(setting));
    const count = (candidate: EmccSettingValue | undefined): number =>
      values.filter((value) => sameValue(value, candidate)).length;
    // Iterated in build order with a strict `>`, so the earliest wins a tie.
    let base = values[0];
    for (const candidate of values) if (count(candidate) > count(base)) base = candidate;

    if (base !== undefined) baseSettings.set(setting, base);
    for (const [index, value] of values.entries()) {
      if (sameValue(value, base)) continue;
      // Only a base key can be unset; a variant-only key is simply declared.
      if (value === undefined) variantSettings[index]!.set(setting, null);
      else variantSettings[index]!.set(setting, value);
    }
  }

  // Compiler flags have no `null` unset (and need none): a flag not every build
  // carries is simply declared on the variants that do.
  const flagNames = [...new Set(parsed.flatMap((flags) => [...flags.compilerFlags.keys()]))];
  const baseFlags = new Map<string, string | boolean>();
  const variantFlags = parsed.map(() => new Map<string, string | boolean>());
  for (const flag of flagNames) {
    const values = parsed.map((flags) => flags.compilerFlags.get(flag));
    if (values.every((value) => value !== undefined && value === values[0])) {
      baseFlags.set(flag, values[0]!);
      continue;
    }
    for (const [index, value] of values.entries()) {
      if (value !== undefined) variantFlags[index]!.set(flag, value);
    }
  }

  // Raw flags are order-significant relative to each other, so the shared set is
  // taken as a sub-sequence of the first build rather than as a set.
  const baseRawFlags = parsed[0]!.rawFlags.filter((flag) =>
    parsed.every((flags) => flags.rawFlags.includes(flag)),
  );
  const variantRawFlags = parsed.map((flags) =>
    flags.rawFlags.filter((flag) => !baseRawFlags.includes(flag)),
  );

  const { name, variantNames } = deriveNames(builds);

  const catalog = loadSymbolCatalog();
  const claimed = new Set<string>();
  const customBindingLines: string[] = [];
  const todoFiles: string[] = [];
  for (const [file, scope] of [
    ...reference.bindFiles.map((file) => [file, 'main'] as const),
    ...reference.cppFiles.map((file) => [file, 'all'] as const),
  ]) {
    const resolved = path.resolve(reference.directory, file);
    const relative = path.relative(outputDirectory, resolved).split(path.sep).join('/');
    const symbols = extractSymbols(resolved);
    const scopeSuffix = scope === 'main' ? ", scope: 'main'" : '';
    if (symbols !== undefined && symbols.length > 0) {
      for (const symbol of symbols) claimed.add(symbol);
      customBindingLines.push(
        `    { file: ${quote(relative)}, symbols: [${symbols.map((symbol) => quote(symbol)).join(', ')}]${scopeSuffix} },`,
      );
      continue;
    }
    todoFiles.push(file);
    customBindingLines.push(
      `    // TODO(libcascade migrate): ${
        symbols === undefined ? `could not read ${resolved}` : 'no class/struct definition found'
      } —`,
      '    // fill in the symbols this file provides. Candidates (bindings that are not OCCT',
      '    // symbols and no other wrapper claims) are listed in the header block above.',
      `    { file: ${quote(relative)}, symbols: []${scopeSuffix} },`,
    );
    notes.push(
      `Could not determine the symbols of ${file} (resolved against the yml's own directory, as ` +
        `${resolved}); emitted a TODO. \`libcascade build\` refuses the config until it is filled in.`,
    );
  }
  const unclaimed = reference.bindings.filter(
    (symbol) => !catalog.has(symbol) && !claimed.has(symbol),
  );
  if (unclaimed.length > 0 && todoFiles.length === 0) {
    notes.push(
      `${unclaimed.length} binding(s) are neither OCCT symbols nor provided by any wrapper file: ` +
        `${unclaimed.join(', ')}. The config will not typecheck until each is declared.`,
    );
  }

  const modernizations = [...new Set(notes.filter((note) => note.startsWith('Modernization: ')))];
  const rawFlagsUsed = [...new Set([...baseRawFlags, ...variantRawFlags.flat()])];

  const header = [
    '/**',
    ` * Generated by \`libcascade migrate\` (@libcascade/toolchain ${packageJson.version})`,
    ` * on ${date ?? new Date().toISOString().slice(0, 10)} from:`,
    ...sources.map((source) => ` *   - ${source.label}`),
    ' *',
    ' * Review before committing — the yml did not declare these, so they are derived:',
    ' *',
    ` * 1. \`customBindings[].symbols\` — read out of each .cpp (top-level class/struct`,
    ' *    definitions and Embind `class_<T>("Name")` registrations). The yml recorded',
    ' *    only the file paths.',
    ` * 2. Variant names — split from the artifact names (${builds.map((build) => build.base).join(', ')}).`,
    ...(modernizations.length > 0
      ? [' * 3. Modernizations applied, each commented at its site:', ...modernizations.map((note) => ` *    - ${note.replace('Modernization: ', '')}`)]
      : [' * 3. No modernization was needed.']),
    ...(rawFlagsUsed.length > 0
      ? [
          ' * 4. `rawFlags` — passed to emcc verbatim because no typed member models them:',
          ...rawFlagsUsed.map((flag) => ` *    - ${flag}`),
        ]
      : [' * 4. No flag needed `rawFlags`.']),
    ...(unclaimed.length > 0
      ? [
          ' *',
          ' * Bindings that are not OCCT symbols and that no wrapper file claims — these are',
          ' * the candidates for any TODO below:',
          ...unclaimed.map((symbol) => ` *   - ${symbol}`),
        ]
      : []),
    ' */',
  ];

  const contents = [
    ...header,
    "import { defineBuild } from '@libcascade/toolchain';",
    '',
    'export default defineBuild({',
    `  name: ${quote(name)},`,
    '  bindings: [',
    ...reference.bindings.map((symbol) => `    ${quote(symbol)},`),
    '  ],',
    ...(customBindingLines.length > 0 ? ['  customBindings: [', ...customBindingLines, '  ],'] : []),
    ...(baseSettings.size > 0
      ? ['  settings: {', renderSettings(baseSettings, annotations, '    '), '  },']
      : []),
    ...(baseFlags.size > 0 ? [`  compilerFlags: ${renderCompilerFlags(baseFlags)},`] : []),
    ...(baseRawFlags.length > 0
      ? [`  rawFlags: [${baseRawFlags.map((flag) => quote(flag)).join(', ')}],`]
      : []),
    '  variants: [',
    ...builds.flatMap((_build, index) => {
      const body = [
        `      name: ${quote(variantNames[index]!)},`,
      ...(`${name}_${variantNames[index]!}` === builds[index]!.base
        ? []
        : [
            '      // The published filename predates the `<name>_<variant>` convention.',
            `      outputName: ${quote(builds[index]!.base)},`,
          ]),
      ...(variantFlags[index]!.size > 0
        ? [
            ...annotations
              .filter((annotation) => variantFlags[index]!.has(annotation.target))
              .flatMap((annotation) => annotation.lines.map((line) => `      // ${line}`)),
            `      compilerFlags: ${renderCompilerFlags(variantFlags[index]!)},`,
          ]
        : []),
      ...(variantSettings[index]!.size > 0
        ? ['      settings: {', renderSettings(variantSettings[index]!, annotations, '        '), '      },']
        : []),
        ...(variantRawFlags[index]!.length > 0
          ? [`      rawFlags: [${variantRawFlags[index]!.map((flag) => quote(flag)).join(', ')}],`]
          : []),
      ];
      return body.length === 1
        ? [`    { name: ${quote(variantNames[index]!)} },`]
        : ['    {', ...body, '    },'];
    }),
    '  ],',
    ...(reference.generateTypescriptDefinitions ? [] : ['  generateTypescriptDefinitions: false,']),
    '});',
    '',
  ].join('\n');

  // `requires` is deliberately never emitted: `threads` is the only capability,
  // and `variantCapabilities` infers it from exactly the flags that cause it
  // (`-pthread`, `USE_PTHREADS`, `SHARED_MEMORY`). Writing it would restate what
  // the flags already say.
  return { contents, notes };
};
