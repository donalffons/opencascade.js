"""Method-level signature filtering: drop methods that reference excluded types.

A C++ method whose parameter or return type resolves to a class that the
bindgen *itself* excludes from the binding (per `BindgenConfig.is_class_excluded`
or `is_package_excluded` — both AST-driven predicates, no manual list)
should be dropped from the binding entirely. Without this filter, the
resolver falls back to ``unknown`` for those positions and we end up with
TS signatures littered with ``unknown`` placeholders that promise
reachability of types the runtime never exposes.

The check is intentionally conservative:

1. Walk parameters in declaration order, then the return type.
2. For each type, peel pointers/references/arrays/handles to a single
   underlying class spelling.
3. Apply ``exclusion_predicate(name)``. If true, return ``(name, position)``
   immediately — first hit wins, position is ``"param 0"`` / ``"param 1"``
   / ``"return"``.
4. Otherwise return ``None`` (method survives the check).

The function returns a *reason tuple* rather than a bare boolean so
downstream emitters can render a ``// dropped: <position> resolves to
excluded type <name>`` JSDoc comment for transparency.

Side-table semantics (``R3_DROPPED_METHODS``):
The wrapped filter installed by ``filters.installer`` records every drop
into a process-global side-table keyed by ``(class_spelling, method_spelling,
overload_displayname)`` so the TS class binder can re-render the dropped
methods as comments at the position they would have been emitted, without
touching the embind output.
"""

from __future__ import annotations

from collections.abc import Callable

import clang.cindex

_HANDLE_SPELLINGS = (
  "opencascade::handle",
  "Handle",
)


def _peel_indirection(t):
  """Peel pointer / reference / array layers, returning the inner type.

  Stops at the first non-indirection layer or after a small recursion
  budget (defensive against pathological types). Returns ``None`` on any
  attribute-access failure so the caller treats the type as opaque and
  the method survives the signature-filter check.
  """
  if t is None:
    return None
  current = t
  for _ in range(8):
    try:
      kind = current.kind
    except Exception:
      return None
    if kind in (
      clang.cindex.TypeKind.LVALUEREFERENCE,
      clang.cindex.TypeKind.RVALUEREFERENCE,
      clang.cindex.TypeKind.POINTER,
    ):
      try:
        current = current.get_pointee()
      except Exception:
        return None
      continue
    if kind in (
      clang.cindex.TypeKind.CONSTANTARRAY,
      clang.cindex.TypeKind.INCOMPLETEARRAY,
      clang.cindex.TypeKind.VARIABLEARRAY,
    ):
      try:
        current = current.get_array_element_type()
      except Exception:
        return None
      continue
    return current
  return None


def _resolve_to_class_decl(t) -> clang.cindex.Cursor | None:
  """Resolve a peeled type to the underlying class declaration cursor.

  Follows typedef chains and unwraps a single level of ``Handle<T>`` /
  ``opencascade::handle<T>`` to the wrapped class so the signature-filter check sees
  through OCCT's pervasive smart-pointer wrapping. Returns the
  ``CLASS_DECL``/``STRUCT_DECL``/``CLASS_TEMPLATE`` cursor or ``None``.
  """
  if t is None:
    return None
  seen = set()
  current = t
  for _ in range(8):
    try:
      decl = current.get_declaration()
    except Exception:
      decl = None
    if decl is not None:
      decl_kind = getattr(decl, "kind", None)
      if decl_kind in (clang.cindex.CursorKind.TYPEDEF_DECL, clang.cindex.CursorKind.TYPE_ALIAS_DECL):
        try:
          underlying = decl.underlying_typedef_type
        except Exception:
          underlying = None
        if underlying is not None and underlying.kind != clang.cindex.TypeKind.INVALID:
          if id(underlying) in seen:
            return None
          seen.add(id(underlying))
          current = _peel_indirection(underlying) or underlying
          continue
      decl_spelling = (decl.spelling or "").strip()
      if decl_spelling in _HANDLE_SPELLINGS:
        try:
          arg_type = current.get_template_argument_type(0)
        except Exception:
          arg_type = None
        if arg_type is not None and arg_type.kind != clang.cindex.TypeKind.INVALID:
          current = _peel_indirection(arg_type) or arg_type
          continue
      if decl_kind in (
        clang.cindex.CursorKind.CLASS_DECL,
        clang.cindex.CursorKind.STRUCT_DECL,
        clang.cindex.CursorKind.CLASS_TEMPLATE,
      ):
        return decl
    try:
      canonical = current.get_canonical()
    except Exception:
      canonical = None
    if canonical is None or canonical is current:
      return None
    if id(canonical) in seen:
      return None
    seen.add(id(canonical))
    current = _peel_indirection(canonical) or canonical
  return None


