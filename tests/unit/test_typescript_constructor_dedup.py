from collections import namedtuple
from types import SimpleNamespace

import clang.cindex

from ocjs_bindgen.codegen.bindings import Bindings
from ocjs_bindgen.codegen.typescript.constructor import (
    dedupe_js_equivalent_constructors,
)
from tests.conftest import _MockType, cursor_mock

JsType = namedtuple("JsType", ["category", "name"])


class _Argument:
    def __init__(self, category: str):
        self.type = category


class _Constructor:
    def __init__(self, *categories: str, defaults: int = 0):
        self.arguments = [_Argument(category) for category in categories]
        self.defaults = defaults

    def get_arguments(self):
        return self.arguments


class _Binder:
    def _classify_js_type(self, type_, template_decl, template_args):
        return JsType(type_, type_)

    def _countTrailingDefaults(self, constructor):
        return constructor.defaults


def test_dedupes_cpp_constructors_with_the_same_javascript_signature() -> None:
    string_view = _Constructor("string")
    c_string = _Constructor("string")
    character = _Constructor("string_char")

    result = dedupe_js_equivalent_constructors(
        _Binder(),
        [string_view, c_string, character],
    )

    assert result == [string_view, character]


def test_prefers_the_equivalent_constructor_with_more_trailing_defaults() -> None:
    required = _Constructor("object", "boolean")
    optional = _Constructor("object", "boolean", defaults=1)

    result = dedupe_js_equivalent_constructors(
        _Binder(),
        [required, optional],
    )

    assert result == [optional]


class _FilterHarness:
    _filter_overloads = Bindings._filter_overloads

    @staticmethod
    def _is_deleted_method(_constructor):
        return False

    @staticmethod
    def _is_move_constructor(_constructor):
        return False

    @staticmethod
    def _dedupe_float_double(constructors):
        return constructors

    @staticmethod
    def _dedupe_string_encodings(constructors):
        return constructors

    @staticmethod
    def _dedupe_char_vs_int(constructors):
        return constructors


def test_filters_raw_pointer_constructor_only_for_generated_template_alias() -> None:
    pointer_arg = cursor_mock(
        kind=clang.cindex.CursorKind.PARM_DECL,
        type=_MockType(kind=clang.cindex.TypeKind.POINTER),
    )
    value_arg = cursor_mock(
        kind=clang.cindex.CursorKind.PARM_DECL,
        type=_MockType(kind=clang.cindex.TypeKind.INT),
    )
    raw_pointer_constructor = cursor_mock(
        kind=clang.cindex.CursorKind.CONSTRUCTOR,
        children=[pointer_arg],
    )
    safe_constructor = cursor_mock(
        kind=clang.cindex.CursorKind.CONSTRUCTOR,
        children=[value_arg],
    )
    generated_alias = cursor_mock(
        kind=clang.cindex.CursorKind.TYPE_ALIAS_DECL,
        spelling="SomeTemplate_double",
        location=SimpleNamespace(
            file=SimpleNamespace(name="/build/bindings/myMain.h"),
        ),
    )
    regular_alias = cursor_mock(
        kind=clang.cindex.CursorKind.TYPE_ALIAS_DECL,
        spelling="SomeTemplate_double",
        location=SimpleNamespace(
            file=SimpleNamespace(name="/occt/include/SomeTemplate.hxx"),
        ),
    )
    harness = _FilterHarness()

    assert harness._filter_overloads(
        [raw_pointer_constructor, safe_constructor],
        generated_alias,
    ) == [safe_constructor]
    assert harness._filter_overloads(
        [raw_pointer_constructor, safe_constructor],
        regular_alias,
    ) == [raw_pointer_constructor, safe_constructor]
