"""Header-include filter (semantic / extension-based only)."""


def filterIncludeFile(filename):
  if not filename.endswith(".hxx"):
    return False
  if filename.endswith("_pch.hxx"):
    return False
  return True
