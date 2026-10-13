"""Typedef filter (semantic / AST-driven only)."""

import re

_NESTED_TPL_PATTERN = re.compile(r"^[A-Za-z_]\w*::[A-Za-z_]\w*<")

_STDLIB_NS_PREFIXES = (
  "std::",
  "__1::",
  "__gnu_cxx::",
  "__cxxabiv1::",
  "emscripten::",
)


def isHandleTemplateTypedef(typedef) -> bool:
  """Return whether a typedef aliases an OCCT smart-handle specialization.

  Handle aliases remain useful to the type resolver, but they must not be
  emitted as independent ``class_`` registrations: the pointee class's
  ``smart_ptr`` binding owns the same canonical C++ TypeID.
  """
  underlying = typedef.underlying_typedef_type
  candidates = [underlying]
  get_canonical = getattr(underlying, "get_canonical", None)
  if callable(get_canonical):
    candidates.append(get_canonical())
  for candidate in candidates:
    spelling = getattr(candidate, "spelling", "").replace(
      "occ::handle<", "opencascade::handle<"
    )
    if spelling.startswith("opencascade::handle<"):
      return True
    get_declaration = getattr(candidate, "get_declaration", None)
    declaration = get_declaration() if callable(get_declaration) else None
    if declaration is not None and declaration.spelling == "handle":
      return True
  return False


def filterTypedef(typedef, additionalInfo=None):
  if "::Iterator" in typedef.underlying_typedef_type.spelling:
    return False

  underlying = typedef.underlying_typedef_type.spelling
  if typedef.location.file.name == "myMain.h" or underlying.startswith((
    "opencascade::handle",
    "handle",
    "NCollection",
    "GeomLProp_",
  )):
    return True

  if underlying.startswith(_STDLIB_NS_PREFIXES):
    return False

  if _NESTED_TPL_PATTERN.match(underlying):
    return True

  return False
