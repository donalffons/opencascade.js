"""Sentinel: `bind-symbols` NX target runs **before** `link`.

V3 RE-SHIP wired `bind-symbols` as an explicit NX `dependsOn` for the
`link` target so the producer can never lag its consumer. This sentinel
guards against an accidental edit to ``project.json`` re-introducing
the bootstrap-ordering bug.

Two independent assertions:

1. **NX dep graph (project.json)** — `link` MUST depend transitively on
   `bind-symbols`. Without this, a fresh tree would invoke
   `verifyBindings` before any producer wrote the manifest, the
   consumer would hard-fail (post-V3) with a regenerate-pointer, and
   nothing would actually fix it.

2. **Shell entry parity (build-wasm.sh)** — the `link` and `full`
   sub-commands MUST invoke `step_bind_symbols` before `step_link`.
   Direct shell invocations (`./build-wasm.sh link <yaml>`) bypass NX,
   so the script mirrors the dep-graph contract for parity.

Pinning both surfaces means a future refactor that hoists either layer
trips the test in the same commit, preserving the contract as a
single-source-of-truth.
"""

from __future__ import annotations

import json
import os
import re

OCJS_ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))


def _load_project_json() -> dict:
  with open(os.path.join(OCJS_ROOT, "project.json")) as f:
    return json.load(f)


# ----------------------------------------------------------------------------
# NX dep graph contract.
# ----------------------------------------------------------------------------


def test_bind_symbols_target_exists() -> None:
  """The `bind-symbols` target itself must be defined — `link.dependsOn`
  referencing a non-existent target would either fail at `nx graph`
  resolution or silently drop the ordering edge depending on Nx version.
  """
  project = _load_project_json()
  assert "bind-symbols" in project["targets"], (
    "`bind-symbols` NX target is missing from project.json — V3 RE-SHIP "
    "requires the producer as a first-class dep-graph node so `link` "
    "depends on it explicitly."
  )


def test_link_target_depends_transitively_on_bind_symbols() -> None:
  """The smoking-gun assertion: V3 regression was the producer running
  after the consumer. NX dep-graph ordering fixes it; this sentinel
  enforces the edge.
  """
  project = _load_project_json()
  pending = list(project["targets"]["link"]["dependsOn"])
  reachable = set()
  while pending:
    dependency = pending.pop()
    if dependency in reachable:
      continue
    reachable.add(dependency)
    pending.extend(project["targets"].get(dependency, {}).get("dependsOn", []))
  assert "bind-symbols" in reachable, (
    f"`link` must transitively depend on `bind-symbols`; reached {sorted(reachable)!r}. "
    f"Without this edge, the bind-symbols producer can run after the "
    f"link consumer and `manifest_registry.builtin_binding_symbols` will "
    f"hard-fail with a regenerate-pointer (V3 RE-SHIP contract)."
  )


def test_bind_symbols_target_depends_on_pch() -> None:
  """`bind-symbols` parses BUILTIN + consumer additionalBindFiles with
  libclang against `build/occt-includes/`, which `step_pch` produces.
  Without the `pch` dep, the libclang parse would fail on a fresh tree
  with "TopoDS.hxx not found".
  """
  project = _load_project_json()
  bind_deps = project["targets"]["bind-symbols"]["dependsOn"]
  assert "pch" in bind_deps, (
    f"`bind-symbols.dependsOn` must include `pch` (provides flat OCCT "
    f"include dir); got {bind_deps!r}."
  )


def test_bind_symbols_target_caches_manifest_output() -> None:
  """The producer's output is the single manifest file; declaring it
  in `outputs` lets NX cache the artefact alongside the task hash so
  warm-cache invocations skip re-parsing.
  """
  project = _load_project_json()
  outputs = project["targets"]["bind-symbols"]["outputs"]
  assert any(
    "additional-bind-symbols.json" in path for path in outputs
  ), f"`bind-symbols.outputs` must include the manifest; got {outputs!r}."


def test_bind_symbols_target_is_cacheable() -> None:
  """`cache: true` so warm runs hit the NX cache instead of re-parsing
  the BUILTIN + consumer blocks on every invocation. The cache key
  comes from the `inputs` set (script files + YAML hash + OCCT commit)
  so any genuine producer-relevant change invalidates the cache.
  """
  project = _load_project_json()
  assert project["targets"]["bind-symbols"]["cache"] is True


# ----------------------------------------------------------------------------
# Shell entry parity.
# ----------------------------------------------------------------------------


def _load_build_wasm_script() -> str:
  with open(os.path.join(OCJS_ROOT, "build-wasm.sh")) as f:
    return f.read()


def _find_first_invocation(body: str, fn_name: str) -> int:
  """Return the byte offset of the first non-comment line that invokes
  `fn_name` as a shell command (e.g. `step_link "$YAML_CONFIG"`),
  ignoring occurrences inside `#`-prefixed comment lines.

  Naively scanning with `body.find("step_link")` matches comments that
  reference the function by name (e.g. "the `step_link` call below
  sets …"), giving false-positive earliest positions and inverting the
  ordering assertion.
  """
  offset = 0
  for line in body.splitlines(keepends=True):
    stripped = line.lstrip()
    if stripped and not stripped.startswith("#") and fn_name in line:
      return offset + line.index(fn_name)
    offset += len(line)
  return -1


def test_build_wasm_link_subcommand_invokes_bind_symbols_first() -> None:
  """Direct `./build-wasm.sh link <yaml>` invocations bypass NX, so the
  shell driver mirrors the dep-graph by calling `step_bind_symbols`
  immediately before `step_link` inside the `link)` case branch.

  We extract the `link)` case body via `;;` and assert the
  `step_bind_symbols` call line precedes the `step_link` call line,
  ignoring any `#`-prefixed prose mentions of either function.
  """
  script = _load_build_wasm_script()
  match = re.search(r"\n\s*link\)\s*\n(?P<body>.*?);;\s*\n", script, flags=re.DOTALL)
  assert match is not None, "Could not locate `link)` case in build-wasm.sh"
  body = match.group("body")
  bs_idx = _find_first_invocation(body, "step_bind_symbols")
  link_idx = _find_first_invocation(body, "step_link")
  assert bs_idx >= 0, (
    "`link)` branch must invoke `step_bind_symbols` before `step_link` — "
    "shell entry mirrors NX dep-graph ordering for direct invocations."
  )
  assert link_idx > bs_idx, (
    f"`step_bind_symbols` (pos {bs_idx}) must precede `step_link` (pos "
    f"{link_idx}) inside the `link)` branch."
  )


def test_build_wasm_full_subcommand_invokes_bind_symbols_first() -> None:
  """The `full` sub-command runs the whole pipeline end-to-end. It
  MUST invoke `step_bind_symbols` between `step_sources_cmake` and
  `step_link` so a `./build-wasm.sh full <yaml>` invocation also
  honours the producer-before-consumer contract.
  """
  script = _load_build_wasm_script()
  match = re.search(r"\n\s*full\)\s*\n(?P<body>.*?);;\s*\n", script, flags=re.DOTALL)
  assert match is not None, "Could not locate `full)` case in build-wasm.sh"
  body = match.group("body")
  bs_idx = _find_first_invocation(body, "step_bind_symbols")
  link_idx = _find_first_invocation(body, "step_link")
  assert bs_idx >= 0, "`full)` branch must invoke `step_bind_symbols`"
  assert link_idx > bs_idx, (
    f"`step_bind_symbols` (pos {bs_idx}) must precede `step_link` "
    f"(pos {link_idx}) inside the `full)` branch."
  )
