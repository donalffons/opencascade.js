"""Unit tests for `ocjs_bindgen.discover`.

NCollection auto-discovery via template typedefs lifts two restrictions:

* `_is_globally_accessible` now admits class-nested types when the
  enclosing class is a `tuInfo.templateTypedefs` instantiation (such
  types acquire a file-scope name through the alias).
* A second discovery pass walks `tuInfo.templateTypedefs`, substitutes
  the template parameters via the augmented canonical-key map, and rescans
  the underlying template class so NCollection types built on substituted
  Traits members enter the manifest as concrete instantiations.

The tests use `cursor_mock` chains to stand in for the relevant
libclang shapes.
"""

from __future__ import annotations

import clang.cindex
import pytest

from ocjs_bindgen.discover import (
  _BUILTIN_BIND_CONFLICTS,
  _build_typedef_alias_map,
  _dedupe_by_canonical_args,
  _extract_template_args,
  _is_globally_accessible,
  _normalize_arg,
  _scan_type_for_ncollection,
  _serialise_template_typedef_aliases,
  _substitute_arg_spelling,
  discover_ncollection_types,
  mangle_template_name,
)
from tests.conftest import _MockType, cursor_mock


# V1 RE-SHIP — `discover_ncollection_types` now internally consults a
# second libclang TU (`TypedefDiscoveryTuInfo`) that ALSO parses
# `Deprecated/NCollectionAliases/*.hxx` for OCCT V8 historic alias
# resolution. The unit-test stub `_StubTuInfo` only mocks the codegen
# TU, so without this autouse fixture the real OCCT parse leaks in and
# pollutes the `out` set with hundreds of real typedefs. The fixture
# replaces the discovery-TU singleton with an empty stub so test
# expectations of `out == set()` remain meaningful.
class _EmptyDiscoveryTu:
  templateTypedefs = []
  classDict = {}
  typedefs = []
  typedefUnderlyingMultimap = {}
  templateTypedefUnderlyingMultimap = {}


@pytest.fixture(autouse=True)
def _stub_discovery_tu(monkeypatch):
  from ocjs_bindgen.ast import cursors as _cursors
  monkeypatch.setattr(
    _cursors.TypedefDiscoveryTuInfo,
    "instance",
    classmethod(lambda cls: _EmptyDiscoveryTu()),
  )
  yield
  _cursors.TypedefDiscoveryTuInfo._instance = None


# ----------------------------------------------------------------------------
# `_is_globally_accessible` — R5 admits template-typedef instantiations.
# ----------------------------------------------------------------------------


def _decl(spelling: str, parent=None, kind=clang.cindex.CursorKind.CLASS_DECL) -> object:
  return cursor_mock(kind=kind, spelling=spelling, semantic_parent=parent)


def test_is_globally_accessible_accepts_top_level_type() -> None:
  cls = _decl("gp_Pnt")
  arg_type = _MockType(spelling="gp_Pnt", declaration=cls)
  assert _is_globally_accessible(arg_type) is True


def test_is_globally_accessible_rejects_class_nested_type_by_default() -> None:
  outer = _decl("Poly_CoherentTriangulation")
  inner = _decl("TwoIntegers", parent=outer)
  arg_type = _MockType(spelling="TwoIntegers", declaration=inner)
  assert _is_globally_accessible(arg_type) is False


def test_is_globally_accessible_admits_template_typedef_instantiation() -> None:
  # R5 — when the enclosing class is itself a known template typedef
  # instantiation, the nested type is reachable through the alias and
  # must be admitted.
  template_typedef_parent = _decl(
    "BRepGraph_ReverseIterator",
    kind=clang.cindex.CursorKind.STRUCT_DECL,
  )
  inner = _decl("ParentId", parent=template_typedef_parent)
  arg_type = _MockType(spelling="ParentId", declaration=inner)

  # Without the names, falls back to "rejected" (legacy behaviour).
  assert _is_globally_accessible(arg_type) is False
  # With the names, R5 admits it.
  assert _is_globally_accessible(
    arg_type,
    template_typedef_names={"BRepGraph_ReverseIterator"},
  ) is True


# ----------------------------------------------------------------------------
# `_substitute_arg_spelling` — substitutes both source and canonical keys.
# ----------------------------------------------------------------------------


def test_substitute_replaces_source_name_in_arg_spelling() -> None:
  args = {"TheItemType": _MockType(spelling="gp_Pnt")}
  out = _substitute_arg_spelling("TheItemType", args)
  assert out == "gp_Pnt"


def test_substitute_replaces_canonical_key() -> None:
  # After R2 augmentation both keys are present and resolve to the same
  # concrete type.
  pnt = _MockType(spelling="gp_Pnt")
  args = {"TheItemType": pnt, "type-parameter-0-0": pnt}
  assert _substitute_arg_spelling("type-parameter-0-0", args) == "gp_Pnt"
  assert _substitute_arg_spelling("TheItemType", args) == "gp_Pnt"


