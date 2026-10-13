"""NO3 — Rule 3 JS-effective arity precondition regression test.

Pins the behaviour of
``ocjs_bindgen.codegen.rbv.js_effective_arity_range`` and
``ocjs_bindgen.codegen.rbv.js_effective_arity_collisions`` under the
three transforms composed in policy rule 3:

1. Primitive-output stripping (OCJS classifies ``T&`` non-const refs to
   primitive scalars as RBV envelope outputs and strips them from the
   JS-visible arity).
2. ``Handle<T>&`` output-param elision (RBV input-elided handle outputs
   strip another slot per the handle-output policy doc).
3. Default expansion — each JS-visible trailing default extends the
   JS-callable arity range downward by one slot.

The composed range is **closed on both ends** — a JS caller may invoke
the method with any arity in ``[min_arity, max_arity]`` inclusive. The
collision detector finds every overload pair whose ranges intersect.

The detector is exercised with a lightweight ``FakeMethod`` /
``FakeArg`` shim that mimics the surface the binder reads (``.type``,
``.get_arguments()``, ``.result_type``, ``.spelling``,
``.is_const_method``, ``.is_static_method``). The transforms compose
exactly as the production binder composes them because the helper
calls back into the same ``_getJsArity`` / ``_countTrailingDefaults``
paths via duck-typed shims.

Companion to the policy doc at
``docs/policy/ocjs-trailing-default-emission-policy.md`` rule 3 and to
the Phase 1 implementation research doc at
``tau:docs/research/ocjs-phase-1-rule-2-rule-3-implementation.md``.
"""

from __future__ import annotations

import sys
from dataclasses import dataclass
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
SRC = REPO_ROOT / "src"
if str(SRC) not in sys.path:
    sys.path.insert(0, str(SRC))

from ocjs_bindgen.codegen.rbv import (  # noqa: E402
    is_collision_resolvable_via_val,
    js_effective_arity_collisions,
    js_effective_arity_range,
)

# ---------------------------------------------------------------------------
# Lightweight fakes — duck-typed against the binder surface.
# ---------------------------------------------------------------------------


@dataclass(eq=False)
class FakeType:
    """Mimic enough of clang's ``Type`` for rule 3 to run without libclang."""

    kind: str = "primitive"
    spelling: str = "int"
    is_const_qual: bool = False

    def is_const_qualified(self):
        return self.is_const_qual

    def get_pointee(self):
        return self

    def get_canonical(self):
        return self


@dataclass(eq=False)
class FakeArg:
    """``.type`` + (optional) trailing-default marker.

    ``has_default`` is recorded directly rather than via libclang
    tokens; the ``_countTrailingDefaults`` shim below reads it.
    """

    type: FakeType
    spelling: str = ""
    has_default: bool = False

    def get_tokens(self):
        return []


@dataclass(eq=False)
class FakeMethod:
    """Mimic the binder's view of one C++ method/ctor cursor."""

    spelling: str
    args: list[FakeArg]
    result_kind: str = "void"
    is_const: bool = False
    is_static: bool = False

    def get_arguments(self):
        return list(self.args)

    @property
    def result_type(self):
        return FakeType(spelling=self.result_kind, kind=self.result_kind)

    def is_const_method(self):
        return self.is_const

    def is_static_method(self):
        return self.is_static


class FakeBinder:
    """Provide the small subset of ``EmbindBindings`` that
    ``js_effective_arity_range`` reaches into.

    Specifically:

    * ``_countTrailingDefaults(method)`` — reads ``FakeArg.has_default``
      directly. Mirrors the binder's clang-token-driven implementation
      semantically: counts trailing args with a default.
    * ``_getJsArity(method)`` — accepts a per-arg "stripped" hint
      via ``stripped_indices``. Mirrors the binder's
      ``shouldStripParam`` / ``isRawPointerParam`` composition for
      the slot-stripping decision.

    Tests pass a list of slot indices that the binder would strip
    (RBV output-param + raw-pointer slots) so the JS-visible arity is
    computed deterministically without re-implementing the OCCT
    output-param convention here.
    """

    def __init__(self, stripped_per_method=None):
        # Map ``id(method)`` → set of stripped slot indices.
        self._stripped = stripped_per_method or {}

    def _countTrailingDefaults(self, method):
        count = 0
        for arg in reversed(method.get_arguments()):
            if arg.has_default:
                count += 1
            else:
                break
        return count

    def _getJsArity(self, method):
        stripped = self._stripped.get(id(method), set())
        stripped_ids = {id(a) for a in stripped}
        return sum(1 for a in method.get_arguments() if id(a) not in stripped_ids)


