"""NO2 — Rule 2 sibling-aliasing detector regression test.

Pins the behaviour of
``ocjs_bindgen.predicates.sibling_aliasing.detect_sub2b_pairs`` against:

* the 19 production sub-2b instances enumerated in
  ``tau:docs/research/ocjs-occt-surface-audit.md`` (positive cases — all
  must flag);
* a curated set of non-aliasing single-overload, multi-overload, and
  genuine-``std::optional<T>`` cases (negative cases — none must flag);
* a class-evolution regression scenario where an arity-N ctor whose
  trailing-default emits ``std::optional<T>`` becomes shadowed once a
  sibling arity-(N+1) ctor is added (the "future-proof" claim of
  matrix row 1).

The detector is exercised at the pure-tuple level (``ParamSig``) so the
test stays decoupled from libclang. The 19 production signatures are
transcribed verbatim from the audit doc's enumeration table.

Companion to the policy doc at
``docs/policy/ocjs-trailing-default-emission-policy.md`` rule 2 and to
the Phase 1 implementation research doc at
``tau:docs/research/ocjs-phase-1-rule-2-rule-3-implementation.md``.
"""

from __future__ import annotations

import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
SRC = REPO_ROOT / "src"
if str(SRC) not in sys.path:
    sys.path.insert(0, str(SRC))

from ocjs_bindgen.predicates.sibling_aliasing import (  # noqa: E402
    MATRIX_ROW,
    ConflictReport,
    ParamSig,
    detect_sub2b_pairs,
    normalise_type,
)

# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------


def _sig(*params):
    """Build a ctor signature from ``(type_name, has_default)`` shorthand tuples."""
    return tuple(ParamSig(normalise_type(t), bool(d)) for t, d in params)


def _flagged_pairs(*ctors):
    return detect_sub2b_pairs(list(ctors))


# ---------------------------------------------------------------------------
# Positive cases — must flag.
# ---------------------------------------------------------------------------


def test_brepgprop_face_canonical_sub2b():
    """``BRepGProp_Face`` — the documented smoking gun.

    A = ``(std::optional<bool>)`` arity 1.
    B = ``(const TopoDS_Face&, std::optional<bool>)`` arity 2.
    """
    A = _sig(("bool", True))
    B = _sig(("const TopoDS_Face&", False), ("bool", True))
    reports = _flagged_pairs(A, B)
    assert len(reports) == 1
    assert reports[0].smaller_index == 0
    assert reports[0].larger_index == 1
    assert MATRIX_ROW in reports[0].diagnostic("BRepGProp_Face")


def test_zero_arity_degenerate_sub2b():
    """k=0 edge case: zero-arity ctor + arity-1 all-trailing-default ctor.

    A = ``()`` arity 0.
    B = ``(int = 5)`` arity 1, the sole param has default.

    The wildcard in ``B``'s single slot claims arity 0 via the
    optional-wildcard short-circuit in ``$getSignature``, shadowing
    ``A``. This is a degenerate form of sub-2b — there is no "last
    param of A has default" to check (A is empty) but the shadowing
    still happens.
    """
    A = _sig()
    B = _sig(("int", True))
    reports = _flagged_pairs(A, B)
    assert len(reports) == 1
    assert reports[0].smaller_index == 0
    assert reports[0].larger_index == 1


