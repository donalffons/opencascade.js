/**
 * Verifies `BRepLib.BuildCurve3d` accepts every trailing-default arity, including explicit
 * `undefined` values, and returns a boolean for each form.
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: static method dispatch with trailing-default omission', () => {
  beforeAll(async () => { await initOC(); });

  /**
   * Build a single edge from two points so BuildCurve3d has something to
   * recompute the 3D curve representation for. The edge already has a 3D
   * curve from BRepBuilderAPI_MakeEdge, so BuildCurve3d is a no-op that
   * returns `true`; the value of the test is exercising the dispatcher,
   * not the geometric outcome.
   */
  const makeEdge = () => {
    const oc = getOC();
    using p1 = new oc.gp_Pnt(0, 0, 0);
    using p2 = new oc.gp_Pnt(10, 0, 0);
    using maker = new oc.BRepBuilderAPI_MakeEdge(p1, p2);
    return maker.Edge();
  };

  describe('BRepLib.BuildCurve3d(Edge, Tolerance?, Continuity?, MaxDegree?, MaxSegment?)', () => {
    it('arity-1: BuildCurve3d(edge) — all four trailing defaults omitted', () => {
      const oc = getOC();
      using edge = makeEdge();
      const result = oc.BRepLib.BuildCurve3d(edge);
      expect(typeof result).toBe('boolean');
    });

    it('arity-2: BuildCurve3d(edge, 1e-5)', () => {
      const oc = getOC();
      using edge = makeEdge();
      const result = oc.BRepLib.BuildCurve3d(edge, 1e-5);
      expect(typeof result).toBe('boolean');
    });

    it('arity-3: BuildCurve3d(edge, 1e-5, GeomAbs_C1)', () => {
      const oc = getOC();
      using edge = makeEdge();
      const result = oc.BRepLib.BuildCurve3d(edge, 1e-5, oc.GeomAbs_Shape.GeomAbs_C1);
      expect(typeof result).toBe('boolean');
    });

    it('arity-4: BuildCurve3d(edge, 1e-5, GeomAbs_C1, 14)', () => {
      const oc = getOC();
      using edge = makeEdge();
      const result = oc.BRepLib.BuildCurve3d(edge, 1e-5, oc.GeomAbs_Shape.GeomAbs_C1, 14);
      expect(typeof result).toBe('boolean');
    });

    it('arity-5: BuildCurve3d(edge, 1e-5, GeomAbs_C1, 14, 0) — full arity', () => {
      const oc = getOC();
      using edge = makeEdge();
      const result = oc.BRepLib.BuildCurve3d(edge, 1e-5, oc.GeomAbs_Shape.GeomAbs_C1, 14, 0);
      expect(typeof result).toBe('boolean');
    });

    it('explicit undefined for trailing primitive: BuildCurve3d(edge, undefined, undefined, undefined, undefined)', () => {
      const oc = getOC();
      using edge = makeEdge();
      // The static `BRepLib.BuildCurve3d` binding declares all four trailing
      // defaults as optional params
      // `(E, Tolerance?, Continuity?, MaxDegree?, MaxSegment?)`, so the
      // explicit-undefined call shape is type-valid and routes through the
      // runtime fan-out to the OCCT default arguments.
      const result = oc.BRepLib.BuildCurve3d(edge, undefined, undefined, undefined, undefined);
      expect(typeof result).toBe('boolean');
    });
  });
});
