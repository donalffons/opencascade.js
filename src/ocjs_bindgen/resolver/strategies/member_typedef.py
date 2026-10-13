"""Member-typedef peel resolver strategy.

OCCT's NCollection containers expose their element type through *member
typedefs* rather than the bare template parameter::

    template <class TheItemType>
    class NCollection_DynamicArray
    {
    public:
      using value_type      = TheItemType;
      using reference       = TheItemType&;
      using const_reference = const TheItemType&;

      reference Append(const TheItemType& theValue);    // returns `reference`
      reference Value(int idx);                         // returns `reference`
      const_reference Value(int idx) const;             // returns `const_reference`
    };

The template-arg substitution map keys both the source-name spelling
(``TheItemType``) and the canonical synthetic form (``type-parameter-0-0``).
However, when the resolver encounters the libclang spelling ``reference``
(canonical ``type-parameter-0-0 &``) the existing path in
:func:`ocjs_bindgen.ast.template_args.substitute_canonical_template_names`
short-circuits: ``replace_template_args`` runs word-boundary substitution on
the source spelling ``reference`` (which contains neither key), and the
follow-up canonical regex only fires if ``"type-parameter-"`` is present in
the post-substitution string. Result: ``reference`` falls through unchanged
and the canonical fallback marks it ``unknown``.

This strategy closes the gap by *peeling the member typedef* one level
before the canonical-substitution path runs. When the source type's
declaration is a ``TYPEDEF_DECL`` (or ``TYPE_ALIAS_DECL``) whose underlying
type bears a template-parameter reference, we re-enter the orchestrator on
the underlying type so the existing template-substitution machinery can fire
as designed.
The peel is intentionally conservative:

* It only fires when ``templateArgs`` is non-empty (i.e. we are inside an
  instantiated template context that could meaningfully substitute).
* It only peels typedefs whose underlying canonical or source spelling
  references a template parameter — plain non-template typedefs short-circuit
  to ``None`` so the canonical fallback handles them.
* When the substituted result is itself ``"unknown"``, the strategy returns
  ``None`` to keep the canonical fallback's diagnostics sink (`_collect_any`)
  populated. Residual-quantification depends on unresolved types surfacing
  in ``build/any-type-report.json``.

The strategy is idempotent: re-entering the orchestrator on the underlying
(peeled) type resolves via template substitution rather than peeling again,
so no recursion guard is required.
"""

from __future__ import annotations

import clang.cindex


def resolve_member_typedef_substitution(
    ctx,
    clang_type,
    templateDecl=None,
    templateArgs=None,
) -> str | None:
    """Peel a member typedef whose underlying type references a template
    parameter, then re-resolve via the orchestrator so the existing
    canonical-key substitution can fire.

    Returns the resolved TypeScript type spelling when the peel succeeds and
    the substituted result is not ``"unknown"``. Returns ``None`` in every
    other case (no template context, declaration is not a typedef, plain
    non-template typedef, or the re-resolved result was still ``unknown``)
    so the canonical fallback path remains responsible for both the final
    rendering and the diagnostics-report bookkeeping.
    """
    if not templateArgs:
        return None

    decl = clang_type.get_declaration()
    if decl is None or decl.kind not in (
        clang.cindex.CursorKind.TYPEDEF_DECL,
        clang.cindex.CursorKind.TYPE_ALIAS_DECL,
    ):
        return None

    underlying = decl.underlying_typedef_type
    if not underlying or not underlying.spelling:
        return None

    # Conservative guard: only fire when the underlying type actually references
    # a template parameter (canonical form `type-parameter-N-M` or the source-
    # name spelling of one of the augmented template args). Without this we
    # would peel every typedef in the codebase and risk substituting plain
    # non-template typedefs whose source-name happens to overlap with a key.
    canonical_spelling = underlying.get_canonical().spelling
    has_canonical_param = "type-parameter-" in canonical_spelling
    has_named_param = any(
        k in underlying.spelling
        for k in templateArgs
        if not k.startswith("type-parameter-")
    )
    if not has_canonical_param and not has_named_param:
        return None

    resolved = ctx.resolve_type(underlying, templateDecl, templateArgs)
    if not resolved or resolved == "unknown":
        return None
    return resolved
