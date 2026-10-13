import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: Helix geometry', () => {
  beforeAll(async () => { await initOC(); });

  it('should construct HelixBRep_BuilderHelix', () => {
    const oc = getOC();
    using builder = new oc.HelixBRep_BuilderHelix();
    expect(builder.ErrorStatus()).toBe(1);
  });

  it('should construct and configure HelixGeom_BuilderHelix', () => {
    const oc = getOC();
    using gpPnt = new oc.gp_Pnt(0, 0, 0);
    using gpDir = new oc.gp_Dir(0, 0, 1);
    using ax = new oc.gp_Ax2(gpPnt, gpDir);
    using builder = new oc.HelixGeom_BuilderHelix();
    builder.SetPosition(ax);
    builder.SetCurveParameters(0, 2 * Math.PI * 3, 10, 5, 0, false);
    builder.Perform();

    expect(builder.ErrorStatus()).toBe(0);
  });

  it('should construct and configure HelixGeom_BuilderHelixCoil', () => {
    const oc = getOC();
    using builder = new oc.HelixGeom_BuilderHelixCoil();
    builder.SetCurveParameters(0, 2 * Math.PI * 2, 8, 4, 0, true);
    builder.Perform();

    expect(builder.ErrorStatus()).toBe(0);
  });

  it('should load HelixGeom_HelixCurve with parameters', () => {
    const oc = getOC();
    using curve = new oc.HelixGeom_HelixCurve();
    curve.Load(0, 2 * Math.PI * 3, 10, 5, 0, false);

    expect(curve.FirstParameter()).toBe(0);
    expect(curve.LastParameter()).toBeCloseTo(2 * Math.PI * 3, 3);
  });
});
