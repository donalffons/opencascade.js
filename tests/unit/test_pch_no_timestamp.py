"""Regression guard: PCH must never embed source-file mtimes.

This pins the fix for the recurring failure mode where clang embeds
`pch.h`'s mtime inside `pch.h.pch` and then refuses to use the PCH after any
cache layer (Nx, Docker image layer, named volumes, ccache) restores the
header with a fresh mtime. The symptom is thousands of false `fatal error:
file '<header>' has been modified since the precompiled header ... was
built: mtime changed` failures during `compile-bindings`.

The architectural fix lives in
`ocjs_bindgen.config.paths.buildPch` and is `-Xclang -fno-pch-timestamp`.
This test patches `subprocess.run` so it never invokes emcc, captures the
exact command list `buildPch` constructs, and asserts the flag pair is
present in order. Catches accidental removal in <1 ms with no toolchain.

See `paths.py:_assert_pch_survives_mtime_bump` for the runtime guard that
fires at PCH-build time when emcc is available.
"""

from __future__ import annotations

import os
from pathlib import Path
from typing import Any

import pytest

from ocjs_bindgen.config import paths as paths_module


class _FakeCompleted:
  returncode = 0
  stderr = ""


def _stub_run(*_args: Any, **_kwargs: Any) -> _FakeCompleted:
  return _FakeCompleted()


def test_build_pch_passes_fno_pch_timestamp(tmp_path: Path, monkeypatch: pytest.MonkeyPatch) -> None:
  """`buildPch` MUST pass `-Xclang -fno-pch-timestamp` together, in order."""
  pch_header = tmp_path / "pch.h"
  pch_header.write_text("// placeholder\n")
  pch_file = tmp_path / "pch.h.pch"
  pch_file.write_bytes(b"\x00" * 8)
  monkeypatch.setattr(paths_module, "PCH_HEADER", str(pch_header))
  monkeypatch.setattr(paths_module, "PCH_FILE", str(pch_file))
  monkeypatch.setattr(paths_module, "getFlatIncludePaths", lambda: [str(tmp_path)])
  monkeypatch.setattr(paths_module, "ocIncludeStatements", "")
  monkeypatch.setattr(paths_module, "ocIncludeFiles", [])
  monkeypatch.setattr(paths_module, "write_build_flags", lambda: None)
  monkeypatch.setattr(
    paths_module,
    "_assert_pch_survives_mtime_bump",
    lambda _cmd: None,
  )

  captured: dict[str, list[str]] = {}

  def capture_run(cmd: list[str], **kwargs: Any) -> _FakeCompleted:
    captured["cmd"] = cmd
    Path(cmd[cmd.index("-o") + 1]).write_bytes(b"compiled")
    return _FakeCompleted()

  monkeypatch.setattr(paths_module.subprocess, "run", capture_run)

  paths_module.buildPch(threading="single-threaded")

  cmd = captured["cmd"]
  assert "-Xclang" in cmd, (
    "PCH build command is missing '-Xclang'. The mtime-stripping flag must "
    "be passed as a clang-only argument; without it every cache restore "
    "will reintroduce the 'mtime changed' failure storm. Re-add "
    "'-Xclang -fno-pch-timestamp' to buildPch in paths.py."
  )
  assert "-fno-pch-timestamp" in cmd, (
    "PCH build command is missing '-fno-pch-timestamp'. Restoring this flag "
    "is the only supported way to keep the PCH usable across Nx/Docker/"
    "ccache cache restores. See paths.py:buildPch and the plan at "
    "pch-mtime-eliminate_e887edab.plan.md."
  )

  xclang_idx = cmd.index("-Xclang")
  assert cmd[xclang_idx + 1] == "-fno-pch-timestamp", (
    "'-Xclang' must be immediately followed by '-fno-pch-timestamp'; "
    "otherwise clang treats the flag as a driver-level argument and "
    "silently ignores it."
  )


