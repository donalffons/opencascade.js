"""Cursor-tree walkers and traversal helpers.

Phase 1 PR 1.2 extracted these helpers from the legacy single-file
`src/TuInfo.py` into the AST layer of the new `ocjs_bindgen` package. Behaviour
is preserved bit-for-bit:

- `_walk_namespaces` is intentionally NON-recursive (single level). The
  full enclosing-class chain walk happens inside `NameEncoder` and
  `_walk_classes` below — see those for the full rationale.
- `allChildrenGenerator` augments the flat top-level cursor list with class /
  struct decls discovered one namespace level down, exactly mirroring the
  legacy implementation.

The split between this module and `parse.py` follows the concern boundary
identified in the blueprint: `parse.py` knows libclang; `walker.py` walks
the resulting cursor tree without caring how the TU was constructed.
"""

from __future__ import annotations

import clang.cindex

from filter.filterEnums import filterEnum
from filter.filterTypedefs import filterTypedef
from ocjs_bindgen.codegen.wasm_common import ignoreDuplicateTypedef
from ocjs_bindgen.config.paths import occtBasePath

# Namespaces whose contents must NOT be enumerated for binding generation —
# these are stdlib / Emscripten internals that would (a) blow up symbol counts
# with thousands of irrelevant declarations and (b) cause libclang assertion
# failures on internal class templates.
_SKIPPED_NAMESPACES: frozenset[str] = frozenset(
    {
        "std",
        "emscripten",
        "__gnu_cxx",
        "__cxxabiv1",
        "__cxx",
        "__1",
        # Flex/Bison generated parser internals from OCCT V8's StepFile module.
        # The `step::parser` and `step::scanner` classes carry private data
        # members and union-typed semantic stacks that Embind cannot bind, and
        # are not part of any public API surface (they're invoked through the
        # `StepData_*` facade). Admitting them yields compile errors like
        # `'private member'` / `union with non-trivial member` in the emitted
        # bindings.
        "step",
    }
)


_SKIP_UNDERLYING_TYPES: frozenset[str] = frozenset(
    {
        "void",  # AdvApp2Var_Data_f2c.hxx: typedef VOID C_f -- Fortran artifact
    }
)


def _collect_from_cursor(cursor, predicate):
    """Recursively collect declarations matching `predicate`, descending into namespaces."""
    result = []
    for child in cursor.get_children():
        if child.kind == clang.cindex.CursorKind.NAMESPACE:
            result.extend(_collect_from_cursor(child, predicate))
        elif predicate(child):
            result.append(child)
    return result


# Embind template-function spellings that register a named binding. The
# first string-literal argument of the call is the JS-visible "Name". This
# set covers the public Embind 5.0 registration surface used by OCJS's
# `BUILTIN_BINDINGS_SOURCE` block and consumer YAML `additionalBindFiles`
# snippets, including top-level `function`; any future Embind registration
# entry point would be added here
# rather than re-parsed via regex.
_EMBIND_REGISTRATION_SPELLINGS: frozenset[str] = frozenset(
    {
        "class_",
        "enum_",
        "value_object",
        "value_array",
        "register_vector",
        "register_map",
        "function",
    }
)


def _first_string_literal_descendant(cursor):
    """Depth-first walk of `cursor` returning the first STRING_LITERAL
    cursor encountered, or None.

    Used to dig through the `UNEXPOSED_EXPR` wrappers libclang emits
    around literal arguments of templated Embind calls so the registered
    name (e.g. ``"TopoDS"`` in ``class_<TopoDS_Bind_>("TopoDS")``) is
    retrieved structurally from the AST instead of via regex over the
    source string. Comments and arbitrary substrings inside other string
    literals never reach this walker — libclang stripped them at parse
    time.
    """
    stack = [cursor]
    while stack:
        cur = stack.pop()
        if cur.kind == clang.cindex.CursorKind.STRING_LITERAL:
            return cur
        stack.extend(cur.get_children())
    return None


