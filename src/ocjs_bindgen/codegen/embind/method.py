"""Embind method/property codegen (Phase 2 PR 2.3).

Owns:

* :func:`process_method_or_property` — emit a single method or field binding
  (with C-string wrapping, value-wrapper escape hatch, output-param hand-off)
* :func:`emit_suffixed_method` — `_N` suffix variants for val-ambiguous overloads
* :func:`process_method_group` — same-name overload group orchestrator
  (rvalue filter, JS dedup, RBV-collision dispatch, val dispatch trees)
"""

from __future__ import annotations

from collections import defaultdict

import clang.cindex

from filter.filterMethodOrProperties import filterMethodOrProperty  # noqa: F401  (kept for parity with binders)
from ocjs_bindgen.codegen import dispatch as _dispatch
from ocjs_bindgen.codegen import rbv as _rbv
from ocjs_bindgen.codegen.wasm_common import SkipException, getMethodOverloadPostfix
from ocjs_bindgen.naming.cpp import getClassQualifiedName, getClassTypeName
from ocjs_bindgen.predicates.args import (
  isOutputParam,
  shouldStripParam,
)
from ocjs_bindgen.predicates.types import (
  builtInTypes,
  isCString,
  stringViewOwningType,
  unbindablePointerTypes,
)


def _merge(sep, *strings):
  return sep.join(strings)


def _pick(condition, strTrue, strFalse):
  return strTrue if condition else strFalse


def _pick_wrap(condition, wrapStart, center, wrapEnd):
  return (wrapStart[0] if condition else wrapStart[1]) + center + (wrapEnd[0] if condition else wrapEnd[1])


def _indent(level):
  return " " * level * 2


def has_string_view_arg(args):
  """Return whether any method argument needs an owning-string boundary."""
  return any(stringViewOwningType(arg.type) is not None for arg in args)


def embind_lambda_param_type(b, arg, templateDecl=None, templateArgs=None):
  """Use an Embind-registered owning string for string-view parameters."""
  owning = stringViewOwningType(arg.type)
  if owning is not None:
    return owning
  return b.getOriginalArgumentType(arg, templateDecl, templateArgs)


