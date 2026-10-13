/**
 * Smoke tests: Same-arity multi-argument constructor dispatch.
 *
 * Validates that constructors with the same number of arguments but different
 * OCCT class types at specific positions are dispatched correctly. This is the
 * primary pattern that the JS dispatch migration must preserve — embind's
 * patched runtime uses typeof/instanceof to route calls.
 *
 * Patterns tested:
 * - 2-arg: (gp_Pnt, gp_Pnt) vs (TopoDS_Vertex, TopoDS_Vertex)
 * - 3-arg: (gp_Pnt, gp_Pnt, gp_Pnt) vs (gp_Pnt, gp_Vec, gp_Pnt)
 * - 3-arg: (gp_Lin, number, number) vs (gp_Lin, gp_Pnt, gp_Pnt)
 * - 3-arg: mixed number vs gp_Pnt in trailing positions
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: same-arity multi-arg dispatch', () => {
  beforeAll(async () => { await initOC(); });

  describe('BRepBuilderAPI_MakeEdge — 2-arg object-type dispatch', () => {
    it('should dispatch (gp_Pnt, gp_Pnt) correctly', () => {
      const oc = getOC();
      using p1 = new oc.gp_Pnt(0, 0, 0);
      using p2 = new oc.gp_Pnt(10, 0, 0);
      using edge = new oc.BRepBuilderAPI_MakeEdge(p1, p2);
      expect(edge.IsDone()).toBe(true);
      using disposable = edge.Edge();
      expect(disposable.IsNull()).toBe(false);
    });

    it('should dispatch (TopoDS_Vertex, TopoDS_Vertex) correctly', () => {
      const oc = getOC();
      using builder = new oc.BRep_Builder();
      using inV1 = new oc.TopoDS_Vertex();
      using inV2 = new oc.TopoDS_Vertex();
      using p1 = new oc.gp_Pnt(0, 0, 0);
      using p2 = new oc.gp_Pnt(10, 0, 0);
      builder.MakeVertex(inV1, p1, 1e-6);
      builder.MakeVertex(inV2, p2, 1e-6);

      using edge = new oc.BRepBuilderAPI_MakeEdge(inV1, inV2);
      expect(edge.IsDone()).toBe(true);
      using disposable4 = edge.Edge();
      expect(disposable4.IsNull()).toBe(false);
    });
  });

  describe('GC_MakeArcOfCircle — 3-arg object-type dispatch', () => {
    it('should dispatch (gp_Pnt, gp_Pnt, gp_Pnt) — three points', () => {
      const oc = getOC();
      using p1 = new oc.gp_Pnt(0, 0, 0);
      using p2 = new oc.gp_Pnt(5, 5, 0);
      using p3 = new oc.gp_Pnt(10, 0, 0);
      using arc = new oc.GC_MakeArcOfCircle(p1, p2, p3);
      expect(arc.IsDone()).toBe(true);
    });

    it('should dispatch (gp_Pnt, gp_Vec, gp_Pnt) — tangent arc', () => {
      const oc = getOC();
      using p1 = new oc.gp_Pnt(0, 0, 0);
      using tangent = new oc.gp_Vec(1, 1, 0);
      using p2 = new oc.gp_Pnt(10, 0, 0);
      using arc = new oc.GC_MakeArcOfCircle(p1, tangent, p2);
      expect(arc.IsDone()).toBe(true);
    });
  });

  describe('BRepBuilderAPI_MakeEdge — 3-arg mixed type dispatch', () => {
    it('should dispatch (gp_Lin, number, number) — parametric range', () => {
      const oc = getOC();
      using origin = new oc.gp_Pnt(0, 0, 0);
      using dir = new oc.gp_Dir(1, 0, 0);
      using lin = new oc.gp_Lin(origin, dir);
      using edge = new oc.BRepBuilderAPI_MakeEdge(lin, 0, 10);
      expect(edge.IsDone()).toBe(true);
    });

    it('should dispatch (gp_Lin, gp_Pnt, gp_Pnt) — point range', () => {
      const oc = getOC();
      using origin = new oc.gp_Pnt(0, 0, 0);
      using dir = new oc.gp_Dir(1, 0, 0);
      using lin = new oc.gp_Lin(origin, dir);
      using p1 = new oc.gp_Pnt(2, 0, 0);
      using p2 = new oc.gp_Pnt(8, 0, 0);
      using edge = new oc.BRepBuilderAPI_MakeEdge(lin, p1, p2);
      expect(edge.IsDone()).toBe(true);
    });

    it('should dispatch (gp_Lin, TopoDS_Vertex, TopoDS_Vertex) — vertex range', () => {
      const oc = getOC();
      using origin = new oc.gp_Pnt(0, 0, 0);
      using dir = new oc.gp_Dir(1, 0, 0);
      using lin = new oc.gp_Lin(origin, dir);

      using builder = new oc.BRep_Builder();
      using v1 = new oc.TopoDS_Vertex();
      using v2 = new oc.TopoDS_Vertex();
      using gpPnt = new oc.gp_Pnt(2, 0, 0);
      builder.MakeVertex(v1, gpPnt, 1e-6);
      using gpPnt2 = new oc.gp_Pnt(8, 0, 0);
      builder.MakeVertex(v2, gpPnt2, 1e-6);

      using edge = new oc.BRepBuilderAPI_MakeEdge(lin, v1, v2);
      expect(edge.IsDone()).toBe(true);
    });
  });

  describe('GC_MakeSegment — 3-arg mixed dispatch', () => {
    it('should dispatch (gp_Lin, number, number) — parametric', () => {
      const oc = getOC();
      using gpPnt3 = new oc.gp_Pnt(0, 0, 0);
      using gpDir = new oc.gp_Dir(1, 0, 0);
      using lin = new oc.gp_Lin(gpPnt3, gpDir);
      using seg = new oc.GC_MakeSegment(lin, 0, 10);
      expect(seg.IsDone()).toBe(true);
      using curve = seg.Value();
      expect(curve.isNull()).toBe(false);
    });

    it('should dispatch (gp_Lin, gp_Pnt, gp_Pnt) — point endpoints', () => {
      const oc = getOC();
      using gpPnt4 = new oc.gp_Pnt(0, 0, 0);
      using gpDir2 = new oc.gp_Dir(1, 0, 0);
      using lin = new oc.gp_Lin(gpPnt4, gpDir2);
      using p1 = new oc.gp_Pnt(2, 0, 0);
      using p2 = new oc.gp_Pnt(8, 0, 0);
      using seg = new oc.GC_MakeSegment(lin, p1, p2);
      expect(seg.IsDone()).toBe(true);
    });

    it('should dispatch (gp_Lin, gp_Pnt, number) — point + param', () => {
      const oc = getOC();
      using gpPnt5 = new oc.gp_Pnt(0, 0, 0);
      using gpDir3 = new oc.gp_Dir(1, 0, 0);
      using lin = new oc.gp_Lin(gpPnt5, gpDir3);
      using p = new oc.gp_Pnt(2, 0, 0);
      using seg = new oc.GC_MakeSegment(lin, p, 8);
      expect(seg.IsDone()).toBe(true);
    });
  });
});
