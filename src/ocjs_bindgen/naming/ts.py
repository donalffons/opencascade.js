"""JS-public name producers (Embind ``class_<>("…")`` and TS export names).

Phase 1 PR 1.4 of the OCJS Bindgen Modular Refactor turned every helper here
into a thin delegator to :class:`ocjs_bindgen.naming.encoder.NameEncoder`,
the single source of truth for naming. Behaviour preserved bit-for-bit; the
delegation pattern means the deep nested-class walker
lands in the encoder and propagates to every legacy call site without a
search-and-replace pass.
"""

from __future__ import annotations

from .encoder import ENCODER


def getClassJsPublicName(theClass, templateDecl=None) -> str:
    """JS-public class name. Delegates to :py:meth:`NameEncoder.js_public_name`."""
    return ENCODER.js_public_name(theClass, templateDecl)


def getEnumJsPublicName(theEnum) -> str:
    """JS-public enum name. Delegates to :py:meth:`NameEncoder.enum_public_name`."""
    return ENCODER.enum_public_name(theEnum)
