"""Unit tests for `ocjs_bindgen.resolver.strategies.nested.resolve_qualified_member_type`.

Substituted Traits member typedef resolution. When a templated class
references `typename TraitsT::ParentId` (the BRepGraph_ReverseIterator
family pattern), the legacy resolver looked up `TraitsT` directly in
`classDict`, fell through, and emitted `unknown`. The strategy first
consults `templateArgs[parent_name]` so the substituted concrete Traits
class is materialised and walked for the member typedef.

The tests fabricate a Traits-style cursor chain via `cursor_mock`.
"""

from __future__ import annotations

import clang.cindex

from ocjs_bindgen.resolver.strategies.nested import resolve_qualified_member_type
from tests.conftest import _MockType, cursor_mock


class _StubTuInfo:
  def __init__(self, classDict=None, allChildren=None, typedefs=None):
    self.classDict = classDict or {}
    self.allChildren = allChildren or []
    self.typedefs = typedefs or []
    self.templateTypedefs = []


class _StubResolverContext:
  """Minimal ResolverContext that captures `resolve_type` recursion."""

  exports: set = set()
  _known_export_names: set = set()

  def __init__(self, *, classDict=None, allChildren=None, resolve_table=None) -> None:
    self.tuInfo = _StubTuInfo(classDict, allChildren)
    self.exports = set()
    self.referenced_classes = set()
    self._resolve_table = resolve_table or {}
    self.resolve_calls: list[str] = []

  def resolve_type(self, clang_type, templateDecl=None, templateArgs=None) -> str:
    spelling = getattr(clang_type, "spelling", "")
    self.resolve_calls.append(spelling)
    return self._resolve_table.get(spelling, "unknown")


def _typedef(spelling: str, underlying: _MockType) -> object:
  cur = cursor_mock(
    kind=clang.cindex.CursorKind.TYPEDEF_DECL,
    spelling=spelling,
  )
  cur.underlying_typedef_type = underlying  # type: ignore[attr-defined]
  return cur


def _traits_class(spelling: str, *typedefs) -> object:
  return cursor_mock(
    kind=clang.cindex.CursorKind.STRUCT_DECL,
    spelling=spelling,
    children=list(typedefs),
  )


def test_traits_member_typedef_through_substitution() -> None:
  # `BRepGraph_ReverseIterator<TraitsT>` carries
  # `using ParentId = typename TraitsT::ParentId;`. After R2's canonical
  # augmentation the substitution map is keyed by `TraitsT`. The
  # resolver must walk the substituted concrete Traits to find ParentId.
  parent_id_underlying = _MockType(spelling="BRepGraphInc_FaceRef")
  traits_concrete = _traits_class(
    "BRepGraph_ReverseIterator_FaceOfWireRefTraits",
    _typedef("ParentId", parent_id_underlying),
    _typedef("ChildId", _MockType(spelling="BRepGraphInc_WireRef")),
  )
  traits_type = _MockType(
    spelling="BRepGraph_ReverseIterator_FaceOfWireRefTraits",
    declaration=traits_concrete,
  )
  template_args = {"TraitsT": traits_type}

  ctx = _StubResolverContext(resolve_table={
    "BRepGraphInc_FaceRef": "BRepGraphInc_FaceRef",
  })
  out = resolve_qualified_member_type(
    ctx,
    "typename TraitsT::ParentId",
    templateDecl=None,
    templateArgs=template_args,
  )
  assert out == "BRepGraphInc_FaceRef"
  # The recursion went through resolve_type with the underlying type.
  assert ctx.resolve_calls == ["BRepGraphInc_FaceRef"]


def test_traits_substitution_finds_child_id_member() -> None:
  child_id_underlying = _MockType(spelling="BRepGraphInc_WireRef")
  traits_concrete = _traits_class(
    "FaceOfWireRefTraits",
    _typedef("ParentId", _MockType(spelling="BRepGraphInc_FaceRef")),
    _typedef("ChildId", child_id_underlying),
  )
  traits_type = _MockType(spelling="FaceOfWireRefTraits", declaration=traits_concrete)
  template_args = {"Traits": traits_type}

  ctx = _StubResolverContext(resolve_table={
    "BRepGraphInc_WireRef": "BRepGraphInc_WireRef",
  })
  out = resolve_qualified_member_type(
    ctx,
    "typename Traits::ChildId",
    templateDecl=None,
    templateArgs=template_args,
  )
  assert out == "BRepGraphInc_WireRef"


def test_traits_substitution_returns_none_when_member_missing() -> None:
  # If the substituted Traits doesn't define the member, R4 must
  # return None so the canonical fallback can still try.
  traits_concrete = _traits_class(
    "PartialTraits",
    _typedef("ParentId", _MockType(spelling="BRepGraphInc_FaceRef")),
  )
  traits_type = _MockType(spelling="PartialTraits", declaration=traits_concrete)
  template_args = {"TraitsT": traits_type}

  ctx = _StubResolverContext()
  out = resolve_qualified_member_type(
    ctx,
    "typename TraitsT::Missing",
    templateDecl=None,
    templateArgs=template_args,
  )
  assert out is None


def test_traits_substitution_short_circuits_without_template_args() -> None:
  # Without templateArgs the legacy classDict path must be taken.
  ctx = _StubResolverContext()
  out = resolve_qualified_member_type(
    ctx,
    "typename TraitsT::ParentId",
    templateDecl=None,
    templateArgs=None,
  )
  assert out is None


