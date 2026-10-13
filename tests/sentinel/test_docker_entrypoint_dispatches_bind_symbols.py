"""Sentinel: Docker entrypoint routes `link` through NX so `bind-symbols` runs.

The V3 RE-SHIP contract — `bind-symbols` must run before `link` — is
enforced by NX's dep graph. The Docker entrypoint's `link` sub-command
MUST dispatch through `npx nx run ocjs:link` (not `./build-wasm.sh link`
directly), otherwise the dep graph is bypassed and the manifest is
missing inside the container — the consumer (`manifest_registry.builtin_binding_symbols`)
then hard-fails with a regenerate-pointer pointing at an NX target the
container's entrypoint never honoured.

This sentinel reads `scripts/docker-entrypoint.sh` and asserts:

1. The `link` case dispatches through `npx nx run ocjs:link` (via the
   `run_nx_with_yaml` helper, which `exec`s `npx nx`).
2. The `link` case does NOT shortcut directly to `./build-wasm.sh link`
   (which would skip the NX dep-graph resolution).

A future "optimisation" that replaces the NX dispatch with a direct
shell call would trip this test, surfacing the regression in the same
commit instead of at consumer-runtime when their container fails to
build.
"""

from __future__ import annotations

import os
import re

OCJS_ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
ENTRYPOINT_PATH = os.path.join(OCJS_ROOT, "scripts", "docker-entrypoint.sh")


def _load_entrypoint() -> str:
  with open(ENTRYPOINT_PATH) as f:
    return f.read()


def _extract_link_case_body(script: str) -> str:
  """Return the body of the `link)` case block in the entrypoint
  script, ending at the `;;` terminator. Mirrors the shell parser the
  user would see when reading the file.
  """
  match = re.search(
    r"\n\s*link\)\s*\n(?P<body>.*?);;\s*\n",
    script,
    flags=re.DOTALL,
  )
  assert match is not None, (
    "Could not locate `link)` case branch in docker-entrypoint.sh — "
    "structural mismatch with the expected shell dispatch shape."
  )
  return match.group("body")


def test_link_subcommand_routes_through_nx_dispatch() -> None:
  """The `link)` case must call `run_nx_with_yaml "link" ...` so NX
  resolves the full dep graph (apply-patches → pch → generate →
  compile-bindings → compile-sources → **bind-symbols** → link).
  """
  body = _extract_link_case_body(_load_entrypoint())
  assert "run_nx_with_yaml" in body, (
    f"`link)` case must dispatch through `run_nx_with_yaml` so NX dep "
    f"graph runs the `bind-symbols` producer before `link` inside the "
    f"container; current body:\n{body}"
  )
  assert '"link"' in body, (
    f"`link)` case must pass the `link` NX target name to "
    f"`run_nx_with_yaml`; current body:\n{body}"
  )


def test_link_subcommand_does_not_shortcut_to_build_wasm_directly() -> None:
  """Bypassing NX (`./build-wasm.sh link <yaml>`) would skip the dep
  graph; while build-wasm.sh itself now invokes `step_bind_symbols`
  before `step_link`, NX caching is the wider correctness mechanism
  for the Docker UX. Forbid the shortcut so the contract stays sharp.
  """
  body = _extract_link_case_body(_load_entrypoint())
  assert "./build-wasm.sh link" not in body, (
    f"`link)` case must not shortcut to `./build-wasm.sh link` directly "
    f"(NX dep-graph dispatch is required for the V3 RE-SHIP contract); "
    f"current body:\n{body}"
  )


def test_run_nx_with_yaml_helper_uses_exec_npx_nx() -> None:
  """The shared dispatch helper itself must `exec npx nx run ocjs:<target>` —
  ensures the link subcommand inherits the NX-cached path even when
  future contributors add new NX-dispatched subcommands.
  """
  script = _load_entrypoint()
  helper_match = re.search(
    r"run_nx_with_yaml\(\)\s*\{(?P<body>.*?)\n\}\s*\n",
    script,
    flags=re.DOTALL,
  )
  assert helper_match is not None, (
    "Could not locate `run_nx_with_yaml()` helper definition in "
    "docker-entrypoint.sh."
  )
  helper_body = helper_match.group("body")
  assert re.search(r"exec\s+npx\s+nx\s+run\s+", helper_body), (
    f"`run_nx_with_yaml()` must `exec npx nx run ocjs:<target>`; "
    f"current body:\n{helper_body}"
  )
