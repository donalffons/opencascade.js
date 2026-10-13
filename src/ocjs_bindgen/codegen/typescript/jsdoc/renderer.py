"""JSDoc block renderer.

Extracted from `TypescriptBindings._escape_jsdoc`,
`_emit_jsdoc_text`, `_emit_simplesect_tags`, `_jsdoc`, and
`_enum_member_jsdoc` (PR 2.4).
"""

from __future__ import annotations

from .links import classify_link_target, normalize_link_tokens
from .params import param_description, resolve_overload
from .wrapping import split_long_lines


def escape_jsdoc(text):
  """Escape any embedded `*/` so it can't terminate the surrounding /** ... */ block.
  """
  if not text:
    return text
  return text.replace("*/", "*\\/")


def emit_jsdoc_text(lines, indent_str, body):
  """Append a Markdown body (single or multi-line) into a JSDoc lines buffer.

  Empty lines become a bare ` * ` separator so paragraph breaks survive in the
  rendered JSDoc tooltip. Trailing whitespace on each non-empty line is removed
  so the output stays diff-clean.
  """
  if not body:
    return
  for line in body.splitlines():
    stripped = line.rstrip()
    if stripped:
      lines.append(f"{indent_str} * {stripped}")
    else:
      lines.append(f"{indent_str} *")


def emit_simplesect_tags(tsb, lines, indent_str, entry):
  """Emit `@remarks **Note:** ...`, `@remarks **Warning:** ...`, `@see ...`
  for the simplesects captured per entry by
  `extract-docs.py::_extract_simplesects`.
  """
  for note in entry.get("notes", []) or []:
    normalized = normalize_link_tokens(tsb, note)
    escaped = escape_jsdoc(normalized)
    lines.append(f"{indent_str} * @remarks **Note:** {escaped}")
  for warning in entry.get("warnings", []) or []:
    normalized = normalize_link_tokens(tsb, warning)
    escaped = escape_jsdoc(normalized)
    lines.append(f"{indent_str} * @remarks **Warning:** {escaped}")
  for see in entry.get("sees", []) or []:
    target = see.get("target", "")
    if not target:
      continue
    resolved = classify_link_target(tsb, target)
    target_escaped = escape_jsdoc(target)
    if resolved:
      resolved_escaped = escape_jsdoc(resolved)
      lines.append(
        f"{indent_str} * @see {{@link {resolved_escaped} | `{target_escaped}`}}"
      )
    else:
      lines.append(f"{indent_str} * @see `{target_escaped}`")


