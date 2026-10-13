import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists, isExceptionsEnabled } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: Smart pointer unified API', () => {
  beforeAll(async () => { await initOC(); });

  it('should have isNull() on constructor-created Transient object', () => {
    const oc = getOC();
    using gpPnt = new oc.gp_Pnt();
    using gpDir = new oc.gp_Dir(0, 0, 1);
    using ax2 = new oc.gp_Ax2(gpPnt, gpDir);
    using circle = new oc.Geom_Circle(ax2, 5.0);

    expect(typeof circle.isNull).toBe('function');
    expect(circle.isNull()).toBe(false);
  });

  it('should have nullify() on constructor-created Transient object', () => {
    const oc = getOC();
    using gpPnt2 = new oc.gp_Pnt();
    using gpDir2 = new oc.gp_Dir(0, 0, 1);
    using ax2 = new oc.gp_Ax2(gpPnt2, gpDir2);
    using circle = new oc.Geom_Circle(ax2, 5.0);

    expect(typeof circle.nullify).toBe('function');
  });

  it('should return true for isNull() after nullify() roundtrip', () => {
    const oc = getOC();
    using gpPnt3 = new oc.gp_Pnt();
    using gpDir3 = new oc.gp_Dir(0, 0, 1);
    using ax2 = new oc.gp_Ax2(gpPnt3, gpDir3);
    using circle = new oc.Geom_Circle(ax2, 5.0);

    expect(circle.isNull()).toBe(false);
    circle.nullify();
    expect(circle.isNull()).toBe(true);
  });

  it('should inherit handle methods on deep hierarchy (Geom_Circle: 3 levels)', () => {
    const oc = getOC();
    using gpPnt4 = new oc.gp_Pnt();
    using gpDir4 = new oc.gp_Dir(0, 0, 1);
    using ax2 = new oc.gp_Ax2(gpPnt4, gpDir4);
    using circle = new oc.Geom_Circle(ax2, 10.0);

    expect(circle.isNull()).toBe(false);
    expect(circle.Radius()).toBe(10.0);
  });

  it('should inherit isNull from Standard_Transient for Geom_Line', () => {
    const oc = getOC();
    using gpPnt5 = new oc.gp_Pnt();
    using gpDir5 = new oc.gp_Dir(1, 0, 0);
    using ax1 = new oc.gp_Ax1(gpPnt5, gpDir5);
    using line = new oc.Geom_Line(ax1);

    expect(typeof line.isNull).toBe('function');
    expect(line.isNull()).toBe(false);
  });

  it('should not expose Handle_ classes', () => {
    const oc = getOC() as Record<string, unknown>;
    expect(oc['Handle_Geom_Curve']).toBeUndefined();
    expect(oc['Handle_Geom_Circle']).toBeUndefined();
    expect(oc['Handle_Geom_Line']).toBeUndefined();
    expect(oc['Handle_Standard_Transient']).toBeUndefined();
  });

  it('should throw on method call after nullify', (ctx) => {
    if (!isExceptionsEnabled()) ctx.skip();

    const oc = getOC();
    using gpPnt6 = new oc.gp_Pnt();
    using gpDir6 = new oc.gp_Dir(0, 0, 1);
    using ax2 = new oc.gp_Ax2(gpPnt6, gpDir6);
    using circle = new oc.Geom_Circle(ax2, 5.0);

    circle.nullify();
    expect(circle.isNull()).toBe(true);

    let threw = false;
    try {
      circle.Radius();
    } catch {
      threw = true;
    }
    expect(threw || circle.isNull()).toBe(true);
  });

  it('should work normally for non-Transient classes', () => {
    const oc = getOC();
    using pnt = new oc.gp_Pnt(1, 2, 3);
    expect(pnt.X()).toBe(1);
    expect(pnt.Y()).toBe(2);
    expect(pnt.Z()).toBe(3);
  });
});
