"""Val-with-default emission for single-overload trailing-default methods/ctors.

Phase 2 of the trailing-default emission migration adds val-based
emission for the non-canonical rows in the policy matrix
(``docs/policy/ocjs-trailing-default-emission-policy.md``):

* Row 1   — single overload, trailing scalar default (``bool=false``)
* Row 2   — single overload, trailing value-class default (``T()``)
* Row 23  — non-null handle default (speculative; defensive)
* Row 30  — null-meaningful trailing default (handle reporters)
* Row 33  — cstring-wrapper trailing default (``= ""``)
* Row 34  — multi-overload trailing default (BRepOffsetAPI_MakeFilling.Add)

Each emission produces a single ``optional_override`` lambda whose
trailing-default slots are typed as ``emscripten::val`` and unwrapped
inline via the rule-5 absence-semantics dispatch:

* ``DEFAULT_ON_ABSENCE`` slots: ``isUndefined() ? D : (isNull() ? throw
  BindingError : arg.as<T>())`` — strict-by-default null/undefined.
* ``DEFAULT_ON_ABSENCE`` slots tagged row 30: ``(isUndefined() || isNull())
  ? D : arg.as<T>()`` — null is meaningful, permissive.
* ``DEFAULT_ON_ABSENCE`` cstring slots: ``isUndefined() ? "" :
  (isNull() ? throw : arg.as<std::string>().c_str())`` (row 33).

Required-input slots are read directly via ``arg.as<T>()``.

This module is the val-side counterpart to the optional-side emission
in :mod:`ocjs_bindgen.codegen.embind.constructor` (``emit_constructor``)
and :mod:`ocjs_bindgen.codegen.bindings` (the optional_override
emission branch around line 1905). The matrix routing decision is made
by :func:`ocjs_bindgen.predicates.overload_classification.classify_overload_group`.

The C++ pattern emitted matches the sub-2b val-discrimination pattern
that landed in Phase 1 (``embind/constructor.py::_val_to_cpp_arg``)
so the bench fixture worker can compare apples-to-apples across rows.
"""

from __future__ import annotations

from ocjs_bindgen.predicates.overload_classification import AbsenceTag
from ocjs_bindgen.predicates.types import (
    isCString,
    isRawPointerParam,
    stringViewOwningType,
)


