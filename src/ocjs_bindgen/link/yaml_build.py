#!/usr/bin/python3

import hashlib
import json
import multiprocessing
import os
import re
import shutil
import subprocess
import sys
from argparse import ArgumentParser
from itertools import chain

import yaml
from cerberus import Validator

from filter.filterPackages import filterPackages
from ocjs_bindgen.config.flags import (
    EXTRA_COMPILE_FLAGS,
    PATH_PREFIX_FLAGS,
    SIMD_FLAGS,
    WASM_EXCEPTION_FLAGS,
    BuildFlagMismatch,
    validate_build_flags,
)
from ocjs_bindgen.config.paths import BUILD_DIR, OCJS_ROOT, PCH_FILE, getFlatIncludePaths
from ocjs_bindgen.config.yaml_sources import resolve_source_files, source_file_manifest
from ocjs_bindgen.link.libraries import immutable_cmake_libraries
from ocjs_bindgen.link.manifest_registry import (
    builtin_binding_symbols as _builtin_binding_symbols,
)
from ocjs_bindgen.link.manifest_registry import (
    collect_compiled_symbols as _collect_compiled_symbols,
)
from ocjs_bindgen.link.manifest_registry import (
    load_ncollection_alias_index as _load_ncollection_alias_index,
)
from ocjs_bindgen.link.manifest_registry import (
    resolve_requested_symbols as _resolve_requested_symbols,
)

try:
    import provenance as prov
except ImportError:
    prov = None

_yaml_config_hash = ""

# Populated by `main()` immediately after `_filter_auto_symbols_by_scope`
# finishes. `runBuild::prov.add_linking(...)` reads these so the
# per-variant provenance sidecar carries the NCollection auto-discovery
# linked/total/dropped triple. Module-level (not threaded through
# runBuild kwargs) because the link stage already shares this module's
# global state — `_yaml_config_hash` follows the same pattern.
_ncollection_link_stats: dict[str, int] = {
  "linked": 0,
  "total": 0,
  "dropped": 0,
}

# Strict-types gate — when the link-time `.d.ts` post-processor rewrites any
# method signature to bare `unknown` (because a referenced class is reachable
# from an in-scope class but missing from the YAML scope) or any
# `unbound_reference` diagnostic was collected during codegen, the gate
# always prints a triage summary to stderr so the operator sees the missing
# types without having to flip an env var. When `OCJS_STRICT_TYPES=1`, the
# gate additionally raises `RuntimeError` so CI can treat the artefact as
# un-shippable. Default behaviour (unset, `=0`, or any other value) is
# warn-only — the build proceeds, but the operator always learns what was
# silently rewritten.
#
# Rationale: the previous Docker default of `=1` meant every consumer of
# the published image passed `-e OCJS_STRICT_TYPES=0` to get a build at all
# (the OCCT surface has ~1084 inherent rewrites). A guardrail everybody
# disables stops being a guardrail; flipping the default keeps the warning
# always-on while preserving fail-loud as an explicit CI opt-in.
#
# Tunable so that diagnostic non-shipping builds can opt out cleanly.
_STRICT_TYPES_REWRITE_BUDGET = 0
# Tokens used to detect `: unknown;` / `: unknown)` / `<unknown,...>` rewrites.
_UNKNOWN_TOKEN_RE = re.compile(
  r"(?<![A-Za-z0-9_])unknown(?![A-Za-z0-9_])"
)


def _count_unknown_tokens(source: str) -> int:
  """Return the number of bare `unknown` identifier tokens in `source`."""
  return len(_UNKNOWN_TOKEN_RE.findall(source))


def _render_type_only_aliases(
  alias_index: dict[str, str],
  declared_names: set[str],
) -> str:
  """Render public typedef names backed by an emitted canonical class."""
  lines = []
  identifier = re.compile(r"^[A-Za-z_][A-Za-z0-9_]*$")
  for alias, canonical in sorted(alias_index.items()):
    if alias in declared_names or canonical not in declared_names:
      continue
    if alias == canonical:
      continue
    if not identifier.fullmatch(alias) or not identifier.fullmatch(canonical):
      continue
    lines.append(f"export type {alias} = {canonical};")
  return "\n".join(lines) + ("\n" if lines else "")


def _enforce_strict_types_gate(
  *,
  typescriptDefinitionOutput: str,
  rewrites_to_unknown: int,
  diagnostics,
) -> None:
  """Strict-types warn-by-default gate.

  Runs after `_replace_undeclared_with_unknown` has finished its pass.
  Always prints a triage summary to stderr when rewrites or unbound
  references are detected, so the operator sees the failure mode every
  build. When `OCJS_STRICT_TYPES=1`, additionally raises `RuntimeError`
  with a self-contained, path-agnostic, actionable message so CI can
  reject the artefact. Default (unset / `=0` / any other value) is
  warn-only -- artefact ships, but the warning is unmissable.
  """
  unbound = diagnostics.get("unbound_reference") if diagnostics else None
  unbound = unbound or {}
  if rewrites_to_unknown <= _STRICT_TYPES_REWRITE_BUDGET and not unbound:
    # Clean build -- silent in both warn and strict modes.
    return

  strict_mode = os.environ.get("OCJS_STRICT_TYPES") == "1"
  header = (
    "OCJS_STRICT_TYPES gate failure summary"
    if strict_mode
    else "OCJS_STRICT_TYPES WARNING: missing types in .d.ts"
  )

  # Triage summary -- always printed (warn mode) or printed-before-raise
  # (strict mode). Routed to stderr so it's clearly a diagnostic separate
  # from regular build progress output on stdout.
  print(f"\n=== {header} ===", file=sys.stderr, flush=True)
  print(
    f"  rewrites to 'unknown': {rewrites_to_unknown} "
    f"(budget: {_STRICT_TYPES_REWRITE_BUDGET})",
    file=sys.stderr,
    flush=True,
  )
  print(
    f"  unbound class references: {len(unbound)} unique",
    file=sys.stderr,
    flush=True,
  )
  if unbound:
    print("  Top offenders (type spelling -> count):", file=sys.stderr, flush=True)
    for type_info, count in sorted(unbound.items(), key=lambda x: -x[1])[:20]:
      print(f"    {type_info} ({count}x)", file=sys.stderr, flush=True)
    if len(unbound) > 20:
      print(f"    ... and {len(unbound) - 20} more", file=sys.stderr, flush=True)
  # Sample up to 10 lines that contain a freshly-rewritten `: unknown` so
  # the engineer can grep for them in the output. We can't reliably tell
  # which `: unknown` lines are new vs original after the rewrite is done,
  # so we list ALL `: unknown` occurrences as candidates — the budget
  # already filtered out the always-zero clean case.
  if rewrites_to_unknown > _STRICT_TYPES_REWRITE_BUDGET:
    candidates = []
    for line in typescriptDefinitionOutput.splitlines():
      if _UNKNOWN_TOKEN_RE.search(line):
        candidates.append(line.strip())
        if len(candidates) >= 10:
          break
    if candidates:
      print("  Sample lines with `unknown` rewrites:", file=sys.stderr, flush=True)
      for c in candidates:
        print(f"    {c}", file=sys.stderr, flush=True)

  if not strict_mode:
    # Warn-only footer: same call-to-action as the strict-mode error, plus
    # the OCJS_STRICT_TYPES=1 hint so CI consumers know how to escalate.
    print(
      "  This is a WARNING -- the build will continue. To escalate to a "
      "build failure in CI, set OCJS_STRICT_TYPES=1.",
      file=sys.stderr,
      flush=True,
    )
    print(
      "  Action: ensure `TypescriptBindings.resolve_type` records the "
      "missing class identifier into `referenced_classes` "
      "(see ocjs_bindgen.codegen.bindings + ocjs_bindgen.resolver.strategies) "
      "so the structural lift in `_compute_yaml_class_scope` picks it up "
      "on the next link cycle.",
      file=sys.stderr,
      flush=True,
    )
    return

  raise RuntimeError(
    "Strict-types gate (OCJS_STRICT_TYPES=1) refused to ship the .d.ts: "
    f"detected {rewrites_to_unknown} method signatures whose types were "
    f"rewritten to bare 'unknown', and {len(unbound)} unbound class "
    "references collected during link-time codegen. This is the silent "
    "failure mode where the link-time filter excludes a "
    "class that is genuinely reachable through an in-scope class's method "
    "signature, and the d.ts post-processor neutralises the dangling "
    "reference to keep TS valid — leaving consumers with TypeScript that "
    "compiles cleanly but crashes at runtime.\n"
    "\n"
    "Action: ensure `TypescriptBindings.resolve_type` records the missing "
    "class identifier into `referenced_classes` (see "
    "ocjs_bindgen.codegen.bindings + ocjs_bindgen.resolver.strategies) "
    "so the structural lift in `_compute_yaml_class_scope` "
    "(ocjs_bindgen.link.yaml_build) picks it up on the next link cycle, "
    "then re-run. The most common cause is a freshly-introduced resolver "
    "code path that emits a C++ class spelling without routing it through "
    "`_record_referenced_class` — every emission point in "
    "`resolver.strategies.{fallback,template}` already does this; mirror "
    "the pattern in any new strategy. Set OCJS_STRICT_TYPES=0 (or unset "
    "it, which is the new default) to demote this failure to a warning "
    "for diagnostic non-shipping builds only — DO NOT ship the resulting "
    "artifacts to consumers."
  )


