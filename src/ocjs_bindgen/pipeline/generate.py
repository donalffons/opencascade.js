#!/usr/bin/python3

import errno
import json
import os
from collections.abc import Callable

import clang.cindex

from filter.filterPackages import filterPackages
from ocjs_bindgen.ast import TuInfo
from ocjs_bindgen.codegen.bindings import EmbindBindings, TypescriptBindings
from ocjs_bindgen.codegen.wasm_common import SkipException
from ocjs_bindgen.config.paths import OCCT_ROOT, OCJS_ROOT, ocIncludeStatements
from ocjs_bindgen.embind_builtins import OCJS_RBV_PREAMBLE
from ocjs_bindgen.filters.typedefs import isHandleTemplateTypedef
from ocjs_bindgen.naming import getClassJsPublicName, getEnumJsPublicName
from ocjs_bindgen.predicates import shouldProcessClass

libraryBasePath = OCJS_ROOT + "/build/bindings"
buildDirectory = OCJS_ROOT + "/build"
occtBasePath = OCCT_ROOT + "/src/"

def mkdirp(name: str) -> None:
  try:
    os.makedirs(name)
  except OSError as e:
    if e.errno != errno.EEXIST:
      raise

def filterClasses(child, customBuild):
  if customBuild:
    return (
      child.location.file is not None and child.location.file.name == "myMain.h" and
      shouldProcessClass(child, occtBasePath)
    )
  return (
    child.extent.start.file is not None and child.extent.start.file.name.startswith(occtBasePath) and
    filterPackages(os.path.basename(os.path.dirname(child.location.file.name))) and
    shouldProcessClass(child, occtBasePath)
  )

_FILTERED_TEMPLATE_TYPEDEFS = frozenset({
  # NOTE: `Handle_math_NotSquare` / `Handle_math_SingularMatrix` /
  # `Handle_Standard_Type` were previously listed here as name-by-name
  # band-aids. `isHandleTemplateTypedef` now rejects every smart-handle
  # typedef before code generation, and the enumerator applies the same
  # predicate before writing YAML. The pointee's `smart_ptr` binding owns
  # the canonical C++ TypeID, so no alias fragment or selection is emitted.
  "TColStd_PackedMapOfInteger",
  "TColStd_SequenceOfAddress",
  "TopTools_IndexedDataMapOfShapeAddress",
})

def filterTemplates(child, customBuild):
  if child.spelling in _FILTERED_TEMPLATE_TYPEDEFS:
    return False
  if isHandleTemplateTypedef(child):
    return False

  is_valid_kind = child.kind in (
    clang.cindex.CursorKind.TYPEDEF_DECL,
    clang.cindex.CursorKind.TYPE_ALIAS_DECL,
  )
  is_valid_underlying = child.underlying_typedef_type.kind in (
    clang.cindex.TypeKind.ELABORATED,
    clang.cindex.TypeKind.UNEXPOSED,
  )
  is_custom_source = (
    child.location.file is not None
    and child.location.file.name == "myMain.h"
  )

  if customBuild:
    return is_custom_source and is_valid_kind and is_valid_underlying

  is_occt_source = (
    child.extent.start.file is not None
    and child.extent.start.file.name.startswith(occtBasePath)
    and filterPackages(os.path.basename(os.path.dirname(child.location.file.name)))
  )
  return (is_occt_source or is_custom_source) and is_valid_kind and is_valid_underlying

def filterEnums(child, customBuild):
  if customBuild:
    return child.location.file is not None and child.location.file.name == "myMain.h"
  return ((
      child.extent.start.file is not None and child.extent.start.file.name.startswith(occtBasePath) and
      filterPackages(os.path.basename(os.path.dirname(child.location.file.name)))
    ) and
    child.kind == clang.cindex.CursorKind.ENUM_DECL
  )

