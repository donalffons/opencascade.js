"""Embind constructor codegen (Phase 2 PR 2.3).

Owns:

* :func:`emit_constructor` — single binding, with optional_override fallback
  for Handle wrapping or CString conversion
* :func:`process_simple_constructor` — primary constructor pipeline
  (single ctor + arity-grouped multi-ctors with default-param expansion and
  val-based dispatch)
* :func:`process_overloaded_constructors` — `_N`-suffixed subclass bindings
  for genuinely ambiguous overloads
* :func:`rewrite_typedef_nested_types` — template typedef rewrite helper
"""

from __future__ import annotations

import re
from collections import defaultdict

import clang.cindex

from filter.filterMethodOrProperties import filterMethodOrProperty
from ocjs_bindgen.codegen import dispatch as _dispatch
from ocjs_bindgen.codegen import val_default as _val_default
from ocjs_bindgen.codegen.wasm_common import SkipException, isTransientDerived
from ocjs_bindgen.naming.cpp import getClassQualifiedName, getClassTypeName
from ocjs_bindgen.naming.ts import getClassJsPublicName
from ocjs_bindgen.predicates.classes import inherited_template_base
from ocjs_bindgen.predicates.optional_emission_guards import (
  assert_no_multi_all_optional_same_arity,
  assert_no_nonconst_ref_in_optional,
  assert_no_val_vs_optional_same_arity,
)
from ocjs_bindgen.predicates.overload_classification import (
  GroupClassificationInputs,
  OverloadDescriptor,
  ParameterDescriptor,
  classify_overload_group,
)
from ocjs_bindgen.predicates.sibling_aliasing import (
  detect_sub2b_pairs,
  extract_ctor_signatures,
)
from ocjs_bindgen.predicates.types import isCString, isRawPointerParam, stringViewOwningType


def _check_optional_emission_guards_for_ctor(b, theClass, ctor, all_ctors, template_decl, template_args):
  """Per-ctor pre-flight: refuse to emit silently-incorrect std::optional binding shapes.

  Runs the three blueprint emit-time guards (R6 non-const-ref, R4
  val-vs-optional same-arity, T1 multi-optional collision) against a
  single candidate ctor in context of its sibling overloads. Raises
  SkipException with a precise diagnostic when triggered, so the caller
  can skip just this ctor rather than aborting the entire class.

  See `docs/research/ocjs-optional-overload-resolution-blueprint.md` —
  Emit-Time Guards (Hard Requirements).
  """
  args = list(ctor.get_arguments())
  n_defaults = b._countTrailingDefaults(ctor)
  if n_defaults <= 0:
    return

  cls_name = theClass.spelling
  ctor_label = f"{cls_name}.constructor"
  arity = len(args)
  optional_args = args[arity - n_defaults:]

  assert_no_nonconst_ref_in_optional(cls_name, ctor_label, optional_args)

  def _get_type_str(arg):
    return b.getOriginalArgumentType(arg, template_decl, template_args)

  same_arity_siblings = [
    other for other in all_ctors
    if other is not ctor and len(list(other.get_arguments())) == arity
  ]
  sibling_arg_lists = [list(other.get_arguments()) for other in same_arity_siblings]
  optional_positions = list(range(arity - n_defaults, arity))
  assert_no_val_vs_optional_same_arity(
    cls_name, ctor_label, optional_positions, sibling_arg_lists, _get_type_str,
  )

  if n_defaults == arity:
    same_arity_all_optional = [
      other for other in same_arity_siblings
      if b._countTrailingDefaults(other) == len(list(other.get_arguments()))
    ]
    if same_arity_all_optional:
      sigs = [
        "(" + ", ".join(_get_type_str(a) for a in args) + ")",
        "(" + ", ".join(_get_type_str(a) for a in list(same_arity_all_optional[0].get_arguments())) + ")",
      ]
      assert_no_multi_all_optional_same_arity(cls_name, ctor_label, sigs)


def rewrite_typedef_nested_types(type_str, class_cpp, underlying_spelling, template_decl):
  """Template typedefs (e.g. `BndBox2dTreeFiller` -> `NCollection_UBTreeFiller<int,Bnd_Box2d>`)
  need nested names like ``Underlying::UBTree`` rewritten to ``class_cpp::UBTree`` so
  constructor templates instantiate the typedef's nested members, not an unspecialized template.
  """
  if template_decl is None or not underlying_spelling or not class_cpp:
    return type_str
  result = type_str.replace(underlying_spelling + "::", class_cpp + "::")
  alias_prefix = class_cpp + "::"
  return re.sub(
    rf"(?<![\w:])(?:[A-Za-z_]\w*::)+(?={re.escape(alias_prefix)})",
    "",
    result,
  )


def emit_constructor(b, class_cpp, args, template_decl, template_args, use_handle_override, underlying_spelling=None, optional_param_count=0, owning_class=None):
  """Emit a single constructor binding.

  Uses the plain ``.constructor<Ts...>()`` form when no override is needed;
  otherwise emits a ``.constructor(optional_override([](...) { ... }))``
  lambda. When ``optional_param_count > 0`` the last N parameters are
  wrapped in ``std::optional<inner_T>`` and the C++ body calls
  ``arg.value_or((default_expr))`` per the blueprint's four mechanical
  translation shapes — replacing the prior arity-truncation fan-out with
  a single dispatch-aware binding. See
  ``docs/research/ocjs-optional-overload-resolution-blueprint.md``.

  When ``owning_class`` (a clang cursor for the enclosing class) is
  supplied, class-scoped identifiers inside each default expression are
  textually qualified with ``<ClassName>::``. Without this, OCCT defaults
  like ``DefaultBlockSize`` (referenced unqualified in the header but
  declared as a class static) become undefined inside the lambda body.
  """
  def rw(s):
    return rewrite_typedef_nested_types(s, class_cpp, underlying_spelling, template_decl)

  n_args = len(args)
  has_c_string = any(isCString(a.type) for a in args)
  has_string_view = any(stringViewOwningType(a.type) is not None for a in args)
  needs_raw = any(isRawPointerParam(a.type) and not isCString(a.type) for a in args)

  if (not use_handle_override
      and not has_c_string
      and not has_string_view
      and not needs_raw
      and optional_param_count == 0):
    arg_types_bindings = ", ".join([
      rw(b.getSingleArgumentBinding(False, True, template_decl, template_args)(arg)[0])
      for arg in args
    ])
    return "    .constructor<" + arg_types_bindings + ">()\n"

  optional_start = n_args - optional_param_count

  named_args = []
  for i, arg in enumerate(args):
    name = arg.spelling if arg.spelling else f"a{i}"
    is_c_string = isCString(arg.type)
    string_view_owning = stringViewOwningType(arg.type)
    is_raw_pointer = isRawPointerParam(arg.type) and not is_c_string
    if i >= optional_start and is_raw_pointer:
      # Raw-pointer trailing defaults can't be wrapped in std::optional<T*>:
      # embind's wire.h:124 static_assert rejects raw pointer types inside
      # std::optional even with `allow_raw_pointers()` applied at the
      # binding level. Keep the pointer slot required at JS level (the
      # binding still functions for full-arity calls; partial-arity calls
      # must pass an explicit value or null).
      type_str = rw(b.getSingleArgumentBinding(False, True, template_decl, template_args)(arg)[0])
      named_args.append((type_str + " " + name, name))
    elif i >= optional_start:
      inner = rw(b._getOptionalInnerType(arg, template_decl, template_args))
      default_expr = b._extractDefaultExpr(arg, owning_class=owning_class, class_scope=class_cpp) or "{}"
      if is_c_string:
        typed = "std::optional<std::string> " + name
        body = name + ".value_or((" + default_expr + ")).c_str()"
        if hasattr(b, "_optional_inner_types") and "std::string" not in b._optional_inner_types:
          b._optional_inner_types.append("std::string")
      elif string_view_owning is not None:
        typed = f"std::optional<{string_view_owning}> {name}"
        body = name + f".value_or({string_view_owning}(" + default_expr + "))"
        if hasattr(b, "_optional_inner_types") and string_view_owning not in b._optional_inner_types:
          b._optional_inner_types.append(string_view_owning)
      else:
        typed = "std::optional<" + inner + "> " + name
        body = name + ".value_or((" + default_expr + "))"
      named_args.append((typed, body))
    else:
      type_str = rw(b.getSingleArgumentBinding(False, True, template_decl, template_args)(arg)[0])
      if is_c_string:
        named_args.append(("std::string " + name, name + ".c_str()"))
      elif string_view_owning is not None:
        named_args.append((f"{string_view_owning} {name}", name))
      else:
        named_args.append((type_str + " " + name, name))
  typed_args = ", ".join([a[0] for a in named_args])
  arg_names = ", ".join([a[1] for a in named_args])

  if use_handle_override:
    return (
      "    .constructor(optional_override([](" + typed_args + ") {\n"
      "      return opencascade::handle<" + class_cpp + ">(new " + class_cpp + "(" + arg_names + "));\n"
      "    }))\n"
    )

  return (
    "    .constructor(optional_override([](" + typed_args + ") {\n"
    "      return new " + class_cpp + "(" + arg_names + ");\n"
    "    }), allow_raw_pointers())\n"
  )


