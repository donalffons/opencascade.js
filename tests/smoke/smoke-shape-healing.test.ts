import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: Shape healing', () => {
  beforeAll(async () => { await initOC(); });

  it('connects edges through the modern direct-return overload', () => {
    const oc = getOC();
    using p1 = new oc.gp_Pnt(0, 0, 0);
    using p2 = new oc.gp_Pnt(10, 0, 0);
    using p3 = new oc.gp_Pnt(10, 10, 0);
    using edgeBuilder1 = new oc.BRepBuilderAPI_MakeEdge(p1, p2);
    using edge1 = edgeBuilder1.Edge();
    using edgeBuilder2 = new oc.BRepBuilderAPI_MakeEdge(p2, p3);
    using edge2 = edgeBuilder2.Edge();
    using edges = new oc.NCollection_HSequence_TopoDS_Shape();
    edges.Append(edge1);
    edges.Append(edge2);

    using wires = oc.ShapeAnalysis_FreeBounds.ConnectEdgesToWires(edges, 1e-6, false);

    expect(typeof wires.delete).toBe('function');
    expect(Object.hasOwn(wires, 'wires')).toBe(false);
    using sequence = wires.Sequence();
    expect(sequence.Length()).toBe(1);
  });

  it('should fix a valid shape without error with ShapeFix_Shape', () => {
    const oc = getOC();
    using box = new oc.BRepPrimAPI_MakeBox(10, 20, 30);
    using shape = box.Shape();

    using fixer = new oc.ShapeFix_Shape(shape);
    using messageProgressrange = new oc.Message_ProgressRange();
    fixer.Perform(messageProgressrange);
    using fixed = fixer.Shape();
    expect(fixed.IsNull()).toBe(false);

    using explorer = new oc.TopExp_Explorer(
      fixed,
      oc.TopAbs_ShapeEnum.TopAbs_FACE,
      oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
    );
    let faceCount = 0;
    while (explorer.More()) {
      faceCount++;
      explorer.Next();
    }
    expect(faceCount).toBe(6);
  });

  it('should fix a wire and preserve topology with ShapeFix_Wire', () => {
    const oc = getOC();
    using p1 = new oc.gp_Pnt(0, 0, 0);
    using p2 = new oc.gp_Pnt(10, 0, 0);
    using p3 = new oc.gp_Pnt(10, 10, 0);

    using bRepBuilderAPIMakeedge = new oc.BRepBuilderAPI_MakeEdge(p1, p2);
    using e1 = bRepBuilderAPIMakeedge.Edge();
    using bRepBuilderAPIMakeedge2 = new oc.BRepBuilderAPI_MakeEdge(p2, p3);
    using e2 = bRepBuilderAPIMakeedge2.Edge();

    using wireBuilder = new oc.BRepBuilderAPI_MakeWire();
    wireBuilder.Add(e1);
    wireBuilder.Add(e2);
    using wire = wireBuilder.Wire();

    using bRepBuilderAPIMakeface = new oc.BRepBuilderAPI_MakeFace(wire, true);
    using face = bRepBuilderAPIMakeface.Face();
    using fixer = new oc.ShapeFix_Wire(wire, face, 1e-6);
    using progress = new oc.Message_ProgressRange();
    const result = fixer.Perform(progress);
    expect(typeof result).toBe('boolean');

    using fixedWire = fixer.Wire();
    expect(fixedWire.IsNull()).toBe(false);

    using edgeExplorer = new oc.TopExp_Explorer(
      fixedWire,
      oc.TopAbs_ShapeEnum.TopAbs_EDGE,
      oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
    );
    let edgeCount = 0;
    while (edgeExplorer.More()) {
      edgeCount++;
      edgeExplorer.Next();
    }
    expect(edgeCount).toBe(2);
  });
});