def _output_basename(child) -> str:
  """Filename stem for a generated binding fragment.

  Aligns with the JS public name emitted by `bindings.py` so the verifier
  in `manifest_registry.collect_compiled_symbols` (which strips `.cpp.o`
  from the basename and uses it as the symbol key) can match YAML entries like
  `ExtremaPC_Status` against namespace-scoped declarations whose bare
  `child.spelling` is just `Status`. Top-level types fall through to the
  bare spelling for backward-compatible filenames.
  """
  if child.kind in (clang.cindex.CursorKind.CLASS_DECL, clang.cindex.CursorKind.STRUCT_DECL, clang.cindex.CursorKind.CLASS_TEMPLATE):
    return getClassJsPublicName(child)
  if child.kind == clang.cindex.CursorKind.ENUM_DECL:
    return getEnumJsPublicName(child)
  if child.kind in (clang.cindex.CursorKind.TYPEDEF_DECL, clang.cindex.CursorKind.TYPE_ALIAS_DECL):
    # Template typedef aliases: emit under the alias's JS public name (which
    # is the alias spelling for top-level aliases, or `Namespace_alias` for
    # namespace-scoped aliases — same rule as `getClassJsPublicName`).
    return getClassJsPublicName(child, child)
  return child.spelling

def processChildren(tuInfo: TuInfo, children, extension: str, filterFunction: Callable[[any], bool], processFunction: Callable[[any, any], str], preamble: str, customBuild: bool):
  for child in children:
    if not filterFunction(child, customBuild) or child.spelling == "" or child.spelling.startswith("("):
      continue

    relOcFileName: str = child.extent.start.file.name.replace(occtBasePath, "")
    mkdirp(buildDirectory + "/bindings/" + os.path.dirname(relOcFileName))
    mkdirp(buildDirectory + "/bindings/" + relOcFileName)
    basename = _output_basename(child)
    if not basename:
      basename = child.spelling if child.spelling else child.type.spelling
    filename = buildDirectory + "/bindings/" + relOcFileName + "/" + basename + extension

    if not os.path.exists(filename):
      print("Processing " + child.spelling)
      try:
        output = processFunction(tuInfo, preamble, child)
        bindingsFile = open(filename, "w")
        bindingsFile.write(output)
      except SkipException as e:
        print(str(e))
    else:
      print("file " + child.spelling + ".cpp already exists, skipping")

def split(a, n):
  k, m = divmod(len(a), n)
  return (a[i * k + min(i, m):(i + 1) * k + min(i + 1, m)] for i in range(n))

class NonTypeTemplateArg:
  """Marker for a non-type template argument captured from an alias.

  libclang's `clang.cindex.Type` is the natural carrier for type arguments,
  but non-type arguments are scalar/enum values (`Kind::Product`, `42`,
  `true`). Existing call sites in `bindings.py` consume `templateArgs[param]`
  via `.spelling` to splice the value text into emitted C++. Mirroring that
  attribute here lets every consumer treat `NonTypeTemplateArg` as a duck-
  typed type without per-call-site changes; downstream sites that need
  richer type queries (`.kind`, `.get_canonical()`) can use `isinstance()`
  to disambiguate when they evolve. Keeping the literal text verbatim is
  the architecturally correct choice — Embind's `class_<T>(...)` template
  argument expansion eventually emits a fully-qualified expression like
  `BRepGraph_NodeId::Typed<BRepGraph_NodeId::Kind::Product>`, which is what
  the linker resolves against.
  """

  def __init__(self, value: str):
    self.value = value
    self.spelling = value

  def __repr__(self):
    return f"NonTypeTemplateArg({self.value!r})"


def _split_template_args(text: str):
  """Split the comma-separated argument list inside the OUTERMOST `<…>` of `text`.

  Respects bracket nesting so `Outer<A, B<C, D>>` yields `["A", "B<C, D>"]`.
  Returns `None` if `text` has no balanced `<…>` segment.
  """
  start = text.find("<")
  if start == -1:
    return None
  depth = 0
  end = -1
  for i, ch in enumerate(text[start:], start=start):
    if ch == "<":
      depth += 1
    elif ch == ">":
      depth -= 1
      if depth == 0:
        end = i
        break
  if end == -1:
    return None
  inner = text[start + 1:end]
  parts = []
  buf = []
  depth = 0
  for ch in inner:
    if ch == "<":
      depth += 1
      buf.append(ch)
    elif ch == ">":
      depth -= 1
      buf.append(ch)
    elif ch == "," and depth == 0:
      parts.append("".join(buf).strip())
      buf = []
    else:
      buf.append(ch)
  if buf:
    parts.append("".join(buf).strip())
  return parts


