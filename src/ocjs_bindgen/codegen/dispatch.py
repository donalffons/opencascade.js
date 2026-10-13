"""Dispatch-tree codegen extracted from `EmbindBindings` (Phase 2 PR 2.1).

This module owns every piece of the val-based dispatch pipeline:

* dataclasses describing the tree (`DispatchLeaf`/`DispatchBranch`/`DispatchAmbiguous`)
* tree construction (`build_dispatch_tree`)
* tree introspection (`collect_ambiguous_overloads`, `collect_ambiguous_primaries`,
  `tree_has_only_leaves`, `dispatch_primitive_sort_key`)
* codegen for both constructor and method dispatchers
  (`codegen_dispatch_tree`, `codegen_method_dispatch_tree`,
  `emit_val_dispatch_constructor`, `emit_val_dispatch_method`)

All functions take the calling `EmbindBindings` instance as `b` so the
implementation can call back into binder utilities (`_classify_js_type`,
`getOriginalArgumentType`, `resolveWithCanonicalFallback`) without the
class-level coupling that previously lived inside `bindings.py`.

The legacy `EmbindBindings._build_dispatch_tree` / `_codegen_dispatch_tree` /
`_emitValDispatch*` methods remain as thin delegators to keep the binder's
public surface unchanged. Sentinel layer-1+2 byte parity verifies behaviour
preservation.
"""

from __future__ import annotations

from collections import defaultdict
from dataclasses import dataclass, field
from typing import Any

from ocjs_bindgen.predicates.types import isCString, isRawPointerParam, stringViewOwningCast

# ---------------------------------------------------------------------------
# Tree shapes
# ---------------------------------------------------------------------------


@dataclass
class DispatchLeaf:
  overload: Any


@dataclass
class DispatchBranch:
  arg_position: int
  branches: dict = field(default_factory=dict)


@dataclass
class DispatchAmbiguous:
  overloads: list = field(default_factory=list)


# ---------------------------------------------------------------------------
# Tree introspection (no binder dependency)
# ---------------------------------------------------------------------------


def collect_ambiguous_overloads(tree):
  """Collect all overloads from `DispatchAmbiguous` nodes anywhere in `tree`."""
  if isinstance(tree, DispatchLeaf):
    return []
  if isinstance(tree, DispatchAmbiguous):
    return list(tree.overloads)
  if isinstance(tree, DispatchBranch):
    result = []
    for subtree in tree.branches.values():
      result.extend(collect_ambiguous_overloads(subtree))
    return result
  return []


def collect_ambiguous_primaries(tree, primaries):
  """Collect `id()` of the first overload in each `DispatchAmbiguous` group."""
  if isinstance(tree, DispatchLeaf):
    return
  if isinstance(tree, DispatchAmbiguous):
    primaries.add(id(tree.overloads[0]))
    return
  if isinstance(tree, DispatchBranch):
    for subtree in tree.branches.values():
      collect_ambiguous_primaries(subtree, primaries)


def tree_has_only_leaves(tree):
  """True iff the tree consists entirely of `DispatchLeaf` nodes."""
  if isinstance(tree, DispatchLeaf):
    return True
  if isinstance(tree, DispatchAmbiguous):
    return False
  if isinstance(tree, DispatchBranch):
    return all(isinstance(v, DispatchLeaf) for v in tree.branches.values())
  return False


def dispatch_primitive_sort_key(js_type_subtree_pair):
  """Order primitive JS branches: string_enum (membership) first, then booleans, ints, floats, strings."""
  jt = js_type_subtree_pair[0]
  cat = jt.category
  if cat == 'string_enum':
    return (0, jt.name)
  if cat == 'boolean':
    return (1, '')
  if cat == 'number_int':
    return (2, '')
  if cat == 'number_float':
    return (3, '')
  if cat == 'string_char':
    return (4, '')
  if cat == 'string':
    return (5, '')
  return (6, cat)


# ---------------------------------------------------------------------------
# Tree construction (binder-coupled — needs `_classify_js_type`)
# ---------------------------------------------------------------------------


def build_dispatch_tree(b, group, available_positions=None, templateDecl=None, templateArgs=None):
  """Recursively partition same-arity overloads by JS type checks.

  Returns `DispatchLeaf`, `DispatchBranch`, or `DispatchAmbiguous`.
  """
  if len(group) == 1:
    return DispatchLeaf(group[0])

  if available_positions is None:
    available_positions = list(range(len(list(group[0].get_arguments()))))

  if not available_positions:
    return DispatchAmbiguous(group)

  best_pos = None
  best_count = 0
  for p in available_positions:
    types = set()
    for ov in group:
      args = list(ov.get_arguments())
      if p < len(args):
        types.add(b._classify_js_type(args[p].type, templateDecl, templateArgs))
    if len(types) > best_count:
      best_count = len(types)
      best_pos = p

  if best_pos is None or best_count <= 1:
    return DispatchAmbiguous(group)

  type_groups = defaultdict(list)
  for ov in group:
    args = list(ov.get_arguments())
    js_type = b._classify_js_type(args[best_pos].type, templateDecl, templateArgs)
    type_groups[js_type].append(ov)

  remaining = [p for p in available_positions if p != best_pos]
  branches = {}
  for js_type, sub_group in type_groups.items():
    branches[js_type] = build_dispatch_tree(b, sub_group, remaining, templateDecl, templateArgs)

  return DispatchBranch(best_pos, branches)


