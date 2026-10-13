"""TuInfo aggregator — caches the per-TU cursor collections used by every binder.

Phase 1 PR 1.2 of the OCJS Bindgen Modular Refactor extracted this class from
the monolithic `src/TuInfo.py`. Behaviour is preserved exactly: each field is
populated by the same generator function the legacy implementation called.

The class is intentionally a thin record — every collection is computed once
at construction so the binders can iterate without re-walking the cursor tree.
The split between `parse.py` (libclang TU build), `walker.py` (cursor tree
helpers), and `cursors.py` (TU-level aggregation) follows the dependency
boundary identified in the blueprint: `cursors.py` is the only consumer of
both `parse` and `walker`, mirroring how `TuInfo` was the only consumer of
the underlying functions in legacy code.
"""

from __future__ import annotations

from .parse import parse, parse_with_deprecated_ncollection_aliases
from .walker import (
    allChildrenGenerator,
    classDict,
    enumGenerator,
    templateTypedefGenerator,
    typedefGenerator,
    underlyingDict,
    underlyingMultimap,
)


class TuInfo:
    """Aggregate of every cursor collection consumed by the binders."""

    def __init__(self, customCode: str):
        self.tu = parse(customCode)
        self.allChildren = allChildrenGenerator(self.tu)
        self.typedefs = typedefGenerator(self.tu)
        self.enums = enumGenerator(self.tu)
        self.templateTypedefs = templateTypedefGenerator(self.tu)
        self.classDict = classDict(self.tu)
        self.typedefUnderlyingDict = underlyingDict(self.typedefs, True)
        self.templateTypedefUnderlyingDict = underlyingDict(
            self.templateTypedefs, False
        )
        self.typedefUnderlyingMultimap = underlyingMultimap(self.typedefs, True)
        self.templateTypedefUnderlyingMultimap = underlyingMultimap(
            self.templateTypedefs, False
        )


class TypedefDiscoveryTuInfo:
    """Thin TU aggregate that ALSO sees Deprecated/NCollectionAliases.

    Used ONLY by :mod:`ocjs_bindgen.discover` to populate the typedef
    alias map serialised into ``ncollection-manifest.json::template_typedefs``.

    Exposes the same attributes :func:`_build_typedef_alias_map`
    consumes (``templateTypedefs``, ``classDict``) — *no* class /
    enum walkers, because the discover-only consumer never iterates
    bound classes through this TU. The main :class:`TuInfo` (which
    drives codegen) is the only TU the binders walk.

    Keeping the two TUs disjoint is what prevents
    ``class_<TColgp_Array1OfPnt>(…)`` emissions from leaking into
    compile-bindings — codegen never sees the deprecated headers.

    Constructor is process-cached via :meth:`instance` so the second
    libclang parse runs exactly once per pipeline invocation, even
    though both ``discover_ncollection_types`` and
    ``_serialise_template_typedef_aliases`` consume it.
    """

    _instance: TypedefDiscoveryTuInfo | None = None

    def __init__(self):
        self.tu = parse_with_deprecated_ncollection_aliases()
        self.typedefs = typedefGenerator(self.tu)
        self.templateTypedefs = templateTypedefGenerator(self.tu)
        self.classDict = classDict(self.tu)
        # V1 RE-SHIP — expose the underlying-multimap views the codegen
        # resolver (`codegen/bindings.py::_find_typedef_for_container`)
        # consults to map a libclang template-instantiation type back
        # to its OCCT-public alias (e.g. `NCollection_DataMap<X,Y,H>`
        # → `XCAFDoc_DataMapOfShapeFix`). Without these, the resolver
        # only sees aliases declared in the main (non-Deprecated) OCCT
        # headers, so OCCT V8's historic NCollection alias families
        # silently fall through to generic `NCollection_<mangled>`
        # spellings — which then break the YAML-scope structural lift
        # (`resolver/strategies/template.py::_record_referenced_class`)
        # because `_resolve_template_arg` no longer recognises them.
        self.typedefUnderlyingMultimap = underlyingMultimap(self.typedefs, True)
        self.templateTypedefUnderlyingMultimap = underlyingMultimap(
            self.templateTypedefs, False
        )

    @classmethod
    def instance(cls) -> TypedefDiscoveryTuInfo:
        if cls._instance is None:
            cls._instance = cls()
        return cls._instance