def _classify_ctor(b, theClass, class_cpp, ctor, sibling_count, template_decl, template_args):
  """Classify a single constructor against the policy matrix using the
  shared overload classifier. Mirrors the per-method classification in
  :mod:`ocjs_bindgen.codegen.bindings` (around line 2157) so constructor
  trailing defaults route through the same row-1/2/24/30/33/34/36
  emission strategies as method trailing defaults.

  The bindgen previously emitted every trailing-default constructor via
  ``std::optional<T>`` which silently coerced explicit ``null`` to the
  default — violating policy rule 5 (strict-null-by-default). Wiring
  the classifier here restores parity with the method path.
  """
  from ocjs_bindgen.codegen.bindings import (
    _accepts_meaningful_null,
    _is_canonical_optional_default,
  )
  args = list(ctor.get_arguments())
  n_args = len(args)
  n_defaults = b._countTrailingDefaults(ctor)
  default_start = n_args - n_defaults

  parameters = tuple(
    ParameterDescriptor(
      type_name=b.getOriginalArgumentType(a, template_decl, template_args),
      is_trailing_default=(i >= default_start),
      is_cstring=isCString(a.type),
      is_raw_pointer=isRawPointerParam(a.type) and not isCString(a.type),
      is_canonical_optional_default=(
        i >= default_start
        and _is_canonical_optional_default(b, a, theClass, class_cpp, template_decl, template_args)
      ),
      accepts_meaningful_null=(
        i >= default_start
        and _accepts_meaningful_null(b, a, theClass, class_cpp, template_decl, template_args)
      ),
    )
    for i, a in enumerate(args)
  )
  descriptor = OverloadDescriptor(
    parameters=parameters,
    is_constructor=True,
    is_static=False,
    sibling_count=max(0, sibling_count),
  )
  inputs = GroupClassificationInputs(
    overloads=(descriptor,),
    has_sibling_aliasing=False,
    has_output_params=False,
  )
  return descriptor, classify_overload_group(inputs)


def _val_to_cpp_arg(b, arg, val_name, has_default, default_expr, template_decl, template_args, accepts_meaningful_null=False):
  """Emit the C++ expression that lifts ``emscripten::val val_name`` to ``arg``'s C++ type.

  When ``has_default`` is True the expression honors policy rule 5
  (strict-by-default null/undefined):

  * ``undefined`` collapses to ``default_expr`` (the trailing default).
  * ``null`` throws a structured rule-5 ``BindingError`` (matching
    ``smoke-rule-5-strict-null-rejection.test.ts``).
  * The row-30 carve-out (``accepts_meaningful_null=True``) reverts to
    the permissive ``(isUndefined() || isNull()) ? D : ...`` shape
    because the C++ source admits ``null`` as a meaningful sentinel.

  Shares the throw expression with
  :func:`ocjs_bindgen.codegen.val_default._val_unwrap_expr` so sub-2a /
  sub-2b coordinator emission stays in lock-step with the single-overload
  val-default emission path.
  """
  cpp_type = b.getOriginalArgumentType(arg, template_decl, template_args)
  js_type = b._classify_js_type(arg.type, template_decl, template_args)
  string_view_owning = stringViewOwningType(arg.type)
  if string_view_owning is not None:
    # Embind cannot bind a non-owning std::*string_view; lift through the
    # registered owning std::*string (see stringViewOwningCast).
    cast = f"{val_name}.as<{string_view_owning}>()"
  elif js_type.category == 'object':
    cast = f"{val_name}.as<{cpp_type}>(emscripten::allow_raw_pointers())"
  elif js_type.category == 'string' and isCString(arg.type):
    cast = f"{val_name}.as<std::string>().c_str()"
  else:
    canon = arg.type.get_canonical().spelling
    if "type-parameter-" in canon:
      canon = b.resolveWithCanonicalFallback(arg.type.spelling, arg.type, template_decl, template_args)
    cast = f"{val_name}.as<{canon}>()"
  if not has_default:
    return cast
  if accepts_meaningful_null:
    # Row 30 — permissive null/undefined collapse (handle reporter sentinel).
    return f"(({val_name}.isUndefined() || {val_name}.isNull()) ? ({default_expr}) : {cast})"
  # Rule 5 strict-null: undefined → default, null → BindingError.
  # Decay the lambda return type so we materialise a temporary at the
  # call site rather than dangling a reference to a stack-local default.
  from ocjs_bindgen.codegen.val_default import _decay_lambda_return_type
  is_c_string_local = js_type.category == 'string' and isCString(arg.type)
  if string_view_owning is not None:
    # Return the owning std::*string by value so the materialised temporary
    # (which the string_view param will reference) outlives the call.
    type_for_lambda = string_view_owning
  else:
    type_for_lambda = _decay_lambda_return_type(cpp_type, is_c_string_local)
  return (
    f"([&]() -> {type_for_lambda} {{ "
    f"if ({val_name}.isUndefined()) return ({default_expr}); "
    f"if ({val_name}.isNull()) "
    f"{{ emscripten::val::global(\"Error\").new_(emscripten::val("
    f"\"[rule 5 / strict null] null is not a valid value for this slot — "
    f"pass undefined to use the default\")).throw_(); throw 0; }} "
    f"return {cast}; }})()"
  )


def _emit_ctor_call_from_val_args(b, class_cpp, ctor, n_val_args, use_handle_override, template_decl, template_args, owning_class, indent_spaces):
  """Build ``return new ClassCpp(<conv0>, <conv1>, ...);`` (or the handle-override variant)
  reading the first ``len(ctor.args)`` of ``arg0..arg{n_val_args-1}`` and unwrapping
  trailing-default slots via ``isUndefined()/isNull() ? default : val.as<T>()``.

  Used by :func:`emit_sibling_aliased_constructor` to materialise both
  the smaller- and larger-arity ctor branches inside one
  ``optional_override`` lambda body. The smaller ctor reads
  ``arg0..arg{n_smaller-1}`` (trailing arg{nL-1} of the lambda is
  ignored by the smaller branch); the larger ctor reads all
  ``arg0..arg{n_larger-1}``.
  """
  from ocjs_bindgen.codegen.bindings import _accepts_meaningful_null
  args = list(ctor.get_arguments())
  n_args = len(args)
  n_def = b._countTrailingDefaults(ctor)
  default_start = n_args - n_def
  exprs = []
  for i, a in enumerate(args):
    val_name = f"arg{i}"
    is_default = (i >= default_start)
    is_raw_pointer = isRawPointerParam(a.type) and not isCString(a.type)
    if is_default and is_raw_pointer:
      # Raw-pointer trailing default: caller must supply explicitly,
      # mirroring the rule applied in :func:`emit_constructor` (embind
      # rejects std::optional<T*> via wire.h:124 static_assert). For the
      # sub-2b val path we still read the slot as a raw pointer.
      cpp_type = b.getOriginalArgumentType(a, template_decl, template_args)
      exprs.append(f"{val_name}.as<{cpp_type}>(emscripten::allow_raw_pointers())")
      continue
    if is_default:
      default_expr = b._extractDefaultExpr(a, owning_class=owning_class, class_scope=class_cpp) or "{}"
      accepts_null = _accepts_meaningful_null(
        b, a, owning_class, class_cpp, template_decl, template_args,
      )
    else:
      default_expr = None
      accepts_null = False
    exprs.append(_val_to_cpp_arg(
      b, a, val_name, is_default, default_expr, template_decl, template_args,
      accepts_meaningful_null=accepts_null,
    ))
  pad = " " * indent_spaces
  call_args = ", ".join(exprs)
  if use_handle_override:
    return f"{pad}return opencascade::handle<{class_cpp}>(new {class_cpp}({call_args}));\n"
  return f"{pad}return new {class_cpp}({call_args});\n"


def _arg_type_check_expr(arg_name, js_type):
  """Render a type-check expression for ``arg_name`` against ``js_type``.

  Used by sub-2b emission (always ``arg0``) and sub-2a emission (any
  ``arg{disc_pos}``). The ``arg_name`` must be a valid C++ identifier
  referring to an in-scope ``emscripten::val``.
  """
  cat = js_type.category
  if cat == 'object':
    return (
      f'{arg_name}.typeOf().as<std::string>() == "object"'
      f' && !emscripten::val::module_property("{js_type.name}").isUndefined()'
      f' && {arg_name}.instanceof(emscripten::val::module_property("{js_type.name}"))'
    )
  if cat == 'boolean':
    return f'{arg_name}.typeOf().as<std::string>() == "boolean"'
  if cat == 'string_enum':
    return (
      f'{arg_name}.typeOf().as<std::string>() == "string"'
      f' && !emscripten::val::module_property("{js_type.name}")'
      f'[{arg_name}.as<std::string>()].isUndefined()'
    )
  if cat == 'string':
    return f'{arg_name}.typeOf().as<std::string>() == "string"'
  if cat == 'number_int':
    return f'{arg_name}.typeOf().as<std::string>() == "number" && emscripten::val::global("Number").call<bool>("isInteger", {arg_name})'
  if cat == 'number_float':
    return f'{arg_name}.typeOf().as<std::string>() == "number"'
  return f'{arg_name}.typeOf().as<std::string>() == "object"'


def _arg0_type_check_expr(js_type):
  """Render the ``arg0`` type-check expression used to discriminate
  between the smaller- and larger-arity ctor inside a sub-2b val-dispatch lambda.

  Mirrors the predicate emission used by
  :func:`ocjs_bindgen.codegen.dispatch._emit_branch_chain`; kept local
  because sub-2b emits only a single 2-way branch and does not need the
  full tree machinery.
  """
  return _arg_type_check_expr('arg0', js_type)


