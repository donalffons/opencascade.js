/**
 * Validates generated Embind C++ and TypeScript declarations for return-by-value output parameters.
 * Generated lambdas accept caller-owned output values, forward them to C++, attach disposal to
 * result containers, and keep all corresponding declaration parameters required.
 */
import { describe, it, expect } from 'vitest';
import * as fs from 'node:fs';
import * as path from 'node:path';

const BINDINGS_DIR = path.resolve(import.meta.dirname, '../build/bindings');
const DIST_DTS_PATH = path.resolve(import.meta.dirname, '../dist/opencascade_single.d.ts');
const BUILD_CONFIGS_DTS_PATH = path.resolve(
  import.meta.dirname,
  '../dist/opencascade_single.d.ts',
);
const DTS_PATH = fs.existsSync(DIST_DTS_PATH) ? DIST_DTS_PATH : BUILD_CONFIGS_DTS_PATH;

function bindingsExist(): boolean {
  return fs.existsSync(BINDINGS_DIR) && fs.statSync(BINDINGS_DIR).isDirectory();
}

function walkBindingCpps(): string[] {
  const out: string[] = [];
  const stack: string[] = [BINDINGS_DIR];
  while (stack.length) {
    const dir = stack.pop();
    if (!dir) continue;
    let entries: fs.Dirent[];
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
      continue;
    }
    for (const ent of entries) {
      const full = path.join(dir, ent.name);
      if (ent.isDirectory()) {
        stack.push(full);
      } else if (ent.isFile() && ent.name.endsWith('.cpp')) {
        out.push(full);
      }
    }
  }
  return out;
}

function readBindingFile(relCandidates: string[]): string | null {
  for (const rel of relCandidates) {
    const full = path.join(BINDINGS_DIR, rel);
    if (fs.existsSync(full)) return fs.readFileSync(full, 'utf8');
  }
  return null;
}

