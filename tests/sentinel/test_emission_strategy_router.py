"""Phase 3 — Emission-strategy router sentinel (3B routing refactor).

Pins the behaviour of ``ocjs_bindgen.codegen.bindings._select_emission_strategy``
against the policy's classifier-driven routing contract:

* Classifier verdict ``primitive == 'val'`` → ``"val_default"`` strategy
  (rows 1, 2, 23, 30, 33, 34, 36, 37).
* Classifier verdict ``primitive == 'optional'`` → ``"optional_default"``
  strategy (rows 3, 4, 5, 22).
* Output-param / cstring-return / value-wrapper-return surface dominates →
  ``"legacy"`` strategy (the existing wrapper paths in
  ``processMethodOrProperty`` own the binding shape).
* No trailing defaults → ``"legacy"`` (nothing to expand).
* Every trailing default is a raw pointer → ``"legacy"`` (embind's
  ``wire.h:124`` static_assert rejects ``std::optional<T*>`` and the
  val-default helper would produce no semantic value over the plain
  pointer binding).

The Phase 2 ``numOverloads == 1`` gate is GONE — the classifier now
consults ``sibling_count`` on the descriptor; row 34 (multi-overload
trailing default) is classifier-driven, not a gate-exclusion at the
emission site.

The Phase 2 ``hasCStringArgs`` veto on val emission is GONE for row 33 —
the val-default helper composes the cstring conversion inline. The
``hasCStringArgs`` veto on the OPTIONAL path is preserved because the
optional emission cannot interleave with the cstring-input lambda
without a separate dedicated emitter (deferred to a follow-up PR).

Companion to:

* `docs/policy/ocjs-trailing-default-emission-policy.md` — policy rule 9.
* `tau:docs/research/ocjs-phase-3-val-dispatch-completion.md` — Phase 3
  implementation research doc, § 3B routing refactor.
"""

from __future__ import annotations

import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
SRC = REPO_ROOT / "src"
if str(SRC) not in sys.path:
    sys.path.insert(0, str(SRC))


# We import only the pure-function router — importing the full bindings
# module triggers the libclang/LLVM 17 toolchain check at module
# import time. Pulling just the function via an ``importlib`` shim
# keeps the sentinel toolchain-free.
def _import_router():

    src_path = REPO_ROOT / "src" / "ocjs_bindgen" / "codegen" / "bindings.py"
    # Read the file and exec only the router function — keeps the
    # sentinel hermetic. The router is a pure function with no module
    # dependencies beyond ``classification`` (a dataclass attribute
    # lookup) and is therefore trivially extractable.
    source = src_path.read_text()
    start_marker = "def _select_emission_strategy("
    end_marker = "\nclass Bindings:"
    if start_marker not in source or end_marker not in source:
        raise RuntimeError(
            "Could not locate _select_emission_strategy in bindings.py — "
            "the Phase 3 routing refactor may have been reverted or the "
            "function renamed. Update the marker constants in this "
            "sentinel to match."
        )
    sub_start = source.index(start_marker)
    sub_end = source.index(end_marker)
    snippet = source[sub_start:sub_end]
    mod_globals = {}
    exec(snippet, mod_globals)
    return mod_globals["_select_emission_strategy"]


_select_emission_strategy = _import_router()


class _Classification:
    """Lightweight stand-in for ``OverloadClassification``; the router
    reads only the ``primitive`` attribute."""

    def __init__(self, primitive):
        self.primitive = primitive


def _route(
    primitive,
    *,
    n_defaults=1,
    n_optional_wraps=None,
    has_output_params=False,
    has_cstring_args=False,
    return_is_cstring=False,
    return_requires_value_wrapper=False,
):
    if n_optional_wraps is None:
        n_optional_wraps = n_defaults
    return _select_emission_strategy(
        classification=_Classification(primitive),
        n_defaults=n_defaults,
        n_optional_wraps=n_optional_wraps,
        has_output_params=has_output_params,
        has_cstring_args=has_cstring_args,
        return_is_cstring=return_is_cstring,
        return_requires_value_wrapper=return_requires_value_wrapper,
    )


# ---------------------------------------------------------------------------
# Happy-path routing — primitive verdict drives strategy.
# ---------------------------------------------------------------------------


