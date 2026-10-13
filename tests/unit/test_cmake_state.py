from __future__ import annotations

import importlib.util
from pathlib import Path

from ocjs_bindgen.cmake_state import CMakeState


def test_should_reuse_only_complete_matching_cmake_state(tmp_path: Path) -> None:
  scratch = tmp_path / "occt-cmake"
  state = CMakeState(scratch)

  assert not state.prepare("A")
  state.complete("A")
  (scratch / "incremental.o").write_bytes(b"keep")
  assert state.prepare("A")
  assert (scratch / "incremental.o").exists()

  assert not state.prepare("B")
  assert not (scratch / "incremental.o").exists()
  state.complete("B")

  assert not state.prepare("A")


def test_should_reject_incomplete_state_after_interruption(tmp_path: Path) -> None:
  scratch = tmp_path / "occt-cmake"
  state = CMakeState(scratch)
  state.prepare("A")
  (scratch / "partial.a").write_bytes(b"partial")

  assert not CMakeState(scratch).prepare("A")
  assert not (scratch / "partial.a").exists()


def test_should_publish_sorted_relative_static_library_inventory(tmp_path: Path) -> None:
  source = tmp_path / "source"
  destination = tmp_path / "published"
  source.mkdir()
  for name in ("libB.a", "libA.a"):
    (source / name).write_bytes(name.encode())

  manifest = CMakeState.publish_libraries(source, destination, identity="A")

  assert [entry["path"] for entry in manifest["files"]] == ["libA.a", "libB.a"]
  assert all(not Path(entry["path"]).is_absolute() for entry in manifest["files"])
  assert (destination / "manifest.json").exists()


def test_should_verify_published_libraries_by_identity_and_content(tmp_path: Path) -> None:
  source = tmp_path / "source"
  destination = tmp_path / "published"
  source.mkdir()
  for name in ("libB.a", "libA.a"):
    (source / name).write_bytes(name.encode())

  assert not CMakeState.published_matches(destination, identity="A")
  CMakeState.publish_libraries(source, destination, identity="A")

  assert CMakeState.published_matches(destination, identity="A")
  assert not CMakeState.published_matches(destination, identity="B")

  # The recorded identity inputs sit beside the manifest, outside its ledger.
  (destination / "identity-inputs.json").write_text("{}\n")
  assert CMakeState.published_matches(destination, identity="A")

  (destination / "libA.a").write_bytes(b"tampered")
  assert not CMakeState.published_matches(destination, identity="A")


def test_should_reject_published_libraries_with_missing_or_extra_files(tmp_path: Path) -> None:
  source = tmp_path / "source"
  destination = tmp_path / "published"
  source.mkdir()
  for name in ("libB.a", "libA.a"):
    (source / name).write_bytes(name.encode())
  CMakeState.publish_libraries(source, destination, identity="A")

  (destination / "libC.a").write_bytes(b"extra")
  assert not CMakeState.published_matches(destination, identity="A")
  (destination / "libC.a").unlink()
  (destination / "libB.a").unlink()
  assert not CMakeState.published_matches(destination, identity="A")


def test_should_name_the_identity_inputs_that_differ() -> None:
  spec = importlib.util.spec_from_file_location(
    "cmake_state_script",
    Path(__file__).resolve().parents[2] / "scripts" / "cmake-state.py",
  )
  assert spec is not None and spec.loader is not None
  script = importlib.util.module_from_spec(spec)
  spec.loader.exec_module(script)

  published = {"cmake": "cmake version 4.3.2", "flags": {"OCJS_OPT": "-O3", "THREADING": "single-threaded"}}
  current = {"cmake": "cmake version 4.3.2", "flags": {"OCJS_OPT": "-O3", "THREADING": "multi-threaded"}}

  assert script._differences(published, published) == []
  assert script._differences(published, current) == [
    "    flags.THREADING: published 'single-threaded', current 'multi-threaded'"
  ]