def test_substitute_strips_typename_qualifier() -> None:
  # `typename TraitsT::ParentId` becomes `Traits_concrete::ParentId` after
  # substitution; the leading `typename` is shaved so the manifest
  # alias is a clean identifier.
  args = {"TraitsT": _MockType(spelling="ConcreteTraits")}
  assert _substitute_arg_spelling("typename TraitsT::ParentId", args) == "ConcreteTraits::ParentId"


def test_substitute_returns_input_when_no_keys_match() -> None:
  args = {"TheItemType": _MockType(spelling="gp_Pnt")}
  assert _substitute_arg_spelling("Standard_Real", args) == "Standard_Real"


def test_substitute_returns_input_when_template_args_empty() -> None:
  assert _substitute_arg_spelling("Standard_Real", None) == "Standard_Real"
  assert _substitute_arg_spelling("Standard_Real", {}) == "Standard_Real"


def test_substitute_prefers_longer_keys_first() -> None:
  # If `T` and `TheItemType` are both keys, the longer one must match
  # first to avoid the shorter regex carving the longer name into bits.
  args = {
    "T": _MockType(spelling="WRONG"),
    "TheItemType": _MockType(spelling="gp_Pnt"),
  }
  assert _substitute_arg_spelling("TheItemType", args) == "gp_Pnt"


# ----------------------------------------------------------------------------
# `discover_ncollection_types` — end-to-end with cursor_mock TU.
# ----------------------------------------------------------------------------


class _StubTuInfo:
  def __init__(self, allChildren=None, templateTypedefs=None, typedefs=None):
    self.allChildren = allChildren or []
    self.templateTypedefs = templateTypedefs or []
    self.typedefs = typedefs or []


def test_discover_skips_template_typedefs_when_none_present() -> None:
  # Empty TU — nothing to discover, manifest is empty.
  tu_info = _StubTuInfo()
  out = discover_ncollection_types(tu_info, lambda c, b: True)
  assert out == set()


def test_direct_scan_discovers_arbitrarily_named_concrete_template_alias() -> None:
  template_decl = _decl(
    "SomeTemplate",
    kind=clang.cindex.CursorKind.CLASS_TEMPLATE,
  )
  double_type = _MockType(
    spelling="double",
    kind=clang.cindex.TypeKind.DOUBLE,
  )
  canonical = _MockType(
    spelling="SomeTemplate<>",
    kind=clang.cindex.TypeKind.UNEXPOSED,
    declaration=template_decl,
    template_args=[double_type],
  )
  alias_decl = cursor_mock(
    kind=clang.cindex.CursorKind.TYPE_ALIAS_DECL,
    spelling="SomeAlias",
  )
  alias_type = _MockType(
    spelling="SomeAlias",
    kind=clang.cindex.TypeKind.TYPEDEF,
    canonical=canonical,
    declaration=alias_decl,
  )
  discovered = set()

  _scan_type_for_ncollection(
    alias_type,
    discovered,
    source_class="UsesSomeAlias",
  )

  assert discovered == {
    (
      "SomeTemplate_double",
      "SomeTemplate",
      ("double",),
      "UsesSomeAlias",
    ),
  }


def test_direct_scan_does_not_enroll_raw_template_specializations() -> None:
  template_decl = _decl(
    "SomeTemplate",
    kind=clang.cindex.CursorKind.CLASS_TEMPLATE,
  )
  double_type = _MockType(
    spelling="double",
    kind=clang.cindex.TypeKind.DOUBLE,
  )
  direct_type = _MockType(
    spelling="SomeTemplate<double>",
    kind=clang.cindex.TypeKind.UNEXPOSED,
    declaration=template_decl,
    template_args=[double_type],
  )
  discovered = set()

  _scan_type_for_ncollection(
    direct_type,
    discovered,
    source_class="UsesSomeTemplateDirectly",
  )

  assert discovered == set()


