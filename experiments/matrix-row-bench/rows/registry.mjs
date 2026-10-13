// registry.mjs — single source of truth for the 38 matrix rows.
//
// Drives the bench runner, the result aggregator, and the per-row scoring
// surface. Each row entry is a pure-data descriptor; the per-row .test.mjs
// files import the matching entry by `id` and feed it to harness.defineRow().
//
// Schema fields:
//   id              — integer, 1..38, matches policy doc row number
//   slug            — kebab-case identifier for the row file name
//   primitive       — chosen primitive per the policy matrix:
//                     'optional' | 'val' | 'native' | 'rbv' | 'dedup'
//                     | 'suffix' | 'filter' | 'facade' | 'mixed' | 'reject'
//                     | 'template' | 'cross-cutting'
//   productionInstances — integer (counted in the surface audit) or 'unknown'
//   speculative     — boolean; rows 23 / 35 / 37 currently
//   blockedByPhase1 — boolean; rows depending on rule 2 / rule 3 detectors
//                     that are landing in parallel (rows 8, 24, 27, 34)
//   bothPrimitives  — boolean; rows where BOTH val and optional are
//                     candidates and Q3 quantification applies
//                     (rows 1, 2, 24, 33, 34, 36)
//   testSubject     — { kind: 'real' | 'synthetic', class?: string, note?: string }
//   shapes          — array of expected JS call shapes the row test exercises
//                     each: { name, args, expect, errorExpected? }
//   description     — one-liner from the policy matrix row
//
// Keep this file pure data — no test logic, no I/O. The runner reads it,
// joins with execution outcomes, and emits the structured scoring table.

