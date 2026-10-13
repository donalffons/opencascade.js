import * as fs from 'node:fs';
import * as os from 'node:os';
import * as path from 'node:path';

import { afterEach, describe, expect, it } from 'vitest';

import { defineBuild } from '../src/config/index.ts';
import { type ContainerExec, createContainerDriver } from '../src/driver/index.ts';

import images from '../generated/images.json' with { type: 'json' };

const config = defineBuild({
  name: 'demo',
  bindings: ['gp_Pnt'],
  variants: [{ name: 'single' }, { name: 'multi', requires: ['threads'] }],
});
const [single, multi] = config.variants;

const recorder = (
  statuses: Record<string, number> = {},
): { exec: ContainerExec; calls: { command: string; args: string[] }[] } => {
  const calls: { command: string; args: string[] }[] = [];
  const exec: ContainerExec = (command, args) => {
    calls.push({ command, args: [...args] });
    return { status: statuses[command] ?? 0, stdout: '', stderr: '' };
  };
  return { exec, calls };
};

const runArgs = {
  image: 'ghcr.io/taucad/opencascade.js:test',
  sourceDirectory: '/work/pkg',
  outputDirectory: '/work/pkg/.libcascade/out/single',
  yamlPath: '.libcascade/demo_single.yml',
};

describe('resolveEngine', () => {
  it('prefers docker when it responds', () => {
    const { exec, calls } = recorder();
    expect(createContainerDriver({ exec, env: {} }).resolveEngine()).toBe('docker');
    expect(calls).toStrictEqual([{ command: 'docker', args: ['version'] }]);
  });

  it('falls back to podman', () => {
    const { exec, calls } = recorder({ docker: 127 });
    expect(createContainerDriver({ exec, env: {} }).resolveEngine()).toBe('podman');
    expect(calls.map((call) => call.command)).toStrictEqual(['docker', 'podman']);
  });

  it('honours LIBCASCADE_CONTAINER_CMD exclusively', () => {
    const { exec, calls } = recorder();
    const driver = createContainerDriver({ exec, env: { LIBCASCADE_CONTAINER_CMD: 'colima-docker' } });
    expect(driver.resolveEngine()).toBe('colima-docker');
    expect(calls).toStrictEqual([{ command: 'colima-docker', args: ['version'] }]);
  });

  it('throws an actionable error when no engine responds', () => {
    const { exec } = recorder({ docker: 127, podman: 127 });
    expect(() => createContainerDriver({ exec, env: {} }).resolveEngine()).toThrow(
      /No container engine found \(probed: docker, podman\)[\s\S]*colima[\s\S]*macOS CI runners/,
    );
  });
});

describe('resolveImage', () => {
  it('selects the single-threaded image for a plain variant', () => {
    const driver = createContainerDriver({ exec: recorder().exec, env: {} });
    expect(driver.resolveImage(config, single!)).toStrictEqual({
      reference: `${images.repository}@${images.singleThreaded.digest}`,
      overridden: false,
    });
  });

  it('selects the multi-threaded image for a threads variant', () => {
    const driver = createContainerDriver({ exec: recorder().exec, env: {} });
    expect(driver.resolveImage(config, multi!)).toStrictEqual({
      reference: `${images.repository}@${images.multiThreaded.digest}`,
      overridden: false,
    });
  });

  it('lets LIBCASCADE_IMAGE win and warns about provenance', () => {
    const warnings: string[] = [];
    const driver = createContainerDriver({
      exec: recorder().exec,
      env: { LIBCASCADE_IMAGE: 'ocjs:local' },
      onWarn: (message) => warnings.push(message),
    });
    expect(driver.resolveImage({ ...config, image: 'ocjs:from-config' }, multi!)).toStrictEqual({
      reference: 'ocjs:local',
      overridden: true,
    });
    expect(warnings).toHaveLength(1);
    expect(warnings[0]).toMatch(/digest verification is skipped/);
  });

  it('falls back to the config-level image override', () => {
    const warnings: string[] = [];
    const driver = createContainerDriver({
      exec: recorder().exec,
      env: {},
      onWarn: (message) => warnings.push(message),
    });
    expect(driver.resolveImage({ ...config, image: 'ocjs:from-config' }, single!).reference).toBe(
      'ocjs:from-config',
    );
    expect(warnings).toHaveLength(1);
  });
});