def processTemplate(child):
  # libclang yields one TEMPLATE_REF per template name appearing in the alias's
  # right-hand side, in source-order. For `using X = Outer<Inner<T>>;` it
  # produces two refs (Outer, Inner). The OUTER template is what we need to
  # instantiate against; OCCT V8 makes this pattern common via the LProps
  # template family (e.g. `using GeomLProp_SLProps = GeomLProp_SLPropsBase<
  # occ::handle<Geom_Surface>>` produces refs for both `GeomLProp_SLPropsBase`
  # and `occ::handle`). The first TEMPLATE_REF is always the outermost one
  # because libclang walks left-to-right; relying on `len() == 1` mis-skips
  # every alias whose template arg is itself a template instance.
  templateRefs = list(filter(lambda x: x.kind == clang.cindex.CursorKind.TEMPLATE_REF, child.get_children()))
  if len(templateRefs) == 0:
    raise SkipException("No template ref found for the template typedef \"" + child.spelling + "\"")

  templateClass = templateRefs[0].get_definition()
  if templateClass is None:
    raise SkipException("Template class is None (" + child.spelling + ")")
  # Walk BOTH type and non-type parameters so OCCT's typed-id pattern
  # (BRepGraph_NodeId::Typed<TheKind = enum value>) resolves correctly.
  templateParams = list(filter(
    lambda x: x.kind in (
      clang.cindex.CursorKind.TEMPLATE_TYPE_PARAMETER,
      clang.cindex.CursorKind.TEMPLATE_NON_TYPE_PARAMETER,
    ),
    templateClass.get_children(),
  ))

  # When a `using` alias omits trailing template arguments that the primary
  # template defines defaults for (OCCT V8 pattern, e.g. `using
  # GeomLProp_SLProps = GeomLProp_SLPropsBase<occ::handle<Geom_Surface>>`
  # leaves the second `Access` parameter to its in-class default), libclang
  # reports `child.type.get_template_argument_type(i).spelling == ""` for the
  # defaulted slots. Resolving the alias first via `get_canonical()` yields a
  # fully-instantiated type whose template arguments expose the defaults.
  canonicalType = child.type.get_canonical()
  # Non-type template args are extracted from the alias's UNDERLYING spelling,
  # not from the fully-resolved canonical spelling. The underlying preserves
  # the outer template instantiation as written (`BVH::VectorType<double,3>
  # ::Type`, `BRepGraph_NodeId::Typed<Kind::Product>`), so its arg list
  # aligns slot-by-slot with `templateParams` from the outer template's
  # definition. The canonical spelling, by contrast, walks every typedef
  # alias to the root (`NCollection_Vec3<double>`), losing the non-type arg
  # entirely when a deeper alias drops it. `_split_template_args` already
  # respects nested `<…>` and ignores any trailing `::Member` after the
  # outermost closing bracket.
  underlyingSpelling = child.underlying_typedef_type.spelling
  underlyingArgTexts = _split_template_args(underlyingSpelling)
  templateArgs = {}
  for i, templateArgName in enumerate(templateParams):
    if templateArgName.kind == clang.cindex.CursorKind.TEMPLATE_NON_TYPE_PARAMETER:
      # Non-type args are scalar/enum values. libclang's
      # `get_template_argument_type(i)` returns the parameter's *type*
      # (e.g. `Kind`), not the supplied value. The alias's underlying
      # spelling carries the value verbatim — extract it and stash a
      # NonTypeTemplateArg marker so downstream emit sites splice the
      # literal text directly into the generated C++.
      if not underlyingArgTexts or i >= len(underlyingArgTexts):
        raise SkipException(
          "Cannot extract non-type template argument [" + str(i) + "] for alias \"" + child.spelling + "\" (underlying spelling: " + underlyingSpelling + ")"
        )
      templateArgs[templateArgName.spelling] = NonTypeTemplateArg(underlyingArgTexts[i])
      continue

    templateArgType = child.type.get_template_argument_type(i)
    if templateArgType.spelling == "":
      templateArgType = canonicalType.get_template_argument_type(i)
    if templateArgType.spelling == "":
      raise SkipException("Template argument type is empty for parameter \"" + templateArgName.spelling + "\" of template typedef \"" + child.spelling + "\" (no value supplied and no resolvable default).")
    templateArgs[templateArgName.spelling] = templateArgType

  # Augment with `type-parameter-0-N` keys derived from the
  # ordinal positions so downstream resolvers can substitute either the
  # source-name spelling (`TheItemType`) or libclang's canonical
  # synthetic spelling (`type-parameter-0-0`) without an extra rewrite.
  # This propagates through every inherited-method walk because the
  # binder threads `templateArgs` straight into `processClass` /
  # `processMethodOrProperty`.
  from ocjs_bindgen.ast.template_args import augment_template_args_with_canonical
  templateArgs = augment_template_args_with_canonical(templateArgs, templateClass)

  return [templateClass, templateArgs]

