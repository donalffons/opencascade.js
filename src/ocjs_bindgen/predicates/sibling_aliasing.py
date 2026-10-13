"""Sibling-aliasing detector (matrix row 8 / sub-2b).

Implements rule 2 of ``docs/policy/ocjs-trailing-default-emission-policy.md``:
before bindgen emits a ``std::optional<T>`` trailing-default wrapper for
constructor ``A`` of arity ``N``, scan every sibling constructor in the
same class. If any sibling ``B`` of arity ``N+1`` has parameter types
``B.params[1:] == A.params`` AND ``A``'s last parameter has a trailing
default (the slot that would be wrapped in ``std::optional<T>``), then
emitting both bindings will produce libembind dispatch shadowing because
the optional-wildcard short-circuit in ``$getSignature`` claims the
arity-``N`` slot for ``A`` even when the JS caller's argument is the
distinguishing ``B.params[0]`` type. Resolution: emit a single
``emscripten::val``-discriminated constructor at the larger arity that
internally dispatches between ``A`` and ``B`` by inspecting ``arg0``.

The detector is intentionally pure: it operates on lightweight tuples
``(type_name_normalized: str, has_default: bool)``. The caller is
responsible for extracting those tuples from clang cursors via
``extract_ctor_signatures``. This keeps the algorithm testable without
a libclang fixture and lets the same code drive synthetic regression
tests, production scan, and the build-time emission path.

Scope is intentionally bounded to a single class:

* ``repos/opencascade.js/docs/policy/ocjs-trailing-default-emission-policy.md``
  rule 2 records the policy-level scope restriction.
* ``tau:docs/research/ocjs-occt-surface-audit.md`` § "Inheritance +
  Template-Collapsed Surface Findings" confirms zero production
  sub-2b instances span inheritance, template-collapsed
  instantiations, or ADL/free-function namespaces. The detector
  MUST NOT walk base classes or sibling template instantiations
  without a new surface-audit checkpoint confirming the expansion
  is empirically required.

The k=0 degenerate edge case is supported: when ``A`` is the zero-arity
constructor and ``B`` is the arity-1 trailing-default-only constructor,
the optional-wildcard short-circuit in ``$getSignature`` similarly
claims arity 0 for ``B`` and shadows ``A``. The detector flags this as
the same sub-2b shape (the "last param has default" precondition
collapses to "B's only param has default", which the algorithm reads
off ``B``'s signature directly).
"""

from __future__ import annotations

from collections.abc import Callable, Sequence
from dataclasses import dataclass

# Public matrix-row label so emit-time diagnostics surface a single
# canonical citation string across the bindgen.
MATRIX_ROW = "row 8"
MATRIX_ROW_TITLE = "Degenerate sibling constructors (sub-2b)"


@dataclass(frozen=True)
class ParamSig:
    """Lightweight constructor-parameter descriptor used by the detector.

    Attributes:
      type_name: Normalised C++ type spelling (see ``normalise_type``).
      has_default: True iff this parameter has a trailing default expression
        in the C++ declaration (i.e. the bindgen would emit
        ``std::optional<T>`` for this slot under the existing
        ``use_optional_emit`` gate).
    """

    type_name: str
    has_default: bool


@dataclass(frozen=True)
class ConflictReport:
    """Structured diagnostic for one sub-2b pair.

    The pair is named by index into the caller-supplied constructor list,
    so the caller can splice both ctors out of the regular emission path
    and route them to ``emit_sibling_aliased_constructor`` instead. The
    signatures are carried as ``ParamSig`` tuples so the diagnostic
    message can be reconstructed without re-reading the AST.
    """

    smaller_index: int
    larger_index: int
    smaller_sig: tuple[ParamSig, ...]
    larger_sig: tuple[ParamSig, ...]

    def diagnostic(self, class_name: str) -> str:
        """Render a build-log line citing matrix row 8 + the conflict pair."""
        smaller_str = "(" + ", ".join(p.type_name for p in self.smaller_sig) + ")"
        larger_str = "(" + ", ".join(p.type_name for p in self.larger_sig) + ")"
        return (
            f"[rule 2 / matrix {MATRIX_ROW}] {class_name}: "
            f"sub-2b sibling-aliasing detected — "
            f"smaller ctor {smaller_str} would shadow larger ctor {larger_str} "
            f"via libembind optional-wildcard short-circuit; "
            f"routing to val-discrimination at the larger arity."
        )