def emit_sibling_aliased_constructor(
  b,
  class_cpp,
  smaller_ctor,
  larger_ctor,
  use_handle_override,
  template_decl,
  template_args,
  owning_class,
):
  """Emit a single ``emscripten::val``-discriminated constructor that
  collapses a sub-2b conflict pair (matrix row 8) into one binding at
  the larger arity.

  Dispatch shape:

  .. code-block:: cpp

    .constructor(optional_override([](val arg0, val arg1, ...) -> ClassPtr {
      if (<arg0 is the larger ctor's discriminator type>) {
        return new ClassCpp(<larger.params[0] from arg0>, ...,
                            <larger.params[-1] from arg{nL-1}, with value_or>);
      } else {
        return new ClassCpp(<smaller.params[0] from arg0>, ...,
                            <smaller.params[-1] from arg{nS-1}, with value_or>);
      }
    }))

  The ``else`` branch is the smaller ctor; when the smaller ctor is
  zero-arity it materialises as ``return new ClassCpp();`` (no args
  read). The ``if`` branch is the larger ctor; it reads every val arg
  and unwraps trailing-default slots inline.

  Why this routing wins: at JS call ``new ClassCpp(face)`` the
  discriminator picks the larger branch (``face`` is the larger ctor's
  ``params[0]`` type) and constructs the full-arity ctor with
  ``arg1.value_or(default)``. At JS call ``new ClassCpp()`` /
  ``new ClassCpp(true)`` the discriminator picks the smaller branch
  (``arg0`` is undefined or boolean, not the larger's discriminator
  type) and constructs the smaller ctor with ``arg0.value_or(default)``.
  No libembind optional-wildcard short-circuit is involved; the
  bindgen owns dispatch ambiguity prevention per policy rule 5.
  """
  larger_args = list(larger_ctor.get_arguments())
  n_larger = len(larger_args)

  val_args_decl = ", ".join(f"emscripten::val arg{i}" for i in range(n_larger))

  if use_handle_override:
    ret_type = f"opencascade::handle<{class_cpp}>"
  else:
    ret_type = f"{class_cpp}*"

  larger_arg0_jstype = b._classify_js_type(larger_args[0].type, template_decl, template_args)
  check = _arg0_type_check_expr(larger_arg0_jstype)

  output = f"    .constructor(optional_override([]({val_args_decl}) -> {ret_type} {{\n"
  output += f"      if ({check}) {{\n"
  output += _emit_ctor_call_from_val_args(
    b, class_cpp, larger_ctor, n_larger, use_handle_override,
    template_decl, template_args, owning_class, indent_spaces=8,
  )
  output += "      } else {\n"
  output += _emit_ctor_call_from_val_args(
    b, class_cpp, smaller_ctor, n_larger, use_handle_override,
    template_decl, template_args, owning_class, indent_spaces=8,
  )
  output += "      }\n"
  output += "    }))\n"
  return output


def _detect_sub2a_cross_arity_pairs(b, bindable, template_decl, template_args):
  """Find cross-arity overload pairs whose JS-effective arity ranges overlap
  AND whose first non-shared parameter is JS-distinguishable (sub-2a).

  Sub-2a is the cross-arity sibling of sub-2b. Sub-2b detects prefix
  shadowing (``B.params[1:] == A.params`` with ``A``'s last slot
  defaulted); sub-2a detects the broader case where ctors of different
  full arities have overlapping JS-arity ranges through trailing
  defaults, AND the first divergent positional type is
  JS-distinguishable. Without this detector, libembind's arity-padding
  routes intermediate-arity calls to whichever ctor was registered
  first, even when the caller's argument type clearly matches a
  different overload.

  Canonical production case: ``BRepMesh_IncrementalMesh`` has

  * ``(TopoDS_Shape, IMeshTools_Parameters, Message_ProgressRange = …)``
    — full arity 3, JS-arities {1, 2, 3}.
  * ``(TopoDS_Shape, double, bool = …, double = …, bool = …)`` — full
    arity 5, JS-arities {1, 2, 3, 4, 5}.

  JS arities {1, 2, 3} overlap. Position 0 (shape) matches; position 1
  diverges (``IMeshTools_Parameters`` vs ``double``) and is
  JS-distinguishable (object vs number). Calls like
  ``new BRepMesh_IncrementalMesh(shape, 0.1)`` should route to the
  arity-5 ctor's scalar fan-out, but libembind pads to the arity-3
  registration first and throws ``Cannot pass "0.1" as a
  IMeshTools_Parameters``. The sub-2a coordinator at the larger arity
  discriminates by ``arg1`` type and routes correctly.

  Returns a list of ``(smaller_idx, larger_idx, disc_pos, larger_js_type)``
  tuples; each pair is consumed by :func:`_emit_sub2a_coordinator`.
  Skips pairs that are already sub-2b (prefix-shadow) — those are
  handled by the dedicated sub-2b emitter at the larger arity.
  """
  pairs = []
  n = len(bindable)
  for i in range(n):
    for j in range(i + 1, n):
      a_args = list(bindable[i].get_arguments())
      b_args = list(bindable[j].get_arguments())
      na, nb = len(a_args), len(b_args)
      if na == nb:
        # Same-arity collisions are handled by the per-arity dispatch
        # tree below.
        continue
      if na < nb:
        short_idx, short_args = i, a_args
        long_idx, long_args = j, b_args
      else:
        short_idx, short_args = j, b_args
        long_idx, long_args = i, a_args
      n_short, n_long = len(short_args), len(long_args)
      ndef_short = b._countTrailingDefaults(bindable[short_idx])
      ndef_long = b._countTrailingDefaults(bindable[long_idx])
      short_jsmin = n_short - ndef_short
      short_jsmax = n_short
      long_jsmin = n_long - ndef_long
      long_jsmax = n_long
      overlap_min = max(short_jsmin, long_jsmin)
      overlap_max = min(short_jsmax, long_jsmax)
      if overlap_min > overlap_max:
        continue
      # libembind's arity-padding only mis-routes when the JS arity is
      # STRICTLY LESS than the smaller ctor's full arity — at that point
      # libembind pads up to the smaller's registered arity and applies
      # the smaller's typed signature to args the caller intended for
      # the larger ctor. When the overlap is contained entirely within
      # ``[n_short, n_long]`` (i.e. ``overlap_min >= n_short``), the
      # smaller ctor registers at its exact arity and direct JS calls
      # never trigger padding ambiguity (e.g. TCollection_AsciiString:
      # smaller ``(const char*)`` arity-1, larger
      # ``(TCollection_ExtendedString&, char=0)`` arity-2; JS arity 1
      # matches the smaller exactly and JS arity 2 matches the larger
      # exactly, so no padding conflict exists). Only fire sub-2a when
      # ``overlap_min < n_short``.
      if overlap_min >= n_short:
        continue
      shared = 0
      while shared < n_short:
        ta = b.getOriginalArgumentType(short_args[shared], template_decl, template_args)
        tb = b.getOriginalArgumentType(long_args[shared], template_decl, template_args)
        if ta != tb:
          break
        shared += 1
      if shared == n_short:
        # Short is a prefix of long → sub-2b detector covers this
        # (or it's a degenerate zero-arity case).
        continue
      short_js = b._classify_js_type(short_args[shared].type, template_decl, template_args)
      long_js = b._classify_js_type(long_args[shared].type, template_decl, template_args)
      # Coarse-equivalence check: same category AND same name means
      # JS-indistinguishable (e.g. two ``object(SomeShape)`` types).
      if short_js.category == long_js.category and short_js.name == long_js.name:
        continue
      pairs.append((short_idx, long_idx, shared, long_js))
  return pairs


def _emit_sub2a_coordinator(b, class_cpp, smaller_ctor, larger_ctor, disc_pos, larger_js_type,
                              use_handle_override, template_decl, template_args, owning_class):
  """Emit a single coordinator constructor at the larger arity that
  discriminates between the smaller- and larger-arity ctor by the
  type of ``arg{disc_pos}``.

  Mirrors :func:`emit_sibling_aliased_constructor` (sub-2b) but at an
  arbitrary discriminator position rather than ``arg0``. The smaller
  ctor's branch reads the first ``len(smaller.args)`` val args; the
  larger ctor's branch reads all ``len(larger.args)`` val args. Trailing
  defaults are unwrapped inline via
  :func:`_emit_ctor_call_from_val_args`.

  Discriminator condition: ``if (arg{disc_pos} matches larger_js_type)``
  routes to the larger ctor; ``else`` routes to the smaller. At JS-arity
  ``disc_pos`` the discriminator slot is ``isUndefined`` for the
  smaller-only caller, so the else branch fires. Note this requires the
  smaller ctor's type at ``disc_pos`` to NOT match ``larger_js_type``
  (which is exactly the JS-distinguishable precondition asserted by
  :func:`_detect_sub2a_cross_arity_pairs`).
  """
  larger_args = list(larger_ctor.get_arguments())
  n_larger = len(larger_args)
  val_args_decl = ", ".join(f"emscripten::val arg{i}" for i in range(n_larger))
  if use_handle_override:
    ret_type = f"opencascade::handle<{class_cpp}>"
  else:
    ret_type = f"{class_cpp}*"
  check = _arg_type_check_expr(f"arg{disc_pos}", larger_js_type)
  output = f"    .constructor(optional_override([]({val_args_decl}) -> {ret_type} {{\n"
  output += f"      if ({check}) {{\n"
  output += _emit_ctor_call_from_val_args(
    b, class_cpp, larger_ctor, n_larger, use_handle_override,
    template_decl, template_args, owning_class, indent_spaces=8,
  )
  output += "      } else {\n"
  output += _emit_ctor_call_from_val_args(
    b, class_cpp, smaller_ctor, n_larger, use_handle_override,
    template_decl, template_args, owning_class, indent_spaces=8,
  )
  output += "      }\n"
  output += "    }))\n"
  return output


