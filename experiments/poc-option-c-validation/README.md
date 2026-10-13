# poc-option-c-validation — Empirical Validation of the Option C Bifurcation

Empirically validates the **Option C** strategic direction from [`docs/research/ocjs-libembind-strategic-direction-assessment.md`](../../../../docs/research/ocjs-libembind-strategic-direction-assessment.md): keep C1 (same-arity type-based dispatch) intact, retire C2 (arity fan-out for trailing C++ defaults) in favour of upstream embind's canonical `std::optional<T>` + `register_optional<T>` mechanism ([Emscripten 3.1.68 / PR #22591](https://github.com/emscripten-core/emscripten/pull/22591)).

Design spec: [`docs/research/ocjs-option-c-validation-experiment-design.md`](../../../../docs/research/ocjs-option-c-validation-experiment-design.md).

## Headline Result

**Option C is partially viable.** `std::optional<T>` collapses 3 of 4 addressable C2 catalog defects with zero libembind modification, but **TR-MO (multi-overload + trailing default) fails in Corpus B** — the C1 dispatcher's strict per-arity `overloadTable[args.length]` lookup blocks upstream embind's relaxed-arity verifier from materialising `std::nullopt` for omitted trailing args.

| Catalog defect | Corpus A (current bindgen + C1 patch) | Corpus B (proposed std::optional + same C1 patch) | Option C collapses it? |
| -------------- | :----------------------------------: | :-----------------------------------------------: | ---------------------- |
| FO-R3*         | PASS                                 | PASS                                              | **Already fixed** by shipping R1/R2 `Object.hasOwn` gates — was incorrectly listed as a C2 defect |
| TR-CW          | **FAIL** (BindingError on enum undefined) | **PASS**                                     | ✓ YES — std::optional<OpenMode> unwraps cleanly                                                    |
| TR-MO          | **FAIL** (arity mismatch in multi-overload) | **FAIL** (arity mismatch in multi-overload)  | ✗ **NO** — C1 dispatcher requires libembind extension                                              |
| TR-RBV         | **FAIL** (silent wrong default — undefined→0) | **PASS**                                  | ✓ YES — std::optional<double> enforces C++ default in lambda body                                  |
| TR-GATE        | **FAIL** (silent wrong default — undefined→0) | **PASS**                                  | ✓ YES — composes naturally with cstring + RBV wrappers                                             |

Plus:
- **C1 §B1 happy-path preserved** under Corpus B (all three `Pnt(...)` same-arity ctor controls pass — H3 ✓).
- **`register_optional<T>` links cleanly** against the unchanged C1 libembind patch — H1 ✓ for single-overload, H1 ✗ for multi-overload.
- **Translation rule is mechanical** — `mock-bindgen.py` shows the entire R5 transformation as a single branch in the per-overload emitter — H4 ✓.

## Test Matrix (`results.json`)

```
Corpus A (current bindgen fan-out): 4/8 — matches expectation
  PASS  1   control   C1 §B1 — Pnt(1,2,3) → 3-double ctor
  PASS  1b  control   C1 §B1 — Pnt(xyz) → XYZ-taking ctor (1-arg same-arity)
  PASS  1c  control   C1 §B1 — Pnt(vec) → Vec3-taking ctor (1-arg same-arity)
  PASS  2   FO-R3*    derived.Build() — already fixed by R1/R2
  FAIL  3   TR-CW     tool.Set("file") — BindingError on undefined OpenMode
  FAIL  4   TR-MO     sampler.Sample(edge) — arity mismatch
  FAIL  5   TR-RBV    tool.GetCurve(edge) — silent wrong default (undefined→0)
  FAIL  6   TR-GATE   combo.Proc("x")     — silent wrong default (undefined→0)

Corpus B (proposed std::optional): 7/8 — deviates on #4 (TR-MO)
  PASS  1   control   C1 §B1 — Pnt(1,2,3) → 3-double ctor
  PASS  1b  control   C1 §B1 — Pnt(xyz) → XYZ-taking ctor (1-arg same-arity)
  PASS  1c  control   C1 §B1 — Pnt(vec) → Vec3-taking ctor (1-arg same-arity)
  PASS  2   FO-R3*    derived.Build() — already fixed by R1/R2
  PASS  3   TR-CW     tool.Set("file") — std::optional<OpenMode> unwraps to ReadOnly
  FAIL  4   TR-MO     sampler.Sample(edge) — arity mismatch (SAME failure as Corpus A)
  PASS  5   TR-RBV    tool.GetCurve(edge) — C++ default (0.99) correctly applied
  PASS  6   TR-GATE   combo.Proc("x")     — C++ default (0.99) correctly applied
```

## What This Means for the Strategic Direction

### Findings that ratify the Option C direction

1. **H1 (composition) holds for single-overload methods.** `std::optional<T>` + `register_optional<T>` requires no libembind modification when the target method is the only registration at its name. TR-CW, TR-RBV, TR-GATE all single-overload — all collapse.

2. **H3 (C1 §B1 preserved) holds.** Same-arity type dispatch continues to route correctly with no regression to v3's load-bearing suffix-free overload commitment.

3. **H4 (mechanical translation) holds.** The R5 bindgen change is one branch in the per-overload emitter — see `mock-bindgen.py` lines 38–63. No heuristic gates, no per-defect logic.

