---
title: 'OCJS Test-Suite `@ts-expect-error` Catalog'
description: 'Per-directive audit of every remaining @ts-expect-error in tests/, classifying each as legitimate (type+runtime agree) or .d.ts-generator lag, with concrete generator fixes for the lag cases.'
status: active
created: '2026-05-29'
updated: '2026-05-29'
category: audit
related:
  - docs/policy/ocjs-trailing-default-emission-policy.md
---

# OCJS Test-Suite `@ts-expect-error` Catalog

A point-in-time audit of every active `@ts-expect-error` directive in `tests/`, determining the root reason each is needed and classifying it as **(A) legitimate** (the generated TypeScript type correctly rejects a value that also fails at runtime) or **(B) `.d.ts` lag** (the generated type diverges from the runtime contract the embind binding actually enforces).

## Executive Summary

> **Status update (2026-05-29): R1 + R2 IMPLEMENTED.** The 3 category-B1 directives have been removed and the suite now carries **13 active `@ts-expect-error` directives, all category A**. (12 from this audit, plus one new rule-5 strict-null directive added concurrently by a sibling — `smoke-optional-value-defaults.test.ts:155`, `null is not a valid TCollection_AsciiString`, which activated the class-value-default test; type and runtime agree → category A.) See [Implementation Status](#implementation-status-2026-05-29) below. The numbers in this section reflect the **as-audited** snapshot (pre-fix); the inventory table preserves the original B-classifications for traceability.

As audited, the suite carried **15 active** `@ts-expect-error` directives (plus 1 commented-out, non-active occurrence). The split was **12 legitimate (A)**, **3 `.d.ts` lag (B1, too-narrow)**, and **0 too-loose (B2)** among active directives.

- **Headline finding**: the only `.d.ts`-generator divergences are two distinct *too-narrow* emitter bugs, both surfacing as the same observable symptom — the generated type forbids a call the runtime accepts.
  1. The genuine `std::optional<T>` resolver renders `T | undefined`, omitting `| null`, even though embind's `register_optional<T>::fromWireType` collapses **both** `null` and `undefined` to `std::nullopt` (1 directive).
  2. The TypeScript method emitter's `ts_default_eligible` gate suppresses the trailing-default `?:` marker whenever the method has a C-string argument, so `IFSelect_Act.SetGroup(group, file = "")` emits `file: string` (required) while the Phase-4 val-default binding accepts the 1-arg call at runtime (2 directives — one runtime smoke pin, one type-level pin).
- **Headline recommendation**: two P1 generator fixes (R1 `resolver/strategies/stl.py`, R2 `codegen/bindings.py::processMethodOrProperty`) eliminate all three category-B directives. Every remaining directive is category A and should be kept — the type and the runtime agree on rejection.
- All 12 category-A directives pin **rule-5 strict-null** rejection (`null` at a defaulted slot throws a structured `BindingError`) or a genuinely-unreachable overload. In every A case the generated `?: T` / `T | undefined` type also rejects `null`, so type and runtime agree.

## Implementation Status (2026-05-29)

Both P1 generator fixes were implemented, the `.d.ts` was regenerated via a single-threaded rebuild, and the 3 now-redundant B1 directives were removed.

| Rec | Status | Generator change (file:line) | Regenerated `.d.ts` evidence |
| --- | --- | --- | --- |
| **R1** | ✅ **IMPLEMENTED** | `src/ocjs_bindgen/resolver/strategies/stl.py:71-81` — the `container == "optional"` branch now returns `f"{inner} \| null \| undefined"` (with a rationale comment). | `dist/opencascade_full.d.ts:176857` — `theAvoidKind: BRepGraph_NodeId_Kind \| null \| undefined` (was `\| undefined`). |
| **R2** | ✅ **IMPLEMENTED** | `src/ocjs_bindgen/codegen/bindings.py::processMethodOrProperty` (~line 3940-3954) — dropped `and not hasCStringArgs` from the `ts_default_eligible` predicate (and removed the now-unused `hasCStringArgs` local). `returnIsCString` is retained (it gates string-RETURNING methods, not trailing cstring params). | `dist/opencascade_full.d.ts:216573` — `static SetGroup(group: string, file?: string): void` (was `file: string`). |
| **R3** | ⏸️ **ASSESS-ONLY → DEFERRED** | Not implemented. Branding/nominal distinctness for `TopoDS_*` wrappers is a broad, speculative TS class-emission change (affects every handle-wrapper type and risks wide `.d.ts` churn / false-positive narrowing). It is not a clean, well-scoped generator edit, and no active directive depends on it. Left as a documented recommendation (carry-over of the quality pass's R2). | n/a |

**Directives removed (3 → all B1):**

| Removed directive | File | Replacement |
| --- | --- | --- |
| #1 row-22 permissive null | `tests/smoke/smoke-genuine-optional-param.test.ts` (shape (d)) | Direct `new BRepGraph_ParentExplorer(graph, node, null, false)` — `null` now typechecks; `.not.toThrow()` retained. |
| #12 TR-CW 1-arg | `tests/smoke/smoke-cstring-trailing-defaults.test.ts` | Direct `IFSelect_Act.SetGroup('…')` 1-arg call — now typechecks; `.not.toThrow()` retained. |
| #15 type-level TR-CW | `tests/val-default-ts-surface.test-d.ts` | `expectTypeOf<SetGroup>().toBeCallableWith('group-only-arg')` now asserts callability **without** a suppression. |

**Verification (against rebuilt artifacts):**

- `pnpm typecheck`: **no unused-`@ts-expect-error` errors** and **no errors in any touched file**. The only remaining errors are the **6 pre-existing F4 bindgen errors** in `tests/harray-member-types.test-d.ts` (HArray member-typedef resolution — bindgen-owned, unrelated to these directives, unchanged baseline).
- `pnpm lint` (touched test files): clean.
- `pnpm exec vitest run tests/smoke/ tests/regression/`: **456 passed | 7 skipped | 0 failed** (Type Errors: none). The three target tests all pass, including the full-arity enum shape (c) `(graph, node, Kind.Solid, false)` — no `unbound types` failure surfaced in this build.

**R1 blast-radius note:** the `std::optional<T>` resolver also renders optional **member fields** on value-object result classes (e.g. `MathOpt_UzawaResult.InverseCTC`), which now read `T | null | undefined`. This is benign: `register_optional<T>::fromWireType` accepts `null` on field **writes** (same wire converter as params), so the widening never lets TS accept a value embind rejects. The only effect is a mild read-side over-width (the getter yields `undefined` for nullopt, never `null`) — not an inversion. Scoping the widening to parameter position only (leaving field/return reads as `| undefined`) would be a larger resolver-context change; not pursued (no optional return types ship today, and the field write-contract is correctly mirrored).

**Build coordination note:** the rebuild's `link` step initially failed `verifyBindings` because a sibling's in-flight `bindgen-filters.yaml` edit excluded 4 unbindable `math_VectorBase<double>`-dependent classes (`BRepApprox_TheComputeLine{,Bezier}OfApprox`, `GeomInt_TheComputeLine{,Bezier}OfWLApprox`) but left them in `build-configs/full.yml`'s request list. Reconciled by removing the 4 stale `- symbol:` entries from `full.yml` (completing the documented exclusion); the rebuild then succeeded. This is orthogonal to R1/R2.

> **Separately-owned issue (not addressed here):** `register_optional<T>` is not emitted for enum/class inner types, so some full-arity `std::optional<enum>` ctors are runtime-broken with `unbound types`. R1's widening is still correct for the reachable null/undefined call shapes. That emission gap is owned elsewhere and is out of scope for this catalog.

## Scope and Non-Goals

**In scope**: every `@ts-expect-error` in `tests/`, the generated `dist/opencascade_full.d.ts` surface, the C++ source signatures in `deps/OCCT/src/**`, the runtime embind emission (`src/ocjs_bindgen/codegen/val_default.py`, `embind/constructor.py`, `resolver/strategies/stl.py`, `codegen/bindings.py`), and the trailing-default emission policy.

**Out of scope** (read-only audit): editing any test file or bindgen source. The deliverable is this catalog. WASM rebuilds, the bindgen `.d.ts` quality gap unrelated to these directives (HArray member-typedef resolution), and the `dist` artifacts themselves are not modified.

**In-flux at catalog time**: two sibling subagents were editing test files concurrently. `tests/smoke/smoke-mixed-fanout-optional.test.ts` and `tests/smoke/smoke-optional-value-defaults.test.ts` may have gained new directives after this snapshot, and `tests/smoke/smoke-genuine-optional-param.test.ts` was also subject to edits. Each row below was read fresh; rows drawn from those files are flagged **(in-flux)**.

## Methodology

1. Enumerated with `rg -n "@ts-expect-error" tests/`. Filtered out comment-only mentions ("formerly needed a `@ts-expect-error`", "no `@ts-expect-error` needed") and one commented-out directive inside a skipped placeholder body.
2. For each active directive: read the suppressed expression and the type-invalid argument; located the real OCCT signature in `deps/OCCT/src/**`; located the emitted signature in `dist/opencascade_full.d.ts`; determined runtime behavior from the emitted embind lambda (`val_default.py` / `embind/constructor.py`) cross-referenced with the policy matrix and the rule-5 error prose.
3. Verified the rule-5 prose `null is not a valid value for this slot` is present in `dist/opencascade_full.wasm` (`rg -c` → 1 match), confirming the strict-null lambdas shipped in the Phase-4 build.
4. Empirically ran `tests/smoke/smoke-cstring-trailing-defaults.test.ts` (not in-flux): both cases **pass** and vitest reports **no type errors**, confirming the runtime accepts the 1-arg `SetGroup` call *and* the directive is genuinely used (the type rejects it) — a clean B1.
5. Classified each directive A / B1 / B2 and traced B cases to the exact emitter line + heuristic to change.

## Inventory Table

Columns: **Loc** (file:line + intent) · **Suppressed call** (invalid arg) · **C++ signature** · **Generated `.d.ts`** · **Runtime** · **Class** · **Recommendation**.

| # | Loc | Suppressed call | C++ signature (`.hxx`) | Generated `.d.ts` | Runtime | Class | Rec |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | `smoke-genuine-optional-param.ts:100` — row-22 permissive null *(in-flux)* | `new BRepGraph_ParentExplorer(graph, node, null, false)` | `const std::optional<BRepGraph_NodeId::Kind>& theAvoidKind` (`BRepGraph_ParentExplorer.hxx:115`) | `theAvoidKind: BRepGraph_NodeId_Kind \| undefined` (`d.ts:177209`) — no `\| null` | `register_optional<T>::fromWireType` collapses `null → nullopt`; **accepts** | **B1** | R1 |
| 2 | `smoke-genuine-optional-param.ts:119` — unreachable 3-arg shape *(in-flux)* | `new BRepGraph_ParentExplorer(graph, node, false)` | 3-arg ctors take `Config` / `TraversalMode` / `NodeId_Kind`; optional ctor requires `theEmitAvoidKind` | 3-arg overloads at `d.ts:177189/177195/177201` — none accept `boolean` | No binding for `(graph,node,bool)`; **throws** `BindingError` | **A** | keep |
| 3 | `smoke-optional-value-defaults.ts:75` — rule-5 all-null *(in-flux)* | `new BRepMesh_IncrementalMesh(shape, 0.1, null, null, null)` | trailing `isRel=false, angDef, isInParallel=false` (`BRepMesh_IncrementalMesh.hxx`) | `isRelative?: boolean, theAngDeflection?: number, isInParallel?: boolean` (`d.ts:123771`) | rule-5 strict-null lambda; **throws** | **A** | keep |
| 4 | `smoke-optional-value-defaults.ts:85` — rule-5 mixed null *(in-flux)* | `new BRepMesh_IncrementalMesh(shape, 0.1, true, undefined, null)` | as #3 | as #3 | rule-5; **throws** | **A** | keep |
| 5 | `smoke-rule-5-strict-null-rejection.ts:68` — row 1 | `new BRepMesh_IncrementalMesh(shape, 0.1, null, undefined, undefined)` | as #3 | as #3 | rule-5; **throws** | **A** | keep |
| 6 | `smoke-rule-5-strict-null-rejection.ts:83` — row 2 | `fuse.Build.call(fuse, null)` | `Build(const Message_ProgressRange& = …)` | `Build(theRange?: Message_ProgressRange)` | rule-5; **throws** | **A** | keep |
| 7 | `smoke-rule-5-strict-null-rejection.ts:93` — row 24 | `new BRepMesh_IncrementalMesh(shape, 0.1, null, null, null)` | as #3 | as #3 | rule-5; **throws** | **A** | keep |
| 8 | `smoke-rule-5-strict-null-rejection.ts:103` — row 33 cstring null | `IFSelect_Act.SetGroup('…', null)` | `SetGroup(group, file = "")` (`IFSelect_Act.hxx:68`) | `SetGroup(group: string, file: string)` (`d.ts:216925`) | rule-5 cstring lambda; **throws** | **A** | keep |
| 9 | `smoke-rule-5-strict-null-rejection.ts:116` — row 34 | `filling.Add(edge, GeomAbs_C0, null)` | `Add(Constr: TopoDS_Edge, Order, IsBound: bool)` | `Add(Constr, Order, IsBound: boolean)` (`d.ts:126590`) — `IsBound` required | rule-5; **throws** | **A** | keep |
| 10 | `smoke-rule-5-strict-null-rejection.ts:128` — row 36 | `new BRepMesh_IncrementalMesh(shape, 0.1, undefined, null)` | as #3 (`angDef`) | as #3 | rule-5; **throws** | **A** | keep |
| 11 | `smoke-row-30-permissive-null.ts:119` — carve-out NOT applied | `fuse.Build.call(fuse, null)` | `Build(const Message_ProgressRange& = …)` | `Build(theRange?: Message_ProgressRange)` | value-typed slot stays rule-5; **throws** | **A** | keep |
| 12 | `smoke-cstring-trailing-defaults.ts:47` — TR-CW 1-arg | `IFSelect_Act.SetGroup('…')` (omits `file`) | `SetGroup(group, file = "")` (`IFSelect_Act.hxx:68`) | `SetGroup(group: string, file: string)` (`d.ts:216925`) — `file` required | Phase-4 val-default cstring lambda; **accepts** (`file → ""`) — empirically `.not.toThrow()` passes | **B1** | R2 |
| 13 | `smoke-optional-handle-defaults.ts:80` — handle null | `fuse.Build.call(fuse, null)` | `Build(const Message_ProgressRange& = …)` | `Build(theRange?: Message_ProgressRange)` | rule-5; **throws** | **A** | keep |
| 14 | `smoke-optional-handle-defaults.ts:129` — chamfer handle null | `chamfer.Build.call(chamfer, null)` | inherited `Build(const Message_ProgressRange& = …)` | `Build(theRange?: Message_ProgressRange)` | rule-5; **throws** | **A** | keep |
| 15 | `val-default-ts-surface.test-d.ts:106` — type-level TR-CW | `expectTypeOf<SetGroup>().toBeCallableWith('group-only-arg')` | `SetGroup(group, file = "")` (`IFSelect_Act.hxx:68`) | `SetGroup(group: string, file: string)` (`d.ts:216925`) — not callable with 1 arg | n/a (type-level pin of the same gap as #12) | **B1** | R2 |

Non-active occurrences (excluded from the count):
- `smoke-optional-value-defaults.ts:117` — commented-out directive inside the `CLASS_VALUE_DEFAULT_AVAILABLE` skipped placeholder body; activates only when a real class-value default site ships.
- `smoke-thrusections-build-arg.ts:66`, `smoke-non-planar-face.ts:90`, `smoke-multioverload-trailing-defaults.ts:64`, `smoke-cstring-trailing-defaults.ts:43` — prose mentions, not directives.

## Findings

### Category A — Legitimate (type and runtime agree on rejection) — 12 directives

#### Finding A1 — rule-5 strict-null is correctly mirrored by `?: T`

Directives #3–#8, #10, #11, #13, #14 all pin the same contract: passing explicit `null` to a defaulted slot throws a `BindingError` carrying `[rule 5 / strict null] null is not a valid value for this slot — pass undefined to use the default`. The emitter renders these slots as `name?: T`, which in TypeScript is `T | undefined` — **not** `T | null | undefined`. Therefore `null` is a genuine type error, and the runtime also rejects it. Type and runtime agree; the directive correctly documents an invalid call.

Evidence (runtime): the rule-5 lambda emitted by `val_default.py::_val_unwrap_expr` (strict branch, lines 117–125) calls `emscripten::val::global("Error").new_(...).throw_()` when `arg.isNull()`. The prose string is present in `dist/opencascade_full.wasm` (verified). Verified the strict-null lambdas shipped: this is a Phase-4 single-threaded build.

Evidence (type): the trailing scalar/handle slots are emitted as `?: T` (e.g. `BRepMesh_IncrementalMesh` ctor `d.ts:123771`; `Build(theRange?: Message_ProgressRange)`). `null` is not assignable to `T | undefined` under `strictNullChecks`.

The row-34 case (#9) is the same shape with a *required* trailing slot: `Add(Constr, Order, IsBound: boolean)` — `IsBound` carries no default, so it is `boolean` (not optional). `null` is rejected at the type level and throws at runtime. (See Finding F2-reconciliation below for the distinct, already-resolved 2-arg structural-overload concern that does **not** apply to this 3-arg call.)

#### Finding A2 — genuinely unreachable overload (#2)

`new BRepGraph_ParentExplorer(graph, node, false)` has no binding. `theAvoidKind` is a *middle* parameter followed by the required `theEmitAvoidKind` bool, and trailing arity-pad can only fill the last defaulted slot, never skip a middle parameter. The three 3-arg overloads accept `Config` / `TraversalMode` / `NodeId_Kind` — a `boolean` matches none. The generated `.d.ts` exposes exactly those three 3-arg ctors (none `boolean`), so the type rejects the call; the runtime throws `BindingError`. Type and runtime agree.

#### Finding A3 — row-30 carve-out correctly scoped OUT of value-typed reporter slots (#11)

`BRepAlgoAPI_Fuse::Build(const Message_ProgressRange& = …)` passes the reporter by const-ref **value** (matrix row 2), not as a nullable `Handle<T>` sentinel, so it routes through rule-5 strict-null, **not** the row-30 permissive carve-out. The test proves the carve-out's *non-application* via the `undefined → default (succeeds)` vs `null → throws` divergence. The `.d.ts` (`theRange?: Message_ProgressRange`) rejects `null`; the runtime throws. Agree → A.

### Category B1 — `.d.ts` too-narrow (runtime accepts, type forbids) — 3 directives

#### Finding B1.1 — genuine `std::optional<T>` resolves to `T | undefined`, omitting `| null` (#1)

`BRepGraph_ParentExplorer`'s optional ctor takes `const std::optional<BRepGraph_NodeId::Kind>& theAvoidKind` (`BRepGraph_ParentExplorer.hxx:115`). This is a genuine source-level optional (policy matrix row 22, tagged `MAYBE_T`), bound natively via embind's `register_optional<BRepGraph_NodeId::Kind>`.

- **Runtime**: embind's `register_optional<T>::fromWireType` treats **both** `undefined` and `null` as `std::nullopt`. So `new BRepGraph_ParentExplorer(graph, node, null, false)` is accepted and collapses to "no avoid-kind". (Grounded in the codegen + the quality-pass result that only the unrelated `Config` arity-pad shape failed; shape (d) `null` passes.)
- **Generated `.d.ts`** (`d.ts:177209`): `theAvoidKind: BRepGraph_NodeId_Kind | undefined`. No `| null`.
- **Smoking gun**: `resolver/strategies/stl.py:71-74` renders every `std::optional<T>` as `f"{inner} | undefined"`:

```python
if container == "optional":
    if numArgs >= 1:
        inner = self.resolve_type(t.get_template_argument_type(0), templateDecl, templateArgs)
        return f"{inner} | undefined"
```

The type forbids `null`; the runtime accepts it. The directive masks a type that should be **widened**. → **B1**, fix R1.

#### Finding B1.2 — TS method emitter suppresses the trailing-default `?:` marker for C-string args (#12, #15)

`IFSelect_Act::SetGroup(const char* const group, const char* const file = "")` (`IFSelect_Act.hxx:68`) has one trailing C++ default.

- **Runtime**: the Phase-4 val-default cstring branch (`val_default.py:91-92`, `_val_unwrap_expr` cstring path) emits a binding that accepts the 1-arg call (`file → ""`). **Empirically confirmed**: `tests/smoke/smoke-cstring-trailing-defaults.test.ts` passes (`.not.toThrow()`), and vitest reports no type errors (the directive is genuinely *used* — the type rejects it).
- **Generated `.d.ts`** (`d.ts:216925`): `static SetGroup(group: string, file: string): void` — `file` is **required**, no `?`.
- **Smoking gun**: `codegen/bindings.py::processMethodOrProperty`, the `ts_default_eligible` gate (lines 3941-3947) zeroes `nDefaults` whenever the method has a C-string argument:

```python
ts_default_eligible = (
  numOverloads == 1
  and not hasOutputParams
  and not hasCStringArgs      # ← suppresses the ?: marker for SetGroup
  and not returnIsCString
  and not self._returnTypeRequiresValueWrapper(method)
)
nDefaults = self._countTrailingDefaults(method) if ts_default_eligible else 0
```

The TS gate still mirrors the **pre-Phase-4** embind gate, but the embind side now emits the trailing-default binding via `emit_method_with_val_default` (which handles cstring slots). The TS emitter lags. Both #12 (runtime smoke pin) and #15 (type-level `expectTypeOf(...).toBeCallableWith('group-only-arg')` pin) are the same root cause. → **B1**, fix R2.

### Category B2 — `.d.ts` too-loose (type accepts, runtime rejects) — 0 active directives

No active directive is category B2. The one historically-B2-flavored case — the quality pass's **Finding F2** (`BRepOffsetAPI_MakeFilling.Add(edge, GeomAbs_C0)` type-accepted via a structural `TopoDS_Edge → TopoDS_Face` overload) — was a *non-triggering* (unused) directive that the quality pass already **removed**, retaining the runtime `.not.toThrow()` pin as the real regression signal. The underlying type-looseness (OCJS handle wrappers are near-empty classes, so `TopoDS_Edge` is structurally assignable to `TopoDS_Face`) persists as a latent class of silent wrong-overload misuse, but it no longer manifests as a directive. See R3.

Note that directive #9 (`Add(edge, GeomAbs_C0, null)`) is **not** the F2 case: it is the 3-arg overload with a required `IsBound: boolean`, where `null` is a clean type error and a runtime throw (category A).

## Recommendations

| # | Action | Emitter file + rule/heuristic | Priority | Effort | Impact | Status |
| --- | --- | --- | --- | --- | --- | --- |
| R1 | Widen the `std::optional<T>` TS rendering from `T \| undefined` to `T \| null \| undefined` so it mirrors `register_optional<T>::fromWireType` (which collapses both `null` and `undefined` to `nullopt`). Eliminates directive #1. | `src/ocjs_bindgen/resolver/strategies/stl.py:71-81` — the `container == "optional"` branch now returns `f"{inner} \| null \| undefined"`. | P1 | Low | Med | ✅ **DONE** |
| R2 | Emit the trailing-default `?:` marker for C-string trailing defaults so the TS surface matches the Phase-4 val-default cstring binding. Eliminates directives #12 and #15. | `src/ocjs_bindgen/codegen/bindings.py::processMethodOrProperty` (~line 3940-3954): dropped `and not hasCStringArgs` from the `ts_default_eligible` predicate (kept `returnIsCString`, which gates string-returning methods, not trailing cstring *params*). The `nDefaults` splice handles `?` insertion once eligible. | P1 | Low | Med | ✅ **DONE** |
| R3 | Reconcile latent F2 looseness: introduce nominal/branded distinctness for `TopoDS_*` (and similar near-empty handle wrappers) so a wrong-overload argument (`Edge` where `Face` is declared) is type-caught instead of structurally accepted. No active directive depends on this. | TS class-emission layer (branding strategy for handle wrappers); carry-over of the quality pass's R2. | P2 | High | Med | ⏸️ **DEFERRED** (assess-only: broad, speculative, not a clean scoped edit) |

R1 + R2 landed and the bindgen regenerated, so directives #1, #12, and #15 became **unused** and were removed from the tests (replaced by direct calls / unsuppressed type assertions). The 12 category-A directives remain — they document genuinely invalid calls.

## The B1 vs B2 asymmetry (widen vs narrow)

The two divergence directions are not symmetric and call for opposite fixes:

- **B1 (too-narrow)** → **widen** the generated type. The runtime *accepts* a value the `.d.ts` forbids, so the `@ts-expect-error` masks a type that is stricter than the binding. Both B-cases here are B1: an omitted `| null` (R1) and an omitted `?:` (R2).
- **B2 (too-loose)** → **narrow** the generated type. The runtime *rejects* a value the `.d.ts` accepts, so a `@ts-expect-error` placed there would be *unused* (non-triggering). The cure is branding/narrowing, not a suppression (R3).

**Guiding principle**: the generated `.d.ts` should mirror the runtime contract the embind binding enforces. When it does, `@ts-expect-error` is only ever needed for genuinely-invalid calls — category A, where the type and the runtime agree on rejection (rule-5 strict-null, unreachable overloads). Any `@ts-expect-error` that is required because the *type* is wrong (too-narrow B1) or that is *unused* because the type is too-loose (B2) is a generator bug, not a test concern.

## References

- Policy: `docs/policy/ocjs-trailing-default-emission-policy.md` (38-row matrix; rule 5 strict-null; row 22 genuine optional; row 30 carve-out; row 33 cstring trailing default).
- Emitters cited: `src/ocjs_bindgen/resolver/strategies/stl.py` (optional rendering), `src/ocjs_bindgen/codegen/bindings.py` (`processMethodOrProperty` TS gate), `src/ocjs_bindgen/codegen/val_default.py` (`_val_unwrap_expr` rule-5 + cstring lambdas), `src/ocjs_bindgen/codegen/typescript/constructor.py` (ctor `?:` emission via `_countTrailingDefaults`).
- Generated surface: `dist/opencascade_full.d.ts` (lines 123771, 126590, 177209, 216925); runtime prose verified in `dist/opencascade_full.wasm`.
- Workspace-level cross-reference: [`ocjs-smoke-test-quality-pass.md`](../../../../docs/research/ocjs-smoke-test-quality-pass.md) — its findings F1–F4 (unused/loose directives) and recommendations R1–R4 reconcile with this catalog: F2 (structural `Edge → Face`) ⇒ this doc's R3; F4 (HArray member-typedef) is unrelated to any `@ts-expect-error` and out of scope here.

## Appendix — `docs:validate` coverage note

The workspace frontmatter validator (`scripts/src/validate-frontmatter.ts`, invoked by `pnpm docs:validate` / `nx run scripts:validate-frontmatter`) resolves its root to the **workspace** and only scans `<workspace>/docs/policy` and `<workspace>/docs/research`. It does **not** traverse `repos/opencascade.js/docs/`, so this OCJS-internal doc is not covered by `pnpm docs:validate`. The frontmatter above nonetheless follows the workspace `create-research` convention (single-quoted dates, `category: audit`, `title` matching the H1) so it remains compatible if the OCJS-internal docs are ever added to a validator scope.
