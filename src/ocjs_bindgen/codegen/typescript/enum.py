"""TypeScript enum interface emission.

Extracted from `TypescriptBindings.processEnum` (PR 2.4).
"""

from __future__ import annotations

from ocjs_bindgen.naming import getEnumJsPublicName


def process_enum(tsb, theEnum):
  output = ""
  enumName = getEnumJsPublicName(theEnum)
  output += "export type " + enumName + " = typeof " + enumName + "[keyof typeof " + enumName + "];\n"
  output += tsb._jsdoc(enumName)
  output += "export declare const " + enumName + ": {\n"
  for enumChild in list(theEnum.get_children()):
    if not enumChild.spelling or not enumChild.spelling.isidentifier():
      continue
    output += tsb._enum_member_jsdoc(enumName, enumChild.spelling)
    output += "  readonly " + enumChild.spelling + ": '" + enumChild.spelling + "';\n"
  output += "};\n\n"
  tsb.exports.add(enumName)
  return output
