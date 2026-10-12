#!/usr/bin/env python3
"""Idempotently patch BRepOffset_MakeOffset.cxx so BuildOffsetByArc visits
`MapSF` in a structural order instead of hash-bucket order (taucad/opencascade.js#35,
taucad/tau#243).

THE BUG (upstream OCCT, present in the pinned b8f597c677):

`BRepOffset_MakeOffset::BuildOffsetByArc` builds every offset face into

    NCollection_DataMap<TopoDS_Shape, BRepOffset_Offset, TopTools_ShapeMapHasher> MapSF;

and then walks it with `NCollection_DataMap::Iterator`, which visits buckets
in index order. The bucket is `std::hash<TopoDS_Shape>` modulo the bucket
count, and that hash is the TShape *address* (`TopoDS_Shape.hxx`). Each visit
appends the offset face to the roots of `myImageOffset` and to `myAsDes`, and
`MakeShells()` feeds those roots in that order to `BRepTools_Quilt`. So the
face and edge order of the result follows the heap's allocation history.

On a fresh WASM instance the addresses are always the same, so the output is
reproducible. On a reused instance (any long-lived app or batch pipeline) the
same `MakeThickSolid` / `MakeOffsetShape` call with the Arc join returns a
solid that is geometrically identical but whose sub-shapes come out in a
different order. Everything order-sensitive downstream then diverges:
`BRepTools::Write` bytes, GProp sums in the last bits, the mesh, and
`BRepFilletAPI_MakeFillet`, which produced different triangle counts.
Measured on libcascade 3.0.2: 5 distinct shell outputs in 12 runs on one
instance; 1 in 6 on fresh instances.

THE FIX: keep the loop body and visit the keys in `TopExp_Explorer` order of
`myFaceComp` (faces, then the analyser's new faces, then edges, then
vertices). That is exactly the key population `MapSF` receives above; a final
pass adds any remaining keys so nothing is dropped if a future change binds
something else. The iteration order is then a function of the input topology
only.

Two more loops in the same file have the same defect and get the same
treatment (both confirmed with a native build under a malloc-padding shim):

- `UpdateFaceOffset` walks `myFaceOffset` and the first face of a tangent
  chain decides the offset for the whole chain, so with per-face offsets
  (`SetOffsetOnFace`) hash order changed the GEOMETRY (two different
  volumes for one input). It now visits faces in `myFaceComp` explorer order,
  then `myFaces`, then any remaining keys.
- `CorrectConicalFaces` collects cone apexes in a DataMap and adds one apex
  sphere per apex to the result in map order. The map is now an
  `NCollection_IndexedDataMap` filled in explorer order.

REGRESSION GUARD: tests/smoke/smoke-offset-determinism.test.ts builds the
same shell and offsets (vase, two-apex revolve, filleted box) six times on
one instance with unrelated allocations in between and requires a single
`BRepTools::Write` hash per case. The per-face-offset path is not bound in
the full build, so it is covered only by the native evidence above.

The pristine and patched SHA256 guards make a silent no-op impossible: if
OCCT changes this file at all, the patch hard-fails.

Reversible via `git checkout` in the OCCT tree.
"""

import hashlib
import os
import sys

# SHA256 of the pristine upstream file (OCCT b8f597c677). Any drift must be
# reviewed by hand: re-verify the loop still iterates MapSF in bucket order,
# re-derive the anchors, then reseed both hashes.
PRISTINE_SHA256 = "002411457684d23891e07f651394e6d3701d40aa8a1f6577f6505aec5c048688"
PATCHED_SHA256 = "fa99530c1985357f1d3585520cb0a04887fb6932f31a15563bee501ae3696a81"

