"""Auto-discovery of NCollection template instantiations from bound class method signatures.

Scans the AST of bound OCCT classes to find NCollection template instantiations
used in method parameters and return types, then generates modern C++ `using`
declarations and a manifest for the link step.
"""
import hashlib
import json
import os
import re

import clang.cindex

NCOLLECTION_CONTAINERS = frozenset({
    "NCollection_Array1", "NCollection_Array2",
    "NCollection_HArray1", "NCollection_HArray2",
    "NCollection_Sequence", "NCollection_HSequence",
    "NCollection_List", "NCollection_Map",
    "NCollection_DataMap", "NCollection_IndexedMap",
    "NCollection_IndexedDataMap",
    "NCollection_Vector", "NCollection_DynamicArray",
    "NCollection_DoubleMap",
    "NCollection_Shared",
})

CONTAINER_ALIASES = {
    "NCollection_Vector": "NCollection_DynamicArray",
}

_PUBLIC_TEMPLATE_ALIAS_KINDS = frozenset({
    clang.cindex.CursorKind.TYPEDEF_DECL,
    clang.cindex.CursorKind.TYPE_ALIAS_DECL,
})

_INTERNAL_TEMPLATE_NAMESPACES = frozenset({
    "std", "emscripten", "__gnu_cxx", "__cxxabiv1", "__cxx", "__1",
})

_MAX_MANGLED_NAME_BYTES = 200

def mangle_template_name(container, arg_spellings):
    """Convert a template instantiation to a valid C++ identifier.

    Recursively strips all nested template syntax, converting angle brackets
    and separators into underscores to produce a flat, valid C++ identifier.

    Examples:
        NCollection_Array1, ["gp_Pnt"] -> "NCollection_Array1_gp_Pnt"
        NCollection_Sequence, ["occ::handle<Geom_Curve>"] -> "NCollection_Sequence_handle_Geom_Curve"
        NCollection_Array1, ["NCollection_Vec3<float>"] -> "NCollection_Array1_NCollection_Vec3_float"
    """
    parts = [container]
    for arg in arg_spellings:
        clean = arg.replace("occ::handle<", "handle_").replace("opencascade::handle<", "handle_")
        clean = re.sub(r"[<>,*&]", "_", clean)
        clean = clean.replace("::", "_").replace(" ", "")
        clean = clean.replace("const", "")
        clean = re.sub(r"_+", "_", clean).strip("_")
        if not clean:
            return None
        parts.append(clean)
    mangled = "_".join(parts)
    encoded = mangled.encode("utf-8")
    if len(encoded) <= _MAX_MANGLED_NAME_BYTES:
        return mangled

    digest = hashlib.sha256(encoded).hexdigest()[:16]
    prefix_bytes = encoded[:_MAX_MANGLED_NAME_BYTES - len(digest) - 1]
    prefix = prefix_bytes.decode("utf-8", errors="ignore").rstrip("_")
    return f"{prefix}_{digest}"


def _public_alias_spelling(arg_type):
    """Return a globally nameable typedef spelling, or ``None``.

    Libclang's canonical template argument erases public aliases such as
    ``BRepGraph_FaceId`` into their implementation specialization. Direct
    NCollection API discovery should preserve that source-level name, while
    still rejecting class-local aliases that cannot be named by the generated
    file-scope ``using`` declaration.
    """
    decl = arg_type.get_declaration()
    if decl is None or decl.kind not in _PUBLIC_TEMPLATE_ALIAS_KINDS:
        return None
    parent = decl.semantic_parent
    if parent is None or parent.kind == clang.cindex.CursorKind.TRANSLATION_UNIT:
        return arg_type.spelling or decl.spelling or None
    namespaces = []
    while parent is not None and parent.kind == clang.cindex.CursorKind.NAMESPACE:
        if parent.spelling:
            namespaces.append(parent.spelling)
        parent = parent.semantic_parent
    if parent is not None and parent.kind != clang.cindex.CursorKind.TRANSLATION_UNIT:
        return None
    alias = decl.spelling or arg_type.spelling
    if not alias:
        return None
    return "::".join([*reversed(namespaces), alias]) if namespaces else alias


def _extract_template_args(clang_type, preserve_public_aliases=False):
    """Extract template argument spellings from a clang type.

    Prefers the canonical spelling, which is namespace-qualified for types
    declared inside a namespace (e.g. `ExtremaPC::ExtremumResult`). When
    ``preserve_public_aliases`` is enabled for a direct NCollection API use,
    a globally nameable typedef wins so stable public names such as
    ``BRepGraph_FaceId`` are not erased into implementation specializations.
    """
    num_args = clang_type.get_num_template_arguments()
    if num_args <= 0:
        return []
    args = []
    for i in range(num_args):
        arg_type = clang_type.get_template_argument_type(i)
        if arg_type is None or arg_type.kind == clang.cindex.TypeKind.INVALID:
            return []
        canonical = arg_type.get_canonical()
        source_alias = (
            _public_alias_spelling(arg_type)
            if preserve_public_aliases
            else None
        )
        spelling = source_alias or canonical.spelling or arg_type.spelling
        if not spelling or "type-parameter-" in spelling:
            return []
        args.append(spelling)
    return args


