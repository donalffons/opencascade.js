/**
 * Verifies `BRep_Tool` same-arity static overloads dispatch by JavaScript-visible argument
 * types, including input-passthrough return-by-value variants.
 */
import { describe, it, expect, beforeAll } from 'vitest';
import type {
  TopoDS_Shape,
  TopoDS_Edge,
  Poly_Triangulation,
  TopLoc_Location,
} from '../../dist/opencascade_single.js';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: BRep_Tool overload dispatch (RBV arity collision)', () => {
  beforeAll(async () => {
    await initOC();
  });

  /**
   * Returns an owning `TopoDS_Shape` for the caller to bind with `using`. The
   * meshing scaffold (`box`, `mesh`, `progressRange`) is scoped inside this
   * helper and disposed at return — OCCT stores triangulation data on the
   * shape's BRep representation, so the shape stays meshed after the builder
   * is gone. Mirrors the pattern in `smoke-static-signature-dispatch.test.ts`.
   */
  function makeTriangulatedBox(): TopoDS_Shape {
    const oc = getOC();
    using box = new oc.BRepPrimAPI_MakeBox(10, 20, 30);
    const shape = box.Shape();
    using progressRange = new oc.Message_ProgressRange();
    using mesh = new oc.BRepMesh_IncrementalMesh(shape, 0.5, false, 0.5, false);
    mesh.Perform(progressRange);
    return shape;
  }

  /**
   * Returns a `DisposableStack` annotated with the first triangulated edge of
   * `shape`, its `Poly_Triangulation`, and its `TopLoc_Location`. Caller binds
   * with `using` and reads `.edge` / `.triangulation` / `.location` — at scope
   * exit the stack's `[Symbol.dispose]` cascades through all three handles in
   * LIFO order. The helper never owns the returned resources past the
   * `stack.move()` transfer, so the per-iteration `using stack = ...` cleanup
   * is a no-op on the success path and a full free on the no-match path.
   */
  function getFirstTriangulatedEdge(
    shape: TopoDS_Shape,
  ): DisposableStack & {
    edge: TopoDS_Edge;
    triangulation: Poly_Triangulation;
    location: TopLoc_Location;
  } {
    const oc = getOC();
    using explorer = new oc.TopExp_Explorer(
      shape,
      oc.TopAbs_ShapeEnum.TopAbs_EDGE,
      oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
    );

    while (explorer.More()) {
      using iterStack = new DisposableStack();
      using explorerCurrent = explorer.Current();
      const currentEdge = iterStack.use(oc.TopoDS.Edge(explorerCurrent));
      const loc = iterStack.use(new oc.TopLoc_Location());
      using faceExplorer = new oc.TopExp_Explorer(
        shape,
        oc.TopAbs_ShapeEnum.TopAbs_FACE,
        oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
      );

      if (faceExplorer.More()) {
        using faceExplorerCurrent = faceExplorer.Current();
        using face = oc.TopoDS.Face(faceExplorerCurrent);
        // Triangulation returns the Poly_Triangulation handle directly under
        // R1/R2 (TopLoc_Location is mutated in place, native Handle return).
        const tri = iterStack.use(oc.BRep_Tool.Triangulation(face, loc, 0));
        if (!tri.isNull()) {
          using polyOnTri = oc.BRep_Tool.PolygonOnTriangulation(currentEdge, tri, loc);
          if (!polyOnTri.isNull()) {
            // Transfer ownership to a fresh stack so iterStack's scope-exit
            // dispose finds an empty container, and the caller's `using` on
            // our return value runs the cascade.
            return Object.assign(iterStack.move(), {
              edge: currentEdge,
              triangulation: tri,
              location: loc,
            });
          }
        }
      }
      explorer.Next();
    }

    throw new Error('No triangulated edge found in test shape');
  }

  describe('PolygonOnTriangulation', () => {
    it('should return Handle<PolyOnTri> for 3-arg non-RBV dispatch (Edge, Triangulation, Location)', () => {
      const oc = getOC();
      using shape = makeTriangulatedBox();
      using ctx = getFirstTriangulatedEdge(shape);

      using handle = oc.BRep_Tool.PolygonOnTriangulation(ctx.edge, ctx.triangulation, ctx.location);
      expect(typeof handle.isNull).toBe('function');
      expect(handle.isNull()).toBe(false);
    });

    it('should return {P, T, L} for Approach G Handle-elision overload (Edge, Location)', () => {
      const oc = getOC();
      using shape = makeTriangulatedBox();
      using ctx = getFirstTriangulatedEdge(shape);

      using loc = new oc.TopLoc_Location();
      // Approach G: non-const Handle<T>& outputs are elided from the JS arg
      // list; stack-local Handles are filled server-side and returned on {P,T,L}.
      using result = oc.BRep_Tool.PolygonOnTriangulation(ctx.edge, loc);

      expect(result).toEqual(
        expect.objectContaining({
          P: expect.anything(),
          T: expect.anything(),
        }),
      );
    });
  });

  describe('PolygonOnSurface', () => {
    it('should return Handle<Poly_Polygon2D> for 2-arg non-RBV dispatch (Edge, Face)', () => {
      const oc = getOC();
      using shape = makeTriangulatedBox();

      using faceExplorer = new oc.TopExp_Explorer(
        shape,
        oc.TopAbs_ShapeEnum.TopAbs_FACE,
        oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
      );
      using edgeExplorer = new oc.TopExp_Explorer(
        shape,
        oc.TopAbs_ShapeEnum.TopAbs_EDGE,
        oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
      );

      expect(faceExplorer.More()).toBe(true);
      expect(edgeExplorer.More()).toBe(true);

      using faceExplorerCurrent = faceExplorer.Current();
      using face = oc.TopoDS.Face(faceExplorerCurrent);
      using edgeExplorerCurrent = edgeExplorer.Current();
      using edge = oc.TopoDS.Edge(edgeExplorerCurrent);

      using handle = oc.BRep_Tool.PolygonOnSurface(edge, face);
      expect(handle === null || typeof handle.isNull === 'function').toBe(true);
    });

    it('should return Handle<Poly_Polygon2D> for 3-arg non-RBV dispatch (Edge, Surface, Location)', () => {
      const oc = getOC();
      using shape = makeTriangulatedBox();

      using faceExplorer = new oc.TopExp_Explorer(
        shape,
        oc.TopAbs_ShapeEnum.TopAbs_FACE,
        oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
      );
      using edgeExplorer = new oc.TopExp_Explorer(
        shape,
        oc.TopAbs_ShapeEnum.TopAbs_EDGE,
        oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
      );

      expect(faceExplorer.More()).toBe(true);
      expect(edgeExplorer.More()).toBe(true);

      using faceExplorerCurrent = faceExplorer.Current();
      using face = oc.TopoDS.Face(faceExplorerCurrent);
      using edgeExplorerCurrent = edgeExplorer.Current();
      using edge = oc.TopoDS.Edge(edgeExplorerCurrent);
      // Surface returns Geom_Surface directly under R1/R2 — TopLoc_Location
      // is the class output mutated in place.
      using surfaceLoc = new oc.TopLoc_Location();
      using surface = oc.BRep_Tool.Surface(face, surfaceLoc);
      using loc = new oc.TopLoc_Location();

      using handle = oc.BRep_Tool.PolygonOnSurface(edge, surface, loc);
      expect(handle === null || typeof handle.isNull === 'function').toBe(true);
    });
  });
});
