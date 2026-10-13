"""Composable LinkRewriter chain for the merged TypeScript output.

PR 2.6 — `_replace_undeclared_with_unknown` was a single procedural pass
that produced three classes of edits (heritage relinks, heritage drops,
type-position `unknown` replacements). This module factors that work into
a small composable pipeline so future passes (e.g.
`RedundantUnknownAliasDropper`) can be added without re-touching the
merge driver.

Design contract
---------------
A `LinkRewriter` is any callable that takes the current
`RewriteContext` and returns a list of `Edit` objects (`(start, end, repl)`
tuples over the *original* source). All rewriters run against the same
comment-stripped scrubbed text, then the driver merges, sorts, and
applies edits in one pass over the original `source` to produce the
final output. This avoids quadratic re-walks and keeps every rewriter's
spans valid against a single coordinate system.

Existing rewriters
------------------
  - `HeritageRelinkRewriter` — re-links / drops `extends Undeclared`
    clauses using the ancestor-chain metadata emitted by
    `bindings.TypescriptBindings._computeAncestorChain`.
  - `UndeclaredToUnknownRewriter` — rewrites identifiers in TS type
    positions (after `:`, `extends`, `=>`, inside `<...>`, after
    `typeof`) that are neither declared exports nor TS/DOM built-ins.

Registered passes
-----------------
  - `redundant_unknown_alias_dropper` — drops cross-fragment
    `type X = unknown;` declarations whose name is also emitted as
    a real class / interface / non-unknown type alias somewhere else in
    the merged file. Per-fragment finalisers emit stubs for namespace-scoped
    interfaces using a per-fragment view of `self.exports`, so fragment B
    emits a stub for a class that fragment A actually declared. Without the
    dropper the merged file carries both `class X { ... }` and
    `type X = unknown` and TS declaration merging weakens the class.
"""

from __future__ import annotations

import re
from collections.abc import Callable
from dataclasses import dataclass

# Edit tuple over the original source: (start, end, replacement).
Edit = tuple[int, int, str]


_TS_BUILTIN_TYPES = frozenset({
  "string", "number", "boolean", "void", "any", "unknown", "never",
  "null", "undefined", "bigint", "symbol", "object", "this",
  "Array", "ReadonlyArray", "Promise", "Record", "Partial", "Required",
  "Readonly", "Pick", "Omit", "Exclude", "Extract", "NonNullable",
  "ReturnType", "Parameters", "ConstructorParameters", "InstanceType",
  "ThisParameterType", "OmitThisParameter", "ThisType",
  "Map", "Set", "WeakMap", "WeakSet", "Iterable", "Iterator",
  "IterableIterator", "AsyncIterable", "AsyncIterator", "Generator",
  "AsyncGenerator", "Function", "Object", "Date", "Error", "RegExp",
  "JSON", "Math", "console", "Symbol",
  "ArrayBuffer", "ArrayBufferLike", "ArrayBufferView", "SharedArrayBuffer",
  "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array",
  "BigUint64Array", "Int8Array", "Int16Array", "Int32Array",
  "BigInt64Array", "Float32Array", "Float64Array", "DataView",
  "WebAssembly",
  "FS", "HEAP8", "HEAPU8", "HEAP16", "HEAPU16", "HEAP32", "HEAPU32",
  "HEAPF32", "HEAPF64", "HEAP64", "HEAPU64",
})


_TYPE_REF_PATTERNS = (
  re.compile(r":\s*([A-Za-z_][A-Za-z0-9_]*)(?=\s*[<\[|&;,)}\n])"),
  re.compile(r"=>\s*([A-Za-z_][A-Za-z0-9_]*)(?=\s*[<\[|&;,)}\n])"),
  re.compile(r"<\s*([A-Za-z_][A-Za-z0-9_]*)(?=\s*[,>])"),
  re.compile(r",\s*([A-Za-z_][A-Za-z0-9_]*)(?=\s*[,>])"),
  re.compile(r"\btypeof\s+([A-Za-z_][A-Za-z0-9_]*)"),
)


