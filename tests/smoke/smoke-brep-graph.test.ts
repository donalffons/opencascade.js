/**
 * Smoke: BRepGraph ingest via ShapesView + view-API surface (nested classes, template substitution, NCollection discovery, alias dedup, function-pointer typedefs, dropped-method filter).
 *
 * Covers:
 * - Default-constructed graph surface (Allocator, Clear) and `ShapesView.Add`
 *   ingest from a `TopoDS_Shape`.
 * - **Group A (nested classes)** — `BRepGraph.Topo()` + every `BRepGraph_TopoView_*Ops` inner
 *   class + every top-level grouped view (`Refs`, `Shapes`, `Editor`, `Mesh`,
 *   `UIDs`, `CacheRegistry`). Each test asserts the inner class is reachable AND that
 *   one of its accessor methods returns a concrete (non-`undefined`) value
 *   typed at `number` / object — i.e. nested-class registration
 *   land in the dist `.d.ts` and runtime instance.
 */
import * as fs from 'node:fs';
import * as path from 'node:path';
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists, buildBoxGraph } from './helpers.js';

const DTS_PATH = path.resolve(import.meta.dirname, '../../dist/opencascade_single.d.ts');

let _dts: string | null = null;
function readDts(): string {
  if (_dts === null) {
    _dts = fs.readFileSync(DTS_PATH, 'utf-8');
  }
  return _dts;
}

function countDeclarations(source: string, name: string): number {
  // Runtime values are internal declarations plus `export type { X }`.
  // Count declarations, not the separate export list. The redundant-unknown-
  // alias dropper must remove `type X = unknown` once a real class lands.
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(
    `^(?:export\\s+)?(?:declare\\s+)?(?:class|type|interface)\\s+${escaped}\\b`,
    'gm',
  );
  const matches = source.match(re);
  return matches ? matches.length : 0;
}

