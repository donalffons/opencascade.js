"""Sentinel: ``scripts/enumerate-symbols.py`` and ``discover.py`` share
the same OCCT view (V13 RECLAIM).

Pre-RE-SHIP, ``enumerate-symbols.py::_setup_environment`` deliberately
omitted ``RAPIDJSON_ROOT`` / ``FREETYPE_ROOT`` / ``EMSDK`` env-vars so
libclang would truncate ``templateTypedefs`` at the first unresolved
header. This kept the script's view of OCCT artificially smaller than
``discover.py``'s view (which the build pipeline drives with the full
deps env) — the documented "historical phase-1 truncation it has
always relied on". Behind the truncation lurked 43 NCollection
synthetic aliases that would otherwise collide with user-named
typedefs at link time. The collision was always a phantom —
``pipeline.generate.dedupeTemplateTypedefsByCanonical`` already
collapses every template-typedef family that shares a canonical
underlying spelling into a single alphabetically-first winner.

With the dedup pass active and the shared
``ocjs_bindgen.enumeration`` module in place, this sentinel asserts
the script can no longer regress into a split-brain configuration.
Three independent assertions:

1. **No legacy `_setup_environment`** — the script MUST NOT define a
   helper that sets ``OCJS_ROOT`` / ``OCCT_ROOT`` while leaving the
   deps env-vars unset. The shared module's
   ``setup_full_environment`` is the only sanctioned setup path.
2. **Uses the shared module** — the script MUST import
   ``setup_full_environment`` and ``enumerate_occt_classes`` from
   ``ocjs_bindgen.enumeration`` (consolidation requirement, V13).
3. **No duplicate walker** — the script MUST NOT re-implement any
   AST-walking logic (no `clang.cindex` cursor iteration, no
   `tuInfo.allChildren` walk). All enumeration logic now lives in
   the shared module so both consumers see identical OCCT class
   sets by construction.

Pinning all three surfaces means a future refactor that re-adds an
in-script walker, a partial env-var setup, or a direct ``tuInfo``
walk trips the test in the same commit — preserving the
"single source of truth" contract for OCCT enumeration.
"""

from __future__ import annotations

import re
from pathlib import Path

import pytest

_REPO_ROOT = Path(__file__).resolve().parents[2]
_SCRIPT_PATH = _REPO_ROOT / "scripts" / "enumerate-symbols.py"
_SHARED_MODULE = _REPO_ROOT / "src" / "ocjs_bindgen" / "enumeration" / "__init__.py"


@pytest.fixture(scope="module")
def script_source() -> str:
    assert _SCRIPT_PATH.is_file(), (
        f"enumerate-symbols.py missing at {_SCRIPT_PATH}; the V13 "
        f"reclaim consolidated enumeration into the shared module but "
        f"the script is still the CLI entrypoint and must exist."
    )
    return _SCRIPT_PATH.read_text()


@pytest.fixture(scope="module")
def shared_module_source() -> str:
    assert _SHARED_MODULE.is_file(), (
        f"ocjs_bindgen.enumeration module missing at {_SHARED_MODULE}; "
        f"V13 RECLAIM (Phase F1) is the canonical location for the "
        f"shared OCCT enumerator."
    )
    return _SHARED_MODULE.read_text()


def test_script_does_not_redefine_setup_environment(script_source: str) -> None:
    """V13: the pre-RE-SHIP ``_setup_environment`` helper deliberately
    left ``RAPIDJSON_ROOT`` / ``FREETYPE_ROOT`` / ``EMSDK`` unset to
    truncate parsing. It must not return.
    """
    pattern = re.compile(r"^def\s+_setup_environment\s*\(", re.MULTILINE)
    assert not pattern.search(script_source), (
        "scripts/enumerate-symbols.py still defines `_setup_environment` — "
        "this is the V13 split-brain hack that deliberately omitted the "
        "deps env-vars so libclang truncated templateTypedefs. The shared "
        "ocjs_bindgen.enumeration.setup_full_environment is the only "
        "sanctioned setup path; delete the legacy helper."
    )


