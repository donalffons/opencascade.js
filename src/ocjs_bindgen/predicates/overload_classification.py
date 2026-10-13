"""Per-overload classification against the trailing-default emission matrix.

Implements rule 4 (absence-semantics tagging) and the Classification
Algorithm from ``docs/policy/ocjs-trailing-default-emission-policy.md``.
Each defaulted parameter position is tagged with an :class:`AbsenceTag`
describing the JS-surface meaning of omission, and the overload group as
a whole is mapped to a single :class:`OverloadClassification` whose
``primitive`` field tells the emitter which mechanical translation to
use (``optional`` / ``val`` / ``native`` / ``rbv`` / ``dedup`` /
``suffix`` / ``filter``).

The classifier is intentionally pure: it operates on lightweight
descriptor dataclasses so the same code drives synthetic tests, the
production scan, and the emit-time decision in
``ocjs_bindgen.codegen.bindings`` /
``ocjs_bindgen.codegen.embind.constructor`` /
``ocjs_bindgen.codegen.embind.method``. The bindgen call sites populate
the descriptors from clang cursors via thin adapters that read the
existing helpers (``b._countTrailingDefaults``,
``b.getOriginalArgumentType``, the rule 2 sibling-aliasing detector,
the rule 3 JS-effective arity-collision check).

The matrix-row → primitive table is the single source of truth:

* ``{3, 4, 5, 21, 22}``                — canonical ``std::optional<T>``
* ``{24, 36}`` conditional             — ``std::optional<T>`` iff rule 2 OK
* ``{1, 2, 7, 8, 9, 10, 12, 14, 23, 30, 33, 34, 37, 38}`` — ``emscripten::val``
* ``{6, 20}``                          — native embind overloads
* ``{16, 17, 18, 19, 25, 27}``         — RBV envelopes
* ``{11}``                             — JS-effective dedup
* ``{13}``                             — explicit ``_char`` suffix
* ``{15, 32}``                         — filter at source
* ``{26}``                             — mixed-return val dispatch
* ``{35}``                             — bindgen emit-time rejection

Rows 23, 35, 37 are speculative — no production instances per
``tau:docs/research/ocjs-occt-surface-audit.md`` — but retained as
defensive shapes.
"""

from __future__ import annotations

from dataclasses import dataclass
from enum import StrEnum

# Matrix rows whose primitive is ``std::optional<T>`` unconditionally.
#
# Phase 4 narrowed this set from ``{3, 4, 5, 21, 22}`` to
# ``{3, 5, 21, 22}``: row 4 (const-ref to anonymous temporary,
# e.g. ``const T& foo = T()``) was reclassified into the val-default
# lane so it respects policy rule 5 (strict-by-default null/undefined).
# Embind's native ``std::optional<T>`` error message ("Expected null
# or instance of T") does NOT satisfy the rule-5 contract pinned by
# ``smoke-rule-5-strict-null-rejection.test.ts``. See
# ``codegen/bindings.py::_is_canonical_optional_default`` for the
# bindgen-side implementation.
CANONICAL_OPTIONAL_ROWS = frozenset({3, 5, 21, 22})

# Matrix rows whose primitive is ``std::optional<T>`` only when rule 2's
# sibling-aliasing detector confirms no shadowing risk. Both rows route
# to ``emscripten::val`` discrimination when the detector flags.
CONDITIONAL_OPTIONAL_ROWS = frozenset({24, 36})

# Matrix rows owned by ``emscripten::val`` discrimination.
VAL_ROWS = frozenset({1, 2, 7, 8, 9, 10, 12, 14, 23, 30, 33, 34, 37, 38})

# Matrix rows owned by native embind overload dispatch (no lambda).
NATIVE_ROWS = frozenset({6, 20})

# RBV envelope-owned rows (delegated to ``rbv.py``).
RBV_ROWS = frozenset({16, 17, 18, 19, 25, 27})