def _is_template_declaration(decl):
    """Return whether ``decl`` is a bindable class-template declaration."""
    if decl is None or decl.kind not in (
        clang.cindex.CursorKind.CLASS_TEMPLATE,
        clang.cindex.CursorKind.CLASS_TEMPLATE_PARTIAL_SPECIALIZATION,
        clang.cindex.CursorKind.CLASS_DECL,
        clang.cindex.CursorKind.STRUCT_DECL,
    ):
        return False
    parent = decl.semantic_parent
    while parent:
        if (
            parent.kind == clang.cindex.CursorKind.NAMESPACE
            and parent.spelling in _INTERNAL_TEMPLATE_NAMESPACES
        ):
            return False
        parent = parent.semantic_parent
    return True


def _is_top_level_template_declaration(decl):
    """Return whether the current emitter can name ``decl`` unqualified."""
    if not _is_template_declaration(decl):
        return False
    parent = decl.semantic_parent
    return parent is None or parent.kind == clang.cindex.CursorKind.TRANSLATION_UNIT


def _is_globally_accessible(arg_type, template_typedef_names=None):
    """Check whether a template argument type is accessible at file/namespace scope.

    Rejects types nested inside classes (e.g., Poly_CoherentTriangulation::TwoIntegers)
    or typedef aliases only visible within non-global namespaces that the using
    declaration site cannot reach.

    Lifts the rejection when the enclosing class is itself a
    `tuInfo.templateTypedefs` instantiation. Such types acquire a global
    file-scope name through the alias (e.g.
    ``BRepGraph_ReverseIterator<FaceOfWireRefTraits>`` is reached via the
    ``BRepGraph_FacesOfEdge`` typedef), so a ``using`` declaration at file
    scope can name them via the alias.
    """
    decl = arg_type.get_declaration()
    if not decl or not decl.spelling:
        decl = arg_type.get_canonical().get_declaration()
    if not decl or not decl.spelling:
        return True

    parent = decl.semantic_parent
    if not parent:
        return True

    if parent.kind in (clang.cindex.CursorKind.CLASS_DECL, clang.cindex.CursorKind.STRUCT_DECL):
        # Admit when the enclosing class is a known template-typedef
        # instantiation (its alias is at file scope, so we can name it).
        if template_typedef_names is not None and parent.spelling in template_typedef_names:
            return True
        return False
    return True


def _scan_type_for_ncollection(clang_type, needed, template_typedef_names=None, source_class=None):
    """Check if a type contains a supported concrete template instantiation.

    Existing NCollection families remain directly discoverable. Other template
    families are admitted only through a public typedef/type-alias spelling:
    that is the structural signal that the specialization is an intended,
    globally named API surface rather than an implementation template exposed
    incidentally in a signature. `source_class` lets the link step preserve
    per-YAML reachability for every generated specialization.
    """
    t = clang_type
    if t.kind == clang.cindex.TypeKind.LVALUEREFERENCE:
        t = t.get_pointee()
    if t.kind == clang.cindex.TypeKind.RVALUEREFERENCE:
        t = t.get_pointee()
    if t.kind == clang.cindex.TypeKind.POINTER:
        t = t.get_pointee()

    t.spelling.replace("const ", "").strip()

    direct_decl = t.get_declaration()
    canonical_type = t.get_canonical()
    canonical_decl = canonical_type.get_declaration()
    direct_container = (
        CONTAINER_ALIASES.get(direct_decl.spelling, direct_decl.spelling)
        if direct_decl and direct_decl.spelling
        else None
    )
    canonical_container = (
        CONTAINER_ALIASES.get(canonical_decl.spelling, canonical_decl.spelling)
        if canonical_decl and canonical_decl.spelling
        else None
    )

    direct_is_alias = bool(
        direct_decl and direct_decl.kind in _PUBLIC_TEMPLATE_ALIAS_KINDS
    )
    canonical_is_template = (
        canonical_type.get_num_template_arguments() > 0
        and _is_template_declaration(canonical_decl)
    )
    direct_is_template = (
        t.get_num_template_arguments() > 0
        and _is_template_declaration(direct_decl)
    )
    canonical_is_admitted = canonical_is_template and (
        canonical_container in NCOLLECTION_CONTAINERS
        or (
            direct_is_alias
            and _is_top_level_template_declaration(canonical_decl)
        )
    )
    direct_is_admitted = (
        direct_is_template and direct_container in NCOLLECTION_CONTAINERS
    )

    # Preserve an admitted direct specialization's public argument spelling.
    # Canonicalizing first erases typed aliases (for example SolidId -> NodeId)
    # and expands omitted defaults, changing established JS names.
    if direct_is_admitted:
        container = direct_container
    elif canonical_is_admitted:
        t = canonical_type
        container = canonical_container
    else:
        nested_type = (
            canonical_type
            if canonical_type.get_num_template_arguments() > 0
            else t
        )
        if nested_type.get_num_template_arguments() > 0:
            for i in range(nested_type.get_num_template_arguments()):
                inner = nested_type.get_template_argument_type(i)
                _scan_type_for_ncollection(inner, needed, template_typedef_names, source_class)
        return

    if not container:
        return

    arg_spellings = _extract_template_args(
        t,
        preserve_public_aliases=direct_is_admitted,
    )
    if not arg_spellings:
        return

    accessible_template_typedefs = (
        template_typedef_names if container in NCOLLECTION_CONTAINERS else None
    )
    for i in range(t.get_num_template_arguments()):
        arg_t = t.get_template_argument_type(i)
        if not _is_globally_accessible(arg_t, accessible_template_typedefs):
            return
        canonical = arg_t.get_canonical()
        if canonical.kind == clang.cindex.TypeKind.POINTER:
            return

    mangled = mangle_template_name(container, arg_spellings)
    if mangled is None:
        return
    needed.add((mangled, container, tuple(arg_spellings), source_class or "<anon>"))