def test_script_imports_shared_enumeration(script_source: str) -> None:
    """Phase F3 contract: the script delegates to the shared module."""
    assert "from ocjs_bindgen.enumeration import" in script_source, (
        "scripts/enumerate-symbols.py must import from "
        "ocjs_bindgen.enumeration (Phase F3 consolidation requirement)."
    )
    for required in ("setup_full_environment", "enumerate_occt_classes"):
        assert required in script_source, (
            f"scripts/enumerate-symbols.py must import `{required}` from "
            f"ocjs_bindgen.enumeration — the shared module is the single "
            f"source of truth for OCCT enumeration (V13 RECLAIM)."
        )


def test_script_has_no_ast_walker(script_source: str) -> None:
    """No duplicate walker — every enumeration code path lives in the
    shared module so the script and discover.py see identical OCCT
    class sets by construction.
    """
    forbidden_patterns = [
        (r"\bimport\s+clang\.cindex\b", "clang.cindex import"),
        (r"\btuInfo\.allChildren\b", "tuInfo.allChildren iteration"),
        (r"\btuInfo\.classDict\.values\(\)", "tuInfo.classDict walk"),
        (
            r"clang\.cindex\.CursorKind\.(CLASS_DECL|STRUCT_DECL|ENUM_DECL)",
            "AST cursor-kind filter",
        ),
    ]
    for pattern, label in forbidden_patterns:
        assert not re.search(pattern, script_source), (
            f"scripts/enumerate-symbols.py contains a {label} — "
            f"V13 RECLAIM consolidated every AST walker into "
            f"ocjs_bindgen.enumeration so the script and discover.py "
            f"never drift apart. Remove the in-script walker and route "
            f"through enumerate_occt_classes() instead."
        )


def test_shared_module_uses_canonical_dedup(shared_module_source: str) -> None:
    """V13: the shared module MUST consume the existing
    ``dedupeTemplateTypedefsByCanonical`` from ``pipeline.generate`` —
    no parallel dedup implementation. A second copy would re-introduce
    the split-brain by allowing the two layers to drift in dedup
    semantics.
    """
    assert (
        "dedupeTemplateTypedefsByCanonical" in shared_module_source
        and "from ocjs_bindgen.pipeline.generate import" in shared_module_source
    ), (
        "ocjs_bindgen/enumeration/__init__.py must import "
        "`dedupeTemplateTypedefsByCanonical` from `ocjs_bindgen.pipeline.generate` "
        "(single source of truth for canonical-template dedup, V13 requirement)."
    )


def test_shared_module_resolves_full_deps_env(shared_module_source: str) -> None:
    """``setup_full_environment`` MUST resolve every dep env-var
    ``ocjs_bindgen.config.paths`` consults (``OCJS_ROOT``,
    ``OCCT_ROOT``, ``RAPIDJSON_ROOT``, ``FREETYPE_ROOT``, ``EMSDK``).
    Missing any of these resurrects the libclang truncation that was
    the original split-brain root cause.
    """
    for required in (
        "OCJS_ROOT",
        "OCCT_ROOT",
        "RAPIDJSON_ROOT",
        "FREETYPE_ROOT",
        "EMSDK",
    ):
        assert required in shared_module_source, (
            f"setup_full_environment must resolve `{required}` — "
            f"libclang truncates templateTypedefs at the first unresolved "
            f"header, which is the V13 split-brain root cause."
        )


def test_shared_module_dedupes_before_enumeration(shared_module_source: str) -> None:
    """Defence-in-depth: the shared module's enumeration walker must
    apply the canonical-template dedup before emitting the typedef
    bucket. Without this, the 43 NCollection alias-family collision
    re-surfaces at link time.
    """
    assert (
        "deduped_template_typedefs = dedupeTemplateTypedefsByCanonical(" in shared_module_source
    ), (
        "enumerate_occt_classes must call dedupeTemplateTypedefsByCanonical "
        "on tuInfo.templateTypedefs before emitting the typedef bucket. "
        "Skipping dedup re-introduces the 43-alias collision that the "
        "pre-RE-SHIP truncation hack was masking."
    )