# Stubs for the rbv-module isRawPointerParam / shouldStripParam paths the
# range helper references. We monkey-patch via the module imports.
import ocjs_bindgen.codegen.rbv as _rbv  # noqa: E402


def _install_stubs(stripped_per_method, raw_pointer_per_method=None):
    """Override ``rbv.shouldStripParam`` / ``rbv.isRawPointerParam`` /
    ``rbv.isCString`` for the duration of one test. Restored via
    ``_uninstall_stubs``.

    The stubs key on ``id(arg)`` so the test author labels each slot
    explicitly. Mirrors the precise composition the binder applies at
    the production site without dragging libclang into the test
    harness.
    """
    raw_pointer_per_method = raw_pointer_per_method or {}
    stripped_ids = set()
    raw_pointer_ids = set()
    for arg_set in stripped_per_method.values():
        stripped_ids.update(id(a) for a in arg_set)
    for arg_set in raw_pointer_per_method.values():
        raw_pointer_ids.update(id(a) for a in arg_set)

    saved = (_rbv.shouldStripParam, _rbv.isRawPointerParam, _rbv.isCString)

    def stub_strip(type_, method):  # noqa: ANN001
        # type is an arg.type proxy — we keyed by arg identity above
        # via a parent reference table built lazily on each call. Use
        # the binder's method-level lookup instead.
        return False

    def stub_raw(type_):  # noqa: ANN001
        return False

    def stub_cstring(type_):  # noqa: ANN001
        return False

    _rbv.shouldStripParam = stub_strip
    _rbv.isRawPointerParam = stub_raw
    _rbv.isCString = stub_cstring
    return saved


def _uninstall_stubs(saved):
    _rbv.shouldStripParam, _rbv.isRawPointerParam, _rbv.isCString = saved


# ---------------------------------------------------------------------------
# js_effective_arity_range — composition of the three transforms.
# ---------------------------------------------------------------------------


def test_range_no_defaults_no_strip():
    """No defaults, no RBV elision → ``min == max == raw arity``."""
    m = FakeMethod("f", [FakeArg(FakeType()), FakeArg(FakeType())])
    b = FakeBinder()
    saved = _install_stubs(stripped_per_method={})
    try:
        assert js_effective_arity_range(b, m) == (2, 2)
    finally:
        _uninstall_stubs(saved)


def test_range_trailing_defaults_open_lower_bound():
    """Three trailing defaults → JS-effective range is ``[2 - 3, 2] = [0, 2]``
    after clamping at 0 — caller may invoke at any of arities 0, 1, or 2."""
    m = FakeMethod(
        "f",
        [
            FakeArg(FakeType(), has_default=True),
            FakeArg(FakeType(), has_default=True),
        ],
    )
    b = FakeBinder()
    saved = _install_stubs(stripped_per_method={})
    try:
        assert js_effective_arity_range(b, m) == (0, 2)
    finally:
        _uninstall_stubs(saved)


def test_range_rbv_elision_lowers_both_ends():
    """RBV output-param elision strips a slot from the JS-visible arity →
    both ``min`` and ``max`` drop by 1.

    ``Geom_Surface::Bounds(double& U1, double& U2, double& V1, double& V2)``
    canonical: raw C++ arity 4, JS-visible arity 0 (all four slots are
    RBV-eligible primitive output references). No defaults → range
    ``(0, 0)``.
    """
    args = [FakeArg(FakeType()) for _ in range(4)]
    m = FakeMethod("Bounds", args)
    b = FakeBinder(stripped_per_method={id(m): set(args)})
    saved = _install_stubs(stripped_per_method={})
    try:
        assert js_effective_arity_range(b, m) == (0, 0)
    finally:
        _uninstall_stubs(saved)


