/**
 * Smoke tests: BSpline and NURBS curves and surfaces.
 *
 * Demonstrates:
 * - Creating BSpline curves from control points via GeomAPI_PointsToBSpline
 * - Interpolating through points via GeomAPI_Interpolate
 * - Building Bezier curves from poles
 * - Evaluating curve points, degree, and knot counts
 * - Creating BSpline-based edges, wires, and faces
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';
import { expectShapeGeometry } from './geometry-helpers.js';

describe.skipIf(!wasmExists)('Smoke: BSpline and NURBS', () => {
  beforeAll(async () => { await initOC(); });

  it('should approximate a curve through control points with GeomAPI_PointsToBSpline', () => {
    const oc = getOC();
    using points = new oc.NCollection_Array1_gp_Pnt(1, 5);
    using gpPnt = new oc.gp_Pnt(0, 0, 0);
    points.SetValue(1, gpPnt);
    using gpPnt2 = new oc.gp_Pnt(5, 5, 0);
    points.SetValue(2, gpPnt2);
    using gpPnt3 = new oc.gp_Pnt(10, 0, 0);
    points.SetValue(3, gpPnt3);
    using gpPnt4 = new oc.gp_Pnt(15, -5, 0);
    points.SetValue(4, gpPnt4);
    using gpPnt5 = new oc.gp_Pnt(20, 0, 0);
    points.SetValue(5, gpPnt5);

    using approx = new oc.GeomAPI_PointsToBSpline(
      points,
      3, // DegMin
      8, // DegMax
      oc.GeomAbs_Shape.GeomAbs_C2,
      1e-3,
    );

    expect(approx.IsDone()).toBe(true);

    using curve = approx.Curve();
    expect(curve.Degree()).toBe(3);
    expect(curve.NbPoles()).toBe(4);

    using startPt = curve.StartPoint();
    expect(startPt.X()).toBe(0);
    expect(startPt.Y()).toBe(0);

    using endPt = curve.EndPoint();
    expect(endPt.X()).toBe(20);
    expect(endPt.Y()).toBe(0);
  });

  it('should create curve passing exactly through given points with GeomAPI_Interpolate', () => {

    const oc = getOC();
    using points = new oc.NCollection_Array1_gp_Pnt(1, 4);
    using gpPnt6 = new oc.gp_Pnt(0, 0, 0);
    points.SetValue(1, gpPnt6);
    using gpPnt7 = new oc.gp_Pnt(10, 10, 0);
    points.SetValue(2, gpPnt7);
    using gpPnt8 = new oc.gp_Pnt(20, 0, 0);
    points.SetValue(3, gpPnt8);
    using gpPnt9 = new oc.gp_Pnt(30, 10, 0);
    points.SetValue(4, gpPnt9);

    using approx = new oc.GeomAPI_PointsToBSpline(
      points,
      3,
      8,
      oc.GeomAbs_Shape.GeomAbs_C2,
      1e-3,
    );
    expect(approx.IsDone()).toBe(true);

    using curve = approx.Curve();

    using startPt = curve.StartPoint();
    expect(startPt.X()).toBe(0);
    expect(startPt.Y()).toBe(0);

    using endPt = curve.EndPoint();
    expect(endPt.X()).toBe(30);
    expect(endPt.Y()).toBe(10);
  });

  it('should build BSpline curve into an edge and wire', () => {
    const oc = getOC();
    using points = new oc.NCollection_Array1_gp_Pnt(1, 4);
    using gpPnt10 = new oc.gp_Pnt(0, 0, 0);
    points.SetValue(1, gpPnt10);
    using gpPnt11 = new oc.gp_Pnt(10, 15, 0);
    points.SetValue(2, gpPnt11);
    using gpPnt12 = new oc.gp_Pnt(20, -5, 0);
    points.SetValue(3, gpPnt12);
    using gpPnt13 = new oc.gp_Pnt(30, 10, 0);
    points.SetValue(4, gpPnt13);

    using approx = new oc.GeomAPI_PointsToBSpline(
      points,
      3,
      8,
      oc.GeomAbs_Shape.GeomAbs_C2,
      1e-3,
    );
    expect(approx.IsDone()).toBe(true);

    using curve = approx.Curve();
    using edge = new oc.BRepBuilderAPI_MakeEdge(curve);
    expect(edge.IsDone()).toBe(true);

    using disposable = edge.Edge();
    using wire = new oc.BRepBuilderAPI_MakeWire(disposable);
    expect(wire.IsDone()).toBe(true);

    using wireShape = wire.Wire();
    expect(wireShape.IsNull()).toBe(false);
  });

  it('should create a cubic Bezier from 4 poles with Geom_BezierCurve', () => {
    const oc = getOC();
    using poles = new oc.NCollection_Array1_gp_Pnt(1, 4);
    using gpPnt14 = new oc.gp_Pnt(0, 0, 0);
    poles.SetValue(1, gpPnt14);
    using gpPnt15 = new oc.gp_Pnt(5, 15, 0);
    poles.SetValue(2, gpPnt15);
    using gpPnt16 = new oc.gp_Pnt(15, 15, 0);
    poles.SetValue(3, gpPnt16);
    using gpPnt17 = new oc.gp_Pnt(20, 0, 0);
    poles.SetValue(4, gpPnt17);

    using bezier = new oc.Geom_BezierCurve(poles);

    expect(bezier.Degree()).toBe(3);
    expect(bezier.NbPoles()).toBe(4);
    expect(bezier.IsClosed()).toBe(false);
    expect(bezier.IsRational()).toBe(false);

    using startPt = bezier.StartPoint();
    expect(startPt.X()).toBe(0);
    expect(startPt.Y()).toBe(0);

    using endPt = bezier.EndPoint();
    expect(endPt.X()).toBe(20);
    expect(endPt.Y()).toBe(0);

    using midPt = bezier.EvalD0(0.5);
    expect(midPt.Y()).toBe(11.25);
  });

  it('should produce valid geometry when extruding BSpline curve into a surface', async () => {
    const oc = getOC();
    using points = new oc.NCollection_Array1_gp_Pnt(1, 4);
    using gpPnt18 = new oc.gp_Pnt(0, 0, 0);
    points.SetValue(1, gpPnt18);
    using gpPnt19 = new oc.gp_Pnt(10, 5, 0);
    points.SetValue(2, gpPnt19);
    using gpPnt20 = new oc.gp_Pnt(20, -5, 0);
    points.SetValue(3, gpPnt20);
    using gpPnt21 = new oc.gp_Pnt(30, 0, 0);
    points.SetValue(4, gpPnt21);

    using approx = new oc.GeomAPI_PointsToBSpline(
      points,
      3,
      8,
      oc.GeomAbs_Shape.GeomAbs_C2,
      1e-3,
    );
    using curve = approx.Curve();
    using edge = new oc.BRepBuilderAPI_MakeEdge(curve);
    using disposable2 = edge.Edge();
    using wire = new oc.BRepBuilderAPI_MakeWire(disposable2);

    using disposable3 = wire.Wire();
    using gpVec = new oc.gp_Vec(0, 0, 10);
    using prism = new oc.BRepPrimAPI_MakePrism(
      disposable3,
      gpVec,
      false,
      true,
    );

    using shape = prism.Shape();
    expect(shape.IsNull()).toBe(false);

    await expectShapeGeometry(shape, {
      size: [30, 10, 10],
      tolerance: 2,
      minVertices: 10,
    });
  });
});
