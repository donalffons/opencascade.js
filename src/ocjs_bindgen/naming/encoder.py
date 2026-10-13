"""`NameEncoder` — single source of truth for C++ → JS/TS naming.

Phase 1 PR 1.4 of the OCJS Bindgen Modular Refactor consolidates the four
historically-independent naming rules into one cohesive class so that the
deep nested-class walker lands as a single-file change.

Rules owned here, *all* preserving the legacy one-level walk used by the
pre-refactor bindings.py for byte-parity:

* :py:meth:`NameEncoder.cpp_type_name` — bare C++ spelling (template typedefs
  return the alias spelling). Mirrors legacy ``getClassTypeName``.
* :py:meth:`NameEncoder.js_public_name` — JS export / Embind ``class_<>("…")``
  name with at most one ``Namespace_`` prefix. Mirrors legacy
  ``getClassJsPublicName``.
* :py:meth:`NameEncoder.cpp_qualified_name` — fully-qualified C++ symbol used
  inside ``EMSCRIPTEN_BINDINGS`` template args and member-pointer expressions.
  Mirrors legacy ``getClassQualifiedName``.
* :py:meth:`NameEncoder.cpp_full_name` — alias of ``cpp_qualified_name``
  surfaced as the encoder's "emit-site C++ name" so future audit work needs
  one knob to change. No call-site exists yet; this is the slot the audit-fix
  PR will rewire to.
* :py:meth:`NameEncoder.resolve_nested_type` — `Parent_Child` mangling for an
  enum/class/struct nested inside a class or namespace. Mirrors legacy
  ``TypescriptBindings._resolve_nested_type`` including its
  ``_namespace_scoped_interfaces`` side-effect. The side-effect target is
  passed as ``namespace_scoped_sink`` so the encoder stays free of class-level
  state (PR 1.6 finishes that migration).
* :py:meth:`NameEncoder.enum_qualified_name` — enum-specific qualified-name
  walker. Mirrors legacy ``getEnumQualifiedName``.
* :py:meth:`NameEncoder.enum_public_name` — enum JS-public name with at most
  one ``Namespace_`` prefix. Mirrors legacy ``getEnumJsPublicName``.

The module-level ``ENCODER`` singleton is what every legacy free function
re-exported from :mod:`ocjs_bindgen.naming.cpp` and :mod:`ocjs_bindgen.naming.ts`
now delegates to.
"""

from __future__ import annotations

from collections.abc import MutableSet

import clang.cindex

# Stdlib / Emscripten internal namespaces that must NOT contribute to the
# JS-public prefix. Mirrors `_SKIPPED_NAMESPACES` in `ast.walker` but kept
# here as a literal tuple to match the legacy in-line check exactly.
_PREFIX_SKIP_NAMESPACES = (
    "std",
    "emscripten",
    "__gnu_cxx",
    "__cxxabiv1",
    "__cxx",
    "__1",
)

_QUALIFIED_PARENT_KINDS = (
    clang.cindex.CursorKind.CLASS_DECL,
    clang.cindex.CursorKind.STRUCT_DECL,
    clang.cindex.CursorKind.CLASS_TEMPLATE,
    clang.cindex.CursorKind.NAMESPACE,
)

_ENUM_PARENT_KINDS = (
    clang.cindex.CursorKind.NAMESPACE,
    clang.cindex.CursorKind.CLASS_DECL,
    clang.cindex.CursorKind.STRUCT_DECL,
    clang.cindex.CursorKind.CLASS_TEMPLATE,
)


