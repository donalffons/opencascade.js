"""Bindgen configuration package.

PR 2.5 — `BindgenConfig` and `get_config` migrated to
`ocjs_bindgen.filters.config`. This module re-exports them so the legacy
`from ocjs_bindgen.config import BindgenConfig` import path keeps working.
"""

from ocjs_bindgen.filters.config import BindgenConfig, get_config  # noqa: F401

__all__ = ["BindgenConfig", "get_config"]
