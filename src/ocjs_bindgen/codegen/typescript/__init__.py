"""TypeScript declaration codegen for OCCT/custom-code bindings.

PR 2.4 — TypescriptBindings decomposition.

Submodules:
  - jsdoc/       : JSDoc text production (loader, renderer, wrapping, links, params)
  - inheritance  : Bound-ancestor walk + JS public name resolution
  - enum         : `processEnum` — enum interface emission
  - constructor  : `_emitTsConstructor`, `processSimpleConstructor`,
                   `processOverloadedConstructors`
  - method       : `processMethodOrProperty`, `processMethodGroup`, and the
                   envelope/RBV TypeScript helpers
  - class_       : `processClass`, `processFinalizeClass`

Each module is a free-function module that takes the `TypescriptBindings`
instance (`tsb`) as the first argument so it can read the binder's resolver,
diagnostics, exports, and ancestor chains without being tightly bound to
the class hierarchy.
"""
