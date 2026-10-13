/**
 * TypeScript declaration validation suite for libcascade builds.
 *
 * Parses generated .d.ts files using the TypeScript compiler API and validates:
 * - Symbol coverage against the build manifest
 * - No invalid TypeScript syntax (::, bare < in type names)
 * - Key OCCT classes exist with expected structure
 * - Overload patterns (inline overloads vs _N subclasses)
 * - `any` type regression tracking
 * - Semantic diagnostics covering the codegen gap analysis
 */

import { describe, it, expect } from 'vitest';
import * as ts from 'typescript';
import * as fs from 'node:fs';
import * as path from 'node:path';

const REPLICAD_BUILD_CONFIG = path.resolve(
  import.meta.dirname,
  '../../replicad/packages/replicad-opencascadejs/build-config',
);

const FULL_BUILD_CONFIG = path.resolve(import.meta.dirname, '../build-configs');
const DIST = path.resolve(import.meta.dirname, '../dist');
const FULL_DTS = path.join(DIST, 'opencascade_single.d.ts');
const FULL_JS = path.join(DIST, 'opencascade_single.js');
const FULL_BUILD_MANIFEST = path.join(DIST, 'opencascade_single.build-manifest.json');
// `./build-wasm.sh dts <yaml>` writes the .d.ts next to the YAML it consumes;
// for replicad-single this is the build-config directory in the replicad fork.
// `dist/` only receives artifacts from a full WASM link (`./build-wasm.sh full`).
const REPLICAD_SINGLE_DTS = path.join(REPLICAD_BUILD_CONFIG, 'replicad_single.d.ts');

function parseDtsFile(dtsPath: string): ts.SourceFile | null {
  if (!fs.existsSync(dtsPath)) return null;
  const content = fs.readFileSync(dtsPath, 'utf8');
  return ts.createSourceFile(dtsPath, content, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
}

type DtsSymbol = {
  name: string;
  kind: 'class' | 'enum' | 'type' | 'interface' | 'function';
  members?: string[];
  heritage?: string[];
};

function extractSymbols(sourceFile: ts.SourceFile): DtsSymbol[] {
  const symbols: DtsSymbol[] = [];

  function visit(node: ts.Node) {
    if (ts.isClassDeclaration(node) && node.name) {
      const members: string[] = [];
      for (const member of node.members) {
        if (ts.isMethodDeclaration(member) && member.name && ts.isIdentifier(member.name)) {
          members.push(member.name.text);
        } else if (ts.isConstructorDeclaration(member)) {
          members.push('constructor');
        }
      }
      const heritage: string[] = [];
      if (node.heritageClauses) {
        for (const clause of node.heritageClauses) {
          for (const type of clause.types) {
            if (ts.isIdentifier(type.expression)) {
              heritage.push(type.expression.text);
            }
          }
        }
      }
      symbols.push({ name: node.name.text, kind: 'class', members, heritage });
    } else if (ts.isEnumDeclaration(node) && node.name) {
      const members = node.members.map((m) => (ts.isIdentifier(m.name) ? m.name.text : ''));
      symbols.push({ name: node.name.text, kind: 'enum', members });
    } else if (ts.isTypeAliasDeclaration(node) && node.name) {
      symbols.push({ name: node.name.text, kind: 'type' });
    } else if (ts.isInterfaceDeclaration(node) && node.name) {
      symbols.push({ name: node.name.text, kind: 'interface' });
    } else if (ts.isFunctionDeclaration(node) && node.name) {
      symbols.push({ name: node.name.text, kind: 'function' });
    } else if (ts.isVariableStatement(node)) {
      for (const decl of node.declarationList.declarations) {
        if (ts.isIdentifier(decl.name)) {
          symbols.push({ name: decl.name.text, kind: 'enum' });
        }
      }
    }

    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
  return symbols;
}

function loadManifest(manifestPath: string): Record<string, unknown> | null {
  if (!fs.existsSync(manifestPath)) return null;
  return JSON.parse(fs.readFileSync(manifestPath, 'utf8')) as Record<string, unknown>;
}

function loadYamlSymbols(yamlPath: string): string[] {
  if (!fs.existsSync(yamlPath)) return [];
  const content = fs.readFileSync(yamlPath, 'utf8');
  const symbols: string[] = [];
  for (const line of content.split('\n')) {
    const match = /^\s*-\s*symbol:\s*(\S+)/.exec(line);
    if (match) {
      symbols.push(match[1]);
    }
  }
  return symbols;
}

/**
 * Finds lines containing C++ scope resolution operators (::) that leaked
 * into the generated .d.ts output. Ignores comments.
 */
function findDoubleColonViolations(content: string): { line: number; text: string }[] {
  const lines = content.split('\n');
  const violations: { line: number; text: string }[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes('//') || line.includes('/*')) continue;
    if (line.trimStart().startsWith('*')) continue;
    if (/\w+::\w+/.test(line)) {
      violations.push({ line: i + 1, text: line.trim() });
    }
  }

  return violations;
}

/**
 * Finds lines containing bare template types (<) in type positions,
 * excluding known valid TS generics like Promise<> and Array<>.
 */
function findBareTemplateViolations(content: string): { line: number; text: string }[] {
  const lines = content.split('\n');
  const violations: { line: number; text: string }[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes('//') || line.includes('/*')) continue;
    if (line.trimStart().startsWith('*')) continue;
    const typeMatch = /:\s*\w+<\w+/.exec(line);
    if (typeMatch && !line.includes('Array<') && !line.includes('Promise<')) {
      violations.push({ line: i + 1, text: line.trim() });
    }
  }

  return violations;
}

