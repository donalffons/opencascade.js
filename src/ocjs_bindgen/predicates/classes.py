"""Class-shape predicates.

Extracted from `src/bindings.py` lines 44-334 as part of Phase 1 PR 1.3 of
the OCJS Bindgen Modular Refactor. Behaviour preserved bit-for-bit, including
the module-level mutable caches (`_COPY_CTOR_CACHE`, `_CLASS_TEMPLATE_INDEX`).
Those caches are flagged in the blueprint as Phase 2 work and stay here for
now — moving them onto an injected service is the responsibility of the
diagnostics/state-removal pass (PR 1.6).

Resolves the duplicate `shouldProcessClass` historically defined at
`src/wasmGenerator/Common.py:52`. The orphan was never imported anywhere; it
is deleted in this PR. The canonical implementation now lives in this file
and is the single source of truth.
"""

from __future__ import annotations

import clang.cindex

from filter.filterClasses import filterClass


def _isInlineValueObjectStruct(cursor: clang.cindex.Cursor) -> bool:
    """True iff `cursor` is a nested PUBLIC POD-fields-only struct that the
    parent class binding emits inline as a `value_object<>` (see
    `codegen/embind/class_.py:108-142`).

    The recursive class walker (PR phase 3) discovers these structs and
    queues them for top-level binding. Without this guard the same C++
    type ends up registered twice — once via the parent's inline
    `value_object<>` (Embind's value-marshalling form) and once via the
    nested-walker's top-level `class_<>` — which Embind rejects at runtime
    with `Cannot register type '<Name>' twice`. The parent's inline binding
    is the canonical one for value semantics; the walker's top-level
    binding is redundant for these structs and is skipped here.
    """
    if cursor.kind != clang.cindex.CursorKind.STRUCT_DECL:
        return False
    parent = cursor.semantic_parent
    if parent is None or parent.kind not in (
        clang.cindex.CursorKind.CLASS_DECL,
        clang.cindex.CursorKind.STRUCT_DECL,
    ):
        return False
    if cursor.access_specifier != clang.cindex.AccessSpecifier.PUBLIC:
        return False

    fields = [f for f in cursor.get_children() if f.kind == clang.cindex.CursorKind.FIELD_DECL]
    if not fields:
        return False
    non_field_members = [
        f for f in cursor.get_children()
        if f.kind not in (
            clang.cindex.CursorKind.FIELD_DECL,
            clang.cindex.CursorKind.CXX_ACCESS_SPEC_DECL,
            clang.cindex.CursorKind.CONSTRUCTOR,
            clang.cindex.CursorKind.DESTRUCTOR,
        )
    ]
    if non_field_members:
        return False

    public_ctors = [
        c for c in cursor.get_children()
        if c.kind == clang.cindex.CursorKind.CONSTRUCTOR
        and c.access_specifier == clang.cindex.AccessSpecifier.PUBLIC
    ]
    has_default_ctor = (
        not public_ctors
        or any(
            len(list(c.get_arguments())) == 0 and not c.is_deleted_method()
            for c in public_ctors
        )
    )
    return has_default_ctor


def _hasImplicitDestructorWithIncompleteValueField(cursor: clang.cindex.Cursor) -> bool:
    """Reject records whose implicit destructor owns an incomplete type by value."""
    if any(
        child.kind == clang.cindex.CursorKind.DESTRUCTOR
        for child in cursor.get_children()
    ):
        return False

    def _contains_incomplete_nested_record(clang_type, visiting=None) -> bool:
        if visiting is None:
            visiting = set()
        canonical = clang_type.get_canonical()
        if canonical.kind in (
            clang.cindex.TypeKind.POINTER,
            clang.cindex.TypeKind.LVALUEREFERENCE,
            clang.cindex.TypeKind.RVALUEREFERENCE,
        ):
            return False
        key = canonical.spelling
        if key in visiting:
            return False
        visiting.add(key)
        try:
            declaration = canonical.get_declaration()
            if (
                declaration
                and declaration.kind in (
                    clang.cindex.CursorKind.CLASS_DECL,
                    clang.cindex.CursorKind.STRUCT_DECL,
                )
                and declaration.get_definition() is None
                and declaration.semantic_parent == cursor
            ):
                return True
            for index in range(canonical.get_num_template_arguments()):
                argument = canonical.get_template_argument_type(index)
                if (
                    argument.kind != clang.cindex.TypeKind.INVALID
                    and _contains_incomplete_nested_record(argument, visiting)
                ):
                    return True
            return False
        finally:
            visiting.discard(key)

    return any(
        child.kind == clang.cindex.CursorKind.FIELD_DECL
        and _contains_incomplete_nested_record(child.type)
        for child in cursor.get_children()
    )


