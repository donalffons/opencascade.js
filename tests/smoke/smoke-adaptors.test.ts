/**
 * Smoke tests: Curve/surface adaptor interfaces.
 *
 * Validates BRepAdaptor_Surface, BRepAdaptor_CompCurve, and related adaptors.
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: Adaptors', () => {
  beforeAll(async () => { await initOC(); });

  it('should report GeomAbs_Plane for a planar box face wrapped in BRepAdaptor_Surface', () => {
    const oc = getOC();
    using box = new oc.BRepPrimAPI_MakeBox(10, 10, 10);

    using boxShape = box.Shape();
    using explorer = new oc.TopExp_Explorer(
      boxShape,
      oc.TopAbs_ShapeEnum.TopAbs_FACE,
      oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
    );
    expect(explorer.More()).toBe(true);

    using explorerCurrent = explorer.Current();
    using face = oc.TopoDS.Face(explorerCurrent);
    using adaptor = new oc.BRepAdaptor_Surface(face);

    expect(adaptor.GetType()).toBe(oc.GeomAbs_SurfaceType.GeomAbs_Plane);
  });

  it('should return finite parameter range for a rectangular wire wrapped in BRepAdaptor_CompCurve', () => {
    const oc = getOC();
    using p1 = new oc.gp_Pnt(0, 0, 0);
    using p2 = new oc.gp_Pnt(10, 0, 0);
    using p3 = new oc.gp_Pnt(10, 10, 0);
    using p4 = new oc.gp_Pnt(0, 10, 0);
    using poly = new oc.BRepBuilderAPI_MakePolygon(p1, p2, p3, p4, true);

    using disposable = poly.Wire();
    using compCurve = new oc.BRepAdaptor_CompCurve(disposable);

    const first = compCurve.FirstParameter();
    const last = compCurve.LastParameter();

    expect(Number.isFinite(first)).toBe(true);
    expect(Number.isFinite(last)).toBe(true);
    expect(first).toBeLessThan(last);
  });

  it('should report GeomAbs_Cylinder for a cylindrical face wrapped in BRepAdaptor_Surface', () => {
    const oc = getOC();
    using cyl = new oc.BRepPrimAPI_MakeCylinder(5, 20);

    using cylShape = cyl.Shape();
    using explorer = new oc.TopExp_Explorer(
      cylShape,
      oc.TopAbs_ShapeEnum.TopAbs_FACE,
      oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
    );

    let foundCylinder = false;
    while (explorer.More()) {
      using explorerCurrent2 = explorer.Current();
      using face = oc.TopoDS.Face(explorerCurrent2);
      using adaptor = new oc.BRepAdaptor_Surface(face);
      if (adaptor.GetType() === oc.GeomAbs_SurfaceType.GeomAbs_Cylinder) {
        foundCylinder = true;
        break;
      }
      explorer.Next();
    }

    expect(foundCylinder).toBe(true);
  });
});
