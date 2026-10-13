/**
 * Helpers for the Docker build-flow tests.
 *
 * These tests run the PUBLISHED GHCR images (`ghcr.io/taucad/opencascade.js`)
 * through the documented single-mount Quickstart:
 *
 *   docker run --rm -v "$workDir:/src" -u "$(id -u):$(id -g)" \
 *     ghcr.io/taucad/opencascade.js:<tag> link <yaml>
 *
 * The image bakes the warm build cache (PCH + patched OCCT static libs +
 * compiled binding objects), so a custom `link <yaml>` re-runs `generate` for
 * the YAML's symbol subset and links in minutes — we deliberately do NOT mount
 * volumes over `/opencascade.js/build` (that would shadow the baked cache and
 * trigger a multi-hour cold rebuild).
 *
 * The suite is gated behind `OCJS_DOCKER_TESTS=1` (see `dockerTestsEnabled`)
 * so it never runs during the default `pnpm test` smoke pass.
 */
import { execFileSync, spawnSync } from 'node:child_process';
import * as fs from 'node:fs';
import * as path from 'node:path';

export const SINGLE_IMAGE = process.env.OCJS_DOCKER_SINGLE_IMAGE ?? '';
export const MULTI_IMAGE = process.env.OCJS_DOCKER_MULTI_IMAGE ?? '';
export const BINDGEN_IMAGE = process.env.OCJS_DOCKER_BINDGEN_IMAGE ?? '';

const FIXTURES_DIR = path.join(import.meta.dirname, 'fixtures');
const WORK_ROOT = path.join(import.meta.dirname, '.work');

function dockerAvailable(): boolean {
  const result = spawnSync('docker', ['version', '--format', '{{.Server.Version}}'], {
    stdio: 'ignore',
  });
  return result.status === 0;
}

/**
 * The Docker build-flow tests are opt-in: they require Docker, the published
 * images, and several minutes per `link`. Enable with `OCJS_DOCKER_TESTS=1`.
 */
export function dockerTestsEnabled(): boolean {
  if (process.env.OCJS_DOCKER_TESTS !== '1') return false;
  if (!dockerAvailable()) throw new Error('OCJS_DOCKER_TESTS=1 but Docker is unavailable');
  const stage = process.env.OCJS_DOCKER_STAGE ?? 'all';
  if ((stage === 'all' || stage === 'final-single') && !SINGLE_IMAGE) {
    throw new Error('OCJS_DOCKER_SINGLE_IMAGE is required');
  }
  if ((stage === 'all' || stage === 'final-multi') && !MULTI_IMAGE) {
    throw new Error('OCJS_DOCKER_MULTI_IMAGE is required');
  }
  if ((stage === 'all' || stage === 'bindgen-base') && !BINDGEN_IMAGE) {
    throw new Error('OCJS_DOCKER_BINDGEN_IMAGE is required');
  }
  return true;
}

export type LinkResult = {
  status: number;
  stdout: string;
  stderr: string;
  workDir: string;
};

/**
 * Stage the fixture source directory into a fresh per-test workdir under
 * `tests/docker/.work/` and run `docker run … <image> link <fixture>` against it. The workdir lives
 * inside the repo (under `/Users`) so Docker Desktop's default file sharing
 * exposes it to the container as `/src`.
 */
export function runLink(image: string, fixture: string, workName: string): LinkResult {
  const workDir = path.join(WORK_ROOT, workName);
  fs.rmSync(workDir, { recursive: true, force: true });
  fs.mkdirSync(workDir, { recursive: true });
  fs.cpSync(FIXTURES_DIR, workDir, { recursive: true });

  const uid = typeof process.getuid === 'function' ? process.getuid() : 0;
  const gid = typeof process.getgid === 'function' ? process.getgid() : 0;

  const result = spawnSync(
    'docker',
    [
      'run',
      '--rm',
      '-v',
      `${workDir}:/src`,
      '-u',
      `${uid}:${gid}`,
      image,
      'link',
      fixture,
    ],
    { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 },
  );

  return {
    status: result.status ?? -1,
    stdout: result.stdout ?? '',
    stderr: result.stderr ?? '',
    workDir,
  };
}

/**
 * Dynamically import a custom-built ES module produced by `runLink` and
 * instantiate it with a `locateFile` that resolves the sibling `.wasm`.
 */
export async function loadModule(workDir: string, jsBasename: string): Promise<any> {
  const jsPath = path.join(workDir, jsBasename);
  const mod = await import(jsPath);
  const init = mod.default ?? mod;
  return init({ locateFile: (file: string) => path.join(workDir, file) });
}

export function ensureCleanDocker(): void {
  // Best-effort: surface a clear hint when the image is missing.
  try {
    execFileSync('docker', ['image', 'inspect', SINGLE_IMAGE], { stdio: 'ignore' });
  } catch {
    throw new Error(
      `Docker image ${SINGLE_IMAGE} not present locally. Pull it first: \`docker pull ${SINGLE_IMAGE}\``,
    );
  }
}
