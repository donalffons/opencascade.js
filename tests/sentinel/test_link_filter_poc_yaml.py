"""Drift-prevention sentinel for ``build-configs/link-filter-poc.yml``.

The POC YAML is the CI smoke fixture for ``docker.yml`` — it must remain at
exactly 22 OCCT symbols spanning the 6 reference subsystems (Standard, gp,
TopoDS, BRepPrimAPI, BRepBuilderAPI, Bnd) so the smoke link time stays bounded.

A prior cleanup pass removed the YAML entirely (see blueprint Finding 8 at
``docs/research/ocjs-docker-production-readiness-blueprint.md``) — this
sentinel guards against silent drift between the YAML on disk and the pinned
Python constant ``POC_YAML_SCOPE``.

The wider superset ``_REPLICAD_LIKE_SCOPE`` in
``test_link_ncollection_reachability.py`` is **deliberately distinct**: it
tests reachability filtering across a larger class graph and includes synthetic
markers (``__custom__``) that are not real OCCT symbols.
"""

from __future__ import annotations

from pathlib import Path

import pytest
import yaml

REPO_ROOT = Path(__file__).resolve().parents[2]
POC_YAML_PATH = REPO_ROOT / "build-configs" / "link-filter-poc.yml"

# Source of truth — keep in sync with link-filter-poc.yml.
#
# Categories (counts in parens, must total 22):
#   Standard (2), gp (6), TopoDS (8), BRepPrimAPI (2), BRepBuilderAPI (3), Bnd (1)
POC_YAML_SCOPE: frozenset[str] = frozenset(
    {
        "Standard_Transient",
        "Standard_Type",
        "gp_Pnt",
        "gp_Vec",
        "gp_Dir",
        "gp_Trsf",
        "gp_Ax2",
        "gp_XYZ",
        "TopoDS",
        "TopoDS_Shape",
        "TopoDS_Edge",
        "TopoDS_Wire",
        "TopoDS_Face",
        "TopoDS_Solid",
        "TopoDS_Compound",
        "TopoDS_Iterator",
        "BRepPrimAPI_MakeBox",
        "BRepPrimAPI_MakeSphere",
        "BRepBuilderAPI_MakeEdge",
        "BRepBuilderAPI_MakeFace",
        "BRepBuilderAPI_MakeWire",
        "Bnd_Box",
    }
)

assert len(POC_YAML_SCOPE) == 22, (
    f"POC_YAML_SCOPE must contain exactly 22 symbols, got {len(POC_YAML_SCOPE)}"
)


@pytest.fixture(scope="module")
def poc_yaml_config() -> dict:
    """Parse the YAML once per module. Skips loudly if the file is missing —
    a missing YAML is exactly the Finding 8 regression this sentinel guards.
    """
    if not POC_YAML_PATH.exists():
        pytest.fail(
            f"link-filter-poc.yml missing at {POC_YAML_PATH} — see blueprint "
            f"Finding 8 / R11. This file MUST exist for CI smoke to function."
        )
    return yaml.safe_load(POC_YAML_PATH.read_text())


class TestPocYamlScope:
    """Pin link-filter-poc.yml's symbol list to POC_YAML_SCOPE."""

    def test_should_match_pinned_scope_exactly(self, poc_yaml_config: dict) -> None:
        """The YAML's ``mainBuild.bindings`` symbol set must equal
        ``POC_YAML_SCOPE`` — no additions, no removals, no duplicates."""
        bindings = poc_yaml_config["mainBuild"]["bindings"]
        yaml_symbols = frozenset(entry["symbol"] for entry in bindings)

        only_in_yaml = yaml_symbols - POC_YAML_SCOPE
        only_in_pin = POC_YAML_SCOPE - yaml_symbols

        assert yaml_symbols == POC_YAML_SCOPE, (
            "link-filter-poc.yml drifted from POC_YAML_SCOPE.\n"
            f"  Only in YAML: {sorted(only_in_yaml)}\n"
            f"  Only in pin : {sorted(only_in_pin)}\n"
            "If the change is intentional, update POC_YAML_SCOPE in this file "
            "AND verify the 6-category coverage (Standard, gp, TopoDS, "
            "BRepPrimAPI, BRepBuilderAPI, Bnd) is preserved."
        )

    def test_should_have_no_duplicate_bindings(self, poc_yaml_config: dict) -> None:
        """``mainBuild.bindings`` must be a duplicate-free list — duplicates
        would not break the YAML loader but would silently inflate the link
        time and obscure category-coverage audits."""
        bindings = poc_yaml_config["mainBuild"]["bindings"]
        symbols = [entry["symbol"] for entry in bindings]

        assert len(symbols) == len(set(symbols)), (
            f"link-filter-poc.yml contains duplicate bindings. "
            f"Total entries: {len(symbols)}, unique: {len(set(symbols))}"
        )

    def test_should_set_canonical_output_basename(self, poc_yaml_config: dict) -> None:
        """``mainBuild.name`` is the output basename CI asserts against
        (``opencascade_linkfilter_poc.{js,wasm,d.ts}``). Renaming the build
        breaks the artefact-assertion step in docker.yml."""
        name = poc_yaml_config["mainBuild"]["name"]

        assert name == "opencascade_linkfilter_poc.js", (
            f"mainBuild.name drifted from canonical 'opencascade_linkfilter_poc.js' "
            f"to '{name}' — CI artefact assertions in .github/workflows/docker.yml "
            f"hard-code the canonical basename."
        )


class TestPocYamlCategoryCoverage:
    """Verify the 22 symbols span the 6 OCCT subsystems the blueprint pins.

    Counts: Standard (2) + gp (6) + TopoDS (8) + BRepPrimAPI (2) +
    BRepBuilderAPI (3) + Bnd (1) = 22.
    """

    @pytest.mark.parametrize(
        ("prefix", "expected_count"),
        [
            ("Standard_", 2),
            ("gp_", 6),
            ("TopoDS", 8),  # matches TopoDS + TopoDS_*
            ("BRepPrimAPI_", 2),
            ("BRepBuilderAPI_", 3),
            ("Bnd_", 1),
        ],
    )
    def test_should_provide_exact_count_per_subsystem(
        self, prefix: str, expected_count: int
    ) -> None:
        """Each OCCT subsystem prefix must contribute exactly the pinned
        count of symbols. Drift here means category coverage is unbalanced."""
        matching = {sym for sym in POC_YAML_SCOPE if sym.startswith(prefix)}

        assert len(matching) == expected_count, (
            f"Subsystem '{prefix}*' has {len(matching)} symbols, "
            f"expected {expected_count}.\n"
            f"  Symbols: {sorted(matching)}"
        )
