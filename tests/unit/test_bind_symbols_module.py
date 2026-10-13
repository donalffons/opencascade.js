"""V3 RE-SHIP — `ocjs_bindgen.bind_symbols` module unit tests.

The producer-side module hoisted from the link stage into its own NX
target. Pins the contract that:

* `extract_registrations_for_yaml` iterates **every** consumer
  ``additionalBindFiles`` list (mainBuild + extraBuilds), concatenated
  with `BUILTIN_BINDINGS_SOURCE`, parses each via libclang, and
  returns the union of every Embind registration name.
* `write_manifest` serialises the union to
  ``build/additional-bind-symbols.json`` with the
  ``additional-bind-symbols-v1`` schema discriminator (the consumer
  hard-fails without it).
* `main(yaml_path, build_dir)` is the end-to-end driver invoked by
  the `bind-symbols` NX target.

Test design:

* Libclang-driven tests are guarded by ``pytest.mark.libclang`` and
  skipped on minimal CI without the vendored toolchain (same pattern
  as ``test_additional_bind_symbols_ast.py``).
* Pure JSON / shape assertions don't need libclang and run unconditionally.
"""

from __future__ import annotations

import importlib
import json
import os
import textwrap
from pathlib import Path

import pytest
import yaml

# ----------------------------------------------------------------------------
# Pure JSON contract — no libclang dependency.
# ----------------------------------------------------------------------------


def test_write_manifest_emits_v1_schema_discriminator(tmp_path) -> None:
  """`write_manifest` must stamp the v1 schema discriminator so the
  consumer (`manifest_registry.builtin_binding_symbols`) can pin the
  producer contract. Symbols are sorted for deterministic content
  hashing across NX cache keys.
  """
  from ocjs_bindgen.bind_symbols import write_manifest
  from ocjs_bindgen.link.manifest_registry import ADDITIONAL_BIND_SYMBOLS_SCHEMA

  manifest_path = write_manifest({"Zebra", "Alpha", "Mike"}, str(tmp_path))
  with open(manifest_path) as f:
    payload = json.load(f)
  assert payload["schema"] == ADDITIONAL_BIND_SYMBOLS_SCHEMA
  assert payload["symbols"] == ["Alpha", "Mike", "Zebra"]


def test_write_manifest_creates_build_dir_if_absent(tmp_path) -> None:
  """The producer is invoked before the link stage; the build dir might
  exist but the manifest's parent never depends on link-stage outputs.
  Idempotent `makedirs` ensures the producer succeeds on a fresh tree.
  """
  from ocjs_bindgen.bind_symbols import write_manifest

  nested_dir = os.path.join(str(tmp_path), "deeply", "nested", "build")
  manifest_path = write_manifest({"Symbol"}, nested_dir)
  assert os.path.isfile(manifest_path)


def test_iter_additional_bind_file_sources_yields_main_then_extras(tmp_path) -> None:
  """Block iteration order is deterministic: mainBuild first, then
  extraBuilds in declared order. Mirrors the order
  `runBuild::getAdditionalBindFilesO` would see during link, so the
  union of parses matches what the link compile produces.
  """
  from ocjs_bindgen.bind_symbols import _iter_additional_bind_file_sources

  for name, content in {
    "main.cpp": "MAIN",
    "extra-one.cpp": "EXTRA_ONE",
    "extra-two.cpp": "EXTRA_TWO",
  }.items():
    (tmp_path / name).write_text(content)
  yaml_path = tmp_path / "build.yml"

  config = {
    "mainBuild": {"additionalBindFiles": ["main.cpp"]},
    "extraBuilds": [
      {"additionalBindFiles": ["extra-one.cpp"]},
      {"additionalBindFiles": ["extra-two.cpp"]},
    ],
  }
  assert list(_iter_additional_bind_file_sources(str(yaml_path), config)) == [
    "MAIN",
    "EXTRA_ONE",
    "EXTRA_TWO",
  ]


def test_iter_additional_bind_file_sources_skips_empty_lists(tmp_path) -> None:
  """A build block without `additionalBindFiles` (or with an empty
  string) contributes nothing — saves an empty libclang parse.
  """
  from ocjs_bindgen.bind_symbols import _iter_additional_bind_file_sources

  (tmp_path / "real.cpp").write_text("REAL")

  config = {
    "mainBuild": {"additionalBindFiles": []},
    "extraBuilds": [
      {"additionalBindFiles": ["real.cpp"]},
      {},
      {"additionalBindFiles": None},
    ],
  }
  assert list(
    _iter_additional_bind_file_sources(str(tmp_path / "build.yml"), config)
  ) == ["REAL"]


def test_iter_additional_bind_file_sources_handles_missing_extras(tmp_path) -> None:
  """A minimal YAML with only `mainBuild` (no `extraBuilds` key) must
  not raise — most consumer configs look like this.
  """
  from ocjs_bindgen.bind_symbols import _iter_additional_bind_file_sources

  (tmp_path / "only.cpp").write_text("ONLY")
  config = {"mainBuild": {"additionalBindFiles": ["only.cpp"]}}
  assert list(
    _iter_additional_bind_file_sources(str(tmp_path / "build.yml"), config)
  ) == ["ONLY"]


