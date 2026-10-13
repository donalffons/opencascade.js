"""TypeScript constructor signature emission.

Extracted from `TypescriptBindings._emitTsConstructor`,
`processSimpleConstructor`, and `processOverloadedConstructors` (PR 2.4).
"""

from __future__ import annotations

from collections import defaultdict

import clang.cindex

from filter.filterMethodOrProperties import filterMethodOrProperty
from ocjs_bindgen.codegen.wasm_common import SkipException
from ocjs_bindgen.naming import getClassJsPublicName
from ocjs_bindgen.naming.cpp import getClassTypeName
from ocjs_bindgen.predicates.classes import inherited_template_base


def dedupe_js_equivalent_constructors(
  tsb,
  constructors,
  templateDecl=None,
  templateArgs=None,
):
  """Keep one constructor for each JavaScript-visible argument signature.

  C++ overloads such as ``const char*`` and ``std::string_view`` are distinct
  to Clang but both accept the same JavaScript ``string``. The runtime binder
  resolves an indistinguishable group to one equivalent implementation; the
  declaration emitter must do the same before ambiguity analysis, otherwise
  it removes every usable signature from the public class and emits only
  suffixed helper subclasses.

  When equivalent declarations differ only in trailing defaults, retain the
  richer declaration so TypeScript exposes every arity the runtime accepts.
  Stable input order breaks ties and preserves the canonical OCCT overload's
  documentation.
  """
  deduped = {}
  for constructor in constructors:
    args = list(constructor.get_arguments())
    key = tuple(
      tsb._classify_js_type(arg.type, templateDecl, templateArgs)
      for arg in args
    )
    existing = deduped.get(key)
    if (
      existing is None
      or tsb._countTrailingDefaults(constructor)
      > tsb._countTrailingDefaults(existing)
    ):
      deduped[key] = constructor
  return list(deduped.values())


def emit_ts_constructor(tsb, className, args, templateDecl, templateArgs, tplName, numOptional=0, overload_index=0):
  """Emit a single TypeScript constructor signature, marking trailing args as optional."""
  parts = []
  names = []
  nArgs = len(args)
  for i, arg in enumerate(args):
    name = tsb._argname(arg, i)
    names.append(name)
    typeName = tsb.resolve_type(arg.type, templateDecl, templateArgs)
    if i >= nArgs - numOptional:
      parts.append(f"{name}?: {typeName}")
    else:
      parts.append(f"{name}: {typeName}")
  argsStr = ", ".join(parts)
  output = tsb._jsdoc(className, className, "  ", param_count=nArgs, overload_index=overload_index, template_name=tplName, param_names=names)
  output += f"  constructor({argsStr});\n"
  return output


def process_simple_constructor(tsb, theClass, templateDecl=None, templateArgs=None):
  output = ""
  children = list(theClass.get_children())
  constructors = list(filter(lambda x: x.kind == clang.cindex.CursorKind.CONSTRUCTOR, children))
  className = getClassTypeName(theClass, templateDecl)
  tplName = theClass.spelling if templateDecl is not None else None

  if len(constructors) == 0:
    inherited = inherited_template_base(theClass)
    if inherited is not None:
      inherited_template, templateArgs = inherited
      templateDecl = templateDecl if templateDecl is not None else theClass
      theClass = inherited_template
      tplName = inherited_template.spelling
      children = list(inherited_template.get_children())
      constructors = list(filter(lambda x: x.kind == clang.cindex.CursorKind.CONSTRUCTOR, children))
    elif any(
      child.kind == clang.cindex.CursorKind.USING_DECLARATION
      and child.spelling == theClass.spelling
      for child in children
    ):
      return output
    else:
      output += tsb._jsdoc(className, className, "  ", param_count=0, template_name=tplName, param_names=[])
      output += "  constructor();\n"
      return output
  publicConstructors = list(filter(lambda x: x.kind == clang.cindex.CursorKind.CONSTRUCTOR and x.access_specifier == clang.cindex.AccessSpecifier.PUBLIC, children))
  if len(publicConstructors) == 0:
    return output

  filtered = tsb._filter_overloads(publicConstructors, templateDecl)
  filtered = [c for c in filtered if filterMethodOrProperty(theClass, c)]
  bindable = []
  for c in filtered:
    try:
      tsb._checkUnbindableArgs("constructor", theClass.spelling, list(c.get_arguments()))
      bindable.append(c)
    except SkipException as e:
      print(str(e))

  if len(bindable) == 0:
    return output
  bindable = dedupe_js_equivalent_constructors(
    tsb,
    bindable,
    templateDecl,
    templateArgs,
  )

  # Optional-overload migration: each ctor emits ONE TypeScript signature
  # with the trailing `nDefaults` parameters marked optional (`?:` syntax)
  # — paired with the C++ `std::optional<T>` emission in
  # `embind/constructor.py`. See
  # `docs/research/ocjs-optional-overload-resolution-blueprint.md`.
  if len(bindable) == 1:
    args = list(bindable[0].get_arguments())
    nDefaults = tsb._countTrailingDefaults(bindable[0])
    output += emit_ts_constructor(tsb, className, args, templateDecl, templateArgs, tplName, numOptional=nDefaults)
    return output

  by_arity = defaultdict(list)
  for c in bindable:
    by_arity[len(list(c.get_arguments()))].append(c)

  arity_idx_map = {}
  for arity, group in sorted(by_arity.items()):
    if len(group) == 1:
      c = group[0]
      actual_args = list(c.get_arguments())
      nDefaults = tsb._countTrailingDefaults(c)
      idx = arity_idx_map.get(arity, 0)
      arity_idx_map[arity] = idx + 1
      output += emit_ts_constructor(
        tsb, className, actual_args, templateDecl, templateArgs, tplName,
        numOptional=nDefaults, overload_index=idx,
      )
    else:
      tree = tsb._build_dispatch_tree(group, available_positions=list(range(arity)), templateDecl=templateDecl, templateArgs=templateArgs)
      ambiguous = tsb._collect_ambiguous_overloads(tree)
      distinguishable = [ov for ov in group if ov not in ambiguous]
      for ov in distinguishable:
        actual_args = list(ov.get_arguments())
        nDefaults = tsb._countTrailingDefaults(ov)
        idx = arity_idx_map.get(arity, 0)
        arity_idx_map[arity] = idx + 1
        output += emit_ts_constructor(
          tsb, className, actual_args, templateDecl, templateArgs, tplName,
          numOptional=nDefaults, overload_index=idx,
        )

  return output


