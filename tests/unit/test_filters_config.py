"""Unit tests for `ocjs_bindgen.filters.config`.

PR 3.2 — covers YAML parsing, deep-merge with `extends:`, the
`is_*_excluded` predicates, and the deprecated-symbols toggle.
"""

from __future__ import annotations

import textwrap
from pathlib import Path

import pytest

from ocjs_bindgen.filters.config import BindgenConfig


def _write(tmp_path: Path, name: str, body: str) -> Path:
  path = tmp_path / name
  path.write_text(textwrap.dedent(body).lstrip())
  return path


def test_parses_class_exclusions(tmp_path: Path) -> None:
  cfg_path = _write(tmp_path, "filters.yaml", """
    exclude:
      classes:
        - Foo
        - prefix: Bar_
        - Baz
  """)
  cfg = BindgenConfig(str(cfg_path))
  assert cfg.is_class_excluded("Foo")
  assert cfg.is_class_excluded("Bar_Quux")
  assert cfg.is_class_excluded("Baz")
  assert not cfg.is_class_excluded("Other")


def test_method_exclusions_class_scoped_and_global(tmp_path: Path) -> None:
  cfg_path = _write(tmp_path, "filters.yaml", """
    exclude:
      methods:
        Foo: [m1, m2]
        Bar: []   # entire class
      global_methods:
        - blacklisted
  """)
  cfg = BindgenConfig(str(cfg_path))
  assert cfg.is_method_excluded("Foo", "m1")
  assert not cfg.is_method_excluded("Foo", "m3")
  assert cfg.is_method_excluded("Bar", "anything")
  assert cfg.is_method_excluded("AnyClass", "blacklisted")


def test_typedef_header_package_predicates(tmp_path: Path) -> None:
  cfg_path = _write(tmp_path, "filters.yaml", """
    exclude:
      typedefs:
        - LegacyTypedef
      template_typedefs:
        - LegacyTplTypedef
      headers:
        - oldHeader.hxx
      packages:
        - LegacyPackage
  """)
  cfg = BindgenConfig(str(cfg_path))
  assert cfg.is_typedef_excluded("LegacyTypedef")
  assert cfg.is_template_typedef_excluded("LegacyTplTypedef")
  assert cfg.is_header_excluded("oldHeader.hxx")
  assert cfg.is_package_excluded("LegacyPackage")
  assert not cfg.is_typedef_excluded("Modern")


def test_extends_deep_merges_dict_keys(tmp_path: Path) -> None:
  # `_deep_merge` recurses into dicts but REPLACES list values wholesale.
  # The override therefore contributes its own `classes:` list (no
  # concatenation) and the deep-merged dict carries over keys the
  # override does not redeclare.
  base = _write(tmp_path, "base.yaml", """
    exclude:
      classes:
        - BaseExcluded
      packages:
        - basePkg
  """)
  override = _write(tmp_path, "override.yaml", f"""
    extends: {base.name}
    exclude:
      classes:
        - OverrideExcluded
  """)
  cfg = BindgenConfig(str(override))
  # Override list replaces base list:
  assert cfg.is_class_excluded("OverrideExcluded")
  assert not cfg.is_class_excluded("BaseExcluded")
  # Untouched dict keys (`packages:`) propagate from base unchanged:
  assert cfg.is_package_excluded("basePkg")


def test_set_no_deprecated_excludes_deprecated_symbols(tmp_path: Path) -> None:
  cfg_path = _write(tmp_path, "filters.yaml", """
    exclude: {}
    deprecated:
      include: true
      symbols:
        - DeprFoo
        - deprMethod
  """)
  cfg = BindgenConfig(str(cfg_path))
  assert not cfg.is_class_excluded("DeprFoo")
  cfg.set_no_deprecated()
  assert cfg.is_class_excluded("DeprFoo")
  assert cfg.is_method_excluded("AnyClass", "deprMethod")


def test_missing_config_raises(tmp_path: Path) -> None:
  with pytest.raises(FileNotFoundError):
    BindgenConfig(str(tmp_path / "absent.yaml"))
