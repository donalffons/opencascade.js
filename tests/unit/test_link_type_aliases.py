"""Type-only aliases for C++ typedefs sharing an Embind registration."""

from ocjs_bindgen.link.yaml_build import _render_type_only_aliases


def test_render_type_only_aliases_keeps_only_emitted_canonicals() -> None:
  rendered = _render_type_only_aliases(
    {
      "math_Vector": "math_VectorBase_double",
      "MissingAlias": "MissingCanonical",
      "AlreadyDeclared": "math_VectorBase_double",
    },
    declared_names={"math_VectorBase_double", "AlreadyDeclared"},
  )

  assert rendered == "export type math_Vector = math_VectorBase_double;\n"
