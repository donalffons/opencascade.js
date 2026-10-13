#!/usr/bin/env node

import fs from 'node:fs';
import { promises as fsp } from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { buildClassAnchorMap } from './lib/api-anchors.mjs';

const DOCS_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const NPM_PACKAGE_NAME = 'libcascade';
const PROJECT_NAME = 'ocjs';
const FEED_SCHEMA = 'ocjs-api-reference-v1';
const SHA = /^[0-9a-f]{40}$/;
const HASH = /^[0-9a-f]{64}$/;
const SEMVER = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?$/;

const parseArgs = (argv) => {
  const args = {};
  for (let index = 0; index < argv.length; index++) {
    const flag = argv[index];
    if (!flag.startsWith('--')) continue;
    args[flag.slice(2)] = argv[index + 1] ?? '';
    index++;
  }
  return args;
};

const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

const readJson = async (file) => JSON.parse(await fsp.readFile(file, 'utf8'));
const writeJson = async (file, value) => fsp.writeFile(file, `${JSON.stringify(value)}\n`);
const codePointCompare = (a, b) => a < b ? -1 : a > b ? 1 : 0;
const shardKey = (moduleName, toolkitName, packageName) =>
  `${moduleName}__${toolkitName}__${packageName}`;

const summarizeClass = (classNode) => ({
  name: classNode.name,
  kind: classNode.kind,
  extends: classNode.extends ?? [],
  summary: classNode.summary ?? '',
  members: {
    constructors: classNode.constructors.length,
    staticMethods: classNode.staticMethods.length,
    instanceMethods: classNode.instanceMethods.length,
    properties: classNode.properties.length,
  },
});

const searchEntries = (owner, key, classNode) => {
  const anchors = buildClassAnchorMap(classNode);
  const entries = [{
    n: classNode.name,
    k: 'class',
    p: owner,
    s: key,
    a: classNode.name,
    q: classNode.name.toLowerCase(),
  }];
  for (const [kind, members, tag] of [
    ['static', classNode.staticMethods, 'static'],
    ['inst', classNode.instanceMethods, 'method'],
    ['prop', classNode.properties, 'property'],
  ]) {
    members.forEach((member, index) => {
      if (!member?.name) return;
      const name = `${classNode.name}.${member.name}`;
      entries.push({
        n: name,
        k: tag,
        p: owner,
        s: key,
        a: anchors.get(`${kind}:${index}`),
        q: name.toLowerCase(),
      });
    });
  }
  return entries;
};

const findShard = (modules, moduleName, toolkitName, packageName) => {
  const moduleNode = modules.find(({ name }) => name === moduleName);
  const toolkit = moduleNode?.toolkits.find(({ name }) => name === toolkitName);
  const packageNode = toolkit?.packages.find(({ name }) => name === packageName);
  return packageNode ? `${shardKey(moduleName, toolkitName, packageName)}.json` : null;
};

const quickLinks = (modules) => [
  ['gp_Pnt', 'FoundationClasses', 'TKMath', 'gp'],
  ['TopoDS_Shape', 'ModelingData', 'TKBRep', 'TopoDS'],
  ['BRep_Tool', 'ModelingData', 'TKBRep', 'BRep'],
  ['BRepBuilderAPI_MakeShape', 'ModelingAlgorithms', 'TKTopAlgo', 'BRepBuilderAPI'],
  ['BRepPrimAPI_MakeBox', 'ModelingAlgorithms', 'TKPrim', 'BRepPrimAPI'],
  ['BRepAlgoAPI_Fuse', 'ModelingAlgorithms', 'TKBO', 'BRepAlgoAPI'],
  ['GeomAPI_Interpolate', 'ModelingAlgorithms', 'TKGeomBase', 'GeomAPI'],
  ['STEPControl_Reader', 'DataExchange', 'TKDESTEP', 'STEPControl'],
].map(([name, moduleName, toolkitName, packageName]) => ({
  name,
  kind: 'class',
  p: `${moduleName}/${toolkitName}/${packageName}`,
  s: findShard(modules, moduleName, toolkitName, packageName),
})).filter(({ s }) => s);

const validateFeed = (feed, packageJson) => {
  assert(feed.schema === FEED_SCHEMA, `unsupported API-reference schema: ${feed.schema}`);
  assert(
    feed.package?.name === NPM_PACKAGE_NAME,
    `API-reference package must be ${NPM_PACKAGE_NAME}`,
  );
  assert(SEMVER.test(feed.package?.version ?? ''), `invalid API-reference version: ${feed.package?.version}`);
  assert(SHA.test(feed.source?.commit ?? ''), `invalid API-reference source SHA: ${feed.source?.commit}`);
  assert(Array.isArray(feed.modules) && feed.modules.length > 0, 'API-reference has no modules');
  assert(feed.inputs?.bindings?.fileCount > 0, 'API-reference has no binding inputs');
  for (const [name, input] of Object.entries(feed.inputs ?? {})) {
    assert(HASH.test(input?.sha256 ?? ''), `API-reference ${name} hash is invalid`);
  }
  if (packageJson) {
    assert(packageJson.name === feed.package.name, 'tarball package name does not match API-reference');
    assert(packageJson.version === feed.package.version, 'tarball package version does not match API-reference');
  }
  const expectedSha = process.env.OCJS_EXPECTED_SHA;
  if (expectedSha) {
    assert(feed.source.commit === expectedSha, `API-reference source ${feed.source.commit} does not match ${expectedSha}`);
  }
};

