"""``ResolverContext`` Protocol — the surface every resolver strategy needs.

Phase 1 PR 1.5 of the OCJS Bindgen Modular Refactor extracted the
TypeScript type-resolver from the ``TypescriptBindings`` god-class into
:mod:`ocjs_bindgen.resolver`. The strategies are pure functions taking
``ctx: ResolverContext`` as their first argument so they can be unit-tested
against a mocked binder (Phase 3 PR 3.2). At runtime ``ctx`` is the live
``TypescriptBindings`` instance — Python's structural typing means the
``Protocol`` annotation is documentation rather than a runtime constraint,
so behaviour stays bit-for-bit identical to the legacy in-line code.

Cross-cutting state owned by the binder (``exports``, ``tuInfo``, the
``_known_export_names`` / ``_known_typedef_names`` / ``_namespace_scoped_interfaces``
class-level sets, ``_NUMERIC_TYPES`` / ``_STRING_TYPES`` / ``_BOOLEAN_TYPES``
constant maps, the canonical-fallback / builtin / nested-type resolvers,
and the diagnostics sink) is exposed by attribute / method access — the
Protocol enumerates the surface for future readers, but new strategies
should reach for binder state via the existing names rather than smuggling
new dependencies through.
"""

from __future__ import annotations

from typing import Any, Protocol


class ResolverContext(Protocol):
    """Read-only-by-convention surface the resolver strategies depend on.

    The implementation is :class:`bindings.TypescriptBindings`. The Protocol
    is intentionally narrow — every name listed here is also referenced by
    the legacy in-place implementation, so the move is purely physical.
    """

    exports: set
    tuInfo: Any

    # Type-classification helpers (live on `TypescriptBindings`).
    def _strip_qualifiers(self, clang_type) -> Any: ...
    def _strip_type_qualifiers_str(self, spelling: str) -> str: ...
    def convertBuiltinTypes(self, name: str) -> str: ...
    def resolveWithCanonicalFallback(
        self, spelling: str, clang_type: Any, templateDecl=None, templateArgs=None
    ) -> str: ...
    def _is_known_export_name(self, name: str) -> bool: ...
    def _collect_any(self, reason: str, type_spelling: str) -> None: ...

    # Nested / template lookups owned by the binder.
    def _resolve_nested_type(self, decl) -> str | None: ...
    def _find_typedef_for_container(self, container: str, clang_type) -> str | None: ...

    # Recursive entry — strategies dispatch back through the orchestrator.
    def resolve_type(self, clang_type, templateDecl=None, templateArgs=None) -> str: ...
