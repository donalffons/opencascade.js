/**
 * Smoke tests: FairCurve computation via auto-generated instance method bindings.
 *
 * Validates that FairCurve_Batten and FairCurve_MinimalVariation produce
 * valid BSpline curves with correct geometric properties. The Compute
 * method uses auto-generated return-by-value with enum output param
 * stripping — the FairCurve_AnalysisCode& param is stripped from the
 * JS signature and returned in the envelope as `Code`, alongside the
 * native bool return surfaced as `returnValue`.
 *
 * Geom2d_Curve.D0 is a void-returning class-output method —
 * the gp_Pnt2d parameter is mutated in place and no envelope is produced.
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

/* eslint-disable @typescript-eslint/naming-convention -- OpenCASCADE C++ API naming */
describe.skipIf(!wasmExists)('Smoke: Fair curves', () => {
  beforeAll(async () => { await initOC(); });

  describe('FairCurve_Batten', () => {
    it('should produce a valid BSpline curve between two constraint points', () => {
      const oc = getOC();
      using p1 = new oc.gp_Pnt2d(0, 0);
      using p2 = new oc.gp_Pnt2d(10, 5);
      using batten = new oc.FairCurve_Batten(p1, p2, 2.0, 1);

      const result = batten.Compute(oc.FairCurve_AnalysisCode.FairCurve_OK, 50, 1e-3);

      expect(result.returnValue).toBe(true);

      using curve = batten.Curve();
      expect(curve.Degree()).toBeGreaterThanOrEqual(2);
      expect(curve.NbPoles()).toBeGreaterThanOrEqual(2);
      expect(curve.NbKnots()).toBeGreaterThanOrEqual(2);
      expect(curve.LastParameter()).toBeGreaterThan(curve.FirstParameter());
    });

    it('should return a valid FairCurve_AnalysisCode in the result struct', () => {
      const oc = getOC();
      using p1 = new oc.gp_Pnt2d(0, 0);
      using p2 = new oc.gp_Pnt2d(10, 0);
      using batten = new oc.FairCurve_Batten(p1, p2, 3.0);
      batten.SetConstraintOrder1(2);
      batten.SetConstraintOrder2(2);
      batten.SetAngle1(0.5);
      batten.SetAngle2(-0.5);

      const result = batten.Compute(oc.FairCurve_AnalysisCode.FairCurve_OK, 50, 1e-3);

      expect(result.returnValue).toBe(true);
      expect(result.Code).toBe(oc.FairCurve_AnalysisCode.FairCurve_OK);
    });

    it('should produce a curve whose endpoints match the constraint points', () => {
      const oc = getOC();
      using p1 = new oc.gp_Pnt2d(0, 0);
      using p2 = new oc.gp_Pnt2d(10, 5);
      using batten = new oc.FairCurve_Batten(p1, p2, 2.0, 1);

      batten.Compute(oc.FairCurve_AnalysisCode.FairCurve_OK, 50, 1e-3);

      using curve = batten.Curve();
      using inStartPt = new oc.gp_Pnt2d(0, 0);
      using inEndPt = new oc.gp_Pnt2d(0, 0);
      curve.D0(curve.FirstParameter(), inStartPt);
      curve.D0(curve.LastParameter(), inEndPt);

      expect(inStartPt.X()).toBeCloseTo(0, 1);
      expect(inStartPt.Y()).toBeCloseTo(0, 1);
      expect(inEndPt.X()).toBeCloseTo(10, 1);
      expect(inEndPt.Y()).toBeCloseTo(5, 1);
    });

  });

  describe('FairCurve_MinimalVariation', () => {
    it('should produce a valid BSpline curve between two constraint points', () => {
      const oc = getOC();
      using p1 = new oc.gp_Pnt2d(0, 0);
      using p2 = new oc.gp_Pnt2d(10, 5);
      using mv = new oc.FairCurve_MinimalVariation(p1, p2, 2.0, 1);

      const result = mv.Compute(oc.FairCurve_AnalysisCode.FairCurve_OK, 50, 1e-3);

      expect(result.returnValue).toBe(true);

      using curve = mv.Curve();
      expect(curve.Degree()).toBeGreaterThanOrEqual(2);
      expect(curve.NbPoles()).toBeGreaterThanOrEqual(2);
      expect(curve.NbKnots()).toBeGreaterThanOrEqual(2);
      expect(curve.LastParameter()).toBeGreaterThan(curve.FirstParameter());
    });

    it('should return a valid FairCurve_AnalysisCode in the result struct', () => {
      const oc = getOC();
      using p1 = new oc.gp_Pnt2d(0, 0);
      using p2 = new oc.gp_Pnt2d(10, 0);
      using mv = new oc.FairCurve_MinimalVariation(p1, p2, 3.0);
      mv.SetConstraintOrder1(2);
      mv.SetConstraintOrder2(2);
      mv.SetAngle1(0.5);
      mv.SetAngle2(-0.5);

      const result = mv.Compute(oc.FairCurve_AnalysisCode.FairCurve_OK, 100, 1e-6);

      expect(result.returnValue).toBe(true);
      expect(result.Code).toBe(oc.FairCurve_AnalysisCode.FairCurve_OK);
    });

    it('should produce a curve whose endpoints match the constraint points', () => {
      const oc = getOC();
      using p1 = new oc.gp_Pnt2d(0, 0);
      using p2 = new oc.gp_Pnt2d(10, 5);
      using mv = new oc.FairCurve_MinimalVariation(p1, p2, 2.0, 1);

      mv.Compute(oc.FairCurve_AnalysisCode.FairCurve_OK, 50, 1e-3);

      using curve = mv.Curve();
      using inStartPt = new oc.gp_Pnt2d(0, 0);
      using inEndPt = new oc.gp_Pnt2d(0, 0);
      curve.D0(curve.FirstParameter(), inStartPt);
      curve.D0(curve.LastParameter(), inEndPt);

      expect(inStartPt.X()).toBeCloseTo(0, 1);
      expect(inStartPt.Y()).toBeCloseTo(0, 1);
      expect(inEndPt.X()).toBeCloseTo(10, 1);
      expect(inEndPt.Y()).toBeCloseTo(5, 1);
    });

    it('should invoke the overridden Compute via virtual dispatch', () => {
      const oc = getOC();
      using p1 = new oc.gp_Pnt2d(0, 0);
      using p2 = new oc.gp_Pnt2d(10, 5);
      using mv = new oc.FairCurve_MinimalVariation(p1, p2, 2.0, 1);
      mv.SetPhysicalRatio(0.5);

      const result = mv.Compute(oc.FairCurve_AnalysisCode.FairCurve_OK, 50, 1e-3);

      expect(result.returnValue).toBe(true);
      using curve = mv.Curve();
      expect(curve.NbPoles()).toBeGreaterThanOrEqual(2);
    });
  });

  describe('Batten vs MinimalVariation', () => {
    it('should produce geometrically different curves for non-trivial constraints', () => {
      const oc = getOC();
      using p1 = new oc.gp_Pnt2d(0, 0);
      using p2 = new oc.gp_Pnt2d(10, 0);

      using batten = new oc.FairCurve_Batten(p1, p2, 3.0);
      batten.SetConstraintOrder1(2);
      batten.SetConstraintOrder2(2);
      batten.SetAngle1(0.5);
      batten.SetAngle2(-0.5);
      batten.Compute(oc.FairCurve_AnalysisCode.FairCurve_OK, 50, 1e-3);
      using battenCurve = batten.Curve();

      using mv = new oc.FairCurve_MinimalVariation(p1, p2, 3.0);
      mv.SetConstraintOrder1(2);
      mv.SetConstraintOrder2(2);
      mv.SetAngle1(0.5);
      mv.SetAngle2(-0.5);
      mv.Compute(oc.FairCurve_AnalysisCode.FairCurve_OK, 100, 1e-6);
      using mvCurve = mv.Curve();

      using inBattenMidPt = new oc.gp_Pnt2d(0, 0);
      using inMvMidPt = new oc.gp_Pnt2d(0, 0);
      const bMidParam = (battenCurve.FirstParameter() + battenCurve.LastParameter()) / 2;
      const mvMidParam = (mvCurve.FirstParameter() + mvCurve.LastParameter()) / 2;
      battenCurve.D0(bMidParam, inBattenMidPt);
      mvCurve.D0(mvMidParam, inMvMidPt);

      const yDifference = Math.abs(inBattenMidPt.Y() - inMvMidPt.Y());
      expect(yDifference).toBeGreaterThan(0.01);
    });
  });
});
/* eslint-enable @typescript-eslint/naming-convention */
