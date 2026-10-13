#!/usr/bin/env node
/** Generate the package-owned, deterministic OCJS API-reference feed. */

import path from 'node:path';
import fs from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { parseDeclaration } from './lib/dts-parser.mjs';
import { buildDate } from './lib/source-date-epoch.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const BINDINGS_DIR = path.join(ROOT, 'build', 'bindings');
const MANIFEST_PATH = path.join(ROOT, 'dist', 'opencascade_single.build-manifest.json');
const DTS_PATH = path.join(ROOT, 'dist', 'opencascade_single.d.ts');
const SYMBOLS_PATH = path.join(ROOT, 'dist', 'opencascade_single.js.symbols');
const PROVENANCE_PATH = path.join(ROOT, 'dist', 'opencascade_single.provenance.json');
const OUTPUT_PATH = path.join(ROOT, 'dist', 'api-reference.json');
const PACKAGE_PATH = path.join(ROOT, 'package.json');
const PACKAGE_NAME = 'libcascade';
const SOURCE_REPOSITORY = 'https://github.com/taucad/opencascade.js';
const SOURCE_SHA = /^[0-9a-f]{40}$/;

const SYNTHETIC_MODULE = 'Synthetic';
const SYNTHETIC_TOOLKIT = 'NCollectionAuto';
const SYNTHETIC_PACKAGE = 'Generated';

const TOOLKIT_HEADLINES = {
  TKernel: 'Foundation runtime, OS abstraction, memory, messages, type system.',
  TKMath: 'Numerics, gp_* geometry primitives, Bnd boxes, Poly meshes.',
  TKBRep: 'Boundary representation core (TopoDS, BRep, BRepLProp).',
  TKG2d: '2D geometry (Geom2d_*, Adaptor2d_*).',
  TKG3d: '3D geometry (Geom_*, Adaptor3d_*, TopoDS_*).',
  TKGeomBase: 'Geometric base algorithms (GeomAPI, GeomLProp, GeomLib, ProjLib).',
  TKGeomAlgo: 'Geometry algorithms (GeomFill, GeomConvert, GeomPlate, IntCurve).',
  TKTopAlgo: 'Topology algorithms (BRepClass, BRepCheck, BRepGProp, BRepExtrema).',
  TKBO: 'Boolean operations (BRepAlgoAPI, BOPAlgo, BOPTools, BOPDS).',
  TKBool: 'Legacy boolean engine (TopOpe* — see exclusion notes).',
  TKPrim: 'Primitive shape builders (BRepPrim, BRepPrimAPI).',
  TKFillet: 'Fillets, chamfers, blending (BRepFilletAPI, ChFi3d, BlendFunc).',
  TKOffset: 'Offset and draft (BRepOffsetAPI, BiTgte, Draft).',
  TKHLR: 'Hidden line removal (HLRAlgo, HLRBRep, HLRTopoBRep).',
  TKMesh: 'Surface meshing (BRepMesh, IMeshTools).',
  TKXMesh: 'Extended meshing (BRepGProp, MeshVS adapters).',
  TKShHealing: 'Shape repair and healing (ShapeAnalysis, ShapeBuild, ShapeFix, ShapeUpgrade).',
  TKCAF: 'Standard CAF document framework.',
  TKLCAF: 'Lightweight CAF (TDF, TDocStd, TDataStd, TNaming, TFunction).',
  TKCDF: 'Cascade Document Framework (CDF, CDM, PCDM, LDOM).',
  TKVCAF: 'Visual CAF (selection, presentation).',
  TKXCAF: 'XCAF assemblies, colours, materials, metadata.',
  TKDE: 'Data Exchange Wrapper core.',
  TKDECascade: 'Native OCCT format reader/writer.',
  TKDEGLTF: 'glTF 2.0 reader/writer.',
  TKDEIGES: 'IGES reader/writer.',
  TKDEOBJ: 'Wavefront OBJ reader/writer.',
  TKDEPLY: 'Stanford PLY reader.',
  TKDESTEP: 'STEP reader/writer (AP203, AP214, AP242 GDT, kinematics).',
  TKDESTL: 'STL reader/writer.',
  TKDEVRML: 'VRML reader/writer.',
};