def test_audit_19_sub2b_instances_all_flagged():
    """Every production sub-2b instance from the surface audit MUST flag.

    Signatures transcribed from
    ``tau:docs/research/ocjs-occt-surface-audit.md`` § Sub-2b
    Enumeration (Row 8). The enumeration is treated as the
    authoritative production set — if any of the 19 fails to flag,
    the detector logic has regressed and the audit must be re-run to
    update the canonical list.
    """
    cases = {
        "TDF_Transaction": [
            _sig(("XCAFDoc_PartId", True)),
            _sig(("const occ::handle<TDF_Data>&", False), ("XCAFDoc_PartId", True)),
        ],
        "math_BrentMinimum": [
            _sig(("const double", False), ("int", True), ("double", True)),
            _sig(("const double", False), ("const double", False), ("int", True), ("double", True)),
        ],
        "BRepFill_ComputeCLine": [
            _sig(("int", True), ("int", True), ("double", True), ("double", True),
                 ("bool", True), ("AppParCurves_Constraint", True),
                 ("AppParCurves_Constraint", True)),
            _sig(("const BRepFill_MultiLine&", False),
                 ("int", True), ("int", True), ("double", True), ("double", True),
                 ("bool", True), ("AppParCurves_Constraint", True),
                 ("AppParCurves_Constraint", True)),
        ],
        "Geom2dAPI_InterCurveCurve": [
            _sig(("const occ::handle<Geom2d_Curve>&", False), ("double", True)),
            _sig(("const occ::handle<Geom2d_Curve>&", False),
                 ("const occ::handle<Geom2d_Curve>&", False), ("double", True)),
        ],
        "GeomInt_TheComputeLineBezierOfWLApprox_v1": [
            _sig(("const math_Vector&", False),
                 ("int", True), ("int", True), ("double", True), ("double", True),
                 ("int", True), ("bool", True), ("bool", True)),
            _sig(("const GeomInt_TheMultiLineOfWLApprox&", False),
                 ("const math_Vector&", False),
                 ("int", True), ("int", True), ("double", True), ("double", True),
                 ("int", True), ("bool", True), ("bool", True)),
        ],
        "GeomInt_TheComputeLineBezierOfWLApprox_v2": [
            _sig(("int", True), ("int", True), ("double", True), ("double", True),
                 ("int", True), ("bool", True), ("Approx_ParametrizationType", True),
                 ("bool", True)),
            _sig(("const GeomInt_TheMultiLineOfWLApprox&", False),
                 ("int", True), ("int", True), ("double", True), ("double", True),
                 ("int", True), ("bool", True), ("Approx_ParametrizationType", True),
                 ("bool", True)),
        ],
        "GeomInt_TheComputeLineOfWLApprox_v1": [
            _sig(("const math_Vector&", False),
                 ("int", True), ("int", True), ("double", True), ("double", True),
                 ("int", True), ("bool", True), ("bool", True)),
            _sig(("const GeomInt_TheMultiLineOfWLApprox&", False),
                 ("const math_Vector&", False),
                 ("int", True), ("int", True), ("double", True), ("double", True),
                 ("int", True), ("bool", True), ("bool", True)),
        ],
        "GeomInt_TheComputeLineOfWLApprox_v2": [
            _sig(("int", True), ("int", True), ("double", True), ("double", True),
                 ("int", True), ("bool", True), ("Approx_ParametrizationType", True),
                 ("bool", True)),
            _sig(("const GeomInt_TheMultiLineOfWLApprox&", False),
                 ("int", True), ("int", True), ("double", True), ("double", True),
                 ("int", True), ("bool", True), ("Approx_ParametrizationType", True),
                 ("bool", True)),
        ],
        "IMeshData::CircleCellFilter": [
            _sig(("double", True), ("occ::handle<NCollection_IncAllocator>", True)),
            _sig(("const int", False),
                 ("double", True), ("occ::handle<NCollection_IncAllocator>", True)),
        ],
        "IMeshData::VertexCellFilter": [
            _sig(("double", True), ("occ::handle<NCollection_IncAllocator>", True)),
            _sig(("const int", False),
                 ("double", True), ("occ::handle<NCollection_IncAllocator>", True)),
        ],
        "BRepApprox_TheComputeLineBezierOfApprox_v1": [
            _sig(("const math_Vector&", False),
                 ("int", True), ("int", True), ("double", True), ("double", True),
                 ("int", True), ("bool", True), ("bool", True)),
            _sig(("const BRepApprox_TheMultiLineOfApprox&", False),
                 ("const math_Vector&", False),
                 ("int", True), ("int", True), ("double", True), ("double", True),
                 ("int", True), ("bool", True), ("bool", True)),
        ],
        "BRepApprox_TheComputeLineBezierOfApprox_v2": [
            _sig(("int", True), ("int", True), ("double", True), ("double", True),
                 ("int", True), ("bool", True), ("Approx_ParametrizationType", True),
                 ("bool", True)),
            _sig(("const BRepApprox_TheMultiLineOfApprox&", False),
                 ("int", True), ("int", True), ("double", True), ("double", True),
                 ("int", True), ("bool", True), ("Approx_ParametrizationType", True),
                 ("bool", True)),
        ],
        "BRepApprox_TheComputeLineOfApprox_v1": [
            _sig(("const math_Vector&", False),
                 ("int", True), ("int", True), ("double", True), ("double", True),
                 ("int", True), ("bool", True), ("bool", True)),
            _sig(("const BRepApprox_TheMultiLineOfApprox&", False),
                 ("const math_Vector&", False),
                 ("int", True), ("int", True), ("double", True), ("double", True),
                 ("int", True), ("bool", True), ("bool", True)),
        ],
        "BRepApprox_TheComputeLineOfApprox_v2": [
            _sig(("int", True), ("int", True), ("double", True), ("double", True),
                 ("int", True), ("bool", True), ("Approx_ParametrizationType", True),
                 ("bool", True)),
            _sig(("const BRepApprox_TheMultiLineOfApprox&", False),
                 ("int", True), ("int", True), ("double", True), ("double", True),
                 ("int", True), ("bool", True), ("Approx_ParametrizationType", True),
                 ("bool", True)),
        ],
        "BRepGProp_Face": [
            _sig(("bool", True)),
            _sig(("const TopoDS_Face&", False), ("bool", True)),
        ],
        "Approx_FitAndDivide": [
            _sig(("int", True), ("int", True), ("double", True), ("double", True),
                 ("bool", True), ("AppParCurves_Constraint", True),
                 ("AppParCurves_Constraint", True)),
            _sig(("const AppCont_Function&", False),
                 ("int", True), ("int", True), ("double", True), ("double", True),
                 ("bool", True), ("AppParCurves_Constraint", True),
                 ("AppParCurves_Constraint", True)),
        ],
        "Approx_FitAndDivide2d": [
            _sig(("int", True), ("int", True), ("double", True), ("double", True),
                 ("bool", True), ("AppParCurves_Constraint", True),
                 ("AppParCurves_Constraint", True)),
            _sig(("const AppCont_Function&", False),
                 ("int", True), ("int", True), ("double", True), ("double", True),
                 ("bool", True), ("AppParCurves_Constraint", True),
                 ("AppParCurves_Constraint", True)),
        ],
        "Geom2dConvert_CompCurveToBSplineCurve": [
            _sig(("Convert_ParameterisationType", True)),
            _sig(("const occ::handle<Geom2d_BoundedCurve>&", False),
                 ("Convert_ParameterisationType", True)),
        ],
        "GeomConvert_CompCurveToBSplineCurve": [
            _sig(("Convert_ParameterisationType", True)),
            _sig(("const occ::handle<Geom_BoundedCurve>&", False),
                 ("Convert_ParameterisationType", True)),
        ],
    }
    assert len(cases) == 19, "expected 19 audited sub-2b instances"

    missed = []
    for class_name, ctors in cases.items():
        reports = detect_sub2b_pairs(ctors)
        if not reports:
            missed.append(class_name)
    assert not missed, (
        f"detector missed {len(missed)}/19 production sub-2b instances: {missed}. "
        f"If the audit's enumeration is still correct, this is a detector bug — "
        f"do NOT relax the test, fix the algorithm."
    )