def shouldProcessClass(child: clang.cindex.Cursor, occtBasePath: str) -> bool:
    """True iff `child` is a class/struct definition the bindgen should bind.

    Rules (preserved from legacy):
      * Must be a definition (not a forward declaration).
      * Must pass the `filterClass` exclusion list.
      * Must NOT be a class template (template arity > 0 → bindgen handles
        templates via the typedef-alias pipeline, never directly).
      * Multi-public-base classes are skipped — Embind cannot bind them.
      * Nested PUBLIC POD-fields-only structs are skipped — they are
        emitted as inline `value_object<>` by the parent class binding
        (see `_isInlineValueObjectStruct`).
    """
    if child.get_definition() is None or not child == child.get_definition():
        return False

    if not filterClass(child):
        return False

    if _isInlineValueObjectStruct(child):
        return False

    if _hasImplicitDestructorWithIncompleteValueField(child):
        return False

    if (
        child.kind == clang.cindex.CursorKind.CLASS_DECL
        or child.kind == clang.cindex.CursorKind.STRUCT_DECL
    ) and not child.type.get_num_template_arguments() == -1:
        return False

    if (
        child.kind == clang.cindex.CursorKind.CLASS_DECL
        or child.kind == clang.cindex.CursorKind.STRUCT_DECL
    ):
        baseSpec = list(
            filter(
                lambda x: x.kind == clang.cindex.CursorKind.CXX_BASE_SPECIFIER
                and x.access_specifier == clang.cindex.AccessSpecifier.PUBLIC,
                child.get_children(),
            )
        )
        if len(baseSpec) > 1:
            print("cannot handle multiple base classes (" + child.spelling + ")")
            return False

        return True

    return False


# Cached on canonical class spelling so we don't re-walk the same class for
# every call site. The cache is populated only after a definitive answer
# (recursion-cycle short-circuit returns True conservatively but is NOT
# cached so that a later non-cyclic call can record the real answer).
_COPY_CTOR_CACHE: dict[str, bool] = {}


# Lazily built once per TU traversal pass. Maps unqualified class-template
# name → CLASS_TEMPLATE cursor with a non-empty body. Populated on first
# fallback lookup from `_resolve_record_decl` when an instantiation node has
# no children (i.e. libclang's synthetic instantiation CLASS_DECL is empty).
_CLASS_TEMPLATE_INDEX: dict[str, clang.cindex.Cursor] = {}


def _findClassTemplateByName(synthetic_decl):
    """Find the original CLASS_TEMPLATE definition for a synthetic
    instantiation CLASS_DECL. Walks up to the TU root (via translation_unit)
    and caches the result.
    """
    global _CLASS_TEMPLATE_INDEX
    tu = getattr(synthetic_decl, "translation_unit", None)
    if tu is None:
        return None
    if not _CLASS_TEMPLATE_INDEX:

        def _walk(c):
            if c.kind == clang.cindex.CursorKind.CLASS_TEMPLATE and c.spelling:
                if list(c.get_children()):
                    existing = _CLASS_TEMPLATE_INDEX.get(c.spelling)
                    if existing is None:
                        _CLASS_TEMPLATE_INDEX[c.spelling] = c
            for child in c.get_children():
                _walk(child)

        _walk(tu.cursor)
    return _CLASS_TEMPLATE_INDEX.get(synthetic_decl.spelling)


