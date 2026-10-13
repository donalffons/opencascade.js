#!/usr/bin/env node
/**
 * Resolve the pinned ghcr tags to immutable digests and rewrite
 * `generated/images.json`.
 *
 * Uses the registry HTTP API (anonymous pull token) rather than
 * `docker manifest inspect` so digest resolution needs no container engine and
 * no local pull of a 12 GB image — the digest is the registry's own
 * `Docker-Content-Digest` for the multi-arch index.
 */
import * as fs from 'node:fs';
import * as path from 'node:path';
import semver from 'semver';

const IMAGES_PATH = path.resolve(import.meta.dirname, '../generated/images.json');

const MANIFEST_ACCEPT = [
  'application/vnd.oci.image.index.v1+json',
  'application/vnd.docker.distribution.manifest.list.v2+json',
  'application/vnd.oci.image.manifest.v1+json',
  'application/vnd.docker.distribution.manifest.v2+json',
].join(', ');

/**
 * Resolve one tag to its registry digest.
 *
 * @param repository - e.g. `ghcr.io/taucad/opencascade.js`.
 * @param tag - Mutable tag to resolve.
 * @returns The `sha256:…` digest of the tag's manifest.
 * @throws Error when the registry rejects the request or omits the digest header.
 */
export const resolveDigest = async (repository, tag) => {
  const [registry, ...pathParts] = repository.split('/');
  const name = pathParts.join('/');
  const tokenResponse = await fetch(`https://${registry}/token?service=${registry}&scope=repository:${name}:pull`);
  if (!tokenResponse.ok) {
    throw new Error(`${registry}: pull token request failed with ${tokenResponse.status}.`);
  }
  const { token } = await tokenResponse.json();

  const response = await fetch(`https://${registry}/v2/${name}/manifests/${tag}`, {
    method: 'HEAD',
    headers: { authorization: `Bearer ${token}`, accept: MANIFEST_ACCEPT },
  });
  if (!response.ok) {
    throw new Error(
      `${repository}:${tag} — registry returned ${response.status}. The tag must exist and be ` +
        'publicly pullable before the toolchain can pin it by digest.',
    );
  }
  const digest = response.headers.get('docker-content-digest');
  if (!digest) {
    throw new Error(`${repository}:${tag} — registry response carried no Docker-Content-Digest.`);
  }
  return digest;
};

/**
 * Resolve the two version-aligned release image tags.
 *
 * @param {{ version: string, repository?: string, resolve?: typeof resolveDigest, imagesPath?: string }} input
 */
export const generateImages = async ({
  version,
  repository = 'ghcr.io/taucad/opencascade.js',
  resolve = resolveDigest,
  imagesPath = IMAGES_PATH,
}) => {
  if (semver.valid(version) !== version || semver.parse(version).build.length > 0) {
    throw new Error(`generate-images: expected an exact SemVer, received ${JSON.stringify(version)}`);
  }
  const singleThreadedTag = `${version}-single-threaded`;
  const multiThreadedTag = `${version}-multi-threaded`;
  const resolved = {
    $generatedBy:
      'packages/toolchain/scripts/generate-images.mjs — tags derived from the release version and resolved to registry digests; do not edit.',
    repository,
    singleThreaded: {
      tag: singleThreadedTag,
      digest: await resolve(repository, singleThreadedTag),
    },
    multiThreaded: {
      tag: multiThreadedTag,
      digest: await resolve(repository, multiThreadedTag),
    },
  };

  fs.writeFileSync(imagesPath, `${JSON.stringify(resolved, undefined, 2)}\n`);
  process.stdout.write(
    `generated/images.json — ${resolved.singleThreaded.tag} → ${resolved.singleThreaded.digest}\n` +
      `                       ${resolved.multiThreaded.tag} → ${resolved.multiThreaded.digest}\n`,
  );
  return resolved;
};

if (process.argv[1] === new URL(import.meta.url).pathname) {
  try {
    await generateImages({ version: process.argv[2] });
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}
