"""RBV (Return-By-Value) envelope codegen extracted from the binders (Phase 2 PR 2.2).

The RBV pipeline turns C++ methods with output parameters into JavaScript
methods that return aggregate envelopes (or `void` / native return) per the
S0/S1/S2 shape taxonomy:

* S0 = no envelope-bound outputs → native C++ return (`void` or the raw type)
* S1 = single envelope-bound output → returned directly without an envelope
* S2 = multiple outputs (or output + non-void return) → `{ returnValue, …,
  [Symbol.dispose] }` aggregate envelope

This module now owns:

* envelope field-name constants (`ENVELOPE_RETURN_FIELD` /
  ``ENVELOPE_RETURN_FIELD_COLLISION``)
* RBV-eligibility predicates (``can_do_rbv``, ``return_type_requires_value_wrapper``)
* envelope-shape predicates (``envelope_richness``,
  ``output_arg_is_embind_managed``, ``return_is_embind_managed``)
* envelope codegen (``ensure_result_struct``, ``emit_output_param_binding``)
* RBV-aware overload dispatch (``emit_rbv_collision_dispatch``)

Functions that need binder-side context take it as ``b`` (the calling
``EmbindBindings`` / ``TypescriptBindings`` instance). Pure predicates omit it.

Legacy method names on the binder remain as thin delegators so the rest of
``codegen/bindings.py`` continues to call ``self._canDoRbv(...)`` etc.
"""

from __future__ import annotations

import re

import clang.cindex

from ocjs_bindgen.predicates.args import (
  _isHandleType,
  isClassOutputParam,
  isHandleOutputParam,
  isOutputParam,
  isPrimitiveOutputParam,
  shouldStripParam,
)
from ocjs_bindgen.predicates.classes import _isDefaultConstructibleClass
from ocjs_bindgen.predicates.types import (
  builtInTypes,
  isCString,
  isRawPointerParam,
  stringViewOwningType,
)

# ---------------------------------------------------------------------------
# Constants
# ---------------------------------------------------------------------------

ENVELOPE_RETURN_FIELD = "returnValue"
ENVELOPE_RETURN_FIELD_COLLISION = "returnValue_"


# ---------------------------------------------------------------------------
# Predicates (pure)
# ---------------------------------------------------------------------------


def can_do_rbv(method):
  """Check if a method with output params can use the RBV value_object pattern."""
  ret_type = method.result_type
  if ret_type.spelling != "void" and ret_type.get_canonical().kind == clang.cindex.TypeKind.POINTER:
    return False
  if ret_type.kind == clang.cindex.TypeKind.LVALUEREFERENCE:
    pointee = ret_type.get_pointee()
    if not pointee.is_const_qualified():
      return False
  return True


def output_arity_is_unambiguous(theClass, method):
  if method.is_virtual_method():
    return False
  if theClass is None:
    return True
  target = sum(
    1 for arg in method.get_arguments()
    if not shouldStripParam(arg.type, method)
  )
  for sibling in theClass.get_children():
    if sibling.kind != clang.cindex.CursorKind.CXX_METHOD:
      continue
    if sibling.spelling != method.spelling or sibling == method:
      continue
    if sibling.access_specifier != clang.cindex.AccessSpecifier.PUBLIC:
      continue
    if sibling.is_static_method() != method.is_static_method():
      continue
    sibling_arity = sum(
      1 for arg in sibling.get_arguments()
      if not shouldStripParam(arg.type, sibling)
    )
    if sibling_arity == target:
      return False
  return True


def trailing_primitive_output_run(kept, method):
  start = len(kept)
  for position in range(len(kept) - 1, -1, -1):
    _index, arg = kept[position]
    if not isPrimitiveOutputParam(arg.type):
      break
    start = position
  return start


def return_type_requires_value_wrapper(method):
  """Embind copy-marshals C++ returns through wire.h:391. Non-copyable types
  (deleted copy ctor) need optional_override: ref returns use ``val(&ref)``;
  by-value returns use a ``thread_local`` staging slot.
  """
  rt = method.result_type
  if rt.spelling == "void":
    return False
  if rt.kind in (
    clang.cindex.TypeKind.LVALUEREFERENCE,
    clang.cindex.TypeKind.RVALUEREFERENCE,
  ):
    target = rt.get_pointee()
  else:
    target = rt
  decl = target.get_canonical().get_declaration()
  if not decl:
    return False
  for child in decl.get_children():
    if (child.kind == clang.cindex.CursorKind.CONSTRUCTOR
        and child.is_copy_constructor()
        and child.is_deleted_method()):
      return True
  return False


