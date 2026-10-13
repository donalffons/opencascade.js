"""Sentinel — full V1-V11 validation contract against a native replicad build.

Reads the `<variant>.build-manifest.json` + `<variant>.provenance.json`
sidecars that `pnpm nx run ocjs:build` produces under `dist/` and
asserts every Phase 3/4/5/6 invariant in one place. Mirrors
`scripts/assert-replicad-validation.sh` so CI can replay the same
contract without invoking shell.

The comprehensive integration tier requires these artifacts. CI provisions
them from ``build-configs/replicad-validation.yml`` against the exact
single-threaded candidate before running this module; absence is therefore a
hard setup failure, never a passing skip. Run the local compatibility link via:

    docker run --rm \
      -v "$PWD/build-configs/replicad-validation.yml:/src/build-config.yml:ro" \
      -v "$PWD/dist:/output" -e OCJS_OUTPUT_DIR=/output \
      <single-threaded-candidate> link build-config.yml
"""

from __future__ import annotations

import json
import os
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
DIST_DIR = Path(
  os.environ.get("OCJS_OUTPUT_DIR", str(REPO_ROOT / "dist"))
)
VARIANT = os.environ.get("OCJS_VARIANT", "replicad_single")
MANIFEST_PATH = DIST_DIR / f"{VARIANT}.build-manifest.json"
PROVENANCE_PATH = DIST_DIR / f"{VARIANT}.provenance.json"
ADD_BIND_PATH = REPO_ROOT / "build" / "additional-bind-symbols.json"


def _load_required(path: Path) -> dict:
  assert path.is_file(), (
    f"{path.name} not present; provision the Replicad compatibility fixture "
    f"with build-configs/replicad-validation.yml ({path})"
  )
  return json.loads(path.read_text())


# Typedef aliases the prior validate-build.py output reported as
# "missing" — V2 + the alias-aware loader chain must bucket every one
# into `symbols.alias_resolved` (NOT `symbols.missing`) on the replicad
# single-threaded build. Pinning the exact list catches regressions
# that re-introduce the original split-brain.
#
# V1 RE-SHIP made this set load-bearing: the v2 producer serialises
# `template_typedefs` into the manifest, and the v2 consumer reads it
# directly. The 10 aliases below are exactly the symbols the
# pre-RE-SHIP `RuntimeError: verifyBindings: 10 unresolved symbol(s)`
# error itemised.
_EXPECTED_ALIASES: frozenset = frozenset({
  "TColgp_Array1OfPnt",
  "TColgp_Array1OfPnt2d",
  "TColgp_Array1OfDir",
  "TColgp_Array1OfVec",
  "TColgp_Array2OfPnt",
  "TColStd_Array1OfBoolean",
  "TColStd_Array1OfInteger",
  "TColStd_Array1OfReal",
  "Poly_Array1OfTriangle",
  "TopTools_ListOfShape",
})


def test_expected_aliases_cardinality_matches_historic_failure() -> None:
  """The pre-RE-SHIP failure surfaced exactly 10 typedef aliases as
  `truly_missing`. Pin the cardinality so a contributor who adds a
  symbol to `_EXPECTED_ALIASES` without proper investigation triggers
  this guard. If the historic failure list legitimately changes,
  update this assertion in the same commit as the set.
  """
  assert len(_EXPECTED_ALIASES) == 10


def test_all_six_dist_artifacts_exist() -> None:
  """V9 contract — every dist sidecar a downstream consumer might need
  must exist after a successful link + validate + provenance pass.
  """
  for suffix in (
    ".wasm",
    ".js",
    ".js.symbols",
    ".d.ts",
    ".build-manifest.json",
    ".provenance.json",
  ):
    artifact = DIST_DIR / f"{VARIANT}{suffix}"
    assert artifact.is_file(), f"required Replicad compatibility artifact missing: {artifact}"


def test_build_manifest_passes_validation_with_v3_schema() -> None:
  """V3 + V4 + V6 — manifest carries the new schema label, the bucket
  partition, and `binding_report` is non-null (V4 path fix).
  """
  manifest = _load_required(MANIFEST_PATH)
  assert manifest["schema"] == "build-manifest-v3"
  assert manifest["validation_passed"] is True
  syms = manifest["symbols"]
  assert syms["missing"] == []
  assert isinstance(syms["alias_resolved"], list)
  assert isinstance(syms["builtin"], list)
  assert manifest["binding_report"] is not None, (
    "V4 — binding_report.json must load from compiled-bindings/"
  )


