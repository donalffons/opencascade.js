"""Sentinel — trailing primitive-output params are optional in the `.d.ts`.

OCCT pure-output methods take their results through trailing non-const
primitive references (`Standard_Real&`, `Standard_Integer&`, enum&). Under the
Input-Passthrough RBV contract these slots stay in the JS-visible signature
(the value copies in, the computed result returns via the envelope's named
field), but the libembind arity-pad dispatcher
(`src/patches/libembind-overloading.patch` hunk 1) lets a caller OMIT the
trailing slots: the missing args pad to `undefined`, the single registered
signature is selected, and the seed is ignored. Verified at runtime against the
built WASM:

    BRepTools.UVBounds(face)                       -> { UMin, UMax, VMin, VMax }
    GeomAPI_ProjectPointOnSurf.LowerDistanceParameters() -> { U, V }

so the emitted `.d.ts` must render that trailing primitive-output run OPTIONAL
(`UMin?: number, …`). The optionalisation is **guarded** by kept-arity
uniqueness: when two same-name overloads collide at the same JS-effective arity
(`Geom_Surface.Bounds`, two arity-4 overloads), a short call pads to
`undefined` against a `number` slot and `$getSignature` throws
`invalid signature (undefined,…)` — so those slots stay REQUIRED to keep the
`.d.ts` from type-admitting a call that throws at runtime.

A second, structurally distinct collision source is **virtual** output
methods: OCCT declares `Bounds` `virtual`/`= 0` on `Geom_Surface` and
`final`-overrides it on every concrete surface, so the bindgen emits an embind
binding on each declaring class and a derived instance carries two same-arity
registrations. That collision is invisible from the base (no ancestor declares
`Bounds`) and from an isolated sibling scan, so the guard rejects ALL virtual
output methods — virtuality is the precise, locally-decidable structural cause.

This sentinel pins the three binder helpers that implement that rule
(`_outputArityIsUnambiguous`, `_trailingPrimitiveOutputRun`, `_buildKeptArgs`).
They
are exec-extracted from `bindings.py` as free functions (importing the module
wholesale trips the LLVM 17 toolchain check at import time). The output-param
PREDICATES (`isPrimitiveOutputParam` / `isClassOutputParam` / `shouldStripParam`)
have their own behavioural sentinels, so here they are faked at the call
boundary — the thing under test is the run-detection, the arity gate, and the
`?` splice, not the predicate internals.
"""

from __future__ import annotations

import sys
from dataclasses import dataclass, field
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
SRC = REPO_ROOT / "src"
if str(SRC) not in sys.path:
    sys.path.insert(0, str(SRC))

import clang.cindex  # noqa: E402
import pytest  # noqa: E402

from ocjs_bindgen.codegen import rbv as _rbv  # noqa: E402

# ---------------------------------------------------------------------------
# Fakes — duck-typed against the clang surface the three helpers reach.
# ---------------------------------------------------------------------------


@dataclass(eq=False)
class FakeArgType:
    """Stand-in for a clang argument ``Type``.

    The faked predicates read three booleans off it; the helpers never touch
    the real clang `Type` surface (that is the predicates' job, pinned
    separately).
    """

    ts: str = "number"
    primitive_output: bool = False
    class_output: bool = False
    strip: bool = False


@dataclass(eq=False)
class FakeArg:
    """One C++ method argument cursor — `.type` and `.spelling` are consulted."""

    name: str
    type: FakeArgType


@dataclass(eq=False)
class FakeMethod:
    """One C++ method cursor for the arity-uniqueness walk + arg rendering."""

    spelling: str
    args: list = field(default_factory=list)
    static: bool = False
    virtual: bool = False
    access: object = clang.cindex.AccessSpecifier.PUBLIC
    kind: object = clang.cindex.CursorKind.CXX_METHOD

    def get_arguments(self):
        return list(self.args)

    def is_static_method(self):
        return self.static

    def is_virtual_method(self):
        return self.virtual

    @property
    def access_specifier(self):
        return self.access


@dataclass(eq=False)
class FakeClass:
    """Owning class cursor — `_keptArityIsUnique` walks `get_children()`."""

    children: list = field(default_factory=list)

    def get_children(self):
        return list(self.children)