def process_method_or_property(b, theClass, method, templateDecl=None, templateArgs=None, overload_index=0, override_postfix=None):
  """Emit a single method or field binding."""
  output = ""
  className = getClassTypeName(theClass, templateDecl)
  if className == "":
    className = theClass.type.spelling
  classCpp = getClassQualifiedName(theClass, templateDecl)
  if not classCpp:
    classCpp = className
  if method.access_specifier == clang.cindex.AccessSpecifier.PUBLIC and method.kind == clang.cindex.CursorKind.CXX_METHOD and not method.spelling.startswith("operator"):
    [overloadPostfix, numOverloads] = getMethodOverloadPostfix(theClass, method)
    if override_postfix is not None:
      overloadPostfix = override_postfix

    args = list(method.get_arguments())
    b._checkUnbindableArgs(method.spelling, theClass.spelling, args)

    hasOutputParams = any(isOutputParam(a.type) for a in args)
    hasCStringArgs = any(b._needsCStringWrapper(a.type) for a in args)
    hasStringViewArgs = has_string_view_arg(args)
    returnIsCString = b._needsCStringWrapper(method.result_type)

    functionBinding = None
    if hasOutputParams:
      functionBinding = b._emitOutputParamBinding(
        theClass, method, args, className, classCpp, overloadPostfix, templateDecl, templateArgs)
    if functionBinding is None and hasOutputParams:
      print(f"Skipping {className}::{method.spelling}: output params with unbindable return type")
      return ""
    if functionBinding is None and (hasCStringArgs or hasStringViewArgs or returnIsCString):
      def needsCStringOrLvalueWrapper(type):
        return (
          stringViewOwningType(type) is not None
          or type.kind == clang.cindex.TypeKind.LVALUEREFERENCE and (
            type.get_pointee().kind == clang.cindex.TypeKind.POINTER or (
              theClass.kind == clang.cindex.CursorKind.CLASS_TEMPLATE and
              templateArgs is not None and
              type.get_pointee().spelling in templateArgs and
              templateArgs[type.get_pointee().spelling].get_canonical().spelling in builtInTypes
            )
          ) or (
            type.get_canonical().kind == clang.cindex.TypeKind.POINTER and
            isCString(type)
          )
        )
      argsNeedingWrapper = list(map(lambda arg: needsCStringOrLvalueWrapper(arg.type), args))
      returnNeedsWrapper = needsCStringOrLvalueWrapper(method.result_type)
      def replaceTemplateArgs(x):
        if templateArgs is not None and args[x[0]].type.get_pointee().spelling.replace("const ", "") in templateArgs:
          return args[x[0]].type.spelling.replace(args[x[0]].type.get_pointee().spelling.replace("const ", ""), templateArgs[args[x[0]].type.get_pointee().spelling.replace("const ", "")].spelling)
        else:
          return args[x[0]].type.spelling
      def getArgName(x):
        return _pick(
          not args[x[0]].spelling == "",
          args[x[0]].spelling,
          f"argNo{str(x[0])}"
        )
      classTypeName = classCpp
      wrappedParamTypes = _merge(", ", *map(lambda x:
        _pick(
          x[1],
          "std::string" if isCString(args[x[0]].type) else (
            stringViewOwningType(args[x[0]].type) or "emscripten::val"
          ),
          replaceTemplateArgs(x)
        ),
        enumerate(argsNeedingWrapper)
      ))
      wrappedParamTypesAndNames = _merge(", ", *map(lambda x:
        _pick(
          x[1],
          f"std::string {getArgName(x)}" if isCString(args[x[0]].type) else (
            f"{stringViewOwningType(args[x[0]].type)} {getArgName(x)}"
            if stringViewOwningType(args[x[0]].type) is not None
            else f"emscripten::val {getArgName(x)}"
          ),
          f"{replaceTemplateArgs(x)} {getArgName(x)}",
        ), enumerate(argsNeedingWrapper)))
      def generateInvocationArgs(x):
        if x[1]:
          if isCString(args[x[0]].type):
            if not args[x[0]].type.get_canonical().get_pointee().is_const_qualified() or args[x[0]].type.is_const_qualified():
              return f"strdup({getArgName(x)}.c_str())"
            else:
              return f"{getArgName(x)}.c_str()"
          elif stringViewOwningType(args[x[0]].type) is not None:
            return getArgName(x)
          else:
            return getArgName(x)
        else:
          return getArgName(x)
      returnNeedsCStringWrapper = isCString(method.result_type)
      returnNeedsValWrapper = returnNeedsWrapper and not returnNeedsCStringWrapper
      resultTypeSpelling = \
        _pick(returnNeedsValWrapper, "emscripten::val",
          _pick(returnNeedsCStringWrapper, "std::string",
            b.resolveWithCanonicalFallback(method.result_type.spelling, method.result_type, templateDecl, templateArgs)))
      functionBindingHead = \
        _merge("",
          "\n",
          _indent(3),
          _pick_wrap(not method.is_static_method(),
            [f"std::function<{resultTypeSpelling}(", f"(({resultTypeSpelling} (*)("],
            _merge("",
              _pick(not method.is_static_method(), f"{classTypeName}&", ""),
              _pick(not method.is_static_method() and len(args) > 0, ", ", ""),
              wrappedParamTypes,
            ),
            [")>(", "))"]
          ),
          _merge("",
            "[](",
            _pick(not method.is_static_method(), f"{classTypeName}& that", ""),
            _pick(not method.is_static_method() and len(args) > 0, ", ", ""),
            wrappedParamTypesAndNames,
            ")",
          ),
          f" -> {resultTypeSpelling} {{\n",
        )
      functionBindingBody = \
        _merge("",
          _indent(4),
          _pick(
            not method.result_type.spelling == "void",
            _merge("",
              _pick(not isCString(method.result_type) and (method.result_type.is_const_qualified() or method.result_type.get_pointee().is_const_qualified()), "const ", ""),
              "auto",
              _pick(not isCString(method.result_type) and method.result_type.kind == clang.cindex.TypeKind.LVALUEREFERENCE, "& ", " "),
              "ret = ",
            ),
            ""
          ),
          _merge("",
            _pick(not method.is_static_method(), "that.", f"{classCpp}::"),
            f'{method.spelling}({_merge(", ", *map(lambda x: generateInvocationArgs(x), enumerate(argsNeedingWrapper)))})',
          ),
          ";\n",
          _pick(
            method.result_type.spelling == "void",
            "",
            _pick(
              returnNeedsValWrapper,
              _pick(
                method.result_type.kind == clang.cindex.TypeKind.POINTER,
                _merge("",
                  _indent(4),
                  "return ret == nullptr ? emscripten::val::null() : emscripten::val(static_cast<",
                    b.getTypedefedTemplateTypeAsString(method.result_type.spelling, templateDecl, templateArgs),
                  ">(ret), allow_raw_pointers());\n",
                ),
                f"{_indent(4)}return emscripten::val(ret, allow_raw_pointers());\n",
              ),
              _pick(
                returnNeedsCStringWrapper,
                _merge("",
                  _indent(4),
                  "return ret == nullptr ? std::string() : std::string(ret);\n",
                ),
                f"{_indent(4)}return ret;\n",
              ),
            ),
          ),
        )
      functionBinding = \
        _merge("",
          functionBindingHead,
          functionBindingBody,
          f"{_indent(3)}}}\n",
          f"{_indent(2)})",
        )
    if functionBinding is None:
      if b._returnTypeRequiresValueWrapper(method):
        b._ret_wrapper_serial += 1
        storage = f"__ocjs_ret_{b._ret_wrapper_serial}"
        args_m = list(method.get_arguments())
        arg_decl = []
        fwd = []
        for i, a in enumerate(args_m):
          typ = embind_lambda_param_type(b, a, templateDecl, templateArgs)
          nm = a.spelling if a.spelling else f"a{i}"
          arg_decl.append(f"{typ} {nm}")
          fwd.append(nm)
        decls = ", ".join(arg_decl)
        call_fwd = ", ".join(fwd)
        rt = method.result_type
        return_by_ref = rt.kind in (
          clang.cindex.TypeKind.LVALUEREFERENCE,
          clang.cindex.TypeKind.RVALUEREFERENCE,
        )
        ret_clang_type = rt.get_pointee() if return_by_ref else rt
        ret_cpp = b.resolveWithCanonicalFallback(
          ret_clang_type.spelling, ret_clang_type, templateDecl, templateArgs)
        if method.is_static_method():
          call_expr = f"{classCpp}::{method.spelling}({call_fwd})"
        else:
          call_expr = f"self.{method.spelling}({call_fwd})"
        if return_by_ref:
          if method.is_static_method():
            functionBinding = _merge("",
              " optional_override([](",
              decls,
              ") -> emscripten::val {\n",
              _indent(3),
              "auto& ret = ",
              call_expr,
              ";\n",
              _indent(3),
              "return emscripten::val(&ret, allow_raw_pointers());\n",
              _indent(2),
              "})",
            )
          else:
            const_self = "const " if method.is_const_method() else ""
            self_and = f"{const_self}{classCpp}& self"
            sep = ", " if decls else ""
            functionBinding = _merge("",
              " optional_override([](",
              self_and,
              sep,
              decls,
              ") -> emscripten::val {\n",
              _indent(3),
              "auto& ret = ",
              call_expr,
              ";\n",
              _indent(3),
              "return emscripten::val(&ret, allow_raw_pointers());\n",
              _indent(2),
              "})",
            )
        else:
          if method.is_static_method():
            functionBinding = _merge("",
              " optional_override([](",
              decls,
              ") -> emscripten::val {\n",
              _indent(3),
              f"thread_local {ret_cpp} {storage};\n",
              _indent(3),
              f"{storage} = {call_expr};\n",
              _indent(3),
              f"return emscripten::val(&{storage}, allow_raw_pointers());\n",
              _indent(2),
              "})",
            )
          else:
            const_self = "const " if method.is_const_method() else ""
            self_and = f"{const_self}{classCpp}& self"
            sep = ", " if decls else ""
            functionBinding = _merge("",
              " optional_override([](",
              self_and,
              sep,
              decls,
              ") -> emscripten::val {\n",
              _indent(3),
              f"thread_local {ret_cpp} {storage};\n",
              _indent(3),
              f"{storage} = {call_expr};\n",
              _indent(3),
              f"return emscripten::val(&{storage}, allow_raw_pointers());\n",
              _indent(2),
              "})",
            )
      elif numOverloads == 1:
        functionBinding = " &" + classCpp + "::" + method.spelling
      else:
        functionBinding = _merge("",
          " select_overload<",
          b.resolveWithCanonicalFallback(method.result_type.spelling, method.result_type, templateDecl, templateArgs),
          f'({_merge(", ", *map(lambda x: b.getOriginalArgumentType(x, templateDecl, templateArgs), list(method.get_arguments())))})',
          _pick(method.is_const_method(), "const", ""),
          _pick(not method.is_static_method(), f", {classCpp}", ""),
          f">(&{classCpp}::{method.spelling})",
        )

    if method.is_static_method():
      functionCommand = "class_function"
    else:
      functionCommand = "function"

    output += f"{_indent(2)}.{functionCommand}(\"{method.spelling}{overloadPostfix}\",{functionBinding}, allow_raw_pointers())\n"
  if method.access_specifier == clang.cindex.AccessSpecifier.PUBLIC and method.kind == clang.cindex.CursorKind.FIELD_DECL:
    if method.type.kind == clang.cindex.TypeKind.CONSTANTARRAY:
      print("Cannot handle array properties, skipping " + className + "::" + method.spelling)
    elif not method.type.get_pointee().kind == clang.cindex.TypeKind.INVALID:
      print("Cannot handle pointer properties, skipping " + className + "::" + method.spelling)
    else:
      if not b._isWireSafeFieldType(method.type):
        return output
      output += f"{_indent(2)}.property(\"{method.spelling}\", &{classCpp}::{method.spelling})\n"
  return output


