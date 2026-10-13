/**
 * Smoke tests: Boolean algorithm options.
 *
 * Validates BOPAlgo_GlueEnum and SetGlue on BRepAlgoAPI_BuilderAlgo.
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: Boolean options', () => {
  beforeAll(async () => { await initOC(); });

  it('should produce a valid fused solid when using BOPAlgo_GlueFull glue mode', () => {
    const oc = getOC();
    using box1 = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
    using origin = new oc.gp_Pnt(10, 0, 0);
    using box2 = new oc.BRepPrimAPI_MakeBox(origin, 10, 10, 10);

    using box1Shape = box1.Shape();
    using box2Shape = box2.Shape();
    using fuse = new oc.BRepAlgoAPI_Fuse(box1Shape, box2Shape);
    fuse.SetGlue(oc.BOPAlgo_GlueEnum.BOPAlgo_GlueFull);
    using progress = new oc.Message_ProgressRange();
    fuse.Build(progress);

    using shape = fuse.Shape();
    expect(shape.IsNull()).toBe(false);

    using explorer = new oc.TopExp_Explorer(
      shape,
      oc.TopAbs_ShapeEnum.TopAbs_FACE,
      oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
    );
    let faceCount = 0;
    while (explorer.More()) { faceCount++; explorer.Next(); }

    expect(faceCount).toBeGreaterThanOrEqual(6);
  });

  it('should accept and return the configured glue mode via SetGlue/Glue', () => {
    const oc = getOC();
    using box1 = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
    using box2 = new oc.BRepPrimAPI_MakeBox(5, 5, 5);

    using box1Shape2 = box1.Shape();
    using box2Shape2 = box2.Shape();
    using fuse = new oc.BRepAlgoAPI_Fuse(box1Shape2, box2Shape2);
    fuse.SetGlue(oc.BOPAlgo_GlueEnum.BOPAlgo_GlueShift);

    expect(fuse.Glue()).toBe(oc.BOPAlgo_GlueEnum.BOPAlgo_GlueShift);
  });
});