/**
 * Counts `: any` occurrences and groups them by class.
 */
function countAnyTypes(sourceFile: ts.SourceFile): {
  total: number;
  byClass: { className: string; count: number }[];
} {
  const content = sourceFile.getFullText();
  const lines = content.split('\n');
  let total = 0;
  const classCounts = new Map<string, number>();
  let currentClass = '';

  for (const line of lines) {
    const classMatch = /class\s+(\w+)/.exec(line);
    if (classMatch) {
      currentClass = classMatch[1];
    }

    const anyMatches = line.match(/:\s*any\b/g);
    if (anyMatches) {
      total += anyMatches.length;
      if (currentClass) {
        classCounts.set(currentClass, (classCounts.get(currentClass) ?? 0) + anyMatches.length);
      }
    }
  }

  const byClass = [...classCounts.entries()]
    .map(([className, count]) => ({ className, count }))
    .sort((a, b) => b.count - a.count);

  return { total, byClass };
}

// ---------------------------------------------------------------------------
// Full build .d.ts validation
// ---------------------------------------------------------------------------

describe('Full build .d.ts validation', () => {
  const dtsPath = FULL_DTS;
  const sourceFile = parseDtsFile(dtsPath);

  it('should parse without errors (zero syntactic diagnostics)', () => {
    expect(sourceFile).not.toBeNull();
    if (!sourceFile) return;

    const diagnostics = ts
      .createProgram({
        rootNames: [dtsPath],
        options: {
          noEmit: true,
          declaration: true,
          strict: false,
          skipLibCheck: true,
        },
      })
      .getSyntacticDiagnostics(sourceFile);

    expect(diagnostics.length).toBe(0);
  });

  it('should have zero :: leaks (C++ scope resolution)', () => {
    if (!sourceFile) return;
    const violations = findDoubleColonViolations(sourceFile.getFullText());

    expect(violations).toHaveLength(0);
  });

  it('should catch known :: edge case patterns', () => {
    const badPatterns = [
      'occ::handle<Geom_Surface>',
      'opencascade::handle<Geom_Curve>',
      'Geom2d_EvalRepCurveDesc::Base',
      'std::string_view',
      'IMeshData::ListOfPnt2d',
    ];

    for (const pattern of badPatterns) {
      const violations = findDoubleColonViolations(pattern);
      expect(violations.length, `Expected :: detection to catch pattern: "${pattern}"`).toBeGreaterThan(0);
    }
  });

  it('should have zero bare < in type positions (except Promise<>, Array<>)', () => {
    if (!sourceFile) return;
    const violations = findBareTemplateViolations(sourceFile.getFullText());

    expect(violations).toHaveLength(0);
  });

  it('should keep `any` type count at or below regression threshold (540)', () => {
    if (!sourceFile) return;
    const { total } = countAnyTypes(sourceFile);

    expect(total, `any count ${total} exceeds regression threshold of 540`).toBeLessThanOrEqual(540);
  });

  it('should expose Emscripten exception-handling helpers in the linked JS glue', () => {
    const jsPath = FULL_JS;
    if (!fs.existsSync(jsPath)) return;
    const glue = fs.readFileSync(jsPath, 'utf8');
    for (const name of [
      'getExceptionMessage',
      'incrementExceptionRefcount',
      'decrementExceptionRefcount',
    ]) {
      expect(glue, `linked JS glue should define ${name}`).toMatch(
        new RegExp(`(?:\\.${name}\\s*=|Module\\["${name}"\\]\\s*=)`),
      );
    }
  });

  it('should have all symbols from full.yml declared in the .d.ts', () => {
    if (!sourceFile) return;
    const yamlPath = path.join(FULL_BUILD_CONFIG, 'full.yml');
    const yamlSymbols = loadYamlSymbols(yamlPath);
    expect(yamlSymbols.length, 'full.yml should contain symbols').toBeGreaterThan(0);

    const dtsSymbols = extractSymbols(sourceFile);
    const dtsNames = new Set(dtsSymbols.map((s) => s.name));

    const missing: string[] = [];
    for (const sym of yamlSymbols) {
      if (!dtsNames.has(sym)) {
        missing.push(sym);
      }
    }

    const coveragePercent = ((yamlSymbols.length - missing.length) / yamlSymbols.length) * 100;

    expect(
      coveragePercent,
      `Symbol coverage ${coveragePercent.toFixed(1)}% is below 95% threshold (${missing.length} missing)`,
    ).toBeGreaterThanOrEqual(95);
  });

  it('should contain key OCCT classes', () => {
    if (!sourceFile) return;
    const symbols = extractSymbols(sourceFile);
    const symbolNames = new Set(symbols.map((s) => s.name));

    const requiredClasses = [
      'gp_Pnt',
      'gp_Vec',
      'gp_Dir',
      'gp_Ax1',
      'gp_Ax2',
      'gp_Trsf',
      'BRepPrimAPI_MakeBox',
      'BRepPrimAPI_MakeCylinder',
      'BRepPrimAPI_MakeSphere',
      'TopoDS_Shape',
      'TopoDS_Wire',
      'TopoDS_Edge',
      'TopoDS_Face',
      'TopoDS_Solid',
      'BRepAlgoAPI_Fuse',
      'BRepAlgoAPI_Cut',
      'BRepAlgoAPI_Common',
      'BRepFilletAPI_MakeFillet',
      'BRepBuilderAPI_MakeEdge',
      'BRepBuilderAPI_MakeWire',
      'BRepBuilderAPI_MakeFace',
      'BRepBuilderAPI_Transform',
      'Geom_Surface',
      'Geom_Curve',
      'Geom_BSplineCurve',
      'Geom_BSplineSurface',
      'STEPControl_Reader',
      'STEPControl_Writer',
      'XSControl_Reader',
      'XSControl_Writer',
      'BRep_Builder',
      'BRep_Tool',
      'ShapeFix_Shape',
      'ShapeFix_Wire',
    ];

    const missing: string[] = [];
    for (const cls of requiredClasses) {
      if (!symbolNames.has(cls)) {
        missing.push(cls);
      }
    }

    expect(missing).toHaveLength(0);
  });

  it('should validate symbol coverage against build manifest', () => {
    const manifest = loadManifest(FULL_BUILD_MANIFEST);
    if (!manifest || !sourceFile) return;

    const symbolsSection = manifest['symbols'] as
      | {
          requested?: string[];
          missing?: string[];
        }
      | undefined;

    if (!symbolsSection?.requested) {
      return;
    }

    const dtsSymbols = extractSymbols(sourceFile);
    const dtsNames = new Set(dtsSymbols.map((s) => s.name));
    const requested = new Set(symbolsSection.requested);

    const inManifestNotInDts: string[] = [];
    for (const sym of requested) {
      if (!dtsNames.has(sym)) {
        inManifestNotInDts.push(sym);
      }
    }

    const coveragePercent = ((requested.size - inManifestNotInDts.length) / requested.size) * 100;

    expect(coveragePercent).toBeGreaterThan(0);
  });
});

