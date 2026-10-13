"""Top-level test configuration for the OCJS bindgen test suites.

PR 3.1 — provides:
  * `sys.path` shims so `tests/unit` and `tests/integration` can import
    `ocjs_bindgen.*` without a `pip install -e .`.
  * `cursor_mock(...)` factory used by `tests/unit/*` to fabricate
    libclang AST cursors with controlled `kind`, `spelling`, `parent`,
    `children`, and arbitrary attribute overrides.

The fast hermetic tests should never need a real translation unit; the
real libclang AST is exercised only by the byte-parity sentinels in
`tests/sentinel/` and the per-fragment snapshot in `tests/integration/`.
"""

from __future__ import annotations

import sys
from collections.abc import Iterable, Sequence
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any

import pytest

# Ensure `src/ocjs_bindgen/...` and the legacy `src/filter` and `src/`
# script directories resolve when tests run from the repo root or from
# inside `tests/`. Mirrors the live binding generator's import path.
_REPO_ROOT = Path(__file__).resolve().parent.parent
_SRC_DIR = _REPO_ROOT / "src"
for path in (str(_SRC_DIR),):
  if path not in sys.path:
    sys.path.insert(0, path)


# ----------------------------------------------------------------------------
# `cursor_mock` — minimal libclang AST stand-in.
# ----------------------------------------------------------------------------

class _MockType:
  """Stand-in for `clang.cindex.Type`. The real type carries a deep AST,
  but for unit tests we only need `spelling`, `kind`, and a handful of
  resolution methods to be callable on demand. Tests pass keyword
  overrides for whichever fields they care about.
  """

  def __init__(
    self,
    spelling: str = "",
    kind: Any = None,
    canonical: _MockType | None = None,
    pointee: _MockType | None = None,
    declaration: _MockCursor | None = None,
    is_const: bool = False,
    template_args: Sequence[Any] | None = None,
    argument_types: Sequence[_MockType] | None = None,
    result_type: _MockType | None = None,
  ) -> None:
    self.spelling = spelling
    self.kind = kind
    self._canonical = canonical
    self._pointee = pointee
    self._declaration = declaration
    self._is_const = is_const
    self._template_args = list(template_args) if template_args is not None else []
    # FUNCTIONPROTO support — `argument_types` and `result_type` model
    # what `clang.cindex.Type` exposes for `(*Func)(A, B) -> R` typedefs.
    self._argument_types = list(argument_types) if argument_types is not None else []
    self._result_type = result_type

  def get_canonical(self) -> _MockType:
    return self._canonical if self._canonical is not None else self

  def get_pointee(self) -> _MockType:
    return self._pointee if self._pointee is not None else _MockType()

  def get_declaration(self) -> _MockCursor:
    return self._declaration if self._declaration is not None else cursor_mock(spelling="", kind=None)

  def is_const_qualified(self) -> bool:
    return self._is_const

  def get_num_template_arguments(self) -> int:
    return len(self._template_args)

  def get_template_argument_type(self, idx: int) -> _MockType:
    return self._template_args[idx]

  def argument_types(self) -> list[_MockType]:
    """Stand-in for `clang.cindex.Type.argument_types()` on FUNCTIONPROTO."""
    return list(self._argument_types)

  def get_result(self) -> _MockType:
    """Stand-in for `clang.cindex.Type.get_result()` on FUNCTIONPROTO."""
    return self._result_type if self._result_type is not None else _MockType()


@dataclass
class _MockCursor:
  """Stand-in for `clang.cindex.Cursor`.

  Tests typically configure `kind`, `spelling`, optional `parent`, and a
  list of child cursors. Additional attributes (e.g. `displayname`,
  `access_specifier`) can be poked directly via the dataclass mutability.
  """
  spelling: str = ""
  kind: Any = None
  parent: _MockCursor | None = None
  children: list[_MockCursor] = field(default_factory=list)
  type: _MockType = field(default_factory=_MockType)
  displayname: str = ""
  access_specifier: Any = None
  semantic_parent: _MockCursor | None = None
  lexical_parent: _MockCursor | None = None

  def get_children(self) -> Iterable[_MockCursor]:
    return iter(self.children)

  def get_arguments(self) -> Iterable[_MockCursor]:
    return iter([c for c in self.children if getattr(c, "kind", None) and getattr(c.kind, "name", "") == "PARM_DECL"])

  def get_definition(self) -> _MockCursor:
    return self

  def is_const_method(self) -> bool:
    return False

  def is_static_method(self) -> bool:
    return False


def cursor_mock(
  *,
  kind: Any = None,
  spelling: str = "",
  parent: _MockCursor | None = None,
  children: Sequence[_MockCursor] | None = None,
  type: _MockType | None = None,
  **overrides: Any,
) -> _MockCursor:
  """Build a minimal `_MockCursor` for unit tests.

  Example::

    cur = cursor_mock(
      kind=clang.cindex.CursorKind.CLASS_DECL,
      spelling="gp_Pnt",
      children=[
        cursor_mock(kind=clang.cindex.CursorKind.CXX_METHOD, spelling="X"),
      ],
    )
  """
  cursor = _MockCursor(
    spelling=spelling,
    kind=kind,
    parent=parent,
    children=list(children or []),
    type=type if type is not None else _MockType(spelling=spelling),
  )
  for attr, value in overrides.items():
    setattr(cursor, attr, value)
  if cursor.semantic_parent is None:
    cursor.semantic_parent = parent
  if cursor.lexical_parent is None:
    cursor.lexical_parent = parent
  return cursor


@pytest.fixture
def cursor_factory():
  """Pytest fixture handle for `cursor_mock`.

  Tests preferring fixture injection (rather than direct import) can
  receive the factory through this fixture::

    def test_naming(cursor_factory):
      cur = cursor_factory(spelling="Standard_Real")
      ...
  """
  return cursor_mock