# PR 2.6 — link rewriter pipeline lives in ocjs_bindgen.link.rewrite.
# Re-export the legacy entry point so the merge driver below keeps its
# original call shape; the implementation is now a composable
# `LinkRewriter` chain that future passes (e.g. `RedundantUnknownAliasDropper`)
# can plug into without re-touching the link driver.
# Forward-declaration + inline-namespace preamble injected into BOTH the
# binding-source TU AND every generated binding TU (via embindPreamble in
# generateBindings.py). The EM_JS *definition* lives only in the
# binding-source TU (a regular C function — one definition only) so the
# linker resolves the symbol once; the per-binding TUs see the namespace
# helpers and an extern "C" forward decl. Without this in the binding
# preamble, every binding that references `::ocjs::getRbvDispose()` fails to
# compile with "no member named 'ocjs' in the global namespace" and the
# linker dead-code-eliminates the EM_JS symbol from the final JS glue.
#
# Source of truth lives in `ocjs_bindgen.embind_builtins`; both this module
# and the dedicated `ocjs_bindgen.bind_symbols` NX stage import the constants
# from there so the link compile and the bind-symbols extractor always see
# byte-identical source.
from ocjs_bindgen.embind_builtins import (  # noqa: E402
    BUILTIN_BINDINGS_SOURCE,
)
from ocjs_bindgen.link.rewrite import (  # noqa: E402
    replace_undeclared_with_unknown as _replace_undeclared_with_unknown,
)


def verifyBindings(
  bindings,
  libraryBasePath,
  *,
  custom_compiled_root=None,
) -> bool:
  """Verify every requested binding has a compiled `.o`, an NCollection
  typedef alias resolving to a compiled canonical, or an Embind builtin
  registration in `build/additional-bind-symbols.json`.

  Behaviour now delegates to `ocjs_bindgen.link.manifest_registry` so the
  link-time and post-link `validate-build.py` views of "missing" stay
  byte-identical (the manifest_registry consumer is the same loader chain
  for both paths). Truly-missing entries always raise — no env-var gate
  — because Phase 1/2/3 manifest-aware resolution buckets every false
  positive (typedef aliases, builtins) out of `truly_missing` by
  construction.
  """
  additional_roots = (
    (custom_compiled_root,)
    if custom_compiled_root
    else ()
  )
  compiled = _collect_compiled_symbols(libraryBasePath, additional_roots)
  requested = {b["symbol"] for b in bindings}
  missing = requested - compiled
  if not missing:
    return
  alias_index = _load_ncollection_alias_index(libraryBasePath)
  builtins = _builtin_binding_symbols(libraryBasePath)
  resolution = _resolve_requested_symbols(missing, compiled, alias_index, builtins)
  alias_resolved = resolution.alias_resolved
  builtin_hits = resolution.builtin
  truly_missing = resolution.truly_missing

  if alias_resolved:
    print(
      f"INFO: {len(alias_resolved)} of {len(bindings)} requested bindings "
      f"resolve via NCollection typedef alias to a compiled canonical "
      f"(linker will substitute at link-time):",
      flush=True,
    )
    for alias, canonical in sorted(alias_resolved.items())[:20]:
      print(f"  - {alias} -> {canonical} (alias-resolved)", flush=True)
    if len(alias_resolved) > 20:
      print(f"  ... and {len(alias_resolved) - 20} more", flush=True)

  if builtin_hits:
    print(
      f"INFO: {len(builtin_hits)} of {len(bindings)} requested bindings "
      f"resolve via Embind builtin registration in the link-stage "
      f"binding-source TU:",
      flush=True,
    )
    for name in sorted(builtin_hits)[:20]:
      print(f"  - {name} (builtin)", flush=True)
    if len(builtin_hits) > 20:
      print(f"  ... and {len(builtin_hits) - 20} more", flush=True)

  if truly_missing:
    # V10 — hard-fail unconditionally. Phase 1's `resolve_requested_symbols`
    # already partitions every false positive (NCollection typedef alias,
    # Embind builtin) out of `truly_missing`, so anything that survives
    # both filters is a genuine link-stage gap. No env-var escape hatch:
    # the pre-existing `OCJS_STRICT_VERIFY` flag was a temporary safety
    # net from before the alias/builtin filters existed, and it was the
    # canonical CI mechanism for silently regressing to soft-fall-through.
    print(
      f"ERROR: {len(truly_missing)} of {len(bindings)} requested bindings "
      f"have no compiled .o file, no canonical alias resolution, and no "
      f"Embind builtin registration:",
      flush=True,
    )
    for name in sorted(truly_missing)[:20]:
      print(f"  - {name}", flush=True)
    if len(truly_missing) > 20:
      print(f"  ... and {len(truly_missing) - 20} more", flush=True)
    raise RuntimeError(
      f"verifyBindings: {len(truly_missing)} unresolved symbol(s) after "
      f"alias + builtin resolution: {sorted(truly_missing)[:10]}"
      + ("..." if len(truly_missing) > 10 else "")
    )

# `_auto_symbols` is now a per-build set computed inside `main()` from
# the intersection of the global manifest with the consumer YAML's reachable
# class scope (source-class tagging + ancestor lift + custom sentinel). The
# module-level binding remains as the default `shouldProcessSymbol` reads
# from until `main()` overrides it; an empty default ensures the legacy
# "include every auto-discovered NCollection" behaviour is *not* available
# unless `main()` runs.
_auto_symbols: set = set()


def _load_full_manifest_symbols(build_dir) -> set:
  """Return EVERY mangled name in `ncollection-manifest.json`, unfiltered.

  Used only by the stale-fragment cleanup in `main()` — a fragment whose
  stem matches any entry in the global manifest is non-stale across runs
  (even if it's not in the current YAML's reachable set). The per-YAML
  link-time filter (`_filter_auto_symbols_by_scope`) is a separate
  concern; the cleanup uses this broader test so cross-YAML cache reuse
  of auto-discovered NCollection fragments stays correct.
  """
  manifest_path = os.path.join(build_dir, "ncollection-manifest.json")
  if os.path.isfile(manifest_path):
    with open(manifest_path) as f:
      return set(json.load(f).get("symbols", []))
  return set()


