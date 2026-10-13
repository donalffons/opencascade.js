"""R7 — libclang diagnostic-noise suppression.

`ocjs_bindgen.ast.parse.parse` pairs the linker-only `-stdlib=libc++` flag
with `-Wno-unused-command-line-argument` so libclang stops re-broadcasting
the noise on every parse run. The diagnostic was contributing ~600 spurious
warning lines to the bindgen output and obscured genuine include-path /
PCH issues. These tests pin the suppression so future flag refactors don't
silently regress it.

Hermetic: parses a minimal custom C++ snippet that doesn't depend
on the OCCT include tree (the diagnostic fires from the libclang invocation
itself, not from header resolution). Skipped when libclang isn't available
in the test environment.
"""

from __future__ import annotations

import pytest

try:  # pragma: no cover - import-guard, exercised in skip path
  import clang.cindex  # noqa: F401

  from ocjs_bindgen.ast.parse import parse

  _HAS_LIBCLANG = True
except Exception:  # noqa: BLE001 — covers libclang.so not on LD path too
  _HAS_LIBCLANG = False


pytestmark = pytest.mark.skipif(
  not _HAS_LIBCLANG,
  reason="libclang.so not available in test environment",
)


def _collect_diagnostics(custom_cpp_source: str = ""):
  """Run `parse` against custom C++ and return the diagnostic
  spelling list. Wrapped so the test body asserts on a flat list of
  strings rather than the libclang Diagnostic objects (which don't
  marshall through pytest's assertion-rewriter cleanly).

  Failure modes that aren't the test concern (missing include paths,
  freetype-not-found, OCCT-deps-not-cloned) are passed through as
  diagnostic entries — the test asserts ONE specific token absence,
  not the absence of every diagnostic.
  """
  tu = parse(custom_cpp_source)
  return [d.format() for d in tu.diagnostics]


def test_libclang_no_unused_command_line_argument() -> None:
  """The `-Wunused-command-line-argument` diagnostic for `-stdlib=libc++`
  must NOT appear in the parse output. This is the smoking-gun token the
  R7 suppression targets — its presence proves
  `-Wno-unused-command-line-argument` was not effective (or was removed
  from the flag list).
  """
  diagnostics = _collect_diagnostics("")
  unused_arg_hits = [
    d for d in diagnostics if "unused-command-line-argument" in d
  ]
  assert unused_arg_hits == [], (
    "R7 regression — libclang is re-broadcasting `-stdlib=libc++` as an "
    "`-Wunused-command-line-argument` diagnostic again. Verify "
    "`-Wno-unused-command-line-argument` is still in the flag list at "
    "`ocjs_bindgen.ast.parse.parse`. Offending diagnostics:\n  - "
    + "\n  - ".join(unused_arg_hits[:5])
  )


def test_libclang_no_unused_argument_with_additional_cpp_code() -> None:
  """Same suppression must hold when custom C++ is non-empty
  (the custom-code path also flows through `parse`). Pins the contract
  that the flag list is shared across both invocation surfaces.
  """
  snippet = "// R7 hermetic probe — empty TU is sufficient\n"
  diagnostics = _collect_diagnostics(snippet)
  assert not any(
    "unused-command-line-argument" in d for d in diagnostics
  ), (
    "R7 regression on the custom C++ path — see "
    "`test_libclang_no_unused_command_line_argument` for remediation."
  )
