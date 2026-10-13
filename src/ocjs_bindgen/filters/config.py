"""YAML-driven bindgen exclusion configuration.

Migrated from `src/ocjs_bindgen/config/__init__.py` (PR 2.5). The legacy
import path continues to work via a thin re-export in
`ocjs_bindgen.config` so already-imported modules keep functioning.
"""

from __future__ import annotations

import os

import yaml

_DEFAULT_CONFIG_PATH = os.path.join(
  os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))),
  "bindgen-filters.yaml",
)


class BindgenConfig:
  """Holds parsed filter configuration for binding generation."""

  def __init__(self, config_path: str | None = None):
    path = config_path or os.environ.get("OCJS_BINDGEN_CONFIG", _DEFAULT_CONFIG_PATH)
    if not os.path.exists(path):
      raise FileNotFoundError(f"Bindgen config not found: {path}")

    raw = self._load_with_extends(path)
    exclude = raw.get("exclude", {})

    self.excluded_classes: set[str] = set()
    self.excluded_class_prefixes: list[str] = []
    for item in exclude.get("classes", []):
      if isinstance(item, dict) and "prefix" in item:
        self.excluded_class_prefixes.append(item["prefix"])
      elif isinstance(item, str):
        self.excluded_classes.add(item)

    self.excluded_methods: dict[str, set[str]] = {}
    for cls, methods in exclude.get("methods", {}).items():
      self.excluded_methods[cls] = set(methods) if methods else set()

    self.excluded_typedefs: set[str] = set(exclude.get("typedefs", []))
    self.excluded_template_typedefs: set[str] = set(exclude.get("template_typedefs", []))
    self.excluded_headers: set[str] = set(exclude.get("headers", []))
    self.excluded_global_methods: set[str] = set(exclude.get("global_methods", []))
    self.excluded_packages: set[str] = set(exclude.get("packages", []))

    deprecated = raw.get("deprecated", {})
    self.deprecated_include: bool = deprecated.get("include", True)
    self.deprecated_symbols: set[str] = set(deprecated.get("symbols", []))

    if not self.deprecated_include:
      self.excluded_classes |= self.deprecated_symbols
      self.excluded_global_methods |= self.deprecated_symbols

  @staticmethod
  def _load_with_extends(path: str) -> dict:
    with open(path) as f:
      raw = yaml.safe_load(f) or {}
    extends = raw.pop("extends", None)
    if extends:
      base_path = os.path.join(os.path.dirname(path), extends)
      if not os.path.exists(base_path):
        raise FileNotFoundError(f"Extended config not found: {base_path}")
      base = BindgenConfig._load_with_extends(base_path)
      BindgenConfig._deep_merge(base, raw)
      return base
    return raw

  @staticmethod
  def _deep_merge(base: dict, overlay: dict):
    """Recursively merge overlay into base, mutating base in place."""
    for key, val in overlay.items():
      if key in base and isinstance(base[key], dict) and isinstance(val, dict):
        BindgenConfig._deep_merge(base[key], val)
      else:
        base[key] = val

  def set_no_deprecated(self):
    """Exclude deprecated symbols regardless of YAML setting."""
    self.deprecated_include = False
    self.excluded_classes |= self.deprecated_symbols
    self.excluded_global_methods |= self.deprecated_symbols

  def is_class_excluded(self, name: str) -> bool:
    if name in self.excluded_classes:
      return True
    return any(name.startswith(p) for p in self.excluded_class_prefixes)

  def is_method_excluded(self, class_name: str, method_name: str) -> bool:
    if method_name in self.excluded_global_methods:
      return True
    if class_name not in self.excluded_methods:
      return False
    methods = self.excluded_methods[class_name]
    if not methods:
      return True
    return method_name in methods

  def is_typedef_excluded(self, name: str) -> bool:
    return name in self.excluded_typedefs

  def is_template_typedef_excluded(self, name: str) -> bool:
    return name in self.excluded_template_typedefs

  def is_header_excluded(self, filename: str) -> bool:
    return filename in self.excluded_headers

  def is_package_excluded(self, name: str) -> bool:
    return name in self.excluded_packages


_config: BindgenConfig | None = None


def get_config(config_path: str | None = None) -> BindgenConfig:
  global _config
  if _config is None or config_path is not None:
    _config = BindgenConfig(config_path)
  return _config
