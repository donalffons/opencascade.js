/** Verify seed scanning, dependency closure, and `check` diagnostics. */
import { execFileSync } from 'node:child_process';
import * as path from 'node:path';

import { describe, expect, it } from 'vitest';

import { loadBuildConfig } from '../src/cli.ts';
import {
  blankComments,
  CAVEATS,
  type CatalogSymbol,
  check,
  closeOverCatalog,
  collectSourceFiles,
  detect,
  expandAliases,
  loadSymbolCatalog,
  renderBindings,
  resolveSymbolName,
  scanSources,
  type SymbolCatalog,
  toDetectJson,
} from '../src/detect/index.ts';

const PACKAGE_ROOT = path.resolve(import.meta.dirname, '..');
const BIN = path.join(PACKAGE_ROOT, 'bin/libcascade.mjs');
const DEMO_CONFIG = path.join(PACKAGE_ROOT, 'test/fixture/libcascade.config.ts');
const BOUND_SRC = path.join(PACKAGE_ROOT, 'test/fixtures/detect/bound/src');
const UNBOUND_SRC = path.join(PACKAGE_ROOT, 'test/fixtures/detect/unbound/src');

const catalog = loadSymbolCatalog();

/** Run the bin, returning stdout, stderr and the exit status. */
const runCli = (args: readonly string[]): { stdout: string; stderr: string; status: number } => {
  try {
    return {
      stdout: execFileSync(process.execPath, [BIN, ...args], { encoding: 'utf8', cwd: PACKAGE_ROOT }),
      stderr: '',
      status: 0,
    };
  } catch (error) {
    const failure = error as { stdout?: string; stderr?: string; status?: number };
    return { stdout: failure.stdout ?? '', stderr: failure.stderr ?? '', status: failure.status ?? 1 };
  }
};

describe('blankComments', () => {
  it('blanks line and block comments without moving any line number', () => {
    const source = ['const a = 1; // oc.ChFi2d_FilletAPI', '/* oc.gp_Pnt', '   still comment */', 'const b = 2;'].join('\n');
    const blanked = blankComments(source);
    expect(blanked.split('\n')).toHaveLength(4);
    expect(blanked).not.toContain('ChFi2d_FilletAPI');
    expect(blanked).not.toContain('gp_Pnt');
    expect(blanked.split('\n')[3]).toBe('const b = 2;');
  });

  it('leaves string literals intact so a `//` inside one cannot blank the line', () => {
    const blanked = blankComments("const url = 'https://x/y'; const p = new oc.gp_Pnt();");
    expect(blanked).toContain('oc.gp_Pnt');
    expect(blanked).toContain('https://x/y');
  });
});

describe('resolveSymbolName', () => {
  it('resolves an exact catalog name', () => {
    expect(resolveSymbolName('gp_Pnt', catalog)).toBe('gp_Pnt');
  });

  it('strips a d.ts overload suffix down to the bound base class', () => {
    expect(resolveSymbolName('BRepPrimAPI_MakeBox_2', catalog)).toBe('BRepPrimAPI_MakeBox');
    expect(resolveSymbolName('Geom2d_Line_1', catalog)).toBe('Geom2d_Line');
  });

  it('prefers the full name, keeping the one real symbol that ends in digits', () => {
    expect(resolveSymbolName('PCDM_ReadWriter_1', catalog)).toBe('PCDM_ReadWriter_1');
  });

  it('returns undefined for a non-symbol token', () => {
    expect(resolveSymbolName('ReplicadMeshExtractor', catalog)).toBeUndefined();
    expect(resolveSymbolName('wasmMemory', catalog)).toBeUndefined();
  });
});

describe('collectSourceFiles', () => {
  it('skips .d.ts and build-output directories', () => {
    const files = collectSourceFiles(BOUND_SRC).map((file) => path.relative(BOUND_SRC, file));
    expect(files).toStrictEqual([path.join('nested', 'helper.js'), 'shapes.ts']);
  });
});

describe('scanSources', () => {
  const scan = scanSources([BOUND_SRC], catalog);

  it('seeds from `oc.X`, bare tokens and bracket access, after overload strip', () => {
    expect([...scan.referenced.keys()].sort()).toStrictEqual(['BRepPrimAPI_MakeBox', 'gp_Pnt']);
  });

  it('reports non-catalog `oc.*` members separately, never as references', () => {
    expect([...scan.unresolved.keys()].sort()).toStrictEqual(['DemoWrapper', 'FS']);
  });

  it('does not seed a single-word catalog name written as a bare identifier', () => {
    // `Draft` is a catalog class; `const Draft = …` in the fixture must not bind it.
    expect(scan.referenced.has('Draft')).toBe(false);
  });

  it('never seeds an unconditionally registered builtin', () => {
    const oneLiner = scanSources([path.join(BOUND_SRC, 'shapes.ts')], catalog);
    expect(oneLiner.referenced.has('OCJS')).toBe(false);
    expect(oneLiner.referenced.has('TopoDS')).toBe(false);
  });

  it('records a 1-based file:line for the first reference', () => {
    const reference = scan.referenced.get('gp_Pnt');
    expect(reference?.line).toBeGreaterThan(0);
    expect(reference?.file.endsWith('.js') || reference?.file.endsWith('.ts')).toBe(true);
  });
});