def _scan_class_methods(class_cursor, needed, template_typedef_names=None, source_override=None):
    """Scan all public methods, constructors, and FIELD_DECLs of a class for NCollection types.

    Public FIELD_DECLs matter because Embind exposes them via `.property(...)`,
    and the wrapping NCollection type must be registered for JS access to work
    (otherwise `Cannot access X.field due to unbound types` at runtime). OCCT
    V8's namespace-scoped result/config structs (e.g. `ExtremaPC::Result.Extrema`)
    rely on this path.

    `source_override` lets the template-typedef pass tag discoveries with
    the typedef name (`BRepGraph_FacesOfEdge`) instead of the underlying
    template class (`BRepGraph_ReverseIterator`) so the link filter
    intersects against names a consumer YAML can actually bind. Defaults
    to `class_cursor.spelling` for the primary discovery pass.
    """
    source = source_override or (class_cursor.spelling or "<anon>")
    for child in class_cursor.get_children():
        if child.kind == clang.cindex.CursorKind.CXX_METHOD:
            if child.access_specifier != clang.cindex.AccessSpecifier.PUBLIC:
                continue
            _scan_type_for_ncollection(child.result_type, needed, template_typedef_names, source)
            for arg in child.get_arguments():
                _scan_type_for_ncollection(arg.type, needed, template_typedef_names, source)
        elif child.kind == clang.cindex.CursorKind.CONSTRUCTOR:
            if child.access_specifier != clang.cindex.AccessSpecifier.PUBLIC:
                continue
            for arg in child.get_arguments():
                _scan_type_for_ncollection(arg.type, needed, template_typedef_names, source)
        elif child.kind == clang.cindex.CursorKind.FIELD_DECL:
            if child.access_specifier != clang.cindex.AccessSpecifier.PUBLIC:
                continue
            _scan_type_for_ncollection(child.type, needed, template_typedef_names, source)


_HARRAY_TO_ARRAY = {
    "NCollection_HArray1": "NCollection_Array1",
    "NCollection_HArray2": "NCollection_Array2",
    "NCollection_HSequence": "NCollection_Sequence",
}

# Mangled NCollection names that are also registered manually in
# BUILTIN_BINDINGS_SOURCE (src/buildFromYaml.py). Embind requires each
# C++ type to be registered exactly once; auto-emitting these collides at
# Module() instantiation with `BindingError: Cannot register type ... twice`.
# The manual stubs preserve the OCCT-deprecated public names that downstream
# consumers (smoke tests, @taucad/runtime) call into via
# `oc.TColStd_IndexedDataMapOfStringString()`. Skip auto-discovery here so
# the manual binding remains the sole registration site.
_BUILTIN_BIND_CONFLICTS = frozenset({
    "NCollection_IndexedDataMap_TCollection_AsciiString_TCollection_AsciiString",
    "NCollection_IndexedDataMap_TCollection_AsciiString_TCollection_AsciiString_NCollection_DefaultHasher_TCollection_AsciiString",
})


