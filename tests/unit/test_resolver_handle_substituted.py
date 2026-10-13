"""Unit tests for `ocjs_bindgen.resolver.strategies.handle_substituted`.

Peels syntactic Handle wrappers at the string level after the resolver
has substituted the template argument (follow-up to member-typedef peel):

* `opencascade::handle<X>` — the form NCollection discovery emits for
  handle-wrapped instantiations.
* `occ::handle<X>` — alternative namespace alias seen in OCCT V8 headers.
* `Handle_X` — the `DEFINE_STANDARD_HANDLE`-generated typedef form.

All three shapes must collapse to the inner type's TypeScript class name
when (and only when) the inner type is a known export. The strategy is
pure string processing — no clang AST involved — so the tests use a
minimal stub for `ResolverContext`.
"""

from __future__ import annotations

from ocjs_bindgen.resolver.strategies.handle_substituted import (
  resolve_handle_substituted_typedef,
)


class _StubCtx:
  """Minimal stub for the resolver context.

  R8.1 only consults `ctx._is_known_export_name`. We seed it with an
  explicit set of "exported" names so each test can isolate the
  in-exports vs not-in-exports decision.
  """

  def __init__(self, exports):
    self._exports = set(exports)

  def _is_known_export_name(self, name: str) -> bool:
    return name in self._exports


def test_peels_opencascade_handle_wrapper() -> None:
  # Canonical R5 discovery form: `using ... = NCollection_Array1<
  # opencascade::handle<Geom_Curve>>;` — after R8 + template substitution
  # the resolver sees the bare wrapper spelling.
  ctx = _StubCtx({"Geom_Curve"})
  assert (
    resolve_handle_substituted_typedef(ctx, "opencascade::handle<Geom_Curve>")
    == "Geom_Curve"
  )


def test_peels_occ_handle_wrapper() -> None:
  # OCCT V8 sometimes uses the `occ::` namespace alias instead of
  # `opencascade::` (e.g. `GeomLProp_SLPropsBase<occ::handle<Geom_Surface>>`).
  ctx = _StubCtx({"Geom_Surface"})
  assert (
    resolve_handle_substituted_typedef(ctx, "occ::handle<Geom_Surface>")
    == "Geom_Surface"
  )


def test_peels_handle_typedef_form() -> None:
  # `DEFINE_STANDARD_HANDLE(Foo, Standard_Transient)` generates
  # `typedef opencascade::handle<Foo> Handle_Foo;`. Some templateArgs
  # substitution paths surface the typedef alias spelling.
  ctx = _StubCtx({"TDF_Attribute"})
  assert (
    resolve_handle_substituted_typedef(ctx, "Handle_TDF_Attribute")
    == "TDF_Attribute"
  )


def test_strips_const_reference_suffix() -> None:
  # Member typedefs `reference` / `const_reference` push reference and
  # const qualifiers onto the substituted spelling. R8.1 must transparent-
  # strip them so the regex still matches the wrapper.
  ctx = _StubCtx({"Standard_Transient"})
  assert (
    resolve_handle_substituted_typedef(
      ctx, "const opencascade::handle<Standard_Transient> &"
    )
    == "Standard_Transient"
  )


def test_strips_const_pointer_suffix() -> None:
  # Pointer-returning accessors emit `const Handle_Foo *` shapes.
  ctx = _StubCtx({"StepBasic_Approval"})
  assert (
    resolve_handle_substituted_typedef(
      ctx, "const Handle_StepBasic_Approval *"
    )
    == "StepBasic_Approval"
  )


def test_returns_none_for_empty_spelling() -> None:
  # Defensive guard — empty / None input must not match.
  ctx = _StubCtx({"Geom_Curve"})
  assert resolve_handle_substituted_typedef(ctx, "") is None
  assert resolve_handle_substituted_typedef(ctx, None) is None  # type: ignore[arg-type]


def test_returns_none_for_non_handle_spelling() -> None:
  # Plain class names, template instantiations, and qualified-but-unrelated
  # types must NOT match — otherwise R8.1 would clobber correctly-resolved
  # types upstream. Each input deliberately exercises a near-miss shape.
  ctx = _StubCtx({"gp_Pnt", "Geom_Curve", "Foo"})
  near_misses = [
    "gp_Pnt",
    "const gp_Pnt &",
    "NCollection_Array1<gp_Pnt>",
    "std::vector<int>",
    # Different namespace — must not match.
    "std::handle<Foo>",
    # Typo'd wrapper — must not match.
    "opencascade::handle_<Foo>",
    # Missing inner — malformed but should still return None safely.
    "opencascade::handle<>",
    # Multi-arg template — R8.1 only peels single-arg handles.
    "opencascade::handle<Foo, Bar>",
    # Bare prefix with no inner — must not match.
    "Handle_",
  ]
  for spelling in near_misses:
    assert (
      resolve_handle_substituted_typedef(ctx, spelling) is None
    ), f"R8.1 should NOT peel near-miss spelling {spelling!r}"


def test_returns_none_when_inner_not_in_exports() -> None:
  # R8.1 must defer to the caller's canonical fallback when the inner
  # class isn't a known TS export. Otherwise we'd emit dangling
  # cross-references (the same TS2304 hazard `_is_known_export_name`
  # exists to prevent).
  ctx = _StubCtx({"Geom_Curve"})  # only Geom_Curve is "exported"
  assert (
    resolve_handle_substituted_typedef(
      ctx, "opencascade::handle<UnboundClass>"
    )
    is None
  )
  assert (
    resolve_handle_substituted_typedef(ctx, "Handle_UnboundClass") is None
  )
