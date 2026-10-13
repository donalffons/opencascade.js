/**
 * `libcascade` CLI.
 *
 * ```text
 * libcascade build    [--variant <name>] [--config <path>] [--render-only]
 * libcascade assemble [--config <path>] [--write-exports]
 * libcascade detect   <srcDir…> [--json]
 * libcascade check    <srcDir…> [--config <path>] [--verbose]
 * libcascade migrate  <yml…> [--out <path>] [--force]
 * ```
 */
import * as fs from 'node:fs';
import { createRequire } from 'node:module';
import * as path from 'node:path';
import { parseArgs } from 'node:util';

import { createJiti } from 'jiti';

import { assemble, writePackageExports } from './assemble/index.ts';
import { type BuildConfig, validateBuildConfig, variantOutputName } from './config/index.ts';
import { renderBuild } from './config/render.ts';
import {
  CAVEATS,
  check,
  detect,
  renderBindings,
  renderCheckFailure,
  toDetectJson,
} from './detect/index.ts';
import { createContainerDriver } from './driver/index.ts';
import { migrate } from './migrate/index.ts';

const CONFIG_CANDIDATES = ['libcascade.config.ts', 'libcascade.config.js', 'libcascade.config.mjs'];

/** Scratch directory (next to the config) holding rendered ymls and raw container output. */
const SCRATCH_DIRECTORY = '.libcascade';

const USAGE = `libcascade — custom OpenCascade WASM builds

Usage:
  libcascade build [options]         Link each variant's WASM through the container.
  libcascade assemble [options]      Generate the npm packaging surface from dist/.
  libcascade detect <srcDir…>        Seed a bindings list from consumer source (onboarding).
  libcascade check <srcDir…>         CI drift guard: fail when referenced ⊄ bound.
  libcascade migrate <yml…>          Convert v2 container yml(s) into libcascade.config.ts.

Options:
  --config <path>    Config file. Default: ./${CONFIG_CANDIDATES.join(', ./')}
  --variant <name>   build: build one variant. Default: every variant in the config.
  --render-only      build: render the yml(s) and stop. Prints the rendered paths.
  --write-exports    assemble: merge the generated exports map into package.json.
  --json             detect: emit machine-readable JSON instead of the fragment.
  --verbose          check: also list \`oc.*\` members that are not OCCT symbols.
  --out <path>       migrate: write the config here. Default: stdout.
  --force            migrate: overwrite an existing --out file.
  --help             Show this help.

Pass every variant's yml to one \`migrate\` invocation: sibling ymls that differ
only in flags and artifact name are ONE config with N variants, and that is what
it emits. It never overwrites without --force, and the flags it cannot type land
in \`rawFlags\` verbatim rather than being dropped.

detect and check are onboarding and drift tools, not size optimizers. A missing
binding links fine and fails at RUNTIME with BindingError; check converts that
failure class into a build-time error. Neither command ever removes anything —
the measured size ceiling is −0.9% brotli for −14% symbols.

Environment:
  LIBCASCADE_CONTAINER_CMD   Container engine to use (default: docker, then podman).
  LIBCASCADE_IMAGE           Image reference override (skips digest verification).
  LIBCASCADE_PLATFORM        Value for the engine's --platform flag.
`;

const resolveConfigPath = (explicit: string | undefined): string => {
  if (explicit !== undefined) {
    const resolved = path.resolve(explicit);
    if (!fs.existsSync(resolved)) {
      throw new Error(`Config file not found: ${resolved} (from --config ${explicit}).`);
    }
    return resolved;
  }
  for (const candidate of CONFIG_CANDIDATES) {
    const resolved = path.resolve(process.cwd(), candidate);
    if (fs.existsSync(resolved)) return resolved;
  }
  throw new Error(
    `No libcascade config found in ${process.cwd()}. Create one of ${CONFIG_CANDIDATES.join(', ')} ` +
      'exporting `export default defineBuild({ … })`, or pass --config <path>.',
  );
};

/**
 * Aliases mapping `@libcascade/toolchain` onto the running CLI's own modules.
 *
 * Only used when the config's own package cannot resolve the toolchain — a
 * config driven before its package declares the devDependency (the repo's own
 * dogfood config, which has no node_modules of its own). A package that
 * installs `@libcascade/toolchain` resolves it normally, so the installed
 * package — not this fallback — is what its config imports.
 *
 * @param configDirectory - Directory the config file lives in.
 * @returns The jiti alias map, empty when the config resolves the package itself.
 */
export const resolveToolchainAlias = (configDirectory: string): Record<string, string> => {
  try {
    createRequire(path.join(configDirectory, 'noop.js')).resolve('@libcascade/toolchain/package.json');
    return {};
  } catch {
    // `.ts` when this module is the source (vitest, jiti), `.js` when it is the
    // built `dist/cli.js` — the two layouts are otherwise identical.
    const extension = import.meta.url.endsWith('.ts') ? '.ts' : '.js';
    return {
      '@libcascade/toolchain': new URL(`./index${extension}`, import.meta.url).pathname,
      '@libcascade/toolchain/driver': new URL(`./driver/index${extension}`, import.meta.url).pathname,
    };
  }
};