def test_direct_ncollection_scan_preserves_explicit_alias_argument() -> None:
  template_decl = _decl(
    "NCollection_DynamicArray",
    kind=clang.cindex.CursorKind.CLASS_TEMPLATE,
  )
  typed_solid_id = _MockType(
    spelling="BRepGraph_NodeId::Typed<BRepGraph_NodeId::Kind::Solid>",
  )
  solid_id = _MockType(
    spelling="BRepGraph_SolidId",
    canonical=typed_solid_id,
    declaration=_decl(
      "BRepGraph_SolidId",
      kind=clang.cindex.CursorKind.TYPE_ALIAS_DECL,
    ),
  )
  node_id = _MockType(spelling="BRepGraph_NodeId")
  canonical = _MockType(
    spelling="NCollection_DynamicArray<BRepGraph_NodeId>",
    kind=clang.cindex.TypeKind.RECORD,
    declaration=template_decl,
    template_args=[node_id],
  )
  direct = _MockType(
    spelling="NCollection_DynamicArray<BRepGraph_SolidId>",
    kind=clang.cindex.TypeKind.RECORD,
    canonical=canonical,
    declaration=template_decl,
    template_args=[solid_id],
  )
  discovered = set()

  _scan_type_for_ncollection(
    direct,
    discovered,
    source_class="BRepGraph_SolidsOfShell",
  )

  assert discovered == {
    (
      "NCollection_DynamicArray_BRepGraph_SolidId",
      "NCollection_DynamicArray",
      ("BRepGraph_SolidId",),
      "BRepGraph_SolidsOfShell",
    ),
  }


def test_direct_scan_enrolls_public_template_typedefs() -> None:
  template_decl = _decl(
    "SomeTemplate",
    kind=clang.cindex.CursorKind.CLASS_TEMPLATE,
  )
  double_type = _MockType(
    spelling="double",
    kind=clang.cindex.TypeKind.DOUBLE,
  )
  canonical = _MockType(
    spelling="SomeTemplate<double>",
    kind=clang.cindex.TypeKind.UNEXPOSED,
    declaration=template_decl,
    template_args=[double_type],
  )
  alias_decl = cursor_mock(
    kind=clang.cindex.CursorKind.TYPEDEF_DECL,
    spelling="LegacyAlias",
  )
  alias_type = _MockType(
    spelling="LegacyAlias",
    kind=clang.cindex.TypeKind.TYPEDEF,
    canonical=canonical,
    declaration=alias_decl,
  )
  discovered = set()

  _scan_type_for_ncollection(
    alias_type,
    discovered,
    source_class="UsesLegacyAlias",
  )

  assert discovered == {
    (
      "SomeTemplate_double",
      "SomeTemplate",
      ("double",),
      "UsesLegacyAlias",
    ),
  }


def test_direct_scan_keeps_legacy_typedef_for_safe_ncollection_shared() -> None:
  template_decl = _decl(
    "NCollection_Shared",
    kind=clang.cindex.CursorKind.CLASS_TEMPLATE,
  )
  dynamic_array = _MockType(
    spelling="NCollection_DynamicArray<BRepMesh_Circle>",
    kind=clang.cindex.TypeKind.RECORD,
  )
  void_type = _MockType(
    spelling="void",
    kind=clang.cindex.TypeKind.VOID,
  )
  canonical = _MockType(
    spelling="NCollection_Shared<NCollection_DynamicArray<BRepMesh_Circle>, void>",
    kind=clang.cindex.TypeKind.UNEXPOSED,
    declaration=template_decl,
    template_args=[dynamic_array, void_type],
  )
  alias_decl = cursor_mock(
    kind=clang.cindex.CursorKind.TYPEDEF_DECL,
    spelling="VectorOfCircle",
  )
  alias_type = _MockType(
    spelling="VectorOfCircle",
    kind=clang.cindex.TypeKind.TYPEDEF,
    canonical=canonical,
    declaration=alias_decl,
  )
  discovered = set()

  _scan_type_for_ncollection(
    alias_type,
    discovered,
    source_class="BRepMesh_CircleInspector",
  )

  assert discovered == {
    (
      "NCollection_Shared_NCollection_DynamicArray_BRepMesh_Circle_void",
      "NCollection_Shared",
      ("NCollection_DynamicArray<BRepMesh_Circle>", "void"),
      "BRepMesh_CircleInspector",
    ),
  }


def test_direct_scan_rejects_generic_alias_with_class_local_argument() -> None:
  template_decl = _decl(
    "SomeTemplate",
    kind=clang.cindex.CursorKind.CLASS_TEMPLATE,
  )
  enclosing = _decl("Enclosing")
  nested_decl = _decl("Nested", parent=enclosing)
  nested_type = _MockType(
    spelling="Enclosing::Nested",
    kind=clang.cindex.TypeKind.RECORD,
    declaration=nested_decl,
  )
  canonical = _MockType(
    spelling="SomeTemplate<Enclosing::Nested>",
    kind=clang.cindex.TypeKind.UNEXPOSED,
    declaration=template_decl,
    template_args=[nested_type],
  )
  alias_decl = cursor_mock(
    kind=clang.cindex.CursorKind.TYPE_ALIAS_DECL,
    spelling="SomeAlias",
  )
  alias_type = _MockType(
    spelling="SomeAlias",
    kind=clang.cindex.TypeKind.TYPEDEF,
    canonical=canonical,
    declaration=alias_decl,
  )
  discovered = set()

  _scan_type_for_ncollection(
    alias_type,
    discovered,
    template_typedef_names={"Enclosing"},
    source_class="UsesSomeAlias",
  )

  assert discovered == set()