def inherited_template_base(the_class):
    """Return an inherited-constructor template base and its concrete args."""
    children = list(the_class.get_children())
    bases = [
        child
        for child in children
        if child.kind == clang.cindex.CursorKind.CXX_BASE_SPECIFIER
        and child.access_specifier == clang.cindex.AccessSpecifier.PUBLIC
    ]
    if len(bases) != 1 or bases[0].type.get_num_template_arguments() <= 0:
        return None

    template = _findClassTemplateByName(bases[0].type.get_declaration())
    if template is None:
        return None
    using_names = {the_class.spelling, template.spelling}
    if not any(
        child.kind == clang.cindex.CursorKind.USING_DECLARATION
        and child.spelling in using_names
        for child in children
    ):
        return None
    parameters = [
        child
        for child in template.get_children()
        if child.kind == clang.cindex.CursorKind.TEMPLATE_TYPE_PARAMETER
    ]
    arguments = [
        bases[0].type.get_template_argument_type(index)
        for index in range(bases[0].type.get_num_template_arguments())
    ]
    if len(parameters) != len(arguments) or any(not argument.spelling for argument in arguments):
        return None

    from ocjs_bindgen.ast.template_args import augment_template_args_with_canonical

    template_args = {
        parameter.spelling: argument
        for parameter, argument in zip(parameters, arguments, strict=True)
    }
    return template, augment_template_args_with_canonical(template_args, template)


def _ctor_is_copy(ctor, decl) -> bool:
    """True iff `ctor` is a copy constructor for `decl` — a single argument
    whose pointee declaration is `decl` itself. Works for both concrete
    classes and class templates (where the canonical type spelling carries
    template parameters that don't match the unparameterised decl spelling).
    """
    args = list(ctor.get_arguments())
    if len(args) != 1:
        return False
    arg_type = args[0].type
    if arg_type.kind != clang.cindex.TypeKind.LVALUEREFERENCE:
        return False
    pointee = arg_type.get_pointee()
    pointee_decl = pointee.get_declaration()
    if pointee_decl is not None:
        # Cursor equality in libclang's Python binding compares the underlying
        # CXCursor structs which include hashable USR identity; both `==` and
        # USR comparison are reliable. For templates, the injected class name
        # inside the class body refers back to the same CLASS_TEMPLATE cursor.
        if pointee_decl == decl:
            return True
        if (
            pointee_decl.get_usr()
            and decl.get_usr()
            and pointee_decl.get_usr() == decl.get_usr()
        ):
            return True
        # For class templates the injected-class-name reference may surface as
        # a typedef/alias to the same template; compare unqualified spellings
        # as a last resort.
        if (
            pointee_decl.spelling
            and decl.spelling
            and pointee_decl.spelling == decl.spelling
        ):
            return True
    # Fall back to canonical spelling match (concrete classes).
    pointee_canon = pointee.get_canonical()
    return (
        pointee_canon.spelling.replace("const ", "").strip()
        == decl.type.get_canonical().spelling
    )


