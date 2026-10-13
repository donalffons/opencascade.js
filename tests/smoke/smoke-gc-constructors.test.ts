/**
 * Smoke tests: GC_ 3D geometry constructors.
 *
 * Validates GC_MakeArcOfCircle -- used by brepjs for arc construction.
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: GC constructors', () => {
  beforeAll(async () => { await initOC(); });

  it('should construct an arc through 3 non-collinear points and build a single-edge wire', () => {
    const oc = getOC();
    using p1 = new oc.gp_Pnt(0, 0, 0);
    using p2 = new oc.gp_Pnt(5, 5, 0);
    using p3 = new oc.gp_Pnt(10, 0, 0);

    using arcMaker = new oc.GC_MakeArcOfCircle(p1, p2, p3);

    expect(arcMaker.IsDone()).toBe(true);

    using curve = arcMaker.Value();

    using edge = new oc.BRepBuilderAPI_MakeEdge(curve);
    using disposable = edge.Edge();
    using wire = new oc.BRepBuilderAPI_MakeWire(disposable);

    using disposable2 = wire.Wire();
    using explorer = new oc.TopExp_Explorer(
      disposable2,
      oc.TopAbs_ShapeEnum.TopAbs_EDGE,
      oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
    );
    let edgeCount = 0;
    while (explorer.More()) { edgeCount++; explorer.Next(); }

    expect(edgeCount).toBe(1);
  });

  it('should produce an edge whose start and end match the input points', () => {
    const oc = getOC();
    using p1 = new oc.gp_Pnt(0, 0, 0);
    using p2 = new oc.gp_Pnt(5, 5, 0);
    using p3 = new oc.gp_Pnt(10, 0, 0);

    using arcMaker = new oc.GC_MakeArcOfCircle(p1, p2, p3);
    using curve = arcMaker.Value();

    using edge = new oc.BRepBuilderAPI_MakeEdge(curve);

    using disposable3 = edge.Edge();
    using vExplorer = new oc.TopExp_Explorer(
      disposable3,
      oc.TopAbs_ShapeEnum.TopAbs_VERTEX,
      oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
    );

    const vertices: Array<{ x: number; y: number; z: number }> = [];
    while (vExplorer.More()) {
      using vExplorerCurrent = vExplorer.Current();
      using vertex = oc.TopoDS.Vertex(vExplorerCurrent);
      using pnt = oc.BRep_Tool.Pnt(vertex);
      vertices.push({ x: pnt.X(), y: pnt.Y(), z: pnt.Z() });
      vExplorer.Next();
    }

    expect(vertices.length).toBe(2);

    const start = vertices[0]!;
    expect(Math.abs(start.x - 0)).toBeLessThan(1e-6);
    expect(Math.abs(start.y - 0)).toBeLessThan(1e-6);
    expect(Math.abs(start.z - 0)).toBeLessThan(1e-6);

    const end = vertices[1]!;
    expect(Math.abs(end.x - 10)).toBeLessThan(1e-6);
    expect(Math.abs(end.y - 0)).toBeLessThan(1e-6);
    expect(Math.abs(end.z - 0)).toBeLessThan(1e-6);
  });
});