def output_arg_is_embind_managed(arg):
  """True if an output-param arg's pointee is a Handle<T> or default-
  constructible class. Drives ``[Symbol.dispose](): void`` emission on the
  return container literal.
  """
  if not isOutputParam(arg.type):
    return False
  pointee = arg.type.get_pointee()
  if _isHandleType(pointee):
    return True
  canonical = pointee.get_canonical()
  if canonical.spelling in builtInTypes:
    return False
  if pointee.kind == clang.cindex.TypeKind.ENUM or canonical.kind == clang.cindex.TypeKind.ENUM:
    return False
  return _isDefaultConstructibleClass(pointee)


def return_is_embind_managed(method):
  """True if the method's non-void return type is a Handle<T> or class."""
  ret_type = method.result_type
  if ret_type.spelling == "void":
    return False
  ret = ret_type
  if ret.kind == clang.cindex.TypeKind.LVALUEREFERENCE:
    ret = ret.get_pointee()
  if _isHandleType(ret):
    return True
  canonical = ret.get_canonical()
  if _isHandleType(canonical):
    return True
  if canonical.spelling in builtInTypes:
    return False
  if ret.kind == clang.cindex.TypeKind.ENUM or canonical.kind == clang.cindex.TypeKind.ENUM:
    return False
  if canonical.kind == clang.cindex.TypeKind.POINTER:
    return False
  return _isDefaultConstructibleClass(canonical)


# ---------------------------------------------------------------------------
# Envelope ranking (binder-coupled)
# ---------------------------------------------------------------------------


def js_effective_arity_range(b, method):
  """Return ``(min_arity, max_arity)`` — the closed range of JS-callable
  arities for ``method`` AFTER all bindgen transforms are composed.

  Composes three transforms (per policy rule 3):

  * **primitive-output stripping + RBV elision** — output-param slots
    that the RBV envelope absorbs do not consume a JS argument slot.
    Equivalent to ``b._getJsArity(method)`` as the upper bound: the
    largest number of JS args a caller is ever required to pass.
  * **default expansion (optional or val)** — each trailing
    default-bearing slot is omissible from the JS call. The minimum
    JS-required arity is the upper bound minus the count of trailing
    JS-visible defaults. Raw-pointer trailing defaults are excluded
    from the optional count (they remain required because embind's
    ``wire.h:124`` static_assert rejects ``std::optional<T*>``).

  The range is **closed on both ends** — a JS caller may invoke the
  method with any arity in ``[min_arity, max_arity]`` (inclusive). The
  collision check below uses range intersection for that semantics.

  This composition is the rule 3 emit-time precondition: two same-name
  overloads with intersecting JS-effective arity ranges that would also
  be JS-type-indistinguishable at the overlapping arities cannot both
  be registered safely. Either val-discrimination handles them
  collectively or bindgen must ``SkipException`` one of them.
  """
  # Upper bound — post-RBV-elision JS-visible arity.
  js_arity = b._getJsArity(method)

  # Lower bound — count of JS-visible trailing defaults that the
  # bindgen would emit via either std::optional<T> wrapping (default
  # case) or val-discrimination (sub-2b reroute). Raw-pointer trailing
  # defaults stay required: ``emit_constructor`` /
  # ``processMethodOrProperty`` keep the slot as a raw pointer because
  # std::optional<T*> is rejected by embind's wire.h static_assert.
  args = list(method.get_arguments())
  n_args = len(args)
  n_def = b._countTrailingDefaults(method)
  if n_def <= 0:
    return (js_arity, js_arity)

  trailing = args[n_args - n_def:]
  visible_default_count = 0
  for a in trailing:
    if isRawPointerParam(a.type) and not isCString(a.type):
      continue
    if shouldStripParam(a.type, method):
      # Stripped output-param slots are removed from the JS-visible
      # arity entirely; their trailing-default-ness is irrelevant to
      # the JS-effective range. Skip.
      continue
    visible_default_count += 1
  return (max(0, js_arity - visible_default_count), js_arity)