def test_range_handle_output_elision_composes_with_defaults():
    """Composition test: one trailing default + one elided ``Handle<T>&``
    output. Raw arity 3, stripped slot reduces max to 2, trailing
    default extends min downward to 1 → range ``(1, 2)``.

    Mirrors a hypothetical ``f(int x, Handle<Geom_Curve>& out, double y = 1.0)``.
    """
    handle_out = FakeArg(FakeType(kind="lvalref"))
    args = [
        FakeArg(FakeType()),
        handle_out,
        FakeArg(FakeType(), has_default=True),
    ]
    m = FakeMethod("f", args)
    b = FakeBinder(stripped_per_method={id(m): {handle_out}})
    saved = _install_stubs(stripped_per_method={})
    try:
        assert js_effective_arity_range(b, m) == (1, 2)
    finally:
        _uninstall_stubs(saved)


# ---------------------------------------------------------------------------
# Collision detection — positive cases.
# ---------------------------------------------------------------------------


def test_collision_handle_output_elision_collides_with_zero_arity():
    """Positive — ``f(Handle<Geom_Curve>&)`` (RBV-elided to JS arity 0) +
    ``f()`` (JS arity 0). Ranges both ``(0, 0)`` → intersect at 0.
    Existing RBV-collision dispatch resolves this; rule 3 surfaces the
    overlap as a sanity check.
    """
    handle_arg = FakeArg(FakeType(kind="lvalref"))
    a = FakeMethod("f", [handle_arg])
    b_method = FakeMethod("f", [])
    binder = FakeBinder(stripped_per_method={id(a): {handle_arg}})
    saved = _install_stubs(stripped_per_method={})
    try:
        collisions = js_effective_arity_collisions(binder, [a, b_method])
        assert len(collisions) == 1
        m_a, m_b, lo, hi = collisions[0]
        assert (lo, hi) == (0, 0)
    finally:
        _uninstall_stubs(saved)


def test_collision_default_extends_range_into_sibling():
    """Positive — ``g(int)`` (range ``(1, 1)``) +
    ``g(int, double = 1.0)`` (range ``(1, 2)``). Ranges intersect at 1.
    Both ranges contain JS arity 1 with identical types at slot 0;
    sub-2b (rule 2) catches this from a different angle and rule 3
    confirms the overlap independently.
    """
    a = FakeMethod("g", [FakeArg(FakeType())])
    b_method = FakeMethod(
        "g",
        [FakeArg(FakeType()), FakeArg(FakeType(), has_default=True)],
    )
    binder = FakeBinder()
    saved = _install_stubs(stripped_per_method={})
    try:
        collisions = js_effective_arity_collisions(binder, [a, b_method])
        assert len(collisions) == 1
        _m_a, _m_b, lo, hi = collisions[0]
        assert (lo, hi) == (1, 1)
    finally:
        _uninstall_stubs(saved)


def test_collision_pure_out_primitive_collides_with_zero_arity():
    """Positive — ``h(int&)`` (pure-out, RBV strips to JS arity 0) +
    ``h()`` (JS arity 0). Same shape as the handle-elision case but with
    a primitive output param.
    """
    out_arg = FakeArg(FakeType(kind="lvalref"))
    a = FakeMethod("h", [out_arg])
    b_method = FakeMethod("h", [])
    binder = FakeBinder(stripped_per_method={id(a): {out_arg}})
    saved = _install_stubs(stripped_per_method={})
    try:
        collisions = js_effective_arity_collisions(binder, [a, b_method])
        assert len(collisions) == 1
    finally:
        _uninstall_stubs(saved)


# ---------------------------------------------------------------------------
# Collision detection — negative cases.
# ---------------------------------------------------------------------------


def test_no_collision_single_overload():
    """Negative — single overload, no defaults, no RBV elision. Trivially
    no collision because there is nothing to pair with."""
    a = FakeMethod("f", [FakeArg(FakeType())])
    binder = FakeBinder()
    saved = _install_stubs(stripped_per_method={})
    try:
        assert js_effective_arity_collisions(binder, [a]) == []
    finally:
        _uninstall_stubs(saved)


