"""Unit tests for `ocjs_bindgen.resolver.strategies.function_proto` (R7).

Audit recommendation R7 — render OCCT C-style function-pointer typedefs as
TypeScript callable signatures instead of letting them collapse to
``unknown``. The strategy is small but exercised on a handful of orthogonal
shapes:

- A direct ``FUNCTIONPROTO`` (rare: only on raw function references).
- The typical ``POINTER -> FUNCTIONPROTO`` shape produced by
  ``typedef R (*Name)(A, B);``.
- A typedef chain where the canonical type carries the ``FUNCTIONPROTO``.
- A signature with no arguments (``typedef void (*Name)();``).
- A signature where one argument fails to resolve, which must fall through
  to the canonical fallback so the diagnostics report records the failure.
"""

from __future__ import annotations

import clang.cindex

from ocjs_bindgen.resolver.strategies.function_proto import resolve_function_proto

# `_MockType` is exposed via the conftest module (imported by pytest's
# autouse mechanism). Access it through the `cursor_factory` fixture's
# default cursor.type or import the underlying class directly.
from tests.conftest import _MockType  # type: ignore[attr-defined]


class _StubResolverContext:
  """Minimal `ResolverContext` impl for R7 tests.

  The R7 strategy only calls `ctx._strip_qualifiers` and recurses through
  `ctx.resolve_type`, so we stub those two and capture the resolved
  arguments so tests can assert recursion order and stop conditions.
  """

  def __init__(self, *, resolve_table: dict[str, str]) -> None:
    self._resolve_table = resolve_table
    self.resolve_calls: list[str] = []

  def _strip_qualifiers(self, clang_type):
    return clang_type

  def resolve_type(self, clang_type, templateDecl=None, templateArgs=None) -> str:
    self.resolve_calls.append(clang_type.spelling)
    return self._resolve_table.get(clang_type.spelling, "unknown")


def _make_proto(*, args: list[_MockType], result: _MockType) -> _MockType:
  """Build a `_MockType` that looks like a FUNCTIONPROTO."""
  return _MockType(
    spelling="(*)(...)",
    kind=clang.cindex.TypeKind.FUNCTIONPROTO,
    argument_types=args,
    result_type=result,
  )


def _make_pointer_to_proto(proto: _MockType) -> _MockType:
  """Build a `_MockType` that looks like POINTER -> FUNCTIONPROTO."""
  return _MockType(
    spelling="(*)(...)",
    kind=clang.cindex.TypeKind.POINTER,
    pointee=proto,
  )


def test_direct_function_proto_renders_callable_signature() -> None:
  proto = _make_proto(
    args=[
      _MockType(spelling="Standard_Real"),
      _MockType(spelling="Standard_Boolean"),
    ],
    result=_MockType(spelling="Standard_Integer"),
  )
  ctx = _StubResolverContext(resolve_table={
    "Standard_Real": "number",
    "Standard_Boolean": "boolean",
    "Standard_Integer": "number",
  })
  out = resolve_function_proto(ctx, proto)
  assert out == "((arg0: number, arg1: boolean) => number)"


def test_pointer_to_function_proto_renders_callable_signature() -> None:
  # `typedef IFSelect_ReturnStatus (*IFSelect_ActFunc)(const Handle(IFSelect_SessionPilot)&);`
  # The bindgen sees the typedef as POINTER -> FUNCTIONPROTO.
  proto = _make_proto(
    args=[_MockType(spelling="Handle_IFSelect_SessionPilot")],
    result=_MockType(spelling="IFSelect_ReturnStatus"),
  )
  pointer = _make_pointer_to_proto(proto)
  ctx = _StubResolverContext(resolve_table={
    "Handle_IFSelect_SessionPilot": "IFSelect_SessionPilot",
    "IFSelect_ReturnStatus": "IFSelect_ReturnStatus",
  })
  out = resolve_function_proto(ctx, pointer)
  assert out == "((arg0: IFSelect_SessionPilot) => IFSelect_ReturnStatus)"


