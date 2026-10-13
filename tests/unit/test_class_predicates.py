from __future__ import annotations

import clang.cindex
import pytest

from ocjs_bindgen.predicates import classes
from ocjs_bindgen.predicates.classes import (
  _hasImplicitDestructorWithIncompleteValueField,
  inherited_template_base,
)
from tests.conftest import _MockType, cursor_mock


@pytest.mark.parametrize("using_spelling", ["FacesOfEdge", "EdgeParentsOf"])
def test_inherited_template_base_resolves_concrete_argument(
  monkeypatch,
  using_spelling: str,
) -> None:
  parameter = cursor_mock(
    kind=clang.cindex.CursorKind.TEMPLATE_TYPE_PARAMETER,
    spelling="TraitsT",
  )
  template = cursor_mock(
    kind=clang.cindex.CursorKind.CLASS_TEMPLATE,
    spelling="EdgeParentsOf",
    children=[parameter],
  )
  base_decl = cursor_mock(kind=clang.cindex.CursorKind.CLASS_DECL, spelling="EdgeParentsOf")
  traits = _MockType(spelling="FaceFromEdgeCoEdgeTraits")
  base = cursor_mock(
    kind=clang.cindex.CursorKind.CXX_BASE_SPECIFIER,
    access_specifier=clang.cindex.AccessSpecifier.PUBLIC,
    type=_MockType(
      spelling="EdgeParentsOf<FaceFromEdgeCoEdgeTraits>",
      declaration=base_decl,
      template_args=[traits],
    ),
  )
  inherited = cursor_mock(
    kind=clang.cindex.CursorKind.USING_DECLARATION,
    spelling=using_spelling,
  )
  derived = cursor_mock(
    kind=clang.cindex.CursorKind.CLASS_DECL,
    spelling="FacesOfEdge",
    children=[base, inherited],
  )
  monkeypatch.setattr(classes, "_findClassTemplateByName", lambda _decl: template)

  resolved_template, args = inherited_template_base(derived)

  assert resolved_template is template
  assert args["TraitsT"] is traits
  assert args["type-parameter-0-0"] is traits


def test_implicit_destructor_rejects_incomplete_template_field_value() -> None:
  owner = cursor_mock(
    kind=clang.cindex.CursorKind.CLASS_DECL,
    spelling="Owner",
  )
  incomplete = cursor_mock(
    kind=clang.cindex.CursorKind.STRUCT_DECL,
    spelling="Slot",
    get_definition=lambda: None,
    semantic_parent=owner,
  )
  slot_type = _MockType(
    spelling="Owner::Slot",
    kind=clang.cindex.TypeKind.RECORD,
    declaration=incomplete,
  )
  container_type = _MockType(
    spelling="Vector<Owner::Slot>",
    kind=clang.cindex.TypeKind.RECORD,
    template_args=[slot_type],
  )
  field = cursor_mock(
    kind=clang.cindex.CursorKind.FIELD_DECL,
    spelling="mySlots",
    type=container_type,
  )
  owner.get_children = lambda: iter([field])

  assert _hasImplicitDestructorWithIncompleteValueField(owner)
