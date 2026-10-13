#!/usr/bin/env python3
"""Sub-2b regression-pin generator (NO9).

Emits one regression test file per class flagged by the rule 2
sibling-aliasing detector. Each pin exercises the JS call shapes that
would have triggered the sub-2b shadow bug before Phase 1:

* construct via the smaller-arity ctor with the value that would coerce;
* construct via the larger-arity ctor with the same value at the same
  prefix position;
* assert both calls return separate objects.

The generator emits Vitest ``.test.ts`` files that run against the
actual WASM binding artefacts via the smoke-suite helpers
(`initOC` / `getOC` / `wasmExists`). Pure-Python sentinel tests
covering the detector logic live alongside in
``tests/sentinel/test_rule_2_sibling_aliasing.py`` (NO2). Together,
NO2 guards the detector and NO9 guards construction through both call
shapes. The generated objects expose no uniform branch marker, so NO9
does not independently prove which C++ constructor branch ran.

The vitest harness picks these up automatically via the
``tests/**/*.test.ts`` include glob in ``vitest.config.ts``; the
``test:regression`` script in ``package.json`` provides a narrow
target for CI / local runs.

Production sub-2b inventory (19 instances across 14 classes / 7
modules) is transcribed verbatim from
``tau:docs/research/ocjs-occt-surface-audit.md`` § "Sub-2b Enumeration
(Row 8)". If OCCT version drift adds or removes sub-2b classes, this
inventory must be re-derived from a fresh audit; the regression-pin
generator does NOT re-run the detector against live source (that
requires the vendored libclang toolchain and a fresh AST parse).

Usage::

    python scripts/generate-sub2b-regression-pins.py

By default writes to ``tests/regression/sub-2b/``. Each test file is
named ``test_<ClassName>.test.ts``. The generator is idempotent —
re-runs overwrite the existing files with the latest template.
"""

from __future__ import annotations

import argparse
import sys
from dataclasses import dataclass
from pathlib import Path

# ---------------------------------------------------------------------------
# Inventory — production sub-2b instances per the surface audit.
# ---------------------------------------------------------------------------


@dataclass(frozen=True)
class Sub2bInventoryEntry:
    """One sub-2b conflict pair from the surface audit.

    Attributes:
      class_name: JS-visible class name as bound by embind.
      smaller_args_js: Pseudo-JS argument list for the smaller-arity
        ctor (used in the regression pin's smaller-call). The values
        chosen must coerce in JS to the smaller ctor's parameter types
        but be JS-distinguishable from the larger ctor's first
        parameter type.
      larger_args_js: Pseudo-JS argument list for the larger-arity ctor.
      discriminator_index: Index into ``larger_args_js`` whose value
        the test author can introspect to confirm the larger ctor ran
        (typically slot 0, which is the discriminating parameter the
        rule 2 detector pivots on).
      module_name: TK-module / package name from the audit (for
        traceability in failures).
      skip_reason: Optional reason to skip this pin (e.g. unbindable
        template parameter type makes the constructor unreachable
        from JS regardless of dispatch). When set, the emitted test
        becomes ``it.skip`` with a structured rationale rather than
        actually invoking the constructor.
    """

    class_name: str
    smaller_args_js: str
    larger_args_js: str
    discriminator_index: int
    module_name: str
    skip_reason: str = ""


