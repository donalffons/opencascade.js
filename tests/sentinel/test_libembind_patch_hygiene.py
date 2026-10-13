"""Patch-hygiene sentinel for ``src/patches/libembind-overloading.patch``.

Enforces the per-policy contract documented in
``docs/policy/ocjs-trailing-default-emission-policy.md`` rules 5–7 and
``docs/research/ocjs-libembind-phase-0-hygiene.md``:

1. **Pristine snapshot fidelity** — ``src/vendor/pristine-libembind.js`` must
   match its recorded SHA256 (``src/vendor/pristine-libembind.expected.sha256``)
   so the patch-application baseline is reproducible across machines.
2. **Single-definition invariant** — applying the canonical patch to the
   pristine snapshot must produce a libembind.js with exactly one
   ``$getSignature`` and exactly one ``$ensureOverloadTable`` definition.
   Multiple accumulated definitions silently shadow each other under JS
   object-literal duplicate-key semantics (the smoking gun behind the
   non-reproducible dispatch documented in
   ``ocjs-optional-overload-poc-coverage-gaps.md`` Finding 6 extended).
3. **Expected-state byte-identity** — the post-patch SHA256 must match the
   recorded fingerprint at
   ``src/patches/libembind-overloading.expected.sha256``.
4. **Canonical-hunk presence** — the four conceptual hunks (arity-pad in
   ``$ensureOverloadTable``, arity-pad in the constructor dispatcher,
   optional-wildcard short-circuit in ``$getSignature``, Path B
   primitive-priority fallback in ``$getSignature``) must each leave a
   detectable marker in the patched libembind.
5. **Forbidden hunks absent** — the patched libembind must NOT contain any
   ``concrete-beats-wildcard precedence`` inversion or cross-arity
   ``type-aware fallback`` (rule 5 of the policy doc).
6. **Idempotency** — running ``step_patch_embind`` twice must yield a
   byte-identical libembind.js (no accumulated duplicates).
"""

from __future__ import annotations

import hashlib
import re
import shutil
import subprocess
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
PRISTINE = REPO_ROOT / "src" / "vendor" / "pristine-libembind.js"
PRISTINE_HASH_FILE = REPO_ROOT / "src" / "vendor" / "pristine-libembind.expected.sha256"
PATCH_FILE = REPO_ROOT / "src" / "patches" / "libembind-overloading.patch"
EXPECTED_HASH_FILE = REPO_ROOT / "src" / "patches" / "libembind-overloading.expected.sha256"


