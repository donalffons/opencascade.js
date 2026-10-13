/**
 * Smoke tests: OCCT collection types.
 *
 * Demonstrates:
 * - NCollection_List_TopoDS_Shape: building, iterating, sizing
 * - NCollection_IndexedMap_TopoDS_Shape_TopTools_ShapeMapHasher: deduplicating and indexing shapes
 * - NCollection_Array1_gp_Pnt: fixed-size point arrays
 * - TopExp_Explorer as an iterator for topology traversal
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: Collections', () => {
  beforeAll(async () => { await initOC(); });

  it('should support append, size, and access on NCollection_List_TopoDS_Shape', () => {
    const oc = getOC();
    using box1 = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
    using box2 = new oc.BRepPrimAPI_MakeBox(20, 20, 20);
    using box3 = new oc.BRepPrimAPI_MakeBox(30, 30, 30);

    using list = new oc.NCollection_List_TopoDS_Shape();
    expect(list.Size()).toBe(0);

    using box1Shape = box1.Shape();
    using disposable = list.Append(box1Shape);
    disposable;
    using box2Shape = box2.Shape();
    using disposable2 = list.Append(box2Shape);
    disposable2;
    using box3Shape = box3.Shape();
    using disposable3 = list.Append(box3Shape);
    disposable3;

    expect(list.Size()).toBe(3);

    using first = list.First();
    expect(first.IsNull()).toBe(false);

    using last = list.Last();
    expect(last.IsNull()).toBe(false);
  });

  it('should support prepend and reverse on NCollection_List_TopoDS_Shape', () => {
    const oc = getOC();
    using box1 = new oc.BRepPrimAPI_MakeBox(5, 5, 5);
    using box2 = new oc.BRepPrimAPI_MakeBox(10, 10, 10);

    using list = new oc.NCollection_List_TopoDS_Shape();
    using box1Shape2 = box1.Shape();
    using disposable4 = list.Append(box1Shape2);
    disposable4;
    using box2Shape2 = box2.Shape();
    using disposable5 = list.Prepend(box2Shape2);
    disposable5;

    expect(list.Size()).toBe(2);

    list.Reverse();
    expect(list.Size()).toBe(2);

    list.RemoveFirst();
    expect(list.Size()).toBe(1);
  });

  it('should collect unique faces from a box with NCollection_IndexedMap_TopoDS_Shape_TopTools_ShapeMapHasher', () => {
    const oc = getOC();
    using box = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
    using shape = box.Shape();

    using map = new oc.NCollection_IndexedMap_TopoDS_Shape_TopTools_ShapeMapHasher();

    using explorer = new oc.TopExp_Explorer(
      shape,
      oc.TopAbs_ShapeEnum.TopAbs_FACE,
      oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
    );

    while (explorer.More()) {
      using explorerCurrent = explorer.Current();
      map.Add(explorerCurrent);
      explorer.Next();
    }

    expect(map.Size()).toBe(6);

    using face1 = map.FindKey(1);
    expect(face1.IsNull()).toBe(false);

    expect(map.Contains(face1)).toBe(true);

    const faceIndex = map.FindIndex(face1);
    expect(faceIndex).toBe(1);
  });

  it('should collect unique edges from a box with NCollection_IndexedMap_TopoDS_Shape_TopTools_ShapeMapHasher', () => {
    const oc = getOC();
    using box = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
    using shape = box.Shape();

    using edgeMap = new oc.NCollection_IndexedMap_TopoDS_Shape_TopTools_ShapeMapHasher();

    using explorer = new oc.TopExp_Explorer(
      shape,
      oc.TopAbs_ShapeEnum.TopAbs_EDGE,
      oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
    );

    while (explorer.More()) {
      using explorerCurrent2 = explorer.Current();
      edgeMap.Add(explorerCurrent2);
      explorer.Next();
    }

    expect(edgeMap.Size()).toBe(12);
  });

  it('should store and retrieve points in NCollection_Array1_gp_Pnt', () => {
    const oc = getOC();
    using arr = new oc.NCollection_Array1_gp_Pnt(1, 5);
    expect(arr.Length()).toBe(5);
    expect(arr.Lower()).toBe(1);
    expect(arr.Upper()).toBe(5);

    using pt0 = new oc.gp_Pnt(0, 0, 0);
    using pt1 = new oc.gp_Pnt(1, 2, 3);
    using pt2 = new oc.gp_Pnt(4, 5, 6);
    using pt3 = new oc.gp_Pnt(7, 8, 9);
    using pt4 = new oc.gp_Pnt(10, 11, 12);
    const pts = [pt0, pt1, pt2, pt3, pt4];

    for (let i = 0; i < pts.length; i++) {
      arr.SetValue(i + 1, pts[i]!);
    }

    using retrieved = arr.Value(3);
    expect(retrieved.X()).toBe(4);
    expect(retrieved.Y()).toBe(5);
    expect(retrieved.Z()).toBe(6);

    using first = arr.First();
    expect(first.X()).toBe(0);

    using last = arr.Last();
    expect(last.X()).toBe(10);
  });

  it('should count unique topology elements of a cylinder with NCollection indexed map of shape', () => {
    const oc = getOC();
    using cyl = new oc.BRepPrimAPI_MakeCylinder(5, 10);
    using shape = cyl.Shape();

    using faceMap = new oc.NCollection_IndexedMap_TopoDS_Shape_TopTools_ShapeMapHasher();
    using edgeMap = new oc.NCollection_IndexedMap_TopoDS_Shape_TopTools_ShapeMapHasher();
    using vertexMap = new oc.NCollection_IndexedMap_TopoDS_Shape_TopTools_ShapeMapHasher();

    using faceExp = new oc.TopExp_Explorer(shape, oc.TopAbs_ShapeEnum.TopAbs_FACE, oc.TopAbs_ShapeEnum.TopAbs_SHAPE);
    while (faceExp.More()) {
      using faceExpCurrent = faceExp.Current();
      faceMap.Add(faceExpCurrent);
      faceExp.Next();
    }

    using edgeExp = new oc.TopExp_Explorer(shape, oc.TopAbs_ShapeEnum.TopAbs_EDGE, oc.TopAbs_ShapeEnum.TopAbs_SHAPE);
    while (edgeExp.More()) {
      using edgeExpCurrent = edgeExp.Current();
      edgeMap.Add(edgeExpCurrent);
      edgeExp.Next();
    }

    using vertExp = new oc.TopExp_Explorer(shape, oc.TopAbs_ShapeEnum.TopAbs_VERTEX, oc.TopAbs_ShapeEnum.TopAbs_SHAPE);
    while (vertExp.More()) {
      using vertExpCurrent = vertExp.Current();
      vertexMap.Add(vertExpCurrent);
      vertExp.Next();
    }

    expect(faceMap.Size()).toBe(3);
    expect(edgeMap.Size()).toBe(3);
    expect(vertexMap.Size()).toBe(2);
  });

  it('should report correct size after appending items to NCollection_List_TopoDS_Shape', () => {
    const oc = getOC();
    using box1 = new oc.BRepPrimAPI_MakeBox(1, 1, 1);
    using box2 = new oc.BRepPrimAPI_MakeBox(2, 2, 2);
    using box3 = new oc.BRepPrimAPI_MakeBox(3, 3, 3);

    using list = new oc.NCollection_List_TopoDS_Shape();

    using box1Shape3 = box1.Shape();
    using disposable6 = list.Append(box1Shape3);
    disposable6;
    using box2Shape3 = box2.Shape();
    using disposable7 = list.Append(box2Shape3);
    disposable7;
    using box3Shape2 = box3.Shape();
    using disposable8 = list.Append(box3Shape2);
    disposable8;

    expect(list.Size()).toBe(3);
    using disposable9 = list.First();
    expect(disposable9.IsNull()).toBe(false);
    using disposable10 = list.Last();
    expect(disposable10.IsNull()).toBe(false);
  });
});
