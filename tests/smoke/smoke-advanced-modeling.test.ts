import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';
import { expectShapeGeometry } from './geometry-helpers.js';

describe.skipIf(!wasmExists)('Smoke: Advanced modeling', () => {
  beforeAll(async () => { await initOC(); });

  it('should shell a box preserving outer dimensions with MakeThickSolid', async () => {
    const oc = getOC();
    using box = new oc.BRepPrimAPI_MakeBox(20, 20, 20);
    using boxShape = box.Shape();

    using faceExplorer = new oc.TopExp_Explorer(
      boxShape,
      oc.TopAbs_ShapeEnum.TopAbs_FACE,
      oc.TopAbs_ShapeEnum.TopAbs_SHAPE
    );
    faceExplorer.Next();
    using faceToRemove = faceExplorer.Current();

    using facesToRemove = new oc.NCollection_List_TopoDS_Shape();
    using disposable = facesToRemove.Append(faceToRemove);
    disposable;

    using thickSolid = new oc.BRepOffsetAPI_MakeThickSolid();
    using messageProgressrange = new oc.Message_ProgressRange();
    thickSolid.MakeThickSolidByJoin(
      boxShape,
      facesToRemove,
      -2,
      1e-3,
      oc.BRepOffset_Mode.BRepOffset_Skin,
      false,
      false,
      oc.GeomAbs_JoinType.GeomAbs_Arc,
      false,
      messageProgressrange
    );

    using result = thickSolid.Shape();
    expect(result.IsNull()).toBe(false);

    await expectShapeGeometry(result, {
      size: [20, 20, 20],
      center: [10, 10, 10],
    });
  });

  it('should produce loft with correct height and max diameter via ThruSections', async () => {
    const oc = getOC();
    using gpPnt = new oc.gp_Pnt(0, 0, 0);
    using gpDir = new oc.gp_Dir(0, 0, 1);
    using ax1 = new oc.gp_Ax2(gpPnt, gpDir);
    using gpPnt2 = new oc.gp_Pnt(0, 0, 10);
    using gpDir2 = new oc.gp_Dir(0, 0, 1);
    using ax2 = new oc.gp_Ax2(gpPnt2, gpDir2);

    using circle1 = new oc.Geom_Circle(ax1, 5);
    using circle2 = new oc.Geom_Circle(ax2, 3);

    using edge1 = new oc.BRepBuilderAPI_MakeEdge(circle1);
    using edge2 = new oc.BRepBuilderAPI_MakeEdge(circle2);

    using disposable2 = edge1.Edge();
    using wire1 = new oc.BRepBuilderAPI_MakeWire(disposable2);
    using disposable3 = edge2.Edge();
    using wire2 = new oc.BRepBuilderAPI_MakeWire(disposable3);

    using loft = new oc.BRepOffsetAPI_ThruSections(true, false, 1e-6);
    using disposable4 = wire1.Wire();
    loft.AddWire(disposable4);
    using disposable5 = wire2.Wire();
    loft.AddWire(disposable5);
    loft.CheckCompatibility(false);

    using result = loft.Shape();
    expect(result.IsNull()).toBe(false);

    await expectShapeGeometry(result, {
      size: [10, 10, 10],
      center: [0, 0, 5],
    });
  });

  it('should produce pipe sweep with correct dimensions via MakePipe', async () => {

    const oc = getOC();
    using p1 = new oc.gp_Pnt(0, 0, 0);
    using p2 = new oc.gp_Pnt(10, 0, 0);
    using lineEdge = new oc.BRepBuilderAPI_MakeEdge(p1, p2);
    using disposable6 = lineEdge.Edge();
    using spineWire = new oc.BRepBuilderAPI_MakeWire(disposable6);

    using gpPnt3 = new oc.gp_Pnt(0, 0, 0);
    using gpDir3 = new oc.gp_Dir(1, 0, 0);
    using ax = new oc.gp_Ax2(gpPnt3, gpDir3);
    using circle = new oc.Geom_Circle(ax, 2);
    using profileEdge = new oc.BRepBuilderAPI_MakeEdge(circle);
    using disposable7 = profileEdge.Edge();
    using profileWire = new oc.BRepBuilderAPI_MakeWire(disposable7);

    using disposable8 = spineWire.Wire();
    using disposable9 = profileWire.Wire();
    using pipe = new oc.BRepOffsetAPI_MakePipe(disposable8, disposable9);
    using result = pipe.Shape();
    expect(result.IsNull()).toBe(false);

    await expectShapeGeometry(result, {
      size: [10, 4, 4],
      minVertices: 10,
    });
  });
});