def _isCopyConstructibleClass(decl, _visiting=None) -> bool:
    """Conservative recursive copy-constructibility check.

    - If the class explicitly declares any copy ctor, the union of those ctors
      must contain an accessible non-deleted one.
    - If there is no user-declared copy ctor, every non-static field's class
      type and every base's class type must itself be copy-constructible
      (recursive). Primitives, enums, pointers, and Handle<T> smart-pointers
      are always copy-constructible. Reference members are not — a class with
      a `T&` field has its implicit copy assignment deleted but copy ctor is
      OK; treat them as fine.

    Cycles (e.g. CRTP self-reference) short-circuit to True (conservative)
    but the result is NOT cached for the cyclic node so a later non-cyclic
    evaluation can record the real answer.
    """
    if _visiting is None:
        _visiting = set()

    decl_key = decl.type.get_canonical().spelling
    if not decl_key:
        decl_key = decl.spelling or "<anon>"
    if decl_key in _COPY_CTOR_CACHE:
        return _COPY_CTOR_CACHE[decl_key]
    if decl_key in _visiting:
        return True  # cycle: defer to outer caller
    _visiting.add(decl_key)

    try:
        all_ctors = [
            c
            for c in decl.get_children()
            if c.kind == clang.cindex.CursorKind.CONSTRUCTOR
        ]
        copy_ctors = [c for c in all_ctors if _ctor_is_copy(c, decl)]
        if copy_ctors:
            ok_copy = any(
                c.access_specifier == clang.cindex.AccessSpecifier.PUBLIC
                and not c.is_deleted_method()
                for c in copy_ctors
            )
            _COPY_CTOR_CACHE[decl_key] = ok_copy
            return ok_copy

        _record_decl_kinds = (
            clang.cindex.CursorKind.CLASS_DECL,
            clang.cindex.CursorKind.STRUCT_DECL,
            clang.cindex.CursorKind.CLASS_TEMPLATE,
            clang.cindex.CursorKind.CLASS_TEMPLATE_PARTIAL_SPECIALIZATION,
        )

        def _resolve_record_decl(t):
            """Resolve a type to its underlying record declaration if any.

            libclang sometimes hands back UNEXPOSED/ELABORATED for template
            instantiations where TypeKind.RECORD would be expected, so we
            fall back to `get_declaration()` and probe the cursor kind
            directly.

            For template instantiations the AST node returned by
            `get_declaration()` is a synthetic CLASS_DECL with NO child
            cursors — the template body lives on the underlying
            CLASS_TEMPLATE. We follow the specialization link so the
            recursive copy-ctor walk sees the real ctors / fields.
            """
            d = t.get_declaration()
            if d is None:
                return None
            if d.kind in _record_decl_kinds:
                if not list(d.get_children()):
                    defn = d.get_definition()
                    if (
                        defn is not None
                        and defn != d
                        and list(defn.get_children())
                    ):
                        return defn
                    tmpl = _findClassTemplateByName(d)
                    if tmpl is not None:
                        return tmpl
                return d
            return None

        for child in decl.get_children():
            if child.kind == clang.cindex.CursorKind.CXX_BASE_SPECIFIER:
                base_type = child.type.get_canonical()
                base_decl = _resolve_record_decl(base_type)
                if base_decl and not _isCopyConstructibleClass(base_decl, _visiting):
                    _COPY_CTOR_CACHE[decl_key] = False
                    return False
            elif child.kind == clang.cindex.CursorKind.FIELD_DECL:
                field_type = child.type.get_canonical()
                spelling = field_type.spelling
                # Handle<T> smart-pointer types are always copy-constructible
                # (refcount bump). Detect by canonical spelling.
                if spelling.startswith("opencascade::handle<") or spelling.startswith(
                    "Handle_"
                ):
                    continue
                field_decl = _resolve_record_decl(field_type)
                if field_decl is None:
                    continue
                if not _isCopyConstructibleClass(field_decl, _visiting):
                    _COPY_CTOR_CACHE[decl_key] = False
                    return False

        _COPY_CTOR_CACHE[decl_key] = True
        return True
    finally:
        _visiting.discard(decl_key)


def _isDefaultConstructibleClass(pointee) -> bool:
    """True iff the pointee is a non-abstract class/struct/class-template type
    with an accessible default constructor (explicit zero-arg ctor OR implicit
    default ctor when no ctors are declared). Drives class-typed
    input-passthrough RBV.

    Abstract classes are excluded — embind binds class-typed lambda parameters
    by value, which requires an instantiable type. OCCT exposes many abstract
    function objects (e.g. `math_Function`, `math_MultipleVarFunctionWithGradient`)
    as non-const-ref parameters; those stay on the standard embind reference
    path rather than the input-passthrough RBV transform.

    Defensive fallback: when the AST declaration cannot be resolved, returns
    False so the legacy embind proxy-mutation path stays in effect.
    """
    decl = pointee.get_declaration()
    if decl is None:
        return False
    if decl.kind not in (
        clang.cindex.CursorKind.CLASS_DECL,
        clang.cindex.CursorKind.STRUCT_DECL,
        clang.cindex.CursorKind.CLASS_TEMPLATE,
    ):
        return False
    if decl.is_abstract_record():
        return False

    # The class must be value-parameter-safe — embind binds class-typed lambda
    # parameters by value, so an accessible non-deleted copy constructor is
    # required in addition to a default ctor. Many OCCT classes (e.g.
    # `BRepGProp_Domain`) are *implicitly* non-copyable because they hold a
    # non-copyable member (e.g. `NCollection_LocalArray` inside
    # `TopExp_Explorer`) without declaring a copy ctor themselves. libclang
    # in this build does not expose `is_copy_constructible`, so we approximate
    # by recursively walking fields/bases.
    if not _isCopyConstructibleClass(decl):
        return False

    public_ctors = [
        c
        for c in decl.get_children()
        if c.kind == clang.cindex.CursorKind.CONSTRUCTOR
        and c.access_specifier == clang.cindex.AccessSpecifier.PUBLIC
    ]
    if not public_ctors:
        return True
    return any(
        len(list(c.get_arguments())) == 0 and not c.is_deleted_method()
        for c in public_ctors
    )