def test_iter_additional_bind_file_sources_fails_before_parse_for_missing_file(
  tmp_path,
) -> None:
  from ocjs_bindgen.bind_symbols import _iter_additional_bind_file_sources

  config = {"mainBuild": {"additionalBindFiles": ["missing.cpp"]}}
  with pytest.raises(FileNotFoundError, match="mainBuild.additionalBindFiles"):
    list(_iter_additional_bind_file_sources(str(tmp_path / "build.yml"), config))


# ----------------------------------------------------------------------------
# End-to-end libclang-driven extraction.
# ----------------------------------------------------------------------------


def _skip_if_no_toolchain() -> None:
  """Skip when the vendored LLVM 17 + emsdk toolchain is absent. Mirrors
  the gate in `test_additional_bind_symbols_ast.py`.
  """
  try:
    paths_mod = importlib.import_module("ocjs_bindgen.config.paths")
    paths_mod.getBindingSourceParseIncludePaths()
  except RuntimeError as e:
    pytest.skip(f"libclang toolchain not provisioned: {e}")


@pytest.mark.libclang
def test_extract_registrations_for_yaml_unions_builtin_and_consumer(tmp_path) -> None:
  """The end-to-end producer parses BUILTIN + each consumer block and
  returns the union of every Embind registration. Asserting a superset
  (not exact match) keeps this resilient to any future expansion of the
  BUILTIN block — `test_additional_bind_symbols_ast.py` is the canonical
  pin on the BUILTIN set.
  """
  _skip_if_no_toolchain()
  from ocjs_bindgen.bind_symbols import extract_registrations_for_yaml

  yaml_path = tmp_path / "consumer.yml"
  consumer_code = textwrap.dedent(r"""
    struct ConsumerWidget {};
    EMSCRIPTEN_BINDINGS(consumer) {
      emscripten::class_<ConsumerWidget>("ConsumerWidget");
    }
  """)
  (tmp_path / "consumer.cpp").write_text(consumer_code)
  yaml_path.write_text(
    yaml.safe_dump({
      "mainBuild": {
        "name": "test.js",
        "bindings": [],
        "additionalBindFiles": ["consumer.cpp"],
      },
      "extraBuilds": [],
    })
  )
  registrations = extract_registrations_for_yaml(str(yaml_path))
  # BUILTIN block contributes these three.
  assert {"OCJS", "TopoDS", "TColStd_IndexedDataMapOfStringString"} <= registrations
  # Consumer block contributes ConsumerWidget.
  assert "ConsumerWidget" in registrations


@pytest.mark.libclang
def test_extract_registrations_handles_yaml_with_no_consumer_code(tmp_path) -> None:
  """A YAML with no `additionalBindFiles` still produces the
  BUILTIN registration set — the bind-symbols stage is mandatory for
  every link, so the manifest always exists.
  """
  _skip_if_no_toolchain()
  from ocjs_bindgen.bind_symbols import extract_registrations_for_yaml

  yaml_path = tmp_path / "minimal.yml"
  yaml_path.write_text(
    yaml.safe_dump({
      "mainBuild": {"name": "minimal.js", "bindings": []},
      "extraBuilds": [],
    })
  )
  registrations = extract_registrations_for_yaml(str(yaml_path))
  assert {"OCJS", "TopoDS", "TColStd_IndexedDataMapOfStringString"} <= registrations


@pytest.mark.libclang
def test_extract_registrations_handles_progress_indicator_fixture() -> None:
  """The Docker consumer fixture exercises Embind's public subclassing
  surface. The parse-only header must model that surface closely enough to
  preserve its registration rather than emitting an incomplete manifest.
  """
  _skip_if_no_toolchain()
  from ocjs_bindgen.bind_symbols import extract_registrations_for_yaml

  fixture = Path(__file__).parents[2] / "tests/docker/fixtures/progress-indicator.yml"
  registrations = extract_registrations_for_yaml(str(fixture))
  assert "Message_ProgressIndicator_JS" in registrations


@pytest.mark.libclang
def test_main_writes_manifest_with_v1_schema(tmp_path) -> None:
  """The `main(yaml_path, build_dir)` driver round-trips the registrations
  to `<build_dir>/additional-bind-symbols.json` with the v1 schema
  discriminator. This is the NX-target entry point — `nx run ocjs:bind-symbols`
  invokes exactly this path.
  """
  _skip_if_no_toolchain()
  from ocjs_bindgen.bind_symbols import main
  from ocjs_bindgen.link.manifest_registry import ADDITIONAL_BIND_SYMBOLS_SCHEMA

  yaml_path = tmp_path / "input.yml"
  yaml_path.write_text(
    yaml.safe_dump({
      "mainBuild": {"name": "x.js", "bindings": []},
      "extraBuilds": [],
    })
  )
  build_dir = tmp_path / "build"
  manifest_path = main(str(yaml_path), str(build_dir))
  with open(manifest_path) as f:
    payload = json.load(f)
  assert payload["schema"] == ADDITIONAL_BIND_SYMBOLS_SCHEMA
  assert "OCJS" in payload["symbols"]