class AbsenceTag(StrEnum):
    """Per-defaulted-parameter JS-surface absence semantics (rule 4).

    The tag is the bindgen's explicit statement of what an omitted JS
    argument means at this slot. The emitter dispatches on the tag to
    pick the right unwrap pattern; conflating these tags is the
    NULL-COERCION failure mode catalogued in matrix rows 1, 2, 23.
    """

    # ``T x = D`` — trailing default with a concrete C++ default
    # expression. Omission = "use the C++ declared default".
    DEFAULT_ON_ABSENCE = "default-on-absence"
    # ``std::optional<T>`` — source-level optional. Omission =
    # "explicitly no value".
    MAYBE_T = "maybe-T"
    # ``T&`` non-const reference, output param. Omission is INVALID.
    OUTPUT = "output"
    # Same-arity overload set, JS-distinguishable types. Omission is
    # INVALID (caller must pick a type variant).
    POLYMORPHIC = "polymorphic"


@dataclass(frozen=True)
class ParameterDescriptor:
    """Lightweight per-parameter view used by the classifier.

    Populate from a clang argument cursor via a thin adapter that
    consults ``b.getOriginalArgumentType`` for ``type_name``,
    ``isOutputParam`` / ``isCString`` / ``isRawPointerParam`` for the
    flags, and ``b._countTrailingDefaults`` for the default detection.
    """

    type_name: str
    is_trailing_default: bool = False
    is_genuine_optional: bool = False
    is_output_param: bool = False
    is_cstring: bool = False
    is_raw_pointer: bool = False
    # Whether the C++ source documents this slot as accepting ``null``
    # as a meaningful value (matrix row 30 — handle-optional reporters).
    # Defaults to False — the strict-by-default null/undefined policy
    # (rule 5) rejects null otherwise.
    accepts_meaningful_null: bool = False
    # Whether this trailing-default slot belongs to the canonical
    # ``std::optional<T>`` matrix domain — matrix rows {3, 4, 5}. Set
    # by the bindgen call site when the parameter is a Handle<T> with
    # a ``Handle()`` (null) default (row 3), a ``const T&`` with a
    # default-constructed temporary (row 4), or a scoped-constant
    # default expression (row 5). Defaults to False so single-overload
    # scalar / value-class / ``T{}`` trailing defaults (rows 1, 2, 36)
    # route to ``emscripten::val`` per policy rule 9.
    is_canonical_optional_default: bool = False


@dataclass(frozen=True)
class OverloadDescriptor:
    """Per-overload view consumed by :func:`classify_overload_group`."""

    parameters: tuple[ParameterDescriptor, ...] = ()
    is_constructor: bool = False
    is_static: bool = False
    # Number of OTHER same-name overloads in the group (i.e.
    # ``len(group) - 1`` for the overload that owns this descriptor).
    sibling_count: int = 0


@dataclass(frozen=True)
class GroupClassificationInputs:
    """Aggregate inputs the classifier needs to walk the decision tree."""

    overloads: tuple[OverloadDescriptor, ...]
    # Verdict from ``ocjs_bindgen.predicates.sibling_aliasing.detect_sub2b_pairs``.
    has_sibling_aliasing: bool = False
    # Verdict from ``ocjs_bindgen.codegen.rbv.js_effective_arity_collisions``.
    has_js_effective_arity_collision: bool = False
    # Verdict from existing same-arity JS-distinguishable type detection;
    # mirrors the polymorphic-types check at the matrix-row-9/12/14 fork.
    has_same_arity_distinguishable_types: bool = False
    # Verdict from the rule-2 collision pair where the JS types are NOT
    # distinguishable (matrix row 11 / row 35 — dedup or skip).
    has_js_indistinguishable_overloads: bool = False
    # Whether the group has same-name static + instance overloads at
    # equal JS-effective arity (matrix row 10).
    has_mixed_static_instance: bool = False
    # Mixed void/non-void return types (matrix row 26).
    has_mixed_returns: bool = False
    # Any overload has output params (RBV — matrix rows 16-19, 25).
    has_output_params: bool = False
    # Any overload has a raw-pointer or SFINAE/deleted slot (filter rows 15/32).
    has_unbindable_param: bool = False