def _scan_template_typedef_methods(tuInfo, template_typedef, needed, template_typedef_names, source_override=None):
    """Discover NCollection types reachable through a template typedef.

    Resolves the typedef's template (e.g.
    ``BRepGraph_FacesOfEdge = BRepGraph_ReverseIterator<FaceOfWireRefTraits>``)
    via the same ``processTemplate`` codepath used by codegen, augments
    the substitution map with canonical ``type-parameter-N-M`` keys, then
    scans the underlying template class's method signatures with the
    substitution applied. NCollection types that depend on the substituted parameters
    (e.g. ``NCollection_DynamicArray<typename TraitsT::ParentId>``)
    enter the manifest as concrete instantiations
    (``NCollection_DynamicArray<BRepGraphInc_FaceRef>``).

    The substitution rewrites the AST-extracted argument spellings; we
    don't need to walk the template's body recursively because any NCollection
    used in a method signature is already visible via the existing
    `_scan_class_methods` traversal — the only thing missing was the
    substitution layer.
    """
    # Imported lazily so `discover` doesn't pull in the whole pipeline at
    # module import time (the pipeline imports discover via codegen).
    from ocjs_bindgen.ast.template_args import augment_template_args_with_canonical
    from ocjs_bindgen.pipeline.generate import SkipException, processTemplate

    try:
        templateClass, templateArgs = processTemplate(template_typedef)
    except SkipException:
        return
    except Exception:
        return
    augmented_args = augment_template_args_with_canonical(templateArgs, templateClass)

    # Tag discoveries with the typedef name so the link filter intersects
    # against names a consumer YAML can actually bind. An explicit
    # source_override (e.g. CUSTOM_CODE_SOURCE_TAG) wins.
    typedef_source = source_override or template_typedef.spelling or "<anon>"
    raw = set()
    _scan_class_methods(templateClass, raw, template_typedef_names, source_override=typedef_source)
    if not raw:
        return

    for _mangled_name, container, arg_spellings, _orig_source in raw:
        substituted_args = tuple(
            _substitute_arg_spelling(spelling, augmented_args)
            for spelling in arg_spellings
        )
        if any(s is None for s in substituted_args):
            continue
        if any("type-parameter-" in s for s in substituted_args):
            continue
        new_mangled = mangle_template_name(container, list(substituted_args))
        if new_mangled is None:
            continue
        needed.add((new_mangled, container, substituted_args, typedef_source))


def _substitute_arg_spelling(spelling, template_args):
    """Substitute every key in `template_args` against `spelling`.

    Returns the substituted spelling, or ``None`` if nothing remains
    after stripping `typename` qualifiers and the spelling still
    contains an unresolved template parameter (the caller treats that as
    "skip this instantiation").
    """
    if not template_args or not spelling:
        return spelling
    out = spelling
    # Source-name + canonical-key substitution. We iterate sorted-by-length
    # descending so longer names (`TheItemType`) match before shorter ones
    # (`T`) which would otherwise trigger spurious replacements.
    for key in sorted(template_args, key=len, reverse=True):
        sub = getattr(template_args[key], "spelling", None) or str(template_args[key])
        if not sub:
            continue
        # Word-boundary substitution mirrors `replace_template_args` in
        # `ocjs_bindgen/ast/template_args.py` so the same semantics apply.
        out = re.sub(r"\b" + re.escape(key) + r"\b", sub, out)
    out = out.replace("typename ", "").strip()
    return out or None


CUSTOM_CODE_SOURCE_TAG = "__custom__"


