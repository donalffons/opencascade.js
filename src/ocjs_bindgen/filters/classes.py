"""Class-level bindgen filter (semantic / AST-driven only).

All name-based class exclusions live in `bindgen-filters.yaml` and are
applied by `installer.install` which wraps the predicate below.
"""


def filterClass(theClass, additionalInfo=None):
  return True
