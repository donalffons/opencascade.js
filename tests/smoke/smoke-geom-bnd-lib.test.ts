/**
 * Smoke: GeomBndLib_BSplineCurve bounding box (OCCT 8 variant-based GeomBndLib).
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: GeomBndLib BSpline curve bounds', () => {
  beforeAll(async () => {
    await initOC();
  });

  it('fills a non-void Bnd_Box for a known BSpline via GeomBndLib_BSplineCurve.Box', () => {
    const oc = getOC();
    using points = new oc.NCollection_Array1_gp_Pnt(1, 4);
    {
      using p1 = new oc.gp_Pnt(0, 0, 0);
      using p2 = new oc.gp_Pnt(10, 10, 0);
      using p3 = new oc.gp_Pnt(20, 0, 0);
      using p4 = new oc.gp_Pnt(30, 10, 0);
      points.SetValue(1, p1);
      points.SetValue(2, p2);
      points.SetValue(3, p3);
      points.SetValue(4, p4);
    }

    using approx = new oc.GeomAPI_PointsToBSpline(
      points,
      3,
      8,
      oc.GeomAbs_Shape.GeomAbs_C2,
      1e-3,
    );
    expect(approx.IsDone()).toBe(true);

    using curve = approx.Curve();
    using bndLib = new oc.GeomBndLib_BSplineCurve(curve);
    using boxed = bndLib.Box(1e-7);
    expect(boxed.IsVoid()).toBe(false);

    using cMin = boxed.CornerMin();
    using cMax = boxed.CornerMax();
    const xmin = cMin.X();
    const xmax = cMax.X();
    const ymin = cMin.Y();
    const ymax = cMax.Y();
    expect(xmax - xmin).toBeGreaterThan(25);
    expect(ymax - ymin).toBeGreaterThan(8);
    // BSpline control hull allows a generous Y span vs the chordal shortcut path.
    expect(ymax - ymin).toBeLessThan(30);
  });
});