INVENTORY: tuple[Sub2bInventoryEntry, ...] = (
    Sub2bInventoryEntry(
        class_name="TDF_Transaction",
        smaller_args_js="undefined",
        larger_args_js="dataHandle, undefined",
        discriminator_index=0,
        module_name="TKLCAF",
    ),
    Sub2bInventoryEntry(
        class_name="math_BrentMinimum",
        smaller_args_js="theTolX, undefined, undefined",
        larger_args_js="theTolX, theTolF, undefined, undefined",
        discriminator_index=1,
        module_name="TKMath",
    ),
    Sub2bInventoryEntry(
        class_name="BRepFill_ComputeCLine",
        smaller_args_js=(
            "undefined, undefined, undefined, undefined, "
            "undefined, undefined, undefined"
        ),
        larger_args_js=(
            "multiLine, undefined, undefined, undefined, undefined, "
            "undefined, undefined, undefined"
        ),
        discriminator_index=0,
        module_name="TKBool",
    ),
    Sub2bInventoryEntry(
        class_name="Geom2dAPI_InterCurveCurve",
        smaller_args_js="curve1, undefined",
        larger_args_js="curve1, curve2, undefined",
        discriminator_index=1,
        module_name="TKGeomAlgo",
    ),
    Sub2bInventoryEntry(
        class_name="GeomInt_TheComputeLineBezierOfWLApprox",
        smaller_args_js=(
            "vector, undefined, undefined, undefined, undefined, "
            "undefined, undefined, undefined"
        ),
        larger_args_js=(
            "multiLine, vector, undefined, undefined, undefined, "
            "undefined, undefined, undefined, undefined"
        ),
        discriminator_index=0,
        module_name="TKGeomAlgo",
        skip_reason=(
            "Reaches an unbound base class (`math_VectorBase<double>`, "
            "mangled 15math_VectorBaseIdE) that the bindgen does not "
            "expose. The constructor cannot be invoked from JS regardless "
            "of dispatch — every call shape would throw `Cannot construct "
            "... due to unbound types`. Re-enable when the template base "
            "is filter-included OR these classes are filter-excluded "
            "at the bindgen layer."
        ),
    ),
    Sub2bInventoryEntry(
        class_name="GeomInt_TheComputeLineOfWLApprox",
        smaller_args_js=(
            "vector, undefined, undefined, undefined, undefined, "
            "undefined, undefined, undefined"
        ),
        larger_args_js=(
            "multiLine, vector, undefined, undefined, undefined, "
            "undefined, undefined, undefined, undefined"
        ),
        discriminator_index=0,
        module_name="TKGeomAlgo",
        skip_reason=(
            "Reaches an unbound base class (`math_VectorBase<double>`, "
            "mangled 15math_VectorBaseIdE) that the bindgen does not "
            "expose. The constructor cannot be invoked from JS regardless "
            "of dispatch — every call shape would throw `Cannot construct "
            "... due to unbound types`. Re-enable when the template base "
            "is filter-included OR these classes are filter-excluded "
            "at the bindgen layer."
        ),
    ),
    Sub2bInventoryEntry(
        class_name="IMeshData_CircleCellFilter",
        smaller_args_js="undefined, undefined",
        larger_args_js="cellCount, undefined, undefined",
        discriminator_index=0,
        module_name="TKMesh",
    ),
    Sub2bInventoryEntry(
        class_name="IMeshData_VertexCellFilter",
        smaller_args_js="undefined, undefined",
        larger_args_js="cellCount, undefined, undefined",
        discriminator_index=0,
        module_name="TKMesh",
    ),
    Sub2bInventoryEntry(
        class_name="BRepApprox_TheComputeLineBezierOfApprox",
        smaller_args_js=(
            "vector, undefined, undefined, undefined, undefined, "
            "undefined, undefined, undefined"
        ),
        larger_args_js=(
            "multiLine, vector, undefined, undefined, undefined, "
            "undefined, undefined, undefined, undefined"
        ),
        discriminator_index=0,
        module_name="TKTopAlgo",
        skip_reason=(
            "Reaches an unbound base class (`math_VectorBase<double>`, "
            "mangled 15math_VectorBaseIdE) that the bindgen does not "
            "expose. The constructor cannot be invoked from JS regardless "
            "of dispatch — every call shape would throw `Cannot construct "
            "... due to unbound types`. Re-enable when the template base "
            "is filter-included OR these classes are filter-excluded "
            "at the bindgen layer."
        ),
    ),
    Sub2bInventoryEntry(
        class_name="BRepApprox_TheComputeLineOfApprox",
        smaller_args_js=(
            "vector, undefined, undefined, undefined, undefined, "
            "undefined, undefined, undefined"
        ),
        larger_args_js=(
            "multiLine, vector, undefined, undefined, undefined, "
            "undefined, undefined, undefined, undefined"
        ),
        discriminator_index=0,
        module_name="TKTopAlgo",
        skip_reason=(
            "Reaches an unbound base class (`math_VectorBase<double>`, "
            "mangled 15math_VectorBaseIdE) that the bindgen does not "
            "expose. The constructor cannot be invoked from JS regardless "
            "of dispatch — every call shape would throw `Cannot construct "
            "... due to unbound types`. Re-enable when the template base "
            "is filter-included OR these classes are filter-excluded "
            "at the bindgen layer."
        ),
    ),
    Sub2bInventoryEntry(
        class_name="BRepGProp_Face",
        smaller_args_js="true",
        larger_args_js="face, true",
        discriminator_index=0,
        module_name="TKTopAlgo",
    ),
    Sub2bInventoryEntry(
        class_name="Approx_FitAndDivide",
        smaller_args_js=(
            "undefined, undefined, undefined, undefined, "
            "undefined, undefined, undefined"
        ),
        larger_args_js=(
            "fn, undefined, undefined, undefined, undefined, "
            "undefined, undefined, undefined"
        ),
        discriminator_index=0,
        module_name="TKGeomBase",
    ),
    Sub2bInventoryEntry(
        class_name="Approx_FitAndDivide2d",
        smaller_args_js=(
            "undefined, undefined, undefined, undefined, "
            "undefined, undefined, undefined"
        ),
        larger_args_js=(
            "fn, undefined, undefined, undefined, undefined, "
            "undefined, undefined, undefined"
        ),
        discriminator_index=0,
        module_name="TKGeomBase",
    ),
    Sub2bInventoryEntry(
        class_name="Geom2dConvert_CompCurveToBSplineCurve",
        smaller_args_js="undefined",
        larger_args_js="boundedCurve, undefined",
        discriminator_index=0,
        module_name="TKGeomBase",
    ),
    Sub2bInventoryEntry(
        class_name="GeomConvert_CompCurveToBSplineCurve",
        smaller_args_js="undefined",
        larger_args_js="boundedCurve, undefined",
        discriminator_index=0,
        module_name="TKGeomBase",
    ),
)