_HERITAGE_RE = re.compile(
  r"(\b(?:export\s+)?(?:declare\s+)?(?:abstract\s+)?class\s+([A-Za-z_][A-Za-z0-9_]*))\s+extends\s+([A-Za-z_][A-Za-z0-9_]*)"
)


# Detect "real" (non `unknown`-alias) declarations of a name. A real
# declaration is any of `class X`, `interface X`, or `type X = <not-unknown>`.
# Used to discriminate aliases that genuinely shadow a real export from
# stand-alone `unknown` aliases (e.g. `std_type_info`) which must remain.
_REAL_CLASS_DECL_RE = re.compile(
  r"^(?:export\s+)?(?:declare\s+)?(?:abstract\s+)?class\s+([A-Za-z_][A-Za-z0-9_]*)\b",
  re.MULTILINE,
)
_REAL_IFACE_DECL_RE = re.compile(
  r"^(?:export\s+)?(?:declare\s+)?interface\s+([A-Za-z_][A-Za-z0-9_]*)\b",
  re.MULTILINE,
)
# Captures every top-level `type X = RHS;` (single-line). Runtime declarations
# are internalized before this pass, so `export` is optional. RHS classification
# happens in the dropper itself so we avoid brittle MULTILINE/`$`/`\s*`
# lookahead interactions when discriminating `unknown` from real aliases.
_TYPE_ALIAS_DECL_RE = re.compile(
  r"^(?:export\s+)?(?:declare\s+)?type\s+([A-Za-z_][A-Za-z0-9_]*)\s*=\s*([^;\n]+?)\s*;[ \t]*\r?\n?",
  re.MULTILINE,
)


@dataclass(frozen=True)
class RewriteContext:
  """Per-pass state shared by every rewriter in the chain.

  - `source`           : original merged TS source (edit coordinates resolve here).
  - `scrubbed`         : comment-stripped mirror with identical line/column layout.
  - `declared`         : set of identifiers considered declared (exports + TS/DOM
                         built-ins).
  - `ancestor_chains`  : per-class ancestor metadata captured by
                         `TypescriptBindings._computeAncestorChain`.
  """
  source: str
  scrubbed: str
  declared: frozenset
  ancestor_chains: dict


LinkRewriter = Callable[[RewriteContext], list[Edit]]


def _strip_comments(text: str) -> str:
  """Replace block & line comments with whitespace, preserving line/column."""
  out = []
  i = 0
  n = len(text)
  while i < n:
    if text[i] == '/' and i + 1 < n and text[i + 1] == '*':
      end = text.find('*/', i + 2)
      if end == -1:
        out.append(' ' * (n - i))
        break
      block = text[i:end + 2]
      out.append(re.sub(r"[^\n]", " ", block))
      i = end + 2
    elif text[i] == '/' and i + 1 < n and text[i + 1] == '/':
      end = text.find('\n', i)
      if end == -1:
        out.append(' ' * (n - i))
        break
      out.append(' ' * (end - i))
      i = end
    else:
      out.append(text[i])
      i += 1
  return ''.join(out)


def heritage_relink_rewriter(ctx: RewriteContext) -> list[Edit]:
  """Rewriter A — `extends Undeclared`:

  - Re-link to the nearest declared ancestor when ancestor-chain metadata
    covers the class.
  - Drop the `extends Undeclared` clause entirely otherwise.
  """
  edits: list[Edit] = []
  for m in _HERITAGE_RE.finditer(ctx.scrubbed):
    childName = m.group(2)
    parent = m.group(3)
    if parent in ctx.declared:
      continue
    chain = ctx.ancestor_chains.get(childName, [])
    relink = next((a for a in chain if a in ctx.declared), None)
    if relink:
      edits.append((m.start(3), m.end(3), relink))
    else:
      edits.append((m.end(1), m.end(3), ""))
  return edits


def undeclared_to_unknown_rewriter(ctx: RewriteContext) -> list[Edit]:
  """Rewriter B — undeclared identifier in TS type position → `unknown`."""
  edits: list[Edit] = []
  for pat in _TYPE_REF_PATTERNS:
    for m in pat.finditer(ctx.scrubbed):
      name = m.group(1)
      if name in ctx.declared:
        continue
      edits.append((m.start(1), m.end(1), "unknown"))
  return edits


