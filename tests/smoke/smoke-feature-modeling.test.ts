/**
 * Smoke tests: Feature-based modeling.
 *
 * Validates BRepFeat_MakeDPrism for boss/pocket operations on faces.
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';
import { expectShapeGeometry } from './geometry-helpers.js';

describe.skipIf(!wasmExists)('Smoke: Feature modeling', () => {
  beforeAll(async () => { await initOC(); });

  it('should create a boss on a box face that increases the shape bounding box height', async () => {
    const oc = getOC();
    using box = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
    using boxShape = box.Shape();

    using faceExplorer = new oc.TopExp_Explorer(
      boxShape,
      oc.TopAbs_ShapeEnum.TopAbs_FACE,
      oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
    );

    // eslint-disable-next-line ocjs-lint/require-using-on-disposable -- topFace ownership is transferred across loop iterations; explicit `.delete()` + reassignment manages disposal manually.
    let topFace = faceExplorer.Current();
    let maxZ = -Infinity;

    while (faceExplorer.More()) {
      using faceExplorerCurrent = faceExplorer.Current();
      using face = oc.TopoDS.Face(faceExplorerCurrent);
      using adaptor = new oc.BRepAdaptor_Surface(face);

      if (adaptor.GetType() === oc.GeomAbs_SurfaceType.GeomAbs_Plane) {
        using origin = new oc.gp_Pnt(0, 0, 0);
        using normal = new oc.gp_Vec(0, 0, 0);
        const uMid = (adaptor.FirstUParameter() + adaptor.LastUParameter()) / 2;
        const vMid = (adaptor.FirstVParameter() + adaptor.LastVParameter()) / 2;

        using pnt = adaptor.Value(uMid, vMid);
        if (pnt.Z() > maxZ) {
          maxZ = pnt.Z();
          topFace.delete();
          // eslint-disable-next-line ocjs-lint/require-using-on-disposable -- see prior comment: ownership is transferred across loop iterations.
          topFace = faceExplorer.Current();
        }
      }
      faceExplorer.Next();
    }

    using disposeTopFace = topFace;
    using skFace = oc.TopoDS.Face(disposeTopFace);

    using profilePt1 = new oc.gp_Pnt(2, 2, 10);
    using profilePt2 = new oc.gp_Pnt(8, 2, 10);
    using profilePt3 = new oc.gp_Pnt(8, 8, 10);
    using profilePt4 = new oc.gp_Pnt(2, 8, 10);

    using profilePoly = new oc.BRepBuilderAPI_MakePolygon(
      profilePt1, profilePt2, profilePt3, profilePt4, true,
    );
    using profileWire = profilePoly.Wire();
    using profileFace = new oc.BRepBuilderAPI_MakeFace(profileWire, true);

    using disposable = profileFace.Face();
    using dprism = new oc.BRepFeat_MakeDPrism(
      boxShape,
      disposable,
      skFace,
      0,
      1,
      true,
    );
    dprism.Perform(5);

    using result = dprism.Shape();
    expect(result.IsNull()).toBe(false);

    await expectShapeGeometry(result, {
      size: [10, 10, 15],
      center: [5, 5, 7.5],
      tolerance: 1,
    });
  });
});
