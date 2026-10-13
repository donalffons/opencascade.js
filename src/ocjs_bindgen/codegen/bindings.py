import os
import re
from collections import defaultdict, namedtuple

import clang.cindex

from filter.filterClasses import filterClass
from filter.filterMethodOrProperties import filterMethodOrProperty

# PR 2.1 — dispatch-tree codegen lives in ocjs_bindgen.codegen.dispatch.
# Re-export the dataclasses so any external consumer (POC scripts, debuggers)
# that imports them from `bindings` keeps working.
from ocjs_bindgen.codegen import dispatch as _dispatch

# PR 2.2 — RBV envelope codegen lives in ocjs_bindgen.codegen.rbv. Re-export
# the envelope field-name constants because several call sites in this module
# still reference them at module scope.
from ocjs_bindgen.codegen import rbv as _rbv

# Phase 2 — per-row val-with-default emission for the trailing-default
# matrix rows that policy rule 9 routes to ``emscripten::val``
# (currently rows 33 + 34 — wire-in for rows 1, 2, 7, 23, 30, 37 is
# tracked in the Phase 2 research doc as deferred pending per-row
# bench fixture data).
from ocjs_bindgen.codegen import val_default as _val_default
from ocjs_bindgen.codegen.dispatch import (  # noqa: F401
  DispatchAmbiguous,
  DispatchBranch,
  DispatchLeaf,
)

# PR 2.3 — embind codegen decomposed into ocjs_bindgen/codegen/embind/{class_,
# constructor,method,enum,preamble}.py. Methods on `EmbindBindings` now delegate.
from ocjs_bindgen.codegen.embind import (
  class_ as _embind_class,
)
from ocjs_bindgen.codegen.embind import (
  constructor as _embind_ctor,
)
from ocjs_bindgen.codegen.embind import (
  preamble as _embind_preamble,
)
from ocjs_bindgen.codegen.rbv import (  # noqa: F401
  ENVELOPE_RETURN_FIELD,
  ENVELOPE_RETURN_FIELD_COLLISION,
)
from ocjs_bindgen.codegen.typescript import (
  constructor as _ts_ctor,
)
from ocjs_bindgen.codegen.typescript import (
  enum as _ts_enum,
)
from ocjs_bindgen.codegen.typescript import (
  inheritance as _ts_inheritance,
)
from ocjs_bindgen.codegen.typescript.jsdoc import (
  links as _ts_jsdoc_links,
)

# PR 2.4 — TypescriptBindings JSDoc cluster, inheritance walk, and enum
# emission decomposed into ocjs_bindgen/codegen/typescript/. Methods on
# `TypescriptBindings` now delegate to the free-function implementations.
from ocjs_bindgen.codegen.typescript.jsdoc import (
  loader as _ts_jsdoc_loader,
)
from ocjs_bindgen.codegen.typescript.jsdoc import (
  params as _ts_jsdoc_params,
)
from ocjs_bindgen.codegen.typescript.jsdoc import (
  renderer as _ts_jsdoc_renderer,
)
from ocjs_bindgen.codegen.typescript.jsdoc import (
  wrapping as _ts_jsdoc_wrapping,
)
from ocjs_bindgen.codegen.wasm_common import (
  SkipException,
  getMethodOverloadPostfix,
  isAbstractClass,
  isTransientDerived,
)
from ocjs_bindgen.filters.method_signature import pop_dropped_method_reasons
from ocjs_bindgen.naming.ts import (
  getClassJsPublicName,
)
from ocjs_bindgen.predicates.classes import inherited_template_base
from ocjs_bindgen.predicates.optional_emission_guards import (
  assert_no_nonconst_ref_in_optional,
)
from ocjs_bindgen.predicates.overload_classification import (
  GroupClassificationInputs,
  OverloadDescriptor,
  ParameterDescriptor,
  classify_overload_group,
)
from ocjs_bindgen.predicates.types import isStringView

JsType = namedtuple('JsType', ['category', 'name'])

def _normalize_handle_ns(s: str) -> str:
  """Normalize handle namespace to canonical occ::handle spelling."""
  return s.replace("opencascade::handle", "occ::handle")

def merge(sep: str, *strings: list[str]):
  return sep.join(strings)

def pick(condition: bool, strTrue: str, strFalse: str):
  return strTrue if condition else strFalse

def pickWrap(condition: bool, wrapStart: tuple[str, str], center: str, wrapEnd: tuple[str, str]):
  return (wrapStart[0] if condition else wrapStart[1]) + center + (wrapEnd[0] if condition else wrapEnd[1])

def indent(level: int):
  return " " * level * 2


def _qualifyInheritedTemplateScope(typeStr, theClass, method):
  """Qualify sibling templates referenced by an inherited template method."""
  owner = method.semantic_parent
  if owner is None or owner == theClass:
    return typeStr
  scope = owner.semantic_parent
  if scope is None or scope.kind not in (
    clang.cindex.CursorKind.NAMESPACE,
    clang.cindex.CursorKind.CLASS_DECL,
    clang.cindex.CursorKind.STRUCT_DECL,
    clang.cindex.CursorKind.CLASS_TEMPLATE,
  ):
    return typeStr

  parts = []
  current = scope
  while current is not None and current.kind in (
    clang.cindex.CursorKind.NAMESPACE,
    clang.cindex.CursorKind.CLASS_DECL,
    clang.cindex.CursorKind.STRUCT_DECL,
    clang.cindex.CursorKind.CLASS_TEMPLATE,
  ):
    if current.spelling:
      parts.insert(0, current.spelling)
    current = current.semantic_parent
  prefix = "::".join(parts)
  if not prefix:
    return typeStr

  result = typeStr
  for sibling in scope.get_children():
    if sibling.kind != clang.cindex.CursorKind.CLASS_TEMPLATE or not sibling.spelling:
      continue
    result = re.sub(
      rf"(?<![\w:]){re.escape(sibling.spelling)}(?=\s*<)",
      f"{prefix}::{sibling.spelling}",
      result,
    )
  return result

def shouldProcessClass(child: clang.cindex.Cursor, occtBasePath: str):
  if child.get_definition() is None or not child == child.get_definition():
    return False

  if not filterClass(child):
    return False

  if (
    child.kind == clang.cindex.CursorKind.CLASS_DECL or
    child.kind == clang.cindex.CursorKind.STRUCT_DECL
  ) and not child.type.get_num_template_arguments() == -1:
    return False

  if (
    child.kind == clang.cindex.CursorKind.CLASS_DECL or
    child.kind == clang.cindex.CursorKind.STRUCT_DECL
  ):
    baseSpec = list(filter(lambda x: x.kind == clang.cindex.CursorKind.CXX_BASE_SPECIFIER and x.access_specifier == clang.cindex.AccessSpecifier.PUBLIC, child.get_children()))
    if len(baseSpec) > 1:
      print("cannot handle multiple base classes (" + child.spelling + ")")
      return False
    
    return True

  return False

builtInTypes = [ # according to https://en.cppreference.com/w/cpp/language/types
  # Integer types
  "int",
  "short", "short int", "signed short", "signed short int",
  "unsigned short", "unsigned short int",
  "int", "signed", "signed int",
  "unsigned", "unsigned int",
  "long", "long int", "signed long", "signed long int",
  "unsigned long", "unsigned long int",
  "long long", "long long int", "signed long long", "signed long long int",
  "unsigned long long", "unsigned long long int",
  # Boolean type
  "bool",
  # Character types
  "char",
  "signed char", "unsigned char",
  "wchar_t",
  "char16_t", "char32_t", "char8_t",
  # Floating point types
  "float", "double", "long double"
]

cStringTypes = [
  "const char *",
  "const char *const",
  "char *",
  "char *const",
]

unbindablePointerTypes = [
  "const char16_t *",
  "const char16_t *const",
  "char16_t *",
  "char16_t *const",
]

def isCString(type):
  return type.get_canonical().spelling in cStringTypes

