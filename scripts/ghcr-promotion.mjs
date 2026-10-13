#!/usr/bin/env node

import semver from 'semver';

const STAGES = {
  'bindgen-base': {
    prefix: 'bindgen-base',
    main: 'bindgen-base-branch-main',
  },
  'final-multi': {
    prefix: 'multi-threaded',
    main: 'multi-threaded-branch-main',
  },
  'final-single': {
    prefix: 'single-threaded',
    main: 'branch-main',
  },
};

const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

/**
 * @param {{ fullSha: string, kind: string, stage: string, version: string }} input
 */
export const deriveGhcrTags = ({ fullSha, kind, stage, version }) => {
  const names = STAGES[stage];
  assert(names, `unsupported GHCR stage: ${stage}`);
  assert(/^[0-9a-f]{40}$/.test(fullSha), 'fullSha must be a lowercase 40-character commit');
  assert(
    semver.valid(version) === version && semver.parse(version).build.length === 0,
    'version must be exact SemVer without build metadata',
  );
  const shaTag = `sha-${fullSha.slice(0, 8)}-${names.prefix}`;
  switch (kind) {
    case 'beta-release':
      return { immutable: [`${version}-${names.prefix}`, shaTag], mutable: [] };
    case 'main':
      return {
        immutable: [`${names.main}-${fullSha}`],
        mutable: [names.main],
      };
    case 'manual-canary':
      return {
        immutable: [`${version}-${names.prefix}`],
        mutable: [],
      };
    case 'stable-release':
      return {
        immutable: [`${version}-${names.prefix}`, shaTag],
        mutable: [names.prefix],
      };
    default:
      throw new Error(`unsupported GHCR promotion kind: ${kind}`);
  }
};

/**
 * @param {{ exists: boolean, mutable: boolean, exact?: boolean, signatureValid?: boolean }} state
 */
export const decideGhcrPromotion = ({ exists, mutable, exact = false, signatureValid = false }) => {
  if (!exists) return 'create';
  if (!exact) return mutable ? 'replace' : 'conflict';
  return signatureValid ? 'reuse' : 'sign';
};

if (process.argv[1] === new URL(import.meta.url).pathname) {
  try {
    const [command, ...args] = process.argv.slice(2);
    if (command === 'tags') {
      const [kind, stage, version, fullSha] = args;
      process.stdout.write(`${JSON.stringify(deriveGhcrTags({ fullSha, kind, stage, version }))}\n`);
    } else if (command === 'decide') {
      const [exists, mutable, exact, signatureValid] = args;
      process.stdout.write(
        `${decideGhcrPromotion({
          exists: exists === 'true',
          mutable: mutable === 'true',
          exact: exact === 'true',
          signatureValid: signatureValid === 'true',
        })}\n`,
      );
    } else {
      throw new Error(`unsupported command: ${command || '(missing)'}`);
    }
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}