ANCHOR_HEAD = """\
  NCollection_DataMap<TopoDS_Shape, BRepOffset_Offset, TopTools_ShapeMapHasher>::Iterator It(MapSF);
  Message_ProgressScope aPS3(aPSOuter.Next(), nullptr, MapSF.Length());
  for (; It.More(); It.Next(), aPS3.Next())
  {
    if (!aPS3.More())
    {
      myError = BRepOffset_UserBreak;
      return;
    }
    const TopoDS_Shape&      SI = It.Key();
    const BRepOffset_Offset& SF = It.Value();
"""
REPL_HEAD = """\
  // libcascade #35 (tau#243): visit MapSF in a structural (heap-address-independent) order.
  // NCollection_DataMap iterates by bucket = std::hash<TopoDS_Shape> = TShape
  // address, which made the roots of myImageOffset -- and so the face order of
  // the result -- depend on allocation history.
  NCollection_IndexedMap<TopoDS_Shape, TopTools_ShapeMapHasher> anOrderedKeys;
  {
    for (Exp.Init(myFaceComp, TopAbs_FACE); Exp.More(); Exp.Next())
    {
      if (MapSF.IsBound(Exp.Current()))
        anOrderedKeys.Add(Exp.Current());
    }
    for (NCollection_List<TopoDS_Shape>::Iterator aItNF(myAnalyse.NewFaces()); aItNF.More();
         aItNF.Next())
    {
      if (MapSF.IsBound(aItNF.Value()))
        anOrderedKeys.Add(aItNF.Value());
    }
    for (Exp.Init(myFaceComp, TopAbs_EDGE); Exp.More(); Exp.Next())
    {
      if (MapSF.IsBound(Exp.Current()))
        anOrderedKeys.Add(Exp.Current());
    }
    for (Exp.Init(myFaceComp, TopAbs_VERTEX); Exp.More(); Exp.Next())
    {
      if (MapSF.IsBound(Exp.Current()))
        anOrderedKeys.Add(Exp.Current());
    }
    // Safety net: keep every key even if a future change binds something else.
    for (NCollection_DataMap<TopoDS_Shape, BRepOffset_Offset, TopTools_ShapeMapHasher>::Iterator
           aItM(MapSF);
         aItM.More();
         aItM.Next())
    {
      anOrderedKeys.Add(aItM.Key());
    }
  }
  Message_ProgressScope aPS3(aPSOuter.Next(), nullptr, anOrderedKeys.Extent());
  for (int anOrdIdx = 1; anOrdIdx <= anOrderedKeys.Extent(); ++anOrdIdx, aPS3.Next())
  {
    if (!aPS3.More())
    {
      myError = BRepOffset_UserBreak;
      return;
    }
    const TopoDS_Shape&      SI = anOrderedKeys(anOrdIdx);
    const BRepOffset_Offset& SF = MapSF(SI);
"""
# UpdateFaceOffset: the first face of a tangent chain decides the chain's
# offset, so hash order changed the GEOMETRY for per-face offsets.
# CorrectConicalFaces: one apex sphere per cone apex is added to the shell in
# FacesOfCone order.
UPDATE_FACE_OFFSET_ORDER_ANCHOR = """\
  NCollection_Map<TopoDS_Shape, TopTools_ShapeMapHasher>             M;
  NCollection_DataMap<TopoDS_Shape, double, TopTools_ShapeMapHasher> CopiedMap;
  CopiedMap.Assign(myFaceOffset);
  NCollection_DataMap<TopoDS_Shape, double, TopTools_ShapeMapHasher>::Iterator it(CopiedMap);

  ChFiDS_TypeOfConcavity RT = ChFiDS_Convex;
  if (myOffset < 0.)
"""
UPDATE_FACE_OFFSET_ORDER_REPL = """\
  NCollection_Map<TopoDS_Shape, TopTools_ShapeMapHasher>             M;
  NCollection_DataMap<TopoDS_Shape, double, TopTools_ShapeMapHasher> CopiedMap;
  CopiedMap.Assign(myFaceOffset);
  // libcascade #35: visit the per-face offsets in shape order, not in
  // address-hashed bucket order -- the first face of a tangent chain wins.
  NCollection_IndexedMap<TopoDS_Shape, TopTools_ShapeMapHasher> anOrderedFaces;
  for (TopExp_Explorer anExpF(myFaceComp, TopAbs_FACE); anExpF.More(); anExpF.Next())
  {
    if (CopiedMap.IsBound(anExpF.Current()))
      anOrderedFaces.Add(anExpF.Current());
  }
  for (int iF = 1; iF <= myFaces.Extent(); ++iF)
  {
    if (CopiedMap.IsBound(myFaces(iF)))
      anOrderedFaces.Add(myFaces(iF));
  }
  for (NCollection_DataMap<TopoDS_Shape, double, TopTools_ShapeMapHasher>::Iterator it(CopiedMap);
       it.More();
       it.Next())
  {
    anOrderedFaces.Add(it.Key()); // safety net
  }

  ChFiDS_TypeOfConcavity RT = ChFiDS_Convex;
  if (myOffset < 0.)
"""
UPDATE_FACE_OFFSET_LOOP_ANCHOR = """\
    RT = ChFiDS_Concave;
  }

  for (; it.More(); it.Next())
  {
    const TopoDS_Face& F         = TopoDS::Face(it.Key());
    double             CurOffset = CopiedMap(F);
    if (!M.Add(F))
    {
"""
UPDATE_FACE_OFFSET_LOOP_REPL = """\
    RT = ChFiDS_Concave;
  }

  for (int anOrdIdx = 1; anOrdIdx <= anOrderedFaces.Extent(); ++anOrdIdx)
  {
    const TopoDS_Face& F         = TopoDS::Face(anOrderedFaces(anOrdIdx));
    double             CurOffset = CopiedMap(F);
    if (!M.Add(F))
    {
"""
CONE_MAP_TYPE_ANCHOR = """\

  int i;

  NCollection_DataMap<TopoDS_Shape, NCollection_List<TopoDS_Shape>, TopTools_ShapeMapHasher>
    FacesOfCone;
  // NCollection_DataMap<TopoDS_Shape, TopoDS_Shape, TopTools_ShapeMapHasher> DegEdges;
  TopExp_Explorer Explo(myOffsetShape, TopAbs_FACE);
"""
CONE_MAP_TYPE_REPL = """\

  int i;

  // libcascade #35: insertion-ordered so apex spheres are added in shape order.
  NCollection_IndexedDataMap<TopoDS_Shape, NCollection_List<TopoDS_Shape>, TopTools_ShapeMapHasher>
    FacesOfCone;
  // NCollection_DataMap<TopoDS_Shape, TopoDS_Shape, TopTools_ShapeMapHasher> DegEdges;
  TopExp_Explorer Explo(myOffsetShape, TopAbs_FACE);
"""
CONE_MAP_LOOKUP_ANCHOR = """\
          // TopoDS_Vertex Vdeg = TopExp::FirstVertex( anEdge );
          TopoDS_Edge   OrEdge = TopoDS::Edge(myInitOffsetEdge.Root(anEdge));
          TopoDS_Vertex VF     = TopExp::FirstVertex(OrEdge);
          if (FacesOfCone.IsBound(VF))
          {
            // add a face to the existing list
            NCollection_List<TopoDS_Shape>& aFaces = FacesOfCone.ChangeFind(VF);
            aFaces.Append(aFace);
            // DegEdges.Bind(aFace, anEdge);
          }
"""
CONE_MAP_LOOKUP_REPL = """\
          // TopoDS_Vertex Vdeg = TopExp::FirstVertex( anEdge );
          TopoDS_Edge   OrEdge = TopoDS::Edge(myInitOffsetEdge.Root(anEdge));
          TopoDS_Vertex VF     = TopExp::FirstVertex(OrEdge);
          if (FacesOfCone.Contains(VF))
          {
            // add a face to the existing list
            NCollection_List<TopoDS_Shape>& aFaces = FacesOfCone.ChangeFromKey(VF);
            aFaces.Append(aFace);
            // DegEdges.Bind(aFace, anEdge);
          }
"""
CONE_MAP_ADD_ANCHOR = """\
            // the vertex is not in the map => create a new key and items
            NCollection_List<TopoDS_Shape> aFaces;
            aFaces.Append(aFace);
            FacesOfCone.Bind(VF, aFaces);
            // DegEdges.Bind(aFace, anEdge);
          }
        }
"""
CONE_MAP_ADD_REPL = """\
            // the vertex is not in the map => create a new key and items
            NCollection_List<TopoDS_Shape> aFaces;
            aFaces.Append(aFace);
            FacesOfCone.Add(VF, aFaces);
            // DegEdges.Bind(aFace, anEdge);
          }
        }
"""
CONE_MAP_LOOP_ANCHOR = """\
    } // for (; fexp.More(); fexp.Next())
  } // if (myJoin == GeomAbs_Arc)

  NCollection_DataMap<TopoDS_Shape, NCollection_List<TopoDS_Shape>, TopTools_ShapeMapHasher>::
    Iterator      Cone(FacesOfCone);
  BRep_Builder    BB;
  TopLoc_Location L;
  bool            IsModified = false;
  for (; Cone.More(); Cone.Next())
  {
    gp_Sphere                          theSphere;
    occ::handle<Geom_SphericalSurface> aSphSurf;
    TopoDS_Wire                        SphereWire;
    BB.MakeWire(SphereWire);
    TopoDS_Vertex                            anApex = TopoDS::Vertex(Cone.Key());
    const NCollection_List<TopoDS_Shape>&    Faces  = Cone.Value(); // FacesOfCone(anApex);
    NCollection_List<TopoDS_Shape>::Iterator itFaces(Faces);
    bool                                     isFirstFace = true;
    gp_Pnt                                   FirstPoint;
"""
CONE_MAP_LOOP_REPL = """\
    } // for (; fexp.More(); fexp.Next())
  } // if (myJoin == GeomAbs_Arc)

  BRep_Builder    BB;
  TopLoc_Location L;
  bool            IsModified = false;
  for (int aConeIdx = 1; aConeIdx <= FacesOfCone.Extent(); ++aConeIdx)
  {
    gp_Sphere                          theSphere;
    occ::handle<Geom_SphericalSurface> aSphSurf;
    TopoDS_Wire                        SphereWire;
    BB.MakeWire(SphereWire);
    TopoDS_Vertex                            anApex = TopoDS::Vertex(FacesOfCone.FindKey(aConeIdx));
    const NCollection_List<TopoDS_Shape>&    Faces  = FacesOfCone(aConeIdx);
    NCollection_List<TopoDS_Shape>::Iterator itFaces(Faces);
    bool                                     isFirstFace = true;
    gp_Pnt                                   FirstPoint;
"""

