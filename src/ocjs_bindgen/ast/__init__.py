"""AST layer — libclang TU parsing, namespace walkers, and the `TuInfo` aggregator.

Phase 1 PR 1.2 of the OCJS Bindgen Modular Refactor decomposed the legacy
single-file `src/TuInfo.py` into:

- `parse.py`   — libclang `Index.create()` + `index.parse()` (the only place
  that should construct a TU)
- `walker.py`  — namespace + cursor-tree walkers, traversal helpers, and the
  `_SKIPPED_NAMESPACES` denylist for stdlib internals
- `cursors.py` — the `TuInfo` dataclass that aggregates the per-TU collections
  (`allChildren`, `typedefs`, `enums`, `templateTypedefs`, `classDict`, …)

Public API of this package re-exports every symbol the legacy `TuInfo`
module exposed so that existing `from TuInfo import …` callers continue to
function unchanged via the `src/TuInfo.py` shim. Phase 1 PR 1.8 removes the
shim once every caller has migrated.
"""

from .cursors import TuInfo, TypedefDiscoveryTuInfo  # noqa: F401
from .parse import parse, parse_with_deprecated_ncollection_aliases  # noqa: F401
from .template_args import (  # noqa: F401
    TemplateArgMap,
    augment_template_args_with_canonical,
    get_typedefed_template_type_as_string,
    qualify_nested_type,
    replace_template_args,
    substitute_canonical_template_names,
)
from .walker import (  # noqa: F401
    _SKIP_UNDERLYING_TYPES,
    _SKIPPED_NAMESPACES,
    _collect_from_cursor,
    _is_top_level_namespace_member,
    _walk_classes,
    _walk_namespaces,
    allChildrenGenerator,
    classDict,
    enumGenerator,
    templateTypedefGenerator,
    typedefGenerator,
    underlyingDict,
    underlyingMultimap,
)

__all__ = [
    "TuInfo",
    "parse",
    "allChildrenGenerator",
    "classDict",
    "enumGenerator",
    "templateTypedefGenerator",
    "typedefGenerator",
    "underlyingDict",
    "underlyingMultimap",
]
