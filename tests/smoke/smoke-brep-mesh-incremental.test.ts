/**
 * Verifies the five-argument `BRepMesh_IncrementalMesh` constructor meshes a shape and
 * `BRep_Tool` exposes the resulting face triangulations.
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: BRepMesh incremental mesh + triangulation', () => {
  beforeAll(async () => {
    await initOC();
  });

  it('BRepMesh_IncrementalMesh yields a face triangulation with triangles', () => {
    const oc = getOC();
    using box = new oc.BRepPrimAPI_MakeBox(6, 6, 6);
    using shape = box.Shape();
    using mesh = new oc.BRepMesh_IncrementalMesh(shape, 0.25, false, 0.5, false);

    using explorer = new oc.TopExp_Explorer(
      shape,
      oc.TopAbs_ShapeEnum.TopAbs_FACE,
      oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
    );
    expect(explorer.More()).toBe(true);
    using explorerCurrent = explorer.Current();
    using face = oc.TopoDS.Face(explorerCurrent);

    using loc = new oc.TopLoc_Location();
    /** `Poly_MeshPurpose_NONE` — default visualization mesh (see `Poly_MeshPurpose.hxx`). */
    const meshPurposeNone = 0;
    using tri = oc.BRep_Tool.Triangulation(face, loc, meshPurposeNone);
    expect(tri.NbTriangles()).toBeGreaterThan(0);
    expect(tri.NbNodes()).toBeGreaterThan(2);
  });
});
