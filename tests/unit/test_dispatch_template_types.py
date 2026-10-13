"""Runtime-dispatch classification for concrete template specializations."""

from __future__ import annotations

from unittest.mock import MagicMock

import clang.cindex

from ocjs_bindgen.codegen.bindings import Bindings, JsType


def test_template_parameter_dispatch_uses_concrete_primitive() -> None:
  parameter = MagicMock()
  parameter.kind = clang.cindex.TypeKind.UNEXPOSED
  parameter.spelling = "TheItemType"
  parameter.get_num_template_arguments.return_value = -1
  canonical = MagicMock()
  canonical.kind = clang.cindex.TypeKind.UNEXPOSED
  canonical.spelling = "type-parameter-0-0"
  canonical.get_declaration.return_value = MagicMock(spelling="double")
  parameter.get_canonical.return_value = canonical
  parameter.get_declaration.return_value = MagicMock(spelling="TheItemType")

  binding = object.__new__(Bindings)
  binding.resolveWithCanonicalFallback = MagicMock(return_value="double")

  result = binding._classify_js_type(
    parameter,
    templateDecl=MagicMock(),
    templateArgs={"TheItemType": MagicMock(spelling="double")},
  )

  assert result == JsType("number_float", "number")


def test_defaulted_template_dispatch_uses_canonical_argument() -> None:
  double_type = MagicMock()
  double_type.kind = clang.cindex.TypeKind.DOUBLE
  double_type.spelling = "double"
  double_type.get_canonical.return_value = double_type

  direct = MagicMock()
  direct.get_num_template_arguments.return_value = 0
  canonical = MagicMock()
  canonical.get_num_template_arguments.return_value = 1
  canonical.get_template_argument_type.return_value = double_type
  direct.get_canonical.return_value = canonical

  binding = object.__new__(Bindings)

  assert binding._mangle_template_js_name(direct, "math_VectorBase") == (
    "math_VectorBase_double"
  )


def test_typedef_dispatch_uses_canonical_template_registration() -> None:
  double_type = MagicMock()
  double_type.kind = clang.cindex.TypeKind.DOUBLE
  double_type.spelling = "double"
  double_type.get_canonical.return_value = double_type

  canonical_decl = MagicMock()
  canonical_decl.kind = clang.cindex.CursorKind.CLASS_TEMPLATE
  canonical_decl.spelling = "math_VectorBase"
  canonical = MagicMock()
  canonical.kind = clang.cindex.TypeKind.RECORD
  canonical.spelling = "math_VectorBase<double>"
  canonical.get_num_template_arguments.return_value = 1
  canonical.get_template_argument_type.return_value = double_type
  canonical.get_declaration.return_value = canonical_decl
  canonical.get_canonical.return_value = canonical

  alias_decl = MagicMock()
  alias_decl.kind = clang.cindex.CursorKind.TYPE_ALIAS_DECL
  alias_decl.spelling = "math_Vector"
  alias = MagicMock()
  alias.kind = clang.cindex.TypeKind.TYPEDEF
  alias.spelling = "math_Vector"
  alias.get_num_template_arguments.return_value = 0
  alias.get_declaration.return_value = alias_decl
  alias.get_canonical.return_value = canonical

  binding = object.__new__(Bindings)

  assert binding._classify_js_type(alias) == JsType(
    "object", "math_VectorBase_double"
  )
