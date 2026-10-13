"""Unit tests for the std::optional emit-time guards.

Pure-Python predicates with no WASM build dependency — these tests run in
sub-second time and gate the Phase 2 deliverable of the OCJS Optional-
Overload Resolution Blueprint (R4 / R6 / T1).

Each guard is exercised with:

* a **positive case** that feeds an unsafe binding shape and asserts
  :class:`SkipException` is raised with the exact diagnostic message from
  the blueprint;
* a **negative case** that feeds an admissible binding shape and asserts
  the predicate returns cleanly.

No regex assertions — message strings compared by direct equality.
"""

from __future__ import annotations

from types import SimpleNamespace

import clang.cindex
import pytest

from ocjs_bindgen.codegen.wasm_common import SkipException
from ocjs_bindgen.predicates.optional_emission_guards import (
  assert_no_multi_all_optional_same_arity,
  assert_no_nonconst_ref_in_optional,
  assert_no_val_vs_optional_same_arity,
)


def _arg(spelling, type_kind=clang.cindex.TypeKind.INT, pointee_spelling="", is_const=False):
  """Build a minimal libclang-shaped argument cursor stub.

  The guards only call ``arg.type.kind``, ``arg.type.get_pointee()``,
  ``arg.spelling`` and the pointee's ``spelling`` / ``is_const_qualified``.
  Anything else stays out of scope.
  """
  pointee = SimpleNamespace(
    spelling=pointee_spelling,
    is_const_qualified=lambda: is_const,
  )
  arg_type = SimpleNamespace(
    kind=type_kind,
    get_pointee=lambda: pointee,
  )
  return SimpleNamespace(spelling=spelling, type=arg_type)


# ---------------------------------------------------------------------------
# R6 — non-const reference wrapped in std::optional
# ---------------------------------------------------------------------------


def test_r6_raises_for_nonconst_lvalue_reference():
  cls = "BRepGraph_Transform"
  method = "BRepGraph_Transform.Perform"
  nonconst_ref = _arg(
    spelling="copyGeom",
    type_kind=clang.cindex.TypeKind.LVALUEREFERENCE,
    pointee_spelling="bool",
    is_const=False,
  )
  with pytest.raises(SkipException) as info:
    assert_no_nonconst_ref_in_optional(cls, method, [nonconst_ref])
  expected = (
    "BRepGraph_Transform.BRepGraph_Transform.Perform param copyGeom: "
    "cannot wrap non-const reference 'bool&' in std::optional — "
    "would silently drop caller mutation. Use the TR-OUT pathway instead."
  )
  assert str(info.value) == expected


def test_r6_passes_const_reference():
  const_ref = _arg(
    spelling="theRange",
    type_kind=clang.cindex.TypeKind.LVALUEREFERENCE,
    pointee_spelling="Message_ProgressRange",
    is_const=True,
  )
  assert_no_nonconst_ref_in_optional("BRepAlgoAPI_Fuse", "BRepAlgoAPI_Fuse.Build", [const_ref])


def test_r6_passes_value_parameter():
  value_arg = _arg(spelling="radius", type_kind=clang.cindex.TypeKind.DOUBLE)
  assert_no_nonconst_ref_in_optional(
    "BRepPrimAPI_MakeSphere", "BRepPrimAPI_MakeSphere.constructor", [value_arg],
  )


def test_r6_passes_empty_optional_args():
  assert_no_nonconst_ref_in_optional("AnyClass", "AnyClass.AnyMethod", [])


# ---------------------------------------------------------------------------
# R4 — val vs std::optional same-arity ambiguity
# ---------------------------------------------------------------------------


def _type_lookup(types_by_position):
  """Build a `get_arg_type_str(arg)` callable that returns the configured
  type spelling for each arg by identity.
  """
  def _get(arg):
    return types_by_position[id(arg)]
  return _get


