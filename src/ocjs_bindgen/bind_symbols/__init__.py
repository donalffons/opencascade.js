"""Producer-side libclang Embind extractor.

Dedicated NX-graph stage that runs **between** ``generate`` and ``link``
and writes ``build/additional-bind-symbols.json`` so the link-time
``verifyBindings`` consumer (and the post-link ``validate-build.py``
consumer) can both read the manifest without depending on the link stage
having opened libclang first.

Lifting this work into its own stage fixes the V3 bootstrap-ordering bug
that the original PR introduced — the in-process producer inside
``yaml_build.runBuild::getAdditionalBindFilesO()`` ran *after* the
``verifyBindings`` consumer that needed the manifest, so the loader fell
back to "manifest absent ⇒ empty frozenset" silently. The NX dep-graph
contract (``link.dependsOn = [..., "bind-symbols", ...]``) now hard-enforces
the order architecturally; missing manifest at link time means the dep
graph wasn't honoured and the loader raises with a regenerate-pointer.

Producer side of the contract documented in
``ocjs_bindgen.link.manifest_registry.builtin_binding_symbols``.

CLI surface lives in ``__main__.py`` so the module is runnable via
``python -m ocjs_bindgen.bind_symbols <yaml-path>`` from
``build-wasm.sh bind-symbols``.
"""

from __future__ import annotations

import json
import os
from collections.abc import Iterable

import yaml

from ocjs_bindgen.ast.parse import parse_binding_source
from ocjs_bindgen.ast.walker import extract_class_registrations
from ocjs_bindgen.config.paths import getBindingSourceParseIncludePaths
from ocjs_bindgen.config.yaml_sources import resolve_source_files
from ocjs_bindgen.embind_builtins import BUILTIN_BINDINGS_SOURCE
from ocjs_bindgen.link.manifest_registry import ADDITIONAL_BIND_SYMBOLS_SCHEMA


def _iter_additional_bind_file_sources(
    yaml_path: str,
    build_config: dict,
) -> Iterable[str]:
    """Yield each build's ordered raw-binding translation-unit source."""
    builds = [build_config.get("mainBuild") or {}]
    builds.extend(build_config.get("extraBuilds") or [])
    for index, build in enumerate(builds):
        field = (
            "mainBuild.additionalBindFiles"
            if index == 0
            else f"extraBuilds[{index - 1}].additionalBindFiles"
        )
        files = resolve_source_files(
            yaml_path,
            build.get("additionalBindFiles"),
            field,
        )
        if files:
            yield "\n".join(entry["content"] for entry in files)


def extract_registrations_for_yaml(yaml_path: str) -> set[str]:
    """Parse ``BUILTIN_BINDINGS_SOURCE`` plus every per-block
    ``additionalBindFiles`` in the YAML config and return the union of
    Embind registration names.

    Each build's files are concatenated onto the builtin source the same way
    ``runBuild::getAdditionalBindFilesO()`` does at link time, then parsed
    through ``ast/parse.py::parse_binding_source`` (libclang) and
    walked with ``ast/walker.py::extract_class_registrations`` (AST
    visitor — no regex). The union keeps the manifest faithful across all
    generated build outputs.
    """
    with open(yaml_path) as f:
        build_config = yaml.safe_load(f)
    registrations: set[str] = set()
    sources_to_parse: list[str] = [BUILTIN_BINDINGS_SOURCE]
    for extra in _iter_additional_bind_file_sources(yaml_path, build_config):
        sources_to_parse.append(BUILTIN_BINDINGS_SOURCE + "\n" + extra)
    include_paths = getBindingSourceParseIncludePaths()
    seen_sources: set[str] = set()
    for source in sources_to_parse:
        # De-dupe identical TUs (a YAML with no consumer binding files
        # produces a single source = BUILTIN; multiple identical blocks
        # would parse the same TU repeatedly otherwise).
        if source in seen_sources:
            continue
        seen_sources.add(source)
        tu = parse_binding_source(source, include_paths)
        registrations.update(extract_class_registrations(tu))
    return registrations


def write_manifest(registrations: set[str], build_dir: str) -> str:
    """Serialise the registrations to
    ``<build_dir>/additional-bind-symbols.json`` with the v1 schema
    discriminator the consumer asserts on.
    """
    os.makedirs(build_dir, exist_ok=True)
    manifest_path = os.path.join(build_dir, "additional-bind-symbols.json")
    payload = {
        "schema": ADDITIONAL_BIND_SYMBOLS_SCHEMA,
        "symbols": sorted(registrations),
    }
    with open(manifest_path, "w") as f:
        json.dump(payload, f, indent=2)
    return manifest_path


def main(yaml_path: str, build_dir: str) -> str:
    """End-to-end NX-stage entry point. Returns the manifest path."""
    registrations = extract_registrations_for_yaml(yaml_path)
    manifest_path = write_manifest(registrations, build_dir)
    print(
        f"bind-symbols: {len(registrations)} Embind registration(s) "
        f"-> {manifest_path}",
        flush=True,
    )
    return manifest_path