describe('verifyImageDigest', () => {
  const pinned = `${images.repository}@${images.singleThreaded.digest}`;

  /** `exec` that answers `image inspect` with the given repo digests. */
  const inspector = (
    repoDigests: string[] | 'absent',
  ): { exec: ContainerExec; calls: string[][] } => {
    const calls: string[][] = [];
    const exec: ContainerExec = (_command, args) => {
      calls.push([...args]);
      if (args[0] !== 'image') return { status: 0, stdout: '', stderr: '' };
      return repoDigests === 'absent'
        ? { status: 1, stdout: '', stderr: 'No such image' }
        : { status: 0, stdout: `${JSON.stringify(repoDigests)}\n`, stderr: '' };
    };
    return { exec, calls };
  };

  it('accepts an image whose local repo digest is the pinned one', () => {
    const { exec, calls } = inspector([pinned]);
    expect(() =>
      createContainerDriver({ exec, env: {} }).verifyImageDigest('docker', pinned),
    ).not.toThrow();
    expect(calls.some((args) => args[0] === 'pull')).toBe(false);
  });

  it('pulls once when the image is not present locally, then verifies', () => {
    let pulled = false;
    const exec: ContainerExec = (_command, args) => {
      if (args[0] === 'pull') {
        pulled = true;
        return { status: 0, stdout: '', stderr: '' };
      }
      if (args[0] === 'image') {
        return pulled
          ? { status: 0, stdout: `${JSON.stringify([pinned])}\n`, stderr: '' }
          : { status: 1, stdout: '', stderr: 'No such image' };
      }
      return { status: 0, stdout: '', stderr: '' };
    };
    expect(() =>
      createContainerDriver({ exec, env: {} }).verifyImageDigest('docker', pinned),
    ).not.toThrow();
    expect(pulled).toBe(true);
  });

  it('fails with both digests when the local image is a different one', () => {
    const other = `${images.repository}@sha256:${'0'.repeat(64)}`;
    const { exec } = inspector([other]);
    expect(() =>
      createContainerDriver({ exec, env: {} }).verifyImageDigest('docker', pinned),
    ).toThrow(new RegExp(`Image digest mismatch[\\s\\S]*${pinned}[\\s\\S]*${other}`));
  });

  it('skips verification for an override reference', () => {
    const { exec, calls } = inspector('absent');
    expect(() =>
      createContainerDriver({ exec, env: {} }).verifyImageDigest('docker', 'ocjs-local:single-threaded'),
    ).not.toThrow();
    expect(calls).toStrictEqual([]);
  });
});