def test_r4_raises_when_sibling_has_val_at_optional_position():
  cls = "ExampleClass"
  method = "ExampleClass.process"
  sibling_arg_at_pos_1 = _arg(spelling="payload")
  sibling_args = [_arg(spelling="ignored0"), sibling_arg_at_pos_1]
  get_type = _type_lookup({
    id(sibling_args[0]): "int",
    id(sibling_arg_at_pos_1): "emscripten::val",
  })
  with pytest.raises(SkipException) as info:
    assert_no_val_vs_optional_same_arity(
      cls, method, optional_positions=[1], same_arity_sibling_arg_lists=[sibling_args],
      get_arg_type_str=get_type,
    )
  expected = (
    "ExampleClass.ExampleClass.process: "
    "same-arity overload mixes emscripten::val with std::optional<T> "
    "at parameter position 1. "
    "The val overload would always win (R4) and the optional would be unreachable."
  )
  assert str(info.value) == expected


def test_r4_passes_when_sibling_has_concrete_type_at_optional_position():
  cls = "ExampleClass"
  method = "ExampleClass.process"
  sibling_args = [_arg(spelling="a"), _arg(spelling="b")]
  get_type = _type_lookup({
    id(sibling_args[0]): "int",
    id(sibling_args[1]): "double",
  })
  assert_no_val_vs_optional_same_arity(
    cls, method, optional_positions=[1], same_arity_sibling_arg_lists=[sibling_args],
    get_arg_type_str=get_type,
  )


def test_r4_passes_when_no_same_arity_siblings():
  assert_no_val_vs_optional_same_arity(
    "AnyClass", "AnyClass.AnyMethod",
    optional_positions=[0, 1],
    same_arity_sibling_arg_lists=[],
    get_arg_type_str=lambda a: "unused",
  )


def test_r4_passes_when_val_position_not_optional():
  cls = "ExampleClass"
  method = "ExampleClass.process"
  sibling_args = [_arg(spelling="leading_val"), _arg(spelling="trailing_concrete")]
  get_type = _type_lookup({
    id(sibling_args[0]): "emscripten::val",
    id(sibling_args[1]): "Standard_Real",
  })
  assert_no_val_vs_optional_same_arity(
    cls, method, optional_positions=[1], same_arity_sibling_arg_lists=[sibling_args],
    get_arg_type_str=get_type,
  )


# ---------------------------------------------------------------------------
# T1 — multi-optional same-arity collision
# ---------------------------------------------------------------------------


def test_t1_raises_when_two_or_more_all_optional_siblings():
  cls = "ExampleClass"
  method = "ExampleClass.compute"
  sigs = [
    "(std::optional<int>, std::optional<double>)",
    "(std::optional<float>, std::optional<bool>)",
  ]
  with pytest.raises(SkipException) as info:
    assert_no_multi_all_optional_same_arity(cls, method, sigs)
  expected = (
    "ExampleClass.ExampleClass.compute: "
    "same-arity overloads (std::optional<int>, std::optional<double>) and "
    "(std::optional<float>, std::optional<bool>) "
    "both use only std::optional parameter types — "
    "dispatcher cannot disambiguate. "
    "Last-registered wins, which is implementation-defined across builds. "
    "Rename or remove one overload."
  )
  assert str(info.value) == expected


def test_t1_passes_with_single_all_optional_sibling():
  assert_no_multi_all_optional_same_arity(
    "AnyClass", "AnyClass.AnyMethod",
    ["(std::optional<int>, std::optional<double>)"],
  )


def test_t1_passes_with_empty_sibling_list():
  assert_no_multi_all_optional_same_arity("AnyClass", "AnyClass.AnyMethod", [])


def test_t1_raises_on_three_siblings_reports_first_two():
  """Diagnostic should call out the first two colliding signatures even
  when more than two collide — the YAML author needs to act on at least
  one of them; naming all colliding members in a single message would
  bloat the diagnostic without helping triage.
  """
  cls = "ExampleClass"
  method = "ExampleClass.compute"
  sigs = [
    "(std::optional<int>)",
    "(std::optional<double>)",
    "(std::optional<float>)",
  ]
  with pytest.raises(SkipException) as info:
    assert_no_multi_all_optional_same_arity(cls, method, sigs)
  assert "(std::optional<int>)" in str(info.value)
  assert "(std::optional<double>)" in str(info.value)
