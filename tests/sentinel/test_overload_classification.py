"""NO4 — Overload classification (rule 4 absence-semantics + Classification Algorithm).

Pins the behaviour of
``ocjs_bindgen.predicates.overload_classification.classify_overload_group``
against the decision tree documented in
``docs/policy/ocjs-trailing-default-emission-policy.md`` §Classification
Algorithm.

The classifier is exercised at the pure-descriptor level so the test
stays decoupled from libclang. Every matrix row that the bindgen now
emits for trailing-default-bearing shapes is covered, plus the
fallback rows (6, 11, 15, 16, 20, 26, 35).

Companion to the Phase 2 implementation research doc at
``tau:docs/research/ocjs-phase-2-val-dispatch-emission.md``.
"""

from __future__ import annotations

import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
SRC = REPO_ROOT / "src"
if str(SRC) not in sys.path:
    sys.path.insert(0, str(SRC))

from ocjs_bindgen.predicates.overload_classification import (  # noqa: E402
    AbsenceTag,
    GroupClassificationInputs,
    OverloadClassification,
    OverloadDescriptor,
    ParameterDescriptor,
    classify_overload_group,
    tag_overload_absence_semantics,
)

# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------


def _param(type_name, **kwargs):
    return ParameterDescriptor(type_name=type_name, **kwargs)


def _overload(*params, **kwargs):
    return OverloadDescriptor(parameters=tuple(params), **kwargs)


def _classify(*overloads, **flags):
    return classify_overload_group(
        GroupClassificationInputs(overloads=tuple(overloads), **flags)
    )


# ---------------------------------------------------------------------------
# Rule 4 — absence-semantics tagging.
# ---------------------------------------------------------------------------


def test_tag_default_on_absence():
    ov = _overload(_param("bool", is_trailing_default=True))
    tags = tag_overload_absence_semantics((ov,))
    assert tags == ((0, 0, AbsenceTag.DEFAULT_ON_ABSENCE),)


def test_tag_maybe_t_for_genuine_optional():
    ov = _overload(_param("std::optional<int>", is_genuine_optional=True))
    tags = tag_overload_absence_semantics((ov,))
    assert tags == ((0, 0, AbsenceTag.MAYBE_T),)


def test_tag_output_for_output_param():
    ov = _overload(_param("double&", is_output_param=True))
    tags = tag_overload_absence_semantics((ov,))
    assert tags == ((0, 0, AbsenceTag.OUTPUT),)


def test_tag_no_tag_for_required_input():
    ov = _overload(_param("int"))
    tags = tag_overload_absence_semantics((ov,))
    assert tags == ()


def test_tag_per_position_in_mixed_overload():
    ov = _overload(
        _param("int"),
        _param("bool", is_trailing_default=True),
        _param("double", is_trailing_default=True),
    )
    tags = tag_overload_absence_semantics((ov,))
    assert tags == (
        (0, 1, AbsenceTag.DEFAULT_ON_ABSENCE),
        (0, 2, AbsenceTag.DEFAULT_ON_ABSENCE),
    )


# ---------------------------------------------------------------------------
# Classification Algorithm — per matrix row.
# ---------------------------------------------------------------------------


def test_row_8_sub2b_sibling_aliasing():
    """Sub-2b aliasing → val at larger arity (row 8)."""
    smaller = _overload(_param("bool", is_trailing_default=True), sibling_count=1)
    larger = _overload(
        _param("const TopoDS_Face&"),
        _param("bool", is_trailing_default=True),
        sibling_count=1,
    )
    c = _classify(smaller, larger, has_sibling_aliasing=True)
    assert c.matrix_row == 8
    assert c.primitive == 'val'
    assert 'sub-2b' in c.rationale


def test_row_9_same_arity_distinguishable_types():
    a = _overload(_param("const TDF_Label&"))
    b = _overload(_param("const TopoDS_Shape&"))
    c = _classify(a, b, has_same_arity_distinguishable_types=True)
    assert c.matrix_row == 9
    assert c.primitive == 'val'


def test_row_10_mixed_static_instance():
    c = _classify(_overload(_param("int")), has_mixed_static_instance=True)
    assert c.matrix_row == 10
    assert c.primitive == 'val'