const resolveSource = async (from) => {
  if (!from) {
    const requireFromDocs = createRequire(path.join(DOCS_ROOT, 'package.json'));
    return { feedPath: requireFromDocs.resolve(`${NPM_PACKAGE_NAME}/api-reference.json`) };
  }

  const source = path.resolve(process.cwd(), from);
  if (source.endsWith('.tgz')) {
    const temp = await fsp.mkdtemp(path.join(os.tmpdir(), 'ocjs-docs-sync-'));
    execFileSync('tar', ['-xzf', source, '-C', temp]);
    return {
      feedPath: path.join(temp, 'package', 'dist', 'api-reference.json'),
      packagePath: path.join(temp, 'package', 'package.json'),
      cleanup: temp,
    };
  }

  const stat = await fsp.stat(source);
  if (stat.isFile()) return { feedPath: source };
  for (const candidate of [
    path.join(source, 'dist', 'api-reference.json'),
    path.join(source, 'api-reference.json'),
  ]) {
    if (fs.existsSync(candidate)) {
      return {
        feedPath: candidate,
        packagePath: fs.existsSync(path.join(source, 'package.json'))
          ? path.join(source, 'package.json')
          : undefined,
      };
    }
  }
  throw new Error(`cannot find api-reference.json under ${source}`);
};

const writeSiteData = async (feed, output) => {
  const modules = [];
  const searchIndex = [];

  for (const moduleNode of [...feed.modules].sort((a, b) => codePointCompare(a.name, b.name))) {
    const toolkits = [];
    for (const toolkit of [...moduleNode.toolkits].sort((a, b) => codePointCompare(a.name, b.name))) {
      const packages = [];
      for (const packageNode of [...toolkit.packages].sort((a, b) => codePointCompare(a.name, b.name))) {
        const key = shardKey(moduleNode.name, toolkit.name, packageNode.name);
        const owner = `${moduleNode.name}/${toolkit.name}/${packageNode.name}`;
        const classes = [...packageNode.classes].sort((a, b) => codePointCompare(a.name, b.name));
        await writeJson(path.join(output, `${key}.json`), {
          schema: 2,
          shard: key,
          generatedAt: feed.source.generatedAt,
          classes,
        });
        for (const classNode of classes) {
          searchIndex.push(...searchEntries(owner, key, classNode));
        }
        packages.push({
          name: packageNode.name,
          shard: `${key}.json`,
          classes: classes.map(summarizeClass),
        });
      }
      toolkits.push({
        name: toolkit.name,
        headline: toolkit.headline ?? '',
        classCount: toolkit.classCount,
        packages,
      });
    }
    modules.push({
      name: moduleNode.name,
      headline: moduleNode.headline ?? '',
      classCount: moduleNode.classCount,
      toolkitCount: moduleNode.toolkitCount,
      toolkits,
    });
  }
  searchIndex.sort((a, b) => {
    for (const key of ['q', 'n', 'k', 'p', 's', 'a']) {
      const order = codePointCompare(a[key] ?? '', b[key] ?? '');
      if (order) return order;
    }
    return 0;
  });

  const index = {
    schema: 2,
    project: PROJECT_NAME,
    package: feed.package,
    generatedAt: feed.source.generatedAt,
    source: feed.source,
    inputs: feed.inputs,
    manifest: {
      wasm_bytes: feed.manifest.wasmBytes,
      dts_bytes: feed.manifest.dtsBytes,
      js_bytes: feed.manifest.jsBytes,
      validation_passed: feed.manifest.validationPassed,
      requested: feed.manifest.requested,
      compiled: feed.manifest.compiled,
      ncollection_auto: feed.provenance.nCollectionManifest.linked,
      ncollection_auto_total: feed.provenance.nCollectionManifest.total,
      occt_yaml: feed.manifest.occtYaml,
      built_at: feed.manifest.builtAt,
    },
    totals: {
      ...feed.totals,
      searchEntries: searchIndex.length,
      parseSkipped: 0,
    },
    quickLinks: quickLinks(modules),
    modules,
    searchIndex,
  };
  await writeJson(path.join(output, 'index.json'), index);
};

const replaceOutput = async (staging, output) => {
  const backup = `${output}.backup-${process.pid}`;
  const hadOutput = fs.existsSync(output);
  if (hadOutput) await fsp.rename(output, backup);
  try {
    await fsp.rename(staging, output);
    if (hadOutput) await fsp.rm(backup, { recursive: true, force: true });
  } catch (error) {
    if (hadOutput && !fs.existsSync(output)) await fsp.rename(backup, output);
    throw error;
  }
};

const main = async () => {
  const args = parseArgs(process.argv.slice(2));
  const output = path.resolve(DOCS_ROOT, args.output ?? 'data');
  const source = await resolveSource(args.from ?? process.env.OCJS_API_REFERENCE_SOURCE);
  const staging = `${output}.staging-${process.pid}`;
  try {
    const feed = await readJson(source.feedPath);
    const packageJson = source.packagePath ? await readJson(source.packagePath) : null;
    validateFeed(feed, packageJson);
    await fsp.rm(staging, { recursive: true, force: true });
    await fsp.mkdir(staging, { recursive: true });
    await writeSiteData(feed, staging);
    execFileSync(process.execPath, [
      path.join(DOCS_ROOT, 'scripts', 'generate-api-data.mjs'),
      '--in',
      staging,
    ], { stdio: 'inherit' });
    await replaceOutput(staging, output);
    console.log(
      `sync-api-reference: ${feed.package.name}@${feed.package.version} ${feed.source.commit.slice(0, 8)} → ${path.relative(DOCS_ROOT, output)}`,
    );
  } finally {
    await fsp.rm(staging, { recursive: true, force: true });
    if (source.cleanup) await fsp.rm(source.cleanup, { recursive: true, force: true });
  }
};

await main().catch((error) => {
  console.error(`sync-api-reference failed: ${error.message}`);
  process.exit(1);
});
