"""Unit tests for `ocjs_bindgen.ast.template_args.augment_template_args_with_canonical`.

Augments the substitution map produced by `processTemplate` with synthetic
`type-parameter-N-M` keys so inherited-method resolution can substitute
either the source-name spelling (`TheItemType`, `TheKeyType`, `Hasher`)
or libclang's canonical synthetic spelling. This was the largest class of
`unknown` collapses in NCollection accessors. Tests cover every shape that
shows up in OCCT V8 templates:

* Simple single-parameter templates
* Multi-parameter templates with mixed type/non-type parameters
* Idempotency (running twice must not double-add keys)
* Pre-existing canonical keys (must not be overwritten)
* Empty / None inputs (must short-circuit)
"""

from __future__ import annotations

import clang.cindex

from ocjs_bindgen.ast import augment_template_args_with_canonical, qualify_nested_type
from ocjs_bindgen.ast.template_args import TemplateArgMap
from tests.conftest import _MockType, cursor_mock


def _type_param(spelling: str) -> object:
  return cursor_mock(
    kind=clang.cindex.CursorKind.TEMPLATE_TYPE_PARAMETER,
    spelling=spelling,
  )


def _non_type_param(spelling: str) -> object:
  return cursor_mock(
    kind=clang.cindex.CursorKind.TEMPLATE_NON_TYPE_PARAMETER,
    spelling=spelling,
  )


def _template_class(*params) -> object:
  return cursor_mock(
    kind=clang.cindex.CursorKind.CLASS_TEMPLATE,
    spelling="TestTemplate",
    children=list(params),
  )


def test_augment_adds_canonical_keys_for_each_ordinal() -> None:
  # Mirrors NCollection_DataMap<TheKeyType, TheItemType, Hasher>:
  # libclang reports inherited base methods with `type-parameter-0-N`
  # spellings; R2 gives those keys the same substitution value as the
  # source-name keys.
  template_class = _template_class(
    _type_param("TheKeyType"),
    _type_param("TheItemType"),
    _type_param("Hasher"),
  )
  key_type = _MockType(spelling="gp_Pnt")
  item_type = _MockType(spelling="gp_Vec")
  hasher_type = _MockType(spelling="TColStd_MapHasher")
  args = {
    "TheKeyType": key_type,
    "TheItemType": item_type,
    "Hasher": hasher_type,
  }

  augmented = augment_template_args_with_canonical(args, template_class)

  assert augmented["type-parameter-0-0"] is key_type
  assert augmented["type-parameter-0-1"] is item_type
  assert augmented["type-parameter-0-2"] is hasher_type
  # Source-name keys are preserved.
  assert augmented["TheKeyType"] is key_type
  assert augmented["TheItemType"] is item_type
  assert augmented["Hasher"] is hasher_type


def test_augment_preserves_existing_canonical_keys() -> None:
  # If the caller already populated a canonical key (e.g. via
  # `processMethodGroup` constructing its own substitution map), R2 must
  # NOT overwrite it. This guards against double-augmentation surprises
  # where an outer caller has populated the canonical key with a
  # *different* type than what the source-name slot carries.
  template_class = _template_class(_type_param("T"))
  outer_value = _MockType(spelling="OuterValue")
  inner_value = _MockType(spelling="InnerValue")
  args = {
    "T": inner_value,
    "type-parameter-0-0": outer_value,
  }

  augmented = augment_template_args_with_canonical(args, template_class)

  # The pre-populated canonical key wins.
  assert augmented["type-parameter-0-0"] is outer_value
  assert augmented["T"] is inner_value


def test_augment_idempotent() -> None:
  # Running the augmentation twice MUST produce the same dict — once a
  # canonical key is present the second pass is a no-op.
  template_class = _template_class(
    _type_param("TheItemType"),
    _type_param("Hasher"),
  )
  args = {
    "TheItemType": _MockType(spelling="gp_Pnt"),
    "Hasher": _MockType(spelling="TColStd_MapHasher"),
  }

  once = augment_template_args_with_canonical(args, template_class)
  twice = augment_template_args_with_canonical(once, template_class)
  assert dict(once) == dict(twice)


def test_augment_does_not_mutate_input() -> None:
  template_class = _template_class(_type_param("T"))
  args = {"T": _MockType(spelling="gp_Pnt")}

  augment_template_args_with_canonical(args, template_class)

  # Original dict was not modified.
  assert "type-parameter-0-0" not in args
  assert list(args.keys()) == ["T"]


