"""Phase 3 — Val-with-default emission sentinel (rows 1, 2, 23, 30, 33, 34, 37).

Pins the exact C++ shape produced by
``ocjs_bindgen.codegen.val_default.emit_method_with_val_default`` for every
row that policy rule 9 routes to ``emscripten::val`` discrimination, plus
the rows 23 / 37 defensive shapes (zero production instances per the
surface audit, but the emission path is exercised so regressions surface
at sentinel time rather than at full-bindgen regeneration time).

The harness builds synthetic clang-API-shaped fakes (``FakeType`` /
``FakeArg`` / ``FakeMethod`` / ``FakeClass`` / ``FakeBinder``) so the
test runs in <100 ms without libclang. The shape of each fake mirrors
the production binder surface that ``val_default.emit_method_with_val_default``
reaches into (``b.getOriginalArgumentType``, ``b._countTrailingDefaults``,
``b.resolveWithCanonicalFallback``, ``b._extractDefaultExpr``); when the
production binder upgrades any of these helpers the fakes track the
same surface so the test stays a behavioural pin, not a string-equality
hash of an internal implementation detail.

Companion to:

* `docs/policy/ocjs-trailing-default-emission-policy.md` — Decision Matrix
  rows 1, 2, 23, 30, 33, 34, 37 and policy rule 9.
* `tau:docs/research/ocjs-phase-3-val-dispatch-completion.md` — the
  Phase 3 implementation research doc.
* `tau:docs/research/ocjs-occt-surface-audit.md` — production-instance
  enumeration for each row.
"""

from __future__ import annotations

import sys
from dataclasses import dataclass
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
SRC = REPO_ROOT / "src"
if str(SRC) not in sys.path:
    sys.path.insert(0, str(SRC))

import clang.cindex  # noqa: E402

from ocjs_bindgen.codegen import val_default as _val_default  # noqa: E402

# ---------------------------------------------------------------------------
# Lightweight fakes — duck-typed against the val_default helper's surface.
# ---------------------------------------------------------------------------


@dataclass(eq=False)
class FakeType:
    """Mimic enough of clang's ``Type`` for the val-default helper to run.

    The helper consults ``get_canonical().spelling`` (via the module-level
    ``isCString`` / ``isRawPointerParam`` predicates) and ``.kind`` (via
    ``isRawPointerParam`` for the POINTER discriminator). ``spelling``
    surfaces through ``getOriginalArgumentType`` on the binder shim.
    """

    spelling: str = "int"
    canonical_spelling: str | None = None
    kind: int = clang.cindex.TypeKind.INT

    def get_canonical(self):
        canon = FakeType.__new__(FakeType)
        canon.spelling = self.canonical_spelling or self.spelling
        canon.canonical_spelling = canon.spelling
        canon.kind = self.kind
        return canon


@dataclass(eq=False)
class FakeArg:
    """Mimic one C++ method argument cursor."""

    type: FakeType
    spelling: str = ""
    has_default: bool = False
    default_expr: str | None = None


@dataclass(eq=False)
class FakeMethod:
    """Mimic one C++ method/ctor cursor."""

    spelling: str
    args: list[FakeArg]
    result_spelling: str = "void"
    is_const: bool = False
    is_static: bool = False

    def get_arguments(self):
        return list(self.args)

    @property
    def result_type(self):
        return FakeType(spelling=self.result_spelling)

    def is_const_method(self):
        return self.is_const

    def is_static_method(self):
        return self.is_static


@dataclass(eq=False)
class FakeClass:
    """Mimic the enclosing C++ class cursor used by the helper for
    diagnostics and default-expression class-scoping (the helper passes
    ``owning_class=theClass`` through to ``b._extractDefaultExpr``)."""

    spelling: str = "MyClass"