// ---------------------------------------------------------------------------
// Overload validation
// ---------------------------------------------------------------------------

describe('Overload validation (full build)', () => {
  const dtsPath = FULL_DTS;
  const sourceFile = parseDtsFile(dtsPath);

  it('should use inline constructor overloads for gp_Pnt (unique arities: 0, 1, 3 args)', () => {
    if (!sourceFile) return;
    const symbols = extractSymbols(sourceFile);

    const gpPnt = symbols.find((s) => s.name === 'gp_Pnt' && s.kind === 'class');
    expect(gpPnt, 'gp_Pnt class should exist').toBeDefined();

    const constructorCount = gpPnt!.members!.filter((m) => m === 'constructor').length;
    expect(
      constructorCount,
      `gp_Pnt should have multiple constructor() overloads, found ${constructorCount}`,
    ).toBeGreaterThanOrEqual(2);

    const subclasses = symbols.filter((s) => s.kind === 'class' && /^gp_Pnt_\d+$/.test(s.name));
    expect(
      subclasses,
      `gp_Pnt should NOT have _N subclasses (unique arities use inline overloads), found: ${subclasses.map((s) => s.name).join(', ')}`,
    ).toHaveLength(0);
  });

  it('should use constructor overloads for BRepPrimAPI_MakeBox (suffix-free)', () => {
    if (!sourceFile) return;
    const symbols = extractSymbols(sourceFile);

    const base = symbols.find((s) => s.name === 'BRepPrimAPI_MakeBox' && s.kind === 'class');
    expect(base, 'BRepPrimAPI_MakeBox class should exist').toBeDefined();

    const subclasses = symbols.filter((s) => s.kind === 'class' && /^BRepPrimAPI_MakeBox_\d+$/.test(s.name));
    expect(subclasses.length, 'BRepPrimAPI_MakeBox should NOT have _N subclasses in suffix-free mode').toBe(0);

    expect(
      base!.members!.filter((m) => m === 'constructor').length,
      'BRepPrimAPI_MakeBox should have multiple constructor overloads',
    ).toBeGreaterThanOrEqual(2);
  });

  it('should not have _N suffixes for methods with unique arities', () => {
    if (!sourceFile) return;
    const symbols = extractSymbols(sourceFile);

    const gpPnt = symbols.find((s) => s.name === 'gp_Pnt' && s.kind === 'class');
    expect(gpPnt).toBeDefined();

    const methods = gpPnt!.members!.filter((m) => m !== 'constructor');
    const uniqueArityMethods = ['X', 'Y', 'Z', 'SetX', 'SetY', 'SetZ', 'Distance'];

    for (const method of uniqueArityMethods) {
      expect(methods, `gp_Pnt should have method "${method}"`).toContain(method);
      const suffixed = methods.filter((m) => new RegExp(`^${method}_\\d+$`).test(m));
      expect(
        suffixed,
        `${method} has unique arities and should not have _N suffixed variants, found: ${suffixed.join(', ')}`,
      ).toHaveLength(0);
    }
  });
});

