"""Shared symbol-resolution manifest registry.

Single source of truth for every post-link symbol-resolution mechanism.
Both the link-time `verifyBindings` path in `yaml_build.py` and the
post-link `validate-build.py` script import these loaders so they
classify a requested binding identically — no consumer re-parses C++,
re-runs set-difference math, or re-implements alias resolution.

Each resolution mechanism has exactly one producer (a pipeline stage that
owns the semantic knowledge) writing a JSON manifest in `build/`, and one
loader here reading it. The producer/consumer manifest contract lets
post-link auditors converge on the same partition the linker actually
acted on.

Loaders
-------
collect_compiled_symbols(build_dir) -> set[str]
    Symbols whose `.cpp.o` was produced by the compile stage. Walks
    `compiled-bindings/` (primary) and falls back to `bindings/`
    (legacy layout) so partial rebuilds against older trees still work.

load_ncollection_alias_index(build_dir) -> dict[str, str]
    Maps every NCollection typedef alias (e.g. `TColgp_Array1OfPnt`) to
    its canonical mangled spelling (`NCollection_Array1_gp_Pnt`). Reads
    `build/ncollection-manifest.json`'s `template_typedefs` field (schema
    v2, written by `discover.py::write_manifest`). Hard-fails on pre-v2
    manifests with a regenerate-pointer error — the v1 schema misread
    `source_classes[]` (a reachability tag) as an alias map, which is
    the bug V1 RE-SHIP eliminates.

builtin_binding_symbols(build_dir) -> frozenset[str]
    Embind registration names from the dedicated `bind-symbols` NX stage
    (`ocjs_bindgen.bind_symbols.main`) which parses
    BUILTIN_BINDINGS_SOURCE + consumer additionalBindFiles via
    libclang and writes `build/additional-bind-symbols.json`. NX dep
    graph guarantees the manifest exists before any consumer that
    depends on `bind-symbols`; missing manifest = consumer was invoked
    out of order, which the loader surfaces as a hard-fail.

resolve_requested_symbols(requested, compiled, alias_index, builtins)
    Partition a requested binding set into four buckets:
      * `satisfied_by_compiled` — present in `compiled`
      * `alias_resolved`        — alias name with a compiled canonical
      * `builtin`               — registered in the bindings TU
      * `truly_missing`         — none of the above; genuine link gap

Degradation
-----------
Two failure modes are distinguished:

* **Manifest absent** (fresh checkout, never built) — loaders return an
  empty container; the resulting `truly_missing` bucket simply contains
  every requested symbol. Verifier callers detect the manifest path is
  missing and degrade gracefully.
* **Manifest present but pre-v2 / malformed** — loaders raise a
  `ManifestSchemaError` carrying a regenerate-pointer message. Silent
  degradation on a stale manifest would re-introduce the false-positive
  class the audit identified.
"""

from __future__ import annotations

import json
import os
from dataclasses import dataclass, field

NCOLLECTION_MANIFEST_SCHEMA = "ncollection-manifest-v2"
ADDITIONAL_BIND_SYMBOLS_SCHEMA = "additional-bind-symbols-v1"


class ManifestSchemaError(RuntimeError):
  """Raised when a manifest is present on disk but is missing the
  expected schema discriminator or required field. Carries an actionable
  regenerate-pointer message so the operator sees the exact NX target to
  re-run.
  """


# Kept in sync with `discover.CUSTOM_CODE_SOURCE_TAG` (also duplicated in
# `yaml_build._CUSTOM_CODE_SOURCE_TAG`). Marks manifest declarations
# whose `source_classes[]` entry is the custom-code sentinel
# rather than a real OCCT class; the v2 `template_typedefs` field no
# longer consults `source_classes[]` for alias resolution but the
# sentinel still surfaces in declarations for `_filter_auto_symbols_by_scope`.
_CUSTOM_CODE_SOURCE_TAG = "__custom__"


