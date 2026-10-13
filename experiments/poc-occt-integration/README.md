# poc-occt-integration — Option C′ validation on real OCCT (Gates 1–3 + R1–R6 + Tier-3 T1–T5 + Tier-4 U1/U3/U4/U8 complete)

**Status**: complete · **Outcome**: Option C′ end-to-end validated on real OCCT. Dispatcher work is empirically settled — Gates 1–3 plus 15 front-loaded risk validations (R1–R6 + T1–T5 + U1/U3/U4/U8) all green. The deployment-ready v2 libembind patch (`libembind-overloading.v2.patch`, +54 lines / +1 hunk vs current production) applies cleanly to pristine upstream emscripten and round-trips byte-identically to the in-tree snapshot. · **Wall time**: ~7 s per binding rebuild; full all-validation sweep ~9 s.

## Headline (after Gates 1–3 + R1–R6)

| Verdict dimension | Result |
| --- | --- |
| Translation rule (C++ `T x = D` → `std::optional<T> x` + `.value_or(D)`) | **Confirmed mechanical** on real OCCT — produces correct meshes byte-identical to production fan-out |
| Bundle cost on real-OCCT-shaped binding (single ctor migration) | **+6,161 B / +0.17%** combined |
| Runtime cost on real OCCT meshing workload | **+0.08 % median wall-clock**, indistinguishable from meshing noise |
| Multi-overload **ctor** sets (`{0, 5}`, `{0, 3}`) under `std::optional` | **Works** under the arity-pad dispatcher patch |
| Production-density multi-arity ctor set (`{0, 1, 2, 2*, 3, 4}` with C1 same-arity sibling) | **Works** — C1 type-dispatch composes cleanly with arity-pad |
| `std::optional<T>` participating in a same-arity overload group | **Works** with the `getSignature` optional-aware extension |
| `smart_ptr<opencascade::handle<T>>` + `std::optional<T>` ctor lambda composition | **Works** — production binding shape compiles and dispatches correctly |
| R1: 3 Gate-1 hunks layered on top of the CURRENT production `libembind-overloading.patch` | **All 25 expectations met** — no regression, no behavioural drift |
| R2: `register_optional<T>()` deduplication across translation units | **Idempotent by C++ template guarantee** (`thread_local bool hasRun` in `<emscripten/bind.h>`) — no bindgen / libembind work needed |
| R3: `std::optional<opencascade::handle<T>>` (handle + optional cross-product) | **4/4 call shapes pass** (omitted, handle, null, undefined) |
| R4: `emscripten::val` vs `std::optional<T>` same-arity ambiguity | **Type-priority-deterministic** (`val` always wins) — silent unreachability for the loser — **bindgen must emit-time-reject** this co-registration |
| R5: Four real OCCT trailing-default shapes | **4/4 translate cleanly** (function-call expr, null handle, default-ctor value, const-ref-to-temp) |
| R6: Output / inout reference param misclassified as `std::optional` | **(A) `std::optional<T&>` loud-fails at compile-time** (static_assert in `<optional>`); **(B) `std::optional<T>` for `T&` param silently drops mutation** — bindgen must reject any non-const `T&` parameter for `std::optional` wrapping |
| T1: All-optional same-arity wildcard collision | **Last-of-same-arity-registered wins, deterministically** — bindgen must either reject this shape or sort emission order |
| T2: `.class_function` static-method dispatcher with `std::optional` | **3/3 pass** — static methods share `$ensureOverloadTable` with instance methods; arity-pad fires identically |
| T3: `std::optional<T>` as RETURN type (`EmValOptionalType.fromWireType`) | **2/2 pass** — `std::optional<T>(v)` → JS `v`; `std::nullopt` → JS `undefined` |
| T4: `register_optional<T>` for non-default-constructible `T` | **Compiles + runs** — `std::optional<T>` machinery uses copy/move/destructor only; no `T()` invocation; bindgen needs **no** default-ctor precondition check |
| T5: `-sEVAL_CTORS=2` interaction with the new dispatcher | **Behaviourally neutral** — link-time ctor evaluator stops at first `_embind_register_*` import call, so all binding init runs at runtime exactly as in default build; 13/13 parity checks pass |
| U1: Mixed C2 fan-out + `std::optional` within ONE class | **9/9 pass** — both patterns coexist in the same `class_<...>`, dispatcher routes each correctly, byte-identical outputs across all 4 arity shapes for both `method_fanout` and `method_optional`. Incremental migration is safe. |
| U3: Lifetime / destructor balance for `std::optional<class T>` | **Per-call balanced: 1 copy + 1 move ↔ 2 dtors.** 1000x hammer: 2000 dtors === 2000 created (zero leak). Omitted-arg path: ZERO LifecycleTrack activity. Const-ref baseline: ZERO of everything (clean wire). |
| U4: Refcount balance for `std::optional<opencascade::handle<T>>` | **Zero net refcount delta** across 100x exercise + 300x null/undefined/omitted + 100x fresh-handle pass+drop. Original handle's `GetRefCount()` returns to baseline after every call. |
| U8: v2 libembind patch (`pristine + production + arity-pad`) deployment artefact | **Clean apply** to pristine upstream emscripten, **byte-identical roundtrip** to in-tree snapshot, **loud double-apply rejection** (`14 of 14 hunks ignored`). Delta vs current production patch: **+54 lines / +1 hunk**. |
| Total test count | **25 + 4 + 8 + 4 + 2 + 1 + 14 + 13 + 21 (U1+U3+U4) + 4 (U8) = 96 / 96 expectations met** under `prod+pad` |

**Verdict**: the dispatcher side is now empirically settled against the CURRENT production `libembind` patch. Remaining work is `bindgen.py` emitter changes plus full-build measurement.

## What changed since the previous README

The previous README covered Gates 1–3. This pass front-loaded the six risks identified during the post-Gates-3 deep review of outstanding open questions for the optional-overload approach.

The categorisation that motivated the work:

- **Tier 1 (high-impact)**: R1 (patch composition), R2 (TU dedup), R3 (handle×optional cross-product).
- **Tier 2 (high implementation cost if discovered late)**: R4 (val vs optional ambiguity), R5 (real OCCT default shapes), R6 (output param misclassification).

Every risk was discharged either by empirical proof of the desired property (R1, R2, R3, R5, R6-A) or by characterising the failure mode precisely enough that the bindgen emitter can defend against it (R4, R6-B). No risk is left as an open follow-up.

## R1–R6 detailed results

### R1 — Patch composition with the production `libembind` patch