# ---------------------------------------------------------------------------
# Negative cases — must NOT flag.
# ---------------------------------------------------------------------------


def test_single_overload_with_trailing_default_no_sibling():
    """Matrix row 1 / 24 / 36 baseline — single overload with a trailing
    default and no sibling at any arity must NOT flag.
    """
    A = _sig(("bool", True))
    assert _flagged_pairs(A) == []


def test_multi_overload_unique_arities_no_prefix_match():
    """Matrix row 6 — multi-overload with unique arities but the arity-(N+1)
    overload's suffix does NOT type-match the arity-N overload.

    A = ``(int)``, B = ``(double, double)``. Even though
    ``len(B) == len(A) + 1``, ``B[1:].types == (double,)`` differs from
    ``A.types == (int,)`` so the suffix-match clause excludes the pair.
    """
    A = _sig(("int", False))
    B = _sig(("double", False), ("double", False))
    assert _flagged_pairs(A, B) == []


def test_genuine_optional_parameter_not_flagged():
    """Matrix row 22 — genuine source-level ``std::optional<T>`` parameter
    must NOT flag. The audit cites ``BRepGraph_ParentExplorer`` whose two
    constructor overloads each take
    ``const std::optional<BRepGraph_NodeId::Kind>& theAvoidKind`` as the
    LAST param but both have the SAME arity. Sub-2b requires arity to
    differ by one; same-arity pairs are filtered.
    """
    A = _sig(
        ("const occ::handle<Foo>&", False),
        ("const std::optional<BRepGraph_NodeId::Kind>&", False),
    )
    B = _sig(
        ("const occ::handle<Bar>&", False),
        ("const std::optional<BRepGraph_NodeId::Kind>&", False),
    )
    assert _flagged_pairs(A, B) == []


