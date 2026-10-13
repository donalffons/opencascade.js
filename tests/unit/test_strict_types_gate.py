"""R2.2 — OCJS_STRICT_TYPES fail-loud gate.

Hermetic tests for `_enforce_strict_types_gate` and `_count_unknown_tokens`
in `ocjs_bindgen.link.yaml_build`. The gate prevents the May-2026 Docker
replicad regression mode where the R2 NCollection link-time filter
silently dropped reachable classes and the d.ts post-processor neutralised
the resulting dangling references — producing a TypeScript-compilable but
runtime-broken artifact.

The strict-types gate is the user-facing failure mode that catches this
class of bug at link-time; these tests pin its behaviour so future
refactors of the rewriter pipeline don't silently bypass the guardrail.
"""

from __future__ import annotations

import pytest

from ocjs_bindgen.diagnostics import DIAGNOSTICS
from ocjs_bindgen.link.yaml_build import (
  _STRICT_TYPES_REWRITE_BUDGET,
  _count_unknown_tokens,
  _enforce_strict_types_gate,
  _internalize_runtime_declarations,
)


@pytest.fixture(autouse=True)
def _reset_diagnostics_and_env(monkeypatch):
  """Each test starts from a known state: no diagnostics, no env var."""
  DIAGNOSTICS.reset()
  monkeypatch.delenv("OCJS_STRICT_TYPES", raising=False)
  yield
  DIAGNOSTICS.reset()


# ----------------------------------------------------------------------------
# `_count_unknown_tokens` — bare-identifier counter.
# ----------------------------------------------------------------------------


def test_count_unknown_zero_for_clean_source() -> None:
  source = "export declare class Foo { bar(): number; }\n"
  assert _count_unknown_tokens(source) == 0


def test_count_unknown_detects_method_signature_rewrite() -> None:
  """A method rewritten to `unknown` is a smoking gun and must be detected."""
  source = (
    "export declare class Poly_Triangulation {\n"
    "  MapNodeArray(): unknown;\n"
    "}\n"
  )
  assert _count_unknown_tokens(source) == 1


def test_count_unknown_ignores_identifier_substrings() -> None:
  """`unknownTypeFlag` and `MyUnknown` contain `unknown` as a substring but
  are not bare identifier tokens — must not be counted."""
  source = (
    "export declare class Foo {\n"
    "  unknownTypeFlag(): number;\n"
    "  serialize(p: MyUnknown): void;\n"
    "}\n"
  )
  assert _count_unknown_tokens(source) == 0


def test_count_unknown_handles_multiple_rewrites() -> None:
  source = (
    "method1(): unknown;\n"
    "method2(p: unknown): void;\n"
    "method3(): Array<unknown>;\n"
  )
  assert _count_unknown_tokens(source) == 3


def test_runtime_declarations_are_type_only_exports() -> None:
  source, exports = _internalize_runtime_declarations(
    "export declare class Foo {}\n"
    "export declare const Kind: { A: Kind };\n"
    "export type Kind = 'A';\n"
    "export interface Options {}\n"
    "export declare namespace FS { function readFile(): Uint8Array }\n"
    "export declare function getExceptionMessage(exception: unknown): string;\n"
  )

  assert "export declare" not in source
  assert "declare class Foo" in source
  assert "declare const Kind" in source
  assert "type Kind" in source
  assert "interface Options" in source
  assert "declare namespace FS" in source
  assert "declare function getExceptionMessage" in source
  assert exports == ["Foo", "Kind", "Options"]


# ----------------------------------------------------------------------------
# `_enforce_strict_types_gate` — env-controlled, fail-loud behaviour.
# ----------------------------------------------------------------------------


def test_gate_warns_when_env_var_unset(capsys) -> None:
  """Default behaviour (env var unset): gate is warn-only -- prints a
  triage summary to stderr so the operator sees the missing-typedef
  signal, but does NOT raise so the build proceeds. This is the new
  default after the May-2026 default-flip."""
  _enforce_strict_types_gate(
    typescriptDefinitionOutput="MapNodeArray(): unknown;\n",
    rewrites_to_unknown=42,
    diagnostics=DIAGNOSTICS,
  )
  captured = capsys.readouterr()
  assert "OCJS_STRICT_TYPES WARNING: missing types in .d.ts" in captured.err
  assert "rewrites to 'unknown': 42" in captured.err
  # Warn-mode footer points at the structural fix surface (R1 / W10) and
  # tells the operator how to escalate.
  assert "OCJS_STRICT_TYPES=1" in captured.err
  assert "TypescriptBindings.resolve_type" in captured.err
  assert "referenced_classes" in captured.err
  # Nothing on stdout -- diagnostic goes to stderr.
  assert captured.out == ""