def _prim(name: str) -> FakeArg:
    """A trailing primitive (pure-output) slot — `Standard_Real&` shaped."""
    return FakeArg(name, FakeArgType(ts="number", primitive_output=True))


def _value_input(name: str, ts: str = "number") -> FakeArg:
    """A by-value input slot (e.g. `Standard_Integer Index`) — not an output."""
    return FakeArg(name, FakeArgType(ts=ts))


def _class_output(name: str, ts: str) -> FakeArg:
    """A default-constructible class output (`gp_Pnt&`) — mutated in place,
    so it must stay required even when trailing."""
    return FakeArg(name, FakeArgType(ts=ts, primitive_output=False, class_output=True))


def _handle_output(name: str, ts: str) -> FakeArg:
    """A `Handle<T>&` output — elided from the JS surface (`shouldStripParam`)."""
    return FakeArg(name, FakeArgType(ts=ts, strip=True))


# ---------------------------------------------------------------------------
# Exec-shim — load the three helpers without importing the full module.
# ---------------------------------------------------------------------------


def _load_helpers():
    src_path = SRC / "ocjs_bindgen" / "codegen" / "bindings.py"
    source = src_path.read_text()
    start = "  def _outputArityIsUnambiguous(self, theClass, method):"
    end = "  def processMethodOrProperty(self, theClass, method"
    if start not in source or end not in source:
        raise RuntimeError(
            "Could not locate the trailing-primitive-output helpers in "
            "bindings.py — the optional-output emission fix may have been "
            "reverted or renamed."
        )
    start_at = source.index(start)
    block = source[start_at : source.index(end, start_at)]
    dedented = "\n".join(line[2:] if line.startswith("  ") else line for line in block.splitlines())
    namespace: dict = {
        "clang": clang,
        "_rbv": _rbv,
        # Faked predicate boundary (real predicates have their own sentinels).
        "shouldStripParam": lambda t, m: t.strip,
        "isPrimitiveOutputParam": lambda t: t.primitive_output,
        "isClassOutputParam": lambda t: t.class_output,
    }
    exec(compile(dedented, str(src_path), "exec"), namespace)
    return namespace


_NS = _load_helpers()


@pytest.fixture(autouse=True)
def _fake_rbv_predicates(monkeypatch):
    monkeypatch.setattr(_rbv, "shouldStripParam", lambda t, m: t.strip)
    monkeypatch.setattr(_rbv, "isPrimitiveOutputParam", lambda t: t.primitive_output)


class _Binder:
    """Minimal `self` carrying the three extracted helpers + the two
    arg-rendering primitives `_buildKeptArgs` calls. The renderers echo the
    `name: type` shape the real `getTypescriptDefFromArg*` produce so the `?`
    splice is exercised exactly as in production."""

    _outputArityIsUnambiguous = _NS["_outputArityIsUnambiguous"]
    _trailingPrimitiveOutputRun = _NS["_trailingPrimitiveOutputRun"]
    _buildKeptArgs = _NS["_buildKeptArgs"]

    def getTypescriptDefFromArg(self, arg, index, templateDecl=None, templateArgs=None):
        return f"{arg.name}: {arg.type.ts}"

    def getTypescriptDefFromArgWithName(self, arg, name, templateDecl=None, templateArgs=None):
        return f"{name}: {arg.type.ts}"


def _build(method, theClass=None):
    binder = _Binder()
    return binder._buildKeptArgs(method, method.get_arguments(), None, None, theClass=theClass)


# ---------------------------------------------------------------------------
# _trailingPrimitiveOutputRun — contiguous trailing run detection.
# ---------------------------------------------------------------------------


def test_trailing_run_spans_a_pure_output_tail():
    # UVBounds-shaped: (Face input, UMin&, UMax&, VMin&, VMax&).
    m = FakeMethod(
        "UVBounds",
        [_value_input("F", "TopoDS_Face"), _prim("UMin"), _prim("UMax"), _prim("VMin"), _prim("VMax")],
        static=True,
    )
    kept = [(i, a) for i, a in enumerate(m.get_arguments())]
    assert _Binder()._trailingPrimitiveOutputRun(kept, m) == 1