def _walk_all(cursor):
    """Depth-first generator over every descendant cursor of ``cursor``.

    Unlike :func:`_collect_from_cursor` which prunes everything outside
    namespaces, this walker visits every node — function bodies,
    compound statements, call expressions, casts, the lot — because
    Embind registrations (``class_<T>("Name")``) appear inside the
    ``EMSCRIPTEN_BINDINGS(...)`` function body, several levels deep
    under ``FUNCTION_DECL → COMPOUND_STMT → CXX_FUNCTIONAL_CAST_EXPR →
    CALL_EXPR``. A namespace-only walk would never reach them.
    """
    stack = [cursor]
    while stack:
        cur = stack.pop()
        yield cur
        stack.extend(cur.get_children())


def extract_class_registrations(tu) -> set[str]:
    """Return every JS-visible Name registered by an Embind call in `tu`.

    Walks a translation unit (built by
    :func:`ocjs_bindgen.ast.parse.parse_binding_source` on the
    combined ``BUILTIN_BINDINGS_SOURCE + consumer additionalBindFiles``
    source) and collects the first string-literal argument of every
    Embind registration call — ``class_<T>("Name")``, ``enum_<T>("Name")``,
    ``value_object<T>("Name")``, ``register_vector<T>("Name")``,
    ``register_map<K,V>("Name")``, ``function("Name", callable)``,
    ``value_array<T>("Name")``. ``register_optional<T>()`` takes no name
    (embind derives one), so it registers nothing JS-visible here.

    Implementation visits every cursor in the TU (via :func:`_walk_all`)
    and matches by:

    1. ``CALL_EXPR`` whose ``spelling`` is one of the Embind registration
       template names — this covers free function templates like
       ``register_vector<int>("VectorInt")`` whose call cursor reports
       the template name directly.

    2. ``CXX_FUNCTIONAL_CAST_EXPR`` whose first ``TEMPLATE_REF`` child
       names one of the registration templates — this covers the
       constructor-call form ``class_<T>("Name")`` /
       ``value_object<T>("Name")`` etc. that libclang represents as
       ``CXX_FUNCTIONAL_CAST_EXPR(TEMPLATE_REF, TYPE_REF...,
       CALL_EXPR(STRING_LITERAL))``. Crucially, only the OUTER
       ``CXX_FUNCTIONAL_CAST_EXPR`` knows which template was named; the
       inner ``CALL_EXPR`` reports the same spelling but the structural
       distinction matters for builder-chain expressions like
       ``class_<X>("X").constructor<>().function("f", ...)`` where the
       method calls have their own ``.spelling`` collisions.

    For each match, descends into the first runtime argument and pulls
    the first ``STRING_LITERAL`` cursor (via
    :func:`_first_string_literal_descendant`), stripping surrounding
    quotes to recover the JS-visible Name.

    Architectural note: this function is the single AST-side producer of
    the `build/additional-bind-symbols.json` manifest consumed by
    `manifest_registry.builtin_binding_symbols`. No regex is used here
    or in the consumer — the bindgen's "single libclang entry point"
    contract (see :mod:`ocjs_bindgen.ast.parse`) extends to every form
    of C++ structural extraction the toolchain needs.
    """
    registered: set[str] = set()
    seen_call_locations: set = set()

    for cur in _walk_all(tu.cursor):
        target_call = None
        if cur.kind == clang.cindex.CursorKind.CXX_FUNCTIONAL_CAST_EXPR:
            template_ref = next(
                (
                    ch
                    for ch in cur.get_children()
                    if ch.kind == clang.cindex.CursorKind.TEMPLATE_REF
                ),
                None,
            )
            if (
                template_ref is None
                or template_ref.spelling not in _EMBIND_REGISTRATION_SPELLINGS
            ):
                continue
            target_call = next(
                (
                    ch
                    for ch in cur.get_children()
                    if ch.kind == clang.cindex.CursorKind.CALL_EXPR
                ),
                None,
            )
            if target_call is None:
                continue
            literal_source = list(target_call.get_arguments())
        elif (
            cur.kind == clang.cindex.CursorKind.CALL_EXPR
            and cur.spelling in _EMBIND_REGISTRATION_SPELLINGS
        ):
            if (
                cur.spelling == "function"
                and cur.referenced is not None
                and cur.referenced.kind == clang.cindex.CursorKind.CXX_METHOD
            ):
                continue
            # Free-function template registration (register_vector,
            # register_map, function). Member
            # `.function(...)` calls are excluded above. The constructor form
            # also produces a CALL_EXPR but it lives inside a
            # CXX_FUNCTIONAL_CAST_EXPR we will have already handled;
            # skip it by location-dedup so the inner CALL_EXPR is not
            # double-counted on builders like
            # ``class_<X>("X").constructor<>().function(...)`` where the
            # ``.function`` call also has spelling ``class_`` is false —
            # but the outer ``class_<X>("X")`` already registered "X".
            target_call = cur
            literal_source = list(target_call.get_arguments())
        else:
            continue

        if target_call is None or not literal_source:
            continue

        loc = target_call.location
        loc_key = (
            loc.file.name if loc.file else None,
            loc.line,
            loc.column,
        )
        if loc_key in seen_call_locations:
            continue
        seen_call_locations.add(loc_key)

        literal = _first_string_literal_descendant(literal_source[0])
        if literal is None:
            continue
        # `STRING_LITERAL.spelling` is the source-form literal INCLUDING
        # surrounding quotes. Embind names are always plain identifiers
        # (verified across OCJS canonical builtins + replicad's full
        # binding-file surface), so stripping both ends recovers
        # the JS-visible Name without needing `ast.literal_eval`.
        value = literal.spelling.strip('"')
        if value:
            registered.add(value)
    return registered


