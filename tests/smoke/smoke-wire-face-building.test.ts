/**
 * Smoke tests: Wire and face building operations.
 *
 * Demonstrates:
 * - Building polygonal wires from points with BRepBuilderAPI_MakePolygon
 * - Creating faces from wires
 * - Sewing faces into shells with BRepBuilderAPI_Sewing
 * - Building solids from closed shells
 * - Multi-edge wire construction
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';
import { expectShapeGeometry } from './geometry-helpers.js';

describe.skipIf(!wasmExists)('Smoke: Wire and face building', () => {
  beforeAll(async () => { await initOC(); });

  it('should build a triangular wire from 3 points with MakePolygon', () => {
    const oc = getOC();
    using p1 = new oc.gp_Pnt(0, 0, 0);
    using p2 = new oc.gp_Pnt(10, 0, 0);
    using p3 = new oc.gp_Pnt(5, 10, 0);

    using poly = new oc.BRepBuilderAPI_MakePolygon(p1, p2, p3, true);
    expect(poly.IsDone()).toBe(true);

    using wire = poly.Wire();
    expect(wire.IsNull()).toBe(false);
  });

  it('should build a rectangular wire from 4 points with MakePolygon', () => {
    const oc = getOC();
    using p1 = new oc.gp_Pnt(0, 0, 0);
    using p2 = new oc.gp_Pnt(20, 0, 0);
    using p3 = new oc.gp_Pnt(20, 15, 0);
    using p4 = new oc.gp_Pnt(0, 15, 0);

    using poly = new oc.BRepBuilderAPI_MakePolygon(p1, p2, p3, p4, true);
    expect(poly.IsDone()).toBe(true);

    using wire = poly.Wire();
    expect(wire.IsNull()).toBe(false);
  });

  it('should create an arbitrary polygon with MakePolygon.Add', () => {
    const oc = getOC();
    using poly = new oc.BRepBuilderAPI_MakePolygon();
    using pt0 = new oc.gp_Pnt(0, 0, 0);
    using pt1 = new oc.gp_Pnt(10, 0, 0);
    using pt2 = new oc.gp_Pnt(12, 5, 0);
    using pt3 = new oc.gp_Pnt(8, 10, 0);
    using pt4 = new oc.gp_Pnt(0, 8, 0);

    for (const pt of [pt0, pt1, pt2, pt3, pt4]) {
      poly.Add(pt);
    }
    poly.Close();

    expect(poly.IsDone()).toBe(true);
    using wire = poly.Wire();
    expect(wire.IsNull()).toBe(false);
  });

  it('should create a planar face from a closed polygon wire', () => {
    const oc = getOC();
    using p1 = new oc.gp_Pnt(0, 0, 0);
    using p2 = new oc.gp_Pnt(20, 0, 0);
    using p3 = new oc.gp_Pnt(20, 15, 0);
    using p4 = new oc.gp_Pnt(0, 15, 0);

    using poly = new oc.BRepBuilderAPI_MakePolygon(p1, p2, p3, p4, true);
    using disposable = poly.Wire();
    using face = new oc.BRepBuilderAPI_MakeFace(disposable, false);

    expect(face.IsDone()).toBe(true);
    using faceShape = face.Face();
    expect(faceShape.IsNull()).toBe(false);
  });

  it('should produce a solid with correct dimensions from extruded polygon face', async () => {
    const oc = getOC();
    using p1 = new oc.gp_Pnt(0, 0, 0);
    using p2 = new oc.gp_Pnt(20, 0, 0);
    using p3 = new oc.gp_Pnt(20, 15, 0);
    using p4 = new oc.gp_Pnt(0, 15, 0);

    using poly = new oc.BRepBuilderAPI_MakePolygon(p1, p2, p3, p4, true);
    using disposable2 = poly.Wire();
    using face = new oc.BRepBuilderAPI_MakeFace(disposable2, false);
    using disposable3 = face.Face();
    using gpVec = new oc.gp_Vec(0, 0, 10);
    using prism = new oc.BRepPrimAPI_MakePrism(
      disposable3,
      gpVec,
      false,
      true,
    );

    using shape = prism.Shape();
    expect(shape.IsNull()).toBe(false);

    await expectShapeGeometry(shape, {
      size: [20, 15, 10],
      center: [10, 7.5, 5],
      tolerance: 1,
    });
  });

  it('should join two adjacent faces into a shell with Sewing', () => {
    const oc = getOC();
    using p1 = new oc.gp_Pnt(0, 0, 0);
    using p2 = new oc.gp_Pnt(10, 0, 0);
    using p3 = new oc.gp_Pnt(10, 10, 0);
    using p4 = new oc.gp_Pnt(0, 10, 0);
    using bRepBuilderAPIMakepolygon = new oc.BRepBuilderAPI_MakePolygon(p1, p2, p3, p4, true);
    using disposable4 = bRepBuilderAPIMakepolygon.Wire();
    using face1 = new oc.BRepBuilderAPI_MakeFace(
      disposable4,
      false,
    );

    using p5 = new oc.gp_Pnt(10, 0, 0);
    using p6 = new oc.gp_Pnt(20, 0, 0);
    using p7 = new oc.gp_Pnt(20, 10, 0);
    using p8 = new oc.gp_Pnt(10, 10, 0);
    using bRepBuilderAPIMakepolygon2 = new oc.BRepBuilderAPI_MakePolygon(p5, p6, p7, p8, true);
    using disposable5 = bRepBuilderAPIMakepolygon2.Wire();
    using face2 = new oc.BRepBuilderAPI_MakeFace(
      disposable5,
      false,
    );

    using sewing = new oc.BRepBuilderAPI_Sewing(1e-6, true, true, true, false);
    using disposable6 = face1.Face();
    sewing.Add(disposable6);
    using disposable7 = face2.Face();
    sewing.Add(disposable7);
    using messageProgressrange = new oc.Message_ProgressRange();
    sewing.Perform(messageProgressrange);

    using sewn = sewing.SewedShape();
    expect(sewn.IsNull()).toBe(false);
    expect(sewing.NbFreeEdges()).toBeLessThanOrEqual(6);
  });
});
