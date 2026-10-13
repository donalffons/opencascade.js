"""Sentinel — method-path ``std::basic_string_view`` owning-cast routing.

Embind registers the owning string types (``std::string`` / ``std::wstring`` /
``std::u16string`` / ``std::u32string``) but has **no** binding for the
non-owning ``std::basic_string_view<CharT>``. A binding that declares a bare
view at the embind boundary — whether as a ``val::as<std::*string_view>()``
cast, a ``&Class::method`` / ``select_overload<…>`` method pointer, or a
wrapper-lambda parameter — leaves the view's type unbound and aborts module
registration with ``BindingError: parameter N has unknown type … string_view``.

The constructor and val-dispatch paths already lift such arguments through the
owning string (``predicates.types.stringViewOwningCast``, wired into
``codegen/dispatch.py`` and ``codegen/embind/constructor.py``). This sentinel
pins the **method** (non-constructor) emit paths fixed for R4 of
``tau:docs/research/ocjs-pr301-working-copy-audit.md``:

* ``predicates.types.stringViewOwningType`` — the single source of truth that
  resolves every string-view char width to its owning string, whether the type
  arrives as the libc++ alias (``…u16string_view``) or fully resolved
  (``std::__2::basic_string_view<char16_t, …>``), with or without a surrounding
  ``const &``. Returns ``None`` for non-views so other args are untouched.
* ``embind.method.has_string_view_arg`` — detects a string-view parameter so the
  method is forced onto a wrapper-lambda path (never a raw method pointer).
* ``embind.method.embind_lambda_param_type`` — declares a string-view slot as the
  owning string and defers every other type to ``getOriginalArgumentType``.

The helpers live with their production call site in
``codegen/embind/method.py``. The fakes are duck-typed against the exact clang
``Type`` surface the resolver reaches (``spelling`` / ``get_canonical`` /
``get_pointee`` / ``kind``); when the resolver upgrades, the fakes track the
same surface so this stays a behavioural pin, not a string-equality hash.
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

from ocjs_bindgen.codegen.embind.method import (  # noqa: E402
    embind_lambda_param_type,
    has_string_view_arg,
)
from ocjs_bindgen.predicates.types import (  # noqa: E402
    isStringView,
    stringViewOwningCast,
    stringViewOwningType,
)

# ---------------------------------------------------------------------------
# Fakes — duck-typed against the clang ``Type`` surface the resolver reaches.
# ---------------------------------------------------------------------------


@dataclass(eq=False)
class FakeType:
    """Mimic enough of a clang ``Type`` for the string-view resolver.

    ``stringViewOwningType`` consults ``spelling`` (declared), ``get_canonical``
    (resolved, then ``_stripReference`` via ``.kind`` / ``.get_pointee``) and —
    when the canonical spelling carries ``basic_string_view`` —
    ``get_num_template_arguments`` / ``get_template_argument_type``. A ``None``
    ``canonical_spelling`` means "same as declared" (the libc++-alias case).
    """

    spelling: str = "int"
    canonical_spelling: str | None = None
    kind: int = clang.cindex.TypeKind.RECORD
    template_arg_spelling: str | None = None
    _pointee: FakeType | None = None

    def get_canonical(self) -> FakeType:
        return FakeType(
            spelling=self.canonical_spelling or self.spelling,
            canonical_spelling=self.canonical_spelling or self.spelling,
            kind=self.kind,
            template_arg_spelling=self.template_arg_spelling,
            _pointee=self._pointee,
        )

    def get_pointee(self) -> FakeType:
        # Only reached for reference kinds (see ``_stripReference``).
        return self._pointee if self._pointee is not None else self

    def get_num_template_arguments(self) -> int:
        return 1 if self.template_arg_spelling else 0

    def get_template_argument_type(self, index: int) -> FakeType:
        return FakeType(spelling=self.template_arg_spelling or "")


@dataclass(eq=False)
class FakeArg:
    """One C++ method argument cursor — only ``.type`` is consulted here."""

    type: FakeType
    spelling: str = ""


def _ref(inner: FakeType) -> FakeType:
    """Wrap ``inner`` in a ``const &`` reference type (declared + canonical)."""
    return FakeType(
        spelling=f"const {inner.spelling} &",
        canonical_spelling=f"const {inner.canonical_spelling or inner.spelling} &",
        kind=clang.cindex.TypeKind.LVALUEREFERENCE,
        _pointee=inner,
    )


# Declared-alias spellings (how a string-view most often reaches codegen).
ALIAS = {
    "char": FakeType(spelling="std::string_view"),
    "wchar_t": FakeType(spelling="std::wstring_view"),
    "char16_t": FakeType(spelling="std::u16string_view"),
    "char32_t": FakeType(spelling="std::u32string_view"),
}

# Fully-resolved canonical spellings (libc++ inline namespace + element type).
CANONICAL = {
    "char": FakeType(
        spelling="std::string_view",
        canonical_spelling="std::__2::basic_string_view<char, std::__2::char_traits<char>>",
        template_arg_spelling="char",
    ),
    "char16_t": FakeType(
        spelling="std::u16string_view",
        canonical_spelling="std::__2::basic_string_view<char16_t, std::__2::char_traits<char16_t>>",
        template_arg_spelling="char16_t",
    ),
}

OWNING = {
    "char": "std::string",
    "wchar_t": "std::wstring",
    "char16_t": "std::u16string",
    "char32_t": "std::u32string",
}


class _StubBinder:
    """Minimal ``self`` for the extracted helpers. ``getOriginalArgumentType``
    is the only binder method ``_embindLambdaParamType`` calls for non-views;
    it echoes the declared spelling so the pin asserts a clean pass-through."""

    def getOriginalArgumentType(self, arg, templateDecl=None, templateArgs=None):
        return arg.type.spelling


# ---------------------------------------------------------------------------
# Predicate layer — the source of truth every method emit path routes through.
# ---------------------------------------------------------------------------


def test_owning_type_resolves_every_char_width_from_alias_spelling():
    for elem, view in ALIAS.items():
        assert isStringView(view) is True
        assert stringViewOwningType(view) == OWNING[elem]


def test_owning_type_resolves_from_const_ref_alias():
    for elem, view in ALIAS.items():
        ref = _ref(view)
        assert isStringView(ref) is True
        assert stringViewOwningType(ref) == OWNING[elem]


def test_owning_type_resolves_from_resolved_canonical_basic_string_view():
    # The fully-resolved libc++ form must resolve via the template argument,
    # independent of the declared alias name.
    for elem, view in CANONICAL.items():
        assert isStringView(view) is True
        assert stringViewOwningType(view) == OWNING[elem]
        assert stringViewOwningType(_ref(view)) == OWNING[elem]


def test_owning_cast_emits_owning_string_as_expression():
    # The cast the dispatch / constructor paths emit must read the JS arg as the
    # OWNING string, never as the unbound view.
    cast = stringViewOwningCast("arg0", ALIAS["char16_t"])
    assert cast == "arg0.as<std::u16string>()"
    assert "string_view" not in cast


def test_non_view_types_are_left_untouched():
    for spelling in ("int", "double", "Standard_Real", "const gp_Pnt &", "Standard_CString"):
        t = FakeType(spelling=spelling, canonical_spelling=spelling)
        assert isStringView(t) is False
        assert stringViewOwningType(t) is None
        assert stringViewOwningCast("arg0", t) is None


# ---------------------------------------------------------------------------
# Binder helper layer — wrapper-lambda param routing (the R4 method-path fix).
# ---------------------------------------------------------------------------


def test_has_string_view_arg_detects_a_view_parameter():
    no_views = [FakeArg(FakeType(spelling="int")), FakeArg(FakeType(spelling="const gp_Pnt &"))]
    assert has_string_view_arg(no_views) is False

    with_view = no_views + [FakeArg(_ref(ALIAS["char16_t"]))]
    assert has_string_view_arg(with_view) is True


def test_lambda_param_type_declares_owning_string_for_view_arg():
    stub = _StubBinder()
    for elem, view in ALIAS.items():
        arg = FakeArg(_ref(view))
        declared = embind_lambda_param_type(stub, arg)
        assert declared == OWNING[elem]
        # The decisive invariant: the embind boundary never sees a bare view.
        assert "string_view" not in declared


def test_lambda_param_type_passes_through_non_view_args():
    stub = _StubBinder()
    arg = FakeArg(FakeType(spelling="const gp_Pnt &"))
    # Non-view args defer to getOriginalArgumentType (echoed declared spelling).
    assert embind_lambda_param_type(stub, arg) == "const gp_Pnt &"
