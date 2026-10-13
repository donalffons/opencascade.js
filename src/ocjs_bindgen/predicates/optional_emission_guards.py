"""Emit-time guards for std::optional<T> binding emission.

Implements three refuse-to-emit predicates that protect the migration from
arity fan-out to single ``optional_override`` lambdas. The unsafe binding
shapes each guard rejects are characterised in
``docs/research/ocjs-optional-overload-resolution-blueprint.md`` — they
would be silently incorrect or build-non-deterministic if emitted naively.

The three guards:

* :func:`assert_no_nonconst_ref_in_optional` (R6) — non-const ``T&``
  parameter wrapped in ``std::optional`` would erase OCCT's back-mutation
  contract. Output parameters belong on the TR-OUT pathway, not the
  optional pathway.
* :func:`assert_no_val_vs_optional_same_arity` (R4) — when a same-arity
  sibling overload has ``emscripten::val`` at the same parameter position
  as our ``std::optional<T>`` candidate, libembind picks ``val`` first
  deterministically; the optional binding would be unreachable dead code.
* :func:`assert_no_multi_all_optional_same_arity` (T1) — when two or more
  siblings at the same arity have ALL positions typed ``std::optional``,
  embind's last-registered-wins rule is implementation-defined across
  builds. Reject so the YAML author renames or removes one overload
  (alphabetical sort is the rejected alternative — it hides the ambiguity
  behind a build-time choice the consumer never sees).

Each guard raises :class:`SkipException` with a precise diagnostic message
naming the offending class, method, and (where relevant) parameter — so
authors can pinpoint the YAML or AST location to fix.

Callable from any emission site that resolves trailing-default parameters
into ``std::optional`` wrappers: ``codegen/embind/constructor.py``,
``codegen/bindings.py`` (method emission). All three guards are invoked at
the same point the trailing-default count is computed.
"""

from __future__ import annotations

import clang.cindex

from ocjs_bindgen.codegen.wasm_common import SkipException

_VAL_TYPE_SPELLINGS = frozenset({
    "emscripten::val",
    "const emscripten::val",
    "emscripten::val &",
    "const emscripten::val &",
})


def assert_no_nonconst_ref_in_optional(cls_name, method_name, optional_args):
    """Refuse to wrap a non-const ``T&`` parameter in ``std::optional<T>``.

    OCJS convention: non-const ``T&`` = output parameter. Wrapping in
    ``std::optional`` would silently drop caller mutation (the optional
    holds a copy; assignments to the unwrapped value never propagate
    back). The TR-OUT (output-param-stripping) pathway is the correct
    treatment.

    Args:
      cls_name: Owning C++ class name (for diagnostic context).
      method_name: Method or constructor name (for diagnostic context).
      optional_args: The clang cursor list of parameters destined for
        ``std::optional`` wrapping (typically the last ``nDefaults``
        arguments of the method).

    Raises:
      SkipException: When any of ``optional_args`` is a non-const
        lvalue reference.
    """
    for arg in optional_args:
        arg_type = arg.type
        if arg_type.kind != clang.cindex.TypeKind.LVALUEREFERENCE:
            continue
        pointee = arg_type.get_pointee()
        if pointee.is_const_qualified():
            continue
        name = arg.spelling if arg.spelling else "arg"
        raise SkipException(
            f"{cls_name}.{method_name} param {name}: "
            f"cannot wrap non-const reference '{pointee.spelling}&' in std::optional — "
            f"would silently drop caller mutation. Use the TR-OUT pathway instead."
        )


def assert_no_val_vs_optional_same_arity(
    cls_name,
    method_name,
    optional_positions,
    same_arity_sibling_arg_lists,
    get_arg_type_str,
):
    """Refuse to emit ``std::optional<T>`` when a same-arity sibling has
    ``emscripten::val`` at any of the same parameter positions.

    libembind dispatch picks ``val`` first deterministically (val accepts
    any JS value), so the optional binding registered alongside is
    unreachable. Reject the emission so the YAML author can rename or
    remove one of the overloads (silently shipping dead code is worse).

    Args:
      cls_name: Owning C++ class name (for diagnostic context).
      method_name: Method or constructor name (for diagnostic context).
      optional_positions: Iterable of integer parameter positions where
        the candidate would emit ``std::optional<T>``.
      same_arity_sibling_arg_lists: List of argument lists belonging to
        siblings emitted at the same JS arity as the candidate.
      get_arg_type_str: Callable that returns the canonical C++ type
        spelling for one argument (typically the bindgen's
        ``getOriginalArgumentType`` bound to the relevant template
        decl/args).

    Raises:
      SkipException: When any sibling has ``emscripten::val`` at a
        position the candidate intends to wrap in ``std::optional``.
    """
    optional_positions = list(optional_positions)
    for sibling_args in same_arity_sibling_arg_lists:
        for position in optional_positions:
            if position >= len(sibling_args):
                continue
            type_str = get_arg_type_str(sibling_args[position])
            if type_str in _VAL_TYPE_SPELLINGS:
                raise SkipException(
                    f"{cls_name}.{method_name}: "
                    f"same-arity overload mixes emscripten::val with std::optional<T> "
                    f"at parameter position {position}. "
                    f"The val overload would always win (R4) and the optional would be unreachable."
                )


def assert_no_multi_all_optional_same_arity(cls_name, method_name, all_optional_signatures):
    """Refuse to emit when 2+ siblings at the same arity have ALL positions
    typed ``std::optional``.

    embind's overload-table registration is order-sensitive — the last
    registered wins. Since the bindgen emission order is governed by AST
    traversal and per-translation-unit registration, "last wins" is
    implementation-defined across builds. Rather than introduce
    deterministic sorting (which would hide the ambiguity behind a
    build-time choice consumers never see), reject so the YAML author
    can resolve the collision.

    Args:
      cls_name: Owning C++ class name (for diagnostic context).
      method_name: Method or constructor name (for diagnostic context).
      all_optional_signatures: List of two-or-more sibling signatures
        (as human-readable strings, e.g. ``"(std::optional<int>, std::optional<double>)"``)
        for the colliding overloads at the same arity. Must contain at
        least two entries to be a collision.

    Raises:
      SkipException: When ``len(all_optional_signatures) >= 2``.
    """
    if len(all_optional_signatures) >= 2:
        sig1 = all_optional_signatures[0]
        sig2 = all_optional_signatures[1]
        raise SkipException(
            f"{cls_name}.{method_name}: "
            f"same-arity overloads {sig1} and {sig2} both use only std::optional parameter types — "
            f"dispatcher cannot disambiguate. "
            f"Last-registered wins, which is implementation-defined across builds. "
            f"Rename or remove one overload."
        )
