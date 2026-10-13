#!/usr/bin/env node

import * as fs from 'node:fs';
import * as path from 'node:path';
import semver from 'semver';

import { readImageFacts } from './lib/image.mjs';

const ESCAPE_HATCHES = ['LIBCASCADE_CONTAINER_CMD', 'LIBCASCADE_IMAGE'];
const STAGES = ['single-threaded', 'multi-threaded'];

const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

const readJson = (filePath) => JSON.parse(fs.readFileSync(filePath, 'utf8'));

const majorMinor = (version) => {
  const parsed = semver.parse(version);
  assert(parsed, `invalid SemVer: ${version}`);
  return `${parsed.major}.${parsed.minor}`;
};

export const validateReleaseEnvironment = (env) => {
  for (const name of ESCAPE_HATCHES) {
    assert(!Object.hasOwn(env, name), `${name} must be unset during release generation`);
  }
};

/**
 * Validate the generated package layer against the exact release inputs.
 *
 * @param {{
 *   apiReference: object,
 *   fullSha: string,
 *   imageEmsdkVersion: string,
 *   images: object,
 *   provenances: object[],
 *   settingsMeta: object,
 *   toolchainVersion: string,
 *   version: string,
 * }} input
 */
export const validateReleaseMetadata = ({
  apiReference,
  fullSha,
  imageEmsdkVersion,
  images,
  provenances,
  settingsMeta,
  toolchainVersion,
  version,
}) => {
  assert(
    semver.valid(version) === version && semver.parse(version).build.length === 0,
    `release version is not exact SemVer: ${version}`,
  );
  assert(/^[0-9a-f]{40}$/.test(fullSha), 'release sha must be a lowercase 40-character commit');
  assert(images.repository === 'ghcr.io/taucad/opencascade.js', 'unexpected image repository');
  for (const [key, stage] of [
    ['singleThreaded', STAGES[0]],
    ['multiThreaded', STAGES[1]],
  ]) {
    const image = images[key];
    assert(image?.tag === `${version}-${stage}`, `${key} tag must equal ${version}-${stage}`);
    assert(/^sha256:[0-9a-f]{64}$/.test(image.digest), `${key} must pin a sha256 digest`);
    const imageVersion = image.tag.slice(0, -`-${stage}`.length);
    assert(
      majorMinor(toolchainVersion) === majorMinor(imageVersion),
      `toolchain ${toolchainVersion} and image ${image.tag} must share major.minor`,
    );
  }
  assert(
    settingsMeta.emsdkVersion === imageEmsdkVersion,
    `generated settings use emsdk ${settingsMeta.emsdkVersion}, image uses ${imageEmsdkVersion}`,
  );
  assert(apiReference.source?.commit === fullSha, 'api-reference source commit does not match release');
  if (semver.prerelease(version)) {
    assert(toolchainVersion === version, `prerelease toolchain must equal release version ${version}`);
  }
  assert(provenances.length > 0, 'release package contains no provenance records');
  for (const provenance of provenances) {
    assert(
      provenance.source?.opencascadejsCommit === fullSha,
      'artifact provenance source commit does not match release',
    );
    assert(
      !String(provenance.buildId).startsWith('19700101T000000-'),
      `artifact provenance carries epoch-0 buildId: ${provenance.buildId}`,
    );
  }
};

const parseArgs = (args) =>
  Object.fromEntries(
    args.map((argument) => {
      const separator = argument.indexOf('=');
      if (!argument.startsWith('--') || separator === -1) {
        throw new Error(`expected --name=value, received ${argument}`);
      }
      return [argument.slice(2, separator), argument.slice(separator + 1)];
    }),
  );

const run = () => {
  const [command, ...rawArgs] = process.argv.slice(2);
  if (command === 'environment') {
    validateReleaseEnvironment(process.env);
    return;
  }
  assert(command === 'metadata', `unsupported command: ${command ?? '(missing)'}`);
  const args = parseArgs(rawArgs);
  for (const name of ['dist', 'full-sha', 'version']) assert(args[name], `--${name} is required`);
  const root = path.resolve(import.meta.dirname, '..');
  const provenancePaths = fs
    .readdirSync(args.dist)
    .filter((name) => name.endsWith('.provenance.json'))
    .sort()
    .map((name) => path.join(args.dist, name));
  validateReleaseMetadata({
    apiReference: readJson(path.join(args.dist, 'api-reference.json')),
    fullSha: args['full-sha'],
    imageEmsdkVersion: readImageFacts().emscriptenVersion,
    images: readJson(path.join(root, 'generated/images.json')),
    provenances: provenancePaths.map(readJson),
    settingsMeta: readJson(path.join(root, 'generated/emcc-settings.meta.json')),
    toolchainVersion: readJson(path.join(root, 'package.json')).version,
    version: args.version,
  });
};

if (process.argv[1] === new URL(import.meta.url).pathname) {
  try {
    run();
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}