def test_trailing_run_spans_every_slot_when_all_are_outputs():
    # LowerDistanceParameters-shaped: (U&, V&).
    m = FakeMethod("LowerDistanceParameters", [_prim("U"), _prim("V")])
    kept = [(i, a) for i, a in enumerate(m.get_arguments())]
    assert _Binder()._trailingPrimitiveOutputRun(kept, m) == 0


def test_trailing_run_is_empty_without_a_pure_output_tail():
    m = FakeMethod("Compute", [_value_input("a"), _value_input("b")])
    kept = [(i, a) for i, a in enumerate(m.get_arguments())]
    assert _Binder()._trailingPrimitiveOutputRun(kept, m) == 2


def test_a_non_output_after_the_outputs_terminates_the_run():
    # (out&, in) — the output is NOT trailing, so it cannot be optional.
    m = FakeMethod("Mixed", [_prim("out"), _value_input("flag")])
    kept = [(i, a) for i, a in enumerate(m.get_arguments())]
    assert _Binder()._trailingPrimitiveOutputRun(kept, m) == 2


def test_class_output_terminates_the_run_and_stays_required():
    # (P: gp_Pnt&, t&) — the class ref is mutated in place; only the trailing
    # primitive is eligible.
    m = FakeMethod("D0", [_class_output("P", "gp_Pnt"), _prim("t")])
    kept = [(i, a) for i, a in enumerate(m.get_arguments())]
    assert _Binder()._trailingPrimitiveOutputRun(kept, m) == 1


# ---------------------------------------------------------------------------
# _outputArityIsUnambiguous — collision guard (virtual + same-class arity).
# ---------------------------------------------------------------------------


def test_virtual_output_method_is_never_unambiguous():
    # Geom_Surface::Bounds — `virtual void Bounds(double&,…) const = 0`.
    m = FakeMethod("Bounds", [_prim("U1"), _prim("U2"), _prim("V1"), _prim("V2")], virtual=True)
    cls = FakeClass([m])
    assert _Binder()._outputArityIsUnambiguous(cls, m) is False


def test_virtual_override_with_no_visible_sibling_still_rejected():
    # Geom_SphericalSurface::Bounds — `void Bounds(double&,…) const final;`.
    # is_virtual_method() is True for the implicit override even though the
    # base declaration lives on another class the sibling scan cannot see.
    m = FakeMethod("Bounds", [_prim("U1"), _prim("U2"), _prim("V1"), _prim("V2")], virtual=True)
    cls = FakeClass([m])
    assert _Binder()._outputArityIsUnambiguous(cls, m) is False


def test_virtual_method_rejected_even_without_owning_class():
    # Synthesized base-override path (theClass=None) must still honour
    # virtuality — a synthesized `Bounds` is the base half of the collision.
    m = FakeMethod("Bounds", [_prim("U1"), _prim("U2")], virtual=True)
    assert _Binder()._outputArityIsUnambiguous(None, m) is False


def test_unique_arity_when_no_same_name_sibling():
    m = FakeMethod("UVBounds", [_value_input("F"), _prim("UMin"), _prim("UMax"), _prim("VMin"), _prim("VMax")])
    cls = FakeClass([m])
    assert _Binder()._outputArityIsUnambiguous(cls, m) is True


def test_colliding_same_arity_overloads_are_not_unique():
    # Two arity-4 Bounds overloads — the runtime-throwing collision case.
    a = FakeMethod("Bounds", [_prim("U1"), _prim("U2"), _prim("V1"), _prim("V2")])
    b = FakeMethod("Bounds", [_prim("U1"), _prim("U2"), _prim("V1"), _prim("V2")])
    cls = FakeClass([a, b])
    assert _Binder()._outputArityIsUnambiguous(cls, a) is False
    assert _Binder()._outputArityIsUnambiguous(cls, b) is False


def test_distinct_arities_are_each_unique():
    a = FakeMethod("Value", [_prim("x")])
    b = FakeMethod("Value", [_prim("x"), _prim("y")])
    cls = FakeClass([a, b])
    assert _Binder()._outputArityIsUnambiguous(cls, a) is True
    assert _Binder()._outputArityIsUnambiguous(cls, b) is True