**Question.** The three Gate-1 hunks were originally proven against the stale `libembind.ocjs-patched.js` snapshot vendored in `experiments/poc-overload-dispatch-cost/`. The CURRENT production patch (`src/patches/libembind-overloading.patch`) is slightly different. Do the three hunks compose cleanly on top of the current production base, or does anything flip?

**Approach.** Built `libembind.production.js` from upstream emscripten + the current production patch (2563 lines, `+13/-2` lines vs the stale snapshot). Layered the three Gate-1 hunks on top → `libembind.production+arity-pad.js` (2598 lines). Repointed the build script (`LIBEMBIND_MODE=prod+pad`, new default) and reran the full 25-test suite.

**Result.** `25/25 expectations met`. None of the existing tests flipped; the optional-wildcard branch in `$getSignature` (hunk 3) sits BEFORE the existing emscripten::val / primitive matches in the current production code path and behaves identically to its placement against the stale snapshot. The arity-pad insertion points in `$ensureOverloadTable` and the ctor body are textually identical between the two bases.

**Implication.** No merge conflicts, no behavioural drift. The 3-hunk patch is ready to apply against the current `src/patches/libembind-overloading.patch` baseline as-is.

Artefact: `results.r1.prod+pad.json`.

### R2 — `register_optional<T>` deduplication across translation units

**Question.** Production OCJS compiles per-toolkit binding TUs. Without TU-level emission dedup, the same `T` will be passed to `register_optional<T>()` from multiple TUs. Does the runtime throw `Cannot register type 'std::optional<T>' twice` on the second call?

**Approach.** Authored `bindings-r2-dup-optional.cpp` containing only `register_optional<bool>(); register_optional<double>();` and linked it alongside `bindings-optional.cpp` (which already calls them) into a third module (`mod-r2.mjs`). Instantiated the module and exercised a sphere mesh.

**Result.** `resolved-cleanly` — the module initialises and runs identically to the single-TU build.

**Root cause** (read from emsdk source): `register_optional<T>` in `<emscripten/bind.h>` line 1801 carries a `thread_local static bool hasRun` guard:

```cpp
template<typename T>
void register_optional() {
  thread_local bool hasRun;
  if (hasRun) {
    return;
  }
  hasRun = true;
  internal::_embind_register_optional(...);
}
```

The C++ function template is COMDAT-deduplicated at link time, so both TUs share the SAME `hasRun` static. The second TU's call short-circuits BEFORE `_embind_register_optional` runs. The idempotency is unconditional and lives in upstream emscripten — not OCJS-specific.

**Implication.** Bindgen does NOT need TU-level emission dedup. No fourth `libembind` hunk required. Bindgen can naively emit `register_optional<T>()` once per use site without coordination across TUs.

Artefact: `results.r2.json`.

### R3 — `std::optional<opencascade::handle<T>>`

**Question.** OCCT signatures of the form `const Handle(ProgressIndicator)& = Handle()` are common. Under Option C, bindgen would emit `std::optional<opencascade::handle<Message_ProgressIndicator>>` with `.value_or(opencascade::handle<Message_ProgressIndicator>())`. Does this compile? Does `EmValOptionalType.toWireType` accept a JS Handle object and route it through `genericPointerToWireType`? Does `value_or(Handle())` produce a valid null handle the OCCT call accepts?