def _val_unwrap_expr(b, arg, val_name, tag, default_expr, accepts_meaningful_null, template_decl, template_args):
    """Render the C++ expression that unwraps ``val val_name`` to the
    argument's expected C++ type, honoring the strict-by-default
    null/undefined policy (rule 5).

    * ``tag is None`` (required input): direct ``val.as<T>()``.
    * ``DEFAULT_ON_ABSENCE`` + ``accepts_meaningful_null=False`` (the
      majority surface): ``isUndefined() ? D : (isNull() ? throw :
      val.as<T>())``. ``null`` rejects with a structured BindingError
      because the C++ source does not admit null as a meaningful
      value.
    * ``DEFAULT_ON_ABSENCE`` + ``accepts_meaningful_null=True`` (row
      30): ``(isUndefined() || isNull()) ? D : val.as<T>()``. ``null``
      collapses to the default because the C++ source explicitly
      accepts null (handle-optional reporter pattern).
    * ``MAYBE_T`` for genuine ``std::optional<T>``: handled by the
      optional-emit path, not this helper.

    The cstring branch (row 33) wraps via ``std::string`` and calls
    ``.c_str()`` to compose with the existing cstring conversion
    pattern from ``embind/constructor.py::emit_constructor``.
    """
    cpp_type = b.getOriginalArgumentType(arg, template_decl, template_args)
    is_c_string = isCString(arg.type)
    is_raw_pointer = isRawPointerParam(arg.type) and not is_c_string
    string_view_owning = stringViewOwningType(arg.type)

    if tag is None:
        # Required input. Read directly.
        if is_c_string:
            return f"{val_name}.as<std::string>().c_str()"
        if string_view_owning is not None:
            return f"{val_name}.as<{string_view_owning}>()"
        if is_raw_pointer:
            return f"{val_name}.as<{cpp_type}>(emscripten::allow_raw_pointers())"
        return f"{val_name}.as<{cpp_type}>()"

    if tag == AbsenceTag.OUTPUT:
        # Output param — caller never supplies; should not appear in val path.
        # Defensive: emit the raw read.
        return f"{val_name}.as<{cpp_type}>()"

    if tag != AbsenceTag.DEFAULT_ON_ABSENCE:
        # MAYBE_T is owned by the optional-emit path; POLYMORPHIC slots
        # are not defaulted. Defensive fallback.
        return f"{val_name}.as<{cpp_type}>()"

    # DEFAULT_ON_ABSENCE — strict-by-default unless row 30 carve-out.
    if is_c_string:
        cast = f"{val_name}.as<std::string>().c_str()"
    elif string_view_owning is not None:
        cast = f"{val_name}.as<{string_view_owning}>()"
    elif is_raw_pointer:
        # Raw pointer trailing defaults stay required: embind's
        # wire.h:124 static_assert rejects std::optional<T*>, and
        # we cannot generate a sensible "default raw pointer".
        # Caller must supply explicitly.
        return f"{val_name}.as<{cpp_type}>(emscripten::allow_raw_pointers())"
    else:
        cast = f"{val_name}.as<{cpp_type}>()"

    rendered_default = (
        f"{string_view_owning}({default_expr})"
        if string_view_owning is not None
        else default_expr
    )
    if accepts_meaningful_null:
        # Row 30 — permissive null/undefined.
        return f"(({val_name}.isUndefined() || {val_name}.isNull()) ? ({rendered_default}) : {cast})"

    # Strict-by-default (policy rule 5): undefined → default;
    # null → BindingError. We use a lambda that returns the bare value
    # type (no const/ref decoration) so the result is materialised as a
    # temporary at the call site; the C++ overload's const-ref parameter
    # then binds to that temporary for the duration of the full
    # expression, mirroring the lifetime semantics of the inline-ternary
    # pattern we replaced (a reference return on the lambda would dangle
    # the moment the lambda exited, since the default branch constructs
    # the value in the lambda's own stack frame).
    type_for_lambda = string_view_owning or _decay_lambda_return_type(cpp_type, is_c_string)
    arg_name = val_name
    return (
        f"([&]() -> {type_for_lambda} {{ "
        f"if ({arg_name}.isUndefined()) return ({rendered_default}); "
        f"if ({arg_name}.isNull()) "
        f"{{ emscripten::val::global(\"Error\").new_(emscripten::val("
        f"\"[rule 5 / strict null] null is not a valid value for this slot — "
        f"pass undefined to use the default\")).throw_(); throw 0; }} "
        f"return {cast}; }})()"
    )


def _decay_lambda_return_type(cpp_type, is_c_string):
    """Return the bare value type to use as the rule-5 lambda's return
    type, stripping const/ref decoration so the lambda materialises a
    temporary rather than returning a reference to a stack-local
    default-constructed value.

    * ``const char*`` cstrings keep the pointer type (pointer-by-value).
    * ``const T&`` decays to ``T``.
    * ``T&`` (non-const ref) is rejected upstream by
      :func:`assert_no_nonconst_ref_in_optional` so we don't reach here.
    * Plain value types are passed through unchanged.
    """
    if is_c_string:
        return "const char*"
    decayed = cpp_type.strip()
    if decayed.endswith("&"):
        decayed = decayed[:-1].rstrip()
    if decayed.startswith("const "):
        decayed = decayed[len("const "):].strip()
    return decayed


def _enumerate_lambda_args(args, n_defaults, accepts_null_per_position):
    """Yield ``(idx, arg, tag, accepts_meaningful_null)`` for each lambda parameter.

    ``accepts_null_per_position`` is a set of position indices that
    carry the row-30 ``accepts_meaningful_null`` opt-in. The default
    (strict-by-default) applies to all other positions.
    """
    n = len(args)
    default_start = n - n_defaults
    for i, a in enumerate(args):
        is_default = (i >= default_start)
        tag = AbsenceTag.DEFAULT_ON_ABSENCE if is_default else None
        accepts_null = i in accepts_null_per_position
        yield i, a, tag, accepts_null