def test_handle_elision_collapses_arity_for_uniqueness():
    # Two overloads whose only difference is an elided Handle<T>& output land
    # on the SAME kept arity and therefore collide.
    a = FakeMethod("Project", [_prim("u"), _handle_output("C", "Handle_Geom_Curve")])
    b = FakeMethod("Project", [_prim("u")])
    cls = FakeClass([a, b])
    assert _Binder()._outputArityIsUnambiguous(cls, a) is False


def test_static_and_instance_namesakes_do_not_collide():
    static_m = FakeMethod("Bounds", [_prim("a"), _prim("b")], static=True)
    instance_m = FakeMethod("Bounds", [_prim("a"), _prim("b")], static=False)
    cls = FakeClass([static_m, instance_m])
    # Different static-ness => separate Embind registrations => no collision.
    assert _Binder()._outputArityIsUnambiguous(cls, static_m) is True


def test_private_namesake_is_ignored():
    pub = FakeMethod("Bounds", [_prim("a"), _prim("b")])
    priv = FakeMethod(
        "Bounds", [_prim("a"), _prim("b")], access=clang.cindex.AccessSpecifier.PRIVATE
    )
    cls = FakeClass([pub, priv])
    assert _Binder()._outputArityIsUnambiguous(cls, pub) is True


def test_no_owning_class_is_unique_by_construction():
    # Synthesized base overloads pass theClass=None.
    m = FakeMethod("Bounds", [_prim("a"), _prim("b")])
    assert _Binder()._outputArityIsUnambiguous(None, m) is True


# ---------------------------------------------------------------------------
# _buildKeptArgs — the `?` splice, end to end.
# ---------------------------------------------------------------------------


def test_uvbounds_trailing_outputs_render_optional():
    m = FakeMethod(
        "UVBounds",
        [_value_input("F", "TopoDS_Face"), _prim("UMin"), _prim("UMax"), _prim("VMin"), _prim("VMax")],
        static=True,
    )
    cls = FakeClass([m])
    assert _build(m, cls) == (
        "F: TopoDS_Face, UMin?: number, UMax?: number, VMin?: number, VMax?: number"
    )


def test_lower_distance_parameters_all_optional():
    m = FakeMethod("LowerDistanceParameters", [_prim("U"), _prim("V")])
    cls = FakeClass([m])
    assert _build(m, cls) == "U?: number, V?: number"


def test_colliding_bounds_stays_required():
    a = FakeMethod("Bounds", [_prim("U1"), _prim("U2"), _prim("V1"), _prim("V2")])
    b = FakeMethod("Bounds", [_prim("U1"), _prim("U2"), _prim("V1"), _prim("V2")])
    cls = FakeClass([a, b])
    assert _build(a, cls) == "U1: number, U2: number, V1: number, V2: number"


def test_virtual_bounds_stays_required():
    # The real Geom_Surface.Bounds shape: a lone virtual declaration. The
    # sibling scan sees no collision, but virtuality keeps it required so the
    # `.d.ts` never type-admits the zero-arg call that throws at runtime.
    m = FakeMethod("Bounds", [_prim("U1"), _prim("U2"), _prim("V1"), _prim("V2")], virtual=True)
    cls = FakeClass([m])
    assert _build(m, cls) == "U1: number, U2: number, V1: number, V2: number"


def test_class_output_tail_stays_required():
    m = FakeMethod("D0", [_value_input("U"), _class_output("P", "gp_Pnt")])
    cls = FakeClass([m])
    # The trailing gp_Pnt& is mutated in place — never optional.
    assert _build(m, cls) == "U: number, P: gp_Pnt"


def test_handle_output_is_elided_before_optionalisation():
    m = FakeMethod("Project", [_prim("u"), _handle_output("C", "Handle_Geom_Curve")])
    cls = FakeClass([m])
    # The Handle output is stripped; the surviving primitive is the trailing
    # run and renders optional.
    assert _build(m, cls) == "u?: number"


def test_input_then_output_keeps_input_required():
    m = FakeMethod("Sample", [_value_input("flag", "boolean"), _prim("t")])
    cls = FakeClass([m])
    assert _build(m, cls) == "flag: boolean, t?: number"