# Kept in sync with `discover.CUSTOM_CODE_SOURCE_TAG`. Duplicated as
# a literal here to avoid forcing the link driver to import from discover
# (which would transitively pull libclang into every link).
_CUSTOM_CODE_SOURCE_TAG = "__custom__"


# R10 — OCCT-internal deprecation pragmas fired transitively via
# `BUILTIN_BINDINGS_SOURCE`. Headers `NCollection_Vector.hxx` and
# `TColStd_IndexedDataMapOfStringString.hxx` emit `#pragma message(...)` on
# every include (clang reports them under `[-W#pragma-messages]`). The
# headers are OCCT-internal and not actionable from OCJS — filter the
# noise out of stderr and collapse into a single INFO summary per link so
# the warning stream surfaces genuine issues.
_DEPRECATED_OCCT_HEADERS = (
  "NCollection_Vector.hxx",
  "TColStd_IndexedDataMapOfStringString.hxx",
)


def _filter_occt_deprecation_pragmas(stderr_text: str) -> tuple[str, int]:
  """Return `(remaining_stderr, filtered_count)`.

  A "filtered" line matches BOTH (a) a deprecated OCCT header name AND
  (b) the `pragma message` substring. Multi-line clang diagnostics for
  these pragmas group `In file included from …` context lines followed
  by the `pragma message` line itself; we drop the matching `pragma
  message` line plus any contiguous preceding `In file included from`
  context lines that resolve to the same diagnostic. Anything else
  (real warnings/errors, pragmas from other headers, build progress)
  passes through verbatim.
  """
  if not stderr_text:
    return ("", 0)
  lines = stderr_text.split("\n")
  filtered_count = 0
  output_lines = []
  context_buffer = []
  for line in lines:
    if "In file included from " in line:
      # Hold context lines until we see the actual diagnostic — they
      # belong to either a filtered pragma or a passthrough warning.
      context_buffer.append(line)
      continue
    is_deprecation_pragma = (
      "pragma message" in line
      and any(hdr in line for hdr in _DEPRECATED_OCCT_HEADERS)
    )
    if is_deprecation_pragma:
      filtered_count += 1
      context_buffer = []
      continue
    output_lines.extend(context_buffer)
    context_buffer = []
    output_lines.append(line)
  output_lines.extend(context_buffer)
  return ("\n".join(output_lines), filtered_count)


def _compute_yaml_class_scope(
  buildConfig,
  libraryBasePath,
  custom_bindings_root=None,
) -> set:
  """Return the set of class names reachable from the consumer YAML.

  Scope =
    - mainBuild.bindings ∪ extraBuilds.bindings (the symbols the consumer
      explicitly requests),
    - the ancestor chains serialised in each matching `*.d.ts.json`
      fragment (so a YAML that binds `BRepBuilderAPI_MakeEdge` automatically
      brings in `BRepBuilderAPI_MakeShape` and `BRepBuilderAPI_Command` —
      classes whose NCollection-touching methods are inherited and therefore
      reachable from JS),
    - the structurally-serialised `referenced_classes` set on each in-scope
      fragment (R1 / W10 structural fix — every C++ class identifier the
      `TypescriptBindings.resolve_type` resolver attempted to emit lands
      here, BEFORE the known-export filter, so cross-class references
      converge on the next link cycle; replaces the legacy
      `_NCOLLECTION_TOKEN_RE` regex scrape of the rendered `.d.ts`),
    - every custom-code class compiled into `build/bindings/myMain.h/`
      (these classes are linked into the bundle by the additionalCppFiles
      pipeline, so any NCollection they reference is reachable),
    - the `__custom__` sentinel so future discoveries tagged with
      `CUSTOM_CODE_SOURCE_TAG` survive unconditionally.

  The link-time filter (`_filter_auto_symbols_by_scope`) keeps a manifest
  entry iff at least one of its `source_classes` is in this set.
  """
  scope: set = set()
  for build_block in [buildConfig["mainBuild"], *buildConfig.get("extraBuilds", [])]:
    scope.update(b["symbol"] for b in build_block["bindings"])

  bindings_root = os.path.join(libraryBasePath, "bindings")
  # Ancestor lift — walk every `.d.ts.json` fragment and, if its stem name is
  # in scope, union its serialised `ancestors` chains into scope. We scan the
  # whole tree once (O(|fragments|)) rather than per-symbol because the
  # bindings tree has no symbol→path index.
  #
  # Method-signature lift (R1 / W10 structural fix) — in the same pass, read
  # the structurally-serialised `referenced_classes` field on each in-scope
  # fragment and union it into scope. The codegen layer
  # (`TypescriptBindings.resolve_type` → `_record_referenced_class`) emits
  # every C++ class identifier it attempted to resolve BEFORE the
  # `_is_known_export_name` filter rejects unresolved candidates, so the set
  # surfaces both the now-resolved mangled NCollection names (the canonical
  # `NCollection_HArray1_gp_Pnt` family) AND the cross-class references
  # that are currently rewritten to bare `unknown`. The latter become
  # in-scope on the next link cycle, eliminating the convergence gap that
  # the deleted `_NCOLLECTION_TOKEN_RE` regex tried to patch over.
  scope_at_start = frozenset(scope)
  if os.path.isdir(bindings_root):
    for dirpath, dirnames, filenames in os.walk(bindings_root):
      dirnames.sort()
      filenames.sort()
      for fname in filenames:
        if not fname.endswith(".d.ts.json"):
          continue
        stem = fname[:-len(".d.ts.json")]
        if stem not in scope_at_start:
          continue
        try:
          with open(os.path.join(dirpath, fname)) as f:
            frag = json.load(f)
        except Exception:
          continue
        for ancestor_chain in (frag.get("ancestors") or {}).values():
          if isinstance(ancestor_chain, list):
            scope.update(ancestor_chain)
        referenced = frag.get("referenced_classes")
        if isinstance(referenced, list):
          scope.update(referenced)

  # Custom-code classes share `myMain.h` with generated template fragments.
  # The manifest is the authoritative classifier: names are not a schema.
  custom_root = os.path.join(
    custom_bindings_root or bindings_root,
    "myMain.h",
  )
  generated_templates = _load_full_manifest_symbols(libraryBasePath)
  if os.path.isdir(custom_root):
    for fname in sorted(os.listdir(custom_root)):
      if not fname.endswith(".d.ts.json"):
        continue
      stem = fname[:-len(".d.ts.json")]
      if stem in generated_templates:
        continue
      scope.add(stem)

  scope.add(_CUSTOM_CODE_SOURCE_TAG)
  return scope


def _filter_auto_symbols_by_scope(manifest_path: str, yaml_scope: set) -> set:
  """Return the manifest-entry subset whose `source_classes` intersect
  `yaml_scope`, plus the transitive closure over nested
  ``NCollection<NCollection<…>>`` references in `args`.

  Fail-loud if any manifest declaration is missing the `source_classes`
  field — there is no backwards-compat fallback; the only valid response is
  to regenerate the manifest via `nx run ocjs:generate`.
  """
  if not os.path.isfile(manifest_path):
    return set()
  with open(manifest_path) as f:
    manifest = json.load(f)
  decls = manifest.get("declarations", [])
  missing_src = [d["mangled_name"] for d in decls if "source_classes" not in d]
  if missing_src:
    raise RuntimeError(
      f"ncollection-manifest.json is missing 'source_classes' on "
      f"{len(missing_src)} entries (first: {missing_src[0]}). "
      f"Regenerate via `nx run ocjs:generate` to pick up the new schema."
    )
  kept: set = set()
  for d in decls:
    # Keep-condition 1 — the entry's source-class tag (where the
    # typedef alias is defined, e.g. `TColgp_HArray1OfPnt`) intersects
    # the YAML's reachable-class scope. Catches consumers that bind the
    # alias-origin class explicitly.
    if set(d["source_classes"]) & yaml_scope:
      kept.add(d["mangled_name"])
      continue
    # Keep-condition 2 (method-signature reachability) — the entry's mangled
    # name is itself in scope because an in-scope class's method signature
    # mentions it. This catches the failure mode where a NCollection is
    # reachable through a return/param type but whose source_classes never
    # name the in-scope class (e.g. `Poly_Triangulation`
    # exposes `MapNodeArray(): NCollection_HArray1_gp_Pnt` but the latter's
    # source_classes is `[TColgp_HArray1OfPnt]`). `_compute_yaml_class_scope`
    # lifts these mentions into `yaml_scope` via `_NCOLLECTION_TOKEN_RE` so
    # the intersection here resolves correctly without re-parsing C++.
    if d["mangled_name"] in yaml_scope:
      kept.add(d["mangled_name"])
  # Transitive closure: NCollection<…NCollection_X…> is kept iff every
  # nested NCollection arg is itself kept. The args field stores raw
  # template-arg spellings; nested NCollections appear with the
  # `NCollection_` mangled prefix as their argument text only when the
  # outer NCollection is templated on another mangled alias — most of
  # the time args reference primitive OCCT classes, so this loop
  # typically runs once and exits.
  changed = True
  while changed:
    changed = False
    for d in decls:
      if d["mangled_name"] in kept:
        continue
      nested = {a for a in d["args"] if a.startswith("NCollection_")}
      if nested and nested.issubset(kept):
        kept.add(d["mangled_name"])
        changed = True
  return kept