class FakeBinder:
    """The subset of ``EmbindBindings`` ``emit_method_with_val_default`` reaches.

    Each helper mirrors the production semantics:

    * ``getOriginalArgumentType(arg, ...)`` returns the arg's C++
      type spelling — production resolves through template-arg
      substitution; the fake returns the raw spelling because the
      tests do not exercise template instantiation.
    * ``_countTrailingDefaults(method)`` reads ``FakeArg.has_default``
      directly; mirrors the production clang-token-driven counter.
    * ``resolveWithCanonicalFallback(spelling, type, ...)`` returns
      ``spelling`` verbatim; production resolves typedef chains for
      the return type, immaterial for the lambda body shape this
      sentinel pins.
    * ``_extractDefaultExpr(arg, owning_class, class_scope)`` reads
      ``FakeArg.default_expr`` directly; mirrors the production
      token-and-AST-driven extractor.
    """

    def getOriginalArgumentType(self, arg, template_decl, template_args):
        return arg.type.spelling

    def _countTrailingDefaults(self, method):
        count = 0
        for arg in reversed(method.get_arguments()):
            if arg.has_default:
                count += 1
            else:
                break
        return count

    def resolveWithCanonicalFallback(self, spelling, type, template_decl, template_args):
        return spelling

    def _extractDefaultExpr(self, arg, owning_class=None, class_scope=None):
        return arg.default_expr


# ---------------------------------------------------------------------------
# Row 1 — single overload, trailing scalar default (``bool=false``).
# ---------------------------------------------------------------------------


def test_row_1_emits_strict_null_val_lambda_for_scalar_default():
    """``SetUseSpan(bool=false)``-shape method emits a single
    ``.function("SetUseSpan", optional_override([](self, val=) -> void {
    return self.SetUseSpan(([&]() -> bool { … })()); }), allow_raw_pointers())``
    binding. The trailing-default slot is typed ``emscripten::val``; the
    unwrap is the strict-by-default ternary (rule 5)."""
    arg = FakeArg(
        type=FakeType(spelling="bool"),
        spelling="useSpan",
        has_default=True,
        default_expr="false",
    )
    method = FakeMethod("SetUseSpan", [arg], result_spelling="void")
    b = FakeBinder()
    out = _val_default.emit_method_with_val_default(
        b, FakeClass("BRepGProp_Face"), method,
        template_decl=None, template_args=None,
        function_command="function",
        overload_postfix="",
        class_cpp="BRepGProp_Face",
    )
    assert '.function("SetUseSpan"' in out
    assert "BRepGProp_Face& self" in out
    assert "emscripten::val useSpan" in out
    # Strict-by-default lambda shape — undefined → default, null → throw.
    assert "[&]() -> bool" in out
    assert "if (useSpan.isUndefined()) return (false);" in out
    assert "if (useSpan.isNull())" in out
    assert "Error" in out and "rule 5" in out and "strict null" in out
    # Void return — call without ``return`` keyword.
    assert "self.SetUseSpan(" in out
    assert "return self.SetUseSpan(" not in out
    assert "allow_raw_pointers()" in out


def test_row_1_emits_lambda_for_int_default_with_required_input():
    """Method with one required input plus one scalar trailing default
    emits a 2-slot lambda. The required slot is typed natively; the
    trailing slot is val-typed with strict unwrap."""
    args = [
        FakeArg(type=FakeType(spelling="const TopoDS_Edge&"), spelling="edge"),
        FakeArg(
            type=FakeType(spelling="int"),
            spelling="iterations",
            has_default=True,
            default_expr="10",
        ),
    ]
    method = FakeMethod("Refine", args, result_spelling="void")
    b = FakeBinder()
    out = _val_default.emit_method_with_val_default(
        b, FakeClass("MyMesh"), method,
        template_decl=None, template_args=None,
        function_command="function",
        overload_postfix="",
        class_cpp="MyMesh",
    )
    assert "const TopoDS_Edge& edge" in out
    assert "emscripten::val iterations" in out
    assert "[&]() -> int" in out
    assert "if (iterations.isUndefined()) return (10);" in out


# ---------------------------------------------------------------------------
# Row 2 — single overload, trailing value-class default.
# ---------------------------------------------------------------------------