def templateTypedefGenerator(tu):
    return _collect_from_cursor(
        tu.cursor,
        lambda x: x.kind
        in (
            clang.cindex.CursorKind.TYPEDEF_DECL,
            clang.cindex.CursorKind.TYPE_ALIAS_DECL,
        )
        and not (x.get_definition() is None or not x == x.get_definition())
        and filterTypedef(x)
        and x.type.get_num_template_arguments() != -1
        and not ignoreDuplicateTypedef(x),
    )


def typedefGenerator(tu):
    return _collect_from_cursor(
        tu.cursor,
        lambda x: x.kind
        in (
            clang.cindex.CursorKind.TYPEDEF_DECL,
            clang.cindex.CursorKind.TYPE_ALIAS_DECL,
        ),
    )


def _walk_namespaces(cursor, predicate, results):
    """Single-level walker: apply `predicate` to each direct non-namespace child of `cursor`.

    Doubly-nested namespaces require the JS public-name encoder, the
    nested-type resolver AND every emit site to agree on a multi-level
    mangling scheme. `NameEncoder.js_public_name` and
    `NameEncoder.resolve_nested_type` walk the full semantic-parent chain,
    and `_walk_classes` (see below) recurses into class bodies so nested
    classes enter the binding pipeline and their `class_<…>` /
    `Outer_Inner` references actually resolve at link time.
    """
    for child in cursor.get_children():
        if child.kind == clang.cindex.CursorKind.NAMESPACE:
            continue
        predicate(child, results)