def normalise_type(spelling: str) -> str:
    """Canonicalise a C++ type spelling for sub-2b prefix matching.

    Two normalisation hops:

    * ``opencascade::handle`` → ``occ::handle``. Production bindings use
      the ``occ::`` alias consistently inside ``std::optional<...>``
      wrappers; the OCCT public headers sometimes write
      ``opencascade::handle`` directly. The typedef-cache regression
      recorded in ``learned-runtime.mdc`` ("typedef-cache regression
      where ``getTypedefedTemplateTypeAsString`` collapsed
      ``occ::handle<NCollection_BaseAllocator>`` to ``int``") is fixed
      one layer down; this normalisation is a belt-and-braces against
      a remaining surface where the two spellings still leak.
    * Whitespace collapse around ``&`` and ``*`` qualifiers. ``const T &``
      and ``const T&`` denote the same type but produce different string
      equality in clang AST output depending on which version emitted
      the spelling.
    """
    s = spelling.replace("opencascade::handle", "occ::handle")
    s = " ".join(s.split())
    s = s.replace(" &", "&").replace(" *", "*").replace("& ", "&").replace("* ", "*")
    return s.strip()


def extract_ctor_signatures(
    ctors: Sequence,
    get_arg_type_str: Callable,
    count_trailing_defaults: Callable,
) -> list[tuple[ParamSig, ...]]:
    """Lift a list of clang ctor cursors into ``ParamSig`` tuples.

    Args:
      ctors: Iterable of clang ``CursorKind.CONSTRUCTOR`` cursors (or
        any object exposing ``.get_arguments()``).
      get_arg_type_str: Callable applied to each argument cursor that
        returns its C++ type spelling. Pass the bindgen's
        ``getOriginalArgumentType`` partial-applied with the relevant
        ``templateDecl`` and ``templateArgs`` so the type spellings
        match what the eventual emission would write.
      count_trailing_defaults: Callable that returns the trailing-default
        count for a ctor cursor. Pass the bindgen's
        ``_countTrailingDefaults``.
    """
    sigs: list[tuple[ParamSig, ...]] = []
    for ctor in ctors:
        args = list(ctor.get_arguments())
        n_args = len(args)
        n_def = count_trailing_defaults(ctor)
        default_start = n_args - n_def
        params = tuple(
            ParamSig(
                type_name=normalise_type(get_arg_type_str(arg)),
                has_default=(i >= default_start),
            )
            for i, arg in enumerate(args)
        )
        sigs.append(params)
    return sigs


def detect_sub2b_pairs(
    signatures: Sequence[tuple[ParamSig, ...]],
) -> list[ConflictReport]:
    """Return every sub-2b conflict pair detectable in ``signatures``.

    Algorithm (matches ``tau:docs/research/ocjs-occt-surface-audit.md``
    § "Sub-2b Detection Algorithm (Validated)"):

    .. code-block:: text

      For each pair (A, B) where len(B) == len(A) + 1:
        if B[1:].types == A.types  AND  (A is empty OR A[-1].has_default):
          flag (A, B) as sub-2b.

    The "A is empty" branch is the degenerate k=0 case (zero-arity ctor
    + arity-1 all-trailing-default ctor) that the audit catalogues under
    sub-2b proper. When ``A`` is empty there is no trailing-default
    precondition to check; the wildcard in ``B``'s sole slot is the
    shadow vector.

    Returns:
      A list of :class:`ConflictReport`. Empty list means no sub-2b
      conflicts; the caller should proceed to the regular optional /
      arity-fan-out emission path.
    """
    reports: list[ConflictReport] = []
    for i, a_sig in enumerate(signatures):
        n_a = len(a_sig)
        # Precondition: A's last slot has a trailing default (so the
        # bindgen would emit std::optional<T> at that slot and the
        # libembind wildcard would short-circuit). The empty case is
        # handled as a degenerate sub-2b — B's sole slot's wildcard
        # claims arity 0.
        if n_a > 0 and not a_sig[-1].has_default:
            continue
        a_types = tuple(p.type_name for p in a_sig)
        for j, b_sig in enumerate(signatures):
            if i == j:
                continue
            if len(b_sig) != n_a + 1:
                continue
            b_suffix_types = tuple(p.type_name for p in b_sig[1:])
            if b_suffix_types != a_types:
                continue
            reports.append(
                ConflictReport(
                    smaller_index=i,
                    larger_index=j,
                    smaller_sig=a_sig,
                    larger_sig=b_sig,
                )
            )
    return reports