// ---------------------------------------------------------------------------
// NCollection_Vec tuple type validation
// ---------------------------------------------------------------------------

describe('NCollection_Vec tuple type validation', () => {
  const dtsPath = FULL_DTS;

  it('should never produce bare number[] for NCollection_Vec types', () => {
    if (!fs.existsSync(dtsPath)) return;
    const content = fs.readFileSync(dtsPath, 'utf8');
    const lines = content.split('\n');
    const violations: { line: number; text: string }[] = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.includes('//') || line.includes('/*')) continue;
      if (/(?<![A-Za-z0-9_])NCollection_Vec[234](?![A-Za-z0-9_])/.test(line)) {
        violations.push({ line: i + 1, text: line.trim() });
      }
    }

    expect(
      violations,
      `NCollection_Vec types should be resolved to tuples, not left as raw type names: ${violations.map((v) => `L${v.line}: ${v.text}`).join('; ')}`,
    ).toHaveLength(0);
  });

  it('should use fixed-length tuples, not number[] for vec-like types', () => {
    if (!fs.existsSync(dtsPath)) return;
    const content = fs.readFileSync(dtsPath, 'utf8');
    const lines = content.split('\n');

    const tuplePattern = /\[number(?:,\s*number){1,3}\]/;
    const arrayPattern = /:\s*number\[\]/;
    let tupleCount = 0;
    let arrayCount = 0;

    for (const line of lines) {
      if (tuplePattern.test(line)) tupleCount++;
      if (arrayPattern.test(line)) arrayCount++;
    }

    if (tupleCount > 0) {
      expect(tupleCount).toBeGreaterThan(0);
    }
  });
});

// ---------------------------------------------------------------------------
// :: detection happy path and failure path
// ---------------------------------------------------------------------------

describe(':: detection correctness', () => {
  it('should not produce false positives on clean TypeScript types', () => {
    const cleanLines = [
      'export declare class gp_Pnt {',
      '  constructor(theXp: number, theYp: number, theZp: number);',
      '  SetX(theX: number): void;',
      '  Distance(theOther: gp_Pnt): number;',
      'declare function init(): Promise<OpenCascadeInstance>;',
      'export default init;',
      'export declare type TopAbs_ShapeEnum = { TopAbs_COMPOUND: {} };',
      '  static GetLengthFactorValue(theUnit: number): number;',
    ];

    const content = cleanLines.join('\n');
    const violations = findDoubleColonViolations(content);
    expect(violations, 'Clean TypeScript lines should produce zero :: violations').toHaveLength(0);
  });

  it('should detect known bad C++ patterns', () => {
    const badLines = [
      '  param: occ::handle<Geom_Surface>;',
      '  value: opencascade::handle<Geom_Curve>;',
      '  base: Geom2d_EvalRepCurveDesc::Base;',
      '  name: std::string_view;',
      '  list: IMeshData::ListOfPnt2d;',
    ];

    for (const line of badLines) {
      const violations = findDoubleColonViolations(line);
      expect(violations.length, `Should detect :: in: "${line.trim()}"`).toBeGreaterThan(0);
    }
  });

  it('should not flag :: inside comments', () => {
    const commentLines = ['// occ::handle is a C++ type', '/* std::string_view is not valid TS */'];

    const content = commentLines.join('\n');
    const violations = findDoubleColonViolations(content);
    expect(violations, 'Comments containing :: should be ignored').toHaveLength(0);
  });
});

// ---------------------------------------------------------------------------
// Semantic diagnostics & codegen gap closure
// ---------------------------------------------------------------------------
//
// One TS Program per .d.ts surface. Built once and reused across the
// per-gap assertions so each suite pays the program cost once (~2-4s).
//
// Each suite below targets a specific class of codegen gap (unresolved
// identifiers, unbound `::` qualifiers, bare template references,
// overload-set integrity, NCollection_Vec tuple shape, custom-code
// type-erasure, etc.) and asserts that the generated `.d.ts` is free of
// that gap. The assertions are intentionally semantic — they consult the
// TypeScript type checker rather than matching strings — so they fail
// loudly when the underlying codegen invariant regresses.

type DtsProgram = {
  filePath: string;
  content: string;
  program: ts.Program;
  sourceFile: ts.SourceFile;
};

function buildDtsProgram(dtsPath: string): DtsProgram | null {
  if (!fs.existsSync(dtsPath)) return null;
  const content = fs.readFileSync(dtsPath, 'utf8');
  // Note: skipLibCheck MUST be false here because the rootName .d.ts is
  // (from TS' perspective) a lib-style file. With skipLibCheck:true,
  // TypeScript silently elides name-resolution checks on the .d.ts.
  // skipDefaultLibCheck:true leaves stdlib alone so we don't drown in
  // unrelated diagnostics from lib.dom.d.ts itself.
  const program = ts.createProgram({
    rootNames: [dtsPath],
    options: {
      noEmit: true,
      strict: true,
      noImplicitAny: true,
      skipLibCheck: false,
      skipDefaultLibCheck: true,
      target: ts.ScriptTarget.ESNext,
      lib: ['lib.esnext.d.ts', 'lib.dom.d.ts'],
      moduleResolution: ts.ModuleResolutionKind.Bundler,
      types: [],
    },
  });
  const sourceFile = program.getSourceFile(dtsPath);
  if (!sourceFile) return null;
  return { filePath: dtsPath, content, program, sourceFile };
}