@dataclass(frozen=True)
class SymbolResolution:
  """Typed partition of a requested binding set across the four
  resolution mechanisms documented in the module docstring.

  Fields are immutable so consumers can safely cache and share the
  result across threads. `alias_resolved` is a `dict` (not a `frozenset`)
  because callers want the canonical-mangled spelling for diagnostic
  output (`alias -> canonical (alias-resolved)`).
  """

  satisfied_by_compiled: frozenset[str]
  alias_resolved: dict[str, str] = field(default_factory=dict)
  builtin: frozenset[str] = frozenset()
  truly_missing: frozenset[str] = frozenset()


def collect_compiled_symbols(
  build_dir: str,
  additional_roots: tuple[str, ...] = (),
) -> set[str]:
  """Return every symbol whose `<name>.cpp.o` exists under `build_dir`.

  Walks `compiled-bindings/` first (the layout `compileBindings.py`
  writes to) and falls back to `bindings/` (legacy layout where
  `.cpp` and `.cpp.o` coexist) so partial builds against older trees
  still resolve.
  """
  compiled: set[str] = set()
  candidates = [
    os.path.join(build_dir, "compiled-bindings"),
    os.path.join(build_dir, "bindings"),
    *additional_roots,
  ]
  for root in candidates:
    if not os.path.isdir(root):
      continue
    for _dirpath, dirnames, filenames in os.walk(root):
      dirnames.sort()
      filenames.sort()
      for fname in filenames:
        if fname.endswith(".cpp.o"):
          compiled.add(fname[:-6])
  return compiled


def load_ncollection_alias_index(build_dir: str) -> dict[str, str]:
  """Return a `typedef_alias -> canonical_mangled_name` lookup built
  from `build/ncollection-manifest.json`'s **`template_typedefs`** field.

  The v2 schema (produced by `discover.py::write_manifest` with
  `tuInfo` plumbed) serialises `_build_typedef_alias_map`'s output —
  the in-memory mapping of every `using A = NCollection_X<Y>;` or
  `typedef NCollection_X<Y> A;` declaration parsed from OCCT headers.
  Used by `resolve_requested_symbols` to demote alias misses out of the
  `truly_missing` bucket when the canonical IS compiled — the alias
  name lacks its own `.cpp.o` because the linker resolves the typedef
  to the canonical mangled spelling at link time.

  Schema enforcement:

  * **Missing manifest** (fresh checkout): returns `{}` so the
    verifier degrades gracefully (`truly_missing` carries everything).
  * **Pre-v2 manifest** (stale build tree): raises
    `ManifestSchemaError` — the v1 schema misread `source_classes[]`
    as an alias map, so silent fallback would re-introduce the
    false-positive class the audit eliminated.
  """
  manifest_path = os.path.join(build_dir, "ncollection-manifest.json")
  if not os.path.isfile(manifest_path):
    return {}
  with open(manifest_path) as f:
    manifest = json.load(f)
  schema = manifest.get("schema")
  if schema != NCOLLECTION_MANIFEST_SCHEMA:
    raise ManifestSchemaError(
      f"ncollection-manifest.json schema {schema!r} != "
      f"{NCOLLECTION_MANIFEST_SCHEMA!r}; regenerate via "
      f"`pnpm nx run ocjs:generate` (the v1 schema misread "
      f"source_classes as an alias map; v2 serialises the real "
      f"typedef alias map in `template_typedefs`)"
    )
  typedef_aliases = manifest.get("template_typedefs")
  if not isinstance(typedef_aliases, dict):
    raise ManifestSchemaError(
      "ncollection-manifest.json is v2 but missing required "
      "`template_typedefs` field; regenerate via "
      "`pnpm nx run ocjs:generate`"
    )
  return dict(typedef_aliases)


