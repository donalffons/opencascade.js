/**
 * Smoke tests: Cross-class value_object (RBV) return validation.
 *
 * Validates that return-by-value structs work correctly across multiple
 * unrelated classes. After the JS dispatch migration + cross-class
 * value_object deduplication, structs with identical field layouts may
 * share a single registration. These tests ensure the returned objects
 * have the correct field names and types regardless of which class
 * produced them.
 *
 * Patterns tested:
 * - Primitive T& output params (numbers) from different classes
 * - Handle<T>& output params from different classes
 * - Static methods with output params
 * - Methods returning both a result value AND output params
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: cross-class RBV value_object returns', () => {
  beforeAll(async () => { await initOC(); });

  describe('Geom_Surface.Bounds — primitive T& output (4 numbers)', () => {
    it('should return {U1, U2, V1, V2} from Geom_SphericalSurface', () => {
      const oc = getOC();
      using gpPnt = new oc.gp_Pnt();
      using gpDir = new oc.gp_Dir(0, 0, 1);
      using ax3 = new oc.gp_Ax3(gpPnt, gpDir);
      using sphere = new oc.Geom_SphericalSurface(ax3, 10.0);

      const bounds = sphere.Bounds(0, 0, 0, 0);
      expect(bounds).toEqual(expect.objectContaining({
        U1: expect.any(Number),
        U2: expect.any(Number),
        V1: expect.any(Number),
        V2: expect.any(Number),
      }));
      expect(bounds.U2).toBeGreaterThan(bounds.U1);
    });

    it('should return {U1, U2, V1, V2} from Geom_CylindricalSurface', () => {
      const oc = getOC();
      using gpPnt2 = new oc.gp_Pnt();
      using gpDir2 = new oc.gp_Dir(0, 0, 1);
      using ax3 = new oc.gp_Ax3(gpPnt2, gpDir2);
      using cylinder = new oc.Geom_CylindricalSurface(ax3, 5.0);

      const bounds = cylinder.Bounds(0, 0, 0, 0);
      expect(bounds).toEqual(expect.objectContaining({
        U1: expect.any(Number),
        U2: expect.any(Number),
        V1: expect.any(Number),
        V2: expect.any(Number),
      }));
      expect(bounds.U2).toBeGreaterThan(bounds.U1);
    });
  });

  describe('BRepTools.UVBounds — static method with output params', () => {
    it('should return {UMin, UMax, VMin, VMax} from a box face', () => {
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
      using face = oc.TopoDS.Face(explorerCurrent);

      const result = oc.BRepTools.UVBounds(face, 0, 0, 0, 0);
      expect(result).toEqual(expect.objectContaining({
        UMin: expect.any(Number),
        UMax: expect.any(Number),
        VMin: expect.any(Number),
        VMax: expect.any(Number),
      }));
      expect(result.UMax).toBeGreaterThanOrEqual(result.UMin);
      expect(result.VMax).toBeGreaterThanOrEqual(result.VMin);
    });
  });

  describe('GeomAPI_ProjectPointOnSurf — output params from projection', () => {
    it('should return {U, V} from LowerDistanceParameters', () => {
      const oc = getOC();
      using gpPnt3 = new oc.gp_Pnt();
      using gpDir3 = new oc.gp_Dir(0, 0, 1);
      using ax3 = new oc.gp_Ax3(gpPnt3, gpDir3);
      using sphere = new oc.Geom_SphericalSurface(ax3, 10.0);
      using point = new oc.gp_Pnt(10, 0, 0);

      using projector = new oc.GeomAPI_ProjectPointOnSurf(point, sphere);
      expect(projector.NbPoints()).toBeGreaterThan(0);

      const params = projector.LowerDistanceParameters(0, 0);
      expect(params).toEqual(expect.objectContaining({
        U: expect.any(Number),
        V: expect.any(Number),
      }));
    });
  });

  describe('BRepGProp_Face.Bounds — another class with {U1, U2, V1, V2}', () => {
    it('should return bounds matching the same field shape as Geom_Surface.Bounds', () => {
      const oc = getOC();
      using box = new oc.BRepPrimAPI_MakeBox(10, 20, 30);
      using boxShape2 = box.Shape();
      using explorer = new oc.TopExp_Explorer(
        boxShape2,
        oc.TopAbs_ShapeEnum.TopAbs_FACE,
        oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
      );
      expect(explorer.More()).toBe(true);
      using explorerCurrent2 = explorer.Current();
      using face = oc.TopoDS.Face(explorerCurrent2);

      using gpropFace = new oc.BRepGProp_Face(face);
      const bounds = gpropFace.Bounds(0, 0, 0, 0);
      expect(bounds).toEqual(expect.objectContaining({
        U1: expect.any(Number),
        U2: expect.any(Number),
        V1: expect.any(Number),
        V2: expect.any(Number),
      }));
      expect(bounds.U2).toBeGreaterThanOrEqual(bounds.U1);
      expect(bounds.V2).toBeGreaterThanOrEqual(bounds.V1);
    });
  });

  describe('Geom2dAPI_InterCurveCurve.Segment — Handle<T>& output params', () => {
    it('should return {Curve1, Curve2} with valid handle objects', () => {
      const oc = getOC();
      using center = new oc.gp_Pnt2d(0, 0);
      using dir1 = new oc.gp_Dir2d(1, 0);
      using dir2 = new oc.gp_Dir2d(0, 1);
      using ax1 = new oc.gp_Ax2d(center, dir1);
      using gpPnt2d = new oc.gp_Pnt2d(5, 5);
      using ax2 = new oc.gp_Ax2d(gpPnt2d, dir2);

      using circle = new oc.Geom2d_Circle(ax1, 10.0, true);
      using line = new oc.Geom2d_Line(ax2);

      using inter = new oc.Geom2dAPI_InterCurveCurve(circle, line);
      const nSeg = inter.NbSegments();
      if (nSeg > 0) {
        using disposable = inter.Segment(1);
        const { Curve1, Curve2 } = disposable;
        expect(typeof Curve1.delete).toBe('function');
        expect(typeof Curve2.delete).toBe('function');
      }
    });
  });

  describe('Field consistency across classes with same output layout', () => {
    it('should produce structurally identical returns from different classes', () => {
      const oc = getOC();

      using gpPnt4 = new oc.gp_Pnt();
      using gpDir4 = new oc.gp_Dir(0, 0, 1);
      using ax3 = new oc.gp_Ax3(gpPnt4, gpDir4);
      using sphere = new oc.Geom_SphericalSurface(ax3, 10.0);
      const geomBounds = sphere.Bounds(0, 0, 0, 0);

      using box = new oc.BRepPrimAPI_MakeBox(10, 20, 30);
      using boxShape3 = box.Shape();
      using explorer = new oc.TopExp_Explorer(
        boxShape3,
        oc.TopAbs_ShapeEnum.TopAbs_FACE,
        oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
      );
      using explorerCurrent3 = explorer.Current();
      using face = oc.TopoDS.Face(explorerCurrent3);
      using gpropFace = new oc.BRepGProp_Face(face);
      const gpropBounds = gpropFace.Bounds(0, 0, 0, 0);

      const geomKeys = Object.keys(geomBounds).sort();
      const gpropKeys = Object.keys(gpropBounds).sort();
      expect(geomKeys).toEqual(gpropKeys);
      expect(geomKeys).toEqual(['U1', 'U2', 'V1', 'V2']);
    });
  });
});