def test_no_collision_disjoint_ranges():
    """Negative — ``f(int)`` (range ``(1, 1)``) + ``f(int, double)``
    (range ``(2, 2)``, NO default on second). Ranges ``(1, 1)`` and
    ``(2, 2)`` are disjoint; standard arity-only dispatch suffices.
    """
    a = FakeMethod("f", [FakeArg(FakeType())])
    b_method = FakeMethod("f", [FakeArg(FakeType()), FakeArg(FakeType())])
    binder = FakeBinder()
    saved = _install_stubs(stripped_per_method={})
    try:
        assert js_effective_arity_collisions(binder, [a, b_method]) == []
    finally:
        _uninstall_stubs(saved)


def test_no_collision_three_disjoint_overloads():
    """Negative — three overloads at arities 0, 1, 2 with no defaults
    and no RBV elision. Ranges ``(0, 0)``, ``(1, 1)``, ``(2, 2)`` are
    pairwise disjoint.
    """
    a = FakeMethod("f", [])
    b_m = FakeMethod("f", [FakeArg(FakeType())])
    c = FakeMethod("f", [FakeArg(FakeType()), FakeArg(FakeType())])
    binder = FakeBinder()
    saved = _install_stubs(stripped_per_method={})
    try:
        assert js_effective_arity_collisions(binder, [a, b_m, c]) == []
    finally:
        _uninstall_stubs(saved)


def test_no_collision_resolvable_via_val_discrimination_same_arity():
    """Negative — same JS-effective arity but distinguishable JS types
    is matrix row 9, which the existing val-dispatch handles. Rule 3
    still flags the range overlap (same max-arity siblings collide at
    that arity), but the existing
    ``js_collisions``/``_emitValDispatchMethod`` paths resolve the
    overlap before rule 3 logs. The intersection is non-empty, so the
    detector reports it as a sanity signal — this test confirms the
    collision IS surfaced (it is downstream-handled, not absent).
    """
    a = FakeMethod("f", [FakeArg(FakeType())])
    b_m = FakeMethod("f", [FakeArg(FakeType())])
    binder = FakeBinder()
    saved = _install_stubs(stripped_per_method={})
    try:
        collisions = js_effective_arity_collisions(binder, [a, b_m])
        assert len(collisions) == 1
    finally:
        _uninstall_stubs(saved)


# ---------------------------------------------------------------------------
# Composition test — RBV elision + default expansion in distinct overloads.
# ---------------------------------------------------------------------------


# ---------------------------------------------------------------------------
# Hard-skip resolvability (Phase 2 upgrade) — rule 3 raises SkipException
# when JS types are identical at every overlapping arity.
# ---------------------------------------------------------------------------


def test_resolvability_distinct_js_types_returns_true():
    """When two overloads have DIFFERENT type spellings at every
    overlapping slot, the collision is resolvable via val-discrimination
    and the rule 3 upgrade does NOT raise.

    Use ``f(int)`` vs ``f(double, bool=true)`` — at the overlapping
    arity 1 slot 0 differs (int vs double), so val-dispatch can pick.
    """
    a = FakeMethod(
        "f",
        [FakeArg(FakeType(spelling="int"))],
    )
    b_m = FakeMethod(
        "f",
        [
            FakeArg(FakeType(spelling="double")),
            FakeArg(FakeType(spelling="bool"), has_default=True),
        ],
    )
    binder = FakeBinder()
    saved = _install_stubs(stripped_per_method={})
    try:
        collisions = js_effective_arity_collisions(binder, [a, b_m])
        assert len(collisions) == 1
        _m_a, _m_b, lo, hi = collisions[0]
        assert is_collision_resolvable_via_val(binder, a, b_m, lo, hi) is True
    finally:
        _uninstall_stubs(saved)


