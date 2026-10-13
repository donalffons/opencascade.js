/**
 * Container driver for engine discovery, UID mapping, mounts, and output
 * redirection. Exported as `@libcascade/toolchain/driver` for custom orchestration.
 */
import { spawnSync } from 'node:child_process';
import * as fs from 'node:fs';
import * as path from 'node:path';

import type { BuildConfig, BuildVariant } from '../config/index.ts';
import { variantRequiresThreads } from '../config/index.ts';

import images from '../../generated/images.json' with { type: 'json' };

/** Path inside the container where the yml's directory is bind-mounted. */
export const CONTAINER_SOURCE_DIRECTORY = '/src';
/** Path inside the container the build writes its artifacts to. */
export const CONTAINER_OUTPUT_DIRECTORY = '/out';

/** Artifact suffixes a `link` run emits for a build named `<outputName>`. */
export const ARTIFACT_SUFFIXES = [
  '.js',
  '.wasm',
  '.d.ts',
  '.js.symbols',
  '.provenance.json',
  '.build-manifest.json',
] as const;

export type ContainerRunResult = {
  readonly status: number;
  readonly stdout: string;
  readonly stderr: string;
};

/**
 * Injectable process runner. The default shells out with `spawnSync`; tests
 * substitute a recorder to assert the exact argv without a container engine.
 */
export type ContainerExec = (
  command: string,
  args: readonly string[],
  options: { readonly capture: boolean },
) => ContainerRunResult;

export type ContainerDriverOptions = {
  readonly exec?: ContainerExec;
  readonly env?: Readonly<Record<string, string | undefined>>;
  readonly platform?: NodeJS.Platform;
  readonly uid?: number;
  readonly gid?: number;
  /** Sink for provenance warnings. @defaultValue writes to stderr */
  readonly onWarn?: (message: string) => void;
};

export type ResolvedImage = {
  readonly reference: string;
  /** True when `$LIBCASCADE_IMAGE` or `config.image` replaced the pinned reference. */
  readonly overridden: boolean;
};

export type RunArgsOptions = {
  readonly image: string;
  /** Absolute host directory bind-mounted at `/src` (the yml's directory). */
  readonly sourceDirectory: string;
  /** Absolute host directory bind-mounted at `/out` and exported as `OCJS_OUTPUT_DIR`. */
  readonly outputDirectory: string;
  /** yml path relative to {@link RunArgsOptions.sourceDirectory}. */
  readonly yamlPath: string;
};

export type BuildRunOptions = RunArgsOptions & {
  /** Directory the artifacts are moved into once the run succeeds. */
  readonly distDirectory: string;
  /** Artifact base name (`mainBuild.name` minus `.js`). */
  readonly outputName: string;
};

const defaultExec: ContainerExec = (command, args, options) => {
  const result = spawnSync(command, [...args], {
    encoding: 'utf8',
    stdio: options.capture ? 'pipe' : 'inherit',
    maxBuffer: 64 * 1024 * 1024,
  });
  return {
    status: result.status ?? -1,
    stdout: result.stdout ?? '',
    stderr: result.stderr ?? '',
  };
};

/**
 * Create a container driver bound to an environment, platform, and process runner.
 *
 * @param options - Injection seams; every field defaults to the live process.
 * @returns The driver's engine/image/argv/run surface.
 * @example
 * ```typescript
 * const driver = createContainerDriver();
 * driver.run({ image: driver.resolveImage(config, variant).reference, ... });
 * ```
 */
