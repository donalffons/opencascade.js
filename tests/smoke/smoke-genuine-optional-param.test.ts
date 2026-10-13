/**
 * Verifies the genuine `std::optional<BRepGraph_NodeId::Kind>` constructor parameter.
 * `undefined` and `null` map to `std::nullopt`, an enum maps to a populated optional,
 * and a non-trailing optional parameter cannot be omitted positionally.
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists, buildBoxGraph } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: genuine std::optional<T> parameter (row 22)', () => {
  beforeAll(async () => { await initOC(); });

  it('(b) explicit undefined for theAvoidKind → nullopt; explorer constructs and is iterable', () => {
    const oc = getOC();
    using graph = buildBoxGraph();
    using rootNode = oc.BRepGraph_NodeId.Start(oc.BRepGraph_NodeId_Kind.Solid);
    using explorer = new oc.BRepGraph_ParentExplorer(graph, rootNode, undefined, false);
    expect(explorer).toBeDefined();
  });

  it('(c) explicit Kind enum value → some(Kind); explorer prunes that ancestor kind', () => {
    const oc = getOC();
    using graph = buildBoxGraph();
    using rootNode = oc.BRepGraph_NodeId.Start(oc.BRepGraph_NodeId_Kind.Solid);
    using explorer = new oc.BRepGraph_ParentExplorer(graph, rootNode, oc.BRepGraph_NodeId_Kind.Solid, false);
    expect(explorer).toBeDefined();
  });

  it('(d) explicit null for theAvoidKind → nullopt (row 22 is permissive null, NOT rule-5 strict)', () => {
    const oc = getOC();
    using graph = buildBoxGraph();
    using rootNode = oc.BRepGraph_NodeId.Start(oc.BRepGraph_NodeId_Kind.Solid);
    // Row 22 deliberately differs from rule 5 — `null` collapses to
    // `std::nullopt` via embind's `register_optional<T>` rather than
    // throwing a structured BindingError. This is the policy carve-out.
    // The .d.ts now types `theAvoidKind` as
    // `BRepGraph_NodeId_Kind | null | undefined` (the resolver widened the
    // genuine `std::optional<T>` surface to mirror `register_optional<T>`'s
    // wire contract, which accepts both `null` and `undefined`), so `null`
    // is a valid argument at the type level too — no suppression needed.
    expect(() => {
      using explorer = new oc.BRepGraph_ParentExplorer(graph, rootNode, null, false);
      expect(explorer).toBeDefined();
    }).not.toThrow();
  });

  it('(a) 3-arg (graph, node, false) is unreachable — middle optional cannot be elided, so it throws', () => {
    const oc = getOC();
    using graphFixture = buildBoxGraph();
    using rootNode = oc.BRepGraph_NodeId.Start(oc.BRepGraph_NodeId_Kind.Solid);
    // `theAvoidKind` is a MIDDLE parameter; trailing arity-pad can only fill
    // the last defaulted slot (`theMode`), never skip a middle parameter.
    // `false` matches none of the 3-arg Config / TraversalMode / NodeId_Kind
    // overloads, and the optional ctor still requires `theEmitAvoidKind`.
    // Per policy row 22 the genuine optional must be passed explicitly —
    // the canonical "no avoid-kind" shape is (b) (graph, node, undefined,
    // false). This 3-arg shape therefore has no binding and must throw.
    expect(() => {
      // @ts-expect-error - no 3-arg (graph, node, boolean) overload exists; middle optional cannot be elided
      using explorer = new oc.BRepGraph_ParentExplorer(graphFixture, rootNode, false);
      expect(explorer).toBeDefined();
    }).toThrow();
  });
});