# ---------------------------------------------------------------------------
# Classes excluded from binding generation — no pin is emitted for these.
# ---------------------------------------------------------------------------
#
# These four classes are internal `Approx_ComputeLine` template instantiations
# (Walking-Line surface/surface intersection + B-Rep approximation helpers).
# Every constructor overload takes a `const math_Vector&`, whose underlying
# type `math_VectorBase<double>` (mangled `15math_VectorBaseIdE`) is NOT bound:
# template-typedef discovery is gated on the NCollection-container allowlist and
# the generic-discovery follow-up never landed. Every JS call shape therefore
# throws `Cannot construct ... due to unbound types`, so the classes are
# unreachable from JS and have been filter-excluded from the bindgen
# (see `bindgen-filters.yaml`). They produce no `class_<>` registration after
# the next WASM rebuild, so a sub-2b dispatch pin would test a non-existent
# binding. Skip them here so regeneration stays idempotent and never
# re-introduces the retired pins.
_BINDGEN_EXCLUDED_CLASSES = frozenset(
    {
        "BRepApprox_TheComputeLineOfApprox",
        "BRepApprox_TheComputeLineBezierOfApprox",
        "GeomInt_TheComputeLineOfWLApprox",
        "GeomInt_TheComputeLineBezierOfWLApprox",
    }
)


def _validate_inventory_count():
    # Audit lists 19 instances across 14 classes; the inventory above
    # deduplicates duplicate-instance-per-class rows (e.g. the
    # GeomInt / BRepApprox classes each have 2 instances per the audit
    # but they share a class name and dispatch through the same
    # constructor binding). 15 unique classes here is intentional:
    # the duplicate instances do not need separate regression pins.
    n = len(INVENTORY)
    expected_min = 14
    expected_max = 19
    if not (expected_min <= n <= expected_max):
        raise AssertionError(
            f"INVENTORY size {n} outside expected range "
            f"[{expected_min}..{expected_max}] — audit drift suspected. "
            f"Re-derive via the surface audit's sub-2b enumeration."
        )


