"""Doxygen `@param` description lookup + overload resolution.

Extracted from `TypescriptBindings._param_description` and
`TypescriptBindings._resolve_overload` (PR 2.4).
"""

from __future__ import annotations

from .links import normalize_link_tokens


def param_description(tsb, member, param_name):
  """Look up the upstream Doxygen `@param` description for a given name on
  a resolved member entry. Returns the escaped/normalized text (without
  surrounding tags) or "" when no description is present.
  """
  # Inline `escape_jsdoc` to avoid a renderer↔params circular import. The
  # logic is trivially small and the renderer also calls it directly.
  for param in member.get("params", []):
    if param["name"] == param_name:
      raw = normalize_link_tokens(tsb, param.get("description", ""))
      return raw.replace("*/", "*\\/") if raw else raw
  return ""


def resolve_overload(member, param_count, overload_index=0, param_names=None):
  """Select the correct overload entry when a member has multiple definitions.
  """
  overloads = member.get("overloads")
  if not overloads:
    return member
  if param_count is None:
    return overloads[0]
  matches = [o for o in overloads if o.get("param_count") == param_count]
  if not matches:
    if param_names:
      scored = [(o, len(set(p["name"] for p in o.get("params", [])) & set(param_names))) for o in overloads]
      scored.sort(key=lambda x: -x[1])
      if scored[0][1] > 0:
        return scored[0][0]
    return overloads[0]
  if len(matches) == 1 or not param_names:
    idx = min(overload_index, len(matches) - 1)
    return matches[idx]
  scored = [(o, len(set(p["name"] for p in o.get("params", [])) & set(param_names))) for o in matches]
  scored.sort(key=lambda x: -x[1])
  top_score = scored[0][1]
  best = [o for o, s in scored if s == top_score]
  idx = min(overload_index, len(best) - 1)
  return best[idx]
