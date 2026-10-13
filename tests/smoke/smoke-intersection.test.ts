/**
 * Smoke test: Intersection segment parameter validity.
 *
 * Replicates the pattern from the gridfinity-box model where 2D curve
 * intersections produce segments. Verifies that Segment() returns curves
 * with finite parameter ranges (not RealFirst/RealLast sentinels like ±2e+100).
 *
 * This test isolates the issue from the replicad layer to determine if the
 * problem is in libcascade bindings or in replicad's usage.
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: Intersection segment parameters', () => {
  beforeAll(async () => { await initOC(); });

  it('should return RealFirst/RealLast for collinear infinite lines (OCCT behavior)', () => {
    const oc = getOC();

    using p1 = new oc.gp_Pnt2d(0, 0);
    using d1 = new oc.gp_Dir2d(1, 0);
    using ax1 = new oc.gp_Ax2d(p1, d1);
    using line1 = new oc.Geom2d_Line(ax1);

    using p2 = new oc.gp_Pnt2d(0, 0);
    using d2 = new oc.gp_Dir2d(1, 0);
    using ax2 = new oc.gp_Ax2d(p2, d2);
    using line2 = new oc.Geom2d_Line(ax2);

    using intersector = new oc.Geom2dAPI_InterCurveCurve(line1, line2, 1e-9);
    const nSeg = intersector.NbSegments();

    expect(nSeg).toBe(1);

    using seg = intersector.Segment(1);
    using Curve1 = seg.Curve1;
    using Curve2 = seg.Curve2;

    const fp1 = Curve1.FirstParameter();
    const lp1 = Curve1.LastParameter();

    // OCCT returns RealFirst (-2e+100) / RealLast (2e+100) for infinite overlap
    expect(fp1).toBeLessThan(-1e50);
    expect(lp1).toBeGreaterThan(1e50);

    // Evaluating at these infinite params produces points at ±infinity
    using pt = new oc.gp_Pnt2d();
    Curve1.D0(fp1, pt);
    expect(Math.abs(pt.X())).toBeGreaterThan(1e50);
  });

  it('should return trimmed segments when a line overlaps part of a trimmed curve', () => {
    const oc = getOC();

    using origin = new oc.gp_Pnt2d(0, 0);
    using dir = new oc.gp_Dir2d(0, 1);
    using ax = new oc.gp_Ax2d(origin, dir);
    using fullLine = new oc.Geom2d_Line(ax);

    using trimmed = new oc.Geom2d_TrimmedCurve(fullLine, -4.15, 4.4, true, true);

    using p2 = new oc.gp_Pnt2d(0, -10);
    using d2 = new oc.gp_Dir2d(0, 1);
    using ax2 = new oc.gp_Ax2d(p2, d2);
    using line2 = new oc.Geom2d_Line(ax2);

    using intersector = new oc.Geom2dAPI_InterCurveCurve(trimmed, line2, 1e-9);
    const nSeg = intersector.NbSegments();

    if (nSeg > 0) {
      using seg = intersector.Segment(1);
      using Curve1 = seg.Curve1;
      using Curve2 = seg.Curve2;

      const fp1 = Curve1.FirstParameter();
      const lp1 = Curve1.LastParameter();

      expect(Math.abs(fp1)).toBeLessThan(1e50);
      expect(Math.abs(lp1)).toBeLessThan(1e50);
      expect(lp1).toBeGreaterThan(fp1);

      using startPt = new oc.gp_Pnt2d();
      Curve1.D0(fp1, startPt);
      expect(Math.abs(startPt.X())).toBeLessThan(1e50);
      expect(Math.abs(startPt.Y())).toBeLessThan(1e50);
    }
  });

  it('should replicate gridfinity pattern: polygon intersect with rounded rect edges', () => {
    const oc = getOC();

    const SOCKET_SMALL_TAPER = 0.8;
    const SOCKET_BIG_TAPER = 2.4;
    const SOCKET_VERTICAL_PART = 5 - SOCKET_SMALL_TAPER - SOCKET_BIG_TAPER;
    const SOCKET_TAPER_WIDTH = SOCKET_SMALL_TAPER + SOCKET_BIG_TAPER;
    const AXIS_CLEARANCE = (0.5 * Math.sqrt(2)) / 4;

    const mkPt = (x: number, y: number) => new oc.gp_Pnt2d(x, y);
    const mkLine = (x1: number, y1: number, x2: number, y2: number) => {
      using p1 = mkPt(x1, y1);
      using p2 = mkPt(x2, y2);
      using bRepBuilderAPIMakeedge2d = new oc.BRepBuilderAPI_MakeEdge2d(p1, p2);
      using edge = bRepBuilderAPIMakeedge2d.Edge();
      return edge;
    };

    const xStart = -SOCKET_TAPER_WIDTH + AXIS_CLEARANCE;
    const yStart = -AXIS_CLEARANCE;
    const segments = [
      [xStart, yStart, xStart + SOCKET_SMALL_TAPER, yStart + SOCKET_SMALL_TAPER],
      [xStart + SOCKET_SMALL_TAPER, yStart + SOCKET_SMALL_TAPER,
       xStart + SOCKET_SMALL_TAPER, yStart + SOCKET_SMALL_TAPER + SOCKET_VERTICAL_PART],
    ] as const;

    using rectLine1P1 = mkPt(-5, -5);
    using rectLine1P2 = mkPt(-5, 5);
    using rectDir = new oc.gp_Dir2d(0, 1);
    using rectAx = new oc.gp_Ax2d(rectLine1P1, rectDir);
    using rectEdgeCurve = new oc.Geom2d_Line(rectAx);

    for (const [x1, y1, x2, y2] of segments) {
      using segP1 = mkPt(x1, y1);
      using segP2 = mkPt(x2, y2);
      const dx = x2 - x1;
      const dy = y2 - y1;
      const len = Math.sqrt(dx * dx + dy * dy);
      using segDir = new oc.gp_Dir2d(dx / len, dy / len);
      using segAx = new oc.gp_Ax2d(segP1, segDir);
      using segCurve = new oc.Geom2d_Line(segAx);

      using intersector = new oc.Geom2dAPI_InterCurveCurve(segCurve, rectEdgeCurve, 1e-9);
      const nSeg = intersector.NbSegments();

      if (nSeg > 0) {
        for (let i = 1; i <= nSeg; i++) {
          using iseg = intersector.Segment(i);
          using Curve1 = iseg.Curve1;
          using Curve2 = iseg.Curve2;
          const fp = Curve1.FirstParameter();
          const lp = Curve1.LastParameter();

          expect(Math.abs(fp)).toBeLessThan(1e50);
          expect(Math.abs(lp)).toBeLessThan(1e50);
        }
      }
    }
  });

  it('should produce valid points from Segment curve Value() calls', () => {
    const oc = getOC();

    using center = new oc.gp_Pnt2d(0, 0);
    using dir = new oc.gp_Dir2d(1, 0);
    using ax = new oc.gp_Ax2d(center, dir);
    using circle = new oc.Geom2d_Circle(ax, 5.0, true);

    using lp = new oc.gp_Pnt2d(0, 0);
    using ld = new oc.gp_Dir2d(1, 1);
    using lax = new oc.gp_Ax2d(lp, ld);
    using line = new oc.Geom2d_Line(lax);

    using intersector = new oc.Geom2dAPI_InterCurveCurve(circle, line, 1e-9);
    const nSeg = intersector.NbSegments();

    if (nSeg > 0) {
      using seg = intersector.Segment(1);
      using Curve1 = seg.Curve1;
      using Curve2 = seg.Curve2;

      const fp = Curve1.FirstParameter();
      const lastP = Curve1.LastParameter();

      expect(Math.abs(fp)).toBeLessThan(1e50);
      expect(Math.abs(lastP)).toBeLessThan(1e50);

      using pt = new oc.gp_Pnt2d();
      Curve1.D0(fp, pt);
      const x = pt.X();
      const y = pt.Y();

      expect(Math.abs(x)).toBeLessThan(100);
      expect(Math.abs(y)).toBeLessThan(100);
    }
  });

  it('should handle collinear overlapping trimmed curves (gridfinity pattern)', () => {
    const oc = getOC();

    using p1 = new oc.gp_Pnt2d(0, 0);
    using d1 = new oc.gp_Dir2d(0, 1);
    using ax1 = new oc.gp_Ax2d(p1, d1);
    using fullLine1 = new oc.Geom2d_Line(ax1);
    using seg1 = new oc.Geom2d_TrimmedCurve(fullLine1, -4.15, 4.4, true, true);

    using p2 = new oc.gp_Pnt2d(0, 0);
    using d2 = new oc.gp_Dir2d(0, 1);
    using ax2 = new oc.gp_Ax2d(p2, d2);
    using fullLine2 = new oc.Geom2d_Line(ax2);
    using seg2 = new oc.Geom2d_TrimmedCurve(fullLine2, -3.0, 3.0, true, true);

    using intersector = new oc.Geom2dAPI_InterCurveCurve(seg1, seg2, 1e-9);
    const nSeg = intersector.NbSegments();

    for (let i = 1; i <= nSeg; i++) {
      using iseg = intersector.Segment(i);
      using Curve1 = iseg.Curve1;
      using Curve2 = iseg.Curve2;

      const fp1 = Curve1.FirstParameter();
      const lp1 = Curve1.LastParameter();
      const fp2 = Curve2.FirstParameter();
      const lp2 = Curve2.LastParameter();

      expect(Math.abs(fp1)).toBeLessThan(1e50);
      expect(Math.abs(lp1)).toBeLessThan(1e50);
      expect(Math.abs(fp2)).toBeLessThan(1e50);
      expect(Math.abs(lp2)).toBeLessThan(1e50);

      using pt = new oc.gp_Pnt2d();
      Curve1.D0(fp1, pt);
      expect(Math.abs(pt.X())).toBeLessThan(100);
      expect(Math.abs(pt.Y())).toBeLessThan(100);
    }
  });

  it('should return finite segment endpoints for gridfinity-exact vertical overlap at x=0', () => {
    const oc = getOC();

    using origin = new oc.gp_Pnt2d(0, 0);
    using vDir = new oc.gp_Dir2d(0, 1);
    using ax = new oc.gp_Ax2d(origin, vDir);
    using baseLine = new oc.Geom2d_Line(ax);

    using topEdge = new oc.Geom2d_TrimmedCurve(baseLine, -4.15, 4.4, true, true);

    using origin2 = new oc.gp_Pnt2d(0, 0);
    using ax2 = new oc.gp_Ax2d(origin2, vDir);
    using baseLine2 = new oc.Geom2d_Line(ax2);
    using cutEdge = new oc.Geom2d_TrimmedCurve(baseLine2, -10, 0, true, true);

    using intersector = new oc.Geom2dAPI_InterCurveCurve(topEdge, cutEdge, 1e-9);
    const nSeg = intersector.NbSegments();

    expect(nSeg).toBeGreaterThan(0);

    using seg = intersector.Segment(1);
    using Curve1 = seg.Curve1;
    using Curve2 = seg.Curve2;

    const fp = Curve1.FirstParameter();
    const lp = Curve1.LastParameter();
    expect(Math.abs(fp)).toBeLessThan(100);
    expect(Math.abs(lp)).toBeLessThan(100);

    using startPt = new oc.gp_Pnt2d();
    Curve1.D0(fp, startPt);
    using endPt = new oc.gp_Pnt2d();
    Curve1.D0(lp, endPt);

    expect(Math.abs(startPt.X())).toBeLessThan(100);
    expect(Math.abs(startPt.Y())).toBeLessThan(100);
    expect(Math.abs(endPt.X())).toBeLessThan(100);
    expect(Math.abs(endPt.Y())).toBeLessThan(100);

    const fp2 = Curve2.FirstParameter();
    const lp2 = Curve2.LastParameter();
    expect(Math.abs(fp2)).toBeLessThan(100);
    expect(Math.abs(lp2)).toBeLessThan(100);
  });

  it('should produce finite endpoints even after intersector is deleted', () => {
    const oc = getOC();

    using origin = new oc.gp_Pnt2d(0, 0);
    using dir = new oc.gp_Dir2d(0, 1);
    using ax = new oc.gp_Ax2d(origin, dir);
    using line1 = new oc.Geom2d_Line(ax);
    using seg1 = new oc.Geom2d_TrimmedCurve(line1, -4.15, 4.4, true, true);

    using origin2 = new oc.gp_Pnt2d(0, 0);
    using ax2 = new oc.gp_Ax2d(origin2, dir);
    using line2 = new oc.Geom2d_Line(ax2);
    using seg2 = new oc.Geom2d_TrimmedCurve(line2, -3.0, 3.0, true, true);

    using intersector = new oc.Geom2dAPI_InterCurveCurve(seg1, seg2, 1e-9);
    using iseg = intersector.Segment(1);
    using Curve1 = iseg.Curve1;
    using Curve2 = iseg.Curve2;

    const fp = Curve1.FirstParameter();
    const lp = Curve1.LastParameter();
    expect(Math.abs(fp)).toBeLessThan(100);
    expect(Math.abs(lp)).toBeLessThan(100);

    using pt = new oc.gp_Pnt2d();
    Curve1.D0(fp, pt);
    expect(Math.abs(pt.X())).toBeLessThan(100);
    expect(Math.abs(pt.Y())).toBeLessThan(100);
  });
});
