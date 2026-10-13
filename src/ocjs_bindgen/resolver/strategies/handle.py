"""Handle-unwrapping resolver strategy.

OCCT wraps every transient type in ``opencascade::handle<T>`` (a smart
pointer); typescript-side consumers expect the inner ``T`` directly. This
strategy mirrors the legacy ``TypescriptBindings._resolve_handle_recursive``
and ``TypescriptBindings.resolve_handle_type`` line-for-line so byte-parity
of generated ``.d.ts`` artifacts is preserved.

The functions accept the binder as ``self`` to keep ``self.X`` access
patterns identical to the in-place version. ``TypescriptBindings`` retains
thin one-line delegators that forward to these functions.
"""

from __future__ import annotations

import re

import clang.cindex


def resolve_handle_type(self, clang_type):
    """Extract inner type from ``opencascade::handle<T>`` via AST inspection.

    Returns the inner type's spelling (e.g. ``Geom_Curve``) or ``None``.
    """
    t = clang_type
    if t.kind == clang.cindex.TypeKind.LVALUEREFERENCE:
        t = t.get_pointee()
    if t.kind == clang.cindex.TypeKind.POINTER:
        t = t.get_pointee()
    if t.get_num_template_arguments() != 1:
        return None
    decl = t.get_declaration()
    if decl.spelling != "handle":
        return None
    parent = decl.semantic_parent
    if not parent or parent.spelling not in ("opencascade", "occ"):
        return None
    return t.get_template_argument_type(0).spelling


_HANDLE_TYPEDEF_RE = re.compile(r"^Handle_[A-Z]")


def resolve_handle_recursive(self, clang_type, templateDecl=None, templateArgs=None):
    """Unwrap ``handle<T>`` and recursively resolve the inner type via AST.

    Also accepts ``Handle_*`` typedefs that alias ``opencascade::handle<T>``.
    OCCT defines ``DEFINE_STANDARD_HANDLE`` which generates ``typedef Handle_Foo``
    aliases that callers use interchangeably with ``Handle(Foo)`` /
    ``opencascade::handle<Foo>``. Without this branch the typedef form falls
    into the unbound-reference fallback and emits ``unknown``.
    """
    t = clang_type
    if t.kind == clang.cindex.TypeKind.LVALUEREFERENCE:
        t = t.get_pointee()
    if t.kind == clang.cindex.TypeKind.POINTER:
        t = t.get_pointee()

    decl = t.get_declaration()
    if decl and decl.spelling and _HANDLE_TYPEDEF_RE.match(decl.spelling):
        canonical = t.get_canonical()
        if canonical.get_num_template_arguments() == 1:
            canonical_decl = canonical.get_declaration()
            if (
                canonical_decl
                and canonical_decl.spelling == "handle"
                and canonical_decl.semantic_parent
                and canonical_decl.semantic_parent.spelling in ("opencascade", "occ")
            ):
                inner_type = canonical.get_template_argument_type(0)
                return self.resolve_type(inner_type, templateDecl, templateArgs)

    if t.get_num_template_arguments() != 1:
        return None
    if decl.spelling != "handle":
        return None
    parent = decl.semantic_parent
    if not parent or parent.spelling not in ("opencascade", "occ"):
        return None
    inner_type = t.get_template_argument_type(0)
    return self.resolve_type(inner_type, templateDecl, templateArgs)