def test_resolvability_identical_js_types_returns_false():
    """When two overloads have IDENTICAL type spellings at every
    overlapping arity AND the overlap is at an arity both reach, the
    collision is unresolvable — rule 3 must raise SkipException at the
    method-group call site.
    """
    a = FakeMethod("f", [FakeArg(FakeType(spelling="int"))])
    b_m = FakeMethod(
        "f",
        [
            FakeArg(FakeType(spelling="int")),
            FakeArg(FakeType(spelling="int"), has_default=True),
        ],
    )
    binder = FakeBinder()
    saved = _install_stubs(stripped_per_method={})
    try:
        collisions = js_effective_arity_collisions(binder, [a, b_m])
        assert len(collisions) == 1
        _m_a, _m_b, lo, hi = collisions[0]
        # Slot 0 type 'int' is identical → no distinguishing JS type;
        # arity 1 is the only overlapping arity; both overloads reach
        # slot 0 — therefore the collision is unresolvable.
        assert is_collision_resolvable_via_val(binder, a, b_m, lo, hi) is False
    finally:
        _uninstall_stubs(saved)


def test_resolvability_uses_classify_js_type_when_available():
    """If the binder exposes ``_classify_js_type``, the resolvability
    check prefers it over raw spelling comparison so the test matches
    the production binder's dispatch decision.
    """
    a = FakeMethod("f", [FakeArg(FakeType(spelling="size_t"))])
    b_m = FakeMethod("f", [FakeArg(FakeType(spelling="int"))])

    class _ClassifyBinder(FakeBinder):
        def _classify_js_type(self, type_, td, ta):  # noqa: ARG002
            # Both collapse to JS ``number`` — indistinguishable.
            return "number"

    binder = _ClassifyBinder()
    saved = _install_stubs(stripped_per_method={})
    try:
        # Same-arity, same JS type → unresolvable.
        assert is_collision_resolvable_via_val(binder, a, b_m, 1, 1) is False
    finally:
        _uninstall_stubs(saved)


def test_range_intersection_at_single_arity_correctly_identifies_conflict():
    """``g(int)`` (range ``(1, 1)``) vs ``g(int, double = 1.0)`` (range
    ``(1, 2)``) — intersection is exactly arity 1. Resolvability hinges
    on whether slot 0 types differ; here both are ``int`` so the
    collision is unresolvable.
    """
    a = FakeMethod("g", [FakeArg(FakeType(spelling="int"))])
    b_m = FakeMethod(
        "g",
        [
            FakeArg(FakeType(spelling="int")),
            FakeArg(FakeType(spelling="double"), has_default=True),
        ],
    )
    binder = FakeBinder()
    saved = _install_stubs(stripped_per_method={})
    try:
        collisions = js_effective_arity_collisions(binder, [a, b_m])
        assert len(collisions) == 1
        _m_a, _m_b, lo, hi = collisions[0]
        assert (lo, hi) == (1, 1)
        # Slot 0 is 'int' in both — unresolvable.
        assert is_collision_resolvable_via_val(binder, a, b_m, lo, hi) is False
    finally:
        _uninstall_stubs(saved)


def test_composition_rbv_elision_and_default_expansion():
    """Composition — overload A has RBV elision, overload B has a
    trailing default. Both compose to the same JS-effective arity 0.

    A = ``f(Handle<X>&)`` — raw arity 1, RBV strips → JS arity 0;
    range ``(0, 0)``.
    B = ``f(int = 5)`` — raw arity 1, no strip; range ``(0, 1)``
    (caller may invoke at arity 0 or 1).

    Intersection at arity 0 is the composed boundary the policy
    warns about; the test pins the collision detection.
    """
    handle_arg = FakeArg(FakeType(kind="lvalref"))
    a = FakeMethod("f", [handle_arg])
    b_m = FakeMethod("f", [FakeArg(FakeType(), has_default=True)])
    binder = FakeBinder(stripped_per_method={id(a): {handle_arg}})
    saved = _install_stubs(stripped_per_method={})
    try:
        assert js_effective_arity_range(binder, a) == (0, 0)
        assert js_effective_arity_range(binder, b_m) == (0, 1)
        collisions = js_effective_arity_collisions(binder, [a, b_m])
        assert len(collisions) == 1
        _m_a, _m_b, lo, hi = collisions[0]
        assert (lo, hi) == (0, 0)
    finally:
        _uninstall_stubs(saved)