def _isDefaultConstructibleClass(pointee):
  """True iff the pointee is a non-abstract class/struct/class-template type
  with an accessible default constructor (explicit zero-arg ctor OR implicit
  default ctor when no ctors are declared). Drives class-typed
  input-passthrough RBV.

  Abstract classes are excluded — embind binds class-typed lambda parameters
  by value, which requires an instantiable type. OCCT exposes many abstract
  function objects (e.g. math_Function, math_MultipleVarFunctionWithGradient)
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
  # BRepGProp_Domain) are *implicitly* non-copyable because they hold a
  # non-copyable member (e.g. NCollection_LocalArray inside TopExp_Explorer)
  # without declaring a copy ctor themselves. libclang in this build does not
  # expose is_copy_constructible, so we approximate by recursively walking
  # fields/bases.
  if not _isCopyConstructibleClass(decl):
    return False

  public_ctors = [
    c for c in decl.get_children()
    if c.kind == clang.cindex.CursorKind.CONSTRUCTOR
    and c.access_specifier == clang.cindex.AccessSpecifier.PUBLIC
  ]
  if not public_ctors:
    return True
  return any(
    len(list(c.get_arguments())) == 0 and not c.is_deleted_method()
    for c in public_ctors
  )


def _ctor_is_copy(ctor, decl):
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
    if pointee_decl.get_usr() and decl.get_usr() and pointee_decl.get_usr() == decl.get_usr():
      return True
    # For class templates the injected-class-name reference may surface as
    # a typedef/alias to the same template; compare unqualified spellings
    # as a last resort.
    if pointee_decl.spelling and decl.spelling and pointee_decl.spelling == decl.spelling:
      return True
  # Fall back to canonical spelling match (concrete classes).
  pointee_canon = pointee.get_canonical()
  return pointee_canon.spelling.replace("const ", "").strip() == decl.type.get_canonical().spelling


# Cached on canonical class spelling so we don't re-walk the same class for
# every call site. The cache is populated only after a definitive answer
# (recursion-cycle short-circuit returns True conservatively but is NOT
# cached so that a later non-cyclic call can record the real answer).
_COPY_CTOR_CACHE = {}


# Lazily built once per TU traversal pass. Maps unqualified class-template
# name → CLASS_TEMPLATE cursor with a non-empty body. Populated on first
# fallback lookup from `_resolve_record_decl` when an instantiation node has
# no children (i.e. libclang's synthetic instantiation CLASS_DECL is empty).
_CLASS_TEMPLATE_INDEX = {}


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


def _isCopyConstructibleClass(decl, _visiting=None):
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
      c for c in decl.get_children()
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
      """Resolve a type to its underlying record declaration if any. libclang
      sometimes hands back UNEXPOSED/ELABORATED for template instantiations
      where TypeKind.RECORD would be expected, so we fall back to
      get_declaration() and probe the cursor kind directly.

      For template instantiations the AST node returned by get_declaration()
      is a synthetic CLASS_DECL with NO child cursors — the template body
      lives on the underlying CLASS_TEMPLATE. We follow the specialization
      link so the recursive copy-ctor walk sees the real ctors / fields.
      """
      d = t.get_declaration()
      if d is None:
        return None
      if d.kind in _record_decl_kinds:
        # Template-instantiation CLASS_DECL nodes have no children; fall
        # back to the underlying template's definition. Try the cursor's
        # own definition link first, then probe the TU for a CLASS_TEMPLATE
        # with the same unqualified name (libclang in this version does
        # not expose clang_getSpecializedCursorTemplate on Cursor).
        if not list(d.get_children()):
          defn = d.get_definition()
          if defn is not None and defn != d and list(defn.get_children()):
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
        if spelling.startswith("opencascade::handle<") or \
           spelling.startswith("Handle_"):
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

def isClassOutputParam(arg_type):
  """Non-const lvalue reference to a default-constructible class/struct type
  (excluding handles, which are detected separately)."""
  if arg_type.kind != clang.cindex.TypeKind.LVALUEREFERENCE:
    return False
  pointee = arg_type.get_pointee()
  if pointee.is_const_qualified():
    return False
  if pointee.kind == clang.cindex.TypeKind.POINTER:
    return False
  canonical = pointee.get_canonical()
  if canonical.spelling in builtInTypes:
    return False
  if pointee.kind == clang.cindex.TypeKind.ENUM or canonical.kind == clang.cindex.TypeKind.ENUM:
    return False
  if _isHandleType(pointee):
    return False
  return _isDefaultConstructibleClass(pointee)

# PR 2.2 — `ENVELOPE_RETURN_FIELD{,_COLLISION}` now live in
# ocjs_bindgen.codegen.rbv and are re-exported at the top of this module.

def isOutputParam(arg_type):
  """Non-const lvalue reference to primitive, enum, handle, or default-
  constructible class = output parameter. Excludes pointer references
  (char*&, etc.) which need C-string or val wrapping instead.

  The class branch enables input-passthrough RBV for user-defined class types
  (gp_Pnt, gp_Vec, Bnd_Box, ...): the caller supplies the instance, C++ mutates
  it in place, and the JS-visible signature retains the parameter rather than
  echoing it via the return envelope.
  """
  if arg_type.kind != clang.cindex.TypeKind.LVALUEREFERENCE:
    return False
  pointee = arg_type.get_pointee()
  if pointee.is_const_qualified():
    return False
  if pointee.kind == clang.cindex.TypeKind.POINTER:
    return False
  canonical = pointee.get_canonical()
  if canonical.spelling in builtInTypes:
    return True
  if pointee.kind == clang.cindex.TypeKind.ENUM or canonical.kind == clang.cindex.TypeKind.ENUM:
    return True
  if _isHandleType(pointee):
    return True
  if _isDefaultConstructibleClass(pointee):
    return True
  return False

def _isHandleType(pointee):
  """Check if a type is opencascade::handle<T> or Handle(T)."""
  decl = pointee.get_declaration()
  if decl is None:
    return False
  if decl.spelling == "handle":
    parent = decl.semantic_parent
    if parent is not None and parent.spelling in ("opencascade", "occ"):
      return True
  if pointee.get_num_template_arguments() == 1:
    if decl.spelling == "handle":
      return True
  return False

def isHandleOutputParam(arg_type):
  """Non-const lvalue reference to handle<T> specifically."""
  if arg_type.kind != clang.cindex.TypeKind.LVALUEREFERENCE:
    return False
  pointee = arg_type.get_pointee()
  if pointee.is_const_qualified():
    return False
  return _isHandleType(pointee)

def isPrimitiveOutputParam(arg_type):
  """Non-const lvalue reference to builtin type or enum."""
  if arg_type.kind != clang.cindex.TypeKind.LVALUEREFERENCE:
    return False
  pointee = arg_type.get_pointee()
  if pointee.is_const_qualified():
    return False
  canonical = pointee.get_canonical()
  return canonical.spelling in builtInTypes or pointee.kind == clang.cindex.TypeKind.ENUM or canonical.kind == clang.cindex.TypeKind.ENUM

def isRawPointerParam(arg_type):
  """Check if an argument type is a raw pointer (not a reference).
  Raw pointers cannot be passed from JS via val::as<T*>() — Embind forbids it."""
  return arg_type.get_canonical().kind == clang.cindex.TypeKind.POINTER

def shouldStripParam(arg_type, method):
  """Whether to remove the param from the JS-visible signature.

  The codegen applies a three-way decision tree to each output param:

    - Primitive/enum output (input-passthrough): stays as JS arg; value copies
      in and an updated copy comes back via the envelope's named field.
    - Class output (`gp_Pnt&`, `Bnd_Box&`, ...): stays as JS arg; the caller
      supplies the instance and the C++ lambda mutates it in place via
      `*<arg>.as<T*>(allow_raw_pointers())`. It is NOT echoed in the envelope.
    - Handle<T> output (input elision): REMOVED from the JS-visible surface.
      OCCT's contract guarantees non-const `Handle<T>&` is output-only (never
      read by C++), so the caller's input is gratuitous. The C++ codegen
      allocates a stack-local null Handle inside the optional_override lambda
      instead; the resulting wrapper is surfaced as a container field whose
      lifetime is owned by the envelope's `[Symbol.dispose]`.

  Flipping this predicate to return True for `isHandleOutputParam` propagates
  the elision through every downstream arity, kept-name, and JSDoc path
  (see bindings.py:501, 560, 1726, 1735, 1749, 2507, 4088, 4116, 4347, 4419,
  4462). The C++ lambda emitter (`_emitOutputParamBinding`) does its own
  per-arg inspection and emits the stack-local declaration for Handle outputs
  and the `val::as<T*>` deref for class outputs.
  """
  return isHandleOutputParam(arg_type)

def getClassTypeName(theClass, templateDecl = None):
  return templateDecl.spelling if templateDecl is not None else theClass.spelling

# `getClassJsPublicName` is intentionally NOT redefined here. The single
# source of truth is `NameEncoder.js_public_name` in
# `ocjs_bindgen.naming.encoder`, re-exported via `naming.ts`. The encoder
# walks the full enclosing-class chain so nested types like
# `Outer::Inner::Leaf` flatten to `Outer_Inner_Leaf`; carrying a one-level
# duplicate here would silently shadow that and reintroduce dangling exports.

def getEnumJsPublicName(theEnum):
  """JS-public enum name. Adds `Namespace_` prefix for namespace-scoped enums."""
  base = theEnum.spelling
  parent = theEnum.semantic_parent
  if parent is not None and parent.kind == clang.cindex.CursorKind.NAMESPACE:
    if parent.spelling and parent.spelling not in ("std", "emscripten", "__gnu_cxx", "__cxxabiv1", "__cxx", "__1"):
      return parent.spelling + "_" + base
  return base

def getEnumQualifiedName(theEnum):
  """Fully-qualified C++ name of an enum, walking namespaces and enclosing classes."""
  parts = [theEnum.spelling]
  parent = theEnum.semantic_parent
  parent_kinds = (
    clang.cindex.CursorKind.NAMESPACE,
    clang.cindex.CursorKind.CLASS_DECL,
    clang.cindex.CursorKind.STRUCT_DECL,
    clang.cindex.CursorKind.CLASS_TEMPLATE,
  )
  while parent is not None and parent.kind in parent_kinds:
    if parent.spelling:
      parts.append(parent.spelling)
    parent = parent.semantic_parent
  return "::".join(reversed(parts))

def getClassQualifiedName(theClass, templateDecl = None):
  """Fully-qualified C++ symbol for a class (e.g. BRepGraph::CacheView).

  Walks semantic_parent for CXX-nested and namespace-nested classes so
  EMSCRIPTEN_BINDINGS template args and member pointers use names visible at file scope.

  When ``templateDecl`` is set (template typedef alias, e.g. IMeshData::BndBox2dTreeFiller),
  walk the typedef's parents — ``theClass`` is the underlying template (NCollection_UBTreeFiller),
  whose semantic_parent chain does not include IMeshData.
  """
  parent_kinds = (
    clang.cindex.CursorKind.CLASS_DECL,
    clang.cindex.CursorKind.STRUCT_DECL,
    clang.cindex.CursorKind.CLASS_TEMPLATE,
    clang.cindex.CursorKind.NAMESPACE,
  )
  if templateDecl is not None and templateDecl.spelling:
    parts = [templateDecl.spelling]
    parent = templateDecl.semantic_parent
    while parent and parent.kind in parent_kinds:
      if parent.spelling:
        parts.append(parent.spelling)
      parent = parent.semantic_parent
    return "::".join(reversed(parts))
  base = theClass.spelling if (templateDecl is None or not templateDecl.spelling) else templateDecl.spelling
  parts = [base]
  parent = theClass.semantic_parent
  while parent and parent.kind in parent_kinds:
    if parent.spelling:
      parts.append(parent.spelling)
    parent = parent.semantic_parent
  return "::".join(reversed(parts))

# ---------------------------------------------------------------------------
# Phase 3 — per-parameter classification helpers (rule 9 routing).
#
# These free functions are used by ``processMethodOrProperty`` to populate
# the per-position metadata that the overload classifier reads. The
# functions are intentionally pure (no instance state) so the classifier
# tests can reproduce the exact descriptor that production emits.
# ---------------------------------------------------------------------------


# Heuristic class name suffix set for handle-typed null-meaningful slots
# (matrix row 30 — null IS a valid value). The OCCT convention names
# progress reporters and message handlers with these suffixes; the surface
# audit (``tau:docs/research/ocjs-occt-surface-audit.md``) notes the row-30
# population is empirically small (the cross-cutting policy question is
# unsettled in current OCCT V8). For Phase 3 we ship the plumbing and
# detect a conservative seed set; future surface audits can extend the
# set without touching the val-default helper.
_ROW_30_REPORTER_HANDLE_SUFFIXES = (
    "Message_ProgressIndicator",
    "Message_ProgressRange",
    "Message_Report",
    "ShapeExtend_BasicMsgRegistrator",
)


def _is_canonical_optional_default(b, arg, theClass, classCpp, templateDecl, templateArgs):
    """Decide whether a trailing-default parameter belongs to the canonical
    ``std::optional<T>`` matrix domain {3, 4, 5}.

    Returns True when one of the following holds (matrix-row anchors):

    * **Row 3** — handle type ``const Handle<T>&`` with default ``Handle()``
      (i.e. the null-handle default). The surface audit shows ~210
      production instances of this shape, dominated by
      ``NCollection_BaseAllocator`` allocator defaults.
    * **Row 5** — scoped-constant default ``= NS::Const`` or
      ``= Class::CONST``. The default expression contains ``::`` and is
      not a function-call expression (gate-excluded by the bindgen for
      multi-overload methods per matrix row 5's documented behaviour).

    Returns False for every other trailing-default shape — scalar
    defaults (row 1), value-class defaults (row 2), const-ref-temp
    defaults (row 4 — narrowed out of canonical optional per rule 5),
    ``T{}`` defaults (row 36), non-null handle sentinels (row 23,
    speculative), and reference-default singletons (row 37, speculative).
    All of those route to ``emscripten::val`` per policy rule 9 +
    rule 5 (strict-by-default null/undefined).

    Phase 4 update (2026-05-29): Row 4 was previously routed via
    canonical ``std::optional<T>``; that path emitted Embind's native
    "Expected null or instance of T" error on explicit ``null``, which
    does NOT satisfy the rule-5 contract pinned by
    ``smoke-rule-5-strict-null-rejection.test.ts``. To uniformly enforce
    rule 5 across the trailing-default surface, row 4 was reclassified
    into the val-default lane. ``CANONICAL_OPTIONAL_ROWS`` is narrowed
    to ``{3, 5, 21, 22}`` in
    ``predicates/overload_classification.py``.

    The function is conservative: when in doubt (e.g. an unparseable
    default expression), it returns False so the val emission path
    handles the slot. The val path is the safe default per policy
    rule 9 — only the canonical {3, 4, 5} surface keeps
    ``std::optional<T>``.
    """
    default_expr = b._extractDefaultExpr(arg, owning_class=theClass, class_scope=classCpp)
    if default_expr is None:
        return False

    expr_compact = "".join(default_expr.split())
    arg.type.get_canonical()

    # Row 3 — handle type with ``Handle()`` (null) default. The default
    # expression normalises to ``Handle()`` or ``opencascade::handle<T>()``
    # via clang's token reproduction; we anchor on the literal trailing
    # ``()`` substring after the ``Handle`` identifier to keep the test
    # robust against namespace-spelling variation.
    arg_type_spelling = arg.type.spelling
    pointee = arg.type.get_pointee()
    is_handle_param = False
    if pointee.kind != clang.cindex.TypeKind.INVALID and _isHandleType(pointee):
        is_handle_param = True
    elif _isHandleType(arg.type):
        is_handle_param = True
    elif "handle<" in arg_type_spelling.lower() or "Handle(" in arg_type_spelling:
        is_handle_param = True

    if is_handle_param:
        # The canonical row 3 default is the null Handle. Spellings
        # observed in production: ``Handle()``, ``opencascade::handle<T>()``,
        # ``Handle_T()``. Any of these collapses to a parenthesis pair
        # immediately preceded by the ``Handle`` identifier or a
        # template instantiation.
        if expr_compact.endswith("()"):
            return True
        return False

    # Row 4 — const-ref to anonymous temporary. Per policy rule 5
    # (strict-by-default null/undefined) every defaulted slot, including
    # const-ref-temp, must reject explicit `null` with the structured
    # rule-5 message. The std::optional<T> wrapper's native error
    # ("Expected null or instance of T") does NOT satisfy that contract,
    # so row 4 routes through val-default (alongside rows 1, 2, 36)
    # rather than canonical std::optional<T>. The canonical
    # std::optional<T> domain is therefore narrowed to rows {3, 5, 21, 22}.
    #
    # Returning False here for const-ref-temp pushes the trailing slot
    # through ``emit_constructor_with_val_default`` /
    # ``emit_method_with_val_default``, which emits the rule-5 throw
    # expression uniformly.
    return False

    # Row 5 — scoped-constant default. The default expression contains
    # ``::`` AND is not a function-call expression (no trailing ``()``).
    # Per the surface audit: "value_or((NCollection_IncAllocator::THE_DEFAULT_BLOCK_SIZE))"
    # is canonical row 5; "value_or((Precision::Confusion()))" is
    # gate-excluded so does not reach this code path in production.
    if "::" in default_expr and not expr_compact.endswith(")"):
        return True

    return False


def _accepts_meaningful_null(b, arg, theClass, classCpp, templateDecl, templateArgs):
    """Decide whether a trailing-default slot's ``null`` JS value should be
    treated as a meaningful C++ value (matrix row 30) rather than
    rejected per the strict-by-default null/undefined policy (rule 5).

    Phase 3 plumbs the per-position opt-in through the classifier and
    the val-default emitter; the OPT-IN SOURCE itself is a small
    heuristic seed (the OCCT handle-reporter suffix set in
    ``_ROW_30_REPORTER_HANDLE_SUFFIXES``). A future PR can layer a
    YAML allow-list on top without touching the val-default helper.

    The conservative default (False) routes the slot through the
    rule-5 strict-by-default path — ``null`` argument rejects with a
    structured ``BindingError`` rather than silently materialising
    the default. This preserves caller intent on the row-30-disqualified
    majority surface.
    """
    pointee = arg.type.get_pointee()
    if pointee.kind == clang.cindex.TypeKind.INVALID or not _isHandleType(pointee):
        return False

    canonical = pointee.get_canonical().spelling
    for suffix in _ROW_30_REPORTER_HANDLE_SUFFIXES:
        if suffix in canonical:
            return True
    return False


def _select_emission_strategy(
    *,
    classification,
    n_defaults,
    n_optional_wraps,
    has_output_params,
    has_cstring_args,
    return_is_cstring,
    return_requires_value_wrapper,
):
    """Pick the emission strategy for a single method based on the
    classifier verdict and the unavoidable return-side concerns.

    Returns one of:

    * ``"val_default"`` — emit via
      :func:`ocjs_bindgen.codegen.val_default.emit_method_with_val_default`.
      Matrix rows 1, 2, 23, 30, 33, 34, 36, 37 (anything the classifier
      tags as ``primitive == 'val'`` with at least one trailing default).
    * ``"optional_default"`` — emit via the existing optional-override
      ``std::optional<T> + .value_or(D)`` lambda body. Matrix rows 3,
      4, 5, 22 (anything the classifier tags as ``primitive == 'optional'``
      with at least one trailing default).
    * ``"legacy"`` — fall through to the existing ``functionBinding``
      path (cstring-wrapper / value-wrapper / plain ``&Cls::method``).
      Used when no defaults are emitable, when every trailing default
      is a raw pointer (cannot be wrapped in ``std::optional<T*>`` per
      embind's ``wire.h:124`` static_assert), or when the return-side
      concerns dominate (cstring return + value-wrapper return).

    Gates dropped vs Phase 2:

    * ``numOverloads == 1`` — the classifier now consults
      ``sibling_count`` on the descriptor; row 34 (multi-overload
      trailing default) is the classifier's responsibility, not a
      gate-exclusion at the emission site.
    * ``hasCStringArgs`` — row 33 (cstring trailing default)
      composes the cstring conversion inline in the val-default
      helper. The cstring INPUT case (non-trailing-default cstring
      args) still routes through the legacy wrapper because cstring
      inputs and val trailing defaults can interleave; that
      composition is row-33-specific and emerges from the classifier
      verdict.

    Gates preserved:

    * ``has_output_params`` — output params route to RBV (matrix
      rows 16-19, 25) before this strategy router runs. The classifier
      also returns ``primitive == 'rbv'`` for this case, but the
      production code path emits RBV via ``_emitOutputParamBinding``
      earlier in ``processMethodOrProperty``.
    * ``return_is_cstring`` / ``return_requires_value_wrapper`` —
      the val-default helper does not (yet) compose with cstring
      return wrapping or non-copyable value-wrapper return. When
      either fires, the legacy wrapper takes the binding and the
      method's trailing defaults are not expanded (partial-arity JS
      calls remain unreachable for this surface, matching pre-Phase-3
      behaviour). A future PR can extend the val-default helper to
      compose these return-side wrappers.
    """
    if n_defaults <= 0:
        return "legacy"
    if n_optional_wraps <= 0:
        # Every trailing default is a raw pointer — embind rejects
        # ``std::optional<T*>`` and the val-default helper would
        # produce no semantic value over the plain pointer binding.
        return "legacy"
    if has_output_params:
        # Should have been handled by the RBV path earlier; defensive.
        return "legacy"
    if return_is_cstring or return_requires_value_wrapper:
        # Return-side wrapper still owns the binding shape.
        return "legacy"

    if classification.primitive == "val":
        return "val_default"
    if classification.primitive == "optional":
        # Optional path cannot compose with non-trailing cstring input
        # params (the cstring conversion lambda already owns the
        # binding); fall through.
        if has_cstring_args:
            return "legacy"
        return "optional_default"
    return "legacy"


class Bindings:
  def __init__(self, tuInfo):
    self.tuInfo = tuInfo

  def _effectiveArgName(self, arg, index):
    """Return the structural name used for an argument across both the C++
    value_object field generator (EmbindBindings) and the TS signature
    generator (TypescriptBindings). Both must agree so the runtime payload
    keys match the declared TS keys for output-param RBV results.
    """
    return arg.spelling if arg.spelling else f"argNo{index}"

  def _effectiveAllArgNames(self, theClass, method, allArgs):
    """Per-arg JS-visible name list for the full argument tuple.

    When this method overrides a base method with identical arity and
    positionally-compatible types, mirror the BASE class's argument names
    so the derived signature's input parameter names line up with the
    envelope field names already aligned by `_effectiveOutputNames`.

    Eliminates the input/field naming drift the user flagged. Without this,
    `CSLib_NormalPolyDef.Derivative(theX, theD)` emits an envelope field
    `D` (base-mirrored) but keeps the input arg `theD` (derived spelling),
    confusing the reader who expects the input and the envelope field
    representing its updated value to share one name end-to-end. With
    this in place the override emits `Derivative(X, D): { …; D: number }`
    matching the base verbatim.

    Returns a list of length `len(allArgs)`. Falls back to derived names
    when no override exists, when arity differs, or when any positional
    canonical type disagrees (so an override that legitimately repurposes
    an argument is never silently retitled).
    """
    derived_names = [self._effectiveArgName(a, i) for i, a in enumerate(allArgs)]
    if theClass is None or method is None:
      return derived_names
    base_override = self._find_base_override_target(theClass, method)
    if base_override is None:
      return derived_names
    base_args = list(base_override.get_arguments())
    if len(base_args) != len(allArgs):
      return derived_names
    for derived_a, base_a in zip(allArgs, base_args, strict=False):
      if derived_a.type.get_canonical().spelling != base_a.type.get_canonical().spelling:
        return derived_names
    return [self._effectiveArgName(base_a, i) for i, base_a in enumerate(base_args)]

  def _find_base_override_target(self, theClass, method):
    """Walk the inheritance chain to find the most precisely matching
    same-name method on a base class.

    Matching strategy: prefer base methods with the same kept-arity AND same
    canonical kept-arg type tuple. If no exact-types match, fall back to any
    method with the same raw arity. Returns the deepest (closest-to-root)
    match so derived overrides mirror the canonical virtual contract.

    Python libclang doesn't expose `clang_getOverriddenCursors`, so we
    traverse base specifiers manually.
    """
    if theClass is None or method is None:
      return None
    name = method.spelling
    target_raw_arity = len(list(method.get_arguments()))
    target_kept = tuple(
      a.type.get_canonical().spelling
      for a in method.get_arguments()
      if not shouldStripParam(a.type, method)
    )
    target_kept_arity = len(target_kept)
    target_output_count = sum(1 for a in method.get_arguments() if isOutputParam(a.type))
    target_is_static = method.is_static_method()

    # AST overload index of the derived method within its declaring class —
    # used as a final tiebreaker when no kept-arg / output-count match exists.
    # `getMethodOverloadPostfix` uses the same indexing for the `_N` suffix,
    # so aligning here keeps the structural-compat check honest.
    same_name_in_derived = [
      c for c in theClass.get_children()
      if c.kind == clang.cindex.CursorKind.CXX_METHOD and c.spelling == name
    ]
    derived_overload_index = (
      same_name_in_derived.index(method) if method in same_name_in_derived else None
    )

    visited = set()

    def _walk(cls):
      if cls is None:
        return None
      key = cls.spelling
      if key in visited:
        return None
      visited.add(key)
      best_exact = None
      best_output_match = None
      best_arity = None
      best_index_match = None
      for child in cls.get_children():
        if child.kind != clang.cindex.CursorKind.CXX_BASE_SPECIFIER:
          continue
        if child.access_specifier != clang.cindex.AccessSpecifier.PUBLIC:
          continue
        base_decl = child.type.get_declaration()
        if base_decl is None or base_decl.kind == clang.cindex.CursorKind.NO_DECL_FOUND:
          continue
        deeper = _walk(base_decl)
        if deeper is not None:
          return deeper

        # Capture base's same-name methods in AST order so we can fall back to
        # positional matching when shape-based matching fails.
        base_same_name = []
        for sibling in base_decl.get_children():
          if sibling.kind != clang.cindex.CursorKind.CXX_METHOD:
            continue
          if sibling.spelling != name:
            continue
          if sibling.access_specifier != clang.cindex.AccessSpecifier.PUBLIC:
            continue
          if sibling.is_static_method() != target_is_static:
            continue
          base_same_name.append(sibling)
          sib_kept = tuple(
            a.type.get_canonical().spelling
            for a in sibling.get_arguments()
            if not shouldStripParam(a.type, sibling)
          )
          sib_output_count = sum(1 for a in sibling.get_arguments() if isOutputParam(a.type))
          if sib_kept == target_kept and sib_output_count == target_output_count:
            best_exact = sibling
            break
          if (
            best_output_match is None
            and len(sib_kept) == target_kept_arity
            and sib_output_count == target_output_count
            and target_output_count > 0
          ):
            best_output_match = sibling
          if best_arity is None and len(sib_kept) == target_kept_arity and len(list(sibling.get_arguments())) == target_raw_arity:
            best_arity = sibling

        if (
          best_index_match is None
          and derived_overload_index is not None
          and derived_overload_index < len(base_same_name)
        ):
          best_index_match = base_same_name[derived_overload_index]

      return best_exact or best_output_match or best_arity or best_index_match

    return _walk(theClass)

  def _effectiveOutputNames(self, theClass, method, allArgs):
    """Compute the effective output-parameter field names for a method.

    Returns a list of (arg_index, effective_name) tuples for every output
    parameter. When the method overrides a base's same-name method with the
    same output-param count, the names are taken verbatim from the base so
    the derived signature stays structurally assignable to the base both at
    the TS layer (`_buildOutputParamReturnType`) and at the C++ value_object
    field layer (`_ensureResultStruct`). Without this, the runtime payload's
    field names (e.g. `ACode`) would diverge from the type signature
    (e.g. `Code`), producing TS-valid code that returns `undefined` at
    runtime.
    """
    output_args = [(i, a) for i, a in enumerate(allArgs) if isOutputParam(a.type)]
    if not output_args:
      return []
    base_override = self._find_base_override_target(theClass, method) if theClass is not None else None
    if base_override is None:
      return [(i, self._effectiveArgName(a, i)) for i, a in output_args]
    base_args = list(base_override.get_arguments())
    base_output = [(i, a) for i, a in enumerate(base_args) if isOutputParam(a.type)]
    if len(base_output) != len(output_args):
      return [(i, self._effectiveArgName(a, i)) for i, a in output_args]
    pairs = []
    for (di, _derived_a), (bi, base_a) in zip(output_args, base_output, strict=False):
      pairs.append((di, self._effectiveArgName(base_a, bi)))
    return pairs

  _MEMBER_TYPEDEFS = {"value_type", "const_reference", "reference", "Array1Type", "Array2Type", "SequenceType", "Point", "Target"}
  _DEPRECATED_TYPEDEFS = {
    "Standard_Real", "Standard_Integer", "Standard_Boolean",
    "Standard_ShortReal", "Standard_Character", "Standard_Byte",
    "Standard_Size", "Standard_CString", "Standard_ExtCharacter",
    "Standard_Utf8Char", "Standard_Utf8UChar",
  }
  _TYPE_PARAM_RE = None
  _reverse_typedef_cache = None

  _UNBINDABLE_PATTERNS = [
    "std::istream", "std::ostream", "std::ifstream", "std::ofstream",
    "std::istringstream", "std::ostringstream", "std::stringstream",
    "std::streambuf", "std::basic_istream", "std::basic_ostream",
    "void *", "void*",
    "NCollection_Vec2", "NCollection_Vec3", "NCollection_Vec4",
  ]

  _UNBINDABLE_SUFFIX_PATTERNS = [
    "::Iterator", "::iterator",
  ]

  def _checkUnbindableArgs(self, methodName, className, args):
    """Raise SkipException if any argument type is known to be unbindable."""
    for arg in args:
      spelling = arg.type.spelling
      canonical = arg.type.get_canonical().spelling
      for pat in self._UNBINDABLE_PATTERNS:
        if pat in spelling or pat in canonical:
          raise SkipException(
            f"Skipping {className}::{methodName}: arg \"{arg.spelling}\" has unbindable type \"{spelling}\""
          )
      for suffix in self._UNBINDABLE_SUFFIX_PATTERNS:
        if spelling.endswith(suffix) or canonical.endswith(suffix):
          raise SkipException(
            f"Skipping {className}::{methodName}: arg \"{arg.spelling}\" has unbindable iterator type \"{spelling}\""
          )
      if "type-parameter-" in canonical and "type-parameter-" in spelling:
        raise SkipException(
          f"Skipping {className}::{methodName}: arg \"{arg.spelling}\" has unresolved template param \"{spelling}\""
        )

  def _constructorsHaveUniqueArities(self, publicConstructors):
    """Check if all public constructors have unique argument counts (enabling native Embind overloading).
    Also rejects cstring args which need wrapper subclasses for string conversion."""
    arities = [len(list(c.get_arguments())) for c in publicConstructors]
    if len(arities) != len(set(arities)):
      return False
    hasCStringArgs = any(
      any(isCString(arg.type) for arg in c.get_arguments())
      for c in publicConstructors
    )
    return not hasCStringArgs

  # ---------------------------------------------------------------------------
  # Safe overload filtering
  # ---------------------------------------------------------------------------

  def _is_move_constructor(self, ctor):
    """Detect T(T&&) move constructors — no JS equivalent."""
    args = list(ctor.get_arguments())
    if len(args) != 1:
      return False
    return args[0].type.kind == clang.cindex.TypeKind.RVALUEREFERENCE

  def _is_deleted_method(self, ctor):
    """Detect explicitly-deleted constructors (`= delete`).

    OCCT V8 marks copy (and sometimes move) ctors `= delete` on many classes.
    Bindgen still lists them as public CONSTRUCTOR cursors; emitting
    ``.constructor<const T &>()`` instantiates embind ``operator_new<T, const T&>``
    against the deleted symbol and the TU fails. ``is_deleted_method()`` is the
    libclang hook for deleted special members.
    """
    return ctor.is_deleted_method()

  def _is_float_only_variant(self, ctor):
    """Check if constructor uses float (not double) args."""
    for arg in ctor.get_arguments():
      if arg.type.get_canonical().kind == clang.cindex.TypeKind.FLOAT:
        return True
    return False

  def _dedupe_float_double(self, overloads):
    """Remove overloads that are float variants when a double variant exists at the same arity."""
    if len(overloads) <= 1:
      return overloads
    by_arity = defaultdict(list)
    for ov in overloads:
      by_arity[len(list(ov.get_arguments()))].append(ov)
    result = []
    for group in by_arity.values():
      if len(group) <= 1:
        result.extend(group)
        continue
      has_float = any(self._is_float_only_variant(ov) for ov in group)
      has_non_float = any(not self._is_float_only_variant(ov) for ov in group)
      if has_float and has_non_float:
        result.extend(ov for ov in group if not self._is_float_only_variant(ov))
      else:
        result.extend(group)
    return result

  def _is_wider_string_ctor(self, ctor):
    """Check if constructor uses wide string types (char16_t, char32_t, wchar_t)."""
    for arg in ctor.get_arguments():
      canonical = arg.type.get_canonical().spelling
      if any(ws in canonical for ws in ('char16_t', 'char32_t', 'wchar_t')):
        return True
    return False

  def _dedupe_string_encodings(self, overloads):
    """Remove overloads that use wide string encodings (keep UTF-8/char*)."""
    if len(overloads) <= 1:
      return overloads
    has_narrow = any(not self._is_wider_string_ctor(ov) for ov in overloads)
    if not has_narrow:
      return overloads
    return [ov for ov in overloads if not self._is_wider_string_ctor(ov)]

  def _is_single_char_only_variant(self, ctor):
    """True iff this overload's sole positional argument is a primitive ``char``
    (``CHAR_S`` / ``SCHAR`` / ``CHAR_U`` / ``UCHAR``) — i.e. the C++ overload
    that accepts a single byte interpreted as a character code.

    Embind registers primitive ``char`` as a JS ``number`` at runtime. When a
    sibling overload accepts ``int`` or ``double`` at the same arity, JS has
    no way to disambiguate ``new T(42)`` between "construct from char-code 42"
    (1-character string) and "construct from integer 42" (multi-character
    decimal representation). The ``char`` overload is therefore unreachable
    from JS without ambiguity; we drop it here so the integer overload wins.

    Anchors:
    * ``smoke-cstring-dispatch.test.ts`` (``TCollection_ExtendedString``)
      pins the post-fix behaviour: ``new TCollection_ExtendedString(42)`` must
      construct from ``const int`` (length 2 — string "42"), NOT from
      ``const char`` (length 1 — string with char code 42).
    * Same arity check as ``_dedupe_float_double``; the ``char`` shape is the
      identical pattern at the ``CHAR_*`` Type-Kind level rather than the
      ``FLOAT`` Type-Kind.
    """
    args = list(ctor.get_arguments())
    if len(args) != 1:
      return False
    canonical = args[0].type.get_canonical()
    return canonical.kind in self._JS_CHAR_KINDS

  def _has_int_or_double_only_variant(self, group):
    """True iff ``group`` contains an arity-1 overload whose sole arg is a
    JS-numeric primitive (``int``/``double``/etc) — the JS-indistinguishable
    sibling whose presence makes a ``char`` overload at the same arity
    unreachable. See :meth:`_is_single_char_only_variant` for context.
    """
    for ov in group:
      args = list(ov.get_arguments())
      if len(args) != 1:
        continue
      canonical = args[0].type.get_canonical()
      if canonical.kind in self._JS_NUMERIC_KINDS:
        return True
    return False

  def _dedupe_char_vs_int(self, overloads):
    """Remove primitive ``char`` overloads when an ``int``/``double`` sibling
    exists at the same arity.

    See :meth:`_is_single_char_only_variant` and
    :meth:`_has_int_or_double_only_variant` for the rationale. This filter
    mirrors :meth:`_dedupe_float_double` in shape: arity-grouped, and only
    drops when the JS-distinguishable sibling is present.
    """
    if len(overloads) <= 1:
      return overloads
    by_arity = defaultdict(list)
    for ov in overloads:
      by_arity[len(list(ov.get_arguments()))].append(ov)
    result = []
    for group in by_arity.values():
      if len(group) <= 1:
        result.extend(group)
        continue
      if self._has_int_or_double_only_variant(group):
        result.extend(ov for ov in group if not self._is_single_char_only_variant(ov))
      else:
        result.extend(group)
    return result

  def _filter_overloads(self, overloads, templateDecl=None):
    """Apply all safe filters: deleted ctors, move ctors, float/double dedup,
    string encoding dedup, char-vs-int dedup.
    """
    filtered = [c for c in overloads if not self._is_deleted_method(c)]
    filtered = [c for c in filtered if not self._is_move_constructor(c)]
    location = getattr(templateDecl, "location", None)
    location_file = getattr(location, "file", None)
    is_generated_template = (
      templateDecl is not None
      and os.path.basename(getattr(location_file, "name", "")) == "myMain.h"
    )
    if is_generated_template:
      filtered = [
        c for c in filtered
        if not any(isRawPointerParam(arg.type) for arg in c.get_arguments())
      ]
    filtered = self._dedupe_float_double(filtered)
    filtered = self._dedupe_string_encodings(filtered)
    filtered = self._dedupe_char_vs_int(filtered)
    return filtered

  def _isWireSafeFieldType(self, clang_type):
    """Embind value_object/.property cannot wire raw pointers, deleted-copy
    types, or std::atomic. Skip those fields instead of failing the TU."""
    if isRawPointerParam(clang_type):
      return False
    canonical = clang_type.get_canonical().spelling
    if 'std::atomic' in canonical:
      return False
    decl = clang_type.get_canonical().get_declaration()
    if decl and not _isCopyConstructibleClass(decl):
      return False
    return True

  def _returnTypeRequiresValueWrapper(self, method):
    return _rbv.return_type_requires_value_wrapper(method)

  # ---------------------------------------------------------------------------
  # Default parameter detection
  # ---------------------------------------------------------------------------

  def _countTrailingDefaults(self, cursor):
    """Count trailing parameters with default values from clang AST."""
    args = list(cursor.get_arguments())
    count = 0
    for arg in reversed(args):
      tokens = list(arg.get_tokens())
      if any(t.spelling == "=" for t in tokens):
        count += 1
      else:
        break
    return count

  def _extractDefaultExpr(self, arg, owning_class=None, class_scope=None):
    """Extract the C++ default-value expression for an argument from clang tokens.

    Returns the source text after ``=`` joined token-by-token, or ``None`` if
    no default. Multi-token defaults like ``Standard_NullObject()`` or
    ``BRepOffset_Skin`` survive intact. Callers wrap the result in parens
    when emitting ``value_or(...)`` so the expression's textual identity is
    preserved through C++ parsing. See
    docs/research/ocjs-optional-overload-resolution-blueprint.md
    (mechanical translation rules).

    When ``owning_class`` is provided, references to **class-scoped**
    declarations inside the default expression are textually qualified with
    ``<ClassName>::``. Without this, identifiers like ``DefaultBlockSize``
    (a class static referenced unqualified in the OCCT header) become
    undefined when emitted inside an ``optional_override`` lambda body —
    the lambda runs at global scope, not class scope. AST inspection finds
    every ``DECL_REF_EXPR`` whose referenced declaration's
    ``semantic_parent`` is ``owning_class`` and rewrites it via
    whole-word regex substitution on the joined token text.
    """
    tokens = list(arg.get_tokens())
    eq_idx = -1
    for i, tok in enumerate(tokens):
      if tok.spelling == "=":
        eq_idx = i
        break
    if eq_idx == -1:
      return None
    default_tokens = tokens[eq_idx + 1:]
    expr = " ".join(t.spelling for t in default_tokens).strip()
    if not expr:
      return None

    if owning_class is None:
      return expr

    default_cursor = None
    for child in arg.get_children():
      if child.kind in (
        clang.cindex.CursorKind.TYPE_REF,
        clang.cindex.CursorKind.NAMESPACE_REF,
        clang.cindex.CursorKind.TEMPLATE_REF,
      ):
        continue
      default_cursor = child

    if default_cursor is None:
      return expr

    owning_usr = owning_class.get_usr()
    class_kinds = (
      clang.cindex.CursorKind.CLASS_DECL,
      clang.cindex.CursorKind.STRUCT_DECL,
      clang.cindex.CursorKind.CLASS_TEMPLATE,
      clang.cindex.CursorKind.CLASS_TEMPLATE_PARTIAL_SPECIALIZATION,
    )
    members_to_qualify = set()

    def _topmost_owning_class_member(referenced):
      """Walk up ``referenced``'s semantic-parent chain. Return the topmost
      cursor whose direct semantic parent is ``owning_class``; otherwise
      ``None``.

      For ``Kind::Solid`` referenced in ``BRepGraph_NodeId``, the chain is
      ``Solid -> Kind -> BRepGraph_NodeId``; we return ``Kind`` (the
      identifier that must be qualified in the lambda body).
      For ``DefaultBlockSize`` referenced in ``NCollection_AccAllocator``,
      the chain is ``DefaultBlockSize -> NCollection_AccAllocator``;
      we return ``DefaultBlockSize``.
      """
      if referenced is None:
        return None
      cur = referenced
      while cur is not None:
        parent = cur.semantic_parent
        if parent is None:
          return None
        if parent.kind in class_kinds and owning_usr and parent.get_usr() == owning_usr:
          return cur
        cur = parent
      return None

    def _walk(c):
      # Class-scoped statics and constexpr members appear as DECL_REF_EXPR.
      # Nested enum/class references (e.g. `Kind::Solid` where `Kind` is a
      # nested enum) appear as TYPE_REF cursors. Both must be qualified
      # with the owning class so the lambda body — which runs at global
      # scope, not class scope — resolves them correctly.
      if c.kind in (clang.cindex.CursorKind.DECL_REF_EXPR, clang.cindex.CursorKind.TYPE_REF):
        target = _topmost_owning_class_member(c.referenced)
        if target is not None:
          members_to_qualify.add(target.spelling)
      for sub in c.get_children():
        _walk(sub)

    _walk(default_cursor)

    if not members_to_qualify:
      return expr

    import re
    # Prefer the caller-supplied fully-qualified scope (e.g.
    # ``BRepGraph::EditorView`` for a class nested under ``BRepGraph``).
    # ``owning_class.spelling`` is the local class name only — for nested
    # classes that yields ``EditorView`` and the lambda body still fails
    # to resolve the identifier. The qualified form must come from
    # ``getClassQualifiedName`` at the call site.
    scope = class_scope if class_scope else owning_class.spelling
    for name in members_to_qualify:
      pattern = rf"(?<![\w:]){re.escape(name)}(?!\w)"
      expr = re.sub(pattern, f"{scope}::{name}", expr)
    return expr

  def _getOptionalInnerType(self, arg, templateDecl=None, templateArgs=None):
    """Return the C++ type to place inside ``std::optional<...>`` for ``arg``.

    Per the blueprint's four mechanical shapes:

      ``T arg = D``              -> ``T``
      ``const T arg = D``        -> ``T``
      ``const T& arg = D``       -> ``T``
      ``Handle_T arg = D``       -> ``Handle_T``
      ``const Handle_T& arg = D`` -> ``Handle_T``

    Non-const ``T&`` is rejected by the R6 guard upstream; this helper
    therefore does not need to defend against it.
    """
    t = arg.type
    if t.kind == clang.cindex.TypeKind.LVALUEREFERENCE:
      pointee = t.get_pointee()
      spelling = pointee.spelling
    else:
      spelling = t.spelling
      pointee = t
    if spelling.startswith("const "):
      spelling = spelling[len("const "):]
    resolved = self.resolveWithCanonicalFallback(spelling, pointee, templateDecl, templateArgs)
    # std::optional<T> requires T to be a non-const, non-reference, non-array
    # object type. resolveWithCanonicalFallback may re-introduce a leading
    # `const ` qualifier (e.g. when the canonical type spelling of a typedef
    # like `Standard_Boolean` resolves to `const bool` for a parameter typed
    # `const Standard_Boolean`). Strip it from the final output so the wrapper
    # is well-formed; the call site re-binds to the const-qualified parameter
    # via implicit conversion.
    if resolved.startswith("const "):
      resolved = resolved[len("const "):]
    # Track every distinct inner spelling so the class's EMSCRIPTEN_BINDINGS
    # block can emit one `register_optional<T>()` call per unique type.
    # Without this, embind has no converter for `std::optional<T>` and the
    # binding raises `Cannot construct ... due to unbound types` at the
    # first ctor/method invocation. The buffer is reset per class by
    # `preamble.reset_struct_buffers`.
    inner_types = getattr(self, "_optional_inner_types", None)
    if inner_types is not None and resolved not in inner_types:
      inner_types.append(resolved)
    return resolved

  # ---------------------------------------------------------------------------
  # JS type classification for dispatch
  # ---------------------------------------------------------------------------

  _JS_INTEGER_KINDS = frozenset({
    clang.cindex.TypeKind.INT, clang.cindex.TypeKind.UINT,
    clang.cindex.TypeKind.LONG, clang.cindex.TypeKind.ULONG,
    clang.cindex.TypeKind.LONGLONG, clang.cindex.TypeKind.ULONGLONG,
    clang.cindex.TypeKind.SHORT, clang.cindex.TypeKind.USHORT,
  })

  _JS_FLOAT_KINDS = frozenset({
    clang.cindex.TypeKind.FLOAT, clang.cindex.TypeKind.DOUBLE,
    clang.cindex.TypeKind.LONGDOUBLE,
  })

  _JS_NUMERIC_KINDS = _JS_INTEGER_KINDS | _JS_FLOAT_KINDS

  _JS_CHAR_KINDS = frozenset({
    clang.cindex.TypeKind.CHAR_U, clang.cindex.TypeKind.UCHAR,
    clang.cindex.TypeKind.CHAR_S, clang.cindex.TypeKind.SCHAR,
  })

  _JS_WIDECHAR_KINDS = frozenset({
    clang.cindex.TypeKind.CHAR16, clang.cindex.TypeKind.CHAR32,
  })

  _JS_STRING_KINDS = _JS_CHAR_KINDS | _JS_WIDECHAR_KINDS

  def _strip_type_qualifiers(self, clang_type):
    """Strip const, reference, and pointer qualifiers for dispatch classification."""
    t = clang_type
    if t.kind == clang.cindex.TypeKind.LVALUEREFERENCE:
      t = t.get_pointee()
    if t.kind == clang.cindex.TypeKind.RVALUEREFERENCE:
      t = t.get_pointee()
    if t.kind == clang.cindex.TypeKind.POINTER:
      t = t.get_pointee()
    return t

  def _mangle_template_js_name(self, clang_type, container_name):
    """Compute the auto-generated JS-side typedef name for a templated class.

    The bindgen synthesises a typedef like ``using NCollection_Array1_gp_Pnt
    = NCollection_Array1<gp_Pnt>`` (see :func:`ocjs_bindgen.discover.mangle_template_name`)
    and registers the class as ``class_<NCollection_Array1_gp_Pnt>("NCollection_Array1_gp_Pnt")``.
    JS-side ``instanceof`` checks against ``Module["NCollection_Array1_gp_Pnt"]``
    only succeed when the val-dispatch discriminator names the typedef
    spelling rather than the bare template spelling (``NCollection_Array1``).
    Mirrors the same mangling algorithm used by the discover phase so the
    discriminator and the registered class name stay in lock-step.
    """
    from ocjs_bindgen.discover import _extract_template_args, mangle_template_name
    try:
      arg_spellings = _extract_template_args(clang_type)
      if not arg_spellings:
        arg_spellings = _extract_template_args(clang_type.get_canonical())
    except Exception:
      return None
    if not arg_spellings:
      return None
    return mangle_template_name(container_name, arg_spellings)

  @staticmethod
  def _classify_resolved_js_spelling(spelling):
    """Classify a concrete C++ spelling after template substitution."""
    clean = spelling.strip()
    while clean.startswith("const "):
      clean = clean[len("const "):].strip()
    clean = re.sub(r"\s*[&*]+\s*$", "", clean).strip()

    if clean in {"float", "double", "long double"}:
      return JsType("number_float", "number")
    if clean in {
      "char", "signed char", "unsigned char", "short", "unsigned short",
      "int", "unsigned int", "long", "unsigned long", "long long",
      "unsigned long long", "size_t",
    }:
      return JsType("number_int", "number")
    if clean == "bool":
      return JsType("boolean", "boolean")

    handle = re.fullmatch(r"(?:occ|opencascade)::handle<(.+)>", clean)
    if handle:
      return JsType("object", handle.group(1).replace("::", "_"))

    if "<" in clean and clean.endswith(">"):
      from ocjs_bindgen.discover import _parse_template_spelling, mangle_template_name
      parsed = _parse_template_spelling(clean)
      if parsed is not None:
        container, args = parsed
        mangled = mangle_template_name(container.replace("::", "_"), args)
        if mangled:
          return JsType("object", mangled)

    return JsType("object", clean.replace("::", "_"))

  def _resolve_template_typedef(self, type_spelling):
    """Resolve a template instantiation like NCollection_Array1<gp_Pnt> to its typedef name like TColgp_Array1OfPnt."""
    if Bindings._reverse_typedef_cache is None:
      Bindings._reverse_typedef_cache = {}
      for underlying_spelling, typedef_cursor in self.tuInfo.typedefUnderlyingDict.items():
        clean = _normalize_handle_ns(underlying_spelling.replace("const ", "").replace("&", "").replace("*", "").strip())
        Bindings._reverse_typedef_cache[clean] = typedef_cursor.spelling
    clean_spelling = _normalize_handle_ns(type_spelling.replace("const ", "").replace("&", "").replace("*", "").strip())
    return Bindings._reverse_typedef_cache.get(clean_spelling)

  def _classify_js_type(self, clang_type, templateDecl=None, templateArgs=None):
    """Map a C++ type to its JS runtime type category for dispatch discrimination."""
    t = self._strip_type_qualifiers(clang_type)

    if templateArgs:
      resolved = self.resolveWithCanonicalFallback(
        t.spelling, t, templateDecl, templateArgs
      )
      source = re.sub(r"\s*[&*]+\s*$", "", t.spelling).replace("const ", "").strip()
      canonical_source = re.sub(
        r"\s*[&*]+\s*$", "", t.get_canonical().spelling
      ).replace("const ", "").strip()
      resolved_clean = re.sub(
        r"\s*[&*]+\s*$", "", resolved
      ).replace("const ", "").strip()
      if (
        resolved_clean
        and "type-parameter-" not in resolved_clean
        and resolved_clean not in {source, canonical_source}
      ):
        return self._classify_resolved_js_spelling(resolved_clean)

    direct_decl = t.get_declaration()
    if direct_decl and direct_decl.kind in (
      clang.cindex.CursorKind.TYPEDEF_DECL,
      clang.cindex.CursorKind.TYPE_ALIAS_DECL,
    ):
      canonical_alias_type = t.get_canonical()
      canonical_decl = canonical_alias_type.get_declaration()
      if (
        canonical_alias_type.get_num_template_arguments() > 0
        and canonical_decl
        and canonical_decl.spelling
      ):
        canonical_name = self._mangle_template_js_name(
          canonical_alias_type,
          canonical_decl.spelling,
        )
        if canonical_name:
          return JsType("object", canonical_name)

    if t.get_num_template_arguments() == 1:
      decl = t.get_declaration()
      if decl and decl.spelling == "handle":
        parent = decl.semantic_parent
        if parent and parent.spelling in ("opencascade", "occ"):
          inner = t.get_template_argument_type(0)
          inner_decl = inner.get_declaration()
          name = inner_decl.spelling if (inner_decl and inner_decl.spelling) else inner.spelling
          return JsType('object', name)

    canonical = t.get_canonical()
    kind = canonical.kind

    if kind == clang.cindex.TypeKind.ENUM:
      decl = canonical.get_declaration()
      if decl and decl.spelling:
        # Nested enums (e.g. ``BRepGraph_NodeId::Kind``) are registered
        # under the mangled ``Parent_Child`` JS name
        # (``BRepGraph_NodeId_Kind``), NOT the bare leaf spelling
        # (``Kind``). The val-dispatch discriminator does a
        # ``module_property("<name>")[arg]`` membership test, so it must
        # name the registered JS identifier or the branch is dead code
        # (the bare-name lookup resolves to ``undefined`` and the check
        # never fires). Mirror the registration naming via
        # ``resolve_nested_type``; top-level enums return ``None`` →
        # fall back to the bare spelling, which IS their registered name.
        from ocjs_bindgen.naming import ENCODER
        nested = ENCODER.resolve_nested_type(decl)
        return JsType('string_enum', nested or decl.spelling)
      return JsType('string', 'string')

    if kind in self._JS_INTEGER_KINDS:
      return JsType('number_int', 'number')
    if kind in self._JS_FLOAT_KINDS:
      return JsType('number_float', 'number')
    if kind == clang.cindex.TypeKind.BOOL:
      return JsType('boolean', 'boolean')
    if isCString(clang_type):
      return JsType('string', 'string')
    if kind in self._JS_STRING_KINDS:
      return JsType('string_char', 'string')
    if isStringView(clang_type):
      return JsType('string', 'string')

    decl = t.get_declaration()
    if decl and decl.spelling:
      if '<' in t.spelling:
        typedef_name = self._resolve_template_typedef(t.spelling)
        if typedef_name:
          return JsType('object', typedef_name)
        mangled = self._mangle_template_js_name(t, decl.spelling)
        if mangled:
          return JsType('object', mangled)
      # Nested classes/structs (e.g. ``BRepGraph_ParentExplorer::Config``)
      # register under the mangled ``Parent_Child`` JS name; the
      # ``instanceof module_property("<name>")`` discriminator must match.
      from ocjs_bindgen.naming import ENCODER
      nested = ENCODER.resolve_nested_type(decl)
      return JsType('object', nested or decl.spelling)

    decl = canonical.get_declaration()
    if decl and decl.spelling:
      if '<' in canonical.spelling:
        typedef_name = self._resolve_template_typedef(canonical.spelling)
        if typedef_name:
          return JsType('object', typedef_name)
        mangled = self._mangle_template_js_name(canonical, decl.spelling)
        if mangled:
          return JsType('object', mangled)
      from ocjs_bindgen.naming import ENCODER
      nested = ENCODER.resolve_nested_type(decl)
      return JsType('object', nested or decl.spelling)

    if templateArgs and "type-parameter-" in canonical.spelling:
      if Bindings._TYPE_PARAM_RE is None:
        Bindings._TYPE_PARAM_RE = re.compile(r'type-parameter-(\d+)-(\d+)')
      m = Bindings._TYPE_PARAM_RE.search(canonical.spelling)
      if m:
        depth, index = int(m.group(1)), int(m.group(2))
        if depth == 0:
          argValues = list(templateArgs.values())
          if index < len(argValues):
            resolved_type = argValues[index]
            resolved_decl = resolved_type.get_declaration()
            resolved_name = resolved_decl.spelling if (resolved_decl and resolved_decl.spelling) else resolved_type.spelling
            return JsType('object', resolved_name)

    return JsType('number_float', 'number')

  def _classify_js_dispatch_type(self, clang_type, templateDecl=None, templateArgs=None):
    """Coarse JS type classification matching what the bugra9 embind runtime can distinguish.

    Unlike _classify_js_type which has fine-grained categories (number_int, number_float,
    string_enum), this maps to what typeof/instanceof can actually distinguish at runtime:
    - object(ClassName) — instanceof check
    - number — typeof === 'number' (int and float are indistinguishable)
    - boolean — typeof === 'boolean'
    - string — typeof === 'string' (string_enum and string are indistinguishable)
    """
    fine = self._classify_js_type(clang_type, templateDecl, templateArgs)
    if fine.category == 'object':
      return fine
    if fine.category == 'boolean':
      return JsType('boolean', 'boolean')
    if fine.category in ('number_int', 'number_float'):
      return JsType('number', 'number')
    if fine.category in ('string', 'string_enum'):
      return JsType('string', 'string')
    return JsType('number', 'number')

  def _build_js_dispatch_tree(self, group, available_positions=None, templateDecl=None, templateArgs=None):
    """Build dispatch tree using coarse JS-dispatch types (what bugra9 runtime can distinguish)."""
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
          types.add(self._classify_js_dispatch_type(args[p].type, templateDecl, templateArgs))
      if len(types) > best_count:
        best_count = len(types)
        best_pos = p

    if best_pos is None or best_count <= 1:
      return DispatchAmbiguous(group)

    type_groups = defaultdict(list)
    for ov in group:
      args = list(ov.get_arguments())
      js_type = self._classify_js_dispatch_type(args[best_pos].type, templateDecl, templateArgs)
      type_groups[js_type].append(ov)

    remaining = [p for p in available_positions if p != best_pos]
    branches = {}
    for js_type, sub_group in type_groups.items():
      branches[js_type] = self._build_js_dispatch_tree(sub_group, remaining, templateDecl, templateArgs)

    return DispatchBranch(best_pos, branches)

  # PR 2.1 — Dispatch-tree primitives now live in ocjs_bindgen.codegen.dispatch.
  # The methods below are pure delegators preserved for backward compatibility
  # with internal call sites; behaviour is byte-identical.

  def _dispatch_primitive_sort_key(self, js_type_subtree_pair):
    return _dispatch.dispatch_primitive_sort_key(js_type_subtree_pair)

  def _build_dispatch_tree(self, group, available_positions=None, templateDecl=None, templateArgs=None):
    return _dispatch.build_dispatch_tree(self, group, available_positions, templateDecl, templateArgs)

  def _collect_ambiguous_overloads(self, tree):
    return _dispatch.collect_ambiguous_overloads(tree)

  def _collect_ambiguous_primaries(self, tree, primaries):
    return _dispatch.collect_ambiguous_primaries(tree, primaries)

  def _tree_has_only_leaves(self, tree):
    return _dispatch.tree_has_only_leaves(tree)

  def _qualify_nested_type(self, type_spelling, clang_type):
    """Delegates to :func:`ocjs_bindgen.ast.template_args.qualify_nested_type` (PR 1.7)."""
    from ocjs_bindgen.ast import qualify_nested_type
    return qualify_nested_type(type_spelling, clang_type)

  def _substitute_canonical_template_names(self, canonical_spelling: str, templateArgs) -> str:
    """Delegates to :func:`ocjs_bindgen.ast.template_args.substitute_canonical_template_names` (PR 1.7)."""
    from ocjs_bindgen.ast import substitute_canonical_template_names
    return substitute_canonical_template_names(canonical_spelling, templateArgs)

  def resolveWithCanonicalFallback(self, spelling, clangType, templateDecl = None, templateArgs = None):
    """Resolve a type spelling, falling back to canonical type for member typedefs.

    Template specializations like NCollection_Array1<gp_Pnt> use member typedefs
    (value_type, const_reference) that resolve to concrete types (gp_Pnt, const gp_Pnt&)
    in the canonical form. When clang returns type-parameter-0-N for the canonical type
    (template definitions), we map it through templateArgs to the concrete type.
    With libclang 18+, canonical spellings may use the source template parameter name
    (e.g. TheItemType) instead of type-parameter-0-0; templateArgs substitutes those too.
    Nested types are always qualified with their parent class scope.

    The substituted-Handle peel runs immediately after
    `getTypedefedTemplateTypeAsString` substitutes the template argument: when
    the resulting spelling is a syntactic `opencascade::handle<X>` /
    `occ::handle<X>` / `Handle_X` wrapper and `X` is a known TS export, return
    `X` directly. Closes the handle-wrapped NCollection accessor bucket that
    the original member-typedef resolution can't see through, because the
    Handle wrapper only appears after string-level argument substitution.
    """
    resolved = self.getTypedefedTemplateTypeAsString(spelling, templateDecl, templateArgs)

    # Peel substituted Handle wrappers at the string level. After template-arg
    # substitution rewrites `TheItemType` to a syntactic
    # `opencascade::handle<X>` / `occ::handle<X>` / `Handle_X`, recognise the
    # wrapper and return the inner exported class. Mirrors the contract of
    # `resolve_handle_recursive` one layer downstream where the AST has been
    # replaced by a substituted string.
    #
    # `resolveWithCanonicalFallback` is shared with `EmbindBindings`, whose
    # C++ generator has no TS-export concept. Gate on `_is_known_export_name`
    # so the substituted-Handle peel is a strict no-op for the Embind path;
    # only the TS resolver supplies the predicate and gets the peel behaviour.
    if hasattr(self, "_is_known_export_name"):
      from ocjs_bindgen.resolver.strategies import (
        resolve_handle_substituted_typedef,
      )
      handle_peeled = resolve_handle_substituted_typedef(self, resolved)
      if handle_peeled is not None:
        return handle_peeled

    if any(td in resolved for td in self._DEPRECATED_TYPEDEFS):
      canonical = clangType.get_canonical().spelling
      if "type-parameter-" not in canonical:
        return self._qualify_nested_type(
          self._substitute_canonical_template_names(canonical, templateArgs),
          clangType,
        )
    if "typename " not in resolved and not any(td in resolved for td in self._MEMBER_TYPEDEFS):
      return self._qualify_nested_type(resolved, clangType)

    canonical = clangType.get_canonical().spelling
    if "type-parameter-" not in canonical:
      return self._qualify_nested_type(
        self._substitute_canonical_template_names(canonical, templateArgs),
        clangType,
      )

    if not templateArgs:
      return self._qualify_nested_type(resolved, clangType)

    substituted = self._substitute_canonical_template_names(canonical, templateArgs)
    return self._qualify_nested_type(substituted, clangType)

  def getTypedefedTemplateTypeAsString(self, theTypeSpelling, templateDecl = None, templateArgs = None):
    """Delegates to :func:`ocjs_bindgen.ast.template_args.get_typedefed_template_type_as_string` (PR 1.7)."""
    from ocjs_bindgen.ast import get_typedefed_template_type_as_string
    return get_typedefed_template_type_as_string(self.tuInfo, theTypeSpelling, templateDecl, templateArgs)

  def replaceTemplateArgs(self, string, templateArgs = None):
    """Delegates to :func:`ocjs_bindgen.ast.template_args.replace_template_args` (PR 1.7)."""
    from ocjs_bindgen.ast import replace_template_args
    return replace_template_args(string, templateArgs)

  def render_dropped_method_jsdoc(self, theClass, method, reasons):
    """Dropped-method transparency hook — render comment(s) for a dropped method.

    Default implementation is a no-op; the Embind .cpp output stays
    binding-only. The TypescriptBindings subclass overrides to emit
    `// dropped: <position> resolves to excluded type <name>` lines so
    .d.ts consumers see why the method is missing rather than silently
    losing the API surface.
    """
    return ""

  def processClass(self, theClass, templateDecl = None, templateArgs = None):
    output = ""
    isAbstract = isAbstractClass(theClass, self.tuInfo.classDict)
    if not isAbstract:
      try:
        output += self.processSimpleConstructor(theClass, templateDecl, templateArgs)
      except SkipException as e:
        print(str(e))

    method_contexts = [(list(theClass.get_children()), templateArgs)]
    inherited = inherited_template_base(theClass)
    if inherited is not None:
      inherited_template, inherited_args = inherited
      method_contexts.append((list(inherited_template.get_children()), inherited_args))

    for children, context_args in method_contexts:
      method_groups = defaultdict(list)
      for method in children:
        if not filterMethodOrProperty(theClass, method):
          # Dropped-method transparency: when the method was dropped because a
          # parameter/return resolves to an excluded class, the wrapped
          # filter recorded the reason in the side-table. The TS subclass
          # renders a `// dropped: ...` comment here so .d.ts consumers
          # see why the method is missing; the Embind subclass returns ""
          # (no comment in the .cpp output).
          try:
            reasons = pop_dropped_method_reasons(theClass.spelling, method.displayname)
          except Exception:
            reasons = []
          if reasons:
            output += self.render_dropped_method_jsdoc(theClass, method, reasons)
          continue
        if method.access_specifier == clang.cindex.AccessSpecifier.PUBLIC and method.kind == clang.cindex.CursorKind.CXX_METHOD and not method.spelling.startswith("operator"):
          method_groups[method.spelling].append(method)
        elif method.access_specifier == clang.cindex.AccessSpecifier.PUBLIC and method.kind == clang.cindex.CursorKind.FIELD_DECL:
          try:
            output += self.processMethodOrProperty(theClass, method, templateDecl, context_args)
          except SkipException as e:
            print(str(e))

      for methods in method_groups.values():
        try:
          output += self.processMethodGroup(theClass, methods, templateDecl, context_args)
        except SkipException as e:
          print(str(e))

    output += self.processFinalizeClass()
    if not isAbstract:
      try:
        output += self.processOverloadedConstructors(theClass, None, templateDecl, templateArgs)
      except SkipException as e:
        print(str(e))
    return output

  def processMethodGroup(self, theClass, methods, templateDecl=None, templateArgs=None):
    """Process a group of methods with the same name. Override in subclasses."""
    output = ""
    arity_seen = {}
    for method in methods:
      nargs = len(list(method.get_arguments()))
      key = nargs
      arity_idx = arity_seen.get(key, 0)
      arity_seen[key] = arity_idx + 1
      try:
        output += self.processMethodOrProperty(theClass, method, templateDecl, templateArgs, overload_index=arity_idx)
      except SkipException as e:
        print(str(e))
    return output

class EmbindBindings(Bindings):
  def __init__(
    self,
    tuInfo
  ):
    super().__init__(tuInfo)
    _embind_preamble.init_state(self)

  def processClass(self, theClass, templateDecl = None, templateArgs = None):
    return _embind_class.process_class(self, theClass, templateDecl, templateArgs)

  def processFinalizeClass(self):
    return _embind_class.process_finalize_class(self)

  def _rewrite_typedef_nested_types(self, type_str, class_cpp, underlying_spelling, template_decl):
    return _embind_ctor.rewrite_typedef_nested_types(type_str, class_cpp, underlying_spelling, template_decl)

  def _emitConstructor(self, class_cpp, args, template_decl, template_args, use_handle_override, underlying_spelling=None):
    return _embind_ctor.emit_constructor(self, class_cpp, args, template_decl, template_args, use_handle_override, underlying_spelling)

  def _codegen_dispatch_tree(self, tree, className, useHandleOverride, templateDecl, templateArgs, ind=6, arity=None):
    return _dispatch.codegen_dispatch_tree(self, tree, className, useHandleOverride, templateDecl, templateArgs, ind, arity)

  def _emitValDispatchConstructor(self, className, arity, tree, useHandleOverride, templateDecl, templateArgs):
    return _dispatch.emit_val_dispatch_constructor(self, className, arity, tree, useHandleOverride, templateDecl, templateArgs)

  def processSimpleConstructor(self, theClass, templateDecl = None, templateArgs = None):
    return _embind_ctor.process_simple_constructor(self, theClass, templateDecl, templateArgs)

  def getOriginalArgumentType(self, arg, templateDecl = None, templateArgs = None):
    """Resolve type for select_overload: keeps original const/ref qualifiers exactly."""
    argChildren = list(arg.get_children())
    hasDefaultValue = any(x.spelling == "=" for x in list(arg.get_tokens()))
    isArray = not hasDefaultValue and len(argChildren) > 1 and argChildren[1].kind == clang.cindex.CursorKind.INTEGER_LITERAL
    if isArray:
      const = "const " if list(arg.get_tokens())[0].spelling == "const" else ""
      arrayCount = list(argChildren[1].get_tokens())[0].spelling
      return const + argChildren[0].type.spelling + " (&)[" + arrayCount + "]"
    return self.resolveWithCanonicalFallback(arg.type.spelling, arg.type, templateDecl, templateArgs)

  def getSingleArgumentBinding(self, argNames = True, isConstructor = False, templateDecl = None, templateArgs = None):
    def f(arg):
      argChildren = list(arg.get_children())
      argBinding = ""
      hasDefaultValue = any(x.spelling == "=" for x in list(arg.get_tokens()))
      isArray = not hasDefaultValue and len(argChildren) > 1 and argChildren[1].kind == clang.cindex.CursorKind.INTEGER_LITERAL
      changed = False
      if isArray:
        const = "const " if list(arg.get_tokens())[0].spelling == "const" else ""
        arrayCount = list(argChildren[1].get_tokens())[0].spelling
        argBinding = const + argChildren[0].type.spelling + " (&" + (arg.spelling if argNames else "") + ")[" + arrayCount + "]"
        changed = True
      else:
        typename = self.resolveWithCanonicalFallback(arg.type.spelling, arg.type, templateDecl, templateArgs)
        decl = arg.type.get_declaration()
        if decl and decl.kind == clang.cindex.CursorKind.ENUM_DECL:
          parent = decl.semantic_parent
          if parent and parent.kind in (clang.cindex.CursorKind.CLASS_DECL, clang.cindex.CursorKind.STRUCT_DECL):
            typename = arg.type.get_canonical().spelling
        if arg.type.kind == clang.cindex.TypeKind.LVALUEREFERENCE:
          tokenList = list(arg.get_tokens())
          isConstRef = len(tokenList) > 0 and tokenList[0].spelling == "const"
          if not isConstRef:
            if typename[-2] == "*" or "".join(typename.rsplit("&", 1)).strip() in ["Standard_Boolean", "Standard_Real", "Standard_Integer"]: # types that can be copied
              typename = "".join(typename.rsplit("&", 1))
              changed = True
            else:
              if isConstructor:
                typename = typename
                changed = True
              else:
                typename = "const " + typename
                changed = True
        argBinding = typename + ((" " + arg.spelling) if argNames else "")
      return [argBinding, changed]
    return f

  def _resolveArgType(self, arg, templateDecl, templateArgs):
    """Resolve an argument's C++ type, substituting template args."""
    pointee = arg.type.get_pointee()
    if pointee.kind != clang.cindex.TypeKind.INVALID:
      spelling = pointee.spelling
    else:
      spelling = arg.type.spelling
    if templateArgs is not None:
      bare = spelling.replace("const ", "")
      if bare in templateArgs:
        spelling = spelling.replace(bare, templateArgs[bare].spelling)
    return spelling

  def _getArgName(self, arg, index):
    return arg.spelling if arg.spelling else f"argNo{index}"

  def _needsCStringWrapper(self, type):
    return type.get_canonical().kind == clang.cindex.TypeKind.POINTER and isCString(type)

  def _canDoRbv(self, method):
    return _rbv.can_do_rbv(method)

  def _getJsArity(self, method):
    """Get the JS-visible arity after RBV output param stripping."""
    args = list(method.get_arguments())
    if not any(isOutputParam(a.type) for a in args):
      return len(args)
    if not self._canDoRbv(method):
      return len(args)
    return sum(1 for a in args if not shouldStripParam(a.type, method) and not isRawPointerParam(a.type))

  def _getJsVisibleArgs(self, method):
    """Get list of (original_cpp_index, arg) for JS-visible args."""
    args = list(method.get_arguments())
    if not any(isOutputParam(a.type) for a in args):
      return [(i, a) for i, a in enumerate(args)]
    if not self._canDoRbv(method):
      return [(i, a) for i, a in enumerate(args)]
    return [(i, a) for i, a in enumerate(args) if not shouldStripParam(a.type, method) and not isRawPointerParam(a.type)]

  def _jsEffectiveArityRange(self, method):
    """Rule 3 helper: return ``(min_arity, max_arity)`` post-RBV-elision +
    post-default-expansion. See :func:`ocjs_bindgen.codegen.rbv.js_effective_arity_range`.
    """
    return _rbv.js_effective_arity_range(self, method)

  def _jsEffectiveArityCollisions(self, group, templateDecl=None, templateArgs=None):
    """Rule 3 precondition: return a list of
    ``(method_a, method_b, intersection_lo, intersection_hi)`` tuples for
    every same-name overload pair in ``group`` whose JS-effective arity
    ranges overlap. See :func:`ocjs_bindgen.codegen.rbv.js_effective_arity_collisions`.
    """
    return _rbv.js_effective_arity_collisions(self, group, templateDecl, templateArgs)

  def _ensureResultStruct(self, method, args, className, overloadPostfix, templateDecl, templateArgs, theClass=None):
    return _rbv.ensure_result_struct(self, method, args, className, overloadPostfix, templateDecl, templateArgs, theClass=theClass)

  def _emitRbvCollisionDispatch(self, theClass, colliding_methods, js_arity, className, templateDecl, templateArgs):
    return _rbv.emit_rbv_collision_dispatch(self, theClass, colliding_methods, js_arity, className, templateDecl, templateArgs)

  def _containerNeedsDispose(self, disposable_field_names):
    """Pure predicate over the disposable-field list produced by
    `_ensureResultStruct`. The list is non-empty iff at least one container
    field is an embind-managed type (class instance or Handle<T>).

    Drives the val::object()-vs-value_object branch in `_emitOutputParamBinding`
    and the `[Symbol.dispose](): void` member in `_buildOutputParamReturnType`.
    """
    return bool(disposable_field_names)

  def _emitOutputParamBinding(self, theClass, method, args, className, classTypeName, overloadPostfix, templateDecl, templateArgs):
    """Emit the embind binding lambda for a method with OCJS-classified output parameters.

    See ``ocjs_bindgen.codegen.rbv.emit_output_param_binding`` for the S0/S1/S2
    shape contract — this method is a thin delegator (PR 2.2).
    """
    return _rbv.emit_output_param_binding(self, theClass, method, args, className, classTypeName, overloadPostfix, templateDecl, templateArgs)

  def _buildValueWrapperLambda(self, method, classCpp, templateDecl, templateArgs, use_arg_count, storage):
    """Build ONE ``optional_override`` value-wrapper lambda for a non-copyable
    return method, using only the first ``use_arg_count`` parameters.

    The non-copyable-return path (rule 17/TR-RBV) wraps the C++ return in a
    ``thread_local`` staging slot (by-value) or ``val(&ref)`` (by-ref) so
    embind's copy-marshalling (``wire.h:391``) is bypassed. When the method
    carries trailing defaults, the caller emits one lambda per JS-callable
    arity (full arity plus one truncation per trailing default). Each
    truncation lambda declares only its first ``use_arg_count`` parameters and
    calls the C++ function with exactly those — so the C++ source defaults
    (NOT JS-undefined-coerced ``false``/``0``/``null``) fill the omitted
    trailing slots. Without the truncations a 2-arg ``Perform(graph, trsf)``
    call silently applies the WRONG defaults (see
    ``tests/smoke/smoke-rbv-trailing-defaults.test.ts``).
    """
    args_m = list(method.get_arguments())[:use_arg_count]
    arg_decl = []
    fwd = []
    for i, a in enumerate(args_m):
      typ = self.getOriginalArgumentType(a, templateDecl, templateArgs)
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
    ret_cpp = self.resolveWithCanonicalFallback(
      ret_clang_type.spelling, ret_clang_type, templateDecl, templateArgs)
    if method.is_static_method():
      call_expr = f"{classCpp}::{method.spelling}({call_fwd})"
      self_prefix = ""
    else:
      call_expr = f"self.{method.spelling}({call_fwd})"
      const_self = "const " if method.is_const_method() else ""
      self_decl = f"{const_self}{classCpp}& self"
      self_prefix = self_decl + (", " if decls else "")
    if return_by_ref:
      return merge("",
        " optional_override([](",
        self_prefix,
        decls,
        ") -> emscripten::val {\n",
        indent(3),
        "auto& ret = ",
        call_expr,
        ";\n",
        indent(3),
        "return emscripten::val(&ret, allow_raw_pointers());\n",
        indent(2),
        "})",
      )
    return merge("",
      " optional_override([](",
      self_prefix,
      decls,
      ") -> emscripten::val {\n",
      indent(3),
      f"thread_local {ret_cpp} {storage};\n",
      indent(3),
      f"{storage} = {call_expr};\n",
      indent(3),
      f"return emscripten::val(&{storage}, allow_raw_pointers());\n",
      indent(2),
      "})",
    )

  def processMethodOrProperty(self, theClass, method, templateDecl = None, templateArgs = None, overload_index = 0, override_postfix = None):
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
      self._checkUnbindableArgs(method.spelling, theClass.spelling, args)

      hasOutputParams = any(isOutputParam(a.type) for a in args)
      hasCStringArgs = any(self._needsCStringWrapper(a.type) for a in args)
      returnIsCString = self._needsCStringWrapper(method.result_type)

      functionBinding = None
      if hasOutputParams:
        functionBinding = self._emitOutputParamBinding(
          theClass, method, args, className, classCpp, overloadPostfix, templateDecl, templateArgs)
      if functionBinding is None and hasOutputParams:
        print(f"Skipping {className}::{method.spelling}: output params with unbindable return type")
        return ""
      if functionBinding is None and (hasCStringArgs or returnIsCString):
        def needsCStringOrLvalueWrapper(type):
          return (
            type.kind == clang.cindex.TypeKind.LVALUEREFERENCE and (
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
          return pick(
            not args[x[0]].spelling == "",
            args[x[0]].spelling,
            f"argNo{str(x[0])}"
          )
        classTypeName = classCpp
        wrappedParamTypes = merge(", ", *map(lambda x:
          pick(
            x[1],
            "std::string" if isCString(args[x[0]].type) else "emscripten::val",
            replaceTemplateArgs(x)
          ),
          enumerate(argsNeedingWrapper)
        ))
        wrappedParamTypesAndNames = merge(", ", *map(lambda x:
          pick(
            x[1],
            f"std::string {getArgName(x)}" if isCString(args[x[0]].type) else f"emscripten::val {getArgName(x)}",
            f"{replaceTemplateArgs(x)} {getArgName(x)}",
          ), enumerate(argsNeedingWrapper)))
        def generateInvocationArgs(x):
          if x[1]:
            if isCString(args[x[0]].type):
              if not args[x[0]].type.get_canonical().get_pointee().is_const_qualified() or args[x[0]].type.is_const_qualified():
                return f"strdup({getArgName(x)}.c_str())"
              else:
                return f"{getArgName(x)}.c_str()"
            else:
              return getArgName(x)
          else:
            return getArgName(x)
        returnNeedsCStringWrapper = isCString(method.result_type)
        returnNeedsValWrapper = returnNeedsWrapper and not returnNeedsCStringWrapper
        resultTypeSpelling = \
          pick(returnNeedsValWrapper, "emscripten::val",
            pick(returnNeedsCStringWrapper, "std::string",
              self.resolveWithCanonicalFallback(method.result_type.spelling, method.result_type, templateDecl, templateArgs)))
        functionBindingHead = \
          merge("",
            "\n",
            indent(3),
            pickWrap(not method.is_static_method(),
              [f"std::function<{resultTypeSpelling}(", f"(({resultTypeSpelling} (*)("],
              merge("",
                pick(not method.is_static_method(), f"{classTypeName}&", ""),
                pick(not method.is_static_method() and len(args) > 0, ", ", ""),
                wrappedParamTypes,
              ),
              [")>(", "))"]
            ),
            merge("",
              "[](",
              pick(not method.is_static_method(), f"{classTypeName}& that", ""),
              pick(not method.is_static_method() and len(args) > 0, ", ", ""),
              wrappedParamTypesAndNames,
              ")",
            ),
            f" -> {resultTypeSpelling} {{\n",
          )
        functionBindingBody = \
          merge("",
            indent(4),
            pick(
              not method.result_type.spelling == "void",
              merge("",
                pick(not isCString(method.result_type) and (method.result_type.is_const_qualified() or method.result_type.get_pointee().is_const_qualified()), "const ", ""),
                "auto",
                pick(not isCString(method.result_type) and method.result_type.kind == clang.cindex.TypeKind.LVALUEREFERENCE, "& ", " "),
                "ret = ",
              ),
              ""
            ),
            merge("",
              pick(not method.is_static_method(), "that.", f"{classCpp}::"),
              f'{method.spelling}({merge(", ", *map(lambda x: generateInvocationArgs(x), enumerate(argsNeedingWrapper)))})',
            ),
            ";\n",
            pick(
              method.result_type.spelling == "void",
              "",
              pick(
                returnNeedsValWrapper,
                pick(
                  method.result_type.kind == clang.cindex.TypeKind.POINTER,
                  merge("",
                    indent(4),
                    "return ret == nullptr ? emscripten::val::null() : emscripten::val(static_cast<",
                      self.getTypedefedTemplateTypeAsString(method.result_type.spelling, templateDecl, templateArgs),
                    ">(ret), allow_raw_pointers());\n",
                  ),
                  f"{indent(4)}return emscripten::val(ret, allow_raw_pointers());\n",
                ),
                pick(
                  returnNeedsCStringWrapper,
                  merge("",
                    indent(4),
                    "return ret == nullptr ? std::string() : std::string(ret);\n",
                  ),
                  f"{indent(4)}return ret;\n",
                ),
              ),
            ),
          )
        functionBinding = \
          merge("",
            functionBindingHead,
            functionBindingBody,
            f"{indent(3)}}}\n",
            f"{indent(2)})",
          )
      # Truncation lambdas for the non-copyable value-wrapper return path
      # (TR-RBV). Populated below when the method has trailing defaults so
      # the emission site can register one binding per JS-callable arity.
      _value_wrapper_truncations = []
      if functionBinding is None:
        if self._returnTypeRequiresValueWrapper(method):
          # TR-RBV trailing-default fan-out: emit the full-arity value-wrapper
          # lambda PLUS one truncation per trailing default. embind's
          # `optional_override` lambda registration is permissive about
          # missing JS args (they arrive as `undefined`, silently coerced to
          # the JS-undefined C++ default — `false`/`0`/`null`), so a single
          # full-arity envelope would apply the WRONG defaults for partial
          # calls. Registering a distinct lambda at each shorter arity routes
          # partial calls to a body that calls the C++ function with only the
          # supplied args, letting the C++ SOURCE defaults fill the rest.
          # See `tests/smoke/smoke-rbv-trailing-defaults.test.ts`.
          n_value_wrapper_args = len(list(method.get_arguments()))
          n_value_wrapper_defaults = self._countTrailingDefaults(method)
          self._ret_wrapper_serial += 1
          functionBinding = self._buildValueWrapperLambda(
            method, classCpp, templateDecl, templateArgs,
            use_arg_count=n_value_wrapper_args,
            storage=f"__ocjs_ret_{self._ret_wrapper_serial}",
          )
          for truncate_to in range(
            n_value_wrapper_args - 1,
            n_value_wrapper_args - n_value_wrapper_defaults - 1,
            -1,
          ):
            self._ret_wrapper_serial += 1
            _value_wrapper_truncations.append(
              self._buildValueWrapperLambda(
                method, classCpp, templateDecl, templateArgs,
                use_arg_count=truncate_to,
                storage=f"__ocjs_ret_{self._ret_wrapper_serial}",
              )
            )
        elif numOverloads == 1:
          functionBinding = " &" + classCpp + "::" + method.spelling
        else:
          returnType = self.resolveWithCanonicalFallback(
            method.result_type.spelling,
            method.result_type,
            templateDecl,
            templateArgs,
          )
          canonicalReturn = method.result_type.get_canonical().spelling
          if method.semantic_parent != theClass and "type-parameter-" in canonicalReturn:
            returnType = self._substitute_canonical_template_names(canonicalReturn, templateArgs)
          returnType = _qualifyInheritedTemplateScope(returnType, theClass, method)
          functionBinding = merge("",
            " select_overload<",
            returnType,
            f'({merge(", ", *map(lambda x: self.getOriginalArgumentType(x, templateDecl, templateArgs), list(method.get_arguments())))})',
            pick(method.is_const_method(), "const", ""),
            pick(not method.is_static_method(), f", {classCpp}", ""),
            f">(&{classCpp}::{method.spelling})",
          )

      if method.is_static_method():
        functionCommand = "class_function"
      else:
        functionCommand = "function"

      # Optional-overload migration: collapse trailing-default arity fan-out
      # into a single `optional_override` lambda whose last `nDefaults`
      # parameters are `std::optional<T>` with `.value_or(D)` recovery,
      # paired with the libembind v2 dispatcher's arity-pad + wildcard
      # logic. See
      # docs/research/ocjs-optional-overload-resolution-blueprint.md.
      # R4 / T1 guards are unreachable here because the `numOverloads == 1`
      # gate below already excludes same-arity siblings; only R6 needs
      # checking at this emission site.
      nDefaults = self._countTrailingDefaults(method)
      original_args_for_count = list(method.get_arguments())
      n_args_for_count = len(original_args_for_count)
      trailing_for_count = original_args_for_count[n_args_for_count - nDefaults:] if nDefaults > 0 else []
      # Effective optional count = trailing defaults that we actually wrap in
      # std::optional<T>. Raw-pointer trailing defaults stay unwrapped (embind
      # static_assert rejects std::optional<T*>). If every trailing default
      # is a raw pointer, the lambda would add no dispatch value over the
      # direct ``&Cls::method`` binding — and the lambda's parameter-type
      # string would re-introduce nested-name resolution failures that the
      # plain-pointer binding sidesteps. Fall through in that case.
      n_optional_wraps = sum(
        1 for a in trailing_for_count
        if not (a.type.kind == clang.cindex.TypeKind.POINTER and not isCString(a.type))
      )
      # Per-row classification (policy rules 1, 4, 9).
      #
      # The classifier is the SINGLE SOURCE OF TRUTH for primitive
      # choice. We build per-position metadata that lets it pick the
      # precise matrix row — most importantly ``is_canonical_optional_default``
      # which distinguishes the canonical ``std::optional<T>`` domain
      # (rows 3, 4, 5 — handle null defaults, const-ref temps,
      # scoped-constant defaults) from the val-owned defaults (rows 1,
      # 2, 23, 30, 33, 34, 36, 37) per policy rule 9 — "Rows {3, 4, 5,
      # 21, 22} keep ``std::optional<T>``; all other default-bearing
      # rows use ``emscripten::val`` discrimination".
      #
      # Sibling-count metadata propagates through the descriptor so
      # the classifier can detect row 34 (multi-overload trailing
      # default) even though ``processMethodOrProperty`` only sees
      # one method cursor at a time — the method-group dispatcher
      # (``embind/method.py::process_method_group``) routes each
      # overload through this function with the full sibling tally
      # available via ``getMethodOverloadPostfix``.
      _row_overload = OverloadDescriptor(
        parameters=tuple(
          ParameterDescriptor(
            type_name=self.getOriginalArgumentType(a, templateDecl, templateArgs),
            is_trailing_default=(i >= n_args_for_count - nDefaults),
            is_cstring=isCString(a.type),
            is_raw_pointer=isRawPointerParam(a.type) and not isCString(a.type),
            is_canonical_optional_default=(
              i >= n_args_for_count - nDefaults
              and _is_canonical_optional_default(self, a, theClass, classCpp, templateDecl, templateArgs)
            ),
            accepts_meaningful_null=(
              i >= n_args_for_count - nDefaults
              and _accepts_meaningful_null(self, a, theClass, classCpp, templateDecl, templateArgs)
            ),
          )
          for i, a in enumerate(original_args_for_count)
        ),
        is_constructor=False,
        is_static=method.is_static_method(),
        sibling_count=max(0, numOverloads - 1),
      )
      _row_inputs = GroupClassificationInputs(
        overloads=(_row_overload,),
        has_sibling_aliasing=False,
        has_output_params=hasOutputParams,
      )
      _row_classification = classify_overload_group(_row_inputs)

      # Strategy router — picks the emission helper based on the
      # classifier's primitive and the return-side concerns that
      # cannot yet compose with val/optional default-bearing lambdas
      # (cstring return, non-copyable value-wrapper return). Returns
      # one of: ``"val_default"``, ``"optional_default"``, ``"legacy"``.
      #
      # ``"legacy"`` means "fall through to the existing
      # ``functionBinding`` path" (cstring-wrapper lambda for cstring
      # I/O, value-wrapper lambda for non-copyable return, plain
      # ``&Cls::method`` / ``select_overload<>`` otherwise). The
      # legacy path does NOT expand trailing defaults — partial-arity
      # JS calls are unreachable for those methods, which matches the
      # pre-Phase-3 behaviour for output-param / cstring-return /
      # non-copyable-return methods.
      _strategy = _select_emission_strategy(
        classification=_row_classification,
        n_defaults=nDefaults,
        n_optional_wraps=n_optional_wraps,
        has_output_params=hasOutputParams,
        has_cstring_args=hasCStringArgs,
        return_is_cstring=returnIsCString,
        return_requires_value_wrapper=self._returnTypeRequiresValueWrapper(method),
      )
      can_emit_val_default = _strategy == "val_default"
      use_optional_emit = _strategy == "optional_default"

      if can_emit_val_default:
        # Row 33 — emit a val-discrimination lambda with strict
        # null/undefined unwrap (policy rule 5). The legacy cstring
        # wrapper is bypassed for this row.
        function_command = "class_function" if method.is_static_method() else "function"
        try:
          assert_no_nonconst_ref_in_optional(
            theClass.spelling,
            f"{theClass.spelling}.{method.spelling}",
            original_args_for_count[n_args_for_count - nDefaults:],
          )
        except SkipException as e:
          print(str(e))
          output += f"{indent(2)}.{function_command}(\"{method.spelling}{overloadPostfix}\",{functionBinding}, allow_raw_pointers())\n"
        else:
          print(_row_classification.diagnostic(f"{theClass.spelling}.{method.spelling}"))
          # Row 30 — when any trailing-default position is tagged
          # ``accepts_meaningful_null``, plumb the set of positions
          # through to the val-default helper so its strict-vs-permissive
          # dispatch (rule 5) honours the row-30 carve-out per slot.
          accepts_null_set = {
            i for i, p in enumerate(_row_overload.parameters)
            if p.accepts_meaningful_null
          }
          # TR-MO truncation fan-out for row 34 — when the method has
          # sibling overloads (e.g. BRepOffsetAPI_MakeFilling.Add) the
          # full-arity val-default lambda alone is insufficient because
          # libembind's argCount dispatcher only consults registrations
          # whose registered arity matches the JS call arity. Emitting
          # truncation lambdas at each shorter arity (with trailing
          # defaults baked in) lets libembind dispatch by arg0 type at
          # those intermediate arities, so ``Add(edge, GeomAbs_C0)``
          # routes to the Edge variant even though the Face variant
          # also registers at arity 2.
          emit_truncations = numOverloads > 1
          output += _val_default.emit_method_with_val_default(
            self,
            theClass,
            method,
            template_decl=templateDecl,
            template_args=templateArgs,
            function_command=function_command,
            overload_postfix=overloadPostfix,
            class_cpp=classCpp,
            accepts_null_per_position=accepts_null_set,
            emit_truncations=emit_truncations,
          )
      elif use_optional_emit:
        original_args = list(method.get_arguments())
        nArgs = len(original_args)
        try:
          assert_no_nonconst_ref_in_optional(
            theClass.spelling,
            f"{theClass.spelling}.{method.spelling}",
            original_args[nArgs - nDefaults:],
          )
        except SkipException as e:
          print(str(e))
          # Fall back to the unwrapped binding so we still expose the method;
          # the unsafe trailing-default shape is rejected but the full-arity
          # call remains usable.
          output += f"{indent(2)}.{functionCommand}(\"{method.spelling}{overloadPostfix}\",{functionBinding}, allow_raw_pointers())\n"
        else:
          result_cpp = self.resolveWithCanonicalFallback(
            method.result_type.spelling, method.result_type, templateDecl, templateArgs)
          lambda_decls = []
          call_arg_names = []
          for i, a in enumerate(original_args):
            nm = a.spelling if a.spelling else f"a{i}"
            is_raw_pointer_trailing = (
              i >= nArgs - nDefaults
              and a.type.kind == clang.cindex.TypeKind.POINTER
              and not isCString(a.type)
            )
            if is_raw_pointer_trailing:
              # Raw-pointer trailing defaults can't be wrapped in
              # std::optional<T*>: embind's wire.h:124 static_assert rejects
              # raw pointer types inside std::optional even when
              # `allow_raw_pointers()` is applied at the binding level.
              # Keep the slot as a raw pointer; JS callers must pass an
              # explicit value or null when invoking this method.
              typ = self.getOriginalArgumentType(a, templateDecl, templateArgs)
              lambda_decls.append(f"{typ} {nm}")
              call_arg_names.append(nm)
            elif i >= nArgs - nDefaults:
              inner = self._getOptionalInnerType(a, templateDecl, templateArgs)
              default_expr = self._extractDefaultExpr(a, owning_class=theClass, class_scope=classCpp) or "{}"
              lambda_decls.append(f"std::optional<{inner}> {nm}")
              call_arg_names.append(f"{nm}.value_or(({default_expr}))")
            else:
              typ = self.getOriginalArgumentType(a, templateDecl, templateArgs)
              lambda_decls.append(f"{typ} {nm}")
              call_arg_names.append(nm)
          decls_str = ", ".join(lambda_decls)
          names_str = ", ".join(call_arg_names)
          if method.is_static_method():
            full_decls = decls_str
            call_expr = f"{classCpp}::{method.spelling}({names_str})"
          else:
            const_self = "const " if method.is_const_method() else ""
            self_decl = f"{const_self}{classCpp}& self"
            full_decls = self_decl if not decls_str else f"{self_decl}, {decls_str}"
            call_expr = f"self.{method.spelling}({names_str})"
          return_kw = "" if method.result_type.spelling == "void" else "return "
          optional_binding = (
            f" optional_override([]({full_decls}) -> {result_cpp} {{\n"
            f"{indent(3)}{return_kw}{call_expr};\n"
            f"{indent(2)}}})"
          )
          output += (
            f"{indent(2)}.{functionCommand}(\"{method.spelling}{overloadPostfix}\","
            f"{optional_binding}, allow_raw_pointers())\n"
          )
      else:
        output += f"{indent(2)}.{functionCommand}(\"{method.spelling}{overloadPostfix}\",{functionBinding}, allow_raw_pointers())\n"
        # TR-RBV: register the shorter-arity value-wrapper truncations so
        # partial calls route to a body that lets the C++ source defaults
        # fill the omitted trailing slots.
        for _trunc_binding in _value_wrapper_truncations:
          output += f"{indent(2)}.{functionCommand}(\"{method.spelling}{overloadPostfix}\",{_trunc_binding}, allow_raw_pointers())\n"
    if method.access_specifier == clang.cindex.AccessSpecifier.PUBLIC and method.kind == clang.cindex.CursorKind.FIELD_DECL:
      if method.type.kind == clang.cindex.TypeKind.CONSTANTARRAY:
        print("Cannot handle array properties, skipping " + className + "::" + method.spelling)
      elif not method.type.get_pointee().kind == clang.cindex.TypeKind.INVALID:
        print("Cannot handle pointer properties, skipping " + className + "::" + method.spelling)
      else:
        if not self._isWireSafeFieldType(method.type):
          return output
        output += f"{indent(2)}.property(\"{method.spelling}\", &{classCpp}::{method.spelling})\n"
    return output

  def _emitValDispatchMethod(self, theClass, methodName, arity, tree, classCpp, isStatic, templateDecl, templateArgs, mixed_returns=False):
    return _dispatch.emit_val_dispatch_method(self, theClass, methodName, arity, tree, classCpp, isStatic, templateDecl, templateArgs, mixed_returns)

  def _codegen_method_dispatch_tree(self, tree, classCpp, isStatic, templateDecl, templateArgs, ind=6, mixed_returns=False):
    return _dispatch.codegen_method_dispatch_tree(self, tree, classCpp, isStatic, templateDecl, templateArgs, ind, mixed_returns)

  def _emitSuffixedMethod(self, theClass, m, suffix, className, templateDecl, templateArgs):
    """Emit a single method binding with a _N suffix for ambiguous overloads."""
    args = list(m.get_arguments())
    argsNeedingWrapper = any(
      m_arg.type.kind == clang.cindex.TypeKind.LVALUEREFERENCE and (
        m_arg.type.get_pointee().get_canonical().spelling in builtInTypes or
        m_arg.type.get_pointee().kind == clang.cindex.TypeKind.ENUM
      ) or isCString(m_arg.type)
      for m_arg in args
    )
    if argsNeedingWrapper:
      try:
        return self.processMethodOrProperty(theClass, m, templateDecl, templateArgs, overload_index=0)
      except SkipException as e:
        print(str(e))
        return ""
    argList = list(m.get_arguments())
    returnType = self.resolveWithCanonicalFallback(m.result_type.spelling, m.result_type, templateDecl, templateArgs)
    argTypesStr = ', '.join(self.getOriginalArgumentType(a, templateDecl, templateArgs) for a in argList)
    constStr = "const" if m.is_const_method() else ""
    classCpp = getClassQualifiedName(theClass, templateDecl)
    if not classCpp:
      classCpp = className
    if m.is_static_method():
      selectStr = f' select_overload<{returnType}({argTypesStr})>(&{classCpp}::{m.spelling})'
    else:
      selectStr = f' select_overload<{returnType}({argTypesStr}){constStr}, {classCpp}>(&{classCpp}::{m.spelling})'
    funcCmd = "class_function" if m.is_static_method() else "function"
    return f'{indent(2)}.{funcCmd}("{m.spelling}{suffix}",{selectStr}, allow_raw_pointers())\n'

  def processMethodGroup(self, theClass, methods, templateDecl=None, templateArgs=None):
    """Process a group of methods with the same name, using dispatch for same-arity groups."""
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
        self._checkUnbindableArgs(m.spelling, theClass.spelling, list(m.get_arguments()))
        bindable.append(m)
      except SkipException as e:
        print(str(e))

    if not bindable:
      return output

    # Filter rvalue-reference overloads — JS has no move semantics.
    # These create JS-ambiguous duplicates of const-ref overloads,
    # forcing unnecessary _N suffixes on the entire arity group.
    bindable = [m for m in bindable if not any(
      a.type.kind == clang.cindex.TypeKind.RVALUEREFERENCE
      for a in m.get_arguments()
    )]
    if not bindable:
      return output

    bindable = _rbv.select_js_effective_overload_survivors(
      self, bindable, templateDecl, templateArgs
    )
    if not bindable:
      return output

    by_arity = defaultdict(list)
    for m in bindable:
      by_arity[len(list(m.get_arguments()))].append(m)

    all_unique_arities = all(len(group) == 1 for group in by_arity.values())

    by_js_arity = defaultdict(list)
    for m in bindable:
      by_js_arity[self._getJsArity(m)].append(m)

    js_collisions = {
      js_arity: group
      for js_arity, group in by_js_arity.items()
      if len(group) > 1 and len(set(len(list(m.get_arguments())) for m in group)) > 1
    }

    if js_collisions:
      collision_methods = set(id(m) for group in js_collisions.values() for m in group)
      for js_arity, group in sorted(js_collisions.items()):
        output += self._emitRbvCollisionDispatch(theClass, group, js_arity, className, templateDecl, templateArgs)
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
          output += self.processMethodOrProperty(theClass, m, templateDecl, templateArgs, overload_index=idx, override_postfix="")
        except SkipException as e:
          print(str(e))
      return output

    # Some arities collide — handle per-arity group
    all_methods_of_name = [m for m in theClass.get_children()
                           if m.kind == clang.cindex.CursorKind.CXX_METHOD
                           and m.access_specifier == clang.cindex.AccessSpecifier.PUBLIC
                           and m.spelling == bindable[0].spelling]

    for arity, group in sorted(by_arity.items()):
      if len(group) == 1:
        try:
          output += self.processMethodOrProperty(theClass, group[0], templateDecl, templateArgs, overload_index=0, override_postfix="")
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
          wrapper_signatures = {
            tuple(
              JsType("val", "emscripten::val")
              if (
                isClassOutputParam(arg.type)
                or arg.type.get_canonical().spelling in unbindablePointerTypes
              )
              else self._classify_js_type(arg.type, templateDecl, templateArgs)
              for arg in method.get_arguments()
              if not shouldStripParam(arg.type, method)
            )
            for method in group
          }
          keep_public_name = len(wrapper_signatures) == len(group)
          arity_idx = {}
          for m in group:
            nargs = len(list(m.get_arguments()))
            idx = arity_idx.get(nargs, 0)
            arity_idx[nargs] = idx + 1
            try:
              output += self.processMethodOrProperty(
                theClass,
                m,
                templateDecl,
                templateArgs,
                overload_index=idx,
                override_postfix="" if keep_public_name else None,
              )
            except SkipException as e:
              print(str(e))
        else:
          if len(dispatchable) == 1:
            try:
              output += self.processMethodOrProperty(theClass, dispatchable[0], templateDecl, templateArgs, overload_index=0, override_postfix="")
            except SkipException as e:
              print(str(e))
          else:
            # One val-based dispatcher per same-arity multi-overload group.
            # Embind keys its method table on (name, arity), so emitting
            # multiple `.function("Name", select_overload<…>(…))` for the
            # same name + arity silently clobbers all but the last
            # registration. Routing the whole group through
            # `_emitValDispatchMethod` eliminates the clobber and gives
            # every overload (class-typed or not) a single runtime entry
            # point that dispatches via `val::instanceof` / typeof.
            #
            # Mixed static+instance groups (e.g. `XCAFDoc_ColorTool::GetColor`
            # where OCCT exposes both `static GetColor(TDF_Label, …)` and
            # `GetColor(TopoDS_Shape, …)` overloads with the same arity) are
            # split into two dispatchers: one `class_function` for the
            # static subset and one `function` for the instance subset.
            # A single combined dispatcher can only be `class_function`
            # OR `function`, never both, so JS-side `Class.foo(...)` calls
            # would fail arity match against an instance-only registration.
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
                  output += self.processMethodOrProperty(theClass, subset[0], templateDecl, templateArgs, overload_index=0, override_postfix="")
                except SkipException as e:
                  print(str(e))
                continue
              subset_tree = self._build_dispatch_tree(subset, templateDecl=templateDecl, templateArgs=templateArgs)
              output += self._emitValDispatchMethod(theClass, subset[0].spelling, arity, subset_tree, classCpp, isStatic, templateDecl, templateArgs, mixed_returns=subset_mixed_returns)
              # Emit `_N`-suffixed variants only for genuinely val-ambiguous
              # leaves so consumers can still reach a specific overload
              # explicitly when type-of/instanceof cannot disambiguate.
              val_ambiguous = self._collect_ambiguous_overloads(subset_tree)
              for m in val_ambiguous:
                idx = all_methods_of_name.index(m) if m in all_methods_of_name else 0
                suffix = "_" + str(idx + 1)
                output += self._emitSuffixedMethod(theClass, m, suffix, className, templateDecl, templateArgs)

          for m in wrapper_methods:
            idx = all_methods_of_name.index(m) if m in all_methods_of_name else 0
            suffix = "_" + str(idx + 1)
            output += self._emitSuffixedMethod(theClass, m, suffix, className, templateDecl, templateArgs)

    return output

  def processOverloadedConstructors(self, theClass, children = None, templateDecl = None, templateArgs = None):
    """Emit _N subclass bindings ONLY for genuinely ambiguous constructor overloads."""
    output = ""
    if children is None:
      children = list(theClass.get_children())
    constructors = list(filter(lambda x: x.kind == clang.cindex.CursorKind.CONSTRUCTOR and x.access_specifier == clang.cindex.AccessSpecifier.PUBLIC, children))
    if len(constructors) <= 1:
      return output

    filtered = self._filter_overloads(constructors, templateDecl)
    filtered = [c for c in filtered if filterMethodOrProperty(theClass, c)]
    bindable = []
    for c in filtered:
      try:
        self._checkUnbindableArgs("constructor", theClass.spelling, list(c.get_arguments()))
        bindable.append(c)
      except SkipException:
        continue

    # Find same-arity groups that are genuinely ambiguous
    by_arity = defaultdict(list)
    for c in bindable:
      by_arity[len(list(c.get_arguments()))].append(c)

    ambiguous_ctors = []
    for group in by_arity.values():
      if len(group) <= 1:
        continue
      tree = self._build_dispatch_tree(group, templateDecl=templateDecl, templateArgs=templateArgs)
      ambiguous_ctors.extend(self._collect_ambiguous_overloads(tree))

    if not ambiguous_ctors:
      return output

    useHandleOverride = isTransientDerived(theClass, self.tuInfo.classDict)
    name = getClassJsPublicName(theClass, templateDecl)
    qual = getClassQualifiedName(theClass, templateDecl)
    if not qual:
      qual = name
    allOverloads = constructors

    for constructor in ambiguous_ctors:
      try:
        overloadPostfix = "_" + str(allOverloads.index(constructor) + 1)
        args = ", ".join(list(map(lambda x: ("std::string " + x.spelling) if isCString(x.type) else self.getSingleArgumentBinding(True, True, templateDecl, templateArgs)(x)[0], constructor.get_arguments())))
        argNames = ", ".join(list(map(lambda x: (x.spelling + ".c_str()") if isCString(x.type) else x.spelling, constructor.get_arguments())))
        argTypes = ", ".join(list(map(lambda x: "std::string" if isCString(x.type) else self.getSingleArgumentBinding(False, True, templateDecl, templateArgs)(x)[0], constructor.get_arguments())))

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

  def processEnum(self, theEnum):
    jsName = getEnumJsPublicName(theEnum)
    cppQual = getEnumQualifiedName(theEnum)
    output = "EMSCRIPTEN_BINDINGS(" + jsName + ") {\n"

    bindingsOutput = "  enum_<" + cppQual + ">(\"" + jsName + "\", emscripten::enum_value_type::string)\n"
    enumChildren = list(theEnum.get_children())
    prefix = (cppQual + "::") if theEnum.is_scoped_enum() else (cppQual.rsplit("::", 1)[0] + "::" if "::" in cppQual else "")
    for enumChild in enumChildren:
      bindingsOutput += "    .value(\"" + enumChild.spelling + "\", " + prefix + enumChild.spelling + ")\n"
    bindingsOutput += "  ;\n"
    output += bindingsOutput

    output += "}\n\n"
    return output

class TypescriptBindings(Bindings):
  """TypeScript declaration generator for OCCT/custom-code Embind bindings.

  ============================================================================
  PRECONDITION — `_known_export_names` MUST be seeded before first use
  ============================================================================

  `resolve_type` (and the helper paths it depends on: `_is_known_export_name`,
  `_resolve_handle_recursive`, `_resolve_template_typedef`, etc.) consults
  the class-level set `_known_export_names` to decide whether a referenced
  C++ identifier corresponds to an exported TS symbol the consumer can
  resolve. When the set is empty, EVERY cross-class reference falls through
  to the `unknown` fallback in `resolve_type`. This produces silently broken
  `.d.ts` output where method signatures lose their real return/parameter
  types.

  Two seed paths exist; both must complete before any
  `processClass`/`processEnum`/`processTemplateTypedef` call:

    1. **Main OCCT build path** (full and custom builds, OCCT-side classes):
       `prepare_known_exports(tuInfo, filterClasses, filterTemplates)` walks
       the post-using-decl `tuInfo` and seeds class, template-typedef, and
       enum names. Called from `generateBindings.__main__` before `process()`.

    2. **Custom-code path** (`additionalCppFiles` from YAML):
       `generateCustomCodeBindings(customCode, known_exports=...)` accepts an
       explicit seed set computed by `buildFromYaml.main` from
       (a) YAML `bindings:` symbols ∪ (b) `_auto_symbols` ∪ (c) AST-discovered
       custom classes. The seed is assigned directly to
       `_known_export_names` before the per-fragment `process(...)` calls.

  Adding a third invocation path? You MUST seed `_known_export_names` first,
  or every cross-class reference in your fragments will collapse to `unknown`.
  ============================================================================
  """
  _docs_cache = None

  def __init__(
    self,
    tuInfo,
    diagnostics=None,
  ):
    super().__init__(tuInfo)
    self.imports = {}

    self.exports = set()
    self.ancestorChains = {}
    # R1 (W10 structural fix) — every C++ class identifier the resolver
    # attempts to emit as a TS type is recorded here BEFORE the
    # `_is_known_export_name` filter rejects unresolved candidates.
    # The set is serialised into each `.d.ts.json` fragment by
    # `pipeline/generate.py:typescriptGenerationFunc{Classes,Templates}`
    # and consumed at link time by `link/yaml_build.py:_compute_yaml_class_scope`
    # so unresolved cross-class references converge on the next link cycle.
    # Replaces the legacy `_NCOLLECTION_TOKEN_RE` regex scrape over rendered
    # TS payloads — the codegen layer holds the structured truth one
    # function call before serialisation, so reaching for regex was a
    # categorical wrong-abstraction choice.
    self.referenced_classes: set[str] = set()
    self._docs = self._load_docs()
    # PR 1.6 — Diagnostics moved off TypescriptBindings into a dedicated
    # service. Default to the process-wide singleton so legacy callers in
    # `__main__.py` and `buildFromYaml.py` continue to read the same shared
    # bucket they always have. Tests inject a fresh instance.
    from ocjs_bindgen.diagnostics import DIAGNOSTICS
    self._diagnostics = diagnostics if diagnostics is not None else DIAGNOSTICS
    # PR 1.5 — Resolver lives in `ocjs_bindgen.resolver`. The orchestrator
    # holds a back-reference to the binder so strategy modules can keep
    # accessing `self.exports`, `self.tuInfo`, and the class-level lookup
    # sets exactly as the in-place implementation did.
    from ocjs_bindgen.resolver import TypeScriptResolver
    self._resolver = TypeScriptResolver(self)

  # ---- R1 (W10 structural fix) helper -----------------------------------
  # Reserved primitive / sentinel spellings that are NOT C++ class
  # identifiers and must never enter `referenced_classes`. Kept as a
  # frozenset so the membership check is O(1).
  _REFERENCED_CLASS_BLOCKLIST = frozenset({
    "number", "string", "boolean", "void", "any", "unknown", "never",
    "object", "null", "undefined", "true", "false", "this",
  })

  def _record_referenced_class(self, name) -> None:
    """Record a C++ class identifier candidate seen during type resolution.

    Called from every `resolve_type` strategy *before* the known-export
    filter rejects unresolved references. The set is serialised into each
    `.d.ts.json` fragment and consumed at link time by
    `link/yaml_build.py:_compute_yaml_class_scope` to converge cross-class
    references on the next link cycle.

    Filters out builtins, function signatures (`(`/`)`), qualified spellings
    (`::`), templated forms (`<`/`>`), tuple syntax (`[`/`]`/`,`),
    pointer/reference noise (`&`/`*`), whitespace, and clang's
    `type-parameter-N-M` sentinels so only single-token C++ class
    identifiers land in the set. Idempotent — the underlying set
    deduplicates.
    """
    if not isinstance(name, str) or not name:
      return
    if name in TypescriptBindings._REFERENCED_CLASS_BLOCKLIST:
      return
    if "type-parameter-" in name:
      return
    # Single C++ identifier: ASCII letter/underscore start, then
    # word characters only. Anything else is structured TS syntax that
    # must not enter the lift set.
    for ch in name:
      if not (ch.isalnum() or ch == "_"):
        return
    first = name[0]
    if not (first.isalpha() or first == "_"):
      return
    self.referenced_classes.add(name)

  def _classify_js_type(self, clang_type, templateDecl=None, templateArgs=None):
    """Override to distinguish bare char from const char* for TypeScript overload resolution.

    At the C++ runtime level both are JS strings, but for TypeScript's type system we
    classify bare char as 'string_char' so the dispatch tree treats it as a distinct
    category. This lets const char* constructors appear on the base class while char
    constructors become _N subclasses.
    """
    result = super()._classify_js_type(clang_type, templateDecl, templateArgs)
    if result.category == 'string' and not isCString(clang_type):
      t = self._strip_type_qualifiers(clang_type)
      kind = t.get_canonical().kind
      if kind in self._JS_CHAR_KINDS:
        return JsType('string_char', 'string')
    return result

  @staticmethod
  def _load_docs():
    return _ts_jsdoc_loader.load_docs(TypescriptBindings)

  @staticmethod
  def _escape_jsdoc(text):
    return _ts_jsdoc_renderer.escape_jsdoc(text)

  _LINK_TOKEN_RE = _ts_jsdoc_links.LINK_TOKEN_RE

  def _classify_link_target(self, target):
    """Resolve a Doxygen `<ref>`-derived target to an emitted TS export name.

    Mirrors the priority cascade from `_resolve_qualified_member_type` (rsplit
    on `::` then test `parent + "_" + member` before the bare leaf), and routes
    every candidate through `_is_known_export_name` which already excludes
    typedef-only names that would emit dangling links.

    Strategy (returns the first hit, or None):
      1. Strip template args (drop everything from `<` onward) and trailing
         pointer/ref/const noise; trim whitespace. Call this `clean`.
      2. As-is: if `_is_known_export_name(clean)`, return `clean`.
      3. Underscore-flatten: if `"::" in clean`, test
         `_is_known_export_name(parent + "_" + member)`.
      4. Leaf-only: if step 3 missed, test `_is_known_export_name(member)`.
      5. Container alias: consult `_CONTAINER_ALIASES` against `clean` and
         the underscore-flattened candidate.
    """
    return _ts_jsdoc_links.classify_link_target(self, target)

  def _normalize_link_tokens(self, text):
    """Rewrite `{@link X}` tokens in JSDoc body text for Monaco-friendly tooltips.

    For each `{@link <target>}` token:
      - resolved = self._classify_link_target(target)
      - If resolved: emit `{@link <resolved> | `<target>`}` so VS Code/TypeDoc
        keep the clickable link, the visible text becomes inline code, and
        Monaco's naive `displayPartsToString` collapses to a clean code span.
      - Else: emit `` `<target>` `` so Monaco shows themed inline code instead
        of the literal `{@link …}` artifact.
    """
    return _ts_jsdoc_links.normalize_link_tokens(self, text)

  _SENTENCE_SPLIT_RE = _ts_jsdoc_wrapping.SENTENCE_SPLIT_RE
  _LONG_PROSE_THRESHOLD = _ts_jsdoc_wrapping.LONG_PROSE_THRESHOLD
  _MIN_FRAGMENT_LEN = _ts_jsdoc_wrapping.MIN_FRAGMENT_LEN
  _SOFT_WRAP_TARGET = _ts_jsdoc_wrapping.SOFT_WRAP_TARGET

  @staticmethod
  def _soft_wrap_long_line(line):
    return _ts_jsdoc_wrapping.soft_wrap_long_line(line)

  def _split_long_lines(self, text):
    return _ts_jsdoc_wrapping.split_long_lines(text)

  def _emit_jsdoc_text(self, lines, indent_str, body):
    return _ts_jsdoc_renderer.emit_jsdoc_text(lines, indent_str, body)

  def _emit_simplesect_tags(self, lines, indent_str, entry):
    """Emit `@remarks **Note:** ...`, `@remarks **Warning:** ...`, `@see ...`
    for the simplesects captured per entry by `extract-docs.py::_extract_simplesects`.

    Note/warning bodies are routed through `_normalize_link_tokens` so any
    `{@link X}` they contain is rewritten with the same classifier used for
    inline body text. `@see` targets are routed through `_classify_link_target`
    directly (rather than the historical `target in self._docs` predicate which
    drifts from the actual export set): when the target resolves to an emitted
    TS export, we emit ``@see {@link <resolved> | `<target>`}`` so the alias
    text reads as themed inline code in Monaco; otherwise we degrade to
    ``@see `<target>` `` to keep the cross-reference rendered as code instead
    of a literal `{@link …}` artifact.
    """
    return _ts_jsdoc_renderer.emit_simplesect_tags(self, lines, indent_str, entry)

  # Suffix appended to @param descriptions for class outputs that mutate in
  # place. Generated JSDoc preserves upstream Doxygen prose and concatenates
  # this with a single space so the IntelliSense tooltip carries both the
  # OCCT description and the OCJS mechanic on the same line.
  MUTATED_CLASS_PARAM_SUFFIX = "Mutated in place; read the updated value from this argument after the call."

  def _param_description(self, member, param_name):
    return _ts_jsdoc_params.param_description(self, member, param_name)

  def _jsdoc(self, class_name, member_name=None, indent_str="", param_count=None, overload_index=0, template_name=None, param_names=None, mutated_class_param_names=None, envelope_descriptor=None, param_name_map=None):
    """Emit a JSDoc block from Doxygen-derived brief, detailed text, `@param`,
    `@returns`, and simplesect tags only.

    Consumer-facing return-shape contract: when the dts signature embeds an
    RBV envelope (`{ returnValue, …, [Symbol.dispose] }`), the caller passes
    an `envelope_descriptor` so this method rewrites `@returns` into the
    corresponding envelope-fields block. When a JS-visible class output param
    is mutated in place, the caller passes its name in
    `mutated_class_param_names` so this method appends
    `MUTATED_CLASS_PARAM_SUFFIX` to the existing description (or synthesizes
    one when upstream Doxygen omits the param).
    """
    return _ts_jsdoc_renderer.jsdoc(
      self, class_name, member_name=member_name, indent_str=indent_str,
      param_count=param_count, overload_index=overload_index,
      template_name=template_name, param_names=param_names,
      mutated_class_param_names=mutated_class_param_names,
      envelope_descriptor=envelope_descriptor, param_name_map=param_name_map,
    )

  def _enum_member_jsdoc(self, enum_name, member_name):
    """Emit JSDoc for an individual enum member if Doxygen docs are available.

    Emits brief, then detailed body (separated by a blank `*` line), then any
    `@remarks **Note:**`/`@remarks **Warning:**`/`@see` tags captured by
    `extract-docs.py::_extract_simplesects`. This mirrors the class/member
    JSDoc layout so enum-value tooltips are not orphaned when the original
    Doxygen brief ends in `:` and the bullets live in `<detaileddescription>`.
    """
    return _ts_jsdoc_renderer.enum_member_jsdoc(self, enum_name, member_name)

  @staticmethod
  def _resolve_overload(member, param_count, overload_index=0, param_names=None):
    return _ts_jsdoc_params.resolve_overload(member, param_count, overload_index, param_names)

  @staticmethod
  def _baseJsPublicName(baseSpec):
    return _ts_inheritance.base_js_public_name(baseSpec)

  def _findBoundAncestor(self, theClass):
    return _ts_inheritance.find_bound_ancestor(self, theClass)

  def _computeAncestorChain(self, theClass):
    return _ts_inheritance.compute_ancestor_chain(self, theClass)

  def resolve_handle_type(self, clang_type):
    """Delegates to :py:meth:`TypeScriptResolver.handle_type` (PR 1.5)."""
    return self._resolver.handle_type(clang_type)

  def processClass(self, theClass, templateDecl = None, templateArgs = None):
    output = ""
    baseSpec = list(filter(lambda x: x.kind == clang.cindex.CursorKind.CXX_BASE_SPECIFIER and x.access_specifier == clang.cindex.AccessSpecifier.PUBLIC, theClass.get_children()))
    baseClassDefinition = ""
    if len(baseSpec) > 0:
      if "<" in baseSpec[0].type.spelling:
        print("Unsupported character for base class \"" + baseSpec[0].type.spelling + "\" (" + theClass.spelling + ")")
      else:
        directBase = self._baseJsPublicName(baseSpec[0])
        if directBase in self.exports:
          baseClassDefinition = " extends " + directBase
        else:
          boundAncestor = self._findBoundAncestor(theClass)
          if boundAncestor:
            baseClassDefinition = " extends " + boundAncestor
          else:
            baseClassDefinition = " extends " + directBase

    name = getClassJsPublicName(theClass, templateDecl)
    tplName = theClass.spelling if templateDecl is not None else None
    output += self._jsdoc(name, template_name=tplName)
    output += "export declare class " + name + baseClassDefinition + " {\n"
    self.exports.add(name)
    ancestorChain = self._computeAncestorChain(theClass)
    if ancestorChain:
      self.ancestorChains[name] = ancestorChain

    if name == "Standard_Transient":
      output += "  /** Returns true if the underlying handle is null. */\n"
      output += "  isNull(): boolean;\n"
      output += "  /** Releases the handle, setting it to null. */\n"
      output += "  nullify(): void;\n"

    output += super().processClass(theClass, templateDecl, templateArgs)

    for child in theClass.get_children():
      if child.kind == clang.cindex.CursorKind.ENUM_DECL and child.access_specifier == clang.cindex.AccessSpecifier.PUBLIC and child.spelling != "" and child.spelling.isidentifier():
        enumName = name + "_" + child.spelling
        output += "export type " + enumName + " = typeof " + enumName + "[keyof typeof " + enumName + "];\n"
        output += self._jsdoc(enumName)
        output += "export declare const " + enumName + ": {\n"
        for enumChild in list(child.get_children()):
          if enumChild.kind == clang.cindex.CursorKind.ENUM_CONSTANT_DECL:
            if not enumChild.spelling or not enumChild.spelling.isidentifier():
              # Skip non-identifier enumerators (anon helpers, macro-mangled names)
              # so the resulting enum body parses as valid TypeScript.
              continue
            output += self._enum_member_jsdoc(enumName, enumChild.spelling)
            output += "  readonly " + enumChild.spelling + ": '" + enumChild.spelling + "';\n"
        output += "};\n\n"
        self.exports.add(enumName)

      if child.kind == clang.cindex.CursorKind.STRUCT_DECL and child.access_specifier == clang.cindex.AccessSpecifier.PUBLIC and child.spelling != "" and child.spelling.isidentifier():
        fields = [f for f in child.get_children() if f.kind == clang.cindex.CursorKind.FIELD_DECL]
        non_field_members = [f for f in child.get_children() if f.kind not in (
          clang.cindex.CursorKind.FIELD_DECL,
          clang.cindex.CursorKind.CXX_ACCESS_SPEC_DECL,
          clang.cindex.CursorKind.CONSTRUCTOR,
          clang.cindex.CursorKind.DESTRUCTOR,
        )]
        if fields and not non_field_members:
          structName = name + "_" + child.spelling
          if structName in TypescriptBindings._emitted_stub_names:
            continue
          output += "export interface " + structName + " {\n"
          for field in fields:
            fieldType = self.resolve_type(field.type, templateDecl, templateArgs)
            output += "  " + field.spelling + ": " + fieldType + ";\n"
          output += "}\n\n"
          # Nested-struct interfaces are TYPE-ONLY (no JS runtime value).
          # Tracking them in `_emitted_stub_names` keeps them out of
          # `self.exports`, preventing the OpenCascadeInstance aggregate from
          # emitting `structName: typeof structName` (TS2693).
          TypescriptBindings._emitted_stub_names.add(structName)

    return output

  def render_dropped_method_jsdoc(self, theClass, method, reasons):
    """Dropped-method transparency hook (TS-side override).

    Emits a `// dropped: ...` comment for each recorded dropped-method
    reason at the spot the method *would* have been declared in the class
    body. The method itself is NOT emitted — the goal is to keep the .d.ts
    free of `unknown`-littered signatures pointing at types the runtime
    never exposes, while preserving forensic visibility of the elision so
    consumers can audit why an OCCT method is missing from the surface.
    """
    if not reasons:
      return ""
    method_name = method.spelling or "<anonymous>"
    parts = []
    for excluded_name, position in reasons:
      parts.append(
        "  // dropped: " + method_name + " " + position
        + " resolves to excluded type " + excluded_name + "\n"
      )
    return "".join(parts)

  def processFinalizeClass(self):
    output = ""
    output += "  /** Releases the C++ object. The caller must ensure no further access. */\n"
    output += "  delete(): void;\n"
    output += "  [Symbol.dispose](): void;\n"
    output += "}\n\n"

    for iface_name in sorted(TypescriptBindings._namespace_scoped_interfaces):
      if iface_name in self.exports or iface_name in TypescriptBindings._emitted_stub_names:
        continue
      # Emit `unknown` aliases for namespace-scoped forward declarations
      # rather than empty `interface X {}` stubs. Empty interfaces structurally
      # match every value, masking missing decls; `unknown` forces explicit
      # narrowing at consumer sites.
      #
      # Stubs are TYPE-ONLY (no runtime value), so they must NOT be added to
      # self.exports — that would surface them in the OpenCascadeInstance
      # aggregate as `: typeof X`, triggering TS2693.
      output += "export type " + iface_name + " = unknown;\n\n"
      TypescriptBindings._emitted_stub_names.add(iface_name)
    TypescriptBindings._namespace_scoped_interfaces = set()

    return output

  def _emitTsConstructor(self, className, args, templateDecl, templateArgs, tplName, numOptional=0, overload_index=0):
    return _ts_ctor.emit_ts_constructor(self, className, args, templateDecl, templateArgs, tplName, numOptional, overload_index)

  def processSimpleConstructor(self, theClass, templateDecl=None, templateArgs=None):
    return _ts_ctor.process_simple_constructor(self, theClass, templateDecl, templateArgs)

  _NUMERIC_TYPES = frozenset({
    "int", "int8_t", "int16_t", "int32_t", "int64_t",
    "unsigned", "uint8_t", "uint16_t", "uint32_t", "uint64_t",
    "unsigned int", "unsigned long",
    "long", "long int", "long long",
    "unsigned long long", "unsigned short",
    "short", "short int",
    "float", "double", "long double",
    "size_t", "ptrdiff_t", "ssize_t",
    "intptr_t", "uintptr_t", "__SIZE_TYPE__",
    "Standard_Integer", "Standard_Real",
    "Standard_ShortReal", "Standard_Size",
    "Standard_Byte",
  })

  _STRING_TYPES = frozenset({
    "char", "unsigned char",
    "wchar_t", "char8_t", "char16_t", "char32_t",
    "std::string", "std::string_view",
    "Standard_Character", "Standard_ExtCharacter",
    "Standard_CString", "Standard_WideChar",
    "Standard_PCharacter",
  })

  _BOOLEAN_TYPES = frozenset({
    "bool", "Standard_Boolean",
  })

  def convertBuiltinTypes(self, typeName):
    if typeName in self._NUMERIC_TYPES:
      return "number"

    if typeName in self._STRING_TYPES:
      return "string"

    if typeName in self._BOOLEAN_TYPES:
      return "boolean"

    if typeName in ("Standard_SStream",):
      return "string"

    return typeName

  _namespace_scoped_interfaces = set()
  # Track stub aliases emitted across all class instances so each
  # forward-declared name is declared exactly once in the final .d.ts. Without
  # this, every class that references the type re-emits it, triggering TS2300.
  _emitted_stub_names = set()

  def _resolve_nested_type(self, decl):
    """Delegate to :py:meth:`NameEncoder.resolve_nested_type` (PR 1.4 SSoT).

    Behaviour preserved: namespace-parented resolutions still feed the
    `_namespace_scoped_interfaces` aggregation set on `TypescriptBindings`
    via the `namespace_scoped_sink` parameter so dist-time bindings remain
    byte-identical.
    """
    from ocjs_bindgen.naming import ENCODER
    return ENCODER.resolve_nested_type(
      decl,
      namespace_scoped_sink=TypescriptBindings._namespace_scoped_interfaces,
    )

  def _resolve_qualified_member_type(self, resolved, templateDecl=None, templateArgs=None):
    """Delegates to :py:meth:`TypeScriptResolver.qualified_member` (PR 1.5)."""
    return self._resolver.qualified_member(resolved, templateDecl, templateArgs)

  _CONST_RE = re.compile(r'\bconst\b')

  @staticmethod
  def _strip_type_qualifiers_str(spelling):
    """Strip const, &, and * from a type spelling using word boundaries for const."""
    s = TypescriptBindings._CONST_RE.sub('', spelling)
    return s.replace("&", "").replace("*", "").strip()

  def _strip_qualifiers(self, clang_type):
    """Strip const, reference, and pointer qualifiers via AST traversal."""
    t = clang_type
    if t.kind == clang.cindex.TypeKind.LVALUEREFERENCE:
      t = t.get_pointee()
    if t.kind == clang.cindex.TypeKind.RVALUEREFERENCE:
      t = t.get_pointee()
    if t.kind == clang.cindex.TypeKind.POINTER:
      t = t.get_pointee()
    return t

  # PR 1.6 — `_any_reasons` removed. Diagnostics live on the injected
  # `Diagnostics` service (see `__init__`); callers that previously read
  # `TypescriptBindings._any_reasons` now read `DIAGNOSTICS.any_reasons`
  # from `ocjs_bindgen.diagnostics`.
  _known_export_names = set()
  _CONTAINER_ALIASES = {
    "NCollection_Vector": "NCollection_DynamicArray",
  }

  @classmethod
  def prepare_known_exports(cls, tuInfo, filter_classes_fn, filter_templates_fn):
    """Pre-compute the global set of known export names for O(1) fallback lookups.

    Also eagerly seeds `_known_typedef_names` so the resolve_type early-return
    guard has a complete validation set on first call.
    """
    cls._known_export_names = set()
    for child in tuInfo.allChildren:
      if filter_classes_fn(child, False) and child.spelling:
        cls._known_export_names.add(child.spelling)
    for td in tuInfo.templateTypedefs:
      if td.spelling:
        cls._known_export_names.add(td.spelling)
    for enumDecl in getattr(tuInfo, "enums", []):
      if enumDecl.spelling:
        cls._known_export_names.add(enumDecl.spelling)

    cls._known_typedef_names = set()
    for td in tuInfo.typedefs:
      if td.spelling:
        cls._known_typedef_names.add(td.spelling)
    for td in tuInfo.templateTypedefs:
      if td.spelling:
        cls._known_typedef_names.add(td.spelling)

  def _collect_any(self, reason, type_spelling):
    """Delegate to the injected :class:`Diagnostics` service (PR 1.6)."""
    self._diagnostics.collect_any(reason, type_spelling)

  def _is_known_export_name(self, name):
    """O(1) lookup: is `name` an emitted TS export the consumer can actually resolve?

    Used by `resolve_type` early-return guard to avoid emitting unbound symbols.
    Falls through to canonical-fallback path when this returns False so the codegen
    keeps trying further resolution strategies before resorting to `unknown`.

    Note: typedef names are *deliberately* excluded — a typedef like `XCAFDoc_PartId`
    aliases `TCollection_AsciiString` but is not itself emitted as an `export`. Returning
    the typedef name produces TS2304 dangling references; we want callers to fall through
    to the canonical class spelling instead.
    """
    if not name:
      return False
    if name in self.exports:
      return True
    if name in TypescriptBindings._known_export_names:
      return True
    return False

  _reverse_typedef_cache = None

  def _find_typedef_for_container(self, container, clang_type):
    """Look up whether a C++ type has a typedef or using-alias in the AST.

    Builds a reverse cache from both typedefUnderlyingDict and
    templateTypedefUnderlyingDict, mapping underlying type spellings
    to their alias names. Returns the alias name if found, else None.
    """
    if TypescriptBindings._reverse_typedef_cache is None:
      candidates = {}
      # V1 RE-SHIP — also consult the discovery TU's underlying maps so
      # the resolver sees Deprecated/NCollectionAliases typedefs
      # (`typedef NCollection_DataMap<X,Y,H> XCAFDoc_DataMapOfShapeFix;`)
      # even though the codegen TU deliberately excludes the Deprecated
      # headers from class enumeration. Without this merge, OCCT V8's
      # historic NCollection aliases fall through to generic mangled
      # spellings, breaking `_resolve_template_arg` → `all_resolved`
      # in `resolver/strategies/template.py`, which in turn breaks the
      # YAML-scope structural lift covered by
      # `test_stepcaf_writer_keeps_shapefix_parameter_map`.
      from ocjs_bindgen.ast import TypedefDiscoveryTuInfo
      discovery_tu = TypedefDiscoveryTuInfo.instance()
      # Collect *all* aliases for each underlying type so the priority
      # function below can pick the OCCT-public name (TColStd_*, TColgp_*, …)
      # over the generic NCollection_<TemplateInst>_<T> spelling.
      for src in (
        self.tuInfo.typedefUnderlyingMultimap,
        self.tuInfo.templateTypedefUnderlyingMultimap,
        discovery_tu.typedefUnderlyingMultimap,
        discovery_tu.templateTypedefUnderlyingMultimap,
      ):
        for underlying_spelling, typedef_cursors in src.items():
          clean = _normalize_handle_ns(underlying_spelling.replace("const ", "").replace("&", "").strip())
          for typedef_cursor in typedef_cursors:
            if typedef_cursor.spelling not in candidates.get(clean, []):
              candidates.setdefault(clean, []).append(typedef_cursor.spelling)

      def _alias_priority(name):
        # Deterministic typedef selection.
        # 1. Exported names win (consumer-facing surface area).
        # 2. OCCT-domain aliases (TColStd_/TColgp_/TopTools_/MeshVS_/XCAFDoc_/...)
        #    win over generic NCollection_<TemplateInst>_<T> spellings — domain
        #    aliases are the documented public API surface.
        # 3. NCollection_ aliases win over everything else (still public).
        # 4. Alphabetical tiebreaker for reproducible builds across libclang versions.
        in_exports = 0 if name in self.exports or name in TypescriptBindings._known_export_names else 1
        if re.match(
          r"^(TColStd_|TColgp_|TopTools_|MeshVS_|XCAFDoc_|TDataStd_|TDF_|TopoDS_|Geom_|GeomAdaptor_|gp_)",
          name,
        ):
          alias_tier = 0
        elif re.match(r"^NCollection_", name):
          alias_tier = 1
        else:
          alias_tier = 2
        return (in_exports, alias_tier, name)

      TypescriptBindings._reverse_typedef_cache = {
        clean: sorted(names, key=_alias_priority)[0]
        for clean, names in candidates.items()
      }

    type_spelling = _normalize_handle_ns(clang_type.spelling.replace("const ", "").replace("&", "").replace("*", "").strip())
    result = TypescriptBindings._reverse_typedef_cache.get(type_spelling)
    if result:
      return result

    numArgs = clang_type.get_num_template_arguments()
    if numArgs > 0 and "<>" in type_spelling:
      arg_spellings = []
      for i in range(numArgs):
        arg_type = clang_type.get_template_argument_type(i)
        arg_spelling = arg_type.spelling if arg_type.spelling else arg_type.get_canonical().spelling
        arg_spellings.append(_normalize_handle_ns(arg_spelling))
      reconstructed = container + "<" + ", ".join(arg_spellings) + ">"
      result = TypescriptBindings._reverse_typedef_cache.get(reconstructed)
      if result:
        return result

    return None

  _VEC_TUPLES = {
    "NCollection_Vec2": "[number, number]",
    "NCollection_Vec3": "[number, number, number]",
    "NCollection_Vec4": "[number, number, number, number]",
  }

  _known_typedef_names = None

  def _resolve_template_type(self, clang_type, templateDecl=None, templateArgs=None):
    """Delegates to :py:meth:`TypeScriptResolver.template_type` (PR 1.5)."""
    return self._resolver.template_type(clang_type, templateDecl, templateArgs)

  @staticmethod
  def _is_std_decl(decl):
    """Delegates to :py:func:`ocjs_bindgen.resolver.strategies.stl.is_std_decl` (PR 1.5)."""
    from ocjs_bindgen.resolver.strategies.stl import is_std_decl
    return is_std_decl(decl)

  def _resolve_template_arg(self, arg_type, templateDecl=None, templateArgs=None):
    """Delegates to :py:meth:`TypeScriptResolver.template_arg` (PR 1.5)."""
    return self._resolver.template_arg(arg_type, templateDecl, templateArgs)

  def _resolve_stl_type(self, container, clang_type, templateDecl=None, templateArgs=None):
    """Delegates to :py:meth:`TypeScriptResolver.stl_type` (PR 1.5)."""
    return self._resolver.stl_type(container, clang_type, templateDecl, templateArgs)

  _BUILTIN_NUMERIC_KINDS = frozenset({
    clang.cindex.TypeKind.INT, clang.cindex.TypeKind.UINT,
    clang.cindex.TypeKind.LONG, clang.cindex.TypeKind.ULONG,
    clang.cindex.TypeKind.LONGLONG, clang.cindex.TypeKind.ULONGLONG,
    clang.cindex.TypeKind.SHORT, clang.cindex.TypeKind.USHORT,
    clang.cindex.TypeKind.FLOAT, clang.cindex.TypeKind.DOUBLE,
    clang.cindex.TypeKind.LONGDOUBLE,
  })

  _BUILTIN_STRING_KINDS = frozenset({
    clang.cindex.TypeKind.CHAR_U, clang.cindex.TypeKind.UCHAR,
    clang.cindex.TypeKind.CHAR16, clang.cindex.TypeKind.CHAR32,
    clang.cindex.TypeKind.CHAR_S, clang.cindex.TypeKind.SCHAR,
  })

  def _resolve_handle_recursive(self, clang_type, templateDecl=None, templateArgs=None):
    """Delegates to :py:meth:`TypeScriptResolver.handle_recursive` (PR 1.5)."""
    return self._resolver.handle_recursive(clang_type, templateDecl, templateArgs)

  def resolve_type(self, clang_type, templateDecl=None, templateArgs=None):
    """Delegates to :py:meth:`TypeScriptResolver.resolve` (PR 1.5).

    Resolution order is owned by the resolver orchestrator. See
    :mod:`ocjs_bindgen.resolver.typescript` for the dispatch tree.
    """
    return self._resolver.resolve(clang_type, templateDecl, templateArgs)

  def getTypescriptDefFromResultType(self, res, templateDecl = None, templateArgs = None):
    if res.spelling == "void":
      return "void"
    return self.resolve_type(res, templateDecl, templateArgs)

  _TS_RESERVED_WORDS = frozenset({
    "break", "case", "catch", "class", "const", "continue", "debugger",
    "default", "delete", "do", "else", "enum", "export", "extends", "false",
    "finally", "for", "function", "if", "import", "in", "instanceof", "new",
    "null", "return", "super", "switch", "this", "throw", "true", "try",
    "typeof", "var", "void", "while", "with",
    "as", "implements", "interface", "let", "package", "private", "protected",
    "public", "static", "yield", "any", "boolean", "constructor", "declare",
    "get", "module", "require", "number", "set", "string", "symbol", "type",
    "from", "of", "namespace", "async", "await",
  })

  def _argname(self, arg, suffix = ""):
    argname = (arg.spelling if not arg.spelling == "" else ("a" + str(suffix)))
    if argname in TypescriptBindings._TS_RESERVED_WORDS:
      argname += "_"
    return argname

  def getTypescriptDefFromArg(self, arg, suffix = "", templateDecl = None, templateArgs = None):
    typeName = self.resolve_type(arg.type, templateDecl, templateArgs)
    return self._argname(arg, suffix) + ": " + typeName

  def getTypescriptDefFromArgWithName(self, arg, name, templateDecl = None, templateArgs = None):
    """Like `getTypescriptDefFromArg` but emits the caller-supplied `name`
    instead of `arg.spelling`. Used by overrides that mirror the base's
    parameter names so input args line up with envelope fields (see
    `_effectiveAllArgNames`).
    """
    typeName = self.resolve_type(arg.type, templateDecl, templateArgs)
    safe_name = name + "_" if name in TypescriptBindings._TS_RESERVED_WORDS else name
    return safe_name + ": " + typeName

  def _render_synthesized_base_signature(self, method, className, tplName):
    """Render a TS overload signature for a base-class method synthesized into
    a derived class to satisfy the structural override contract.

    Emitted independently of the normal overload pipeline because the cursor
    does not belong to `theClass.get_children()` — `getMethodOverloadPostfix`
    would crash on it.

    Uses the same RBV emission path as direct methods so synthesized base
    overloads keep their (optional-input, RBV-return) shape — without this
    the base would emit `Show(theUserSec?: number): {theUserSec: number}`
    while the derived's synthesized copy would emit `Show(theUserSec: number): void`,
    tripping TS2416 override variance.
    """
    try:
      allArgs = list(method.get_arguments())
      outputReturnType = self._buildOutputParamReturnType(method, allArgs, None, None, theClass=None)
      if outputReturnType is not None:
        args = self._buildKeptArgs(method, allArgs, None, None, theClass=None)
        returnType = outputReturnType
      else:
        args = ", ".join(
          self.getTypescriptDefFromArg(arg, i, None, None)
          for i, arg in enumerate(allArgs)
        )
        returnType = self.getTypescriptDefFromResultType(method.result_type, None, None)
    except Exception:
      return ""
    kept_names = [self._argname(arg, i) for i, arg in enumerate(allArgs)
                  if not shouldStripParam(arg.type, method)]
    mutated_names = self._mutatedClassParamNames(method, allArgs)
    envelope = self._describeEnvelope(method, allArgs, None, None, theClass=None)
    out = self._jsdoc(className, method.spelling, "  ", param_count=len(allArgs), overload_index=0, template_name=tplName, param_names=kept_names, mutated_class_param_names=mutated_names, envelope_descriptor=envelope)
    out += "  " + ("static " if method.is_static_method() else "") + method.spelling + "(" + args + "): " + returnType + ";\n"
    return out

  def _missing_base_overloads(self, theClass, methods):
    """Append base-class overloads of the same name that the derived class
    does not redeclare.

    TypeScript class methods must be structurally assignable to the base. When
    the base has overloads `SetID(g)` and `SetID()` and the derived only
    redeclares `SetID(g)`, TS reports the no-arg overload as unsatisfied. We
    walk overridden cursors → base classes → find every `SetID` declaration on
    the base and pull in the ones whose arity (and stripped-output param shape)
    is not represented in the derived.
    """
    if not methods:
      return methods

    name = methods[0].spelling

    def _arity_signature(m):
      try:
        args = list(m.get_arguments())
      except Exception:
        return None
      kept = [a for a in args if not shouldStripParam(a.type, m)]
      return (len(kept), tuple(a.type.get_canonical().spelling for a in kept))

    derived_signatures = set()
    for m in methods:
      sig = _arity_signature(m)
      if sig is not None:
        derived_signatures.add((m.is_static_method(),) + sig)

    # Walk the inheritance chain — Python libclang doesn't expose
    # clang_getOverriddenCursors, so we traverse base specifiers manually.
    base_overloads = []
    seen_base_ids = set()
    visited_classes = set()

    def _walk_bases(cls):
      if cls is None:
        return
      key = cls.spelling
      if key in visited_classes:
        return
      visited_classes.add(key)
      for child in cls.get_children():
        if child.kind != clang.cindex.CursorKind.CXX_BASE_SPECIFIER:
          continue
        if child.access_specifier != clang.cindex.AccessSpecifier.PUBLIC:
          continue
        base_decl = child.type.get_declaration()
        if base_decl is None or base_decl.kind == clang.cindex.CursorKind.NO_DECL_FOUND:
          continue
        for sibling in base_decl.get_children():
          if sibling.kind != clang.cindex.CursorKind.CXX_METHOD:
            continue
          if sibling.spelling != name:
            continue
          if sibling.access_specifier != clang.cindex.AccessSpecifier.PUBLIC:
            continue
          if any(
            a.type.kind == clang.cindex.TypeKind.RVALUEREFERENCE
            for a in sibling.get_arguments()
          ):
            continue
          sig = _arity_signature(sibling)
          # Differentiate static vs. instance overloads — TS static and
          # instance sides are checked independently (TS2417 vs. TS2416).
          sig = (sibling.is_static_method(),) + sig
          if sig is None or sig in derived_signatures:
            continue
          loc_file = sibling.location.file.name if sibling.location.file else ""
          loc_key = (loc_file, sibling.location.line, sibling.location.column)
          if loc_key in seen_base_ids:
            continue
          seen_base_ids.add(loc_key)
          derived_signatures.add(sig)
          base_overloads.append(sibling)
        _walk_bases(base_decl)

    _walk_bases(theClass)
    return base_overloads

  def _outputArgIsEmbindManaged(self, arg):
    return _rbv.output_arg_is_embind_managed(arg)

  def _returnIsEmbindManaged(self, method):
    return _rbv.return_is_embind_managed(method)

  def _containerNeedsDispose(self, outputArgs, method):
    """TS-side mirror of `EmbindBindings._containerNeedsDispose` — returns
    True iff at least one output arg OR the non-void return is embind-managed
    (class instance or Handle<T>). Keeps the `[Symbol.dispose](): void` member
    in the return type literal aligned with the C++ codegen's val::object()
    branch in `_emitOutputParamBinding`.
    """
    for _i, arg in outputArgs:
      if self._outputArgIsEmbindManaged(arg):
        return True
    return self._returnIsEmbindManaged(method)

  def _mutatedClassParamNames(self, method, allArgs, effective_names=None):
    """Names of the JS-visible class output params that this method mutates in
    place, preserving argument order. Used by `_jsdoc` to append the
    "Mutated in place..." suffix to each param's description and to synthesize
    a `@param` when upstream Doxygen omits it.

    When `effective_names` is supplied (a list aligned with `allArgs`), the
    returned names use the base-mirrored JS spelling so the set agrees with
    the TS signature's input args and the JSDoc `@param` lines. Otherwise
    falls back to the derived class's own spellings via `_argname`.

    Returns a tuple (insertion-stable) so JSDoc emission is deterministic
    across runs — iterating a `set` mixes hash order across builds and
    produces byte-divergent `.d.ts` outputs.
    """
    names = []
    seen = set()
    for i, arg in enumerate(allArgs):
      if isClassOutputParam(arg.type) and not shouldStripParam(arg.type, method):
        name = effective_names[i] if effective_names is not None else self._argname(arg, i)
        if name not in seen:
          names.append(name)
          seen.add(name)
    return tuple(names)

  def _describeEnvelope(self, method, allArgs, templateDecl, templateArgs, theClass=None):
    """Describe the envelope `_buildOutputParamReturnType` will emit for this
    method, in the shape `_jsdoc` consumes. Returns None when the method
    collapses to a native return (no envelope).

    Keeping this in lockstep with `_buildOutputParamReturnType` is critical —
    a drift between the two would silently produce JSDoc that describes
    fields the dts no longer contains.
    """
    ret_type = method.result_type
    if ret_type.spelling != "void" and ret_type.get_canonical().kind == clang.cindex.TypeKind.POINTER:
      return None
    outputArgs = [(i, a) for i, a in enumerate(allArgs)
                  if isOutputParam(a.type) and not isClassOutputParam(a.type)]
    if not outputArgs:
      return None
    base_override = self._find_base_override_target(theClass, method) if theClass is not None else None
    if base_override is not None:
      base_args = list(base_override.get_arguments())
      base_output = [(i, a) for i, a in enumerate(base_args)
                     if isOutputParam(a.type) and not isClassOutputParam(a.type)]
      if not base_output:
        return None
      if len(base_output) == len(outputArgs):
        outputArgs = [(i, derived_a) for (i, derived_a), (_bi, base_a) in zip(outputArgs, base_output, strict=False)]
        output_names = [self._argname(base_a, bi) for (bi, base_a) in base_output]
      else:
        # Mixed-arity virtual override — describe the union of base + derived
        # output names (matching `_buildOutputParamReturnType`'s union path).
        emitted = set()
        union_fields = []
        if method.result_type.spelling != "void":
          base_names = {self._argname(a, i) for i, a in base_output}
          ret_field_name = ENVELOPE_RETURN_FIELD_COLLISION if ENVELOPE_RETURN_FIELD in base_names else ENVELOPE_RETURN_FIELD
          union_fields.append({"name": ret_field_name, "kind": "return"})
          emitted.add(ret_field_name)
        for bi, base_a in base_output:
          base_name = self._argname(base_a, bi)
          if base_name in emitted:
            continue
          union_fields.append({"name": base_name, "kind": self._envelopeFieldKind(base_a)})
          emitted.add(base_name)
        for di, derived_a in outputArgs:
          derived_name = self._argname(derived_a, di)
          if derived_name in emitted:
            continue
          union_fields.append({"name": derived_name, "kind": self._envelopeFieldKind(derived_a)})
          emitted.add(derived_name)
        needs_dispose = self._containerNeedsDispose(outputArgs, method)
        return {
          "has_envelope": True,
          "return_field": union_fields[0]["name"] if union_fields and union_fields[0]["kind"] == "return" else None,
          "fields": union_fields,
          "has_dispose": needs_dispose,
        }
    else:
      output_names = [self._argname(a, i) for i, a in outputArgs]

    fields = []
    return_field = None
    if method.result_type.spelling != "void":
      names_set = set(output_names)
      return_field = ENVELOPE_RETURN_FIELD_COLLISION if ENVELOPE_RETURN_FIELD in names_set else ENVELOPE_RETURN_FIELD
      fields.append({"name": return_field, "kind": "return"})
    for (_i, arg), out_name in zip(outputArgs, output_names, strict=False):
      fields.append({"name": out_name, "kind": self._envelopeFieldKind(arg)})
    needs_dispose = self._containerNeedsDispose(outputArgs, method)
    return {
      "has_envelope": True,
      "return_field": return_field,
      "fields": fields,
      "has_dispose": needs_dispose,
    }

  def _envelopeFieldKind(self, arg):
    """Classify an envelope-bound output arg for JSDoc emission. Class outputs
    never reach this helper — they are filtered out before any envelope
    description is built. Returns 'handle', 'enum', or 'primitive'.
    """
    pointee = arg.type.get_pointee()
    if _isHandleType(pointee):
      return "handle"
    canonical = pointee.get_canonical()
    if pointee.kind == clang.cindex.TypeKind.ENUM or canonical.kind == clang.cindex.TypeKind.ENUM:
      return "enum"
    return "primitive"

  def _buildOutputParamReturnType(self, method, allArgs, templateDecl, templateArgs, theClass=None):
    """Build a TS inline object return type from output params, or None when
    the method should fall back to the native C++ return.

    Concrete class outputs (non-Handle, default-constructible) are mutated in
    place and do NOT appear in the return envelope. Methods whose only output
    params are class refs collapse to a plain native return (or void).

    For overrides, mirrors the base class's output-param field names so the
    derived signature stays structurally assignable to the base (TS2416).
    """
    # Class outputs are mutated in place and not envelope fields.
    outputArgs = [(i, a) for i, a in enumerate(allArgs)
                  if isOutputParam(a.type) and not isClassOutputParam(a.type)]
    ret_type = method.result_type
    if ret_type.spelling != "void" and ret_type.get_canonical().kind == clang.cindex.TypeKind.POINTER:
      return None
    if not outputArgs:
      # No envelope-bound outputs → native return path. Caller emits the
      # raw C++ return type directly (`void` or the native return).
      return None
    needsDispose = self._containerNeedsDispose(outputArgs, method)

    # Virtual overrides must keep the base class signature shape, otherwise
    # TS2416 fires. If the same-name same-arity method exists on a base, mirror
    # its output-param naming. If the base has no envelope-bound output params,
    # drop the inline-object transform entirely.
    base_override = self._find_base_override_target(theClass, method) if theClass is not None else None
    if base_override is not None:
      base_args = list(base_override.get_arguments())
      base_output = [(i, a) for i, a in enumerate(base_args)
                     if isOutputParam(a.type) and not isClassOutputParam(a.type)]
      if not base_output:
        return None
      if len(base_output) == len(outputArgs):
        # Mirror the base's argument names for the output fields, but use the
        # derived's (more specific) types to preserve covariance.
        outputArgs = [(i, derived_a) for (i, derived_a), (_bi, base_a) in zip(outputArgs, base_output, strict=False)]
        derived_output_names = [self._argname(base_a, bi) for (bi, base_a) in base_output]
      else:
        # The derived override carries a different number of output params
        # than the base. To stay structurally assignable to the base, we must
        # at minimum expose ALL of base's output keys. We emit the *union* of
        # base's and derived's keys (base's verbatim, derived's appended only
        # when names don't collide). Lossy at runtime — derived's actual
        # binding doesn't populate base's keys — but type-safe for callers.
        fields = []
        emitted = set()
        if method.result_type.spelling != "void":
          ret = self.getTypescriptDefFromResultType(method.result_type, templateDecl, templateArgs)
          base_names = {self._argname(a, i) for i, a in base_output}
          ret_field_name = ENVELOPE_RETURN_FIELD_COLLISION if ENVELOPE_RETURN_FIELD in base_names else ENVELOPE_RETURN_FIELD
          fields.append(f"{ret_field_name}: {ret}")
          emitted.add(ret_field_name)
        for bi, base_a in base_output:
          base_name = self._argname(base_a, bi)
          if base_name in emitted:
            continue
          tsType = self.resolve_type(base_a.type, templateDecl, templateArgs)
          fields.append(f"{base_name}: {tsType}")
          emitted.add(base_name)
        for di, derived_a in outputArgs:
          derived_name = self._argname(derived_a, di)
          if derived_name in emitted:
            continue
          tsType = self.resolve_type(derived_a.type, templateDecl, templateArgs)
          fields.append(f"{derived_name}: {tsType}")
          emitted.add(derived_name)
        if needsDispose:
          fields.append("[Symbol.dispose](): void")
        return "{ " + "; ".join(fields) + " }"
    else:
      derived_output_names = [self._argname(a, i) for i, a in outputArgs]

    fields = []
    hasNonVoidReturn = method.result_type.spelling != "void"
    output_names = set(derived_output_names)
    if hasNonVoidReturn:
      origReturn = self.getTypescriptDefFromResultType(method.result_type, templateDecl, templateArgs)
      ret_field_name = ENVELOPE_RETURN_FIELD_COLLISION if ENVELOPE_RETURN_FIELD in output_names else ENVELOPE_RETURN_FIELD
      fields.append(f"{ret_field_name}: {origReturn}")

    for (_i, arg), out_name in zip(outputArgs, derived_output_names, strict=False):
      tsType = self.resolve_type(arg.type, templateDecl, templateArgs)
      fields.append(f"{out_name}: {tsType}")

    if needsDispose:
      fields.append("[Symbol.dispose](): void")

    return "{ " + "; ".join(fields) + " }"

  def _outputArityIsUnambiguous(self, theClass, method):
    """True iff a short call omitting this method's trailing primitive outputs
    pads to a SINGLE registered libembind signature.

    Gates the trailing-primitive-output optionalisation in `_buildKeptArgs`.
    The libembind arity-pad dispatcher (`libembind-overloading.patch` hunk 1)
    only resolves a short call unambiguously when the padded target arity has
    a single registered signature. When two registrations collide at the same
    kept arity, a short call pads its missing trailing slots with `undefined`,
    which `$getSignature` cannot match against a `number`-typed slot — the
    dispatcher throws `invalid signature (undefined,...)` at runtime. Marking
    such slots optional in the `.d.ts` would type-admit a call that throws, so
    the optionalisation is suppressed whenever the arity is not unambiguous.

    Two structurally distinct collision sources are rejected:

    1. **Virtual methods.** OCCT declares `virtual`/`= 0` output methods on a
       base class and `override`/`final` them on every concrete subclass
       (`Geom_Surface::Bounds` → `Geom_SphericalSurface::Bounds`, ...). The
       bindgen emits an embind `.function(...)` binding on each declaring
       class, so a derived instance carries BOTH its own and the inherited
       registration at the same arity. Verified at runtime:
       `Geom_SphericalSurface.Bounds()` throws
       `invalid signature (undefined,undefined,undefined,undefined) — expects
       one of ((number,number,number,number),(number,number,number,number))`.
       The collision is visible from neither the base (no ancestor declares
       `Bounds`) nor an isolated sibling scan, so virtuality is the only
       locally-decidable signal — and it is the precise structural cause.

    2. **Same-class arity collisions.** A non-virtual same-name sibling on
       `theClass` that collapses to the same JS-effective (kept) arity also
       registers a second signature at the padded target.

    The dominant safe shape is a non-virtual method with a unique kept arity
    (`BRepTools.UVBounds` Face-only overload at arity 5,
    `GeomAPI_ProjectPointOnSurf.LowerDistanceParameters` at arity 2): it pads
    to a single signature and dispatches correctly with the trailing primitive
    outputs omitted.
    """
    return _rbv.output_arity_is_unambiguous(theClass, method)

  def _trailingPrimitiveOutputRun(self, keptList, method):
    """Index into `keptList` (a list of `(orig_index, arg)` for the method's
    non-stripped args, in order) at which the trailing contiguous run of
    primitive/enum output params begins.

    Returns `len(keptList)` when there is no trailing primitive-output run.
    Only primitive/enum output params (`isPrimitiveOutputParam`) are eligible:
    they are passed by value (a copy is marshalled in, ignored by pure-output
    OCCT methods, and the computed value returned via the RBV envelope), so
    the libembind arity-pad dispatcher tolerates their omission. Class output
    params (`gp_Pnt&`, `Bnd_Box&`, ...) are NOT eligible — the C++ lambda
    dereferences the supplied instance (`*arg.as<T*>()`) and would fault on an
    omitted slot — so they terminate the run and stay required.
    """
    return _rbv.trailing_primitive_output_run(keptList, method)

  def _buildKeptArgs(self, method, allArgs, templateDecl, templateArgs, effective_names=None, theClass=None):
    """Build the TS arg list under Input-Passthrough RBV with Approach G
    Handle elision.

    Primitive/enum output params appear in the JS signature as input-passthrough
    slots — the caller MAY seed the value and reads the result via the return
    container. They are rendered OPTIONAL (`?`) when they form the method's
    trailing run AND the method's kept arity is unique within its same-name
    overload group (see `_outputArityIsUnambiguous`): the libembind arity-pad
    dispatcher accepts the omitted call and OCCT pure-output methods ignore the
    (un-marshalled) seed, returning the computed value via the envelope. This
    matches the verified runtime contract — `BRepTools.UVBounds(face)` and
    `GeomAPI_ProjectPointOnSurf.LowerDistanceParameters()` both dispatch and
    return correct values with the trailing primitive outputs omitted.

    Default-constructible class output params stay REQUIRED — the caller must
    supply the instance the C++ lambda mutates in place. Non-const `Handle<T>&`
    outputs are ELIDED — per OCCT contract these are output-only, never read by
    C++, and the JS-facing input was a gratuitous wrapper allocation.
    `shouldStripParam` is the single source of truth for elision;
    `_emitOutputParamBinding` declares the matching stack-local null Handle
    inside the optional_override lambda body.

    When `effective_names` is supplied (a list aligned with `allArgs`), each
    kept arg is emitted with that name instead of `arg.spelling`. This is
    the base-override mirroring path — see `_effectiveAllArgNames` for the
    rule and rationale (eliminates input-name vs envelope-field-name drift
    on virtual overrides where the base and derived use different spellings).
    """
    kept = [(i, arg) for i, arg in enumerate(allArgs)
            if not shouldStripParam(arg.type, method)]
    rendered = []
    for i, arg in kept:
      if effective_names is not None:
        rendered.append(self.getTypescriptDefFromArgWithName(arg, effective_names[i], templateDecl, templateArgs))
      else:
        rendered.append(self.getTypescriptDefFromArg(arg, i, templateDecl, templateArgs))

    if self._outputArityIsUnambiguous(theClass, method):
      optional_from = self._trailingPrimitiveOutputRun(kept, method)
      for pos in range(optional_from, len(rendered)):
        colon = rendered[pos].find(":")
        if colon != -1:
          rendered[pos] = rendered[pos][:colon] + "?" + rendered[pos][colon:]

    return ", ".join(rendered)

  def processMethodOrProperty(self, theClass, method, templateDecl = None, templateArgs = None, overload_index = 0, override_postfix = None):
    output = ""
    if method.access_specifier == clang.cindex.AccessSpecifier.PUBLIC and method.kind == clang.cindex.CursorKind.CXX_METHOD and not method.spelling.startswith("operator"):
      [overloadPostfix, numOverloads] = getMethodOverloadPostfix(theClass, method)
      if override_postfix is not None:
        overloadPostfix = override_postfix

      allArgs = list(method.get_arguments())
      effective_names = self._effectiveAllArgNames(theClass, method, allArgs)
      outputReturnType = self._buildOutputParamReturnType(method, allArgs, templateDecl, templateArgs, theClass=theClass)

      if outputReturnType is not None:
        args = self._buildKeptArgs(method, allArgs, templateDecl, templateArgs, effective_names=effective_names, theClass=theClass)
        returnType = outputReturnType
      else:
        # Optional-overload migration: mark trailing parameters with C++
        # default values as TypeScript optional (`?`). The TS gate mirrors
        # the C++ optional-emission gate above; the matching `std::optional<T>`
        # binding accepts both `obj.Build()` (arity-pad) and `obj.Build(undefined)`
        # call shapes via the libembind v2 dispatcher.
        # See docs/research/ocjs-optional-overload-resolution-blueprint.md.
        # `resolve_type` continues to render the inner `T` for the TS arg —
        # `std::optional<T>` wrapping happens only in the C++ binding layer.
        def _isCStringPtr(t):
          return t.get_canonical().kind == clang.cindex.TypeKind.POINTER and isCString(t)
        hasOutputParams = any(isOutputParam(a.type) for a in allArgs)
        returnIsCString = _isCStringPtr(method.result_type)
        # NOTE: `hasCStringArgs` is intentionally NOT an exclusion here. The
        # Phase-4 val-default cstring branch (`val_default.py::_val_unwrap_expr`)
        # emits a binding that accepts the trailing-default-omitted call for
        # cstring params (e.g. `IFSelect_Act.SetGroup(group, file = "")` accepts
        # the 1-arg call, defaulting `file` to ""). The TS surface must catch up
        # by rendering the trailing cstring default as optional (`file?: string`).
        # `returnIsCString` stays excluded — it gates string-RETURNING methods,
        # not trailing cstring params, and is unrelated to trailing-default arity.
        ts_default_eligible = (
          numOverloads == 1
          and not hasOutputParams
          and not returnIsCString
          and not self._returnTypeRequiresValueWrapper(method)
        )
        nDefaults = self._countTrailingDefaults(method) if ts_default_eligible else 0
        nArgs = len(allArgs)
        parts = []
        for i, arg in enumerate(allArgs):
          rendered = self.getTypescriptDefFromArgWithName(arg, effective_names[i], templateDecl, templateArgs)
          if nDefaults > 0 and i >= nArgs - nDefaults:
            # rendered is "name: type" — splice in the `?` after `name`.
            colon = rendered.find(":")
            if colon != -1:
              rendered = rendered[:colon] + "?" + rendered[colon:]
          parts.append(rendered)
        args = ", ".join(parts)
        returnType = self.getTypescriptDefFromResultType(method.result_type, templateDecl, templateArgs)

      className = getClassTypeName(theClass, templateDecl)
      tplName = theClass.spelling if templateDecl is not None else None
      kept_names = [effective_names[i] for i, arg in enumerate(allArgs)
                    if not shouldStripParam(arg.type, method)]
      mutated_names = self._mutatedClassParamNames(method, allArgs, effective_names=effective_names)
      envelope = self._describeEnvelope(method, allArgs, templateDecl, templateArgs, theClass=theClass)
      param_name_map = {self._argname(a, i): effective_names[i]
                        for i, a in enumerate(allArgs)
                        if self._argname(a, i) != effective_names[i]}
      output += self._jsdoc(className, method.spelling, "  ", param_count=len(allArgs), overload_index=overload_index, template_name=tplName, param_names=kept_names, mutated_class_param_names=mutated_names, envelope_descriptor=envelope, param_name_map=param_name_map or None)
      output += "  " + ("static " if method.is_static_method() else "") + method.spelling + overloadPostfix + "(" + args + "): " + returnType + ";\n"
    if method.access_specifier == clang.cindex.AccessSpecifier.PUBLIC and method.kind == clang.cindex.CursorKind.FIELD_DECL:
      if method.type.kind == clang.cindex.TypeKind.CONSTANTARRAY:
        pass
      elif not method.type.get_pointee().kind == clang.cindex.TypeKind.INVALID:
        pass
      else:
        fieldType = self.resolve_type(method.type, templateDecl, templateArgs)
        output += "  " + method.spelling + ": " + fieldType + ";\n"
    return output

  def processMethodGroup(self, theClass, methods, templateDecl=None, templateArgs=None):
    """Process a group of methods with the same name — emit overloaded signatures."""
    output = ""
    className = getClassTypeName(theClass, templateDecl)
    tplName = theClass.spelling if templateDecl is not None else None

    bindable = []
    for m in methods:
      try:
        self._checkUnbindableArgs(m.spelling, theClass.spelling, list(m.get_arguments()))
        bindable.append(m)
      except SkipException as e:
        print(str(e))

    if not bindable:
      return output

    # Discover missing base-class overloads. When a derived class declares
    # an override of a base virtual but does NOT redeclare every base overload
    # of the same name, the missing overloads are hidden in C++ but TypeScript
    # still requires the derived to satisfy the full base contract — otherwise
    # TS2416 fires (`(guid: unknown) => void` not assignable to base's
    # `{ (a0): void; (): void }`). We render these synthesized base signatures
    # at the end of the group so the derived satisfies structural compatibility.
    base_overloads_to_synthesize = self._missing_base_overloads(theClass, bindable)

    # Filter rvalue-reference overloads — JS has no move semantics.
    # These create JS-ambiguous duplicates of const-ref overloads,
    # forcing unnecessary _N suffixes on the entire arity group.
    bindable = [m for m in bindable if not any(
      a.type.kind == clang.cindex.TypeKind.RVALUEREFERENCE
      for a in m.get_arguments()
    )]
    if not bindable:
      return output

    bindable = _rbv.select_js_effective_overload_survivors(
      self, bindable, templateDecl, templateArgs
    )
    if not bindable:
      return output

    # Group by *kept* arity (post output-param stripping) so that methods
    # which collapse to the same TS signature shape (e.g. three C++ Show()
    # overloads that all become `Show()` in TS) are routed to the _N suffix
    # branch and don't produce structurally identical, conflicting overloads
    # that fail the base-class assignability check (TS2416).
    def _kept_arity(m):
      return sum(1 for a in m.get_arguments() if not shouldStripParam(a.type, m))

    by_arity = defaultdict(list)
    for m in bindable:
      by_arity[_kept_arity(m)].append(m)

    all_unique_arities = all(len(group) == 1 for group in by_arity.values())

    if all_unique_arities:
      arity_idx = {}
      for m in bindable:
        nargs = _kept_arity(m)
        idx = arity_idx.get(nargs, 0)
        arity_idx[nargs] = idx + 1
        try:
          output += self.processMethodOrProperty(theClass, m, templateDecl, templateArgs, overload_index=idx, override_postfix="")
        except SkipException as e:
          print(str(e))
      for base_method in base_overloads_to_synthesize:
        output += self._render_synthesized_base_signature(base_method, className, tplName)
      return output

    # Same-arity groups exist — determine which need _N suffix
    all_methods_of_name = [m for m in theClass.get_children()
                           if m.kind == clang.cindex.CursorKind.CXX_METHOD
                           and m.access_specifier == clang.cindex.AccessSpecifier.PUBLIC
                           and m.spelling == bindable[0].spelling]
    def _ts_args_and_return(m):
      """Get TS args string and return type, accounting for output params."""
      allArgs = list(m.get_arguments())
      effective_names = self._effectiveAllArgNames(theClass, m, allArgs)
      outputReturnType = self._buildOutputParamReturnType(m, allArgs, templateDecl, templateArgs, theClass=theClass)
      if outputReturnType is not None:
        args = self._buildKeptArgs(m, allArgs, templateDecl, templateArgs, effective_names=effective_names, theClass=theClass)
        returnType = outputReturnType
      else:
        args = ", ".join(self.getTypescriptDefFromArgWithName(arg, effective_names[i], templateDecl, templateArgs)
                          for i, arg in enumerate(allArgs))
        returnType = self.getTypescriptDefFromResultType(m.result_type, templateDecl, templateArgs)
      return args, returnType

    def _kept_names(m):
      """Compute TS param names for a method, excluding stripped output params."""
      allArgs = list(m.get_arguments())
      effective_names = self._effectiveAllArgNames(theClass, m, allArgs)
      return [effective_names[i] for i, arg in enumerate(allArgs)
              if not shouldStripParam(arg.type, m)]

    def _jsdoc_kwargs(m):
      """Compute the mutated-class-param set, envelope descriptor, and the
      Doxygen→JS-name map for `m` so every same-arity-group `_jsdoc` call
      shares a single source of truth (kept in lockstep with
      `_buildOutputParamReturnType` via `_describeEnvelope` and with the
      TS signature via `_effectiveAllArgNames`).
      """
      allArgs = list(m.get_arguments())
      effective_names = self._effectiveAllArgNames(theClass, m, allArgs)
      param_name_map = {self._argname(a, i): effective_names[i]
                        for i, a in enumerate(allArgs)
                        if self._argname(a, i) != effective_names[i]}
      return {
        "mutated_class_param_names": self._mutatedClassParamNames(m, allArgs, effective_names=effective_names),
        "envelope_descriptor": self._describeEnvelope(m, allArgs, templateDecl, templateArgs, theClass=theClass),
        "param_name_map": param_name_map or None,
      }

    arity_idx_map = {}
    for arity, group in sorted(by_arity.items()):
      if len(group) == 1:
        idx = arity_idx_map.get(arity, 0)
        arity_idx_map[arity] = idx + 1
        args, returnType = _ts_args_and_return(group[0])
        methodArgs = list(group[0].get_arguments())
        names = _kept_names(group[0])
        output += self._jsdoc(className, group[0].spelling, "  ", param_count=len(methodArgs), overload_index=idx, template_name=tplName, param_names=names, **_jsdoc_kwargs(group[0]))
        output += "  " + ("static " if group[0].is_static_method() else "") + group[0].spelling + "(" + args + "): " + returnType + ";\n"
      else:
        def _ts_method_has_wrapper_args(m):
          return any(
            m_arg.type.get_canonical().spelling in unbindablePointerTypes
            for m_arg in m.get_arguments()
          )

        dispatchable = [m for m in group if not _ts_method_has_wrapper_args(m)]
        wrapper_methods = [m for m in group if _ts_method_has_wrapper_args(m)]

        if dispatchable:
          tree = self._build_dispatch_tree(dispatchable, templateDecl=templateDecl, templateArgs=templateArgs) if len(dispatchable) > 1 else None
          ambiguous = self._collect_ambiguous_overloads(tree) if tree else []
          distinguishable = [ov for ov in dispatchable if ov not in ambiguous]


          ambiguous_primaries = set()
          if tree:
            self._collect_ambiguous_primaries(tree, ambiguous_primaries)

          for ov in distinguishable:
            idx = arity_idx_map.get(arity, 0)
            arity_idx_map[arity] = idx + 1
            args, returnType = _ts_args_and_return(ov)
            methodArgs = list(ov.get_arguments())
            names = _kept_names(ov)
            output += self._jsdoc(className, ov.spelling, "  ", param_count=len(methodArgs), overload_index=idx, template_name=tplName, param_names=names, **_jsdoc_kwargs(ov))
            output += "  " + ("static " if ov.is_static_method() else "") + ov.spelling + "(" + args + "): " + returnType + ";\n"

          for ov in ambiguous:
            ovIdx = all_methods_of_name.index(ov) if ov in all_methods_of_name else 0
            suffix = "_" + str(ovIdx + 1)
            idx = arity_idx_map.get(arity, 0)
            arity_idx_map[arity] = idx + 1
            args, returnType = _ts_args_and_return(ov)
            methodArgs = list(ov.get_arguments())
            names = _kept_names(ov)
            is_primary = id(ov) in ambiguous_primaries
            jsdoc_extra = _jsdoc_kwargs(ov)
            if is_primary:
              output += self._jsdoc(className, ov.spelling, "  ", param_count=len(methodArgs), overload_index=idx, template_name=tplName, param_names=names, **jsdoc_extra)
              output += "  " + ("static " if ov.is_static_method() else "") + ov.spelling + "(" + args + "): " + returnType + ";\n"
            output += self._jsdoc(className, ov.spelling, "  ", param_count=len(methodArgs), overload_index=idx, template_name=tplName, param_names=names, **jsdoc_extra)
            output += "  " + ("static " if ov.is_static_method() else "") + ov.spelling + suffix + "(" + args + "): " + returnType + ";\n"

        for ov in wrapper_methods:
          ovIdx = all_methods_of_name.index(ov) if ov in all_methods_of_name else 0
          suffix = "_" + str(ovIdx + 1)
          idx = arity_idx_map.get(arity, 0)
          arity_idx_map[arity] = idx + 1
          args, returnType = _ts_args_and_return(ov)
          methodArgs = list(ov.get_arguments())
          names = _kept_names(ov)
          output += self._jsdoc(className, ov.spelling, "  ", param_count=len(methodArgs), overload_index=idx, template_name=tplName, param_names=names, **_jsdoc_kwargs(ov))
          output += "  " + ("static " if ov.is_static_method() else "") + ov.spelling + suffix + "(" + args + "): " + returnType + ";\n"

    for base_method in base_overloads_to_synthesize:
      output += self._render_synthesized_base_signature(base_method, className, tplName)
    return output

  def processOverloadedConstructors(self, theClass, children=None, templateDecl=None, templateArgs=None):
    return _ts_ctor.process_overloaded_constructors(self, theClass, children, templateDecl, templateArgs)

  def processEnum(self, theEnum):
    return _ts_enum.process_enum(self, theEnum)
