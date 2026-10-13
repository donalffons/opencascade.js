"""Unit tests for R3 method-level signature filtering.

Covers `ocjs_bindgen.filters.method_signature.signature_references_excluded_class`,
the side-table API, and the JSDoc rendering integration in
`TypescriptBindings.render_dropped_method_jsdoc`.
"""

from __future__ import annotations

import importlib

import clang.cindex
import pytest

from tests.conftest import _MockType, cursor_mock

method_signature = importlib.import_module("ocjs_bindgen.filters.method_signature")


def _class_decl(name: str) -> clang.cindex.Cursor:
  return cursor_mock(kind=clang.cindex.CursorKind.CLASS_DECL, spelling=name)


def _record_type(name: str, kind=clang.cindex.TypeKind.RECORD) -> _MockType:
  decl = _class_decl(name)
  t = _MockType(spelling=name, kind=kind, declaration=decl)
  return t


def _ref_to(t: _MockType) -> _MockType:
  return _MockType(
    spelling=t.spelling + " &",
    kind=clang.cindex.TypeKind.LVALUEREFERENCE,
    pointee=t,
  )


def _ptr_to(t: _MockType) -> _MockType:
  return _MockType(
    spelling=t.spelling + " *",
    kind=clang.cindex.TypeKind.POINTER,
    pointee=t,
  )


def _param(name: str, t: _MockType):
  cur = cursor_mock(
    kind=clang.cindex.CursorKind.PARM_DECL,
    spelling=name,
    type=t,
  )
  return cur


def _method(name: str, params, result_type: _MockType, displayname: str = None):
  return cursor_mock(
    kind=clang.cindex.CursorKind.CXX_METHOD,
    spelling=name,
    children=list(params),
    result_type=result_type,
    displayname=displayname or (name + "()"),
  )


def _excluder(*excluded_names: str):
  excluded = set(excluded_names)
  return lambda n: n in excluded


# ---------------------------------------------------------------------------
# signature_references_excluded_class — happy / drop paths
# ---------------------------------------------------------------------------


def test_method_with_excluded_param_is_filtered():
  bad = _record_type("MathOpt_Foo")
  good = _record_type("Standard_Real", kind=clang.cindex.TypeKind.DOUBLE)
  m = _method(
    "Add",
    [_param("seed", good), _param("badArg", _ref_to(bad))],
    result_type=_record_type("void", kind=clang.cindex.TypeKind.VOID),
  )

  reason = method_signature.signature_references_excluded_class(
    m, _excluder("MathOpt_Foo")
  )

  assert reason == ("MathOpt_Foo", "param 1")


def test_method_with_excluded_return_is_filtered():
  bad = _record_type("Interface_Graph")
  good = _record_type("Standard_Real", kind=clang.cindex.TypeKind.DOUBLE)
  m = _method(
    "GetGraph",
    [_param("seed", good)],
    result_type=_ref_to(bad),
  )

  reason = method_signature.signature_references_excluded_class(
    m, _excluder("Interface_Graph")
  )

  assert reason == ("Interface_Graph", "return")


def test_method_with_only_resolved_types_passes():
  good_a = _record_type("Standard_Real", kind=clang.cindex.TypeKind.DOUBLE)
  good_b = _record_type("gp_Pnt")
  m = _method(
    "Add",
    [_param("x", good_a), _param("p", _ref_to(good_b))],
    result_type=_record_type("void", kind=clang.cindex.TypeKind.VOID),
  )

  reason = method_signature.signature_references_excluded_class(
    m, _excluder("MathOpt_Foo")
  )

  assert reason is None


def test_param_takes_precedence_over_return_when_both_excluded():
  bad_param = _record_type("VrmlData_Material")
  bad_return = _record_type("MathOpt_Foo")
  m = _method(
    "Build",
    [_param("mat", _ref_to(bad_param))],
    result_type=_ref_to(bad_return),
  )

  reason = method_signature.signature_references_excluded_class(
    m, _excluder("VrmlData_Material", "MathOpt_Foo")
  )

  assert reason == ("VrmlData_Material", "param 0")


def test_first_excluded_param_wins_left_to_right():
  good = _record_type("Standard_Real", kind=clang.cindex.TypeKind.DOUBLE)
  bad_a = _record_type("MathOpt_Foo")
  bad_b = _record_type("Interface_Graph")
  m = _method(
    "Mix",
    [
      _param("x", good),
      _param("a", bad_a),
      _param("b", bad_b),
    ],
    result_type=_record_type("void", kind=clang.cindex.TypeKind.VOID),
  )

  reason = method_signature.signature_references_excluded_class(
    m, _excluder("MathOpt_Foo", "Interface_Graph")
  )

  assert reason == ("MathOpt_Foo", "param 1")


