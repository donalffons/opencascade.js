"""Embind class-body orchestration (Phase 2 PR 2.3).

* :func:`process_class` — emit the full `EMSCRIPTEN_BINDINGS(<name>) { ... }`
  block for one class: result-struct definitions, class header with `base<>`,
  smart pointer registration for transient-derived, methods (delegated to base
  `Bindings.processClass`), then nested enum/POD-struct emissions, then any
  raw-destructor specialization for non-public destructors / placement delete.
* :func:`process_finalize_class` — closing `;` line emitted between method
  body and nested-decl section.

Inherits the method-walking + processFinalizeClass + processOverloadedConstructors
plumbing from `Bindings.processClass` via `super().processClass(...)`.
"""

from __future__ import annotations

import clang.cindex

from ocjs_bindgen.codegen.embind import preamble as _preamble
from ocjs_bindgen.codegen.wasm_common import isTransientDerived
from ocjs_bindgen.naming.cpp import getClassQualifiedName
from ocjs_bindgen.naming.ts import getClassJsPublicName


def process_class(b, theClass, templateDecl=None, templateArgs=None):
  """Emit the EMSCRIPTEN_BINDINGS block for `theClass`.

  Calls back into `b`'s base-class `processClass` (via the bound super-method
  passed as `super_process_class`) for the method-walking machinery so the
  Bindings.processClass scaffolding remains the single canonical method-walker.
  """
  output = ""
  className = getClassJsPublicName(theClass, templateDecl)
  if className == "":
    className = theClass.type.spelling
  classCpp = getClassQualifiedName(theClass, templateDecl)
  if not classCpp:
    classCpp = className

  baseSpec = list(filter(lambda x: x.kind == clang.cindex.CursorKind.CXX_BASE_SPECIFIER and x.access_specifier == clang.cindex.AccessSpecifier.PUBLIC, theClass.get_children()))

  if len(baseSpec) > 0:
    # Use canonical spelling so namespace-scoped base classes are emitted as
    # fully-qualified C++ expressions (e.g. `BRepGraphInc::BaseRef`). The
    # bare `baseSpec[0].type.spelling` is lookup-context-relative — for a
    # derived class declared inside the SAME namespace as its base, it
    # returns just the base spelling (`BaseRef`), which would not resolve
    # at file scope inside the EMSCRIPTEN_BINDINGS block. Embind requires
    # the base type to be both bound (registered via `class_<>`) AND
    # expressible at the binding site; canonical spelling satisfies both.
    canonicalBaseType = baseSpec[0].type.get_canonical().spelling
    if "<" in canonicalBaseType:
      baseClassBinding = ""
    else:
      baseDecl = baseSpec[0].type.get_declaration()
      baseSpelling = baseDecl.spelling if baseDecl is not None else ""
      baseIsBound = bool(baseSpelling) and baseSpelling in b.tuInfo.classDict
      if baseIsBound:
        baseClassBinding = ", base<" + canonicalBaseType + ">"
      else:
        # Base class is not in the bound class set — emitting `base<X>`
        # would fail Module() with `Cannot register class derived from
        # unbound class`. Drop the base specifier and let embind treat
        # the type as a root.
        baseClassBinding = ""
  else:
    baseClassBinding = ""

  _preamble.reset_struct_buffers(b)

  # Delegate the per-method walking to the base Bindings.processClass via
  # the bound super-method. This is the canonical method-walker scaffolding
  # — keeping a single definition (PR 2.3 plan: collapse dual processClass
  # legacy scaffolding to one canonical version).
  from ocjs_bindgen.codegen.bindings import Bindings
  method_output = Bindings.processClass(b, theClass, templateDecl, templateArgs)

  for struct_def in b._result_struct_defs:
    output += struct_def

  output += "EMSCRIPTEN_BINDINGS(" + className + ") {\n"

  for reg in b._result_struct_registrations:
    output += reg

  # Register every distinct std::optional<T> inner type discovered during
  # this class's emission. The libembind v2 dispatcher routes optional
  # bindings via the registered converter; without these calls the runtime
  # raises `Cannot construct ... due to unbound types` for the first
  # method/ctor invocation. The `register_optional<T>` thread-local guard
  # makes repeated calls safe across multiple TUs. See
  # docs/research/ocjs-optional-overload-resolution-blueprint.md.
  for inner in b._optional_inner_types:
    output += "  emscripten::register_optional<" + inner + ">();\n"

  output += "  class_<" + classCpp + baseClassBinding + ">(\"" + className + "\")\n"

  if isTransientDerived(theClass, b.tuInfo.classDict):
    output += "    .smart_ptr<opencascade::handle<" + classCpp + ">>(\"Handle_" + className + "\")\n"

  if className == "Standard_Transient":
    output += "    .function(\"isNull\", &handle_isNull<Standard_Transient>)\n"
    output += "    .function(\"nullify\", &handle_nullify<Standard_Transient>)\n"

  output += method_output

  for child in theClass.get_children():
    if child.kind == clang.cindex.CursorKind.ENUM_DECL and child.access_specifier == clang.cindex.AccessSpecifier.PUBLIC and child.spelling != "" and child.spelling.isidentifier():
      enumName = className + "_" + child.spelling
      isScoped = child.is_scoped_enum()
      valuePrefix = classCpp + "::" + child.spelling + "::" if isScoped else classCpp + "::"
      output += "  enum_<" + classCpp + "::" + child.spelling + ">(\"" + enumName + "\", emscripten::enum_value_type::string)\n"
      for enumChild in list(child.get_children()):
        if enumChild.kind == clang.cindex.CursorKind.ENUM_CONSTANT_DECL:
          output += "    .value(\"" + enumChild.spelling + "\", " + valuePrefix + enumChild.spelling + ")\n"
      output += "  ;\n"

    if child.kind == clang.cindex.CursorKind.STRUCT_DECL and child.access_specifier == clang.cindex.AccessSpecifier.PUBLIC and child.spelling != "" and child.spelling.isidentifier():
      fields = [f for f in child.get_children() if f.kind == clang.cindex.CursorKind.FIELD_DECL]
      non_field_members = [f for f in child.get_children() if f.kind not in (
        clang.cindex.CursorKind.FIELD_DECL,
        clang.cindex.CursorKind.CXX_ACCESS_SPEC_DECL,
        clang.cindex.CursorKind.CONSTRUCTOR,
        clang.cindex.CursorKind.DESTRUCTOR,
      )]
      if fields and not non_field_members:
        ctors_nested = [
          c for c in child.get_children()
          if c.kind == clang.cindex.CursorKind.CONSTRUCTOR
          and c.access_specifier == clang.cindex.AccessSpecifier.PUBLIC
        ]
        has_default_ctor = (
          not ctors_nested
          or any(
            len(list(c.get_arguments())) == 0 and not c.is_deleted_method()
            for c in ctors_nested
          )
        )
        if not has_default_ctor:
          continue
        # Nested public POD struct (fields only) → standalone embind `value_object`.
        # This is the **S0** return path for struct *values* returned from methods that
        # have no OCJS-classified output params (see `_emitOutputParamBinding` for S1/S2).
        structName = className + "_" + child.spelling
        cppType = classCpp + "::" + child.spelling
        output += f'  value_object<{cppType}>("{structName}")\n'
        for field in fields:
          if not b._isWireSafeFieldType(field.type):
            continue
          output += f'    .field("{field.spelling}", &{cppType}::{field.spelling})\n'
        output += "  ;\n"

  output += "}\n\n"

  # embind's default `raw_destructor<T>` is `delete ptr`, which does not
  # compile for a non-public destructor or for a class whose only
  # class-scope `operator delete` is a placement form. Those classes get a
  # specialization that defers to `ocjs::destroy`, which decides in C++
  # whether `delete ptr` is well-formed. OCCT's DEFINE_STANDARD_ALLOC
  # declares placement delete next to the ordinary `operator delete(void*)`,
  # so most of these classes are deletable and must be freed (issue #40).
  nonPublicDestructor = any(x.kind == clang.cindex.CursorKind.DESTRUCTOR and not x.access_specifier == clang.cindex.AccessSpecifier.PUBLIC for x in theClass.get_children())
  placementDelete = next((x for x in theClass.get_children() if x.spelling == "operator delete" and len(list(x.get_arguments())) == 2), None) is not None
  if nonPublicDestructor or placementDelete:
    output += "namespace emscripten { namespace internal { template<> void raw_destructor<" + classCpp + ">(" + classCpp + "* ptr) { ::ocjs::destroy(ptr); } } }\n"
  return output


def process_finalize_class(b):
  return "  ;\n"