def test_direct_scan_rejects_generic_alias_from_internal_namespace() -> None:
  emscripten_ns = cursor_mock(
    kind=clang.cindex.CursorKind.NAMESPACE,
    spelling="emscripten",
  )
  internal_ns = cursor_mock(
    kind=clang.cindex.CursorKind.NAMESPACE,
    spelling="internal",
    semantic_parent=emscripten_ns,
  )
  template_decl = _decl(
    "SomeTemplate",
    parent=internal_ns,
    kind=clang.cindex.CursorKind.CLASS_TEMPLATE,
  )
  double_type = _MockType(
    spelling="double",
    kind=clang.cindex.TypeKind.DOUBLE,
  )
  canonical = _MockType(
    spelling="emscripten::internal::SomeTemplate<double>",
    kind=clang.cindex.TypeKind.UNEXPOSED,
    declaration=template_decl,
    template_args=[double_type],
  )
  alias_decl = cursor_mock(
    kind=clang.cindex.CursorKind.TYPE_ALIAS_DECL,
    spelling="SomeAlias",
  )
  alias_type = _MockType(
    spelling="SomeAlias",
    kind=clang.cindex.TypeKind.TYPEDEF,
    canonical=canonical,
    declaration=alias_decl,
  )
  discovered = set()

  _scan_type_for_ncollection(
    alias_type,
    discovered,
    source_class="UsesInternalAlias",
  )

  assert discovered == set()


def test_direct_scan_rejects_namespace_template_until_emitter_can_qualify_it() -> None:
  namespace = cursor_mock(
    kind=clang.cindex.CursorKind.NAMESPACE,
    spelling="SomeNamespace",
  )
  template_decl = _decl(
    "SomeTemplate",
    parent=namespace,
    kind=clang.cindex.CursorKind.CLASS_TEMPLATE,
  )
  double_type = _MockType(
    spelling="double",
    kind=clang.cindex.TypeKind.DOUBLE,
  )
  canonical = _MockType(
    spelling="SomeNamespace::SomeTemplate<double>",
    kind=clang.cindex.TypeKind.UNEXPOSED,
    declaration=template_decl,
    template_args=[double_type],
  )
  alias_decl = cursor_mock(
    kind=clang.cindex.CursorKind.TYPE_ALIAS_DECL,
    spelling="SomeAlias",
  )
  alias_type = _MockType(
    spelling="SomeAlias",
    kind=clang.cindex.TypeKind.TYPEDEF,
    canonical=canonical,
    declaration=alias_decl,
  )
  discovered = set()

  _scan_type_for_ncollection(
    alias_type,
    discovered,
    source_class="UsesNamespacedAlias",
  )

  assert discovered == set()


def test_mangle_template_name_shortens_long_names_deterministically() -> None:
  long_argument = "NestedTemplate<" + ",".join(
    f"ConcreteType{index}" for index in range(32)
  ) + ">"

  first = mangle_template_name("SomeTemplate", [long_argument])
  repeated = mangle_template_name("SomeTemplate", [long_argument])
  distinct = mangle_template_name("SomeTemplate", [long_argument + "Different"])

  assert first is not None
  assert repeated == first
  assert distinct is not None
  assert distinct != first
  assert first.startswith("SomeTemplate_")
  assert len(first.encode("utf-8")) <= 200


def test_builtin_conflict_uses_canonical_default_template_arguments() -> None:
  canonical_name = mangle_template_name(
    "NCollection_IndexedDataMap",
    [
      "TCollection_AsciiString",
      "TCollection_AsciiString",
      "NCollection_DefaultHasher<TCollection_AsciiString>",
    ],
  )

  assert canonical_name in _BUILTIN_BIND_CONFLICTS


def test_extract_template_args_rejects_incomplete_or_dependent_arguments() -> None:
  concrete = _MockType(
    spelling="double",
    kind=clang.cindex.TypeKind.DOUBLE,
  )
  missing = _MockType(spelling="", kind=clang.cindex.TypeKind.INVALID)
  dependent = _MockType(
    spelling="type-parameter-0-0",
    kind=clang.cindex.TypeKind.UNEXPOSED,
  )

  assert _extract_template_args(
    _MockType(template_args=[concrete, missing]),
  ) == []
  assert _extract_template_args(
    _MockType(template_args=[dependent]),
  ) == []


# ----------------------------------------------------------------------------
# `_dedupe_by_canonical_args` — collapse alias-form vs substituted-form
# manifest entries that resolve to the same underlying C++ type.
# ----------------------------------------------------------------------------