@dataclass(frozen=True)
class OverloadClassification:
    """Decision the emitter consults for one overload group.

    Attributes:
      matrix_row: Row number from
        ``docs/policy/ocjs-trailing-default-emission-policy.md`` —
        every emitter branch MUST cite this row (policy rule 1).
      primitive: Mechanical translation primitive — drives which
        helper in ``embind/constructor.py`` / ``embind/method.py`` /
        ``dispatch.py`` / ``rbv.py`` emits the binding.
      per_position_tags: Tuple of (overload_index, position_index,
        :class:`AbsenceTag`) triples — one entry per defaulted slot
        across the group, recording rule 4's explicit absence
        semantics.
      rationale: Human-readable single-line build-log diagnostic.
    """

    matrix_row: int
    primitive: str
    per_position_tags: tuple[tuple[int, int, AbsenceTag], ...] = ()
    rationale: str = ""

    def diagnostic(self, group_label: str) -> str:
        """Render a structured ``[matrix row N / primitive] …`` build-log line."""
        return (
            f"[matrix row {self.matrix_row} / {self.primitive}] "
            f"{group_label}: {self.rationale}"
        )


# ---------------------------------------------------------------------------
# Per-position absence-semantics tagger (rule 4)
# ---------------------------------------------------------------------------


def _tag_position(param: ParameterDescriptor) -> AbsenceTag | None:
    """Return the :class:`AbsenceTag` for one parameter, or ``None`` when
    the slot has no absence semantics (no default, no genuine optional,
    no output marker)."""
    if param.is_output_param:
        return AbsenceTag.OUTPUT
    if param.is_genuine_optional:
        return AbsenceTag.MAYBE_T
    if param.is_trailing_default:
        return AbsenceTag.DEFAULT_ON_ABSENCE
    return None


def tag_overload_absence_semantics(
    overloads: tuple[OverloadDescriptor, ...],
) -> tuple[tuple[int, int, AbsenceTag], ...]:
    """Walk every parameter position in every overload and tag absence semantics.

    Returns a tuple of ``(overload_index, position_index, tag)`` triples
    for every position whose tag is non-None. Polymorphic positions
    (same-arity distinguishable types) are NOT tagged here — they are
    tagged inside the classifier when the group lands on a
    polymorphic-row branch, because polymorphism is a group-level
    property rather than a per-position one.
    """
    out = []
    for oi, ov in enumerate(overloads):
        for pi, param in enumerate(ov.parameters):
            tag = _tag_position(param)
            if tag is not None:
                out.append((oi, pi, tag))
    return tuple(out)


# ---------------------------------------------------------------------------
# Classification Algorithm — walks the decision tree from the policy doc.
# ---------------------------------------------------------------------------


def _has_genuine_optional(overloads: tuple[OverloadDescriptor, ...]) -> bool:
    return any(p.is_genuine_optional for ov in overloads for p in ov.parameters)


def _has_trailing_defaults(overloads: tuple[OverloadDescriptor, ...]) -> bool:
    return any(p.is_trailing_default for ov in overloads for p in ov.parameters)


def _all_cstring_trailing_default(overloads: tuple[OverloadDescriptor, ...]) -> bool:
    """True iff EVERY trailing-default slot is a C-string. Drives row 33."""
    found_trailing = False
    for ov in overloads:
        for p in ov.parameters:
            if p.is_trailing_default:
                found_trailing = True
                if not p.is_cstring:
                    return False
    return found_trailing


