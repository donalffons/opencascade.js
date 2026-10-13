"""V8 — validate-build.py ↔ verifyBindings parity sentinel.

The whole point of `manifest_registry` (Phase 1) is that link-time
(`yaml_build.verifyBindings`) and post-link (`scripts/validate-build.py`)
must classify a requested binding *identically*. Both call the same
loaders (`collect_compiled_symbols`, `load_ncollection_alias_index`,
`builtin_binding_symbols`, `resolve_requested_symbols`); this test
constructs a synthetic build tree exercising every resolution bucket
and asserts the two consumers produce byte-identical partitions —
otherwise a future refactor could re-introduce the split-brain the
audit found.

Fixture composition (chosen to exercise every bucket exactly once
without coupling the test to the link's actual binding shape):

* 3 directly-compiled symbols — must land in ``satisfied_by_compiled``
* 2 NCollection typedef aliases whose canonical IS compiled —
  ``alias_resolved`` for the alias names; ``satisfied_by_compiled`` for
  the canonical when the alias appears as requested binding
* 1 `BUILTIN_BINDINGS_SOURCE`-style registration — must land in
  ``builtin``
* 1 binding with no `.cpp.o`, no alias, no builtin entry — must land
  in ``truly_missing`` and trip `validation_passed=False`
"""

from __future__ import annotations

import hashlib
import importlib.util
import json
import os
import sys

import pytest

OCJS_ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))


def _load_validate_build_module():
  """Import ``scripts/validate-build.py`` as a module despite the
  hyphenated filename (`-` isn't valid in dotted import paths).
  Co-located here so the fixture stays self-contained without
  polluting a project-wide conftest.
  """
  script_path = os.path.join(OCJS_ROOT, "scripts", "validate-build.py")
  spec = importlib.util.spec_from_file_location("validate_build", script_path)
  module = importlib.util.module_from_spec(spec)
  sys.modules["validate_build"] = module
  spec.loader.exec_module(module)
  return module


def _materialise_compiled_bindings(build_dir: str, symbols: list[str]) -> None:
  """Touch a 0-byte `<sym>.cpp.o` under ``build/compiled-bindings/`` for
  every entry in ``symbols`` — matches what `compileBindings.py` would
  leave behind for `collect_compiled_symbols` to walk.
  """
  compiled_dir = os.path.join(build_dir, "compiled-bindings")
  os.makedirs(compiled_dir, exist_ok=True)
  for sym in symbols:
    with open(os.path.join(compiled_dir, f"{sym}.cpp.o"), "wb"):
      pass


def _materialise_ncollection_manifest(
  build_dir: str,
  declarations: list[dict],
  template_typedefs: dict[str, str],
) -> None:
  """Write a v2 `ncollection-manifest.json` matching the real producer
  shape emitted by ``discover.write_manifest`` with ``tuInfo`` plumbed:

  * ``schema`` discriminator — consumer hard-fails on mismatch.
  * ``declarations[*].source_classes`` — reachability tag (consumed by
    ``_filter_auto_symbols_by_scope``, NOT by alias resolution).
  * ``template_typedefs`` — the typedef-alias map (``alias -> mangled``)
    consumed by ``load_ncollection_alias_index``.

  Fixture authors pass ``template_typedefs`` explicitly so the test
  intent matches the producer's actual contract.
  """
  from ocjs_bindgen.link.manifest_registry import NCOLLECTION_MANIFEST_SCHEMA

  manifest_path = os.path.join(build_dir, "ncollection-manifest.json")
  with open(manifest_path, "w") as f:
    json.dump(
      {
        "schema": NCOLLECTION_MANIFEST_SCHEMA,
        "symbols": sorted(d["mangled_name"] for d in declarations),
        "declarations": declarations,
        "template_typedefs": dict(template_typedefs),
      },
      f,
    )


def _materialise_additional_bind_symbols(
  build_dir: str, registrations: list[str]
) -> None:
  """Write the bind-symbols stage manifest at
  ``build/additional-bind-symbols.json`` matching the v1 schema
  emitted by ``ocjs_bindgen.bind_symbols.write_manifest``. Includes
  the ``schema`` discriminator — the consumer hard-fails without it.
  """
  from ocjs_bindgen.link.manifest_registry import ADDITIONAL_BIND_SYMBOLS_SCHEMA

  manifest_path = os.path.join(build_dir, "additional-bind-symbols.json")
  with open(manifest_path, "w") as f:
    json.dump(
      {
        "schema": ADDITIONAL_BIND_SYMBOLS_SCHEMA,
        "symbols": sorted(registrations),
      },
      f,
      indent=2,
    )