def discover_ncollection_types(tuInfo, filter_classes_fn, source_override=None):
    """Scan bound class methods for NCollection template instantiations.

    Returns a set of (mangled_name, container, arg_spellings_tuple, sources_tuple)
    quadruples.

    Two passes:
      1. Direct scan of every bound class's methods (legacy behaviour).
      2. Substitute template typedefs (``using BRepGraph_FacesOfEdge
         = BRepGraph_ReverseIterator<FaceOfWireRefTraits>;``) and rescan
         the underlying template class with the concrete substitution
         applied. This surfaces NCollection containers parameterised on
         the substituted Traits members
         (``NCollection_DynamicArray<BRepGraphInc_FaceRef>``).

    ``source_override`` lets a caller force every discovery's
    ``source_classes`` to a single sentinel name. Pass
    ``CUSTOM_CODE_SOURCE_TAG`` ("__custom__") when running discovery
    against a consumer's ``additionalCppFiles`` / ``myMain.h`` so the
    link-step reachability filter — which always seeds the YAML scope
    with that sentinel — retains every custom-code NCollection regardless
    of which OCCT classes the consumer YAML names. Without an override,
    each discovery is tagged with its originating bound class's spelling.
    """
    template_typedef_names = {td.spelling for td in tuInfo.templateTypedefs if td.spelling}

    needed = set()
    for child in tuInfo.allChildren:
        if not filter_classes_fn(child, False):
            continue
        _scan_class_methods(child, needed, template_typedef_names, source_override=source_override)

    # Second pass — substitute through every template typedef.
    for template_typedef in tuInfo.templateTypedefs:
        _scan_template_typedef_methods(
            tuInfo,
            template_typedef,
            needed,
            template_typedef_names,
            source_override=source_override,
        )

    # V1 RE-SHIP — add NCollection container instantiations referenced as
    # the underlying of any template typedef in the OCCT V8 include set
    # (e.g. ``typedef NCollection_Array1<gp_Dir> TColgp_Array1OfDir;``).
    # Without this, the alias map's ``TColgp_Array1OfDir →
    # NCollection_Array1_gp_Dir`` entry resolves at validate time but
    # the canonical was never compiled (codegen only emitted
    # ``class_<>`` for entries in ``discovered``), so the alias
    # downgrade chain still terminates at "missing canonical". Each
    # typedef-underlying NCollection is tagged with the typedef name as
    # its source for reachability-filter scoping.
    #
    # Uses a SEPARATE libclang TU (``TypedefDiscoveryTuInfo``) that
    # parses ``Deprecated/NCollectionAliases/*.hxx`` in addition to
    # the main OCCT header set. The codegen ``tuInfo`` deliberately
    # excludes those headers because they emit Deprecated-named
    # binding stubs whose template args can reference forward-only
    # declarations the bindgen never compiles
    # (``IntRes2d_IntersectionSegment``, ``ChFiDS_Stripe``, …). Two
    # disjoint TUs is the architecturally correct separation:
    # codegen sees a "live" OCCT class surface, discovery sees the
    # full alias map for validator-time resolution.
    from filter.filterPackages import filterPackages
    from ocjs_bindgen.ast import TypedefDiscoveryTuInfo
    discovery_tu = TypedefDiscoveryTuInfo.instance()

    def _type_is_reachable(arg_type, _depth: int = 0) -> bool:
        """Recursively reject a template type whose declaring class (or
        any nested template argument's declaring class) lives in a
        package excluded by ``bindgen-filters.yaml``. The codegen TU
        only ``#include``s headers from non-excluded packages, so a
        ``using = NCollection_X<…, NCollection_List<TopOpeBRepBuild_*>, …>``
        block would fail compile-bindings with "use of undeclared
        identifier" — the type is reachable through libclang's parse
        (Deprecated/NCollectionAliases headers transitively pull it in)
        but absent from the compile unit (TopOpe* is filtered out for
        binary size). Depth-cap of 8 matches ``_normalize_arg``'s
        defensive bound against pathological cycles.

        Resolves through ``os.path.realpath`` because OCCT headers
        appear via the flat ``build/occt-includes/`` symlink farm; the
        symlink target points back into the real
        ``deps/OCCT/src/<Tier>/<TK>/<Package>/`` tree where the
        per-package filter applies.
        """
        if _depth > 8:
            return True
        decl = arg_type.get_declaration()
        if decl is not None and decl.location.file is not None:
            real_path = os.path.realpath(decl.location.file.name)
            pkg = os.path.basename(os.path.dirname(real_path))
            if not filterPackages(pkg):
                return False
        try:
            num_inner = arg_type.get_num_template_arguments()
        except Exception:
            num_inner = -1
        if num_inner > 0:
            for j in range(num_inner):
                inner_t = arg_type.get_template_argument_type(j)
                if not _type_is_reachable(inner_t, _depth + 1):
                    return False
        return True

    for td in discovery_tu.templateTypedefs:
        alias = (td.spelling or "").strip()
        if not alias:
            continue
        try:
            canonical = td.underlying_typedef_type.get_canonical()
        except Exception:
            continue
        if canonical.kind not in (
            clang.cindex.TypeKind.RECORD,
            clang.cindex.TypeKind.UNEXPOSED,
        ):
            continue
        decl = canonical.get_declaration()
        if decl is None or decl.kind not in (
            clang.cindex.CursorKind.CLASS_DECL,
            clang.cindex.CursorKind.STRUCT_DECL,
            clang.cindex.CursorKind.CLASS_TEMPLATE,
            clang.cindex.CursorKind.CLASS_TEMPLATE_PARTIAL_SPECIALIZATION,
        ):
            continue
        canonical_container = CONTAINER_ALIASES.get(decl.spelling, decl.spelling)
        if canonical_container not in NCOLLECTION_CONTAINERS:
            continue
        args = _extract_template_args(canonical)
        if not args:
            continue
        # Reject if any template arg references a type in an excluded
        # package (see _type_is_reachable docstring for the OCCT V8
        # TopOpe* / HeaderSection / Deprecated-package scenario).
        try:
            num_args = canonical.get_num_template_arguments()
            arg_types = [canonical.get_template_argument_type(i) for i in range(num_args)]
        except Exception:
            arg_types = []
        if arg_types and not all(_type_is_reachable(t) for t in arg_types):
            continue
        # Reject if any template arg is a pointer (e.g.
        # ``NCollection_Sequence<void *>`` or
        # ``NCollection_DataMap<TopoDS_Shape, TNaming_RefShape *, …>``).
        # Embind cannot register pointer-instantiated NCollections —
        # ``emscripten::val::as<const void * &>`` substitutes-fail and
        # the per-arity ``select_overload<Sig, Class>`` template
        # rejects ``Class = NCollection_*<… *, …>`` shapes. The
        # main-pass ``_scan_type_for_ncollection`` already filters
        # pointer template args (line ~151); the typedef-alias pass
        # mirrors that filter so deprecated aliases never sneak past
        # the package-reachability gate.
        pointer_arg = False
        for at in arg_types:
            canonical_at = at.get_canonical()
            if canonical_at.kind == clang.cindex.TypeKind.POINTER:
                pointer_arg = True
                break
        if pointer_arg:
            continue
        mangled = mangle_template_name(canonical_container, args)
        if mangled is None or mangled in _BUILTIN_BIND_CONFLICTS:
            continue
        needed.add((mangled, canonical_container, tuple(args), source_override or alias))

    augmented = set()
    for mangled_name, container, arg_spellings, source_class in needed:
        if mangled_name in _BUILTIN_BIND_CONFLICTS:
            continue
        augmented.add((mangled_name, container, arg_spellings, source_class))
        inner_container = _HARRAY_TO_ARRAY.get(container)
        if inner_container:
            inner_mangled = mangle_template_name(inner_container, list(arg_spellings))
            if inner_mangled and inner_mangled not in _BUILTIN_BIND_CONFLICTS:
                # HArray-twin inherits the originating source class so the
                # link filter applies symmetrically to both forms.
                augmented.add((inner_mangled, inner_container, arg_spellings, source_class))

    # Canonical-args dedup.
    #
    # The first pass discovers `NCollection_DynamicArray<BRepGraph_SolidId>`
    # (the alias-form), the typedef-substitution pass discovers
    # `NCollection_DynamicArray<BRepGraph_NodeId::Typed<...::Kind::Solid>>`
    # (the substituted form). Both `using` declarations name the same
    # underlying C++ type, so a fragment is emitted for each and Embind's
    # `class_<>` registration produces two `raw_destructor<X>` explicit
    # specializations for the same X — wasm-ld bails with a duplicate-symbol
    # error.
    #
    # Resolve by collapsing entries whose args reduce to the same canonical
    # spelling. The alias map is built from `tuInfo.templateTypedefs`
    # (`using BRepGraph_SolidId = BRepGraph_NodeId::Typed<...>;`) — repeated
    # word-boundary substitution chases multi-step aliases until the spelling
    # is stable. Order-independent: the first manifest entry seen for a given
    # canonical key wins, the rest are dropped.
    return _dedupe_by_canonical_args(augmented, tuInfo)


