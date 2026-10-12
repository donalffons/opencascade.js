#!/usr/bin/env python3
"""Idempotently patch BRepTools_NurbsConvertModification.cxx so a face whose
surface is not converted keeps its surface instead of being rebuilt as a
mesh-only face (taucad/opencascade.js#39, item 3).

THE BUG (upstream OCCT, present in the pinned b8f597c677):

`BRepBuilderAPI_NurbsConvert` on a shape that is already meshed and has
B-spline (or Bezier) faces, e.g. a second NurbsConvert of a meshed box, traps
in WASM. The causal chain:

1. `NewSurface` returns false for faces that are already B-spline/Bezier, so
   those faces never enter `myMap` and are not rebuilt with a surface.
2. `NewTriangulation` still returns true (`BRepTools_CopyModification`
   copies the mesh by default). `NewPolygon` already guards this case;
   `NewTriangulation` and `NewPolygonOnTriangulation` do not.
3. `BRepTools_Modifier::Rebuild` therefore takes its "create new face with
   bare triangulation" branch: the result face has a mesh and NO surface.
4. Rebuilding that face's edges attaches pcurves on the surface-less face to
   the ORIGINAL input edges, so the input shape is mutated.
5. On the next face, `IsConvert(E)` calls `aSurface->IsKind()` on the null
   surface handle. WASM address 0 is readable, so the vtable load yields
   garbage and the indirect call traps (natively it would segfault).

THE FIX: in both `NewTriangulation` and `NewPolygonOnTriangulation`,
return false when the face has a surface that this modification did not
convert. The face then goes through the ordinary copy path and keeps its
surface; the mesh is dropped for that face, as it is for any face whose
geometry is rebuilt, and is recomputed on the next `BRepMesh` call.

REGRESSION GUARD: tests/smoke/smoke-nurbsconvert-meshed.test.ts converts
meshed box, cylinder and sphere shapes twice and checks there is no trap, the
result passes `BRepCheck_Analyzer`, every face has a surface, and the input
edges are not mutated.

The pristine and patched SHA256 guards make a silent no-op impossible: if
OCCT changes this file at all, the patch hard-fails.

Reversible via `git checkout` in the OCCT tree.
"""

import hashlib
import os
import sys

# SHA256 of the pristine upstream file (OCCT b8f597c677). Any drift must be
# reviewed by hand: re-verify NewTriangulation still copies the mesh of
# unconverted faces, re-derive the anchors, then reseed both hashes.
PRISTINE_SHA256 = "24640545fce5086411953fae6a2d3cdfa2a217f55b2890a78a76f78c94069637"
PATCHED_SHA256 = "ce4848014fe51e01a4e64efccaac91d1001c0ce94192e5e14d9766b7d497167c"

GUARD = """\
  // libcascade #39: a face whose surface this modification did not convert
  // (already B-spline/Bezier) must keep its surface. Handing its mesh to
  // BRepTools_Modifier makes it rebuild the face as a bare triangulation with
  // no surface, which mutates the input edges and later dereferences the
  // null surface in IsConvert().
  if (BRep_Tool::IsGeometric(theFace) && newSurface(myMap, theFace).IsNull())
  {
    return false;
  }

"""

# (anchor, replacement) — every anchor must match exactly once.
REPLACEMENTS = (
    (
        """\
  if (!BRepTools_CopyModification::NewTriangulation(theFace, theTri))
  {
    return false;
  }

""",
        """\
  if (!BRepTools_CopyModification::NewTriangulation(theFace, theTri))
  {
    return false;
  }

"""
        + GUARD,
    ),
    (
        """\
  if (!BRepTools_CopyModification::NewPolygonOnTriangulation(theEdge, theFace, thePoly))
  {
    return false;
  }

""",
        """\
  if (!BRepTools_CopyModification::NewPolygonOnTriangulation(theEdge, theFace, thePoly))
  {
    return false;
  }

"""
        + GUARD,
    ),
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
        print("  OCCT drifted — re-verify the NurbsConvert mesh-only face defect")
        print("  by hand and reseed both hashes in src/patches/patch_nurbsconvert_mesh_only_face.py.")
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
    print("  NewTriangulation/NewPolygonOnTriangulation skip unconverted faces, so")
    print("  they keep their surface instead of becoming mesh-only faces.")
    return True


def main():
    occt_root = os.environ.get("OCCT_ROOT", "")
    if not occt_root:
        print("ERROR: OCCT_ROOT not set")
        sys.exit(1)

    target = os.path.join(
        occt_root,
        "src",
        "ModelingData",
        "TKBRep",
        "BRepTools",
        "BRepTools_NurbsConvertModification.cxx",
    )
    if not os.path.isfile(target):
        print(f"ERROR: {target} not found")
        sys.exit(1)

    if not patch(target):
        sys.exit(1)


if __name__ == "__main__":
    main()
