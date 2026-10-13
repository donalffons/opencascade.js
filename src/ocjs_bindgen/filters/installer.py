"""YAML config → runtime filter wiring (PR 2.5).

`install(config)` wraps the semantic filter functions in
`ocjs_bindgen.filters.*` with the YAML-driven exclusion logic. It also
patches the legacy `filter.*` shim modules so any caller still importing
them (custom-build scripts, debuggers) sees the same wrapped predicates.
"""

from __future__ import annotations

import os
import sys

from . import (
  classes as _classes_mod,
)
from . import (
  include_files as _include_mod,
)
from . import (
  method_or_properties as _method_mod,
)
from . import (
  method_signature as _method_signature_mod,
)
from . import (
  packages as _packages_mod,
)
from . import (
  typedefs as _typedefs_mod,
)
from .config import BindgenConfig


def install(config: BindgenConfig):
  """Patch the filter modules with config-driven filtering.

  Must be called before importing `pipeline.generate` / `codegen.bindings`
  so the per-call references to `filterClass`, `filterMethodOrProperty`,
  etc., resolve to the wrapped predicates.
  """

  filter_dir = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
  if filter_dir not in sys.path:
    sys.path.insert(0, filter_dir)

  # Legacy shim modules (`filter.*`) re-export from `ocjs_bindgen.filters.*`.
  # Importing them ensures they are present in `sys.modules` so the patches
  # below cover both call paths.
  import filter.filterClasses as _shim_classes
  import filter.filterEnums as _shim_enums  # noqa: F401  (kept for symmetry)
  import filter.filterIncludeFiles as _shim_include
  import filter.filterMethodOrProperties as _shim_method
  import filter.filterPackages as _shim_packages
  import filter.filterTypedefs as _shim_typedefs

  _orig_filterClass = _classes_mod.filterClass
  _orig_filterMethod = _method_mod.filterMethodOrProperty
  _orig_filterTypedef = _typedefs_mod.filterTypedef
  _orig_filterIncludeFile = _include_mod.filterIncludeFile
  _orig_filterPackages = _packages_mod.filterPackages

  # Exclusion entries in `bindgen-filters.yaml` are written against the
  # JS-public (chain-encoded) name (e.g. `MathRoot_MultipleGetValueFn`,
  # `LDOM_SBuffer_LDOM_StringElem`). After the recursive class walker landed,
  # nested classes carry the qualified JS-public name as their identity,
  # but `cursor.spelling` is still the bare innermost spelling. Without
  # consulting `js_public_name` here, the exclusion list silently misses
  # nested classes (`MathRoot_MultipleGetValueFn` is the smoking-gun
  # without this: present in the filter, present in the YAML, missing
  # from match because `cursor.spelling == "MultipleGetValueFn"` and the
  # nested-class context is dropped).
  from ocjs_bindgen.naming import getClassJsPublicName

  def _both_class_names(cursor):
    bare = cursor.spelling or ""
    try:
      qualified = getClassJsPublicName(cursor) or ""
    except Exception:
      qualified = ""
    return bare, qualified

  def config_filterClass(theClass, additionalInfo=None):
    bare, qualified = _both_class_names(theClass)
    if bare and config.is_class_excluded(bare):
      return False
    if qualified and qualified != bare and config.is_class_excluded(qualified):
      return False
    return _orig_filterClass(theClass, additionalInfo)

  def _exclusion_predicate(name: str) -> bool:
    """Exclusion predicate — class is filtered if YAML/AST drops it.

    Stays generic per the audit (no manual list): consults the same
    `is_class_excluded` config-driven predicate used to filter top-level
    class emission. Method-level filtering re-uses class-level rules so a
    single YAML edit touches both surfaces consistently.
    """
    return bool(name) and config.is_class_excluded(name)

  def config_filterMethod(theClass, methodOrProperty):
    if config.is_method_excluded(theClass.spelling, methodOrProperty.spelling):
      return False
    if not _orig_filterMethod(theClass, methodOrProperty):
      return False
    # Drop methods whose param/return types resolve to excluded classes.
    # The reason is recorded in the side-table so the TS class binder can
    # render a `// dropped: ...` JSDoc comment at the would-be emit site
    # (the Embind binder reads but does not render, keeping .cpp clean).
    reason = _method_signature_mod.signature_references_excluded_class(
      methodOrProperty, _exclusion_predicate
    )
    if reason is not None:
      try:
        _method_signature_mod.record_dropped_method(
          theClass.spelling, methodOrProperty.displayname, reason
        )
      except Exception:
        pass
      return False
    return True

  def config_filterTypedef(typedef, additionalInfo=None):
    if config.is_typedef_excluded(typedef.spelling):
      return False
    return _orig_filterTypedef(typedef, additionalInfo)

  def config_filterIncludeFile(filename):
    if config.is_header_excluded(filename):
      return False
    return _orig_filterIncludeFile(filename)

  def config_filterPackages(packageName):
    if config.is_package_excluded(packageName):
      return False
    return _orig_filterPackages(packageName)

  _classes_mod.filterClass = config_filterClass
  _method_mod.filterMethodOrProperty = config_filterMethod
  _typedefs_mod.filterTypedef = config_filterTypedef
  _include_mod.filterIncludeFile = config_filterIncludeFile
  _packages_mod.filterPackages = config_filterPackages

  _shim_classes.filterClass = config_filterClass
  _shim_method.filterMethodOrProperty = config_filterMethod
  _shim_typedefs.filterTypedef = config_filterTypedef
  _shim_include.filterIncludeFile = config_filterIncludeFile
  _shim_packages.filterPackages = config_filterPackages

  if 'bindings' in sys.modules:
    sys.modules['bindings'].filterClass = config_filterClass
    sys.modules['bindings'].filterMethodOrProperty = config_filterMethod
  if 'TuInfo' in sys.modules:
    sys.modules['TuInfo'].filterTypedef = config_filterTypedef
  if 'Common' in sys.modules:
    sys.modules['Common'].filterIncludeFile = config_filterIncludeFile

  print(f"Bindgen filters installed from config: "
        f"{len(config.excluded_classes)} classes, "
        f"{len(config.excluded_class_prefixes)} class prefixes, "
        f"{len(config.excluded_methods)} class-method rules, "
        f"{len(config.excluded_global_methods)} global method rules, "
        f"{len(config.excluded_typedefs)} typedefs, "
        f"{len(config.excluded_headers)} headers, "
        f"{len(config.excluded_packages)} packages excluded",
        flush=True)
