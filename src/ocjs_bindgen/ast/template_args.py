"""``TemplateArgMap`` and template-argument substitution helpers.

Phase 1 PR 1.7 of the OCJS Bindgen Modular Refactor extracted the four
template-argument substitution helpers from ``Bindings`` so canonical-key
augmentation can land in one file:

* :func:`replace_template_args` — substitutes named template parameters
  (``T`` → ``gp_Pnt``) using regex word-boundary matching. Mirrors the
  legacy ``Bindings.replaceTemplateArgs``.
* :func:`substitute_canonical_template_names` — rewrites libclang's
  ``type-parameter-N-M`` synthetic names AND the source parameter
  spellings produced by libclang 18+ (e.g. ``TheItemType``). Mirrors the
  legacy ``Bindings._substitute_canonical_template_names``.
* :func:`qualify_nested_type` — recursively prepends the parent class
  scope to nested-type spellings used in ``EMSCRIPTEN_BINDINGS`` blocks.
  Mirrors the legacy ``Bindings._qualify_nested_type``.
* :func:`get_typedefed_template_type_as_string` — looks up a template
  instantiation in the binder's typedef tables and returns the alias
  spelling when present. Mirrors the legacy
  ``Bindings.getTypedefedTemplateTypeAsString``.

:class:`TemplateArgMap` documents the expected shape of the
``templateArgs`` parameter passed through every resolver/codegen call
(``dict[str, clang.cindex.Type | NonTypeTemplateArg]``). The canonical-
key augmenter (:func:`augment_template_args_with_canonical`) is the slot
that adds the ``type-parameter-N-M`` keys; the wrapper is duck-typed
against the legacy plain-dict so binder methods keep passing the old
dict shape unchanged. Behaviour preserved bit-for-bit.
"""

from __future__ import annotations

import re
from collections.abc import Iterable, Mapping
from typing import Any

import clang.cindex

_TYPE_PARAM_RE = re.compile(r"type-parameter-(\d+)-(\d+)")


class TemplateArgMap:
    """Typed wrapper around the ``{name: Type | NonTypeTemplateArg}`` substitution map.

    Mirrors the dict-like surface used by the legacy implementation
    (``__contains__``, ``__getitem__``, ``__iter__``, ``values``,
    ``__bool__``) so it can stand in for a plain ``dict`` at every call
    site. PR 1.7 introduces the wrapper as the seam for canonical-key
    augmentation; today the wrapper is semantically identical to the
    legacy ``dict`` and is not yet propagated through every call site
    (preserving byte-parity).
    """

    __slots__ = ("_map",)

    def __init__(self, mapping: Mapping[str, Any] | None = None) -> None:
        self._map: dict = dict(mapping) if mapping else {}

    @classmethod
    def adopt(cls, mapping):
        """Wrap an existing dict / ``TemplateArgMap`` without copying."""
        if isinstance(mapping, cls):
            return mapping
        wrapper = cls.__new__(cls)
        wrapper._map = mapping if isinstance(mapping, dict) else dict(mapping or {})
        return wrapper

    def __contains__(self, key: str) -> bool:
        return key in self._map

    def __getitem__(self, key: str) -> Any:
        return self._map[key]

    def __iter__(self) -> Iterable[str]:
        return iter(self._map)

    def __bool__(self) -> bool:
        return bool(self._map)

    def __len__(self) -> int:
        return len(self._map)

    def values(self):
        return self._map.values()

    def keys(self):
        return self._map.keys()

    def items(self):
        return self._map.items()


# ----------------------------------------------------------------------
# Substitution helpers — pure functions extracted from `bindings.py`.
# ----------------------------------------------------------------------


def replace_template_args(string: str, template_args=None) -> str:
    """Substitute named template parameters in a type spelling.

    Mirrors the legacy ``Bindings.replaceTemplateArgs`` line-for-line.
    """
    new_string = string
    if template_args is None:
        return new_string
    for key in template_args:
        p = re.compile("(\\W+|^)" + key + "(\\W|$)")
        new_string = p.sub("\\1" + template_args[key].spelling + "\\2", new_string)
    return new_string


