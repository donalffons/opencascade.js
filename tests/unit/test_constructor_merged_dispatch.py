from __future__ import annotations

from dataclasses import dataclass

import clang.cindex

from ocjs_bindgen.codegen import dispatch
from ocjs_bindgen.codegen.embind import constructor
from tests.conftest import cursor_mock


@dataclass(frozen=True)
class _JsType:
  category: str
  name: str


@dataclass
class _Argument:
  type: _JsType


class _Constructor:
  def __init__(self, name: str, types: list[_JsType], trailing_defaults: int = 0):
    self.name = name
    self.arguments = [_Argument(argument_type) for argument_type in types]
    self.trailing_defaults = trailing_defaults

  def get_arguments(self):
    return iter(self.arguments)


class _Bindings:
  @staticmethod
  def _classify_js_type(argument_type, _template_decl=None, _template_args=None):
    return argument_type

  @staticmethod
  def _countTrailingDefaults(candidate):
    return candidate.trailing_defaults


NUMBER = _JsType("number_int", "number")
MULTI_LINE = _JsType("object", "BRepApprox_TheMultiLineOfApprox")
VECTOR = _JsType("object", "math_VectorBase_double")


def test_typedef_nested_type_drops_redundant_underlying_namespace() -> None:
  rendered = constructor.rewrite_typedef_nested_types(
    "const BRepGraph_RefsIterator::BRepGraph_FullSolidRefIterator::RefId &",
    "BRepGraph_FullSolidRefIterator",
    "BRepGraph_RefsIterator::RefIterator<BRepGraphInc::SolidRef, true>",
    object(),
  )

  assert rendered == "const BRepGraph_FullSolidRefIterator::RefId &"


def test_merged_primary_family_guard_precedes_internal_dispatch(monkeypatch) -> None:
  primary_number = _Constructor("primary-number", [MULTI_LINE, NUMBER])
  primary_vector = _Constructor("primary-vector", [MULTI_LINE, VECTOR])
  fallback_number = _Constructor("fallback-number", [NUMBER], trailing_defaults=1)
  fallback_vector = _Constructor("fallback-vector", [VECTOR])
  tree = dispatch.DispatchBranch(
    arg_position=1,
    branches={
      NUMBER: dispatch.DispatchLeaf(primary_number),
      VECTOR: dispatch.DispatchLeaf(primary_vector),
    },
  )
  internal_check = 'Number").call<bool>("isInteger", arg1)'

  monkeypatch.setattr(
    constructor,
    "_merged_default_aware_tree",
    lambda _b, subtree, *_args, **_kwargs: (
      f"dispatch-{type(subtree).__name__}-{internal_check};\n"
    ),
  )

  rendered = constructor._emit_primary_chain_with_fallback(
    _Bindings(),
    tree,
    "Candidate",
    2,
    False,
    None,
    None,
    None,
    0,
    "fallback;\n",
    [fallback_number, fallback_vector],
  )

  shared_leading_check = 'arg0.instanceof(emscripten::val::module_property("BRepApprox_TheMultiLineOfApprox"))'
  assert shared_leading_check in rendered
  assert internal_check in rendered
  assert rendered.index(shared_leading_check) < rendered.index(internal_check)


def test_merged_fallback_routes_undefined_to_defaultable_branch(monkeypatch) -> None:
  numeric = _Constructor("numeric", [NUMBER], trailing_defaults=1)
  vector = _Constructor("vector", [VECTOR])
  tree = dispatch.DispatchBranch(
    arg_position=0,
    branches={
      NUMBER: dispatch.DispatchLeaf(numeric),
      VECTOR: dispatch.DispatchLeaf(vector),
    },
  )

  monkeypatch.setattr(
    constructor,
    "_emit_ctor_call_from_val_args",
    lambda _b, _class, candidate, *_args, **_kwargs: f"return {candidate.name};\n",
  )

  rendered = constructor._merged_default_aware_tree(
    _Bindings(),
    tree,
    "Candidate",
    1,
    False,
    None,
    None,
    None,
    0,
  )

  undefined_check = "if (arg0.isUndefined())"
  assert undefined_check in rendered
  assert rendered.index(undefined_check) < rendered.index("return numeric;")