def _walk_classes(cursor, predicate, results, _seen=None):
    """Recursively descend into PUBLIC class/struct bodies, applying `predicate`.

    OCCT V8's BRepGraph grouped-view API exposes ~50 inner classes
    (`BRepGraph::TopoView::FaceOps`, …) that were silently dropped by the
    legacy walker because it never crossed a class-body boundary. Lifting
    that restriction is purely AST-driven: we only descend into PUBLIC
    nested types (the C++ access specifier is the canonical boundary;
    `private`/`protected` nested types cannot be referenced from outside
    the enclosing class so they must not enter the binding pipeline).

    Recursion depth is unbounded by design — a hard depth limit would
    be a manual rule and OCCT V8 does carry doubly-nested types
    (`BRepGraph::TopoView::FaceOps::Iterator`). The `_seen` set guards
    against pathological self-referential cursors that real OCCT
    headers shouldn't produce but cheap to defend against.

    `predicate(child, results)` follows the same convention as
    `_walk_namespaces` — predicates choose which kinds to collect.
    """
    if _seen is None:
        _seen = set()
    cur_id = id(cursor)
    if cur_id in _seen:
        return
    _seen.add(cur_id)

    current_access = clang.cindex.AccessSpecifier.PUBLIC
    for child in cursor.get_children():
        if child.kind == clang.cindex.CursorKind.CXX_ACCESS_SPEC_DECL:
            current_access = child.access_specifier
            continue
        if current_access != clang.cindex.AccessSpecifier.PUBLIC:
            continue
        if child.kind in (
            clang.cindex.CursorKind.CLASS_DECL,
            clang.cindex.CursorKind.STRUCT_DECL,
        ):
            predicate(child, results)
            _walk_classes(child, predicate, results, _seen)


def _is_top_level_namespace_member(cursor):
    """True if `cursor` is directly inside a non-stdlib namespace (not nested in a class/struct)."""
    parent = cursor.semantic_parent
    return (
        parent is not None
        and parent.kind == clang.cindex.CursorKind.NAMESPACE
        and parent.spelling
        and parent.spelling not in _SKIPPED_NAMESPACES
    )


def allChildrenGenerator(tu):
    """Top-level decls plus class/struct decls discovered inside namespaces and class bodies.

    Composition (in declaration order):

    1. The flat top-level cursors (`tu.cursor.get_children()`) — preserved so
       legacy consumers iterating top-level decls observe an identical surface.
    2. Direct namespace-scoped class/struct decls from non-stdlib namespaces
       (`ExtremaPC::Result`, etc.).
    3. Recursively descended class/struct decls from the bodies of classes
       already enumerated in (1) and (2) (`BRepGraph::TopoView::FaceOps`,
       `Outer::Inner::Innermost`, …). Recursion is unbounded; only PUBLIC
       nested types qualify (see `_walk_classes`).

    Without step (3), per-fragment `.d.ts.json` files reference nested types
    (`Faces(): TopoView_FaceOps`) that are never declared, and the link-time
    `_replace_undeclared_with_unknown` rewrites them to `unknown`.
    """
    flat = list(tu.cursor.get_children())
    ns_descended: list = []
    nested_descended: list = []

    def _collect(child, out):
        if child.kind in (
            clang.cindex.CursorKind.CLASS_DECL,
            clang.cindex.CursorKind.STRUCT_DECL,
        ):
            out.append(child)

    # Step 2 — direct namespace children (legacy behaviour).
    for top in flat:
        if (
            top.kind == clang.cindex.CursorKind.NAMESPACE
            and top.spelling
            and top.spelling not in _SKIPPED_NAMESPACES
        ):
            _walk_namespaces(top, _collect, ns_descended)

    # Step 3 — descend into class/struct bodies discovered at top level
    # OR inside namespaces. Skip CLASS_TEMPLATE roots: they are processed
    # via the typedef-driven `processTemplate` path, not the direct
    # binding pipeline, and recursing into them here would double-bind.
    seen_ids: set = set()
    for top in flat:
        if top.kind in (
            clang.cindex.CursorKind.CLASS_DECL,
            clang.cindex.CursorKind.STRUCT_DECL,
        ):
            _walk_classes(top, _collect, nested_descended, seen_ids)
    for ns_child in ns_descended:
        _walk_classes(ns_child, _collect, nested_descended, seen_ids)

    return flat + ns_descended + nested_descended


def enumGenerator(tu):
    """All enum decls visible at top-level OR inside non-stdlib namespaces."""
    results = []
    for child in tu.cursor.get_children():
        if child.kind == clang.cindex.CursorKind.ENUM_DECL and filterEnum(child):
            results.append(child)
        elif (
            child.kind == clang.cindex.CursorKind.NAMESPACE
            and child.spelling
            and child.spelling not in _SKIPPED_NAMESPACES
        ):

            def _collect_enum(c, out):
                if (
                    c.kind == clang.cindex.CursorKind.ENUM_DECL
                    and filterEnum(c)
                ):
                    out.append(c)

            _walk_namespaces(child, _collect_enum, results)
    return results