describe('buildRunArgs', () => {
  it('builds the default (macOS) argv without UID mapping or --platform', () => {
    const driver = createContainerDriver({ exec: recorder().exec, env: {}, platform: 'darwin' });
    expect(driver.buildRunArgs(runArgs)).toStrictEqual([
      'run',
      '--rm',
      '--pull=missing',
      '-v',
      '/work/pkg:/src',
      '-v',
      '/work/pkg/.libcascade/out/single:/out',
      '-e',
      'OCJS_OUTPUT_DIR=/out',
      'ghcr.io/taucad/opencascade.js:test',
      'link',
      '.libcascade/demo_single.yml',
    ]);
  });

  it('adds -u uid:gid on Linux native engines', () => {
    const driver = createContainerDriver({
      exec: recorder().exec,
      env: {},
      platform: 'linux',
      uid: 1001,
      gid: 1002,
    });
    expect(driver.buildRunArgs(runArgs).slice(0, 5)).toStrictEqual([
      'run',
      '--rm',
      '--pull=missing',
      '-u',
      '1001:1002',
    ]);
  });

  it('omits -u on Windows', () => {
    const driver = createContainerDriver({ exec: recorder().exec, env: {}, platform: 'win32' });
    expect(driver.buildRunArgs(runArgs)).not.toContain('-u');
  });

  it('passes $LIBCASCADE_PLATFORM through', () => {
    const driver = createContainerDriver({
      exec: recorder().exec,
      env: { LIBCASCADE_PLATFORM: 'linux/amd64' },
      platform: 'darwin',
    });
    expect(driver.buildRunArgs(runArgs).slice(0, 5)).toStrictEqual([
      'run',
      '--rm',
      '--pull=missing',
      '--platform',
      'linux/amd64',
    ]);
  });
});

describe('run', () => {
  const workspaces: string[] = [];

  const makeWorkspace = (): { source: string; output: string; dist: string } => {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), 'libcascade-driver-'));
    workspaces.push(root);
    return {
      source: root,
      output: path.join(root, '.libcascade/out/single'),
      dist: path.join(root, 'dist'),
    };
  };

  afterEach(() => {
    for (const workspace of workspaces.splice(0)) {
      fs.rmSync(workspace, { recursive: true, force: true });
    }
  });

  it('moves the artifacts into dist/ after a successful run', () => {
    const workspace = makeWorkspace();
    const exec: ContainerExec = (command) => {
      if (command === 'docker' || command === 'podman') {
        // `version` probe and the `run` itself share the recorder; only the run
        // needs to produce artifacts, and producing them twice is harmless.
        fs.mkdirSync(workspace.output, { recursive: true });
        fs.writeFileSync(path.join(workspace.output, 'demo_single.js'), 'glue');
        fs.writeFileSync(path.join(workspace.output, 'demo_single.wasm'), 'wasm');
        fs.writeFileSync(path.join(workspace.output, 'demo_single.build-manifest.json'), '{}');
      }
      return { status: 0, stdout: '', stderr: '' };
    };

    const moved = createContainerDriver({ exec, env: {}, platform: 'darwin' }).run({
      image: 'ocjs:test',
      sourceDirectory: workspace.source,
      outputDirectory: workspace.output,
      yamlPath: '.libcascade/demo_single.yml',
      distDirectory: workspace.dist,
      outputName: 'demo_single',
    });

    expect(fs.readdirSync(workspace.dist).sort()).toStrictEqual([
      'demo_single.build-manifest.json',
      'demo_single.js',
      'demo_single.wasm',
    ]);
    expect(moved).toHaveLength(3);
    // Nothing left behind in the scratch output directory.
    expect(fs.readdirSync(workspace.output)).toStrictEqual([]);
  });

  it('leaves dist/ untouched and points at the scratch directory when the run fails', () => {
    const workspace = makeWorkspace();
    const exec: ContainerExec = (command, args) => {
      if (args[0] === 'version') return { status: 0, stdout: '', stderr: '' };
      fs.mkdirSync(workspace.output, { recursive: true });
      fs.writeFileSync(path.join(workspace.output, 'demo_single.js'), 'partial');
      return { status: 1, stdout: '', stderr: '' };
    };

    expect(() =>
      createContainerDriver({ exec, env: {}, platform: 'darwin' }).run({
        image: 'ocjs:test',
        sourceDirectory: workspace.source,
        outputDirectory: workspace.output,
        yamlPath: '.libcascade/demo_single.yml',
        distDirectory: workspace.dist,
        outputName: 'demo_single',
      }),
    ).toThrow(new RegExp(`exited with status 1[\\s\\S]*${workspace.output.replaceAll('/', '\\/')}`));
    expect(fs.existsSync(workspace.dist)).toBe(false);
  });
});