# The historical `_EMBIND_OCTYPE_ALIAS_TYPENAME_SKIPS` guard list existed to
# block alias-typedef NCollections (BRepGraph_FacesOfWire, BRepGraph_WiresOfEdge,
# BRepGraph_Compounds*) from being registered twice in Embind. Once
# `_dedupe_by_canonical_args` in `discover.py` started
# collapsing every alias form to its canonical (container, canonical-args)
# key, those names stopped appearing as `mangled_name` entries in the
# manifest entirely — verified empirically against `build/ncollection-manifest.json`.
# The constant and its `shouldProcessSymbol` branch were dead code; removed.
def shouldProcessSymbol(symbol: str, bindings) -> bool:
  if len(bindings) == 0:
    return True
  if symbol in _auto_symbols:
    return True
  entry = next((b for b in bindings if b["symbol"] == symbol), None)
  if entry is not None:
    return True
  return False

def _warn_consistency(build):
  """Warn (non-fatal) if consumer emccFlags and compile config are mismatched."""
  import sys
  yaml_flags = build.get("emccFlags", [])
  yaml_has_wasm_exc = "-fwasm-exceptions" in yaml_flags
  yaml_has_js_exc = "-fexceptions" in yaml_flags
  yaml_disables_exc = any("-sDISABLE_EXCEPTION_CATCHING=1" in f for f in yaml_flags)
  yaml_has_simd = "-msimd128" in yaml_flags
  env_exc = os.environ.get("OCJS_EXCEPTIONS", "0") == "1"
  env_simd = os.environ.get("OCJS_SIMD", "0") == "1"

  if env_exc and yaml_disables_exc:
    print(
      "WARNING: Compiled with OCJS_EXCEPTIONS=1 but emccFlags has -sDISABLE_EXCEPTION_CATCHING=1. "
      "These are contradictory -- link may not handle exceptions correctly.",
      file=sys.stderr, flush=True,
    )
  if not env_exc and (yaml_has_wasm_exc or yaml_has_js_exc):
    print(
      "WARNING: Compiled with OCJS_EXCEPTIONS=0 but emccFlags has exception flags. "
      "Link-time exception support without compile-time support may cause issues.",
      file=sys.stderr, flush=True,
    )
  if env_simd and not yaml_has_simd:
    print(
      "WARNING: Compiled with OCJS_SIMD=1 but emccFlags lacks -msimd128. "
      "wasm-opt will enable SIMD, but link may miss relaxed-simd optimizations.",
      file=sys.stderr, flush=True,
    )


def _parse_exported_runtime_methods(emcc_flags):
  """Extract runtime method names from -sEXPORTED_RUNTIME_METHODS in emccFlags."""
  for flag in emcc_flags:
    if 'EXPORTED_RUNTIME_METHODS' in flag:
      match = re.search(r'\[(.+)\]', flag)
      if match:
        return [m.strip().strip("'\"") for m in match.group(1).split(',')]
  return ['FS']


# Emscripten's own default is 64 KB, which deep OCCT recursion overflows
# silently, corrupting static data and trapping later. Match the full build.
DEFAULT_STACK_SIZE = 8 * 1024 * 1024


def _sets_emcc_setting(emcc_flags, *names):
  """True when emcc_flags set any of the named -s settings, joined or split."""
  prefixes = tuple(f"{name}=" for name in names)
  for index, flag in enumerate(emcc_flags):
    if flag.startswith("-s") and flag[2:].startswith(prefixes):
      return True
    if flag == "-s" and index + 1 < len(emcc_flags) and emcc_flags[index + 1].startswith(prefixes):
      return True
  return False


def _emits_symbol_map(emcc_flags):
  return any(flag in ("--emit-symbol-map", "-emit-symbol-map") for flag in emcc_flags)


def _wasm_opt_pass_flags(wasm_opt_level, converge, extra_passes, symbol_map=None):
  """Order the post-link wasm-opt passes.

  The function map has to be printed after every pass that can drop or
  renumber functions and before the name section is stripped.
  """
  flags = [wasm_opt_level]
  if converge:
    flags.append("--converge")
  flags.extend(extra_passes)
  if symbol_map:
    flags.append(f"--symbolmap={symbol_map}")
  flags.extend(["--strip-debug", "--strip-producers"])
  return flags


def _internalize_runtime_declarations(source: str) -> tuple[str, list[str]]:
  """Keep runtime values private while exporting their TypeScript types."""
  type_names = set(
    re.findall(
      r"^export\s+(?:declare\s+)?(?:abstract\s+)?class\s+([A-Za-z_][A-Za-z0-9_]*)",
      source,
      re.MULTILINE,
    )
  )
  type_names.update(
    re.findall(
      r"^export\s+(?:declare\s+)?type\s+([A-Za-z_][A-Za-z0-9_]*)",
      source,
      re.MULTILINE,
    )
  )
  type_names.update(
    re.findall(
      r"^export\s+(?:declare\s+)?interface\s+([A-Za-z_][A-Za-z0-9_]*)",
      source,
      re.MULTILINE,
    )
  )
  source = re.sub(
    r"^export\s+declare\s+(?=(?:abstract\s+)?class\b|const\b|function\b|namespace\b)",
    "declare ",
    source,
    flags=re.MULTILINE,
  )
  source = re.sub(
    r"^export\s+declare\s+(?=type\b|interface\b)",
    "",
    source,
    flags=re.MULTILINE,
  )
  source = re.sub(
    r"^export\s+(?=(?:abstract\s+)?class\b|type\b|interface\b)",
    "",
    source,
    flags=re.MULTILINE,
  )
  return source, sorted(type_names)


