"""JSDoc rendering helpers for TypescriptBindings.

PR 2.4 — JSDoc cluster decomposition.

Submodules:
  - loader   : `_load_docs` — JSON cache loader for OCCT-extracted Doxygen.
  - renderer : `_escape_jsdoc`, `_emit_jsdoc_text`, `_emit_simplesect_tags`,
               `_jsdoc`, `_enum_member_jsdoc`.
  - wrapping : `_soft_wrap_long_line`, `_split_long_lines` — line-folding.
  - links    : `_classify_link_target`, `_normalize_link_tokens` — `{@link …}`
               → `{@link …}` rewriting against the bound-export catalog.
  - params   : `_param_description`, `_resolve_overload` — Doxygen
               `@param` lookup and overload picker.

All callers continue to invoke the helpers through the binder's existing
method names; this package supplies the implementations.
"""