def _build_typedef_alias_map(tuInfo, include_plain_typedefs=False):
    """Map every `using A = B;` template-typedef to its underlying spelling.

    Used by `_dedupe_by_canonical_args` to collapse manifest entries whose
    args differ only in alias spelling — without this, the typedef-
    substitution second pass can produce a second NCollection<X>
    registration under a different mangled name for the same C++ type X,
    triggering wasm-ld duplicate symbol errors at link time.
    """
    alias_map = {}
    typedefs = list(getattr(tuInfo, "templateTypedefs", []) or [])
    if include_plain_typedefs:
        seen = {id(td) for td in typedefs}
        typedefs.extend(
            td
            for td in (getattr(tuInfo, "typedefs", []) or [])
            if id(td) not in seen
        )
    for td in typedefs:
        name = (td.spelling or "").strip()
        if not name:
            continue
        try:
          underlying = td.underlying_typedef_type
        except Exception:
          underlying = None
        if underlying is None:
            continue
        underlying_spelling = (underlying.spelling or "").strip()
        try:
            canonical = underlying.get_canonical()
            canonical_args = _extract_template_args(canonical)
            canonical_decl = canonical.get_declaration()
            if (
                canonical_args
                and canonical_decl is not None
                and canonical_decl.spelling
            ):
                underlying_spelling = (
                    f"{canonical_decl.spelling}"
                    f"<{', '.join(canonical_args)}>"
                )
        except Exception:
            pass
        if not underlying_spelling or underlying_spelling == name:
            continue
        alias_map[name] = underlying_spelling

        namespace_parts = []
        parent = getattr(td, "semantic_parent", None)
        while parent and parent.kind == clang.cindex.CursorKind.NAMESPACE:
            if parent.spelling:
                namespace_parts.append(parent.spelling)
            parent = getattr(parent, "semantic_parent", None)
        if namespace_parts:
            public_name = "_".join([*reversed(namespace_parts), name])
            alias_map[public_name] = underlying_spelling
    return alias_map


def _normalize_arg(arg, alias_map):
    """Resolve every alias in `arg` until the spelling reaches a fixed point."""
    if not arg or not alias_map:
        return arg
    prev = None
    cur = arg
    # Cap iterations as a defensive guard against pathological alias cycles
    # (`using A = B; using B = A;` shouldn't compile, but better safe than
    # spinning forever in a discover pass).
    for _ in range(8):
        prev = cur
        for alias in sorted(alias_map, key=len, reverse=True):
            cur = re.sub(r"\b" + re.escape(alias) + r"\b", alias_map[alias], cur)
        if cur == prev:
            return cur
    return cur


def _dedupe_by_canonical_args(entries, tuInfo):
    """Collapse manifest entries that share the same canonical args.

    Returns a `set` of `(mangled_name, container, arg_spellings, sources_tuple)`
    quadruples where each canonical (container, normalized-args) key appears
    exactly once. The same canonical NCollection may be discovered from
    multiple bound classes (e.g. `NCollection_Array1_TopoDS_Shape` reached
    from `TopoDS_Iterator`, `TopoDS_HShape`, …); we aggregate every source
    class into the winner's `sources_tuple` so the link-step reachability
    filter keeps the entry as long as *any* of its source classes is in
    the consumer YAML scope. Preserves the first-seen entry per key —
    sorting the input by mangled name keeps the output deterministic
    across runs.
    """
    alias_map = _build_typedef_alias_map(tuInfo)
    seen = {}      # key -> (mangled, container, args)
    sources = {}   # key -> set[str]
    for entry in sorted(entries):
        mangled, container, args, source = entry
        canonical_args = tuple(_normalize_arg(a, alias_map) for a in args)
        key = (container, canonical_args)
        if key not in seen:
            seen[key] = (mangled, container, args)
        sources.setdefault(key, set()).add(source)
    out = set()
    for key, (mangled, container, args) in seen.items():
        out.add((mangled, container, args, tuple(sorted(sources[key]))))
    return out