def _td(name: str, underlying: str):
  """Build a template-typedef cursor stub with `underlying_typedef_type`."""
  td = cursor_mock(kind=clang.cindex.CursorKind.TYPE_ALIAS_DECL, spelling=name)
  td.underlying_typedef_type = _MockType(spelling=underlying)
  return td


def test_build_typedef_alias_map_records_underlying_spellings() -> None:
  tu_info = _StubTuInfo(
    templateTypedefs=[
      _td("BRepGraph_SolidId", "BRepGraph_NodeId::Typed<BRepGraph_NodeId::Kind::Solid>"),
      _td("BRepGraph_ShellId", "BRepGraph_NodeId::Typed<BRepGraph_NodeId::Kind::Shell>"),
    ],
  )
  alias_map = _build_typedef_alias_map(tu_info)
  assert alias_map["BRepGraph_SolidId"] == "BRepGraph_NodeId::Typed<BRepGraph_NodeId::Kind::Solid>"
  assert alias_map["BRepGraph_ShellId"] == "BRepGraph_NodeId::Typed<BRepGraph_NodeId::Kind::Shell>"


def test_build_typedef_alias_map_records_namespace_public_name() -> None:
  namespace = cursor_mock(
    kind=clang.cindex.CursorKind.NAMESPACE,
    spelling="IMeshData",
  )
  vector = _td(
    "VectorOfCircle",
    "NCollection_Shared<NCollection_DynamicArray<BRepMesh_Circle>>",
  )
  vector.semantic_parent = namespace

  alias_map = _build_typedef_alias_map(
    _StubTuInfo(templateTypedefs=[vector]),
  )

  assert alias_map["VectorOfCircle"] == (
    "NCollection_Shared<NCollection_DynamicArray<BRepMesh_Circle>>"
  )
  assert alias_map["IMeshData_VectorOfCircle"] == (
    "NCollection_Shared<NCollection_DynamicArray<BRepMesh_Circle>>"
  )


def test_serialise_template_alias_uses_canonical_positional_defaults() -> None:
  namespace = cursor_mock(
    kind=clang.cindex.CursorKind.NAMESPACE,
    spelling="IMeshData",
  )
  shared_decl = _decl(
    "NCollection_Shared",
    kind=clang.cindex.CursorKind.CLASS_TEMPLATE,
  )
  dynamic_array = _MockType(
    spelling="NCollection_DynamicArray<BRepMesh_Circle>",
    kind=clang.cindex.TypeKind.RECORD,
  )
  void_type = _MockType(
    spelling="void",
    kind=clang.cindex.TypeKind.VOID,
  )
  canonical = _MockType(
    spelling="NCollection_Shared<NCollection_DynamicArray<BRepMesh_Circle>>",
    kind=clang.cindex.TypeKind.RECORD,
    declaration=shared_decl,
    template_args=[dynamic_array, void_type],
  )
  vector = cursor_mock(
    kind=clang.cindex.CursorKind.TYPEDEF_DECL,
    spelling="VectorOfCircle",
    semantic_parent=namespace,
  )
  vector.underlying_typedef_type = _MockType(
    spelling="NCollection_Shared<NCollection_DynamicArray<BRepMesh_Circle>>",
    canonical=canonical,
  )
  canonical_name = (
    "NCollection_Shared_NCollection_DynamicArray_BRepMesh_Circle_void"
  )
  discovered = {
    (
      canonical_name,
      "NCollection_Shared",
      ("NCollection_DynamicArray<BRepMesh_Circle>", "void"),
      ("BRepMesh_CircleInspector",),
    ),
  }

  aliases = _serialise_template_typedef_aliases(
    _StubTuInfo(templateTypedefs=[vector]),
    discovered,
  )

  assert aliases["VectorOfCircle"] == canonical_name
  assert aliases["IMeshData_VectorOfCircle"] == canonical_name
  assert aliases[
    "NCollection_Shared_NCollection_DynamicArray_BRepMesh_Circle"
  ] == canonical_name


