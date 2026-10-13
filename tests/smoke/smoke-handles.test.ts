import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: Handle construction and cross-class passing', () => {
  beforeAll(async () => { await initOC(); });

  it('should create edge from Geom_Line via unified API', () => {
    const oc = getOC();
    using gpPnt = new oc.gp_Pnt();
    using gpDir = new oc.gp_Dir(1, 0, 0);
    using ax1 = new oc.gp_Ax1(gpPnt, gpDir);
    using geomLine = new oc.Geom_Line(ax1);
    expect(geomLine.isNull()).toBe(false);

    using makeEdge = new oc.BRepBuilderAPI_MakeEdge(geomLine);
    expect(makeEdge.IsDone()).toBe(true);
    using edge = makeEdge.Edge();
    expect(edge.IsNull()).toBe(false);
  });

  it('should create edge from Geom_Circle via unified API', () => {
    const oc = getOC();
    using gpPnt2 = new oc.gp_Pnt();
    using gpDir2 = new oc.gp_Dir(0, 0, 1);
    using ax2 = new oc.gp_Ax2(gpPnt2, gpDir2);
    using geomCircle = new oc.Geom_Circle(ax2, 5);
    expect(geomCircle.isNull()).toBe(false);

    using makeEdge = new oc.BRepBuilderAPI_MakeEdge(geomCircle);
    expect(makeEdge.IsDone()).toBe(true);
    using edge = makeEdge.Edge();
    expect(edge.IsNull()).toBe(false);
  });
});