const MODULE_HEADLINES = {
  FoundationClasses: 'Runtime primitives: gp_*, Standard_*, NCollection, OS abstraction.',
  ModelingData: 'Geometric and topological data structures (Geom, BRep, TopoDS).',
  ModelingAlgorithms:
    'Constructive algorithms: BRepBuilderAPI, BRepPrimAPI, BRepAlgoAPI, BRepFilletAPI, BRepOffsetAPI.',
  DataExchange: 'STEP, IGES, glTF, OBJ, STL, VRML readers/writers and XCAF integration.',
  ApplicationFramework: 'OCAF document framework: TDF/TDocStd/XCAF (assemblies, attributes, naming).',
  [SYNTHETIC_MODULE]:
    'Auto-discovered NCollection template instantiations and OCJS custom bindings (sourced from myMain.h).',
};

async function listBindingFiles() {
  const out = [];
  const stack = [BINDINGS_DIR];
  while (stack.length) {
    const dir = stack.pop();
    let entries;
    try {
      entries = await fs.readdir(dir, { withFileTypes: true });
    } catch {
      continue;
    }
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        stack.push(full);
      } else if (entry.isFile() && entry.name.endsWith('.d.ts.json')) {
        out.push(full);
      }
    }
  }
  return out.sort();
}

function classifyPath(absPath) {
  // Expected pattern:
  //   .../build/bindings/<Module>/<Toolkit>/<Package>/<Class>.hxx/<Class>.d.ts.json
  // Synthetic NCollection bucket:
  //   .../build/bindings/myMain.h/<Class>.d.ts.json
  const rel = path.relative(BINDINGS_DIR, absPath);
  const segments = rel.split(path.sep);
  if (segments[0] === 'myMain.h' || segments.length < 4) {
    return {
      module: SYNTHETIC_MODULE,
      toolkit: SYNTHETIC_TOOLKIT,
      package: SYNTHETIC_PACKAGE,
    };
  }
  return {
    module: segments[0],
    toolkit: segments[1],
    package: segments[2],
  };
}

const readJson = async (file) => JSON.parse(await fs.readFile(file, 'utf8'));
const sha256 = (value) => createHash('sha256').update(value).digest('hex');
export const hashFile = async (file) => sha256(await fs.readFile(file));

export const hashBindings = async (files, baseDirectory = BINDINGS_DIR) => {
  const hash = createHash('sha256');
  for (const file of files) {
    hash.update(path.relative(baseDirectory, file));
    hash.update('\0');
    hash.update(await hashFile(file));
    hash.update('\0');
  }
  return hash.digest('hex');
};

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

function emptyIndexNode() {
  return new Map();
}

export const codePointCompare = (a, b) => a < b ? -1 : a > b ? 1 : 0;

function ensurePath(modules, classify) {
  if (!modules.has(classify.module)) {
    modules.set(classify.module, {
      name: classify.module,
      headline: MODULE_HEADLINES[classify.module] ?? '',
      toolkits: emptyIndexNode(),
    });
  }
  const moduleNode = modules.get(classify.module);
  if (!moduleNode.toolkits.has(classify.toolkit)) {
    moduleNode.toolkits.set(classify.toolkit, {
      name: classify.toolkit,
      headline: TOOLKIT_HEADLINES[classify.toolkit] ?? '',
      packages: emptyIndexNode(),
    });
  }
  const toolkitNode = moduleNode.toolkits.get(classify.toolkit);
  if (!toolkitNode.packages.has(classify.package)) {
    toolkitNode.packages.set(classify.package, {
      name: classify.package,
      classes: [],
    });
  }
  return toolkitNode.packages.get(classify.package);
}