describe('closeOverCatalog', () => {
  const fixture: SymbolCatalog = new Map<string, CatalogSymbol>([
    ['Leaf', { name: 'Leaf', kind: 'class', parents: ['Middle', 'NotBindable'], referencedTypes: ['Ref'] }],
    ['Middle', { name: 'Middle', kind: 'class', parents: ['Root'] }],
    ['Root', { name: 'Root', kind: 'class' }],
    ['Ref', { name: 'Ref', kind: 'class', referencedTypes: ['Deep'] }],
    ['Deep', { name: 'Deep', kind: 'class' }],
    ['Unrelated', { name: 'Unrelated', kind: 'class' }],
    ['Builtin', { name: 'Builtin', kind: 'builtin' }],
  ]);

  it('walks ancestors and member types to a fixpoint', () => {
    const closed = closeOverCatalog(['Leaf'], fixture);
    expect([...closed.keys()].sort()).toStrictEqual(['Deep', 'Leaf', 'Middle', 'Ref', 'Root']);
  });

  it('skips parents that are not in the bindable universe', () => {
    expect(closeOverCatalog(['Leaf'], fixture).has('NotBindable')).toBe(false);
  });

  it('skips builtins, which every build registers regardless of `bindings`', () => {
    const withBuiltin: SymbolCatalog = new Map(fixture).set('Leaf', {
      name: 'Leaf',
      kind: 'class',
      referencedTypes: ['Builtin'],
    });
    expect(closeOverCatalog(['Leaf'], withBuiltin).has('Builtin')).toBe(false);
  });

  it('records provenance: seed, base of X, member type of X', () => {
    const closed = closeOverCatalog(['Leaf'], fixture);
    expect(closed.get('Leaf')).toStrictEqual({ kind: 'seed', file: '', line: 0 });
    expect(closed.get('Middle')).toStrictEqual({ kind: 'base', of: 'Leaf' });
    expect(closed.get('Ref')).toStrictEqual({ kind: 'member', of: 'Leaf' });
    expect(closed.get('Deep')).toStrictEqual({ kind: 'member', of: 'Ref' });
  });

  it('ignores seeds outside the universe', () => {
    expect(closeOverCatalog(['Nope'], fixture).size).toBe(0);
  });
});

describe('expandAliases', () => {
  it('resolves a typedef alias to the class the bindgen registers, and back', () => {
    expect(expandAliases(['TColgp_Array1OfPnt'], catalog).has('NCollection_Array1_gp_Pnt')).toBe(true);
    expect(expandAliases(['NCollection_List_TopoDS_Shape'], catalog).has('TopTools_ListOfShape')).toBe(true);
  });
});

describe('detect', () => {
  const options = { roots: [BOUND_SRC], baseDirectory: PACKAGE_ROOT };
  const result = detect(options);

  it('returns the seeds plus their closure, sorted', () => {
    expect(result.bindings.length).toBeGreaterThan(result.scan.referenced.size);
    expect(result.bindings).toStrictEqual([...result.bindings].sort((a, b) => a.localeCompare(b)));
    expect(result.bindings).toContain('BRepBuilderAPI_MakeShape'); // base of BRepPrimAPI_MakeBox
    expect(result.bindings).toContain('gp_XYZ'); // member type of gp_Pnt
  });

  it('renders a paste-ready fragment carrying every caveat and per-symbol provenance', () => {
    const rendered = renderBindings(result, options);
    for (const caveat of CAVEATS) expect(rendered).toContain(caveat);
    expect(rendered).toContain('STARTING SET, not a minimal set');
    expect(rendered).toMatch(/'BRepPrimAPI_MakeBox', \/\/ seed: test\/fixtures\/detect\/bound\/src\/\S+:\d+/);
    expect(rendered).toContain("'BRepBuilderAPI_MakeShape', // closure: base of BRepPrimAPI_MakeBox");
    expect(rendered).toContain("'gp_XYZ', // closure: member type of gp_Pnt");
    expect(rendered).toContain('  bindings: [');
    // Custom bindings surface as a note, never as a proposed OCCT binding.
    expect(rendered).toContain('DemoWrapper');
    expect(rendered).not.toContain("'DemoWrapper',");
  });

  it('keeps user-facing caveats independent of internal planning documents', () => {
    const caveats = CAVEATS.join('\n');
    expect(caveats).not.toContain('docs/research/');
    expect(caveats).not.toContain('/Users/');
  });

  it('emits the same information as JSON', () => {
    const json = toDetectJson(result, options);
    expect(json.caveats).toStrictEqual(CAVEATS);
    expect(json.bindings).toStrictEqual(result.bindings);
    expect(json.unresolved).toStrictEqual([
      { name: 'DemoWrapper', file: expect.stringContaining('shapes.ts') as unknown as string, line: expect.any(Number) as unknown as number },
      { name: 'FS', file: expect.stringContaining('shapes.ts') as unknown as string, line: expect.any(Number) as unknown as number },
    ]);
  });
});