def js_effective_arity_collisions(b, group, template_decl=None, template_args=None):
  """Find pairs of same-name overloads whose JS-effective arity ranges intersect.

  Implements the rule 3 precondition: returns a list of
  ``(method_a, method_b, intersection_lo, intersection_hi)`` for every
  unordered pair in ``group`` whose ranges overlap. Range intersection
  is computed on the closed-interval semantics returned by
  :func:`js_effective_arity_range`.

  The caller is responsible for resolving each collision:

  * If the JS types at the overlapping arity differ → val-discrimination
    (matrix rows 9, 12, 14) is the correct fix.
  * If the JS types are identical → either rule 2 (sub-2b) catches the
    same shape from a different angle, or the overload pair must be
    deduped (row 11) or one of them skipped (row 35).

  Range overlap alone does NOT mandate a hard skip — the bindgen has
  several legitimate ways to resolve same-arity collisions (val
  dispatch, JS-effective dedup, RBV-envelope-richness ranking).
  ``js_effective_arity_collisions`` is the **precondition that surfaces
  the ambiguity at emit time** so a downstream handler can pick the
  right resolution. Same-name groups with no overlap are guaranteed
  collision-free under arity-only dispatch.
  """
  ranges = [(m, *js_effective_arity_range(b, m)) for m in group]
  collisions = []
  for i in range(len(ranges)):
    m_a, lo_a, hi_a = ranges[i]
    for j in range(i + 1, len(ranges)):
      m_b, lo_b, hi_b = ranges[j]
      lo = max(lo_a, lo_b)
      hi = min(hi_a, hi_b)
      if lo <= hi:
        collisions.append((m_a, m_b, lo, hi))
  return collisions


def is_collision_resolvable_via_val(b, m_a, m_b, lo, hi, template_decl=None, template_args=None):
  """Return True iff the JS-type signatures of ``m_a`` and ``m_b`` at
  the overlapping arity ``[lo..hi]`` differ — i.e. val-discrimination
  can pick the right overload at every overlapping arity.

  Used by :func:`process_method_group` to decide whether to upgrade a
  rule 3 collision diagnostic to a hard ``SkipException`` (matrix
  row 27 unresolvable case) or route the colliding group through
  val-dispatch (the resolvable case). The decision walks each
  overlapping arity and asks the binder's ``_classify_js_type`` helper
  for the JS type at each slot; the collision is resolvable iff
  AT LEAST ONE slot in AT LEAST ONE overlapping arity has different
  JS types across the two overloads.

  When ``_classify_js_type`` is not available on ``b`` (e.g. during
  unit tests with a minimal fake binder), we fall back to comparing
  raw C++ type spellings at each slot — a conservative proxy that
  errs on the side of "resolvable" (so the build never raises
  spuriously) but may miss the row-11 dedup case.
  """
  args_a = list(m_a.get_arguments())
  args_b = list(m_b.get_arguments())
  classify = getattr(b, '_classify_js_type', None)
  for arity in range(lo, hi + 1):
    # Only consider the FIRST ``arity`` slots — beyond that the
    # remaining slots are defaulted or stripped, so JS callers do not
    # supply them at this arity.
    for slot in range(arity):
      if slot >= len(args_a) or slot >= len(args_b):
        # Beyond one overload's max raw arity — the other side relies
        # on default expansion / RBV elision, so JS dispatch sees no
        # collision at this slot.
        return True
      classify_succeeded = False
      if classify is not None:
        try:
          ta = classify(args_a[slot].type, template_decl, template_args)
          tb = classify(args_b[slot].type, template_decl, template_args)
          classify_succeeded = True
          if ta != tb:
            return True
        except Exception:  # noqa: BLE001 — defensive fallback
          pass
      if not classify_succeeded:
        # Type-spelling fallback (used by FakeBinder in tests where
        # ``_classify_js_type`` is absent). Skipped when classify ran
        # successfully so we don't shadow its JS-equivalence verdict.
        sp_a = getattr(args_a[slot].type, 'spelling', None)
        sp_b = getattr(args_b[slot].type, 'spelling', None)
        if sp_a is not None and sp_b is not None and sp_a != sp_b:
          return True
  return False