@pytest.fixture
def symmetry_build(tmp_path):
  """Materialise the four-bucket fixture and return ``(build_dir,
  requested_symbols)`` so both consumers see the same on-disk shape.
  """
  build_dir = str(tmp_path)
  # 3 directly-compiled + 2 NCollection canonicals (aliased to below)
  _materialise_compiled_bindings(
    build_dir,
    [
      "gp_Pnt",
      "TopoDS_Shape",
      "BRepBuilderAPI_MakeWire",
      "NCollection_Array1_gp_Pnt",
      "NCollection_List_TopoDS_Shape",
    ],
  )
  _materialise_ncollection_manifest(
    build_dir,
    declarations=[
      {
        "mangled_name": "NCollection_Array1_gp_Pnt",
        "container": "NCollection_Array1",
        "args": ["gp_Pnt"],
        "source_classes": ["gp_Pnt"],
      },
      {
        "mangled_name": "NCollection_List_TopoDS_Shape",
        "container": "NCollection_List",
        "args": ["TopoDS_Shape"],
        "source_classes": ["TopoDS_Shape"],
      },
    ],
    template_typedefs={
      "TColgp_Array1OfPnt": "NCollection_Array1_gp_Pnt",
      "TopTools_ListOfShape": "NCollection_List_TopoDS_Shape",
    },
  )
  _materialise_additional_bind_symbols(build_dir, ["TopoDS"])
  requested = [
    "gp_Pnt",
    "TopoDS_Shape",
    "BRepBuilderAPI_MakeWire",
    "TColgp_Array1OfPnt",
    "TopTools_ListOfShape",
    "TopoDS",
    "IMeshData_IPCurveHandle",
  ]
  return build_dir, requested


def test_validate_symbols_and_verify_bindings_partition_identically(
  symmetry_build,
) -> None:
  """The producer/consumer contract holds end-to-end: both
  ``validate-build.py::validate_symbols`` and
  ``yaml_build.verifyBindings`` must surface the same alias_resolved /
  builtin / truly_missing partition.

  We compare:
    * ``validate_symbols`` output's ``alias_resolved`` / ``builtin`` /
      ``missing`` lists
    * the live ``SymbolResolution`` that
      ``manifest_registry.resolve_requested_symbols`` (i.e. what
      ``verifyBindings`` consumes) returns for the same input

  The fixture exercises all four buckets so any future divergence
  trips the assertion.
  """
  build_dir, requested = symmetry_build
  vb = _load_validate_build_module()
  from ocjs_bindgen.link.manifest_registry import (
    builtin_binding_symbols,
    collect_compiled_symbols,
    load_ncollection_alias_index,
    resolve_requested_symbols,
  )

  config = {
    "mainBuild": {
      "name": "symmetry.js",
      "bindings": [{"symbol": s} for s in requested],
    },
  }
  validate_result = vb.validate_symbols(config, build_dir)

  resolution = resolve_requested_symbols(
    set(requested),
    collect_compiled_symbols(build_dir),
    load_ncollection_alias_index(build_dir),
    builtin_binding_symbols(build_dir),
  )

  assert set(validate_result["missing"]) == set(resolution.truly_missing)
  assert {
    (r["alias"], r["canonical"]) for r in validate_result["alias_resolved"]
  } == set(resolution.alias_resolved.items())
  assert set(validate_result["builtin"]) == set(resolution.builtin)


def test_validate_symbols_passes_iff_truly_missing_empty(symmetry_build) -> None:
  """``validate_symbols``' ``pass`` boolean must be the inverse of the
  ``truly_missing`` predicate. The fixture has exactly one truly-missing
  entry; remove it and ``pass`` must flip to ``True`` without any other
  bucket changing.
  """
  build_dir, requested = symmetry_build
  vb = _load_validate_build_module()
  failing_config = {
    "mainBuild": {
      "name": "symmetry.js",
      "bindings": [{"symbol": s} for s in requested],
    },
  }
  failing = vb.validate_symbols(failing_config, build_dir)
  assert failing["pass"] is False
  assert failing["missing"] == ["IMeshData_IPCurveHandle"]

  passing_config = {
    "mainBuild": {
      "name": "symmetry.js",
      "bindings": [
        {"symbol": s}
        for s in requested
        if s != "IMeshData_IPCurveHandle"
      ],
    },
  }
  passing = vb.validate_symbols(passing_config, build_dir)
  assert passing["pass"] is True
  assert passing["missing"] == []
  # Alias + builtin buckets are unchanged: removing the truly_missing
  # entry can never affect resolution of other entries.
  assert failing["alias_resolved"] == passing["alias_resolved"]
  assert failing["builtin"] == passing["builtin"]


