/**
 * Read the bindable symbol universe for generated toolchain metadata. The
 * universe combines compiled OCCT classes and enums from `api-reference.json`,
 * typedef aliases from the image manifest, and unconditional Embind builtins.
 */
import * as fs from 'node:fs';
import * as path from 'node:path';

import { readImageFacts } from './image.mjs';

/** Repository root (`repos/opencascade.js`). */
export const OCJS_ROOT = path.resolve(import.meta.dirname, '../../../..');
/** Directory the generated artifacts are written to. */
export const GENERATED_DIRECTORY = path.resolve(import.meta.dirname, '../../generated');

const API_REFERENCE_PATH = path.join(OCJS_ROOT, 'dist/api-reference.json');

const readJson = (file, hint) => {
  if (!fs.existsSync(file)) {
    throw new Error(
      `Missing generator input: ${file}\n${hint}\n` +
        '`dist/` is gitignored; run a full build (or fetch the release artifacts) before regenerating.',
    );
  }
  return JSON.parse(fs.readFileSync(file, 'utf8'));
};

/**
 * Load the bindable symbol universe and the data the catalog needs.
 *
 * @returns Provenance strings plus one entry per bindable symbol, sorted by name.
 */
export const loadSymbolUniverse = () => {
  const apiReference = readJson(
    API_REFERENCE_PATH,
    'It is produced by `npm run build` / the release pipeline and exported as `libcascade/api-reference.json`.',
  );
  if (apiReference.schema !== 'ocjs-api-reference-v1') {
    throw new Error(
      `Unsupported api-reference schema "${apiReference.schema}" (expected ocjs-api-reference-v1). ` +
        'The generator parses the hierarchical modules→toolkits→packages→classes shape; update it deliberately.',
    );
  }
  const facts = readImageFacts();

  /** @type {Map<string, {name: string, kind: string, parents: string[], typeStrings: string[]}>} */
  const entries = new Map();

  for (const module of apiReference.modules) {
    for (const toolkit of module.toolkits) {
      for (const pkg of toolkit.packages) {
        for (const cls of pkg.classes) {
          const typeStrings = [];
          for (const group of [cls.constructors, cls.staticMethods, cls.instanceMethods]) {
            for (const member of group ?? []) {
              if (member.returnType) typeStrings.push(member.returnType);
              for (const parameter of member.parameters ?? []) typeStrings.push(parameter.type);
            }
          }
          for (const property of cls.properties ?? []) typeStrings.push(property.type);
          entries.set(cls.name, {
            name: cls.name,
            kind: cls.kind,
            parents: [...(cls.ancestors ?? [])],
            typeStrings,
          });
        }
      }
    }
  }

  for (const [alias, canonical] of Object.entries(facts.templateTypedefs)) {
    if (entries.has(alias)) continue;
    // An alias binds exactly what its canonical instantiation binds; recording
    // the canonical as its single referenced type keeps W5's closure correct.
    entries.set(alias, { name: alias, kind: 'alias', parents: [], typeStrings: [canonical] });
  }
  for (const builtin of facts.builtinSymbols) {
    if (entries.has(builtin)) continue;
    entries.set(builtin, { name: builtin, kind: 'builtin', parents: [], typeStrings: [] });
  }

  return {
    provenance:
      `dist/api-reference.json (${apiReference.schema}, ${apiReference.package.name} ` +
      `${apiReference.package.version}) + the toolchain image's ` +
      'build/ncollection-manifest.json typedef aliases and Embind builtin registrations',
    entries: [...entries.values()].sort((left, right) => (left.name < right.name ? -1 : 1)),
  };
};

/**
 * Class names referenced by a symbol's member signatures.
 *
 * Signature types are TypeScript source fragments (`NCollection_Array1_double`,
 * `Standard_Transient | null`, `'BSplCLib_Uniform'`); identifiers are extracted
 * lexically and intersected with the bindable universe, which drops primitives,
 * quoted enum literals, and syntax noise without a TS parser.
 *
 * @param entry - One universe entry.
 * @param universe - Every bindable symbol name.
 * @returns Sorted, de-duplicated referenced symbol names, excluding the symbol itself.
 */
export const referencedTypes = (entry, universe) => {
  const found = new Set();
  for (const typeString of entry.typeStrings) {
    for (const identifier of typeString.match(/[A-Za-z_][A-Za-z0-9_]*/g) ?? []) {
      if (identifier !== entry.name && universe.has(identifier)) found.add(identifier);
    }
  }
  return [...found].sort();
};

/**
 * Write a generated artifact and report it.
 *
 * @param fileName - File name inside `generated/`.
 * @param contents - Full file contents.
 */
export const writeGenerated = (fileName, contents) => {
  fs.mkdirSync(GENERATED_DIRECTORY, { recursive: true });
  const target = path.join(GENERATED_DIRECTORY, fileName);
  fs.writeFileSync(target, contents);
  process.stdout.write(
    `generated/${fileName} — ${(Buffer.byteLength(contents) / 1024).toFixed(1)} KB\n`,
  );
};