def test_gate_warns_when_env_var_zero(monkeypatch, capsys) -> None:
  """`=0` is treated identically to unset: warn-only, no raise. Single
  env var, two states -- only `=1` triggers fail-loud."""
  monkeypatch.setenv("OCJS_STRICT_TYPES", "0")
  _enforce_strict_types_gate(
    typescriptDefinitionOutput="MapNodeArray(): unknown;\n",
    rewrites_to_unknown=42,
    diagnostics=DIAGNOSTICS,
  )
  captured = capsys.readouterr()
  assert "OCJS_STRICT_TYPES WARNING: missing types in .d.ts" in captured.err
  assert "rewrites to 'unknown': 42" in captured.err
  assert "OCJS_STRICT_TYPES=1" in captured.err


def test_gate_warning_footer_mentions_strict_mode_opt_in(capsys) -> None:
  """The warn-mode footer must literally name `OCJS_STRICT_TYPES=1` so
  CI users know how to escalate the warning to a build failure."""
  _enforce_strict_types_gate(
    typescriptDefinitionOutput="m(): unknown;\n",
    rewrites_to_unknown=1,
    diagnostics=DIAGNOSTICS,
  )
  captured = capsys.readouterr()
  # The literal env-var setting must be present, not paraphrased.
  assert "OCJS_STRICT_TYPES=1" in captured.err
  # And the recovery action must point at the structural fix surface
  # (codegen `referenced_classes` lift, R1 / W10) — not the legacy
  # `_compute_yaml_class_scope` regex extension that we've retired.
  assert "TypescriptBindings.resolve_type" in captured.err
  assert "referenced_classes" in captured.err
  # And it must be clearly labelled a WARNING, not an ERROR.
  assert "WARNING" in captured.err


def test_gate_passes_when_no_rewrites_and_no_unbound(monkeypatch, capsys) -> None:
  """Clean build with strict types on must succeed silently -- nothing
  printed, no exception raised. Same silent behaviour in warn mode."""
  monkeypatch.setenv("OCJS_STRICT_TYPES", "1")
  _enforce_strict_types_gate(
    typescriptDefinitionOutput="export declare class Foo {}\n",
    rewrites_to_unknown=0,
    diagnostics=DIAGNOSTICS,
  )
  captured = capsys.readouterr()
  assert captured.out == ""
  assert captured.err == ""


def test_gate_raises_on_unknown_rewrite_above_budget(monkeypatch) -> None:
  monkeypatch.setenv("OCJS_STRICT_TYPES", "1")
  with pytest.raises(RuntimeError) as exc_info:
    _enforce_strict_types_gate(
      typescriptDefinitionOutput="MapNodeArray(): unknown;\n",
      rewrites_to_unknown=_STRICT_TYPES_REWRITE_BUDGET + 1,
      diagnostics=DIAGNOSTICS,
    )
  msg = str(exc_info.value)
  assert "OCJS_STRICT_TYPES=1" in msg
  assert "rewritten to bare 'unknown'" in msg
  # Points at the structural-lift surface (R1 / W10), which still
  # references both `TypescriptBindings.resolve_type` (the recording
  # call) AND `_compute_yaml_class_scope` (the lift consumer) so
  # operators can navigate either direction of the fix.
  assert "TypescriptBindings.resolve_type" in msg
  assert "referenced_classes" in msg
  assert "_compute_yaml_class_scope" in msg
  assert "ocjs_bindgen.link.yaml_build" in msg
  assert "ocjs_bindgen.codegen.bindings" in msg


