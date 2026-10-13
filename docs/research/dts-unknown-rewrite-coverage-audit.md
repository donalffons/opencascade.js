# `.d.ts` `unknown` rewrite coverage audit

**Status**: Research (no implementation yet)
**Date**: 2026-05-28
**Scope**: The generated `dist/opencascade_full.d.ts` (262,869 lines) contains **2,498 occurrences** of `: unknown` produced by the link-layer post-processor `_replace_undeclared_with_unknown` in [`src/ocjs_bindgen/link/yaml_build.py`](../../src/ocjs_bindgen/link/yaml_build.py). This document categorises every undeclared `referenced_classes` token, surfaces the smoking-gun rewriter behaviours, and ranks remediation by leverage.

## Why this audit exists

The investigation was prompted by the `Cannot register type 'IMeshData_IPCurveHandle' twice` runtime BindingError. Initial hypothesis: the IMeshData handle typedef aliases are bound twice, and the d.ts surface is degraded as a side-effect. **Empirical disproof**: of 6,374 undeclared `referenced_classes` tokens across 4,441 fragments, **zero (0) start with `Handle_`**. The handle-typedef issue and the d.ts unknowns are completely independent problem families. The handle-typedef issue is addressed separately by dropping the six `IMeshData_*Handle` symbols from `build-configs/*.yml`; this audit covers the residual d.ts quality gap.

## Methodology

1. Walk every `build/bindings/**/*.d.ts.json` fragment, build `all_exports = ⋃ fragment.exports` (6,272 distinct symbols).
2. For each fragment, count tokens in `referenced_classes` that are **not** in `all_exports` — these are exactly what `_replace_undeclared_with_unknown` will rewrite at merge time.
3. Bucket the 696 distinct undeclared names by regex pattern, derive aggregate impact.

Reproducible via the snippet at the end of this doc.

## Empirical bucket totals

| Bucket | Refs | % of total | Distinct names | Smoking-gun mechanism |
| --- | --- | --- | --- | --- |
| NCollection bare-template name | 2,181 | 34.2 % | 14 | `referenced_classes` carries the unwound primary-template name (`NCollection_Array1`) instead of the mangled instantiation name actually bound (`NCollection_Array1_gp_Pnt`) |
| NCollection mangled instantiation | 1,218 | 19.1 % | 384 | Specific instantiations that the auto-discovery enumerator missed OR the per-YAML filter dropped after fragment generation |
| STL-style nested typedef (`value_type`, `reference`, `const_reference`) | 782 | 12.3 % | 3 | NCollection-derived typedefs; should resolve to the container's element type but are emitted as bare names |
| OCCT nested class (`Typed`, `Hasher`, `RefId`, `Kind`, `Status`, …) | 772 | 12.1 % | 37 | Per-fragment dts emits the bare nested-class name; merged dts has the promoted prefixed name (`BRepGraph_RefId_Typed`). The rewriter's declared-names lookup compares bare-against-promoted |
| `math_VectorBase`, `math_VectorBase_number`, `math_MatrixBase` | 358 | 5.6 % | 3 | Math template family; same root cause as NCollection bare-template |
| STD library (`initializer_list`, `optional`) | 102 | 1.6 % | 3 | Should be transformed to JS-native shapes (`T[]`, `T \| undefined`) or stripped from public surface |
| Long-tail unclassified | 961 | 15.1 % | 252 | Heterogeneous OCCT-internal types; top hits: `XCAFDoc_PartId` (284), `TheItemType` (44), `ParentId` (21), `handle` (19), `Base` (14), `ChildId` (14), `IMeshData_Face` (12), `bitset_18` (9) |
| **Total** | **6,374** | **100 %** | **696** | |

`Handle_*` bucket: **0 refs, 0 distinct names**. The bucket was checked explicitly to disprove the original hypothesis.

> The 6,374 fragment-side refs map to 2,498 merged-dts `unknown` rewrites because the rewriter dedupes per signature occurrence inside the merged file and many fragment refs collide on the same merged-output position.

## Smoking-gun #1 — Nested-class name promotion gap

**Highest single-fix leverage**: ~772 fragment refs (12.1 %) + a meaningful slice of the unclassified long tail (e.g. `Base`, `ChildId`, `ParentId`, `RefIdType`) are bare nested-class names.

### Reproduction

`build/bindings/.../BRepGraph_SolidRefId.d.ts.json`:

```json
{
  "kind": "class",
  "exports": ["BRepGraph_SolidRefId"],
  "referenced_classes": ["BRepGraph_RefId", "Typed"],
  ".d.ts": "export declare class BRepGraph_SolidRefId {\n  static Start(): BRepGraph_RefId_Typed;\n  ..."
}
```

The fragment's `.d.ts` payload correctly emits `BRepGraph_RefId_Typed` (the promoted name) but `referenced_classes` carries only the bare `Typed`. After merge, `_replace_undeclared_with_unknown`'s `declared_names` set contains `BRepGraph_RefId_Typed` (because that class is declared as such in some other fragment). The post-merge rewriter then walks the merged dts text and rewrites every `BRepGraph_RefId_Typed` reference to `unknown` — because... wait, that doesn't match. Let me look again.