def _merged_default_aware_tree(b, tree, class_cpp, arity, use_handle_override, template_decl, template_args, owning_class, ind):
  """Render a dispatch ``tree`` (built by :func:`build_dispatch_tree`) into
  C++ with **default-aware** leaves.

  Unlike :func:`ocjs_bindgen.codegen.dispatch.codegen_dispatch_tree` (which
  reads every positional slot via a bare ``argN.as<T>()``), every leaf here
  routes through :func:`_emit_ctor_call_from_val_args`, so trailing-default
  slots are unwrapped with the rule-5 ``isUndefined()/isNull()`` guard. This
  is required when a cross-arity ctor is folded into a higher arity bucket
  (e.g. ``(gp_Ax2, StepData_Factors = default)`` reached at JS-arity 1 with
  ``arg1`` undefined): the bare cast would throw on the missing slot.

  Reuses :func:`ocjs_bindgen.codegen.dispatch._emit_branch_chain` so the
  branch ordering / type-check predicates stay identical to the rest of the
  dispatch pipeline; only the leaf emission differs.
  """
  if isinstance(tree, _dispatch.DispatchLeaf):
    return _emit_ctor_call_from_val_args(
      b, class_cpp, tree.overload, arity, use_handle_override,
      template_decl, template_args, owning_class, indent_spaces=ind,
    )
  if isinstance(tree, _dispatch.DispatchBranch):
    sp = " " * ind
    branch_code = _dispatch._emit_branch_chain(
      lambda subtree, sub_ind: _merged_default_aware_tree(
        b, subtree, class_cpp, arity, use_handle_override,
        template_decl, template_args, owning_class, sub_ind,
      ),
      tree,
      sp,
    )
    defaultable = []
    for subtree in tree.branches.values():
      overloads = _tree_overloads(subtree)
      if any(_ctor_accepts_undefined_at(b, overload, tree.arg_position) for overload in overloads):
        defaultable.append(subtree)
    if len(defaultable) != 1:
      return branch_code

    # A missing JS argument has no runtime type, so the normal type chain's
    # terminal ``else`` would route it to an arbitrary required object
    # overload. When exactly one branch owns a trailing default at the
    # discriminator position, make that ownership explicit before applying
    # the ordinary type checks. This is the constructor equivalent of C++
    # overload resolution for an omitted defaulted argument.
    default_code = _merged_default_aware_tree(
      b, defaultable[0], class_cpp, arity, use_handle_override,
      template_decl, template_args, owning_class, ind + 2,
    )
    nested_branch_code = _dispatch._emit_branch_chain(
      lambda subtree, sub_ind: _merged_default_aware_tree(
        b, subtree, class_cpp, arity, use_handle_override,
        template_decl, template_args, owning_class, sub_ind,
      ),
      tree,
      " " * (ind + 2),
    )
    return (
      f"{sp}if (arg{tree.arg_position}.isUndefined()) {{\n"
      f"{default_code}{sp}}}\n"
      f"{sp}else {{\n{nested_branch_code}{sp}}}\n"
    )
  if isinstance(tree, _dispatch.DispatchAmbiguous):
    return _merged_default_aware_tree(
      b, _dispatch.DispatchLeaf(tree.overloads[0]), class_cpp, arity,
      use_handle_override, template_decl, template_args, owning_class, ind,
    )
  return ""


def _tree_overloads(tree):
  """Return every constructor cursor reachable from a dispatch subtree."""
  if isinstance(tree, _dispatch.DispatchLeaf):
    return [tree.overload]
  if isinstance(tree, _dispatch.DispatchAmbiguous):
    return list(tree.overloads)
  if isinstance(tree, _dispatch.DispatchBranch):
    return [
      overload
      for subtree in tree.branches.values()
      for overload in _tree_overloads(subtree)
    ]
  return []


def _ctor_accepts_undefined_at(b, ctor, position):
  """Whether ``position`` is one of ``ctor``'s trailing-default slots."""
  args = list(ctor.get_arguments())
  if position >= len(args):
    return False
  n_defaults = b._countTrailingDefaults(ctor)
  return n_defaults > 0 and position >= len(args) - n_defaults


def _primary_vs_fallback_guard(b, primary_ctor, fallback_ctors, template_decl, template_args):
  """Return a C++ boolean expression that is true iff the JS args match
  ``primary_ctor`` specifically (and must therefore NOT route to any of the
  folded ``fallback_ctors``).

  The fallbacks are lower-arity, all-trailing-defaults overloads folded into
  this arity bucket; they form the catch-all ``else``. The primary must be
  selected only when its *distinctive* argument type is present at the first
  position where it diverges from each fallback — guarding on ``arg0`` alone
  is wrong whenever the primary and a fallback share their leading argument
  type (e.g. ``GeomAPI_PointsToBSpline(Points, Parameters, …)`` vs the folded
  ``(Points, DegMin, …)``: both lead with ``Points``, so a numeric / absent
  ``arg1`` must fall through to the fallback rather than be cast to the
  primary's ``Parameters`` array).

  For a pure prefix-shadow fallback (identical leading types, shorter arity)
  the discriminator is the *presence* (defined-ness) of the first slot beyond
  the fallback's arity — the primary owns an extra leading slot the fallback
  does not, so it is selected only when that slot is supplied.

  Returns ``None`` when no fallbacks are supplied (caller keeps the
  single-branch behaviour).
  """
  if not fallback_ctors:
    return None
  primary_js = [
    b._classify_js_type(a.type, template_decl, template_args)
    for a in primary_ctor.get_arguments()
  ]
  clauses = []
  for fb in fallback_ctors:
    fb_js = [
      b._classify_js_type(a.type, template_decl, template_args)
      for a in fb.get_arguments()
    ]
    diff_pos = next(
      (p for p in range(min(len(primary_js), len(fb_js))) if primary_js[p] != fb_js[p]),
      None,
    )
    if diff_pos is not None:
      clauses.append(_arg_type_check_expr(f"arg{diff_pos}", primary_js[diff_pos]))
    elif len(fb_js) < len(primary_js):
      # Pure prefix-shadow: select the primary only when its first
      # extra (beyond-fallback) slot is actually supplied.
      clauses.append(f"!arg{len(fb_js)}.isUndefined()")
  # Deduplicate while preserving order so a shared discriminator across
  # multiple fallbacks is not repeated.
  seen = set()
  uniq = [c for c in clauses if not (c in seen or seen.add(c))]
  if not uniq:
    return None
  return " && ".join(f"({c})" for c in uniq)


def _emit_primary_chain_with_fallback(b, tree, class_cpp, arity, use_handle_override, template_decl, template_args, owning_class, ind, fallback_code, fallback_ctors=None):
  """Emit the top-level primary dispatch as a fully-conditional
  ``if / else if`` chain terminated by an explicit ``else { fallback_code }``.

  :func:`ocjs_bindgen.codegen.dispatch._emit_branch_chain` turns the *last*
  branch into a bare ``else`` (an exhaustive assumption that holds for a
  same-arity group). When we fold a cross-arity smaller ctor in as the
  fallback, that assumption breaks: the terminal ``else`` must run the
  *smaller* ctor (the all-defaults / undefined-arg0 case), not the last
  primary. So every primary branch gets an explicit type-check predicate and
  the smaller ctor's dispatch becomes the catch-all ``else``.

  The branch ordering mirrors ``_emit_branch_chain`` (primitives sorted
  first, objects last) so the generated chain reads consistently with the
  rest of the pipeline.
  """
  sp = " " * ind
  if fallback_code is not None:
    primary_guards = [
      _primary_vs_fallback_guard(
        b, primary, fallback_ctors, template_decl, template_args,
      )
      for primary in _tree_overloads(tree)
    ]
    if primary_guards and all(primary_guards):
      # The primary overloads may first branch on a later parameter even
      # though every primary shares an earlier type that distinguishes the
      # whole family from the folded fallbacks. Guard the family first, then
      # run its internal dispatch. Otherwise a numeric later argument can
      # select a primary whose required leading object does not match.
      seen = set()
      unique_guards = [
        guard for guard in primary_guards
        if not (guard in seen or seen.add(guard))
      ]
      family_guard = " || ".join(f"({guard})" for guard in unique_guards)
      primary_code = _merged_default_aware_tree(
        b, tree, class_cpp, arity, use_handle_override,
        template_decl, template_args, owning_class, ind + 2,
      )
      return (
        f"{sp}if ({family_guard}) {{\n{primary_code}{sp}}}\n"
        f"{sp}else {{\n{fallback_code}{sp}}}\n"
      )

  if not isinstance(tree, _dispatch.DispatchBranch):
    # The primaries collapsed to a single reachable leaf — either one
    # genuine primary, or a set of JS-indistinguishable primaries (e.g.
    # NCollection's ``size_t`` / ``Standard_Integer`` ctor duals, which
    # are the same ``number`` overload in JS so only one is reachable).
    # We must STILL guard it so the folded cross-arity fallback stays
    # reachable. The guard discriminates on the position where the primary
    # *diverges* from the fallback(s) (NOT blindly ``arg0`` — primary and
    # fallback frequently share their leading argument type), using the
    # primary's distinctive type so undefined / non-matching trailing slots
    # fall through to the all-defaults fallback ``else``.
    primary_ctor = tree.overload if isinstance(tree, _dispatch.DispatchLeaf) else tree.overloads[0]
    primary_code = _merged_default_aware_tree(
      b, tree, class_cpp, arity, use_handle_override,
      template_decl, template_args, owning_class, ind + 2,
    )
    if fallback_code is None:
      return _merged_default_aware_tree(
        b, tree, class_cpp, arity, use_handle_override,
        template_decl, template_args, owning_class, ind,
      )
    check = _primary_vs_fallback_guard(b, primary_ctor, fallback_ctors, template_decl, template_args)
    if check is None:
      primary_args = list(primary_ctor.get_arguments())
      arg0_js = b._classify_js_type(primary_args[0].type, template_decl, template_args)
      check = _arg_type_check_expr("arg0", arg0_js)
    code = f"{sp}if ({check}) {{\n{primary_code}{sp}}}\n"
    code += f"{sp}else {{\n{fallback_code}{sp}}}\n"
    return code

  primitives = []
  objects = []
  for js_type, subtree in tree.branches.items():
    if js_type.category == 'object':
      objects.append((js_type, subtree))
    else:
      primitives.append((js_type, subtree))
  primitives.sort(key=_dispatch.dispatch_primitive_sort_key)
  ordered = primitives + objects

  code = ""
  for idx, (js_type, subtree) in enumerate(ordered):
    keyword = "if" if idx == 0 else "else if"
    check = _arg_type_check_expr(f"arg{tree.arg_position}", js_type)
    code += f"{sp}{keyword} ({check}) {{\n"
    code += _merged_default_aware_tree(
      b, subtree, class_cpp, arity, use_handle_override,
      template_decl, template_args, owning_class, ind + 2,
    )
    code += f"{sp}}}\n"
  if fallback_code is not None:
    code += f"{sp}else {{\n{fallback_code}{sp}}}\n"
  return code


