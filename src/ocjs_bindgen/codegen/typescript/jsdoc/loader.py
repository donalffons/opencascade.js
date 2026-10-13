"""JSDoc cache loader.

Extracted from `bindings.TypescriptBindings._load_docs` (PR 2.4).

The loader hydrates `TypescriptBindings._docs_cache` from
`build/occt-docs.json` (produced by `extract-docs.py`). The cache is
class-level so a single process-wide JSON parse serves every binder
instance.
"""

from __future__ import annotations

import json
import os

from ocjs_bindgen.config.paths import OCJS_ROOT


def load_docs(tsb_cls):
  """Hydrate and return `tsb_cls._docs_cache`.

  `tsb_cls` is the `TypescriptBindings` class (caller context — class-level
  cache mirrors the previous `@staticmethod` form).
  """
  if tsb_cls._docs_cache is not None:
    return tsb_cls._docs_cache
  docs_path = os.path.join(OCJS_ROOT, "build", "occt-docs.json")
  if os.path.isfile(docs_path):
    with open(docs_path) as f:
      tsb_cls._docs_cache = json.load(f)
  else:
    tsb_cls._docs_cache = {}
  return tsb_cls._docs_cache
