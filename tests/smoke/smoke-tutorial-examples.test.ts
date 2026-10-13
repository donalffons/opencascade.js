/**
 * Runs the box-minus-sphere and polygon getting-started examples through GLB export, then verifies
 * their meshes and bounding boxes from the exported geometry.
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';
import { analyzeShape, expectShapeGeometry, shapeToGlb, expectValidGlb } from './geometry-helpers.js';

describe.skipIf(!wasmExists)('Smoke: getting-started examples', () => {
  beforeAll(async () => { await initOC(); });

  it('Hello, World! — subtracts a sphere from a unit box', async () => {
    const oc = getOC();
    using box = new oc.BRepPrimAPI_MakeBox(1, 1, 1);
    using center = new oc.gp_Pnt(0.5, 0.5, 0.5);
    using sphere = new oc.BRepPrimAPI_MakeSphere(center, 0.65);

    using boxShape = box.Shape();
    using sphereShape = sphere.Shape();
    using progress = new oc.Message_ProgressRange();
    using cut = new oc.BRepAlgoAPI_Cut(boxShape, sphereShape, progress);
    using progress2 = new oc.Message_ProgressRange();
    cut.Build(progress2);
    expect(cut.IsDone()).toBe(true);

    using result = cut.Shape();
    expect(result.IsNull()).toBe(false);

    // The cut never grows beyond the original 1×1×1 box envelope.
    await expectShapeGeometry(result, { size: [1, 1, 1], minVertices: 24, tolerance: 0.05 });
  });

  it('Polygon — builds a triangular face from a 3-point polygon wire', async () => {
    const oc = getOC();
    using p1 = new oc.gp_Pnt(-50, 0, 0);
    using p2 = new oc.gp_Pnt(50, 0, 0);
    using p3 = new oc.gp_Pnt(50, 100, 0);
    using polygon = new oc.BRepBuilderAPI_MakePolygon(p1, p2, p3, true);
    using wire = polygon.Wire();

    using face = new oc.BRepBuilderAPI_MakeFace(wire, false);
    using faceShape = face.Shape();

    using builder = new oc.BRep_Builder();
    using compound = new oc.TopoDS_Compound();
    builder.MakeCompound(compound);
    builder.Add(compound, faceShape);
    expect(compound.IsNull()).toBe(false);

    // A flat triangle in the XY plane: 100 wide, 100 tall, zero depth.
    const glb = shapeToGlb(compound);
    expectValidGlb(glb);
    const stats = await analyzeShape(compound);
    expect(stats.boundingBox).toBeDefined();
    expect(stats.boundingBox!.size[0]).toBeCloseTo(100, 0);
    expect(stats.boundingBox!.size[1]).toBeCloseTo(100, 0);
    expect(stats.boundingBox!.size[2]).toBeCloseTo(0, 1);
  });
});
