from __future__ import annotations

import clang.cindex

from ocjs_bindgen.codegen.bindings import EmbindBindings, TypescriptBindings
from ocjs_bindgen.codegen.rbv import select_js_effective_overload_survivors

_FIXTURE = """
namespace occ {
template <typename T>
class handle {
public:
  handle();
};
}

struct Sequence {};

struct Connector {
  static occ::handle<Sequence> connect(int value);
  [[deprecated("use the direct return")]]
  static void connect(int value, occ::handle<Sequence>& output);
};
"""


def _fixture_methods():
  translation_unit = clang.cindex.Index.create().parse(
    "deprecated-overload-fixture.hxx",
    args=["-std=c++17"],
    unsaved_files=[("deprecated-overload-fixture.hxx", _FIXTURE)],
  )
  connector = next(
    cursor
    for cursor in translation_unit.cursor.get_children()
    if cursor.spelling == "Connector"
  )
  methods = [
    cursor
    for cursor in connector.get_children()
    if cursor.kind == clang.cindex.CursorKind.CXX_METHOD
  ]
  return connector, methods


class _EmitterHarness:
  @staticmethod
  def _checkUnbindableArgs(*_args):
    return None

  @staticmethod
  def _classify_js_type(type_, *_args):
    return type_.spelling

  @staticmethod
  def _getJsArity(_method):
    return 1

  @staticmethod
  def _jsEffectiveArityCollisions(*_args):
    return []

  @staticmethod
  def _missing_base_overloads(*_args):
    return []

  @staticmethod
  def processMethodOrProperty(_class, method, *_args, **kwargs):
    suffix = kwargs.get("override_postfix") or ""
    if method.result_type.spelling == "void":
      return f"deprecated:{method.spelling}{suffix}\n"
    return f"modern:{method.spelling}{suffix}\n"


def test_libclang_exposes_the_deprecated_overload() -> None:
  _, methods = _fixture_methods()

  assert [method.availability for method in methods] == [
    clang.cindex.AvailabilityKind.AVAILABLE,
    clang.cindex.AvailabilityKind.DEPRECATED,
  ]


def test_modern_overload_is_the_shared_js_effective_survivor() -> None:
  _, methods = _fixture_methods()
  harness = _EmitterHarness()

  survivors = select_js_effective_overload_survivors(harness, methods)

  assert len(survivors) == 1
  assert survivors[0].result_type.spelling == "occ::handle<Sequence>"
  assert survivors[0].availability == clang.cindex.AvailabilityKind.AVAILABLE


def test_embind_and_typescript_emit_only_the_unsuffixed_modern_overload() -> None:
  connector, methods = _fixture_methods()
  harness = _EmitterHarness()

  cpp = EmbindBindings.processMethodGroup(harness, connector, methods)
  typescript = TypescriptBindings.processMethodGroup(harness, connector, methods)

  assert cpp == "modern:connect\n"
  assert typescript == "modern:connect\n"
  assert "deprecated" not in cpp + typescript
  assert "connect_" not in cpp + typescript