function indexToOrderedJson(modules) {
  const arr = [];
  for (const [, mNode] of modules) {
    const toolkits = [];
    let mCount = 0;
    for (const [, tNode] of mNode.toolkits) {
      const packages = [];
      let tCount = 0;
      for (const [, pNode] of tNode.packages) {
        pNode.classes.sort((a, b) => codePointCompare(a.name, b.name));
        packages.push(pNode);
        tCount += pNode.classes.length;
      }
      packages.sort((a, b) => codePointCompare(a.name, b.name));
      toolkits.push({
        name: tNode.name,
        headline: tNode.headline,
        classCount: tCount,
        packages,
      });
      mCount += tCount;
    }
    toolkits.sort((a, b) => codePointCompare(a.name, b.name));
    arr.push({
      name: mNode.name,
      headline: mNode.headline,
      classCount: mCount,
      toolkitCount: toolkits.length,
      toolkits,
    });
  }
  // Stable, user-friendly module order.
  const ORDER = [
    'FoundationClasses',
    'ModelingData',
    'ModelingAlgorithms',
    'DataExchange',
    'ApplicationFramework',
    SYNTHETIC_MODULE,
  ];
  arr.sort((a, b) => {
    const ai = ORDER.indexOf(a.name);
    const bi = ORDER.indexOf(b.name);
    const aix = ai === -1 ? ORDER.length : ai;
    const bix = bi === -1 ? ORDER.length : bi;
    if (aix !== bix) return aix - bix;
    return codePointCompare(a.name, b.name);
  });
  return arr;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const manifest = await readJson(MANIFEST_PATH);
  const provenance = await readJson(PROVENANCE_PATH);
  const packageJson = await readJson(PACKAGE_PATH);
  const packageVersion = args['package-version'] ?? process.env.OCJS_PACKAGE_VERSION ?? packageJson.version;
  const sourceCommit =
    args['source-sha'] ??
    process.env.OCJS_EXPECTED_SHA ??
    process.env.OCJS_SOURCE_COMMIT ??
    provenance.source?.opencascadejsCommit;
  const outputPath = path.resolve(ROOT, args.output ?? path.relative(ROOT, OUTPUT_PATH));

  if (packageJson.name !== PACKAGE_NAME) {
    throw new Error(`package name must be ${PACKAGE_NAME}, got ${packageJson.name}`);
  }
  if (!SOURCE_SHA.test(sourceCommit ?? '')) {
    throw new Error(`source SHA must be a lowercase 40-character commit, got ${sourceCommit}`);
  }
  if (provenance.source?.opencascadejsCommit !== sourceCommit) {
    throw new Error(
      `provenance source SHA ${provenance.source?.opencascadejsCommit} does not match ${sourceCommit}`,
    );
  }
  const ncollection = provenance.nCollectionManifest;
  if (
    !ncollection ||
    typeof ncollection.linked !== 'number' ||
    typeof ncollection.total !== 'number'
  ) {
    throw new Error(
      'provenance lacks nCollectionManifest.{linked,total}; rebuild with wasm-build-provenance-v2',
    );
  }

  const files = await listBindingFiles();
  if (files.length === 0) {
    throw new Error(`no binding fragments found under ${BINDINGS_DIR}`);
  }

  const modules = emptyIndexNode();
  const classSources = new Map();

  for (const file of files) {
    const raw = await fs.readFile(file, 'utf8');
    if (!raw.trim()) {
      throw new Error(`empty binding fragment: ${path.relative(ROOT, file)}`);
    }
    let payload;
    try {
      payload = JSON.parse(raw);
    } catch (error) {
      throw new Error(`invalid binding JSON ${path.relative(ROOT, file)}: ${error.message}`);
    }
    const dtsText = payload['.d.ts'];
    if (typeof dtsText !== 'string' || !dtsText.trim()) {
      throw new Error(`binding fragment has no declaration text: ${path.relative(ROOT, file)}`);
    }
    const classify = classifyPath(file);
    const parsed = parseDeclaration({
      text: dtsText,
      kind: payload.kind,
      exports: payload.exports ?? [],
      ancestors: payload.ancestors ?? {},
    });
    if (!parsed) {
      throw new Error(`declaration parser skipped ${path.relative(ROOT, file)}`);
    }

    const pkgNode = ensurePath(modules, classify);
    const classKey = [classify.module, classify.toolkit, classify.package, parsed.name].join('/');
    if (classSources.has(classKey)) {
      throw new Error(
        `duplicate API class ${classKey}: ${classSources.get(classKey)}, ${path.relative(ROOT, file)}`,
      );
    }
    classSources.set(classKey, path.relative(ROOT, file));
    pkgNode.classes.push(parsed);
  }

  const orderedModules = indexToOrderedJson(modules);
  const totalClasses = orderedModules.reduce((acc, m) => acc + m.classCount, 0);
  const totalToolkits = orderedModules.reduce((acc, m) => acc + m.toolkitCount, 0);
  const totalPackages = orderedModules.reduce(
    (acc, m) => acc + m.toolkits.reduce((tk, t) => tk + t.packages.length, 0),
    0,
  );
  const totalMembers = orderedModules.reduce(
    (moduleTotal, module) =>
      moduleTotal +
      module.toolkits.reduce(
        (toolkitTotal, toolkit) =>
          toolkitTotal +
          toolkit.packages.reduce(
            (packageTotal, packageNode) =>
              packageTotal +
              packageNode.classes.reduce(
                (classTotal, classNode) =>
                  classTotal +
                  classNode.constructors.length +
                  classNode.staticMethods.length +
                  classNode.instanceMethods.length +
                  classNode.properties.length,
                0,
              ),
            0,
          ),
        0,
      ),
    0,
  );
  const dtsStat = await fs.stat(DTS_PATH);
  const requestedTotal = Array.isArray(manifest.symbols?.requested)
    ? manifest.symbols.requested.length
    : null;
  const compiledTotal =
    typeof manifest.symbols?.compiled === 'number' ? manifest.symbols.compiled : null;

  const feed = {
    schema: 'ocjs-api-reference-v1',
    package: {
      name: PACKAGE_NAME,
      version: packageVersion,
    },
    source: {
      repository: SOURCE_REPOSITORY,
      commit: sourceCommit,
      generatedAt: buildDate().toISOString(),
    },
    inputs: {
      bindings: {
        sha256: await hashBindings(files),
        fileCount: files.length,
      },
      declarations: { sha256: await hashFile(DTS_PATH) },
      symbols: { sha256: await hashFile(SYMBOLS_PATH) },
      buildManifest: { sha256: await hashFile(MANIFEST_PATH) },
      provenance: { sha256: await hashFile(PROVENANCE_PATH) },
    },
    provenance: {
      schema: provenance.schema ?? null,
      occtCommit: provenance.source?.occtCommit ?? null,
      nCollectionManifest: {
        linked: ncollection.linked,
        total: ncollection.total,
      },
    },
    manifest: {
      wasmBytes: manifest.outputs?.[0]?.wasm_size ?? null,
      dtsBytes: dtsStat.size,
      jsBytes: manifest.outputs?.[0]?.js_size ?? null,
      validationPassed: manifest.validation_passed === true,
      requested: requestedTotal,
      compiled: compiledTotal,
      occtYaml: manifest.yaml_config ?? null,
      builtAt: manifest.timestamp ?? null,
    },
    totals: {
      modules: orderedModules.length,
      toolkits: totalToolkits,
      packages: totalPackages,
      classes: totalClasses,
      members: totalMembers,
    },
    modules: orderedModules,
  };

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, `${JSON.stringify(feed)}\n`);
  console.log(
    `[ocjs-api-reference] ${totalClasses} classes across ${totalPackages} packages → ${path.relative(ROOT, outputPath)}`,
  );
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
