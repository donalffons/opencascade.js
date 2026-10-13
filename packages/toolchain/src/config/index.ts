/** Typed configuration for one libcascade binding set and its build variants. */
import * as fs from 'node:fs';
import * as path from 'node:path';

// The generated layer. Both specifiers are `.js` on purpose: NodeNext resolves
// them to the sibling `.d.ts` without the importer needing
// `allowImportingTsExtensions`, which a consumer's tsconfig will not have.
import type { EmccSettings, VariantEmccSettings } from '../../generated/emcc-settings.js';
import type { OcctSymbol } from '../../generated/occt-symbols.js';

export type {
  EmccEnvironment,
  EmccSettings,
  MemorySize,
  VariantEmccSettings,
} from '../../generated/emcc-settings.js';
export type { OcctSymbol } from '../../generated/occt-symbols.js';

/**
 * Serialized emcc `-s` value used after a setting's generated field type is erased.
 */
export type EmccSettingValue = boolean | number | string | readonly string[];

/**
 * Typed clang and emcc flags. Base values apply to every variant; variant values replace declared
 * keys. Use {@link BuildConfig.rawFlags} for unmodelled flags.
 *
 * @example
 * `compilerFlags: { exceptions: 'wasm', noEntry: true, simd: true, optimize: 'O3' }`
 */
export type CompilerFlags = {
  /**
   * Optimization level emitted as `-O*`. Omission emits no optimization flag because rendered
   * flags replace the container schema defaults.
   */
  readonly optimize?: 'O0' | 'O1' | 'O2' | 'O3' | 'Os' | 'Oz';
  /** Emit `-msimd128`; the output requires WebAssembly SIMD support. */
  readonly simd?: boolean;
  /**
   * Exception lowering: `'wasm'` emits `-fwasm-exceptions`; `'emscripten'` emits
   * `-fexceptions`. Wasm exceptions also add the runtime helpers needed to inspect OCCT
   * `Standard_Failure` values.
   */
  readonly exceptions?: 'wasm' | 'emscripten';
  /** Emit `-flto`. Omission emits no link-time optimization flag. */
  readonly lto?: boolean;
  /** Emit `--no-entry` to link a library without a program entry point. */
  readonly noEntry?: boolean;
  /**
   * Emit `-pthread`. This implies the `threads` capability, selects the multi-threaded
   * image, and requires SharedArrayBuffer support plus cross-origin isolation in browsers.
   */
  readonly threads?: boolean;
};

/**
 * Custom C++ compiled with the generated bindings and the symbols it provides.
 */
export type CustomBinding = {
  /** Path to the `.cpp` file, resolved relative to the config file's directory. */
  readonly file: string;
  /**
   * Symbols provided by the file. These are accepted in {@link BuildConfig.bindings} in addition
   * to generated {@link OcctSymbol} names.
   */
  readonly symbols: readonly string[];
  /**
   * `'all'` compiles the file through `additionalCppFiles`; `'main'` concatenates it
   * into `mainBuild.additionalBindFiles` for Embind registration parsing.
   *
   * @defaultValue 'all'
   */
  readonly scope?: 'main' | 'all';
};

/** Host feature required before a variant can load. */
export type VariantCapability = 'threads';

/** One artifact variant built from the shared binding configuration. */
export type BuildVariant = {
  /**
   * Unique variant identifier used by generated files, CLI selection, and package subpaths.
   */
  readonly name: string;
  /**
   * Artifact base name. Defaults to `<config.name>_<variant.name>`.
   */
  readonly outputName?: string;
  /**
   * Explicit host requirements. Inferred requirements from effective flags are added to this list;
   * generated initializers probe every resulting capability.
   */
  readonly requires?: readonly VariantCapability[];
  /**
   * Settings merged over {@link BuildConfig.settings}. A declared value replaces the base value;
   * `null` removes an inherited setting and is invalid when the base did not declare that key.
   *
   * @example
   * `settings: { EVAL_CTORS: null, PTHREAD_POOL_SIZE: 'navigator.hardwareConcurrency' }`
   */
  readonly settings?: VariantEmccSettings;
  /**
   * Compiler flags merged over {@link BuildConfig.compilerFlags}. Declared keys replace base
   * values; omitted keys inherit them.
   *
   * @example
   * `{ name: 'multi', compilerFlags: { threads: true } }`
   */
  readonly compilerFlags?: CompilerFlags;
  /** Flags appended after the base {@link BuildConfig.rawFlags}. */
  readonly rawFlags?: readonly string[];
};