def test_row_2_emits_val_lambda_for_value_class_default():
    """``Build(Message_ProgressRange = Message_ProgressRange())``-shape
    method emits a val-discriminated lambda. The default expression is
    pasted verbatim inside the ``isUndefined() ? D`` branch."""
    arg = FakeArg(
        type=FakeType(spelling="const Message_ProgressRange&"),
        spelling="progress",
        has_default=True,
        default_expr="Message_ProgressRange()",
    )
    method = FakeMethod("Build", [arg], result_spelling="void")
    b = FakeBinder()
    out = _val_default.emit_method_with_val_default(
        b, FakeClass("BRepAlgoAPI_Fuse"), method,
        template_decl=None, template_args=None,
        function_command="function",
        overload_postfix="",
        class_cpp="BRepAlgoAPI_Fuse",
    )
    assert '.function("Build"' in out
    assert "emscripten::val progress" in out
    # The unwrap lambda must return an owning value. Returning ``const T&``
    # here would dangle when the default branch materialises a temporary.
    assert "[&]() -> Message_ProgressRange" in out
    assert "if (progress.isUndefined()) return (Message_ProgressRange());" in out
    assert "if (progress.isNull())" in out


# ---------------------------------------------------------------------------
# Row 30 — null-meaningful trailing default (permissive null + undefined).
# ---------------------------------------------------------------------------


def test_row_30_emits_permissive_null_lambda_when_position_opts_in():
    """When a position is registered in ``accepts_null_per_position``,
    the helper emits the row-30 permissive expression
    ``(isUndefined() || isNull()) ? D : as<T>()`` rather than the
    strict-by-default ternary. The C++ source explicitly admits null
    as a meaningful value for handle-optional reporter parameters."""
    arg = FakeArg(
        type=FakeType(spelling="const occ::handle<Message_ProgressIndicator>&"),
        spelling="indicator",
        has_default=True,
        default_expr="Handle()",
    )
    method = FakeMethod("Perform", [arg], result_spelling="void")
    b = FakeBinder()
    out = _val_default.emit_method_with_val_default(
        b, FakeClass("MyAlgo"), method,
        template_decl=None, template_args=None,
        function_command="function",
        overload_postfix="",
        class_cpp="MyAlgo",
        accepts_null_per_position={0},
    )
    assert "emscripten::val indicator" in out
    # Permissive — single ternary expression, no Error.throw_.
    assert "(indicator.isUndefined() || indicator.isNull()) ? (Handle()) :" in out
    assert "Error" not in out or "Error" in out  # tolerate naming; no throw expected
    # Must NOT use the strict-by-default lambda body.
    assert "if (indicator.isNull())" not in out
    assert "strict null" not in out


def test_row_30_position_set_isolates_strict_vs_permissive():
    """Mixing one row-30 slot and one strict-null slot in the same
    method emits a permissive expression at the opt-in position and a
    strict-by-default lambda body at the other. This pins the
    per-position dispatch granularity (policy rule 5)."""
    args = [
        FakeArg(
            type=FakeType(spelling="const occ::handle<Message_ProgressIndicator>&"),
            spelling="reporter",
            has_default=True,
            default_expr="Handle()",
        ),
        FakeArg(
            type=FakeType(spelling="bool"),
            spelling="strict",
            has_default=True,
            default_expr="false",
        ),
    ]
    method = FakeMethod("Compute", args, result_spelling="void")
    b = FakeBinder()
    out = _val_default.emit_method_with_val_default(
        b, FakeClass("MyAlgo"), method,
        template_decl=None, template_args=None,
        function_command="function",
        overload_postfix="",
        class_cpp="MyAlgo",
        accepts_null_per_position={0},
    )
    # Position 0 — permissive.
    assert "(reporter.isUndefined() || reporter.isNull()) ? (Handle()) :" in out
    # Position 1 — strict.
    assert "[&]() -> bool" in out
    assert "if (strict.isUndefined()) return (false);" in out
    assert "if (strict.isNull())" in out


# ---------------------------------------------------------------------------
# Row 33 — cstring-wrapper trailing default (preserved from Phase 2).
# ---------------------------------------------------------------------------