def test_build_manifest_bucketed_typedef_aliases_into_alias_resolved() -> None:
  """V2 — every typedef alias the prior failure flagged as missing must
  now appear under `symbols.alias_resolved`. Direct assertion against
  the historical failure set so a regression that re-introduces the
  split-brain trips this test by name.
  """
  manifest = _load_required(MANIFEST_PATH)
  alias_names = {entry["alias"] for entry in manifest["symbols"]["alias_resolved"]}
  missing_aliases = _EXPECTED_ALIASES - alias_names
  assert not missing_aliases, (
    f"alias_resolved missing expected typedef aliases: "
    f"{sorted(missing_aliases)}; this means validate-build.py "
    f"regressed to direct-compilation-only resolution"
  )


def test_additional_bind_symbols_manifest_emitted_with_v1_schema() -> None:
  """V3 RE-SHIP — the dedicated `bind-symbols` NX stage must have
  emitted `build/additional-bind-symbols.json` with the v1 schema
  discriminator AND at least the BUILTIN registrations
  (`OCJS`, `TopoDS`, `TColStd_IndexedDataMapOfStringString`). Missing
  schema = stale pre-RE-SHIP manifest; missing symbols = producer ran
  but parsed nothing (libclang regression).
  """
  data = _load_required(ADD_BIND_PATH)
  assert data.get("schema") == "additional-bind-symbols-v1", (
    f"additional-bind-symbols.json missing v1 schema discriminator; "
    f"got {data.get('schema')!r} — pre-RE-SHIP manifest or producer "
    f"regression"
  )
  symbols = set(data.get("symbols", []))
  assert {"OCJS", "TopoDS", "TColStd_IndexedDataMapOfStringString"} <= symbols, (
    f"BUILTIN_BINDINGS_SOURCE baseline registrations missing; "
    f"got {sorted(symbols)}"
  )


def test_ncollection_manifest_carries_template_typedefs_for_historic_aliases() -> None:
  """V1 RE-SHIP — `build/ncollection-manifest.json` must carry every
  historic typedef alias inside `template_typedefs`. The map is the
  producer-side serialisation of `_build_typedef_alias_map`; absence
  here means `discover.py::write_manifest` didn't get `tuInfo` plumbed
  through (V1 regression vector) and `manifest_registry.load_ncollection_alias_index`
  would hard-fail.
  """
  ncollection_path = REPO_ROOT / "build" / "ncollection-manifest.json"
  data = _load_required(ncollection_path)
  assert data.get("schema") == "ncollection-manifest-v2", (
    f"ncollection-manifest.json missing v2 schema discriminator; "
    f"got {data.get('schema')!r}"
  )
  template_typedefs = data.get("template_typedefs", {})
  assert isinstance(template_typedefs, dict)
  assert _EXPECTED_ALIASES <= set(template_typedefs.keys()), (
    f"template_typedefs missing historic aliases: "
    f"{sorted(_EXPECTED_ALIASES - set(template_typedefs.keys()))}"
  )


def test_provenance_carries_ncollection_manifest_with_invariant() -> None:
  """V5 — provenance schema v2 carries `nCollectionManifest` and
  satisfies `linked + dropped == total`. Asserts the round-trip
  contract V9 pins, plus the invariant the docker-e2e validator
  derives the filter-ratio assertion from.
  """
  prov = _load_required(PROVENANCE_PATH)
  assert prov["schema"] == "wasm-build-provenance-v2"
  mani = prov["nCollectionManifest"]
  linked = mani["linked"]
  total = mani["total"]
  dropped = mani["dropped"]
  assert linked > 0
  assert total > 0
  assert linked + dropped == total, (
    f"invariant violated: linked({linked}) + dropped({dropped}) != total({total})"
  )


def test_docker_e2e_phase6_snippet_reads_new_field_name() -> None:
  """V9 — the docker-e2e validator's Phase 6 NCollection ratio Python
  snippet must read the new `nCollectionManifest` field cleanly without
  falling through to the WARNING path.
  """
  prov = _load_required(PROVENANCE_PATH)
  mani = prov.get("nCollectionManifest") or {}
  linked = mani.get("linked")
  total = mani.get("total")
  assert linked is not None
  assert total is not None
  assert total != 0
  ratio = linked / total
  assert 0 < ratio <= 1.0


def test_runtime_helpers_block_present() -> None:
  """Sanity — runtime_helpers block exists; structural integrity check
  for the manifest as a whole (catches accidental removals during
  schema bumps).
  """
  manifest = _load_required(MANIFEST_PATH)
  assert "runtime_helpers" in manifest
  rh = manifest["runtime_helpers"]
  assert isinstance(rh, dict)
  assert "required" in rh
  assert "pass" in rh
