"""Layer 1 parity harness: byte-diff the 10 sentinel fragments (<30 s).

This is the cheapest of the three sentinel layers. It assumes a fresh
`build/bindings/` exists from a previous `nx run ocjs:generate` (which is
~always cached locally). It does **not** invoke the bindgen itself — that is
what Layer 2 is for. The test exists so every refactor PR can confirm the ten
canonical fragments are byte-identical to the frozen pre-refactor baseline in
under a second.

If `build/bindings/` is empty or stale, the test fails with a clear pointer to
`nx run ocjs:generate` rather than silently passing.
"""

from __future__ import annotations

import filecmp
import json
from pathlib import Path

import pytest
from sentinels import (
    BUILD_BINDINGS,
    SENTINELS,
    Sentinel,
    assert_spine_is_complete,
)


def _bindings_present() -> bool:
    return BUILD_BINDINGS.is_dir() and any(BUILD_BINDINGS.iterdir())


@pytest.fixture(scope="module", autouse=True)
def _spine_invariants() -> None:
    assert_spine_is_complete()
    if not _bindings_present():
        pytest.fail(
            f"build/bindings/ is empty at {BUILD_BINDINGS}. "
            "Run `nx run ocjs:generate` (cache hit is ~instant) before this test."
        )


@pytest.mark.parametrize("sentinel", SENTINELS, ids=lambda s: f"{s.pattern}::{s.fragment_stem}")
def test_cpp_byte_identical(sentinel: Sentinel) -> None:
    fresh = sentinel.cpp_path
    baseline = sentinel.baseline_cpp
    assert fresh.is_file(), f"Missing fresh fragment: {fresh}"
    assert baseline.is_file(), f"Missing baseline: {baseline}"
    if not filecmp.cmp(fresh, baseline, shallow=False):
        diff = _summarise_diff(fresh, baseline)
        pytest.fail(
            f"\n[{sentinel.pattern}] {sentinel.fragment_stem}.cpp drifted from baseline."
            f"\n  fresh:    {fresh.relative_to(Path.cwd()) if fresh.is_absolute() else fresh}"
            f"\n  baseline: {baseline.relative_to(Path.cwd()) if baseline.is_absolute() else baseline}"
            f"\n{diff}"
        )


@pytest.mark.parametrize("sentinel", SENTINELS, ids=lambda s: f"{s.pattern}::{s.fragment_stem}")
def test_dts_byte_identical(sentinel: Sentinel) -> None:
    fresh = sentinel.dts_path
    baseline = sentinel.baseline_dts
    assert fresh.is_file(), f"Missing fresh fragment: {fresh}"
    assert baseline.is_file(), f"Missing baseline: {baseline}"
    if not filecmp.cmp(fresh, baseline, shallow=False):
        # .d.ts.json is structured — provide a structural diff to make
        # refactor regressions diagnosable at-a-glance.
        diff = _summarise_dts_json_diff(fresh, baseline)
        pytest.fail(
            f"\n[{sentinel.pattern}] {sentinel.fragment_stem}.d.ts.json drifted from baseline."
            f"\n  fresh:    {fresh}"
            f"\n  baseline: {baseline}"
            f"\n{diff}"
        )


def _summarise_diff(fresh: Path, baseline: Path, max_lines: int = 20) -> str:
    """Render a short diff snippet so failures are diagnosable in CI logs."""
    fresh_lines = fresh.read_text(errors="replace").splitlines()
    baseline_lines = baseline.read_text(errors="replace").splitlines()
    if len(fresh_lines) != len(baseline_lines):
        return f"  size: fresh={len(fresh_lines)} lines, baseline={len(baseline_lines)} lines"
    drift = []
    for i, (a, b) in enumerate(zip(fresh_lines, baseline_lines, strict=False)):
        if a != b:
            drift.append(f"  line {i + 1}:\n    -baseline: {b!r}\n    +fresh:    {a!r}")
            if len(drift) >= max_lines:
                drift.append(f"  … {len(fresh_lines) - i} more lines elided")
                break
    return "\n".join(drift)


def _summarise_dts_json_diff(fresh: Path, baseline: Path) -> str:
    """Structural diff of the per-fragment .d.ts.json envelope.

    Each .d.ts.json is `{ ".d.ts": str, "kind": str, "exports": [str], "ancestors": {...} }`.
    Show which top-level keys changed, and for `.d.ts` fall back to a textual diff.
    """
    try:
        fresh_obj = json.loads(fresh.read_text())
        base_obj = json.loads(baseline.read_text())
    except json.JSONDecodeError as exc:  # pragma: no cover — malformed fragment
        return f"  (could not parse JSON: {exc})"
    changed_keys = sorted(set(fresh_obj) | set(base_obj))
    deltas = []
    for key in changed_keys:
        if fresh_obj.get(key) != base_obj.get(key):
            if key == ".d.ts":
                deltas.append("  .d.ts: text drift (run scripts/diff-sentinel.py for detail)")
            else:
                deltas.append(f"  {key}: baseline={base_obj.get(key)!r} fresh={fresh_obj.get(key)!r}")
    return "\n".join(deltas) if deltas else "  (no structured deltas — fragment is byte-different but JSON-equal)"