def classify_overload_group(
    inputs: GroupClassificationInputs,
) -> OverloadClassification:
    """Walk the policy's Classification Algorithm and return the verdict.

    The decision tree from the policy doc:

    .. code-block:: text

       1. JS-effective arity collisions check (rule 3 pre-check).
       2. If JS-indistinguishable same-effective-signature → dedup (row 11)
          or skip (row 35).
       3. If >1 overload at same JS-effective arity with distinguishable
          JS types → val-discrimination (rows 9, 12, 14).
       4. If trailing defaults present:
          a. tag each defaulted position per rule 4.
          b. run sibling-aliasing detector (rule 2). If aliasing → val
             at the larger arity (row 8).
          c. else classify per matrix rows 1-5 / 23-24 / 33-34 / 36-37.
       5. If output params present → RBV (rows 16-19, 25).
       6. If raw pointer or SFINAE/deleted → filter (rows 15, 32).
       7. Otherwise: native embind overload (row 6).
    """
    overloads = inputs.overloads
    tags = tag_overload_absence_semantics(overloads)

    # Step 6 / filter rows 15 / 32 — short-circuit; the caller should
    # have filtered already, but the classifier is the authoritative
    # tagger so we return the verdict for parity.
    if inputs.has_unbindable_param:
        return OverloadClassification(
            matrix_row=15,
            primitive='filter',
            per_position_tags=tags,
            rationale='unbindable param (raw pointer or SFINAE/deleted)',
        )

    # Step 5 / RBV. We choose row 16 as the canonical RBV label; the
    # downstream RBV emitter at ``rbv.py`` further specialises into
    # rows 17-19, 25, 27 based on envelope shape.
    if inputs.has_output_params:
        return OverloadClassification(
            matrix_row=16,
            primitive='rbv',
            per_position_tags=tags,
            rationale='output params present — routed to RBV envelope (rows 16-19, 25)',
        )

    # Step 2 — JS-indistinguishable: dedup (row 11) or skip (row 35).
    if inputs.has_js_indistinguishable_overloads:
        # Heuristic: if every same-arity sibling has every slot defaulted,
        # the shape is row 35 (T1 emit-time rejection); otherwise the
        # dedup machinery (row 11) handles it. The bindgen call site
        # owns the precise determination; the classifier defaults to
        # dedup as the less destructive verdict.
        all_optional = all(
            all(p.is_trailing_default for p in ov.parameters)
            for ov in overloads
            if len(ov.parameters) > 0
        )
        if all_optional and len(overloads) >= 2:
            return OverloadClassification(
                matrix_row=35,
                primitive='dedup',
                per_position_tags=tags,
                rationale='all-optional same-arity sibling group — bindgen emit-time rejection (T1 guard)',
            )
        return OverloadClassification(
            matrix_row=11,
            primitive='dedup',
            per_position_tags=tags,
            rationale='JS-indistinguishable overloads — dedup to canonical sibling',
        )

    # Step 3 — same-arity distinguishable types (rows 9, 12, 14).
    if inputs.has_same_arity_distinguishable_types:
        # The bindgen call site picks the precise sub-row from the JS
        # type pattern (instanceof vs Number.isInteger vs enum string);
        # the classifier reports the canonical row 9 label and leaves
        # specialisation to the emitter (which already exists in
        # ``dispatch.py``).
        return OverloadClassification(
            matrix_row=9,
            primitive='val',
            per_position_tags=tags,
            rationale='same-arity overloads with distinguishable JS types — val-discrimination (rows 9/12/14)',
        )

    # Mixed-return overload groups → matrix row 26.
    if inputs.has_mixed_returns:
        return OverloadClassification(
            matrix_row=26,
            primitive='val',
            per_position_tags=tags,
            rationale='mixed void/non-void return overloads — val-dispatch with mixed_returns=True',
        )

    # Matrix row 10 — static + instance overloads at same JS arity.
    if inputs.has_mixed_static_instance:
        return OverloadClassification(
            matrix_row=10,
            primitive='val',
            per_position_tags=tags,
            rationale='same-arity static + instance overloads — split val dispatchers',
        )

    # Step 4a/b — trailing defaults + sibling aliasing.
    if _has_trailing_defaults(overloads):
        if inputs.has_sibling_aliasing:
            return OverloadClassification(
                matrix_row=8,
                primitive='val',
                per_position_tags=tags,
                rationale='sub-2b sibling-aliasing detected — val-discrimination at larger arity (row 8)',
            )

        # Row 22 — genuine ``std::optional<T>`` parameter (source-level).
        if _has_genuine_optional(overloads):
            return OverloadClassification(
                matrix_row=22,
                primitive='optional',
                per_position_tags=tags,
                rationale='genuine source-level std::optional<T> parameter (row 22)',
            )

        # Row 33 — every trailing default is a C-string wrapper.
        if _all_cstring_trailing_default(overloads):
            return OverloadClassification(
                matrix_row=33,
                primitive='val',
                per_position_tags=tags,
                rationale='cstring-wrapper trailing default — val + isUndefined()/isNull() ? "" : as<std::string>().c_str() (row 33)',
            )

        # Row 34 — multi-overload + trailing default.
        # The numOverloads==1 gate previously excluded this from
        # optional emission; rule 9 of the policy says val is the
        # consistent choice for this shape. ``sibling_count > 0`` on
        # the first overload also signals multi-overload context when
        # the caller passed only a single descriptor (production
        # bindgen path); the classifier honours both spellings so
        # synthetic tests can either pack siblings into ``overloads``
        # or surface sibling-count metadata directly.
        sole = overloads[0]
        is_multi_overload = (
            len(overloads) > 1
            or (sole.sibling_count and sole.sibling_count > 0)
        )
        if is_multi_overload:
            return OverloadClassification(
                matrix_row=34,
                primitive='val',
                per_position_tags=tags,
                rationale='multi-overload trailing default — val-discrimination across overloads (row 34)',
            )

        # Single overload, trailing default. Per policy rule 9 only
        # rows {3, 4, 5, 21, 22} keep ``std::optional<T>``; every other
        # trailing-default shape routes to ``emscripten::val``. The
        # bindgen call site signals row {3, 4, 5} membership by
        # setting ``is_canonical_optional_default=True`` on every
        # trailing-default ``ParameterDescriptor``; the classifier
        # routes those to row 3 (the canonical optional label) and
        # routes everything else (rows 1, 2, 23, 30, 36, 37) to val.
        trailing = [p for p in sole.parameters if p.is_trailing_default]
        if not trailing:
            # Defensive — outer guard should have prevented this.
            return OverloadClassification(
                matrix_row=6,
                primitive='native',
                per_position_tags=tags,
                rationale='no trailing defaults after inspection — native embind overload (row 6)',
            )

        # Row 30 — null is meaningful at any trailing-default slot.
        # Bindgen call site sets ``accepts_meaningful_null`` from per-class
        # opt-in metadata; the strict-by-default policy (rule 5) flips
        # to permissive only when this flag is set.
        if any(p.accepts_meaningful_null for p in trailing):
            return OverloadClassification(
                matrix_row=30,
                primitive='val',
                per_position_tags=tags,
                rationale='null is meaningful — val with permissive null/undefined handling (row 30)',
            )

        # Canonical ``std::optional<T>`` domain — rows {3, 4, 5}. The
        # bindgen call site marks each canonical-optional trailing
        # default; when EVERY trailing default at this overload
        # qualifies, the classifier returns row 3 (the canonical
        # label) so the emitter routes to the existing optional path.
        if all(p.is_canonical_optional_default for p in trailing):
            return OverloadClassification(
                matrix_row=3,
                primitive='optional',
                per_position_tags=tags,
                rationale='single-overload canonical trailing default (handle null / const-ref temp / scoped constant) — std::optional<T> (rows 3, 4, 5)',
            )

        # Row 1 — single overload, trailing scalar default (~700 production
        # instances per the surface audit). Row 2 (value-class) and row 36
        # (``T{}``) share the same val emission shape; the matrix-row label
        # stays at row 1 as the canonical scalar fallback because the
        # downstream val-default helper renders identical C++ for all
        # three shapes (the difference is in the default expression
        # spelling, which the helper pastes verbatim).
        return OverloadClassification(
            matrix_row=1,
            primitive='val',
            per_position_tags=tags,
            rationale='single-overload trailing default (non-canonical-optional) — val with strict null/undefined unwrap (rows 1, 2, 36)',
        )

    # Step 7 — fallthrough: native embind overload (row 6).
    if len(overloads) > 1:
        return OverloadClassification(
            matrix_row=6,
            primitive='native',
            per_position_tags=tags,
            rationale='multi-overload, unique arities, no defaults — native arity-only dispatch (row 6)',
        )

    return OverloadClassification(
        matrix_row=20,
        primitive='native',
        per_position_tags=tags,
        rationale='single overload, no defaults — native typed binding (row 20)',
    )