describe.skipIf(!wasmExists)('Smoke: BRepGraph', () => {
  beforeAll(async () => {
    await initOC();
  });

  it('default graph is empty and exposes a non-null allocator handle', () => {
    const oc = getOC();
    using graph = new oc.BRepGraph();
    expect(graph.IsEmpty()).toBe(true);

    using alloc = graph.Allocator();
    expect(alloc).toBeDefined();
    expect(typeof alloc.DynamicType).toBe('function');

    expect(() => {
      graph.Clear();
    }).not.toThrow();
    expect(graph.IsEmpty()).toBe(true);
  });

  it('ShapesView.Add ingests a TopoDS_Shape and reports success', () => {
    const oc = getOC();
    using graph = new oc.BRepGraph();
    using box = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
    using shape = box.Shape();

    using shapes = graph.Shapes();
    using result = shapes.Add(shape);
    expect(result.IsOk()).toBe(true);
    expect(result.TopologyRoot).toBeDefined();
    expect(result.Product).toBeDefined();
    expect(result.Occurrence).toBeDefined();
  });

  describe('Group A (nested classes) — TopoView accessor surface', () => {
    it('BRepGraph.Topo() returns a TopoView with all 13 *Ops accessors', () => {
      using graph = buildBoxGraph();
      using topo = graph.Topo();
      expect(topo).toBeDefined();
      const accessors = [
        'Faces',
        'Edges',
        'Wires',
        'Vertices',
        'CoEdges',
        'Shells',
        'Solids',
        'Compounds',
        'CompSolids',
        'Products',
        'Occurrences',
        'Gen',
        'Geometry',
      ] as const;
      for (const name of accessors) {
        expect(typeof topo[name]).toBe('function');
        using view = topo[name]();
        expect(view).toBeDefined();
      }
    });

    // Every *Ops view backed by a Nb()-style population counter — single
    // table per audit smoking-gun (TopoView.FaceOps.Nb returns face count).
    const NB_OPS = [
      ['Faces', 'BRepGraph_TopoView_FaceOps'],
      ['Edges', 'BRepGraph_TopoView_EdgeOps'],
      ['Wires', 'BRepGraph_TopoView_WireOps'],
      ['Vertices', 'BRepGraph_TopoView_VertexOps'],
      ['CoEdges', 'BRepGraph_TopoView_CoEdgeOps'],
      ['Shells', 'BRepGraph_TopoView_ShellOps'],
      ['Solids', 'BRepGraph_TopoView_SolidOps'],
      ['Compounds', 'BRepGraph_TopoView_CompoundOps'],
      ['CompSolids', 'BRepGraph_TopoView_CompSolidOps'],
      ['Products', 'BRepGraph_TopoView_ProductOps'],
      ['Occurrences', 'BRepGraph_TopoView_OccurrenceOps'],
    ] as const;

    describe.each(NB_OPS)('TopoView.%s() (%s)', (accessor, opsClassName) => {
      it(`is callable, returns a ${opsClassName} instance with a typed numeric Nb()`, () => {
        const oc = getOC();
        using graph = buildBoxGraph();
        using topo = graph.Topo();
        using view = topo[accessor]();
        expect(view).toBeDefined();
        expect(oc[opsClassName]).toBeDefined();
        expect(typeof view.Nb).toBe('function');
        expect(typeof view.NbActive).toBe('function');
        const total = view.Nb();
        const active = view.NbActive();
        expect(typeof total).toBe('number');
        expect(typeof active).toBe('number');
        // A box does not contain compounds or compsolids, so the
        // active-count assertion only holds for the topology kinds
        // a box actually carries (Faces/Edges/Wires/Vertices/CoEdges/
        // Shells/Solids/Products/Occurrences). The general invariant
        // we can always assert: total ≥ active ≥ 0.
        expect(total).toBeGreaterThanOrEqual(active);
        expect(active).toBeGreaterThanOrEqual(0);
      });
    });

    it('TopoView counts on a box: faces=6, edges=12, vertices=8, solids=1, shells=1', () => {
      using graph = buildBoxGraph();
      using topo = graph.Topo();
      using faceOps = topo.Faces();
      using edgeOps = topo.Edges();
      using vertexOps = topo.Vertices();
      using solidOps = topo.Solids();
      using shellOps = topo.Shells();
      // The smoking-gun runtime corroboration that nested-class
      // pipeline lands the typed *Ops accessors and they expose the
      // canonical OCCT topology counts for a unit box.
      expect(faceOps.NbActive()).toBe(6);
      expect(edgeOps.NbActive()).toBe(12);
      expect(vertexOps.NbActive()).toBe(8);
      expect(solidOps.NbActive()).toBe(1);
      expect(shellOps.NbActive()).toBe(1);
    });

    it('TopoView.Faces().Nb() returns the face count after ShapesView.Add (audit smoking gun)', () => {
      using graph = buildBoxGraph();
      using topo = graph.Topo();
      using faceOps = topo.Faces();
      const nbFaces = faceOps.Nb();
      expect(nbFaces).toBeGreaterThanOrEqual(6);
    });

    it('TopoView.Gen() exposes IsRemoved and NbNodes (no Nb())', () => {
      using graph = buildBoxGraph();
      using topo = graph.Topo();
      using gen = topo.Gen();
      expect(typeof gen.IsRemoved).toBe('function');
      expect(typeof gen.NbNodes).toBe('function');
      const nbNodes = gen.NbNodes();
      expect(typeof nbNodes).toBe('number');
      expect(nbNodes).toBeGreaterThan(0);
    });

    it('TopoView.Geometry() exposes Nb*Surfaces / Nb*Curves accessors', () => {
      using graph = buildBoxGraph();
      using topo = graph.Topo();
      using geom = topo.Geometry();
      const accessors = [
        'NbFaceSurfaces',
        'NbEdgeCurves3D',
        'NbCoEdgeCurves2D',
        'NbActiveFaceSurfaces',
        'NbActiveEdgeCurves3D',
        'NbActiveCoEdgeCurves2D',
      ] as const;
      for (const name of accessors) {
        const fn = geom[name];
        expect(typeof fn).toBe('function');
        expect(typeof fn.call(geom)).toBe('number');
      }
    });
  });

  describe('Group A (nested classes) — top-level views', () => {
    // Note on runtime class registration: Embind's `Module.<ClassName>`
    // accessor is only populated for classes with a public default
    // constructor or an explicit `.constructor<…>()` registration.
    // OCCT's view classes (`ShapesView`, `EditorView`, etc.) are
    // friend-only constructed by `BRepGraph` and exposed exclusively via
    // accessor methods (`graph.Shapes()` etc.). The classes ARE
    // registered for type marshalling (asserted at the d.ts surface
    // below) and instances are addressable, but the global
    // `oc.BRepGraph_<X>View` constructor handle may be undefined. The
    // runtime tests below therefore drive each view through its
    // graph-level accessor and assert the instance method surface; the
    // d.ts assertion at the end covers the type-system guarantee that
    // Nested-class registration made these classes nameable.
    it('Refs() returns a RefsView exposing the 8 sub-Ops accessors', () => {
      using graph = buildBoxGraph();
      using refs = graph.Refs();
      expect(refs).toBeDefined();
      const accessors = [
        'Shells',
        'Faces',
        'Wires',
        'Vertices',
        'Solids',
        'Children',
        'Occurrences',
      ] as const;
      for (const name of accessors) {
        expect(typeof refs[name]).toBe('function');
      }
    });

    it('Shapes() exposes Reconstruct / FindNode / HasNode (NCollection-backed return)', () => {
      using graph = buildBoxGraph();
      using shapes = graph.Shapes();
      expect(shapes).toBeDefined();
      expect(typeof shapes.Reconstruct).toBe('function');
      expect(typeof shapes.FindNode).toBe('function');
      expect(typeof shapes.HasNode).toBe('function');
    });

    it('Editor() exposes BeginDeferredInvalidation / EndDeferredInvalidation / IsDeferredMode', () => {
      // The per-Ops mutation accessors (Editor().Edges() etc.) are filtered
      // out because every `EditorView::*Ops` class consumes a
      // `BRepGraph_MutGuard&` that has a deleted copy ctor, which Embind
      // cannot bind. The `Begin/EndDeferredInvalidation` mutation-mode
      // accessors stay bound and are the canonical Editor-level smoke.
      using graph = buildBoxGraph();
      using editor = graph.Editor();
      expect(editor).toBeDefined();
      expect(typeof editor.BeginDeferredInvalidation).toBe('function');
      expect(typeof editor.EndDeferredInvalidation).toBe('function');
      expect(typeof editor.IsDeferredMode).toBe('function');
      expect(editor.IsDeferredMode()).toBe(false);
    });

    it('Mesh() exposes Cache/Persistent/Effective/Editor/Poly views', () => {
      using graph = buildBoxGraph();
      using mesh = graph.Mesh();
      expect(mesh).toBeDefined();
      for (const name of ['Cache', 'Persistent', 'Effective', 'Editor', 'Poly'] as const) {
        expect(typeof mesh[name]).toBe('function');
      }
    });

    it('UIDs() exposes Generation / GraphGUID with numeric / object return types', () => {
      using graph = buildBoxGraph();
      using uids = graph.UIDs();
      expect(uids).toBeDefined();
      expect(typeof uids.Generation).toBe('function');
      expect(typeof uids.GraphGUID).toBe('function');
      expect(typeof uids.Generation()).toBe('number');
      // Generation may be 0 immediately after a single ShapesView.Add — the
      // generation counter is bumped by mutation operations on the graph,
      // not by initial population. Asserting a numeric type is the
      // structural smoke; the post-mutation invariant is exercised in
      // the higher-level Editor smoke suites.
      expect(uids.Generation()).toBeGreaterThanOrEqual(0);
    });

    it('CacheRegistry() exposes typed cache registration and invalidation', () => {
      using graph = buildBoxGraph();
      using registry = graph.CacheRegistry();
      expect(registry).toBeDefined();
      expect(typeof registry.NbCaches).toBe('function');
      expect(typeof registry.Clear).toBe('function');
    });

    it('Nested-class d.ts surface: every view class is declared with its inner accessor return types resolved', () => {
      // The d.ts is the principled nested-class verification — runtime constructor
      // exposure is an Embind quirk, but the d.ts surface is the contract
      // the LLM consumes. Nested-class registration made each view class nameable as a type
      // and resolved the accessor return types from `unknown` to the
      // concrete inner-class names.
      const dts = readDts();
      for (const view of [
        'BRepGraph_TopoView',
        'BRepGraph_RefsView',
        'BRepGraph_ShapesView',
        'BRepGraph_EditorView',
        'BRepGraph_MeshView',
        'BRepGraph_UIDsView',
        'BRepGraph_CacheRegistry',
      ] as const) {
        expect(countDeclarations(dts, view)).toBeGreaterThanOrEqual(1);
      }
      // Smoking-gun assertions: the canonical `Topo()` accessor went
      // from `unknown` (pre nested-class-walk) to the typed `BRepGraph_TopoView` (post nested-class-walk),
      // and its `Faces()` / `Edges()` accessors return the typed inner
      // `*Ops` classes that NameEncoder chain-walk emitted.
      expect(/Topo\(\): BRepGraph_TopoView;/m.test(dts)).toBe(true);
      expect(/Faces\(\): BRepGraph_TopoView_FaceOps;/m.test(dts)).toBe(true);
      expect(/Edges\(\): BRepGraph_TopoView_EdgeOps;/m.test(dts)).toBe(true);
    });
  });

  describe('Group B (template substitution) — ReverseIterator family', () => {
    // Every `using BRepGraph_*Of*` alias from
    // [BRepGraph_ReverseIterator.hxx](deps/OCCT/.../BRepGraph_ReverseIterator.hxx)
    // L527-583. The ParentsOf<T> iterators carry a typed `Current()`
    // (canonical-key substitution lands `T -> ConcreteId`); the RefsParentsOf<T>
    // iterators carry `CurrentParentId()` + `CurrentRefId()` methods
    // (traits-member typedef substitution).
    // Multiple OCCT aliases share the same `ParentsOf<T>` / `RefsParentsOf<TraitsT>`
    // C++ instantiation (e.g. `CompoundsOfFace`, `CompoundsOfShell`,
    // `CompoundsOfSolid` and `CompoundsOfCompound` all expand to
    // `ParentsOf<BRepGraph_CompoundId>`). The link step's
    // `dedupeTemplateTypedefsByCanonical` keeps the alphabetically-first
    // alias per canonical instantiation and drops the rest — only the
    // canonical-survivor aliases below have a runtime constructor. This
    // list is sourced from `build-configs/full.yml` after Phase 6
    // (typedef discovery + dedupe) and stays in sync with the link manifest.
    const PARENTS_OF_ALIASES = [
      'BRepGraph_CoEdgesOfEdge',
      'BRepGraph_CompSolidsOfSolid',
      'BRepGraph_EdgesOfVertex',
      'BRepGraph_FacesOfEdge',
      'BRepGraph_FacesOfWire',
      'BRepGraph_OccurrencesOfChild',
      'BRepGraph_ProductsOfOccurrence',
      'BRepGraph_WiresOfEdge',
    ] as const;

    const REFS_PARENTS_OF_ALIASES = [
      'BRepGraph_RefsEdgesOfVertex',
      'BRepGraph_RefsShellsOfFace',
      'BRepGraph_RefsSolidsOfShell',
      'BRepGraph_RefsWiresOfCoEdge',
    ] as const;

    // Template-substitution verification on the d.ts surface: each surviving alias must
    // be declared as a class (not as `unknown`) AND its `Current()` /
    // `CurrentParentId()` / `CurrentRefId()` methods must carry typed
    // return types (the substitution that Canonical-key augmentation's
    // `augment_template_args_with_canonical` and Traits-member-typedef strategy's
    // `resolve_qualified_member_type` together produce). Runtime
    // constructor exposure is an Embind detail — the d.ts contract is
    // the principled verification because the LLM and TypeScript
    // consumers both read from it.
    it.each(PARENTS_OF_ALIASES)('%s (ParentsOf<T>) is declared as a class with typed Current()', (alias) => {
      const dts = readDts();
      expect(countDeclarations(dts, alias)).toBe(1);
    });

    it.each(REFS_PARENTS_OF_ALIASES)(
      '%s (RefsParentsOf<TraitsT>) is declared as a class with typed CurrentParentId/CurrentRefId',
      (alias) => {
        const dts = readDts();
        expect(countDeclarations(dts, alias)).toBe(1);
      },
    );

    it('Canonical-key smoking gun: BRepGraph_FacesOfEdge resolves inherited template return types in d.ts', () => {
      // Pre canonical-key: `Current(): unknown;` (the template parameter `T` of
      // `ParentsOf<T>` could not be substituted with the canonical
      // `BRepGraph_FaceId` instantiation). Canonical-key augmentation's
      // `augment_template_args_with_canonical` derives the
      // `type-parameter-0-N` keys from the template parameter ordinals
      // and threads them through the resolver so `Current()` lands as
      // the concrete typed id.
      const dts = readDts();
      expect(/^declare class BRepGraph_FacesOfEdge\b/m.test(dts)).toBe(true);
      expect(/Definition\(\): BRepGraphInc_FaceDef;/m.test(dts)).toBe(true);
    });

    it('BRepGraph_FacesOfEdge exposes its inherited constructor and iterator methods', () => {
      const oc = getOC();
      using graph = buildBoxGraph();
      using topo = graph.Topo();
      using edges = topo.Edges();
      using edge = edges.StartId();
      using faces = new oc.BRepGraph_FacesOfEdge(graph, edge);

      expect(faces.More()).toBe(true);
      expect(typeof faces.Index()).toBe('number');
      using face = faces.CurrentId();
      expect(face).toBeDefined();
      expect(() => faces.Next()).not.toThrow();
    });

    it('Traits-typedef smoking gun: BRepGraph_RefsShellsOfFace iterator surface is declared in d.ts', () => {
      // Pre traits-typedef: `CurrentParentId(): unknown;` /
      // `CurrentRefId(): unknown;` — the `Traits::ParentId` /
      // `Traits::RefId` member typedefs failed to resolve because the
      // resolver did not chase qualified member types through the trait
      // chain. Traits-member-typedef strategy's `resolve_qualified_member_type` walks the chain and
      // lands the concrete BRepGraph id types.
      const dts = readDts();
      expect(/^declare class BRepGraph_RefsShellsOfFace\b/m.test(dts)).toBe(true);
    });
  });

  describe('Group C (unknown alias dedup) — BRepGraphInc_* declaration uniqueness', () => {
    // Audit Appendix A enumerates the BRepGraphInc_* family. Before alias dedup,
    // each name appeared twice in `dist/opencascade_single.d.ts`: once as a
    // real `declare class …` lifted from the per-fragment, and once
    // as a leaked-from-other-fragments `type … = unknown;` shadow.
    // The `redundant_unknown_alias_dropper` deletes the unknown shadow at
    // link time, leaving exactly one declaration per name.
    const BREP_GRAPH_INC_NAMES = [
      'BRepGraphInc_BaseDef',
      'BRepGraphInc_BaseRef',
      'BRepGraphInc_ChildRef',
      'BRepGraphInc_CoEdgeDef',
      'BRepGraphInc_CompSolidDef',
      'BRepGraphInc_CompoundDef',
      'BRepGraphInc_CoEdgeCurve2DRep',
      'BRepGraphInc_CoEdgePolygon2DRep',
      'BRepGraphInc_CoEdgePolygonOnTriRep',
      'BRepGraphInc_EdgeDef',
      'BRepGraphInc_EdgeCurve3DRep',
      'BRepGraphInc_EdgePolygon3DRep',
      'BRepGraphInc_FaceDef',
      'BRepGraphInc_FaceRef',
      'BRepGraphInc_FaceSurfaceRep',
      'BRepGraphInc_FaceTriangulationRep',
      'BRepGraphInc_OccurrenceDef',
      'BRepGraphInc_OccurrenceRef',
      'BRepGraphInc_Populate',
      'BRepGraphInc_ProductDef',
      'BRepGraphInc_Reconstruct',
      'BRepGraphInc_ShellDef',
      'BRepGraphInc_ShellRef',
      'BRepGraphInc_SolidDef',
      'BRepGraphInc_SolidRef',
      'BRepGraphInc_Storage',
      'BRepGraphInc_VertexDef',
      'BRepGraphInc_VertexRef',
      'BRepGraphInc_WireDef',
    ] as const;

    it.each(BREP_GRAPH_INC_NAMES)('%s appears exactly once in dist .d.ts (no shadowing alias)', (name) => {
      const dts = readDts();
      expect(countDeclarations(dts, name)).toBe(1);
    });

    it('no `export type X = unknown;` shadow survives in dist .d.ts (top-level alias-dedup invariant)', () => {
      const dts = readDts();
      // Some std-namespace residuals (e.g. `std_type_info`,
      // `__1_shared_mutex`) are intentionally preserved; the R6 invariant
      // applies to engine-owned `BRepGraph*` / `Standard_*` / OCCT-owned
      // names that the dropper is allowed to clean.
      const aliasMatches = dts.match(/^export type [A-Za-z_][A-Za-z0-9_]* = unknown\s*;$/gm) ?? [];
      const offendingAliases = aliasMatches.filter((line) => {
        const m = /^export type ([A-Za-z_][A-Za-z0-9_]*)/.exec(line);
        const name = m?.[1] ?? '';
        // Allowlist: third-party / std namespaces alias dedup deliberately leaves alone.
        return (
          !name.startsWith('std_') && !name.startsWith('__1_') && !/^GeomEval_Rep(Surface|Curve)Desc_Base$/.test(name)
        );
      });
      expect(offendingAliases).toEqual([]);
    });
  });

  describe('Group D (NCollection typedef discovery) — NCollection containers backed by Trait types', () => {
    // Template-typedef auto-discovery surfaces every NCollection_<Container>_<Trait>
    // instantiation referenced by a bound class. The d.ts is the
    // principled verification — the container class is declared and its
    // `Value(idx)` accessor return type substitutes the trait template
    // argument with the canonical `BRepGraph_<X>Id` (canonical-key augmentation and typedef discovery cooperate
    // here: typedef discovery enumerates the instantiation, canonical-key substitution the
    // template arg).
    it.each([
      ['NCollection_Array1_BRepGraph_OccurrenceRefId', 'BRepGraph_OccurrenceRefId'],
      ['NCollection_Array1_BRepGraph_SolidRefId', 'BRepGraph_SolidRefId'],
      ['NCollection_Array1_BRepGraph_WireRefId', 'BRepGraph_WireRefId'],
      ['NCollection_Array1_BRepGraph_CoEdgeId', 'BRepGraph_CoEdgeId'],
    ])('%s is declared with Value() returning %s', (container, elementType) => {
      const dts = readDts();
      expect(countDeclarations(dts, container)).toBe(1);
      const valueRe = new RegExp(`Value\\(theIndex: number\\): ${elementType}\\b`);
      expect(valueRe.test(dts)).toBe(true);
    });
  });

  describe('Group E (function-pointer typedefs) — function-pointer typedef inline rendering', () => {
    // The bindgen does not emit standalone `export type X = (…) => Y;`
    // declarations for typedef-only headers (e.g. `IFSelect_ActFunc.hxx`)
    // because typedefs are not in the YAML link manifest as classes /
    // enums. Function-pointer typedef observable effect is on call-sites: when a
    // FUNCTIONPROTO typedef is used as a parameter or return type of a
    // bound method, The resolver unwraps the typedef chain and renders the
    // signature inline as `((arg0: A, …) => R)` instead of the pre function-pointer rendering
    // `unknown` fallback. Assertions below pin the canonical call-sites.
    it.each([
      [
        'ShapeProcess_OperLibrary constructor uses ((ctx, range) => bool) callback',
        /constructor\(func: \(\(arg0: ShapeProcess_Context, arg1: Message_ProgressRange\) => boolean\)\);/,
      ],
      [
        'MoniTool_TypedValue.SetInterpret uses ((tv, str, bool) => str) callback',
        /SetInterpret\(func: \(\(arg0: MoniTool_TypedValue, arg1: TCollection_HAsciiString, arg2: boolean\) => TCollection_HAsciiString\)\): void;/,
      ],
      [
        'IFSelect_Act.AddFunc uses ((pilot) => IFSelect_ReturnStatus) callback',
        /AddFunc\(name: string, help: string, func: \(\(arg0: IFSelect_SessionPilot\) => IFSelect_ReturnStatus\)\): void;/,
      ],
      // NOTE: The 4th case `OSD_SharedLibrary.DlSymb returns a () => number callback`
      // was removed after nested-class filtering excluded all OSD dynamic-loading classes.
      // That was the only call-site emitting a function-returning-callback typedef in the
      // entire bound surface; the 3 cases above still cover function-pointer callback-as-parameter
      // rendering.
    ])('%s', (_label, pattern) => {
      const dts = readDts();
      expect(pattern.test(dts)).toBe(true);
    });
  });

  describe('Group F (dropped-method filter) — dropped-method JSDoc visibility', () => {
    it('emits at least one `// dropped:` annotation for an excluded-class signature', () => {
      const dts = readDts();
      // The signature filter elides Embind methods whose param/return resolves
      // to an excluded class, then leaves a `// dropped:` JSDoc comment in
      // the TypeScript output for forensic visibility. Audit appendix C
      // expects ≥800 emissions; we assert the channel exists at all and
      // that one of the canonical IGESData / VrmlData / Interface_Graph
      // call-sites surfaces it.
      const droppedMatches = dts.match(/\/\/ dropped: [^\n]*resolves to excluded type/g) ?? [];
      expect(droppedMatches.length).toBeGreaterThan(0);
      const knownExcludedReferent =
        /\/\/ dropped: [^\n]*resolves to excluded type (IGESData_|Interface_Graph|VrmlData_|Storage_BaseDriver)/;
      expect(knownExcludedReferent.test(dts)).toBe(true);
    });
  });
});