/** Shared binding configuration and its artifact variants. */
export type BuildConfig = {
  /**
   * Artifact prefix. A `single` variant defaults to `<name>_single`.
   */
  readonly name: string;
  /**
   * OCCT and custom symbols passed to `mainBuild.bindings`. The container also binds their
   * required transitive dependencies.
   */
  readonly bindings: readonly string[];
  /** Custom C++ files and the binding symbols each file provides. */
  readonly customBindings?: readonly CustomBinding[];
  /**
   * Generated emcc `-s` settings applied to every variant. Variant settings override keys.
   */
  readonly settings?: EmccSettings;
  /** Compiler and linker flags applied to every variant. */
  readonly compilerFlags?: CompilerFlags;
  /**
   * Unmodelled flags appended after typed flags. Variant raw flags follow base raw flags, so later
   * duplicate flags take precedence under emcc.
   */
  readonly rawFlags?: readonly string[];
  /**
   * Variants in selection order. Declaration order breaks ties between equally capable variants.
   */
  readonly variants: readonly BuildVariant[];
  /**
   * Container image override. `$LIBCASCADE_IMAGE` takes precedence; either override skips
   * pinned-digest verification and emits a provenance warning.
   */
  readonly image?: string;
  /**
   * Whether the container emits per-variant declarations. Setting `false` also makes
   * `libcascade assemble` unavailable because assembly reads those declarations.
   *
   * @defaultValue true
   */
  readonly generateTypescriptDefinitions?: boolean;
};

/**
 * `defineBuild` input that accepts generated OCCT symbols plus symbols inferred from this
 * config's `customBindings`.
 */
export type StrictBuildConfig<TCustomSymbol extends string> = BuildConfig & {
  readonly bindings: readonly (OcctSymbol | NoInfer<TCustomSymbol>)[];
  readonly customBindings?: readonly (CustomBinding & {
    readonly symbols: readonly TCustomSymbol[];
  })[];
};

/**
 * Typechecks a build configuration and returns the same object. Runtime-only invariants are
 * checked by {@link validateBuildConfig}.
 *
 * @param config - Build configuration.
 * @returns The same configuration as {@link BuildConfig}.
 * @example
 * ```typescript
 * import { defineBuild } from '@libcascade/toolchain';
 *
 * export default defineBuild({
 *   name: 'replicad',
 *   bindings: ['gp_Pnt', 'BRepPrimAPI_MakeBox', 'ReplicadMeshData'],
 *   customBindings: [{ file: 'wrappers/mesh.cpp', symbols: ['ReplicadMeshData'] }],
 *   settings: { ALLOW_MEMORY_GROWTH: true, EVAL_CTORS: 2 },
 *   compilerFlags: { optimize: 'O3', simd: true, exceptions: 'wasm', noEntry: true },
 *   variants: [
 *     { name: 'single' },
 *     { name: 'multi', compilerFlags: { threads: true }, settings: { EVAL_CTORS: null } },
 *   ],
 * });
 * ```
 */
export const defineBuild = <const TCustomSymbol extends string = never>(
  config: StrictBuildConfig<TCustomSymbol>,
): BuildConfig => config;

/**
 * Validates names, variants, setting unsets, and custom-binding files that TypeScript cannot prove.
 *
 * @param config - Build configuration.
 * @param configDirectory - Directory for resolving custom-binding paths.
 * @throws Error listing all validation problems.
 */
