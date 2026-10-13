"""Embind codegen package (Phase 2 PR 2.3).

Decomposes the legacy `EmbindBindings` god-class into per-concern modules:

* :mod:`ocjs_bindgen.codegen.embind.preamble` — per-class state buffers and
  result-struct emission helpers
* :mod:`ocjs_bindgen.codegen.embind.constructor` — constructor codegen
* :mod:`ocjs_bindgen.codegen.embind.method` — method/property codegen
* :mod:`ocjs_bindgen.codegen.embind.enum` — enum codegen (top-level + nested)
* :mod:`ocjs_bindgen.codegen.embind.class_` — class header/body orchestration

All functions take the calling `EmbindBindings` instance as ``b`` so the
implementation can call back into binder utilities. Methods on the binder
remain as thin delegators to keep the public surface unchanged.
"""