REPLACEMENTS = (
    (ANCHOR_HEAD, REPL_HEAD),
    (
        """\
    const TopoDS_Face& OF = It.Value().Face();
    myInitOffsetFace.Bind(SI, OF);
""",
        """\
    const TopoDS_Face& OF = SF.Face();
    myInitOffsetFace.Bind(SI, OF);
""",
    ),
    (
        """\
          TopoDS_Shape       aLocalShape = It.Value().Generated(E);
          TopoDS_Edge        OE          = TopoDS::Edge(aLocalShape);
          //          TopoDS_Edge        OE  = TopoDS::Edge(It.Value().Generated(E));
""",
        """\
          TopoDS_Shape       aLocalShape = SF.Generated(E);
          TopoDS_Edge        OE          = TopoDS::Edge(aLocalShape);
""",
    ),
    (UPDATE_FACE_OFFSET_ORDER_ANCHOR, UPDATE_FACE_OFFSET_ORDER_REPL),
    (UPDATE_FACE_OFFSET_LOOP_ANCHOR, UPDATE_FACE_OFFSET_LOOP_REPL),
    (CONE_MAP_TYPE_ANCHOR, CONE_MAP_TYPE_REPL),
    (CONE_MAP_LOOKUP_ANCHOR, CONE_MAP_LOOKUP_REPL),
    (CONE_MAP_ADD_ANCHOR, CONE_MAP_ADD_REPL),
    (CONE_MAP_LOOP_ANCHOR, CONE_MAP_LOOP_REPL),
)


