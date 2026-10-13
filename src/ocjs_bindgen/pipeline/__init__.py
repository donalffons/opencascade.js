"""Pipeline layer — orchestrates a full bindgen pass.

Phase 1 PR 1.8 of the OCJS Bindgen Modular Refactor moved the legacy
``src/generateBindings.py`` here as :mod:`.generate`. The CLI entry in
:mod:`ocjs_bindgen.__main__` is the canonical caller.
"""
