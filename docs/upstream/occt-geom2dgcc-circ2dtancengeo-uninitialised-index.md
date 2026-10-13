# OCCT: `Geom2dGcc_Circ2dTanCenGeo` decides its solution count from uninitialised memory

- **Upstream project**: [Open-Cascade-SAS/OCCT](https://github.com/Open-Cascade-SAS/OCCT)
- **Affected file**: `src/ModelingAlgorithms/TKGeomAlgo/Geom2dGcc/Geom2dGcc_Circ2dTanCenGeo.cxx`
- **Affected versions**: every version — the defect predates the 2024 repository
  reorganisation (`5647b46a34`) and is unchanged in master `4f95ecaa3b` and in
  the 8.0.1 tag `b8f597c677` (both carry blob `ba6939935c`).
- **Patch**: [`occt-geom2dgcc-circ2dtancengeo-uninitialised-index.patch`](occt-geom2dgcc-circ2dtancengeo-uninitialised-index.patch)
- **Local carrier**: `src/patches/patch_geom2dgcc_tancengeo_index.py`, applied by
  `nx run ocjs:apply-patches`. Remove it once an OCCT release containing the
  upstream fix is pinned.
- **Status**: prepared, **not submitted**.

## Summary

The constructor decides how many tangent circles to report by comparing two
elements of an array it never writes:

```cpp
NCollection_Array1<int> Index(1, 2);   // allocated, never written
...
if (Index(1) == Index(2))              // reads uninitialised memory
  nbsol = 1;
else
  nbsol = 2;
for (i = 1; i <= nbsol; i++) { ... }   // emits that many solutions
```

`NCollection_Array1` does not value-initialise trivial element types, so the
comparison is `icmp eq undef, undef`. The optimiser folds that to a compile-time
constant, and different compilers fold it in opposite directions. The result is
not a rare misbehaviour: for a given build, *every* call takes the same wrong
branch.

Measured with two Emscripten/clang toolchains over an otherwise identical build
of the same OCCT source:

| Input curve | emsdk 5.0.1 (clang 20) | emsdk 6.0.5 (clang 22) | Correct |
| --- | --- | --- | --- |
| circle (analytic `GccAna` path) | 2 → radii [4, 6] | 2 → [4, 6] | 2 |
| ellipse (this `GccGeo` path) | 2 → [4, 6] | **1 → [4]** | 2 |
| parabola (this path) | **2 → [2.933, 2.933]** duplicate | 1 → [2.933] | 1 |

Neither toolchain is correct. One drops a real solution, the other emits a
duplicate. The circle row is a control: `Geom2dGcc_Circ2dTanCen` dispatches
lines and circles to the analytic `GccAna` implementation, which is unaffected.

## Minimal repro

Centre point `(0, 5)`; unqualified curve; tolerance `1e-9`.

```cpp
#include <Geom2d_Ellipse.hxx>
#include <Geom2d_Parabola.hxx>
#include <Geom2d_CartesianPoint.hxx>
#include <Geom2dAdaptor_Curve.hxx>
#include <Geom2dGcc_QualifiedCurve.hxx>
#include <Geom2dGcc_Circ2dTanCen.hxx>
#include <gp_Ax22d.hxx>
#include <iostream>

static void Report(const Handle(Geom2d_Curve)& theCurve, const char* theLabel)
{
  Geom2dAdaptor_Curve      anAdaptor(theCurve);
  Geom2dGcc_QualifiedCurve aQualified(anAdaptor, GccEnt_unqualified);
  Handle(Geom2d_Point)     aCentre = new Geom2d_CartesianPoint(gp_Pnt2d(0., 5.));
  Geom2dGcc_Circ2dTanCen   aSolver(aQualified, aCentre, 1.e-9);
  std::cout << theLabel << " NbSolutions=" << aSolver.NbSolutions() << " radii=[";
  for (Standard_Integer anI = 1; anI <= aSolver.NbSolutions(); ++anI)
    std::cout << (anI > 1 ? ", " : "") << aSolver.ThisSolution(anI).Radius();
  std::cout << "]\n";
}

int main()
{
  const gp_Ax22d anAxes(gp_Pnt2d(0., 0.), gp_Dir2d(1., 0.), gp_Dir2d(0., 1.));
  Report(new Geom2d_Ellipse(gp_Elips2d(anAxes, 2., 1.)), "ellipse ");  // expect 2 -> [4, 6]
  Report(new Geom2d_Parabola(gp_Parab2d(anAxes, 1.)),    "parabola");  // expect 1 -> [2.933]
  return 0;
}
```

The ellipse's nearest and farthest extrema from `(0, 5)` are `(0, 1)` and
`(0, -1)`, so the two tangent circles have radii 4 and 6. The parabola has a
single extremum, so there is one tangent circle, radius ≈ 2.933354.

Building the same source with UBSan/MSan, or simply with two different compiler
versions, is enough to show the divergence without any geometry reasoning.

## The fix

`Index` is one of four parallel two-slot arrays — `pTan`, `Index`, `theDist2`,
`theParam` — declared together. Slot 1 tracks the nearest extremum of the
distance from `Pcenter` to the curve, slot 2 the farthest. Three of the four are
written inside the two `if` blocks of the extremum scan; `Index` is the only one
that is not, and its sole use is the `Index(1) == Index(2)` test. Recording the
extremum index in those same two blocks makes the condition mean exactly what it
reads as: *if the nearest and the farthest extremum are the same extremum there
is one distinct tangent circle, otherwise two.* The emission loop below already
matches that reading — it produces one circle of radius `sqrt(theDist2(i))` at
parameter `theParam(i)` per slot.

The change is self-validating against the table above: a single extremum puts
`i = 1` in both slots and collapses the parabola's duplicate; two distinct
extrema put different indices in the two slots and restore the ellipse's second
solution.

The patch additionally seeds the max accumulator with `-1.` instead of `0.`.
That is required, not cosmetic: `0.` is a reachable squared distance (the centre
point lying exactly on the curve). With the `0.` seed the second `if` would never
fire in that case, leaving `Index(2)` at 0 and `theParam(2)` unwritten while
`nbsol` became 2 — the uninitialised read would move to `theParam` rather than
disappear. `-1.` is unreachable for a squared distance, so slot 2 is always
populated whenever the scan runs (`nbext == 0` already throws).

## Suggested upstream test

`Geom2dGcc_Circ2dTanCen` over an ellipse asserting `NbSolutions() == 2`, and over
a parabola asserting `NbSolutions() == 1`. Both fail on at least one mainstream
compiler today, in opposite directions.