export const validateBuildConfig = (config: BuildConfig, configDirectory: string): void => {
  const problems: string[] = [];

  if (config.name.trim() === '') {
    problems.push('`name` is empty. Set it to the artifact base name, e.g. `name: \'replicad\'`.');
  }

  if (config.bindings.length === 0) {
    problems.push(
      '`bindings` is empty. List at least one symbol to bind, e.g. `bindings: [\'gp_Pnt\']`. ' +
        'A build with no bindings produces a WASM module with no exported OCCT classes.',
    );
  }

  if (config.variants.length === 0) {
    problems.push(
      '`variants` is empty. Declare at least one, e.g. `variants: [{ name: \'single\' }]`.',
    );
  }

  const seenVariants = new Set<string>();
  for (const variant of config.variants) {
    if (seenVariants.has(variant.name)) {
      problems.push(
        `Duplicate variant name "${variant.name}". Variant names must be unique — they name the ` +
          'rendered yml, the artifact base name, and the `--variant` CLI selector.',
      );
    }
    seenVariants.add(variant.name);

    for (const [setting, value] of Object.entries<unknown>(variant.settings ?? {})) {
      if (value === null && !(setting in (config.settings ?? {}))) {
        problems.push(
          `Variant "${variant.name}" unsets \`settings.${setting}\` with \`null\`, but the base ` +
            '`settings` never declares it. Remove the `null`, or add the setting to the base ' +
            '`settings` so the other variants inherit it.',
        );
      }
    }
  }

  for (const customBinding of config.customBindings ?? []) {
    const resolved = path.resolve(configDirectory, customBinding.file);
    if (!fs.existsSync(resolved)) {
      problems.push(
        `customBindings file not found: ${resolved} (declared as "${customBinding.file}"). ` +
          'Paths are resolved relative to the config file\'s directory.',
      );
    }
    if (customBinding.symbols.length === 0) {
      problems.push(
        `customBindings entry "${customBinding.file}" declares no symbols. List the symbols the ` +
          'file binds so they can be validated against the OCCT catalog.',
      );
    }
  }

  if (problems.length > 0) {
    throw new Error(
      `Invalid libcascade build config (${problems.length} problem${problems.length === 1 ? '' : 's'}):\n` +
        problems.map((problem) => `  - ${problem}`).join('\n'),
    );
  }
};

/** Resolved artifact base name for a variant (without the `.js` extension). */
export const variantOutputName = (config: BuildConfig, variant: BuildVariant): string =>
  variant.outputName ?? `${config.name}_${variant.name}`;

/**
 * Merges variant compiler flags over base flags. Declared non-`undefined` values replace base
 * keys; omitted and `undefined` keys inherit.
 */
export const mergeCompilerFlags = (config: BuildConfig, variant: BuildVariant): CompilerFlags => {
  // Not a plain spread: that would copy an explicitly-`undefined` variant key
  // over the base value, which is exactly the `null`-unset behaviour this type
  // deliberately does not have.
  const merged: Record<string, unknown> = { ...config.compilerFlags };
  for (const [flag, value] of Object.entries(variant.compilerFlags ?? {})) {
    if (value !== undefined) merged[flag] = value;
  }
  return merged as CompilerFlags;
};

/** Resolves one variant setting; a `null` override resolves to absent. */
const effectiveSetting = (
  config: BuildConfig,
  variant: BuildVariant,
  setting: string,
): EmccSettingValue | undefined => {
  const overrides = variant.settings as
    | Readonly<Record<string, EmccSettingValue | null | undefined>>
    | undefined;
  const override = overrides?.[setting];
  if (override !== undefined) return override ?? undefined;
  return (config.settings as Readonly<Record<string, EmccSettingValue>> | undefined)?.[setting];
};

/** A setting counts as requesting its feature unless it is absent, `false`, or `0`. */
const settingEnabled = (value: EmccSettingValue | undefined): boolean =>
  value !== undefined && value !== false && value !== 0;

/**
 * Returns declared and inferred host capabilities without duplicates. Threading is inferred from
 * typed flags, `-pthread`, `USE_PTHREADS`, or `SHARED_MEMORY`.
 */
export const variantCapabilities = (
  config: BuildConfig,
  variant: BuildVariant,
): readonly VariantCapability[] => {
  const capabilities = new Set<VariantCapability>(variant.requires ?? []);
  const threaded =
    mergeCompilerFlags(config, variant).threads === true ||
    [...(config.rawFlags ?? []), ...(variant.rawFlags ?? [])].includes('-pthread') ||
    settingEnabled(effectiveSetting(config, variant, 'USE_PTHREADS')) ||
    settingEnabled(effectiveSetting(config, variant, 'SHARED_MEMORY'));
  if (threaded) capabilities.add('threads');
  return [...capabilities];
};

/** Whether a variant declares or implies the `threads` capability. */
export const variantRequiresThreads = (config: BuildConfig, variant: BuildVariant): boolean =>
  variantCapabilities(config, variant).includes('threads');