def generate_using_declarations(discovered):
    """Generate C++ using declarations for discovered NCollection types.

    Returns a newline-joined string of sorted using declarations.
    """
    if not discovered:
        return ""
    lines = []
    for entry in discovered:
        # Entries are 4-tuples (mangled, container, args, sources).
        # `using` declarations only need the first three; sources are
        # consumed by `write_manifest` for the link-step filter.
        mangled_name, container, arg_spellings = entry[0], entry[1], entry[2]
        full_type = f"{container}<{', '.join(arg_spellings)}>"
        lines.append(f"using {mangled_name} = {full_type};")
    return "\n".join(sorted(lines))


NCOLLECTION_MANIFEST_SCHEMA = "ncollection-manifest-v2"


def _parse_template_spelling(spelling):
    """Parse `Container<arg1, arg2>` spellings into `(container, args)`.

    Comma-splits at the top angle-bracket depth so nested templates
    (`NCollection_DataMap<X, NCollection_List<Y>, Hasher>`) survive. Returns
    `None` for anything that doesn't have a `<...>` suffix at all.
    """
    spelling = spelling.strip()
    lt = spelling.find("<")
    if lt < 0 or not spelling.endswith(">"):
        return None
    container = spelling[:lt].strip()
    inner = spelling[lt + 1 : -1].strip()
    args = []
    depth = 0
    current = []
    for ch in inner:
        if ch == "<":
            depth += 1
            current.append(ch)
        elif ch == ">":
            depth -= 1
            current.append(ch)
        elif ch == "," and depth == 0:
            args.append("".join(current).strip())
            current = []
        else:
            current.append(ch)
    if current:
        args.append("".join(current).strip())
    return container, args


def _serialise_template_typedef_aliases(tuInfo, discovered):
    """Build the `{alias_name: canonical_mangled}` map serialised into the
    manifest's `template_typedefs` field — the producer side of the link-time
    typedef-alias resolution contract V1/V3 enforces.

    Walks a discovery-only TU's ``templateTypedefs`` (which ALSO sees
    ``Deprecated/NCollectionAliases/*.hxx`` for OCCT V8 historic
    forwarders like ``TColgp_Array1OfPnt``), resolves each underlying
    spelling through `_normalize_arg` (handles multi-step chains
    `using A = B; using B = NCollection_X<Y>;`), parses into
    `(container, args)` via `_parse_template_spelling`, normalises the
    container through `CONTAINER_ALIASES` (so `NCollection_Vector`
    aliases fold into the canonical `NCollection_DynamicArray`), then
    mangles via `mangle_template_name`.

    **Filter:** only emit entries whose canonical mangled IS present in
    the `discovered` set. An alias whose canonical wasn't discovered
    cannot be satisfied at link time; emitting it would re-introduce
    the false-positive class the audit was created to fix.

    ``tuInfo`` is kept on the signature for API symmetry, but the
    typedef walk uses :class:`TypedefDiscoveryTuInfo` so the
    deprecated-alias headers are visible to libclang during the
    typedef collection — without that, OCCT V8's historic aliases
    (``TColgp_Array1OfPnt``, ``TopTools_ListOfShape``, …) never
    appear in the manifest and validator-time resolution falls
    through to ``truly_missing``.
    """
    from ocjs_bindgen.ast import TypedefDiscoveryTuInfo
    discovered_mangled = {entry[0] for entry in discovered}
    # Pick whichever TU exposes more typedefs — discovery TU in
    # production (parses Deprecated/NCollectionAliases for OCCT V8
    # historic aliases), the test's mock tuInfo in unit tests
    # (which never instantiates the real discovery TU).
    discovery_tu = TypedefDiscoveryTuInfo.instance()
    tu_typedefs = list(getattr(tuInfo, "templateTypedefs", []) or []) + list(
        getattr(tuInfo, "typedefs", []) or []
    )
    discovery_typedefs = list(
        getattr(discovery_tu, "templateTypedefs", []) or []
    ) + list(getattr(discovery_tu, "typedefs", []) or [])
    typedef_source = discovery_tu if len(discovery_typedefs) >= len(tu_typedefs) else tuInfo
    alias_map = _build_typedef_alias_map(
        typedef_source,
        include_plain_typedefs=True,
    )
    out = {}
    for alias, underlying in alias_map.items():
        normalized = _normalize_arg(underlying, alias_map)
        parsed = _parse_template_spelling(normalized)
        if parsed is None:
            continue
        container, args = parsed
        container = CONTAINER_ALIASES.get(container, container)
        mangled = mangle_template_name(container, args)
        if mangled is None:
            continue
        if mangled in discovered_mangled:
            out[alias] = mangled

    # Discovery intentionally keeps a globally nameable public typedef in a
    # template argument (for example ``BRepGraph_OccurrenceId``), while the
    # canonical spelling remains useful to TypeScript consumers. Point that
    # canonical spelling at the single public Embind registration instead of
    # compiling a duplicate registration for the same C++ TypeID.
    for mangled, container, args, *_ in discovered:
        canonical_args = tuple(_normalize_arg(arg, alias_map) for arg in args)
        canonical_mangled = mangle_template_name(container, canonical_args)
        if canonical_mangled and canonical_mangled != mangled:
            out.setdefault(canonical_mangled, mangled)

    # Preserve the public name implied by a typedef's source spelling when
    # canonicalization adds defaulted arguments. Both names describe the same
    # C++ TypeID, so the source-shaped name is a declaration-only alias to the
    # one canonical Embind registration rather than a second class binding.
    source_typedefs = list(getattr(typedef_source, "templateTypedefs", []) or [])
    source_typedefs += list(getattr(typedef_source, "typedefs", []) or [])
    for typedef in source_typedefs:
        alias = (getattr(typedef, "spelling", "") or "").strip()
        if not alias or alias not in out:
            continue
        underlying_type = getattr(typedef, "underlying_typedef_type", None)
        source_spelling = (
            getattr(underlying_type, "spelling", "") or ""
        ).strip()
        parsed = _parse_template_spelling(source_spelling)
        if parsed is None:
            continue
        source_container, source_args = parsed
        source_container = CONTAINER_ALIASES.get(
            source_container,
            source_container,
        )
        source_mangled = mangle_template_name(source_container, source_args)
        canonical_mangled = out[alias]
        if not source_mangled or source_mangled == canonical_mangled:
            continue
        if source_mangled in discovered_mangled:
            # The source-shaped specialization owns the compiled Embind
            # registration. Keep the public typedef pointed at that exact
            # object instead of a canonical spelling whose defaulted template
            # arguments were never emitted as a second registration.
            out[alias] = source_mangled
        else:
            out.setdefault(source_mangled, canonical_mangled)
    return out


