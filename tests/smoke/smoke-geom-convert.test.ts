/**
 * Smoke tests: Geometry conversion utilities.
 *
 * Validates GeomLib.To3d for lifting 2D geometry to 3D --
 * used by brepjs for surface/curve analysis.
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: Geometry conversion', () => {
  beforeAll(async () => { await initOC(); });

  it('should lift a 2D line to 3D via GeomLib.To3d on a known plane', () => {
    const oc = getOC();
    using origin2d = new oc.gp_Pnt2d(0, 0);
    using dir2d = new oc.gp_Dir2d(1, 0);
    using ax2d = new oc.gp_Ax2d(origin2d, dir2d);
    using line2d = new oc.Geom2d_Line(ax2d);

    using ax3Origin = new oc.gp_Pnt(0, 0, 0);
    using ax3Dir = new oc.gp_Dir(0, 0, 1);
    using ax2 = new oc.gp_Ax2(ax3Origin, ax3Dir);

    using curve3d = oc.GeomLib.To3d(ax2, line2d);

    using inP0 = new oc.gp_Pnt(0, 0, 0);
    curve3d.D0(0, inP0);
    expect(Math.abs(inP0.Z())).toBeLessThan(1e-10);

    using inP1 = new oc.gp_Pnt(0, 0, 0);
    curve3d.D0(5, inP1);
    expect(Math.abs(inP1.Z())).toBeLessThan(1e-10);
    expect(Math.abs(inP1.X() - 5)).toBeLessThan(1e-6);
  });

  it('should convert a Geom2d_Circle Value to a 2D point at the expected position', () => {
    const oc = getOC();
    using origin = new oc.gp_Pnt2d(0, 0);
    using dir = new oc.gp_Dir2d(1, 0);
    using ax = new oc.gp_Ax2d(origin, dir);
    using circle = new oc.Geom2d_Circle(ax, 10, true);

    using p0 = circle.Value(0);
    expect(Math.abs(p0.X() - 10)).toBeLessThan(1e-6);
    expect(Math.abs(p0.Y())).toBeLessThan(1e-6);

    using pHalf = circle.Value(Math.PI);
    expect(Math.abs(pHalf.X() + 10)).toBeLessThan(1e-6);
    expect(Math.abs(pHalf.Y())).toBeLessThan(1e-6);
  });
});
