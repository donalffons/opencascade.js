import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: overloaded constructors and methods', () => {
  beforeAll(async () => { await initOC(); });

  it('should support 0-arg and 3-arg constructor overloads for gp_Pnt', () => {
    const oc = getOC();
    using pnt0 = new oc.gp_Pnt();
    using pnt3 = new oc.gp_Pnt(1, 2, 3);
    expect(pnt0.X()).toBe(0);
    expect(pnt0.Y()).toBe(0);
    expect(pnt0.Z()).toBe(0);
    expect(pnt3.X()).toBe(1);
    expect(pnt3.Y()).toBe(2);
    expect(pnt3.Z()).toBe(3);
  });

  it('should support overloaded constructors for BRepPrimAPI_MakeBox', () => {
    const oc = getOC();
    using box2 = new oc.BRepPrimAPI_MakeBox(10, 20, 30);
    using origin = new oc.gp_Pnt(1, 2, 3);
    using box3 = new oc.BRepPrimAPI_MakeBox(origin, 10, 20, 30);
    using box2Shape = box2.Shape();
    expect(box2Shape.IsNull()).toBe(false);
    using box3Shape = box3.Shape();
    expect(box3Shape.IsNull()).toBe(false);
  });

  it('should support SetCoord overloads for gp_Pnt (index+value and x,y,z)', () => {
    const oc = getOC();
    using pnt = new oc.gp_Pnt(0, 0, 0);
    pnt.SetCoord(1, 5); // set Y to 5 (index 0=X, 1=Y, 2=Z)
    pnt.SetCoord(10, 20, 30); // set all coords
    expect(pnt.X()).toBe(10);
    expect(pnt.Y()).toBe(20);
    expect(pnt.Z()).toBe(30);
  });
});
