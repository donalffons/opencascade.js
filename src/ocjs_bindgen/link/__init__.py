"""Link layer — assembles per-class fragments into final WASM build artifacts.

Phase 1 PR 1.8 of the OCJS Bindgen Modular Refactor moved the legacy
``src/buildFromYaml.py`` here as :mod:`.yaml_build`. PR 2.6 will further
extract the ``_replace_undeclared_with_unknown`` rewriter into a
composable :mod:`.rewrite` module.
"""