def test_source_manifest_preserves_field_and_file_order(tmp_path) -> None:
  vb = _load_validate_build_module()
  for name, content in {
    "first.cpp": "FIRST\n",
    "second.cpp": "SECOND\n",
    "main.cpp": "MAIN\n",
    "extra.cpp": "EXTRA\n",
  }.items():
    (tmp_path / name).write_text(content, encoding="utf-8")

  config = {
    "additionalCppFiles": ["first.cpp", "second.cpp"],
    "mainBuild": {"additionalBindFiles": ["main.cpp"]},
    "extraBuilds": [{"additionalBindFiles": ["extra.cpp"]}],
  }
  entries = vb.resolve_config_source_manifest(str(tmp_path / "build.yml"), config)

  assert [(entry["field"], entry["path"]) for entry in entries] == [
    ("additionalCppFiles", "first.cpp"),
    ("additionalCppFiles", "second.cpp"),
    ("mainBuild.additionalBindFiles", "main.cpp"),
    ("extraBuilds[0].additionalBindFiles", "extra.cpp"),
  ]
  assert entries[0]["sha256"] == hashlib.sha256(b"FIRST\n").hexdigest()


def test_source_manifest_fails_for_missing_cpp_file(tmp_path) -> None:
  vb = _load_validate_build_module()
  config = {
    "additionalCppFiles": ["missing.cpp"],
    "mainBuild": {},
    "extraBuilds": [],
  }
  with pytest.raises(FileNotFoundError, match="additionalCppFiles"):
    vb.resolve_config_source_manifest(str(tmp_path / "build.yml"), config)


def test_validate_symbols_accepts_yaml_custom_compiled_object(
  symmetry_build,
  tmp_path,
) -> None:
  """Post-link validation must include the same YAML-owned custom object
  tree as link-time verification.
  """
  build_dir, _requested = symmetry_build
  custom_compiled_root = os.path.join(
    str(tmp_path),
    "link-work",
    "fixture-hash",
    "compiled-bindings",
  )
  os.makedirs(custom_compiled_root, exist_ok=True)
  with open(os.path.join(custom_compiled_root, "Test.cpp.o"), "wb"):
    pass
  vb = _load_validate_build_module()
  result = vb.validate_symbols(
    {
      "mainBuild": {
        "name": "custom.js",
        "bindings": [{"symbol": "Test"}],
      },
    },
    build_dir,
    custom_compiled_root=custom_compiled_root,
  )

  assert result["missing"] == []
  assert result["pass"] is True


def test_validate_symbols_emits_v3_manifest_shape(symmetry_build) -> None:
  """``validate_symbols`` returns the manifest sub-dict ``main()`` then
  stamps with ``schema=build-manifest-v3``. The bucket fields are part
  of the wire contract; downstream consumers (docs generator, dts
  validator, future CI dashboards) read them by exact key name. Pin
  the shape so a structural rename triggers a deliberate test update.
  """
  build_dir, requested = symmetry_build
  vb = _load_validate_build_module()
  config = {
    "mainBuild": {
      "name": "symmetry.js",
      "bindings": [{"symbol": s} for s in requested],
    },
  }
  result = vb.validate_symbols(config, build_dir)

  assert set(result) == {
    "requested",
    "compiled",
    "missing",
    "alias_resolved",
    "builtin",
    "extra_compiled",
    "pass",
  }

  # alias_resolved entries are {alias, canonical} pairs (sorted by alias)
  aliases = [entry["alias"] for entry in result["alias_resolved"]]
  assert aliases == sorted(aliases)
  for entry in result["alias_resolved"]:
    assert set(entry.keys()) == {"alias", "canonical"}

  assert vb.BUILD_MANIFEST_SCHEMA == "build-manifest-v3"


def test_stable_binding_report_omits_execution_state() -> None:
  vb = _load_validate_build_module()
  structural = {
    "total": 10,
    "failed": 1,
    "error_categories": {"compile": 1},
    "failures": [{"file": "Bad.cpp", "error_type": "compile", "message": "bad"}],
  }
  cold = {**structural, "succeeded": 9, "cached": 0}
  warm = {**structural, "succeeded": 0, "cached": 9}

  assert vb.stable_binding_report(cold) == structural
  assert vb.stable_binding_report(warm) == structural
