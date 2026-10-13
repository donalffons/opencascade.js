"""``TypeScriptResolver`` — orchestrator that glues the resolver strategies.

Phase 1 PR 1.5 of the OCJS Bindgen Modular Refactor pulled the entire
``TypescriptBindings.resolve_type`` decision tree out of the god-class and
into this module. The orchestrator owns the **order of strategies** —
handle unwrap, qualifier strip, C-array detection, template resolution,
nested-type lookup, builtin-kind dispatch, and finally the canonical
fallback. Every strategy is implemented as a free function in
:mod:`ocjs_bindgen.resolver.strategies`; this class is the only place that
knows how they compose, which is exactly the invariant required to add
new strategies without touching every binder.

The orchestrator holds a reference to the binder (``ResolverContext``)
because the in-place implementation freely accessed binder state
(``self.exports``, ``self.tuInfo``, the class-level lookup sets, etc.).
The reference keeps the move purely physical and guarantees byte-parity
with the pre-refactor output.
"""

from __future__ import annotations

import clang.cindex

from .protocol import ResolverContext
from .strategies import (
    resolve_canonical_fallback,
    resolve_function_proto,
    resolve_handle_recursive,
    resolve_handle_type,
    resolve_member_typedef_substitution,
    resolve_qualified_member_type,
    resolve_stl_type,
    resolve_template_arg,
    resolve_template_type,
)