describe('check', () => {
  it('passes when every referenced symbol is bound', async () => {
    const { config } = await loadBuildConfig(DEMO_CONFIG);
    const result = check(config, [BOUND_SRC], catalog);
    expect(result.missing).toStrictEqual([]);
    expect(result.referencedCount).toBe(2);
  });

  it('reports drift with the first reference site', async () => {
    const { config } = await loadBuildConfig(DEMO_CONFIG);
    const result = check(config, [UNBOUND_SRC], catalog);
    expect(result.missing.map((reference) => reference.symbol)).toStrictEqual([
      'ChFi2d_FilletAPI',
      'TopoDS_Wire',
    ]);
    expect(result.missing[0]?.file).toContain('fillet.ts');
    expect(result.missing[0]?.line).toBeGreaterThan(0);
  });

  it('accepts a symbol bound under its typedef alias', () => {
    const config = {
      name: 'alias-demo',
      bindings: ['TColgp_Array1OfPnt'],
      variants: [{ name: 'single' }],
    };
    const scanned = check(config, [BOUND_SRC], catalog);
    expect(scanned.missing.map((reference) => reference.symbol)).not.toContain(
      'NCollection_Array1_gp_Pnt',
    );
  });
});

describe('libcascade detect / check CLI', () => {
  it('detect prints the fragment', () => {
    const { stdout, status } = runCli(['detect', 'test/fixtures/detect/bound/src']);
    expect(status).toBe(0);
    expect(stdout).toContain('STARTING SET, not a minimal set');
    expect(stdout).toContain("'BRepPrimAPI_MakeBox',");
  });

  it('detect --json emits parseable JSON', () => {
    const { stdout } = runCli(['detect', 'test/fixtures/detect/bound/src', '--json']);
    const parsed = JSON.parse(stdout) as { bindings: string[]; caveats: string[] };
    expect(parsed.bindings).toContain('gp_Pnt');
    expect(parsed.caveats).toStrictEqual(CAVEATS);
  });

  it('check exits 0 on a config that binds everything referenced', () => {
    const { stdout, status } = runCli([
      'check',
      'test/fixtures/detect/bound/src',
      '--config',
      'test/fixture/libcascade.config.ts',
    ]);
    expect(status).toBe(0);
    expect(stdout).toContain('all bound');
  });

  it('check exits 1 naming the symbol, its file:line, and the fix', () => {
    const { stderr, status } = runCli([
      'check',
      'test/fixtures/detect/unbound/src',
      '--config',
      'test/fixture/libcascade.config.ts',
    ]);
    expect(status).toBe(1);
    expect(stderr).toContain('ChFi2d_FilletAPI');
    expect(stderr).toMatch(/first referenced at test\/fixtures\/detect\/unbound\/src\/fillet\.ts:\d+/);
    expect(stderr).toContain("Fix: add them to `bindings` in test/fixture/libcascade.config.ts");
    expect(stderr).toContain("    'ChFi2d_FilletAPI',");
    expect(stderr).toContain('does NOT fail `libcascade build`');
  });

  it('check --verbose lists the ignored non-OCCT members', () => {
    const { stdout } = runCli([
      'check',
      'test/fixtures/detect/bound/src',
      '--verbose',
      '--config',
      'test/fixture/libcascade.config.ts',
    ]);
    expect(stdout).toContain('ignored (not an OCCT symbol): DemoWrapper');
    expect(stdout).toContain('ignored (not an OCCT symbol): FS');
  });

  it('requires at least one source directory', () => {
    const { stderr, status } = runCli(['detect']);
    expect(status).toBe(1);
    expect(stderr).toContain('needs at least one source directory');
  });

  it('names detect and check in the usage text as onboarding/drift tools', () => {
    const { stdout } = runCli(['--help']);
    expect(stdout).toContain('libcascade detect <srcDir…>');
    expect(stdout).toContain('libcascade check <srcDir…>');
    expect(stdout).toContain('not size optimizers');
  });
});