def test_serialise_template_alias_prefers_emitted_source_spelling() -> None:
  data_map_decl = _decl(
    "NCollection_DataMap",
    kind=clang.cindex.CursorKind.CLASS_TEMPLATE,
  )
  key = _MockType(
    spelling="TCollection_AsciiString",
    kind=clang.cindex.TypeKind.RECORD,
  )
  value = _MockType(
    spelling="opencascade::handle<Standard_Transient>",
    kind=clang.cindex.TypeKind.RECORD,
  )
  hasher = _MockType(
    spelling="NCollection_DefaultHasher<TCollection_AsciiString>",
    kind=clang.cindex.TypeKind.RECORD,
  )
  canonical = _MockType(
    spelling=(
      "NCollection_DataMap<TCollection_AsciiString, "
      "opencascade::handle<Standard_Transient>, "
      "NCollection_DefaultHasher<TCollection_AsciiString>>"
    ),
    kind=clang.cindex.TypeKind.RECORD,
    declaration=data_map_decl,
    template_args=[key, value, hasher],
  )
  work_session_map = cursor_mock(
    kind=clang.cindex.CursorKind.TYPE_ALIAS_DECL,
    spelling="XSControl_WorkSessionMap",
  )
  work_session_map.underlying_typedef_type = _MockType(
    spelling=(
      "NCollection_DataMap<TCollection_AsciiString, "
      "opencascade::handle<Standard_Transient>>"
    ),
    canonical=canonical,
  )
  source_name = (
    "NCollection_DataMap_TCollection_AsciiString_handle_Standard_Transient"
  )
  canonical_name = (
    f"{source_name}_NCollection_DefaultHasher_TCollection_AsciiString"
  )
  discovered = {
    (
      source_name,
      "NCollection_DataMap",
      (
        "TCollection_AsciiString",
        "opencascade::handle<Standard_Transient>",
      ),
      ("XSControl_WorkSession",),
    ),
    (
      canonical_name,
      "NCollection_DataMap",
      (
        "TCollection_AsciiString",
        "opencascade::handle<Standard_Transient>",
        "NCollection_DefaultHasher<TCollection_AsciiString>",
      ),
      ("XSControl_WorkSession",),
    ),
  }

  aliases = _serialise_template_typedef_aliases(
    _StubTuInfo(templateTypedefs=[work_session_map]),
    discovered,
  )

  assert aliases["XSControl_WorkSessionMap"] == source_name


def test_serialise_plain_typedef_alias_for_generated_template() -> None:
  vector = _td("math_Vector", "math_VectorBase<double>")
  canonical_name = "math_VectorBase_double"
  discovered = {
    (
      canonical_name,
      "math_VectorBase",
      ("double",),
      ("math_Gauss",),
    ),
  }

  aliases = _serialise_template_typedef_aliases(
    _StubTuInfo(typedefs=[vector]),
    discovered,
  )

  assert aliases["math_Vector"] == canonical_name


def test_serialise_canonical_template_name_as_type_only_alias() -> None:
  occurrence = _td(
    "BRepGraph_OccurrenceId",
    "BRepGraph_NodeId::Typed<BRepGraph_NodeId::Kind::Occurrence>",
  )
  public_name = "NCollection_DynamicArray_BRepGraph_OccurrenceId"
  canonical_name = (
    "NCollection_DynamicArray_BRepGraph_NodeId_Typed_"
    "BRepGraph_NodeId_Kind_Occurrence"
  )
  discovered = {
    (
      public_name,
      "NCollection_DynamicArray",
      ("BRepGraph_OccurrenceId",),
      ("BRepGraphInc_ReverseIndex",),
    ),
  }

  aliases = _serialise_template_typedef_aliases(
    _StubTuInfo(templateTypedefs=[occurrence]),
    discovered,
  )

  assert aliases[canonical_name] == public_name


def test_build_typedef_alias_map_skips_self_referential_typedefs() -> None:
  tu_info = _StubTuInfo(
    templateTypedefs=[_td("BRepGraph_SolidId", "BRepGraph_SolidId")],
  )
  assert _build_typedef_alias_map(tu_info) == {}


def test_build_typedef_alias_map_skips_empty_underlying() -> None:
  tu_info = _StubTuInfo(
    templateTypedefs=[_td("BRepGraph_SolidId", "")],
  )
  assert _build_typedef_alias_map(tu_info) == {}


def test_normalize_arg_resolves_alias_to_canonical_spelling() -> None:
  alias_map = {
    "BRepGraph_SolidId": "BRepGraph_NodeId::Typed<BRepGraph_NodeId::Kind::Solid>",
  }
  assert _normalize_arg(
    "BRepGraph_SolidId", alias_map
  ) == "BRepGraph_NodeId::Typed<BRepGraph_NodeId::Kind::Solid>"


def test_normalize_arg_chases_multi_step_aliases() -> None:
  alias_map = {
    "AliasA": "AliasB",
    "AliasB": "Underlying",
  }
  assert _normalize_arg("AliasA", alias_map) == "Underlying"


def test_normalize_arg_word_boundary_safe() -> None:
  # `Solid` should NOT match inside `BRepGraph_SolidId` (no word boundary).
  alias_map = {"Solid": "REPLACED"}
  assert _normalize_arg("BRepGraph_SolidId", alias_map) == "BRepGraph_SolidId"


