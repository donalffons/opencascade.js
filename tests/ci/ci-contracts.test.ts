import { describe, expect, it } from 'vitest';
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'yaml';
import { deriveRelease } from '../../scripts/ci-release.mjs';
import { decideGhcrPromotion, deriveGhcrTags } from '../../scripts/ghcr-promotion.mjs';
import { validateRequestedVersion } from '../../scripts/prepare-release.mjs';
import {
  ASSEMBLED_DIST_FILES,
  DIST_FILES,
  PACKAGE_FILES,
  validateExactFiles,
} from '../../scripts/package-candidate.mjs';
import { selectVersions } from '../../scripts/ghcr-retention.mjs';

const SHA = 'd5736f09aabbccddeeff00112233445566778899';
const EPOCH = 1_778_112_000; // 2026-05-07T00:00:00Z
const ROOT = path.resolve(import.meta.dirname, '../..');
const workflow = (name: string) => parse(fs.readFileSync(path.join(ROOT, '.github/workflows', name), 'utf8'));

describe('CI contracts', () => {
  it('should reserve publication for main pushes and manual branch canaries', () => {
    const manualCanary = deriveRelease({
      event: 'workflow_dispatch',
      ref: 'refs/heads/feature/npm',
      sha: SHA,
      commitEpoch: EPOCH,
      packageVersion: '3.0.0-beta.0',
    });
    expect(manualCanary).toMatchObject({
      version: '3.0.0-canary.d5736f09',
      channel: 'canary',
      kind: 'manual-canary',
      npmPublish: true,
      ghcrPromote: true,
    });
    expect(manualCanary).not.toHaveProperty('branchSlug');
    expect(
      deriveRelease({
        event: 'push',
        ref: 'refs/heads/main',
        sha: SHA,
        commitEpoch: EPOCH,
        packageVersion: '3.0.0-beta.0',
        commitSubject: 'feat(bindings): add symbols',
      }),
    ).toMatchObject({ kind: 'main', channel: 'none', npmPublish: false, ghcrPromote: true });
    expect(
      deriveRelease({
        event: 'pull_request',
        ref: 'refs/pull/1/merge',
        sha: SHA,
        commitEpoch: EPOCH,
        packageVersion: '3.0.0-beta.0',
      }),
    ).toMatchObject({
      kind: 'pull-request',
      channel: 'none',
      npmPublish: false,
      ghcrPromote: false,
    });
    expect(() =>
      deriveRelease({
        event: 'push',
        ref: 'refs/heads/feature/npm',
        sha: SHA,
        commitEpoch: EPOCH,
        packageVersion: '3.0.0-beta.0',
      }),
    ).toThrow('automatic push must target main');
    expect(() =>
      deriveRelease({
        event: 'workflow_dispatch',
        ref: 'refs/tags/v3.0.0',
        sha: SHA,
        commitEpoch: EPOCH,
        packageVersion: '3.0.0-beta.0',
      }),
    ).toThrow('manual canary ref must be a branch');
  });

  it('should require reproducibility for an exact release pull request without publishing it', () => {
    expect(
      deriveRelease({
        event: 'pull_request',
        ref: 'refs/pull/14/merge',
        sha: SHA,
        commitEpoch: EPOCH,
        packageVersion: '3.0.0-beta.1',
        commitSubject: 'chore(release): ocjs v3.0.0-beta.1',
        changedFiles: ['CHANGELOG.md', 'package-lock.json', 'package.json'],
        changelog: '## 3.0.0-beta.1 (2026-08-05)',
      }),
    ).toMatchObject({
      version: '3.0.0-beta.1',
      channel: 'none',
      kind: 'release-pull-request',
      npmPublish: false,
      ghcrPromote: false,
      isRelease: false,
      reproducibilityRequired: true,
    });

    const ci = workflow('docker.yml');
    const releaseStep = ci.jobs.preflight.steps.find(
      ({ name }: { name?: string }) => name === 'Validate event and derive immutable release metadata',
    );
    expect(ci.jobs.preflight.outputs.reproducibility_required).toBe(
      '${{ steps.release.outputs.reproducibility_required }}',
    );
    expect(releaseStep.env).toMatchObject({
      BASE_SHA: '${{ github.event.pull_request.base.sha }}',
      HEAD_SHA: '${{ github.event.pull_request.head.sha }}',
    });
    expect(releaseStep.run).toContain('metadata_sha="$HEAD_SHA"');
    expect(ci.jobs['release-reproducibility'].if).toBe("needs.preflight.outputs.reproducibility_required == 'true'");
  });

  it('should resume only an exact release version and source commit', () => {
    const release = deriveRelease({
      event: 'workflow_dispatch',
      operation: 'resume-release',
      ref: 'refs/heads/main',
      sha: SHA,
      commitEpoch: EPOCH,
      packageVersion: '3.0.0-beta.1',
      requestedVersion: '3.0.0-beta.1',
      commitSubject: 'chore(release): ocjs v3.0.0-beta.1 (#20)',
      changedFiles: ['CHANGELOG.md', 'package-lock.json', 'package.json'],
      changelog: '## 3.0.0-beta.1 (2026-08-04)',
    });
    expect(release).toMatchObject({
      channel: 'beta',
      fullSha: SHA,
      isRelease: true,
      kind: 'beta-release',
      version: '3.0.0-beta.1',
    });
    expect(() =>
      deriveRelease({
        event: 'workflow_dispatch',
        operation: 'resume-release',
        ref: 'refs/heads/feature/release',
        sha: SHA,
        commitEpoch: EPOCH,
        packageVersion: '3.0.0-beta.1',
        requestedVersion: '3.0.0-beta.1',
        commitSubject: 'chore(release): ocjs v3.0.0-beta.1',
        changedFiles: ['CHANGELOG.md', 'package-lock.json', 'package.json'],
      }),
    ).toThrow('release resume must run from protected main');
    expect(() =>
      deriveRelease({
        event: 'workflow_dispatch',
        operation: 'resume-release',
        ref: 'refs/heads/main',
        sha: SHA,
        commitEpoch: EPOCH,
        packageVersion: '3.0.0-beta.1',
        requestedVersion: '3.0.0-beta.2',
        commitSubject: 'chore(release): ocjs v3.0.0-beta.1',
        changedFiles: ['CHANGELOG.md', 'package-lock.json', 'package.json'],
      }),
    ).toThrow('requested release 3.0.0-beta.2 does not match 3.0.0-beta.1');
  });

  it('should derive immutable GHCR tags separately from moving aliases', () => {
    expect(
      deriveGhcrTags({
        fullSha: SHA,
        kind: 'manual-canary',
        stage: 'final-single',
        version: '3.0.0-canary.d5736f09',
      }),
    ).toEqual({
      immutable: ['3.0.0-canary.d5736f09-single-threaded'],
      mutable: [],
    });
    expect(
      deriveGhcrTags({
        fullSha: SHA,
        kind: 'stable-release',
        stage: 'final-single',
        version: '3.0.0',
      }),
    ).toEqual({
      immutable: ['3.0.0-single-threaded', 'sha-d5736f09-single-threaded'],
      mutable: ['single-threaded'],
    });
    expect(
      deriveGhcrTags({
        fullSha: SHA,
        kind: 'beta-release',
        stage: 'final-multi',
        version: '3.0.0-beta.1',
      }),
    ).toEqual({
      immutable: ['3.0.0-beta.1-multi-threaded', 'sha-d5736f09-multi-threaded'],
      mutable: [],
    });
    expect(
      deriveGhcrTags({
        fullSha: SHA,
        kind: 'main',
        stage: 'bindgen-base',
        version: '3.0.0-beta.0',
      }),
    ).toEqual({
      immutable: [`bindgen-base-branch-main-${SHA}`],
      mutable: ['bindgen-base-branch-main'],
    });
  });

  it.each([
    [{ exists: false, mutable: false }, 'create'],
    [{ exists: true, mutable: false, exact: true, signatureValid: true }, 'reuse'],
    [{ exists: true, mutable: false, exact: true, signatureValid: false }, 'sign'],
    [{ exists: true, mutable: false, exact: false, signatureValid: false }, 'conflict'],
    [{ exists: true, mutable: true, exact: false, signatureValid: false }, 'replace'],
    [{ exists: true, mutable: true, exact: true, signatureValid: true }, 'reuse'],
  ] as const)('should select GHCR promotion action for %j', (state, action) => {
    expect(decideGhcrPromotion(state)).toBe(action);
  });

  it('should classify only exact release-PR merges as beta or stable publications', () => {
    const betaReleaseFiles = ['CHANGELOG.md', 'package-lock.json', 'package.json'];
    const stableReleaseFiles = ['.nx/version-plans/feature.md', 'CHANGELOG.md', 'package-lock.json', 'package.json'];
    expect(
      deriveRelease({
        event: 'push',
        ref: 'refs/heads/main',
        sha: SHA,
        commitEpoch: EPOCH,
        packageVersion: '3.0.0-beta.1',
        commitSubject: 'chore(release): ocjs v3.0.0-beta.1',
        changedFiles: betaReleaseFiles,
        changelog: '## 3.0.0-beta.1 (2026-08-04)',
      }),
    ).toMatchObject({
      version: '3.0.0-beta.1',
      channel: 'beta',
      npmPublish: true,
      isRelease: true,
      prerelease: true,
      releaseTag: 'v3.0.0-beta.1',
    });
    expect(
      deriveRelease({
        event: 'push',
        ref: 'refs/heads/main',
        sha: SHA,
        commitEpoch: EPOCH,
        packageVersion: '3.0.0',
        commitSubject: 'chore(release): ocjs v3.0.0',
        changedFiles: stableReleaseFiles,
        changelog: '# 3.0.0 (2026-08-04)',
      }),
    ).toMatchObject({ channel: 'latest', kind: 'stable-release', prerelease: false });
    expect(() =>
      deriveRelease({
        event: 'push',
        ref: 'refs/heads/main',
        sha: SHA,
        commitEpoch: EPOCH,
        packageVersion: '3.0.0-beta.1',
        commitSubject: 'chore(release): ocjs v3.0.0-beta.1',
        changedFiles: betaReleaseFiles,
        changelog: '# 3.0.0 (2026-08-04)',
      }),
    ).toThrow('CHANGELOG.md has no 3.0.0-beta.1 release section');
    expect(() =>
      deriveRelease({
        event: 'push',
        ref: 'refs/heads/main',
        sha: SHA,
        commitEpoch: EPOCH,
        packageVersion: '3.0.0-beta.1',
        commitSubject: 'chore(release): ocjs v3.0.0-beta.1',
        changedFiles: stableReleaseFiles,
      }),
    ).toThrow('beta release must retain Version Plans');
    expect(() =>
      deriveRelease({
        event: 'push',
        ref: 'refs/heads/main',
        sha: SHA,
        commitEpoch: EPOCH,
        packageVersion: '3.0.0',
        commitSubject: 'chore(release): ocjs v3.0.0',
        changedFiles: betaReleaseFiles,
      }),
    ).toThrow('stable release must consume at least one Version Plan');
    expect(() =>
      deriveRelease({
        event: 'push',
        ref: 'refs/heads/main',
        sha: SHA,
        commitEpoch: EPOCH,
        packageVersion: '3.0.0-rc.1',
        commitSubject: 'chore(release): ocjs v3.0.0-rc.1',
        changedFiles: stableReleaseFiles,
      }),
    ).toThrow('unsupported release prerelease');
    expect(() =>
      deriveRelease({
        event: 'push',
        ref: 'refs/heads/main',
        sha: SHA,
        commitEpoch: EPOCH,
        packageVersion: '3.0.0',
        commitSubject: 'chore(release): ocjs v3.0.0',
        changedFiles: [...stableReleaseFiles, 'src/late-change.ts'],
      }),
    ).toThrow('unexpected files');
  });

  it('should carry the same Version Plan from beta preparation into stable preparation', () => {
    expect(
      validateRequestedVersion({
        currentVersion: '3.0.0-beta.0',
        plannedStableVersion: '3.0.0',
        requestedVersion: '3.0.0-beta.1',
      }),
    ).toEqual({ channel: 'beta', deleteVersionPlans: false, version: '3.0.0-beta.1' });
    expect(
      validateRequestedVersion({
        currentVersion: '3.0.0-beta.1',
        plannedStableVersion: '3.0.0',
        requestedVersion: '3.0.0',
      }),
    ).toEqual({ channel: 'stable', deleteVersionPlans: true, version: '3.0.0' });
    expect(
      validateRequestedVersion({
        currentVersion: '3.0.0',
        plannedStableVersion: '3.1.0',
        requestedVersion: '3.1.0-beta.1',
      }),
    ).toEqual({ channel: 'beta', deleteVersionPlans: false, version: '3.1.0-beta.1' });
    expect(() =>
      validateRequestedVersion({
        currentVersion: '3.0.0-beta.1',
        plannedStableVersion: '3.1.0',
        requestedVersion: '3.0.0-beta.2',
      }),
    ).toThrow('Version Plans resolve');
    expect(() =>
      validateRequestedVersion({
        currentVersion: '3.0.0-beta.1',
        plannedStableVersion: '3.0.0',
        requestedVersion: '3.0.0-beta.3',
      }),
    ).toThrow('next beta');
  });

  it('should keep the package allowlists exact', () => {
    expect(DIST_FILES).toHaveLength(21);
    expect(ASSEMBLED_DIST_FILES).toHaveLength(24);
    expect(PACKAGE_FILES).toHaveLength(27);
    expect(DIST_FILES).toContain('api-reference.json');
    expect(DIST_FILES).toContain('types.d.ts');
    expect(DIST_FILES).not.toContain('opencascade_single.d.ts');
    expect(DIST_FILES).not.toContain('opencascade_multi.d.ts');
    expect(ASSEMBLED_DIST_FILES).toContain('exports.json');
    expect(ASSEMBLED_DIST_FILES).toContain('opencascade_single.d.ts');
    expect(ASSEMBLED_DIST_FILES).toContain('opencascade_multi.d.ts');
    expect(() => validateExactFiles([...DIST_FILES, 'stale.wasm'], DIST_FILES, 'dist')).toThrow('extra=[stale.wasm]');
  });

  it('should keep specialized test surfaces independently runnable', () => {
    const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8'));
    expect(manifest.scripts['test:regression']).toContain('vitest.regression.config.ts');
    expect(manifest.scripts['test:docker']).toContain('vitest.docker.config.ts');
    expect(manifest.scripts['test:package']).toContain('vitest.package.config.ts');
  });

  it('should lint every authored JavaScript and TypeScript source with the JSDoc gate', () => {
    const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8'));
    const config = fs.readFileSync(path.join(ROOT, 'eslint.config.mjs'), 'utf8');
    expect(manifest.scripts.lint).toBe('eslint --config eslint.config.mjs .');
    expect(manifest.scripts['lint:fix']).toBe('eslint --config eslint.config.mjs --fix .');
    expect(config).toContain("'ocjs-lint/jsdoc-quality': 'error'");
  });

  it('should make provisioned Replicad compatibility a mandatory candidate gate', () => {
    const ci = workflow('docker.yml');
    const source = fs.readFileSync(path.join(ROOT, '.github/workflows/docker.yml'), 'utf8');
    const replicadTest = fs.readFileSync(path.join(ROOT, 'tests/sentinel/test_replicad_native_validation.py'), 'utf8');
    const replicadFixture = parse(fs.readFileSync(path.join(ROOT, 'build-configs/replicad-validation.yml'), 'utf8'));
    expect(source).toContain('build-configs/replicad-validation.yml');
    expect(source).toContain('.venv/bin/pytest tests/integration tests/sentinel');
    expect(replicadTest).not.toContain('pytest.skip');
    expect(replicadFixture.mainBuild.emccFlags).toContain('--emit-symbol-map');
    for (const jobName of ['candidate-validation', 'candidate-build']) {
      const step = ci.jobs[jobName].steps.find(
        ({ name }: { name?: string }) => name === 'Python integration and sentinel checks',
      );
      expect(step.env.TEST_IMAGE).toBe('ocjs:e2e-validation-single');
      expect(step.run).toContain('rm -rf build/bindings');
      expect(step.run).toContain('npx nx run ocjs:generate --skip-nx-cache');
      expect(step.run).toContain('npx vitest run tests/no-clobber-validation.test.ts');
      expect(step.run).toContain('npx nx run ocjs:bind-symbols --skip-nx-cache');
      expect(step.run).toContain('cp -R /host/scripts /opencascade.js/scripts');
      expect(step.run).toContain('OCJS_OUTPUT_DIR=/opencascade.js/dist');
    }
  });

  it('should generate the API reference without rebuilding tested candidate outputs', () => {
    const ci = workflow('docker.yml');
    for (const jobName of ['candidate-validation', 'candidate-build']) {
      const step = ci.jobs[jobName].steps.find(
        ({ name }: { name?: string }) => name === 'Generate package-owned API reference',
      );
      expect(step.run).toContain('npx nx run ocjs:api-reference --skip-nx-cache --excludeTaskDependencies');
    }
  });

  it('should reuse candidate outputs for multi-threaded runtime assertions', () => {
    const ci = workflow('docker.yml');
    for (const jobName of ['candidate-validation', 'candidate-build']) {
      const step = ci.jobs[jobName].steps.find(({ name }: { name?: string }) => name === 'Docker consumer behavior');
      expect(step.env.OCJS_DOCKER_OUTPUT_DIR).toBe('${{ runner.temp }}/e2e');
    }
    const releaseStep = ci.jobs['candidate-build'].steps.find(
      ({ name }: { name?: string }) => name === 'Docker consumer behavior',
    );
    expect(releaseStep.if).toBe("matrix.arch == 'arm64'");
  });

  it('should provision pnpm for isolated docs lifecycle scripts', () => {
    const source = fs.readFileSync(path.join(ROOT, 'scripts/test-candidate-docs.sh'), 'utf8');
    const provision = source.indexOf('corepack enable --install-directory "$COREPACK_BIN"');
    expect(provision).toBeGreaterThan(-1);
    expect(source.indexOf('pnpm typecheck')).toBeGreaterThan(provision);
  });

  it('should select only expired, unprotected GHCR versions', () => {
    const now = Date.parse('2026-07-21T00:00:00Z');
    const version = (id: number, created_at: string, tags: string[], name = `sha256:${id}`) => ({
      id,
      name,
      created_at,
      metadata: { container: { tags } },
    });
    const branch = Array.from({ length: 7 }, (_, index) =>
      version(index + 1, `2026-07-${String(19 - index).padStart(2, '0')}T00:00:00Z`, ['branch-feature-x']),
    );
    const canary = (offset: number, stage: string, versionAligned = false) =>
      Array.from({ length: 7 }, (_, index) =>
        version(offset + index, `2026-07-${String(19 - index).padStart(2, '0')}T00:00:00Z`, [
          versionAligned
            ? `3.0.0-canary.${String(offset + index).padStart(8, '0')}-${stage}`
            : `canary-${String(offset + index).padStart(8, '0')}-${stage}`,
        ]),
      );
    const selected = selectVersions(
      [
        ...branch,
        ...canary(30, 'single-threaded'),
        ...canary(40, 'multi-threaded', true),
        ...canary(50, 'bindgen-base'),
        version(20, '2026-01-01T00:00:00Z', ['3.0.0-single-threaded']),
        version(21, '2026-01-01T00:00:00Z', ['sha256-deadbeef.sig']),
        version(22, '2026-01-01T00:00:00Z', [], 'sha256:orphan'),
        version(23, '2026-01-01T00:00:00Z', [], 'sha256:referenced'),
        version(24, '2026-01-01T00:00:00Z', ['branch-feature-x', 'buildcache-amd64-final-single']),
        version(25, '2026-01-01T00:00:00Z', ['sha256-deadbeef.att']),
        version(26, '2026-01-01T00:00:00Z', ['buildcache-amd64-final-single']),
        version(27, '2026-01-02T00:00:00Z', ['buildcache-amd64-final-single']),
        version(60, '2026-01-01T00:00:00Z', ['canary-12345678-single-threaded', 'unexpected']),
      ],
      { now, referencedDigests: new Set(['sha256:referenced']) },
    );
    expect(selected.map(({ id }) => id)).toEqual([7, 22, 26, 36, 46, 56]);
  });

  it('should run automatically only for main and pull requests targeting main', () => {
    const ci = workflow('docker.yml');
    expect(ci.on.push.branches).toEqual(['main']);
    expect(ci.on.pull_request.branches).toEqual(['main']);
    expect(ci.on.workflow_dispatch.inputs.operation).toMatchObject({
      default: 'canary',
      options: ['canary', 'resume-release'],
      required: true,
      type: 'choice',
    });
    expect(ci.on.workflow_dispatch.inputs.version.required).toBe(false);
    expect(ci.on.workflow_dispatch.inputs.release_sha.required).toBe(false);
    expect(ci.concurrency['cancel-in-progress']).toContain("github.event_name == 'pull_request'");
    expect(ci.jobs['npm-publish'].concurrency).toMatchObject({
      queue: 'max',
      'cancel-in-progress': false,
    });
    expect(ci.jobs['toolchain-publish'].concurrency).toEqual(ci.jobs['npm-publish'].concurrency);
  });

  it('should fast-forward the upstream PR branch without triggering duplicate CI', () => {
    const mirror = workflow('mirror-upstream-pr-head.yml');
    const step = mirror.jobs.mirror.steps.find(
      ({ name }: { name?: string }) => name === 'Fast-forward upstream PR branch',
    );

    expect(mirror.on.push.branches).toEqual(['main']);
    expect(mirror.permissions).toEqual({ contents: 'write' });
    expect(mirror.jobs.mirror.if).toBe("github.repository == 'taucad/opencascade.js'");
    expect(step.env.GH_TOKEN).toBe('${{ github.token }}');
    expect(step.run).toContain('git/refs/heads/occt-v8-emscripten-5');
    expect(step.run).toContain('-f sha="${GITHUB_SHA}"');
    expect(step.run).toContain('-F force=false');
  });

  it('should keep every ESLint relative import in clean checkouts', () => {
    for (const relative of [
      'tools/eslint-plugin/index.js',
      'tools/eslint-plugin/jsdoc-quality.js',
      'tools/eslint-plugin/require-using-on-disposable.js',
      'tests/ci/jsdoc-quality.test.ts',
    ]) {
      expect(fs.existsSync(path.join(ROOT, relative)), relative).toBe(true);
      const ignored = spawnSync('git', ['check-ignore', '--no-index', '--quiet', relative], {
        cwd: ROOT,
      });
      expect(ignored.status, `${relative} must not be ignored`).toBe(1);
    }
  });

  it('should keep six main rows and run the complete pull-request matrix natively on ARM64', () => {
    const ci = workflow('docker.yml');
    const build = ci.jobs['candidate-build'];
    const validation = ci.jobs['candidate-validation'];

    expect(build.strategy.matrix).toEqual({
      stage: ['final-single', 'final-multi', 'bindgen-base'],
      arch: ['amd64', 'arm64'],
    });
    expect(validation.strategy.matrix).toEqual({
      stage: ['final-single', 'final-multi', 'bindgen-base'],
    });
    expect(validation.if).toBe("github.event_name == 'pull_request'");
    expect(validation['runs-on']).toBe('ubuntu-24.04-arm');
    expect(validation.needs).toBe('preflight');
    expect(build.if).toBe("github.event_name == 'push' || github.event_name == 'workflow_dispatch'");

    const rows = build.strategy.matrix.stage.flatMap((stage: string) =>
      build.strategy.matrix.arch.map((arch: string) => ({ stage, arch })),
    );
    expect(rows).toEqual([
      { stage: 'final-single', arch: 'amd64' },
      { stage: 'final-single', arch: 'arm64' },
      { stage: 'final-multi', arch: 'amd64' },
      { stage: 'final-multi', arch: 'arm64' },
      { stage: 'bindgen-base', arch: 'amd64' },
      { stage: 'bindgen-base', arch: 'arm64' },
    ]);
    expect(build['runs-on']).toContain("matrix.arch == 'arm64'");
    const validationSource = validation.steps
      .filter(({ name }: { name?: string }) => name?.includes('candidate for validation'))
      .map(({ with: inputs }: { with: Record<string, unknown> }) => inputs.platforms);
    expect(validationSource).toEqual(['linux/arm64']);
    const source = fs.readFileSync(path.join(ROOT, '.github/workflows/docker.yml'), 'utf8');
    expect(source).toContain("matrix.arch == 'arm64' && 'linux/arm64' || 'linux/amd64'");
    expect(source).toContain("matrix.stage == 'final-multi' && 'build-configs/full_multi.yml'");
    expect(source).not.toContain('matrix.runner');
    expect(source).not.toContain('matrix.platform');
    expect(source).not.toContain('matrix.config');
  });

  it('should promote exactly one tested digest per native architecture', () => {
    const source = fs.readFileSync(path.join(ROOT, '.github/workflows/docker.yml'), 'utf8');
    const promotion = fs.readFileSync(path.join(ROOT, 'scripts/promote-ghcr-tag.sh'), 'utf8');
    expect(source).toContain('digest-${STAGE}-${arch}-${GITHUB_RUN_ID}');
    expect(source).toContain('for arch in amd64 arm64');
    expect(source).toContain('test "${#files[@]}" -eq 1');
    expect(source).toContain('select(.annotations["vnd.docker.reference.type"] != "attestation-manifest")');
    expect(promotion).toContain('test "$platforms" = \'linux/amd64,linux/arm64\'');
  });

  it('should install locked dependencies before deriving GHCR tags', () => {
    const ci = workflow('docker.yml');
    for (const jobName of ['ghcr-promote', 'registry-verify']) {
      const steps = ci.jobs[jobName].steps as Array<{ run?: string }>;
      const install = steps.findIndex(({ run }) => run === 'npm ci --ignore-scripts --no-audit --no-fund');
      const promotion = steps.findIndex(({ run }) => run?.includes('scripts/ghcr-promotion.mjs'));
      expect(install).toBeGreaterThan(-1);
      expect(install).toBeLessThan(promotion);
    }
  });

  it('should publish immutable manual canary image coordinates', () => {
    const ci = workflow('docker.yml');
    const promote = ci.jobs['ghcr-promote'].steps.find(
      ({ name }: { name?: string }) => name === 'Attach consumer-facing tags',
    );
    const verify = ci.jobs['registry-verify'].steps.find(
      ({ name }: { name?: string }) => name === 'Verify exact registry bytes, provenance, signatures, and runtime',
    );

    expect(promote.env.KIND).toBe('${{ needs.preflight.outputs.kind }}');
    expect(promote.env).not.toHaveProperty('BRANCH');
    expect(promote.run).toContain('scripts/ghcr-promotion.mjs tags');
    expect(promote.run).toContain('scripts/promote-ghcr-tag.sh');
    const helper = fs.readFileSync(path.join(ROOT, 'scripts/promote-ghcr-tag.sh'), 'utf8');
    expect(helper).toContain('node "$script_dir/ghcr-promotion.mjs" decide');
    expect(promote.run).not.toContain('$branch_prefix-$BRANCH');
    const digestDownload = ci.jobs['registry-verify'].steps.find(
      ({ name }: { name?: string }) => name === 'Download tested digests',
    );
    expect(digestDownload.with.pattern).toBe('digest-*-*-${{ github.run_id }}');
    expect(verify.env.KIND).toBe('${{ needs.preflight.outputs.kind }}');
    expect(verify.env).not.toHaveProperty('BRANCH');
    expect(verify.run).toContain('stable-release|beta-release|manual-canary) tag="$VERSION-$prefix"');
    expect(verify.run).toContain('test "$published_native_digests" = "$expected_native_digests"');
    expect(verify.run).toContain('docker pull "$REGISTRY_IMAGE:$VERSION-single-threaded"');
    expect(verify.run).toContain('docker pull "$REGISTRY_IMAGE:$VERSION-multi-threaded"');
    expect(verify.run).toContain('docker pull "$REGISTRY_IMAGE:$VERSION-bindgen-base"');
    expect(verify.run).not.toContain('$branch_prefix-$BRANCH');
  });

  it('should publish the exact toolchain only after its versioned image metadata verifies', () => {
    const ci = workflow('docker.yml');
    const metadata = ci.jobs['toolchain-metadata'];
    expect(metadata.needs).toEqual(['preflight', 'package-assemble', 'registry-verify']);
    expect(metadata.if).toContain("needs.preflight.outputs.npm_publish == 'true'");
    expect(metadata.if).toContain("needs.registry-verify.result == 'success'");
    const step = metadata.steps.find(
      ({ name }: { name?: string }) => name === 'Regenerate and validate exact release metadata',
    );
    expect(step.env).toEqual({
      FULL_SHA: '${{ needs.preflight.outputs.full_sha }}',
      VERSION: '${{ needs.preflight.outputs.version }}',
    });
    expect(step.run).toContain('validate-release.mjs environment');
    expect(step.run).toContain('npm run generate:toolchain -- "$VERSION"');
    expect(step.run).toContain('validate-release.mjs metadata');
    expect(metadata.steps.find(({ name }: { name?: string }) => name === 'Upload verified toolchain metadata').with.path).toContain(
      'packages/toolchain/dist',
    );

    const pack = ci.jobs['toolchain-package'];
    expect(pack.needs).toEqual(['preflight', 'toolchain-metadata']);
    expect(pack.steps.find(({ name }: { name?: string }) => name === 'Pin npm pack implementation').run).toContain(
      'npm@11.5.1',
    );
    const packStep = pack.steps.find(({ name }: { name?: string }) => name === 'Pack and verify exact exports');
    expect(packStep.run).toContain('npm pack --ignore-scripts --json');
    expect(packStep.run).toContain('packed exports are missing');
    expect(packStep.run).toContain("manifest.name !== '@libcascade/toolchain'");
    expect(packStep.run).toContain('manifest.version !== process.env.VERSION');

    const publish = ci.jobs['toolchain-publish'];
    expect(publish.needs).toEqual(['preflight', 'toolchain-package']);
    expect(publish.permissions).toEqual({ contents: 'read', 'id-token': 'write' });
    expect(publish.steps.some(({ uses }: { uses?: string }) => uses?.startsWith('actions/checkout@'))).toBe(false);
    const publishStep = publish.steps.find(({ name }: { name?: string }) => name === 'Publish or prove idempotency');
    expect(publishStep.run).toContain('npm publish ./toolchain-candidate.tgz');
    expect(publishStep.run).toContain('npm pack "@libcascade/toolchain@$VERSION"');
    expect(publishStep.run).toContain('dist.integrity');
    expect(publishStep.run).toContain("workflow.path !== '.github/workflows/docker.yml'");
    expect(publishStep.run).toContain('source?.digest.gitCommit !== process.env.FULL_SHA');

    const registry = ci.jobs['toolchain-registry-verify'];
    expect(registry.needs).toEqual(['preflight', 'toolchain-package', 'toolchain-publish']);
    const registryStep = registry.steps.find(
      ({ name }: { name?: string }) => name === 'Verify exact registry bytes, provenance, signatures, and exports',
    );
    expect(registryStep.run).toContain('npm audit signatures');
    expect(registryStep.run).toContain("await import('@libcascade/toolchain')");
    expect(registryStep.run).toContain("await import('@libcascade/toolchain/driver')");
    expect(registryStep.run).toContain('./node_modules/.bin/libcascade --help');

    expect(ci.jobs['release-finalize'].needs).toContain('toolchain-registry-verify');
    expect(ci.jobs['ci-gate'].needs).toContain('toolchain-metadata');
    expect(ci.jobs['ci-gate'].needs).toContain('toolchain-registry-verify');
  });

  it('should not document automatic feature-branch publication', () => {
    const stale = [
      ['README.md', '**Every push**—branches and `main`—publishes'],
      ['README.md', ':branch-<slug>'],
      ['CONTRIBUTING.md', 'Canary packages are immutable per branch commit'],
      ['MAINTAINER.md', 'Pull request or manual run | none | validation only'],
      ['MAINTAINER.md', 'Non-`main` branch push'],
      ['MAINTAINER.md', 'every branch push is a publisher'],
      ['docs-site/content/docs/toolchain/reference/docker-image.mdx', ':branch-<slug>'],
      ['docs-site/content/docs/toolchain/reference/docker-image.mdx', 'Every push ships full manifest lists'],
    ];
    for (const [relative, phrase] of stale) {
      expect(fs.readFileSync(path.join(ROOT, relative), 'utf8'), relative).not.toContain(phrase);
    }
  });

  it('should require every native candidate without comparing host-dependent bytes', () => {
    const ci = workflow('docker.yml');
    const nativeE2e = ci.jobs['candidate-build'].steps.find(({ name }: { name?: string }) => name === 'Candidate e2e');
    expect(ci.jobs['candidate-gate'].needs).toEqual(['candidate-validation', 'candidate-build']);
    expect(nativeE2e.if).toBeUndefined();
    expect(nativeE2e.run).toBe('scripts/docker-e2e-validate.sh');
    expect(nativeE2e.env.OCJS_DOCKER_PLATFORM).toBe("${{ matrix.arch == 'arm64' && 'linux/arm64' || 'linux/amd64' }}");
    const source = fs.readFileSync(path.join(ROOT, '.github/workflows/docker.yml'), 'utf8');
    expect(source).not.toContain('artifact-parity');
    expect(source).not.toContain('artifact-manifest-');
    expect(source).not.toContain('byte-identical amd64 and arm64');
  });

  it('should use trusted registry caches without exporting pull-request BuildKit state', () => {
    const ci = workflow('docker.yml');
    const validationSteps = ci.jobs['candidate-validation'].steps.filter(({ name }: { name?: string }) =>
      name?.includes('candidate for validation'),
    );
    const buildSteps = ci.jobs['candidate-build'].steps.filter(({ name }: { name?: string }) =>
      ['Build candidate for e2e', 'Push tested candidate by digest'].includes(name ?? ''),
    );
    for (const step of validationSteps) {
      expect(step.with['cache-from']).toBe(
        'type=registry,ref=${{ env.REGISTRY_IMAGE }}:buildcache-arm64-${{ matrix.stage }}',
      );
      expect(step.with['cache-to']).toBeUndefined();
    }
    expect(validationSteps).toHaveLength(1);
    expect(
      ci.jobs['candidate-validation'].steps.find(
        ({ name }: { name?: string }) => name === 'Build Python validation target',
      ).with['cache-from'],
    ).toBe('type=registry,ref=${{ env.REGISTRY_IMAGE }}:buildcache-arm64-final-single');
    expect(ci.jobs['candidate-validation'].permissions).toEqual({ contents: 'read' });
    for (const step of buildSteps) {
      expect(step.with['cache-from'].trim().split('\n')).toEqual([
        'type=registry,ref=${{ env.REGISTRY_IMAGE }}:buildcache-${{ matrix.arch }}-${{ matrix.stage }}',
      ]);
    }
    const initialBuild = buildSteps.find(({ name }: { name?: string }) => name === 'Build candidate for e2e');
    expect(initialBuild.with['cache-to']).toBe(
      'type=registry,ref=${{ env.REGISTRY_IMAGE }}:buildcache-${{ matrix.arch }}-${{ matrix.stage }},mode=max',
    );
  });

  it('should seed binding objects from release images only in candidate builds', () => {
    const ci = workflow('docker.yml');
    const seeds = [
      'binding-objects-seed-single-threaded=docker-image://${{ env.REGISTRY_IMAGE }}:single-threaded',
      'binding-objects-seed-multi-threaded=docker-image://${{ env.REGISTRY_IMAGE }}:multi-threaded',
    ];
    const candidateBuilds = ['candidate-validation', 'candidate-build'].flatMap((job) =>
      ci.jobs[job].steps.filter(({ uses }: { uses?: string }) => uses?.startsWith('docker/build-push-action@')),
    );
    expect(candidateBuilds).toHaveLength(5);
    for (const step of candidateBuilds) {
      expect(step.with['build-contexts'].trim().split('\n')).toEqual(seeds);
    }

    const reproducibility = workflow('reproducibility.yml');
    const coldBuilds = Object.values(reproducibility.jobs).flatMap((job: any) =>
      (job.steps ?? []).filter(({ uses }: { uses?: string }) => uses?.startsWith('docker/build-push-action@')),
    );
    expect(coldBuilds.length).toBeGreaterThan(0);
    for (const step of coldBuilds) {
      expect(step.with['build-contexts']).toBeUndefined();
      expect(step.with['no-cache']).toBe(true);
    }

    const source = fs.readFileSync(path.join(ROOT, 'Dockerfile'), 'utf8');
    expect(source).toContain('FROM scratch AS binding-objects-seed-single-threaded');
    expect(source).toContain('FROM scratch AS binding-objects-seed-multi-threaded');
  });

  it('should keep commit identity out of expensive Docker layers', () => {
    const ci = workflow('docker.yml');
    const source = fs.readFileSync(path.join(ROOT, 'Dockerfile'), 'utf8');
    const expensive = source.slice(
      source.indexOf('FROM deps-base AS bindgen-content'),
      source.indexOf('FROM bindgen-content AS bindgen-base'),
    );
    expect(expensive).not.toContain('ARG REVISION');
    expect(expensive).not.toContain('ARG SOURCE_DATE_EPOCH');
    expect(source).not.toContain('ARG SOURCE_DATE_EPOCH');
    expect(source.match(/ARG OCJS_SOURCE_DATE_EPOCH/g)).toHaveLength(3);
    // Every ARG carries a default epoch. Without one, a bare `docker build`
    // bakes `ENV SOURCE_DATE_EPOCH=""`, and clang hard-fails invocation
    // creation on a set-but-empty value — every consumer-side bind-symbols run
    // then dies with an opaque TranslationUnitLoadError. CI always passes a
    // real epoch (asserted below), so byte reproducibility is unaffected.
    expect(source.match(/ARG OCJS_SOURCE_DATE_EPOCH=0/g)).toHaveLength(3);
    expect(source.match(/ENV OCJS_SOURCE_COMMIT=/g)).toHaveLength(3);
    for (const step of [
      ci.jobs['candidate-validation'].steps.find(
        ({ name }: { name?: string }) => name === 'Build candidate for validation',
      ),
      ...ci.jobs['candidate-build'].steps.filter(({ name }: { name?: string }) =>
        ['Build candidate for e2e', 'Push tested candidate by digest'].includes(name ?? ''),
      ),
    ]) {
      const buildArgs = step.with['build-args'].trim().split('\n');
      expect(buildArgs).toContain('SOURCE_DATE_EPOCH=0');
      expect(buildArgs).toContain('OCJS_SOURCE_DATE_EPOCH=${{ needs.preflight.outputs.source_date_epoch }}');
      expect(buildArgs).not.toContain('SOURCE_DATE_EPOCH=${{ needs.preflight.outputs.source_date_epoch }}');
    }
    const e2e = fs.readFileSync(path.join(ROOT, 'scripts/docker-e2e-validate.sh'), 'utf8');
    expect(e2e).toContain('"--build-arg" "SOURCE_DATE_EPOCH=0"');
    expect(e2e).toContain('"--build-arg" "OCJS_SOURCE_DATE_EPOCH=$SOURCE_DATE_EPOCH"');
  });

  it('should keep same-run artifacts stable across retry attempts', () => {
    const ci = workflow('docker.yml');
    const source = fs.readFileSync(path.join(ROOT, '.github/workflows/docker.yml'), 'utf8');
    expect(source).not.toContain('GITHUB_RUN_ATTEMPT');
    for (const jobName of ['candidate-validation', 'candidate-build', 'package-assemble']) {
      const uploads = ci.jobs[jobName].steps.filter(({ uses }: { uses?: string }) =>
        uses?.startsWith('actions/upload-artifact@'),
      );
      for (const upload of uploads) {
        expect(upload.with.overwrite, jobName).toBe(true);
      }
    }
  });

  it('should run one final link and reuse the minimal bindgen fixture', () => {
    const source = fs.readFileSync(path.join(ROOT, 'scripts/docker-e2e-validate.sh'), 'utf8');
    const fixture = (name: string) => parse(fs.readFileSync(path.join(ROOT, 'tests/docker/fixtures', name), 'utf8'));
    expect(source).toContain('tests/docker/fixtures/simple.yml');
    expect(source).toContain('docker-js-smoke.mjs" "$OUTPUT_DIR/customBuild.simple.js" simple');
    for (const name of ['simple.yml', 'multi-threaded.yml', 'progress-indicator.yml']) {
      expect(fixture(name).mainBuild.emccFlags).toContain('--emit-symbol-map');
    }
    for (const obsolete of [
      'WARM_BUDGET_S',
      'SKIP_COLD_LINK',
      '--skip-cold-link',
      '--warm-budget',
      '_artifact_digest_manifest',
      'Warm-cache rerun',
    ]) {
      expect(source).not.toContain(obsolete);
    }
  });

  it('should test the exact npm candidate in the six-cell browser runtime matrix', () => {
    const ci = workflow('docker.yml');
    const browser = ci.jobs['package-browser'];
    expect(browser.needs).toEqual(['preflight', 'package-assemble']);
    expect(browser.strategy).toBeUndefined();
    expect(ci.jobs['package-templates'].strategy).toBeUndefined();
    expect(ci.jobs['package-gate'].needs).toEqual([
      'package-runtime',
      'package-browser',
      'package-templates',
      'package-docs',
    ]);

    const runner = fs.readFileSync(path.join(ROOT, 'scripts/browser-runtime-matrix.mjs'), 'utf8');
    const wrapper = fs.readFileSync(path.join(ROOT, 'scripts/test-candidate-browser.sh'), 'utf8');
    const workflowSource = fs.readFileSync(path.join(ROOT, '.github/workflows/docker.yml'), 'utf8');
    expect(runner).toContain('Object.entries({ chromium, firefox, webkit })');
    expect(runner).toContain("single: 'opencascade_single'");
    expect(runner).toContain("multi: 'opencascade_multi'");
    expect(runner).toContain("page.on('console'");
    expect(runner).toContain("page.on('pageerror'");
    expect(runner).toContain("page.on('worker'");
    expect(wrapper).toContain('playwright@1.60.0');
    expect(wrapper).toContain('playwright install --with-deps chromium firefox webkit');
    expect(workflowSource).not.toContain('Browser multi-threaded boot');
  });

  it('should explicitly export memory and exception helpers from every canonical full build', () => {
    const runtimeMethods =
      '-sEXPORTED_RUNTIME_METHODS=["FS","wasmMemory","getExceptionMessage","incrementExceptionRefcount","decrementExceptionRefcount"]';
    for (const relative of [
      'build-configs/full.yml',
      'build-configs/full_multi.yml',
      'build-configs/full_multi_browser.yml',
      'scripts/enumerate-symbols.py',
    ]) {
      const source = fs.readFileSync(path.join(ROOT, relative), 'utf8');
      expect(source, relative).toContain(runtimeMethods);
      expect(source, relative).not.toContain('-sEXPORT_EXCEPTION_HANDLING_HELPERS');
    }
  });

  it('should fail cheap quality checks before provisioning build dependencies', () => {
    const ci = workflow('docker.yml');
    const names = ci.jobs.quality.steps.map(({ name }: { name?: string }) => name ?? '');
    const cheap = ci.jobs.quality.steps.find(
      ({ name }: { name?: string }) => name === 'Cheap JavaScript and shell quality',
    );
    expect(cheap.run).toContain('npm run lint');
    expect(names.indexOf('Cheap JavaScript and shell quality')).toBeLessThan(names.indexOf('Install uv'));
    expect(names.indexOf('Workflow quality')).toBeLessThan(names.indexOf('Materialize pinned build dependencies'));
    expect(names.indexOf('Materialize pinned build dependencies')).toBeLessThan(
      names.indexOf('Python quality and unit tests'),
    );
  });

  it('should cache inputs but always revalidate frozen dependency state', () => {
    const ci = workflow('docker.yml');
    const quality = ci.jobs.quality;
    const restore = quality.steps.find(
      ({ name }: { name?: string }) => name === 'Restore verified quality dependencies',
    );
    const materialize = quality.steps.find(
      ({ name }: { name?: string }) => name === 'Materialize pinned build dependencies',
    );
    const save = quality.steps.find(({ name }: { name?: string }) => name === 'Save verified quality dependencies');
    expect(restore.with.key).toContain('${{ runner.os }}-${{ runner.arch }}');
    expect(restore.with.key).toContain("hashFiles('DEPS.json', 'pyproject.toml', 'uv.lock'");
    expect(quality.env.UV_PYTHON_INSTALL_DIR).toBe('${{ github.workspace }}/.uv-python');
    expect(restore.with.path).toContain('.uv-python');
    expect(materialize.env.OCJS_FORCE_PYTHON_SYNC).toBe(1);
    expect(materialize.env.OCJS_STRICT_DEPS).toBe(1);
    expect(materialize.run).toContain('scripts/clone-deps.sh --dest deps --python-profile development');
    expect(materialize.run).toContain('scripts/prune-llvm.sh deps/llvm-17');
    expect(save.if).toBe("steps.quality-cache.outputs.cache-hit != 'true'");
  });

  it('should keep CI-only Python distributions out of published images', () => {
    const ci = workflow('docker.yml');
    const dockerfile = fs.readFileSync(path.join(ROOT, 'Dockerfile'), 'utf8');
    const pyproject = fs.readFileSync(path.join(ROOT, 'pyproject.toml'), 'utf8');
    const cloneDeps = fs.readFileSync(path.join(ROOT, 'scripts/clone-deps.sh'), 'utf8');
    expect(pyproject).not.toContain('actionlint-py');
    expect(pyproject).toContain('test = [');
    expect(pyproject).toContain('quality = [');
    expect(dockerfile).toContain('ENV OCJS_PYTHON_PROFILE=runtime');
    expect(dockerfile).toMatch(/^FROM final-single AS validation-single$/m);
    expect(dockerfile).toContain('ENV OCJS_PYTHON_PROFILE=test');
    expect(cloneDeps).toContain('runtime|test|development');
    expect(cloneDeps).toContain('.deps-$PYTHON_PROFILE-$PROFILE_HASH.ready');
    expect(cloneDeps.match(/uv sync --project "\$REPO_ROOT"/g)).toHaveLength(3);
    for (const jobName of ['candidate-validation', 'candidate-build']) {
      const job = ci.jobs[jobName];
      expect(job.steps.some(({ name }: { name?: string }) => name === 'Build Python validation target')).toBe(true);
      expect(
        job.steps.some(({ name }: { name?: string }) => name === 'Published image excludes CI-only Python tools'),
      ).toBe(true);
    }
  });

  it('should bound only pinned acquisition and strictly verify cached git trees', () => {
    const deps = JSON.parse(fs.readFileSync(path.join(ROOT, 'DEPS.json'), 'utf8'));
    const installer = fs.readFileSync(path.join(ROOT, 'scripts/install-ci-tool.sh'), 'utf8');
    const cloneDeps = fs.readFileSync(path.join(ROOT, 'scripts/clone-deps.sh'), 'utf8');
    for (const tool of ['actionlint', 'vale']) {
      expect(deps.ci_tools[tool].version).toMatch(/^\d+\.\d+\.\d+$/);
      for (const platform of Object.values(deps.ci_tools[tool].platforms) as Array<Record<string, string>>) {
        expect(platform.sha256).toMatch(/^[a-f0-9]{64}$/);
        expect(platform.binary_sha256).toMatch(/^[a-f0-9]{64}$/);
      }
    }
    expect(installer).toContain('--retry-max-time 300');
    expect(installer).toContain('actual_archive_sha');
    expect(installer).toContain('actual_binary_sha');
    expect(cloneDeps).toContain('retry_clone "$repo" "$target"');
    expect(cloneDeps).toContain("['git', '-C', path, 'status', '--porcelain']");
  });

  it('should delete only closed pull-request caches with the narrow permission', () => {
    const cleanup = workflow('cache-cleanup.yml');
    expect(cleanup.permissions).toEqual({ contents: 'read', actions: 'write' });
    expect(cleanup.on.pull_request.types).toEqual(['closed']);
    expect(Object.keys(cleanup.jobs)).toEqual(['cleanup']);
    expect(cleanup.jobs.cleanup.steps).toHaveLength(1);
    expect(cleanup.jobs.cleanup.steps[0].run).toContain('actions/caches?ref=$MERGE_REF&per_page=100');
    expect(cleanup.jobs.cleanup.steps[0].run).toContain('actions/caches/$cache_id');
    expect(cleanup.jobs.cleanup.steps[0].run).toContain("grep -q '(HTTP 404)'");
    expect(cleanup.jobs.cleanup.steps[0].run).toContain('> "$cache_ids_file"');
    expect(cleanup.jobs.cleanup.steps[0].run).toContain('done < "$cache_ids_file"');
    expect(cleanup.jobs.cleanup.steps[0].env.GH_REPO).toBe('${{ github.repository }}');
    expect(cleanup.jobs.cleanup.steps[0].env.MERGE_REF).toBe('refs/pull/${{ github.event.pull_request.number }}/merge');
  });

  it('should materialize more than 100 cache IDs before deleting any', () => {
    const cleanup = workflow('cache-cleanup.yml');
    const scratch = fs.mkdtempSync(path.join(process.env.TMPDIR ?? '/tmp', 'ocjs-cache-cleanup-'));
    const gh = path.join(scratch, 'gh');
    const deleted = path.join(scratch, 'deleted');
    fs.writeFileSync(
      gh,
      `#!/usr/bin/env bash
set -euo pipefail
if [[ " $* " == *" --method DELETE "* ]]; then
  printf '%s\\n' "\${!#}" >> "$DELETED"
  exit 0
fi
seq 1 100
sleep 1
[[ ! -s "$DELETED" ]] && printf '%s\\n' 101
`,
      { mode: 0o755 },
    );
    fs.writeFileSync(deleted, '');

    try {
      const result = spawnSync('bash', ['-euo', 'pipefail', '-c', cleanup.jobs.cleanup.steps[0].run], {
        cwd: scratch,
        env: {
          ...process.env,
          DELETED: deleted,
          GH_REPO: 'taucad/opencascade.js',
          GH_TOKEN: 'test',
          MERGE_REF: 'refs/pull/27/merge',
          PATH: `${scratch}:${process.env.PATH}`,
        },
        encoding: 'utf8',
      });
      expect(result.stderr).toBe('');
      expect(result.status).toBe(0);
      expect(fs.readFileSync(deleted, 'utf8').trim().split('\n')).toHaveLength(101);
    } finally {
      fs.rmSync(scratch, { recursive: true, force: true });
    }
  });

  it('should lint the complete docs corpus without relying on the PR diff API', () => {
    const ci = workflow('docker.yml');
    const vale = ci.jobs['docs-prose'].steps.find(({ name }: { name?: string }) => name === 'Vale');
    expect(vale.run).toBe(
      '.ci-tools/bin/vale --config=docs-site/.vale.ini docs-site/content/docs README.md',
    );
    expect(
      ci.jobs['docs-prose'].steps.find(({ name }: { name?: string }) => name === 'Install pinned Vale').run,
    ).toContain('scripts/install-ci-tool.sh --tool vale');
  });

  it('should keep Nx and build state readable and writable for non-root consumers', () => {
    const source = fs.readFileSync(path.join(ROOT, 'Dockerfile'), 'utf8');
    const permissionCommand = 'chmod -R go+rwX /opencascade.js/.nx /opencascade.js/build';
    expect(source.split(permissionCommand)).toHaveLength(4);
    expect(source).not.toContain('chmod -R go+w /opencascade.js/.nx /opencascade.js/build');
  });

  it('should keep the final aggregate free of custom timing API code', () => {
    const ci = workflow('docker.yml');
    expect(ci.jobs['ci-gate'].permissions).toEqual({ contents: 'read' });
    expect(ci.jobs['ci-gate'].steps).toHaveLength(1);
    const source = fs.readFileSync(path.join(ROOT, '.github/workflows/docker.yml'), 'utf8');
    expect(source).not.toContain('Summarize workflow timing');
    expect(source).not.toContain('/actions/runs/${process.env.GITHUB_RUN_ID}/jobs');
    expect(source).not.toContain('historical baseline:');
  });

  it('should keep mutation behind the package gate and npm OIDC away from checkout', () => {
    const ci = workflow('docker.yml');
    expect(ci.jobs.quality.needs).toBe('preflight');
    expect(ci.jobs['candidate-build'].needs).toBe('preflight');
    expect(ci.jobs['candidate-validation'].needs).toBe('preflight');
    expect(ci.jobs['release-reproducibility'].needs).toEqual(['preflight', 'quality', 'docs-prose']);
    expect(ci.jobs['package-assemble'].needs).toEqual(['preflight', 'quality', 'candidate-gate']);
    expect(ci.jobs['ghcr-promote'].needs).toContain('package-gate');
    expect(ci.jobs['ghcr-promote'].needs).toContain('release-reproducibility');
    expect(ci.jobs['ghcr-promote'].needs).toContain('npm-publish');
    expect(ci.jobs['ghcr-promote'].if).toContain(
      "needs.preflight.outputs.reproducibility_required != 'true' || needs.release-reproducibility.result == 'success'",
    );
    expect(ci.jobs['ghcr-promote'].if).toContain(
      "needs.preflight.outputs.kind == 'main' || needs.npm-publish.result == 'success'",
    );
    expect(ci.jobs['npm-publish'].needs).toContain('package-gate');
    expect(ci.jobs['npm-publish'].if).toContain(
      "needs.preflight.outputs.reproducibility_required != 'true' || needs.release-reproducibility.result == 'success'",
    );
    expect(ci.jobs['npm-publish'].permissions).toEqual({ contents: 'read', 'id-token': 'write' });
    expect(
      ci.jobs['npm-publish'].steps.some(({ uses }: { uses?: string }) => uses?.startsWith('actions/checkout@')),
    ).toBe(false);
    const source = fs.readFileSync(path.join(ROOT, '.github/workflows/docker.yml'), 'utf8');
    expect(source).not.toContain('NPM_TOKEN');
    expect(source).not.toContain('NODE_AUTH_TOKEN');
    expect(source).not.toContain('OCJS_CONFIG=debug');
  });

  it('should publish libcascade while retaining the ocjs build and release namespace', () => {
    const source = fs.readFileSync(path.join(ROOT, '.github/workflows/docker.yml'), 'utf8');
    expect(source).toContain('npm view "libcascade@$VERSION"');
    expect(source).toContain('npm install --ignore-scripts --no-audit --no-fund "libcascade@$VERSION"');
    // The publish smoke exercises the shared lazy surface, not the root:
    // since `libcascade assemble`, the root entry is eager (it top-level-awaits
    // its own instance), so `./init`'s `createInstance({ variant })` is the only
    // way the smoke can drive both variants from one import.
    expect(source).toContain("import { createInstance } from 'libcascade/init'");
    expect(source).toContain("for (const variant of ['single', 'multi'])");
    expect(source).not.toContain('opencascade_full');
    expect(source).toContain('REGISTRY_IMAGE: ghcr.io/taucad/opencascade.js');
    expect(source).toContain('OCJS_PACKAGE_TARBALL');
    expect(source).toContain('npx nx run ocjs:api-reference');
    expect(source).not.toContain('cascadic');
    expect(source).not.toContain('npm view "ocjs@$VERSION"');
    expect(source).not.toContain('manifest.dependencies.ocjs');
  });

  it('should reserve moving GHCR aliases for stable releases', () => {
    const ci = workflow('docker.yml');
    const promote = ci.jobs['ghcr-promote'].steps.find(
      ({ name }: { name?: string }) => name === 'Attach consumer-facing tags',
    );
    expect(promote.run).toContain('scripts/ghcr-promotion.mjs tags');
    expect(promote.run).not.toContain('stable-release) tags=("$prefix"');
    const verify = ci.jobs['registry-verify'].steps.find(
      ({ name }: { name?: string }) => name === 'Verify exact registry bytes, provenance, signatures, and runtime',
    );
    expect(ci.jobs['registry-verify'].permissions).toEqual({
      contents: 'read',
      'id-token': 'write',
      packages: 'write',
    });
    expect(verify.run).toContain('scripts/ghcr-promotion.mjs');
    expect(verify.run).toContain('tags "$KIND" "$stage" "$VERSION" "$FULL_SHA"');
    expect(verify.run).toContain('mutable');
  });

  it('should build every dispatched release resume from the validated source SHA', () => {
    const ci = workflow('docker.yml');
    const preservePolicy = ci.jobs.preflight.steps.find(
      ({ name }: { name?: string }) => name === 'Preserve protected release policy',
    );
    expect(preservePolicy.run).toContain('scripts/ci-release.mjs "$RUNNER_TEMP/ci-release.mjs"');
    const selectSource = ci.jobs.preflight.steps.find(({ name }: { name?: string }) => name === 'Select exact source');
    expect(selectSource.run).toContain('[[ "$RELEASE_SHA" =~ ^[0-9a-f]{40}$ ]]');
    expect(selectSource.run).toContain('test "$RELEASE_SHA" = "$GITHUB_SHA"');
    expect(selectSource.run).toContain('git merge-base --is-ancestor "$RELEASE_SHA" origin/main');
    expect(selectSource.run).toContain('git checkout --detach "$selected_sha"');
    const release = ci.jobs.preflight.steps.find(
      ({ name }: { name?: string }) => name === 'Validate event and derive immutable release metadata',
    );
    expect(release.run).toContain('node "$RUNNER_TEMP/ci-release.mjs"');
    const jobs = ci.jobs as Record<
      string,
      {
        steps?: Array<{ uses?: string; with?: { ref?: string } }>;
      }
    >;
    const checkoutJobs = Object.entries(jobs).filter(([, job]) =>
      job.steps?.some(({ uses }) => uses?.startsWith('actions/checkout@')),
    );
    for (const [jobName, job] of checkoutJobs) {
      if (jobName === 'preflight') continue;
      const checkout = job.steps!.find(({ uses }: { uses?: string }) => uses?.startsWith('actions/checkout@'));
      expect(checkout!.with?.ref, jobName).toBe('${{ needs.preflight.outputs.full_sha }}');
    }
  });

  it('should finalize releases and deploy Vercel only from the verified candidate', () => {
    const ci = workflow('docker.yml');
    const source = fs.readFileSync(path.join(ROOT, '.github/workflows/docker.yml'), 'utf8');
    expect(ci.jobs['release-finalize'].needs).toEqual([
      'preflight',
      'registry-verify',
      'toolchain-registry-verify',
    ]);
    expect(ci.jobs['release-finalize'].permissions).toEqual({ contents: 'write' });
    expect(ci.jobs['release-finalize'].if).toContain("needs.registry-verify.result == 'success'");
    expect(ci.jobs['release-finalize'].if).toContain("needs.toolchain-registry-verify.result == 'success'");
    expect(ci.jobs['vercel-preview'].needs).toEqual(['preflight', 'package-assemble', 'ci-gate']);
    expect(ci.jobs['vercel-preview'].if).toContain(
      'github.event.pull_request.head.repo.full_name == github.repository',
    );
    expect(ci.jobs['vercel-production'].needs).toEqual(['preflight', 'package-assemble', 'ci-gate']);
    expect(ci.jobs['vercel-production'].concurrency).toEqual({
      group: 'vercel-production',
      'cancel-in-progress': false,
    });
    expect(source).toContain('vercel@56.5.0 deploy --prebuilt --archive=tgz --token=');
    expect(source).toContain('vercel@56.5.0 deploy --prebuilt --archive=tgz --prod --token=');
    expect(source).toContain('git/ref/heads/main');
    expect(source).toContain('export OCJS_API_REFERENCE_SOURCE="$TARBALL"');
  });

  it('should launch the registry runtime check without worker-unsafe Node flags', () => {
    const source = fs.readFileSync(path.join(ROOT, '.github/workflows/docker.yml'), 'utf8');
    expect(source).toContain("cat > verify-runtime.mjs <<'NODE'");
    expect(source).toContain('node verify-runtime.mjs');
    expect(source).not.toContain('node --input-type=module -e');
  });

  it('should run generated-source checks before the dist-only package gate', () => {
    const ci = workflow('docker.yml');
    const packageGate = ci.jobs['package-assemble'].steps.find(
      ({ name }: { name?: string }) => name === 'Full runtime, regression, and declaration gates',
    );
    expect(packageGate.run).toContain('npm test -- --exclude tests/no-clobber-validation.test.ts');
  });

  it('should assemble the package surface before validating same-run dist', () => {
    const ci = workflow('docker.yml');
    const steps = ci.jobs['package-assemble'].steps;
    const installIndex = steps.findIndex(({ name }: { name?: string }) => name === 'Install locked test tools');
    const assembleIndex = steps.findIndex(({ name }: { name?: string }) => name === 'Assemble exact same-run dist');
    const assemble = steps[assembleIndex];
    expect(installIndex).toBeGreaterThan(-1);
    expect(assembleIndex).toBeGreaterThan(installIndex);
    expect(assemble.run).toContain('npm run build:toolchain');
    expect(assemble.run).toContain('node packages/toolchain/bin/libcascade.mjs assemble --write-exports');
    expect(assemble.run.indexOf('assemble --write-exports')).toBeLessThan(
      assemble.run.indexOf('node scripts/package-candidate.mjs dist'),
    );
  });

  it('should bridge the mutually exclusive candidate matrices explicitly', () => {
    const ci = workflow('docker.yml');
    const downstream = [
      'package-assemble',
      'package-runtime',
      'package-browser',
      'package-templates',
      'package-docs',
      'package-gate',
      'ghcr-promote',
      'npm-publish',
      'registry-verify',
      'toolchain-metadata',
      'toolchain-package',
      'toolchain-publish',
      'toolchain-registry-verify',
    ];
    for (const jobName of downstream) {
      const job = ci.jobs[jobName];
      const needs = Array.isArray(job.needs) ? job.needs : [job.needs];
      expect(job.if, jobName).toContain('always()');
      for (const dependency of needs) {
        expect(job.if, `${jobName} must require ${dependency}`).toContain(`needs.${dependency}.result == 'success'`);
      }
    }
    expect(ci.jobs['ghcr-promote'].if).toContain("needs.preflight.outputs.ghcr_promote == 'true'");
    expect(ci.jobs['npm-publish'].if).toContain("needs.preflight.outputs.npm_publish == 'true'");
    expect(ci.jobs['registry-verify'].if).toContain("needs.preflight.outputs.npm_publish == 'true'");
  });

  it('should keep npm trusted publication artifact-only', () => {
    const ci = workflow('docker.yml');
    const nodeVersion = fs.readFileSync(path.join(ROOT, '.nvmrc'), 'utf8').trim();
    for (const jobName of ['npm-publish', 'toolchain-publish']) {
      const publish = ci.jobs[jobName];
      const setupNode = publish.steps.find(({ uses }: { uses?: string }) => uses?.startsWith('actions/setup-node@'));
      expect(setupNode.with).toMatchObject({ 'node-version': nodeVersion });
      expect(setupNode.with).not.toHaveProperty('node-version-file');
      expect(publish.steps.some(({ uses }: { uses?: string }) => uses?.startsWith('actions/checkout@'))).toBe(false);
    }
  });

  it('should pin every workflow action to a full commit', () => {
    for (const name of fs.readdirSync(path.join(ROOT, '.github/workflows'))) {
      if (!name.endsWith('.yml')) continue;
      const jobs = Object.values(workflow(name).jobs ?? {}) as Array<{ steps?: Array<{ uses?: string }> }>;
      for (const { steps = [] } of jobs) {
        for (const { uses } of steps) {
          if (!uses) continue;
          const revision = uses.split('@').at(-1) ?? '';
          expect(revision, `${name}: ${uses}`).toHaveLength(40);
          expect([...revision].every((character) => '0123456789abcdef'.includes(character))).toBe(true);
        }
      }
    }
  });

  it('should keep obsolete automation and compatibility fixtures deleted', () => {
    for (const relative of [
      '.github/workflows/buildFull.yml',
      '.github/workflows/firebase-hosting-pull-request.yml',
      '.github/workflows/general.yml',
      '.github/workflows/startGcpInstance.yml',
      '.github/workflows/tests.yml',
      '.github/workflows/updateReferenceDocs.yml',
      '.github/workflows/updateStarterTemplates.yml',
      'builds/opencascade.full.yml',
      'docs-site/scripts/browser-multi-smoke.mjs',
      'runAction.sh',
      'scripts/docker-ci-preflight.sh',
      'test',
      'typedoc-reference-docs',
    ]) {
      expect(fs.existsSync(path.join(ROOT, relative)), relative).toBe(false);
    }
    const project = JSON.parse(fs.readFileSync(path.join(ROOT, 'project.json'), 'utf8'));
    expect(project.targets).not.toHaveProperty('docker-ci-preflight');
    expect(fs.existsSync(path.join(ROOT, 'starter-templates/legacy'))).toBe(false);
  });
});