export const createContainerDriver = (options: ContainerDriverOptions = {}) => {
  const exec = options.exec ?? defaultExec;
  const env = options.env ?? process.env;
  const platform = options.platform ?? process.platform;
  const warn = options.onWarn ?? ((message: string) => process.stderr.write(`${message}\n`));

  /**
   * Probe `$LIBCASCADE_CONTAINER_CMD` → `docker` → `podman`.
   *
   * @returns The first engine whose `<cmd> version` exits 0.
   * @throws Error naming install options when no engine responds.
   */
  const resolveEngine = (): string => {
    const override = env.LIBCASCADE_CONTAINER_CMD;
    const candidates = override !== undefined && override !== '' ? [override] : ['docker', 'podman'];
    for (const candidate of candidates) {
      if (exec(candidate, ['version'], { capture: true }).status === 0) return candidate;
    }
    throw new Error(
      `No container engine found (probed: ${candidates.join(', ')}). ` +
        'Install Docker Desktop (https://docs.docker.com/desktop/), colima (`brew install colima docker` ' +
        'then `colima start`), or Podman (`brew install podman` then `podman machine start`), or point ' +
        '$LIBCASCADE_CONTAINER_CMD at an engine binary. Note that GitHub-hosted macOS CI runners ship ' +
        'no container engine at all — run libcascade builds on a Linux runner.',
    );
  };

  /**
   * Resolve the image reference for a variant.
   *
   * Precedence: `$LIBCASCADE_IMAGE` → `config.image` → the pinned reference in
   * `generated/images.json`, selected by whether the variant requires threads
   * (declared or inferred — see `variantCapabilities`).
   *
   * @param config - The build configuration.
   * @param variant - The variant being built.
   * @returns The reference plus whether an override bypassed the pinned value.
   */
  const resolveImage = (config: BuildConfig, variant: BuildVariant): ResolvedImage => {
    const envOverride = env.LIBCASCADE_IMAGE;
    const override =
      envOverride !== undefined && envOverride !== '' ? envOverride : (config.image ?? '');
    if (override !== '') {
      warn(
        `libcascade: image override in effect ("${override}") — digest verification is skipped, ` +
          'so the produced artifacts carry no reproducible toolchain provenance. Unset ' +
          '$LIBCASCADE_IMAGE (and `image:` in the config) for release builds.',
      );
      return { reference: override, overridden: true };
    }
    const pinned = variantRequiresThreads(config, variant)
      ? images.multiThreaded
      : images.singleThreaded;
    // Digest, never tag: the tag is mutable and drifts from the toolchain
    // version, which is the whole point of resolving it at publish time.
    return { reference: `${images.repository}@${pinned.digest}`, overridden: false };
  };

  /** `<engine> image inspect` repo digests, or `undefined` when the image is absent. */
  const repoDigests = (engine: string, reference: string): string[] | undefined => {
    const inspect = exec(
      engine,
      ['image', 'inspect', '--format', '{{json .RepoDigests}}', reference],
      { capture: true },
    );
    if (inspect.status !== 0) return undefined;
    try {
      return JSON.parse(inspect.stdout.trim()) as string[];
    } catch {
      return undefined;
    }
  };

  /**
   * Prove the local image really is the digest-pinned one.
   *
   * Only digest-pinned references are verified: an override (`$LIBCASCADE_IMAGE`
   * or `config.image`) has already printed its provenance warning and has no
   * publish-time digest to check against.
   *
   * @param engine - Resolved container engine.
   * @param reference - The reference about to be run.
   * @throws Error naming the expected and local digests on a mismatch.
   */
  const verifyImageDigest = (engine: string, reference: string): void => {
    if (!reference.includes('@sha256:')) return;
    let digests = repoDigests(engine, reference);
    if (digests === undefined) {
      exec(engine, ['pull', reference], { capture: false });
      digests = repoDigests(engine, reference);
    }
    if (digests === undefined) {
      throw new Error(
        `Could not inspect ${reference} after pulling it. The pinned toolchain image must be ` +
          `pullable by ${engine}; set $LIBCASCADE_IMAGE to build against a local image instead.`,
      );
    }
    if (!digests.includes(reference)) {
      throw new Error(
        `Image digest mismatch for ${reference}.\n` +
          `  expected: ${reference}\n` +
          `  local:    ${digests.length > 0 ? digests.join(', ') : '(no repo digests — the image was built locally, not pulled)'}\n` +
          'The digest is pinned at publish time so a toolchain version names one reproducible ' +
          'build environment. Re-pull the image, or set $LIBCASCADE_IMAGE to opt out (which ' +
          'forfeits that guarantee).',
      );
    }
  };

  /**
   * Build the engine argv for one `link` run.
   *
   * `-u uid:gid` is emitted only on Linux native engines — on Docker Desktop
   * (macOS/Windows) the VM already maps ownership and an explicit `-u` breaks
   * the build. `--platform` is emitted only when `$LIBCASCADE_PLATFORM` is set;
   * the images are published multi-arch.
   *
   * @param runOptions - Image, mounts, and yml path.
   * @returns Arguments to pass to the engine binary (no engine name).
   */
  const buildRunArgs = ({
    image,
    sourceDirectory,
    outputDirectory,
    yamlPath,
  }: RunArgsOptions): string[] => {
    const uid = options.uid ?? (typeof process.getuid === 'function' ? process.getuid() : 0);
    const gid = options.gid ?? (typeof process.getgid === 'function' ? process.getgid() : 0);
    const platformOverride = env.LIBCASCADE_PLATFORM;

    return [
      'run',
      '--rm',
      '--pull=missing',
      ...(platformOverride !== undefined && platformOverride !== ''
        ? ['--platform', platformOverride]
        : []),
      ...(platform === 'linux' ? ['-u', `${uid}:${gid}`] : []),
      '-v',
      `${sourceDirectory}:${CONTAINER_SOURCE_DIRECTORY}`,
      '-v',
      `${outputDirectory}:${CONTAINER_OUTPUT_DIRECTORY}`,
      '-e',
      `OCJS_OUTPUT_DIR=${CONTAINER_OUTPUT_DIRECTORY}`,
      image,
      'link',
      yamlPath,
    ];
  };

  /**
   * Run one variant build and move its artifacts into `dist/`.
   *
   * Artifacts are written to the mounted temp output directory first and moved
   * only after the engine exits 0, so a failed build never leaves partial
   * artifacts in `dist/`.
   *
   * @param runOptions - Everything {@link buildRunArgs} needs plus the dist target.
   * @returns The absolute paths moved into `dist/`.
   * @throws Error when no engine is available or the build exits non-zero.
   */
  const run = (runOptions: BuildRunOptions): string[] => {
    const engine = resolveEngine();
    verifyImageDigest(engine, runOptions.image);
    fs.mkdirSync(runOptions.outputDirectory, { recursive: true });
    for (const suffix of ARTIFACT_SUFFIXES) {
      fs.rmSync(path.join(runOptions.outputDirectory, `${runOptions.outputName}${suffix}`), {
        force: true,
      });
    }

    const args = buildRunArgs(runOptions);
    const result = exec(engine, args, { capture: false });
    if (result.status !== 0) {
      throw new Error(
        `${engine} ${args.join(' ')}\n` +
          `exited with status ${result.status}. The rendered yml and the container's raw output ` +
          `directory are kept for inspection at ${runOptions.outputDirectory}.`,
      );
    }

    fs.mkdirSync(runOptions.distDirectory, { recursive: true });
    const moved: string[] = [];
    for (const suffix of ARTIFACT_SUFFIXES) {
      const source = path.join(runOptions.outputDirectory, `${runOptions.outputName}${suffix}`);
      if (!fs.existsSync(source)) continue;
      const destination = path.join(runOptions.distDirectory, `${runOptions.outputName}${suffix}`);
      fs.renameSync(source, destination);
      moved.push(destination);
    }
    return moved;
  };

  return { resolveEngine, resolveImage, verifyImageDigest, buildRunArgs, run };
};

export type ContainerDriver = ReturnType<typeof createContainerDriver>;