def _emit_merged_arity_dispatch(b, class_cpp, arity, primaries, fallbacks, use_handle_override, template_decl, template_args, owning_class):
  """Emit ONE ``optional_override`` val-dispatch constructor at ``arity`` that
  covers every same-arity ``primaries`` ctor **and** the cross-arity
  ``fallbacks`` ctors folded down from a deferred sub-2a / sub-2b coordinator.

  This is the collision-safe replacement for emitting a 2-way coordinator
  *and* a separate per-arity val-dispatch lambda at the same arity (which
  embind rejects at registration time — "Cannot register multiple
  constructors with identical javascript types of parameters"). The single
  lambda dispatches the primaries by argument type (default-aware leaves) and
  falls through to the smaller ctor(s) for the undefined / non-matching
  ``arg0`` case.

  ``primaries`` MUST be non-empty (the surviving full-arity-``arity`` ctors);
  ``fallbacks`` are the cross-arity smaller ctors (full arity < ``arity``)
  that were relocated here so libembind's arity-padding can no longer
  mis-route their intermediate-arity calls.
  """
  val_args = ", ".join(f"emscripten::val arg{i}" for i in range(arity))
  ret_type = f"opencascade::handle<{class_cpp}>" if use_handle_override else f"{class_cpp}*"

  if len(primaries) > 1:
    prim_tree = _dispatch.build_dispatch_tree(
      b, primaries, available_positions=list(range(arity)),
      templateDecl=template_decl, templateArgs=template_args,
    )
  else:
    prim_tree = _dispatch.DispatchLeaf(primaries[0])

  if fallbacks:
    if len(fallbacks) > 1:
      fb_tree = _dispatch.build_dispatch_tree(
        b, fallbacks, available_positions=list(range(arity)),
        templateDecl=template_decl, templateArgs=template_args,
      )
    else:
      fb_tree = _dispatch.DispatchLeaf(fallbacks[0])
    fallback_code = _merged_default_aware_tree(
      b, fb_tree, class_cpp, arity, use_handle_override,
      template_decl, template_args, owning_class, ind=8,
    )
  else:
    fallback_code = None

  output = f"    .constructor(optional_override([]({val_args}) -> {ret_type} {{\n"
  output += _emit_primary_chain_with_fallback(
    b, prim_tree, class_cpp, arity, use_handle_override,
    template_decl, template_args, owning_class, ind=6, fallback_code=fallback_code,
    fallback_ctors=fallbacks,
  )
  if use_handle_override:
    output += f"      return opencascade::handle<{class_cpp}>();\n"
  else:
    output += "      return nullptr;\n"
  output += "    }))\n"
  return output


def _detect_and_emit_sub2a(b, theClass, class_cpp, bindable, use_handle_override, template_decl, template_args, forbidden_arities=None):
  """Detect sub-2a cross-arity conflicts and emit coordinator ctors.

  Returns ``(emitted_str, paired_indices, fold_pairs)``. Each emitted
  coordinator collapses one (smaller, larger) pair into a single
  val-dispatch lambda at the larger arity. Indices in ``paired_indices``
  must be skipped by the regular per-arity emission below.

  ``forbidden_arities`` is the set of arities that already host a
  multi-ctor per-arity group (>= 2 full-arity ctors). Emitting a 2-way
  coordinator at such an arity would collide with the per-arity
  val-dispatch lambda (embind rejects duplicate same-arity val-ctor
  registrations). For those pairs we DEFER the coordinator and instead
  emit a ``fold_pairs`` entry ``(smaller_ctor, larger_arity)``: the
  caller relocates the smaller ctor into the larger arity bucket so a
  single merged :func:`_emit_merged_arity_dispatch` lambda covers both
  the smaller and the same-arity primaries.

  Multi-pair handling: if a single ctor participates in multiple pairs
  the first emitted coordinator at the larger arity claims that ctor.
  Subsequent pairs whose smaller has already been claimed are skipped.
  """
  forbidden_arities = forbidden_arities or set()
  pairs = _detect_sub2a_cross_arity_pairs(b, bindable, template_decl, template_args)
  if not pairs:
    return "", set(), []

  output = ""
  paired = set()
  folds = []
  class_name = theClass.spelling
  arities_emitted: set[int] = set()
  for short_idx, long_idx, disc_pos, long_js in pairs:
    if short_idx in paired or long_idx in paired:
      print(
        f"[sub-2a / cross-arity] {class_name}: skipping overlapping pair "
        f"(ctor#{short_idx} / ctor#{long_idx}) — already merged into a "
        f"prior coordinator."
      )
      continue
    larger_ctor = bindable[long_idx]
    smaller_ctor = bindable[short_idx]
    n_larger = len(list(larger_ctor.get_arguments()))
    if n_larger in forbidden_arities:
      print(
        f"[sub-2a / cross-arity] {class_name}: folding pair "
        f"(ctor#{short_idx} / ctor#{long_idx}) into the arity-{n_larger} "
        f"per-arity dispatch — larger arity hosts a multi-ctor group, so a "
        f"separate coordinator would duplicate the same-arity val-ctor "
        f"registration. Smaller ctor relocated as the merged-dispatch fallback."
      )
      folds.append((smaller_ctor, n_larger))
      paired.add(short_idx)
      continue
    if n_larger in arities_emitted:
      print(
        f"[sub-2a / cross-arity] {class_name}: deferring pair "
        f"(ctor#{short_idx} / ctor#{long_idx}) — larger arity {n_larger} "
        f"already claimed by a prior coordinator; embind rejects duplicate "
        f"same-arity val-ctor registrations."
      )
      continue
    print(
      f"[sub-2a / cross-arity] {class_name}: emitting coordinator at "
      f"larger_arity={n_larger}, discriminator position={disc_pos}, "
      f"larger js_type={long_js.category}({long_js.name}) — routes "
      f"(shape, scalar, ...) to scalar fan-out and "
      f"(shape, {long_js.name}, ...) to {long_js.name} fan-out."
    )
    output += _emit_sub2a_coordinator(
      b, class_cpp, smaller_ctor, larger_ctor, disc_pos, long_js,
      use_handle_override, template_decl, template_args,
      owning_class=theClass,
    )
    paired.add(short_idx)
    paired.add(long_idx)
    arities_emitted.add(n_larger)
  return output, paired, folds