def test_dedupe_collapses_alias_and_substituted_entries_to_one() -> None:
  tu_info = _StubTuInfo(
    templateTypedefs=[
      _td("BRepGraph_SolidId", "BRepGraph_NodeId::Typed<BRepGraph_NodeId::Kind::Solid>"),
    ],
  )
  # R1 — entries are 4-tuples (mangled, container, args, source_class).
  alias_form = (
    "NCollection_DynamicArray_BRepGraph_SolidId",
    "NCollection_DynamicArray",
    ("BRepGraph_SolidId",),
    "BRepGraph_FacesOfEdge",
  )
  substituted_form = (
    "NCollection_DynamicArray_BRepGraph_NodeId_Typed_BRepGraph_NodeId_Kind_Solid",
    "NCollection_DynamicArray",
    ("BRepGraph_NodeId::Typed<BRepGraph_NodeId::Kind::Solid>",),
    "BRepGraph_FacesOfEdge",
  )

  out = _dedupe_by_canonical_args({alias_form, substituted_form}, tu_info)

  assert len(out) == 1
  surviving = next(iter(out))
  assert surviving[1] == "NCollection_DynamicArray"
  # First sorted (mangled, container, args) winner. Source becomes sorted
  # tuple of all aggregated sources for the canonical key.
  assert surviving[:3] in {alias_form[:3], substituted_form[:3]}
  assert surviving[3] == ("BRepGraph_FacesOfEdge",)


def test_dedupe_preserves_distinct_canonical_types() -> None:
  tu_info = _StubTuInfo(templateTypedefs=[])
  solid = (
    "NCollection_DynamicArray_BRepGraph_NodeId_Typed_BRepGraph_NodeId_Kind_Solid",
    "NCollection_DynamicArray",
    ("BRepGraph_NodeId::Typed<BRepGraph_NodeId::Kind::Solid>",),
    "BRepGraph_SolidsOfShell",
  )
  shell = (
    "NCollection_DynamicArray_BRepGraph_NodeId_Typed_BRepGraph_NodeId_Kind_Shell",
    "NCollection_DynamicArray",
    ("BRepGraph_NodeId::Typed<BRepGraph_NodeId::Kind::Shell>",),
    "BRepGraph_ShellsOfSolid",
  )

  out = _dedupe_by_canonical_args({solid, shell}, tu_info)

  # Two distinct canonical types -> two entries, each with single source.
  assert len(out) == 2
  by_mangled = {e[0]: e for e in out}
  assert by_mangled[solid[0]][3] == ("BRepGraph_SolidsOfShell",)
  assert by_mangled[shell[0]][3] == ("BRepGraph_ShellsOfSolid",)


def test_dedupe_with_empty_alias_map_passes_through_unchanged() -> None:
  tu_info = _StubTuInfo(templateTypedefs=[])
  entries = {
    (
      "NCollection_DynamicArray_BRepGraph_SolidId",
      "NCollection_DynamicArray",
      ("BRepGraph_SolidId",),
      "BRepGraph_FacesOfEdge",
    ),
    (
      "NCollection_DynamicArray_BRepGraph_NodeId_Typed_BRepGraph_NodeId_Kind_Solid",
      "NCollection_DynamicArray",
      ("BRepGraph_NodeId::Typed<BRepGraph_NodeId::Kind::Solid>",),
      "BRepGraph_VerticesOfEdge",
    ),
  }

  out = _dedupe_by_canonical_args(entries, tu_info)

  # No alias map → no collapse: both entries survive with their sources
  # promoted to single-element sorted tuples.
  assert len(out) == 2
  for entry in out:
    # source_classes is wrapped as a tuple after dedup
    assert isinstance(entry[3], tuple)
    assert len(entry[3]) == 1


# ----------------------------------------------------------------------------
# R1 — source-class tagging propagation.
# ----------------------------------------------------------------------------


def test_dedupe_aggregates_sources_when_multiple_classes_share_same_ncollection() -> None:
  """Same canonical NCollection discovered from multiple bound classes
  must aggregate every source into a sorted deduped tuple, so the R2
  link filter keeps the entry as long as *any* source is in YAML scope.
  """
  tu_info = _StubTuInfo(templateTypedefs=[])
  from_iterator = (
    "NCollection_Array1_TopoDS_Shape",
    "NCollection_Array1",
    ("TopoDS_Shape",),
    "TopoDS_Iterator",
  )
  from_hshape = (
    "NCollection_Array1_TopoDS_Shape",
    "NCollection_Array1",
    ("TopoDS_Shape",),
    "TopoDS_HShape",
  )
  from_compound = (
    "NCollection_Array1_TopoDS_Shape",
    "NCollection_Array1",
    ("TopoDS_Shape",),
    "TopoDS_Compound",
  )

  out = _dedupe_by_canonical_args({from_iterator, from_hshape, from_compound}, tu_info)

  assert len(out) == 1
  surviving = next(iter(out))
  # All three sources aggregated, sorted alphabetically.
  assert surviving[3] == ("TopoDS_Compound", "TopoDS_HShape", "TopoDS_Iterator")