**Approach.** Bound `function("optional_handle_probe", optional_override([](const TopoDS_Shape&, std::optional<opencascade::handle<IM_Handled>>) -> int { ... }))` returning a probe int (0 = nullopt / null-handle default; 1 = caller's handle used). Called from JS with four shapes:

| Call shape | Expected | Got |
| --- | --- | --- |
| `(a)` arity-pad → `undefined` → nullopt | 0 | 0 ✓ |
| `(b)` explicit handle object | 1 | 1 ✓ |
| `(c)` explicit `null` | 0 | 0 ✓ |
| `(d)` explicit `undefined` | 0 | 0 ✓ |

**Result.** 4/4 pass. `register_optional<opencascade::handle<T>>()` compiles, `EmValOptionalType.toWireType` accepts the JS Handle object (the smart_ptr machinery is invoked by `genericPointerToWireType` downstream), `null` and `undefined` both collapse to `nullopt`, and `.value_or(opencascade::handle<T>())` constructs a valid null handle that the OCCT call accepts identically to the `= Handle()` default.

**Implication.** Smart-ptr-typed trailing defaults translate by the same mechanical rule as primitive trailing defaults — no special-casing in bindgen. The "rampant in OCCT" handle-default pattern is supported without further dispatcher work.

Artefact: `results.r3.json`.

### R4 — `emscripten::val` vs `std::optional<T>` same-arity ambiguity

**Question.** Production has bindings using `emscripten::val` for runtime polymorphism. If a class registers `f(emscripten::val)` and `f(std::optional<double>)` as same-arity siblings, both register as `emscripten::val`-typed slots (`EmValOptionalType.name === "emscripten::val"`). With the optional-wildcard fix in `$getSignature`, what does the dispatcher do?

**Approach.** Bound two synthetic classes mirroring each other but with opposite registration order:

- `ValOptAmbig`: `(val)` registered first, `(std::optional<double>)` second.
- `ValOptAmbigRev`: `(std::optional<double>)` first, `(val)` second.

Both bound with a `.probe(arity=1)` siblings pair that records `lastDispatched`. Called each with `(42)`, `({})`, `(undefined)`, `()` (arity-pad).

**Result.** **All 8 calls (4 shapes × 2 registration orders) dispatch to the `val` overload.** Determinism is **type-priority based**, not registration-order based: the `field === 'emscripten::val'` check is the very FIRST short-circuit branch in `isKeyMatched` (inside `$getSignature`), evaluated BEFORE the optional-wildcard branch the patch adds. The `std::optional<double>` overload is **permanently unreachable** when registered alongside a `val` sibling.

**Implication.** This is a **silent unreachability hazard** in the C1 dispatcher when val + optional coexist at the same arity. `bindgen.py` MUST emit-time-reject this co-registration shape — either error during emission, or rename the optional overload (e.g. suffix-by-arity to escape C1's same-arity sibling collection). The cost is a static check during bindings.yaml resolution; no libembind change needed.

A simultaneous audit of production OCJS bindings YAMLs is **also** worth doing as part of Gate 4 to confirm whether this shape is already in the wild (and if so which classes), but the hazard is now characterised and defensible.

Artefact: `results.r4.json`.

### R5 — Real OCCT trailing-default shapes (four categories)

**Question.** Gates 1–3 validated primitive defaults (`false`, `0.5`, `TopAbs_SHAPE`). Real OCCT also uses:

1. **Function-call expression** defaults (`= Precision::Confusion()`, `= gp::Origin()`)
2. **Handle expression** defaults (`= Handle_Message_ProgressIndicator()`)
3. **Class-constructed value** defaults (`= TopLoc_Location()`)
4. **Const reference to anonymous temporary** (`const TopLoc_Location& foo = TopLoc_Location()`) — the hardest, because `std::optional<const T&>` is forbidden by the standard.

Does each shape translate by the same `std::optional<T>` + `.value_or(default)` rule?

**Approach.** Four free-function bindings, one per shape:

```cpp
function("r5_funccall_default", ([](double v, std::optional<double> tol) {
  return v + tol.value_or(Precision::Confusion());
}));
function("r5_handle_default", ([](const TopoDS_Shape&, std::optional<opencascade::handle<IM_Handled>> h) {
  return h.value_or(opencascade::handle<IM_Handled>()).IsNull() ? 1 : 0;
}));
function("r5_classvalue_default", ([](const TopoDS_Shape&, std::optional<TopLoc_Location> loc) {
  return loc.value_or(TopLoc_Location()).IsIdentity() ? 1 : 0;
}));
function("r5_constref_default", ([](const TopoDS_Shape&, std::optional<TopLoc_Location> loc) {
  const TopLoc_Location& resolved = loc.value_or(TopLoc_Location());
  return resolved.IsIdentity() ? 1 : 0;
}));
```

**Results.** 4/4 pass. Shape-by-shape:

| Shape | Compiled | Omitted-call returns expected default | Explicit-call returns caller's value |
| --- | --- | --- | --- |
| 1. Function-call expr (`Precision::Confusion()`) | ✓ | ✓ (10.0000001) | ✓ (10.25) |
| 2. Handle expression (null handle) | ✓ | ✓ (1) | ✓ (0, R3 already proved this) |
| 3. Class-constructed value (`TopLoc_Location()`) | ✓ | ✓ (IsIdentity) | n/a (TopLoc not bound to embind) |
| 4. `const T&` bound from anonymous temporary | ✓ | ✓ (IsIdentity) | n/a |

The hardest shape (4) — `const T&` with anonymous temporary — works because `std::optional<T>::value_or` returns by value, and the value binds correctly to a `const T&` parameter at the OCCT call site inside the lambda body. The ABI shift `const T& → std::optional<T>-by-value` is invisible to the JS caller and to the OCCT function being wrapped (lifetime extension by reference-to-temporary applies inside the lambda body just like a normal C++ caller).

**Implication.** The "mechanical translation rule" claim in the strategic doc holds for all four real OCCT trailing-default categories. No new bindgen Python branches are required per default-shape.

Artefact: `results.r5.json`.

### R6 — Output / inout reference parameters MUST NOT be `std::optional`-wrapped

**Question.** OCCT signatures of the form `void Compute(const Input&, Output& out)` use the second arg as an output sink. Misclassifying this as `std::optional<Output>` would silently drop the caller's mutation. What are the failure modes for the two misclassification flavours?

**Approach.** Two empirical probes:

1. **Loud-fail probe (`bindings-r6-illegal-ref.cpp`)**: deliberately authored a binding with `std::optional<gp_Pnt&>` (`std::optional` of a REFERENCE). Compiled in isolation via `./build.sh r6-illegal`; full compile log captured.

2. **Silent-corruption demo**:
   - `r6_correct_output_sink(Shape, gp_Pnt& out)` — control, mutates `out` correctly.
   - `r6_bad_output_via_optional(Shape, std::optional<gp_Pnt> out)` — the misclassification mode; "mutates" `out.value_or(...).SetX/Y/Z(...)`.

   Called both from JS with a `gp_Pnt(1, 2, 3)` and checked the post-call state.

**Results.**

| Mode | Outcome | Evidence |
| --- | --- | --- |
| (A) `std::optional<T&>` | **Loud compile-fail** | `static_assert(!is_reference_v<value_type>, "instantiation of optional with a reference type is ill-formed")` from `<optional>` line 602 — fully captured in `r6-illegal.compile.log` |
| (B) `std::optional<T>` substituted for `T&` output | **Silent runtime data loss** | Control: caller's `gp_Pnt` mutated to `(42,43,44)` ✓. Experiment: caller's `gp_Pnt` unchanged at `(1,2,3)` despite C++ side "writing" `(42,43,44)` — mutation lost in the value copy that crosses the wire |

**Implication.** Bindgen MUST emit-time-classify trailing parameters by **(a) presence of `=` initializer AND (b) const-ness of the reference**:

- `const T& foo = T()` → `std::optional<T>` (safe — proven by R5 shape 4)
- `T& foo` (no `=`, non-const reference) → **keep as raw `T&` binding** (existing TR-OUT pathway)
- `T& foo = T()` with non-const ref AND `=` initializer → still output sink, MUST NOT be `std::optional`-wrapped

Mode (A) loud-fails at compile time (so a bindgen bug that emits it cannot escape to runtime). Mode (B) is silent data corruption — bindgen needs a precondition check that REFUSES to wrap any non-const reference in `std::optional<...>`.

Artefacts: `results.r6.json`, `r6-illegal.compile.log`.

## T1–T5 detailed results (Tier-3 front-loaded into the PoC)

The original deep review flagged five Tier-3 risks as "validate during bindgen development (Gate 4 territory)". All five were cheap enough to discharge here, ahead of Gate 4.

### T1 — Multi-optional same-arity wildcard collision determinism

**Question.** R4 covered the `val + std::optional<T>` ambiguity case (val wins by type priority). When two same-arity siblings have ALL positions `std::optional<T>` for DIFFERENT T's (e.g. `(opt<double>, opt<bool>)` vs `(opt<int>, opt<string>)`), every position wildcard-matches via the Hunk-3 optional-aware check. C1's `keys.some()` returns at the first matching key. Which sibling wins, and is the choice stable across builds?

**Approach.** Two synthetic classes `MultiOptAmbig` and `MultiOptAmbigRev` mirror each other but register the siblings in opposite order. Each binds `.probe(arity=2)` overloads `(opt<double>, opt<bool>)` and `(opt<int>, opt<string>)`. Probed with `(undefined, undefined)`, `()` (arity-pad → 2), `(1)` (arity-pad → 2), `(undefined, true)`.

**Results.**

| Class | Registration order | Winner for all probes |
| --- | --- | --- |
| `MultiOptAmbig` | `[double+bool, int+string]` | **`int+string`** |
| `MultiOptAmbigRev` | `[int+string, double+bool]` | **`double+bool`** |

**Direction: LAST-of-same-arity registered wins** (subsequent same-arity registrations overwrite the prior entry in libembind's `signaturesArray` / `signatures` keyed table). The winner is deterministic and registration-order-driven — not type-priority-driven (no priority signal applies when both siblings' positions are optional).

**Bonus loud-fail observation.** Probe `(undefined, true)` against `MultiOptAmbig` THREW `Cannot pass non-string to std::string` — the dispatcher picked the winning `int+string` sibling, then `toWireType` rejected `true → std::string` at the second position. Against `MultiOptAmbigRev` the same call succeeded (dispatched to `double+bool`, `true` is a valid bool). This proves the wildcard match is consulted BEFORE wire conversion, so type mismatches surface as loud `BindingError` rather than silent corruption — a positive safety property even in the ambiguity case.

**Implication.** Bindgen MUST either:
- (a) emit-time **reject** any same-arity sibling group where multiple siblings have only `std::optional`-typed positions, OR
- (b) impose a **deterministic registration order** (alphabetical by signature, source-line, etc.) so the winner is reproducible across builds and across emission re-runs.

Option (a) is strictly safer (no surprises for bindgen consumers). Option (b) preserves more existing bindings if any exist in OCJS's YAML today. Both are mechanical to implement.

Artefact: `results.t1-t4.json` (`t1` section).

### T2 — `.class_function` static-method dispatcher with `std::optional`

**Question.** The Gate-1 arity-pad hunk targets `$ensureOverloadTable`. Static methods (`.class_function`) go through the same machinery per emscripten internals — but empirically unverified.

**Approach.** `class_<StaticOptProbe>("StaticOptProbe").class_function("probe", &StaticOptProbe::probe)` where `probe` takes `std::optional<double>` and returns `.value_or(99)`. Called as `mod.StaticOptProbe.probe(7)`, `mod.StaticOptProbe.probe()`, `mod.StaticOptProbe.probe(undefined)`.

**Results.** 3/3 pass — values 7, 99 (arity-pad → nullopt → default), 99 (explicit undefined → nullopt → default).

**Implication.** Static methods inherit the arity-pad behaviour automatically. No additional bindgen or dispatcher work required for `class_function` emissions.

Artefact: `results.t1-t4.json` (`t2` section).

### T3 — `std::optional<T>` as RETURN type

**Question.** All R1–R6 bindings use `std::optional<T>` as a PARAMETER (exercising `EmValOptionalType.toWireType`). Production bindgen will need `std::optional<T>` RETURNS for Maybe-shaped APIs. Does `EmValOptionalType.fromWireType` round-trip `std::nullopt` to JS `undefined` and `std::optional<T>(v)` to JS `v`?

**Approach.** `function("t3_maybe_value", optional_override([](bool produce) -> std::optional<double> { return produce ? std::optional<double>(42.0) : std::nullopt; }))`. Called as `mod.t3_maybe_value(true)` and `mod.t3_maybe_value(false)`.

**Results.** 2/2 pass — `t3_maybe_value(true)` → `42`; `t3_maybe_value(false)` → `undefined`.

**Implication.** Maybe-shaped APIs translate to `std::optional<T>` returns with no additional plumbing. The JS surface is exactly `T | undefined`, idiomatic for downstream `.d.ts` generation.

Artefact: `results.t1-t4.json` (`t3` section).

### T4 — `register_optional<T>` for non-default-constructible `T`

**Question.** Some OCCT classes (`BRepPrimAPI_MakeBox`, many others) have no default constructor. Does `register_optional<T>()` require `T` to be default-constructible? If so, bindgen needs a precondition check that gates `std::optional<T>` emission on `is_default_constructible_v<T>`.

**Approach.** Synthetic `struct NonDefault { int x; NonDefault(int x_) : x(x_) {} /* no default ctor */ };` bound with `.constructor<int>()` only. Then `register_optional<NonDefault>()` invoked, plus a round-trip function `function("t4_optional_nondefault", ([](std::optional<NonDefault> nd) -> int { return nd.has_value() ? nd->x : -1; }))`. Linked at `-O3 -fwasm-exceptions -msimd128`.

**Results.**
- **Compile-time**: `register_optional<NonDefault>()` compiled cleanly — no `T()` requirement.
- **Runtime**: 3/3 pass — `(new NonDefault(7))` → 7; `()` arity-pad → nullopt → -1; `(undefined)` → nullopt → -1.

**Root cause** (read from `<optional>` / emscripten `bind.h`): `std::optional<T>` stores either a `T` or no value; the empty state never invokes `T()`. `EmValOptionalType.toWireType` constructs `T` from the JS value via copy/move (which require `T` to be copy/move-constructible, but not default-constructible). `fromWireType` reads the stored `T` if any. The `value_or(default)` call inside bindgen-emitted lambda bodies supplies its own `T` instance as the default — so the surface contract is unchanged for non-default-constructible types.

**Implication.** Bindgen needs **no** default-ctor precondition check for `std::optional<T>` emission. Any `T` with copy or move construction (the universal embind requirement anyway) is admissible.

Artefact: `results.t1-t4.json` (`t4` section).

### T5 — `-sEVAL_CTORS=2` interaction with the new dispatcher

**Question.** `-sEVAL_CTORS=2` (Emscripten link-time C++ static-ctor evaluator) bakes ctor results into the wasm initial memory when possible. If `EMSCRIPTEN_BINDINGS` blocks register themselves via static ctors, EVAL_CTORS could reorder or partially execute the registration calls — potentially changing the `signaturesArray` shape the arity-pad and optional-wildcard logic depends on.

**Approach.** New `build.sh` target `t5-eval-ctors` adds `-sEVAL_CTORS=2` on top of the existing `-O3` flags and rebuilds Corpus B as `mod-optional.t5.{mjs,wasm}`. Then `t5.test.mjs` exercises the SAME logical operations as Gates 1–3 + T1–T4 against that module and asserts identical outcomes.

**Build-time observation** (Emscripten linker log):
```
building:INFO: ctor_evaller: trying to eval global ctors
  ...partial evalling successful, but stopping since could not eval:
     call import: env._embind_register_optional
  ...stopping
```

Translation: EVAL_CTORS attempted to evaluate the static ctors at link time, but stopped at the first call to an imported JS function (`_embind_register_optional`, which is the embind machinery providing the registration plumbing). Imports cannot be evaluated at link time — they're only resolved during JS module instantiation. So EMSCRIPTEN_BINDINGS registration happens at runtime regardless of the EVAL_CTORS flag.

**Results.** 13/13 parity checks pass:
- arity-pad on ctor (`IM(sphere, 0.5)` → 306 triangles)
- arity-pad on method (`HandleIM(sphere, 0.5)` smart_ptr + IsDone)
- optional-wildcard (`AmbigCtor(pnt)` routedBy=1, tail=99)
- static method (`StaticOptProbe.probe()` → 99, `.probe(7)` → 7)
- optional return (`t3_maybe_value(true)` → 42, `(false)` → undefined)
- non-default-ctor T (`t4_optional_nondefault(NonDefault(7))` → 7, `()` → -1)
- multi-optional collision direction (still last-of-same-arity wins, same direction as default build)

**Implication.** `-sEVAL_CTORS=2` is **safe to enable** alongside the arity-pad + optional-wildcard dispatcher. The EVAL_CTORS pathway cannot interact with binding registration because embind registrations call imports; ctor evaluation aborts at the first import call. No follow-up work needed for Gate 4 or Gate 5.

Artefact: `results.t5.json` (plus the `mod-optional.t5.{mjs,wasm}` build artefacts).

## U1–U4 + U8 detailed results (Tier-4: migration story / memory correctness / deployment artefact)

A second deep-review pass after R1–R6 + T1–T5 surfaced four residual concerns the PoC could discharge cheaply before Gate 4. All four front-loaded successfully.

### U1 — Mixed C2 fan-out + `std::optional` within ONE class/module

**Question.** The migration plan claims "toolkit-by-toolkit or all-at-once — both are safe under the dispatcher patch." Gates 1–3 + R1–R6 + T1–T5 all use Corpus A OR Corpus B in isolation. There was no test for the realistic intermediate state where SOME classes/methods use C2 fan-out and OTHERS use `std::optional` WITHIN THE SAME CLASS in one module. If the dispatcher's `signaturesArray` book-keeping gets confused when a single class registers both patterns, incremental migration breaks.

**Approach.** New `MixedClass` with `int salt` and `compute(int, bool, double, bool) -> int` method. Binds TWO method names:
- `method_fanout` — 4 same-name arity registrations (arity 1, 2, 3, 4), each delegating to `compute(...)` with the omitted-arg defaults baked in. Mimics today's bindgen output.
- `method_optional` — 1 lambda taking `int + std::optional<bool> + std::optional<double> + std::optional<bool>`, calling `.value_or(...)` for each default. Mimics post-R5 bindgen output.

Both share one `class_<MixedClass>` registration. Tested with all 4 arities on each method shape.

**Results.** 9/9 pass:
- All 4 `method_fanout` arities return the correct value (503, 603, 253, 10503)
- All 4 `method_optional` arities return the SAME values (503, 603, 253, 10503)
- Parity assertion: `fanout(*) === optional(*)` for all 4 arities

**Implication.** The dispatcher routes the two method-name registrations into separate `overloadTable` entries on the prototype — they don't collide. A class can carry mixed patterns indefinitely without bindgen needing to migrate every method at once. **Toolkit-by-toolkit migration is safe; method-by-method migration within a toolkit is also safe.**

Artefact: `results.u1-u3-u4.json` (`u1` section).

### U3 — Lifetime / destructor balance for `std::optional<class T>`

**Question.** For class-typed `T` (non-trivially-destructible), the `toWireType` path constructs `T` inside `std::optional<T>` via copy/move; the lambda body's `value_or(T{})` may construct another; the optional destroys `T` on scope exit. Net ctor + copy + move count MUST equal dtor count — any imbalance is a leak (extra ctor/copy/move) or a double-free (extra dtor). Only correctness-by-counting can detect this category of bug.

**Approach.** File-scope `struct LifecycleTrack` with static counters for default-ctor / value-ctor / copy-ctor / move-ctor / dtor. Bound to embind as a class with `int payload`. Three under-test functions:
- `u3_optional_consume(std::optional<LifecycleTrack>) -> int` (returns payload or -1)
- `u3_ref_consume(const LifecycleTrack&) -> int` (baseline — should be a clean wire)
- `u3_counts() / u3_reset_counts()` (JS-side readers)

Three test passes: explicit-arg single call, omitted-arg single call, 1000x hammer.

**Results.** 7/7 pass with precisely-balanced counts:

| Pass | ctor | copy | move | dtor | Span balanced? |
| --- | --- | --- | --- | --- | --- |
| `u3_optional_consume(lt)` single | 0 | 1 | 1 | 2 | ✓ (created=2, destroyed=2) |
| `u3_optional_consume()` omitted | 0 | 0 | 0 | 0 | ✓ (nullopt path: T never enters wire) |
| `u3_optional_consume(lt)` × 1000 | 0 | 1000 | 1000 | 2000 | ✓ (created=2000, destroyed=2000) |
| `u3_ref_consume(lt)` const-ref baseline | 0 | 0 | 0 | 0 | ✓ (clean wire, no copying) |

The per-call profile **1 copy + 1 move + 2 dtors** is exactly what we want — embind copies the JS-side object into a wire-side temporary (copy #1), moves it into the `std::optional<T>` slot (move #1), destroys the wire-side temporary (dtor #1), then destroys the optional's held T at lambda scope exit (dtor #2). Zero leaks per call across 1000 iterations.

**Implication.** `std::optional<T>` for class-typed T is **memory-safe** even under heavy hammer. No bindgen-side cleanup work or destructor-hint emission required.

Artefact: `results.u1-u3-u4.json` (`u3` section).

### U4 — Refcount balance for `std::optional<opencascade::handle<T>>`

**Question.** R3 verified routing (omitted/handle/null/undefined) but not lifetime. `opencascade::handle<T>` increments `T`'s refcount on copy/assignment and decrements on destruction. If the optional-wrapped path doesn't balance these correctly, long-lived JS handles could leak OCCT heap.

**Approach.** New `u4_handle_refcount(const opencascade::handle<IM_Handled>&) -> int` returns `h->GetRefCount()`. `u4_optional_exercise(std::optional<handle>) -> int` accepts an optional-wrapped handle, runs `.IsDone()` through it, and discards. JS test snapshots refcount before, hammers 100x exercise + 300x null/undefined/omitted + 100x fresh-handle pass+exercise+drop, then snapshots refcount after.

**Results.** 9/9 pass with refcount perfectly stable at baseline (1):

| Test span | Original handle refcount before | After |
| --- | --- | --- |
| Baseline (`new HandleIM`) | 1 | — |
| 100x `u4_optional_exercise(handle)` | 1 | **1** (zero net delta) |
| 300x null / undefined / omitted | 1 | **1** |
| 100x fresh `new HandleIM` → exercise → `.delete()` | 1 | **1** (original handle untouched) |
| Fresh handle after originalDelete | n/a | 1 (fresh handle independent) |

**Implication.** The smart_ptr-via-optional wire path correctly increments-then-decrements the underlying `Standard_Transient` refcount. **No memory leak risk** in the long-lived handle case. The `EmValOptionalType.toWireType` + `genericPointerToWireType` + `opencascade::handle<T>` copy ctor chain composes cleanly with respect to refcount semantics.

Artefact: `results.u1-u3-u4.json` (`u4` section).

### U8 — v2 libembind patch artefact for deployment

**Question.** Gates 1–3 + R1 validated the resulting `libembind.production+arity-pad.js` JS file. Production deployment requires the **patch file** itself (`src/patches/libembind-overloading.patch`), not the JS output, because OCJS's build pipeline applies the patch to whatever upstream emscripten version is present at build time. We need to verify (a) we can produce a v2 patch from the in-tree snapshot, (b) it applies cleanly to pristine upstream emscripten, (c) the result is byte-identical to the in-tree snapshot, and (d) double-application fails loudly so a build hiccup can't silently corrupt the file.

**Approach.** `u8.test.sh`:

```
diff -u pristine libembind.production+arity-pad.js > libembind-overloading.v2.patch
patch /tmp/test.js < libembind-overloading.v2.patch
diff /tmp/test.js libembind.production+arity-pad.js
patch --forward -N /tmp/test.js < libembind-overloading.v2.patch  # must fail
```

**Results.** All four assertions pass:

| Check | Result |
| --- | --- |
| (0) Generate v2 patch | 483 lines / 14 hunks |
| (1) Clean apply to pristine upstream | ✓ (no rejects, no fuzz) |
| (2) Patched pristine === in-tree `libembind.production+arity-pad.js` | ✓ (byte-identical) |
| (3) Double-apply loud-fails | ✓ (`Ignoring previously applied (or reversed) patch. 14 out of 14 hunks ignored`) |
| (4) Patch size growth vs current production | +54 lines / +1 hunk (429 → 483 lines, 13 → 14 hunks) |

**Implication.** Gate 4 can drop `libembind-overloading.v2.patch` directly into `src/patches/` without further manipulation — it's the production-ready deployment artefact. The +54 line / +1 hunk growth is small enough to review by inspection. The double-apply check confirms a defensive build-pipeline hygiene property: if a build script accidentally re-runs `patch`, the build fails loudly rather than producing a corrupted libembind that ships silent dispatcher bugs.

Artefacts: `libembind-overloading.v2.patch` (the deployment-ready patch file), `results.u8.json` (structured outcomes).

## Bundle and runtime cost summary

| Dimension | Corpus A (production fan-out) | Corpus B (Option C `std::optional<T>` + R3–R6 + T1–T4 + U1/U3/U4 probes) | Δ |
| --- | --- | --- | --- |
| WASM bytes | 3,477,218 | 3,500,690 | **+23,472 B (+0.68%)** |
| JS glue bytes | 106,045 | 112,581 | **+6,536 B (+6.16%)** |
| Combined bytes | 3,583,263 | 3,613,271 | **+30,008 B (+0.84%)** |
| Sphere build+mesh wall-clock (median, 300 iters) | 0.866 ms | 0.861 ms | **−0.005 ms (−0.56%, noise)** |
| Sphere triangle count parity | 306 | 306 | 0 (byte-identical) |
| Total test expectations met | — | **96/96 (Gates + R1–R6 + T1–T5 + U1/U3/U4/U8)** | — |
| T5 build (Corpus B + `-sEVAL_CTORS=2`) | — | 3,497,120 / 111,604 (WASM/JS) | within noise of Corpus B default |
| v2 libembind patch (`libembind-overloading.v2.patch`) size | 429 lines / 13 hunks (production current) | 483 lines / 14 hunks | **+54 lines / +1 hunk** |

**Caveat on the bundle delta:** the +30,008 B figure includes all R3–R6 + T1–T4 + U1/U3/U4 probe bindings (`optional_handle_probe`, `ValOptAmbig`, `ValOptAmbigRev`, four R5 probes, two R6 probes, `MultiOptAmbig` + `MultiOptAmbigRev`, `StaticOptProbe`, `NonDefault`, `t3_maybe_value`, `t4_optional_nondefault`, `MixedClass`, `LifecycleTrack`, `u4_handle_refcount`, `u4_optional_exercise`, plus the corresponding `register_optional<T>` entries). The pure cost of migrating ONE ctor from arity-fan-out to `std::optional` remains **+6,161 B / +0.17%** (the original Group-1 measurement). The combined delta grows linearly with binding count, NOT with `register_optional<T>` instantiations (which are deduped by R2's `thread_local` guard).

## Gates passed (Gates 1–3 summary; details in git history)

### Gate 1 — bounded C1 arity-pad extension

Three patch hunks (≈40 LOC total) integrated into both `libembind.c1+arity-pad.js` (the stale-base proof) and `libembind.production+arity-pad.js` (R1's production-base proof). Both 25/25.

### Gate 2 — production-density multi-arity edge cases

`BRepPrimAPI_MakeSphere`'s `{1, 2, 2*, 3, 4}` arity set (where `*` denotes a C1 same-arity sibling) and the synthetic `AmbigCtor` with `std::optional<double>` participating in a same-arity overload group both pass. The third patch hunk (`$getSignature` optional-aware) was discovered during this gate.

### Gate 3 — `smart_ptr<opencascade::handle<T>>` + `std::optional` composition

The production binding shape `class_<T>("...").smart_ptr<opencascade::handle<T>>("Handle_T").constructor(optional_override([](..., std::optional<...>) { return opencascade::handle<T>(...); }))` works end-to-end through the c1+pad dispatcher.

## Final implementation-ready verdict

| Gate | Status | Time consumed |
| --- | --- | --- |
| 1 — prove the C1 arity-pad extension | **DONE** | 1 h |
| 2 — production-density edge cases + optional-in-C1 interaction | **DONE** (uncovered the getSignature optional-aware hunk) | 1.5 h |
| 3 — smart_ptr<handle<T>> composition | **DONE** | 0.5 h |
| **R1** — compose Gate-1 hunks with the current production `libembind-overloading.patch` | **DONE** (25/25) | 0.5 h |
| **R2** — `register_optional<T>` TU dedup | **DONE** (idempotent by C++ template guarantee) | 0.25 h |
| **R3** — `std::optional<opencascade::handle<T>>` | **DONE** (4/4 call shapes) | 0.5 h |
| **R4** — val vs optional same-arity ambiguity | **DONE** (val always wins by type-priority; bindgen guard required) | 0.5 h |
| **R5** — four real OCCT default shapes | **DONE** (4/4 translate cleanly) | 1 h |
| **R6** — output param misclassification | **DONE** (A loud-fail, B silent — bindgen guard required) | 0.5 h |
| **T1** — multi-optional same-arity collision determinism | **DONE** (last-of-same-arity-registered wins, deterministically; bindgen guard or sort required) | 0.5 h |
| **T2** — `.class_function` static dispatcher coverage | **DONE** (3/3) | 0.25 h |
| **T3** — `std::optional<T>` as RETURN type | **DONE** (2/2; `EmValOptionalType.fromWireType` clean) | 0.25 h |
| **T4** — `register_optional<T>` for non-default-constructible T | **DONE** (compiles + runs; no precondition check needed) | 0.25 h |
| **T5** — `-sEVAL_CTORS=2` interaction smoke test | **DONE** (13/13; EVAL_CTORS aborts at first import call — behaviourally neutral) | 0.25 h |
| **U1** — mixed fan-out + `std::optional` in one class | **DONE** (9/9; both patterns coexist; incremental migration safe) | 0.5 h |
| **U3** — `std::optional<class T>` ctor/dtor balance | **DONE** (1000x hammer: 2000 dtors === 2000 created; zero leak) | 0.5 h |
| **U4** — `std::optional<opencascade::handle<T>>` refcount balance | **DONE** (500x mixed-call sweep: refcount stable at baseline 1) | 0.5 h |
| **U8** — v2 libembind patch deployment artefact | **DONE** (clean apply / byte-identical roundtrip / loud double-apply; +54 lines / +1 hunk) | 0.25 h |
| 4 — bindgen.py emitter changes + R4/R6/T1 emit-time guards | NOT YET STARTED | Est. 1.5 days |
| 5 — full-build measurement (WASM size, libembind patch line count) | **PARTIALLY DONE** via U8 (patch line count); WASM size measurement still NOT STARTED | Est. 0.25 day |

**Dispatcher-side work is complete. The v2 libembind patch (`libembind-overloading.v2.patch`) is the deployment-ready artefact for Gate 4.** Remaining ~1.75 days = bindgen.py emission + WASM-size measurement.

## Carry-forward bindgen requirements (from R1–R6 + T1–T5 + U1/U3/U4/U8)

The following must land in `src/ocjs_bindgen/codegen/` alongside the post-R5 emission changes:

### Hard requirements (emit-time guards)

1. **R4 guard**: emit-time reject any class where the same method/ctor has same-arity siblings where at least one position is `emscripten::val` and another is `std::optional<T>` for any `T`. Emit a clear error pointing at the source binding YAML.
2. **R6 guard**: emit-time refuse to wrap any non-const reference parameter (`T&` without `const`) in `std::optional<...>` regardless of `=` initializer. Combine with the existing TR-OUT classification logic.
3. **T1 guard / sort**: same-arity sibling groups where TWO OR MORE siblings have ALL positions `std::optional`-typed produce undefined-by-build winner selection (last-of-same-arity wins, but emission order is bindgen-implementation-defined). EITHER (a) emit-time reject the shape, OR (b) sort sibling emission deterministically (alphabetical by mangled signature is the cleanest). Recommendation: ship (a) as a clear error and let the consumer reshape the binding YAML — same posture as R4.

### Deployment artefacts

4. **U8 — v2 libembind patch**: `libembind-overloading.v2.patch` (this directory) is the deployment-ready successor to `src/patches/libembind-overloading.patch`. Drop in place; rebuild; the dispatcher is live.

### Confirmations (no bindgen action required, but useful documentation)

5. **R2**: no TU coordination needed for `register_optional<T>()` emission. Bindgen can emit at every use site; the runtime is idempotent by upstream design.
6. **R3 / R5**: no special-casing needed for handle defaults or const-ref-to-temporary defaults — the standard `std::optional<T>` + `.value_or(D)` template applies uniformly.
7. **T2**: `.class_function` (static methods) inherit arity-pad behaviour from the shared `$ensureOverloadTable` machinery — no separate emission rule required.
8. **T3**: `std::optional<T>` return types round-trip cleanly to JS `T | undefined`. Bindgen `.d.ts` generation should emit `T | undefined` (or `T?`) for these returns.
9. **T4**: no `is_default_constructible_v<T>` precondition check needed for `std::optional<T>` emission. Any embind-admissible `T` (copy- or move-constructible) is acceptable.
10. **T5**: `-sEVAL_CTORS=2` is compatible with the arity-pad + optional-wildcard dispatcher. Build flag can be enabled (or disabled) without affecting bindgen emission semantics.
11. **U1**: bindgen can migrate methods INCREMENTALLY within a single class — fan-out and `std::optional` patterns coexist in the same `class_<...>` registration with no dispatcher confusion. **Migration is not all-or-nothing.**
12. **U3**: `std::optional<T>` for class-typed T is memory-safe — per-call ctor + copy + move count balances dtor count exactly (1+1+1 ↔ 2 in the simple case, no drift across 1000x hammer). Bindgen does NOT need to emit explicit destructor hints for `std::optional`-wrapped class-typed params.
13. **U4**: `std::optional<opencascade::handle<T>>` is refcount-safe — the smart_ptr→optional→genericPointerToWireType wire path correctly balances `Standard_Transient` refcount on copy-in / destruction. Long-lived JS handles passed through optional-typed params do not leak OCCT heap.

## Reproduce

```bash
cd experiments/poc-occt-integration

# Default mode is now `prod+pad` (R1-validated production base + arity-pad).
./build.sh all                # ~12 s — builds both Corpora A and B
./run-all.sh                  # Runs every validation in sequence; exits 0 only if all pass
# (./run-r1-r6.sh and ./run-r1-r6-t1-t5.sh are backwards-compat symlinks to ./run-all.sh)

# Individual tests (all already wired through ./run-all.sh):
node run.test.mjs             # R1 — 25-test Gates 1–3 suite under prod+pad
node r2.test.mjs              # R2 — dup register_optional<T> across TUs
node r3.test.mjs              # R3 — std::optional<opencascade::handle<T>>
node r4.test.mjs              # R4 — val vs optional same-arity (8 calls × 2 orders)
node r5.test.mjs              # R5 — four real OCCT default shapes
node r6.test.mjs              # R6 — output-param misclassification (reads compile log)
node t1-t4.test.mjs           # T1–T4 — Tier-3 collision/static/return/non-default
./build.sh t5-eval-ctors && node t5.test.mjs   # T5 — -sEVAL_CTORS=2 parity
node u1-u3-u4.test.mjs        # U1+U3+U4 — Tier-4 mixed dispatch / lifetime / refcount
./u8.test.sh                  # U8 — v2 patch roundtrip + idempotency

# Switch libembind snapshots (default is prod+pad):
./apply-libembind.sh c1        # stale C1-only snapshot
./apply-libembind.sh c1+pad    # stale base + arity-pad (Gates 1–3 snapshot)
./apply-libembind.sh prod      # current production patch only (no arity-pad)
./apply-libembind.sh prod+pad  # current production + arity-pad (R1 layered) — DEFAULT
```

## File map

| File | Role |
| --- | --- |
| `bindings-current.cpp` | Corpus A — production-style arity fan-out |
| `bindings-optional.cpp` | Corpus B — Option C `std::optional<T>` lambdas; includes R3 (`optional_handle_probe`), R4 (`ValOptAmbig` + Rev), R5 (4 default-shape probes), R6 (correct + bad output-sink probes), T1 (`MultiOptAmbig` + Rev), T2 (`StaticOptProbe`), T3 (`t3_maybe_value`), T4 (`NonDefault` + `t4_optional_nondefault`), U1 (`MixedClass`), U3 (`LifecycleTrack` + counter helpers), U4 (`u4_handle_refcount` + `u4_optional_exercise`) |
| `bindings-r2-dup-optional.cpp` | **R2** — second TU calling `register_optional<bool>(); register_optional<double>();` to force the dedup-collision test |
| `bindings-r6-illegal-ref.cpp` | **R6** — intentionally broken (`std::optional<gp_Pnt&>`) to capture the compile-time loud-fail evidence |
| `libembind.c1+arity-pad.js` | Stale-base C1-only + bounded arity-pad extension (the Gates-1–3 snapshot) |
| `libembind.production.js` | **R1 / R6** — current `src/patches/libembind-overloading.patch` applied to upstream emscripten |
| `libembind.production+arity-pad.js` | **R1** — production base + the 3 Gate-1 hunks layered on top |
| `libembind-overloading.v2.patch` | **U8** — deployment-ready v2 patch file (483 lines / 14 hunks; +54 lines / +1 hunk vs current production). Drop into `src/patches/` to replace `libembind-overloading.patch`. |
| `apply-libembind.sh` | Toggle the assimpjs emsdk between `c1`, `c1+pad`, `prod`, and `prod+pad` snapshots |
| `build.sh` | emcc link script — picks up `LIBEMBIND_MODE` env var (default `prod+pad`); supports `r2` (dup-TU build), `r6-illegal` (compile-fail probe), and `t5-eval-ctors` (–sEVAL_CTORS=2 build) targets |
| `run.test.mjs` | 25-row test matrix (Gates 1–3); mode-aware across `c1` / `c1+pad` / `prod` / `prod+pad` |
| `r2.test.mjs` … `r6.test.mjs`, `t1-t4.test.mjs`, `t5.test.mjs`, `u1-u3-u4.test.mjs` | One front-loaded risk per file (Rs Tier-1/2; Ts Tier-3; Us Tier-4) |
| `u8.test.sh` | **U8** — generates the v2 patch from pristine+prod+pad and validates clean-apply / byte-identical / loud-double-apply |
| `run-all.sh` | **Consolidated runner** — exits 0 only if every R/T/U batch passes. `run-r1-r6.sh` and `run-r1-r6-t1-t5.sh` are backwards-compat symlinks. |
| `bench-wallclock.mjs` | 300-iter wall-clock comparison |
| `verify-no-regression.sh` | Re-runs sibling PoCs under `c1+pad` to prove backward compatibility |
| `results.json`, `results.r1.prod+pad.json`, `results.r{2,3,4,5,6}.json`, `results.t1-t4.json`, `results.t5.json`, `results.u1-u3-u4.json`, `results.u8.json`, `r6-illegal.compile.log`, `bench-wallclock-results.json` | Committed test/bench outputs |
| `mod-{current,optional,r2}.{mjs,wasm}`, `mod-optional.t5.{mjs,wasm}` | Build artefacts (gitignored) |

## Open questions deliberately deferred (Gates 4 & 5)

1. **Bindgen `.d.ts` generation.** Post-R5 emission needs `T | undefined` (or `T?`) in TypeScript signatures (covers both `std::optional<T>` parameters AND T3-validated returns).
2. **NCollection trailing-default surfaces.** The translation rule applies uniformly, but bindgen Python needs to handle template-instantiation sites.
3. **Migration sequencing.** The v2 patch lands FIRST as a strict additive change (U8 confirms deployment readiness, R1 confirms zero behavioural regression). Bindgen migration is then incremental (U1 confirms intra-class mixed dispatch is safe).
4. **R4 audit of existing bindings YAMLs.** Find any class today that already has `f(val)` + `f(...)` siblings at the same arity, and pre-flag those for bindgen-generator review.
5. **T1 audit of existing bindings YAMLs.** Find any class today that has same-arity siblings where ≥2 siblings use only `std::optional`-typed positions — same posture as R4 audit.
6. **Patch-shrink measurement.** "libembind patch shrinks ~40%" claim assumes the C2 fan-out logic in `src/patches/libembind-overloading.patch` is removable after bindgen migration. U8 confirms the FORWARD increment (+54 lines / +1 hunk), but the post-bindgen-migration SHRINKAGE measurement requires the actual bindgen Python changes to land. Gate 5.
7. **Full-build OCCT WASM size measurement** under post-R5 bindgen. Gate 5.

## What deliberately remains out of scope

- Bindgen Python codegen changes (Gate 4 — separate work)
- Full-build OCCT WASM size measurement under post-R5 bindgen (Gate 5)
- Multi-threaded build path
- `closed-world` wasm-opt mode interaction
- `.d.ts` post-link rewrite changes