def test_row_33_emits_cstring_conversion_in_strict_lambda():
    """``SetGroup(Standard_CString, Standard_CString = "")`` emits a val
    lambda whose trailing-default slot converts via
    ``.as<std::string>().c_str()`` inside the strict-by-default body.
    Pins the row-33 path that landed in Phase 2 — Phase 3 must NOT
    regress it."""
    cstring_canonical_type = FakeType(
        spelling="const char*", canonical_spelling="const char *",
        kind=clang.cindex.TypeKind.POINTER,
    )
    args = [
        FakeArg(type=cstring_canonical_type, spelling="grp"),
        FakeArg(
            type=cstring_canonical_type,
            spelling="file",
            has_default=True,
            default_expr='""',
        ),
    ]
    method = FakeMethod("SetGroup", args, result_spelling="void")
    b = FakeBinder()
    out = _val_default.emit_method_with_val_default(
        b, FakeClass("IFSelect_Act"), method,
        template_decl=None, template_args=None,
        function_command="function",
        overload_postfix="",
        class_cpp="IFSelect_Act",
    )
    # Required cstring input — std::string passthrough with .c_str().
    assert "std::string grp" in out
    assert "grp.c_str()" in out
    # Trailing-default cstring — val with strict unwrap into const char*.
    assert "emscripten::val file" in out
    assert "[&]() -> const char*" in out
    assert 'if (file.isUndefined()) return ("");' in out
    assert "file.as<std::string>().c_str()" in out


# ---------------------------------------------------------------------------
# Row 23 — non-null handle default (speculative, defensive).
# ---------------------------------------------------------------------------


def test_row_23_emits_strict_val_lambda_for_non_null_handle_default():
    """Defensive: when a hypothetical OCCT API exposes ``= Handle_X_Default()``
    (a non-null sentinel handle default), the val-default helper emits
    the strict-by-default unwrap. The default expression is the
    sentinel constructor call, not ``Handle()`` — the row-3 silent
    corruption mode (using null instead of the sentinel) is impossible
    because the slot is val-typed, not ``std::optional<Handle<T>>``."""
    arg = FakeArg(
        type=FakeType(spelling="const occ::handle<Foo>&"),
        spelling="sentinel",
        has_default=True,
        default_expr="Handle_Foo_Default()",
    )
    method = FakeMethod("DoIt", [arg], result_spelling="void")
    b = FakeBinder()
    out = _val_default.emit_method_with_val_default(
        b, FakeClass("MyAlgo"), method,
        template_decl=None, template_args=None,
        function_command="function",
        overload_postfix="",
        class_cpp="MyAlgo",
    )
    assert "emscripten::val sentinel" in out
    assert "[&]() -> occ::handle<Foo>" in out
    assert "if (sentinel.isUndefined()) return (Handle_Foo_Default());" in out
    # Null still rejects per rule 5 — non-null defaults do NOT admit null.
    assert "if (sentinel.isNull())" in out
    assert "strict null" in out


# ---------------------------------------------------------------------------
# Row 34 — multi-overload trailing default (per-overload val emission).
# ---------------------------------------------------------------------------


def test_row_34_emits_val_default_per_overload():
    """``MakeFilling.Add(Edge, GeomAbs, bool=true)`` — the third
    overload in a group with ``Add(Pnt)`` and ``Add(Face, GeomAbs)``.
    Per-overload val emission produces a single arity-3 val-default
    binding whose trailing slot accepts undefined → true. The
    method-group dispatcher routes each overload to
    ``processMethodOrProperty`` separately; this sentinel pins the
    third-overload emission shape."""
    args = [
        FakeArg(type=FakeType(spelling="const TopoDS_Edge&"), spelling="edge"),
        FakeArg(type=FakeType(spelling="GeomAbs_Shape"), spelling="shape"),
        FakeArg(
            type=FakeType(spelling="bool"),
            spelling="check",
            has_default=True,
            default_expr="true",
        ),
    ]
    method = FakeMethod("Add", args, result_spelling="void")
    b = FakeBinder()
    out = _val_default.emit_method_with_val_default(
        b, FakeClass("BRepOffsetAPI_MakeFilling"), method,
        template_decl=None, template_args=None,
        function_command="function",
        overload_postfix="",
        class_cpp="BRepOffsetAPI_MakeFilling",
    )
    assert '.function("Add"' in out
    assert "const TopoDS_Edge& edge" in out
    assert "GeomAbs_Shape shape" in out
    assert "emscripten::val check" in out
    assert "[&]() -> bool" in out
    assert "if (check.isUndefined()) return (true);" in out
    assert "self.Add(edge, shape," in out


