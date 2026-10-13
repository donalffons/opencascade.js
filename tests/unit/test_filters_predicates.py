"""Unit tests for the semantic filter predicates.

PR 3.2 — covers `filterIncludeFile`, `filterSourceFile`, `filterEnum`,
`filterTypedef`, and the env-driven `filterPackages`. Each predicate is
pure with respect to its inputs (no clang AST), so the tests use plain
strings or the `cursor_factory` fixture from `tests/conftest.py`.
"""

from __future__ import annotations

import os
from unittest.mock import MagicMock

from ocjs_bindgen.filters.enums import filterEnum
from ocjs_bindgen.filters.include_files import filterIncludeFile
from ocjs_bindgen.filters.source_files import filterSourceFile
from ocjs_bindgen.filters.typedefs import filterTypedef, isHandleTemplateTypedef


def test_include_file_only_admits_hxx() -> None:
  assert filterIncludeFile("foo.hxx")
  assert not filterIncludeFile("foo.h")
  assert not filterIncludeFile("foo.cpp")
  assert not filterIncludeFile("foo_pch.hxx")


def test_source_file_admits_cxx_cpp_c_only() -> None:
  assert filterSourceFile("foo.cxx")
  assert filterSourceFile("foo.cpp")
  assert filterSourceFile("foo.c")
  assert not filterSourceFile("foo.h")
  assert not filterSourceFile("foo.mm")
  assert not filterSourceFile("/proj/GTests/test.cxx")
  assert not filterSourceFile("foo_Test.cpp")


def test_filter_enum_rejects_anonymous(cursor_factory) -> None:
  named = cursor_factory(spelling="TopAbs_Orientation")
  anon = cursor_factory(spelling="")
  assert filterEnum(named)
  assert not filterEnum(anon)


def test_filter_typedef_rejects_iterator_underlying(cursor_factory) -> None:
  underlying = MagicMock(spelling="MyContainer::Iterator")
  loc_file = MagicMock(name="path.hxx")
  loc_file.name = "path.hxx"
  loc = MagicMock(file=loc_file)
  td = cursor_factory(spelling="LegacyIter")
  td.underlying_typedef_type = underlying
  td.location = loc
  assert not filterTypedef(td)


def test_filter_typedef_admits_handle_underlying(cursor_factory) -> None:
  underlying = MagicMock(spelling="opencascade::handle<TDocStd_Document>")
  loc_file = MagicMock()
  loc_file.name = "path.hxx"
  loc = MagicMock(file=loc_file)
  td = cursor_factory(spelling="Handle_TDocStd_Document")
  td.underlying_typedef_type = underlying
  td.location = loc
  assert filterTypedef(td)


def test_template_binding_rejects_handle_alias_registration(cursor_factory) -> None:
  """A handle typedef is type metadata, not a second Embind class.

  The pointee class's ``smart_ptr`` registration owns the canonical
  ``opencascade::handle<T>`` TypeID. Emitting ``class_<HandleAlias>`` for the
  same C++ type aborts module initialisation with a duplicate-type error.
  """
  canonical_decl = MagicMock(spelling="handle")
  canonical = MagicMock(spelling="opencascade::handle<IMeshData_PCurve>")
  canonical.get_declaration.return_value = canonical_decl
  underlying = MagicMock(spelling="IMeshData::IPCurveHandle")
  underlying.get_canonical.return_value = canonical
  underlying.get_declaration.return_value = MagicMock(spelling="IPCurveHandle")
  td = cursor_factory(spelling="IMeshData_IPCurveHandle")
  td.underlying_typedef_type = underlying

  assert isHandleTemplateTypedef(td)


def test_filter_typedef_rejects_stdlib_underlying(cursor_factory) -> None:
  underlying = MagicMock(spelling="std::deque<int, NCollection_OccAllocator<int>>")
  loc_file = MagicMock()
  loc_file.name = "path.hxx"
  loc = MagicMock(file=loc_file)
  td = cursor_factory(spelling="StdAlias")
  td.underlying_typedef_type = underlying
  td.location = loc
  assert not filterTypedef(td)


def test_filter_packages_blocks_excluded(monkeypatch, tmp_path) -> None:
  config_yaml = tmp_path / "filters.yaml"
  config_yaml.write_text(
    "exclude:\n"
    "  packages:\n"
    "    - LegacyPackage\n"
    "  classes:\n"
    "    - prefix: Bar_\n"
  )
  monkeypatch.setenv("OCJS_BINDGEN_CONFIG", str(config_yaml))
  os.environ.pop("OCJS_ROOT", None)
  # The packages module reads exclusions at import time, so we re-import
  # here to pick up the patched env.
  from importlib import reload

  import ocjs_bindgen.filters.packages as pkg_mod
  reload(pkg_mod)

  assert not pkg_mod.filterPackages("LegacyPackage")
  assert not pkg_mod.filterPackages("Bar_Quux")
  assert pkg_mod.filterPackages("Modern")
  assert not pkg_mod.filterPackages("")