_TEMPLATE = """\
/**
 * Auto-generated by ``scripts/generate-sub2b-regression-pins.py``.
 * Verifies that overlapping smaller- and larger-arity calls to
 * ``{class_name}`` return separate objects.{skip_block_doc}
 */
import {{ describe, it, expect, beforeAll }} from 'vitest';
import {{ initOC, getOC, wasmExists }} from '../../smoke/helpers.js';

const SKIP_REASON = {skip_reason_literal};

describe.skipIf(!wasmExists)(
  'Sub-2b regression pin: {class_name} ({module_name})',
  () => {{
    beforeAll(async () => {{
      await initOC();
    }});

    const runner = SKIP_REASON ? it.skip : it;
    runner(
      `smaller-ctor and larger-ctor calls return separate objects${{SKIP_REASON ? ` — SKIPPED: ${{SKIP_REASON}}` : ''}}`,
      () => {{
        const oc = getOC();
        // Typed class accessor — the sub-2b conflict pair is constructed via
        // `Reflect.construct` so the placeholder/spread argument lists (several
        // of which are intentionally arity- or type-mismatched pre-Phase-4) do
        // not require a type-suppression cast. Successful construction and
        // distinct object identities are what the pin measures.
        const Cls = oc.{class_name};
        expect(typeof Cls).toBe('function');
{fixture_block}        using smaller = Reflect.construct(Cls, [{smaller_args}]);
        using larger = Reflect.construct(Cls, [{larger_args}]);
        expect(smaller).toBeDefined();
        expect(larger).toBeDefined();
        expect(smaller).not.toBe(larger);
      }},
    );
  }},
);
"""


# Non-disposable placeholders rendered inline as array elements. Primitives
# and the OCCT placeholders we cannot fabricate without broader context
# (rendered as `undefined` so the pin fails loudly at the dispatch level once
# Phase 4 ships and these are replaced with real fixtures).
_INLINE_MAP = {
    "true": "true",
    "false": "false",
    "undefined": "undefined",
    "null": "null",
    "face": "undefined /* face placeholder — supply via TopExp_Explorer post-Phase-4 */",
    "vector": "undefined /* math_Vector placeholder — supply post-Phase-4 */",
    "multiLine": "undefined /* MultiLine placeholder — supply post-Phase-4 */",
    "fn": "undefined /* AppCont_Function placeholder — supply post-Phase-4 */",
    "cellCount": "8",
    "theTolX": "1e-6",
    "theTolF": "1e-6",
}

# Disposable OCCT fixtures. Each is materialised in the TEST BODY as a sequence
# of `using` declarations (every sub-disposable bound to its own `using`), then
# referenced by name in the `Reflect.construct` argument array. This is the
# only form accepted by `ocjs-lint/require-using-on-disposable`: inline
# `new oc.X(...)` — even wrapped in `stack.use(...)` — is flagged as an unbound
# disposable, whereas a `using`-bound identifier passed by reference is clean
# AND deterministically freed at scope exit (no leak).
#
# `setup` is an ordered list of (var_name, init_expr) pairs; `ref` is the
# identifier referenced in the argument array.
_DISPOSABLE_FIXTURES = {
    "dataHandle": {
        "ref": "dataHandle",
        "setup": [("dataHandle", "new oc.TDF_Data()")],
    },
    "curve1": {
        "ref": "curve1",
        "setup": [
            ("curve1Pnt", "new oc.gp_Pnt2d(0, 0)"),
            ("curve1Dir", "new oc.gp_Dir2d(1, 0)"),
            ("curve1", "new oc.Geom2d_Line(curve1Pnt, curve1Dir)"),
        ],
    },
    "curve2": {
        "ref": "curve2",
        "setup": [
            ("curve2Pnt", "new oc.gp_Pnt2d(0, 0)"),
            ("curve2Dir", "new oc.gp_Dir2d(0, 1)"),
            ("curve2", "new oc.Geom2d_Line(curve2Pnt, curve2Dir)"),
        ],
    },
    "boundedCurve": {
        "ref": "boundedCurve",
        "setup": [
            ("boundedCurvePnt", "new oc.gp_Pnt2d(0, 0)"),
            ("boundedCurveDir", "new oc.gp_Dir2d(1, 0)"),
            ("boundedCurveLine", "new oc.Geom2d_Line(boundedCurvePnt, boundedCurveDir)"),
            ("boundedCurve", "new oc.Geom2d_TrimmedCurve(boundedCurveLine, 0, 1)"),
        ],
    },
}


