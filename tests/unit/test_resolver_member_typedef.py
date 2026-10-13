"""Unit tests for `ocjs_bindgen.resolver.strategies.member_typedef`.

Peels NCollection member typedefs (`reference`, `const_reference`,
`value_type`, …) whose underlying type references a template parameter so
the existing canonical-key substitution can fire instead of falling
through to ``unknown``.

The strategy is small (one decision tree, one recursion into the
orchestrator) but exercised on every shape seen in OCCT V8 NCollection
accessors:

* Source spelling ``TheItemType`` with canonical ``type-parameter-0-0``.
* Source spelling ``const_reference`` with canonical ``const type-parameter-0-0 &``.
* No template context (``templateArgs`` empty / ``None``) — must short-circuit.
* Declaration is not a typedef (e.g. ``CLASS_DECL``) — must short-circuit.
* Underlying type is a plain non-template typedef — must short-circuit so
  the canonical fallback handles it.
* Inner ``ctx.resolve_type`` returns ``"unknown"`` — must return ``None``
  to keep the canonical fallback's diagnostics sink populated.
"""

from __future__ import annotations

import clang.cindex

from ocjs_bindgen.resolver.strategies.member_typedef import (
  resolve_member_typedef_substitution,
)
from tests.conftest import _MockType, cursor_mock  # type: ignore[attr-defined]


class _StubResolverContext:
  """Minimal `ResolverContext` impl for R8 tests.

  R8 only calls `ctx.resolve_type` (recursing on the peeled underlying
  type). We stub that and capture each call so tests can assert recursion
  shape if needed.
  """

  def __init__(self, *, resolve_table: dict[str, str]) -> None:
    self._resolve_table = resolve_table
    self.resolve_calls: list[str] = []

  def resolve_type(self, clang_type, templateDecl=None, templateArgs=None) -> str:
    self.resolve_calls.append(clang_type.spelling)
    return self._resolve_table.get(clang_type.spelling, "unknown")


def _typedef_cursor(
  *,
  underlying_spelling: str,
  underlying_canonical: str | None = None,
  kind: clang.cindex.CursorKind = clang.cindex.CursorKind.TYPEDEF_DECL,
):
  """Build a `_MockCursor` shaped like a TYPEDEF_DECL whose
  `underlying_typedef_type` is a `_MockType` with the given spelling and
  optional canonical spelling.
  """
  underlying = _MockType(
    spelling=underlying_spelling,
    canonical=_MockType(spelling=underlying_canonical or underlying_spelling),
  )
  return cursor_mock(
    kind=kind,
    spelling="member_typedef_alias",
    underlying_typedef_type=underlying,
  )


def _typedef_type(decl) -> _MockType:
  """Build a `_MockType` whose `get_declaration()` returns `decl`."""
  return _MockType(spelling="member_alias_source", declaration=decl)


def test_peels_simple_template_parameter_typedef() -> None:
  # `using value_type = TheItemType;` inside an instantiated
  # NCollection_Array1<gp_Pnt>. R2 has populated the substitution map with
  # both the source-name spelling and the canonical key, so the recursive
  # `ctx.resolve_type` on the underlying type returns "gp_Pnt".
  decl = _typedef_cursor(
    underlying_spelling="TheItemType",
    underlying_canonical="type-parameter-0-0",
  )
  clang_type = _typedef_type(decl)
  ctx = _StubResolverContext(resolve_table={"TheItemType": "gp_Pnt"})

  template_args = {
    "TheItemType": _MockType(spelling="gp_Pnt"),
    "type-parameter-0-0": _MockType(spelling="gp_Pnt"),
  }
  out = resolve_member_typedef_substitution(ctx, clang_type, None, template_args)
  assert out == "gp_Pnt"
  # The strategy must recurse exactly once into the orchestrator on the
  # underlying type, not the source `member_alias_source` spelling.
  assert ctx.resolve_calls == ["TheItemType"]


def test_peels_const_reference_typedef() -> None:
  # `using const_reference = const TheItemType&;` — the source spelling
  # `const_reference` does not contain any templateArgs key, but the
  # canonical form `const type-parameter-0-0 &` does, so R8 still fires.
  decl = _typedef_cursor(
    underlying_spelling="const TheItemType &",
    underlying_canonical="const type-parameter-0-0 &",
  )
  clang_type = _typedef_type(decl)
  ctx = _StubResolverContext(
    resolve_table={"const TheItemType &": "BRepGraph_SolidId"}
  )
  template_args = {
    "TheItemType": _MockType(spelling="BRepGraph_SolidId"),
    "type-parameter-0-0": _MockType(spelling="BRepGraph_SolidId"),
  }
  out = resolve_member_typedef_substitution(ctx, clang_type, None, template_args)
  assert out == "BRepGraph_SolidId"