def test_val_primitive_routes_to_val_default():
    """The classifier's ``primitive == 'val'`` verdict routes to
    ``val_default`` emission — covers rows 1, 2, 23, 30, 33, 34, 36, 37."""
    assert _route('val') == "val_default"


def test_optional_primitive_routes_to_optional_default():
    """The classifier's ``primitive == 'optional'`` verdict routes to
    the existing ``std::optional<T>``-with-``.value_or(D)`` emission —
    covers rows 3, 4, 5, 22 (canonical optional domain) plus the row
    21 ``std::optional<T>`` return that the production code path
    handles outside this router."""
    assert _route('optional') == "optional_default"


def test_native_primitive_routes_to_legacy():
    """``primitive == 'native'`` (rows 6, 20) means there is nothing
    to wrap — the legacy ``functionBinding`` path emits ``&Cls::method``
    or ``select_overload<>``."""
    assert _route('native', n_defaults=0, n_optional_wraps=0) == "legacy"


def test_rbv_primitive_routes_to_legacy_in_router():
    """``primitive == 'rbv'`` is handled by the RBV emitter earlier in
    ``processMethodOrProperty`` — the strategy router itself returns
    ``legacy`` because the RBV path has already produced the binding
    before the router is consulted."""
    assert _route('rbv', has_output_params=True) == "legacy"


# ---------------------------------------------------------------------------
# Gate preservation — return-side concerns dominate.
# ---------------------------------------------------------------------------


def test_cstring_return_blocks_val_default():
    """Cstring return wrapper is preserved; the val-default helper does
    not yet compose with it. Falls through to legacy."""
    assert _route('val', return_is_cstring=True) == "legacy"


def test_value_wrapper_return_blocks_val_default():
    """Non-copyable value-wrapper return is preserved; the val-default
    helper does not yet compose with the value-wrapper return. Falls
    through to legacy."""
    assert _route('val', return_requires_value_wrapper=True) == "legacy"


def test_output_params_block_val_default():
    """Output params route to RBV (rows 16-19, 25) before the router
    runs; defensive fallthrough to legacy."""
    assert _route('val', has_output_params=True) == "legacy"


def test_cstring_args_block_optional_default_but_not_val_default():
    """Cstring INPUT params block the optional emission path (the
    legacy cstring-wrapper lambda owns the binding for non-trailing
    cstring inputs). They do NOT block val-default emission because
    the val-default helper composes the cstring conversion inline
    (matrix row 33 surface)."""
    assert _route('optional', has_cstring_args=True) == "legacy"
    assert _route('val', has_cstring_args=True) == "val_default"


# ---------------------------------------------------------------------------
# Phase 2 gates that are GONE (dropped in Phase 3).
# ---------------------------------------------------------------------------


def test_numoverloads_gate_is_gone_for_val_default():
    """Phase 2's ``numOverloads == 1`` gate is removed. The classifier
    consults ``sibling_count`` on the descriptor; a multi-overload
    trailing default (row 34) routes to ``val_default`` via the
    classifier's ``primitive == 'val'`` verdict — there is no
    ``numOverloads`` parameter on the strategy router at all."""
    # Synthetic — represents a multi-overload trailing default where
    # the classifier returned row 34/val. The router has no
    # ``numOverloads`` parameter, so the test is "the router signature
    # has no such parameter" via the call succeeding.
    assert _route('val') == "val_default"


# ---------------------------------------------------------------------------
# Trailing-default precondition — fall through when nothing to wrap.
# ---------------------------------------------------------------------------


def test_no_trailing_defaults_falls_through():
    """When the method has no trailing defaults, every primitive
    routes to legacy — there is no wrap to emit."""
    for primitive in ('val', 'optional', 'native'):
        assert _route(primitive, n_defaults=0, n_optional_wraps=0) == "legacy"


def test_only_raw_pointer_trailing_defaults_fall_through():
    """When every trailing default is a raw pointer, ``n_optional_wraps``
    drops to zero. Embind's ``wire.h:124`` static_assert rejects
    ``std::optional<T*>`` and the val-default helper produces no
    semantic value over the plain pointer binding."""
    assert _route('val', n_defaults=2, n_optional_wraps=0) == "legacy"
    assert _route('optional', n_defaults=2, n_optional_wraps=0) == "legacy"
