import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';
import { expectShapeGeometry } from './geometry-helpers.js';

describe.skipIf(!wasmExists)('Smoke: Boolean operations', () => {
  beforeAll(async () => { await initOC(); });

  it('should fuse two overlapping boxes', async () => {
    const oc = getOC();
    using box1 = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
    using box2 = new oc.BRepPrimAPI_MakeBox(5, 5, 5);
    using box1Shape = box1.Shape();
    using box2Shape = box2.Shape();
    using messageProgressrange = new oc.Message_ProgressRange();
    using fuse = new oc.BRepAlgoAPI_Fuse(
      box1Shape,
      box2Shape,
      messageProgressrange,
    );
    using messageProgressrange2 = new oc.Message_ProgressRange();
    fuse.Build(messageProgressrange2);
    using shape = fuse.Shape();
    expect(shape.IsNull()).toBe(false);

    await expectShapeGeometry(shape, {
      size: [10, 10, 10],
      center: [5, 5, 5],
    });
  });

  it('should cut second box from first', async () => {
    const oc = getOC();
    using box1 = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
    using box2 = new oc.BRepPrimAPI_MakeBox(5, 5, 5);
    using box1Shape2 = box1.Shape();
    using box2Shape2 = box2.Shape();
    using messageProgressrange3 = new oc.Message_ProgressRange();
    using cut = new oc.BRepAlgoAPI_Cut(
      box1Shape2,
      box2Shape2,
      messageProgressrange3,
    );
    using messageProgressrange4 = new oc.Message_ProgressRange();
    cut.Build(messageProgressrange4);
    using shape = cut.Shape();
    expect(shape.IsNull()).toBe(false);

    await expectShapeGeometry(shape, {
      size: [10, 10, 10],
    });
  });

  it('should return intersection of two overlapping boxes', async () => {
    const oc = getOC();
    using box1 = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
    using box2 = new oc.BRepPrimAPI_MakeBox(5, 5, 5);
    using box1Shape3 = box1.Shape();
    using box2Shape3 = box2.Shape();
    using messageProgressrange5 = new oc.Message_ProgressRange();
    using common = new oc.BRepAlgoAPI_Common(
      box1Shape3,
      box2Shape3,
      messageProgressrange5,
    );
    using messageProgressrange6 = new oc.Message_ProgressRange();
    common.Build(messageProgressrange6);
    using shape = common.Shape();
    expect(shape.IsNull()).toBe(false);

    await expectShapeGeometry(shape, {
      size: [5, 5, 5],
      center: [2.5, 2.5, 2.5],
    });
  });

  it('should produce wider bounding box from fuse of two separated boxes', async () => {
    const oc = getOC();
    using box1 = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
    using gpPnt = new oc.gp_Pnt(20, 0, 0);
    using box2 = new oc.BRepPrimAPI_MakeBox(
      gpPnt,
      10, 10, 10,
    );
    using box1Shape4 = box1.Shape();
    using box2Shape4 = box2.Shape();
    using messageProgressrange7 = new oc.Message_ProgressRange();
    using fuse = new oc.BRepAlgoAPI_Fuse(
      box1Shape4,
      box2Shape4,
      messageProgressrange7,
    );
    using messageProgressrange8 = new oc.Message_ProgressRange();
    fuse.Build(messageProgressrange8);
    using shape = fuse.Shape();

    await expectShapeGeometry(shape, {
      size: [30, 10, 10],
      center: [15, 5, 5],
    });
  });

  it('should produce a valid fused solid with fewer faces when using BOPAlgo_GlueFull glue mode', () => {
    const oc = getOC();
    using box1 = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
    using origin = new oc.gp_Pnt(10, 0, 0);
    using box2 = new oc.BRepPrimAPI_MakeBox(origin, 10, 10, 10);

    using box1Shape5 = box1.Shape();
    using box2Shape5 = box2.Shape();
    using messageProgressrange9 = new oc.Message_ProgressRange();
    using fuse = new oc.BRepAlgoAPI_Fuse(
      box1Shape5,
      box2Shape5,
      messageProgressrange9,
    );
    fuse.SetGlue(oc.BOPAlgo_GlueEnum.BOPAlgo_GlueFull);
    using messageProgressrange10 = new oc.Message_ProgressRange();
    fuse.Build(messageProgressrange10);

    using fuseShape = fuse.Shape();
    expect(fuseShape.IsNull()).toBe(false);

    using fuseShape2 = fuse.Shape();
    using explorer = new oc.TopExp_Explorer(
      fuseShape2,
      oc.TopAbs_ShapeEnum.TopAbs_FACE,
      oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
    );
    let faceCount = 0;
    while (explorer.More()) { faceCount++; explorer.Next(); }

    expect(faceCount).toBeGreaterThanOrEqual(6);
    expect(faceCount).toBeLessThanOrEqual(12);
  });
});