def test_compile_include_paths_ignore_transient_cmake_scratch(
  tmp_path: Path, monkeypatch: pytest.MonkeyPatch
) -> None:
  flat = tmp_path / "occt-includes"
  cmake = tmp_path / "build" / "occt-cmake" / "include" / "opencascade"
  flat.mkdir()
  cmake.mkdir(parents=True)
  monkeypatch.setattr(paths_module, "FLAT_INCLUDE_DIR", str(flat))
  monkeypatch.setattr(paths_module, "OCJS_ROOT", str(tmp_path))

  include_paths = paths_module.getFlatIncludePaths()

  assert include_paths[0] == str(flat)
  assert str(cmake) not in include_paths


def test_assert_pch_survives_mtime_bump_raises_actionable_error_on_drift(
  tmp_path: Path, monkeypatch: pytest.MonkeyPatch
) -> None:
  """When emcc reports mtime drift the guard must raise a self-contained,
  path-agnostic, actionable RuntimeError naming the fix."""
  pch_header = tmp_path / "pch.h"
  pch_header.write_text("// placeholder\n")
  pch_file = tmp_path / "pch.h.pch"
  pch_file.write_bytes(b"\x00" * 8)
  monkeypatch.setattr(paths_module, "PCH_HEADER", str(pch_header))
  monkeypatch.setattr(paths_module, "PCH_FILE", str(pch_file))

  class _DriftCompleted:
    returncode = 1
    stderr = (
      "fatal error: file 'pch.h' has been modified since the precompiled "
      "header 'pch.h.pch' was built: mtime changed (was 1, now 2)\n"
    )

  monkeypatch.setattr(paths_module.subprocess, "run", lambda *a, **k: _DriftCompleted())

  with pytest.raises(RuntimeError) as excinfo:
    paths_module._assert_pch_survives_mtime_bump(["emcc", "-std=c++17"])

  message = str(excinfo.value)
  assert "-Xclang -fno-pch-timestamp" in message, (
    "Guard error message must name the exact flag the engineer needs to add."
  )
  assert "Action:" in message, "Guard error message must include an action."
  # No transient paths in the message (path-agnostic invariant).
  assert str(pch_header) not in message
  assert str(pch_file) not in message


def test_assert_pch_survives_mtime_bump_passes_when_no_drift(
  tmp_path: Path, monkeypatch: pytest.MonkeyPatch
) -> None:
  """Healthy emcc run (no mtime drift in stderr) must not raise."""
  pch_header = tmp_path / "pch.h"
  pch_header.write_text("// placeholder\n")
  pch_file = tmp_path / "pch.h.pch"
  pch_file.write_bytes(b"\x00" * 8)
  monkeypatch.setattr(paths_module, "PCH_HEADER", str(pch_header))
  monkeypatch.setattr(paths_module, "PCH_FILE", str(pch_file))

  monkeypatch.setattr(paths_module.subprocess, "run", _stub_run)

  paths_module._assert_pch_survives_mtime_bump(["emcc", "-std=c++17"])


def test_assert_pch_survives_mtime_bump_restores_original_mtime(
  tmp_path: Path, monkeypatch: pytest.MonkeyPatch
) -> None:
  """Guard must not leave PCH_HEADER's mtime bumped — that would itself
  cascade into the very failure mode we are protecting against."""
  pch_header = tmp_path / "pch.h"
  pch_header.write_text("// placeholder\n")
  pch_file = tmp_path / "pch.h.pch"
  pch_file.write_bytes(b"\x00" * 8)
  monkeypatch.setattr(paths_module, "PCH_HEADER", str(pch_header))
  monkeypatch.setattr(paths_module, "PCH_FILE", str(pch_file))
  monkeypatch.setattr(paths_module.subprocess, "run", _stub_run)

  original_mtime = os.path.getmtime(pch_header)
  paths_module._assert_pch_survives_mtime_bump(["emcc", "-std=c++17"])
  restored_mtime = os.path.getmtime(pch_header)

  # Restored within 1us tolerance (some filesystems quantise to 1s, that's
  # still well inside the tolerance we need).
  assert abs(restored_mtime - original_mtime) < 1e-3, (
    f"Guard left PCH_HEADER mtime drifted by "
    f"{restored_mtime - original_mtime:.6f}s; should be 0."
  )
