"""Qualified-member-type resolver strategy.

Handles ``typename ConcreteClass::Point`` after template substitution:
walks the class hierarchy through the binder's ``tuInfo.classDict`` to
find member typedefs inherited from base classes. Mirrors the legacy
``TypescriptBindings._resolve_qualified_member_type`` line-for-line so
byte-parity is preserved.
"""

from __future__ import annotations

import re

import clang.cindex

_CONST_RE = re.compile(r"\bconst\b")


def resolve_qualified_member_type(self, resolved, templateDecl=None, templateArgs=None):
    """Resolve a qualified type like ``typename ConcreteClass::Point`` post template-substitution.

    Walks the class hierarchy to find member typedefs inherited from base
    classes. Returns the resolved TypeScript type string or ``None``.
    """
    # Imported lazily so the resolver package doesn't reach into bindings.py
    # at import time and create a cycle. The class-level attribute is used
    # to gate "already known" exports without re-emitting them.
    from ocjs_bindgen.codegen.bindings import TypescriptBindings

    clean = resolved.replace("typename ", "").strip()
    clean = _CONST_RE.sub("", clean).replace("&", "").replace("*", "").strip()
    if "::" not in clean:
        return None
    parts = clean.rsplit("::", 1)
    if len(parts) != 2:
        return None
    parent_name, member_name = parts[0].strip(), parts[1].strip()
    if not parent_name or not member_name:
        return None

    combined = parent_name + "_" + member_name
    if combined in self.exports or combined in TypescriptBindings._known_export_names:
        return combined

    specialized = _resolve_specialized_member(
        self,
        parent_name,
        member_name,
        templateDecl,
        templateArgs,
    )
    if specialized is not None:
        self.referenced_classes.discard(member_name)
        return specialized

    # Traits member typedef substitution. When `parent_name`
    # is a template parameter (e.g. `TraitsT` or `Traits`) rather than a
    # concrete class name, the legacy `classDict.get(parent_name)`
    # lookup fails. We must instead materialise the parent through the
    # substitution map: `templateArgs[parent_name]` carries the
    # concrete Traits type, and walking its `TYPEDEF_DECL` /
    # `TYPE_ALIAS_DECL` children yields the inner member typedef
    # (`using ParentId = typename TraitsT::ParentId;` — the
    # BRepGraph_ReverseIterator family is the smoking-gun case from the
    # audit).
    if templateArgs and parent_name in templateArgs:
        substituted_arg = templateArgs[parent_name]
        substituted_type = getattr(substituted_arg, "type", substituted_arg)
        substituted_decl = (
            substituted_type.get_declaration()
            if hasattr(substituted_type, "get_declaration")
            else None
        )
        traits_resolved = _resolve_member_typedef_in_class(
            self,
            substituted_decl,
            member_name,
            templateDecl,
            templateArgs,
        )
        if traits_resolved is not None:
            self.referenced_classes.discard(member_name)
            return traits_resolved

    class_cursor = self.tuInfo.classDict.get(parent_name)
    if class_cursor is None:
        class_cursor = self.tuInfo.classDict.get(parent_name.rsplit("::", 1)[-1])
    if not class_cursor:
        return None

    visited = set()
    queue = [class_cursor]
    while queue:
        cls = queue.pop(0)
        cls_id = cls.spelling
        if cls_id in visited:
            continue
        visited.add(cls_id)

        for child in cls.get_children():
            if child.kind in (
                clang.cindex.CursorKind.TYPEDEF_DECL,
                clang.cindex.CursorKind.TYPE_ALIAS_DECL,
            ):
                if child.spelling == member_name:
                    underlying = child.underlying_typedef_type
                    resolved_member = self.resolve_type(
                        underlying,
                        templateDecl,
                        templateArgs,
                    )
                    self.referenced_classes.discard(member_name)
                    return resolved_member
            if child.kind == clang.cindex.CursorKind.CXX_BASE_SPECIFIER:
                base_decl = child.get_definition()
                if base_decl and base_decl.spelling:
                    queue.append(base_decl)
                    base_from_dict = self.tuInfo.classDict.get(base_decl.spelling)
                    if base_from_dict:
                        queue.append(base_from_dict)

    return None


