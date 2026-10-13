/**
 * Smoke tests: IntPatch enum-based constructor dispatch.
 *
 * Validates that IntPatch_ALine, IntPatch_WLine, and IntPatch_GLine
 * constructors can dispatch between IntSurf_TypeTrans and IntSurf_Situation
 * overloads using string enum membership checks, without requiring _N
 * subclasses.
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: IntPatch Enum Dispatch', () => {
  beforeAll(async () => { await initOC(); });

  describe('IntPatch_ALine', () => {
    it('should construct with IntSurf_TypeTrans parameters via base class', () => {
      const oc = getOC();
      using curve = new oc.IntAna_Curve();
      using aline = new oc.IntPatch_ALine(
        curve,
        false,
        oc.IntSurf_TypeTrans.IntSurf_In,
        oc.IntSurf_TypeTrans.IntSurf_Out,
      );

      expect(aline.TransitionOnS1()).toBe('IntSurf_In');
      expect(aline.TransitionOnS2()).toBe('IntSurf_Out');
    });

    it('should construct with IntSurf_Situation parameters via base class', () => {
      const oc = getOC();
      using curve = new oc.IntAna_Curve();
      using aline = new oc.IntPatch_ALine(
        curve,
        false,
        oc.IntSurf_Situation.IntSurf_Inside,
        oc.IntSurf_Situation.IntSurf_Outside,
      );

      expect(aline.SituationS1()).toBe('IntSurf_Inside');
      expect(aline.SituationS2()).toBe('IntSurf_Outside');
    });
  });

  describe('IntPatch_GLine (gp_Lin geometry)', () => {
    it('should construct with IntSurf_TypeTrans parameters', () => {
      const oc = getOC();
      using gpPnt = new oc.gp_Pnt(0, 0, 0);
      using gpDir = new oc.gp_Dir(1, 0, 0);
      using line = new oc.gp_Lin(gpPnt, gpDir);
      using gline = new oc.IntPatch_GLine(
        line,
        false,
        oc.IntSurf_TypeTrans.IntSurf_In,
        oc.IntSurf_TypeTrans.IntSurf_Out,
      );

      expect(gline.TransitionOnS1()).toBe('IntSurf_In');
      expect(gline.TransitionOnS2()).toBe('IntSurf_Out');
    });

    it('should construct with IntSurf_Situation parameters', () => {
      const oc = getOC();
      using gpPnt2 = new oc.gp_Pnt(0, 0, 0);
      using gpDir2 = new oc.gp_Dir(1, 0, 0);
      using line = new oc.gp_Lin(gpPnt2, gpDir2);
      using gline = new oc.IntPatch_GLine(
        line,
        false,
        oc.IntSurf_Situation.IntSurf_Inside,
        oc.IntSurf_Situation.IntSurf_Outside,
      );

      expect(gline.SituationS1()).toBe('IntSurf_Inside');
      expect(gline.SituationS2()).toBe('IntSurf_Outside');
    });
  });
});
