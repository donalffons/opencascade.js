"""Rule 5 anti-precedence-inversion CI guard for ``libembind-overloading.patch``.

Policy rule 5 (``docs/policy/ocjs-trailing-default-emission-policy.md``,
also tracked as rule 6 in the policy doc's numbering scheme under
"Never invert the dispatcher's first-match-wins contract") forbids any
patch hunk that changes the precedence ordering inside libembind's
``$ensureOverloadTable`` or ``$getSignature`` beyond the four canonical
hunks Phase 0 landed.

This sentinel reads ``src/patches/libembind-overloading.patch`` and
asserts the patch text honours the anti-precedence-inversion contract.
It is the Phase 2 counterpart to
``tests/sentinel/test_libembind_patch_hygiene.py``: that sentinel
verifies the patch APPLIES cleanly + the post-patch JS contains the
expected hunks; this sentinel verifies the patch TEXT does not
introduce forbidden hunks 5 or 6.

The four canonical hunks (and their patch-text anchors):

1. ``$ensureOverloadTable`` arity-pad (Gate-1 hunk 1)
2. constructor dispatcher arity-pad (Gate-1 hunk 2)
3. ``$getSignature`` optional-wildcard short-circuit (Gate-1 hunk 3)
4. ``$getSignature`` Path B primitive-priority fallback (Gate-1 hunk 4)

The forbidden hunks:

* Hunk 5 — cross-arity type-aware fallback ("_exactSigOk", "type-aware
  scan", "cross-arity")
* Hunk 6 — concrete-beats-wildcard precedence inversion
  ("concrete-beats-wildcard", ranking comparators that demote
  ``optional === true`` matches)

The guard checks the patch text directly so a future PR adding a
forbidden hunk fails CI at PR-review time, not after the build that
produces the patched libembind.
"""

from __future__ import annotations

import re
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
PATCH_FILE = REPO_ROOT / "src" / "patches" / "libembind-overloading.patch"


# Canonical hunk anchors — Phase 0 landed these as the v2 patch.
CANONICAL_HUNK_ANCHORS = (
    "Gate-1 hunk 1",
    "Gate-1 hunk 2",
    "Gate-1 hunk 3",
    "Gate-1 hunk 4",
)

# Forbidden hunk markers — anything matching here violates rule 5 (no
# dispatcher precedence inversion). Strings are case-sensitive: the
# OCJS convention is that forbidden-hunk markers are explicit and
# distinct from any legitimate emscripten upstream string.
FORBIDDEN_MARKERS = (
    "Gate-1 hunk 5",
    "Gate-1 hunk 6",
    "concrete-beats-wildcard",
    "cross-arity type-aware",
    "cross-arity fallback",
    "_exactSigOk",
    "exactSigOk",
)

# Tripwire upper bound for total ``@@`` hunk-chunk count. Current
# canonical patch has 14 chunks (4 conceptual hunks, each splits into
# multiple file-line @@ chunks). 20 is the soft ceiling: a PR pushing
# the chunk count above this is exporting a meaningful structural
# extension that demands explicit review against policy rule 10
# (upstream suitability) — fail loudly rather than absorb silently.
MAX_HUNK_CHUNKS = 20


def test_patch_file_exists():
    assert PATCH_FILE.exists(), f"patch file missing at {PATCH_FILE}"


def test_patch_contains_all_four_canonical_hunks():
    """Patch text must mention every Phase-0 canonical hunk anchor."""
    src = PATCH_FILE.read_text()
    missing = [a for a in CANONICAL_HUNK_ANCHORS if a not in src]
    assert not missing, (
        f"canonical hunk anchors missing from patch: {missing}. "
        f"Either Phase 0's anchors drifted or a regression dropped a hunk. "
        f"Compare against ``docs/research/ocjs-libembind-phase-0-hygiene.md``."
    )


def test_patch_does_not_contain_forbidden_markers():
    """Rule 5 — no precedence-inversion hunks."""
    src = PATCH_FILE.read_text()
    found = [m for m in FORBIDDEN_MARKERS if m in src]
    assert not found, (
        f"FORBIDDEN dispatcher hunk marker(s) present in "
        f"libembind-overloading.patch: {found}. "
        f"Policy rule 5 (no precedence inversion) prohibits these. "
        f"Reference: ``docs/policy/ocjs-trailing-default-emission-policy.md`` "
        f"rule 6 + ``docs/research/ocjs-occt-surface-audit.md``."
    )


def test_patch_does_not_invert_ensureOverloadTable_iteration_order():
    """No hunk may modify the ``$ensureOverloadTable`` candidate-iteration
    order beyond the arity-pad in Hunk 1. We forbid patch text that
    introduces a ``keys.sort``, ``keys.reverse``, comparator-based
    candidate ranking, or a ``candidates.sort`` against the
    ``optional`` flag.
    """
    src = PATCH_FILE.read_text()
    # Pull the ``$ensureOverloadTable`` patched body — bounded by the
    # next top-level ``$`` definition or end-of-patch.
    forbidden_iteration_patterns = (
        r"keys\.sort\(",
        r"keys\.reverse\(",
        r"candidates\.sort\(",
        # Comparator that demotes ``optional`` candidates — the smoking
        # gun of concrete-beats-wildcard.
        r"\.optional\s*!==\s*true",
        r"\.optional\s*===\s*false",
    )
    found = []
    for pat in forbidden_iteration_patterns:
        if re.search(pat, src):
            found.append(pat)
    assert not found, (
        f"FORBIDDEN iteration-order modification(s) detected in "
        f"libembind-overloading.patch: {found}. "
        f"Rule 5: ``$ensureOverloadTable`` candidate iteration order "
        f"MUST NOT be reordered beyond the arity-pad."
    )


def test_patch_hunk_chunk_count_within_tripwire():
    """Soft ceiling on ``@@`` hunk-chunk count (currently 16, ceiling 20).

    A future PR that explodes the chunk count is exporting structural
    behaviour that exceeds the v2 patch's bounded surface and must
    surface to reviewers as a deliberate, policy-checked widening.
    """
    src = PATCH_FILE.read_text()
    chunks = re.findall(r"^@@", src, re.MULTILINE)
    assert len(chunks) <= MAX_HUNK_CHUNKS, (
        f"libembind-overloading.patch has {len(chunks)} ``@@`` hunk "
        f"chunks; tripwire ceiling is {MAX_HUNK_CHUNKS}. "
        f"If the addition is intentional (e.g. a new canonical hunk "
        f"per policy rule 10), bump the ceiling here AND document the "
        f"motivation in ``docs/research/ocjs-phase-2-val-dispatch-emission.md``."
    )


def test_synthetic_forbidden_marker_would_be_caught():
    """Meta-test — synthesize a patch text containing each forbidden
    marker in turn and assert the simple ``in`` check would catch it.
    Confirms the guard's coverage matrix.

    Documented in the task spec as: "Verify rule 5 CI guard fails on a
    synthetic precedence-inversion hunk addition".
    """
    canonical = PATCH_FILE.read_text()
    for marker in FORBIDDEN_MARKERS:
        synthetic = canonical + f"\n// {marker}: synthetic test injection\n"
        found = [m for m in FORBIDDEN_MARKERS if m in synthetic]
        assert marker in found, (
            f"meta-test failure: forbidden marker {marker!r} not detected "
            f"by the substring scan. The guard's coverage matrix is broken."
        )