def test_arity_n_no_default_with_arity_n_plus_one_no_default():
    """No defaults anywhere → no optional emission → no shadowing. Even
    when the suffix-match holds, the absence of a trailing default on
    A means libembind's optional-wildcard short-circuit cannot
    engage. The detector MUST honour this precondition.
    """
    A = _sig(("int", False))
    B = _sig(("double", False), ("int", False))
    assert _flagged_pairs(A, B) == []


def test_arity_n_default_but_suffix_mismatch_not_flagged():
    """Same-arity-delta but B's suffix is a DIFFERENT type from A's
    sole parameter. The wildcard at B's slot 1 cannot impersonate
    A's slot 0 because the underlying lambda signatures expose
    incompatible C++ types — registration succeeds without aliasing.
    """
    A = _sig(("bool", True))
    B = _sig(("const TopoDS_Face&", False), ("double", True))
    assert _flagged_pairs(A, B) == []


def test_arity_n_plus_two_not_a_pair():
    """Arity differs by 2 (not 1). The detector's pair rule
    ``len(B) == len(A) + 1`` excludes this. Higher-arity gaps cannot
    cause sub-2b shadowing in a single hop.
    """
    A = _sig(("bool", True))
    B = _sig(("const TopoDS_Face&", False), ("int", False), ("bool", True))
    assert _flagged_pairs(A, B) == []


# ---------------------------------------------------------------------------
# Class-evolution regression — pins the "future-proof" claim of matrix row 1.
# ---------------------------------------------------------------------------


def test_class_evolution_single_to_sub2b():
    """Adding a sibling overload turns a benign single-ctor row-1 case
    into sub-2b row-8. The detector MUST flip its verdict accordingly.

    Phase 0 of the class:   ``Klass(bool = false)``   — row 1, no sibling.
    Phase 1 of the class:   ``Klass(bool = false)`` + ``Klass(Face, bool = false)``.

    The phase-0 emission was safe under ``std::optional<bool>``. The
    phase-1 addition of the larger sibling shadows it — the detector
    must flag the pair so the emission flips to val-discrimination at
    the larger arity. This pins the policy claim that matrix row 1's
    optional emission is conditional on rule 2 confirming "no sibling
    aliasing today" and the detector re-runs on every emission.
    """
    A = _sig(("bool", True))
    assert _flagged_pairs(A) == []
    B = _sig(("const TopoDS_Face&", False), ("bool", True))
    reports = _flagged_pairs(A, B)
    assert len(reports) == 1


