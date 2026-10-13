/**
 * Verifies identically shaped return-by-value objects remain usable across classes and translation
 * units. Coverage includes UV bounds, edge ranges, and surface bounds.
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: value_object registration independence', () => {
  beforeAll(async () => { await initOC(); });

  describe('BRepTools.UVBounds — static method with output params', () => {
    it('should return {UMin, UMax, VMin, VMax} with valid numeric bounds', () => {
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

    it('should return UV bounds for a cylindrical face', () => {
      const oc = getOC();
      using cylinder = new oc.BRepPrimAPI_MakeCylinder(5, 20);
      using cylinderShape = cylinder.Shape();
      using explorer = new oc.TopExp_Explorer(
        cylinderShape,
        oc.TopAbs_ShapeEnum.TopAbs_FACE,
        oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
      );
      expect(explorer.More()).toBe(true);
      using explorerCurrent2 = explorer.Current();
      using face = oc.TopoDS.Face(explorerCurrent2);

      const result = oc.BRepTools.UVBounds(face, 0, 0, 0, 0);
      expect(typeof result.UMin).toBe('number');
      expect(typeof result.UMax).toBe('number');
      expect(typeof result.VMin).toBe('number');
      expect(typeof result.VMax).toBe('number');
      expect(Number.isFinite(result.UMin)).toBe(true);
      expect(Number.isFinite(result.UMax)).toBe(true);
    });
  });

  describe('BRep_Tool.Range — another static method with output params', () => {
    it('should return {First, Last} from edge parameter range', () => {
      const oc = getOC();
      using box = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
      using boxShape2 = box.Shape();
      using explorer = new oc.TopExp_Explorer(
        boxShape2,
        oc.TopAbs_ShapeEnum.TopAbs_EDGE,
        oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
      );
      expect(explorer.More()).toBe(true);
      using explorerCurrent3 = explorer.Current();
      using edge = oc.TopoDS.Edge(explorerCurrent3);

      const range = oc.BRep_Tool.Range(edge, 0, 0);

      expect(range).toEqual(expect.objectContaining({
        First: expect.any(Number),
        Last: expect.any(Number),
      }));
      expect(range.Last).toBeGreaterThan(range.First);
    });
  });

  describe('Multiple classes returning same-layout value_objects', () => {
    it('should return valid results from both BRepTools.UVBounds and Geom surface Bounds', () => {
      const oc = getOC();

      using box = new oc.BRepPrimAPI_MakeBox(10, 20, 30);
      using boxShape3 = box.Shape();
      using faceExplorer = new oc.TopExp_Explorer(
        boxShape3,
        oc.TopAbs_ShapeEnum.TopAbs_FACE,
        oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
      );
      expect(faceExplorer.More()).toBe(true);
      using faceExplorerCurrent = faceExplorer.Current();
      using face = oc.TopoDS.Face(faceExplorerCurrent);

      const brepBounds = oc.BRepTools.UVBounds(face, 0, 0, 0, 0);

      using gpPnt = new oc.gp_Pnt();
      using gpDir = new oc.gp_Dir(0, 0, 1);
      using ax3 = new oc.gp_Ax3(gpPnt, gpDir);
      using sphere = new oc.Geom_SphericalSurface(ax3, 10.0);
      const geomBounds = sphere.Bounds(0, 0, 0, 0);

      expect(Object.keys(brepBounds).sort()).toEqual(['UMax', 'UMin', 'VMax', 'VMin']);
      expect(Object.keys(geomBounds).sort()).toEqual(['U1', 'U2', 'V1', 'V2']);

      expect(typeof brepBounds.UMin).toBe('number');
      expect(typeof geomBounds.U1).toBe('number');
    });
  });
});
