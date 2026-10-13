"""Unit tests for `ocjs_bindgen.naming.encoder` and
`ocjs_bindgen.ast.walker._walk_classes`.

Deep nested-class support in three coordinated places:

* `_walk_classes` — recurses into PUBLIC class/struct bodies.
* `NameEncoder.js_public_name` — walks the full semantic-parent chain.
* `NameEncoder.resolve_nested_type` — walks the full chain to render
  references that match the encoder's public name.

The tests fabricate cursor chains via `cursor_mock` so they run in
microseconds without invoking libclang on a real translation unit.
"""

from __future__ import annotations

import clang.cindex

from ocjs_bindgen.ast.walker import _walk_classes
from ocjs_bindgen.naming.encoder import NameEncoder
from tests.conftest import cursor_mock

# ----------------------------------------------------------------------------
# R1.b — `NameEncoder.js_public_name` walks the full semantic-parent chain.
# ----------------------------------------------------------------------------


def _ns(spelling: str) -> object:
  return cursor_mock(kind=clang.cindex.CursorKind.NAMESPACE, spelling=spelling)


def _cls(spelling: str, parent=None) -> object:
  return cursor_mock(
    kind=clang.cindex.CursorKind.CLASS_DECL,
    spelling=spelling,
    semantic_parent=parent,
  )


def _struct(spelling: str, parent=None) -> object:
  return cursor_mock(
    kind=clang.cindex.CursorKind.STRUCT_DECL,
    spelling=spelling,
    semantic_parent=parent,
  )


def _tmpl(spelling: str, parent=None) -> object:
  return cursor_mock(
    kind=clang.cindex.CursorKind.CLASS_TEMPLATE,
    spelling=spelling,
    semantic_parent=parent,
  )


def test_js_public_name_top_level_class_unchanged() -> None:
  cls = _cls("gp_Pnt")
  assert NameEncoder.js_public_name(cls) == "gp_Pnt"


def test_js_public_name_namespace_class_legacy_prefix() -> None:
  ns = _ns("ExtremaPC")
  cls = _cls("Result", parent=ns)
  assert NameEncoder.js_public_name(cls) == "ExtremaPC_Result"


def test_js_public_name_walks_two_class_levels() -> None:
  outer = _cls("Outer")
  inner = _cls("Inner", parent=outer)
  assert NameEncoder.js_public_name(inner) == "Outer_Inner"


def test_js_public_name_walks_three_levels_namespace_class_class() -> None:
  # `BRepGraph::TopoView::FaceOps` — the smoking-gun shape from the audit.
  ns = _ns("BRepGraph")
  topo = _cls("TopoView", parent=ns)
  face_ops = _cls("FaceOps", parent=topo)
  assert NameEncoder.js_public_name(face_ops) == "BRepGraph_TopoView_FaceOps"


def test_js_public_name_walks_four_levels_namespace_class_class_struct() -> None:
  ns = _ns("BRepGraph")
  topo = _cls("TopoView", parent=ns)
  face_ops = _cls("FaceOps", parent=topo)
  iter_struct = _struct("Iterator", parent=face_ops)
  assert (
    NameEncoder.js_public_name(iter_struct)
    == "BRepGraph_TopoView_FaceOps_Iterator"
  )


def test_js_public_name_through_class_template_parent() -> None:
  # Inner class of a templated parent must include the template's
  # spelling so the public name matches the C++ binding registration.
  outer_tmpl = _tmpl("BVH_Builder")
  inner = _cls("Range", parent=outer_tmpl)
  assert NameEncoder.js_public_name(inner) == "BVH_Builder_Range"


def test_js_public_name_skips_stdlib_namespace() -> None:
  # `std` and friends must NOT contribute to the JS public name (they
  # would collide with consumer code and also tend to be non-bindable).
  ns_std = _ns("std")
  cls = _cls("vector", parent=ns_std)
  assert NameEncoder.js_public_name(cls) == "vector"


