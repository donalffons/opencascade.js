"""Codegen layer — Embind C++ and TypeScript ``.d.ts`` emitters.

Phase 1 PR 1.8 of the OCJS Bindgen Modular Refactor moved the legacy
``src/bindings.py`` (5 200+ LOC god-file) into this package. Phase 2
PRs 2.3 / 2.4 will further decompose ``EmbindBindings`` /
``TypescriptBindings`` into per-concern submodules under
``codegen/embind/`` and ``codegen/typescript/``. Until then ``bindings``
remains the single coordinator module.

``wasm_common`` holds the small set of helpers (``SkipException``,
``isAbstractClass``, ``isTransientDerived``, ``getMethodOverloadPostfix``,
``ignoreDuplicateTypedef``) that lived under the old
``src/wasmGenerator/`` package.
"""