def apply(content: str) -> str:
    for anchor, replacement in REPLACEMENTS:
        found = content.count(anchor)
        if found != 1:
            raise RuntimeError(f"expected exactly 1 occurrence of anchor, found {found}:\n{anchor}")
        content = content.replace(anchor, replacement, 1)
    return content


def patch(filepath: str) -> bool:
    with open(filepath, encoding="utf-8") as f:
        content = f.read()

    actual = hashlib.sha256(content.encode("utf-8")).hexdigest()
    if actual == PATCHED_SHA256:
        print(f"Already patched: {filepath}")
        return True
    if actual != PRISTINE_SHA256:
        print(f"ERROR: unexpected source for {filepath}")
        print(f"  expected pristine: {PRISTINE_SHA256}")
        print(f"  or already patched: {PATCHED_SHA256}")
        print(f"  actual:            {actual}")
        print("  OCCT drifted — re-verify the BuildOffsetByArc MapSF iteration order")
        print("  by hand and reseed both hashes in src/patches/patch_offset_mapsf_order.py.")
        return False

    try:
        patched = apply(content)
    except RuntimeError as error:
        print(f"ERROR: {error}")
        return False

    result = hashlib.sha256(patched.encode("utf-8")).hexdigest()
    if result != PATCHED_SHA256:
        print("ERROR: post-patch SHA256 mismatch.")
        print(f"  expected: {PATCHED_SHA256}")
        print(f"  actual:   {result}")
        return False

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(patched)

    print(f"Patched: {filepath}")
    print("  BuildOffsetByArc now visits MapSF in topological order, so offset")
    print("  results no longer depend on heap allocation history.")
    return True


def main():
    occt_root = os.environ.get("OCCT_ROOT", "")
    if not occt_root:
        print("ERROR: OCCT_ROOT not set")
        sys.exit(1)

    target = os.path.join(
        occt_root,
        "src",
        "ModelingAlgorithms",
        "TKOffset",
        "BRepOffset",
        "BRepOffset_MakeOffset.cxx",
    )
    if not os.path.isfile(target):
        print(f"ERROR: {target} not found")
        sys.exit(1)

    if not patch(target):
        sys.exit(1)


if __name__ == "__main__":
    main()