def _emit_truncated_lambda(
    b,
    theClass,
    method,
    *,
    truncate_to,
    template_decl,
    template_args,
    function_command,
    overload_postfix,
    class_cpp,
    accepts_null_per_position,
):
    """Emit a single truncation lambda registration that fixes the trailing
    default args from ``truncate_to`` to ``len(args)`` and only exposes the
    first ``truncate_to`` slots to JS.

    Used by :func:`emit_method_with_val_default` when ``num_truncations > 0``
    (multi-overload classes whose siblings collide with this overload's
    full-arity registration via libembind argCount-grouping). Pinning the
    trailing slots to their C++ defaults lets libembind expose the method at
    arity ``truncate_to`` so type-based overload resolution can disambiguate
    between sibling overloads at the same arity (the canonical
    ``BRepOffsetAPI_MakeFilling.Add(edge, GeomAbs_C0)`` TR-MO case where
    arity-2 must accept both ``(Face, Shape)`` and ``(Edge, Shape)`` so
    libembind can pick by ``arg0`` type).
    """
    args = list(method.get_arguments())
    n_args = len(args)
    result_cpp = b.resolveWithCanonicalFallback(
        method.result_type.spelling, method.result_type, template_decl, template_args,
    )
    lambda_decls = []
    call_arg_exprs = []
    for i in range(truncate_to):
        a = args[i]
        nm = a.spelling if a.spelling else f"arg{i}"
        typ = stringViewOwningType(a.type) or b.getOriginalArgumentType(a, template_decl, template_args)
        if isCString(a.type):
            lambda_decls.append(f"std::string {nm}")
            call_arg_exprs.append(f"{nm}.c_str()")
        else:
            lambda_decls.append(f"{typ} {nm}")
            call_arg_exprs.append(nm)
    for i in range(truncate_to, n_args):
        a = args[i]
        default_expr = b._extractDefaultExpr(a, owning_class=theClass, class_scope=class_cpp) or "{}"
        call_arg_exprs.append(f"({default_expr})")

    if method.is_static_method():
        full_decls = ", ".join(lambda_decls)
        call_expr = f"{class_cpp}::{method.spelling}({', '.join(call_arg_exprs)})"
    else:
        const_self = "const " if method.is_const_method() else ""
        self_decl = f"{const_self}{class_cpp}& self"
        body = ", ".join(lambda_decls)
        full_decls = self_decl if not body else f"{self_decl}, {body}"
        call_expr = f"self.{method.spelling}({', '.join(call_arg_exprs)})"

    return_kw = "" if method.result_type.spelling == "void" else "return "
    binding = (
        f" optional_override([]({full_decls}) -> {result_cpp} {{\n"
        f"      {return_kw}{call_expr};\n"
        f"    }})"
    )
    return (
        f"    .{function_command}(\"{method.spelling}{overload_postfix}\","
        f"{binding}, allow_raw_pointers())\n"
    )


def emit_method_with_val_default(
    b,
    theClass,
    method,
    *,
    template_decl=None,
    template_args=None,
    function_command,
    overload_postfix,
    class_cpp,
    accepts_null_per_position=None,
    emit_truncations=False,
):
    """Emit a single ``.function(…, optional_override([](val arg0, …) { … }), allow_raw_pointers())``
    binding for a method whose trailing default slots use val-with-default.

    The lambda signature uses ``emscripten::val`` for trailing-default
    slots and the natural C++ type for required-input slots. Each
    trailing-default slot is unwrapped per :func:`_val_unwrap_expr`.

    The lambda body forwards to ``self.method(…)`` (instance) or
    ``ClassCpp::method(…)`` (static) and returns the natural result
    type unchanged.

    Returns the emitted string ready to append to the embind block.
    """
    accepts_null_per_position = accepts_null_per_position or set()
    args = list(method.get_arguments())
    n_args = len(args)
    n_def = b._countTrailingDefaults(method)
    n_args - n_def

    result_cpp = b.resolveWithCanonicalFallback(
        method.result_type.spelling, method.result_type, template_decl, template_args,
    )

    lambda_decls = []
    call_arg_exprs = []
    for i, a, tag, accepts_null in _enumerate_lambda_args(args, n_def, accepts_null_per_position):
        nm = a.spelling if a.spelling else f"arg{i}"
        if tag is None:
            # Required input slot — type natively.
            typ = stringViewOwningType(a.type) or b.getOriginalArgumentType(a, template_decl, template_args)
            if isCString(a.type):
                lambda_decls.append(f"std::string {nm}")
                call_arg_exprs.append(f"{nm}.c_str()")
            else:
                lambda_decls.append(f"{typ} {nm}")
                call_arg_exprs.append(nm)
        else:
            # Defaulted slot — val-typed with inline strict/permissive unwrap.
            default_expr = b._extractDefaultExpr(a, owning_class=theClass, class_scope=class_cpp) or "{}"
            lambda_decls.append(f"emscripten::val {nm}")
            call_arg_exprs.append(
                _val_unwrap_expr(b, a, nm, tag, default_expr, accepts_null, template_decl, template_args)
            )

    if method.is_static_method():
        full_decls = ", ".join(lambda_decls)
        call_expr = f"{class_cpp}::{method.spelling}({', '.join(call_arg_exprs)})"
    else:
        const_self = "const " if method.is_const_method() else ""
        self_decl = f"{const_self}{class_cpp}& self"
        body = ", ".join(lambda_decls)
        full_decls = self_decl if not body else f"{self_decl}, {body}"
        call_expr = f"self.{method.spelling}({', '.join(call_arg_exprs)})"

    return_kw = "" if method.result_type.spelling == "void" else "return "
    binding = (
        f" optional_override([]({full_decls}) -> {result_cpp} {{\n"
        f"      {return_kw}{call_expr};\n"
        f"    }})"
    )
    output = (
        f"    .{function_command}(\"{method.spelling}{overload_postfix}\","
        f"{binding}, allow_raw_pointers())\n"
    )

    if emit_truncations and n_def > 0:
        # TR-MO: emit truncation lambdas at each shorter arity so libembind's
        # argCount-grouped dispatcher can pick by type when sibling overloads
        # at the same name collide at intermediate arities. Without these
        # truncations, ``Add(edge, GeomAbs_C0)`` matches the arity-2
        # ``(Face, Shape)`` sibling and fails type conversion before falling
        # through to the arity-3 ``(Edge, Shape, IsBound=true)`` registration.
        for truncate_to in range(n_args - 1, n_args - n_def - 1, -1):
            output += _emit_truncated_lambda(
                b, theClass, method,
                truncate_to=truncate_to,
                template_decl=template_decl,
                template_args=template_args,
                function_command=function_command,
                overload_postfix=overload_postfix,
                class_cpp=class_cpp,
                accepts_null_per_position=accepts_null_per_position,
            )
    return output


