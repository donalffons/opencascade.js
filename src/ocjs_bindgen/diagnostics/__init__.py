"""Diagnostics package — accumulator for type-resolution failures.

Phase 1 PR 1.6 of the OCJS Bindgen Modular Refactor extracted the
``_any_reasons`` state out of ``TypescriptBindings`` and into the
``Diagnostics`` service in :mod:`.debug_log`.
"""

from .debug_log import DIAGNOSTICS, Diagnostics  # noqa: F401