def test_gate_raises_on_unbound_reference_diagnostic(monkeypatch) -> None:
  """Even with zero `: unknown` rewrites, the gate must fail if the
  resolver collected unbound_reference diagnostics during codegen."""
  monkeypatch.setenv("OCJS_STRICT_TYPES", "1")
  DIAGNOSTICS.collect_any("unbound_reference", "SomeClass_That_Was_Excluded")
  with pytest.raises(RuntimeError) as exc_info:
    _enforce_strict_types_gate(
      typescriptDefinitionOutput="export declare class Foo {}\n",
      rewrites_to_unknown=0,
      diagnostics=DIAGNOSTICS,
    )
  msg = str(exc_info.value)
  assert "unbound class references" in msg
  # Points at both ends of the structural fix surface (R1 / W10).
  assert "TypescriptBindings.resolve_type" in msg
  assert "referenced_classes" in msg
  assert "_compute_yaml_class_scope" in msg


def test_gate_error_message_is_path_agnostic_and_actionable(monkeypatch) -> None:
  """The error message must survive log truncation: it must NOT reference
  transient paths (no /tmp/..., no specific build/ paths), MUST name the
  exact function to fix, and MUST tell the operator what action to take
  AND what NOT to do (don't ship with OCJS_STRICT_TYPES=0)."""
  monkeypatch.setenv("OCJS_STRICT_TYPES", "1")
  with pytest.raises(RuntimeError) as exc_info:
    _enforce_strict_types_gate(
      typescriptDefinitionOutput="m(): unknown;\n",
      rewrites_to_unknown=1,
      diagnostics=DIAGNOSTICS,
    )
  msg = str(exc_info.value)
  # Path-agnostic: no transient paths.
  assert "/tmp/" not in msg
  assert "/output/" not in msg
  assert "/opencascade.js/" not in msg
  # Actionable: names both ends of the structural fix surface (R1 / W10)
  # so the operator can navigate from the link-time failure back to the
  # codegen-time recording call that should have populated the lift.
  assert "TypescriptBindings.resolve_type" in msg
  assert "referenced_classes" in msg
  assert "_compute_yaml_class_scope" in msg
  # Names the failure mode by category, not by build artifact name.
  assert "method signature" in msg or "method signatures" in msg
  # Warns against the bypass-and-ship anti-pattern.
  assert "OCJS_STRICT_TYPES=0" in msg
  assert "non-shipping" in msg


def test_gate_at_budget_does_not_raise(monkeypatch) -> None:
  """Exactly-at-budget must pass; over-budget by one must fail."""
  monkeypatch.setenv("OCJS_STRICT_TYPES", "1")
  _enforce_strict_types_gate(
    typescriptDefinitionOutput="",
    rewrites_to_unknown=_STRICT_TYPES_REWRITE_BUDGET,
    diagnostics=DIAGNOSTICS,
  )
  with pytest.raises(RuntimeError):
    _enforce_strict_types_gate(
      typescriptDefinitionOutput="m(): unknown;\n",
      rewrites_to_unknown=_STRICT_TYPES_REWRITE_BUDGET + 1,
      diagnostics=DIAGNOSTICS,
    )


def test_gate_prints_offender_summary_before_raising(
  monkeypatch, capsys
) -> None:
  """When firing, the gate must print a triage summary so the engineer
  doesn't need to re-run with the gate off just to see what failed.
  Summary goes to stderr (it's a diagnostic, not a regular log line)."""
  monkeypatch.setenv("OCJS_STRICT_TYPES", "1")
  DIAGNOSTICS.collect_any("unbound_reference", "NCollection_HArray1_gp_Pnt")
  DIAGNOSTICS.collect_any("unbound_reference", "NCollection_HArray1_gp_Pnt")
  DIAGNOSTICS.collect_any("unbound_reference", "STEPCAFControl_ExternFile")
  with pytest.raises(RuntimeError):
    _enforce_strict_types_gate(
      typescriptDefinitionOutput="m(): unknown;\n",
      rewrites_to_unknown=1,
      diagnostics=DIAGNOSTICS,
    )
  captured = capsys.readouterr().err
  assert "OCJS_STRICT_TYPES gate failure summary" in captured
  assert "NCollection_HArray1_gp_Pnt" in captured
  assert "STEPCAFControl_ExternFile" in captured
  # Top-offenders are sorted descending by count.
  ncoll_idx = captured.index("NCollection_HArray1_gp_Pnt")
  step_idx = captured.index("STEPCAFControl_ExternFile")
  assert ncoll_idx < step_idx