export const ROWS = [
  {
    id: 1,
    slug: 'scalar-trailing-default',
    primitive: 'val',
    productionInstances: 700,
    bothPrimitives: true,
    description: 'Single overload, trailing scalar default — val + isUndefined()/isNull() dispatch',
    testSubject: { kind: 'synthetic', class: 'Row01_Scalar' },
    shapes: [
      { name: 'omitted', args: [], expect: { default: true } },
      { name: 'value-true', args: [true], expect: { value: true } },
      { name: 'value-false', args: [false], expect: { value: false } },
      { name: 'undefined', args: [undefined], expect: { default: true } },
      { name: 'null-rejected', args: [null], errorExpected: true },
    ],
  },
  {
    id: 2,
    slug: 'value-class-default',
    primitive: 'val',
    productionInstances: 150,
    bothPrimitives: true,
    description: 'Single overload, trailing value-class default constructed in-place',
    testSubject: { kind: 'synthetic', class: 'Row02_ValueClass' },
    shapes: [
      { name: 'omitted', args: [], expect: { default: true } },
      { name: 'value', args: ['__valueClass__'], expect: { defaultUsed: false } },
      { name: 'undefined', args: [undefined], expect: { default: true } },
    ],
  },
  {
    id: 3,
    slug: 'handle-null-default',
    primitive: 'optional',
    productionInstances: 210,
    description: 'Single overload, trailing handle default = Handle() (null)',
    testSubject: { kind: 'real', class: 'BRepMesh_IncrementalMesh', note: 'optional<handle<NCollection_BaseAllocator>> at trailing position' },
    shapes: [
      { name: 'omitted', args: [], expect: { defaultNull: true } },
      { name: 'handle', args: ['__handle__'], expect: { defaultNull: false } },
      { name: 'null', args: [null], expect: { defaultNull: true } },
      { name: 'undefined', args: [undefined], expect: { defaultNull: true } },
    ],
  },
  {
    id: 4,
    slug: 'const-ref-anonymous-temporary',
    primitive: 'optional',
    productionInstances: 30,
    description: 'Single overload, const T& foo = T() (const-ref to anonymous temporary)',
    testSubject: { kind: 'synthetic', class: 'Row04_ConstRefTemp' },
    shapes: [
      { name: 'omitted', args: [], expect: { defaultIdentity: true } },
      { name: 'value', args: ['__value__'], expect: { defaultIdentity: false } },
    ],
  },
  {
    id: 5,
    slug: 'scoped-constant-default',
    primitive: 'optional',
    productionInstances: 15,
    description: 'Single overload, scoped-constant default (= NS::Const)',
    testSubject: { kind: 'synthetic', class: 'Row05_ScopedConst' },
    shapes: [
      { name: 'omitted', args: [], expect: { defaultConst: true } },
      { name: 'value', args: [99], expect: { value: 99 } },
    ],
  },
  {
    id: 6,
    slug: 'multi-overload-unique-arities',
    primitive: 'native',
    productionInstances: 760,
    description: 'Multi-overload, unique arities, no defaults — native embind arity-only',
    testSubject: { kind: 'real', class: 'TopoDS_Shape', note: 'Free / Locked / Modified getter+setter pairs' },
    shapes: [
      { name: 'arity-0', args: [], expect: { arity: 0 } },
      { name: 'arity-1', args: [true], expect: { arity: 1 } },
    ],
  },
  {
    id: 7,
    slug: 'sub-2a-semantic-conflict',
    primitive: 'val',
    productionInstances: 50,
    description: 'Sub-2a multi-overload semantic conflict — val-merged ctor at larger arity',
    testSubject: { kind: 'real', class: 'BRepMesh_IncrementalMesh', note: '{0, 3, 5}-arity ctor set' },
    shapes: [
      { name: 'arity-3-classy', args: ['__shape__', '__params__'], expect: { ctorVariant: 3 } },
      { name: 'arity-5-scalar', args: ['__shape__', 0.1, true, 0.1, true], expect: { ctorVariant: 5 } },
    ],
  },
  {
    id: 8,
    slug: 'sub-2b-degenerate-siblings',
    primitive: 'val',
    productionInstances: 19,
    blockedByPhase1: true,
    description: 'Sub-2b degenerate sibling constructors — val-discriminated single ctor at larger arity',
    testSubject: { kind: 'real', class: 'BRepGProp_Face', note: '(bool) + (Face, bool) ctor pair' },
    shapes: [
      { name: 'face-only', args: ['__face__'], expect: { ctorRouted: 'two-arg' } },
      { name: 'face-flag', args: ['__face__', true], expect: { ctorRouted: 'two-arg' } },
      { name: 'flag-only', args: [true], expect: { ctorRouted: 'one-arg' } },
      { name: 'empty', args: [], expect: { ctorRouted: 'zero-arg-default' } },
    ],
  },
  {
    id: 9,
    slug: 'same-arity-class-typed',
    primitive: 'val',
    productionInstances: 1226,
    description: 'Same-name same-arity class-typed overloads — val + instanceof dispatch',
    testSubject: { kind: 'real', class: 'XCAFDoc_ColorTool', note: 'SetColor(Label,...) vs SetColor(Shape,...)' },
    shapes: [
      { name: 'label-variant', args: ['__label__'], expect: { variant: 'label' } },
      { name: 'shape-variant', args: ['__shape__'], expect: { variant: 'shape' } },
    ],
  },
  {
    id: 10,
    slug: 'static-instance-same-arity',
    primitive: 'val',
    productionInstances: 1,
    description: 'Same-arity static + instance overloads — split val dispatchers',
    testSubject: { kind: 'real', class: 'TCollection_AsciiString', note: 'IsEqual static + instance' },
    shapes: [
      { name: 'static', args: ['__a__', '__b__'], expect: { dispatch: 'static' } },
      { name: 'instance', args: ['__b__'], expect: { dispatch: 'instance' } },
    ],
  },
  {
    id: 11,
    slug: 'integer-twins-dedup',
    primitive: 'dedup',
    productionInstances: 'unknown',
    description: 'JS-indistinguishable integer twins (size_t vs int) — emit only modern canonical',
    testSubject: { kind: 'synthetic', class: 'Row11_IntTwins' },
    shapes: [
      { name: 'integer-value', args: [42], expect: { dedupCanonicalUsed: true } },
    ],
  },
  {
    id: 12,
    slug: 'integer-vs-floating',
    primitive: 'val',
    productionInstances: 10,
    description: 'Integer vs floating overloads — val + Number.isInteger discrimination',
    testSubject: { kind: 'real', class: 'TCollection_ExtendedString', note: '(int) vs (double) ctor' },
    shapes: [
      { name: 'integer', args: [42], expect: { discriminator: 'int' } },
      { name: 'float', args: [3.14], expect: { discriminator: 'double' } },
    ],
  },
  {
    id: 13,
    slug: 'char-vs-cstring',
    primitive: 'suffix',
    productionInstances: 5,
    description: 'char vs const char* overloads — TS-only classification + _char suffix escape',
    testSubject: { kind: 'real', class: 'TCollection_AsciiString', note: '(char) vs (const char*)' },
    shapes: [
      { name: 'one-char-string', args: ['a'], expect: { routedTo: 'const-char-star' } },
      { name: 'multi-char', args: ['abc'], expect: { routedTo: 'const-char-star' } },
    ],
  },
  {
    id: 14,
    slug: 'enum-vs-string',
    primitive: 'val',
    productionInstances: 10,
    description: 'Enum vs string overloads — val + Module.EnumType membership check',
    testSubject: { kind: 'synthetic', class: 'Row14_EnumStr' },
    shapes: [
      { name: 'enum-value', args: ['__enum__'], expect: { variant: 'enum' } },
      { name: 'string-value', args: ['raw-string'], expect: { variant: 'string' } },
    ],
  },
  {
    id: 15,
    slug: 'raw-pointer-defaults',
    primitive: 'filter',
    productionInstances: 'unknown',
    description: 'Raw pointer params with default — filter at source (cannot std::optional<T*>)',
    testSubject: { kind: 'synthetic', class: 'Row15_RawPtr' },
    shapes: [
      { name: 'filtered', args: [], expect: { filteredAtSource: true } },
    ],
  },
  {
    id: 16,
    slug: 'rbv-primitive-pure-out',
    primitive: 'rbv',
    productionInstances: 451,
    description: 'Primitive pure-out params (double&) — RBV envelope value_object return',
    testSubject: { kind: 'real', class: 'Geom_Surface', note: 'Bounds(double&,double&,double&,double&)' },
    shapes: [
      { name: 'no-args', args: [], expect: { envelopeFields: ['U1', 'U2', 'V1', 'V2'] } },
    ],
  },
  {
    id: 17,
    slug: 'rbv-primitive-in-out',
    primitive: 'rbv',
    productionInstances: 451,
    description: 'Primitive in/out params — RBV input-passthrough envelope',
    testSubject: { kind: 'real', class: 'gp_Trsf', note: 'Transforms(double&,double&,double&)' },
    shapes: [
      { name: 'pass-input', args: [1, 2, 3], expect: { envelopeFields: ['x', 'y', 'z'] } },
    ],
  },
  {
    id: 18,
    slug: 'rbv-class-output',
    primitive: 'rbv',
    productionInstances: 451,
    description: 'Class T& output or in/out — RBV + val::as<T&>() reference passthrough',
    testSubject: { kind: 'real', class: 'BRepGraph_Builder', note: 'Add → BRepGraph& (non-copyable)' },
    shapes: [
      { name: 'returns-ref', args: [], expect: { disposable: true } },
    ],
  },
  {
    id: 19,
    slug: 'rbv-handle-output',
    primitive: 'rbv',
    productionInstances: 451,
    description: 'Handle<T>& output param — RBV input-elision envelope',
    testSubject: { kind: 'real', class: 'GeomLib', note: 'To3d(..., Handle<Geom_Curve>&)' },
    shapes: [
      { name: 'elided-input', args: ['__inputs__'], expect: { handleEnvelopeField: true } },
    ],
  },
  {
    id: 20,
    slug: 'const-handle-input',
    primitive: 'native',
    productionInstances: 2203,
    description: 'const Handle<T>& input param — native typed embind binding',
    testSubject: { kind: 'real', class: 'BRepMesh_IncrementalMesh', note: 'Handle inputs ubiquitous' },
    shapes: [
      { name: 'handle-input', args: ['__handle__'], expect: { accepted: true } },
    ],
  },
  {
    id: 21,
    slug: 'genuine-optional-return',
    primitive: 'optional',
    productionInstances: 1,
    description: 'Genuine std::optional<T> return type — EmValOptionalType::fromWireType',
    testSubject: { kind: 'real', class: 'BOPDS_Interf', note: 'GetIndexNew() → std::optional<int>' },
    shapes: [
      { name: 'has-value', args: [], expect: { jsType: 'number' } },
      { name: 'nullopt', args: [], expect: { jsType: 'undefined' } },
    ],
  },
  {
    id: 22,
    slug: 'genuine-optional-param',
    primitive: 'optional',
    productionInstances: 4,
    description: 'Genuine std::optional<T> parameter — native, explicit-undefined-policy',
    testSubject: { kind: 'real', class: 'BRepGraph_ParentExplorer', note: 'theAvoidKind: const std::optional<Kind>&' },
    shapes: [
      { name: 'value', args: ['__kind__'], expect: { hasValue: true } },
      { name: 'omitted', args: [], expect: { hasValue: false } },
      { name: 'undefined', args: [undefined], expect: { hasValue: false } },
      { name: 'null', args: [null], expect: { hasValue: false } },
    ],
  },
  {
    id: 23,
    slug: 'handle-non-null-default-speculative',
    primitive: 'val',
    productionInstances: 0,
    speculative: true,
    description: 'Defaulted handle param with NON-null default (speculative — no production validation)',
    testSubject: { kind: 'synthetic', class: 'Row23_HandleNonNull' },
    shapes: [
      { name: 'omitted', args: [], expect: { sentinelUsed: true } },
      { name: 'handle', args: ['__handle__'], expect: { sentinelUsed: false } },
    ],
  },
  {
    id: 24,
    slug: 'multi-default-scalar-policy-flags',
    primitive: 'optional',
    productionInstances: 'absorbed-by-rows-1-3-8',
    bothPrimitives: true,
    blockedByPhase1: true,
    description: 'Defaulted scalar policy flags (bool/enum/double) — optional if rule 2 clean, else val',
    testSubject: { kind: 'synthetic', class: 'Row24_PolicyFlags' },
    shapes: [
      { name: 'all-omitted', args: ['__shape__'], expect: { defaultsApplied: true } },
      { name: 'explicit-all', args: ['__shape__', false, 0.1], expect: { defaultsApplied: false } },
    ],
  },
  {
    id: 25,
    slug: 'rbv-non-copyable-returns',
    primitive: 'rbv',
    productionInstances: 451,
    description: 'RBV non-copyable returns (deleted copy ctor) — ref-only envelope + [Symbol.dispose]',
    testSubject: { kind: 'real', class: 'BRepGraph_Builder', note: 'Add returns BRepGraph& non-copyable' },
    shapes: [
      { name: 'returns-disposable', args: [], expect: { hasSymbolDispose: true } },
    ],
  },
  {
    id: 26,
    slug: 'mixed-return-overload-groups',
    primitive: 'mixed',
    productionInstances: 148,
    description: 'Mixed-return overload groups — _emitValDispatchMethod with mixed_returns=true',
    testSubject: { kind: 'synthetic', class: 'Row26_MixedReturn' },
    shapes: [
      { name: 'void-branch', args: ['__void-trigger__'], expect: { jsReturn: 'undefined' } },
      { name: 'value-branch', args: ['__value-trigger__'], expect: { jsType: 'number' } },
    ],
  },
  {
    id: 27,
    slug: 'rbv-elided-arity-collisions',
    primitive: 'rbv',
    productionInstances: 'unknown',
    blockedByPhase1: true,
    description: 'RBV-elided arity collisions — JS-effective dedup / RBV collision dispatch',
    testSubject: { kind: 'synthetic', class: 'Row27_RbvCollision' },
    shapes: [
      { name: 'richer-envelope', args: [], expect: { selectedEnvelope: 'richer' } },
    ],
  },
  {
    id: 28,
    slug: 'ncollection-template-instantiations',
    primitive: 'template',
    productionInstances: 890,
    description: 'NCollection template-instantiated containers — source-level discovery',
    testSubject: { kind: 'real', class: 'NCollection_Array1_TopoDS_Shape', note: 'Auto-discovered typedef' },
    shapes: [
      { name: 'concrete-class-bound', args: [], expect: { classExists: true } },
    ],
  },
  {
    id: 29,
    slug: 'adl-free-function-facade',
    primitive: 'facade',
    productionInstances: 7034,
    description: 'ADL / free function / static helper — explicit class_function facade',
    testSubject: { kind: 'real', class: 'BRepTools', note: 'BRepTools.Read free function' },
    shapes: [
      { name: 'facade-call', args: ['__args__'], expect: { resolved: true } },
    ],
  },
  {
    id: 30,
    slug: 'nullable-object-args',
    primitive: 'val',
    productionInstances: 'unknown',
    description: 'Nullable object arguments (null meaningful in C++) — val with explicit null policy',
    testSubject: { kind: 'synthetic', class: 'Row30_NullableObject' },
    shapes: [
      { name: 'value', args: ['__value__'], expect: { value: 'present' } },
      { name: 'null-meaningful', args: [null], expect: { value: 'null-meaningful' } },
    ],
  },
  {
    id: 31,
    slug: 'explicit-undefined-arg',
    primitive: 'cross-cutting',
    productionInstances: 'unknown',
    description: 'Explicit undefined argument — per absence-semantics tag (rule 4)',
    testSubject: { kind: 'synthetic', class: 'Row31_ExplicitUndefined' },
    shapes: [
      { name: 'undefined-as-absence', args: [undefined], expect: { absenceTag: 'default-on-absence' } },
      { name: 'undefined-as-nullopt', args: [undefined], expect: { absenceTag: 'maybe-T' } },
    ],
  },
  {
    id: 32,
    slug: 'sfinae-deleted-only',
    primitive: 'filter',
    productionInstances: 0,
    description: 'SFINAE-only / deleted-overload-only declarations — filter at source',
    testSubject: { kind: 'synthetic', class: 'Row32_Sfinae' },
    shapes: [
      { name: 'filtered', args: [], expect: { filteredAtSource: true } },
    ],
  },
  {
    id: 33,
    slug: 'cstring-wrapper-trailing-default',
    primitive: 'val',
    productionInstances: 3,
    bothPrimitives: true,
    description: 'Cstring-wrapper with trailing default — val + isUndefined() inside cstring lambda',
    testSubject: { kind: 'real', class: 'IFSelect_Act', note: 'SetGroup(CString,CString="")' },
    shapes: [
      { name: 'one-arg', args: ['grp'], expect: { secondDefaulted: true } },
      { name: 'two-arg', args: ['grp', 'file'], expect: { secondDefaulted: false } },
    ],
  },
  {
    id: 34,
    slug: 'multi-overload-trailing-default',
    primitive: 'val',
    productionInstances: 20,
    bothPrimitives: true,
    blockedByPhase1: true,
    description: 'Multi-overload trailing default that overlaps another arity — val at trailing position',
    testSubject: { kind: 'real', class: 'BRepOffsetAPI_MakeFilling', note: 'Add(Edge,GeomAbs,bool=true)' },
    shapes: [
      { name: 'two-arg', args: ['__edge__', '__cont__'], expect: { defaultUsed: true } },
      { name: 'three-arg', args: ['__edge__', '__cont__', false], expect: { defaultUsed: false } },
    ],
  },
  {
    id: 35,
    slug: 'all-optional-sibling-rejection',
    primitive: 'reject',
    productionInstances: 0,
    speculative: true,
    description: 'Same-arity sibling group, ≥2 all-optional siblings (T1) — bindgen emit-time rejection',
    testSubject: { kind: 'synthetic', class: 'Row35_AllOpt' },
    shapes: [
      { name: 'rejected-at-bindgen', args: [], expect: { bindgenRejected: true } },
    ],
  },
  {
    id: 36,
    slug: 'default-constructed-trailing',
    primitive: 'optional',
    productionInstances: 5,
    bothPrimitives: true,
    description: 'Defaulted trailing param = T{} — optional if rule 2 clean, else val',
    testSubject: { kind: 'synthetic', class: 'Row36_DefaultConstructed' },
    shapes: [
      { name: 'omitted', args: ['__shape__'], expect: { defaultApplied: true } },
      { name: 'value', args: ['__shape__', '__value__'], expect: { defaultApplied: false } },
    ],
  },
  {
    id: 37,
    slug: 'reference-default-singleton-speculative',
    primitive: 'val',
    productionInstances: 0,
    speculative: true,
    description: 'Reference-default T& foo = singleton() (speculative) — val (NEVER optional)',
    testSubject: { kind: 'synthetic', class: 'Row37_RefDefault' },
    shapes: [
      { name: 'omitted-singleton', args: [], expect: { singletonIdentity: true } },
      { name: 'override', args: ['__alt__'], expect: { singletonIdentity: false } },
    ],
  },
  {
    id: 38,
    slug: 'initializer-list-bulk-init',
    primitive: 'val',
    productionInstances: 61,
    designProbe: true,
    description: 'std::initializer_list<T> constructor parameter — val + JS-array element iteration',
    testSubject: { kind: 'real', class: 'NCollection_List_handle_BOPDS_PaveBlock', note: 'init-list ctor' },
    shapes: [
      { name: 'js-array-input-val', args: [['__h1__', '__h2__']], expect: { primitiveVariant: 'val-iter' } },
      { name: 'js-array-input-suffix-filter', args: [['__h1__', '__h2__']], expect: { primitiveVariant: 'filter-and-suffix' } },
    ],
  },
];

if (ROWS.length !== 38) {
  throw new Error(`registry mismatch: expected 38 rows, got ${ROWS.length}`);
}
for (let i = 0; i < ROWS.length; i += 1) {
  if (ROWS[i].id !== i + 1) {
    throw new Error(`registry rows must be ordered 1..38; got id=${ROWS[i].id} at index ${i}`);
  }
}

export const ROW_BY_ID = new Map(ROWS.map((r) => [r.id, r]));

export const Q3_ROWS = ROWS.filter((r) => r.bothPrimitives).map((r) => r.id);

export const PHASE1_BLOCKED = ROWS.filter((r) => r.blockedByPhase1).map((r) => r.id);

export const SPECULATIVE_ROWS = ROWS.filter((r) => r.speculative).map((r) => r.id);
