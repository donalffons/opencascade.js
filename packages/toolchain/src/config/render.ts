/** Render typed build configs into the yml consumed by the container `link` command. */
import * as path from 'node:path';

import { stringify } from 'yaml';

import {
  type BuildConfig,
  type BuildVariant,
  type EmccSettingValue,
  mergeCompilerFlags,
  variantOutputName,
} from './index.ts';

import settingsMeta from '../../generated/emcc-settings.meta.json' with { type: 'json' };

/**
 * Settings whose value is a comma-delimited list rather than emcc's bracketed
 * JSON list syntax.
 *
 * Generated: `scripts/generate-emcc-settings.mjs` buckets a list-valued setting
 * as a comma list when its elements are a closed literal union read out of
 * `settings.js`, and as a bracketed list otherwise.
 */
const COMMA_LIST_SETTINGS = new Set<string>(settingsMeta.commaLists);

/**
 * Serialize one emcc `-s` setting.
 *
 * Rules: `boolean` → `1`/`0`; `number` and `string` → verbatim; arrays →
 * emcc's bracketed JSON list (`["FS","wasmMemory"]`) except for the
 * comma-delimited settings in {@link COMMA_LIST_SETTINGS}.
 *
 * @param setting - Setting name without the `-s` prefix.
 * @param value - Setting value.
 * @returns The rendered `-s…` flag.
 */
export const serializeSetting = (setting: string, value: EmccSettingValue): string => {
  if (Array.isArray(value)) {
    const items = value as readonly string[];
    return COMMA_LIST_SETTINGS.has(setting)
      ? `-s${setting}=${items.join(',')}`
      : `-s${setting}=[${items.map((item) => `"${item}"`).join(',')}]`;
  }
  if (typeof value === 'boolean') return `-s${setting}=${value ? 1 : 0}`;
  return `-s${setting}=${String(value)}`;
};

/**
 * Merge a variant's settings over the base settings.
 *
 * Base keys keep their declaration order (a variant override replaces the value
 * in place); variant-only keys are appended in their own declaration order; a
 * `null` variant value removes the key entirely.
 */
export const mergeSettings = (
  config: BuildConfig,
  variant: BuildVariant,
): ReadonlyMap<string, EmccSettingValue> => {
  // The generated settings types have no index signature (that is what makes an
  // unknown `-s` name a compile error), so the merge walks them erased.
  const base = (config.settings ?? {}) as Readonly<Record<string, EmccSettingValue>>;
  const overrides = (variant.settings ?? {}) as Readonly<
    Record<string, EmccSettingValue | null | undefined>
  >;
  const merged = new Map<string, EmccSettingValue>();

  for (const [setting, value] of Object.entries(base)) {
    const override = overrides[setting];
    if (override === undefined) {
      merged.set(setting, value);
      continue;
    }
    if (override === null) continue;
    merged.set(setting, override);
  }
  for (const [setting, value] of Object.entries(overrides)) {
    if (setting in base || value === null || value === undefined) continue;
    merged.set(setting, value);
  }
  return merged;
};

/**
 * Render one variant's `emccFlags`. Order is exceptions, merged settings, LTO,
 * no-entry, threads, SIMD, optimization, base raw flags, then variant raw
 * flags. Raw flags are last so repeated flags override typed values.
 *
 * @param config - The build configuration.
 * @param variant - The variant being rendered.
 * @returns The flag list for `mainBuild.emccFlags`.
 */
export const renderEmccFlags = (config: BuildConfig, variant: BuildVariant): string[] => {
  const compilerFlags = mergeCompilerFlags(config, variant);
  const flags: string[] = [];

  if (compilerFlags.exceptions === 'wasm') flags.push('-fwasm-exceptions');
  if (compilerFlags.exceptions === 'emscripten') flags.push('-fexceptions');

  for (const [setting, value] of mergeSettings(config, variant)) {
    flags.push(serializeSetting(setting, value));
  }

  if (compilerFlags.lto === true) flags.push('-flto');
  if (compilerFlags.noEntry === true) flags.push('--no-entry');
  if (compilerFlags.threads === true) flags.push('-pthread');
  if (compilerFlags.simd === true) flags.push('-msimd128');
  if (compilerFlags.optimize !== undefined) flags.push(`-${compilerFlags.optimize}`);

  flags.push(...(config.rawFlags ?? []), ...(variant.rawFlags ?? []));
  return flags;
};

export type RenderedBuild = {
  /** File name of the yml, `<outputName>.yml`. */
  readonly fileName: string;
  /** Artifact base name; `<outputName>.js` is `mainBuild.name`. */
  readonly outputName: string;
  /** yml text, ready to write. */
  readonly contents: string;
};

export type RenderOptions = {
  readonly config: BuildConfig;
  readonly variant: BuildVariant;
  /** Directory the config file lives in; `customBindings[].file` resolves against it. */
  readonly configDirectory: string;
  /** Directory the yml will be written to; cpp paths are rendered relative to it. */
  readonly outputDirectory: string;
};

/**
 * Render one variant's container-side yml.
 *
 * @param options - Config, variant, and the two directories that fix relative
 *   `.cpp` paths.
 * @returns The yml file name and contents.
 * @example
 * ```typescript
 * const { fileName, contents } = renderBuild({
 *   config, variant: config.variants[0],
 *   configDirectory: '/repo/pkg', outputDirectory: '/repo/pkg/.libcascade',
 * });
 * ```
 */
export const renderBuild = ({
  config,
  variant,
  configDirectory,
  outputDirectory,
}: RenderOptions): RenderedBuild => {
  const outputName = variantOutputName(config, variant);

  const relativeCppPath = (file: string): string => {
    const relative = path.relative(outputDirectory, path.resolve(configDirectory, file));
    return relative.split(path.sep).join('/');
  };

  const customBindings = config.customBindings ?? [];
  const mainScopedFiles = customBindings
    .filter((customBinding) => customBinding.scope === 'main')
    .map((customBinding) => relativeCppPath(customBinding.file));
  const allScopedFiles = customBindings
    .filter((customBinding) => (customBinding.scope ?? 'all') === 'all')
    .map((customBinding) => relativeCppPath(customBinding.file));

  const document = {
    mainBuild: {
      name: `${outputName}.js`,
      bindings: config.bindings.map((symbol) => ({ symbol })),
      ...(mainScopedFiles.length > 0 ? { additionalBindFiles: mainScopedFiles } : {}),
      emccFlags: renderEmccFlags(config, variant),
    },
    ...(allScopedFiles.length > 0 ? { additionalCppFiles: allScopedFiles } : {}),
    // The yml schema defaults this to `true`; render it only when opted out so
    // the generated file stays diffable against the hand-written references.
    ...(config.generateTypescriptDefinitions === false
      ? { generateTypescriptDefinitions: false }
      : {}),
  };

  return {
    fileName: `${outputName}.yml`,
    outputName,
    contents: stringify(document, { indentSeq: false, lineWidth: 0 }),
  };
};