def process_overloaded_constructors(tsb, theClass, children=None, templateDecl=None, templateArgs=None):
  """Emit _N subclass TypeScript declarations ONLY for genuinely ambiguous constructor overloads."""
  output = ""
  if children is None:
    children = list(theClass.get_children())
  constructors = list(filter(lambda x: x.kind == clang.cindex.CursorKind.CONSTRUCTOR and x.access_specifier == clang.cindex.AccessSpecifier.PUBLIC, children))
  if len(constructors) <= 1:
    return output

  filtered = tsb._filter_overloads(constructors, templateDecl)
  filtered = [c for c in filtered if filterMethodOrProperty(theClass, c)]
  bindable = []
  for c in filtered:
    try:
      tsb._checkUnbindableArgs("constructor", theClass.spelling, list(c.get_arguments()))
      bindable.append(c)
    except SkipException:
      continue
  bindable = dedupe_js_equivalent_constructors(
    tsb,
    bindable,
    templateDecl,
    templateArgs,
  )

  by_arity = defaultdict(list)
  for c in bindable:
    by_arity[len(list(c.get_arguments()))].append(c)

  ambiguous_ctors = []
  for group in by_arity.values():
    if len(group) <= 1:
      continue
    tree = tsb._build_dispatch_tree(group, templateDecl=templateDecl, templateArgs=templateArgs)
    ambiguous_ctors.extend(tsb._collect_ambiguous_overloads(tree))

  if not ambiguous_ctors:
    return output

  name = getClassJsPublicName(theClass, templateDecl)
  tplName = theClass.spelling if templateDecl is not None else None
  allOverloads = constructors
  allOverloadedConstructors = []
  arity_seen = {}

  for constructor in ambiguous_ctors:
    overloadPostfix = "_" + str(allOverloads.index(constructor) + 1)
    ctorArgs = list(constructor.get_arguments())
    nargs = len(ctorArgs)
    arity_idx = arity_seen.get(nargs, 0)
    arity_seen[nargs] = arity_idx + 1
    argsTypescriptDef = ", ".join(list(map(lambda x: tsb.getTypescriptDefFromArg(x, "", templateDecl, templateArgs), ctorArgs)))
    ctor_names = [tsb._argname(arg, i) for i, arg in enumerate(ctorArgs)]
    output += tsb._jsdoc(name, name, "  ", param_count=nargs, overload_index=arity_idx, template_name=tplName, param_names=ctor_names)
    output += "  export declare class " + name + overloadPostfix + " extends " + name + " {\n"
    output += tsb._jsdoc(name, name, "    ", param_count=nargs, overload_index=arity_idx, template_name=tplName, param_names=ctor_names)
    output += "    constructor(" + argsTypescriptDef + ");\n"
    output += "  }\n\n"
    allOverloadedConstructors.append(name + overloadPostfix)
  tsb.exports.update(allOverloadedConstructors)
  return output
