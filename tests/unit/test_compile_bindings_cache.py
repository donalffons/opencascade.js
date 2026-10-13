from __future__ import annotations

import json
import os
from pathlib import Path

import pytest

import compileBindings


def test_should_rebuild_when_source_bytes_change_without_newer_mtime(
  tmp_path: Path, monkeypatch: pytest.MonkeyPatch
) -> None:
  source = tmp_path / "Binding.cpp"
  object_path = tmp_path / "Binding.cpp.o"
  source.write_text("first")
  object_path.write_bytes(b"object")
  old_mtime = object_path.stat().st_mtime
  source.write_text("other")
  os.utime(source, (old_mtime - 10, old_mtime - 10))
  monkeypatch.setattr(compileBindings, "_cpp_to_object_path", lambda _path: str(object_path))

  assert compileBindings.object_needs_build(str(source), str(object_path), ["emcc", "-O2"])


def test_should_change_object_identity_for_semantic_compiler_inputs(tmp_path: Path) -> None:
  source = tmp_path / "Binding.cpp"
  pch = tmp_path / "pch.h.pch"
  source.write_text("binding")
  pch.write_bytes(b"pch")
  baseline = compileBindings.object_identity(
    str(source),
    ["emcc", "-O2"],
    pch_path=str(pch),
    dependency_identity="deps-a",
    generator_identity="generator-a",
    compiler_identity="emcc-a",
  )

  variants = [
    (["emcc", "-O3"], str(pch), "deps-a", "generator-a", "emcc-a"),
    (["emcc", "-O2"], str(pch), "deps-b", "generator-a", "emcc-a"),
    (["emcc", "-O2"], str(pch), "deps-a", "generator-b", "emcc-a"),
    (["emcc", "-O2"], str(pch), "deps-a", "generator-a", "emcc-b"),
  ]
  for argv, pch_path, dependency, generator, compiler in variants:
    assert compileBindings.object_identity(
      str(source),
      argv,
      pch_path=pch_path,
      dependency_identity=dependency,
      generator_identity=generator,
      compiler_identity=compiler,
    ) != baseline

  pch.write_bytes(b"changed")
  assert compileBindings.object_identity(
    str(source),
    ["emcc", "-O2"],
    pch_path=str(pch),
    dependency_identity="deps-a",
    generator_identity="generator-a",
    compiler_identity="emcc-a",
  ) != baseline


def test_should_not_accept_partial_object_when_compiler_fails(
  tmp_path: Path, monkeypatch: pytest.MonkeyPatch
) -> None:
  source = tmp_path / "Binding.cpp"
  object_path = tmp_path / "Binding.cpp.o"
  source.write_text("binding")

  class Failed:
    returncode = 1
    stderr = "error: injected"

  def fail(command: list[str], **_kwargs: object) -> Failed:
    Path(command[command.index("-o") + 1]).write_bytes(b"partial")
    return Failed()

  monkeypatch.setattr(compileBindings.subprocess, "run", fail)

  result = compileBindings.compile_atomic(["emcc", "-c", str(source)], object_path)

  assert result.returncode == 1
  assert not object_path.exists()
  assert list(tmp_path.glob("*.tmp-*")) == []


def test_should_reuse_objects_when_only_other_fragments_or_js_patch_change(
  tmp_path: Path, monkeypatch: pytest.MonkeyPatch
) -> None:
  build = tmp_path / "build"
  build.mkdir()
  pch = build / "pch.h.pch"
  pch.write_bytes(b"pch")
  patch_manifest = {
    "schema": "ocjs-patch-state-v1",
    "dependencyCommit": "occt-a",
    "dependencyFiles": [{"path": "header.hxx", "sha256": "a"}],
    "libembind": {"sha256": "js-a"},
  }
  binding_manifest = {
    "schema": "ocjs-content-ledger-v1",
    "sha256": "tree-a",
    "files": [{"path": "A.cpp", "sha256": "a"}],
  }
  (build / "patches-applied.json").write_text(json.dumps(patch_manifest))
  (build / "bindings-manifest.json").write_text(json.dumps(binding_manifest))
  monkeypatch.setattr(compileBindings, "BUILD_DIR", str(build))
  monkeypatch.setattr(compileBindings, "PCH_FILE", str(pch))
  monkeypatch.setattr(compileBindings, "_compiler_identity", lambda: "emcc")

  before = compileBindings._shared_identity_context()
  patch_manifest["libembind"] = {"sha256": "js-b"}
  binding_manifest["sha256"] = "tree-b"
  binding_manifest["files"] = [{"path": "B.cpp", "sha256": "b"}]
  (build / "patches-applied.json").write_text(json.dumps(patch_manifest))
  (build / "bindings-manifest.json").write_text(json.dumps(binding_manifest))
  after_unrelated_change = compileBindings._shared_identity_context()

  assert after_unrelated_change == before

  patch_manifest["dependencyFiles"] = [{"path": "header.hxx", "sha256": "b"}]
  (build / "patches-applied.json").write_text(json.dumps(patch_manifest))
  assert compileBindings._shared_identity_context()["dependency_identity"] != before["dependency_identity"]


def test_should_remove_stale_object_when_recompile_fails(
  tmp_path: Path, monkeypatch: pytest.MonkeyPatch
) -> None:
  source_root = tmp_path / "sources"
  output_root = tmp_path / "objects"
  source = source_root / "Binding.cpp"
  source.parent.mkdir()
  source.write_text("changed")
  object_path = Path(
    compileBindings._cpp_to_object_path(
      str(source),
      str(source_root),
      str(output_root),
    )
  )
  object_path.parent.mkdir()
  object_path.write_bytes(b"stale")
  Path(f"{object_path}.identity").write_text("old\n")

  class Failed:
    returncode = 1
    stderr = "error: injected"

  monkeypatch.setattr(compileBindings, "_compile_command", lambda _args, _item: ["fake"])
  monkeypatch.setattr(compileBindings, "compile_atomic", lambda _command, _output: Failed())

  result = compileBindings.buildOneFile({
    "threading": "single-threaded",
    "source_root": str(source_root),
    "output_root": str(output_root),
    "identity_context": {
      "pch_identity": "pch",
      "dependency_identity": "deps",
      "generator_identity": "generator",
      "compiler_identity": "compiler",
    },
  }, str(source))

  assert result["status"] == "failed"
  assert not object_path.exists()
  assert not Path(f"{object_path}.identity").exists()