def _excluded_class_for_type(
  t,
  exclusion_predicate: Callable[[str], bool],
) -> str | None:
  """Return the excluded class spelling for ``t`` or ``None``.

  Also walks one level of template arguments on the peeled type so
  ``NCollection_Sequence<MathOpt_Foo>`` triggers when ``MathOpt_Foo`` is
  excluded — element types travel through the API surface the same as
  the container itself, so leaking them via ``unknown`` is just as bad
  as leaking the container.
  """
  if t is None:
    return None

  peeled = _peel_indirection(t) or t

  decl = _resolve_to_class_decl(peeled)
  if decl is not None:
    name = (decl.spelling or "").strip()
    if name and exclusion_predicate(name):
      return name

  try:
    num_args = peeled.get_num_template_arguments()
  except Exception:
    num_args = -1
  if num_args is None:
    num_args = -1

  for i in range(max(0, num_args)):
    try:
      arg_type = peeled.get_template_argument_type(i)
    except Exception:
      continue
    if arg_type is None or arg_type.kind == clang.cindex.TypeKind.INVALID:
      continue
    arg_decl = _resolve_to_class_decl(_peel_indirection(arg_type) or arg_type)
    if arg_decl is None:
      continue
    arg_name = (arg_decl.spelling or "").strip()
    if arg_name and exclusion_predicate(arg_name):
      return arg_name

  return None


def signature_references_excluded_class(
  method_cursor,
  exclusion_predicate: Callable[[str], bool],
) -> tuple[str, str] | None:
  """Return ``(excluded_name, position)`` if the signature references an
  excluded class, otherwise ``None``.

  ``position`` is one of:
    - ``"param 0"``, ``"param 1"``, ... in declaration order
    - ``"return"`` for the result type

  First hit wins. Parameters are checked left-to-right before the
  return type so the diagnostic surfaces the leftmost offender — the one
  a consumer would notice first when reading the signature.

  ``exclusion_predicate`` is any callable taking a class spelling string
  and returning a bool. The intended caller wraps
  ``BindgenConfig.is_class_excluded`` (or a composition with package /
  prefix exclusion) so the signature filter stays generic — no manual class list, no
  hard-coded prefix family.
  """
  if method_cursor is None:
    return None

  try:
    args = list(method_cursor.get_arguments())
  except Exception:
    args = []

  for idx, arg in enumerate(args):
    try:
      arg_type = arg.type
    except Exception:
      continue
    excluded = _excluded_class_for_type(arg_type, exclusion_predicate)
    if excluded is not None:
      return (excluded, f"param {idx}")

  try:
    ret_type = method_cursor.result_type
  except Exception:
    ret_type = None
  if ret_type is not None:
    excluded = _excluded_class_for_type(ret_type, exclusion_predicate)
    if excluded is not None:
      return (excluded, "return")

  return None


# ---------------------------------------------------------------------------
# Side-table for the TypeScript transparency mitigation.
#
# `filters.installer.config_filterMethod` writes here when the signature filter drops a
# method. `codegen.bindings.Bindings.processClass` reads from here in its
# emit loop (via `pop_dropped_method_reasons`) so the TS subclass can
# render `// dropped: <position> resolves to excluded type <name>`
# comments at the spot the method would have been emitted. The Embind
# subclass overrides the renderer to a no-op — the .cpp output stays
# binding-only, no comments.
#
# Keyed by `(class_spelling, method_displayname)` to disambiguate
# overloads. We pop on read so a single drop is rendered exactly once
# even when both Embind and TS visit the same class.
# ---------------------------------------------------------------------------

R3_DROPPED_METHODS: dict = {}


def record_dropped_method(class_spelling: str, method_displayname: str, reason: tuple[str, str]) -> None:
  """Record a signature-filter drop. ``reason`` is ``(excluded_name, position)``.

  Idempotent: the wrapped filter is invoked once per `processClass` call
  (Embind and TypeScript binders run independently, sharing the loop in
  `Bindings.processClass`). Duplicate `(name, position)` reasons from
  successive calls are coalesced so the TS rendering stays clean.
  """
  key = (class_spelling, method_displayname)
  existing = R3_DROPPED_METHODS.setdefault(key, [])
  if reason not in existing:
    existing.append(reason)


def peek_dropped_method_reasons(class_spelling: str, method_displayname: str) -> list[tuple[str, str]]:
  """Look up the drop reasons recorded for a method without consuming them."""
  return list(R3_DROPPED_METHODS.get((class_spelling, method_displayname), ()))


def pop_dropped_method_reasons(class_spelling: str, method_displayname: str) -> list[tuple[str, str]]:
  """Remove and return the drop reasons recorded for a method."""
  key = (class_spelling, method_displayname)
  return R3_DROPPED_METHODS.pop(key, [])


def clear_dropped_methods() -> None:
  """Reset the side-table — primarily for hermetic test setup/teardown."""
  R3_DROPPED_METHODS.clear()
