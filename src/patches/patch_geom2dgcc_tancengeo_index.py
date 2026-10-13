#!/usr/bin/env python3
"""Idempotently patch Geom2dGcc_Circ2dTanCenGeo.cxx — populate the never-written
`Index` array that decides how many tangent circles the solver reports.

THE BUG (upstream OCCT, present in master 4f95ecaa3b and in the pinned
b8f597c677 — the file blob is byte-identical in both, and the defect dates back
to the original Matra Datavision sources):

    NCollection_Array1<int> Index(1, 2);   // allocated, NEVER written
    ...
    if (Index(1) == Index(2))              // reads uninitialised memory
      nbsol = 1;
    else
      nbsol = 2;
    for (i = 1; i <= nbsol; i++) { ... }   // emits that many solutions

`NCollection_Array1<int>` does not value-initialise trivial element types, so
the comparison is `icmp eq undef, undef`, which LLVM folds at compile time —
to a *different* constant per toolchain:

    emsdk 5.0.1 folds it to "not equal" -> nbsol = 2 (always)
    emsdk 6.0.5 folds it to "equal"     -> nbsol = 1 (always)

Neither is correct. Measured through the public Geom2dGcc_Circ2dTanCen facade
(centre point (0,5); the facade routes Line/Circle to the analytic GccAna path
and everything else to this Geo path):

    curve      | emsdk 5.0.1            | emsdk 6.0.5   | correct
    -----------+------------------------+---------------+--------
    circle     | 2 -> [4, 6]            | 2 -> [4, 6]   | 2   (GccAna, unaffected)
    ellipse    | 2 -> [4, 6]            | 1 -> [4]      | 2   (a real solution is dropped)
    parabola   | 2 -> [2.933, 2.933]    | 1 -> [2.933]  | 1   (a bogus duplicate is emitted)

THE FIX — restore the write the author evidently intended:

`Index` is one of four parallel two-slot arrays (`pTan`, `Index`, `theDist2`,
`theParam`) declared together. Slot 1 holds the NEAREST extremum of the
distance from `Pcenter` to the curve, slot 2 the FARTHEST. Three of the four
arrays are written inside the two `if` blocks of the extremum scan; `Index` is
the only one that is not, and its sole use is the `Index(1) == Index(2)` test.
So `Index(k)` was meant to record *which extremum* landed in slot k, and the
condition reads: "if the nearest and the farthest extremum are the same
extremum, there is one distinct tangent circle, otherwise two". The loop below
then emits circles of radius sqrt(theDist2(i)) at parameter theParam(i) — i.e.
exactly one per distinct extremum. Adding `Index(1) = i;` / `Index(2) = i;` to
the two blocks is the whole fix; it is self-validating against the table above
(one extremum -> both slots get i=1 -> nbsol=1 kills the parabola duplicate;
two extrema -> different slots -> nbsol=2 restores the ellipse solution).

The `theDist2(2) = 0.` -> `-1.` seed change is REQUIRED, not cosmetic: `0.` is
a reachable squared distance (centre point exactly on the curve). With the `0.`
seed the max-block would never fire in that case, leaving `Index(2)` at 0 while
`Index(1)` is 1 — nbsol would become 2 and the loop would then read the equally
never-written `theParam(2)`, i.e. the fix would relocate the uninitialised read
rather than remove it. `-1.` is unreachable for a squared distance, so slot 2
is always populated whenever the scan runs (guaranteed: `nbext == 0` throws).

REGRESSION GUARD: tests/smoke/smoke-contributor-math-symbols.test.ts asserts
`Geom2dGcc_Circ2dTanCenGeo::NbSolutions() == 2` for a circle with the centre
point offset from its centre. That assertion fails on emsdk 6.0.5 without this
patch and passes with it, in both the single- and multi-threaded variants. It is
load-bearing: weakening it to merely require a non-zero result would let this
undefined-behaviour regression silently return while all smoke tests stay green.

The pristine and patched SHA256 guards below make a silent no-op impossible: if
OCCT changes this file at all, the patch hard-fails instead of quietly leaving
the undefined behaviour in the build.

Reversible via `git checkout` in the OCCT tree.
"""

import hashlib
import os
import sys

# SHA256 of the pristine upstream file (OCCT b8f597c677, blob ba69399; the same
# blob as master 4f95ecaa3b). Any drift here must be reviewed by hand: re-verify
# the defect still exists, re-derive the anchors, then reseed both hashes.
PRISTINE_SHA256 = "76bdf26757a51adc332ba002946dba4c11255ca2ab0a28f3b6160fadc39dcbe8"
PATCHED_SHA256 = "94c407c6d38f2fc7a4c8806b7ecbd8122ba6d0233aa69ff47720327ec8d3f8f5"

# (anchor, replacement) — every anchor must match exactly once.
REPLACEMENTS = (
    (
        """\
  theDist2(1)               = RealLast();
  theDist2(2)               = 0.;
""",
        """\
  theDist2(1)               = RealLast();
  theDist2(2)               = -1.;
  Index(1)                  = 0;
  Index(2)                  = 0;
""",
    ),
    (
        """\
      theDist2(1) = distmin.SquareDistance(i);
      theParam(1) = thePar;
      pTan(1)     = distmin.Point(i).Value();
""",
        """\
      theDist2(1) = distmin.SquareDistance(i);
      theParam(1) = thePar;
      pTan(1)     = distmin.Point(i).Value();
      Index(1)    = i;
""",
    ),
    (
        """\
      theDist2(2) = distmin.SquareDistance(i);
      theParam(2) = thePar;
      pTan(2)     = distmin.Point(i).Value();
""",
        """\
      theDist2(2) = distmin.SquareDistance(i);
      theParam(2) = thePar;
      pTan(2)     = distmin.Point(i).Value();
      Index(2)    = i;
""",
    ),
)


def apply(content: str) -> str:
    for anchor, replacement in REPLACEMENTS:
        found = content.count(anchor)
        if found != 1:
            raise RuntimeError(
                f"expected exactly 1 occurrence of anchor, found {found}:\n{anchor}"
            )
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
        print("  OCCT drifted — re-verify the Geom2dGcc_Circ2dTanCenGeo `Index` defect")
        print("  by hand and reseed both hashes in src/patches/"
              "patch_geom2dgcc_tancengeo_index.py.")
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
    print("  Populated Index(1)/Index(2) in the extremum scan and seeded the max")
    print("  search at -1. so the nbsol decision no longer reads uninitialised memory.")
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
        "TKGeomAlgo",
        "Geom2dGcc",
        "Geom2dGcc_Circ2dTanCenGeo.cxx",
    )
    if not os.path.isfile(target):
        print(f"ERROR: {target} not found")
        sys.exit(1)

    if not patch(target):
        sys.exit(1)


if __name__ == "__main__":
    main()