4. **A hidden production-correctness bug is surfaced.** TR-RBV and TR-GATE today exhibit *silent wrong-default behaviour* — embind's relaxed-arity verifier casts JS `undefined` to numeric `0` for trailing numeric args, so consumers calling `tool.GetCurve(edge)` get `tol=0` instead of the C++ default `1e-6`. The catalog framed these as "fan-out lambdas not emitted"; the empirical observation is more severe: they currently produce **silently incorrect geometry** for any OCCT call with a numeric trailing default that gets omitted from JS. Option C's `value_or(default)` in the lambda body **fixes this hidden bug** as a side effect.

### Findings that constrain the Option C direction

5. **H1 falsified for the multi-overload case.** When the C1 dispatcher installs its `overloadTable[args.length]` per-arity routing indirection, upstream embind's relaxed-arity verifier no longer fires before the per-arity lookup. A JS call with fewer args than the lowest registered arity throws `Function 'X' called with invalid number of arguments`. This is the TR-MO failure in Corpus B.

6. **TR-MO requires a targeted C1 libembind extension.** When `overloadTable[args.length]` returns undefined, the dispatcher must walk higher-arity entries (`overloadTable[args.length+1]`, `[args.length+2]`, ...) checking whether the trailing positions are `std::optional<T>` slots, and pad the args array with `undefined` to match. Estimated scope: ~30–50 lines added to `$ensureOverloadSignatureTable` in `src/patches/libembind-overloading.patch`. **This invalidates the strategic doc's claim that Option C requires zero libembind modification** — though the addition is small, well-scoped, and aligned with C1's existing per-arity routing architecture.

7. **FO-R3 should not have been counted among the 5 collapsing defects.** The R1/R2 `Object.hasOwn` gates already shipping in `libembind-overloading.patch` resolve the override-arity-0 truncation case. Both corpora pass test #2. The strategic doc's "5 of 8 defects collapse" should be revised to "3 of 8 collapse via std::optional + 1 (FO-R3) is already addressed by C1; TR-MO requires C1 extension."

## Layout

```
poc-option-c-validation/
├── README.md                    — this file
├── mock-occt.hpp                — 5 mock OCCT classes targeting each catalog defect
├── corpus-a-fan-out.cpp         — bindings.cpp as current bindgen emits (full-arity only where gates trip)
├── corpus-b-optional.cpp        — bindings.cpp as post-R5 bindgen would emit (std::optional<T> + register_optional)
├── mock-bindgen.py              — ~100-line DSL→C++ sketch validating H4 (mechanical translation rule)
├── mock-occt-decl.txt           — tiny DSL input for mock-bindgen.py
├── libembind.ocjs-patched.js    — vendored C1-only libembind (verbatim copy from poc-overload-dispatch-cost/)
├── apply-libembind-patch.sh     — restore-only helper (no toggle — same libembind for both corpora)
├── build.sh                     — emcc driver for both corpora
├── run.test.mjs                 — 8-row test matrix harness
└── results.json                 — committed pass/fail evidence
```

## Reproducing

```bash
cd repos/opencascade.js/experiments/poc-option-c-validation

# Build both corpora (~5 sec)
./build.sh all

# Run the 8-row test matrix; writes results.json; exits 1 on TR-MO deviation
node run.test.mjs

# Validate H4 (mechanical translation rule); see ~20-line core branch
cat mock-occt-decl.txt | python3 mock-bindgen.py --variant a
cat mock-occt-decl.txt | python3 mock-bindgen.py --variant b
```

## Recommendation

The strategic-direction doc should be updated to **Option C′ (Option C plus a bounded C1 extension)**:

- **Retire C2 in bindgen** (R5 as originally specified). Single-overload trailing-default methods get `std::optional<T>` + `register_optional<T>` and collapse to zero work. Hidden numeric-default correctness bug fixed as a side effect.
- **Extend C1 libembind** to walk `overloadTable[args.length .. args.length + maxOptionalCount]` when the strict-arity lookup returns undefined. Estimated effort: ~30–50 LoC in `$ensureOverloadSignatureTable`. This handles the TR-MO case (and unblocks `BRep_Tool::Curve` and the other multi-overload + trailing-default OCCT patterns).
- **Revise the catalog severity**: FO-R3 is already addressed by R1/R2 (no work needed); TR-CW + TR-RBV + TR-GATE collapse under R5; TR-MO requires the new C1 extension; TR-GATE (parity gate) becomes a non-issue once the parity gates are deleted.

The Option C direction is **architecturally sound** — the load-bearing claim that std::optional<T> belongs at the lambda body rather than as a fan-out lambda is empirically validated for the single-overload majority. The TR-MO finding tightens the scope of the libembind extension needed; it does not invalidate the direction.

## References

- Design spec: [`docs/research/ocjs-option-c-validation-experiment-design.md`](../../../../docs/research/ocjs-option-c-validation-experiment-design.md)
- Strategic direction: [`docs/research/ocjs-libembind-strategic-direction-assessment.md`](../../../../docs/research/ocjs-libembind-strategic-direction-assessment.md)
- Catalog: [`docs/research/ocjs-bindgen-libembind-outstanding-issues-catalog.md`](../../../../docs/research/ocjs-bindgen-libembind-outstanding-issues-catalog.md)
- Sibling PoC for C1 inheritance regression (FO-R1): [`experiments/libembind-fan-out-poc/`](../libembind-fan-out-poc/)
- Sibling PoC for C1 per-call cost: [`experiments/poc-overload-dispatch-cost/`](../poc-overload-dispatch-cost/)
- Upstream relaxed-arity verifier: [Emscripten PR #22591](https://github.com/emscripten-core/emscripten/pull/22591) / [issue #22389](https://github.com/emscripten-core/emscripten/issues/22389)
