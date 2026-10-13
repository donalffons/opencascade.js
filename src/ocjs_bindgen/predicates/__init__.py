"""Predicate layer — pure functions that classify cursors / types / arguments.

Phase 1 PR 1.3 of the OCJS Bindgen Modular Refactor extracted the module-level
predicates from `src/bindings.py` lines 44-461 into:

- `types.py`   — built-in type whitelists and primitive type predicates
  (`isCString`, `isRawPointerParam`)
- `classes.py` — class-shape predicates (`shouldProcessClass`,
  `_isDefaultConstructibleClass`, `_isCopyConstructibleClass`,
  `_findClassTemplateByName`, copy-ctor cache)
- `args.py`    — argument-shape predicates for output-param dispatch
  (`isOutputParam`, `isClassOutputParam`, `isHandleOutputParam`,
  `isPrimitiveOutputParam`, `_isHandleType`, `shouldStripParam`)

Behaviour is preserved bit-for-bit. The legacy `bindings.py` re-exports every
symbol below from this package so existing call sites continue to work
without code change. Phase 2 PR 2.3 / PR 2.4 lifts the binders themselves
into `codegen/`, at which point bindings.py disappears entirely.
"""

from .args import (  # noqa: F401
    _isHandleType,
    isClassOutputParam,
    isHandleOutputParam,
    isOutputParam,
    isPrimitiveOutputParam,
    shouldStripParam,
)
from .classes import (  # noqa: F401
    _CLASS_TEMPLATE_INDEX,
    _COPY_CTOR_CACHE,
    _ctor_is_copy,
    _findClassTemplateByName,
    _isCopyConstructibleClass,
    _isDefaultConstructibleClass,
    shouldProcessClass,
)
from .optional_emission_guards import (  # noqa: F401
    assert_no_multi_all_optional_same_arity,
    assert_no_nonconst_ref_in_optional,
    assert_no_val_vs_optional_same_arity,
)
from .types import (  # noqa: F401
    builtInTypes,
    cStringTypes,
    isCString,
    isRawPointerParam,
    unbindablePointerTypes,
)