def runBuild(
  build,
  libraryBasePath,
  *,
  scratchPath=None,
  custom_compiled_root=None,
  additional_cpp_files=None,
  additional_bind_files=None,
  additional_bind_field="additionalBindFiles",
):
  try:
    validate_build_flags()
  except BuildFlagMismatch as e:
    print(str(e), flush=True)
    raise SystemExit(1) from None
  _warn_consistency(build)

  def getAdditionalBindFilesO():
    combined = BUILTIN_BINDINGS_SOURCE
    for bind_file in additional_bind_files or []:
      combined += "\n" + bind_file["content"]
    additional_bind_root = os.path.join(
      scratchPath or libraryBasePath,
      "additionalBindFiles",
    )
    os.makedirs(additional_bind_root, exist_ok=True)
    additionalBindFilesFileName = os.path.join(
      additional_bind_root,
      build["name"] + ".cpp",
    )
    f = open(additionalBindFilesFileName, "w")
    f.write(combined)
    f.close()
    print("building " + additionalBindFilesFileName)
    OPT_LEVEL = os.environ.get("OCJS_OPT", "-O0")
    USE_LTO = os.environ.get("OCJS_LTO", "0") == "1"
    exception_flags = WASM_EXCEPTION_FLAGS
    command = [
      "emcc",
      "-std=c++17",
      *(["-flto"] if USE_LTO else []),
      *exception_flags,
      *SIMD_FLAGS,
      *EXTRA_COMPILE_FLAGS,
      *PATH_PREFIX_FLAGS,
      "-DIGNORE_NO_ATOMICS=1",
      "-DOCCT_NO_PLUGINS",
      "-frtti",
      "-DHAVE_RAPIDJSON",
      OPT_LEVEL,
      *(["-pthread"] if os.environ["THREADING"] == "multi-threaded" else []),
      *(["-include-pch", PCH_FILE] if os.path.exists(PCH_FILE) else []),
      *["-I" + p for p in getFlatIncludePaths()],
      "-c", additionalBindFilesFileName,
    ]
    # R10 — capture stderr so we can filter the OCCT-internal
    # deprecation-pragma noise (see `_filter_occt_deprecation_pragmas`),
    # then re-emit the cleaned stream + a single INFO summary. The
    # `BUILTIN_BINDINGS_SOURCE` block above includes
    # `<TColStd_IndexedDataMapOfStringString.hxx>` directly which
    # transitively pulls `NCollection_Vector.hxx` — both fire a
    # `#pragma message` on every TU that includes them; collapsing the
    # noise here is purely cosmetic but keeps the link log readable.
    _bindcode_cmd = [*command, "-o", additionalBindFilesFileName + ".o"]
    _bindcode_result = subprocess.run(
      _bindcode_cmd,
      capture_output=True,
      text=True,
    )
    if _bindcode_result.stdout:
      sys.stdout.write(_bindcode_result.stdout)
      sys.stdout.flush()
    cleaned_stderr, dropped = _filter_occt_deprecation_pragmas(
      _bindcode_result.stderr or ""
    )
    if cleaned_stderr.strip():
      sys.stderr.write(cleaned_stderr)
      if not cleaned_stderr.endswith("\n"):
        sys.stderr.write("\n")
      sys.stderr.flush()
    if dropped > 0:
      print(
        f"INFO: filtered {dropped} OCCT-internal deprecation pragma(s) "
        f"from {', '.join(_DEPRECATED_OCCT_HEADERS)} "
        f"(transitive includes via BUILTIN_BINDINGS_SOURCE; not "
        f"actionable from OCJS)",
        flush=True,
      )
    if _bindcode_result.returncode != 0:
      raise subprocess.CalledProcessError(
        _bindcode_result.returncode, _bindcode_cmd
      )
    # V3 RE-SHIP: producer is no longer in-process here. The dedicated
    # `ocjs_bindgen.bind_symbols` NX stage writes
    # `build/additional-bind-symbols.json` BEFORE this `link` target runs
    # (enforced by `link.dependsOn = [..., "bind-symbols", ...]` in
    # `project.json` and mirrored in `build-wasm.sh link` for direct
    # shell invocations). Keeping a second producer here would re-introduce
    # the bootstrap-ordering bug the audit exposed and create two writers
    # for the same manifest — the consumer (`verifyBindings` below) would
    # see the link-stage producer's view, while post-link validators
    # invoked from a separate process would see the bind-symbols stage's
    # view, and the two could legitimately differ if any code path edited
    # one but not the other.
    return additionalBindFilesFileName + ".o"
  additionalBindFilesO = getAdditionalBindFilesO()
  print("Running build: " + build["name"], flush=True)
  bindingsO = []
  compiled_bindings = libraryBasePath + "/compiled-bindings"
  if not os.path.isdir(compiled_bindings):
    compiled_bindings = libraryBasePath + "/bindings"
  binding_roots = [compiled_bindings]
  if custom_compiled_root and os.path.isdir(custom_compiled_root):
    binding_roots.append(custom_compiled_root)
  for binding_root in binding_roots:
    is_custom = binding_root == custom_compiled_root
    for dirpath, dirnames, filenames in os.walk(binding_root):
      dirnames.sort()
      filenames.sort()
      rel_parts = dirpath.replace(binding_root + "/", "").split("/")
      skip = any(not filterPackages(p) for p in rel_parts if p) and not is_custom
      if skip:
        dirnames.clear()
        continue
      for item in filenames:
        if not item.endswith(".cpp.o"):
          continue
        if shouldProcessSymbol(item[:-6], build["bindings"]):
          bindingsO.append(dirpath + "/" + item)
  # A logical binding basename must have exactly one producer.
  _bindings_by_base = {}
  for o_path in bindingsO:
    _bindings_by_base.setdefault(os.path.basename(o_path), []).append(o_path)
  collisions = {
    name: paths
    for name, paths in _bindings_by_base.items()
    if len(paths) > 1
  }
  if collisions:
    detail = "; ".join(
      f"{name}=[{', '.join(sorted(paths))}]"
      for name, paths in sorted(collisions.items())
    )
    raise RuntimeError(f"duplicate logical binding objects: {detail}")
  bindingsO = [
    paths[0]
    for _name, paths in sorted(_bindings_by_base.items())
  ]
  sourcesO = []
  cmake_lib_dir = libraryBasePath + "/occt-libraries"
  cmake_lib_manifest = os.path.join(cmake_lib_dir, "manifest.json")
  if os.path.isfile(cmake_lib_manifest):
    with open(cmake_lib_manifest) as stream:
      library_manifest = json.load(stream)
    sourcesO.extend(immutable_cmake_libraries(cmake_lib_dir, library_manifest))
    print(f"Using all {len(sourcesO)} immutable CMake libraries", flush=True)
  else:
    for dirpath, dirnames, filenames in os.walk(libraryBasePath + "/sources"):
      dirnames.sort()
      filenames.sort()
      rel_parts = dirpath.replace(libraryBasePath + "/sources/", "").split("/")
      skip = any(not filterPackages(p) for p in rel_parts if p)
      if skip:
        dirnames.clear()
        continue
      for item in filenames:
        if item in [
          "XBRepMesh.o",
        ]:
          continue
        if item.endswith(".o"):
          sourcesO.append(dirpath + "/" + item)
  emcc_flags = build.get("emccFlags", [])
  has_opt = any(f.startswith("-O") for f in emcc_flags)
  has_lto = "-flto" in emcc_flags
  has_malloc = any(f.startswith("-sMALLOC=") for f in emcc_flags)

  fill_flags = []
  if not has_opt:
    fill_flags.append(os.environ.get("OCJS_LINK_OPT", os.environ.get("OCJS_OPT", "-O3")))
  if not has_lto and os.environ.get("OCJS_LTO", "0") == "1":
    fill_flags.append("-flto")
  if not has_malloc:
    malloc_choice = os.environ.get("OCJS_MALLOC", "dlmalloc")
    fill_flags.append(f"-sMALLOC={malloc_choice}")
  if not _sets_emcc_setting(emcc_flags, "STACK_SIZE", "TOTAL_STACK"):
    fill_flags.append(f"-sSTACK_SIZE={DEFAULT_STACK_SIZE}")

  emsdk = os.environ.get("EMSDK", "")
  wasmOptPath = shutil.which("wasm-opt") or (os.path.join(emsdk, "upstream", "bin", "wasm-opt") if emsdk else None)
  wasm_opt_level = os.environ.get("OCJS_WASM_OPT_LEVEL", "-O3")
  skip_wasm_opt = os.environ.get("OCJS_SKIP_WASM_OPT", "0") == "1"
  run_wasm_opt = bool(wasmOptPath and os.path.exists(wasmOptPath) and wasm_opt_level and not skip_wasm_opt)
  # emcc writes the symbol map from its own final binary, but the wasm-opt
  # pass below drops and renumbers functions. Keep the name section through
  # emcc so that pass can write the map for the binary we actually ship.
  regenerate_symbol_map = run_wasm_opt and _emits_symbol_map(emcc_flags)
  if regenerate_symbol_map:
    fill_flags.append("--profiling-funcs")

  output_dir = os.environ.get("OCJS_OUTPUT_DIR", os.getcwd())
  linkCmd = [
    "emcc", "-lembind",
    *([additionalBindFilesO] if additionalBindFilesO else []),
    *bindingsO, *sourcesO,
    "-o", output_dir + "/" + build["name"],
    *(["-pthread"] if os.environ["THREADING"] == "multi-threaded" else []),
    *fill_flags,
    *emcc_flags,
  ]
  if os.environ.get("OCJS_CLOSURE", "false") == "true":
    linkCmd.extend(["--closure", "1"])
  print(f"Linking {len(bindingsO)} bindings + {len(sourcesO)} sources ...", flush=True)
  binaryen_env = {**os.environ, "BINARYEN_CORES": "1"}
  subprocess.check_call(linkCmd, env=binaryen_env)

  wasmFile = output_dir + "/" + os.path.splitext(build["name"])[0] + ".wasm"
  symbolMapFile = output_dir + "/" + build["name"] + ".symbols"

  sizeBefore = os.path.getsize(wasmFile) if os.path.exists(wasmFile) else 0
  sizeAfter = sizeBefore
  wasm_opt_flag_list = []

  if os.path.exists(wasmFile) and run_wasm_opt:
    print(f"Running wasm-opt on {wasmFile} ({sizeBefore / (1024*1024):.1f} MB)...", flush=True)
    binaryen_extra_passes = os.environ.get("BINARYEN_EXTRA_PASSES", "").strip()
    extra_passes = [s.strip() for s in binaryen_extra_passes.split(",") if s.strip()]
    wasm_opt_flag_list = _wasm_opt_pass_flags(
      wasm_opt_level,
      converge=os.environ.get("OCJS_CONVERGE", "false") == "true",
      extra_passes=extra_passes,
      symbol_map=symbolMapFile if regenerate_symbol_map else None,
    )
    wasm_opt_flag_list += ["--enable-mutable-globals", "--enable-bulk-memory", "--enable-sign-ext", "--enable-nontrapping-float-to-int", "--traps-never-happen"]
    # --closed-world disabled: interacts badly with exception handling code present in non-No_Exception builds
    # wasm_opt_flag_list.append("--closed-world")
    wasm_opt_flag_list.append("--enable-exception-handling")
    if os.environ.get("OCJS_SIMD", "0") == "1":
      wasm_opt_flag_list.append("--enable-simd")
      if os.environ.get("OCJS_RELAXED_SIMD", "0") == "1":
        wasm_opt_flag_list.append("--enable-relaxed-simd")
    if os.environ.get("THREADING") == "multi-threaded":
      wasm_opt_flag_list.append("--enable-threads")
    wasmOptCmd = [wasmOptPath] + wasm_opt_flag_list
    wasmOptCmd.extend([wasmFile, "-o", wasmFile])
    subprocess.check_call(wasmOptCmd, env=binaryen_env)
    sizeAfter = os.path.getsize(wasmFile)
    reduction = (1 - sizeAfter / sizeBefore) * 100 if sizeBefore > 0 else 0
    print(f"wasm-opt: {sizeBefore / (1024*1024):.1f} MB -> {sizeAfter / (1024*1024):.1f} MB ({reduction:.1f}% reduction)", flush=True)

  symbol_list = [b["symbol"] for b in build["bindings"]]
  if prov is not None:
    prov.add_linking(
      yaml_config=os.path.basename(build["name"]),
      yaml_hash=_yaml_config_hash,
      bound_symbols=len(symbol_list),
      symbol_list=symbol_list,
      emcc_flags=list(fill_flags) + list(emcc_flags),
      # The symbol map path is machine-specific; record only that it was written.
      wasm_opt_flags=["--symbolmap" if f.startswith("--symbolmap=") else f for f in wasm_opt_flag_list],
      pre_opt_size=sizeBefore,
      post_opt_size=sizeAfter,
      ncollection_linked=_ncollection_link_stats["linked"],
      ncollection_total=_ncollection_link_stats["total"],
      ncollection_dropped=_ncollection_link_stats["dropped"],
      source_files=(
        source_file_manifest("additionalCppFiles", additional_cpp_files or [])
        + source_file_manifest(
          additional_bind_field,
          additional_bind_files or [],
        )
      ),
    )

  print("Build finished", flush=True)