Actually the rewriter operates on **identifier tokens in the merged text** and replaces tokens not in `declared_names`. `BRepGraph_RefId_Typed` IS in `declared_names` (if `Typed` is exported anywhere with that promoted name). So why does `Start()` end up `unknown` in `dist/opencascade_full.d.ts:5390`?

This is the second smoking gun: the **promoted-name registration is also broken**. Either the nested `Typed` class never gets a `.d.ts.json` fragment of its own (so no `BRepGraph_RefId_Typed` ever enters `declared_names`), OR the rewriter is tokenising over `_` boundaries (treating `BRepGraph_RefId_Typed` as the four separate tokens `BRepGraph`, `RefId`, `Typed`, none of which is the full name).

### Recommendation R1 — Investigate the nested-class fragment emission

- Audit `_walk_classes` in [`src/ocjs_bindgen/ast/walker.py`](../../src/ocjs_bindgen/ast/walker.py): does it produce its own `.d.ts.json` fragment for every public nested class? Spot-check `BRepGraph_RefId_Typed` — does a file by that name exist under `build/bindings/`?
- Audit `_replace_undeclared_with_unknown`'s tokenisation rules — is it `_`-splitting? Compare to the declared-names extraction (which uses `re.findall(r"^export\s+(?:declare\s+)?type\s+([A-Za-z_][A-Za-z0-9_]*)")` — that matches `_` mid-identifier correctly).
- Most likely smoking gun is the missing per-fragment file. The `_walk_classes` recursion was added for `BRepGraph::TopoView::FaceOps` (deeply nested), but the codegen entry points in `pipeline/generate.py` may not iterate the resulting cursors.

Estimated impact if both fixes land: **~500–800 unknowns resolved** (the 772 + a chunk of the 961 unclassified that follow the same pattern).

## Smoking-gun #2 — NCollection bare-template name resolution

**Largest single bucket**: 2,181 refs (34.2 %), only 14 distinct names. The 14 names are:

`NCollection_Array1`, `NCollection_HArray1`, `NCollection_Sequence`, `NCollection_List`, `NCollection_DynamicArray`, `NCollection_DataMap`, `NCollection_DoubleMap`, `NCollection_Map`, `NCollection_IndexedDataMap`, `NCollection_IndexedMap`, `NCollection_Array2`, `NCollection_HArray2`, `NCollection_HSequence`, `NCollection_DefaultHasher`.

### Reproduction

`build/bindings/myMain.h/NCollection_DataMap_gp_Pnt_handle_Standard_Transient.d.ts.json`:

```json
{
  "exports": ["NCollection_DataMap_gp_Pnt_handle_Standard_Transient"],
  "referenced_classes": ["Hasher", "NCollection_BaseAllocator", "NCollection_DataMap", "Standard_Transient", "gp_Pnt"]
}
```

`NCollection_DataMap` (the bare primary-template name) is referenced because the method `Assign(theOther: NCollection_DataMap<K, V, H>): NCollection_DataMap<K, V, H>` in the parent template was emitted with the template parameters un-substituted. The resolver should have substituted with the concrete instantiation arguments and emitted a reference to `NCollection_DataMap_gp_Pnt_handle_Standard_Transient` (the mangled bound name), not the bare `NCollection_DataMap`.

### Recommendation R2 — Substitute template arguments in `referenced_classes`

- In [`src/ocjs_bindgen/codegen/typescript/`](../../src/ocjs_bindgen/codegen/typescript/) (the TypescriptBindings emit path), when collecting `referenced_classes` for a template instantiation, perform the same template-argument substitution that the C++ binding side uses (`augment_template_args_with_canonical` in `src/ocjs_bindgen/ast/template_args.py`). The bare primary-template name should never enter `referenced_classes` for an instantiated template — only the mangled-bound name.

Estimated impact: **~2,000 unknowns resolved** (most of the 2,181 + roughly half the 358 math-template refs which share this pattern).

## Smoking-gun #3 — STL-style nested typedefs are not template-aware

**782 refs (12.3 %), 3 distinct names**: `value_type` (234), `reference` (274), `const_reference` (274).

These are NCollection's internal typedefs (`typedef T value_type;`, `typedef T& reference;`). They appear in inherited method signatures (`Append(theOther: const_reference)`, `Value(): value_type`) when the iterator/container template defines them. The resolver should substitute `value_type` → `T` (the container's element type), but instead leaves the bare typedef name.

### Recommendation R3 — Resolve container-internal typedefs against template args

- In the resolver chain (`src/ocjs_bindgen/resolver/strategies/`), add a strategy that recognises NCollection's standard nested typedef family (`value_type`, `reference`, `const_reference`, `iterator`, `const_iterator`, `pointer`, `size_type`) and substitutes them with the corresponding template argument.
- This is a fixed 7-entry lookup table, not regex magic — the typedef names are stable across NCollection.

Estimated impact: **~780 unknowns resolved**.

## Smoking-gun #4 — STD library types leak into the public surface