# ---------------------------------------------------------------------------
# Codegen
# ---------------------------------------------------------------------------


def _convert_args(b, args, templateDecl, templateArgs):
  """Render JS-side `arg{i}` reads into C++ argument expressions."""
  conversions = []
  for i, arg in enumerate(args):
    if isRawPointerParam(arg.type) and not isCString(arg.type):
      conversions.append('nullptr')
      continue
    string_view_cast = stringViewOwningCast(f'arg{i}', arg.type)
    if string_view_cast is not None:
      # Embind has no binding for non-owning std::*string_view; lift through
      # the registered owning std::*string instead (see stringViewOwningCast).
      conversions.append(string_view_cast)
      continue
    cpp_type = b.getOriginalArgumentType(arg, templateDecl, templateArgs)
    js_type = b._classify_js_type(arg.type, templateDecl, templateArgs)
    if js_type.category == 'object':
      conversions.append(f'arg{i}.as<{cpp_type}>(emscripten::allow_raw_pointers())')
    elif js_type.category == 'string' and isCString(arg.type):
      conversions.append(f'arg{i}.as<std::string>().c_str()')
    else:
      canon = arg.type.get_canonical().spelling
      if "type-parameter-" in canon:
        canon = b.resolveWithCanonicalFallback(arg.type.spelling, arg.type, templateDecl, templateArgs)
      conversions.append(f'arg{i}.as<{canon}>()')
  return conversions


def _emit_branch_chain(emit_subtree, tree, sp):
  """Render the if/else-if/else chain for a `DispatchBranch`. `emit_subtree(subtree, indent)` returns subtree code."""
  code = ''
  first = True
  primitives = []
  objects = []
  for js_type, subtree in tree.branches.items():
    if js_type.category == 'object':
      objects.append((js_type, subtree))
    else:
      primitives.append((js_type, subtree))
  has_int = any(jt.category == 'number_int' for jt, _ in primitives)
  has_float = any(jt.category == 'number_float' for jt, _ in primitives)
  int_float_split = has_int and has_float
  primitives.sort(key=dispatch_primitive_sort_key)
  ordered = primitives + objects
  for idx, (js_type, subtree) in enumerate(ordered):
    is_last = (idx == len(ordered) - 1)
    if first:
      keyword = "if"
    elif is_last:
      keyword = "else"
    else:
      keyword = "else if"
    first = False
    if is_last:
      code += f'{sp}{keyword} {{\n'
    elif js_type.category == 'object':
      check = f'arg{tree.arg_position}.typeOf().as<std::string>() == "object" && !emscripten::val::module_property("{js_type.name}").isUndefined() && arg{tree.arg_position}.instanceof(emscripten::val::module_property("{js_type.name}"))'
      code += f'{sp}{keyword} ({check}) {{\n'
    elif js_type.category == 'boolean':
      check = f'arg{tree.arg_position}.typeOf().as<std::string>() == "boolean"'
      code += f'{sp}{keyword} ({check}) {{\n'
    elif js_type.category == 'string_enum':
      check = (
        f'arg{tree.arg_position}.typeOf().as<std::string>() == "string"'
        f' && !emscripten::val::module_property("{js_type.name}")'
        f'[arg{tree.arg_position}.as<std::string>()].isUndefined()'
      )
      code += f'{sp}{keyword} ({check}) {{\n'
    elif js_type.category == 'string':
      check = f'arg{tree.arg_position}.typeOf().as<std::string>() == "string"'
      code += f'{sp}{keyword} ({check}) {{\n'
    elif js_type.category == 'string_char':
      check = (
        f'arg{tree.arg_position}.typeOf().as<std::string>() == "string"'
        f' && arg{tree.arg_position}["length"].as<unsigned>() == 1'
      )
      code += f'{sp}{keyword} ({check}) {{\n'
    elif js_type.category == 'number_int' and int_float_split:
      check = f'arg{tree.arg_position}.typeOf().as<std::string>() == "number" && emscripten::val::global("Number").call<bool>("isInteger", arg{tree.arg_position})'
      code += f'{sp}{keyword} ({check}) {{\n'
    elif js_type.category == 'number_float' and int_float_split:
      check = f'arg{tree.arg_position}.typeOf().as<std::string>() == "number"'
      code += f'{sp}{keyword} ({check}) {{\n'
    else:
      check = f'arg{tree.arg_position}.typeOf().as<std::string>() == "number"'
      code += f'{sp}{keyword} ({check}) {{\n'
    code += emit_subtree(subtree, len(sp) + 2)
    code += f'{sp}}}\n'
  return code