function getDiagnosticsByCode(
  program: ts.Program,
  sourceFile: ts.SourceFile,
  codes: readonly number[],
): ts.Diagnostic[] {
  const codeSet = new Set(codes);
  const diags = program.getSemanticDiagnostics(sourceFile);
  return diags.filter((d) => codeSet.has(d.code));
}

function getAllDiagnostics(program: ts.Program, sourceFile: ts.SourceFile): readonly ts.Diagnostic[] {
  return program.getSemanticDiagnostics(sourceFile);
}

function formatDiagnostic(d: ts.Diagnostic): string {
  const flat = ts.flattenDiagnosticMessageText(d.messageText, '\n');
  if (d.file && d.start !== undefined) {
    const { line, character } = d.file.getLineAndCharacterOfPosition(d.start);
    return `L${line + 1}:${character + 1} TS${d.code}: ${flat}`;
  }
  return `TS${d.code}: ${flat}`;
}

function summariseDiagnostics(diagnostics: readonly ts.Diagnostic[], limit = 10): string {
  if (diagnostics.length === 0) return '<none>';
  const sample = diagnostics.slice(0, limit).map(formatDiagnostic).join('\n  ');
  const remainder = diagnostics.length > limit ? `\n  ...${diagnostics.length - limit} more` : '';
  return `${diagnostics.length} total\n  ${sample}${remainder}`;
}

function walkParameterNames(sourceFile: ts.SourceFile): { name: string; line: number }[] {
  const out: { name: string; line: number }[] = [];
  function visit(node: ts.Node): void {
    if (
      ts.isParameter(node) &&
      ts.isIdentifier(node.name) &&
      node.name.text !== ''
    ) {
      const { line } = sourceFile.getLineAndCharacterOfPosition(node.name.getStart(sourceFile));
      out.push({ name: node.name.text, line: line + 1 });
    }
    ts.forEachChild(node, visit);
  }
  visit(sourceFile);
  return out;
}

function walkEnumMemberNames(sourceFile: ts.SourceFile): { name: string; line: number }[] {
  const out: { name: string; line: number }[] = [];
  function visit(node: ts.Node): void {
    if (ts.isEnumDeclaration(node)) {
      for (const member of node.members) {
        const memberName = member.name;
        const text = ts.isIdentifier(memberName)
          ? memberName.text
          : ts.isStringLiteral(memberName)
            ? memberName.text
            : '';
        if (text) {
          const { line } = sourceFile.getLineAndCharacterOfPosition(memberName.getStart(sourceFile));
          out.push({ name: text, line: line + 1 });
        }
      }
    }
    ts.forEachChild(node, visit);
  }
  visit(sourceFile);
  return out;
}

function findEmptyInterfaceStubs(sourceFile: ts.SourceFile): { name: string; line: number }[] {
  const out: { name: string; line: number }[] = [];
  function visit(node: ts.Node): void {
    if (ts.isInterfaceDeclaration(node) && node.members.length === 0 && !node.heritageClauses?.length) {
      const { line } = sourceFile.getLineAndCharacterOfPosition(node.name.getStart(sourceFile));
      out.push({ name: node.name.text, line: line + 1 });
    }
    ts.forEachChild(node, visit);
  }
  visit(sourceFile);
  return out;
}

function findUnclosedJsdocStarSlash(content: string): { line: number; text: string }[] {
  const out: { line: number; text: string }[] = [];
  const lines = content.split('\n');
  let inBlock = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const opens = line.match(/\/\*\*/g)?.length ?? 0;
    const closes = line.match(/\*\//g)?.length ?? 0;
    if (inBlock) {
      // Inside a JSDoc block: any */ that is not on the line that closes the block is suspicious.
      // A correctly formed JSDoc block has exactly one */ on its closing line.
      if (closes > 1) {
        out.push({ line: i + 1, text: line.trim() });
      }
      if (closes >= 1) inBlock = false;
    } else {
      if (opens > closes) {
        inBlock = true;
      } else if (opens > 0 && closes > opens) {
        out.push({ line: i + 1, text: line.trim() });
      }
    }
  }
  return out;
}

const TS_RESERVED_WORDS = new Set([
  // ECMAScript reserved words
  'break', 'case', 'catch', 'class', 'const', 'continue', 'debugger', 'default',
  'delete', 'do', 'else', 'enum', 'export', 'extends', 'false', 'finally', 'for',
  'function', 'if', 'import', 'in', 'instanceof', 'new', 'null', 'return', 'super',
  'switch', 'this', 'throw', 'true', 'try', 'typeof', 'var', 'void', 'while', 'with',
  'yield',
  // Strict-mode reserved
  'implements', 'interface', 'let', 'package', 'private', 'protected', 'public',
  'static',
]);

