import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: Geometry', () => {
  beforeAll(async () => { await initOC(); });

  it('should expose X, Y, Z coordinates for gp_Pnt', () => {
    const oc = getOC();
    using pnt = new oc.gp_Pnt(1, 2, 3);
    expect(pnt.X()).toBe(1);
    expect(pnt.Y()).toBe(2);
    expect(pnt.Z()).toBe(3);
  });

  it('should compute IsNull and Magnitude for gp_Vec', () => {
    const oc = getOC();
    using nullVec = new oc.gp_Vec(0, 0, 0);
    expect(nullVec.Magnitude()).toBe(0);
    using vec = new oc.gp_Vec(3, 4, 0);
    expect(vec.Magnitude()).toBe(5);
  });

  it('should produce valid face from Geom_Circle through MakeEdge, MakeWire, MakeFace pipeline', () => {
    const oc = getOC();
    using gpPnt = new oc.gp_Pnt();
    using gpDir = new oc.gp_Dir(0, 0, 1);
    using axis = new oc.gp_Ax2(
      gpPnt,
      gpDir,
    );
    using circle = new oc.Geom_Circle(axis, 5);
    using makeEdge = new oc.BRepBuilderAPI_MakeEdge(circle);
    using edge = makeEdge.Edge();
    using makeWire = new oc.BRepBuilderAPI_MakeWire(edge);
    using wire = makeWire.Wire();
    using makeFace = new oc.BRepBuilderAPI_MakeFace(wire, false);
    using shape = makeFace.Shape();
    expect(shape.IsNull()).toBe(false);
  });
});