def _detect_and_emit_sub2b(b, theClass, class_cpp, bindable, use_handle_override, template_decl, template_args, forbidden_arities=None):
  """Run the rule 2 sibling-aliasing detector against ``bindable`` and emit
  a val-discriminated constructor for every flagged conflict pair.

  Returns a tuple ``(emitted_str, paired_indices, fold_pairs)`` where
  ``paired_indices`` is the set of indices (into ``bindable``) that have
  been merged into a val-discrimination ctor and must therefore be skipped
  by the regular optional-wrapped or arity-fan-out emission below.

  ``forbidden_arities`` mirrors :func:`_detect_and_emit_sub2a`: when a
  conflict pair's larger arity already hosts a multi-ctor per-arity group,
  emitting the 2-way coordinator there would duplicate the same-arity
  val-ctor registration (embind rejects this at module init — the failure
  only surfaces in pthread worker re-registration because the main thread's
  EVAL_CTORS pass elides the duplicate). For those pairs we DEFER and emit a
  ``fold_pairs`` entry ``(smaller_ctor, larger_arity)`` so the caller folds
  the smaller ctor into the merged per-arity dispatch instead.

  When a constructor participates in multiple conflict pairs (degenerate;
  not observed in production per the surface audit but possible
  in principle), the FIRST pair claims it; subsequent pairs that would
  re-claim the same ctor are skipped with a diagnostic. This keeps the
  emission deterministic and avoids double-emitting a ctor under two
  separate val-dispatch wrappers.
  """
  def _get_type_str(arg):
    return b.getOriginalArgumentType(arg, template_decl, template_args)

  forbidden_arities = forbidden_arities or set()
  sigs = extract_ctor_signatures(
    bindable,
    get_arg_type_str=_get_type_str,
    count_trailing_defaults=b._countTrailingDefaults,
  )
  reports = detect_sub2b_pairs(sigs)
  if not reports:
    return "", set(), []

  output = ""
  paired = set()
  folds = []
  class_name = theClass.spelling
  # Per-arity guard: libembind rejects two ctor registrations whose
  # JavaScript-effective signature is identical (same arity + same
  # registered slot types). Sub-2b emission produces ``(val…valN-1)``
  # lambdas at ``larger_arity``; if more than one pair shares that
  # arity we MUST collapse them into a single registration. Track the
  # arities already claimed by an emitted sub-2b ctor so we can detect
  # collisions and route the second-and-later pairs into the regular
  # per-arity ``std::optional<T>`` emission path (which embind sees as
  # distinct because each surviving ctor's positional types still
  # differ slot-by-slot).
  arities_emitted: set[int] = set()
  for report in reports:
    if report.smaller_index in paired or report.larger_index in paired:
      print(
        f"[rule 2 / matrix row 8] {class_name}: skipping overlapping sub-2b pair "
        f"(ctor#{report.smaller_index} / ctor#{report.larger_index}) — "
        f"already merged into a prior val-dispatch wrapper."
      )
      continue
    smaller = bindable[report.smaller_index]
    larger = bindable[report.larger_index]
    smaller_args = list(smaller.get_arguments())
    larger_args = list(larger.get_arguments())
    n_larger = len(larger_args)
    n_smaller = len(smaller_args)
    smaller_n_defaults = b._countTrailingDefaults(smaller)
    # Architectural correctness gate: sub-2b val-discrimination is
    # only the right strategy in the narrow case where the smaller
    # ctor is **non-empty AND 100% trailing-default**. That is the
    # only shape where Hunk 1 arity-padding into the smaller's
    # registered signature would trap the caller via the
    # optional-wildcard short-circuit (every slot is a
    # ``std::optional<T>`` wildcard, so any caller value matches
    # silently — including values intended for the larger ctor's
    # non-optional positional slot). Examples: ``BRepGProp_Face``
    # (smaller ``(bool=true)``), ``BRepFill_ComputeCLine`` (smaller
    # ``(int=def, ...×6)``), ``Approx_FitAndDivide{,2d}`` (smaller
    # ``(int=def, ...×6)``), ``IMeshData::{Circle,Vertex}CellFilter``
    # (smaller ``(double=def, handle=def)``).
    #
    # Every other shape — empty smaller (``TDF_Transaction``) or
    # smaller with at least one non-optional slot
    # (``BRepBuilderAPI_MakeFace`` ``(Wire, OnlyPlane=false)``,
    # ``BRepLib_MakePolygon`` / ``BRepBuilderAPI_MakePolygon``
    # ``(gp_Pnt×n, Close=false)``, ``math_BrentMinimum``
    # ``(double, int=def, double=def)``,
    # ``Geom2dAPI_InterCurveCurve`` ``(Curve, real=def)``,
    # ``GeomInt_*`` / ``BRepApprox_*`` ``(math_Vector, ...)``) is
    # better served by natural per-arity ``std::optional<T>``
    # emission. The non-optional slot's instanceof check (Path A in
    # libembind Hunk 4) rejects mismatched argument types, and Hunk
    # 1 arity-padding routes shorter calls to the next-larger
    # registered arity correctly.
    #
    # Sub-2b's emit_sibling_aliased_constructor uses arg0-type
    # discrimination, which has TWO failure modes for non-100%-
    # defaulted smallers:
    #
    # 1. ``smaller.arg0_type == larger.arg0_type`` (e.g. MakePolygon
    #    families: both ctors take ``gp_Pnt&``): both lambda branches
    #    cast arg0 to the same type, the else branch becomes
    #    unreachable, and multiple same-arity sub-2b pairs collide
    #    on ``(val,val,...,val)`` registration.
    # 2. The smaller is registered ONLY inside the val-dispatch
    #    lambda (its native arity is absorbed). When other ctors
    #    also exist at the smaller's arity (e.g. MakeFace's
    #    ``(Handle_Geom_Surface, number)`` and ``(Face, Wire)`` at
    #    arity 2), ``overloadTable[smaller_arity]`` is non-empty so
    #    Hunk 1 NEVER pads to the val-dispatch ctor's arity. Calls
    #    to the smaller ctor's signature throw ``invalid signature``
    #    even though the val-dispatch lambda would correctly handle
    #    them under the (counterfactual) padding.
    #
    # The empty smaller (k=0) is handled by natural emission's
    # ``.constructor<>()`` at arity 0 + larger's full-arity
    # registration with std::optional wrapping; Hunk 1 pads
    # intermediate-arity calls to the larger correctly because
    # overloadTable[arity-0..arity-larger-1] are empty.
    if smaller_args and smaller_n_defaults < n_smaller:
      print(
        f"[rule 2 / matrix row 8] {class_name}: deferring sub-2b pair "
        f"(ctor#{report.smaller_index} / ctor#{report.larger_index}) — "
        f"smaller has {n_smaller - smaller_n_defaults} non-optional slot(s) "
        f"(of {n_smaller} total). Natural per-arity std::optional<T> emission "
        f"handles dispatch via Path A instanceof checks on the non-optional "
        f"slot(s); sub-2b's val-dispatch wrapper is only required for "
        f"100%-trailing-default smallers where every slot is a wildcard."
      )
      continue
    if not smaller_args:
      print(
        f"[rule 2 / matrix row 8] {class_name}: deferring k=0 sub-2b pair "
        f"(ctor#{report.smaller_index} / ctor#{report.larger_index}) — "
        f"empty smaller registers natively as ``.constructor<>()``; Hunk 1 "
        f"arity-padding handles caller args.length>0 via the larger ctor's "
        f"std::optional<T> wrapping."
      )
      continue
    if n_larger in forbidden_arities:
      print(
        f"[rule 2 / matrix row 8] {class_name}: folding sub-2b pair "
        f"(ctor#{report.smaller_index} / ctor#{report.larger_index}) into the "
        f"arity-{n_larger} per-arity dispatch — larger arity hosts a multi-ctor "
        f"group, so a standalone coordinator would duplicate the same-arity "
        f"val-ctor registration (embind init rejection in pthread workers). "
        f"Smaller ctor relocated as the merged-dispatch fallback."
      )
      folds.append((smaller, n_larger))
      paired.add(report.smaller_index)
      continue
    if n_larger in arities_emitted:
      print(
        f"[rule 2 / matrix row 8] {class_name}: deferring sub-2b pair "
        f"(ctor#{report.smaller_index} / ctor#{report.larger_index}) — "
        f"larger_arity={n_larger} already claimed by a prior sub-2b "
        f"emission; embind rejects duplicate same-arity val-ctor "
        f"registrations. Routing this pair through per-arity emission."
      )
      continue
    print(report.diagnostic(class_name))
    output += emit_sibling_aliased_constructor(
      b,
      class_cpp,
      smaller,
      larger,
      use_handle_override,
      template_decl,
      template_args,
      owning_class=theClass,
    )
    paired.add(report.smaller_index)
    paired.add(report.larger_index)
    arities_emitted.add(n_larger)
  return output, paired, folds


def _find_initializer_list_param(ctor):
  """Return ``(index, arg)`` of the first ``std::initializer_list<T>``
  parameter of ``ctor``, or ``None``. embind has no built-in wire converter
  for ``std::initializer_list<T>`` (matrix row 38), so any ctor carrying one
  is registered-but-unreachable unless the bindgen rewrites it into a
  ``emscripten::val`` JS-Array adapter."""
  for i, a in enumerate(ctor.get_arguments()):
    canon_spelling = a.type.get_canonical().spelling
    if canon_spelling.startswith('std::initializer_list<') or '::initializer_list<' in canon_spelling:
      return (i, a)
    decl = a.type.get_canonical().get_declaration()
    if decl is not None and decl.spelling == 'initializer_list':
      return (i, a)
  return None


def _class_has_append_method(theClass):
  """True if the class exposes a public ``Append`` method.

  The val-array initializer-list adapter rebuilds the container by
  default/allocator-constructing it and then appending each JS-Array element
  (semantically identical to ``NCollection_List``/``NCollection_Sequence``'s
  own ``std::initializer_list`` ctor, which loops ``Append(item)``). Fixed-
  size containers (``NCollection_Array1``) have no ``Append`` sink, so their
  ``std::initializer_list`` ctor is dropped instead (it is unreachable today
  regardless)."""
  for child in theClass.get_children():
    if (child.kind == clang.cindex.CursorKind.CXX_METHOD
        and child.access_specifier == clang.cindex.AccessSpecifier.PUBLIC
        and child.spelling == 'Append'):
      return True
  return False


def _emit_initializer_list_ctors(b, theClass, classCpp, bindable, useHandleOverride, templateDecl, templateArgs):
  """Row 38: rewrite ``std::initializer_list<T>`` bulk-init ctors as
  ``emscripten::val`` JS-Array adapters.

  Returns ``(output, claimed_indices)``. ``claimed_indices`` are positions in
  ``bindable`` consumed here so the caller removes them from the normal
  arity-grouped emission path. Returns ``("", set())`` when the class has no
  ``std::initializer_list`` ctor (the common case — zero behavioural change
  for every non-container class).

  Only the canonical NCollection shape is specially emitted:

  * exactly one ``std::initializer_list`` ctor,
  * the ``std::initializer_list`` parameter is positional slot 0,
  * every parameter after it is trailing-default (typically the allocator),
  * the container exposes ``Append``, and
  * no OTHER bindable ctor occupies the initializer-list ctor's JS-arity
    range above arity 1 (so there is nothing to merge at arity ≥ 2).

  When those preconditions do not hold the ctor is *claimed without emission*
  (dropped) rather than left to collide: an unconverted ``std::initializer_list``
  registration shares the ``[emscripten::val]`` signature with the arity-1
  copy/allocator dispatch and the patched libembind would route JS Arrays to
  the wrong (copy) ctor non-deterministically.
  """
  initlist_entries = [
    (idx, ctor, found)
    for idx, ctor in enumerate(bindable)
    if (found := _find_initializer_list_param(ctor)) is not None
  ]
  if not initlist_entries:
    return "", set()

  all_initlist_indices = {idx for idx, _, _ in initlist_entries}

  # Bail-to-drop guards. Any unmet precondition → claim-without-emit so the
  # unreachable ctor stops shadowing reachable siblings, but we do not risk
  # an incorrect bespoke emission.
  if len(initlist_entries) != 1 or not _class_has_append_method(theClass):
    return "", all_initlist_indices

  idx, initlist_ctor, (il_pos, il_arg) = initlist_entries[0]
  ctor_args = list(initlist_ctor.get_arguments())
  n_defaults = b._countTrailingDefaults(initlist_ctor)
  # initializer_list must be slot 0 and every following slot must be a
  # trailing default (so the JS-arity range is [1 .. len(ctor_args)]).
  if il_pos != 0 or n_defaults < len(ctor_args) - 1:
    return "", all_initlist_indices

  # Element cast type for `array[i].as<const T &>()`.
  init_canon = il_arg.type.get_canonical()
  elem_type = init_canon.get_template_argument_type(0)
  elem_spelling = b.resolveWithCanonicalFallback(
    elem_type.spelling, elem_type, templateDecl, templateArgs)
  elem_cast = f"const {elem_spelling} &"

  # Trailing params after the initializer_list (e.g. the allocator). Each
  # carries a default expression used at the lower JS arities.
  trailing_params = []
  for a in ctor_args[1:]:
    type_str = b.getOriginalArgumentType(a, templateDecl, templateArgs)
    default_expr = b._extractDefaultExpr(a, owning_class=theClass, class_scope=classCpp) or "{}"
    trailing_params.append((type_str, default_expr))

  max_js_arity = len(ctor_args)  # initializer_list + trailing params

  # Other ctors that overlap the initializer-list ctor's JS-arity range:
  # arity 1 collides (same `[emscripten::val]` signature), arity ≥ 2 would
  # need merging we don't attempt. We only support merging the arity-1
  # siblings (copy / allocator); any other bindable ctor at arity 2..max
  # forces a drop.
  arity1_siblings = []
  for other_idx, other in enumerate(bindable):
    if other_idx in all_initlist_indices:
      continue
    other_arity = len(list(other.get_arguments()))
    if 2 <= other_arity <= max_js_arity:
      return "", all_initlist_indices
    if other_arity == 1:
      arity1_siblings.append((other_idx, other))

  if useHandleOverride:
    ret_type = f"opencascade::handle<{classCpp}>"
    def _new_expr(ctor_call):
      return f"opencascade::handle<{classCpp}>(new {classCpp}({ctor_call}))"
  else:
    ret_type = f"{classCpp}*"
    def _new_expr(ctor_call):
      return f"new {classCpp}({ctor_call})"

  def _append_loop(array_name, ctor_call, ind):
    sp = " " * ind
    body = f"{sp}auto result = {_new_expr(ctor_call)};\n"
    body += f'{sp}const unsigned __ocjs_len = {array_name}["length"].as<unsigned>();\n'
    body += f"{sp}for (unsigned __ocjs_i = 0; __ocjs_i < __ocjs_len; ++__ocjs_i) {{\n"
    body += f"{sp}  result->Append({array_name}[__ocjs_i].as<{elem_cast}>(emscripten::allow_raw_pointers()));\n"
    body += f"{sp}}}\n"
    body += f"{sp}return result;\n"
    return body

  claimed = set(all_initlist_indices)
  claimed.update(other_idx for other_idx, _ in arity1_siblings)

  output = ""

  # Arity-1 unified lambda: JS-Array → initializer-list adapter (allocator
  # defaulted); otherwise dispatch to the copy/allocator siblings.
  default_allocator_call = ", ".join(d for _, d in trailing_params)
  output += f"    .constructor(optional_override([](emscripten::val arg0) -> {ret_type} {{\n"
  output += "      if (arg0.isArray()) {\n"
  output += _append_loop("arg0", default_allocator_call, ind=8)
  output += "      }\n"
  if arity1_siblings:
    sibling_ctors = [c for _, c in arity1_siblings]
    sibling_tree = _dispatch.build_dispatch_tree(
      b, sibling_ctors, available_positions=[0],
      templateDecl=templateDecl, templateArgs=templateArgs,
    )
    output += _dispatch.codegen_dispatch_tree(
      b, sibling_tree, classCpp, useHandleOverride, templateDecl, templateArgs, ind=6, arity=1,
    )
  if useHandleOverride:
    output += f"      return opencascade::handle<{classCpp}>();\n"
  else:
    output += "      return nullptr;\n"
  output += "    }))\n"

  # Higher-arity forms: (array, trailing0, trailing1, …). Each trailing slot
  # is supplied explicitly; the initializer-list array stays slot 0.
  for arity in range(2, max_js_arity + 1):
    val_args = ", ".join(f"emscripten::val arg{i}" for i in range(arity))
    explicit_trailing = []
    for j in range(1, arity):
      t_type, _ = trailing_params[j - 1]
      explicit_trailing.append(
        f"arg{j}.as<{t_type}>(emscripten::allow_raw_pointers())"
      )
    # Trailing params beyond the supplied JS args fall back to their default.
    for j in range(arity, max_js_arity):
      _, t_default = trailing_params[j - 1]
      explicit_trailing.append(f"({t_default})")
    ctor_call = ", ".join(explicit_trailing)
    output += f"    .constructor(optional_override([]({val_args}) -> {ret_type} {{\n"
    output += _append_loop("arg0", ctor_call, ind=6)
    output += "    }))\n"

  return output, claimed