def _is_deprecated(method):
  return getattr(method, "availability", None) == clang.cindex.AvailabilityKind.DEPRECATED


def _typedef_preference_score(method):
  score = 0
  for arg in method.get_arguments():
    kind = arg.type.get_canonical().kind
    if kind in (
      clang.cindex.TypeKind.ULONGLONG,
      clang.cindex.TypeKind.ULONG,
      clang.cindex.TypeKind.UINT,
      clang.cindex.TypeKind.USHORT,
    ):
      score += 10
    if kind in (clang.cindex.TypeKind.ULONGLONG, clang.cindex.TypeKind.LONGLONG):
      score += 4
    elif kind in (clang.cindex.TypeKind.ULONG, clang.cindex.TypeKind.LONG):
      score += 2
    elif kind in (clang.cindex.TypeKind.UINT, clang.cindex.TypeKind.INT):
      score += 1
  return score


def _prefer_raw_equivalent(candidate, existing):
  if _is_deprecated(candidate) != _is_deprecated(existing):
    return not _is_deprecated(candidate)
  candidate_score = _typedef_preference_score(candidate)
  existing_score = _typedef_preference_score(existing)
  if candidate_score != existing_score:
    return candidate_score > existing_score
  return candidate.is_const_method() and not existing.is_const_method()


def js_effective_signature(b, method, template_decl=None, template_args=None):
  args = list(method.get_arguments())
  if any(isOutputParam(arg.type) for arg in args) and can_do_rbv(method):
    args = [
      arg
      for arg in args
      if not shouldStripParam(arg.type, method) and not isRawPointerParam(arg.type)
    ]
  return tuple(
    b._classify_js_type(arg.type, template_decl, template_args)
    for arg in args
  )


def select_js_effective_overload_survivors(b, methods, template_decl=None, template_args=None):
  """Select one callable for every JavaScript-effective overload signature."""
  raw_survivors = {}
  for method in methods:
    key = tuple(
      b._classify_js_type(arg.type, template_decl, template_args)
      for arg in method.get_arguments()
    )
    existing = raw_survivors.get(key)
    if existing is None or _prefer_raw_equivalent(method, existing):
      raw_survivors[key] = method

  effective_survivors = {}
  for method in raw_survivors.values():
    key = js_effective_signature(b, method, template_decl, template_args)
    existing = effective_survivors.get(key)
    if existing is None:
      effective_survivors[key] = method
      continue
    if _is_deprecated(method) != _is_deprecated(existing):
      if not _is_deprecated(method):
        effective_survivors[key] = method
      continue
    if envelope_richness(b, method) > envelope_richness(b, existing):
      effective_survivors[key] = method
  return list(effective_survivors.values())


def envelope_richness(b, method):
  """Rank methods that share a JS-effective signature.

  Higher = richer envelope = preferred survivor among equally current
  overloads. A non-deprecated direct-return overload remains preferable to
  its deprecated output-parameter compatibility overload.
  """
  args = list(method.get_arguments())
  if not any(isOutputParam(a.type) for a in args) or not can_do_rbv(method):
    return 0
  stripped = sum(1 for a in args if shouldStripParam(a.type, method))
  envelope_outputs = sum(
    1 for a in args
    if isOutputParam(a.type) and not isClassOutputParam(a.type)
  )
  if stripped >= 1 and envelope_outputs >= 2:
    return 3
  if stripped >= 1:
    return 2
  if envelope_outputs >= 1:
    return 1
  return 0


# ---------------------------------------------------------------------------
# Envelope codegen (binder-coupled)
# ---------------------------------------------------------------------------