def emit_suffixed_method(b, theClass, m, suffix, className, templateDecl, templateArgs):
  """Emit a single method binding with a `_N` suffix for ambiguous overloads."""
  args = list(m.get_arguments())
  argsNeedingWrapper = any(
    m_arg.type.kind == clang.cindex.TypeKind.LVALUEREFERENCE and (
      m_arg.type.get_pointee().get_canonical().spelling in builtInTypes or
      m_arg.type.get_pointee().kind == clang.cindex.TypeKind.ENUM
    ) or isCString(m_arg.type) or stringViewOwningType(m_arg.type) is not None
    for m_arg in args
  )
  if argsNeedingWrapper:
    try:
      return b.processMethodOrProperty(theClass, m, templateDecl, templateArgs, overload_index=0)
    except SkipException as e:
      print(str(e))
      return ""
  argList = list(m.get_arguments())
  returnType = b.resolveWithCanonicalFallback(m.result_type.spelling, m.result_type, templateDecl, templateArgs)
  argTypesStr = ', '.join(b.getOriginalArgumentType(a, templateDecl, templateArgs) for a in argList)
  constStr = "const" if m.is_const_method() else ""
  classCpp = getClassQualifiedName(theClass, templateDecl)
  if not classCpp:
    classCpp = className
  if m.is_static_method():
    selectStr = f' select_overload<{returnType}({argTypesStr})>(&{classCpp}::{m.spelling})'
  else:
    selectStr = f' select_overload<{returnType}({argTypesStr}){constStr}, {classCpp}>(&{classCpp}::{m.spelling})'
  funcCmd = "class_function" if m.is_static_method() else "function"
  return f'{_indent(2)}.{funcCmd}("{m.spelling}{suffix}",{selectStr}, allow_raw_pointers())\n'


