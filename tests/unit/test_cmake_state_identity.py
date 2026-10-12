from __future__ import annotations

import importlib.util
import json
import subprocess
from pathlib import Path

import pytest

_SCRIPT = Path(__file__).resolve().parents[2] / "scripts" / "cmake-state.py"


def _load_script():
  spec = importlib.util.spec_from_file_location("cmake_state_script", _SCRIPT)
  module = importlib.util.module_from_spec(spec)
  spec.loader.exec_module(module)
  return module


@pytest.fixture
def checkout(tmp_path: Path, monkeypatch: pytest.MonkeyPatch) -> tuple[Path, list[list[str]]]:
  root = tmp_path / "root"
  (root / "build").mkdir(parents=True)
  (root / "build" / "patches-applied.json").write_text(
    json.dumps({"dependencyCommit": "occt", "dependencyFiles": {}})
  )
  for name in ("OCJS_OPT", "EMSDK", "FREETYPE_ROOT", "RAPIDJSON_ROOT"):
    monkeypatch.delenv(name, raising=False)

  calls: list[list[str]] = []

  def fake_check_output(args: list[str], text: bool) -> str:
    calls.append(args)
    if args[0] == "git":
      return f"sha-of-{Path(args[2]).name}\n"
    return f"{Path(args[0]).name} 1.0\n"

  monkeypatch.setattr(subprocess, "check_output", fake_check_output)
  return root, calls


def test_should_fingerprint_configured_dependency_roots(
  checkout: tuple[Path, list[list[str]]], monkeypatch: pytest.MonkeyPatch, tmp_path: Path
) -> None:
  root, calls = checkout
  monkeypatch.setenv("FREETYPE_ROOT", str(tmp_path / "freetype"))
  monkeypatch.setenv("RAPIDJSON_ROOT", "vendor/rapidjson")
  monkeypatch.setenv("EMSDK", str(tmp_path / "emsdk"))

  _load_script().identity(root)

  assert ["git", "-C", str(tmp_path / "freetype"), "rev-parse", "HEAD"] in calls
  assert ["git", "-C", str(root / "vendor" / "rapidjson"), "rev-parse", "HEAD"] in calls
  assert [str(tmp_path / "emsdk" / "upstream" / "emscripten" / "emcc"), "--version"] in calls


def test_should_keep_identity_when_overrides_name_the_default_roots(
  checkout: tuple[Path, list[list[str]]], monkeypatch: pytest.MonkeyPatch
) -> None:
  root, _ = checkout
  script = _load_script()
  default = script.identity(root)

  monkeypatch.setenv("FREETYPE_ROOT", str(root / "deps" / "freetype"))
  monkeypatch.setenv("RAPIDJSON_ROOT", "deps/rapidjson")
  monkeypatch.setenv("EMSDK", "")

  assert script.identity(root) == default