def test_js_public_name_template_decl_argument_unchanged() -> None:
  # Template typedef alias path: the alias spelling already lives at file
  # scope, so the result is the alias name as before R1.
  alias = cursor_mock(
    kind=clang.cindex.CursorKind.TYPEDEF_DECL,
    spelling="NCollection_Array1_gp_Pnt",
    semantic_parent=None,
  )
  cls = _cls("NCollection_Array1")
  assert NameEncoder.js_public_name(cls, templateDecl=alias) == "NCollection_Array1_gp_Pnt"


# ----------------------------------------------------------------------------
# R1.c — `NameEncoder.resolve_nested_type` walks the full chain.
# ----------------------------------------------------------------------------


def test_resolve_nested_type_returns_none_for_top_level_class() -> None:
  cls = _cls("gp_Pnt")
  sink: set[str] = set()
  assert NameEncoder.resolve_nested_type(cls, namespace_scoped_sink=sink) is None
  assert sink == set()


def test_resolve_nested_type_two_level_class_inside_class() -> None:
  outer = _cls("Outer")
  inner = _cls("Inner", parent=outer)
  sink: set[str] = set()
  assert NameEncoder.resolve_nested_type(inner, namespace_scoped_sink=sink) == "Outer_Inner"
  # No namespace ancestor → sink is left empty (no stub needed).
  assert sink == set()


def test_resolve_nested_type_three_level_namespace_class_class() -> None:
  ns = _ns("BRepGraph")
  topo = _cls("TopoView", parent=ns)
  face_ops = _cls("FaceOps", parent=topo)
  sink: set[str] = set()
  resolved = NameEncoder.resolve_nested_type(face_ops, namespace_scoped_sink=sink)
  assert resolved == "BRepGraph_TopoView_FaceOps"
  # The full-chain resolved name MUST land in the sink so the
  # per-fragment finaliser can stub it for fragments that reference but
  # don't declare it. The R6 alias dropper removes that stub at link
  # time once the real declaration is observed.
  assert sink == {"BRepGraph_TopoView_FaceOps"}


def test_resolve_nested_type_matches_js_public_name() -> None:
  # The encoder's public name and the resolver's nested-type rendering
  # MUST coincide. If they diverge, link-time references to the inner
  # class collapse to `unknown` because they don't match any export.
  ns = _ns("BRepGraph")
  topo = _cls("TopoView", parent=ns)
  inner = _cls("EdgeOps", parent=topo)
  assert (
    NameEncoder.resolve_nested_type(inner)
    == NameEncoder.js_public_name(inner)
    == "BRepGraph_TopoView_EdgeOps"
  )


def test_resolve_nested_type_enum_inside_class() -> None:
  cls = _cls("ShapeEnum")
  enum = cursor_mock(
    kind=clang.cindex.CursorKind.ENUM_DECL,
    spelling="Kind",
    semantic_parent=cls,
  )
  assert NameEncoder.resolve_nested_type(enum) == "ShapeEnum_Kind"


def test_resolve_nested_type_skips_unbindable_kinds() -> None:
  # Functions and typedefs are not nested types — the resolver must
  # short-circuit. (Returning a `Foo_bar` mangling for a free function
  # would later lead to a TS export referencing a non-existent class.)
  fn = cursor_mock(
    kind=clang.cindex.CursorKind.FUNCTION_DECL,
    spelling="bar",
    semantic_parent=_cls("Foo"),
  )
  assert NameEncoder.resolve_nested_type(fn) is None


def test_resolve_nested_type_handles_empty_spelling() -> None:
  # Anonymous types (no spelling) cannot be referenced by name.
  inner = _cls("", parent=_cls("Outer"))
  assert NameEncoder.resolve_nested_type(inner) is None


# ----------------------------------------------------------------------------
# R1.a — `_walk_classes` recurses into PUBLIC class/struct bodies.
# ----------------------------------------------------------------------------


