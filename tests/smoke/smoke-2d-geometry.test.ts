/**
 * Smoke tests: 2D geometry construction.
 *
 * Demonstrates:
 * - Working with gp_Pnt2d, gp_Vec2d, gp_Dir2d
 * - Creating 2D circles, lines, and curves
 * - Geom2d_BSplineCurve via Geom2dAPI_Interpolate
 * - 2D geometric construction (GCE2d)
 * - 2D transformations (gp_Trsf2d)
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: 2D geometry', () => {
  beforeAll(async () => { await initOC(); });

  it('should expose X and Y coordinates for gp_Pnt2d', () => {
    const oc = getOC();
    using pt = new oc.gp_Pnt2d(7, 13);
    expect(pt.X()).toBe(7);
    expect(pt.Y()).toBe(13);

    using gpPnt2d = new oc.gp_Pnt2d(0, 0);
    const dist = pt.Distance(gpPnt2d);
    expect(dist).toBeCloseTo(Math.sqrt(7 * 7 + 13 * 13), 5);
  });

  it('should compute magnitude and direction for gp_Vec2d', () => {
    const oc = getOC();
    using vec = new oc.gp_Vec2d(3, 4);
    expect(vec.Magnitude()).toBe(5);
    using gpVec2d = new oc.gp_Vec2d(-4, 3);
    expect(vec.IsNormal(gpVec2d, 1e-6)).toBe(true);
  });

  it('should create a 2D circle with correct radius using Geom2d_Circle', () => {
    const oc = getOC();
    using center = new oc.gp_Pnt2d(0, 0);
    using dir = new oc.gp_Dir2d(1, 0);
    using ax = new oc.gp_Ax2d(center, dir);

    using circle = new oc.Geom2d_Circle(ax, 10, true);
    expect(circle.Radius()).toBe(10);

    using pt = circle.EvalD0(0);
    expect(pt.X()).toBe(10);
    expect(pt.Y()).toBe(0);

    using ptHalf = circle.EvalD0(Math.PI);
    expect(ptHalf.X()).toBe(-10);
    expect(ptHalf.Y()).toBeCloseTo(0, 10);
  });

  it('should create a 2D line with correct direction using Geom2d_Line', () => {
    const oc = getOC();
    using origin = new oc.gp_Pnt2d(0, 0);
    using dir = new oc.gp_Dir2d(1, 1);
    using ax = new oc.gp_Ax2d(origin, dir);

    using line = new oc.Geom2d_Line(ax);
    using pt = line.EvalD0(Math.SQRT2);

    expect(pt.X()).toBe(1);
    expect(pt.Y()).toBe(1);
  });

  it('should apply 2D translation with gp_Trsf2d', () => {
    const oc = getOC();
    using pt = new oc.gp_Pnt2d(5, 5);
    using trsf = new oc.gp_Trsf2d();
    using gpVec2d2 = new oc.gp_Vec2d(10, 20);
    trsf.SetTranslation(gpVec2d2);

    using transformed = pt.Transformed(trsf);
    expect(transformed.X()).toBe(15);
    expect(transformed.Y()).toBe(25);
  });

  it('should apply 2D rotation with gp_Trsf2d', () => {
    const oc = getOC();
    using pt = new oc.gp_Pnt2d(10, 0);
    using trsf = new oc.gp_Trsf2d();
    using gpPnt2d2 = new oc.gp_Pnt2d(0, 0);
    trsf.SetRotation(gpPnt2d2, Math.PI / 2);

    using transformed = pt.Transformed(trsf);
    expect(transformed.X()).toBeCloseTo(0, 10);
    expect(transformed.Y()).toBeCloseTo(10, 10);
  });

  it('should construct a circle from center and radius with GC_MakeCircle2d', () => {
    const oc = getOC();
    using center = new oc.gp_Pnt2d(5, 5);
    using gpDir2d = new oc.gp_Dir2d(1, 0);
    using ax = new oc.gp_Ax2d(center, gpDir2d);
    using maker = new oc.GC_MakeCircle2d(ax, 8, true);

    using circle = maker.Value();
    expect(circle.Radius()).toBe(8);
  });
});