def builtin_binding_symbols(build_dir: str) -> frozenset[str]:
  """Return every Embind registration name from the `bind-symbols` NX
  stage's `additional-bind-symbols.json` manifest.

  Produced by `ocjs_bindgen.bind_symbols.main`, which parses
  `BUILTIN_BINDINGS_SOURCE` + consumer `additionalBindFiles` via
  libclang and serialises the union. NX dep graph guarantees the
  manifest exists before any target that depends on `bind-symbols`;
  the shell wrapper `./build-wasm.sh link <yaml>` mirrors the contract
  by invoking `step_bind_symbols` immediately before `step_link`.

  Schema enforcement (hard-fail on both modes):

  * **Manifest absent** — raises `ManifestSchemaError`. The previous
    soft-fall-through-to-empty behaviour was the V3 regression vector:
    the in-process producer ran *after* this consumer, so the consumer
    silently saw "no builtins registered" and bucketed every Embind
    builtin into `truly_missing`. With the producer now a dedicated NX
    stage, missing manifest at this loader = stage was skipped =
    operator must regenerate.
  * **Present but missing schema discriminator** — raises
    `ManifestSchemaError`. Discriminator was added with the v1 schema
    when the producer was hoisted; absence indicates a stale manifest
    from a pre-RE-SHIP build tree.
  """
  manifest_path = os.path.join(build_dir, "additional-bind-symbols.json")
  if not os.path.isfile(manifest_path):
    raise ManifestSchemaError(
      f"additional-bind-symbols.json not found at {manifest_path!r}; "
      f"run `pnpm nx run ocjs:bind-symbols` (or `pnpm nx run ocjs:build` "
      f"for the full chain, or `./build-wasm.sh bind-symbols <yaml>` "
      f"for direct shell invocations). The bind-symbols stage is a "
      f"hard prerequisite for every link/validate target — soft-fall-"
      f"through-to-empty was the V3 regression vector that bucketed "
      f"every Embind builtin into `truly_missing`."
    )
  with open(manifest_path) as f:
    manifest = json.load(f)
  schema = manifest.get("schema")
  if schema != ADDITIONAL_BIND_SYMBOLS_SCHEMA:
    raise ManifestSchemaError(
      f"additional-bind-symbols.json schema {schema!r} != "
      f"{ADDITIONAL_BIND_SYMBOLS_SCHEMA!r}; regenerate via "
      f"`pnpm nx run ocjs:bind-symbols` (or `pnpm nx run ocjs:build` "
      f"for the full chain). Schema discriminator was added when the "
      f"producer was hoisted out of the link stage into its own NX "
      f"target."
    )
  return frozenset(manifest.get("symbols", []))


def resolve_requested_symbols(
  requested: set[str],
  compiled: set[str],
  alias_index: dict[str, str],
  builtins: frozenset[str],
) -> SymbolResolution:
  """Partition `requested` across the four resolution mechanisms.

  Precedence (highest to lowest): direct compilation > NCollection
  typedef alias (canonical IS compiled) > Embind builtin > truly missing.

  The precedence order matters when a symbol qualifies under multiple
  mechanisms: a directly-compiled symbol that happens to share a name
  with an Embind builtin (vanishingly unlikely in practice) reports as
  `satisfied_by_compiled` so the link-time outcome the bindings tree
  reflects matches the validator's view.
  """
  satisfied: set[str] = set()
  alias_resolved: dict[str, str] = {}
  builtin_hits: set[str] = set()
  truly_missing: set[str] = set()
  for sym in requested:
    if sym in compiled:
      satisfied.add(sym)
      continue
    canonical = alias_index.get(sym)
    if canonical and canonical in compiled:
      alias_resolved[sym] = canonical
      continue
    if sym in builtins:
      builtin_hits.add(sym)
      continue
    truly_missing.add(sym)
  return SymbolResolution(
    satisfied_by_compiled=frozenset(satisfied),
    alias_resolved=alias_resolved,
    builtin=frozenset(builtin_hits),
    truly_missing=frozenset(truly_missing),
  )