def write_manifest(discovered, build_dir, tuInfo=None):
    """Write the NCollection manifest JSON for the link step.

    Schema (v2):

    - ``schema``: ``"ncollection-manifest-v2"`` — discriminator consumed by
      ``manifest_registry.load_ncollection_alias_index``; pre-v2 manifests
      are rejected hard-fail.
    - ``symbols``: sorted list of every canonical mangled NCollection name.
    - ``declarations``: per-entry metadata with ``source_classes`` (the list
      of bound class names whose method/field signatures caused the
      NCollection to be discovered — a **reachability tag**, NOT an alias
      list; consumed by ``_filter_auto_symbols_by_scope``).
    - ``template_typedefs``: ``{alias_name: canonical_mangled}`` — the
      producer-side typedef alias map (e.g. ``TColgp_Array1OfPnt ->
      NCollection_Array1_gp_Pnt``), serialised from ``tuInfo.templateTypedefs``
      via ``_serialise_template_typedef_aliases``. Pre-v2 callers had to
      consult this in-process; v2 makes it a first-class manifest field so
      both ``yaml_build.verifyBindings`` and ``scripts/validate-build.py``
      can resolve typedef aliases identically (the V1 contract).

    Passing ``tuInfo=None`` is allowed only for callers that don't need the
    typedef map (legacy paths); the field is then emitted as ``{}`` and
    downstream consumers hard-fail with a regenerate-pointer error. Every
    pipeline entry point should pass ``tuInfo``.
    """
    manifest = {
        "schema": NCOLLECTION_MANIFEST_SCHEMA,
        "symbols": sorted(entry[0] for entry in discovered),
        "declarations": [],
        "template_typedefs": {},
    }
    for entry in sorted(discovered):
        mangled, container, args, sources = entry
        manifest["declarations"].append({
            "mangled_name": mangled,
            "container": container,
            "args": list(args),
            "source_classes": list(sources),
        })
    if tuInfo is not None:
        typedef_aliases = _serialise_template_typedef_aliases(tuInfo, discovered)
        manifest["template_typedefs"] = dict(sorted(typedef_aliases.items()))
        # Diagnostic: surface the producer-side counts so silent drops
        # (e.g. headers unparseable in this env) are visible in the
        # generate log without having to instrument downstream.
        print(
            f"  template_typedefs producer: {len(tuInfo.templateTypedefs)} typedefs in TU, "
            f"{len(typedef_aliases)} kept (alias→canonical resolution)"
        )
    os.makedirs(build_dir, exist_ok=True)
    manifest_path = os.path.join(build_dir, "ncollection-manifest.json")
    with open(manifest_path, "w") as f:
        json.dump(manifest, f, indent=2)
    typedef_count = len(manifest["template_typedefs"])
    print(
        f"NCollection manifest: {len(discovered)} types, "
        f"{typedef_count} typedef alias(es) -> {manifest_path}",
        flush=True,
    )
    return manifest_path
