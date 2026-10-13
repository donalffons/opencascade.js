/**
 * Smoke tests: ShapeUpgrade_UnifySameDomain.
 *
 * Validates face merging after boolean operations.
 * Used by brepjs for face unification.
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';
import { expectShapeGeometry } from './geometry-helpers.js';

describe.skipIf(!wasmExists)('Smoke: ShapeUpgrade', () => {
  beforeAll(async () => { await initOC(); });

  const countFaces = (shape: ReturnType<ReturnType<typeof getOC>['BRepPrimAPI_MakeBox']['prototype']['Shape']>) => {
    const oc = getOC();
    using explorer = new oc.TopExp_Explorer(
      shape,
      oc.TopAbs_ShapeEnum.TopAbs_FACE,
      oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
    );
    let count = 0;
    while (explorer.More()) { count++; explorer.Next(); }
    return count;
  };

  it('should reduce face count when unifying coplanar faces from a boolean union', () => {
    const oc = getOC();
    using box1 = new oc.BRepPrimAPI_MakeBox(10, 10, 10);

    using origin = new oc.gp_Pnt(10, 0, 0);
    using box2 = new oc.BRepPrimAPI_MakeBox(origin, 10, 10, 10);

    using box1Shape = box1.Shape();
    using box2Shape = box2.Shape();
    using messageProgressrange = new oc.Message_ProgressRange();
    using fuse = new oc.BRepAlgoAPI_Fuse(box1Shape, box2Shape, messageProgressrange);
    using fusedShape = fuse.Shape();

    const facesBefore = countFaces(fusedShape);
    expect(facesBefore).toBeGreaterThanOrEqual(10);

    using unifier = new oc.ShapeUpgrade_UnifySameDomain(fusedShape, true, true, false);
    unifier.Build();
    using unifiedShape = unifier.Shape();

    const facesAfter = countFaces(unifiedShape);
    expect(facesAfter).toBeLessThan(facesBefore);
  });

  it('should preserve the bounding box dimensions after unification', async () => {
    const oc = getOC();
    using box1 = new oc.BRepPrimAPI_MakeBox(10, 10, 10);

    using origin = new oc.gp_Pnt(10, 0, 0);
    using box2 = new oc.BRepPrimAPI_MakeBox(origin, 10, 10, 10);

    using box1Shape2 = box1.Shape();
    using box2Shape2 = box2.Shape();
    using messageProgressrange2 = new oc.Message_ProgressRange();
    using fuse = new oc.BRepAlgoAPI_Fuse(box1Shape2, box2Shape2, messageProgressrange2);

    using fuseShape = fuse.Shape();
    using unifier = new oc.ShapeUpgrade_UnifySameDomain(fuseShape, true, true, false);
    unifier.Build();

    using unifierShape = unifier.Shape();
    await expectShapeGeometry(unifierShape, {
      size: [20, 10, 10],
      center: [10, 5, 5],
      tolerance: 1,
    });
  });
});
