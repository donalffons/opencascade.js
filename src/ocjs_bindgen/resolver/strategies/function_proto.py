"""Function-pointer typedef resolver strategy.

OCCT exposes a small number of C-style function-pointer typedefs as method
parameters or static members, e.g.::

    typedef IFSelect_ReturnStatus (*IFSelect_ActFunc)(const Handle(IFSelect_SessionPilot)&);
    typedef Handle(TCollection_HAsciiString) (*MoniTool_ValueInterpret)(
        const Handle(Standard_Transient)&, const Standard_Boolean);
    typedef bool (*ShapeProcess_OperFunc)(
        const Handle(ShapeProcess_Context)&, const Message_ProgressRange&);

Without this strategy these collapse to ``unknown`` because the canonical
fallback has no branch for ``clang.cindex.TypeKind.FUNCTIONPROTO``. The
strategy emits a TypeScript callable signature
``((arg0: A, arg1: B) => R)`` so consumers can pass real JS callbacks
across the embind boundary.

The strategy is intentionally conservative: if any argument or the return
type still resolves to ``unknown``, the rewriter returns ``None`` and lets
the canonical fallback take it (which collects it into the diagnostics
report so the failure remains visible).
"""

from __future__ import annotations

import clang.cindex


def resolve_function_proto(
    ctx,
    clang_type,
    templateDecl=None,
    templateArgs=None,
) -> str | None:
    """Render a C-style function pointer typedef as a TypeScript callable.

    Returns the rendered TS signature ``((arg0: A, arg1: B) => R)`` or
    ``None`` if ``clang_type`` is not a ``FUNCTIONPROTO`` (or pointer-to
    ``FUNCTIONPROTO``), or if any argument / return type fails to resolve.
    Returning ``None`` keeps the canonical fallback path intact so the
    diagnostics report still records the failure.
    """
    proto = _extract_function_proto(ctx, clang_type)
    if proto is None:
        return None

    arg_types = list(proto.argument_types())
    arg_ts = []
    for at in arg_types:
        rendered = ctx.resolve_type(at, templateDecl, templateArgs)
        if rendered == "unknown":
            return None
        arg_ts.append(rendered)

    ret_ts = ctx.resolve_type(proto.get_result(), templateDecl, templateArgs)
    if ret_ts == "unknown":
        return None

    args_signature = ", ".join(f"arg{i}: {at}" for i, at in enumerate(arg_ts))
    return f"(({args_signature}) => {ret_ts})"


def _extract_function_proto(ctx, clang_type):
    """Return the underlying ``FUNCTIONPROTO`` for ``clang_type`` or ``None``.

    Handles the three shapes OCCT actually emits:
      1. Direct ``FUNCTIONPROTO`` (rare — only seen on raw function refs).
      2. ``POINTER`` whose pointee is ``FUNCTIONPROTO`` (the typical
         ``typedef R (*Name)(...)`` form).
      3. The same after qualifier stripping, since the canonical type may
         be wrapped in ``const``/ref qualifiers via the typedef alias.
    """
    candidates = [clang_type, ctx._strip_qualifiers(clang_type)]
    for candidate in candidates:
        if candidate is None:
            continue
        proto = _try_unwrap(candidate)
        if proto is not None:
            return proto
        canonical = candidate.get_canonical() if hasattr(candidate, "get_canonical") else None
        if canonical is not None:
            proto = _try_unwrap(canonical)
            if proto is not None:
                return proto
    return None


def _try_unwrap(clang_type):
    if clang_type.kind == clang.cindex.TypeKind.FUNCTIONPROTO:
        return clang_type
    if clang_type.kind == clang.cindex.TypeKind.POINTER:
        pointee = clang_type.get_pointee()
        if pointee.kind == clang.cindex.TypeKind.FUNCTIONPROTO:
            return pointee
    return None
