"""Bindgen filter package.

PR 2.5 — consolidates the legacy `src/filter/*` modules and the
`src/ocjs_bindgen/{config,filters}.py` orchestration into a single
`ocjs_bindgen.filters` package.

Public surface (re-exported here for ergonomic imports):
  - `BindgenConfig`, `get_config` — YAML-driven exclusion config.
  - `install` — applies the YAML config to the runtime filter functions.
  - `filterClass`, `filterMethodOrProperty`, `filterTypedef`,
    `filterEnum`, `filterIncludeFile`, `filterPackages`, `filterSourceFile`
    — semantic / AST-driven filter predicates consumed by the bindgen.
"""

from .classes import filterClass
from .config import BindgenConfig, get_config
from .enums import filterEnum
from .include_files import filterIncludeFile
from .installer import install
from .method_or_properties import filterMethodOrProperty
from .packages import filterPackages
from .source_files import filterSourceFile
from .typedefs import filterTypedef

__all__ = [
  "BindgenConfig",
  "get_config",
  "install",
  "filterClass",
  "filterMethodOrProperty",
  "filterTypedef",
  "filterEnum",
  "filterIncludeFile",
  "filterPackages",
  "filterSourceFile",
]
