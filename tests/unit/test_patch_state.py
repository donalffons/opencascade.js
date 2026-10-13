from __future__ import annotations

import importlib.util
import subprocess
from pathlib import Path
from types import ModuleType

import pytest


def _load_patch_state() -> ModuleType:
  path = Path(__file__).resolve().parents[2] / "scripts" / "patch-state.py"
  spec = importlib.util.spec_from_file_location("patch_state", path)
  assert spec is not None and spec.loader is not None
  module = importlib.util.module_from_spec(spec)
  spec.loader.exec_module(module)
  return module


def test_should_not_reset_an_exact_applied_patch_state(
  tmp_path: Path,
  monkeypatch: pytest.MonkeyPatch,
) -> None:
  patch_state = _load_patch_state()
  root = tmp_path / "OCCT"
  patch_root = tmp_path / "patches"
  embind = tmp_path / "libembind.js"
  manifest = tmp_path / "patches-applied.json"
  root.mkdir()
  patch_root.mkdir()
  (root / "owned.hxx").write_text("patched")
  (patch_root / "patch.py").write_text("patch input")
  embind.write_text("patched embind")
  monkeypatch.setattr(patch_state, "_status", lambda _root: ["owned.hxx"])
  monkeypatch.setattr(
    subprocess,
    "check_output",
    lambda *_args, **_kwargs: "dependency-commit\n",
  )
  patch_state.write(root, manifest, patch_root, embind)

  def reject_git_write(*_args: object, **_kwargs: object) -> None:
    raise AssertionError("an exact applied patch state must not invoke git checkout")

  monkeypatch.setattr(subprocess, "run", reject_git_write)

  patch_state.prepare(root, manifest, patch_root, embind)
