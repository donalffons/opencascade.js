"""`{@link …}` token classification + rewriting against the bound-export catalog.

Extracted from `TypescriptBindings._classify_link_target` and
`TypescriptBindings._normalize_link_tokens` (PR 2.4).
"""

from __future__ import annotations

import re

LINK_TOKEN_RE = re.compile(r"\{@link\s+([^}|]+?)\s*\}")


def classify_link_target(tsb, target):
  """Resolve a Doxygen `<ref>`-derived target to an emitted TS export name.

  Mirrors the priority cascade from `_resolve_qualified_member_type` (rsplit
  on `::` then test `parent + "_" + member` before the bare leaf), and routes
  every candidate through `_is_known_export_name` which already excludes
  typedef-only names that would emit dangling links.
  """
  if not target:
    return None
  base = target.split("<", 1)[0]
  clean = tsb._strip_type_qualifiers_str(base)
  if not clean:
    return None
  if tsb._is_known_export_name(clean):
    return clean
  flat = None
  leaf = None
  if "::" in clean:
    parent, leaf = clean.rsplit("::", 1)
    parent = parent.strip()
    leaf = leaf.strip()
    if parent and leaf:
      flat = parent + "_" + leaf
      if tsb._is_known_export_name(flat):
        return flat
      if tsb._is_known_export_name(leaf):
        return leaf
  aliased = type(tsb)._CONTAINER_ALIASES.get(clean)
  if aliased and tsb._is_known_export_name(aliased):
    return aliased
  if flat:
    aliased = type(tsb)._CONTAINER_ALIASES.get(flat)
    if aliased and tsb._is_known_export_name(aliased):
      return aliased
  return None


def normalize_link_tokens(tsb, text):
  """Rewrite `{@link X}` tokens in JSDoc body text for Monaco-friendly tooltips.
  """
  if not text or "{@link" not in text:
    return text

  def replace(match):
    target = match.group(1).strip()
    if not target:
      return match.group(0)
    resolved = classify_link_target(tsb, target)
    if resolved:
      return "{@link " + resolved + " | `" + target + "`}"
    return "`" + target + "`"

  return LINK_TOKEN_RE.sub(replace, text)
