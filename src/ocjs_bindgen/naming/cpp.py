"""C++-qualified name producers.

Phase 1 PR 1.4 of the OCJS Bindgen Modular Refactor turned every helper here
into a thin delegator to :class:`ocjs_bindgen.naming.encoder.NameEncoder`,
the single source of truth for naming. Behaviour preserved bit-for-bit; the
delegation pattern means the deep nested-class walker
lands in the encoder and propagates to every legacy call site without a
search-and-replace pass.
"""

from __future__ import annotations

from .encoder import ENCODER


def getClassTypeName(theClass, templateDecl=None) -> str:
    """Bare class type name. Delegates to :py:meth:`NameEncoder.cpp_type_name`."""
    return ENCODER.cpp_type_name(theClass, templateDecl)


def getEnumQualifiedName(theEnum) -> str:
    """Fully-qualified C++ enum name. Delegates to :py:meth:`NameEncoder.enum_qualified_name`."""
    return ENCODER.enum_qualified_name(theEnum)


def getClassQualifiedName(theClass, templateDecl=None) -> str:
    """Fully-qualified C++ class symbol. Delegates to :py:meth:`NameEncoder.cpp_qualified_name`."""
    return ENCODER.cpp_qualified_name(theClass, templateDecl)


def getClassCppName(theClass, templateDecl=None) -> str:
    """Emit-site C++ name. Delegates to :py:meth:`NameEncoder.cpp_full_name`.

    Currently identical to ``getClassQualifiedName``; the alias exists so
    future audit fixes can diverge emit-site names from comparison-site names
    without touching every call site.
    """
    return ENCODER.cpp_full_name(theClass, templateDecl)