def test_traits_substitution_walks_base_specifiers() -> None:
  # If the concrete Traits inherits the typedef from a base struct,
  # the resolver must walk CXX_BASE_SPECIFIER cursors to find it.
  base_typedef = _typedef("ParentId", _MockType(spelling="BRepGraphInc_FaceRef"))
  base_class = _traits_class("BaseTraits", base_typedef)
  base_specifier = cursor_mock(kind=clang.cindex.CursorKind.CXX_BASE_SPECIFIER)
  base_specifier.get_definition = lambda: base_class  # type: ignore[assignment]

  derived_class = cursor_mock(
    kind=clang.cindex.CursorKind.STRUCT_DECL,
    spelling="DerivedTraits",
    children=[base_specifier],
  )
  traits_type = _MockType(spelling="DerivedTraits", declaration=derived_class)
  template_args = {"TraitsT": traits_type}

  ctx = _StubResolverContext(resolve_table={
    "BRepGraphInc_FaceRef": "BRepGraphInc_FaceRef",
  })
  out = resolve_qualified_member_type(
    ctx,
    "typename TraitsT::ParentId",
    templateDecl=None,
    templateArgs=template_args,
  )
  assert out == "BRepGraphInc_FaceRef"


def test_traits_substitution_handles_canonical_key_form() -> None:
  # When R2 augments the map, the canonical key `type-parameter-0-0`
  # appears alongside `TraitsT`. Either key MUST resolve to the same
  # concrete Traits class.
  traits_concrete = _traits_class(
    "Traits",
    _typedef("ParentId", _MockType(spelling="BRepGraphInc_FaceRef")),
  )
  traits_type = _MockType(spelling="Traits", declaration=traits_concrete)
  # `processTemplate` with R2 augmentation populates both keys.
  template_args = {"TraitsT": traits_type, "type-parameter-0-0": traits_type}

  ctx = _StubResolverContext(resolve_table={
    "BRepGraphInc_FaceRef": "BRepGraphInc_FaceRef",
  })

  out_canonical = resolve_qualified_member_type(
    ctx,
    "typename type-parameter-0-0::ParentId",
    templateDecl=None,
    templateArgs=template_args,
  )
  assert out_canonical == "BRepGraphInc_FaceRef"


def test_traits_substitution_falls_through_to_classdict() -> None:
  # When `parent_name` is a real class (not a template parameter), the
  # substitution branch is skipped and the existing classDict path takes
  # over. We exercise that with a non-traits parent.
  underlying = _MockType(spelling="number")
  member_typedef = _typedef("size_type", underlying)
  vector_class = cursor_mock(
    kind=clang.cindex.CursorKind.CLASS_DECL,
    spelling="MyVector",
    children=[member_typedef],
  )

  ctx = _StubResolverContext(
    classDict={"MyVector": vector_class},
    resolve_table={"number": "number"},
  )
  out = resolve_qualified_member_type(
    ctx,
    "MyVector::size_type",
    templateDecl=None,
    templateArgs=None,
  )
  assert out == "number"


def test_explicit_specialization_member_uses_concrete_template_argument() -> None:
  traits = _traits_class(
    "FaceTraits",
    _typedef("ParentId", _MockType(spelling="BRepGraph_FaceId")),
  )
  specialization = cursor_mock(
    kind=clang.cindex.CursorKind.STRUCT_DECL,
    spelling="DefTraits",
    displayname="DefTraits<BRepGraph_FaceId>",
    children=[
      cursor_mock(kind=clang.cindex.CursorKind.TYPE_REF, spelling="BRepGraph_FaceId"),
      _typedef("DefType", _MockType(spelling="BRepGraphInc::FaceDef")),
    ],
  )
  ctx = _StubResolverContext(
    classDict={"FaceTraits": traits},
    allChildren=[specialization],
    resolve_table={
      "BRepGraph_FaceId": "BRepGraph_FaceId",
      "BRepGraphInc::FaceDef": "BRepGraphInc_FaceDef",
    },
  )
  ctx.referenced_classes.update({"ParentId", "DefType"})

  out = resolve_qualified_member_type(
    ctx,
    "typename DefTraits<BRepGraph_ReverseIterator::FaceTraits::ParentId>::DefType",
  )

  assert out == "BRepGraphInc_FaceDef"
  assert ctx.referenced_classes == set()


def test_explicit_specialization_compares_canonical_cpp_arguments() -> None:
  int_alias = _typedef(
    "Int",
    _MockType(spelling="C::Int", canonical=_MockType(spelling="int")),
  )
  alias_owner = _traits_class("C", int_alias)
  double_specialization = cursor_mock(
    kind=clang.cindex.CursorKind.STRUCT_DECL,
    spelling="DefTraits",
    displayname="DefTraits<double>",
    children=[_typedef("DefType", _MockType(spelling="WrongDef"))],
  )
  int_specialization = cursor_mock(
    kind=clang.cindex.CursorKind.STRUCT_DECL,
    spelling="DefTraits",
    displayname="DefTraits<int>",
    children=[_typedef("DefType", _MockType(spelling="IntDef"))],
  )
  ctx = _StubResolverContext(
    classDict={"C": alias_owner},
    allChildren=[double_specialization, int_specialization],
    resolve_table={"WrongDef": "WrongDef", "IntDef": "IntDef"},
  )

  out = resolve_qualified_member_type(ctx, "DefTraits<C::Int>::DefType")

  assert out == "IntDef"
