/**
 * Verifies static same-arity overloads preserve their JavaScript signature metadata and dispatch
 * correctly across handle-returning and return-by-value `BRep_Tool` methods.
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: static method signature dispatch', () => {
  beforeAll(async () => { await initOC(); });

  /**
   * Returns an owning `TopoDS_Shape` for the caller to bind with `using`.
   * `shape` is forwarded via `return` (return-flow escape for ownership transfer); do not
   * declare it with `using` inside the helper — that would dispose before the
   * caller runs. `box` is scoped with `using` so it is released after meshing.
   */
  function makeTriangulatedBox() {
    const oc = getOC();
    using box = new oc.BRepPrimAPI_MakeBox(10, 20, 30);
    const shape = box.Shape();
    using progressRange = new oc.Message_ProgressRange();
    using mesh = new oc.BRepMesh_IncrementalMesh(shape, 0.5, false, 0.5, false);
    mesh.Perform(progressRange);
    return shape;
  }

  describe('BRep_Tool.PolygonOnTriangulation — overload dispatch', () => {
    it('should dispatch (Edge, Triangulation, Location) to the handle-returning overload', () => {
      const oc = getOC();
      using shape = makeTriangulatedBox();

      using faceExplorer = new oc.TopExp_Explorer(
        shape,
        oc.TopAbs_ShapeEnum.TopAbs_FACE,
        oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
      );
      expect(faceExplorer.More()).toBe(true);
      using faceExplorerCurrent = faceExplorer.Current();
      using face = oc.TopoDS.Face(faceExplorerCurrent);

      using loc = new oc.TopLoc_Location();
      // Triangulation returns the Poly_Triangulation handle directly under
      // R1/R2 — TopLoc_Location is a class output mutated in place, the
      // Handle return is surfaced natively (no envelope).
      using tri = oc.BRep_Tool.Triangulation(face, loc, 0);
      expect(tri.isNull()).toBe(false);

      using edgeExplorer = new oc.TopExp_Explorer(
        shape,
        oc.TopAbs_ShapeEnum.TopAbs_EDGE,
        oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
      );
      expect(edgeExplorer.More()).toBe(true);
      using edgeExplorerCurrent = edgeExplorer.Current();
      using edge = oc.TopoDS.Edge(edgeExplorerCurrent);

      using polyOnTri = oc.BRep_Tool.PolygonOnTriangulation(edge, tri, loc);
      expect(typeof polyOnTri.isNull).toBe('function');
    });

    it('should dispatch (Edge, Location) to the {P, T, L} Approach G elision overload', () => {
      const oc = getOC();
      using shape = makeTriangulatedBox();

      using edgeExplorer = new oc.TopExp_Explorer(
        shape,
        oc.TopAbs_ShapeEnum.TopAbs_EDGE,
        oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
      );
      expect(edgeExplorer.More()).toBe(true);
      using edgeExplorerCurrent2 = edgeExplorer.Current();
      using edge = oc.TopoDS.Edge(edgeExplorerCurrent2);
      using loc = new oc.TopLoc_Location();

      // Approach G: the `P` and `T` Handle outputs are elided from the JS-side
      // arg list — the C++ lambda declares stack-local null Handles and
      // surfaces them as container fields. Caller passes only (Edge, Location)
      // and reads the freshly-assigned wrappers from the container.
      using result = oc.BRep_Tool.PolygonOnTriangulation(edge, loc);
      expect(result).toEqual(expect.objectContaining({
        P: expect.anything(),
        T: expect.anything(),
      }));
    });
  });

  describe('BRep_Tool.Curve — static method with input-passthrough RBV {First, Last}', () => {
    it('should return {result, theLocation, First, Last} from edge curve extraction', () => {
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
  });
});