def codegen_dispatch_tree(b, tree, className, useHandleOverride, templateDecl, templateArgs, ind=6, arity=None):
  """Recursively generate C++ if/else dispatch from a constructor dispatch tree."""
  sp = " " * ind
  if isinstance(tree, DispatchLeaf):
    args = list(tree.overload.get_arguments())
    if arity is not None:
      args = args[:arity]
    conversions = _convert_args(b, args, templateDecl, templateArgs)
    args_str = ", ".join(conversions)
    if useHandleOverride:
      return f'{sp}return opencascade::handle<{className}>(new {className}({args_str}));\n'
    return f'{sp}return new {className}({args_str});\n'

  if isinstance(tree, DispatchBranch):
    return _emit_branch_chain(
      lambda subtree, sub_ind: codegen_dispatch_tree(
        b, subtree, className, useHandleOverride, templateDecl, templateArgs, sub_ind, arity=arity,
      ),
      tree,
      sp,
    )

  if isinstance(tree, DispatchAmbiguous):
    fallback = DispatchLeaf(tree.overloads[0])
    return codegen_dispatch_tree(b, fallback, className, useHandleOverride, templateDecl, templateArgs, ind, arity=arity)

  return ''


def emit_val_dispatch_constructor(b, className, arity, tree, useHandleOverride, templateDecl, templateArgs):
  """Emit a single optional_override constructor with val-based dispatch for a same-arity group."""
  val_args = ", ".join([f"emscripten::val arg{i}" for i in range(arity)])
  if useHandleOverride:
    ret_type = f"opencascade::handle<{className}>"
  else:
    ret_type = f"{className}*"
  output = f"    .constructor(optional_override([]({val_args}) -> {ret_type} {{\n"
  output += codegen_dispatch_tree(b, tree, className, useHandleOverride, templateDecl, templateArgs, ind=6, arity=arity)
  if useHandleOverride:
    output += f"      return opencascade::handle<{className}>();\n"
  else:
    output += "      return nullptr;\n"
  output += "    }))\n"
  return output


def codegen_method_dispatch_tree(b, tree, classCpp, isStatic, templateDecl, templateArgs, ind=6, mixed_returns=False):
  """Generate C++ dispatch code for a method dispatch tree."""
  sp = " " * ind
  if isinstance(tree, DispatchLeaf):
    method = tree.overload
    args = list(method.get_arguments())
    conversions = _convert_args(b, args, templateDecl, templateArgs)
    args_str = ", ".join(conversions)
    caller = f"{classCpp}::" if method.is_static_method() else "self."
    has_return = method.result_type.spelling != "void"
    if mixed_returns:
      if has_return:
        policy = ", emscripten::allow_raw_pointers()" if isRawPointerParam(method.result_type) else ""
        return f'{sp}return emscripten::val({caller}{method.spelling}({args_str}){policy});\n'
      return f'{sp}{caller}{method.spelling}({args_str});\n{sp}return emscripten::val::undefined();\n'
    if has_return:
      return f'{sp}return {caller}{method.spelling}({args_str});\n'
    return f'{sp}{caller}{method.spelling}({args_str});\n{sp}return;\n'

  if isinstance(tree, DispatchBranch):
    return _emit_branch_chain(
      lambda subtree, sub_ind: codegen_method_dispatch_tree(
        b, subtree, classCpp, isStatic, templateDecl, templateArgs, sub_ind, mixed_returns=mixed_returns,
      ),
      tree,
      sp,
    )

  if isinstance(tree, DispatchAmbiguous):
    fallback = DispatchLeaf(tree.overloads[0])
    return codegen_method_dispatch_tree(b, fallback, classCpp, isStatic, templateDecl, templateArgs, ind, mixed_returns=mixed_returns)

  return ''


def emit_val_dispatch_method(b, theClass, methodName, arity, tree, classCpp, isStatic, templateDecl, templateArgs, mixed_returns=False):
  """Emit a single optional_override method binding with val-based dispatch for same-arity overloads."""
  val_args = ", ".join([f"emscripten::val arg{i}" for i in range(arity)])
  if isStatic:
    sig_args = val_args
    functionCommand = "class_function"
  else:
    sig_args = f"{classCpp}& self" + (", " + val_args if val_args else "")
    functionCommand = "function"

  ret_type = " -> emscripten::val" if mixed_returns else ""
  # `indent(2)` in the legacy binder = 4 spaces (level * 2).
  output = f'    .{functionCommand}("{methodName}", optional_override([]({sig_args}){ret_type} {{\n'
  output += codegen_method_dispatch_tree(b, tree, classCpp, isStatic, templateDecl, templateArgs, ind=6, mixed_returns=mixed_returns)
  output += "    }), allow_raw_pointers())\n"
  return output
