"""NO9 — Sub-2b regression-pin presence + inventory parity sentinel.

Phase 2 emits a per-class regression test under
``tests/regression/sub-2b/test_<ClassName>.test.ts`` for every class
flagged by the rule 2 sibling-aliasing detector. This sentinel asserts:

* every class in the generator's inventory has a corresponding
  ``.test.ts`` file on disk;
* the manifest file is present and lists every emitted pin;
* the regression-pin template anchors are present (so a future
  template edit that drops the identity assertion fails CI).

The ``.test.ts`` files themselves run inside the Vitest smoke
harness against the built WASM artefact in ``dist/``; this
sentinel runs in every CI lane and guards the file inventory.

Companion to:

* ``scripts/generate-sub2b-regression-pins.py`` (the generator)
* ``tests/sentinel/test_rule_2_sibling_aliasing.py`` (NO2 — detector
  guard)
* ``tau:docs/research/ocjs-occt-surface-audit.md`` (canonical inventory)
"""

from __future__ import annotations

import importlib.util
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
SCRIPTS = REPO_ROOT / "scripts"
REGRESSION_DIR = REPO_ROOT / "tests" / "regression" / "sub-2b"


def _load_generator():
    """Import the generator module without invoking its CLI."""
    path = SCRIPTS / "generate-sub2b-regression-pins.py"
    spec = importlib.util.spec_from_file_location("gen_sub2b", path)
    mod = importlib.util.module_from_spec(spec)
    sys.modules["gen_sub2b"] = mod
    spec.loader.exec_module(mod)
    return mod


def test_generator_inventory_within_audit_range():
    """Inventory size MUST satisfy the surface audit's class-count
    range (14-19 distinct production classes). A drift outside this
    band signals OCCT version skew vs the audit."""
    gen = _load_generator()
    n = len(gen.INVENTORY)
    assert 14 <= n <= 19, (
        f"INVENTORY drift: {n} entries; audit expects 14-19. "
        f"Re-derive via ``docs/research/ocjs-occt-surface-audit.md`` § Sub-2b Enumeration."
    )


def test_every_bindable_inventory_entry_has_a_regression_pin_on_disk():
    gen = _load_generator()
    missing = []
    for entry in gen.INVENTORY:
        if entry.class_name in gen._BINDGEN_EXCLUDED_CLASSES:
            continue
        path = REGRESSION_DIR / f"test_{entry.class_name}.test.ts"
        if not path.exists():
            missing.append(path.name)
    assert not missing, (
        f"missing regression pin(s) for {len(missing)} flagged class(es): {missing}. "
        f"Run ``python scripts/generate-sub2b-regression-pins.py`` to regenerate."
    )


def test_manifest_is_present_and_lists_every_pin():
    manifest = REGRESSION_DIR / "MANIFEST.txt"
    assert manifest.exists(), (
        f"MANIFEST.txt missing under {REGRESSION_DIR}; run the generator."
    )
    listed = {line.strip() for line in manifest.read_text().splitlines() if line.strip() and not line.startswith("#")}
    on_disk = {p.name for p in REGRESSION_DIR.glob("test_*.test.ts")}
    assert listed == on_disk, (
        f"MANIFEST.txt out of sync with on-disk pins.\n"
        f"  listed only: {listed - on_disk}\n"
        f"  on-disk only: {on_disk - listed}\n"
        f"  Run ``python scripts/generate-sub2b-regression-pins.py`` to regenerate."
    )


def test_each_pin_contains_identity_assertion():
    """The ``expect(smaller).not.toBe(larger)`` assertion verifies
    that the two call shapes return separate objects. The diagnostic label
    ``Sub-2b regression pin:`` must also appear in the describe block
    so failures are immediately attributable to this guard."""
    gen = _load_generator()
    bad = []
    for entry in gen.INVENTORY:
        if entry.class_name in gen._BINDGEN_EXCLUDED_CLASSES:
            continue
        path = REGRESSION_DIR / f"test_{entry.class_name}.test.ts"
        if not path.exists():
            continue
        src = path.read_text()
        if "expect(smaller).not.toBe(larger)" not in src:
            bad.append(entry.class_name)
        if "Sub-2b regression pin:" not in src:
            bad.append(f"{entry.class_name}:missing-diagnostic")
    assert not bad, (
        f"pin template regressed for: {bad}. The "
        f"``expect(smaller).not.toBe(larger)`` identity assertion "
        f"is the load-bearing check; do NOT remove."
    )
