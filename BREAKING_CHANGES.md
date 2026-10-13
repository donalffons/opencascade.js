# Breaking Changes — libcascade v3 (`libcascade@3.0.0`)

This guide describes the consumer-visible breaking changes in libcascade
v3.

It lists every consumer-visible breaking change with **Before / After** code samples. All `After` snippets are taken directly from runnable smoke tests in [`tests/smoke/`](tests/smoke/) or the generated declaration artifacts in `dist/`.

If you only build WASM yourself (no JS consumption), skip ahead to [Section F — Build flag changes](#section-f--build-flag-changes).

## Compatibility floor

Native WebAssembly exception handling is on by default in the published build. Consumers must run on a runtime that supports `WebAssembly.Exception`:

| Runtime       | Minimum |
| ------------- | ------- |
| Chrome / Edge | 95      |
| Firefox       | 100     |
| Safari        | 16.4    |
| Node.js       | 22      |

To run on older runtimes, build a custom variant from source by overriding `OCJS_EXCEPTIONS=0` on top of any shipped configuration — every named configuration in `build-configs/configurations.json` enables native WASM exceptions by default in v3, so a non-exceptions build has to be opted out explicitly.

## Index

- [Section A — Module loading](#section-a--module-loading)
- [Section B — JS / TS API surface changes](#section-b--js--ts-api-surface-changes)
- [Section C — WebAssembly exception handling](#section-c--webassembly-exception-handling)
- [Section D — OCCT V8 API breaking changes](#section-d--occt-v8-api-breaking-changes)
- [Section E — Removed symbol families](#section-e--removed-symbol-families)
- [Section F — Build flag changes](#section-f--build-flag-changes)
- [Appendix G — Performance & size](#appendix-g--performance--size)

---

## Section A — Module loading

### A1 — `dist/` layout: two variants, one assembled surface

v2 shipped a barrel module that lazily required one of several pre-built variants from `dist/`. v3 ships single- and multi-threaded variants behind one assembled package surface. The package root is an eagerly initialised, capability-selected instance; `libcascade/init` exposes the explicit factory.

**Before**

```ts
import { initOpenCascade } from 'opencascade.js';
import opencascade from 'opencascade.js/dist/opencascade.full.js';
const oc = await initOpenCascade({ mainJS: opencascade });
```

**After**

```ts
import oc from 'libcascade';
```

**Action**: drop any `mainJS` wiring. Use the eager package root, use
`libcascade/init` for lazy host selection, or import the fixed
`libcascade/single/init` / `libcascade/multi/init` entry for an explicit
variant.

### A2 — ESM-only with zero-configuration initialization

The package is `"type": "module"`. CommonJS entry points are gone. The eager
root and `createInstance` resolve the selected variant's adjacent WASM
automatically. Provide `locateFile` only when a bundler or deployment relocates
that asset.

The wasm binaries are exposed via matching subpath exports —
`libcascade/single/wasm` for the single-threaded binary and
`libcascade/multi/wasm` for the pthread-enabled binary — which are the only
supported ways to reach them from consumer code. `libcascade/wasm` remains a
single-threaded alias. The same identifiers work under Vite's `?url` suffix,
Node's `import.meta.resolve`, Bun, and Deno.

For the multi-threaded variant, import `createInstance` from `libcascade/multi/init`. Browser deployments require cross-origin isolation headers; see the [multi-threaded build guide](https://libcascade.xyz/docs/package/guides/multi-threading).

For Node ESM consumers:

```ts
import oc from 'libcascade';

using box = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
```

For a Vite / browser app, resolve the WASM URL through your bundler:

```ts
import { createInstance } from 'libcascade/single/init';
import wasmUrl from 'libcascade/single/wasm?url';

const oc = await createInstance({ locateFile: () => wasmUrl });
```

For the multi-threaded build (COOP/COEP-isolated deployments only):

```ts
import { createInstance } from 'libcascade/multi/init';
import wasmUrl from 'libcascade/multi/wasm?url';

const oc = await createInstance({ locateFile: () => wasmUrl });
```

**Action**: remove CommonJS `require()`. Import the eager root for zero-config
use, or call `createInstance`. If your bundler relocates WASM, wire `locateFile`
through the matching WASM subpath. `dist/*` deep paths are not public.

### A3 — Artifact filenames follow `<name>_<variant>`

The build artifacts are named for their variant. Every build in the toolchain —
libcascade's own included — emits `<config name>_<variant name>`, so the
single-threaded build is `opencascade_single` and the multi-threaded build is
`opencascade_multi`.

| v2 / v3 pre-release | v3 |
| --- | --- |
| `dist/opencascade_full.js` | `dist/opencascade_single.js` |
| `dist/opencascade_full.wasm` | `dist/opencascade_single.wasm` |
| `dist/opencascade_full.d.ts` | `dist/types.d.ts` |
| `dist/opencascade_full.js.symbols` | `dist/opencascade_single.js.symbols` |
| `dist/opencascade_full.build-manifest.json` | `dist/opencascade_single.build-manifest.json` |
| `dist/opencascade_full.provenance.json` | `dist/opencascade_single.provenance.json` |
| `dist/opencascade_full_multi.*` | `dist/opencascade_multi.*` |

**The supported subpath names remain stable, but initialization is now
explicit.** `libcascade` eagerly initializes the default variant;
`libcascade/init` preserves lazy, consumer-controlled initialization. The fixed
`libcascade/single/init` and `libcascade/multi/init` initializers and the
`libcascade/wasm`, `libcascade/single`, `libcascade/single/wasm`,
`libcascade/multi`, and `libcascade/multi/wasm` binary subpaths keep their
supported roles. These exports are the only supported way to reach a binary.

You are affected only if you bypassed them:

**Before**

```ts
// deep path into dist/ — never supported, and now broken
import init from 'libcascade/dist/opencascade_full.js';
const oc = await init({ locateFile: () => '/opencascade_full.wasm' });
```

**After**

```ts
import { createInstance } from 'libcascade/single/init';
import wasmUrl from 'libcascade/single/wasm?url';

const oc = await createInstance({ locateFile: () => wasmUrl });
```

**Action**: if you copy the binary into a static directory yourself (a Next.js
`public/` copy step, a CDN upload, a `locateFile` returning a hard-coded path),
rename the copied file and the string that points at it. Resolve the source
through `libcascade/single/wasm` or `libcascade/multi/wasm` rather than a `dist/`
path, and the filename stops being your problem.

---

## Section B — JS / TS API surface changes

### B1 — Suffix-free overloads

v2 exposed each C++ overload as its own `_N`-suffixed subclass (`gp_Pnt_2`, `gp_Pnt_3`, …) and required the consumer to pick the right one. v3 collapses every uniquely-arity overload behind the bare symbol with a value-based dispatcher; the runtime picks the right C++ overload from your argument types.

Reference smoke test: [`tests/smoke/smoke-suffix-free.test.ts`](tests/smoke/smoke-suffix-free.test.ts).

> **Perf note.** The val-based dispatcher's per-call cost is quantified in [BENCHMARKS.md §3 — Embind overload dispatch](BENCHMARKS.md#3--embind-overload-dispatch): ~264 ns per same-arity call, totalling ~5 µs per typical CAD render (0.003–0.011% of wall time).

**Before**

```ts
const p = new oc.gp_Pnt_3(1, 2, 3);
const dirFromXyz = new oc.gp_Dir_2(new oc.gp_XYZ(0, 0, 1));
const box = new oc.BRepPrimAPI_MakeBox_2(10, 20, 30);
const edge = new oc.BRepBuilderAPI_MakeEdge_3(p1, p2);
```

**After**

```ts
using p = new oc.gp_Pnt(1, 2, 3);
using dirFromXyz = new oc.gp_Dir(new oc.gp_XYZ(0, 0, 1));
using box = new oc.BRepPrimAPI_MakeBox(10, 20, 30);
using edge = new oc.BRepBuilderAPI_MakeEdge(p1, p2);
```

For genuinely ambiguous cases that share an arity (e.g. two constructors that both take three numbers but mean different things), the codegen still emits `_N` symbols — grep `dist/types.d.ts` to find the exact name.

**Action**: search-and-replace `_N` overload subclass names with the bare symbol. Most call sites collapse cleanly; the few that don't surface as TypeScript errors with the correct alternative spelling visible in IntelliSense.

### B2 — Output-parameter return shape: class outputs mutate in place; envelopes only when JS truly needs them

v2 surfaced every C++ method as its raw embind binding: caller-allocated class outputs that mutated in place, `{ current: 0 }` wrappers for primitive `&` outputs, and `new oc.Handle_<T>()` wrappers for `Handle<T>&` outputs. v3 emits the narrowest JS shape that faithfully represents each C++ method. Class output parameters (`gp_Pnt&`, `Bnd_Box&`, `GProp_GProps&`, `TopoDS_Shape&`, etc.) keep their v2 mutate-in-place mechanic — the caller's instance is mutated and read directly from the input variable, never echoed as a field on a return envelope. Primitive and enum outputs no longer need `{ current: 0 }` wrappers: pass any value of the type and read the result from a structured envelope. `Handle<T>&` outputs are elided entirely from the JS signature (see [§B3](#b3--non-const-handlet-output-positions-elided-from-the-js-signature)) and surface as envelope fields. Envelopes are emitted only when JavaScript genuinely needs a multi-field return: primitive/enum outputs, elided `Handle<T>&` outputs, or a mix of both alongside a native C++ return value.

Reference smoke tests: [`tests/smoke/smoke-output-params.test.ts`](tests/smoke/smoke-output-params.test.ts), [`tests/smoke/smoke-properties.test.ts`](tests/smoke/smoke-properties.test.ts), [`tests/smoke/smoke-output-params-disposal.test.ts`](tests/smoke/smoke-output-params-disposal.test.ts). Type-level contract: [`tests/output-params.test-d.ts`](tests/output-params.test-d.ts), [`tests/disposable-containers.test-d.ts`](tests/disposable-containers.test-d.ts). Bindgen-shape regression guard: [`tests/bindgen-output-shape.test.ts`](tests/bindgen-output-shape.test.ts).

**Decision tree** (the codegen applies this to every C++ method with output parameters; the resulting JS shape follows from the bullet that fires first):

| C++ return | C++ output params                                                   | Resulting JS shape                                                                                                                                                                                                                  |
| ---------- | ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Non-`void` | None                                                                | Native return (no envelope). `Curve(): Handle_Geom_Curve`                                                                                                                                                                           |
| Non-`void` | Class only (mutated in place)                                       | Native return. Read mutated classes from your input variables. `curve.D0(u, pt) → void`; `surface.D2(u, v, P, D1U, D1V, D2U, D2V, D2UV) → void`                                                                                     |
| `void`     | Class only                                                          | `void`. Read mutated classes from your input variables. `BRepBndLib.Add(shape, box, useTri) → void`                                                                                                                                 |
| Non-`void` | Primitives / enums / elided Handles (with or without class outputs) | Envelope with `returnValue` for the C++ return + one named field per non-class output. Class outputs are NOT echoed. A primitive-only `Surface.Bounds(u1, u2, v1, v2)` result is `{ U1: number; U2: number; V1: number; V2: number }`. |
| `void`     | Primitives / enums / elided Handles (with or without class outputs) | Envelope with the same shape minus `returnValue`                                                                                                                                                                                    |

**The six return-shape rules:**

1. **Class outputs never mirror into the return envelope.** When a method declares a class output (`gp_Pln&`, `gp_Pnt&`, `Bnd_Box&`, …), the caller's instance is mutated and read directly; the envelope (if any) carries only non-class outputs. Regression: `tests/bindgen-output-shape.test.ts > no envelope mirrors a concrete class output as a non-return field`.
2. **Class arguments are mutated in place.** Pass your own freshly-constructed `gp_Pnt` / `Bnd_Box` / `GProp_GProps` / `TopoDS_Shape` and read it back after the call. There is no second copy.
3. **Native return values surface directly when no envelope is required.** A method whose only outputs are class-typed (or none at all) returns its native C++ value (or `void`) — not an `{ returnValue }` wrapper.
4. **Envelopes only for primitives, elided Handles, and mixed cases.** The envelope exists when JS cannot otherwise see a primitive/Handle output, and only those non-class outputs become fields.
5. **The C++ return value lives at `envelope.returnValue`.** The name is reserved to avoid collision with OCCT parameters literally named `result` (roughly a dozen public OCCT methods declare a parameter under that name), letting both the C++ return and an OCCT-named `result` parameter coexist in the same envelope without one shadowing the other.
6. **JSDoc is explicit.** Class params that mutate in place get a `Mutated in place; read the updated value from this argument after the call.` suffix (appended to the OCCT Doxygen description when present). Envelope fields get a multi-line `@returns A result object with fields:` block.

**Placeholder conventions** (only relevant for envelope outputs — primitives and elided Handles):

| Slot type                                                                                  | Passes through as                                                                                                                                              |
| ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Primitive (`Standard_Real&`, `Standard_Integer&`, `Standard_Boolean&`)                     | Pass any value of the type (`0`, `0.0`, `false`); read the updated value from `envelope.<FieldName>`                                                           |
| Enum output (`TopAbs_State&`, `FairCurve_AnalysisCode&`)                                   | Pass any enum value (e.g. `oc.TopAbs_State.TopAbs_IN.value`); read from `envelope.<FieldName>`                                                                 |
| Concrete class output (`gp_Pnt&`, `gp_Vec&`, `Bnd_Box&`, `GProp_GProps&`, `TopoDS_Shape&`) | **Mutated in place** — construct it, pass it, read it back from your input variable. No envelope field.                                                        |
| `Handle<T>&` output (any class)                                                            | **Position elided from the JS signature** — see [§B3](#b3--non-const-handlet-output-positions-elided-from-the-js-signature). Read from `envelope.<FieldName>`. |

**Call-site migration table** (canonical cases — `_N` suffixes shown only where v2 emitted one; the exact suffix index varied by overload set):

| Method                                                                                                    | v2 (caller-allocated `{ current: 0 }` / Handle placeholders, `_N`-suffixed)                                                                                                                                              | v3 (minimal transformation)                                                                                                                                                                                                                            |
| --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Geom_Curve.D0` (class out, void return)                                                                  | `const pt = new oc.gp_Pnt(); curve.D0(u, pt); console.log(pt.X(), pt.Y(), pt.Z())`                                                                                                                                       | `curve.D0(u, pt); console.log(pt.X(), pt.Y(), pt.Z())` — identical mechanic                                                                                                                                                                            |
| `Geom_Curve.D2` (3 class outs, void return)                                                               | `curve.D2(u, p, v1, v2); console.log(p.X(), v1.X(), v2.X())` — caller allocates `p`, `v1`, `v2`                                                                                                                          | `curve.D2(u, p, v1, v2); console.log(p.X(), v1.X(), v2.X())` — identical mechanic                                                                                                                                                                      |
| `Geom_Surface.Bounds` (4 primitive outs, void return)                                                     | `const u1 = { current: 0 }, u2 = { current: 0 }, v1 = { current: 0 }, v2v = { current: 0 }; surface.Bounds(u1, u2, v1, v2v); console.log(u1.current, u2.current, v1.current, v2v.current)`                               | `const r = surface.Bounds(0, 0, 0, 0); console.log(r.U1, r.U2, r.V1, r.V2)` — primitives ride the non-disposable envelope; `{ current: 0 }` wrappers gone                                                                                             |
| `BRepGProp.VolumeProperties` (class out, native return)                                                   | `const props = new oc.GProp_GProps(); const epsilon = oc.BRepGProp.VolumeProperties(shape, props); console.log(props.Mass(), epsilon)`                                                                                  | `using props = new oc.GProp_GProps(); const epsilon = oc.BRepGProp.VolumeProperties(shape, props); console.log(props.Mass(), epsilon)` — identical mechanic; the caller-owned class is disposable                                                    |
| `BRepBndLib.Add` (class out, void return)                                                                 | `const box = new oc.Bnd_Box(); oc.BRepBndLib.Add(shape, box, useTri); console.log(box.IsVoid())`                                                                                                                         | `BRepBndLib.Add(shape, box, useTri); console.log(box.IsVoid())` — reuse the caller-allocated `box`                                                                                                                                                     |
| `BRep_Builder.MakeVertex` (class out, void return)                                                        | `const v = new oc.TopoDS_Vertex(); builder.MakeVertex(v, p, tol); console.log(v.IsNull())`                                                                                                                               | `builder.MakeVertex(v, p, tol); console.log(v.IsNull())` — identical mechanic                                                                                                                                                                          |
| `XCAFDoc_ColorTool.GetColor` (boolean return, class out)                                                  | `const color = new oc.Quantity_Color(); const hasColor = colorTool.GetColor_N(label, type, color); console.log(hasColor, color.Red(), color.Green(), color.Blue())`                                                      | `const hasColor = colorTool.GetColor(label, type, color); console.log(hasColor, color.Red(), color.Green(), color.Blue())` — class output stays caller-allocated; boolean return surfaces directly (no envelope: only output is a class)               |
| `BRep_Tool.Curve` (Handle return, 2 primitive outs, 1 class `loc` out)                                    | `const first = { current: 0 }, last = { current: 0 }; const handle = oc.BRep_Tool.Curve_N(edge, loc, first, last); console.log(handle, first.current, last.current)` — class `loc` caller-allocated, mutated in place    | `using r = BRep_Tool.Curve(edge, loc, 0, 0); console.log(r.returnValue, r.First, r.Last)` — class `loc` still mutated in place; primitives ride the envelope; native Handle return at `r.returnValue`                                                  |
| `XCAFDoc_ClippingPlaneTool.GetClippingPlane` (boolean return, 1 class out, 1 Handle out, 1 primitive out) | `const theName = new oc.Handle_TCollection_HAsciiString(); const theCapping = { current: false }; const hasPlane = tool.GetClippingPlane_N(label, plane, theName, theCapping); console.log(hasPlane, plane, theName, theCapping.current)` | `using r = tool.GetClippingPlane(label, plane, capping); console.log(r.returnValue, plane.<…>, r.theName, r.theCapping)` — `plane` mutated in place; Handle output elided ([§B3](#b3--non-const-handlet-output-positions-elided-from-the-js-signature)); envelope holds boolean return as `returnValue`, the Handle output, and the primitive `theCapping` |

How the C++ layer mutates a JS-supplied class argument: the codegen accepts the slot as `::emscripten::val`, then dereferences a raw-pointer cast back into the registered class instance:

```cpp
BRepBndLib::Add(S, *B.as<Bnd_Box*>(emscripten::allow_raw_pointers()), useTriangulation);
```

The `val::as<T*>(allow_raw_pointers())` + deref pattern is the only form that round-trips through embind without making a copy — `val::as<T&>()` falls back to `BindingType<T>` which copies by value and would silently lose mutations. The regression is locked down by `tests/bindgen-output-shape.test.ts > class outputs forward via *val::as<T*>(allow_raw_pointers())`.

**`using` is still required for envelope returns** that own C++ resources (Handle fields). Lint rules that enforce `using` on disposable return values are recommended for large codebases. A class-output-only method returning `void` does **not** require `using` on the call site (there is nothing disposable to track).

**Disposer idempotency** (relevant for try/finally migration paths): the envelope's `[Symbol.dispose]()` is one-shot per instance and alias-safe. Callers can invoke it manually inside try/finally **and** rely on `using` scope-exit to re-dispose without throwing `BindingError: <T> instance already deleted`.

**Action**:

1. Walk the decision tree above for each call site and determine the new return shape.
2. Class output params keep their v2 mechanic — caller-allocated, mutated in place, read back from your input variable. No code change beyond dropping any `_N` suffix on the method name.
3. For primitive / enum `&` output params: drop the `{ current: 0 }` (or `{ current: false }`, etc.) wrappers — pass any value of the type and read the result from `envelope.<FieldName>` instead of `arg.current`.
4. For `Handle<T>&` output params: stop allocating `new oc.Handle_<T>()` placeholders — drop the position from the call entirely and read the freshly-assigned Handle from `envelope.<FieldName>` (see [§B3](#b3--non-const-handlet-output-positions-elided-from-the-js-signature)).
5. Where the C++ method has a native return value and the envelope appears, read it as `envelope.returnValue`.
6. Adopt `using` on envelope returns and class returns that own C++ resources — v3 wires `[Symbol.dispose]()` into both. Calls that return `void` or a primitive don't need it.

### B3 — Non-const `Handle<T>&` output positions elided from the JS signature

Methods with non-const `Handle<T>&` output parameters no longer accept a JS-side placeholder for those positions. v3 drops the Handle position from the JS-facing signature entirely; the C++ optional_override lambda declares a stack-local null Handle internally and forwards it into the call by reference. The resulting wrapper is surfaced as a field on the return envelope, disposed by the envelope's `[Symbol.dispose]`.

Rationale: OCCT's contract guarantees that non-const `Handle<T>&` is output-only — C++ never reads the input. v2 required callers to allocate a placeholder Handle wrapper (`new oc.Handle_<T>()`) for each such position; that allocation was write-only from C++'s perspective and pure overhead from JS's. v3 elides those positions, eliminating the JS Embind wrapper and C++ `smart_ptr` allocation per call. Empirical benchmarks show ~2.29× wall-clock speedup and half the JS wrapper allocations on affected call sites.

Reference smoke test: [`tests/smoke/smoke-handle-output-elision.test.ts`](tests/smoke/smoke-handle-output-elision.test.ts).

**Before** (v2 — caller allocates a Handle placeholder for every `Handle<T>&` output position):

```ts
const poly = new oc.Handle_Poly_PolygonOnTriangulation();
const tri = new oc.Handle_Poly_Triangulation();
oc.BRep_Tool.PolygonOnTriangulation(edge, poly, tri, loc);
console.log(poly, tri); // populated in place by C++
// loc (a class output) is mutated in place — read from your local `loc`.
```

**After**:

```ts
using r = oc.BRep_Tool.PolygonOnTriangulation(edge, loc);
console.log(r.P, r.T); // freshly-assigned Handles owned by r's Symbol.dispose
// loc (a class output) is mutated in place — read its updated value directly,
// it is never echoed into r per the §B2 class-in-place rule.
```

Other affected signatures (full list materialises in `dist/types.d.ts`):

| Method                                                | v2 (caller allocates `new oc.Handle_<T>()` for each elided slot)                                                                                  | v3 (slot elided)                                             |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| `GeomInt_IntSS.BuildPCurves`                          | `BuildPCurves(f, l, Tol, S, C, new oc.Handle_Geom2d_Curve())`                                                                                     | `BuildPCurves(f, l, Tol, S, C)`                              |
| `ShapeAnalysis_Edge.TreatRLine`                       | `TreatRLine(RL, S1, S2, new oc.Handle_Geom_Curve(), new oc.Handle_Geom2d_Curve(), new oc.Handle_Geom2d_Curve(), tol)`                             | `TreatRLine(RL, S1, S2, tol)`                                |
| `ShapeConstruct.JoinCurves` (and many `New*` methods) | `NewCurve(edge, loc, tol, new oc.Handle_Geom_Curve())`                                                                                            | `NewCurve(edge, loc, tol)`                                   |
| `HelixGeom_BuilderApproxCurve3d.ApprHelix`            | `ApprHelix(t1, t2, pitch, rStart, taper, isCW, tol, new oc.Handle_Geom_Curve(), maxErr)`                                                          | `ApprHelix(t1, t2, pitch, rStart, taper, isCW, tol, maxErr)` |

(The exact Handle wrapper class name varied by method; the shape — one allocation per `Handle<T>&` output slot — was uniform across v2.)

**Action**:

1. Drop every non-const `Handle<T>&` argument from your call sites; the position is no longer part of the JS signature.
2. Stop allocating `new oc.Handle_<T>()` placeholders for output-only Handle slots — C++ never read them, and v3 has no slot to put them in.
3. Read the freshly-assigned Handle from `envelope.<FieldName>` on the returned envelope (in v2 you read it from the placeholder you passed in; v3 puts it on the envelope instead).

### B4 — Envelope return field naming: `envelope.returnValue`

Inside every envelope return ([§B2](#b2--output-parameter-return-shape-class-outputs-mutate-in-place-envelopes-only-when-js-truly-needs-them) row 4 and 5), the field that surfaces the C++ method's native return value is `returnValue`. The name is reserved to avoid collision with OCCT parameters literally named `result` — roughly a dozen public OCCT methods declare a parameter under that name, so the envelope keeps `returnValue` exclusively for the C++ method's native return and surfaces an OCCT-named `result` parameter as `envelope.result` without one shadowing the other.

Concretely:

- `BRep_Tool.Curve` (Handle return + primitive outs): `r.returnValue, r.First, r.Last`
- `XCAFDoc_ClippingPlaneTool.GetClippingPlane` (boolean return + Handle + primitive): `r.returnValue, r.theName, r.theCapping`
- `FairCurve_Batten.Compute` (`FairCurve_AnalysisCode` enum return + primitive outs): `r.returnValue, r.<paramOuts>`

Envelopes whose C++ return is `void` (e.g. `Geom_Surface.Bounds`) do not carry a `returnValue` field — they only carry the primitive/Handle outputs.

**Collision fallback** — if a future OCCT method declares a parameter named `returnValue`, the codegen falls back to a suffixed name (`returnValue_`) for the parameter so the C++ return always stays at `envelope.returnValue`. This makes `returnValue` the stable, documented field name across every release.

**Action**: when adopting the v3 envelope shape ([§B2](#b2--output-parameter-return-shape-class-outputs-mutate-in-place-envelopes-only-when-js-truly-needs-them)), read the native C++ return as `envelope.returnValue`. v2 surfaced the native return directly as the call expression's value (no envelope), so there is no field rename to apply — the change is structural, not a search-and-replace.

---

## Section C — WebAssembly exception handling

### C1 — Why this changed

v2's exception build wrapped every potentially-throwing call site in a JavaScript `invoke_*` trampoline (`-fexceptions` / `-sDISABLE_EXCEPTION_CATCHING=0`). That added ~80% gzipped binary overhead.

v3 uses native WASM exceptions (`-fwasm-exceptions`): the `throw` and `catch` instructions live in the WASM bytecode itself, the JS trampolines disappear, and the gzipped exception overhead drops to ~12%. The happy path has zero overhead.

The shipped `full.yml` build explicitly exports the helpers needed to decode and release exceptions from JS through `-sEXPORTED_RUNTIME_METHODS`. Browser support: see [Compatibility floor](#compatibility-floor).

### C2 — Catch / decode pattern (consumer-facing)

A caught exception is now a `WebAssembly.Exception`, decodable via the runtime helpers. The pattern below is the same one used by [`tests/smoke/smoke-exceptions.test.ts`](tests/smoke/smoke-exceptions.test.ts):

```ts
import oc from 'libcascade';

try {
  using cone = new oc.BRepPrimAPI_MakeCone(1, 0.5, 0); // Standard_DomainError: zero height
  void cone.Shape();
} catch (e) {
  if (e instanceof WebAssembly.Exception) {
    const [type, message] = oc.getExceptionMessage(e);
    console.error(`${type}: ${message}`);
    oc.decrementExceptionRefcount(e);
  } else if (typeof e === 'number') {
    // Legacy embind exception pointer — decode via OCJS helper
    const failure = oc.OCJS.getStandard_FailureData(e);
    console.error(failure.what());
  } else {
    throw e;
  }
}
```

Key APIs (all live on the OC instance returned by `init()`):

- `oc.getExceptionMessage(e)` → `[typeName, message]` tuple
- `oc.incrementExceptionRefcount(e)` / `oc.decrementExceptionRefcount(e)` → manual refcount management when storing the exception across scopes
- `oc.OCJS.getStandard_FailureData(ptr)` → richer decode for OCCT `Standard_Failure` payloads
- `oc.OCJS.exceptionsEnabled()` → feature-detect at runtime (returns `false` for builds without exceptions)

**Action**: replace any `try { … } catch (rawPointer)` style with the `WebAssembly.Exception` branch above. If you support both old and new builds, gate on `oc.OCJS.exceptionsEnabled()`.

### C3 — Build flag migration (custom builds only)

Skip this if you consume the published tarball.

**Before**

```yaml
emccFlags:
  - -fexceptions
  - -sDISABLE_EXCEPTION_CATCHING=0
```

**After**

```yaml
emccFlags:
  - -fwasm-exceptions
  - -sEXPORTED_RUNTIME_METHODS=["FS","wasmMemory","getExceptionMessage","incrementExceptionRefcount","decrementExceptionRefcount"]
```

Every `.o` file in your build must use the same exception ABI; mixing `-fexceptions` and `-fwasm-exceptions` produces an unresolved `__cpp_exception` import at link time. The `OCJS_EXCEPTIONS=1` env var (or any of the named configurations in [`build-configs/configurations.json`](build-configs/configurations.json) that set it) handles this consistently.

---

## Section D — OCCT V8 API breaking changes

OCCT itself moved from V7.6.2 → V8.0.0 (commit `d3056ef`). The classes and methods below are the V8 changes that surface in JavaScript code.

### D1 — `TopoDS` namespace bridge

OCCT's `TopoDS` is a C++ namespace, not a class, so Embind cannot bind it directly. v3 ships a bridge class registered under the name `TopoDS` that exposes the eight downcast functions as static methods.

Reference: [`tests/smoke/smoke-output-params.test.ts:126`](tests/smoke/smoke-output-params.test.ts); search the named symbol in `dist/types.d.ts`.

**Before** (v2 patterns varied — `prototype.Edge`, `_TopoDS_Edge`, manual `getPointer`, etc.)

```ts
const edge = oc._TopoDS_Edge(shape);
```

**After**

```ts
const edge = oc.TopoDS.Edge(shape);
const face = oc.TopoDS.Face(shape);
const wire = oc.TopoDS.Wire(shape);
const vertex = oc.TopoDS.Vertex(shape);
const shell = oc.TopoDS.Shell(shape);
const solid = oc.TopoDS.Solid(shape);
const compound = oc.TopoDS.Compound(shape);
const compSolid = oc.TopoDS.CompSolid(shape);
```

**Action**: rewrite cast call sites to `oc.TopoDS.<Kind>(shape)`.

### D2 — `Bnd_Box::Get` / `Bnd_Box2d::Get` removed

OCCT V8 dropped the six-output-parameter accessor in favour of corner getters.

Reference: search the named symbol in `dist/types.d.ts`.

**Before**

```ts
const xMin = { current: 0 },
  yMin = { current: 0 },
  zMin = { current: 0 };
const xMax = { current: 0 },
  yMax = { current: 0 },
  zMax = { current: 0 };
box.Get(xMin, yMin, zMin, xMax, yMax, zMax);
console.log(xMin.current, yMin.current, zMin.current);
```

**After**

```ts
using min = box.CornerMin();
using max = box.CornerMax();
console.log(min.X(), min.Y(), min.Z(), max.X(), max.Y(), max.Z());
```

`Bnd_Box2d` follows the same pattern with 2D `CornerMin()` / `CornerMax()` returning `gp_Pnt2d`.

**Action**: replace every `box.Get(…)` call with corner getters.

### D3 — `Poly_Triangulation` normals API

v2's `HasNormals()` + per-pass output reference is replaced by `HasNormals()` + value-returning `Normal(index)`.

Reference: search the named symbols in `dist/types.d.ts`.

**Before**

```ts
if (tri.HasNormals()) {
  for (let i = 1; i <= tri.NbNodes(); i++) {
    const normal = new oc.gp_Dir(0, 0, 1);
    tri.Normal(i, normal);
    consume(normal);
  }
}
```

**After**

```ts
if (tri.HasNormals()) {
  for (let i = 1; i <= tri.NbNodes(); i++) {
    using normal = tri.Normal(i); // returns gp_Dir
    consume(normal);
  }
}
```

To set normals, use `tri.SetNormal(i, gpDir)` (replaces v2's mutate-in-place callbacks).

**Action**: remove caller-allocated `gp_Dir` placeholders from normal iteration loops.

### D4 — `BRepMesh_IncrementalMesh` constructor signature

OCCT V8 reorganised the constructor overload set. The previously-common 5-arity convenience constructor is still available, but it now sits alongside additional `IMeshTools_Parameters`-based overloads, and the canonical signature has changed parameter order.

Reference: search the named symbols in `dist/types.d.ts`.

**Before** (v2 `_N`-suffixed dispatch)

```ts
const mesh = new oc.BRepMesh_IncrementalMesh_2(shape, 0.1, false, 0.5, false);
```

**After**

```ts
using mesh = new oc.BRepMesh_IncrementalMesh(shape, 0.1, false, 0.5, false);
// or with parameter object:
using params = new oc.IMeshTools_Parameters();
params.Deflection = 0.1;
params.Angle = 0.5;
using meshFromParams = new oc.BRepMesh_IncrementalMesh(shape, params);
```

**Action**: drop the `_N` suffix; if your call site looks ambiguous, check the matching overload arity in `dist/types.d.ts`.

### D5 — `TopoDS_Shape::HashCode` removed

OCCT V8 removed the member function `TopoDS_Shape::HashCode(upperBound)` in favour of `std::hash<TopoDS_Shape>`. There is no JS-side replacement in the published build.

**Before**

```ts
const bucket = shape.HashCode(1024);
```

**After (consumer-side)** — derive a bucket from a stable shape property you already track, or maintain an external `Map<TopoDS_Shape, number>` keyed by reference identity for the lifetime of the shape.

**After (custom build)** — if you need the original bucket-mod-N semantics,
put a wrapper in `wrappers/shape-hasher.cpp` and list it under
`additionalCppFiles`:

```cpp
#include <functional>
#include <TopoDS_Shape.hxx>

class ShapeHasher {
public:
  static int HashCode(const TopoDS_Shape& shape, int upperBound) {
    if (upperBound <= 0) return 0;
    size_t h = std::hash<TopoDS_Shape>{}(shape);
    return static_cast<int>((h % static_cast<size_t>(upperBound)) + 1);
  }
};
```

```yaml
additionalCppFiles:
  - wrappers/shape-hasher.cpp

mainBuild:
  bindings:
    - symbol: ShapeHasher
```

Then call it as `oc.ShapeHasher.HashCode(shape, 1024)`.

**Action**: remove `.HashCode()` calls; either accept the loss or rebuild a custom variant with the snippet above.

### D6 — Constructor and method "renumbering" advice is inverted from V7.x

OCCT V7.x-era v2 docs told consumers to read the `_N` suffix off the generated `.d.ts` and use it verbatim. v3's suffix-free overloads (Section B1) collapse most of those — so the new advice is:

1. Drop the `_N` suffix.
2. Only consult the `.d.ts` for the genuinely ambiguous cases that still emit suffixes (constructors / methods with two overloads sharing an arity).

If you have a working V7 codebase, search-and-replace `oc.gp_Pnt_3` → `oc.gp_Pnt` etc. and let TypeScript point out the few remaining ambiguous cases.

### D7 — Same-arity overload dispatch unified, legacy `int`/`size_t` pairs deduplicated

Every same-arity method-overload group is now backed by a **single** embind val-dispatcher per access mode. Previously each JS-distinguishable overload was registered as its own `.function("Name", select_overload<…>(…))` entry, and embind's method table — keyed on `(name, arity)` — silently dropped every registration except the last. The surviving overload was the only one reachable from JS, which manifested as confusing `BindingError` failures on calls that the `.d.ts` declared as valid (e.g. `XCAFDoc_ColorTool::SetColor(TopoDS_Shape, Quantity_Color, …)`, `NCollection_List_TopoDS_Shape::Append(TopoDS_Shape)`).

Two consumer-visible consequences:

1. **JS-indistinguishable primitive pairs are collapsed at codegen time.** OCCT V8's NCollection `size_t` API migration ([OCCT 8.0.0 release](https://dev.opencascade.org/content/open-cascade-technology-800-release)) introduced parallel `int`/`size_t` overloads for every indexed-container accessor (`NCollection_IndexedMap::FindKey`, `Substitute`, `RemoveLast` callsites, etc.). JS classifies both as `"number"`, so the dispatcher cannot distinguish them at runtime. The codegen now keeps the V8-modern `size_t` variant and drops the legacy `int` variant — only one entry survives per JS-equivalent signature. The `_N`-suffixed variants for these specific pairs are no longer emitted because there is no longer ambiguity to disambiguate.

2. **Mixed static + instance same-arity groups now emit both `class_function` and `function`.** A handful of OCCT classes expose `static` and non-`static` overloads with identical arity (e.g. `XCAFDoc_ColorTool::GetColor` has a `static GetColor(TDF_Label, …)` family and an instance `GetColor(TopoDS_Shape, …)` family with the same arity). Previously the entire group was registered as one instance `.function(…)` and `oc.Class.foo(...)` static call sites hit an arity mismatch. Both shapes now exist on the JS class: `oc.XCAFDoc_ColorTool.GetColor(label, type, color)` (static) and `colorTool.GetColor(shape, type, color)` (instance) both dispatch correctly.

```ts
// Before — only one survived, the rest BindingError'd at runtime.
const map = new oc.NCollection_IndexedMap_TopoDS_Shape_TopTools_ShapeMapHasher();
// ...
const key = map.FindKey_1(1); // worked
const key = map.FindKey_2(1); // worked
const key = map.FindKey(1); // ❌ TypeError: map.FindKey is not a function

// After — single primary entry, no suffixed variants for this group.
const key = map.FindKey(1); // ✅ dispatches to the size_t overload
```

**Action**: existing call sites that already used the unsuffixed name now succeed where they previously threw. If your code path explicitly references a `_1` / `_2` suffix on one of the JS-indistinguishable primitive-pair overloads (notably the V8 `int`/`size_t` NCollection accessors), drop the suffix — the bare name resolves to the `size_t` overload.

> **Perf note.** The unified val-dispatcher imposes ~264 ns per same-arity call (~6 ns on methods with no overload ambiguity), totalling ~5 µs of dispatch overhead per typical CAD render — 0.003–0.011% of wall time. Full matrix and reproducibility: [BENCHMARKS.md §3.2](BENCHMARKS.md#32--per-call-cost-same-arity-dispatch-tax-poc-overload-dispatch-cost).

---

## Section E — Removed symbol families

The following families are excluded from the v3 default build entirely. Calls compile against TypeScript as `undefined` member access (no `.d.ts` declaration).

| Family                                                | Why                                                                                       | Migration                                                                                                     |
| ----------------------------------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `OpenGl_*`, `Aspect_Window`, the rest of `TKOpenGl`   | The package targets headless CAD; interactive rendering is out of scope.                  | Render with your own engine (Three.js, Babylon, etc.) using triangulation extracted via `Poly_Triangulation`. |
| `TopOpe*`                                             | Deprecated in OCCT itself; superseded by `BOPAlgo_*` and `BRepAlgoAPI_*`.                 | Use `BRepAlgoAPI_Fuse` / `Cut` / `Common` / `Section`, or the lower-level `BOPAlgo_*` machinery.              |
| Several `Standard_Transient`-based legacy collections | Deprecated in OCCT V8; the auto-discovered `NCollection_*` variants cover the same cases. | Use the `NCollection_Array1_*` / `NCollection_Sequence_*` aliases that auto-discovery now emits.              |
| `GCE2d_*` aliases                                     | OCCT V8 normalised on `GC_*2d` spellings.                                                 | Use `GC_MakeCircle2d`, `GC_MakeArcOfCircle2d`, etc.                                                           |

If your application depends on any of these and you cannot migrate, build a custom variant from source that adds them to the YAML `bindings` list — the codegen still understands them, they are just excluded from the published `full.yml`.

---

## Section F — Build flag changes

Skip if you only consume the prebuilt tarball.

### F1 — Build CLI: `build-wasm.sh` with explicit subcommands and named configurations

v2's source build was driven by Python scripts inside the Docker image — the image's `ENTRYPOINT` was `src/buildFromYaml.py`, and invocation passed your YAML config path straight through. v3 collapses the entry surface into a single shell wrapper, `build-wasm.sh`, with explicit subcommands (`full`, `link`, `validate`) and an optional `--config <name>` flag that selects an optimisation profile from [`build-configs/configurations.json`](build-configs/configurations.json). The Docker image's `ENTRYPOINT` is now `build-wasm.sh`, so the same arguments pass through inside or outside Docker.

**Before** (v2 — Docker entrypoint runs `buildFromYaml.py` against your YAML; native builds called the Python scripts directly):

```bash
docker run --rm -v "$(pwd):/src" donalffons/opencascade.js /src/your-config.yml
# or, on a host with the source tree:
python3 src/buildFromYaml.py /path/to/your-config.yml
```

**After** (v3 — explicit subcommand, optional `--config` flag, same Docker / host parity):

```bash
docker run --rm -v "$(pwd):/src" ghcr.io/taucad/opencascade.js:beta \
  --config single-threaded full /src/your-config.yml
# or, on a host with the source tree:
./build-wasm.sh --config single-threaded full build-configs/full.yml
./build-wasm.sh --config single-threaded-smallest full build-configs/full.yml
./build-wasm.sh --config multi-threaded full build-configs/full.yml
./build-wasm.sh --config debug full build-configs/full.yml
```

The four shipped configurations (full env-var matrix in [BUILD_SYSTEM.md](BUILD_SYSTEM.md)) select compile and optimizer settings. Link-only flags remain explicit in each consumer YAML; `full.yml` uses native WASM exceptions, `EVAL_CTORS=2`, and Closure for the published single-threaded build:

| Name                       | Purpose                                                                                                              |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `single-threaded`          | What the published tarball is built with: `-O3`, baseline SIMD, BigInt, wasm-opt `-O4`, converge. Browser default.   |
| `single-threaded-smallest` | Size-tuned variant: `-Os` compile + wasm-opt `-O3`. Benchmark it against the target workload before shipping.       |
| `multi-threaded`           | `-O3` + SIMD + native exceptions, threading on. For COOP/COEP-isolated, SAB-enabled deployments.                     |
| `debug`                    | `-O0` compile + wasm-opt `-O0`, SIMD off, converge off. Fastest build for iteration — not for production.            |

v2 had no named-configuration system — the YAML's `emccFlags` block was the only knob, and consumers hand-tuned per build. v3's `--config <name>` layers curated defaults on top of your YAML; add your own entry to `configurations.json` if none of the shipped profiles fit.

### F2 — Reference `full.yml` bundled in the image; exceptions on by default

v2 shipped example YAML templates (`customBuild_example.yml` and friends) and expected consumers to hand-write their config from scratch. v3 bundles the complete reference `full.yml` inside the Docker image at `/opencascade.js/build-configs/full.yml`, so consumers can extract the exact symbol list used by the published tarball and trim it down. The reference YAML's `emccFlags` block carries v3's defaults: `-fwasm-exceptions`, explicit exception helpers in `-sEXPORTED_RUNTIME_METHODS`, `-sWASM_BIGINT`, `-sEVAL_CTORS=2`, `-msimd128`.

**v3 workflow** — extract the reference, trim, build:

```bash
# Extract the reference YAML out of the image
docker run --rm --entrypoint cat \
  ghcr.io/taucad/opencascade.js:beta \
  /opencascade.js/build-configs/full.yml > my-config.yml

# Edit my-config.yml to trim symbols, then build
docker run --rm -v "$(pwd):/src" ghcr.io/taucad/opencascade.js:beta \
  --config single-threaded full /src/my-config.yml
```

To build a non-exceptions variant, override `OCJS_EXCEPTIONS=0` on top of a shipped configuration (every named entry in `configurations.json` sets it to `1` by default in v3) so the env wins over the YAML's exception flags, or copy `full.yml` and strip the EH lines.

See the [trim-symbols guide](docs/guides/trim-symbols.md) for the full extract-trim-build workflow.

### F3 — Removed and renamed Emscripten flags

| Direction | Flag                                                               |
| --------- | ------------------------------------------------------------------ |
| Removed   | `-sUSE_ES6_IMPORT_META=0` (default in current Emscripten)          |
| Removed   | `-sDISABLE_EXCEPTION_CATCHING=0` (replaced by `-fwasm-exceptions`) |
| Removed   | `-fexceptions` (replaced by `-fwasm-exceptions`)                   |
| Removed   | `-sEXPORT_EXCEPTION_HANDLING_HELPERS` (replaced by explicit runtime-method exports) |
| Renamed   | `-sLLD_REPORT_UNDEFINED` → `-sERROR_ON_UNDEFINED_SYMBOLS=0`        |
| Added     | `-fwasm-exceptions` (default for `full.yml`)                       |
| Added     | exception helpers in `-sEXPORTED_RUNTIME_METHODS` (default for `full.yml`) |
| Added     | `-sWASM_BIGINT` (default for `full.yml`)                           |
| Added     | `-sEVAL_CTORS=2` (default for `full.yml`)                          |
| Added     | `-msimd128` (default for `full.yml`)                               |

Memory flags (`-sINITIAL_MEMORY=100MB`, `-sMAXIMUM_MEMORY=4GB`, `-sALLOW_MEMORY_GROWTH=1`) are unchanged.

---

## Appendix G — Performance & size

No consumer action — included for "is upgrading worth it" context.

### Performance vs. V7.6.2

Single-threaded, `-O3` link, no LTO.

| Workload           | Improvement   |
| ------------------ | ------------- |
| Primitives         | -3% to +2%    |
| Boolean operations | 22-31% faster |
| Fillets            | 16-19% faster |
| Sketches           | 9-13% faster  |
| Complex models     | 23-29% faster |

### Size (gzipped) vs. V7.6.2

| Build                  | V7.6.2   | V8 (v3) | Change |
| ---------------------- | -------- | ------- | ------ |
| Single (no exceptions) | 6.05 MB  | 5.65 MB | -6.6%  |
| With exceptions        | 10.42 MB | 6.35 MB | -39.1% |
| Exception overhead     | +72.2%   | +12.4%  | —      |
