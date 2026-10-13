"""Resolver package — TypeScript type resolution for the bindgen.

Phase 1 PR 1.5 of the OCJS Bindgen Modular Refactor extracted the
resolver out of ``TypescriptBindings`` so naming, canonical-key, and
composable-strategy fixes land
as single-file PRs. The orchestrator lives in :mod:`.typescript`; the
strategies live in :mod:`.strategies`. The protocol that documents the
binder surface lives in :mod:`.protocol`.

Behaviour preserved bit-for-bit — every method's body is a literal
extraction of the legacy in-place implementation.
"""

from .protocol import ResolverContext  # noqa: F401
from .typescript import TypeScriptResolver  # noqa: F401