class TypeScriptResolver:
    """Resolve a clang ``Type`` to its TypeScript equivalent.

    See :mod:`ocjs_bindgen.resolver.protocol` for the binder surface this
    orchestrator depends on.
    """

    def __init__(self, ctx: ResolverContext) -> None:
        self._ctx = ctx

    # ---- Strategy entry points (one per strategy module) ----------------

    def handle_type(self, clang_type):
        return resolve_handle_type(self._ctx, clang_type)

    def handle_recursive(self, clang_type, templateDecl=None, templateArgs=None):
        return resolve_handle_recursive(self._ctx, clang_type, templateDecl, templateArgs)

    def qualified_member(self, resolved, templateDecl=None, templateArgs=None):
        return resolve_qualified_member_type(self._ctx, resolved, templateDecl, templateArgs)

    def template_type(self, clang_type, templateDecl=None, templateArgs=None):
        return resolve_template_type(self._ctx, clang_type, templateDecl, templateArgs)

    def template_arg(self, arg_type, templateDecl=None, templateArgs=None):
        return resolve_template_arg(self._ctx, arg_type, templateDecl, templateArgs)

    def stl_type(self, container, clang_type, templateDecl=None, templateArgs=None):
        return resolve_stl_type(self._ctx, container, clang_type, templateDecl, templateArgs)

    def function_proto(self, clang_type, templateDecl=None, templateArgs=None):
        return resolve_function_proto(self._ctx, clang_type, templateDecl, templateArgs)

    def member_typedef(self, clang_type, templateDecl=None, templateArgs=None):
        return resolve_member_typedef_substitution(
            self._ctx, clang_type, templateDecl, templateArgs
        )

    # ---- Public entry point ---------------------------------------------

    def resolve(self, clang_type, templateDecl=None, templateArgs=None) -> str:
        """Mirror the legacy ``TypescriptBindings.resolve_type`` decision tree.

        Resolution order (line-for-line from the legacy implementation):

        1. ``Handle<T>`` unwrapping via AST (recursive)
        2. Strip ``const``/ref/ptr qualifiers via AST
        3. C-array detection (returns fixed-size tuple for size 1..16)
        4. Recursive ``Handle<T>`` unwrap on the stripped type
        5. Template type resolution
        6. Nested type (enum/class inside class) resolution
        7. Builtin-kind dispatch (``int``, ``bool``, ``char``, ``void``)
        8. C-array detection on the canonical type
        9. Function-pointer typedef rendering — emits a TypeScript callable
           signature ``((arg0: A) => R)``
        10. Member-typedef peel — when the source spelling is a member
            alias (`reference`, `const_reference`, `value_type`, …) whose
            underlying type references a template parameter, re-enter the
            orchestrator on the underlying type so the existing canonical-key
            substitution can fire.
        11. Canonical fallback (qualified-member walk, alias lookup,
            ``unknown``)
        """
        ctx = self._ctx

        handleInner = self.handle_recursive(clang_type, templateDecl, templateArgs)
        if handleInner:
            return handleInner

        t = ctx._strip_qualifiers(clang_type)

        # Detect C-arrays *before* the template/canonical resolution paths so
        # `gp_XYZ (&)[3]` becomes a fixed-size tuple rather than `gp_XYZ[3]`
        # (which would parse as element-access syntax in TypeScript).
        if t.kind in (
            clang.cindex.TypeKind.CONSTANTARRAY,
            clang.cindex.TypeKind.INCOMPLETEARRAY,
            clang.cindex.TypeKind.VARIABLEARRAY,
        ):
            element_type = t.get_array_element_type()
            element_ts = self.resolve(element_type, templateDecl, templateArgs)
            element_count = (
                t.get_array_size() if t.kind == clang.cindex.TypeKind.CONSTANTARRAY else -1
            )
            if 1 <= element_count <= 16:
                return "[" + ", ".join([element_ts] * element_count) + "]"
            return f"{element_ts}[]"

        handleInner = self.handle_recursive(t, templateDecl, templateArgs)
        if handleInner:
            return handleInner

        template_result = self.template_type(t, templateDecl, templateArgs)
        if template_result is not None:
            return template_result

        decl = t.get_declaration()
        nested = ctx._resolve_nested_type(decl)
        if nested:
            return nested

        canonical = t.get_canonical()
        kind = canonical.kind

        pre_canonical_spelling = ctx._strip_type_qualifiers_str(t.spelling)
        if pre_canonical_spelling in ctx._NUMERIC_TYPES:
            return "number"
        if pre_canonical_spelling in ctx._BOOLEAN_TYPES:
            return "boolean"

        if kind in ctx._BUILTIN_NUMERIC_KINDS:
            return "number"
        if kind in ctx._BUILTIN_STRING_KINDS:
            return "string"
        if kind == clang.cindex.TypeKind.BOOL:
            return "boolean"
        if kind == clang.cindex.TypeKind.VOID:
            return "void"

        if (
            kind == clang.cindex.TypeKind.CONSTANTARRAY
            or kind == clang.cindex.TypeKind.INCOMPLETEARRAY
            or kind == clang.cindex.TypeKind.VARIABLEARRAY
        ):
            element_type = canonical.get_array_element_type()
            element_ts = self.resolve(element_type, templateDecl, templateArgs)
            element_count = (
                canonical.get_array_size()
                if kind == clang.cindex.TypeKind.CONSTANTARRAY
                else -1
            )
            if 1 <= element_count <= 16:
                return "[" + ", ".join([element_ts] * element_count) + "]"
            return f"{element_ts}[]"

        # Render C-style function pointer typedefs as TS
        # callable signatures *before* the canonical fallback. The
        # strategy returns ``None`` when any inner type fails to resolve,
        # which keeps the failure visible in the diagnostics report via
        # the canonical fallback's `_collect_any` sink.
        proto_result = resolve_function_proto(ctx, t, templateDecl, templateArgs)
        if proto_result is not None:
            return proto_result

        # Peel member typedefs (`reference`, `const_reference`, `value_type`,
        # etc.) whose underlying type references a template parameter so the
        # existing canonical-key substitution can fire.
        member_typedef_result = resolve_member_typedef_substitution(
            ctx, t, templateDecl, templateArgs
        )
        if member_typedef_result is not None:
            return member_typedef_result

        return resolve_canonical_fallback(
            ctx, t, decl, canonical, kind, templateDecl, templateArgs
        )
