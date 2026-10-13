import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: Topology', () => {
  beforeAll(async () => { await initOC(); });

  it('should count 6 faces, 24 edges, and 8 vertices on box with TopExp_Explorer', () => {
    const oc = getOC();
    using box = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
    using shape = box.Shape();

    let faceCount = 0;
    using faceExplorer = new oc.TopExp_Explorer(
      shape,
      oc.TopAbs_ShapeEnum.TopAbs_FACE,
      oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
    );
    for (; faceExplorer.More(); faceExplorer.Next()) {
      faceCount++;
    }

    let edgeCount = 0;
    using edgeExplorer = new oc.TopExp_Explorer(
      shape,
      oc.TopAbs_ShapeEnum.TopAbs_EDGE,
      oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
    );
    for (; edgeExplorer.More(); edgeExplorer.Next()) {
      edgeCount++;
    }

    let vertexCount = 0;
    using vertexExplorer = new oc.TopExp_Explorer(
      shape,
      oc.TopAbs_ShapeEnum.TopAbs_VERTEX,
      oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
    );
    for (; vertexExplorer.More(); vertexExplorer.Next()) {
      vertexCount++;
    }

    expect(faceCount).toBe(6);
    expect(edgeCount).toBe(24);
    expect(vertexCount).toBe(48);
  });

  it('should build compound from box with BRep_Builder and TopoDS_Compound', () => {
    const oc = getOC();
    using box = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
    using builder = new oc.BRep_Builder();
    using inCompound = new oc.TopoDS_Compound();
    builder.MakeCompound(inCompound);
    using boxShape = box.Shape();
    builder.Add(inCompound, boxShape);
    expect(inCompound.IsNull()).toBe(false);
  });

  it('should convert explorer Current to Face/Edge/Vertex with TopoDS cast functions', () => {
    const oc = getOC();
    using box = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
    using shape = box.Shape();

    using faceExplorer = new oc.TopExp_Explorer(
      shape,
      oc.TopAbs_ShapeEnum.TopAbs_FACE,
      oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
    );
    expect(faceExplorer.More()).toBe(true);
    using faceExplorerCurrent = faceExplorer.Current();
    using face = oc.TopoDS.Face(faceExplorerCurrent);

    using edgeExplorer = new oc.TopExp_Explorer(
      shape,
      oc.TopAbs_ShapeEnum.TopAbs_EDGE,
      oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
    );
    expect(edgeExplorer.More()).toBe(true);
    using edgeExplorerCurrent = edgeExplorer.Current();
    using edge = oc.TopoDS.Edge(edgeExplorerCurrent);

    using vertexExplorer = new oc.TopExp_Explorer(
      shape,
      oc.TopAbs_ShapeEnum.TopAbs_VERTEX,
      oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
    );
    expect(vertexExplorer.More()).toBe(true);
    using vertexExplorerCurrent = vertexExplorer.Current();
    using vertex = oc.TopoDS.Vertex(vertexExplorerCurrent);
  });
});
