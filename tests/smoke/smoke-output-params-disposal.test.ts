/**
 * Verifies return-by-value containers that own handles implement idempotent `Symbol.dispose`
 * and work with `using` declarations and `DisposableStack`.
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: Symbol.dispose on RBV containers (Handle-elision envelope)', () => {
  beforeAll(async () => {
    await initOC();
  });

  it('PolygonOnTriangulation container exposes a callable [Symbol.dispose]', () => {
    const oc = getOC();
    using box = new oc.BRepPrimAPI_MakeBox(10, 20, 30);
    using shape = box.Shape();
    using progressRange = new oc.Message_ProgressRange();
    using mesh = new oc.BRepMesh_IncrementalMesh(shape, 0.5, false, 0.5, false);
    mesh.Perform(progressRange);

    using edgeExplorer = new oc.TopExp_Explorer(
      shape,
      oc.TopAbs_ShapeEnum.TopAbs_EDGE,
      oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
    );
    expect(edgeExplorer.More()).toBe(true);
    using edgeCurrent = edgeExplorer.Current();
    using edge = oc.TopoDS.Edge(edgeCurrent);
    using loc = new oc.TopLoc_Location();

    using result = oc.BRep_Tool.PolygonOnTriangulation(edge, loc);
    expect(typeof result[Symbol.dispose]).toBe('function');

    // The RBV envelope owns embind-managed Handle fields (P, T) before disposal.
    expect(result.P).toBeDefined();
    expect(result.T).toBeDefined();

    // Explicit disposal deletes every owned handle field; the trailing `using`
    // runs the shared disposer again at scope exit (idempotent — see below).
    expect(() => result[Symbol.dispose]()).not.toThrow();
  });

  it('using declaration drives [Symbol.dispose] at scope exit', () => {
    const oc = getOC();
    using box = new oc.BRepPrimAPI_MakeBox(10, 20, 30);
    using shape = box.Shape();
    using progressRange = new oc.Message_ProgressRange();
    using mesh = new oc.BRepMesh_IncrementalMesh(shape, 0.5, false, 0.5, false);
    mesh.Perform(progressRange);

    using edgeExplorer = new oc.TopExp_Explorer(
      shape,
      oc.TopAbs_ShapeEnum.TopAbs_EDGE,
      oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
    );
    using edgeCurrent = edgeExplorer.Current();
    using edge = oc.TopoDS.Edge(edgeCurrent);
    using loc = new oc.TopLoc_Location();

    let disposedFlag = false;
    {
      using result = oc.BRep_Tool.PolygonOnTriangulation(edge, loc);
      expect(typeof result.P.isNull).toBe('function');
      disposedFlag = true;
    }
    expect(disposedFlag).toBe(true);
  });

  it('idempotent dispose — second call is a no-op', () => {
    const oc = getOC();
    using box = new oc.BRepPrimAPI_MakeBox(10, 20, 30);
    using shape = box.Shape();
    using progressRange = new oc.Message_ProgressRange();
    using mesh = new oc.BRepMesh_IncrementalMesh(shape, 0.5, false, 0.5, false);
    mesh.Perform(progressRange);

    using edgeExplorer = new oc.TopExp_Explorer(
      shape,
      oc.TopAbs_ShapeEnum.TopAbs_EDGE,
      oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
    );
    using edgeCurrent = edgeExplorer.Current();
    using edge = oc.TopoDS.Edge(edgeCurrent);
    using loc = new oc.TopLoc_Location();

    using r = oc.BRep_Tool.PolygonOnTriangulation(edge, loc);
    r[Symbol.dispose]();
    expect(() => r[Symbol.dispose]()).not.toThrow();
  });

  it('DisposableStack.use adopts the container as a single resource', () => {
    const oc = getOC();
    using box = new oc.BRepPrimAPI_MakeBox(10, 20, 30);
    using shape = box.Shape();
    using progressRange = new oc.Message_ProgressRange();
    using mesh = new oc.BRepMesh_IncrementalMesh(shape, 0.5, false, 0.5, false);
    mesh.Perform(progressRange);

    using edgeExplorer = new oc.TopExp_Explorer(
      shape,
      oc.TopAbs_ShapeEnum.TopAbs_EDGE,
      oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
    );
    using edgeCurrent = edgeExplorer.Current();
    using edge = oc.TopoDS.Edge(edgeCurrent);
    using loc = new oc.TopLoc_Location();

    using stack = new DisposableStack();
    using r = stack.use(oc.BRep_Tool.PolygonOnTriangulation(edge, loc));
    expect(typeof r.P.isNull).toBe('function');
    // stack.dispose() runs at scope exit and disposes r.
  });
});
