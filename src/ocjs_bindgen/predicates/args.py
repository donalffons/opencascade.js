"""Argument-shape predicates for output-param dispatch.

Extracted from `src/bindings.py` lines 336-461 as part of Phase 1 PR 1.3 of
the OCJS Bindgen Modular Refactor. Behaviour preserved bit-for-bit.

These predicates drive the RBV (return-by-value) envelope codegen — they
classify each C++ argument so the codegen knows whether to:

  * keep the arg in the JS-visible signature and copy it back via the
    envelope (primitive/enum input-passthrough),
  * keep the arg in the JS-visible signature and mutate it in place
    (class input-passthrough),
  * elide the arg entirely from the JS-visible signature (handle output
    elision — OCCT's contract guarantees the input is never read).

The split with `predicates/types.py` follows a consistent convention: pure
*type*-shape questions (built-in, C-string, raw pointer) live in `types`;
*argument*-shape questions (output param, handle param, etc.) live here.
"""

from __future__ import annotations

import clang.cindex

from .classes import _isDefaultConstructibleClass
from .types import builtInTypes


def _isHandleType(pointee) -> bool:
    """Check if a type is `opencascade::handle<T>` or `Handle(T)`."""
    decl = pointee.get_declaration()
    if decl is None:
        return False
    if decl.spelling == "handle":
        parent = decl.semantic_parent
        if parent is not None and parent.spelling in ("opencascade", "occ"):
            return True
    if pointee.get_num_template_arguments() == 1:
        if decl.spelling == "handle":
            return True
    return False


def isClassOutputParam(arg_type) -> bool:
    """Non-const lvalue reference to a default-constructible class/struct type
    (excluding handles, which are detected separately).
    """
    if arg_type.kind != clang.cindex.TypeKind.LVALUEREFERENCE:
        return False
    pointee = arg_type.get_pointee()
    if pointee.is_const_qualified():
        return False
    if pointee.kind == clang.cindex.TypeKind.POINTER:
        return False
    canonical = pointee.get_canonical()
    if canonical.spelling in builtInTypes:
        return False
    if (
        pointee.kind == clang.cindex.TypeKind.ENUM
        or canonical.kind == clang.cindex.TypeKind.ENUM
    ):
        return False
    if _isHandleType(pointee):
        return False
    return _isDefaultConstructibleClass(pointee)


def isOutputParam(arg_type) -> bool:
    """Non-const lvalue reference to primitive, enum, handle, or default-
    constructible class = output parameter. Excludes pointer references
    (`char*&`, etc.) which need C-string or `val` wrapping instead.

    The class branch enables input-passthrough RBV for user-defined class
    types (`gp_Pnt`, `gp_Vec`, `Bnd_Box`, …): the caller supplies the
    instance, C++ mutates it in place, and the JS-visible signature retains
    the parameter rather than echoing it via the return envelope.
    """
    if arg_type.kind != clang.cindex.TypeKind.LVALUEREFERENCE:
        return False
    pointee = arg_type.get_pointee()
    if pointee.is_const_qualified():
        return False
    if pointee.kind == clang.cindex.TypeKind.POINTER:
        return False
    canonical = pointee.get_canonical()
    if canonical.spelling in builtInTypes:
        return True
    if (
        pointee.kind == clang.cindex.TypeKind.ENUM
        or canonical.kind == clang.cindex.TypeKind.ENUM
    ):
        return True
    if _isHandleType(pointee):
        return True
    if _isDefaultConstructibleClass(pointee):
        return True
    return False


def isHandleOutputParam(arg_type) -> bool:
    """Non-const lvalue reference to `handle<T>` specifically."""
    if arg_type.kind != clang.cindex.TypeKind.LVALUEREFERENCE:
        return False
    pointee = arg_type.get_pointee()
    if pointee.is_const_qualified():
        return False
    return _isHandleType(pointee)


def isPrimitiveOutputParam(arg_type) -> bool:
    """Non-const lvalue reference to builtin type or enum."""
    if arg_type.kind != clang.cindex.TypeKind.LVALUEREFERENCE:
        return False
    pointee = arg_type.get_pointee()
    if pointee.is_const_qualified():
        return False
    canonical = pointee.get_canonical()
    return (
        canonical.spelling in builtInTypes
        or pointee.kind == clang.cindex.TypeKind.ENUM
        or canonical.kind == clang.cindex.TypeKind.ENUM
    )


def shouldStripParam(arg_type, method) -> bool:
    """Whether to remove the param from the JS-visible signature.

    The codegen applies a three-way decision tree to each output param:

      - Primitive/enum output (input-passthrough): stays as JS arg; value
        copies in and an updated copy comes back via the envelope's named
        field.
      - Class output (`gp_Pnt&`, `Bnd_Box&`, …): stays as JS arg; the caller
        supplies the instance and the C++ lambda mutates it in place via
        `*<arg>.as<T*>(allow_raw_pointers())`. It is NOT echoed in the
        envelope.
      - `Handle<T>` output (input elision): REMOVED from the JS-visible
        surface. OCCT's contract guarantees non-const `Handle<T>&` is
        output-only (never read by C++), so the caller's input is gratuitous.
        The C++ codegen allocates a stack-local null Handle inside the
        `optional_override` lambda instead; the resulting wrapper is
        surfaced as a container field whose lifetime is owned by the
        envelope's `[Symbol.dispose]`.

    Flipping this predicate to return True for `isHandleOutputParam`
    propagates the elision through every downstream arity, kept-name, and
    JSDoc path (see bindings.py:501, 560, 1726, 1735, 1749, 2507, 4088, 4116,
    4347, 4419, 4462). The C++ lambda emitter (`_emitOutputParamBinding`)
    does its own per-arg inspection and emits the stack-local declaration
    for Handle outputs and the `val::as<T*>` deref for class outputs.
    """
    return isHandleOutputParam(arg_type)