class NameEncoder:
    """Owns all C++ → JS/TS naming rules used by the bindgen.

    Stateless — every method takes the cursor (and optional template typedef
    decl) as an argument. Centralising the rules here means the deep
    nested-class walker is added in one place and propagates to every
    legacy call site through the delegating free functions.
    """

    @staticmethod
    def cpp_type_name(theClass, templateDecl=None) -> str:
        """Bare C++ spelling. Template typedefs return the alias spelling."""
        return templateDecl.spelling if templateDecl is not None else theClass.spelling

    @classmethod
    def js_public_name(cls, theClass, templateDecl=None) -> str:
        """JS-public class name (Embind `class_<>("…")` and TS export name).

        Walks the FULL ``semantic_parent`` chain through enclosing
        ``CLASS_DECL``/``STRUCT_DECL``/``CLASS_TEMPLATE`` levels up to the
        namespace boundary, then prepends the namespace if it isn't a
        stdlib internal. This matches the behaviour of
        :py:meth:`cpp_qualified_name` so the JS export name stays in lock
        step with the C++ binding's ``class_<Outer::Middle::Inner>("…")``
        registration argument.

        Examples:

        * ``ExtremaPC::Result``                 → ``ExtremaPC_Result``
        * ``BRepGraph::TopoView::FaceOps``      → ``BRepGraph_TopoView_FaceOps``
        * ``BRepGraph::TopoView::FaceOps::Iterator``
                                                → ``BRepGraph_TopoView_FaceOps_Iterator``
        * Top-level ``gp_Pnt``                  → ``gp_Pnt``
        * Template typedef alias (e.g. NCollection_Array1_gp_Pnt) keeps the
          alias spelling — ``templateDecl.spelling`` already lives at file
          scope and shouldn't gain a prefix from the underlying template's
          parents.
        """
        base = cls.cpp_type_name(theClass, templateDecl)
        decl = templateDecl if templateDecl is not None else theClass

        parts = [base]
        parent = decl.semantic_parent
        while parent is not None and parent.kind in (
            clang.cindex.CursorKind.CLASS_DECL,
            clang.cindex.CursorKind.STRUCT_DECL,
            clang.cindex.CursorKind.CLASS_TEMPLATE,
        ):
            if parent.spelling:
                parts.insert(0, parent.spelling)
            parent = parent.semantic_parent
        if (
            parent is not None
            and parent.kind == clang.cindex.CursorKind.NAMESPACE
            and parent.spelling
            and parent.spelling not in _PREFIX_SKIP_NAMESPACES
        ):
            parts.insert(0, parent.spelling)
        return "_".join(parts)

    @staticmethod
    def cpp_qualified_name(theClass, templateDecl=None) -> str:
        """Fully-qualified C++ symbol (e.g. ``BRepGraph::CacheView``).

        For template typedef aliases, walks the typedef's parents — the
        underlying template's ``semantic_parent`` chain doesn't include the
        alias's host namespace/class. Behaviour preserved from legacy
        ``getClassQualifiedName``.
        """
        if templateDecl is not None and templateDecl.spelling:
            parts = [templateDecl.spelling]
            parent = templateDecl.semantic_parent
            while parent and parent.kind in _QUALIFIED_PARENT_KINDS:
                if parent.spelling:
                    parts.append(parent.spelling)
                parent = parent.semantic_parent
            return "::".join(reversed(parts))
        base = (
            theClass.spelling
            if (templateDecl is None or not templateDecl.spelling)
            else templateDecl.spelling
        )
        parts = [base]
        parent = theClass.semantic_parent
        while parent and parent.kind in _QUALIFIED_PARENT_KINDS:
            if parent.spelling:
                parts.append(parent.spelling)
            parent = parent.semantic_parent
        return "::".join(reversed(parts))

    @classmethod
    def cpp_full_name(cls, theClass, templateDecl=None) -> str:
        """Alias of :py:meth:`cpp_qualified_name`.

        Reserved as the encoder's "emit-site C++ name" so future naming
        adjustments land in one place even when the qualified-name rule
        diverges for emit vs. comparison sites.
        """
        return cls.cpp_qualified_name(theClass, templateDecl)

    @staticmethod
    def enum_qualified_name(theEnum) -> str:
        """Fully-qualified C++ enum name. Preserved from legacy ``getEnumQualifiedName``."""
        parts = [theEnum.spelling]
        parent = theEnum.semantic_parent
        while parent is not None and parent.kind in _ENUM_PARENT_KINDS:
            if parent.spelling:
                parts.append(parent.spelling)
            parent = parent.semantic_parent
        return "::".join(reversed(parts))

    @staticmethod
    def enum_public_name(theEnum) -> str:
        """JS-public enum name. Preserved from legacy ``getEnumJsPublicName``."""
        base = theEnum.spelling
        parent = theEnum.semantic_parent
        if parent is not None and parent.kind == clang.cindex.CursorKind.NAMESPACE:
            if parent.spelling and parent.spelling not in _PREFIX_SKIP_NAMESPACES:
                return parent.spelling + "_" + base
        return base

    @staticmethod
    def resolve_nested_type(
        decl,
        namespace_scoped_sink: MutableSet[str] | None = None,
    ) -> str | None:
        """Resolve nested enum/class/struct inside a class or namespace.

        Returns ``Parent_Child`` (or ``A_B_C`` for deeper chains) for
        nested types, ``None`` otherwise. The resolved name MUST match the
        public name produced by :py:meth:`js_public_name` so emitted
        ``class_<…>("Outer_Inner")`` registrations and resolved type
        references coincide.

        Walks the full ``semantic_parent`` chain through enclosing classes
        / structs / class templates up to the namespace boundary. Without
        this, an inner-class reference (e.g. ``Faces(): TopoView_FaceOps``)
        emits ``TopoView_FaceOps`` while the actual binding declares
        ``BRepGraph_TopoView_FaceOps``, and the link-time rewriter rewrites
        the dangling reference to ``unknown``.

        When the resolved name is namespace-rooted, it is recorded in
        ``namespace_scoped_sink`` so the per-fragment finaliser still emits
        a stub for fragments that reference the type without defining it.
        The redundant-unknown-alias dropper removes that stub at link time
        once the real declaration is observed.
        """
        if not decl or decl.spelling == "":
            return None
        if decl.kind not in (
            clang.cindex.CursorKind.ENUM_DECL,
            clang.cindex.CursorKind.CLASS_DECL,
            clang.cindex.CursorKind.STRUCT_DECL,
        ):
            return None
        parent = decl.semantic_parent
        if not parent:
            return None

        # Walk every enclosing CLASS / STRUCT / CLASS_TEMPLATE level so a
        # deeply nested type (`Outer::Mid::Inner`) renders as
        # `Outer_Mid_Inner`, not `Mid_Inner`.
        parts = [decl.spelling]
        while parent is not None and parent.kind in (
            clang.cindex.CursorKind.CLASS_DECL,
            clang.cindex.CursorKind.STRUCT_DECL,
            clang.cindex.CursorKind.CLASS_TEMPLATE,
        ):
            if parent.spelling:
                parts.insert(0, parent.spelling)
            parent = parent.semantic_parent

        if parent is not None and parent.kind == clang.cindex.CursorKind.NAMESPACE:
            if not parent.spelling or parent.spelling in _PREFIX_SKIP_NAMESPACES:
                # Namespace-but-stdlib (e.g. `std::pair`) — only return a
                # resolved name if at least one class level is present.
                # Otherwise we'd be returning a bare leaf spelling, which
                # the legacy code returned `None` for.
                if len(parts) == 1:
                    return None
                return "_".join(parts)
            parts.insert(0, parent.spelling)
            resolved = "_".join(parts)
            if namespace_scoped_sink is not None:
                namespace_scoped_sink.add(resolved)
            return resolved

        # No namespace ancestor — only return when at least one class level
        # is present, matching the legacy behaviour for top-level types.
        if len(parts) == 1:
            return None
        return "_".join(parts)


# Module-level singleton: the legacy free functions in `cpp.py` and `ts.py`
# delegate to this so future naming changes swap behaviour in one place and
# every call site inherits the change.
ENCODER = NameEncoder()