def process_simple_constructor(b, theClass, templateDecl=None, templateArgs=None):
  """Emit the primary constructor binding for a class (single, multi-arity, or val-dispatched)."""
  output = ""
  children = list(theClass.get_children())
  constructors = list(filter(lambda x: x.kind == clang.cindex.CursorKind.CONSTRUCTOR, children))
  className = getClassTypeName(theClass, templateDecl)
  if className == "":
    className = theClass.type.spelling
  classCpp = getClassQualifiedName(theClass, templateDecl)
  if not classCpp:
    classCpp = className
  useHandleOverride = isTransientDerived(theClass, b.tuInfo.classDict)
  underlying_spelling = theClass.spelling if templateDecl is not None else None

  if len(constructors) == 0:
    inherited = inherited_template_base(theClass)
    if inherited is not None:
      inherited_template, templateArgs = inherited
      templateDecl = templateDecl if templateDecl is not None else theClass
      theClass = inherited_template
      underlying_spelling = inherited_template.spelling
      children = list(inherited_template.get_children())
      constructors = list(filter(lambda x: x.kind == clang.cindex.CursorKind.CONSTRUCTOR, children))
    elif any(
      child.kind == clang.cindex.CursorKind.USING_DECLARATION
      and child.spelling == theClass.spelling
      for child in children
    ):
      return output
    else:
      if useHandleOverride:
        output += "    .constructor(optional_override([]() {\n"
        output += "      return opencascade::handle<" + classCpp + ">(new " + classCpp + "());\n"
        output += "    }))\n"
      else:
        output += "    .constructor<>()\n"
      return output
  publicConstructors = list(filter(lambda x: x.kind == clang.cindex.CursorKind.CONSTRUCTOR and x.access_specifier == clang.cindex.AccessSpecifier.PUBLIC, children))
  if len(publicConstructors) == 0:
    return output

  filtered = b._filter_overloads(publicConstructors, templateDecl)
  filtered = [c for c in filtered if filterMethodOrProperty(theClass, c)]
  bindable = []
  for c in filtered:
    try:
      b._checkUnbindableArgs("constructor", theClass.spelling, list(c.get_arguments()))
      bindable.append(c)
    except SkipException as e:
      print(str(e))

  if len(bindable) == 0:
    return output

  guarded = []
  for c in bindable:
    try:
      _check_optional_emission_guards_for_ctor(b, theClass, c, bindable, templateDecl, templateArgs)
      guarded.append(c)
    except SkipException as e:
      print(str(e))
  bindable = guarded
  if len(bindable) == 0:
    return output

  # Collision-avoidance precondition for sub-2a / sub-2b coordinators:
  # an arity that already hosts a multi-ctor per-arity group (>= 2
  # full-arity ctors) cannot ALSO host a standalone 2-way coordinator —
  # both render as ``(emscripten::val …)`` lambdas at the same arity and
  # embind rejects the duplicate registration. The failure only manifests
  # in pthread worker re-registration (the main thread's EVAL_CTORS pass
  # elides the duplicate at build time). For those arities the detectors
  # DEFER and return a fold directive so the smaller ctor is relocated
  # into a single merged per-arity dispatch instead.
  _arity_counts = defaultdict(int)
  for _c in bindable:
    _arity_counts[len(list(_c.get_arguments()))] += 1
  forbidden_arities = {a for a, n in _arity_counts.items() if n >= 2}

  # Rule 2: sibling-aliasing detection (matrix row 8 / sub-2b).
  # Before each candidate ctor would have its trailing-default slots
  # wrapped in ``std::optional<T>``, check whether emitting that wrapper
  # would shadow a higher-arity sibling via libembind's
  # optional-wildcard short-circuit. The detector is a pure prefix /
  # suffix-match algorithm over the per-ctor parameter signatures (see
  # ``ocjs_bindgen.predicates.sibling_aliasing``); when it flags a pair
  # the two ctors are spliced out of the regular emission path and
  # replaced by a single val-discriminated ctor at the larger arity.
  # The detector scope is bounded to a single class per the policy
  # invariant (surface audit confirms zero production sub-2b instances
  # span inheritance / templates / ADL).
  fold_map = {}  # smaller ctor cursor -> larger arity it is folded into
  conflict_pairs, paired_indices, sub2b_folds = _detect_and_emit_sub2b(
    b, theClass, classCpp, bindable, useHandleOverride, templateDecl, templateArgs,
    forbidden_arities=forbidden_arities,
  )
  output += conflict_pairs
  for smaller_ctor, larger_arity in sub2b_folds:
    fold_map[smaller_ctor] = larger_arity
  bindable = [c for i, c in enumerate(bindable) if i not in paired_indices]
  if len(bindable) == 0:
    return output

  # Sub-2a: cross-arity overlap with JS-distinguishable discriminator.
  # See :func:`_detect_sub2a_cross_arity_pairs` for the canonical
  # production case (BRepMesh_IncrementalMesh). Sub-2a runs AFTER sub-2b
  # so prefix-shadow pairs are claimed first; sub-2a only fires when the
  # ctors have a divergent positional type that's JS-distinguishable.
  cross_pairs, cross_paired, sub2a_folds = _detect_and_emit_sub2a(
    b, theClass, classCpp, bindable, useHandleOverride, templateDecl, templateArgs,
    forbidden_arities=forbidden_arities,
  )
  output += cross_pairs
  for smaller_ctor, larger_arity in sub2a_folds:
    fold_map[smaller_ctor] = larger_arity
  bindable = [c for i, c in enumerate(bindable) if i not in cross_paired]
  if len(bindable) == 0:
    return output

  # Row 38: std::initializer_list<T> bulk-init ctors. embind has no wire
  # converter for std::initializer_list, so rewrite them as emscripten::val
  # JS-Array adapters (and merge the colliding arity-1 copy/allocator
  # siblings into the same lambda so dispatch stays deterministic). See
  # ``tests/smoke/smoke-initializer-list-bulk-init.test.ts``.
  initlist_output, initlist_claimed = _emit_initializer_list_ctors(
    b, theClass, classCpp, bindable, useHandleOverride, templateDecl, templateArgs,
  )
  output += initlist_output
  bindable = [c for i, c in enumerate(bindable) if i not in initlist_claimed]
  if len(bindable) == 0:
    return output

  # Optional-overload migration: each surviving ctor emits ONE binding
  # whose trailing default parameters are wrapped in std::optional<T>
  # with .value_or(D) recovery. The libembind v2 dispatcher (Hunks 1+3)
  # routes arity-padded and explicit-null/undefined calls into the
  # optional slots. See docs/research/ocjs-optional-overload-resolution-blueprint.md
  # for the full mechanical translation rule. Rule 2 above guarantees
  # this emission only fires for ctors whose optional wrapper does NOT
  # shadow a higher-arity sibling.
  def _emit_one_ctor(ctor, sibling_count):
    """Pick the emission shape for ONE constructor by consulting the
    overload classifier (rule 9: rows {3, 4, 5, 21, 22} keep
    ``std::optional<T>``; everything else routes to ``emscripten::val``
    discrimination so rule 5 strict-null fires on every trailing-default
    slot per the policy).
    """
    actual_args = list(ctor.get_arguments())
    nDefaults = b._countTrailingDefaults(ctor)
    if nDefaults <= 0:
      return emit_constructor(
        b, classCpp, actual_args, templateDecl, templateArgs, useHandleOverride,
        underlying_spelling, optional_param_count=0, owning_class=theClass,
      )
    descriptor, classification = _classify_ctor(
      b, theClass, classCpp, ctor, sibling_count, templateDecl, templateArgs,
    )
    n_optional_wraps = sum(
      1 for a in actual_args[len(actual_args) - nDefaults:]
      if not (a.type.kind == clang.cindex.TypeKind.POINTER and not isCString(a.type))
    )
    if n_optional_wraps <= 0:
      return emit_constructor(
        b, classCpp, actual_args, templateDecl, templateArgs, useHandleOverride,
        underlying_spelling, optional_param_count=nDefaults, owning_class=theClass,
      )
    if classification.primitive == 'val':
      if templateDecl is not None:
        # Template-typedef classes (e.g. ``IMeshData::BndBox2dTreeFiller =
        # NCollection_UBTreeFiller<int, Bnd_Box2d>``) need the
        # nested-name rewrite that ``rewrite_typedef_nested_types``
        # applies inside ``emit_constructor`` to map
        # ``Underlying::Nested`` → ``ClassCpp::Nested`` in lambda
        # parameter signatures. The val-default helper does not yet
        # carry that rewrite, so its lambda would read e.g.
        # ``NCollection_UBTreeFiller::UBTree &`` (the unspecialized
        # template) and embind's ``optional_override`` template
        # substitution would fail. Defer to the optional-emit path
        # which already owns the rewrite.
        return emit_constructor(
          b, classCpp, actual_args, templateDecl, templateArgs, useHandleOverride,
          underlying_spelling, optional_param_count=nDefaults, owning_class=theClass,
        )
      try:
        assert_no_nonconst_ref_in_optional(
          theClass.spelling,
          f"{theClass.spelling}.constructor",
          actual_args[len(actual_args) - nDefaults:],
        )
      except SkipException as e:
        print(str(e))
        return emit_constructor(
          b, classCpp, actual_args, templateDecl, templateArgs, useHandleOverride,
          underlying_spelling, optional_param_count=nDefaults, owning_class=theClass,
        )
      print(classification.diagnostic(f"{theClass.spelling}.constructor"))
      accepts_null_set = {
        i for i, p in enumerate(descriptor.parameters)
        if p.accepts_meaningful_null
      }
      return _val_default.emit_constructor_with_val_default(
        b,
        theClass,
        ctor,
        template_decl=templateDecl,
        template_args=templateArgs,
        class_cpp=classCpp,
        use_handle_override=useHandleOverride,
        accepts_null_per_position=accepts_null_set,
      )
    return emit_constructor(
      b, classCpp, actual_args, templateDecl, templateArgs, useHandleOverride,
      underlying_spelling, optional_param_count=nDefaults, owning_class=theClass,
    )

  # Cross-arity smaller ctors deferred by sub-2a / sub-2b (because their
  # larger arity hosts a multi-ctor group) are relocated here: each is
  # removed from its native arity bucket and folded into the larger
  # arity's merged dispatch as a fallback branch. This guarantees exactly
  # ONE ``(emscripten::val …)`` registration per arity.
  fallbacks_by_arity = defaultdict(list)
  for smaller_ctor, larger_arity in fold_map.items():
    fallbacks_by_arity[larger_arity].append(smaller_ctor)
  bindable = [c for c in bindable if c not in fold_map]

  if len(bindable) == 1 and not fallbacks_by_arity:
    output += _emit_one_ctor(bindable[0], sibling_count=0)
    return output

  by_arity = defaultdict(list)
  for c in bindable:
    by_arity[len(list(c.get_arguments()))].append(c)

  total_siblings = max(0, len(bindable) - 1)
  for arity, group in sorted(by_arity.items()):
    fallbacks = fallbacks_by_arity.pop(arity, [])
    if fallbacks:
      # Merged dispatch: same-arity primaries + folded cross-arity
      # smaller ctor(s). One registration, default-aware leaves, smaller
      # ctor(s) as the catch-all ``else`` so undefined / non-matching
      # ``arg0`` routes to the all-defaults overload.
      output += _emit_merged_arity_dispatch(
        b, classCpp, arity, group, fallbacks, useHandleOverride,
        templateDecl, templateArgs, theClass,
      )
    elif len(group) == 1:
      output += _emit_one_ctor(group[0], sibling_count=total_siblings)
    else:
      # Same-arity multi-ctor group: emit a SINGLE val-dispatch lambda
      # covering every overload at this arity. We cannot emit them as
      # separate ``.constructor<...>()`` registrations because the
      # patched libembind (`src/patches/libembind-overloading.patch`)
      # dispatches via ``signaturesArray`` whose order is determined
      # asynchronously by dependency resolution, NOT by C++ source
      # order. When ``signaturesArray`` happens to place a more-
      # permissive entry (e.g. ``['emscripten::val']``) before a more-
      # specific one (e.g. ``['string']``), ``$getSignature`` returns
      # the permissive entry and routes the call to the wrong ctor
      # (canonical regression: ``new TCollection_AsciiString('hello')``
      # routed to the int/double val-dispatch instead of the
      # ``const char *`` overload, yielding ``"NaN"`` instead of
      # ``"hello"``). Consolidating into a single val-dispatch lambda
      # keeps dispatch deterministic and source-order independent.
      val_tree = _dispatch.build_dispatch_tree(
        b, group, available_positions=list(range(arity)),
        templateDecl=templateDecl, templateArgs=templateArgs,
      )
      output += _dispatch.emit_val_dispatch_constructor(
        b, classCpp, arity, val_tree, useHandleOverride, templateDecl, templateArgs,
      )

  # Defensive: any fold target whose arity had no surviving primaries
  # (should not occur — the deferred pair's larger ctor is always a
  # primary at that arity). Emit the fallbacks as their own merged
  # dispatch so no relocated ctor is silently dropped.
  for arity, fallbacks in sorted(fallbacks_by_arity.items()):
    if not fallbacks:
      continue
    output += _emit_merged_arity_dispatch(
      b, classCpp, arity, fallbacks, [], useHandleOverride,
      templateDecl, templateArgs, theClass,
    )

  return output


