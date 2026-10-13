#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

export const DIST_FILES = [
  'api-reference.json',
  'index.d.ts',
  'index.js',
  'init.d.ts',
  'init.js',
  'init.multi.d.ts',
  'init.multi.js',
  'init.single.d.ts',
  'init.single.js',
  'opencascade_single.build-manifest.json',
  'opencascade_single.js',
  'opencascade_single.js.symbols',
  'opencascade_single.provenance.json',
  'opencascade_single.wasm',
  'opencascade_multi.build-manifest.json',
  'opencascade_multi.js',
  'opencascade_multi.js.symbols',
  'opencascade_multi.provenance.json',
  'opencascade_multi.wasm',
  'types.d.ts',
  'variant.d.ts',
].sort();

export const ASSEMBLED_DIST_FILES = [
  ...DIST_FILES,
  'exports.json',
  'opencascade_multi.d.ts',
  'opencascade_single.d.ts',
].sort();

export const PACKAGE_FILES = [
  'BREAKING_CHANGES.md',
  'CHANGELOG.md',
  'LICENSE',
  'LICENSE.OCCT-Exception',
  'README.md',
  'package.json',
  ...DIST_FILES.map((file) => `dist/${file}`),
].sort();

export const validateExactFiles = (actual, expected, label) => {
  const normalized = actual.map((file) => file.replaceAll(path.sep, '/')).sort();
  const missing = expected.filter((file) => !normalized.includes(file));
  const extra = normalized.filter((file) => !expected.includes(file));
  if (missing.length || extra.length) {
    throw new Error(`${label} mismatch; missing=[${missing.join(', ')}] extra=[${extra.join(', ')}]`);
  }
};

const walkFiles = (directory, relative = '') => {
  const current = path.join(directory, relative);
  return fs.readdirSync(current, { withFileTypes: true })
    .sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0)
    .flatMap((entry) => {
      const child = path.join(relative, entry.name);
      return entry.isDirectory() ? walkFiles(directory, child) : [child.replaceAll(path.sep, '/')];
    });
};

export const artifactLedger = (directory) => walkFiles(directory).map((file) => {
  const contents = fs.readFileSync(path.join(directory, file));
  return {
    path: file,
    size: contents.byteLength,
    sha256: crypto.createHash('sha256').update(contents).digest('hex'),
  };
});

export const compareArtifactLedgers = (first, second) => {
  const firstByPath = new Map(first.map((entry) => [entry.path, entry]));
  const secondByPath = new Map(second.map((entry) => [entry.path, entry]));
  const paths = [...new Set([...firstByPath.keys(), ...secondByPath.keys()])].sort();
  const differences = paths.filter((file) =>
    JSON.stringify(firstByPath.get(file)) !== JSON.stringify(secondByPath.get(file)));
  if (differences.length) {
    throw new Error(`artifact ledgers differ: ${differences.join(', ')}`);
  }
};

export const requireSinglePackResult = (packed) => {
  if (!Array.isArray(packed) || packed.length !== 1) {
    const candidates = Array.isArray(packed)
      ? packed.map(({ filename }) => filename ?? '<unnamed>').join(', ')
      : '<non-array>';
    throw new Error(`npm pack must return exactly one tarball; candidates=[${candidates}]`);
  }
  return packed[0];
};

export const validateDist = (directory) => {
  const files = fs.readdirSync(directory).sort();
  validateExactFiles(files, ASSEMBLED_DIST_FILES, 'assembled dist');
  for (const file of ASSEMBLED_DIST_FILES) {
    if (fs.statSync(path.join(directory, file)).size === 0) throw new Error(`empty dist file: ${file}`);
  }
};

export const validateProvenance = (directory, fullSha) => {
  for (const name of ['opencascade_single.provenance.json', 'opencascade_multi.provenance.json']) {
    const provenance = JSON.parse(fs.readFileSync(path.join(directory, name), 'utf8'));
    if (provenance.source?.opencascadejsCommit !== fullSha) {
      throw new Error(`${name} source SHA does not match ${fullSha}`);
    }
  }
};

if (process.argv[1] === new URL(import.meta.url).pathname) {
  try {
    const writeLedger = process.argv.indexOf('--write-ledger');
    if (writeLedger !== -1) {
      const ledger = artifactLedger(path.resolve(process.argv[writeLedger + 1]));
      fs.writeFileSync(process.argv[writeLedger + 2], `${JSON.stringify(ledger)}\n`);
      process.exit(0);
    }
    const compareLedgers = process.argv.indexOf('--compare-ledgers');
    if (compareLedgers !== -1) {
      const first = JSON.parse(fs.readFileSync(process.argv[compareLedgers + 1], 'utf8'));
      const second = JSON.parse(fs.readFileSync(process.argv[compareLedgers + 2], 'utf8'));
      compareArtifactLedgers(first, second);
      process.exit(0);
    }
    const packJson = process.argv.indexOf('--pack-json');
    if (packJson !== -1) {
      const packed = JSON.parse(fs.readFileSync(process.argv[packJson + 1], 'utf8'));
      const candidate = requireSinglePackResult(packed);
      validateExactFiles(candidate.files.map(({ path: file }) => file), PACKAGE_FILES, 'npm tarball');
      console.log(`npm tarball contains exactly ${PACKAGE_FILES.length} files`);
      process.exit(0);
    }
    const directory = path.resolve(process.argv[2] ?? 'dist');
    validateDist(directory);
    if (process.env.OCJS_EXPECTED_SHA) validateProvenance(directory, process.env.OCJS_EXPECTED_SHA);
    console.log(`assembled dist contains exactly ${ASSEMBLED_DIST_FILES.length} non-empty files`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}