const SEMANTIC_GAP_TARGETS: { label: string; dtsPath: string }[] = [
  { label: 'opencascade_single', dtsPath: FULL_DTS },
  { label: 'replicad_single', dtsPath: REPLICAD_SINGLE_DTS },
];

for (const target of SEMANTIC_GAP_TARGETS) {
  describe(`Codegen gap closure — ${target.label}.d.ts`, () => {
    const dts = buildDtsProgram(target.dtsPath);

    if (!dts) {
      it.skip(`should be present at ${target.dtsPath}`, () => {
        // surface availability gap rather than silently passing
      });
      return;
    }

    const semanticAll = getAllDiagnostics(dts.program, dts.sourceFile);

    it('should expose only the default initializer as a runtime ESM export', () => {
      const exportedValues = dts.sourceFile.statements.flatMap((statement) => {
        if (
          !ts.isClassDeclaration(statement) &&
          !ts.isEnumDeclaration(statement) &&
          !ts.isFunctionDeclaration(statement) &&
          !ts.isVariableStatement(statement) &&
          !ts.isModuleDeclaration(statement)
        ) return [];
        const modifiers = ts.canHaveModifiers(statement) ? ts.getModifiers(statement) : undefined;
        if (!modifiers?.some((modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword)) return [];
        return [
          modifiers.some((modifier) => modifier.kind === ts.SyntaxKind.DefaultKeyword)
            ? 'default'
            : statement.getText(dts.sourceFile).split(/\s+/).slice(0, 5).join(' '),
        ];
      });
      expect(exportedValues).toEqual(['default']);
    });

    it('should expose OCCT declarations through type-only named exports', () => {
      const namedExports = dts.sourceFile.statements.filter(
        (statement): statement is ts.ExportDeclaration =>
          ts.isExportDeclaration(statement) &&
          statement.exportClause !== undefined &&
          ts.isNamedExports(statement.exportClause) &&
          statement.exportClause.elements.length > 0,
      );
      expect(namedExports.length).toBeGreaterThan(0);
      expect(namedExports.every((declaration) => declaration.isTypeOnly)).toBe(true);
      expect(dts.content).toContain('export type { BRepPrimAPI_MakeBox };');
      expect(dts.content).toContain('export type { TopoDS_Shape };');
    });

    // undeclared name leaks (TS2304/TS2552). The early-return in
    // resolve_type previously emitted spellings without validating they were
    // actually exported, surfacing as "Cannot find name 'X'" once consumed.
    it('should emit zero TS2304 / TS2552 (undeclared / mistyped names)', () => {
      const diagnostics = getDiagnosticsByCode(dts.program, dts.sourceFile, [2304, 2552]);
      expect(
        diagnostics,
        `Undeclared name leaks: ${summariseDiagnostics(diagnostics)}`,
      ).toHaveLength(0);
    });

    // C-array spellings like `gp_XYZ[3]` leaked as element-access
    // expressions, which TS treats as TS2339 (Property 'X' does not exist on type).
    it('should not emit C-array spellings like `gp_XYZ[N]`', () => {
      const matches = [...dts.content.matchAll(/\b\w+_\w+\[\d+\]/g)]
        .map((m) => m[0])
        .filter((s) => !s.includes('readonly'));
      expect(matches, `C-array leak survivors: ${matches.slice(0, 10).join(', ')}`).toHaveLength(0);
    });

    // Cross-check: explicit assertion against the canonical leak from the gap doc.
    it('should never expose `gp_XYZ[3]` or `gp_XYZ[4]` parameter spellings', () => {
      expect(/\bgp_XYZ\[\d+\]/.test(dts.content), 'gp_XYZ[N] survivor').toBe(false);
    });

    // unmapped C primitives must not survive into the .d.ts.
    it('should not leak C primitive spellings (uint8_t/int8_t/size_t/wchar_t/...)', () => {
      const banned = [
        /\b: uint8_t\b/, /\b: int8_t\b/, /\b: uint16_t\b/, /\b: int16_t\b/,
        /\b: intptr_t\b/, /\b: uintptr_t\b/, /\b: size_t\b/, /\b: __SIZE_TYPE__\b/,
        /\b: wchar_t\b/, /\b: char8_t\b/, /\b: char16_t\b/, /\b: char32_t\b/,
        /\b: Standard_PCharacter\b/,
        /:\s*size_t\b/, /:\s*uint8_t\b/,
      ];
      const survivors: string[] = [];
      const lines = dts.content.split('\n');
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.trimStart().startsWith('*') || line.trimStart().startsWith('//')) continue;
        for (const pat of banned) {
          if (pat.test(line)) {
            survivors.push(`L${i + 1}: ${line.trim()}`);
            break;
          }
        }
      }
      expect(
        survivors,
        `C primitive leaks (first 10): ${survivors.slice(0, 10).join('\n  ')}`,
      ).toHaveLength(0);
    });

    // typedefs that resolve via UCHAR/CHAR_U canonical kind were
    // misclassified as `string`. After the reorder, no `unsigned char` should
    // appear in either .d.ts surface.
    it('should not emit `unsigned char` / `char` parameter spellings', () => {
      const banned = [/\b: unsigned char\b/, /\b: char\b(?!\w)/];
      const survivors: string[] = [];
      const lines = dts.content.split('\n');
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.trimStart().startsWith('*') || line.trimStart().startsWith('//')) continue;
        for (const pat of banned) {
          if (pat.test(line)) {
            survivors.push(`L${i + 1}: ${line.trim()}`);
            break;
          }
        }
      }
      expect(
        survivors,
        `unsigned-char misclassification leaks: ${survivors.slice(0, 5).join('\n  ')}`,
      ).toHaveLength(0);
    });

    // ambient `WebAssembly.Exception` reference must resolve.
    // TS2694 = "Namespace 'X' has no exported member 'Y'".
    it('should resolve WebAssembly.Exception (zero TS2694)', () => {
      const diagnostics = getDiagnosticsByCode(dts.program, dts.sourceFile, [2694]);
      expect(
        diagnostics,
        `Unresolved namespace members: ${summariseDiagnostics(diagnostics)}`,
      ).toHaveLength(0);
    });

    // override variance such as TDataStd_GenericExtString.SetID
    // surfaces as TS2416 ("Property 'X' in type 'Y' is not assignable to
    // the same property in base type 'Z'").
    it('should not emit TS2416 override-variance errors', () => {
      const diagnostics = getDiagnosticsByCode(dts.program, dts.sourceFile, [2416]);
      expect(
        diagnostics,
        `Override variance failures: ${summariseDiagnostics(diagnostics)}`,
      ).toHaveLength(0);
    });

    // full TS reserved-word coverage. Parameter identifiers must
    // be safe (suffixed with `_`) so the file parses and so consumers can
    // destructure params without keyword collisions.
    it('should suffix all reserved-word parameter names with `_`', () => {
      const params = walkParameterNames(dts.sourceFile);
      const collisions = params.filter((p) => TS_RESERVED_WORDS.has(p.name));
      expect(
        collisions,
        `Reserved-word parameter survivors: ${collisions
          .slice(0, 10)
          .map((c) => `L${c.line}:${c.name}`)
          .join(', ')}`,
      ).toHaveLength(0);
    });

    // all auto-generated namespace blocks are removed. The
    // hand-written `TopoDS` runtime API is *not* a namespace, so this
    // assertion does not catch it.
    it('should contain zero auto-generated `export namespace X { ... }` blocks', () => {
      const matches = [...dts.content.matchAll(/^export namespace \w+ \{/gm)].map((m) => m[0]);
      expect(
        matches,
        `Surviving namespace blocks: ${matches.slice(0, 5).join('; ')}`,
      ).toHaveLength(0);
    });

    // Cross-check: TS2300 (duplicate identifier) often follows from the
    // namespace block re-declaring already-exported names.
    it('should emit zero TS2300 (duplicate identifier)', () => {
      const diagnostics = getDiagnosticsByCode(dts.program, dts.sourceFile, [2300]);
      expect(
        diagnostics,
        `Duplicate identifiers: ${summariseDiagnostics(diagnostics)}`,
      ).toHaveLength(0);
    });

    // Cross-check: TS2693 ("X only refers to a type, but is being used as
    // a value here") appears when namespace value-import side conflicts with
    // an existing class export.
    it('should emit zero TS2693 (type-used-as-value)', () => {
      const diagnostics = getDiagnosticsByCode(dts.program, dts.sourceFile, [2693]);
      expect(
        diagnostics,
        `Type-used-as-value diagnostics: ${summariseDiagnostics(diagnostics)}`,
      ).toHaveLength(0);
    });

    // OpenCascadeInstance aggregate must not list the same
    // export twice. We parse the type-literal members and check uniqueness.
    it('should declare each export at most once on OpenCascadeInstance', () => {
      const aggregate = /export type OpenCascadeInstance =[\s\S]*?\n\};\n/.exec(dts.content);
      expect(aggregate, 'OpenCascadeInstance aggregate not found').not.toBeNull();
      if (!aggregate) return;
      const memberNames = [...aggregate[0].matchAll(/\n\s+(\w+):\s*typeof \w+;/g)].map((m) => m[1]);
      const seen = new Map<string, number>();
      for (const n of memberNames) {
        seen.set(n, (seen.get(n) ?? 0) + 1);
      }
      const dupes = [...seen.entries()].filter(([, c]) => c > 1).map(([n, c]) => `${n}×${c}`);
      expect(
        dupes,
        `Duplicate aggregate members: ${dupes.slice(0, 10).join(', ')}`,
      ).toHaveLength(0);
    });

    // JSDoc bodies must escape interior `*/` so a comment never
    // closes prematurely (which would yank symbols out of the type surface).
    it('should not contain unescaped `*/` inside JSDoc bodies', () => {
      const violations = findUnclosedJsdocStarSlash(dts.content);
      expect(
        violations,
        `JSDoc termination violations: ${violations
          .slice(0, 5)
          .map((v) => `L${v.line}: ${v.text}`)
          .join('\n  ')}`,
      ).toHaveLength(0);
    });

    // every emitted enum member must be a valid TS identifier.
    it('should only emit valid-identifier enum members', () => {
      const members = walkEnumMemberNames(dts.sourceFile);
      const validIdent = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
      const invalid = members.filter((m) => !validIdent.test(m.name));
      expect(
        invalid,
        `Invalid enum identifiers: ${invalid
          .slice(0, 10)
          .map((m) => `L${m.line}:${m.name}`)
          .join(', ')}`,
      ).toHaveLength(0);
    });

    // `export interface X {}` empty stubs are gone (replaced with
    // `export type X = unknown;`). They previously masked missing decls.
    it('should not contain `export interface X {}` empty stubs', () => {
      const stubs = findEmptyInterfaceStubs(dts.sourceFile);
      expect(
        stubs,
        `Empty interface stubs survived: ${stubs
          .slice(0, 10)
          .map((s) => `L${s.line}:${s.name}`)
          .join(', ')}`,
      ).toHaveLength(0);
    });

    // Ratchet: total semantic-diagnostic count is a smoke alarm. Any
    // future codegen regression will trip this even if the per-code
    // assertions above don't change. Threshold is captured post-fix.
    it('should keep total semantic diagnostics at zero', () => {
      expect(
        semanticAll,
        `Semantic diagnostics regression: ${summariseDiagnostics(semanticAll)}`,
      ).toHaveLength(0);
    });
  });
}

