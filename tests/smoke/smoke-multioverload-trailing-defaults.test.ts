/**
 * Verifies `BRepOffsetAPI_MakeFilling.Add(edge, order, isBound = true)` accepts the explicit
 * full-arity call and the trailing-default two-argument call.
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: TR-MO multi-overload trailing-default gate', () => {
  beforeAll(async () => { await initOC(); });

  describe('BRepOffsetAPI_MakeFilling.Add(edge, order, IsBound = true)', () => {
    it('counterfactual: 3-arg full-arity call succeeds (proves binding is sound)', () => {
      const oc = getOC();
      using p1 = new oc.gp_Pnt(0, 0, 0);
      using p2 = new oc.gp_Pnt(10, 0, 0);
      using em = new oc.BRepBuilderAPI_MakeEdge(p1, p2);
      using edge = em.Edge();
      using filling = new oc.BRepOffsetAPI_MakeFilling();
      expect(() => {
        filling.Add(edge, oc.GeomAbs_Shape.GeomAbs_C0, true);
      }).not.toThrow();
    });

    it('TR-MO defect: 2-arg call should succeed (IsBound defaults to true) but throws today', () => {
      const oc = getOC();
      using p1 = new oc.gp_Pnt(0, 0, 0);
      using p2 = new oc.gp_Pnt(10, 0, 0);
      using em = new oc.BRepBuilderAPI_MakeEdge(p1, p2);
      using edge = em.Edge();
      using filling = new oc.BRepOffsetAPI_MakeFilling();
      expect(() => {
        // FINDING: the 2-arg `Add(edge, Order)` shape is type-ACCEPTED — not via
        // a trailing-default on the `(Constr, Order, IsBound)` overload, but
        // because `TopoDS_Edge` is structurally assignable to `TopoDS_Face`, so
        // the call binds to the sibling `Add(Support: TopoDS_Face, Order)` arity-2
        // overload at the type level. The type system therefore does NOT reject
        // this call (no @ts-expect-error). This is purely a RUNTIME pin: pre-Phase-4
        // the embind dispatch routes the edge to the `(Constr, Order, IsBound)`
        // branch and throws because IsBound is unset. It flips green once the
        // multi-overload trailing default (IsBound=true) is emitted.
        filling.Add(edge, oc.GeomAbs_Shape.GeomAbs_C0);
      }).not.toThrow();
    });
  });
});