class _MockAccessSpec:
  """Stand-in cursor with `kind == CXX_ACCESS_SPEC_DECL`."""

  def __init__(self, access_specifier) -> None:
    self.kind = clang.cindex.CursorKind.CXX_ACCESS_SPEC_DECL
    self.access_specifier = access_specifier
    self.spelling = ""

  def get_children(self):
    return iter([])


def _collect_classes(child, out: list[object]) -> None:
  if child.kind in (
    clang.cindex.CursorKind.CLASS_DECL,
    clang.cindex.CursorKind.STRUCT_DECL,
  ):
    out.append(child.spelling)


def test_walk_classes_descends_into_public_nested() -> None:
  inner_a = _cls("InnerA")
  inner_b = _cls("InnerB")
  outer = cursor_mock(
    kind=clang.cindex.CursorKind.CLASS_DECL,
    spelling="Outer",
    children=[inner_a, inner_b],
  )
  results: list[str] = []
  _walk_classes(outer, _collect_classes, results)
  assert results == ["InnerA", "InnerB"]


def test_walk_classes_skips_private_nested() -> None:
  private_inner = _cls("Hidden")
  public_inner = _cls("Visible")
  outer = cursor_mock(
    kind=clang.cindex.CursorKind.CLASS_DECL,
    spelling="Outer",
    children=[
      _MockAccessSpec(clang.cindex.AccessSpecifier.PRIVATE),
      private_inner,
      _MockAccessSpec(clang.cindex.AccessSpecifier.PUBLIC),
      public_inner,
    ],
  )
  results: list[str] = []
  _walk_classes(outer, _collect_classes, results)
  assert results == ["Visible"]


def test_walk_classes_skips_protected_nested() -> None:
  protected_inner = _cls("Protected")
  outer = cursor_mock(
    kind=clang.cindex.CursorKind.CLASS_DECL,
    spelling="Outer",
    children=[
      _MockAccessSpec(clang.cindex.AccessSpecifier.PROTECTED),
      protected_inner,
    ],
  )
  results: list[str] = []
  _walk_classes(outer, _collect_classes, results)
  assert results == []


def test_walk_classes_recurses_unbounded_depth() -> None:
  # `BRepGraph::TopoView::FaceOps::Iterator` style — three levels deep.
  innermost = _cls("Iterator")
  middle = cursor_mock(
    kind=clang.cindex.CursorKind.CLASS_DECL,
    spelling="FaceOps",
    children=[innermost],
  )
  inner = cursor_mock(
    kind=clang.cindex.CursorKind.CLASS_DECL,
    spelling="TopoView",
    children=[middle],
  )
  outer = cursor_mock(
    kind=clang.cindex.CursorKind.CLASS_DECL,
    spelling="BRepGraph",
    children=[inner],
  )
  results: list[str] = []
  _walk_classes(outer, _collect_classes, results)
  assert results == ["TopoView", "FaceOps", "Iterator"]


def test_walk_classes_handles_struct_nested_in_class() -> None:
  inner = _struct("Range")
  outer = cursor_mock(
    kind=clang.cindex.CursorKind.CLASS_DECL,
    spelling="Builder",
    children=[inner],
  )
  results: list[str] = []
  _walk_classes(outer, _collect_classes, results)
  assert results == ["Range"]


def test_walk_classes_seen_set_prevents_cycle() -> None:
  # Defensive — fabricate a self-referential cursor; the walker must
  # not loop forever.
  outer = cursor_mock(kind=clang.cindex.CursorKind.CLASS_DECL, spelling="Outer")
  outer.children = [outer]  # type: ignore[attr-defined]
  results: list[str] = []
  _walk_classes(outer, _collect_classes, results)
  # `outer` itself is collected once via the predicate (caller invokes
  # at the top), but recursion bails on the cycle.
  assert results == ["Outer"]