def test_row_11_js_indistinguishable_dedup():
    """Two integer-typed siblings at same arity → dedup (row 11)."""
    a = _overload(_param("size_t"))
    b = _overload(_param("int"))
    c = _classify(a, b, has_js_indistinguishable_overloads=True)
    assert c.matrix_row == 11
    assert c.primitive == 'dedup'


def test_row_15_unbindable_param():
    c = _classify(_overload(_param("void*", is_raw_pointer=True)), has_unbindable_param=True)
    assert c.matrix_row == 15
    assert c.primitive == 'filter'


def test_row_16_rbv_for_output_params():
    c = _classify(_overload(_param("double&", is_output_param=True)), has_output_params=True)
    assert c.matrix_row == 16
    assert c.primitive == 'rbv'


def test_row_22_genuine_optional_parameter():
    ov = _overload(
        _param("const std::optional<Kind>&", is_trailing_default=True, is_genuine_optional=True),
    )
    c = _classify(ov)
    assert c.matrix_row == 22
    assert c.primitive == 'optional'


def test_row_1_single_overload_trailing_scalar_default():
    """Single overload, trailing scalar default (e.g. ``bool=false``)
    routes to row 1 (val) per Phase 3. The Phase 2 fallback was
    row 24 (optional) but policy rule 9 says only rows {3, 4, 5,
    21, 22} keep optional; every other default-bearing row uses
    ``emscripten::val``."""
    ov = _overload(_param("bool", is_trailing_default=True))
    c = _classify(ov)
    assert c.matrix_row == 1
    assert c.primitive == 'val'


def test_row_2_single_overload_value_class_default():
    """Single overload, trailing value-class default (e.g.
    ``Message_ProgressRange = Message_ProgressRange()``) routes to
    row 1 (val) — the matrix-row label is the canonical scalar
    fallback because the val-default helper renders identical C++
    for rows 1, 2, 36; only the pasted default expression differs."""
    ov = _overload(
        _param("Message_ProgressRange", is_trailing_default=True),
    )
    c = _classify(ov)
    assert c.matrix_row == 1
    assert c.primitive == 'val'


def test_row_3_single_overload_canonical_optional_handle_default():
    """Single overload, trailing handle default ``= Handle()`` (null)
    is the canonical ``std::optional<T>`` domain (row 3). The
    bindgen marks the slot ``is_canonical_optional_default=True``
    and the classifier returns optional."""
    ov = _overload(
        _param(
            "const occ::handle<NCollection_BaseAllocator>&",
            is_trailing_default=True,
            is_canonical_optional_default=True,
        ),
    )
    c = _classify(ov)
    assert c.matrix_row == 3
    assert c.primitive == 'optional'


def test_row_4_canonical_optional_const_ref_temp_default():
    """Single overload, ``const T& foo = T()`` — row 4 is also
    canonical-optional and shares the row 3 label in the classifier
    output (both route to the optional emitter)."""
    ov = _overload(
        _param(
            "const gp_Pnt&",
            is_trailing_default=True,
            is_canonical_optional_default=True,
        ),
    )
    c = _classify(ov)
    assert c.matrix_row == 3
    assert c.primitive == 'optional'


def test_row_5_canonical_optional_scoped_constant_default():
    """Single overload, ``= NS::Const`` scoped-constant default —
    row 5 routes to optional via the canonical-optional flag."""
    ov = _overload(
        _param(
            "int",
            is_trailing_default=True,
            is_canonical_optional_default=True,
        ),
    )
    c = _classify(ov)
    assert c.matrix_row == 3
    assert c.primitive == 'optional'


def test_row_23_non_null_handle_default_routes_to_val():
    """Row 23 — non-null handle default (speculative, zero production
    instances). When bindgen detects a handle default that is NOT
    ``Handle()`` (i.e. a non-null sentinel), it omits the
    canonical-optional flag and the classifier returns val so the
    silent-corruption mode (``std::optional<Handle<T>>`` using null
    instead of the sentinel) is impossible to emit."""
    ov = _overload(
        _param(
            "const occ::handle<Foo>&",
            is_trailing_default=True,
            is_canonical_optional_default=False,
        ),
    )
    c = _classify(ov)
    assert c.matrix_row == 1
    assert c.primitive == 'val'


