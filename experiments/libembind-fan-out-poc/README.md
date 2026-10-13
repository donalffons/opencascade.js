# libembind Fan-out PoC — Object.hasOwn Hardening

Canonical proof that the R1+R2 hardening of
[../../src/patches/libembind-overloading.patch](../../src/patches/libembind-overloading.patch)
resolves the cross-sibling overload-table mutation surfaced by
[`docs/research/ocjs-trailing-default-arity-fan-out.md`](../../../../docs/research/ocjs-trailing-default-arity-fan-out.md)
— without rebuilding OCJS. Per-iteration cycle is seconds, not minutes.

## Why this exists

The trailing-default fan-out PoC closed the original `Build(progressRange)` smoking gun
(`smoke-thrusections-build-arg.test.ts` passes 4/4) but introduced a regression
in `smoke-fillets-chamfers.test.ts`: derived classes registering an override of
a base method whose overload table contains arity-0 truncations corrupt the
inherited table, causing `BindingError: Expected null or instance of <unrelated class>`
when unrelated siblings are called.

The eigenquestion analysis identified the root cause as
`_embind_register_class_function` reading `proto[methodName]` without an
`Object.hasOwn` guard, so derived classes silently mutate the base's
overload table. The fix is a small `Object.hasOwn` gate that makes each
class own its dispatch state independently of the JS prototype chain.

## How to run

```bash
# Negative control — current patch reproduces the regression (Test C).
./apply-libembind-patch.sh apply
./build.sh negative

# Positive build — the canonical patch with R1+R2 hunks applied. Once the
# canonical patch is updated this is just another `apply` + build.
./apply-libembind-patch.sh apply
./build.sh positive

# Restore pristine libembind.js so other tooling isn't affected.
./apply-libembind-patch.sh restore

# Run the test matrix against both builds.
node run.test.mjs
```

A full negative+positive cycle takes roughly 30s including the two emcc
compiles, vs 30+ minutes for an OCJS WASM rebuild.

## C++ corpus

[mini-occt.hpp](mini-occt.hpp) covers six inheritance variations:

| Class               | Inherits from   | Build override?           | Notes                                                              |
| ------------------- | --------------- | ------------------------- | ------------------------------------------------------------------ |
| `MakeShape`         | (none)          | (defines virtual Build)   | Mirrors `BRepBuilderAPI_MakeShape`                                 |
| `ThruSections`      | `MakeShape`     | explicit `override`       | Also exercises Init multi-arity primitive defaults                 |
| `SplitShape`        | `MakeShape`     | explicit `override`       | The trigger that mutated MakeShape's table in production           |
| `Command`           | `MakeShape`     | none                      | Intermediate base                                                  |
| `MakeChamfer`       | `Command`       | none (inherited)          | Cross-sibling victim — receives `BindingError` in production       |
| `LegacyDerived`     | `MakeShape`     | implicit (no keyword)     | Validates removing the bindgen `is_override` guard after R1+R2     |
| `IndependentBuild`  | (none)          | own Build                 | Independence sanity                                                |
| `Statics`           | (none)          | static `Compute(int=,int=)` | R2: exercises `_embind_register_class_class_function`             |

## Test matrix (`run.test.mjs`)

| #   | Test                                                                  | Negative build | Positive build |
| --- | --------------------------------------------------------------------- | -------------- | -------------- |
| A   | Base arity-0 truncation in isolation                                  | pass           | pass           |
| B   | Override on derived does not corrupt base                             | pass           | pass           |
| C   | **CROSS-SIBLING REGRESSION** — chamfer.Build(progress) after splitter.Build() | **fail** (BindingError, smoking gun) | **pass** |
| D   | Multi-arity primitive trailing defaults (Init fan-out)                | pass           | pass           |
| E   | Implicit override (no `override` keyword) lands on derived            | pass           | pass           |
| F   | Independent class shares no dispatch state with MakeShape             | pass           | pass           |
| G   | Static method fan-out (R2): `Statics.Compute()` / `(a)` / `(a, b)`    | pass           | pass           |

The runner exits non-zero unless: the negative build fails ONLY Test C, AND
the positive build passes all 7.

## R1+R2 patch hunks

Inside `_embind_register_class_function` and `_embind_register_class_class_function`
in `src/patches/libembind-overloading.patch`, the read of `proto[methodName]`
(or `classType.registeredClass.constructor[methodName]`) is gated behind
`Object.hasOwn` so inherited entries are treated as absent for registration
purposes. Path A then fires for any override registration, creating a fresh
own property on the derived class instead of mutating the base's table.

## Out of scope

- Not rebuilding OCJS WASM (deliberately).
- Not validating Strategy C (`val`-based dispatch) — separate experiment.
- Not removing the `is_override` guard in `bindings.py` yet — that follow-up
  requires a full OCJS rebuild after this PoC validates.

## Follow-ups after this PoC succeeds

- Trigger an OCJS WASM rebuild against the updated canonical patch and
  re-run `smoke-fillets-chamfers.test.ts` + `smoke-thrusections-build-arg.test.ts`.
- Remove the `is_override` guard in `src/ocjs_bindgen/codegen/bindings.py`
  (R3 from the research doc).
- Add `smoke-inherited-default-args.test.ts` to the OCJS smoke suite (R5).