def jsdoc(
  tsb,
  class_name,
  member_name=None,
  indent_str="",
  param_count=None,
  overload_index=0,
  template_name=None,
  param_names=None,
  mutated_class_param_names=None,
  envelope_descriptor=None,
  param_name_map=None,
):
  """Emit a JSDoc block from Doxygen-derived brief, detailed text, `@param`,
  `@returns`, and simplesect tags only.
  """
  used_template = False
  entry = tsb._docs.get(class_name)
  if not entry and template_name:
    entry = tsb._docs.get(template_name)
    used_template = True
  if not entry:
    return ""
  if member_name is None:
    brief = split_long_lines(escape_jsdoc(normalize_link_tokens(tsb, entry.get("brief", ""))))
    detailed = split_long_lines(escape_jsdoc(normalize_link_tokens(tsb, entry.get("detailed", ""))))
    has_simplesects = bool(entry.get("notes") or entry.get("warnings") or entry.get("sees"))
    if not brief and not detailed and not has_simplesects and not entry.get("deprecated"):
      return ""
    lines = [f"{indent_str}/**"]
    if brief:
      emit_jsdoc_text(lines, indent_str, brief)
    if detailed:
      if brief:
        lines.append(f"{indent_str} *")
      emit_jsdoc_text(lines, indent_str, detailed)
    emit_simplesect_tags(tsb, lines, indent_str, entry)
    if entry.get("deprecated"):
      lines.append(f"{indent_str} * @deprecated")
    lines.append(f"{indent_str} */")
    return "\n".join(lines) + "\n"
  members = entry.get("members", {})
  member = members.get(member_name)
  if not member and used_template and template_name and member_name == class_name:
    member = members.get(template_name)
  if not member:
    return ""
  member = resolve_overload(member, param_count, overload_index, param_names=param_names)
  brief = split_long_lines(escape_jsdoc(normalize_link_tokens(tsb, member.get("brief", ""))))
  detailed = split_long_lines(escape_jsdoc(normalize_link_tokens(tsb, member.get("detailed", ""))))
  has_simplesects = bool(member.get("notes") or member.get("warnings") or member.get("sees"))
  has_param_or_return = bool(member.get("params") or member.get("returns_description"))
  if not brief and not detailed and not has_simplesects and not has_param_or_return and not member.get("deprecated"):
    return ""
  lines = [f"{indent_str}/**"]
  if brief:
    emit_jsdoc_text(lines, indent_str, brief)
  if detailed:
    if brief:
      lines.append(f"{indent_str} *")
    emit_jsdoc_text(lines, indent_str, detailed)
  mutated_seq = mutated_class_param_names or ()
  mutated_set = set(mutated_seq)
  name_map = param_name_map or {}
  emitted_param_names = set()
  suffix = type(tsb).MUTATED_CLASS_PARAM_SUFFIX
  for param in member.get("params", []):
    doxygen_name = param["name"]
    pname = name_map.get(doxygen_name, doxygen_name)
    if param_names is not None and pname not in param_names:
      continue
    desc = escape_jsdoc(normalize_link_tokens(tsb, param.get("description", "")))
    if pname in mutated_set:
      desc = (desc + " " + suffix).strip() if desc else suffix
    lines.append(f"{indent_str} * @param {pname} {desc}".rstrip())
    emitted_param_names.add(pname)
  for pname in mutated_seq:
    if pname in emitted_param_names:
      continue
    if param_names is not None and pname not in param_names:
      continue
    lines.append(f"{indent_str} * @param {pname} {suffix}")
    emitted_param_names.add(pname)

  ret_desc = escape_jsdoc(normalize_link_tokens(tsb, member.get("returns_description", "")))
  if envelope_descriptor and envelope_descriptor.get("has_envelope"):
    lines.append(f"{indent_str} * @returns A result object with fields:")
    for field in envelope_descriptor.get("fields", []):
      fname = field["name"]
      kind = field["kind"]
      if kind == "return":
        field_desc = ret_desc if ret_desc else "the C++ return value"
      elif kind == "handle":
        base_desc = param_description(tsb, member, fname)
        field_desc = (base_desc + ", owned by the returned envelope.") if base_desc else "owned by the returned envelope."
      else:
        base_desc = param_description(tsb, member, fname)
        field_desc = base_desc if base_desc else "updated value from the call."
      lines.append(f"{indent_str} * - `{fname}`: {field_desc}".rstrip())
    if envelope_descriptor.get("has_dispose"):
      lines.append(f"{indent_str} * Dispose the returned envelope to release owned Handle fields.")
  elif ret_desc:
    lines.append(f"{indent_str} * @returns {ret_desc}")
  emit_simplesect_tags(tsb, lines, indent_str, member)
  if member.get("deprecated"):
    lines.append(f"{indent_str} * @deprecated")
  lines.append(f"{indent_str} */")
  return "\n".join(lines) + "\n"


def enum_member_jsdoc(tsb, enum_name, member_name):
  """Emit JSDoc for an individual enum member if Doxygen docs are available.
  """
  entry = tsb._docs.get(enum_name)
  if not entry or entry.get("kind") != "enum":
    return ""
  members = entry.get("members", {})
  member = members.get(member_name, {})
  brief = split_long_lines(escape_jsdoc(normalize_link_tokens(tsb, member.get("brief", ""))))
  detailed = split_long_lines(escape_jsdoc(normalize_link_tokens(tsb, member.get("detailed", ""))))
  has_simplesects = bool(member.get("notes") or member.get("warnings") or member.get("sees"))
  if not brief and not detailed and not has_simplesects:
    return ""
  indent_str = "  "
  lines = [f"{indent_str}/**"]
  if brief:
    emit_jsdoc_text(lines, indent_str, brief)
  if detailed:
    if brief:
      lines.append(f"{indent_str} *")
    emit_jsdoc_text(lines, indent_str, detailed)
  emit_simplesect_tags(tsb, lines, indent_str, member)
  lines.append(f"{indent_str} */")
  return "\n".join(lines) + "\n"
