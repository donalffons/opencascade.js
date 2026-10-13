"""V9 — provenance.nCollectionManifest round-trip sentinel.

Pins the wire contract for the new ``nCollectionManifest`` provenance
block introduced by Phase 4 (V5). Drives provenance.py end-to-end the
way ``yaml_build.main()`` does:

    init() -> add_linking(ncollection_linked, ncollection_total,
              ncollection_dropped) -> finalize(wasm_dir=tmp)

and asserts the finalised ``<variant>.provenance.json`` sidecar carries
the expected fields. Also replays the Python snippet from
``scripts/docker-e2e-validate.sh:193-210`` against the finalised
artifact to prove the docker-e2e Phase 6 parseability check sees the
new field name without falling through to the
"missing nCollectionManifest" WARNING path.

Tests follow ``docs/policy/testing-policy.md``: fixtures live in
``tmp_path``, no global filesystem mutation, no module reload tricks
because we re-import provenance with the OCJS_ROOT environment pointed
at the per-test tmpdir via monkeypatch.
"""

from __future__ import annotations

import importlib
import json
import os

import pytest


@pytest.fixture
def provenance_module(tmp_path, monkeypatch):
  """Re-import ``provenance`` with ``OCJS_ROOT`` pointing at a fresh
  ``tmp_path`` so each test gets an isolated ``build/provenance.json``.

  ``provenance.py`` reads ``OCJS_ROOT`` at module-import time to
  compute ``BUILD_DIR`` / ``PROVENANCE_FILE``. Without re-import the
  module's globals stay pinned to whatever the first import saw —
  isolating per-test state is cleaner than mutating those globals
  directly.
  """
  monkeypatch.setenv("OCJS_ROOT", str(tmp_path))
  monkeypatch.setenv("SOURCE_DATE_EPOCH", "0")
  import provenance
  importlib.reload(provenance)
  os.makedirs(provenance.BUILD_DIR, exist_ok=True)
  yield provenance


def _make_minimal_yaml(tmp_path) -> str:
  """Write a 1-variant YAML so ``finalize(yaml_config=...)`` can derive
  the variant name from ``mainBuild.name``. Mirrors what replicad's
  ``custom_build_single.yml`` exposes — only the keys provenance reads.
  """
  yaml_path = os.path.join(str(tmp_path), "build.yml")
  with open(yaml_path, "w") as f:
    f.write("mainBuild:\n  name: roundtrip_single.js\n  bindings: []\n")
  return yaml_path


def _finalised_sidecar(tmp_path, prov_mod, ncollection_kwargs: dict) -> dict:
  """Drive the canonical init -> add_linking -> finalize sequence and
  return the parsed ``<variant>.provenance.json`` sidecar contents.

  ``finalize`` copies ``build/provenance.json`` to
  ``<wasm_dir>/<variant>.provenance.json`` once the variant name can
  be derived from the YAML — the test asserts on that final sidecar
  because it's the file every downstream consumer (`generate-api-reference.mjs`,
  `docker-e2e-validate.sh`) actually reads.
  """
  yaml_path = _make_minimal_yaml(tmp_path)
  wasm_dir = os.path.join(str(tmp_path), "dist")
  os.makedirs(wasm_dir, exist_ok=True)

  prov_mod.init()
  prov_mod.add_linking(
    yaml_config=yaml_path,
    yaml_hash="testhash",
    bound_symbols=1,
    symbol_list=["gp_Pnt"],
    **ncollection_kwargs,
  )
  prov_mod.finalize(wasm_dir=wasm_dir, yaml_config=yaml_path)

  sidecar_path = os.path.join(wasm_dir, "roundtrip_single.provenance.json")
  assert os.path.isfile(sidecar_path), f"finalize did not write {sidecar_path}"
  with open(sidecar_path) as f:
    return json.load(f)


def test_nccollection_manifest_round_trips_through_finalize(
  tmp_path, provenance_module
) -> None:
  """Mirror of the replicad single-threaded scenario used in the audit:
  77 of 596 NCollection canonicals survive YAML scope filtering, 519
  dropped. Pin those exact numbers so a future regression to the
  arithmetic in ``add_linking`` or to ``finalize``'s sidecar copy is
  surfaced immediately.
  """
  sidecar = _finalised_sidecar(
    tmp_path,
    provenance_module,
    {
      "ncollection_linked": 77,
      "ncollection_total": 596,
      "ncollection_dropped": 519,
    },
  )
  assert sidecar["nCollectionManifest"] == {
    "linked": 77,
    "total": 596,
    "dropped": 519,
  }
  assert sidecar["schema"] == "wasm-build-provenance-v2"


def test_provenance_omits_nondeterministic_execution_state(
  tmp_path, provenance_module
) -> None:
  sidecar = _finalised_sidecar(
    tmp_path,
    provenance_module,
    {
      "ncollection_linked": 0,
      "ncollection_total": 0,
      "ncollection_dropped": 0,
    },
  )
  forbidden = {
    "cacheHit",
    "bindingFiles",
    "compileDuration_s",
    "linkDuration_s",
    "wasmOptDuration_s",
    "totalDuration_s",
  }
  assert forbidden.isdisjoint(sidecar)
  assert forbidden.isdisjoint(sidecar["compilation"])
  assert forbidden.isdisjoint(sidecar["linking"])
  assert forbidden.isdisjoint(sidecar["postProcessing"])
  assert sidecar["linking"]["sourceFiles"] == []


def test_zero_ncollection_edge_case_still_round_trips(
  tmp_path, provenance_module
) -> None:
  """A single-binding YAML with no NCollection auto-discovery still
  needs a structurally-valid ``nCollectionManifest`` block so
  downstream readers don't NPE on a missing field — they should see
  zeros, not absence.
  """
  sidecar = _finalised_sidecar(
    tmp_path,
    provenance_module,
    {
      "ncollection_linked": 0,
      "ncollection_total": 0,
      "ncollection_dropped": 0,
    },
  )
  assert sidecar["nCollectionManifest"] == {
    "linked": 0,
    "total": 0,
    "dropped": 0,
  }


def test_docker_e2e_phase6_snippet_parses_new_field_name(
  tmp_path, provenance_module
) -> None:
  """Replay the inline Python snippet from
  ``scripts/docker-e2e-validate.sh:193-210`` against the finalised
  provenance: the script's "Phase 6 NCollection filter ratio" check
  must read ``nCollectionManifest.linked`` / ``.total`` cleanly — no
  ``WARNING: missing nCollectionManifest`` fall-through and no
  ``ZeroDivisionError`` when total is non-zero.

  Asserts the linked/total ratio matches the round-trip values
  exactly. The 0.129 ratio (77/596) is well under the 0.30 budget the
  shell script enforces; testing the bare extraction surfaces the
  schema contract directly without coupling to the budget threshold.
  """
  sidecar = _finalised_sidecar(
    tmp_path,
    provenance_module,
    {
      "ncollection_linked": 77,
      "ncollection_total": 596,
      "ncollection_dropped": 519,
    },
  )
  # Direct replay of docker-e2e-validate.sh Phase 6 snippet (post-Phase 8
  # cleanup: no legacy ``nCollection``/``linkedCount`` fallbacks).
  mani = sidecar.get("nCollectionManifest") or {}
  linked = mani.get("linked")
  total = mani.get("total")
  assert linked == 77
  assert total == 596
  assert total != 0
  ratio = linked / total
  assert ratio == pytest.approx(77 / 596)