def process_overloaded_constructors(b, theClass, children=None, templateDecl=None, templateArgs=None):
  """Emit `_N` subclass bindings ONLY for genuinely ambiguous constructor overloads."""
  output = ""
  if children is None:
    children = list(theClass.get_children())
  constructors = list(filter(lambda x: x.kind == clang.cindex.CursorKind.CONSTRUCTOR and x.access_specifier == clang.cindex.AccessSpecifier.PUBLIC, children))
  if len(constructors) <= 1:
    return output

  filtered = b._filter_overloads(constructors, templateDecl)
  filtered = [c for c in filtered if filterMethodOrProperty(theClass, c)]
  bindable = []
  for c in filtered:
    try:
      b._checkUnbindableArgs("constructor", theClass.spelling, list(c.get_arguments()))
      bindable.append(c)
    except SkipException:
      continue

  by_arity = defaultdict(list)
  for c in bindable:
    by_arity[len(list(c.get_arguments()))].append(c)

  ambiguous_ctors = []
  for group in by_arity.values():
    if len(group) <= 1:
      continue
    tree = _dispatch.build_dispatch_tree(b, group, templateDecl=templateDecl, templateArgs=templateArgs)
    ambiguous_ctors.extend(_dispatch.collect_ambiguous_overloads(tree))

  if not ambiguous_ctors:
    return output

  useHandleOverride = isTransientDerived(theClass, b.tuInfo.classDict)
  name = getClassJsPublicName(theClass, templateDecl)
  qual = getClassQualifiedName(theClass, templateDecl)
  if not qual:
    qual = name
  allOverloads = constructors

  for constructor in ambiguous_ctors:
    try:
      overloadPostfix = "_" + str(allOverloads.index(constructor) + 1)
      ctor_args = list(constructor.get_arguments())
      arg_names = [
        arg.spelling if arg.spelling else f"a{i}"
        for i, arg in enumerate(ctor_args)
      ]
      args = ", ".join(
        f"std::string {name}"
        if isCString(arg.type)
        else (
          f"{stringViewOwningType(arg.type)} {name}"
          if stringViewOwningType(arg.type) is not None
          else b.getSingleArgumentBinding(True, True, templateDecl, templateArgs)(arg)[0]
        )
        for arg, name in zip(ctor_args, arg_names, strict=True)
      )
      argNames = ", ".join(
        f"{name}.c_str()" if isCString(arg.type) else name
        for arg, name in zip(ctor_args, arg_names, strict=True)
      )
      argTypes = ", ".join(
        "std::string"
        if isCString(arg.type)
        else (
          stringViewOwningType(arg.type)
          or b.getSingleArgumentBinding(False, True, templateDecl, templateArgs)(arg)[0]
        )
        for arg in ctor_args
      )

      output += "    struct " + name + overloadPostfix + " : public " + qual + " {\n"
      output += "      " + name + overloadPostfix + "(" + args + ") : " + qual + "(" + argNames + ") {}\n"
      output += "    };\n"
      output += "    class_<" + name + overloadPostfix + ", base<" + qual + ">>(\"" + name + overloadPostfix + "\")\n"
      if useHandleOverride:
        output += "      .smart_ptr<opencascade::handle<" + name + overloadPostfix + ">>(\"Handle_" + name + overloadPostfix + "\")\n"
        output += "      .constructor(optional_override([](" + args + ") {\n"
        output += "        return opencascade::handle<" + name + overloadPostfix + ">(new " + name + overloadPostfix + "(" + argNames + "));\n"
        output += "      }))\n"
      else:
        output += "      .constructor<" + argTypes + ">()\n"
      output += "    ;\n"

    except SkipException as e:
      print(str(e))
      continue
  return output