def ensure_result_struct(b, method, args, className, overloadPostfix, templateDecl, templateArgs, theClass=None):
  """Register the value_object result struct for an RBV method.

  Returns ``(structName, struct_fields, output_params, stripped_indices,
  disposable_field_names)`` or ``None`` when the method's return shape is
  not RBV-eligible.
  """
  ret_type = method.result_type
  if ret_type.spelling != "void" and ret_type.get_canonical().kind == clang.cindex.TypeKind.POINTER:
    return None
  if ret_type.kind == clang.cindex.TypeKind.LVALUEREFERENCE:
    pointee = ret_type.get_pointee()
    if not pointee.is_const_qualified():
      return None

  output_params = [(i, a) for i, a in enumerate(args)
                   if isOutputParam(a.type) and not isClassOutputParam(a.type)]
  stripped_indices = set(i for i, a in enumerate(args) if shouldStripParam(a.type, method))

  structName = f"{className}_{method.spelling}_Result"
  if overloadPostfix:
    structName += overloadPostfix

  effective_output_names = dict(b._effectiveOutputNames(theClass, method, args))

  struct_fields = []
  disposable_field_names = []
  for i, arg in output_params:
    name = effective_output_names.get(i, b._getArgName(arg, i))
    pointee = arg.type.get_pointee()
    cppType = b._resolveArgType(arg, templateDecl, templateArgs)
    if _isHandleType(pointee):
      cppType = pointee.spelling
      disposable_field_names.append(name)
    elif pointee.get_canonical().spelling in builtInTypes:
      cppType = pointee.get_canonical().spelling
    elif pointee.kind == clang.cindex.TypeKind.ENUM or pointee.get_canonical().kind == clang.cindex.TypeKind.ENUM:
      cppType = pointee.spelling
    struct_fields.append((name, cppType))

  has_nonvoid_return = method.result_type.spelling != "void"
  if has_nonvoid_return:
    ret = method.result_type
    if ret.kind == clang.cindex.TypeKind.LVALUEREFERENCE:
      ret = ret.get_pointee()
    retSpelling = ret.spelling.replace("const ", "").strip()
    retType = b.resolveWithCanonicalFallback(retSpelling, ret, templateDecl, templateArgs)
    if retType.endswith(' &'):
      retType = retType[:-2].strip()
    if retType.startswith('const '):
      retType = retType[6:].strip()
    ret_field_name = ENVELOPE_RETURN_FIELD
    existing_names = {n for n, _ in struct_fields}
    if ret_field_name in existing_names:
      ret_field_name = ENVELOPE_RETURN_FIELD_COLLISION
    struct_fields.insert(0, (ret_field_name, retType))
    ret_canonical = ret.get_canonical()
    if _isHandleType(ret) or _isHandleType(ret_canonical) or _isDefaultConstructibleClass(ret_canonical):
      if ret_canonical.spelling not in builtInTypes and not (
        ret.kind == clang.cindex.TypeKind.ENUM or ret_canonical.kind == clang.cindex.TypeKind.ENUM
      ):
        disposable_field_names.insert(0, ret_field_name)

  field_key = tuple((fname, ftype) for fname, ftype in struct_fields)

  existing = b._emitted_structs.get(structName)
  if existing is not None and existing != field_key:
    counter = 2
    while f"{structName}_{counter}" in b._emitted_structs:
      counter += 1
    structName = f"{structName}_{counter}"
  b._emitted_structs[structName] = field_key

  needs_dispose = bool(disposable_field_names)
  is_s1_envelope_path = bool(output_params) and not needs_dispose
  already_defined = any(f"struct {structName} {{" in d for d in b._result_struct_defs)
  if not already_defined and is_s1_envelope_path:
    struct_def = f"struct {structName} {{\n"
    for fname, ftype in struct_fields:
      struct_def += f"  {ftype} {fname};\n"
    struct_def += "};\n\n"
    b._result_struct_defs.append(struct_def)

  already_registered = any(f'"{structName}"' in r for r in b._result_struct_registrations)
  if not already_registered and is_s1_envelope_path:
    reg = f"  value_object<{structName}>(\"{structName}\")\n"
    for fname, _ftype in struct_fields:
      reg += f"    .field(\"{fname}\", &{structName}::{fname})\n"
    reg += "  ;\n"
    b._result_struct_registrations.append(reg)

  return (structName, struct_fields, output_params, stripped_indices, disposable_field_names)


