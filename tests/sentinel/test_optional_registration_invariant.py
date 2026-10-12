"""Every `std::optional<T>` a binding fragment emits is registered in that TU.

embind needs `register_optional<T>()` before any binding that takes or returns
`std::optional<T>` can be called; without it the first call raises
`Cannot construct ... due to unbound types`. Registration is global per wasm
module, so a fragment that forgets it still works whenever some other linked
fragment registers the same `T`. That is why the full package hid the gap
(issue #39) while custom builds with fewer classes hit it.

The invariant is checked per fragment, so it does not depend on what else a
build links. It runs against the fresh `build/bindings/` tree when one exists
(CI generates it before running this suite) and against the frozen sentinel
baseline otherwise.
"""

from __future__ import annotations

from pathlib import Path

import pytest
from sentinels import BASELINE_PER_HEADER, BUILD_BINDINGS

_OPTIONAL = "std::optional<"
_REGISTER = "register_optional<"


def _template_args(source: str, marker: str) -> set[str]:
  """Return the bracket-balanced template argument after every `marker`."""
  found: set[str] = set()
  start = source.find(marker)
  while start != -1:
    begin = start + len(marker)
    depth = 1
    pos = begin
    while depth and pos < len(source):
      ch = source[pos]
      if ch == "<":
        depth += 1
      elif ch == ">":
        depth -= 1
      pos += 1
    found.add(" ".join(source[begin:pos - 1].split()))
    start = source.find(marker, pos)
  return found


def _fragments() -> list[Path]:
  root = BUILD_BINDINGS if BUILD_BINDINGS.is_dir() and any(BUILD_BINDINGS.iterdir()) else BASELINE_PER_HEADER
  return sorted(root.rglob("*.cpp"))


def test_template_arg_scanner_balances_nested_brackets() -> None:
  source = "std::optional<double> a; std::optional<opencascade::handle<Geom_Curve>> b;"
  assert _template_args(source, _OPTIONAL) == {"double", "opencascade::handle<Geom_Curve>"}


def test_every_emitted_optional_type_is_registered() -> None:
  fragments = _fragments()
  assert fragments, "no binding fragments found to check"
  missing: list[str] = []
  for fragment in fragments:
    source = fragment.read_text(encoding="utf-8")
    if _OPTIONAL not in source:
      continue
    unregistered = _template_args(source, _OPTIONAL) - _template_args(source, _REGISTER)
    if unregistered:
      missing.append(f"{fragment}: {', '.join(sorted(unregistered))}")
  if missing:
    pytest.fail(
      "std::optional<T> emitted without register_optional<T>() in the same fragment:\n  "
      + "\n  ".join(missing[:50])
      + (f"\n  ... and {len(missing) - 50} more" if len(missing) > 50 else "")
    )