def classDict(tu):
    """Map of class/struct spelling → cursor, including namespace- and class-scoped types.

    Namespace-scoped names are keyed by their bare spelling (e.g. `Result`,
    not `ExtremaPC_Result`). This mirrors how `isTransientDerived` /
    `getBaseClass` query the dict by raw `spelling` strings extracted from
    `CXX_BASE_SPECIFIER` type names.

    Nested classes (e.g. `BRepGraph::TopoView::FaceOps`) are also keyed by
    bare spelling so heritage / type-name lookups land them. When multiple
    types share a spelling, the first-seen wins (insertion order:
    top-level > namespace direct > nested-in-class).
    """
    d: dict = dict()

    def _add(cursor):
        if cursor.kind not in (
            clang.cindex.CursorKind.CLASS_DECL,
            clang.cindex.CursorKind.STRUCT_DECL,
        ):
            return
        if cursor.get_definition() is None or cursor != cursor.get_definition():
            return
        if cursor.spelling and cursor.spelling not in d:
            d[cursor.spelling] = cursor

    for x in tu.cursor.get_children():
        _add(x)
    for x in tu.cursor.get_children():
        if (
            x.kind == clang.cindex.CursorKind.NAMESPACE
            and x.spelling
            and x.spelling not in _SKIPPED_NAMESPACES
        ):

            def _collect_class(c, _out):
                _add(c)

            _walk_namespaces(x, _collect_class, [])

    # Descend into class bodies for nested types. Use a single shared
    # `_seen` set across the two passes to avoid re-walking the same
    # cursor when both top-level and namespace-direct paths surface the
    # same class (template instantiations etc.).
    seen_ids: set = set()

    def _collect_nested(c, _out):
        _add(c)

    for x in tu.cursor.get_children():
        if x.kind in (
            clang.cindex.CursorKind.CLASS_DECL,
            clang.cindex.CursorKind.STRUCT_DECL,
        ):
            _walk_classes(x, _collect_nested, [], seen_ids)
        elif (
            x.kind == clang.cindex.CursorKind.NAMESPACE
            and x.spelling
            and x.spelling not in _SKIPPED_NAMESPACES
        ):

            def _walk_ns_classes(c, _out):
                if c.kind in (
                    clang.cindex.CursorKind.CLASS_DECL,
                    clang.cindex.CursorKind.STRUCT_DECL,
                ):
                    _walk_classes(c, _collect_nested, [], seen_ids)

            _walk_namespaces(x, _walk_ns_classes, [])
    return d


def underlyingDict(typedef_list, checkOcctBasePath: bool):
    """Return a dict mapping underlying type spelling → typedef cursor.

    Only the first cursor seen wins (legacy single-cursor consumers depend on
    this). Use `underlyingMultimap` when *all* aliases for an underlying type
    are needed (e.g. deterministic alias selection in bindings.py).
    """
    d: dict = dict()
    for x in typedef_list:
        if checkOcctBasePath and not x.location.file.name.startswith(occtBasePath):
            continue
        underlying = x.underlying_typedef_type.spelling
        if underlying in _SKIP_UNDERLYING_TYPES:
            continue
        if underlying not in d:
            d[underlying] = x
    return d


def underlyingMultimap(typedef_list, checkOcctBasePath: bool):
    """Return a dict mapping underlying type spelling → list of typedef cursors.

    Unlike `underlyingDict`, every alias is retained so callers can pick the
    best one based on naming heuristics. Iteration order matches the source
    list.
    """
    d: dict = dict()
    for x in typedef_list:
        if checkOcctBasePath and not x.location.file.name.startswith(occtBasePath):
            continue
        underlying = x.underlying_typedef_type.spelling
        if underlying in _SKIP_UNDERLYING_TYPES:
            continue
        d.setdefault(underlying, []).append(x)
    return d