/**
 * Load and validate a config file.
 *
 * @param configPath - Absolute path to the config module.
 * @returns The validated config and the directory it lives in.
 */
export const loadBuildConfig = async (
  configPath: string,
): Promise<{ config: BuildConfig; configDirectory: string }> => {
  const jiti = createJiti(import.meta.url, {
    alias: resolveToolchainAlias(path.dirname(configPath)),
  });
  const loaded = await jiti.import<BuildConfig>(configPath, { default: true });
  if (loaded === undefined || loaded === null || typeof loaded !== 'object') {
    throw new Error(
      `${configPath} has no default export. Add \`export default defineBuild({ … })\`.`,
    );
  }
  const configDirectory = path.dirname(configPath);
  validateBuildConfig(loaded, configDirectory);
  return { config: loaded, configDirectory };
};

type ManifestSummary = {
  readonly validation_passed?: boolean;
  readonly symbols?: { readonly missing?: readonly string[]; readonly requested?: readonly string[] };
  readonly binding_report?: {
    readonly failed?: number;
    readonly total?: number;
    readonly failures?: readonly { readonly file?: string; readonly message?: string }[];
  };
};

/**
 * Fail loudly when the container's own validation did not pass.
 *
 * @param manifestPath - Path to `<outputName>.build-manifest.json`.
 * @throws Error printing the missing symbols and binding-report deltas.
 */
export const assertManifestPassed = (manifestPath: string): void => {
  if (!fs.existsSync(manifestPath)) {
    throw new Error(
      `Build produced no manifest at ${manifestPath}. The container's \`link\` step did not run ` +
        'validate-build.py — inspect the container output above.',
    );
  }
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8')) as ManifestSummary;
  if (manifest.validation_passed === true) return;

  const missing = manifest.symbols?.missing ?? [];
  const failures = manifest.binding_report?.failures ?? [];
  const lines = [
    `Build validation failed: ${manifestPath} reports validation_passed=${String(manifest.validation_passed)}.`,
    `  requested symbols: ${manifest.symbols?.requested?.length ?? 0}`,
    `  missing symbols (${missing.length}): ${missing.length > 0 ? missing.join(', ') : '(none)'}`,
    `  binding failures: ${manifest.binding_report?.failed ?? 0} of ${manifest.binding_report?.total ?? 0}`,
    ...failures.map((failure) => `    - ${failure.file ?? '?'}: ${failure.message ?? ''}`),
    'Missing bindings do not fail the link step — they fail at runtime with a BindingError.',
  ];
  throw new Error(lines.join('\n'));
};

/**
 * `detect` and `check` — the two symbol-detection commands.
 *
 * Both are onboarding/drift tools. Neither claims a size benefit, and neither
 * proposes a removal; see `src/detect/index.ts` for the measurements.
 *
 * @param command - `detect` or `check`.
 * @param roots - Source directories from the command line.
 * @param values - Parsed flags (`--json`, `--verbose`, `--config`).
 * @throws Error when `check` finds a referenced symbol that is not bound.
 */
const runDetection = async (
  command: 'detect' | 'check',
  roots: readonly string[],
  values: { readonly config?: string; readonly json?: boolean; readonly verbose?: boolean },
): Promise<void> => {
  const baseDirectory = process.cwd();

  if (command === 'detect') {
    const options = { roots, baseDirectory };
    const result = detect(options);
    process.stdout.write(
      values.json === true
        ? `${JSON.stringify(toDetectJson(result, options), undefined, 2)}\n`
        : renderBindings(result, options),
    );
    return;
  }

  const configPath = resolveConfigPath(values.config);
  const { config } = await loadBuildConfig(configPath);
  const result = check(config, roots);

  if (result.missing.length > 0) {
    throw new Error(renderCheckFailure(result, configPath, baseDirectory));
  }

  process.stdout.write(
    `libcascade check: ${result.referencedCount} referenced symbols, all bound ` +
      `(${result.scan.files.length} files scanned, ${result.scan.unresolved.size} non-OCCT ` +
      `\`oc.*\` members ignored). Reminder: this proves no symbol is missing from the *written* ` +
      `references — dynamic access is invisible to the scan, and an unexercised code path can ` +
      `still hit a runtime BindingError.\n`,
  );
  if (values.verbose === true) {
    for (const reference of result.scan.unresolved.values()) {
      process.stdout.write(
        `  ignored (not an OCCT symbol): ${reference.symbol} — ` +
          `${path.relative(baseDirectory, reference.file)}:${reference.line}\n`,
      );
    }
    for (const caveat of CAVEATS) process.stdout.write(`  note: ${caveat}\n`);
  }
};

/**
 * Entry point for the `libcascade` bin.
 *
 * @param argv - Arguments after the node binary and script (`process.argv.slice(2)`).
 */
