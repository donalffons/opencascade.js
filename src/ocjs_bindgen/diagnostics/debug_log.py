"""``Diagnostics`` — accumulator for type-resolution failures.

Phase 1 PR 1.6 of the OCJS Bindgen Modular Refactor pulled the
``_any_reasons`` class-level state off ``TypescriptBindings`` and onto
this dedicated service. The motivation is two-fold:

* ``unknown`` reason routing gains a single seam to add new reason
  categories without touching every binder.
* Removing class-level mutable state means tests can construct a fresh
  ``Diagnostics`` instance per case, which Phase 3 PR 3.2 relies on for
  hermetic unit tests against the resolver strategies.

The legacy callers in ``__main__.py`` and ``buildFromYaml.py`` consume the
report via the module-level :data:`DIAGNOSTICS` singleton — which preserves
the legacy "single shared bucket per process" behaviour bit-for-bit so
``any-type-report.json`` content stays byte-identical to the pre-refactor
artifact.
"""

from __future__ import annotations


class Diagnostics:
    """Accumulator for ``unknown``/``any`` resolution failures.

    Stores reasons in a nested ``{reason: {type_spelling: count}}`` map,
    matching the legacy ``TypescriptBindings._any_reasons`` shape exactly.
    The shape is part of the contract — both ``__main__._report_any_resolutions``
    and ``buildFromYaml`` introspect it to print operator summaries and
    write ``any-type-report.json``.
    """

    def __init__(self) -> None:
        self._any_reasons: dict[str, dict[str, int]] = {}

    def collect_any(self, reason: str, type_spelling: str) -> None:
        """Record one occurrence of ``type_spelling`` failing under ``reason``."""
        bucket = self._any_reasons.setdefault(reason, {})
        bucket[type_spelling] = bucket.get(type_spelling, 0) + 1

    @property
    def any_reasons(self) -> dict[str, dict[str, int]]:
        """Read-only view of the accumulated reasons. Same shape as the legacy attr."""
        return self._any_reasons

    def get(self, reason: str) -> dict[str, int]:
        """Return the bucket for ``reason`` (empty dict if no occurrences yet)."""
        return self._any_reasons.get(reason, {})

    def reset(self) -> None:
        """Clear all accumulated state. Used by tests; production code never resets."""
        self._any_reasons = {}


# Module-level singleton: the legacy ``TypescriptBindings._any_reasons`` was
# shared across every binder instance in a single process. Preserving that
# behaviour via a process-wide singleton keeps ``any-type-report.json``
# content identical to the pre-refactor artifact.
DIAGNOSTICS = Diagnostics()
