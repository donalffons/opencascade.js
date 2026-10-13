/**
 * Smoke tests: Curve analysis and point sampling.
 *
 * Demonstrates:
 * - Wrapping edges with BRepAdaptor_Curve for analysis
 * - Evaluating curve points at parameters
 * - Getting curve type, degree, and parametric range
 * - Sampling points with GCPnts_UniformAbscissa (equal arc-length spacing)
 * - Sampling points with GCPnts_UniformDeflection (chord-deviation spacing)
 * - Measuring edge length
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: Curve analysis and sampling', () => {
  beforeAll(async () => { await initOC(); });

  it('should wrap a line edge and evaluate endpoints with BRepAdaptor_Curve', () => {
    const oc = getOC();
    using p1 = new oc.gp_Pnt(0, 0, 0);
    using p2 = new oc.gp_Pnt(10, 0, 0);
    using edgeMaker = new oc.BRepBuilderAPI_MakeEdge(p1, p2);
    using edge = edgeMaker.Edge();

    using adaptor = new oc.BRepAdaptor_Curve(edge);

    const first = adaptor.FirstParameter();
    const last = adaptor.LastParameter();
    expect(first).toBe(0);
    expect(last).toBe(10);

    const curveType = adaptor.GetType();
    expect(curveType).toBe(oc.GeomAbs_CurveType.GeomAbs_Line);

    using startPt = adaptor.Value(first);
    expect(startPt.X()).toBe(0);

    using endPt = adaptor.Value(last);
    expect(endPt.X()).toBe(10);
  });

  it('should identify a circular edge with BRepAdaptor_Curve', () => {
    const oc = getOC();
    using gpPnt = new oc.gp_Pnt(0, 0, 0);
    using gpDir = new oc.gp_Dir(0, 0, 1);
    using ax = new oc.gp_Ax2(
      gpPnt,
      gpDir,
    );
    using circle = new oc.Geom_Circle(ax, 10);
    using edgeMaker = new oc.BRepBuilderAPI_MakeEdge(circle);
    using edge = edgeMaker.Edge();

    using adaptor = new oc.BRepAdaptor_Curve(edge);

    expect(adaptor.GetType()).toBe(oc.GeomAbs_CurveType.GeomAbs_Circle);

    using circleData = adaptor.Circle();
    expect(circleData.Radius()).toBe(10);
  });

  it('should sample a line at equal intervals with GCPnts_UniformAbscissa', () => {
    const oc = getOC();
    using p1 = new oc.gp_Pnt(0, 0, 0);
    using p2 = new oc.gp_Pnt(100, 0, 0);
    using edgeMaker = new oc.BRepBuilderAPI_MakeEdge(p1, p2);
    using edge = edgeMaker.Edge();
    using adaptor = new oc.BRepAdaptor_Curve(edge);

    using sampler = new oc.GCPnts_UniformAbscissa(adaptor, 11, 1e-6);

    expect(sampler.IsDone()).toBe(true);
    expect(sampler.NbPoints()).toBe(11);

    const firstParam = sampler.Parameter(1);
    const lastParam = sampler.Parameter(11);

    using firstPt = adaptor.Value(firstParam);
    expect(firstPt.X()).toBe(0);

    using lastPt = adaptor.Value(lastParam);
    expect(lastPt.X()).toBe(100);

    const midParam = sampler.Parameter(6);
    using midPt = adaptor.Value(midParam);
    expect(midPt.X()).toBe(50);
  });

  it('should sample a circle at equal arc-lengths with GCPnts_UniformAbscissa', () => {
    const oc = getOC();
    using gpPnt2 = new oc.gp_Pnt(0, 0, 0);
    using gpDir2 = new oc.gp_Dir(0, 0, 1);
    using ax = new oc.gp_Ax2(
      gpPnt2,
      gpDir2,
    );
    using circle = new oc.Geom_Circle(ax, 10);
    using edgeMaker = new oc.BRepBuilderAPI_MakeEdge(circle);
    using edge = edgeMaker.Edge();
    using adaptor = new oc.BRepAdaptor_Curve(edge);

    using sampler = new oc.GCPnts_UniformAbscissa(adaptor, 37, 1e-6);

    expect(sampler.IsDone()).toBe(true);
    expect(sampler.NbPoints()).toBe(37);

    using p0 = adaptor.Value(sampler.Parameter(1));
    expect(p0.X()).toBe(10);
    expect(p0.Y()).toBe(0);
  });

  it('should sample with chord deviation control using GCPnts_UniformDeflection', () => {
    const oc = getOC();
    using gpPnt3 = new oc.gp_Pnt(0, 0, 0);
    using gpDir3 = new oc.gp_Dir(0, 0, 1);
    using ax = new oc.gp_Ax2(
      gpPnt3,
      gpDir3,
    );
    using circle = new oc.Geom_Circle(ax, 10);
    using edgeMaker = new oc.BRepBuilderAPI_MakeEdge(circle);
    using edge = edgeMaker.Edge();
    using adaptor = new oc.BRepAdaptor_Curve(edge);

    using sampler = new oc.GCPnts_UniformDeflection(adaptor, 0.1, true);

    expect(sampler.IsDone()).toBe(true);
    expect(sampler.NbPoints()).toBe(24);

    for (let i = 1; i <= sampler.NbPoints(); i++) {
      using pt = sampler.Value(i);
      const distFromCenter = Math.sqrt(pt.X() ** 2 + pt.Y() ** 2);
      expect(distFromCenter).toBeCloseTo(10, 0);
    }
  });
});