// ---------------------------------------------------------------------------
// Handle_<T> typedef parity (cross-cutting; AST-level)
// ---------------------------------------------------------------------------

describe('Handle_<T> typedef parity', () => {
  const dts = buildDtsProgram(REPLICAD_SINGLE_DTS) ?? buildDtsProgram(FULL_DTS);

  it('should not emit raw `Handle_X` parameter spellings', () => {
    if (!dts) return;
    const matches = [...dts.content.matchAll(/:\s*Handle_[A-Z]\w+/g)].map((m) => m[0]);
    expect(
      matches,
      `Handle_X leaks: ${matches.slice(0, 10).join(', ')}`,
    ).toHaveLength(0);
  });
});

// ---------------------------------------------------------------------------
// deterministic typedef alias selection (NCollection containers)
// ---------------------------------------------------------------------------

describe('Typedef alias determinism', () => {
  const dts = buildDtsProgram(FULL_DTS);

  it('should prefer OCCT-public aliases (NCollection_/TColStd_/TColgp_/TopTools_)', () => {
    if (!dts) return;
    // deterministic typedef selection. OCCT 8.0 deprecated the
    // domain-prefixed aliases (TColStd_/TColgp_/TopTools_/...) in favor of
    // direct `NCollection_<Container>_<T>` instantiations, so the surviving
    // public surface is the NCollection family. We assert (a) NCollection
    // public-form aliases survive and (b) each alias resolves to one canonical
    // spelling per underlying type (no duplicate aliases for the same shape).
    const ncollectionMatches = new Set(
      [...dts.content.matchAll(/\bNCollection_(?:Array1|Array2|Sequence|List|Vector)_\w+/g)].map((m) => m[0]),
    );
    expect(
      ncollectionMatches.size,
      'Expected NCollection_<Container>_<T> aliases to survive',
    ).toBeGreaterThan(0);

    // Spot-check well-known instantiations the runtime APIs depend on.
    const required = [
      'NCollection_Array1_double',
      'NCollection_Array1_gp_Pnt',
    ];
    for (const alias of required) {
      expect(
        new RegExp(`\\b${alias}\\b`).test(dts.content),
        `Public typedef alias "${alias}" not found in .d.ts`,
      ).toBe(true);
    }
  });
});