def test_canonical_function_proto_unwrapped() -> None:
  # When a typedef alias hides the FUNCTIONPROTO, the canonical type is
  # the one carrying the function shape. Ensure the strategy peels it.
  proto = _make_proto(
    args=[_MockType(spelling="Standard_Real")],
    result=_MockType(spelling="void"),
  )
  alias = _MockType(
    spelling="MoniTool_ValueInterpret",
    kind=clang.cindex.TypeKind.TYPEDEF,
    canonical=_make_pointer_to_proto(proto),
  )
  ctx = _StubResolverContext(resolve_table={
    "Standard_Real": "number",
    "void": "void",
  })
  out = resolve_function_proto(ctx, alias)
  assert out == "((arg0: number) => void)"


def test_no_argument_signature() -> None:
  # `typedef void (*Cleanup)();` should render as `(() => void)`.
  proto = _make_proto(args=[], result=_MockType(spelling="void"))
  ctx = _StubResolverContext(resolve_table={"void": "void"})
  out = resolve_function_proto(ctx, _make_pointer_to_proto(proto))
  assert out == "(() => void)"


def test_unknown_argument_falls_through_to_canonical_fallback() -> None:
  # If any argument resolves to `unknown`, R7 must return None so the
  # canonical fallback can take over and record the failure in the
  # diagnostics report. This keeps the failure visible.
  proto = _make_proto(
    args=[
      _MockType(spelling="Standard_Real"),
      _MockType(spelling="MysteryType"),
    ],
    result=_MockType(spelling="void"),
  )
  ctx = _StubResolverContext(resolve_table={
    "Standard_Real": "number",
    "void": "void",
    # MysteryType deliberately absent → ctx returns "unknown"
  })
  out = resolve_function_proto(ctx, _make_pointer_to_proto(proto))
  assert out is None


def test_unknown_return_falls_through_to_canonical_fallback() -> None:
  proto = _make_proto(
    args=[_MockType(spelling="Standard_Real")],
    result=_MockType(spelling="MysteryReturn"),
  )
  ctx = _StubResolverContext(resolve_table={"Standard_Real": "number"})
  out = resolve_function_proto(ctx, _make_pointer_to_proto(proto))
  assert out is None


def test_non_function_type_returns_none() -> None:
  # Anything that isn't a FUNCTIONPROTO (or pointer-to-FUNCTIONPROTO)
  # must short-circuit so the orchestrator can continue with normal
  # resolution.
  ctx = _StubResolverContext(resolve_table={})
  ordinary = _MockType(spelling="gp_Pnt", kind=clang.cindex.TypeKind.RECORD)
  assert resolve_function_proto(ctx, ordinary) is None
  assert ctx.resolve_calls == []


def test_pointer_to_non_function_returns_none() -> None:
  # `gp_Pnt*` is a pointer but the pointee is RECORD, not FUNCTIONPROTO.
  ctx = _StubResolverContext(resolve_table={})
  pointee = _MockType(spelling="gp_Pnt", kind=clang.cindex.TypeKind.RECORD)
  pointer = _MockType(
    spelling="gp_Pnt *",
    kind=clang.cindex.TypeKind.POINTER,
    pointee=pointee,
  )
  assert resolve_function_proto(ctx, pointer) is None
  assert ctx.resolve_calls == []


def test_multi_argument_signature_preserves_argument_order() -> None:
  # `typedef bool (*ShapeProcess_OperFunc)(
  #     const Handle(ShapeProcess_Context)&, const Message_ProgressRange&);`
  proto = _make_proto(
    args=[
      _MockType(spelling="Handle_ShapeProcess_Context"),
      _MockType(spelling="Message_ProgressRange"),
    ],
    result=_MockType(spelling="bool"),
  )
  ctx = _StubResolverContext(resolve_table={
    "Handle_ShapeProcess_Context": "ShapeProcess_Context",
    "Message_ProgressRange": "Message_ProgressRange",
    "bool": "boolean",
  })
  out = resolve_function_proto(ctx, _make_pointer_to_proto(proto))
  assert out == (
    "((arg0: ShapeProcess_Context, arg1: Message_ProgressRange) => boolean)"
  )
  # Argument order in `resolve_type` calls must reflect declaration order
  # so positional naming (arg0, arg1, ...) is correct.
  assert ctx.resolve_calls == [
    "Handle_ShapeProcess_Context",
    "Message_ProgressRange",
    "bool",
  ]
