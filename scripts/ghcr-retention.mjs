#!/usr/bin/env node

const DAY = 86_400_000;
const BRANCH = /^(branch|multi-threaded-branch|bindgen-base-branch)-(.+?)(?:-([0-9a-f]{40}))?$/;
const CANARY =
  /^(?:canary-[0-9a-f]{8}|\d+\.\d+\.\d+-canary\.[0-9a-f]{8})-(single-threaded|multi-threaded|bindgen-base)$/;
const CACHE = /^buildcache-(amd64|arm64)-(final-single|final-multi|bindgen-base)$/;
const RELEASE =
  /^(single-threaded|multi-threaded|bindgen-base|\d+\.\d+(?:\.\d+)?(?:-[0-9A-Za-z.-]+)?|sha-[0-9a-f]+-(?:single-threaded|multi-threaded|bindgen-base))$/;
const REFERRER = /^sha256-[0-9a-f]+\.(?:sig|att)$/;

const age = (version, now) => now - new Date(version.created_at).getTime();
const tagsOf = (version) => version.metadata?.container?.tags ?? [];

export const selectVersions = (versions, { now = Date.now(), referencedDigests = new Set() } = {}) => {
  const protectedIds = new Set();
  const branchFamilies = new Map();
  const canaryFamilies = new Map();
  const cacheFamilies = new Map();
  const untagged = [];

  for (const version of versions) {
    const tags = tagsOf(version);
    if (!tags.length) {
      untagged.push(version);
      continue;
    }
    const branch = tags.map((tag) => BRANCH.exec(tag)).filter(Boolean);
    const canary = tags.map((tag) => CANARY.exec(tag)).filter(Boolean);
    const cache = tags.map((tag) => CACHE.exec(tag)).filter(Boolean);
    const families = new Set([
      ...branch.map((match) => `branch:${match[1]}:${match[2]}`),
      ...canary.map((match) => `canary:${match[1]}`),
      ...cache.map((match) => `cache:${match[1]}:${match[2]}`),
    ]);
    if (
      tags.some((tag) => (RELEASE.test(tag) && !CANARY.test(tag)) || REFERRER.test(tag)) ||
      branch.length + canary.length + cache.length !== tags.length ||
      families.size !== 1
    ) {
      protectedIds.add(version.id);
      continue;
    }
    if (branch.length) {
      const key = `${branch[0][1]}:${branch[0][2]}`;
      branchFamilies.set(key, [...(branchFamilies.get(key) ?? []), version]);
    }
    if (canary.length) {
      const key = canary[0][1];
      canaryFamilies.set(key, [...(canaryFamilies.get(key) ?? []), version]);
    }
    if (cache.length) {
      const key = `${cache[0][1]}:${cache[0][2]}`;
      cacheFamilies.set(key, [...(cacheFamilies.get(key) ?? []), version]);
    }
  }

  const selected = new Map();
  for (const family of [...branchFamilies.values(), ...canaryFamilies.values()]) {
    family.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    for (const version of family.slice(5)) {
      if (age(version, now) > 7 * DAY && !protectedIds.has(version.id)) selected.set(version.id, version);
    }
  }
  for (const family of cacheFamilies.values()) {
    family.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    for (const version of family.slice(1)) {
      if (age(version, now) > 14 * DAY && !protectedIds.has(version.id)) selected.set(version.id, version);
    }
  }
  for (const version of untagged) {
    if (age(version, now) > 14 * DAY && !referencedDigests.has(version.name)) selected.set(version.id, version);
  }
  return [...selected.values()].sort((a, b) => Number(a.id) - Number(b.id));
};

const github = async (path, options = {}) => {
  const response = await fetch(`https://api.github.com${path}`, {
    ...options,
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28',
      ...options.headers,
    },
  });
  if (!response.ok) throw new Error(`GitHub API ${response.status}: ${await response.text()}`);
  return response.status === 204 ? null : response.json();
};

const listVersions = async () => {
  const versions = [];
  for (let page = 1; ; page++) {
    const batch = await github(`/orgs/taucad/packages/container/opencascade.js/versions?per_page=100&page=${page}`);
    versions.push(...batch);
    if (batch.length < 100) return versions;
  }
};

const registryJson = async (url, options = {}) => {
  const response = await fetch(url, options);
  if (!response.ok) throw new Error(`GHCR API ${response.status}: ${await response.text()}`);
  return response.json();
};

export const listReferencedDigests = async (versions) => {
  const tokenUrl = new URL('https://ghcr.io/token');
  tokenUrl.searchParams.set('scope', 'repository:taucad/opencascade.js:pull');
  const { token } = await registryJson(tokenUrl);
  if (!token) throw new Error('GHCR did not return a pull token');

  const headers = {
    Accept: [
      'application/vnd.oci.image.index.v1+json',
      'application/vnd.oci.image.manifest.v1+json',
      'application/vnd.docker.distribution.manifest.list.v2+json',
      'application/vnd.docker.distribution.manifest.v2+json',
    ].join(', '),
    Authorization: `Bearer ${token}`,
  };
  const referenced = new Set();
  for (const version of versions.filter((candidate) => tagsOf(candidate).length)) {
    referenced.add(version.name);
    const manifest = await registryJson(`https://ghcr.io/v2/taucad/opencascade.js/manifests/${version.name}`, {
      headers,
    });
    for (const descriptor of manifest.manifests ?? []) referenced.add(descriptor.digest);
    if (manifest.subject?.digest) referenced.add(manifest.subject.digest);
  }
  return referenced;
};

if (process.argv[1] === new URL(import.meta.url).pathname) {
  try {
    if (!process.env.GITHUB_TOKEN) throw new Error('GITHUB_TOKEN is required');
    const deleting = process.argv.includes('--delete');
    const versions = await listVersions();
    const referencedDigests = await listReferencedDigests(versions);
    const selected = selectVersions(versions, { referencedDigests });
    console.log(
      JSON.stringify(
        selected.map(({ id, name, created_at, metadata }) => ({
          id,
          name,
          created_at,
          tags: metadata?.container?.tags ?? [],
        })),
        null,
        2,
      ),
    );
    if (deleting) {
      for (const { id } of selected) {
        await github(`/orgs/taucad/packages/container/opencascade.js/versions/${id}`, { method: 'DELETE' });
      }
    }
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}