def redundant_unknown_alias_dropper(ctx: RewriteContext) -> list[Edit]:
  """Rewriter C — drop `type X = unknown;` declarations whose name
  is also emitted as a real class / interface / non-`unknown` type alias
  somewhere else in the merged file.

  Per-fragment finalisers emit stubs for namespace-scoped interfaces using
  a per-fragment view of `self.exports`. Fragment B emits a stub for a
  class that fragment A actually declared, the merged file carries both,
  and TS declaration merging would weaken the class to `unknown` without
  this dropper.

  Note we *cannot* rely on `ctx.declared` here because the link driver
  populates that set from the same `^export\\s+type` regex that matches
  the `unknown` aliases themselves — every alias would be its own
  evidence of being "declared". We instead scan the scrubbed source for
  unambiguously *real* declarations.
  """
  real_names: set[str] = set()
  real_names.update(m.group(1) for m in _REAL_CLASS_DECL_RE.finditer(ctx.scrubbed))
  real_names.update(m.group(1) for m in _REAL_IFACE_DECL_RE.finditer(ctx.scrubbed))

  unknown_alias_spans: list[tuple[int, int, str]] = []
  for m in _TYPE_ALIAS_DECL_RE.finditer(ctx.scrubbed):
    name, rhs = m.group(1), m.group(2).strip()
    if rhs == "unknown":
      unknown_alias_spans.append((m.start(), m.end(), name))
    else:
      real_names.add(name)

  edits: list[Edit] = []
  for start, end, name in unknown_alias_spans:
    if name in real_names:
      edits.append((start, end, ""))
  return edits


# Default chain registered into the link driver. Order matters:
#   1. `heritage_relink_rewriter` runs first so a re-linked `extends` never
#      collides with an `unknown` substitution downstream.
#   2. `undeclared_to_unknown_rewriter` materialises type-position
#      `unknown`s so that any later passes operate on the final shape.
#   3. `redundant_unknown_alias_dropper` runs last and removes stand-alone
#      `unknown` aliases that are now provably shadowed by a real class
#      or interface declaration.
DEFAULT_REWRITERS: tuple[LinkRewriter, ...] = (
  heritage_relink_rewriter,
  undeclared_to_unknown_rewriter,
  redundant_unknown_alias_dropper,
)


def apply_rewriters(
  source: str,
  declared_names: set,
  ancestor_chains: dict | None = None,
  rewriters: tuple[LinkRewriter, ...] | None = None,
) -> str:
  """Run every registered `LinkRewriter` against `source` and return the
  rewritten text.

  This is the public entry point used by `link.yaml_build`. The legacy
  alias `_replace_undeclared_with_unknown` continues to exist as a thin
  wrapper for callers / tests that still import it.
  """
  ctx = RewriteContext(
    source=source,
    scrubbed=_strip_comments(source),
    declared=frozenset(declared_names) | _TS_BUILTIN_TYPES,
    ancestor_chains=ancestor_chains or {},
  )

  edits: list[Edit] = []
  for rewriter in rewriters or DEFAULT_REWRITERS:
    edits.extend(rewriter(ctx))

  if not edits:
    return source

  edits.sort()
  merged: list[Edit] = []
  last = -1
  for start, end, repl in edits:
    if start < last:
      continue
    merged.append((start, end, repl))
    last = end

  out_parts = []
  cursor = 0
  for start, end, repl in merged:
    out_parts.append(source[cursor:start])
    out_parts.append(repl)
    cursor = end
  out_parts.append(source[cursor:])
  return ''.join(out_parts)


def replace_undeclared_with_unknown(
  source: str,
  declared_names: set,
  ancestor_chains: dict | None = None,
) -> str:
  """Backward-compatible wrapper around `apply_rewriters`.

  Mirrors the historical `_replace_undeclared_with_unknown` signature so
  the link driver can swap implementations without changing call sites.
  """
  return apply_rewriters(source, declared_names, ancestor_chains)