def test_augment_short_circuits_for_empty_args() -> None:
  template_class = _template_class(_type_param("T"))
  assert augment_template_args_with_canonical({}, template_class) == {}
  assert augment_template_args_with_canonical(None, template_class) is None


def test_augment_short_circuits_for_none_template_class() -> None:
  args = {"T": _MockType(spelling="gp_Pnt")}
  assert augment_template_args_with_canonical(args, None) is args


def test_augment_skips_canonical_for_missing_source_name() -> None:
  # If the source name isn't in the substitution map (defensively
  # malformed input — `processTemplate` should never produce this), the
  # canonical key for that ordinal is left absent so downstream
  # resolvers fall through to their existing `unknown` sink rather than
  # silently substituting a wrong value.
  template_class = _template_class(
    _type_param("Present"),
    _type_param("Missing"),
  )
  present_value = _MockType(spelling="gp_Pnt")
  args = {"Present": present_value}

  augmented = augment_template_args_with_canonical(args, template_class)

  assert augmented["type-parameter-0-0"] is present_value
  assert "type-parameter-0-1" not in augmented


def test_augment_handles_non_type_template_parameter() -> None:
  # OCCT V8's typed-id pattern: `BRepGraph_NodeId::Typed<TheKind>` where
  # `TheKind` is an enum value (TEMPLATE_NON_TYPE_PARAMETER). The
  # canonical key still maps to the source-name slot.
  template_class = _template_class(
    _type_param("TheItemType"),
    _non_type_param("TheKind"),
  )
  item_value = _MockType(spelling="BRepGraphInc_FaceDef")
  kind_value = _MockType(spelling="Kind::Face")
  args = {"TheItemType": item_value, "TheKind": kind_value}

  augmented = augment_template_args_with_canonical(args, template_class)

  assert augmented["type-parameter-0-0"] is item_value
  assert augmented["type-parameter-0-1"] is kind_value


def test_augment_preserves_template_arg_map_wrapper_shape() -> None:
  # Callers that have wrapped their dict in TemplateArgMap should still
  # see a usable plain dict back (the wrapper's adopt() path is the
  # documented unwrap; matching that here keeps the API predictable).
  template_class = _template_class(_type_param("T"))
  wrapped = TemplateArgMap({"T": _MockType(spelling="gp_Pnt")})

  augmented = augment_template_args_with_canonical(wrapped, template_class)

  assert augmented["type-parameter-0-0"].spelling == "gp_Pnt"
  assert augmented["T"].spelling == "gp_Pnt"


def test_augment_canonical_key_substitutes_concrete_type() -> None:
  # End-to-end check: feed the augmented map through
  # `substitute_canonical_template_names` and verify the canonical
  # spelling is rewritten correctly.
  from ocjs_bindgen.ast.template_args import substitute_canonical_template_names

  template_class = _template_class(_type_param("TheItemType"))
  args = {"TheItemType": _MockType(spelling="gp_Pnt")}
  augmented = augment_template_args_with_canonical(args, template_class)

  out = substitute_canonical_template_names("type-parameter-0-0", augmented)
  assert out == "gp_Pnt"


def test_augment_maps_forward_and_definition_parameter_names_by_ordinal() -> None:
  definition = _template_class(_type_param("TheItemType"))
  forward = _template_class(_type_param("T"))
  definition.canonical = forward
  concrete = _MockType(spelling="double")

  augmented = augment_template_args_with_canonical(
    {"TheItemType": concrete},
    definition,
  )

  assert augmented["TheItemType"] is concrete
  assert augmented["type-parameter-0-0"] is concrete
  assert augmented["T"] is concrete


def test_qualify_nested_type_walks_the_full_parent_chain() -> None:
  namespace = cursor_mock(kind=clang.cindex.CursorKind.NAMESPACE, spelling="BRepGraph")
  outer = cursor_mock(
    kind=clang.cindex.CursorKind.CLASS_DECL,
    spelling="LayerDeferred",
    parent=namespace,
  )
  entry = cursor_mock(
    kind=clang.cindex.CursorKind.STRUCT_DECL,
    spelling="Entry",
    parent=outer,
  )
  storage = cursor_mock(
    kind=clang.cindex.CursorKind.CLASS_DECL,
    spelling="RepresentationStorage",
    parent=entry,
  )
  storage_type = _MockType(
    spelling="Entry::RepresentationStorage",
    kind=clang.cindex.TypeKind.RECORD,
    declaration=storage,
  )

  assert qualify_nested_type("const Entry::RepresentationStorage &", storage_type) == (
    "const BRepGraph::LayerDeferred::Entry::RepresentationStorage &"
  )
