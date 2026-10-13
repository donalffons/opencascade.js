/**
 * Smoke tests: Distance measurement and extrema computation.
 *
 * Demonstrates:
 * - Minimum distance between two shapes with BRepExtrema_DistShapeShape
 * - Closest points on shapes
 * - Distance between a point and a shape
 * - Bounding box distance checking
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: Extrema and distance', () => {
  beforeAll(async () => { await initOC(); });

  it('should compute distance between two separated boxes with BRepExtrema_DistShapeShape', () => {
    const oc = getOC();
    using box1 = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
    using gpPnt = new oc.gp_Pnt(20, 0, 0);
    using box2Maker = new oc.BRepPrimAPI_MakeBox(
      gpPnt,
      10,
      10,
      10,
    );

    using box1Shape = box1.Shape();
    using box2MakerShape = box2Maker.Shape();
    using messageProgressrange = new oc.Message_ProgressRange();
    using dist = new oc.BRepExtrema_DistShapeShape(
      box1Shape,
      box2MakerShape,
      oc.Extrema_ExtFlag.Extrema_ExtFlag_MIN,
      oc.Extrema_ExtAlgo.Extrema_ExtAlgo_Grad,
      messageProgressrange,
    );

    expect(dist.IsDone()).toBe(true);
    expect(dist.Value()).toBe(10);

    using pt1 = dist.PointOnShape1(1);
    using pt2 = dist.PointOnShape2(1);
    expect(pt1.X()).toBe(10);
    expect(pt2.X()).toBe(20);
  });

  it('should return 0 distance for overlapping shapes with BRepExtrema_DistShapeShape', () => {
    const oc = getOC();
    using box1 = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
    using box2 = new oc.BRepPrimAPI_MakeBox(10, 10, 10);

    using box1Shape2 = box1.Shape();
    using box2Shape = box2.Shape();
    using messageProgressrange2 = new oc.Message_ProgressRange();
    using dist = new oc.BRepExtrema_DistShapeShape(
      box1Shape2,
      box2Shape,
      oc.Extrema_ExtFlag.Extrema_ExtFlag_MIN,
      oc.Extrema_ExtAlgo.Extrema_ExtAlgo_Grad,
      messageProgressrange2,
    );

    expect(dist.IsDone()).toBe(true);
    expect(dist.Value()).toBe(0);
  });

  it('should compute distance between box and sphere with BRepExtrema_DistShapeShape', () => {
    const oc = getOC();
    using box = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
    using gpPnt2 = new oc.gp_Pnt(30, 5, 5);
    using sphere = new oc.BRepPrimAPI_MakeSphere(
      gpPnt2,
      5,
    );

    using boxShape = box.Shape();
    using sphereShape = sphere.Shape();
    using messageProgressrange3 = new oc.Message_ProgressRange();
    using dist = new oc.BRepExtrema_DistShapeShape(
      boxShape,
      sphereShape,
      oc.Extrema_ExtFlag.Extrema_ExtFlag_MIN,
      oc.Extrema_ExtAlgo.Extrema_ExtAlgo_Grad,
      messageProgressrange3,
    );

    expect(dist.IsDone()).toBe(true);
    expect(dist.Value()).toBeCloseTo(15, 10);
  });

  it('should compute distance between two separated bounding boxes with Bnd_Box', () => {
    const oc = getOC();
    using box1 = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
    using gpPnt3 = new oc.gp_Pnt(20, 0, 0);
    using box2 = new oc.BRepPrimAPI_MakeBox(
      gpPnt3,
      10,
      10,
      10,
    );

    using inBnd1 = new oc.Bnd_Box();
    using inBnd2 = new oc.Bnd_Box();
    using box1Shape3 = box1.Shape();
    oc.BRepBndLib.Add(box1Shape3, inBnd1, false);
    using box2Shape2 = box2.Shape();
    oc.BRepBndLib.Add(box2Shape2, inBnd2, false);

    const distance = inBnd1.Distance(inBnd2);
    expect(distance).toBeCloseTo(10, 5);

    expect(inBnd1.IsOut(inBnd2)).toBe(true);
  });
});
