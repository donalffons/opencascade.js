import { mkdtempSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import { describe, expect, it } from 'vitest';

import { generateImages } from '../../packages/toolchain/scripts/generate-images.mjs';
import {
  validateReleaseEnvironment,
  validateReleaseMetadata,
} from '../../packages/toolchain/scripts/validate-release.mjs';

const VERSION = '3.0.0-canary.d5736f09';
const SHA = 'd5736f09aabbccddeeff00112233445566778899';
const DIGEST = `sha256:${'a'.repeat(64)}`;

const validMetadata = () => ({
  apiReference: { source: { commit: SHA } },
  fullSha: SHA,
  imageEmsdkVersion: '6.0.5',
  images: {
    repository: 'ghcr.io/taucad/opencascade.js',
    singleThreaded: { tag: `${VERSION}-single-threaded`, digest: DIGEST },
    multiThreaded: { tag: `${VERSION}-multi-threaded`, digest: DIGEST },
  },
  provenances: [
    { buildId: '20260807T010203-O3-noLTO-single', source: { opencascadejsCommit: SHA } },
    { buildId: '20260807T010203-O3-noLTO-multi', source: { opencascadejsCommit: SHA } },
  ],
  settingsMeta: { emsdkVersion: '6.0.5' },
  toolchainVersion: VERSION,
  version: VERSION,
});

describe('release image generation', () => {
  it('derives both tags from the authoritative version before resolving them', async () => {
    const directory = mkdtempSync(join(tmpdir(), 'libcascade-images-'));
    const imagesPath = join(directory, 'images.json');
    const requested: string[] = [];
    await generateImages({
      version: VERSION,
      imagesPath,
      resolve: async (_repository, tag) => {
        requested.push(tag);
        return DIGEST;
      },
    });
    expect(requested).toStrictEqual([`${VERSION}-single-threaded`, `${VERSION}-multi-threaded`]);
    expect(JSON.parse(readFileSync(imagesPath, 'utf8'))).toMatchObject({
      singleThreaded: { tag: `${VERSION}-single-threaded`, digest: DIGEST },
      multiThreaded: { tag: `${VERSION}-multi-threaded`, digest: DIGEST },
    });
  });

  it('rejects a missing or inexact release version', async () => {
    await expect(generateImages({ version: undefined as unknown as string })).rejects.toThrow(
      'expected an exact SemVer',
    );
    await expect(generateImages({ version: 'v3.0.0' })).rejects.toThrow('expected an exact SemVer');
    await expect(generateImages({ version: '3.0.0+local' })).rejects.toThrow('expected an exact SemVer');
  });
});

describe('release metadata gates', () => {
  it('accepts one internally consistent release', () => {
    expect(() => validateReleaseMetadata(validMetadata())).not.toThrow();
  });

  it.each([
    [
      'G1',
      (value: ReturnType<typeof validMetadata>) => {
        value.images.singleThreaded.tag = '3.0.0-canary.stale-single-threaded';
      },
      'tag must equal',
    ],
    [
      'G2',
      (value: ReturnType<typeof validMetadata>) => {
        value.settingsMeta.emsdkVersion = '5.0.1';
      },
      'generated settings use emsdk',
    ],
    [
      'G3 source',
      (value: ReturnType<typeof validMetadata>) => {
        value.provenances[0]!.source.opencascadejsCommit = '0'.repeat(40);
      },
      'provenance source commit',
    ],
    [
      'G3 epoch',
      (value: ReturnType<typeof validMetadata>) => {
        value.provenances[0]!.buildId = '19700101T000000-O3-noLTO-single';
      },
      'epoch-0 buildId',
    ],
    [
      'G4',
      (value: ReturnType<typeof validMetadata>) => {
        value.apiReference.source.commit = '0'.repeat(40);
      },
      'api-reference source commit',
    ],
    [
      'G7',
      (value: ReturnType<typeof validMetadata>) => {
        value.toolchainVersion = '4.0.0';
      },
      'must share major.minor',
    ],
  ])('rejects a deliberate %s mismatch', (_gate, mutate, message) => {
    const value = validMetadata();
    mutate(value);
    expect(() => validateReleaseMetadata(value)).toThrow(message);
  });

  it('G5 rejects both release escape hatches, even when exported empty', () => {
    expect(() => validateReleaseEnvironment({})).not.toThrow();
    expect(() => validateReleaseEnvironment({ LIBCASCADE_IMAGE: '' })).toThrow('LIBCASCADE_IMAGE must be unset');
    expect(() => validateReleaseEnvironment({ LIBCASCADE_CONTAINER_CMD: 'podman' })).toThrow(
      'LIBCASCADE_CONTAINER_CMD must be unset',
    );
  });
});