def embindGenerationFuncClasses(tuInfo: TuInfo, preamble, child) -> str:
  embindings = EmbindBindings(tuInfo)
  output = embindings.processClass(child)

  return preamble + output

def embindGenerationFuncTemplates(tuInfo: TuInfo, preamble, child) -> str:
  [templateClass, templateArgs] = processTemplate(child)
  embindings = EmbindBindings(tuInfo)
  output = embindings.processClass(templateClass, child, templateArgs)

  return preamble + output

def embindGenerationFuncEnums(tuInfo: TuInfo, preamble, child) -> str:
  embindings = EmbindBindings(tuInfo)
  output = embindings.processEnum(child)

  return preamble + output

def dedupeTemplateTypedefsByCanonical(typedefs):
  """Pick one cursor per canonical instantiation from a list of template typedefs.

  OCCT V8's `BRepGraph_ReverseIterator.hxx` exposes families of `using` aliases
  that all instantiate the same primary template — e.g. five aliases
  (`BRepGraph_CompoundsOfFace`, `…OfShell`, `…OfSolid`, `…OfCompSolid`,
  `…OfCompound`) all expand to `BRepGraph_ReverseIterator::ParentsOf<
  BRepGraph_CompoundId>`. Embind keys class registrations by C++ TypeID
  (canonical type), so a second `class_<…>("BRepGraph_CompoundsOfShell")`
  collides with the first registration and aborts Module() with
  `BindingError: Cannot register type 'BRepGraph_CompoundsOfFace' twice`.

  Pick a single canonical winner (the alphabetically-first alias for
  determinism across runs) and drop the rest from the binding pipeline.
  Downstream consumers can address dropped aliases via the winner's JS
  name; richer multi-alias surfacing (e.g. `export type DroppedAlias =
  WinningAlias` in d.ts) is a future enhancement and not needed for
  correctness — the data layout is identical across all aliases.
  """
  by_canonical: dict[str, list] = {}
  for td in typedefs:
    if td.kind not in (clang.cindex.CursorKind.TYPEDEF_DECL, clang.cindex.CursorKind.TYPE_ALIAS_DECL):
      continue
    canonical = td.underlying_typedef_type.get_canonical().spelling
    if not canonical:
      continue
    by_canonical.setdefault(canonical, []).append(td)
  winners = []
  for _canonical, group in by_canonical.items():
    group.sort(key=lambda c: c.spelling)
    winners.append(group[0])
  winner_set = {(w.spelling, w.location.file.name if w.location.file else "", w.location.line) for w in winners}
  return [td for td in typedefs if (
    td.spelling, td.location.file.name if td.location.file else "", td.location.line
  ) in winner_set or td.kind not in (clang.cindex.CursorKind.TYPEDEF_DECL, clang.cindex.CursorKind.TYPE_ALIAS_DECL)]