# ---------------------------------------------------------------------------
# Diagnostic string format — pins the matrix-row citation.
# ---------------------------------------------------------------------------


def test_diagnostic_cites_matrix_row():
    """The structured diagnostic emitted by the detector MUST cite
    ``matrix row 8`` so build-log greps reliably surface every sub-2b
    routing decision for audit. The class name MUST appear so the
    operator knows which header to inspect.
    """
    report = ConflictReport(
        smaller_index=0,
        larger_index=1,
        smaller_sig=_sig(("bool", True)),
        larger_sig=_sig(("const TopoDS_Face&", False), ("bool", True)),
    )
    text = report.diagnostic("BRepGProp_Face")
    assert "matrix row 8" in text
    assert "BRepGProp_Face" in text
    assert "val-discrimination" in text


# ---------------------------------------------------------------------------
# Type-string normalisation — pins the cross-version equivalence rules.
# ---------------------------------------------------------------------------


def test_normalise_type_handle_namespace_alias():
    """``opencascade::handle`` and ``occ::handle`` MUST canonicalise to
    the same spelling so the prefix-match comparison is alias-stable.
    Mirrors the typedef-cache fix recorded in
    ``learned-runtime.mdc``.
    """
    assert normalise_type("opencascade::handle<X>") == "occ::handle<X>"
    assert normalise_type("const opencascade::handle<X> &") == "const occ::handle<X>&"


def test_normalise_type_whitespace_collapse():
    """``const T &`` and ``const T&`` MUST be detector-equivalent."""
    assert normalise_type("const T &") == "const T&"
    assert normalise_type("T  *") == "T*"
    assert normalise_type("  T  ") == "T"


# ---------------------------------------------------------------------------
# Emission shape — verify the val-discrimination lambda for the BRepGProp_Face
# canonical case has the right structural properties (uses val, dispatches on
# arg0, does NOT use std::optional<bool> at the conflict position).
# ---------------------------------------------------------------------------


