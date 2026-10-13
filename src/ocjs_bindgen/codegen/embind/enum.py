"""Embind enum codegen (Phase 2 PR 2.3).

Top-level enums are emitted via :func:`process_enum`. Nested enums and
nested PODs/structs walked from inside a class body live in
:mod:`ocjs_bindgen.codegen.embind.class_`.
"""

from __future__ import annotations

from ocjs_bindgen.naming.cpp import getEnumQualifiedName
from ocjs_bindgen.naming.ts import getEnumJsPublicName


def process_enum(b, theEnum):
  """Emit a stand-alone `EMSCRIPTEN_BINDINGS` block registering an enum."""
  jsName = getEnumJsPublicName(theEnum)
  cppQual = getEnumQualifiedName(theEnum)
  output = "EMSCRIPTEN_BINDINGS(" + jsName + ") {\n"

  bindingsOutput = "  enum_<" + cppQual + ">(\"" + jsName + "\", emscripten::enum_value_type::string)\n"
  enumChildren = list(theEnum.get_children())
  prefix = (cppQual + "::") if theEnum.is_scoped_enum() else (cppQual.rsplit("::", 1)[0] + "::" if "::" in cppQual else "")
  for enumChild in enumChildren:
    bindingsOutput += "    .value(\"" + enumChild.spelling + "\", " + prefix + enumChild.spelling + ")\n"
  bindingsOutput += "  ;\n"
  output += bindingsOutput

  output += "}\n\n"
  return output
