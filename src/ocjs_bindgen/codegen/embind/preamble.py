"""Embind per-class preamble (Phase 2 PR 2.3).

Owns the per-class state buffers used by RBV value_object emission:

* :func:`reset_struct_buffers` — clears `_result_struct_defs`,
  `_result_struct_registrations`, and `_emitted_structs` between classes.
* :func:`init_state` — initial state setup for `EmbindBindings.__init__`
  (called from the constructor).

Other preamble pieces (nested enum/struct walking, base-class binding string
construction) live with :func:`ocjs_bindgen.codegen.embind.class_.process_class`
because they are tightly bound to the class header it emits.
"""

from __future__ import annotations


def init_state(b):
  """Set up the per-`EmbindBindings` state buffers used by RBV codegen."""
  b._result_struct_defs = []
  b._result_struct_registrations = []
  b._emitted_structs = {}
  b._ret_wrapper_serial = 0
  # std::optional<T> inner types collected during the current class's emit.
  # Each distinct inner spelling produces a single ``register_optional<T>()``
  # call inside the class's EMSCRIPTEN_BINDINGS block, ensuring embind has a
  # registered converter for the optional wrapper at runtime. See
  # docs/research/ocjs-optional-overload-resolution-blueprint.md.
  b._optional_inner_types = []


def reset_struct_buffers(b):
  """Clear per-class RBV result-struct buffers between class emits."""
  b._result_struct_defs = []
  b._result_struct_registrations = []
  b._emitted_structs = {}
  b._optional_inner_types = []
