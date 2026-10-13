"""Unit tests for `ocjs_bindgen.link.rewrite`.

PR 3.2 — every rewriter in the chain must round-trip cleanly (no edits
when nothing matches) and produce stable byte-identical output for the
known patterns. The tests use small synthetic TS strings so they run in
microseconds without invoking libclang or the full bindgen.
"""

from __future__ import annotations

from ocjs_bindgen.link.rewrite import (
  DEFAULT_REWRITERS,
  RewriteContext,
  _strip_comments,
  apply_rewriters,
  heritage_relink_rewriter,
  redundant_unknown_alias_dropper,
  replace_undeclared_with_unknown,
  undeclared_to_unknown_rewriter,
)


def _ctx(source: str, declared: set[str], chains: dict | None = None) -> RewriteContext:
  return RewriteContext(
    source=source,
    scrubbed=_strip_comments(source),
    declared=frozenset(declared) | frozenset({"unknown", "string", "number", "boolean", "void"}),
    ancestor_chains=chains or {},
  )


def test_strip_comments_preserves_layout() -> None:
  src = "a/* foo */b\n// line\nc"
  out = _strip_comments(src)
  assert len(out) == len(src)
  assert "foo" not in out
  assert "line" not in out


def test_no_edits_when_everything_declared() -> None:
  src = "export class Foo extends Bar {\n  m: Baz;\n}\n"
  out = apply_rewriters(src, declared_names={"Foo", "Bar", "Baz"})
  assert out == src


def test_undeclared_method_arg_rewritten_to_unknown() -> None:
  src = "export class Foo {\n  m: NotDeclared;\n}\n"
  out = apply_rewriters(src, declared_names={"Foo"})
  assert "NotDeclared" not in out
  assert "m: unknown" in out


def test_heritage_relinks_to_declared_ancestor() -> None:
  src = "export class Child extends Missing {}\n"
  out = apply_rewriters(
    src,
    declared_names={"Child", "Granddad"},
    ancestor_chains={"Child": ["Missing", "Granddad"]},
  )
  assert "extends Granddad" in out
  assert "Missing" not in out


def test_heritage_drops_when_no_ancestor_declared() -> None:
  src = "export class Orphan extends Missing {}\n"
  out = apply_rewriters(src, declared_names={"Orphan"}, ancestor_chains={"Orphan": ["AlsoMissing"]})
  # The `extends Missing` clause is dropped, leaving an `Orphan` class body.
  assert "extends" not in out
  assert "Orphan" in out


def test_typeof_pattern_rewrites_undeclared() -> None:
  src = "type T = typeof Mystery;\n"
  out = apply_rewriters(src, declared_names={"T"})
  assert "typeof unknown" in out


def test_default_chain_runs_heritage_then_unknown() -> None:
  src = "export class C extends Missing { x: NotDeclared }\n"
  out = apply_rewriters(
    src,
    declared_names={"C", "Anc"},
    ancestor_chains={"C": ["Missing", "Anc"]},
  )
  assert "extends Anc" in out
  assert "x: unknown" in out


def test_legacy_alias_matches_pipeline_output() -> None:
  src = "export class C extends Missing { x: NotDeclared }\n"
  via_alias = replace_undeclared_with_unknown(
    src,
    declared_names={"C", "Anc"},
    ancestor_chains={"C": ["Missing", "Anc"]},
  )
  via_pipeline = apply_rewriters(
    src,
    declared_names={"C", "Anc"},
    ancestor_chains={"C": ["Missing", "Anc"]},
  )
  assert via_alias == via_pipeline


def test_default_rewriters_registered_in_order() -> None:
  # `heritage_relink_rewriter` MUST run before
  # `undeclared_to_unknown_rewriter` so a re-linked `extends` parent never
  # collides with an `unknown` substitution on the same span.
  # `redundant_unknown_alias_dropper` runs LAST so it can observe the
  # final declared shape (R6 from the unknown-coverage audit).
  assert DEFAULT_REWRITERS[0] is heritage_relink_rewriter
  assert DEFAULT_REWRITERS[1] is undeclared_to_unknown_rewriter
  assert DEFAULT_REWRITERS[2] is redundant_unknown_alias_dropper


