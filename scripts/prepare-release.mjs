#!/usr/bin/env node

import fs from 'node:fs';
import { execFileSync } from 'node:child_process';
import { releaseChangelog, releaseVersion } from 'nx/release/index.js';
import semver from 'semver';

const PACKAGE_PATH = new URL('../package.json', import.meta.url);
const GIT_OPTIONS = {
  gitCommit: false,
  gitPush: false,
  gitTag: false,
  stageChanges: false,
};

const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

const packageVersion = () => JSON.parse(fs.readFileSync(PACKAGE_PATH, 'utf8')).version;

const assertClean = () => {
  const status = execFileSync('git', ['status', '--porcelain'], { encoding: 'utf8' });
  assert(status.length === 0, 'release preparation requires a clean worktree');
};

export const validateRequestedVersion = ({
  currentVersion,
  plannedStableVersion,
  requestedVersion,
}) => {
  assert(semver.valid(currentVersion), `invalid current package version: ${currentVersion}`);
  assert(semver.valid(plannedStableVersion), `invalid planned stable version: ${plannedStableVersion}`);
  assert(semver.valid(requestedVersion), `invalid requested release version: ${requestedVersion}`);
  assert(
    semver.prerelease(plannedStableVersion) === null,
    `Version Plans resolve to prerelease ${plannedStableVersion}; use stable semver bumps in plans`,
  );

  const requestedPrerelease = semver.prerelease(requestedVersion);
  if (requestedPrerelease === null) {
    assert(
      requestedVersion === plannedStableVersion,
      `requested stable ${requestedVersion} does not match Version Plans (${plannedStableVersion})`,
    );
    return { channel: 'stable', deleteVersionPlans: true, version: requestedVersion };
  }

  assert(
    requestedPrerelease.length === 2 &&
      requestedPrerelease[0] === 'beta' &&
      Number.isSafeInteger(requestedPrerelease[1]) &&
      Number(requestedPrerelease[1]) > 0,
    `reviewed prereleases must use X.Y.Z-beta.<positive integer>, found ${requestedVersion}`,
  );
  const requestedCore =
    `${semver.major(requestedVersion)}.${semver.minor(requestedVersion)}.${semver.patch(requestedVersion)}`;
  assert(
    requestedCore === plannedStableVersion,
    `requested beta targets ${requestedCore}, but Version Plans resolve to ${plannedStableVersion}`,
  );
  assert(
    semver.gt(requestedVersion, currentVersion),
    `requested beta ${requestedVersion} must be newer than ${currentVersion}`,
  );
  const currentPrerelease = semver.prerelease(currentVersion);
  if (currentPrerelease?.[0] === 'beta' && requestedCore === semver.coerce(currentVersion).version) {
    assert(
      Number(requestedPrerelease[1]) === Number(currentPrerelease[1]) + 1,
      `next beta after ${currentVersion} must be ${requestedCore}-beta.${Number(currentPrerelease[1]) + 1}`,
    );
  }
  return { channel: 'beta', deleteVersionPlans: false, version: requestedVersion };
};

const previewVersionPlans = () =>
  releaseVersion({
    ...GIT_OPTIONS,
    deleteVersionPlans: false,
    dryRun: true,
  });

const prepare = async ({ dryRun, requestedVersion }) => {
  const currentVersion = packageVersion();
  const preview = await previewVersionPlans();
  const plannedStableVersion = preview.projectsVersionData.ocjs?.newVersion;
  assert(plannedStableVersion, 'no pending Version Plans affect ocjs');
  const releaseRequest = validateRequestedVersion({
    currentVersion,
    plannedStableVersion,
    requestedVersion,
  });

  await releaseChangelog({
    ...GIT_OPTIONS,
    createRelease: false,
    deleteVersionPlans: releaseRequest.deleteVersionPlans,
    dryRun: true,
    releaseGraph: preview.releaseGraph,
    version: releaseRequest.version,
  });
  if (dryRun) return releaseRequest;

  assertClean();
  execFileSync(
    'npm',
    ['version', releaseRequest.version, '--no-git-tag-version', '--ignore-scripts'],
    { stdio: 'inherit' },
  );
  await releaseChangelog({
    ...GIT_OPTIONS,
    createRelease: false,
    deleteVersionPlans: releaseRequest.deleteVersionPlans,
    releaseGraph: preview.releaseGraph,
    version: releaseRequest.version,
  });
  assert(
    packageVersion() === releaseRequest.version,
    `prepared package version ${packageVersion()} does not match ${releaseRequest.version}`,
  );
  return releaseRequest;
};

const parseArgs = (argv) => ({
  requestedVersion: argv.find((value) => !value.startsWith('-')),
  dryRun: argv.includes('--dry-run'),
});

if (process.argv[1] === new URL(import.meta.url).pathname) {
  const { requestedVersion, dryRun } = parseArgs(process.argv.slice(2));
  try {
    assert(requestedVersion, 'usage: npm run release:prepare -- <version> [--dry-run]');
    const result = await prepare({ dryRun, requestedVersion });
    console.log(
      `${dryRun ? 'Would prepare' : 'Prepared'} ${result.channel} release v${result.version}`,
    );
    if (!dryRun) {
      console.log(
        `Commit only the generated release files as: chore(release): ocjs v${result.version}`,
      );
    }
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}