def test_returns_none_when_template_args_empty() -> None:
  # No instantiation context to substitute through — short-circuit so the
  # canonical fallback can handle the typedef directly.
  decl = _typedef_cursor(
    underlying_spelling="TheItemType",
    underlying_canonical="type-parameter-0-0",
  )
  clang_type = _typedef_type(decl)
  ctx = _StubResolverContext(resolve_table={"TheItemType": "gp_Pnt"})

  assert resolve_member_typedef_substitution(ctx, clang_type, None, None) is None
  assert resolve_member_typedef_substitution(ctx, clang_type, None, {}) is None
  # The strategy must NOT have recursed into the orchestrator.
  assert ctx.resolve_calls == []


def test_returns_none_when_decl_not_typedef() -> None:
  # `clang_type.get_declaration()` is a CLASS_DECL — not a typedef — so
  # R8 must short-circuit. This is the common case for plain class types.
  decl = cursor_mock(kind=clang.cindex.CursorKind.CLASS_DECL, spelling="gp_Pnt")
  clang_type = _typedef_type(decl)
  ctx = _StubResolverContext(resolve_table={})
  template_args = {"TheItemType": _MockType(spelling="gp_Pnt")}

  out = resolve_member_typedef_substitution(ctx, clang_type, None, template_args)
  assert out is None
  assert ctx.resolve_calls == []


def test_returns_none_when_underlying_not_template_dependent() -> None:
  # Plain non-template typedef (`using Standard_Real = double;`). Neither
  # the canonical nor source spelling references a template parameter or
  # a templateArgs key, so R8 must short-circuit and let the canonical
  # fallback render it.
  decl = _typedef_cursor(
    underlying_spelling="double",
    underlying_canonical="double",
  )
  clang_type = _typedef_type(decl)
  ctx = _StubResolverContext(resolve_table={"double": "number"})
  template_args = {
    "TheItemType": _MockType(spelling="gp_Pnt"),
    "type-parameter-0-0": _MockType(spelling="gp_Pnt"),
  }

  out = resolve_member_typedef_substitution(ctx, clang_type, None, template_args)
  assert out is None
  # No recursion — the conservative guard rejected the peel before it
  # could call ctx.resolve_type.
  assert ctx.resolve_calls == []


def test_returns_none_when_inner_resolution_yields_unknown() -> None:
  # The peel fired (underlying type IS template-dependent) but the
  # recursive resolve_type returned "unknown". R8 must return None so the
  # canonical fallback runs and the diagnostics report records the
  # failure under the original (unpeeled) type spelling.
  decl = _typedef_cursor(
    underlying_spelling="TheItemType",
    underlying_canonical="type-parameter-0-0",
  )
  clang_type = _typedef_type(decl)
  # Empty resolve_table → ctx.resolve_type returns "unknown".
  ctx = _StubResolverContext(resolve_table={})
  template_args = {
    "TheItemType": _MockType(spelling="MysteryType"),
    "type-parameter-0-0": _MockType(spelling="MysteryType"),
  }

  out = resolve_member_typedef_substitution(ctx, clang_type, None, template_args)
  assert out is None
  # The recursion did happen — we tried to peel, the recursion produced
  # "unknown", and we deliberately discarded the result.
  assert ctx.resolve_calls == ["TheItemType"]


def test_handles_type_alias_decl_in_addition_to_typedef_decl() -> None:
  # C++11 `using value_type = TheItemType;` reports as `TYPE_ALIAS_DECL`,
  # not `TYPEDEF_DECL`. R8 must accept both so modern NCollection bodies
  # are covered.
  decl = _typedef_cursor(
    underlying_spelling="TheItemType",
    underlying_canonical="type-parameter-0-0",
    kind=clang.cindex.CursorKind.TYPE_ALIAS_DECL,
  )
  clang_type = _typedef_type(decl)
  ctx = _StubResolverContext(resolve_table={"TheItemType": "gp_Pnt"})
  template_args = {
    "TheItemType": _MockType(spelling="gp_Pnt"),
    "type-parameter-0-0": _MockType(spelling="gp_Pnt"),
  }

  assert (
    resolve_member_typedef_substitution(ctx, clang_type, None, template_args)
    == "gp_Pnt"
  )


def test_returns_none_when_underlying_spelling_empty() -> None:
  # Defensive guard — if libclang gives us an empty underlying spelling we
  # cannot reason about it; bail and let the canonical fallback handle it.
  decl = _typedef_cursor(
    underlying_spelling="",
    underlying_canonical="",
  )
  clang_type = _typedef_type(decl)
  ctx = _StubResolverContext(resolve_table={})
  template_args = {"TheItemType": _MockType(spelling="gp_Pnt")}

  assert (
    resolve_member_typedef_substitution(ctx, clang_type, None, template_args) is None
  )
  assert ctx.resolve_calls == []