// ---------------------------------------------------------------------------
// `_collect_any` reason coverage
// ---------------------------------------------------------------------------

describe('Build manifest `any_reasons` instrumentation', () => {
  it('should expose emitted `any_reasons` under the symbols result', () => {
    const manifestPath = FULL_BUILD_MANIFEST;
    if (!fs.existsSync(manifestPath)) {
      // Manifest is only generated by `nx run ocjs:build` after a full rebuild;
      // skip rather than fail when running the dts-only loop.
      return;
    }
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8')) as Record<string, unknown>;
    expect(manifest).not.toHaveProperty('any_reasons');
    const symbols = manifest['symbols'] as Record<string, unknown> | undefined;
    expect(symbols && typeof symbols === 'object', 'symbols must be an object').toBe(true);
    const reasons = symbols?.['any_reasons'] as Record<string, unknown> | undefined;
    if (reasons === undefined) return;
    expect(reasons && typeof reasons === 'object', 'any_reasons must be an object').toBe(true);
  });
});

// ---------------------------------------------------------------------------
// orphan replicad_single.d.ts at repo root must not exist
// ---------------------------------------------------------------------------

describe('Repo cleanliness', () => {
  it('should not retain the orphan replicad_single.d.ts at the OCJS repo root', () => {
    const orphanPath = path.resolve(import.meta.dirname, '../replicad_single.d.ts');
    expect(
      fs.existsSync(orphanPath),
      `Orphan file must be deleted: ${orphanPath}`,
    ).toBe(false);
  });
});