def emit_constructor_with_val_default(
    b,
    theClass,
    ctor,
    *,
    template_decl=None,
    template_args=None,
    class_cpp,
    use_handle_override,
    accepts_null_per_position=None,
):
    """Emit a single ``.constructor(optional_override([](val arg0, …) { … }))``
    binding for a constructor whose trailing default slots use val-with-default.

    Mirrors :func:`emit_method_with_val_default` for the constructor
    pipeline. The lambda signature uses ``emscripten::val`` for
    trailing-default slots and the natural C++ type for required-input
    slots; each trailing-default slot is unwrapped per
    :func:`_val_unwrap_expr` (rule-5 strict-null-by-default, with
    permissive null carve-out for accepts-meaningful-null slots).

    The lambda body returns ``new ClassCpp(args…)`` (or the
    handle-override variant) so the rule-5 throw message is emitted on
    every trailing-default slot — closing the constructor-side gap that
    let ``BRepMesh_IncrementalMesh(shape, 0.1, null, …)`` silently
    coerce the explicit null to ``std::nullopt`` → default.
    """
    accepts_null_per_position = accepts_null_per_position or set()
    args = list(ctor.get_arguments())
    len(args)
    n_def = b._countTrailingDefaults(ctor)

    lambda_decls = []
    call_arg_exprs = []
    for i, a, tag, accepts_null in _enumerate_lambda_args(args, n_def, accepts_null_per_position):
        nm = a.spelling if a.spelling else f"arg{i}"
        if tag is None:
            typ = stringViewOwningType(a.type) or b.getOriginalArgumentType(a, template_decl, template_args)
            if isCString(a.type):
                lambda_decls.append(f"std::string {nm}")
                call_arg_exprs.append(f"{nm}.c_str()")
            else:
                lambda_decls.append(f"{typ} {nm}")
                call_arg_exprs.append(nm)
        else:
            default_expr = b._extractDefaultExpr(a, owning_class=theClass, class_scope=class_cpp) or "{}"
            lambda_decls.append(f"emscripten::val {nm}")
            call_arg_exprs.append(
                _val_unwrap_expr(b, a, nm, tag, default_expr, accepts_null, template_decl, template_args)
            )

    full_decls = ", ".join(lambda_decls)
    call_args = ", ".join(call_arg_exprs)

    if use_handle_override:
        body = (
            f"      return opencascade::handle<{class_cpp}>(new {class_cpp}({call_args}));\n"
        )
    else:
        body = f"      return new {class_cpp}({call_args});\n"

    return (
        f"    .constructor(optional_override([]({full_decls}) {{\n"
        f"{body}"
        f"    }}), allow_raw_pointers())\n"
    )
