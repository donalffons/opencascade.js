"""Built-in type whitelists and primitive type predicates.

Extracted from `src/bindings.py` lines 70-107, 424-427 as part of Phase 1
PR 1.3 of the OCJS Bindgen Modular Refactor. The whitelists mirror the C++
language type catalogue (cppreference.com/w/cpp/language/types) and are kept
as plain lists rather than frozensets because some downstream call sites use
`in` against the canonical-type spelling (which has stable string form).

Behaviour preserved bit-for-bit from the legacy module.
"""

from __future__ import annotations

import re

import clang.cindex

# Per https://en.cppreference.com/w/cpp/language/types
builtInTypes: list[str] = [
    # Integer types
    "int",
    "short",
    "short int",
    "signed short",
    "signed short int",
    "unsigned short",
    "unsigned short int",
    "int",
    "signed",
    "signed int",
    "unsigned",
    "unsigned int",
    "long",
    "long int",
    "signed long",
    "signed long int",
    "unsigned long",
    "unsigned long int",
    "long long",
    "long long int",
    "signed long long",
    "signed long long int",
    "unsigned long long",
    "unsigned long long int",
    # Boolean
    "bool",
    # Character
    "char",
    "signed char",
    "unsigned char",
    "wchar_t",
    "char16_t",
    "char32_t",
    "char8_t",
    # Floating point
    "float",
    "double",
    "long double",
]

cStringTypes: list[str] = [
    "const char *",
    "const char *const",
    "char *",
    "char *const",
]

unbindablePointerTypes: list[str] = [
    "const char16_t *",
    "const char16_t *const",
    "char16_t *",
    "char16_t *const",
]


def isCString(type) -> bool:
    """True iff `type`'s canonical spelling matches a C-string variant."""
    return type.get_canonical().spelling in cStringTypes


def isRawPointerParam(arg_type) -> bool:
    """True iff `arg_type` canonicalises to a raw pointer.

    Raw pointers cannot be passed from JS via `val::as<T*>()` — Embind forbids
    it — so any C++ argument whose canonical type is a pointer must take a
    different path (val-as-handle, val-as-array, or full elision).
    """
    return arg_type.get_canonical().kind == clang.cindex.TypeKind.POINTER


# Owning std::*string registered by Embind (`_embind_register_std_string` /
# `_embind_register_std_wstring`) keyed by the character type that backs the
# corresponding `std::basic_string_view<CharT>`.
_stringViewOwningString: dict[str, str] = {
    "char": "std::string",
    "char8_t": "std::string",
    "wchar_t": "std::wstring",
    "char16_t": "std::u16string",
    "char32_t": "std::u32string",
}

_stringViewElemRe = re.compile(r"basic_string_view<\s*([A-Za-z0-9_]+)")


def _stripReference(canon):
    """Return the referent of a reference type, otherwise `canon` unchanged."""
    if canon.kind in (
        clang.cindex.TypeKind.LVALUEREFERENCE,
        clang.cindex.TypeKind.RVALUEREFERENCE,
    ):
        return canon.get_pointee()
    return canon


def _stringViewSpellings(type) -> tuple[str, str]:
    """Return the (declared, canonical-after-ref-strip) spellings for `type`.

    Both spellings are inspected because `std::u16string_view` reaches codegen
    either as the libc++ alias (declared spelling carries ``u16string_view``)
    or fully resolved (canonical spelling carries ``basic_string_view`` plus the
    element type). Matching on either keeps detection independent of how a given
    call site obtained the type.
    """
    declared = type.spelling
    try:
        canonical = _stripReference(type.get_canonical()).spelling
    except Exception:
        canonical = declared
    return declared, canonical


def isStringView(type) -> bool:
    """True iff `type` is a `std::basic_string_view<CharT>` (any char width).

    Covers `std::string_view`, `std::u16string_view`, `std::u32string_view`,
    and `std::wstring_view`, with or without a surrounding reference/const
    qualifier, whether the type arrives as the libc++ alias or fully resolved.
    """
    declared, canonical = _stringViewSpellings(type)
    return "string_view" in declared or "basic_string_view" in canonical


def stringViewOwningType(type) -> str | None:
    """Return the owning `std::*string` Embind can convert into `type`.

    Maps a `std::basic_string_view<CharT>` parameter to the registered owning
    string type that backs it (`std::string`, `std::wstring`, `std::u16string`,
    `std::u32string`). Returns ``None`` when `type` is not a string-view.
    """
    declared, canonical = _stringViewSpellings(type)
    if "string_view" not in declared and "basic_string_view" not in canonical:
        return None
    # Prefer the canonical element type; fall back to the declared alias name.
    elem = ""
    try:
        canon = _stripReference(type.get_canonical())
        if "basic_string_view" in canon.spelling and canon.get_num_template_arguments() >= 1:
            elem = canon.get_template_argument_type(0).spelling
    except Exception:
        elem = ""
    if not elem:
        match = _stringViewElemRe.search(canonical)
        if match:
            elem = match.group(1)
    if not elem:
        if "u16string_view" in declared:
            elem = "char16_t"
        elif "u32string_view" in declared:
            elem = "char32_t"
        elif "wstring_view" in declared:
            elem = "wchar_t"
        else:
            elem = "char"
    return _stringViewOwningString.get(elem, "std::string")


def stringViewOwningCast(val_name: str, type) -> str | None:
    """Embind cast lifting a JS string (`val_name`) to a `std::*string_view` arg.

    Embind cannot convert a JS value into a non-owning `std::basic_string_view`
    (there is no registered binding for it), but it does register the owning
    string types. We therefore materialise the matching owning `std::*string`
    temporary, which implicitly converts to the expected `string_view` and
    outlives the enclosing call expression — so a callee that copies the data
    (e.g. an OCCT string constructor) observes valid contents.

    Returns ``None`` when `type` is not a string-view, leaving the caller's
    normal cast path untouched.
    """
    owning = stringViewOwningType(type)
    if owning is None:
        return None
    return f"{val_name}.as<{owning}>()"
