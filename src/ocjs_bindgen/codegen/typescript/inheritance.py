"""Inheritance walk + JS public name resolution.

Extracted from `TypescriptBindings._baseJsPublicName`,
`TypescriptBindings._findBoundAncestor`, and
`TypescriptBindings._computeAncestorChain` (PR 2.4).
"""

from __future__ import annotations

import clang.cindex


def base_js_public_name(baseSpec):
  """JS public name of a base-class spec cursor, namespace-aware.
  """
  from ocjs_bindgen.naming import getClassJsPublicName

  baseDef = baseSpec.type.get_declaration()
  if baseDef is not None and baseDef.kind != clang.cindex.CursorKind.NO_DECL_FOUND and baseDef.spelling:
    return getClassJsPublicName(baseDef)
  return baseSpec.type.get_canonical().spelling or baseSpec.type.spelling


def find_bound_ancestor(tsb, theClass):
  """Walk the inheritance chain to find the nearest ancestor that is in the build.
  """
  visited = set()
  current = theClass
  while current is not None:
    if current.spelling in visited:
      break
    visited.add(current.spelling)
    baseSpecs = list(filter(
      lambda x: x.kind == clang.cindex.CursorKind.CXX_BASE_SPECIFIER and x.access_specifier == clang.cindex.AccessSpecifier.PUBLIC,
      current.get_children()
    ))
    if not baseSpecs:
      break
    if "<" in baseSpecs[0].type.spelling:
      break
    baseName = base_js_public_name(baseSpecs[0])
    if baseName in tsb.exports:
      return baseName
    baseDef = baseSpecs[0].type.get_declaration()
    if baseDef is None or baseDef.kind == clang.cindex.CursorKind.NO_DECL_FOUND:
      return baseName
    current = baseDef
  return None


def compute_ancestor_chain(tsb, theClass):
  """Walk the full public inheritance chain via clang AST and return the list of
  ancestor JS public names (nearest base first).
  """
  chain = []
  visited = set()
  current = theClass
  while current is not None:
    if current.spelling in visited:
      break
    visited.add(current.spelling)
    baseSpecs = list(filter(
      lambda x: x.kind == clang.cindex.CursorKind.CXX_BASE_SPECIFIER and x.access_specifier == clang.cindex.AccessSpecifier.PUBLIC,
      current.get_children()
    ))
    if not baseSpecs:
      break
    if "<" in baseSpecs[0].type.spelling:
      break
    chain.append(base_js_public_name(baseSpecs[0]))
    baseDef = baseSpecs[0].type.get_declaration()
    if baseDef is None or baseDef.kind == clang.cindex.CursorKind.NO_DECL_FOUND:
      break
    current = baseDef
  return chain