const lambdaBlockRe = /optional_override\(\[\][^{]*?-> *[\w:]+ *\{([\s\S]*?)\}\)/g;

describe.skipIf(!bindingsExist())('Generated bindings shape — input-passthrough RBV', () => {
  it('no lambda body default-initializes an output param before forwarding', () => {
    const files = walkBindingCpps();
    expect(files.length).toBeGreaterThan(0);

    // Patterns the legacy (pre-Option B) lambda body produced:
    //   double theX = 0;
    //   Handle<Geom_Curve> theCurve;
    //   TopAbs_Orientation theOri{};
    // followed by `self.<Method>(theX, ...)` or `Class::Method(theX, ...)`.
    // Under input-passthrough RBV every output param is a lambda input so
    // none of these forms should appear in any emitted result-struct lambda.
    const forbidden = [
      /\b(?:double|int|float|bool|Standard_(?:Real|Integer|Boolean|ShortReal))\s+\w+\s*=\s*0\s*;\s*\n\s*(?:auto\s+ret\s*=\s*)?(?:self\.|[\w:]+::)/m,
      /\bHandle<[^>]+>\s+\w+\s*;\s*\n\s*(?:auto\s+ret\s*=\s*)?(?:self\.|[\w:]+::)/m,
      /\bopencascade::handle<[^>]+>\s+\w+\s*;\s*\n\s*(?:auto\s+ret\s*=\s*)?(?:self\.|[\w:]+::)/m,
    ];

    const offenders: string[] = [];
    for (const file of files) {
      const src = fs.readFileSync(file, 'utf8');
      // Restrict the scan to the bodies inside `optional_override([...]) -> *_Result { ... }`
      // so unrelated machinery (e.g. legitimate local temporaries in non-RBV
      // wrappers) doesn't trip the guard.
      let match: RegExpExecArray | null;
      const re = new RegExp(lambdaBlockRe.source, 'g');
      while ((match = re.exec(src)) !== null) {
        const body = match[1];
        if (!body) continue;
        for (const pattern of forbidden) {
          if (pattern.test(body)) {
            offenders.push(`${path.relative(BINDINGS_DIR, file)}: ${body.trim().slice(0, 200)}`);
            break;
          }
        }
      }
    }

    expect(offenders, `Found ${offenders.length} legacy default-init RBV lambdas; first 3:\n${offenders.slice(0, 3).join('\n---\n')}`).toHaveLength(0);
  });

  it('gp_Trsf.cpp: primitive in/out Transforms forwards caller-supplied X/Y/Z', () => {
    const src = readBindingFile(['FoundationClasses/TKMath/gp/gp_Trsf.hxx/gp_Trsf.cpp']);
    if (src === null) return;

    // The input-passthrough lambda must preserve caller-supplied values while
    // allowing the trailing slots to be omitted.
    const transformsBlock =
      /optional_override\(\[\]\(const gp_Trsf& self, std::optional<double> theX, std::optional<double> theY, std::optional<double> theZ\)[\s\S]*?self\.Transforms\(_ocjs_theX, _ocjs_theY, _ocjs_theZ\)/;
    expect(
      transformsBlock.test(src),
      'gp_Trsf::Transforms lambda must unwrap and forward all three optional input/output params',
    ).toBe(true);

    expect(
      /optional_override\(\[\]\(const gp_Trsf& self\)[^{]*\{[\s\S]*?double theX\s*=\s*0\s*;/m.test(src),
      'gp_Trsf::Transforms lambda must NOT default-init theX = 0 (historical zero-input bug)'
    ).toBe(false);
  });

  it('val::object()+dispose attachment present for at least one Handle-output RBV method', () => {
    // After minimal-transformation RBV: only Handle
    // outputs (and Handle / class C++ returns) drive the val::object + dispose
    // path. Concrete class outputs are mutated in place and do NOT touch the
    // envelope at all — they cannot satisfy this guard.
    const files = walkBindingCpps();
    let foundValObject = false;
    let foundDisposeAttach = false;
    for (const file of files) {
      const src = fs.readFileSync(file, 'utf8');
      if (/::emscripten::val::object\(\)/.test(src)) foundValObject = true;
      if (/::ocjs::getRbvDispose\(\)/.test(src) && /::ocjs::getSymbolDispose\(\)/.test(src)) foundDisposeAttach = true;
      if (foundValObject && foundDisposeAttach) break;
    }
    expect(foundValObject, 'At least one binding must emit `::emscripten::val::object()` for disposable RBV containers').toBe(true);
    expect(foundDisposeAttach, 'At least one binding must wire `::ocjs::getRbvDispose()` + `::ocjs::getSymbolDispose()`').toBe(true);
  });

  it('class outputs forward via *val::as<T*>(allow_raw_pointers()) (R1 minimal transformation)', () => {
    // After R1 the class-output forwarding lane is the only mechanism that
    // preserves caller mutation. We use raw-pointer wire (`val::as<T*>()`)
    // + deref instead of `val::as<T&>()` because embind's reference wire
    // round-trips by value (BindingType<T&> degrades to BindingType<T>),
    // breaking in-place mutation. At least one binding must invoke the
    // `*<arg>.as<<ClassName>*>(emscripten::allow_raw_pointers())` pattern
    // inside a lambda body.
    const files = walkBindingCpps();
    const asPointerPattern =
      /\*\s*[A-Za-z_]\w*\.as<[A-Za-z_][\w:]*\s*\*>\(emscripten::allow_raw_pointers\(\)\)/;
    const offenders = files.filter((f) => asPointerPattern.test(fs.readFileSync(f, 'utf8')));
    expect(
      offenders.length,
      'No binding emits the `*val::as<T*>(allow_raw_pointers())` pointer-deref-passthrough pattern for class outputs',
    ).toBeGreaterThan(0);
  });
});

describe.skipIf(!fs.existsSync(DTS_PATH))('Generated .d.ts shape — RBV output-param inputs', () => {
  const dts = fs.existsSync(DTS_PATH) ? fs.readFileSync(DTS_PATH, 'utf8') : '';

  // RBV inputs follow the runtime dispatch contract introduced after the
  // original Option C experiment: virtual or colliding registrations remain
  // required, while a non-virtual unique-arity trailing output run can be
  // omitted and is therefore typed optional. These spot checks guard both
  // sides of that boundary.
  const canonicalSignatures: Array<[label: string, regex: RegExp]> = [
    // gp_Trsf::Transforms(double&,double&,double&) is non-virtual and has a
    // unique effective arity, so the trailing primitive run is optional.
    [
      'gp_Trsf::Transforms(theX,theY,theZ) optional',
      /\bTransforms\(theX\?: number, theY\?: number, theZ\?: number\): \{ theX: number; theY: number; theZ: number \};/,
    ],
    // Geom_Surface::Bounds is virtual, so inherited registrations collide and
    // all input-passthrough slots must remain required.
    [
      'Geom_Surface::Bounds(U1,U2,V1,V2) required',
      /\bBounds\(U1: number, U2: number, V1: number, V2: number\): \{ U1: number; U2: number; V1: number; V2: number \};/,
    ],
    // Same-class effective-arity collisions stay required.
    [
      'Bounds(First,Last) collision required',
      /\bBounds\(First: number, Last: number\): \{ First: number; Last: number \};/,
    ],
    [
      'BRep_Tool::Range output run optional',
      /\bRange\(aFirst\?: number, aLast\?: number\): \{ aFirst: number; aLast: number \};/,
    ],
  ];

  for (const [label, regex] of canonicalSignatures) {
    it(`canonical RBV signature matches runtime arity: ${label}`, () => {
      expect(regex.test(dts), `Expected /${regex.source}/ to match in ${path.basename(DTS_PATH)}`).toBe(true);
    });
  }

  // Inline RBV envelope return shape: `): { name: Type; … }` with the brace
  // block on a single line. Captures the body so we can scan its fields.
  const inlineEnvelopeRe = /\):\s*\{\s*([^}]+)\s*\}\s*;\s*$/gm;

  // OCCT concrete value classes that historically were mirrored into the
  // envelope by D1 (status quo). After R1 the bindgen mutates them in place
  // and drops them from the envelope; the dts must no longer surface them as
  // envelope fields. The list deliberately covers the highest-traffic
  // foundation classes touched by the smoke tests and the research doc's
  // canonical method enumeration; it is not exhaustive but is enough to
  // catch a class-output reintroduction by codegen drift.
  const FORBIDDEN_CLASS_ENVELOPE_FIELDS = [
    'gp_Pnt',
    'gp_Pnt2d',
    'gp_Vec',
    'gp_Vec2d',
    'gp_Pln',
    'gp_Lin',
    'gp_Dir',
    'gp_Ax1',
    'gp_Ax2',
    'gp_Ax3',
    'gp_XYZ',
    'gp_Trsf',
    'Bnd_Box',
    'Bnd_Box2d',
    'GProp_GProps',
    'Quantity_Color',
    'Quantity_ColorRGBA',
    'TopoDS_Shape',
    'TopoDS_Edge',
    'TopoDS_Face',
    'TopoDS_Vertex',
    'TopoDS_Wire',
    'TopoDS_Solid',
    'TopoDS_Compound',
    'TopoDS_Shell',
    'TopoDS_CompSolid',
    'TCollection_AsciiString',
    'TCollection_ExtendedString',
  ];

  it('no envelope mirrors a concrete class output as a non-return field (R1 regression guard)', () => {
    // R1 forbids echoing a class OUTPUT PARAMETER (mutated-in-place) inside
    // the envelope — those classes mutate the caller's argument in place, so
    // surfacing them again as an envelope field would be the misleading
    // "result mirrors thePlane" pattern the v3 redesign deleted.
    //
    // It does NOT forbid a C++ method whose native return type happens to be
    // one of these classes; that legitimately becomes `returnValue: <Class>`
    // inside a mixed envelope (R3/R4). Exclude the `returnValue` field from
    // the scan so we only flag class types appearing as *additional* envelope
    // members (which would indicate a regressed output-param echo).
    const violators: string[] = [];
    let match: RegExpExecArray | null;
    while ((match = inlineEnvelopeRe.exec(dts)) !== null) {
      const body = match[1];
      if (!body) continue;
      const fields = body.split(';').map((s) => s.trim()).filter(Boolean);
      for (const field of fields) {
        const colon = field.indexOf(':');
        if (colon === -1) continue;
        const fieldName = field.slice(0, colon).trim();
        if (fieldName === 'returnValue') continue;
        const fieldType = field.slice(colon + 1).trim();
        if (FORBIDDEN_CLASS_ENVELOPE_FIELDS.includes(fieldType)) {
          violators.push(match[0].trim());
          break;
        }
      }
    }
    expect(
      violators,
      `Found ${violators.length} RBV envelopes that mirror a concrete class output param (R1 forbids this). First 5:\n${violators
        .slice(0, 5)
        .join('\n')}`,
    ).toHaveLength(0);
  });
});
