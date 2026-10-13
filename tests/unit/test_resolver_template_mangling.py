"""C++-spelling preservation for generated template declaration names."""

from __future__ import annotations

from unittest.mock import MagicMock

from ocjs_bindgen.resolver.strategies.template import _mangle_concrete_template


def test_primitive_template_argument_keeps_cpp_spelling() -> None:
  concrete = MagicMock(spelling="double")
  parameter = MagicMock(spelling="TheItemType")
  parameter.get_canonical.return_value = MagicMock(
    spelling="type-parameter-0-0",
  )
  container = MagicMock()
  container.get_num_template_arguments.return_value = 1
  container.get_template_argument_type.return_value = parameter

  assert _mangle_concrete_template(
    "NCollection_Array1",
    container,
    {
      "TheItemType": concrete,
      "type-parameter-0-0": concrete,
    },
  ) == "NCollection_Array1_double"
