import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';
import { expectShapeGeometry } from './geometry-helpers.js';

describe.skipIf(!wasmExists)('Smoke: Transforms', () => {
  beforeAll(async () => { await initOC(); });

  it('should shift box center by (5,0,0) with translation', async () => {
    const oc = getOC();
    using box = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
    using trsf = new oc.gp_Trsf();
    using gpVec = new oc.gp_Vec(5, 0, 0);
    trsf.SetTranslation(gpVec);
    using boxShape = box.Shape();
    using transform = new oc.BRepBuilderAPI_Transform(
      boxShape,
      trsf,
      false,
      false,
    );
    using shape = transform.Shape();
    expect(shape.IsNull()).toBe(false);

    await expectShapeGeometry(shape, {
      size: [10, 10, 10],
      center: [10, 5, 5],
    });
  });

  it('should preserve bounding box dimensions with rotation', async () => {
    const oc = getOC();
    using box = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
    using trsf = new oc.gp_Trsf();
    using gpPnt = new oc.gp_Pnt();
    using gpDir = new oc.gp_Dir(0, 0, 1);
    using axis = new oc.gp_Ax1(
      gpPnt,
      gpDir,
    );
    trsf.SetRotation(axis, Math.PI / 4);
    using boxShape2 = box.Shape();
    using transform = new oc.BRepBuilderAPI_Transform(
      boxShape2,
      trsf,
      false,
      false,
    );
    using shape = transform.Shape();
    expect(shape.IsNull()).toBe(false);

    const diag = 10 * Math.SQRT2;
    await expectShapeGeometry(shape, {
      size: [diag, diag, 10],
    });
  });

  it('should double all box dimensions with scale', async () => {
    const oc = getOC();
    using box = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
    using trsf = new oc.gp_Trsf();
    using gpPnt2 = new oc.gp_Pnt();
    trsf.SetScale(gpPnt2, 2);
    using boxShape3 = box.Shape();
    using transform = new oc.BRepBuilderAPI_Transform(
      boxShape3,
      trsf,
      false,
      false,
    );
    using shape = transform.Shape();
    expect(shape.IsNull()).toBe(false);

    await expectShapeGeometry(shape, {
      size: [20, 20, 20],
      center: [10, 10, 10],
    });
  });
});