def test_inherited_constructor_does_not_emit_a_fake_default(monkeypatch) -> None:
  inherited = cursor_mock(
    kind=clang.cindex.CursorKind.USING_DECLARATION,
    spelling="Derived",
  )
  derived = cursor_mock(
    kind=clang.cindex.CursorKind.CLASS_DECL,
    spelling="Derived",
    children=[inherited],
  )
  bindings = type("Bindings", (), {"tuInfo": type("TuInfo", (), {"classDict": {}})()})()
  monkeypatch.setattr(constructor, "isTransientDerived", lambda *_args: False)

  assert constructor.process_simple_constructor(bindings, derived) == ""


def test_inherited_constructor_uses_base_template_context(monkeypatch) -> None:
  base_constructor = type(
    "Constructor",
    (),
    {
      "kind": clang.cindex.CursorKind.CONSTRUCTOR,
      "access_specifier": clang.cindex.AccessSpecifier.PUBLIC,
      "get_arguments": lambda self: iter(()),
    },
  )()
  base_template = cursor_mock(
    kind=clang.cindex.CursorKind.CLASS_TEMPLATE,
    spelling="EdgeParentsOf",
    children=[base_constructor],
  )
  derived = cursor_mock(
    kind=clang.cindex.CursorKind.CLASS_DECL,
    spelling="FacesOfEdge",
  )
  template_args = {"TraitsT": object()}
  captured = {}

  class Bindings:
    tuInfo = type("TuInfo", (), {"classDict": {}})()

    @staticmethod
    def _filter_overloads(overloads, template_decl=None):
      captured["filter_template_decl"] = template_decl
      return overloads

    @staticmethod
    def _checkUnbindableArgs(*_args):
      return None

    @staticmethod
    def _countTrailingDefaults(_candidate):
      return 0

  def capture_emit(
    _bindings,
    class_cpp,
    _args,
    template_decl,
    actual_template_args,
    _use_handle_override,
    underlying_spelling=None,
    optional_param_count=0,
    owning_class=None,
  ):
    captured.update(
      class_cpp=class_cpp,
      template_decl=template_decl,
      template_args=actual_template_args,
      underlying_spelling=underlying_spelling,
      optional_param_count=optional_param_count,
      owning_class=owning_class,
    )
    return "bound\n"

  monkeypatch.setattr(
    constructor,
    "inherited_template_base",
    lambda _derived: (base_template, template_args),
  )
  monkeypatch.setattr(constructor, "getClassTypeName", lambda *_args: "FacesOfEdge")
  monkeypatch.setattr(constructor, "getClassQualifiedName", lambda *_args: "FacesOfEdge")
  monkeypatch.setattr(constructor, "isTransientDerived", lambda *_args: False)
  monkeypatch.setattr(constructor, "filterMethodOrProperty", lambda *_args: True)
  monkeypatch.setattr(constructor, "_detect_and_emit_sub2a", lambda *_args, **_kwargs: ("", set(), []))
  monkeypatch.setattr(constructor, "_detect_and_emit_sub2b", lambda *_args, **_kwargs: ("", set(), []))
  monkeypatch.setattr(constructor, "_emit_initializer_list_ctors", lambda *_args, **_kwargs: ("", set()))
  monkeypatch.setattr(constructor, "emit_constructor", capture_emit)

  assert constructor.process_simple_constructor(Bindings(), derived) == "bound\n"
  assert captured == {
    "filter_template_decl": derived,
    "class_cpp": "FacesOfEdge",
    "template_decl": derived,
    "template_args": template_args,
    "underlying_spelling": "EdgeParentsOf",
    "optional_param_count": 0,
    "owning_class": base_template,
  }