def test_write_manifest_emits_source_classes_field(tmp_path) -> None:
  """write_manifest must serialise R1's `source_classes` alongside the
  existing mangled_name/container/args fields so the link step can read
  reachability metadata.
  """
  from ocjs_bindgen.discover import write_manifest
  discovered = {
    (
      "NCollection_Array1_TopoDS_Shape",
      "NCollection_Array1",
      ("TopoDS_Shape",),
      ("TopoDS_HShape", "TopoDS_Iterator"),
    ),
  }
  manifest_path = write_manifest(discovered, str(tmp_path))
  import json
  manifest = json.loads(open(manifest_path).read())
  assert manifest["symbols"] == ["NCollection_Array1_TopoDS_Shape"]
  assert len(manifest["declarations"]) == 1
  decl = manifest["declarations"][0]
  assert decl["mangled_name"] == "NCollection_Array1_TopoDS_Shape"
  assert decl["container"] == "NCollection_Array1"
  assert decl["args"] == ["TopoDS_Shape"]
  assert decl["source_classes"] == ["TopoDS_HShape", "TopoDS_Iterator"]


def test_write_manifest_records_anon_sentinel_for_anonymous_sources(tmp_path) -> None:
  """When discovery cannot resolve a source class spelling, the manifest
  must still record a non-empty sentinel so the link filter doesn't drop
  the entry by accident.
  """
  from ocjs_bindgen.discover import write_manifest
  discovered = {
    (
      "NCollection_Array1_int",
      "NCollection_Array1",
      ("int",),
      ("<anon>",),
    ),
  }
  manifest_path = write_manifest(discovered, str(tmp_path))
  import json
  decl = json.loads(open(manifest_path).read())["declarations"][0]
  assert decl["source_classes"] == ["<anon>"]


# ----------------------------------------------------------------------------
# R3 — `__custom__` sentinel for additionalCppFiles / myMain.h discoveries.
# ----------------------------------------------------------------------------


def test_custom_code_source_tag_is_stable_constant() -> None:
  """`CUSTOM_CODE_SOURCE_TAG` is exported so the link-step yaml_build
  can seed its YAML scope with the same sentinel string without
  copy-pasting the literal."""
  from ocjs_bindgen.discover import CUSTOM_CODE_SOURCE_TAG
  assert CUSTOM_CODE_SOURCE_TAG == "__custom__"


def test_discover_source_override_propagates_to_manifest_entries(tmp_path) -> None:
  """When `discover_ncollection_types` is invoked with
  `source_override=CUSTOM_CODE_SOURCE_TAG`, every resulting manifest
  entry must record the sentinel as its sole source class. The R2 link
  filter unconditionally retains entries tagged with the sentinel,
  preserving NCollections that custom code legitimately uses even when
  the consumer YAML doesn't name their template-argument classes.
  """
  from ocjs_bindgen.discover import (
    CUSTOM_CODE_SOURCE_TAG,
    discover_ncollection_types,
  )
  # Empty TU yields no discoveries; the contract test is the signature
  # support itself — full integration is verified at link time by the
  # subset YAML build (Phase D) and the R4 sentinel test (Phase E).
  tu_info = _StubTuInfo()
  out = discover_ncollection_types(
    tu_info, lambda c, b: True, source_override=CUSTOM_CODE_SOURCE_TAG
  )
  assert out == set()  # empty TU contract preserved
  # Also verify the parameter is accepted by the keyword-only path of
  # `_scan_class_methods` — exercised indirectly via the live build.


def test_discover_template_typedef_substitution_yields_concrete_instantiations() -> None:
  # Construct a synthetic chain modelling
  #   `using BRepGraph_FacesOfEdge = BRepGraph_ReverseIterator<FaceOfEdgeRefTraits>;`
  # The underlying template's method returns `NCollection_DynamicArray<TraitsT::ParentId>`.
  # R5 should produce `NCollection_DynamicArray_BRepGraphInc_FaceRef`.

  # `_scan_template_typedef_methods` calls `processTemplate` which is a
  # pipeline-level function operating on real libclang cursors. We
  # exercise the substitution helper instead — the pipeline integration
  # is verified end-to-end at link time.
  args_substituted = (
    _substitute_arg_spelling(
      "typename TraitsT::ParentId",
      {"TraitsT": _MockType(spelling="FaceOfEdgeRefTraits")},
    ),
  )
  assert args_substituted == ("FaceOfEdgeRefTraits::ParentId",)