def augment_template_args_with_canonical(template_args, template_class):
    """Add ``type-parameter-N-M`` keys derived from ordinal positions.

    The legacy ``processTemplate`` builds ``template_args`` keyed by the
    source parameter name (``TheItemType``, ``TheKeyType``, ``Hasher``, …)
    but libclang's canonical spellings for inherited methods often use the
    synthetic form ``type-parameter-0-N`` instead. With both keys populated,
    every downstream resolver (template, qualified-member, canonical
    fallback) can substitute either spelling without an extra rewrite step
    — closing the largest class of ``unknown`` collapses observed in
    NCollection accessors and inherited template members.

    The canonical key carries the *same* substitution value as the
    source-name key. This is a deliberate symmetry: a single substitution
    map serving both name forms means
    ``_resolve_template_type`` and ``_resolve_qualified_member_type``
    don't need separate code paths for "did the parent template use the
    source name or the canonical name?".

    Returns a *new* dict — the caller's map is left untouched, so
    augmentation is idempotent / safe to apply repeatedly. ``depth=0`` is
    always used because OCCT's templates don't nest beyond one level
    (audit Finding 1, ``type-parameter-0-N`` is the only form observed
    in `build/any-type-report.json`).
    """
    if not template_args:
        return template_args
    if template_class is None:
        return template_args

    augmented = (
        dict(template_args)
        if not isinstance(template_args, TemplateArgMap)
        else dict(template_args.items())
    )

    template_params = [
        c
        for c in template_class.get_children()
        if c.kind
        in (
            clang.cindex.CursorKind.TEMPLATE_TYPE_PARAMETER,
            clang.cindex.CursorKind.TEMPLATE_NON_TYPE_PARAMETER,
            clang.cindex.CursorKind.TEMPLATE_TEMPLATE_PARAMETER,
        )
    ]
    for ordinal, param in enumerate(template_params):
        canonical_key = f"type-parameter-0-{ordinal}"
        if canonical_key in augmented:
            continue
        # Substitution value comes from the source-name keying. If the
        # source name is missing, the canonical key is left absent so
        # downstream resolvers fall through to their existing fallback
        # paths.
        if param.spelling and param.spelling in augmented:
            augmented[canonical_key] = augmented[param.spelling]

    # OCCT forward-declares some templates with a DIFFERENT parameter name than
    # the definition — e.g. `template<typename T> class math_VectorBase;` then
    # `template<typename TheItemType> class math_VectorBase {...}`. libclang
    # renders injected-class-name arguments (a method's `const math_VectorBase&`)
    # using the FORWARD-DECLARATION parameter name ("T"), but `template_class`
    # here is the definition (parameters named "TheItemType"), so
    # `replace_template_args` keyed on "TheItemType" never substitutes the "T"
    # in the rendered spelling and emits an uncompilable `math_VectorBase<T>`.
    # Map the canonical (first-declaration) parameter names onto the same
    # ordinal values so either spelling substitutes.
    canonical_class = getattr(template_class, "canonical", None)
    if canonical_class is not None and canonical_class != template_class:
        canonical_params = [
            c
            for c in canonical_class.get_children()
            if c.kind
            in (
                clang.cindex.CursorKind.TEMPLATE_TYPE_PARAMETER,
                clang.cindex.CursorKind.TEMPLATE_NON_TYPE_PARAMETER,
                clang.cindex.CursorKind.TEMPLATE_TEMPLATE_PARAMETER,
            )
        ]
        for ordinal, param in enumerate(canonical_params):
            if not param.spelling or param.spelling in augmented:
                continue
            value = augmented.get(f"type-parameter-0-{ordinal}")
            if value is not None:
                augmented[param.spelling] = value
    return augmented


