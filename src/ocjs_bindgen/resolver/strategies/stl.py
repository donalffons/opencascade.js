"""STL container resolver strategy.

Maps standard library template types (``std::vector``, ``std::shared_ptr``,
``std::pair``, ``std::optional``, ``std::array``, ``std::initializer_list``,
``std::basic_string`` / ``std::*_string_view``) plus a handful of OCCT
adapters (``NCollection_LinearVector``, ``NCollection_UtfString``) to their
TypeScript equivalents. Mirrors the legacy
``TypescriptBindings._resolve_stl_type`` and ``_is_std_decl`` line-for-line
so byte-parity is preserved.
"""

from __future__ import annotations

import re

import clang.cindex


def is_std_decl(decl):
    """Check if a declaration is within the std namespace.

    Handles ``std::__1`` (libc++ inline namespace), ``std::__cxx11`` (libstdc++
    ABI tag), and any future inline namespaces by walking up the ``semantic_parent``
    chain. Stops as soon as a non-namespace cursor is hit.
    """
    parent = decl.semantic_parent
    while parent:
        if parent.spelling == "std":
            return True
        if parent.kind != clang.cindex.CursorKind.NAMESPACE:
            break
        parent = parent.semantic_parent
    return False


_ARRAY_SIZE_RE = re.compile(r",\s*(\d+)\s*>$")


def resolve_stl_type(self, container, clang_type, templateDecl=None, templateArgs=None):
    """Resolve standard library template types to TypeScript equivalents."""
    t = clang_type
    numArgs = t.get_num_template_arguments()

    if container == "shared_ptr":
        if is_std_decl(t.get_declaration()) and numArgs >= 1:
            inner = t.get_template_argument_type(0)
            return self.resolve_type(inner, templateDecl, templateArgs)

    if container == "vector":
        if is_std_decl(t.get_declaration()) and numArgs >= 1:
            inner = self.resolve_type(t.get_template_argument_type(0), templateDecl, templateArgs)
            return f"{inner}[]"

    if container == "NCollection_LinearVector":
        if numArgs >= 1:
            inner = self.resolve_type(t.get_template_argument_type(0), templateDecl, templateArgs)
            return f"{inner}[]"

    if container == "initializer_list":
        if numArgs >= 1:
            inner = self.resolve_type(t.get_template_argument_type(0), templateDecl, templateArgs)
            return f"{inner}[]"
        return "any[]"

    if container == "pair":
        if numArgs >= 2:
            t0 = self.resolve_type(t.get_template_argument_type(0), templateDecl, templateArgs)
            t1 = self.resolve_type(t.get_template_argument_type(1), templateDecl, templateArgs)
            return f"[{t0}, {t1}]"

    if container == "optional":
        if numArgs >= 1:
            inner = self.resolve_type(t.get_template_argument_type(0), templateDecl, templateArgs)
            # Genuine source-level `std::optional<T>` params are bound via
            # embind's `register_optional<T>`, whose `fromWireType` collapses
            # BOTH `null` and `undefined` to `std::nullopt`. Mirror that wire
            # contract on the TS surface. Val-default `DEFAULT_ON_ABSENCE`
            # slots (rule-5 strict-null) never reach here — their C++ param
            # type is the bare `T`, rendered `?: T` by the trailing-default
            # path — so this widening does not touch the strict-null rows.
            return f"{inner} | null | undefined"

    if container == "array":
        decl = t.get_declaration()
        if is_std_decl(decl) and numArgs >= 1:
            inner = self.resolve_type(t.get_template_argument_type(0), templateDecl, templateArgs)
            if decl.get_num_template_arguments() >= 2:
                arg_kind = decl.get_template_argument_kind(1)
                if arg_kind == clang.cindex.TemplateArgumentKind.INTEGRAL:
                    n = decl.get_template_argument_value(1)
                    if 1 <= n <= 16:
                        return "[" + ", ".join([inner] * n) + "]"
            m = _ARRAY_SIZE_RE.search(t.spelling)
            if m:
                n = int(m.group(1))
                if 1 <= n <= 16:
                    return "[" + ", ".join([inner] * n) + "]"
            return f"{inner}[]"

    if container in (
        "basic_string_view",
        "string_view",
        "wstring_view",
        "u8string_view",
        "u16string_view",
        "u32string_view",
    ):
        return "string"

    if container in ("basic_string",):
        return "string"

    if container in ("NCollection_UtfString",):
        return "string"

    return None