def test_emission_uses_val_discrimination_for_sub2b_pair():
    """Verify the constructor emitter produces a val-discriminated lambda
    for a sub-2b conflict pair (the BRepGProp_Face shape).

    The emitter is exercised through ``emit_sibling_aliased_constructor``
    via duck-typed fakes that mimic the binder surface enough for the
    code path to run end-to-end without libclang. The assertion shape
    pins the val-dispatch structural contract:

    * ONE ``.constructor(...)`` line (not two — the prior two-ctor
      ``std::optional<bool>`` emission is replaced).
    * Lambda parameters are ``emscripten::val arg0, emscripten::val arg1``.
    * Branch discriminator inspects ``arg0`` (the slot that differs
      between A and B).
    * Larger-ctor branch reads ``arg0.as<...TopoDS_Face...>(...)``.
    * Smaller-ctor branch is reachable via the ``else`` and reads
      ``arg0`` (NOT arg1) as the bool-trailing-default — the smaller
      ctor's slot 0 corresponds to lambda's arg0.
    * NO ``std::optional<bool>`` appears in the emitted code — the
      sub-2b reroute MUST use val-discrimination, not optional, at
      the conflict position.
    """
    sys.path.insert(0, str(REPO_ROOT / "src"))
    from collections import namedtuple

    from ocjs_bindgen.codegen.embind.constructor import emit_sibling_aliased_constructor
    # JsType is normally re-exported from ``bindings`` but importing
    # ``bindings`` triggers the libclang / vendored-LLVM toolchain
    # path validation in ``config/paths.py``, which only succeeds in
    # the full build environment. Reconstruct the namedtuple shape
    # locally — the bindgen treats it as duck-typed (``.category``,
    # ``.name``) at the call sites we exercise.
    JsType = namedtuple("JsType", ["category", "name"])

    class _Type:
        """Mimic ``arg.type`` separately from ``arg`` so ``.spelling`` on the
        type returns the C++ type, not the parameter name (the production
        clang AST distinguishes the two; conflating them silently turned
        ``arg.as<bool>()`` into ``arg.as<IsUseSpan>()`` in an earlier draft
        of this test).
        """

        def __init__(self, spelling):
            self.spelling = spelling

        def is_const_qualified(self):
            return self.spelling.startswith("const ")

        def get_pointee(self):
            return self

        def get_canonical(self):
            return self

        def get_declaration(self):
            return None

        @property
        def kind(self):
            return "primitive"

    class _Arg:
        def __init__(self, type_spelling, has_default=False, name=""):
            self._type_spelling = type_spelling
            self._has_default = has_default
            self.spelling = name
            self.type = _Type(type_spelling)

        def get_tokens(self):
            return [_Tok("=")] if self._has_default else []

        def get_children(self):
            return []

    class _Tok:
        def __init__(self, sp):
            self.spelling = sp

    class _Ctor:
        def __init__(self, args):
            self._args = args

        def get_arguments(self):
            return list(self._args)

    class _StubBinder:
        """Implements only the surface ``emit_sibling_aliased_constructor`` reads."""

        def _countTrailingDefaults(self, ctor):
            count = 0
            for a in reversed(list(ctor.get_arguments())):
                if a._has_default:
                    count += 1
                else:
                    break
            return count

        def getOriginalArgumentType(self, arg, template_decl, template_args):
            return arg._type_spelling

        def _classify_js_type(self, t, template_decl, template_args):
            sp = t.spelling
            if "TopoDS_Face" in sp:
                return JsType("object", "TopoDS_Face")
            if "bool" in sp:
                return JsType("boolean", "boolean")
            return JsType("number_float", "number")

        def resolveWithCanonicalFallback(self, spelling, t, td, ta):
            return spelling

        def _extractDefaultExpr(self, arg, owning_class=None, class_scope=None):
            if "bool" in arg._type_spelling:
                return "false"
            return None

    smaller = _Ctor([_Arg("bool", has_default=True, name="IsUseSpan")])
    larger = _Ctor(
        [
            _Arg("const TopoDS_Face&", has_default=False, name="F"),
            _Arg("bool", has_default=True, name="IsUseSpan"),
        ]
    )

    out = emit_sibling_aliased_constructor(
        _StubBinder(),
        "BRepGProp_Face",
        smaller,
        larger,
        use_handle_override=False,
        template_decl=None,
        template_args=None,
        owning_class=None,
    )

    # Single .constructor entry — the two optional-wrapped ctors are gone.
    assert out.count(".constructor(") == 1, out

    # Val-discrimination lambda signature.
    assert "emscripten::val arg0, emscripten::val arg1" in out, out

    # Branch on arg0 — the slot that differs between A and B.
    assert "arg0.typeOf()" in out, out

    # Larger branch reads the TopoDS_Face type from arg0.
    assert "arg0.as<const TopoDS_Face&>" in out, out

    # Smaller branch reads arg0 (NOT arg1) as the bool, with the
    # value_or-style default sentinel materialised inline.
    assert "arg0.isUndefined()" in out, out
    assert "(false)" in out, out
    # The trailing-default unwrap reads ``arg0.as<bool>()`` (the type),
    # not ``arg0.as<IsUseSpan>()`` (the parameter name) — this would
    # silently break runtime resolution otherwise.
    assert "arg0.as<bool>()" in out, out
    assert "arg1.as<bool>()" in out, out

    # The forbidden shape: NO std::optional<bool> at the conflict position.
    assert "std::optional<bool>" not in out, out
    assert "value_or" not in out, out