def _resolve_args(arg_csv: str) -> tuple[list[str], list[str]]:
    """Resolve a CSV of JS arg identifiers into (arg_exprs, fixture_keys).

    ``arg_exprs`` are the array-element expressions (inline literals or the
    ``ref`` name of a disposable fixture). ``fixture_keys`` lists the
    disposable-fixture placeholders used, in first-seen order, so the caller
    can emit their ``using`` setup once in the test body.
    """
    parts = [p.strip() for p in arg_csv.split(",") if p.strip()]
    arg_exprs: list[str] = []
    fixture_keys: list[str] = []
    for p in parts:
        if p in _DISPOSABLE_FIXTURES:
            arg_exprs.append(_DISPOSABLE_FIXTURES[p]["ref"])
            fixture_keys.append(p)
        else:
            arg_exprs.append(_INLINE_MAP.get(p, p))
    return arg_exprs, fixture_keys


def _json_literal(value: str) -> str:
    """Render a Python string as a JS string literal (single-quoted, escaped)."""
    import json

    if not value:
        return "''"
    # Wrap as JSON (double-quoted, JSON-escaped), then return verbatim — TS
    # accepts JSON-style string literals.
    return json.dumps(value)


def emit_pin(entry: Sub2bInventoryEntry, target_dir: Path) -> Path:
    target = target_dir / f"test_{entry.class_name}.test.ts"
    skip_block_doc = ""
    if entry.skip_reason:
        skip_block_doc = (
            "\n *\n * SKIPPED: " + entry.skip_reason
        )

    smaller_args, smaller_fix = _resolve_args(entry.smaller_args_js)
    larger_args, larger_fix = _resolve_args(entry.larger_args_js)

    # Emit each disposable fixture's `using` setup once, in first-seen order
    # across both call shapes (smaller then larger). Dedup by fixture key and
    # by emitted variable name so shared fixtures (e.g. `curve1` used by both
    # ctors) are built a single time.
    seen_keys: set[str] = set()
    emitted_vars: set[str] = set()
    fixture_lines: list[str] = []
    for key in [*smaller_fix, *larger_fix]:
        if key in seen_keys:
            continue
        seen_keys.add(key)
        for var, init_expr in _DISPOSABLE_FIXTURES[key]["setup"]:
            if var in emitted_vars:
                continue
            emitted_vars.add(var)
            fixture_lines.append(f"        using {var} = {init_expr};")
    fixture_block = ("\n".join(fixture_lines) + "\n") if fixture_lines else ""

    target.write_text(_TEMPLATE.format(
        class_name=entry.class_name,
        module_name=entry.module_name,
        smaller_args=", ".join(smaller_args),
        larger_args=", ".join(larger_args),
        skip_reason_literal=_json_literal(entry.skip_reason),
        skip_block_doc=skip_block_doc,
        fixture_block=fixture_block,
    ))
    return target


def emit_index(target_dir: Path, emitted: list[Path]) -> Path:
    """Write a manifest listing every regression pin so the CI runner
    can discover them without re-running the generator."""
    manifest = target_dir / "MANIFEST.txt"
    lines = [
        "# Auto-generated by scripts/generate-sub2b-regression-pins.py.",
        "# Each entry is a regression pin for a class flagged by the rule 2",
        "# sibling-aliasing detector (matrix row 8 / sub-2b).",
        "",
    ]
    for path in sorted(emitted):
        lines.append(path.name)
    lines.append("")
    manifest.write_text("\n".join(lines))
    return manifest


def main(argv: list[str]) -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--target",
        type=Path,
        default=Path(__file__).resolve().parents[1] / "tests" / "regression" / "sub-2b",
        help="directory to write regression pins into (default: tests/regression/sub-2b)",
    )
    args = parser.parse_args(argv)

    _validate_inventory_count()

    target_dir = args.target
    target_dir.mkdir(parents=True, exist_ok=True)

    emitted: list[Path] = []
    for entry in INVENTORY:
        if entry.class_name in _BINDGEN_EXCLUDED_CLASSES:
            # Filter-excluded at the bindgen layer (unbound `math_Vector`
            # base); no JS binding exists to pin. See
            # `_BINDGEN_EXCLUDED_CLASSES` above.
            print(f"skipped {entry.class_name} (excluded from bindgen)")
            continue
        path = emit_pin(entry, target_dir)
        emitted.append(path)
        print(f"emitted {path.relative_to(target_dir.parents[1])}")

    manifest = emit_index(target_dir, emitted)
    print(f"emitted {manifest.relative_to(target_dir.parents[1])}")
    print(f"total: {len(emitted)} regression pins written")
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
