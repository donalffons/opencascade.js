"""Naming layer — JS-public and C++-qualified name producers.

Phase 1 PR 1.3 of the OCJS Bindgen Modular Refactor extracted the name
producers from `src/bindings.py` lines 463-546 into:

- `cpp.py` — C++-qualified name walkers (`getClassQualifiedName`,
  `getEnumQualifiedName`, `getClassTypeName`, `getClassCppName`)
- `ts.py`  — JS-public encoded names (`getClassJsPublicName`,
  `getEnumJsPublicName`)
- `encoder.py` — `NameEncoder` class, single source of truth (PR 1.4)

The free functions in `cpp.py` and `ts.py` delegate to a module-level
`NameEncoder` singleton (`encoder.ENCODER`) so that the deep nested-class
walker lands in
one place. Behaviour preserved bit-for-bit.
"""

from .cpp import (  # noqa: F401
    getClassCppName,
    getClassQualifiedName,
    getClassTypeName,
    getEnumQualifiedName,
)
from .encoder import ENCODER, NameEncoder  # noqa: F401
from .ts import (  # noqa: F401
    getClassJsPublicName,
    getEnumJsPublicName,
)
