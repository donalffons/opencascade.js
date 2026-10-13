/**
 * Query TypeScript's language service for base and variant setting hovers.
 * Both positions must carry the same generated setting documentation, and a
 * variant property must be declared by `VariantEmccSettings`. The fixture is
 * served from memory.
 */
import * as fs from 'node:fs';
import * as path from 'node:path';

import ts from 'typescript';
import { beforeAll, describe, expect, it } from 'vitest';

const PACKAGE_ROOT = path.resolve(import.meta.dirname, '..');
/** Virtual — never written. Inside `test/` so `../src/index.ts` resolves. */
const FIXTURE_PATH = path.join(PACKAGE_ROOT, 'test/__quick-info-fixture__.ts');

const FIXTURE = `import { defineBuild } from '../src/index.ts';

export default defineBuild({
  name: 'demo',
  bindings: ['gp_Pnt'],
  settings: { SHARED_MEMORY: false },
  variants: [{ name: 'multi', settings: { SHARED_MEMORY: true } }],
});
`;

/**
 * A distinctive phrase from emsdk 6.0.5's own settings.js doc for
 * `SHARED_MEMORY` ("If 1, target compiling a shared Wasm Memory."). Asserting
 * on the prose — not merely on "documentation is non-empty" — is what proves
 * the *right* documentation arrived.
 */
const SHARED_MEMORY_DOC = 'target compiling a shared Wasm Memory';

/** Offset of the n-th `SHARED_MEMORY` occurrence, pointing inside the identifier. */
const occurrence = (index: number): number => {
  let at = -1;
  for (let found = 0; found <= index; found += 1) at = FIXTURE.indexOf('SHARED_MEMORY', at + 1);
  if (at === -1) throw new Error(`fixture has no SHARED_MEMORY occurrence ${index}`);
  return at + 1;
};

/** The base `settings` block, then the variant one. */
const BASE = occurrence(0);
const VARIANT = occurrence(1);

let service: ts.LanguageService;

beforeAll(() => {
  const configPath = path.join(PACKAGE_ROOT, 'tsconfig.json');
  const { config, error } = ts.readConfigFile(configPath, ts.sys.readFile);
  if (error) throw new Error(ts.flattenDiagnosticMessageText(error.messageText, '\n'));
  const parsed = ts.parseJsonConfigFileContent(config, ts.sys, PACKAGE_ROOT);

  const host: ts.LanguageServiceHost = {
    getScriptFileNames: () => [FIXTURE_PATH],
    getScriptVersion: () => '1',
    getScriptSnapshot: (fileName) => {
      if (fileName === FIXTURE_PATH) return ts.ScriptSnapshot.fromString(FIXTURE);
      if (!fs.existsSync(fileName)) return undefined;
      return ts.ScriptSnapshot.fromString(fs.readFileSync(fileName, 'utf8'));
    },
    getCurrentDirectory: () => PACKAGE_ROOT,
    getCompilationSettings: () => parsed.options,
    getDefaultLibFileName: (options) => ts.getDefaultLibFilePath(options),
    fileExists: (fileName) => fileName === FIXTURE_PATH || ts.sys.fileExists(fileName),
    readFile: (fileName) => (fileName === FIXTURE_PATH ? FIXTURE : ts.sys.readFile(fileName)),
    readDirectory: ts.sys.readDirectory,
    directoryExists: ts.sys.directoryExists,
    getDirectories: ts.sys.getDirectories,
  };

  service = ts.createLanguageService(host, ts.createDocumentRegistry());
});

/** What an editor hover would render for the setting at `offset`. */
const hover = (offset: number): { readonly signature: string; readonly documentation: string } => {
  const info = service.getQuickInfoAtPosition(FIXTURE_PATH, offset);
  if (info === undefined) throw new Error(`no quick info at offset ${offset}`);
  return {
    signature: ts.displayPartsToString(info.displayParts),
    documentation: ts.displayPartsToString(info.documentation),
  };
};

/**
 * Name of the type alias declaring the property at `offset` — where
 * "go to definition" lands, read back as a type name rather than a line number.
 */
const declaringType = (offset: number): string => {
  const [definition] = service.getDefinitionAtPosition(FIXTURE_PATH, offset) ?? [];
  if (definition === undefined) throw new Error(`no definition at offset ${offset}`);
  const source = service.getProgram()?.getSourceFile(definition.fileName);
  if (source === undefined) throw new Error(`definition file not in program: ${definition.fileName}`);

  const enclosing = (node: ts.Node): ts.Node | undefined =>
    node.getStart() <= definition.textSpan.start && definition.textSpan.start < node.getEnd()
      ? (ts.forEachChild(node, enclosing) ?? node)
      : undefined;

  for (let node = enclosing(source); node !== undefined; node = node.parent) {
    if (ts.isTypeAliasDeclaration(node) || ts.isInterfaceDeclaration(node)) return node.name.text;
  }
  throw new Error(`property at offset ${offset} is not declared inside a named type`);
};

describe('settings quick-info', () => {
  it('reports no fixture diagnostics, so every lookup is on a resolved symbol', () => {
    const diagnostics = [
      ...service.getSemanticDiagnostics(FIXTURE_PATH),
      ...service.getSyntacticDiagnostics(FIXTURE_PATH),
    ].map((diagnostic) => ts.flattenDiagnosticMessageText(diagnostic.messageText, ' '));
    expect(diagnostics).toStrictEqual([]);
  });

  it('documents a base `settings` key from settings.js', () => {
    const { signature, documentation } = hover(BASE);
    expect(signature).toContain('SHARED_MEMORY');
    expect(documentation).toContain(SHARED_MEMORY_DOC);
  });

  it('documents a variant `settings` key identically', () => {
    const { signature, documentation } = hover(VARIANT);
    // The variant surface widens the value with the `null` unset marker …
    expect(signature).toContain('null');
    // … without losing the prose on the way.
    expect(documentation).toContain(SHARED_MEMORY_DOC);
    expect(documentation).toBe(hover(BASE).documentation);
  });

  it('declares variant settings concretely, not as a mapped type over the base', () => {
    // The revert detector: a homomorphic mapped type has no property
    // declarations of its own, so both positions resolve into `EmccSettings`.
    expect(declaringType(BASE)).toBe('EmccSettings');
    expect(declaringType(VARIANT)).toBe('VariantEmccSettings');
  });
});