def test_excluded_template_argument_is_detected():
  inner = _record_type("MathOpt_Foo")
  container = _MockType(
    spelling="NCollection_Sequence<MathOpt_Foo>",
    kind=clang.cindex.TypeKind.UNEXPOSED,
    declaration=_class_decl("NCollection_Sequence"),
    template_args=[inner],
  )
  m = _method(
    "AppendList",
    [_param("seq", _ref_to(container))],
    result_type=_record_type("void", kind=clang.cindex.TypeKind.VOID),
  )

  reason = method_signature.signature_references_excluded_class(
    m, _excluder("MathOpt_Foo")
  )

  assert reason == ("MathOpt_Foo", "param 0")


def test_pointer_to_excluded_class_is_detected():
  bad = _record_type("MathOpt_Foo")
  m = _method(
    "Capture",
    [_param("p", _ptr_to(bad))],
    result_type=_record_type("void", kind=clang.cindex.TypeKind.VOID),
  )

  reason = method_signature.signature_references_excluded_class(
    m, _excluder("MathOpt_Foo")
  )

  assert reason == ("MathOpt_Foo", "param 0")


def test_method_with_no_params_and_void_return_passes():
  m = _method(
    "Reset",
    [],
    result_type=_record_type("void", kind=clang.cindex.TypeKind.VOID),
  )

  assert method_signature.signature_references_excluded_class(
    m, _excluder("MathOpt_Foo")
  ) is None


def test_none_method_short_circuits():
  assert method_signature.signature_references_excluded_class(
    None, _excluder("MathOpt_Foo")
  ) is None


def test_empty_exclusion_predicate_lets_everything_through():
  bad_looking = _record_type("MathOpt_Foo")
  m = _method(
    "Add",
    [_param("x", bad_looking)],
    result_type=bad_looking,
  )

  reason = method_signature.signature_references_excluded_class(
    m, lambda n: False
  )

  assert reason is None


# ---------------------------------------------------------------------------
# Side-table API
# ---------------------------------------------------------------------------


def test_record_and_pop_dropped_method_returns_recorded_reasons():
  method_signature.clear_dropped_methods()
  method_signature.record_dropped_method("MyClass", "Foo()", ("Bar", "param 0"))

  popped = method_signature.pop_dropped_method_reasons("MyClass", "Foo()")

  assert popped == [("Bar", "param 0")]
  assert method_signature.peek_dropped_method_reasons("MyClass", "Foo()") == []


def test_record_dropped_method_is_idempotent_for_repeated_reasons():
  method_signature.clear_dropped_methods()
  for _ in range(3):
    method_signature.record_dropped_method("MyClass", "Foo()", ("Bar", "param 0"))

  reasons = method_signature.peek_dropped_method_reasons("MyClass", "Foo()")

  assert reasons == [("Bar", "param 0")]
  method_signature.clear_dropped_methods()


def test_record_dropped_method_accumulates_distinct_reasons():
  method_signature.clear_dropped_methods()
  method_signature.record_dropped_method("MyClass", "Foo()", ("Bar", "param 0"))
  method_signature.record_dropped_method("MyClass", "Foo()", ("Baz", "return"))

  reasons = method_signature.pop_dropped_method_reasons("MyClass", "Foo()")

  assert reasons == [("Bar", "param 0"), ("Baz", "return")]


def test_pop_dropped_method_reasons_for_missing_key_returns_empty_list():
  method_signature.clear_dropped_methods()

  assert method_signature.pop_dropped_method_reasons("Missing", "Foo()") == []


# ---------------------------------------------------------------------------
# TS JSDoc rendering integration
# ---------------------------------------------------------------------------


def test_dropped_jsdoc_is_emitted_in_typescript_output():
  pytest.importorskip("yaml")
  from ocjs_bindgen.codegen.bindings import TypescriptBindings

  binder = TypescriptBindings.__new__(TypescriptBindings)
  theClass = cursor_mock(spelling="IGESData_GlobalSection")
  method = cursor_mock(spelling="Read")

  rendered = binder.render_dropped_method_jsdoc(
    theClass,
    method,
    [("IGESData_HArray1OfIGESEntity", "param 0"), ("Interface_Graph", "return")],
  )

  assert "// dropped: Read param 0 resolves to excluded type IGESData_HArray1OfIGESEntity" in rendered
  assert "// dropped: Read return resolves to excluded type Interface_Graph" in rendered


def test_base_render_dropped_method_jsdoc_is_noop():
  pytest.importorskip("yaml")
  from ocjs_bindgen.codegen.bindings import Bindings

  binder = Bindings.__new__(Bindings)
  theClass = cursor_mock(spelling="IGESData_GlobalSection")
  method = cursor_mock(spelling="Read")

  rendered = binder.render_dropped_method_jsdoc(
    theClass,
    method,
    [("IGESData_HArray1OfIGESEntity", "param 0")],
  )

  assert rendered == ""
