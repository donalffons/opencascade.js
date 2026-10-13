# Sentinel Headers

This catalogue lists the **10 representative OCCT headers** used as the regression
spine of the OCJS Bindgen Modular Refactor. Every per-fragment Python refactor in
[`ocjs-bindgen-modular-refactor-blueprint.md`][blueprint] regenerates these
headers and byte-diffs the resulting `.cpp` and `.d.ts.json` against the frozen
baseline at `tests/sentinel/baseline/`.


## Selection criteria

Each entry below was chosen so that, taken together, the ten headers exercise
**every AST shape and codegen subsystem** the bindgen ships today:

| # | Pattern                       | Why we need it on the spine                                                                                              |
| - | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| 1 | Simple value class            | POD-like type, public ctors, no inheritance, mostly RBV-ineligible primitives — exercises the constructor/method paths.  |
| 2 | Templated NCollection         | Synthetic `myMain.h` fragment from the auto-discovery pipeline; covers `replaceTemplateArgs` and the discovery filters.  |
| 3 | Namespace-scoped class        | Top-level `namespace Foo { class Foo_Bar … };` covers the namespace walker and the qualified-name encoder.               |
| 4 | Nested classes                | The R1 audit target. Emits inner `Outer::Inner::Leaf` types that today are only one-level visible.                       |
| 5 | Enum                          | Standalone enum header, no class scaffold; exercises the enum binder branch.                                             |
| 6 | Abstract class                | Pure-virtual handle-managed class with no ctor; exercises the abstract-class predicate and the inheritance encoder.      |
| 7 | Traits-aliased templated class| `using Foo_Bar = Foo_Tmpl<…>;` — drives the alias dedup (the `BindingError: registered twice` hardening) plus typedefs.  |
| 8 | std-using class               | Extends `std::exception`; covers `std::*` resolution + JSDoc inheritance walking.                                        |
| 9 | Function-pointer typedef      | Member field typed as a `typedef R (*F)(args)`; exercises the unrecognized-callable fallback (today emits `unknown`).    |
| 10| RBV-eligible class            | Multi-output method that synthesises a result envelope; covers the entire RBV codegen branch.                            |

## The Spine

| # | Header path                                                                          | Pattern                       | Fragment(s) emitted                                       |
| - | ------------------------------------------------------------------------------------ | ----------------------------- | --------------------------------------------------------- |
| 1 | `FoundationClasses/TKMath/gp/gp_Pnt.hxx`                                             | Simple value class            | `gp_Pnt.{cpp,d.ts.json}`                                  |
| 2 | `myMain.h/NCollection_Array1_gp_XY` *(synthetic)*                                    | Templated NCollection         | `NCollection_Array1_gp_XY.{cpp,d.ts.json}`                |
| 3 | `ModelingData/TKBRep/BRepGraphInc/BRepGraphInc_Definition.hxx`                       | Namespace-scoped class        | `BRepGraphInc_BaseDef.{cpp,d.ts.json}`                    |
| 4 | `ModelingData/TKBRep/BRepGraph/BRepGraph_TopoView.hxx`                               | Nested classes                | `TopoView.{cpp,d.ts.json}`                                |
| 5 | `ModelingData/TKG3d/TopAbs/TopAbs_Orientation.hxx`                                   | Enum                          | `TopAbs_Orientation.{cpp,d.ts.json}`                      |
| 6 | `ModelingData/TKG3d/Geom/Geom_Curve.hxx`                                             | Abstract class                | `Geom_Curve.{cpp,d.ts.json}`                              |
| 7 | `ModelingData/TKBRep/BRepGraph/BRepGraph_ReverseIterator.hxx`                        | Traits-aliased templated class| `BRepGraph_FacesOfEdge.{cpp,d.ts.json}` *(plus siblings)* |
| 8 | `FoundationClasses/TKernel/Standard/Standard_Failure.hxx`                            | std-using class               | `Standard_Failure.{cpp,d.ts.json}`                        |
| 9 | `DataExchange/TKXSBase/IFSelect/IFSelect_Act.hxx`                                    | Function-pointer typedef      | `IFSelect_Act.{cpp,d.ts.json}`                            |
| 10| `ModelingData/TKBRep/BRepGraph/BRepGraph_CacheRegistry.hxx`                          | RBV-eligible class            | `BRepGraph_CacheRegistry.{cpp,d.ts.json}`                 |