def process(tuInfo: TuInfo, extension, embindGenerationFuncClasses, embindGenerationFuncTemplates, embindGenerationFuncEnums, preamble, customBuild):
  processChildren(tuInfo, tuInfo.allChildren, extension, filterClasses, embindGenerationFuncClasses, preamble, customBuild)
  dedupedTypedefs = dedupeTemplateTypedefsByCanonical(tuInfo.templateTypedefs)
  processChildren(tuInfo, dedupedTypedefs, extension, filterTemplates, embindGenerationFuncTemplates, preamble, customBuild)
  processChildren(tuInfo, tuInfo.enums, extension, filterEnums, embindGenerationFuncEnums, preamble, customBuild)

def typescriptGenerationFuncClasses(tuInfo: TuInfo, preamble, child) -> str:
  typescript = TypescriptBindings(tuInfo)
  output = typescript.processClass(child)

  return json.dumps({
    ".d.ts": preamble + output,
    "kind": "class",
    "exports": sorted(typescript.exports),
    "ancestors": typescript.ancestorChains,
    # R1 (W10 structural fix) — every C++ class identifier the resolver
    # attempted to emit (whether or not it resolved to a known export) is
    # serialised here so `link/yaml_build.py:_compute_yaml_class_scope`
    # can lift cross-class references into the next link's scope.
    # Replaces the legacy `_NCOLLECTION_TOKEN_RE` regex scrape of the
    # rendered `.d.ts` payload — the codegen layer holds the structured
    # truth one function call before serialisation.
    "referenced_classes": sorted(typescript.referenced_classes),
  })

def typescriptGenerationFuncTemplates(tuInfo: TuInfo, preamble, child) -> str:
  [templateClass, templateArgs] = processTemplate(child)
  typescript = TypescriptBindings(tuInfo)
  output = typescript.processClass(templateClass, child, templateArgs)

  return json.dumps({
    ".d.ts": preamble + output,
    "kind": "class",
    "exports": sorted(typescript.exports),
    "ancestors": typescript.ancestorChains,
    # R1 (W10 structural fix) — see `typescriptGenerationFuncClasses`.
    "referenced_classes": sorted(typescript.referenced_classes),
  })

def typescriptGenerationFuncEnums(tuInfo: TuInfo, preamble, child) -> str:
  typescript = TypescriptBindings(tuInfo)
  output = typescript.processEnum(child)

  return json.dumps({
    ".d.ts": preamble + output,
    "kind": "enum",
    "exports": sorted(typescript.exports),
  })

referenceTypeTemplateDefs = \
  "\n" + \
  "#include <emscripten/bind.h>\n" + \
  "#include <emscripten/wire.h>\n" + \
  "using namespace emscripten;\n" + \
  "#include <functional>\n" + \
  "#include <optional>\n" + \
  "#include <stdexcept>\n" + \
  "#include \"ocjs_smart_ptr.h\"\n" + \
  "#include \"ocjs_handle_helpers.h\"\n" + \
  OCJS_RBV_PREAMBLE + \
  "\n"