export const main = async (argv: readonly string[]): Promise<void> => {
  const [command, ...rest] = argv;
  if (command === undefined || command === '--help' || command === '-h' || command === 'help') {
    process.stdout.write(USAGE);
    return;
  }
  const commands = ['build', 'assemble', 'detect', 'check', 'migrate'] as const;
  if (!(commands as readonly string[]).includes(command)) {
    throw new Error(
      `Unknown command "${command}". Available: ${commands.join(', ')}.\n\n${USAGE}`,
    );
  }

  const { values, positionals } = parseArgs({
    args: [...rest],
    options: {
      config: { type: 'string' },
      variant: { type: 'string' },
      'render-only': { type: 'boolean', default: false },
      'write-exports': { type: 'boolean', default: false },
      json: { type: 'boolean', default: false },
      verbose: { type: 'boolean', default: false },
      out: { type: 'string' },
      force: { type: 'boolean', default: false },
      help: { type: 'boolean', default: false },
    },
    strict: true,
    allowPositionals: true,
  });

  if (values.help === true) {
    process.stdout.write(USAGE);
    return;
  }

  if (command === 'migrate') {
    if (positionals.length === 0) {
      throw new Error(
        'libcascade migrate needs at least one container yml, e.g. `libcascade migrate ' +
          'build-config/custom_build_single.yml build-config/custom_build_multi.yml`. Pass every ' +
          'variant\'s yml at once — they become one config with one variant each.',
      );
    }
    const outPath = values.out === undefined ? undefined : path.resolve(values.out);
    if (outPath !== undefined && fs.existsSync(outPath) && values.force !== true) {
      throw new Error(`Refusing to overwrite ${outPath}. Pass --force to replace it.`);
    }
    const { contents, notes } = migrate({
      sources: positionals.map((yamlPath) => ({
        label: yamlPath,
        directory: path.dirname(path.resolve(yamlPath)),
        contents: fs.readFileSync(path.resolve(yamlPath), 'utf8'),
      })),
      outputDirectory: outPath === undefined ? process.cwd() : path.dirname(outPath),
    });
    for (const note of notes) process.stderr.write(`libcascade migrate: ${note}\n`);
    if (outPath === undefined) {
      process.stdout.write(contents);
      return;
    }
    fs.writeFileSync(outPath, contents);
    process.stdout.write(`${outPath}\n`);
    return;
  }

  if (command === 'detect' || command === 'check') {
    if (positionals.length === 0) {
      throw new Error(
        `libcascade ${command} needs at least one source directory, e.g. ` +
          `\`libcascade ${command} src\`. It scans the code that references \`oc.*\`.`,
      );
    }
    await runDetection(command, positionals, values);
    return;
  }
  if (positionals.length > 0) {
    throw new Error(
      `libcascade ${command} takes no positional arguments (got ${positionals.join(', ')}).`,
    );
  }

  const configPath = resolveConfigPath(values.config);
  const { config, configDirectory } = await loadBuildConfig(configPath);

  if (command === 'assemble') {
    const result = assemble({ config, configDirectory });
    for (const filePath of result.written) process.stdout.write(`${filePath}\n`);
    process.stdout.write(
      `libcascade: ${result.sharedSymbolCount} shared symbols` +
        (result.exclusiveSymbols.size > 0
          ? `, ${result.exclusiveSymbols.size} variant-exclusive (typed optional)`
          : '') +
        '; eager root + lazy init subpaths\n',
    );
    if (values['write-exports'] === true) {
      process.stdout.write(`${writePackageExports(configDirectory, result.exports, result.files)}\n`);
    }
    return;
  }

  const variants =
    values.variant === undefined
      ? config.variants
      : config.variants.filter((variant) => variant.name === values.variant);
  if (variants.length === 0) {
    throw new Error(
      `Unknown variant "${values.variant}". Declared variants: ` +
        `${config.variants.map((variant) => variant.name).join(', ')}.`,
    );
  }

  const scratchDirectory = path.join(configDirectory, SCRATCH_DIRECTORY);
  fs.mkdirSync(scratchDirectory, { recursive: true });

  const rendered = variants.map((variant) => {
    const build = renderBuild({
      config,
      variant,
      configDirectory,
      outputDirectory: scratchDirectory,
    });
    const yamlPath = path.join(scratchDirectory, build.fileName);
    fs.writeFileSync(yamlPath, build.contents);
    return { variant, build, yamlPath };
  });

  if (values['render-only'] === true) {
    for (const { yamlPath } of rendered) process.stdout.write(`${yamlPath}\n`);
    return;
  }

  const driver = createContainerDriver();
  const distDirectory = path.join(configDirectory, 'dist');

  for (const { variant, build, yamlPath } of rendered) {
    const outputDirectory = path.join(scratchDirectory, 'out', variant.name);
    const { reference } = driver.resolveImage(config, variant);
    process.stdout.write(`libcascade: building ${build.outputName} with ${reference}\n`);
    driver.run({
      image: reference,
      sourceDirectory: configDirectory,
      outputDirectory,
      yamlPath: path.relative(configDirectory, yamlPath).split(path.sep).join('/'),
      distDirectory,
      outputName: build.outputName,
    });
    assertManifestPassed(
      path.join(distDirectory, `${variantOutputName(config, variant)}.build-manifest.json`),
    );
    process.stdout.write(`libcascade: ${build.outputName} → ${distDirectory}\n`);
  }
};
