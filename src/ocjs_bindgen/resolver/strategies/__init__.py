"""Resolver strategy modules — each file owns one resolution concern.

Phase 1 PR 1.5 of the OCJS Bindgen Modular Refactor extracted these from
``TypescriptBindings`` so naming, canonical-key, and composable-strategy
fixes land in single-file
PRs. The strategies are pure functions taking the binder as ``self`` so
behaviour stays byte-identical to the legacy in-place implementation.
"""

from .fallback import resolve_canonical_fallback  # noqa: F401
from .function_proto import resolve_function_proto  # noqa: F401
from .handle import resolve_handle_recursive, resolve_handle_type  # noqa: F401
from .handle_substituted import resolve_handle_substituted_typedef  # noqa: F401
from .member_typedef import resolve_member_typedef_substitution  # noqa: F401
from .nested import resolve_qualified_member_type  # noqa: F401
from .stl import is_std_decl, resolve_stl_type  # noqa: F401
from .template import resolve_template_arg, resolve_template_type  # noqa: F401