def generateCustomCodeBindings(
  customCode,
  known_exports=None,
  *,
  output_dir=None,
):
  """Generate Embind C++ and TypeScript fragments for the YAML's custom C++ files.

  Callers MUST pass `known_exports` so cross-class references inside the
  custom C++ (for example, a wrapper method returning `TopoDS_Shape`, or one
  custom class referencing a sibling custom class as its return type) resolve
  to real exported TypeScript types instead of falling through to `unknown`
  in `TypescriptBindings.resolve_type`.

  The expected seed composition is:
    - the `mainBuild.bindings[*].symbol` and `extraBuilds[*].bindings[*].symbol`
      values from the YAML (these are the OCCT classes the consumer build
      will export),
    - the `_auto_symbols` set computed from
      `build/ncollection-manifest.json` (auto-discovered NCollection types),
    - the custom-code class names AST-discovered from `tuInfo` below
      (sibling classes inside `myMain.h`).

  When `known_exports` is None, only the local custom classes are seeded —
  this preserves the contract for any standalone caller while still avoiding
  the "every sibling reference is `unknown`" baseline failure mode.
  """
  global buildDirectory, libraryBasePath
  previous_build_directory = buildDirectory
  previous_library_base_path = libraryBasePath
  if output_dir is not None:
    libraryBasePath = os.path.abspath(output_dir)
    buildDirectory = os.path.dirname(libraryBasePath)
  os.makedirs(libraryBasePath, exist_ok=True)

  embindPreamble = ocIncludeStatements + "\n" + referenceTypeTemplateDefs + "\n" + customCode

  tuInfo = TuInfo(customCode)

  local_custom_classes = {
    c.spelling
    for c in tuInfo.allChildren
    if c.kind == clang.cindex.CursorKind.CLASS_DECL
    and c.location.file is not None
    and c.location.file.name == "myMain.h"
    and c.spelling
  }
  TypescriptBindings._known_export_names = (
    (set(known_exports) if known_exports else set()) | local_custom_classes
  )

  # `_known_export_names` is seeded above as a precondition for the
  # `.d.ts.json` process(...) call below; without it, every cross-class
  # reference inside the custom code (e.g. TopoDS_Shape, Geom2d_Curve,
  # sibling custom classes) would collapse to `unknown` via the fallback in
  # `TypescriptBindings.resolve_type`. See the `TypescriptBindings` class
  # docstring for the full contract.
  try:
    process(tuInfo, ".cpp", embindGenerationFuncClasses, embindGenerationFuncTemplates, embindGenerationFuncEnums, embindPreamble, True)
    process(tuInfo, ".d.ts.json", typescriptGenerationFuncClasses, typescriptGenerationFuncTemplates, typescriptGenerationFuncEnums, "", True)
  finally:
    buildDirectory = previous_build_directory
    libraryBasePath = previous_library_base_path

if __name__ == "__main__":
  import argparse
  parser = argparse.ArgumentParser(description="Generate OCCT Embind/TypeScript bindings")
  parser.add_argument("--config", default=None, help="Path to bindgen-filters.yaml for config-driven filtering")
  args = parser.parse_args()

  if args.config:
    from ocjs_bindgen import filters
    from ocjs_bindgen.config import get_config
    config = get_config(args.config)
    filters.install(config)
    if config.excluded_template_typedefs:
      _FILTERED_TEMPLATE_TYPEDEFS = _FILTERED_TEMPLATE_TYPEDEFS | config.excluded_template_typedefs

  from ocjs_bindgen.config.paths import BUILD_DIR
  from ocjs_bindgen.discover import discover_ncollection_types, generate_using_declarations, write_manifest

  try:
    os.makedirs(libraryBasePath)
  except Exception:
    pass

  # Phase 1: Discovery scan
  scan_tuInfo = TuInfo("")
  discovered = discover_ncollection_types(scan_tuInfo, filterClasses)
  using_decls = generate_using_declarations(discovered)
  if discovered:
    write_manifest(discovered, BUILD_DIR, tuInfo=scan_tuInfo)

  # Phase 2: Re-parse with using declarations
  tuInfo = TuInfo(using_decls)

  TypescriptBindings.prepare_known_exports(tuInfo, filterClasses, filterTemplates)

  embindPreamble = ocIncludeStatements + "\n" + referenceTypeTemplateDefs
  if using_decls:
    embindPreamble += "\n" + using_decls
  process(tuInfo, ".cpp", embindGenerationFuncClasses, embindGenerationFuncTemplates, embindGenerationFuncEnums, embindPreamble, False)

  process(tuInfo, ".d.ts.json", typescriptGenerationFuncClasses, typescriptGenerationFuncTemplates, typescriptGenerationFuncEnums, "", False)
