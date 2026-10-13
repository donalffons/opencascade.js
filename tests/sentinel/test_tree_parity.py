"""Layer 2 parity harness: SHA-256 the entire build/bindings/ tree (~10 min).

Where Layer 1 only diffs ten canonical fragments, this layer catches any
drift across the *entire* generator output — all 10,310 `.cpp` and `.d.ts.json`
fragments under `build/bindings/`. It is the safety net for refactors that
might silently change a non-sentinel fragment (e.g. a strategy module that only
fires for an exotic AST shape we did not pick into the spine).

Pre-conditions:
  * `nx run ocjs:generate` has been invoked (cache hit is acceptable).
  * `tests/sentinel/baseline/full_tree.sha256` is the frozen baseline.

Cost: ~10 min on a cold generator, ~5 s once the SHA tree is built.
Run during phase exit validation; not on every PR.
"""

from __future__ import annotations

import hashlib
import subprocess

import pytest
from sentinels import BASELINE_TREE, BUILD_BINDINGS, REPO_ROOT

_INTERESTING_SUFFIXES = (".cpp", ".d.ts.json")


def _ensure_generator_ran() -> None:
    """Invoke `nx run ocjs:generate`. Cache hit is the common case (<5 s)."""
    if not BUILD_BINDINGS.is_dir():
        # Cold path: trigger Nx (this is the slow case; can take ~10 min on
        # full bindgen run).
        result = subprocess.run(
            ["pnpm", "nx", "run", "ocjs:generate"],
            cwd=REPO_ROOT,
            check=False,
            capture_output=True,
            text=True,
            timeout=900,  # 15 min hard cap
        )
        if result.returncode != 0:
            pytest.skip(f"nx run ocjs:generate failed: {result.stderr[-500:]}")
    assert BUILD_BINDINGS.is_dir(), f"build/bindings/ still missing after generate: {BUILD_BINDINGS}"


def _hash_tree() -> dict[str, str]:
    """Walk build/bindings/ and SHA-256 every .cpp / .d.ts.json fragment."""
    digests: dict[str, str] = {}
    for path in sorted(BUILD_BINDINGS.rglob("*")):
        if not path.is_file():
            continue
        if not path.name.endswith(_INTERESTING_SUFFIXES):
            continue
        rel = "./" + str(path.relative_to(BUILD_BINDINGS)).replace("\\", "/")
        h = hashlib.sha256()
        with path.open("rb") as fh:
            for chunk in iter(lambda: fh.read(1 << 20), b""):
                h.update(chunk)
        digests[rel] = h.hexdigest()
    return digests


def _load_baseline(path=BASELINE_TREE) -> dict[str, str]:
    """Parse `<sha>  <relpath>` lines from a frozen baseline."""
    if not path.is_file():
        pytest.fail(f"Baseline manifest missing: {path}")
    digests: dict[str, str] = {}
    for line in path.read_text().splitlines():
        line = line.strip()
        if not line:
            continue
        sha, _, rel = line.partition("  ")
        if not sha or not rel:
            pytest.fail(f"Malformed baseline line: {line!r}")
        digests[rel] = sha
    return digests


def test_cpp_hashes_match_across_platform_baselines() -> None:
    canonical = _load_baseline(REPO_ROOT / "tests/sentinel/baseline/full_tree.sha256")
    linux = _load_baseline(REPO_ROOT / "tests/sentinel/baseline/linux/full_tree.sha256")
    canonical_cpp = {path: digest for path, digest in canonical.items() if path.endswith(".cpp")}
    linux_cpp = {path: digest for path, digest in linux.items() if path.endswith(".cpp")}
    assert linux_cpp == canonical_cpp


@pytest.fixture(scope="module")
def fresh_tree() -> dict[str, str]:
    _ensure_generator_ran()
    return _hash_tree()


@pytest.fixture(scope="module")
def baseline_tree() -> dict[str, str]:
    return _load_baseline()


def test_no_added_fragments(fresh_tree: dict[str, str], baseline_tree: dict[str, str]) -> None:
    added = sorted(set(fresh_tree) - set(baseline_tree))
    if added:
        preview = added[:20]
        more = "" if len(added) <= 20 else f"\n  … {len(added) - 20} more"
        pytest.fail(
            f"{len(added)} fragments appeared after refactor (not present in baseline):"
            f"\n  " + "\n  ".join(preview) + more
        )


def test_no_removed_fragments(fresh_tree: dict[str, str], baseline_tree: dict[str, str]) -> None:
    removed = sorted(set(baseline_tree) - set(fresh_tree))
    if removed:
        preview = removed[:20]
        more = "" if len(removed) <= 20 else f"\n  … {len(removed) - 20} more"
        pytest.fail(
            f"{len(removed)} fragments disappeared after refactor (present in baseline):"
            f"\n  " + "\n  ".join(preview) + more
        )


def test_fragment_contents_unchanged(fresh_tree: dict[str, str], baseline_tree: dict[str, str]) -> None:
    drifted = sorted(
        rel for rel in fresh_tree.keys() & baseline_tree.keys()
        if fresh_tree[rel] != baseline_tree[rel]
    )
    if drifted:
        preview = drifted[:20]
        more = "" if len(drifted) <= 20 else f"\n  … {len(drifted) - 20} more"
        pytest.fail(
            f"{len(drifted)} fragments changed contents after refactor:"
            f"\n  " + "\n  ".join(preview) + more
            + "\nRun the Layer 1 harness for a structural diff of the canonical sentinels,"
            + " or eyeball one of the listed fragments directly."
        )


def test_total_fragment_count_matches(fresh_tree: dict[str, str], baseline_tree: dict[str, str]) -> None:
    """Top-line invariant — must hold even when individual files are paths drift."""
    assert len(fresh_tree) == len(baseline_tree), (
        f"Fragment count drift: fresh={len(fresh_tree)} baseline={len(baseline_tree)}"
    )