def test_redundant_alias_dropper_removes_shadowing_aliases() -> None:
  # The smoking-gun pair from audit Finding 5: fragment A declared the
  # class, fragment B emitted a stub. Merged file carries both — the
  # alias must be dropped so TS declaration merging does not weaken the
  # class to `unknown`.
  src = (
    "declare class BRepGraphInc_BaseRef {\n"
    "  Id(): number;\n"
    "}\n"
    "\n"
    "type BRepGraphInc_BaseRef = unknown;\n"
    "\n"
    "declare class Other {}\n"
  )
  out = apply_rewriters(src, declared_names={"BRepGraphInc_BaseRef", "Other"})
  assert "type BRepGraphInc_BaseRef = unknown;" not in out
  assert "declare class BRepGraphInc_BaseRef" in out
  assert "declare class Other" in out


def test_redundant_alias_dropper_preserves_stand_alone_aliases() -> None:
  # `std_type_info` (audit Appendix A) has no shadowing class declaration
  # in OCJS — the `unknown` alias is the only declaration. It must stay.
  src = (
    "export type std_type_info = unknown;\n"
    "\n"
    "export declare class Foo {}\n"
  )
  out = apply_rewriters(src, declared_names={"std_type_info", "Foo"})
  assert "export type std_type_info = unknown;" in out


def test_redundant_alias_dropper_handles_interface_shadowing() -> None:
  # An `export interface X` should also count as a real declaration that
  # shadows an `export type X = unknown;` alias.
  src = (
    "export interface IShape { kind: string; }\n"
    "export type IShape = unknown;\n"
  )
  out = apply_rewriters(src, declared_names={"IShape"})
  assert "export type IShape = unknown;" not in out
  assert "export interface IShape" in out


def test_redundant_alias_dropper_handles_real_type_alias_shadowing() -> None:
  # A real (non-unknown) type alias shadowing an unknown alias should
  # also win.
  src = (
    "export type Shape = { kind: string };\n"
    "export type Shape = unknown;\n"
  )
  out = apply_rewriters(src, declared_names={"Shape"})
  assert "export type Shape = unknown;" not in out
  assert "export type Shape = { kind: string };" in out


def test_redundant_alias_dropper_drops_multiple_shadowed_aliases() -> None:
  # A realistic mini-fixture with several BRepGraphInc-style stubs and
  # one stand-alone std_type_info that must survive.
  src = (
    "export declare class BRepGraphInc_BaseRef {}\n"
    "export declare class BRepGraphInc_FaceDef {}\n"
    "export declare class BRepGraphInc_EdgeDef {}\n"
    "export type BRepGraphInc_BaseRef = unknown;\n"
    "export type BRepGraphInc_FaceDef = unknown;\n"
    "export type BRepGraphInc_EdgeDef = unknown;\n"
    "export type std_type_info = unknown;\n"
  )
  out = apply_rewriters(
    src,
    declared_names={
      "BRepGraphInc_BaseRef",
      "BRepGraphInc_FaceDef",
      "BRepGraphInc_EdgeDef",
      "std_type_info",
    },
  )
  for shadowed in ("BRepGraphInc_BaseRef", "BRepGraphInc_FaceDef", "BRepGraphInc_EdgeDef"):
    assert f"export type {shadowed} = unknown;" not in out
    assert f"export declare class {shadowed}" in out
  assert "export type std_type_info = unknown;" in out


def test_redundant_alias_dropper_idempotent() -> None:
  # Running apply_rewriters twice on the same input must produce the same
  # output (idempotency contract from audit R6).
  src = (
    "export declare class Foo {}\n"
    "export type Foo = unknown;\n"
  )
  once = apply_rewriters(src, declared_names={"Foo"})
  twice = apply_rewriters(once, declared_names={"Foo"})
  assert once == twice


def test_comments_do_not_trigger_edits() -> None:
  # `Mystery` mentioned only in a comment must not be rewritten.
  src = "// Mystery is a fine name\nexport class Foo {}\n"
  out = apply_rewriters(src, declared_names={"Foo"})
  assert "Mystery" in out  # comment is preserved verbatim
