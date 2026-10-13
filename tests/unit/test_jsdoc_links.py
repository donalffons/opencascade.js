"""Unit tests for `ocjs_bindgen.codegen.typescript.jsdoc.links`.

PR 3.2 — exercises the `{@link X}` classifier + token rewriter against a
minimal `tsb`-shaped stub so the test stays hermetic.
"""

from __future__ import annotations

from ocjs_bindgen.codegen.typescript.jsdoc.links import (
  classify_link_target,
  normalize_link_tokens,
)


class _StubBinder:
  """Minimal `TypescriptBindings` surface required by the link helpers."""

  _CONTAINER_ALIASES = {"std::vector": "EmscriptenVector"}

  def __init__(self, declared: set[str]) -> None:
    self._declared = set(declared)

  def _is_known_export_name(self, name: str) -> bool:
    return name in self._declared

  @staticmethod
  def _strip_type_qualifiers_str(spelling: str) -> str:
    return spelling.replace("*", "").replace("&", "").replace("const ", "").strip()


def test_classify_returns_clean_name_when_declared() -> None:
  tsb = _StubBinder(declared={"gp_Pnt"})
  assert classify_link_target(tsb, "gp_Pnt") == "gp_Pnt"


def test_classify_underscore_flatten_for_namespace_scoped() -> None:
  tsb = _StubBinder(declared={"BRepGraph_NodeId"})
  assert classify_link_target(tsb, "BRepGraph::NodeId") == "BRepGraph_NodeId"


def test_classify_falls_through_to_leaf() -> None:
  tsb = _StubBinder(declared={"NodeId"})
  assert classify_link_target(tsb, "BRepGraph::NodeId") == "NodeId"


def test_classify_resolves_container_alias() -> None:
  tsb = _StubBinder(declared={"EmscriptenVector"})
  assert classify_link_target(tsb, "std::vector<int>") == "EmscriptenVector"


def test_classify_returns_none_for_unknown_target() -> None:
  tsb = _StubBinder(declared=set())
  assert classify_link_target(tsb, "Mystery") is None


def test_normalize_rewrites_known_link_to_aliased() -> None:
  tsb = _StubBinder(declared={"Foo"})
  text = "see {@link Foo} please"
  out = normalize_link_tokens(tsb, text)
  assert "{@link Foo | `Foo`}" in out


def test_normalize_demotes_unknown_link_to_inline_code() -> None:
  tsb = _StubBinder(declared=set())
  out = normalize_link_tokens(tsb, "see {@link Mystery} please")
  assert "{@link" not in out
  assert "`Mystery`" in out


def test_normalize_returns_text_when_no_link_token() -> None:
  tsb = _StubBinder(declared=set())
  assert normalize_link_tokens(tsb, "no links here") == "no links here"