def substitute_canonical_template_names(canonical_spelling: str, template_args) -> str:
    """Substitute ``type-parameter-N-M`` and source parameter names.

    libclang 18+ often spells dependent types with the source parameter
    name (e.g. ``TheItemType``) instead of ``type-parameter-0-0``;
    :func:`replace_template_args` handles those names while ``_TYPE_PARAM_RE``
    handles the internal spellings. Mirrors the legacy
    ``Bindings._substitute_canonical_template_names`` exactly.
    """
    if not template_args:
        return canonical_spelling
    s = replace_template_args(canonical_spelling, template_args)
    if "type-parameter-" not in s:
        return s

    def replacer(m):
        depth, index = int(m.group(1)), int(m.group(2))
        if depth == 0:
            arg_values = list(template_args.values())
            if index < len(arg_values):
                return arg_values[index].spelling
        return m.group(0)

    return _TYPE_PARAM_RE.sub(replacer, s)


def qualify_nested_type(type_spelling: str, clang_type) -> str:
    """Qualify nested class/typedef names with their parent class scope.

    In ``EMSCRIPTEN_BINDINGS`` blocks (global scope) names like
    ``NullString`` or ``OperationsFlags`` must be fully qualified as
    ``Message_ProgressScope::NullString`` / ``ShapeProcess::OperationsFlags``.
    Recurses into template arguments (e.g. ``std::pair<Operation, bool>``).
    Mirrors the legacy ``Bindings._qualify_nested_type`` line-for-line.
    """
    result = type_spelling
    base = clang_type
    if base.kind in (
        clang.cindex.TypeKind.POINTER,
        clang.cindex.TypeKind.LVALUEREFERENCE,
        clang.cindex.TypeKind.RVALUEREFERENCE,
    ):
        base = base.get_pointee()
    decl = base.get_declaration()
    if decl and decl.spelling:
        parts = [decl.spelling]
        parent = decl.semantic_parent
        while (
            parent
            and parent.spelling
            and parent.kind
            in (
                clang.cindex.CursorKind.CLASS_DECL,
                clang.cindex.CursorKind.STRUCT_DECL,
                clang.cindex.CursorKind.CLASS_TEMPLATE,
                clang.cindex.CursorKind.NAMESPACE,
            )
        ):
            parts.insert(0, parent.spelling)
            parent = parent.semantic_parent

        qualified = "::".join(parts)
        if qualified not in result and qualified not in ("occ::handle", "opencascade::handle"):
            for start in range(1, len(parts)):
                relative = "::".join(parts[start:])
                pattern = re.compile(r"(?<!:)\b" + re.escape(relative) + r"\b")
                if pattern.search(result):
                    result = pattern.sub(qualified, result, count=1)
                    break
    num_targs = base.get_num_template_arguments()
    for idx in range(num_targs):
        targ = base.get_template_argument_type(idx)
        if targ and targ.kind != clang.cindex.TypeKind.INVALID:
            result = qualify_nested_type(result, targ)
    return result


def get_typedefed_template_type_as_string(
    tu_info,
    the_type_spelling: str,
    template_decl=None,
    template_args=None,
) -> str:
    """Look up a template instantiation in the typedef tables.

    Returns the alias spelling when present, else the original type
    spelling. Mirrors the legacy ``Bindings.getTypedefedTemplateTypeAsString``
    exactly. Accepts ``tu_info`` rather than the full binder so this
    helper can be unit-tested against a mocked TU.
    """
    if template_decl is None:
        tud = tu_info.typedefUnderlyingDict
        if the_type_spelling in tud:
            typedef_type = tud[the_type_spelling].spelling
        else:
            typedef_type = None
    else:
        template_type = replace_template_args(the_type_spelling, template_args)
        raw_template_type = template_type.replace("&", "").replace("const", "").strip()
        ttud = tu_info.templateTypedefUnderlyingDict
        oc_raw = "opencascade::" + raw_template_type
        occ_raw = "occ::" + raw_template_type
        normalized = raw_template_type.replace("occ::", "opencascade::")
        if raw_template_type in ttud:
            raw_typedef_type = ttud[raw_template_type].spelling
        elif oc_raw in ttud:
            raw_typedef_type = ttud[oc_raw].spelling
        elif occ_raw in ttud:
            raw_typedef_type = ttud[occ_raw].spelling
        elif normalized in ttud:
            raw_typedef_type = ttud[normalized].spelling
        else:
            raw_typedef_type = raw_template_type
        typedef_type = template_type.replace(raw_template_type, raw_typedef_type)
    return the_type_spelling if typedef_type is None else typedef_type