def test_row_37_reference_default_singleton_routes_to_val():
    """Row 37 — ``T& foo = singleton()`` (speculative, zero production
    instances). The R6-A static_assert catches non-const lvalue
    references at bindgen time so this row's silent-corruption mode
    cannot ship; the classifier still routes to val for parity."""
    ov = _overload(
        _param(
            "MyType&",
            is_trailing_default=True,
            is_canonical_optional_default=False,
        ),
    )
    c = _classify(ov)
    assert c.matrix_row == 1
    assert c.primitive == 'val'


def test_row_34_multi_overload_via_sibling_count():
    """Multi-overload context can be conveyed either by packing
    siblings into ``overloads`` or by setting ``sibling_count`` on a
    single descriptor — production bindgen uses the latter because
    each ``processMethodOrProperty`` call only sees one method
    cursor."""
    ov = _overload(
        _param("const TopoDS_Edge&"),
        _param("GeomAbs_Shape"),
        _param("bool", is_trailing_default=True),
        sibling_count=2,
    )
    c = _classify(ov)
    assert c.matrix_row == 34
    assert c.primitive == 'val'


def test_row_26_mixed_returns():
    a = _overload(_param("int"))
    b = _overload(_param("int"))
    c = _classify(a, b, has_mixed_returns=True)
    assert c.matrix_row == 26
    assert c.primitive == 'val'


def test_row_30_null_meaningful():
    """When the trailing default's slot accepts null as a meaningful
    value, route to row 30 (val with permissive null/undefined)."""
    ov = _overload(_param(
        "const occ::handle<Message_ProgressIndicator>&",
        is_trailing_default=True,
        accepts_meaningful_null=True,
    ))
    c = _classify(ov)
    assert c.matrix_row == 30
    assert c.primitive == 'val'


def test_row_33_cstring_trailing_default():
    ov = _overload(
        _param("Standard_CString", is_cstring=True),
        _param("Standard_CString", is_cstring=True, is_trailing_default=True),
    )
    c = _classify(ov)
    assert c.matrix_row == 33
    assert c.primitive == 'val'
    assert 'cstring' in c.rationale.lower()


def test_row_34_multi_overload_with_trailing_default():
    a = _overload(_param("const gp_Pnt&"))
    b = _overload(
        _param("const TopoDS_Edge&"),
        _param("GeomAbs_Shape"),
        _param("bool", is_trailing_default=True),
    )
    c = _classify(a, b)
    assert c.matrix_row == 34
    assert c.primitive == 'val'


def test_row_35_all_optional_same_arity_sibling_group():
    """Two same-arity siblings where every slot is defaulted → T1 guard (row 35)."""
    a = _overload(
        _param("double", is_trailing_default=True),
        _param("bool", is_trailing_default=True),
    )
    b = _overload(
        _param("int", is_trailing_default=True),
        _param("std::string", is_trailing_default=True),
    )
    c = _classify(a, b, has_js_indistinguishable_overloads=True)
    assert c.matrix_row == 35
    assert c.primitive == 'dedup'


def test_row_6_native_multi_overload_no_defaults():
    a = _overload(_param("const TopoDS_Edge&"))
    b = _overload(_param("const TopoDS_Wire&"))
    c = _classify(a, b)
    assert c.matrix_row == 6
    assert c.primitive == 'native'


def test_row_20_single_overload_no_defaults():
    ov = _overload(_param("const occ::handle<Geom_Curve>&"))
    c = _classify(ov)
    assert c.matrix_row == 20
    assert c.primitive == 'native'


# ---------------------------------------------------------------------------
# Diagnostic format.
# ---------------------------------------------------------------------------


def test_diagnostic_cites_matrix_row_and_primitive():
    c = OverloadClassification(
        matrix_row=8,
        primitive='val',
        rationale='sub-2b sibling-aliasing detected',
    )
    out = c.diagnostic('BRepGProp_Face.constructor')
    assert 'matrix row 8' in out
    assert 'val' in out
    assert 'BRepGProp_Face' in out


# ---------------------------------------------------------------------------
# Per-position tag propagation through classification.
# ---------------------------------------------------------------------------


def test_classification_carries_per_position_tags():
    ov = _overload(
        _param("int"),
        _param("bool", is_trailing_default=True),
    )
    c = _classify(ov)
    assert (0, 1, AbsenceTag.DEFAULT_ON_ABSENCE) in c.per_position_tags
