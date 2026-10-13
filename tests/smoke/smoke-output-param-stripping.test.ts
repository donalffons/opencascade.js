/**
 * Verifies return-by-value wrappers accept caller-provided primitive placeholders and return the
 * resulting named fields for UV bounds, edge ranges, and curve extraction.
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: output parameter input-passthrough (Option C — placeholder inputs)', () => {
  beforeAll(async () => { await initOC(); });

  describe('BRepTools.UVBounds — placeholder-input call site returns container', () => {
    it('returns {UMin, UMax, VMin, VMax} from face with placeholder zeros', () => {
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

    it('returns {UMin, UMax, VMin, VMax} from face+edge with placeholder zeros', () => {
      const oc = getOC();
      using box = new oc.BRepPrimAPI_MakeBox(10, 20, 30);
      using boxShape = box.Shape();
      using faceExplorer = new oc.TopExp_Explorer(
        boxShape,
        oc.TopAbs_ShapeEnum.TopAbs_FACE,
        oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
      );
      expect(faceExplorer.More()).toBe(true);
      using faceExplorerCurrent = faceExplorer.Current();
      using face = oc.TopoDS.Face(faceExplorerCurrent);

      using edgeExplorer = new oc.TopExp_Explorer(
        face,
        oc.TopAbs_ShapeEnum.TopAbs_EDGE,
        oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
      );
      expect(edgeExplorer.More()).toBe(true);
      using edgeExplorerCurrent = edgeExplorer.Current();
      using edge = oc.TopoDS.Edge(edgeExplorerCurrent);

      const result = oc.BRepTools.UVBounds(face, edge, 0, 0, 0, 0);

      expect(result).toEqual(expect.objectContaining({
        UMin: expect.any(Number),
        UMax: expect.any(Number),
        VMin: expect.any(Number),
        VMax: expect.any(Number),
      }));
    });
  });

  describe('BRep_Tool.Range — placeholder-input call site returns container', () => {
    it('returns {First, Last} from edge with placeholder zeros', () => {
      const oc = getOC();
      using box = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
      using boxShape = box.Shape();
      using explorer = new oc.TopExp_Explorer(
        boxShape,
        oc.TopAbs_ShapeEnum.TopAbs_EDGE,
        oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
      );
      expect(explorer.More()).toBe(true);
      using explorerCurrent = explorer.Current();
      using edge = oc.TopoDS.Edge(explorerCurrent);

      const range = oc.BRep_Tool.Range(edge, 0, 0);

      expect(range).toEqual(expect.objectContaining({
        First: expect.any(Number),
        Last: expect.any(Number),
      }));
      expect(range.Last).toBeGreaterThan(range.First);
    });
  });

  describe('BRep_Tool.Curve — placeholder-input call site returns container', () => {
    it('returns {result, First, Last} from (edge, location, 0, 0)', () => {
      const oc = getOC();
      using box = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
      using boxShape = box.Shape();
      using explorer = new oc.TopExp_Explorer(
        boxShape,
        oc.TopAbs_ShapeEnum.TopAbs_EDGE,
        oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
      );
      expect(explorer.More()).toBe(true);
      using explorerCurrent = explorer.Current();
      using edge = oc.TopoDS.Edge(explorerCurrent);

      using loc = new oc.TopLoc_Location();
      using curveResult = oc.BRep_Tool.Curve(edge, loc, 0, 0);

      expect(curveResult).toEqual(expect.objectContaining({
        First: expect.any(Number),
        Last: expect.any(Number),
      }));
      expect(curveResult.Last).toBeGreaterThan(curveResult.First);
    });

    it('returns {result, First, Last} from (edge, 0, 0)', () => {
      const oc = getOC();
      using box = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
      using boxShape = box.Shape();
      using explorer = new oc.TopExp_Explorer(
        boxShape,
        oc.TopAbs_ShapeEnum.TopAbs_EDGE,
        oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
      );
      expect(explorer.More()).toBe(true);
      using explorerCurrent = explorer.Current();
      using edge = oc.TopoDS.Edge(explorerCurrent);

      using curveResult = oc.BRep_Tool.Curve(edge, 0, 0);

      expect(curveResult).toEqual(expect.objectContaining({
        First: expect.any(Number),
        Last: expect.any(Number),
      }));
      expect(curveResult.Last).toBeGreaterThan(curveResult.First);
    });
  });
});