def _collect_dts_fragments(
  buildConfig,
  libraryBasePath,
  custom_bindings_root=None,
):
  """Walk bindings dir and collect all .d.ts.json fragments matching the YAML bindings."""
  typescriptDefinitions = []
  allBindings = list(chain(buildConfig["mainBuild"]["bindings"], *list(map(lambda x: x["bindings"], buildConfig["extraBuilds"]))))
  roots = [(libraryBasePath + "/bindings", False)]
  if custom_bindings_root and os.path.isdir(custom_bindings_root):
    roots.append((custom_bindings_root, True))
  for binding_root, is_custom in roots:
    for dirpath, dirnames, filenames in os.walk(binding_root):
      dirnames.sort()
      filenames.sort()
      rel_parts = dirpath.replace(binding_root + "/", "").split("/")
      skip = any(not filterPackages(p) for p in rel_parts if p) and not is_custom
      if skip:
        dirnames.clear()
        continue
      for item in filenames:
        if not item.endswith(".d.ts.json"):
          continue
        if shouldProcessSymbol(item[:-10], allBindings):
          with open(dirpath + "/" + item) as stream:
            typescriptDefinitions.append(json.loads(stream.read()))
  return typescriptDefinitions


def main():
  from compileBindings import compileCustomCodeBindings
  from ocjs_bindgen.pipeline.generate import generateCustomCodeBindings

  parser = ArgumentParser()
  parser.add_argument(dest="filename", help="Custom build input file (.yml)", metavar="FILE.yml")
  parser.add_argument("--dts-only", action="store_true",
                       help="Regenerate only the .d.ts file from existing .d.ts.json fragments (no compile/link)")
  args = parser.parse_args()
  libraryBasePath = os.environ.get("BUILD_DIR", OCJS_ROOT + "/build")

  global _yaml_config_hash
  with open(args.filename, "rb") as yf:
    _yaml_config_hash = hashlib.sha256(yf.read()).hexdigest()[:12]
  link_work_path = os.path.join(libraryBasePath, "link-work", _yaml_config_hash)
  custom_bindings_root = os.path.join(link_work_path, "bindings")
  custom_compiled_root = os.path.join(link_work_path, "compiled-bindings")
  buildConfig = yaml.safe_load(open(args.filename))
  schema = eval(open(OCJS_ROOT + "/src/customBuildSchema.py").read())
  v = Validator(schema)
  if not v.validate(buildConfig, schema):
    raise Exception(v.errors)
  buildConfig = v.normalized(buildConfig)

  additional_cpp_files = resolve_source_files(
    args.filename,
    buildConfig.get("additionalCppFiles"),
    "additionalCppFiles",
  )
  additional_cpp_source = "\n".join(
    entry["content"] for entry in additional_cpp_files
  )

  global _auto_symbols
  full_set = _load_full_manifest_symbols(BUILD_DIR)
  known_exports = {
    b["symbol"]
    for b in chain(
      buildConfig["mainBuild"]["bindings"],
      *(x["bindings"] for x in buildConfig["extraBuilds"]),
    )
  } | full_set
  shutil.rmtree(link_work_path, ignore_errors=True)
  os.makedirs(link_work_path, exist_ok=True)
  print("Generating custom code bindings...", flush=True)
  generateCustomCodeBindings(
    additional_cpp_source,
    known_exports=known_exports,
    output_dir=custom_bindings_root,
  )

  if not args.dts_only:
    print("Compiling custom code bindings...", flush=True)
    compileCustomCodeBindings({
      "threading": os.environ['THREADING'],
    }, source_root=custom_bindings_root, output_root=custom_compiled_root)
    print("Custom code bindings done.", flush=True)

    verifyBindings(
      buildConfig["mainBuild"]["bindings"],
      libraryBasePath,
      custom_compiled_root=custom_compiled_root,
    )
    for extraBuild in buildConfig["extraBuilds"]:
      verifyBindings(
        extraBuild,
        libraryBasePath,
        custom_compiled_root=custom_compiled_root,
      )
    print("All bindings verified.", flush=True)

  # Keep generated custom fragments in the YAML-owned scratch tree for both
  # link and dts-only paths, then derive the same NCollection scope.
  yaml_scope = _compute_yaml_class_scope(
    buildConfig,
    libraryBasePath,
    custom_bindings_root,
  )
  manifest_path = os.path.join(BUILD_DIR, "ncollection-manifest.json")
  _auto_symbols = _filter_auto_symbols_by_scope(manifest_path, yaml_scope)
  _ncollection_link_stats["linked"] = len(_auto_symbols)
  _ncollection_link_stats["total"] = len(full_set)
  _ncollection_link_stats["dropped"] = len(full_set) - len(_auto_symbols)
  print(
    f"NCollection link filter: kept {len(_auto_symbols)} / "
    f"{len(full_set)} auto-discovered entries "
    f"(dropped {len(full_set) - len(_auto_symbols)} unreachable from YAML scope "
    f"|scope|={len(yaml_scope)})",
    flush=True,
  )

  if not args.dts_only:
    runBuild(
      buildConfig["mainBuild"],
      libraryBasePath,
      scratchPath=link_work_path,
      custom_compiled_root=custom_compiled_root,
      additional_cpp_files=additional_cpp_files,
      additional_bind_files=resolve_source_files(
        args.filename,
        buildConfig["mainBuild"].get("additionalBindFiles"),
        "mainBuild.additionalBindFiles",
      ),
      additional_bind_field="mainBuild.additionalBindFiles",
    )
    for index, extraBuild in enumerate(buildConfig["extraBuilds"]):
      field = f"extraBuilds[{index}].additionalBindFiles"
      runBuild(
        extraBuild,
        libraryBasePath,
        scratchPath=link_work_path,
        custom_compiled_root=custom_compiled_root,
        additional_cpp_files=additional_cpp_files,
        additional_bind_files=resolve_source_files(
          args.filename,
          extraBuild.get("additionalBindFiles"),
          field,
        ),
        additional_bind_field=field,
      )

  typescriptDefinitions = _collect_dts_fragments(
    buildConfig,
    libraryBasePath,
    custom_bindings_root,
  )

  if buildConfig["generateTypescriptDefinitions"]:
    typescriptDefinitionOutput = ""
    typescriptExports = []
    ancestorChains: dict = {}
    for dts in typescriptDefinitions:
      typescriptDefinitionOutput += dts[".d.ts"]
      for export in dts["exports"]:
        typescriptExports.append({
          "export": export,
          "kind": dts["kind"],
        })
      for cls, ancestor_chain in (dts.get("ancestors") or {}).items():
        ancestorChains.setdefault(cls, ancestor_chain)

    # Declarations for built-in types provided via BUILTIN_BINDINGS_SOURCE
    # PR 1.8 — `declarations/` lives at `src/declarations/`; resolve via the
    # module-level `OCJS_ROOT` (imported at top of file).
    declarations_dir = os.path.join(OCJS_ROOT, 'src', 'declarations')

    with open(os.path.join(declarations_dir, 'builtin-bindings.d.ts')) as f:
      typescriptDefinitionOutput += f.read() + "\n\n"
    typescriptExports.extend([
      {"export": "TColStd_IndexedDataMapOfStringString", "kind": "class"},
      {"export": "TopoDS", "kind": "class"},
      {"export": "OCJS", "kind": "class"},
    ])

    with open(os.path.join(declarations_dir, 'emscripten-fs.d.ts')) as f:
      typescriptDefinitionOutput += f.read() + "\n\n"

    runtime_methods = _parse_exported_runtime_methods(
      buildConfig["mainBuild"].get("emccFlags", [])
    )
    # Auto-generated `export namespace <prefix> { ... }` blocks were removed in
    # v3.0 (see CHANGELOG). Consumers must now use the flat `gp_Pnt`,
    # `TopoDS_Edge`, ... names directly. The hand-written `TopoDS` runtime API
    # in builtin-bindings.d.ts is unaffected.

    main_flags = buildConfig["mainBuild"].get("emccFlags", [])
    uses_native_wasm_eh = any('-fwasm-exceptions' in f for f in main_flags)
    required_eh_methods = {
      'getExceptionMessage',
      'incrementExceptionRefcount',
      'decrementExceptionRefcount',
    }
    missing_eh_methods = required_eh_methods.difference(runtime_methods)

    if uses_native_wasm_eh and missing_eh_methods:
      # Hard fail: native wasm EH without the runtime helpers is a footgun -- the
      # JS module will catch WebAssembly.Exception but consumers cannot decode it
      # (no getExceptionMessage). Force the YAML to make this explicit.
      raise ValueError(
        "mainBuild.emccFlags contains '-fwasm-exceptions' but "
        "-sEXPORTED_RUNTIME_METHODS is missing: "
        f"{', '.join(sorted(missing_eh_methods))}. Export all three exception "
        "helpers so JS consumers can decode and release caught "
        "WebAssembly.Exception values, or remove '-fwasm-exceptions' if "
        "exception handling is intentionally compiled out."
      )

    if uses_native_wasm_eh:
      with open(os.path.join(declarations_dir, 'webassembly-exception.d.ts')) as f:
        typescriptDefinitionOutput += f.read() + "\n\n"
      typescriptDefinitionOutput += \
        "/**\n" + \
        " * Extract the exception type and message from a caught `WebAssembly.Exception`.\n" + \
        " *\n" + \
        " * Only available in builds compiled with `-fwasm-exceptions` (native WASM exception handling).\n" + \
        " *\n" + \
        " * @param ex - The caught `WebAssembly.Exception` object.\n" + \
        " * @returns A `[type, message]` tuple where `type` is the C++ exception class name\n" + \
        " *   (e.g. `'Standard_DomainError'`) and `message` is the exception text.\n" + \
        " */\n" + \
        "export declare function getExceptionMessage(ex: WebAssembly.Exception): [type: string, message: string];\n" + \
        "/**\n" + \
        " * Increment the reference count of a `WebAssembly.Exception` to prevent premature disposal.\n" + \
        " *\n" + \
        " * Call this when storing an exception reference beyond its catch scope.\n" + \
        " *\n" + \
        " * @param ex - The exception whose refcount to increment.\n" + \
        " */\n" + \
        "export declare function incrementExceptionRefcount(ex: WebAssembly.Exception): void;\n" + \
        "/**\n" + \
        " * Decrement the reference count of a `WebAssembly.Exception`, freeing it when count reaches zero.\n" + \
        " *\n" + \
        " * @param ex - The exception whose refcount to decrement.\n" + \
        " */\n" + \
        "export declare function decrementExceptionRefcount(ex: WebAssembly.Exception): void;\n\n"
      typescriptExports.append({"export": "getExceptionMessage", "kind": "function"})
      typescriptExports.append({"export": "incrementExceptionRefcount", "kind": "function"})
      typescriptExports.append({"export": "decrementExceptionRefcount", "kind": "function"})

    runtime_lines = []
    if 'FS' in runtime_methods:
      runtime_lines.append('  /** Emscripten virtual filesystem for reading/writing files in the WASM heap. */')
      runtime_lines.append('  FS: typeof FS;')
    if 'wasmMemory' in runtime_methods:
      runtime_lines.append('  /**')
      runtime_lines.append('   * The live `WebAssembly.Memory` instance backing the WASM linear memory.')
      runtime_lines.append('   *')
      runtime_lines.append('   * Use `wasmMemory.buffer` to obtain the current `ArrayBuffer` after any')
      runtime_lines.append('   * call that may have grown memory (e.g. allocations during `extract()`).')
      runtime_lines.append('   * Existing typed-array views may be detached after growth; create fresh')
      runtime_lines.append('   * views from `wasmMemory.buffer` after calls that may allocate.')
      runtime_lines.append('   */')
      runtime_lines.append('  wasmMemory: WebAssembly.Memory;')
    runtime_type = '{\n' + '\n'.join(runtime_lines) + '\n}' if runtime_lines else '{}'

    runtime_desc_parts = []
    if 'FS' in runtime_methods:
      runtime_desc_parts.append('the Emscripten virtual filesystem (`oc.FS`)')
    if 'wasmMemory' in runtime_methods:
      runtime_desc_parts.append('the live `WebAssembly.Memory` (`oc.wasmMemory`)')
    runtime_desc = ' and '.join(runtime_desc_parts) if runtime_desc_parts else 'Emscripten runtime methods'

    seen_export_names = set()
    deduped_exports = []
    for export_entry in typescriptExports:
      name = export_entry["export"]
      if name in seen_export_names:
        continue
      seen_export_names.add(name)
      deduped_exports.append(export_entry)

    emitted_type_names = {entry["export"] for entry in deduped_exports}
    emitted_type_names.update(
      re.findall(
        r"^export\s+(?:declare\s+)?(?:abstract\s+)?class\s+([A-Za-z_][A-Za-z0-9_]*)",
        typescriptDefinitionOutput,
        re.MULTILINE,
      )
    )
    emitted_type_names.update(
      re.findall(
        r"^export\s+(?:declare\s+)?type\s+([A-Za-z_][A-Za-z0-9_]*)",
        typescriptDefinitionOutput,
        re.MULTILINE,
      )
    )
    emitted_type_names.update(
      re.findall(
        r"^export\s+(?:declare\s+)?interface\s+([A-Za-z_][A-Za-z0-9_]*)",
        typescriptDefinitionOutput,
        re.MULTILINE,
      )
    )
    typescriptDefinitionOutput += _render_type_only_aliases(
      _load_ncollection_alias_index(BUILD_DIR),
      emitted_type_names,
    )

    typescriptDefinitionOutput, named_type_exports = _internalize_runtime_declarations(
      typescriptDefinitionOutput
    )
    type_export_lines = "\n".join(
      f"export type {{ {name} }};" for name in named_type_exports
    )

    typescriptDefinitionOutput += \
      "\n" + type_export_lines + "\n\n" + \
      "/**\n" + \
      " * Intersection of the Emscripten runtime exports and all bound OCCT classes, enums, and functions.\n" + \
      " *\n" + \
      " * Returned by {@link init | `init`} after the WASM module is fully loaded. Access any\n" + \
      " * OCCT binding as a property (e.g. `oc.BRepPrimAPI_MakeBox`) and use\n" + \
      " * " + runtime_desc + ".\n" + \
      " */\n" + \
      "export type OpenCascadeInstance = " + runtime_type + " & {\n  " + ";\n  ".join(map(lambda x: x["export"] + ": typeof " + x["export"], deduped_exports)) + ";\n" + \
      "};\n\n" + \
      "/** Options accepted by the generated Emscripten module factory. */\n" + \
      "export type InitOpenCascadeOptions = {\n" + \
      "  locateFile?: (path: string, scriptDirectory: string) => string;\n" + \
      "  wasmBinary?: ArrayBuffer | Uint8Array;\n" + \
      "  wasmMemory?: WebAssembly.Memory;\n" + \
      "  print?: (text: string) => void;\n" + \
      "  printErr?: (text: string) => void;\n" + \
      "};\n\n" + \
      "/**\n" + \
      " * Initialize the OpenCASCADE WASM module and return the fully populated instance.\n" + \
      " *\n" + \
      " * Downloads, compiles, and instantiates the WASM binary. The returned\n" + \
      " * `OpenCascadeInstance` provides access to all bound OCCT classes and the\n" + \
      " * Emscripten virtual filesystem.\n" + \
      " *\n" + \
      " * @param options - Supported Emscripten module-factory overrides.\n" + \
      " * @returns The initialized instance with all OCCT bindings and the `FS` namespace.\n" + \
      " */\n" + \
      "export default function init(options?: InitOpenCascadeOptions): Promise<OpenCascadeInstance>;\n"

    # PR 1.6 — Diagnostics live on the injected service. Read via the
    # process-wide singleton to preserve the legacy shared-bucket behaviour.
    from ocjs_bindgen.diagnostics import DIAGNOSTICS
    unrecognized = DIAGNOSTICS.get("unrecognized_template")
    if unrecognized:
      print(f"\n=== UNRECOGNIZED TEMPLATE TYPES ({len(unrecognized)} unique) ===", flush=True)
      for type_info, count in sorted(unrecognized.items(), key=lambda x: -x[1])[:15]:
        print(f"  {type_info} ({count}x)", flush=True)
      if len(unrecognized) > 15:
        print(f"  ... and {len(unrecognized) - 15} more", flush=True)
      print("These template types have no known typedef/using-alias.", flush=True)
      print("Auto-discovery should capture NCollection types; check discover.py for missing patterns.\n", flush=True)

    # Post-process to neutralize references to types not actually emitted in
    # this build. Fragments are pre-generated against the FULL bindgen filter,
    # so a per-build subset YAML (e.g. replicad_single) inherits references like
    # `Standard_Type` that the subset never declares. Replace each with `unknown`
    # (no value at runtime, structural fallback at type level) to keep the
    # generated `.d.ts` semantically valid (zero TS2304/TS2552 diagnostics).
    declared_names = {x["export"] for x in deduped_exports}
    declared_names.update(named_type_exports)
    declared_names.update(
      re.findall(r"^export\s+(?:declare\s+)?(?:abstract\s+)?class\s+([A-Za-z_][A-Za-z0-9_]*)", typescriptDefinitionOutput, re.MULTILINE)
    )
    declared_names.update(
      re.findall(r"^export\s+(?:declare\s+)?type\s+([A-Za-z_][A-Za-z0-9_]*)", typescriptDefinitionOutput, re.MULTILINE)
    )
    declared_names.update(
      re.findall(r"^export\s+(?:declare\s+)?interface\s+([A-Za-z_][A-Za-z0-9_]*)", typescriptDefinitionOutput, re.MULTILINE)
    )
    pre_rewrite_unknown_count = _count_unknown_tokens(typescriptDefinitionOutput)
    typescriptDefinitionOutput = _replace_undeclared_with_unknown(
      typescriptDefinitionOutput,
      declared_names=declared_names,
      ancestor_chains=ancestorChains,
    )
    post_rewrite_unknown_count = _count_unknown_tokens(typescriptDefinitionOutput)
    rewrites_to_unknown = max(0, post_rewrite_unknown_count - pre_rewrite_unknown_count)

    _enforce_strict_types_gate(
      typescriptDefinitionOutput=typescriptDefinitionOutput,
      rewrites_to_unknown=rewrites_to_unknown,
      diagnostics=DIAGNOSTICS,
    )

    typescriptDefinitionsFile = open(os.getcwd() + "/" + os.path.splitext(buildConfig["mainBuild"]["name"])[0] + ".d.ts", "w")
    typescriptDefinitionsFile.write(typescriptDefinitionOutput)
    print("TypeScript definitions written.", flush=True)

if __name__ == "__main__":
  multiprocessing.set_start_method("fork")
  main()