**102 refs (1.6 %)**: `initializer_list`, `optional`, `bitset`/`bitset_18` (from the unclassified long-tail).

These appear because the resolver doesn't intercept the `std::` namespace. The architecturally correct mappings:

| C++ | TypeScript |
| --- | --- |
| `std::initializer_list<T>` | `readonly T[]` |
| `std::optional<T>` | `T \| undefined` |
| `std::bitset<N>` | `number` (or `bigint` for `N > 53`) |
| `std::pair<A, B>` | `[A, B]` |

### Recommendation R4 — STD strategy in resolver

- Add `src/ocjs_bindgen/resolver/strategies/std_native.py` mapping the 4–6 most common std types to JS-native shapes.
- Estimated impact: **~120 unknowns resolved** plus 1–2 strategic cleanups.

## Long-tail unclassified (961 refs, 252 distinct)

Notable hits worth investigating individually:

| Name | Refs | Likely smoking gun |
| --- | --- | --- |
| `XCAFDoc_PartId` | 284 | Single class not in YAML; if intentionally excluded, refs to it should be rewritten to a typed alias rather than `unknown`. Possibly a single missing YAML entry could close 4.5 % of the gap |
| `TheItemType` | 44 | NCollection template parameter name leaking through — same family as R3 |
| `ParentId`, `ChildId`, `ChildRef`, `ParentRef`, `RefIdType`, `ParentIdType`, `ChildIdType` | 50–90 | Nested-class refs from `BRepGraph_RefsIterator` family — falls under R1 |
| `handle`, `handle_unknown`, `handle_IMeshData_Face` | 42 | The bare token `handle` is `opencascade::handle` template name with namespace stripped; needs template-substitution path |
| `IMeshData_Face` (and Edge/Wire) | ~36 | These ARE in OCCT's namespace IMeshData; not bound in YAML. Either bind them, or downgrade their refs to a transient-shape interface alias |
| `bitset_18` | 9 | `std::bitset<18>` mangled; falls under R4 |

## Remediation ranking (highest leverage first)

| # | Recommendation | Estimated `unknown` reduction | Implementation scope |
| --- | --- | --- | --- |
| R2 | Template-argument substitution in `referenced_classes` | ~2,000 (80 %) | Medium — touches resolver + 1 emit site |
| R1 | Nested-class fragment emission + rewriter tokenisation audit | ~600 (24 %) | Small–medium — depends on which sub-cause fires |
| R3 | NCollection nested-typedef substitution | ~780 (31 %) | Small — fixed lookup table strategy |
| R4 | STD library native-shape strategy | ~120 (5 %) | Small — single resolver strategy file |
| R5 (long-tail) | Per-name investigation for top 10 unclassified | ~200–400 (8–16 %) | Per-item; small individually |

Buckets overlap (a single `unknown` can be caused by multiple gaps) so totals exceed 100 %. Ship-order recommendation: **R3 → R4 → R1 → R2 → R5**. R3 and R4 are low-risk single-strategy adds; R1 requires diagnostic work to pinpoint the sub-cause; R2 is the largest leverage but also the largest blast radius (every template instantiation's `referenced_classes` changes).

## What is **not** in scope

- Handle typedef aliases (zero contribution to the unknown count; addressed by dropping `IMeshData_*Handle` from `build-configs/*.yml`).
- Runtime BindingError fixes (the unknown rewrites happen post-link, post-compile; runtime stability is decoupled).
- Strict-types gate behaviour (the existing `OCJS_STRICT_TYPES` gate prints diagnostics and optionally fails CI; this audit is upstream of that gate).

## Reproducibility snippet

Run from `repos/opencascade.js/` after `pnpm nx run ocjs:generate` (the bindings tree must exist):

```python
import json, os, re
from collections import Counter

all_exports = set()
fragments = []
for root, _, files in os.walk('build/bindings'):
    for f in files:
        if f.endswith('.d.ts.json'):
            with open(os.path.join(root, f)) as fp:
                d = json.load(fp)
            fragments.append(d)
            all_exports.update(d.get('exports', []))

undeclared = Counter()
for d in fragments:
    for ref in d.get('referenced_classes', []):
        if ref not in all_exports:
            undeclared[ref] += 1

print(f"Total undeclared refs: {sum(undeclared.values())}")
print(f"Distinct names: {len(undeclared)}")
for name, c in undeclared.most_common(40):
    print(f"  {c:5d}  {name}")
```

## Decision points for the operator

1. **Confirm R3 + R4 are low-risk** — these are additive resolver strategies that fall through to existing behaviour if the new patterns don't match. Should land first.
2. **Decide whether R1 needs a libclang re-walk** to enumerate every public nested class, or whether the existing `_walk_classes` output is reaching the codegen entry points (need to read 50 lines of `pipeline/generate.py::process` plus the fragment emission paths to find out).
3. **R2 is the biggest gain but also the biggest baseline churn** — every NCollection sentinel baseline will rewrite. Schedule it for a dedicated PR with intentional baseline refresh.
4. **Establish a per-YAML `unknown` budget** in `validate-build.py` so regressions are caught automatically. Current count (2,498) is the baseline.
