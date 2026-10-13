"""Enum-level bindgen filter (semantic / AST-driven only)."""


def filterEnum(enum, additionalInfo=None):
  if enum.spelling == "":
    return False
  return True
