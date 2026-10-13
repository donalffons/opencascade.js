import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';
import { expectShapeGeometry } from './geometry-helpers.js';

describe.skipIf(!wasmExists)('Smoke: BRep primitives', () => {
  beforeAll(async () => { await initOC(); });

  it('should create a 10x20x30 box with correct dimensions', async () => {
    const oc = getOC();
    using box = new oc.BRepPrimAPI_MakeBox(10, 20, 30);
    using shape = box.Shape();
    expect(shape.IsNull()).toBe(false);

    await expectShapeGeometry(shape, {
      size: [10, 20, 30],
      center: [5, 10, 15],
    });
  });

  it('should create a cylinder with correct diameter and height', async () => {
    const oc = getOC();
    using cyl = new oc.BRepPrimAPI_MakeCylinder(5, 15);
    using shape = cyl.Shape();
    expect(shape.IsNull()).toBe(false);

    await expectShapeGeometry(shape, {
      size: [10, 10, 15],
      center: [0, 0, 7.5],
    });
  });

  it('should create a sphere with correct diameter', async () => {
    const oc = getOC();
    using sphere = new oc.BRepPrimAPI_MakeSphere(8);
    using shape = sphere.Shape();
    expect(shape.IsNull()).toBe(false);

    await expectShapeGeometry(shape, {
      size: [16, 16, 16],
      center: [0, 0, 0],
    });
  });

  it('should create an offset box with gp_Pnt origin', async () => {
    const oc = getOC();
    using origin = new oc.gp_Pnt(1, 2, 3);
    using box = new oc.BRepPrimAPI_MakeBox(origin, 10, 20, 30);
    using shape = box.Shape();
    expect(shape.IsNull()).toBe(false);

    await expectShapeGeometry(shape, {
      size: [10, 20, 30],
      center: [6, 12, 18],
    });
  });

  it('should create an offset sphere with center point', async () => {
    const oc = getOC();
    using center = new oc.gp_Pnt(5, 5, 5);
    using sphere = new oc.BRepPrimAPI_MakeSphere(center, 12);
    using shape = sphere.Shape();
    expect(shape.IsNull()).toBe(false);

    await expectShapeGeometry(shape, {
      size: [24, 24, 24],
      center: [5, 5, 5],
    });
  });

  it('should create a cone with correct dimensions', async () => {
    const oc = getOC();
    using cone = new oc.BRepPrimAPI_MakeCone(10, 5, 20);
    using shape = cone.Shape();
    expect(shape.IsNull()).toBe(false);

    await expectShapeGeometry(shape, {
      size: [20, 20, 20],
      center: [0, 0, 10],
    });
  });

  it('should create a torus with correct dimensions', async () => {
    const oc = getOC();
    using torus = new oc.BRepPrimAPI_MakeTorus(10, 3);
    using shape = torus.Shape();
    expect(shape.IsNull()).toBe(false);

    await expectShapeGeometry(shape, {
      size: [26, 26, 6],
      center: [0, 0, 0],
    });
  });
});