def _sha256(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def _read_hash(path: Path) -> str:
    return path.read_text().strip()


def _apply_patch(workdir: Path) -> Path:
    """Reset pristine → patched in ``workdir`` and return the patched file path.

    Mirrors the canonical ``build-wasm.sh:step_patch_embind`` flow exactly:
    copy the pristine snapshot, apply the patch with ``patch -p0 -N``, no
    ``--ignore-whitespace`` (that flag was the historical workaround for
    pristine-drift; the canonical patch must apply cleanly without it).
    """
    target_dir = workdir / "src" / "lib"
    target_dir.mkdir(parents=True, exist_ok=True)
    target = target_dir / "libembind.js"
    shutil.copy(PRISTINE, target)
    result = subprocess.run(
        ["patch", "-p0", "-N", "--no-backup-if-mismatch"],
        cwd=workdir,
        input=PATCH_FILE.read_text(),
        text=True,
        capture_output=True,
    )
    if result.returncode != 0:
        raise AssertionError(
            f"patch failed (exit {result.returncode}):\n"
            f"STDOUT: {result.stdout}\nSTDERR: {result.stderr}"
        )
    return target


def test_pristine_snapshot_matches_recorded_hash() -> None:
    assert PRISTINE.exists(), f"pristine snapshot missing at {PRISTINE}"
    assert PRISTINE_HASH_FILE.exists(), (
        f"pristine hash file missing at {PRISTINE_HASH_FILE}"
    )
    actual = _sha256(PRISTINE)
    expected = _read_hash(PRISTINE_HASH_FILE)
    assert actual == expected, (
        f"pristine snapshot drift detected.\n"
        f"  file:     {PRISTINE}\n"
        f"  expected: {expected}\n"
        f"  actual:   {actual}\n"
        f"  Re-fetch from emscripten upstream at the pinned tag."
    )


def test_patch_applies_cleanly_to_pristine(tmp_path: Path) -> None:
    """``patch -p0 -N`` must succeed without ``--ignore-whitespace``."""
    target = _apply_patch(tmp_path)
    assert target.exists()
    assert target.stat().st_size > 0


def test_patched_libembind_matches_expected_hash(tmp_path: Path) -> None:
    target = _apply_patch(tmp_path)
    assert EXPECTED_HASH_FILE.exists(), (
        f"expected hash file missing at {EXPECTED_HASH_FILE}"
    )
    actual = _sha256(target)
    expected = _read_hash(EXPECTED_HASH_FILE)
    assert actual == expected, (
        f"post-patch SHA256 mismatch.\n"
        f"  expected: {expected} (from {EXPECTED_HASH_FILE.name})\n"
        f"  actual:   {actual}\n"
        f"  The patch or pristine has drifted from the recorded baseline."
    )


def test_patched_libembind_has_single_definitions(tmp_path: Path) -> None:
    """Exactly one ``$getSignature`` and one ``$ensureOverloadTable`` body.

    Counts only object-property definitions (``^\\s*\\$Name: ...``), not
    ``__deps:`` declarations or ``'$Name'`` string references.
    """
    target = _apply_patch(tmp_path)
    source = target.read_text()
    get_sig_defs = re.findall(r"^\s*\$getSignature:\s", source, re.MULTILINE)
    ensure_defs = re.findall(r"^\s*\$ensureOverloadTable:\s", source, re.MULTILINE)
    assert len(get_sig_defs) == 1, (
        f"expected exactly one $getSignature definition, found {len(get_sig_defs)}.\n"
        f"  Duplicate definitions indicate the patch was applied repeatedly "
        f"without pristine reset (policy rule 6)."
    )
    assert len(ensure_defs) == 1, (
        f"expected exactly one $ensureOverloadTable definition, found {len(ensure_defs)}.\n"
        f"  Duplicate definitions indicate the patch was applied repeatedly "
        f"without pristine reset (policy rule 6)."
    )


def test_patched_libembind_contains_canonical_hunks(tmp_path: Path) -> None:
    """The four conceptual hunks must each leave a detectable marker."""
    target = _apply_patch(tmp_path)
    source = target.read_text()

    # Hunk 1 — arity-pad inside $ensureOverloadTable.
    assert "Gate-1 hunk 1" in source, (
        "Hunk 1 (arity-pad in $ensureOverloadTable) missing from patched libembind"
    )
    # Hunk 2 — arity-pad in the constructor dispatcher.
    assert "Gate-1 hunk 2" in source, (
        "Hunk 2 (arity-pad in the ctor dispatcher) missing from patched libembind"
    )
    # Hunk 3 — optional-wildcard short-circuit in $getSignature.
    assert "Gate-1 hunk 3" in source, (
        "Hunk 3 (optional-wildcard short-circuit) missing from patched libembind"
    )
    # Hunk 4 — Path B primitive-priority fallback in $getSignature.
    assert "Gate-1 hunk 4" in source and "Path B" in source, (
        "Hunk 4 (Path B primitive-priority fallback) missing from patched libembind"
    )
    # Path B must concretely include the std::string/std::wstring → string mapping
    # so the minifier cannot strip it away (rule 7).
    assert "std::wstring" in source and "fieldType.valueType" in source, (
        "Path B primitive-mapping signature missing from $getSignature; the "
        "minifier-defeating inline name table has likely been removed."
    )


def test_signature_order_is_reserved_before_dependency_resolution(
    tmp_path: Path,
) -> None:
    """Same-arity dispatch order must follow registration, not callback order."""
    source = _apply_patch(tmp_path).read_text()
    sections = (
        source[
            source.index("_embind_register_class_function:"):
            source.index("_embind_register_class_class_function__deps:")
        ],
        source[
            source.index("_embind_register_class_class_function:"):
            source.index("_embind_register_class_class_property__deps:")
        ],
    )

    for section in sections:
        reserve = section.index("signaturesArray.push(rawSignatureArray)")
        callback = section.index(
            "whenDependentTypesAreResolved([], rawArgTypes"
        )
        resolve_in_place = section.index("rawSignatureArray[i] = signatureArray[i]")

        assert reserve < callback < resolve_in_place
        assert "signaturesArray.push(signatureArray)" not in section

    instance_section = sections[0]
    assert "if (undefined === method)" in instance_section
    assert "method.className !== classType.name" not in instance_section


def test_patched_libembind_has_no_forbidden_hunks(tmp_path: Path) -> None:
    """Rule 5 of the trailing-default-emission policy: no dispatcher precedence
    inversion. Hunks 5 (cross-arity type-aware fallback) and 6
    (concrete-beats-wildcard precedence) are FORBIDDEN.
    """
    target = _apply_patch(tmp_path)
    source = target.read_text()

    forbidden_markers = [
        # Local OCJS marker prefixes that Phase 0 forbids — these strings only
        # appear in OCJS hot-edits, never in pristine emscripten.
        "concrete-beats-wildcard",
        "Gate-1 hunk 5",
        "Gate-1 hunk 6",
        # Code-shape signature of the type-aware multi-arity scan that
        # surfaced as a hot-edit (see corrupted-state inventory in the
        # research doc). The variable name is deliberately specific.
        "_exactSigOk",
    ]
    for marker in forbidden_markers:
        assert marker not in source, (
            f"FORBIDDEN dispatcher hunk marker '{marker}' present in patched "
            f"libembind. Policy rule 5: no precedence inversion."
        )


def test_step_patch_embind_is_idempotent(tmp_path: Path) -> None:
    """Applying the patch twice (with pristine reset between applies) must
    produce a byte-identical libembind. This is the regression guard for the
    five-duplicate-definition state inventoried in the research doc.
    """
    target = _apply_patch(tmp_path)
    first_hash = _sha256(target)
    # Reset and re-apply — mirrors the canonical step_patch_embind contract.
    target.unlink()
    target = _apply_patch(tmp_path)
    second_hash = _sha256(target)
    assert first_hash == second_hash, (
        f"step_patch_embind is non-idempotent.\n"
        f"  first apply:  {first_hash}\n"
        f"  second apply: {second_hash}"
    )