> Header #2 is **not** a real OCCT source; it is a synthetic fragment produced by
> `ocjs_bindgen/discover.py` and emitted into `build/bindings/myMain.h/`. It is
> on the spine because every templated NCollection instantiation flows through
> the same myMain.h pipeline, so byte-stability of one canonical instantiation
> validates the entire NCollection auto-discovery surface.

## Coverage cross-check

Every ocjs_bindgen subsystem touched by the refactor is exercised by at least
one sentinel header:

| Subsystem                                            | Sentinel(s) that exercise it |
| ---------------------------------------------------- | ---------------------------- |
| `NameEncoder` (qualified name walker)                | 3, 4, 7                      |
| `TemplateArgMap` (`replaceTemplateArgs`)             | 2, 7                         |
| `TypeScriptResolver` strategies                      | all                          |
| `ResolverProtocol` handle strategy                   | 6, 7, 9, 10                  |
| `ResolverProtocol` STL strategy                      | 8                            |
| `ResolverProtocol` nested strategy                   | 4                            |
| `ResolverProtocol` template strategy                 | 2, 7                         |
| `ResolverProtocol` fallback strategy (`unknown`)     | 9                            |
| `Diagnostics` (`any-type-report.json`)               | 4, 9                         |
| `AstWalker` namespace traversal                      | 3                            |
| `AstWalker` class-body traversal *(R1 deferral)*     | 4                            |
| Embind `class_` codegen                              | 1, 3, 4, 6, 7, 8, 9, 10      |
| Embind `enum_` codegen                               | 5                            |
| Embind alias dedup (`_EMBIND_OCTYPE_ALIAS_…`)        | 7                            |
| TypeScript class binder                              | all *(except 5)*             |
| TypeScript enum binder                               | 5                            |
| TypeScript inheritance encoder                       | 6, 8                         |
| TypeScript JSDoc renderer                            | 1, 6, 8, 9, 10               |
| Dispatch tree codegen                                | 6, 10                        |
| RBV envelope codegen                                 | 10                           |
| LinkRewriter `UndeclaredToUnknownRewriter`           | 4, 9                         |
| LinkRewriter `HeritageRelinkRewriter`                | 6, 7, 8                      |

## How the spine is consumed

* **Layer 1 — `tests/sentinel/test_artifact_parity.py`** *(<30 s)*
  Regenerates the ten fragments via the in-process bindgen mini-driver and
  byte-diffs the freshly-emitted `.cpp` + `.d.ts.json` against
  `tests/sentinel/baseline/`. Runs on every PR.
* **Layer 2 — `tests/sentinel/test_tree_parity.py`** *(~10 min)*
  Runs `nx run ocjs:generate` and SHA-256s the *entire* `build/bindings/` tree
  against `baseline/full_tree.sha256`. Catches regressions that escape the
  ten-header sample.
* **Candidate portability — native multi-architecture CI**
  Each native amd64/arm64 candidate performs one ST or MT consumer link,
  validates all six outputs, and executes the same runtime smoke. The source
  parity layers above remain exact; native host toolchains are not required to
  produce identical final bytes. The tested amd64 outputs own npm packaging,
  while both native image digests are required for GHCR promotion.

## Maintenance

After an audited OCCT upgrade or intentional binding-contract change,
regenerate the affected baseline layers in a dedicated commit:

```bash
pnpm nx run ocjs:generate
python tests/sentinel/refresh_baseline.py
```

Do **not** refresh the baseline merely because a refactor changed output — the
whole point of the spine is to catch unintended drift. Diagnose and review the
source delta first. If the output change is intentional, record that contract
change and the reviewed artifact delta alongside the refresh.