def _resolve_specialized_member(
    self,
    parent_name,
    member_name,
    templateDecl,
    templateArgs,
):
    """Resolve ``Template<Concrete>::Member`` through an explicit specialization."""
    from ocjs_bindgen.discover import (
        _build_typedef_alias_map,
        _normalize_arg,
        _parse_template_spelling,
    )

    parsed = _parse_template_spelling(parent_name)
    if parsed is None:
        return None
    container, args = parsed
    alias_map = _build_typedef_alias_map(self.tuInfo, include_plain_typedefs=True)

    def canonical_arg(arg):
        underlying = _qualified_member_underlying_type(self, arg, templateArgs)
        if underlying is not None:
            canonical = underlying.get_canonical()
            return canonical.spelling or underlying.spelling
        return _normalize_arg(arg, alias_map)

    concrete_args = [canonical_arg(arg) for arg in args]

    short_container = container.rsplit("::", 1)[-1]
    for candidate in getattr(self.tuInfo, "allChildren", ()):
        if candidate.spelling != short_container:
            continue
        candidate_parsed = _parse_template_spelling(candidate.displayname)
        if (
            candidate_parsed is None
            or [canonical_arg(arg) for arg in candidate_parsed[1]] != concrete_args
        ):
            continue
        for child in candidate.get_children():
            if child.kind in (
                clang.cindex.CursorKind.TYPEDEF_DECL,
                clang.cindex.CursorKind.TYPE_ALIAS_DECL,
            ) and child.spelling == member_name:
                return self.resolve_type(
                    child.underlying_typedef_type,
                    templateDecl,
                    templateArgs,
                )
    return None


def _qualified_member_underlying_type(self, resolved, templateArgs):
    """Return the underlying clang type for a qualified member typedef."""
    clean = resolved.replace("typename ", "").strip()
    clean = _CONST_RE.sub("", clean).replace("&", "").replace("*", "").strip()
    if "::" not in clean:
        return None
    parent_name, member_name = (part.strip() for part in clean.rsplit("::", 1))
    if not parent_name or not member_name:
        return None

    if templateArgs and parent_name in templateArgs:
        substituted_arg = templateArgs[parent_name]
        substituted_type = getattr(substituted_arg, "type", substituted_arg)
        substituted_decl = (
            substituted_type.get_declaration()
            if hasattr(substituted_type, "get_declaration")
            else None
        )
        underlying = _find_member_typedef_in_class(self, substituted_decl, member_name)
        if underlying is not None:
            self.referenced_classes.discard(member_name)
            return underlying

    class_cursor = self.tuInfo.classDict.get(parent_name)
    if class_cursor is None:
        class_cursor = self.tuInfo.classDict.get(parent_name.rsplit("::", 1)[-1])
    underlying = _find_member_typedef_in_class(self, class_cursor, member_name)
    if underlying is not None:
        self.referenced_classes.discard(member_name)
    return underlying


def _resolve_member_typedef_in_class(
    self,
    class_decl,
    member_name,
    templateDecl,
    templateArgs,
):
    """Walk a concrete class's `TYPEDEF_DECL`/`TYPE_ALIAS_DECL` children
    looking for a member named ``member_name``. Recurses through public
    base specifiers so traits types built via inheritance still resolve.

    Returns the recursively-resolved TypeScript type string for the
    typedef's underlying type, or ``None`` if the member isn't found.
    """
    underlying = _find_member_typedef_in_class(self, class_decl, member_name)
    if underlying is None:
        return None
    resolved = self.resolve_type(underlying, templateDecl, templateArgs)
    return resolved if resolved and resolved != "unknown" else None


def _find_member_typedef_in_class(self, class_decl, member_name):
    """Find a member typedef's underlying clang type through public bases."""
    if class_decl is None or not class_decl.spelling:
        return None
    if class_decl.kind not in (
        clang.cindex.CursorKind.CLASS_DECL,
        clang.cindex.CursorKind.STRUCT_DECL,
        clang.cindex.CursorKind.CLASS_TEMPLATE,
    ):
        return None

    visited: set = set()
    queue = [class_decl]
    while queue:
        cls = queue.pop(0)
        cls_id = cls.spelling
        if cls_id in visited:
            continue
        visited.add(cls_id)

        for child in cls.get_children():
            if child.kind in (
                clang.cindex.CursorKind.TYPEDEF_DECL,
                clang.cindex.CursorKind.TYPE_ALIAS_DECL,
            ):
                if child.spelling == member_name:
                    return child.underlying_typedef_type
            if child.kind == clang.cindex.CursorKind.CXX_BASE_SPECIFIER:
                base_decl = child.get_definition()
                if base_decl and base_decl.spelling:
                    queue.append(base_decl)
                    base_from_dict = self.tuInfo.classDict.get(base_decl.spelling)
                    if base_from_dict:
                        queue.append(base_from_dict)
    return None