def emit_rbv_collision_dispatch(b, theClass, colliding_methods, js_arity, className, templateDecl, templateArgs):
  """Emit separate typed bindings for methods that collide at same JS arity due to RBV stripping.

  Each method gets its own binding with the same name. The patched embind
  runtime handles JS-side type dispatch. RBV optional_override wrappers remain
  for value_object packing but without type discrimination logic.
  """
  # Note: lazy import to avoid surfacing SkipException at module load.
  from ocjs_bindgen.codegen.wasm_common import SkipException

  output = ""
  for m in colliding_methods:
    args = list(m.get_arguments())
    has_output = any(isOutputParam(a.type) for a in args)
    # Both branches call processMethodOrProperty identically; preserved as
    # two arms for parity with the legacy implementation in case future
    # divergence is needed (e.g. distinct logging).
    if has_output:
      try:
        output += b.processMethodOrProperty(theClass, m, templateDecl, templateArgs, overload_index=0, override_postfix="")
      except SkipException as e:
        print(str(e))
    else:
      try:
        output += b.processMethodOrProperty(theClass, m, templateDecl, templateArgs, overload_index=0, override_postfix="")
      except SkipException as e:
        print(str(e))

  return output


def emit_output_param_binding(b, theClass, method, args, className, classTypeName, overloadPostfix, templateDecl, templateArgs):
  """Emit the embind binding lambda for a method with OCJS-classified output parameters.

  See ``EmbindBindings._emitOutputParamBinding`` for the S0/S1/S2 shape contract.
  """
  result = ensure_result_struct(b, method, args, className, overloadPostfix, templateDecl, templateArgs, theClass=theClass)
  if result is None:
    return None
  structName, struct_fields, output_params, stripped_indices, disposable_field_names = result
  has_nonvoid_return = method.result_type.spelling != "void"
  needs_dispose = b._containerNeedsDispose(disposable_field_names)

  lambda_params = []
  elided_handle_decls = []
  optional_output_decls = []
  optional_output_values = {}
  kept = [(i, arg) for i, arg in enumerate(args)
          if not shouldStripParam(arg.type, method)]
  optional_output_indices = set()
  if output_arity_is_unambiguous(theClass, method):
    optional_from = trailing_primitive_output_run(kept, method)
    optional_output_indices = {i for i, _arg in kept[optional_from:]}
  if not method.is_static_method():
    constPrefix = "const " if method.is_const_method() else ""
    lambda_params.append(f"{constPrefix}{classTypeName}& self")

  class_output_call_types = {}

  for i, arg in enumerate(args):
    name = b._getArgName(arg, i)
    string_view_owning = stringViewOwningType(arg.type)
    if string_view_owning is not None:
      lambda_params.append(f"{string_view_owning} {name}")
      continue
    if b._needsCStringWrapper(arg.type):
      lambda_params.append(f"std::string {name}")
      continue
    hasDefault = any(x.spelling == "=" for x in list(arg.get_tokens()))
    refArrayMatch = (
      re.match(r"^(.*?)\s*\(&\)\[(\d+)\]\s*$", arg.type.spelling)
      if not hasDefault else None
    )
    plainArrayMatch = (
      re.match(r"^(.*?)\s*\[(\d+)\]\s*$", arg.type.spelling)
      if not hasDefault and refArrayMatch is None else None
    )
    if refArrayMatch:
      elementType = refArrayMatch.group(1).strip()
      arrayCount = refArrayMatch.group(2)
      lambda_params.append(f"{elementType} (&{name})[{arrayCount}]")
      continue
    if plainArrayMatch:
      elementType = plainArrayMatch.group(1).strip()
      arrayCount = plainArrayMatch.group(2)
      lambda_params.append(f"{elementType} {name}[{arrayCount}]")
      continue
    argType = b.getOriginalArgumentType(arg, templateDecl, templateArgs)
    if isOutputParam(arg.type):
      pointee = arg.type.get_pointee()
      if isHandleOutputParam(arg.type):
        elided_handle_decls.append(f"        {pointee.spelling} {name};\n")
        continue
      if isClassOutputParam(arg.type):
        raw = pointee.get_canonical().spelling.replace("const ", "").strip()
        class_output_call_types[i] = b.replaceTemplateArgs(raw, templateArgs)
        lambda_params.append(f"::emscripten::val {name}")
        continue
      if pointee.get_canonical().spelling in builtInTypes:
        argType = pointee.get_canonical().spelling
      elif pointee.kind == clang.cindex.TypeKind.ENUM or pointee.get_canonical().kind == clang.cindex.TypeKind.ENUM:
        argType = pointee.spelling
    if i in optional_output_indices:
      value_name = f"_ocjs_{name}"
      pointee = arg.type.get_pointee()
      if (
        pointee.kind == clang.cindex.TypeKind.ENUM
        or pointee.get_canonical().kind == clang.cindex.TypeKind.ENUM
      ):
        argType = b._getOptionalInnerType(arg, templateDecl, templateArgs)
      # Every emitted `std::optional<T>` needs a matching
      # `register_optional<T>()` in this class's EMSCRIPTEN_BINDINGS block,
      # not just the enum ones `_getOptionalInnerType` records. Without it the
      # binding only works when another TU happens to register `T` first.
      inner_types = getattr(b, "_optional_inner_types", None)
      if inner_types is not None and argType not in inner_types:
        inner_types.append(argType)
      lambda_params.append(f"std::optional<{argType}> {name}")
      default_value = f"static_cast<{argType}>(0)" if " " in argType else f"{argType}{{}}"
      optional_output_decls.append(
        f"        {argType} {value_name} = {name}.value_or({default_value});\n"
      )
      optional_output_values[i] = value_name
      continue
    lambda_params.append(f"{argType} {name}")

  call_args = []
  for i, arg in enumerate(args):
    name = b._getArgName(arg, i)
    if b._needsCStringWrapper(arg.type):
      if not arg.type.get_canonical().get_pointee().is_const_qualified() or arg.type.is_const_qualified():
        call_args.append(f"strdup({name}.c_str())")
      else:
        call_args.append(f"{name}.c_str()")
    elif i in class_output_call_types:
      call_args.append(f"*{name}.as<{class_output_call_types[i]}*>(emscripten::allow_raw_pointers())")
    else:
      call_args.append(optional_output_values.get(i, name))

  caller = "self." if not method.is_static_method() else f"{classTypeName}::"
  call_str = f"{caller}{method.spelling}({', '.join(call_args)})"

  envelope_is_empty = not output_params and not has_nonvoid_return
  envelope_native_only = not output_params and has_nonvoid_return

  body = "".join(elided_handle_decls + optional_output_decls)
  params_str = ", ".join(lambda_params)

  if envelope_is_empty:
    body += f"        {call_str};\n"
    return f"\n      optional_override([]({params_str}) -> void {{\n{body}      }})"

  if envelope_native_only:
    ret = method.result_type
    if ret.kind == clang.cindex.TypeKind.LVALUEREFERENCE:
      ret = ret.get_pointee()
    retSpelling = ret.spelling.replace("const ", "").strip()
    retType = b.resolveWithCanonicalFallback(retSpelling, ret, templateDecl, templateArgs)
    if retType.endswith(' &'):
      retType = retType[:-2].strip()
    if retType.startswith('const '):
      retType = retType[6:].strip()
    body += f"        return {call_str};\n"
    return f"\n      optional_override([]({params_str}) -> {retType} {{\n{body}      }})"

  if has_nonvoid_return:
    body += f"        auto ret = {call_str};\n"
  else:
    body += f"        {call_str};\n"

  if needs_dispose:
    body += "        ::emscripten::val out = ::emscripten::val::object();\n"
    if has_nonvoid_return:
      ret_field_name = struct_fields[0][0]
      body += f'        out.set("{ret_field_name}", ret);\n'
    for i, arg in output_params:
      name = b._getArgName(arg, i)
      body += f'        out.set("{name}", {optional_output_values.get(i, name)});\n'
    body += "        out.set(::ocjs::getSymbolDispose(), ::ocjs::getRbvDispose());\n"
    body += "        return out;\n"
    return f"\n      optional_override([]({params_str}) -> ::emscripten::val {{\n{body}      }})"

  return_fields = []
  if has_nonvoid_return:
    return_fields.append("ret")
  for i, arg in output_params:
    name = b._getArgName(arg, i)
    return_fields.append(optional_output_values.get(i, name))
  body += f"        return {structName}{{{', '.join(return_fields)}}};\n"
  return f"\n      optional_override([]({params_str}) -> {structName} {{\n{body}      }})"