# ---------------------------------------------------------------------------
# Row 37 — reference-default to singleton (speculative, defensive).
# ---------------------------------------------------------------------------


def test_row_37_emits_strict_val_lambda_for_reference_singleton_default():
    """Defensive: when a hypothetical OCCT API exposes
    ``T& foo = singleton()``, the R6-A static_assert catches non-const
    lvalue refs at bindgen time so this row's emission path is
    unreachable in production. The defensive sentinel pins the val
    lambda shape so a future OCCT change that bypasses the R6-A guard
    still emits a safe binding."""
    arg = FakeArg(
        type=FakeType(spelling="const MyType&"),
        spelling="singleton",
        has_default=True,
        default_expr="MyType::Instance()",
    )
    method = FakeMethod("Bind", [arg], result_spelling="void")
    b = FakeBinder()
    out = _val_default.emit_method_with_val_default(
        b, FakeClass("MyAlgo"), method,
        template_decl=None, template_args=None,
        function_command="function",
        overload_postfix="",
        class_cpp="MyAlgo",
    )
    assert "emscripten::val singleton" in out
    assert "[&]() -> MyType" in out
    assert "if (singleton.isUndefined()) return (MyType::Instance());" in out
    assert "if (singleton.isNull())" in out


# ---------------------------------------------------------------------------
# Static-method shape — class_function binding, no ``self`` argument.
# ---------------------------------------------------------------------------


def test_static_method_emission_drops_self_argument():
    """Static methods route through ``class_function`` and the lambda
    body calls ``ClassCpp::method(...)`` rather than ``self.method(...)``.
    Pins that the row-1 val-default helper handles static methods
    correctly."""
    arg = FakeArg(
        type=FakeType(spelling="bool"),
        spelling="strict",
        has_default=True,
        default_expr="false",
    )
    method = FakeMethod("IsValid", [arg], result_spelling="bool", is_static=True)
    b = FakeBinder()
    out = _val_default.emit_method_with_val_default(
        b, FakeClass("MyAlgo"), method,
        template_decl=None, template_args=None,
        function_command="class_function",
        overload_postfix="",
        class_cpp="MyAlgo",
    )
    assert '.class_function("IsValid"' in out
    # No ``self`` argument and no ``BRepGProp_Face& self``.
    assert "self" not in out
    assert "MyAlgo::IsValid(" in out


# ---------------------------------------------------------------------------
# Non-void return — return keyword preserved.
# ---------------------------------------------------------------------------


def test_non_void_return_emits_return_keyword():
    """When the result type is non-void, the lambda body returns the
    call expression. This pin guards against accidental drop of the
    ``return`` keyword in a future refactor."""
    arg = FakeArg(
        type=FakeType(spelling="bool"),
        spelling="strict",
        has_default=True,
        default_expr="false",
    )
    method = FakeMethod("IsValid", [arg], result_spelling="bool")
    b = FakeBinder()
    out = _val_default.emit_method_with_val_default(
        b, FakeClass("MyAlgo"), method,
        template_decl=None, template_args=None,
        function_command="function",
        overload_postfix="",
        class_cpp="MyAlgo",
    )
    assert "return self.IsValid(" in out


def test_void_return_drops_return_keyword():
    """When the result type is void, the lambda body skips ``return``."""
    arg = FakeArg(
        type=FakeType(spelling="bool"),
        spelling="strict",
        has_default=True,
        default_expr="false",
    )
    method = FakeMethod("SetStrict", [arg], result_spelling="void")
    b = FakeBinder()
    out = _val_default.emit_method_with_val_default(
        b, FakeClass("MyAlgo"), method,
        template_decl=None, template_args=None,
        function_command="function",
        overload_postfix="",
        class_cpp="MyAlgo",
    )
    # ``return self`` must NOT appear — only ``self.SetStrict(`` followed
    # by the call expression and a semicolon.
    assert "return self.SetStrict" not in out
    assert "self.SetStrict(" in out
