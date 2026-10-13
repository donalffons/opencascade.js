/**
 * Smoke tests: Boolean vs number dispatch at the same arity.
 *
 * Validates that constructors where one overload takes a boolean and another
 * takes a number at the same argument position are dispatched correctly.
 * The bugra9 JS dispatch uses typeof, which distinguishes 'boolean' from
 * 'number' — so this pattern should work after migration.
 *
 * BRepPrimAPI_MakeRevol:
 *   constructor(S: TopoDS_Shape, A: gp_Ax1, Copy: boolean)  — full revolution
 *   constructor(S: TopoDS_Shape, A: gp_Ax1, D: number)       — partial revolution
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: boolean vs number dispatch', () => {
  beforeAll(async () => { await initOC(); });

  describe('BRepPrimAPI_MakeRevol — 3-arg bool vs number dispatch', () => {
    it('should dispatch (Shape, Ax1, boolean) — full revolution with copy flag', () => {
      const oc = getOC();
      using gpPnt = new oc.gp_Pnt(5, 0, 0);
      using gpPnt2 = new oc.gp_Pnt(5, 0, 10);
      using profile = new oc.BRepBuilderAPI_MakeEdge(
        gpPnt,
        gpPnt2,
      );
      using gpPnt3 = new oc.gp_Pnt(0, 0, 0);
      using gpDir = new oc.gp_Dir(0, 0, 1);
      using ax1 = new oc.gp_Ax1(gpPnt3, gpDir);

      using disposable = profile.Edge();
      using revol = new oc.BRepPrimAPI_MakeRevol(disposable, ax1, true);
      using shape = revol.Shape();
      expect(shape.IsNull()).toBe(false);
    });

    it('should dispatch (Shape, Ax1, number) — partial revolution by angle', () => {
      const oc = getOC();
      using gpPnt4 = new oc.gp_Pnt(5, 0, 0);
      using gpPnt5 = new oc.gp_Pnt(5, 0, 10);
      using profile = new oc.BRepBuilderAPI_MakeEdge(
        gpPnt4,
        gpPnt5,
      );
      using gpPnt6 = new oc.gp_Pnt(0, 0, 0);
      using gpDir2 = new oc.gp_Dir(0, 0, 1);
      using ax1 = new oc.gp_Ax1(gpPnt6, gpDir2);

      const halfPi = Math.PI / 2;
      using disposable2 = profile.Edge();
      using revol = new oc.BRepPrimAPI_MakeRevol(disposable2, ax1, halfPi);
      using shape = revol.Shape();
      expect(shape.IsNull()).toBe(false);
    });

    it('should produce valid shapes for both bool and number dispatch paths', () => {
      const oc = getOC();
      using gpPnt7 = new oc.gp_Pnt(5, 0, 0);
      using gpPnt8 = new oc.gp_Pnt(5, 0, 10);
      using profile = new oc.BRepBuilderAPI_MakeEdge(
        gpPnt7,
        gpPnt8,
      );
      using gpPnt9 = new oc.gp_Pnt(0, 0, 0);
      using gpDir3 = new oc.gp_Dir(0, 0, 1);
      using ax1 = new oc.gp_Ax1(gpPnt9, gpDir3);

      using disposable3 = profile.Edge();
      using revolFull = new oc.BRepPrimAPI_MakeRevol(disposable3, ax1, true);
      using disposable4 = profile.Edge();
      using revolPartial = new oc.BRepPrimAPI_MakeRevol(disposable4, ax1, Math.PI / 2);

      using revolFullShape = revolFull.Shape();
      using explorerFull = new oc.TopExp_Explorer(
        revolFullShape,
        oc.TopAbs_ShapeEnum.TopAbs_FACE,
        oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
      );
      using revolPartialShape = revolPartial.Shape();
      using explorerPartial = new oc.TopExp_Explorer(
        revolPartialShape,
        oc.TopAbs_ShapeEnum.TopAbs_FACE,
        oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
      );

      let fullFaces = 0;
      while (explorerFull.More()) { fullFaces++; explorerFull.Next(); }
      let partialFaces = 0;
      while (explorerPartial.More()) { partialFaces++; explorerPartial.Next(); }

      expect(fullFaces).toBeGreaterThan(0);
      expect(partialFaces).toBeGreaterThan(0);
      using revolFullShape2 = revolFull.Shape();
      expect(revolFullShape2.IsNull()).toBe(false);
      using revolPartialShape2 = revolPartial.Shape();
      expect(revolPartialShape2.IsNull()).toBe(false);
    });
  });

  describe('BRepGProp_Face — 1-arg bool vs object dispatch', () => {
    it('should dispatch (boolean) — flag constructor', () => {
      const oc = getOC();
      using face = new oc.BRepGProp_Face(true);
      const bounds = face.Bounds(0, 0, 0, 0);
      expect(bounds).toEqual(expect.objectContaining({
        U1: expect.any(Number),
        U2: expect.any(Number),
        V1: expect.any(Number),
        V2: expect.any(Number),
      }));
    });

    it('should dispatch (TopoDS_Face) — face constructor', () => {
      const oc = getOC();
      using box = new oc.BRepPrimAPI_MakeBox(10, 20, 30);
      using boxShape = box.Shape();
      using explorer = new oc.TopExp_Explorer(
        boxShape,
        oc.TopAbs_ShapeEnum.TopAbs_FACE,
        oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
      );
      expect(explorer.More()).toBe(true);
      using explorerCurrent = explorer.Current();
      using topoFace = oc.TopoDS.Face(explorerCurrent);
      using gpropFace = new oc.BRepGProp_Face(topoFace);
      const bounds = gpropFace.Bounds(0, 0, 0, 0);
      expect(bounds.U2).toBeGreaterThanOrEqual(bounds.U1);
      expect(bounds.V2).toBeGreaterThanOrEqual(bounds.V1);
    });
  });
});