def process_method_group(b, theClass, methods, templateDecl=None, templateArgs=None):
  """Process a group of methods with the same name, using dispatch for same-arity groups.

  Phase 3 architecture (post-gate-refactor): this function owns
  multi-overload dispatch (RBV, val-dispatch, arity-grouped). The
  trailing-default expansion lives DOWNSTREAM in
  ``ocjs_bindgen.codegen.bindings.Bindings.processMethodOrProperty``,
  which routes EACH overload independently through the classifier ➜
  strategy router. The classifier reads ``sibling_count`` on the
  ``OverloadDescriptor`` (populated from ``numOverloads - 1``) and
  returns ``matrix_row == 34, primitive == 'val'`` for multi-overload
  trailing defaults. The router then dispatches to
  ``val_default.emit_method_with_val_default`` per overload — each
  lambda owns its arity range, the distinct ``overload_postfix``
  values keep the embind registrations separate, and the val unwrap
  applies the C++ default per slot.

  Matrix row 27 (JS-effective arity range overlap, post-RBV +
  post-default-expansion) is enforced here via the
  ``_jsEffectiveArityCollisions`` precondition below: when the
  colliding overloads can be JS-resolved by per-slot type the
  diagnostic is logged and the existing val-dispatch path takes the
  group; when they CAN'T be resolved, ``SkipException`` aborts
  emission (T1 emit-time rejection). The R6 emit-time guard
  (non-const ref in optional/val-default) is enforced downstream
  inside ``processMethodOrProperty``; R4 / T1 are unreachable here
  because the classifier owns the primitive choice and the router
  declines val-default emission when the return-side wrappers
  dominate. See
  ``docs/research/ocjs-optional-overload-resolution-blueprint.md`` —
  Emit-Time Guards, and
  ``docs/research/ocjs-phase-3-val-dispatch-completion.md`` § Row 34.
  """
  output = ""
  className = getClassTypeName(theClass, templateDecl)
  if className == "":
    className = theClass.type.spelling
  classCpp = getClassQualifiedName(theClass, templateDecl)
  if not classCpp:
    classCpp = className

  bindable = []
  for m in methods:
    try:
      b._checkUnbindableArgs(m.spelling, theClass.spelling, list(m.get_arguments()))
      bindable.append(m)
    except SkipException as e:
      print(str(e))

  if not bindable:
    return output

  bindable = [m for m in bindable if not any(
    a.type.kind == clang.cindex.TypeKind.RVALUEREFERENCE
    for a in m.get_arguments()
  )]
  if not bindable:
    return output

  bindable = _rbv.select_js_effective_overload_survivors(
    b, bindable, templateDecl, templateArgs
  )
  if not bindable:
    return output

  by_arity = defaultdict(list)
  for m in bindable:
    by_arity[len(list(m.get_arguments()))].append(m)

  all_unique_arities = all(len(group) == 1 for group in by_arity.values())

  by_js_arity = defaultdict(list)
  for m in bindable:
    by_js_arity[b._getJsArity(m)].append(m)

  # Rule 3 precondition (matrix row 27): surface every same-name overload
  # pair whose JS-effective arity RANGES (post-RBV-elision +
  # post-default-expansion) intersect, beyond the strict same-max-JS-arity
  # collisions detected immediately below.
  #
  # Phase 2 upgrade: when the colliding overloads are NOT resolvable via
  # val-discrimination (i.e. they have IDENTICAL JS-distinguishable
  # types at every overlapping arity), this raises ``SkipException``
  # to abort emission for the group — matrix row 27 unresolvable case.
  # Resolvable collisions still log the diagnostic and route through
  # the existing JS-effective dedup / val-dispatch paths below.
  rule3_collisions = b._jsEffectiveArityCollisions(bindable, templateDecl, templateArgs)
  for m_a, m_b, lo, hi in rule3_collisions:
    if b._getJsArity(m_a) == b._getJsArity(m_b):
      # The strict same-max-arity case is handled by the existing
      # ``js_collisions`` dispatcher immediately below; suppress the
      # diagnostic noise so the build log only surfaces NEW overlaps
      # that the existing path misses.
      continue
    resolvable = _rbv.is_collision_resolvable_via_val(
      b, m_a, m_b, lo, hi, templateDecl, templateArgs,
    )
    if not resolvable:
      raise SkipException(
        f"[rule 3 / matrix row 27] {className}.{m_a.spelling}: "
        f"JS-effective arity ranges intersect at [{lo}..{hi}] between "
        f"raw-arity-{len(list(m_a.get_arguments()))} and raw-arity-"
        f"{len(list(m_b.get_arguments()))} overloads AND the JS-type "
        f"signatures are identical at every overlapping arity — "
        f"val-discrimination cannot resolve. Defaults composed with "
        f"RBV elision produced an unresolvable dispatch ambiguity; "
        f"either dedup the source-level overloads or annotate one "
        f"with the matrix row 11 / row 35 marker. Skipping group."
      )
    print(
      f"[rule 3 / matrix row 27] {className}.{m_a.spelling}: "
      f"JS-effective arity ranges intersect at [{lo}..{hi}] "
      f"between overloads with raw C++ arities "
      f"{len(list(m_a.get_arguments()))} and {len(list(m_b.get_arguments()))}; "
      f"defaults span composes with RBV elision. "
      f"Routing to val-discrimination (resolvable via per-slot JS types)."
    )

  js_collisions = {
    js_arity: group
    for js_arity, group in by_js_arity.items()
    if len(group) > 1 and len(set(len(list(m.get_arguments())) for m in group)) > 1
  }

  if js_collisions:
    collision_methods = set(id(m) for group in js_collisions.values() for m in group)
    for js_arity, group in sorted(js_collisions.items()):
      output += b._emitRbvCollisionDispatch(theClass, group, js_arity, className, templateDecl, templateArgs)
    bindable = [m for m in bindable if id(m) not in collision_methods]
    if not bindable:
      return output
    by_arity = defaultdict(list)
    for m in bindable:
      by_arity[len(list(m.get_arguments()))].append(m)
    all_unique_arities = all(len(group) == 1 for group in by_arity.values())

  if all_unique_arities:
    arity_idx = {}
    for m in bindable:
      nargs = len(list(m.get_arguments()))
      idx = arity_idx.get(nargs, 0)
      arity_idx[nargs] = idx + 1
      try:
        output += b.processMethodOrProperty(theClass, m, templateDecl, templateArgs, overload_index=idx, override_postfix="")
      except SkipException as e:
        print(str(e))
    return output

  all_methods_of_name = [m for m in theClass.get_children()
                         if m.kind == clang.cindex.CursorKind.CXX_METHOD
                         and m.access_specifier == clang.cindex.AccessSpecifier.PUBLIC
                         and m.spelling == bindable[0].spelling]

  for arity, group in sorted(by_arity.items()):
    if len(group) == 1:
      try:
        output += b.processMethodOrProperty(theClass, group[0], templateDecl, templateArgs, overload_index=0, override_postfix="")
      except SkipException as e:
        print(str(e))
    else:
      def _method_has_wrapper_args(m):
        return any(
          (m_arg.type.kind == clang.cindex.TypeKind.LVALUEREFERENCE and
           not m_arg.type.get_pointee().is_const_qualified() and (
             m_arg.type.get_pointee().get_canonical().spelling in builtInTypes or
             m_arg.type.get_pointee().get_canonical().kind == clang.cindex.TypeKind.ENUM
           ) and not shouldStripParam(m_arg.type, m))
          or m_arg.type.get_canonical().spelling in unbindablePointerTypes
          for m_arg in m.get_arguments()
        )

      dispatchable = [m for m in group if not _method_has_wrapper_args(m)]
      wrapper_methods = [m for m in group if _method_has_wrapper_args(m)]

      if not dispatchable:
        arity_idx = {}
        for m in group:
          nargs = len(list(m.get_arguments()))
          idx = arity_idx.get(nargs, 0)
          arity_idx[nargs] = idx + 1
          try:
            output += b.processMethodOrProperty(theClass, m, templateDecl, templateArgs, overload_index=idx)
          except SkipException as e:
            print(str(e))
      else:
        if len(dispatchable) == 1:
          try:
            output += b.processMethodOrProperty(theClass, dispatchable[0], templateDecl, templateArgs, overload_index=0, override_postfix="")
          except SkipException as e:
            print(str(e))
        else:
          static_methods = [m for m in dispatchable if m.is_static_method()]
          instance_methods = [m for m in dispatchable if not m.is_static_method()]
          subsets = []
          if static_methods:
            subsets.append((static_methods, True))
          if instance_methods:
            subsets.append((instance_methods, False))
          for subset, isStatic in subsets:
            subset_return_types = set(m.result_type.get_canonical().spelling for m in subset)
            subset_mixed_returns = len(subset_return_types) > 1
            if len(subset) == 1:
              try:
                output += b.processMethodOrProperty(theClass, subset[0], templateDecl, templateArgs, overload_index=0, override_postfix="")
              except SkipException as e:
                print(str(e))
              continue
            subset_tree = _dispatch.build_dispatch_tree(b, subset, templateDecl=templateDecl, templateArgs=templateArgs)
            output += b._emitValDispatchMethod(theClass, subset[0].spelling, arity, subset_tree, classCpp, isStatic, templateDecl, templateArgs, mixed_returns=subset_mixed_returns)
            val_ambiguous = _dispatch.collect_ambiguous_overloads(subset_tree)
            for m in val_ambiguous:
              idx = all_methods_of_name.index(m) if m in all_methods_of_name else 0
              suffix = "_" + str(idx + 1)
              output += emit_suffixed_method(b, theClass, m, suffix, className, templateDecl, templateArgs)

        for m in wrapper_methods:
          idx = all_methods_of_name.index(m) if m in all_methods_of_name else 0
          suffix = "_" + str(idx + 1)
          output += emit_suffixed_method(b, theClass, m, suffix, className, templateDecl, templateArgs)

  return output
