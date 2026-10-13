"""V13 RECLAIM — shared OCCT-class enumeration module.

Closes the split-brain documented in [`scripts/enumerate-symbols.py`'s
pre-RE-SHIP docstring](../../scripts/enumerate-symbols.py): the script
deliberately omitted ``RAPIDJSON_ROOT`` / ``FREETYPE_ROOT`` / ``EMSDK``
env-vars before invoking ``TuInfo("")`` so libclang would truncate
``templateTypedefs`` parsing at the first unresolved header. This kept
the script's view of OCCT artificially smaller than ``discover.py``'s
view (which the build pipeline drives with the full deps env), masking
43 NCollection synthetic aliases that would otherwise collide with
user-named typedefs at link time.

The collision was always a phantom — ``dedupeTemplateTypedefsByCanonical``
(in ``ocjs_bindgen.pipeline.generate``) already collapses every
template-typedef family that shares a canonical underlying spelling
into a single alphabetically-first winner. With dedup applied to the
full templateTypedefs set, the 43-alias collision evaporates and both
tools can finally use the same ``TuInfo`` setup.

This module provides:

* ``setup_full_environment(ocjs_root, occt_root)`` — resolves every
  deps env-var ``TuInfo("")`` consults so libclang parses every header.
  Auto-detects ``deps/rapidjson``, ``deps/freetype``, ``deps/emsdk``
  under ``ocjs_root`` (the same locations ``scripts/clone-deps.sh``
  populates).
* ``EnumerationResult`` + ``enumerate_occt_classes(tu_info, filter_cfg)`` —
  the pure enumeration logic, hoisted out of the legacy script so
  ``enumerate-symbols.py`` is now a thin CLI shell and any other
  consumer (sentinel tests, future docs generator) can reuse the same
  walker without re-implementing the AST traversal.

The dedup pass uses ``ocjs_bindgen.pipeline.generate.dedupeTemplateTypedefsByCanonical``
as the single source of truth (V13 requirement: no duplicate dedup
implementations — one canonical dedup function consumed by both
``discover.py`` and ``enumerate-symbols.py``).
"""

from __future__ import annotations

import os
import sys
from dataclasses import dataclass, field
from pathlib import Path
from typing import NamedTuple


@dataclass(frozen=True)
class EnumerationResult:
    """Immutable enumeration output. Mirrors the legacy script's tuple
    return shape but with named fields so consumers can address each
    bucket without positional unpacking. Frozen so the result can be
    shared across threads (e.g. parity tests running in parallel).
    """

    classes: dict[str, str] = field(default_factory=dict)
    enums: dict[str, str] = field(default_factory=dict)
    typedefs: dict[str, str] = field(default_factory=dict)
    skipped_classes: set[str] = field(default_factory=set)
    handle_classes: set[str] = field(default_factory=set)


class FilterConfig(NamedTuple):
    """Subset of bindgen-filters.yaml the enumeration walker consults.

    Mirrors ``scripts/enumerate-symbols.py::FilterConfig`` so the script
    and the shared module always interpret the YAML the same way.
    """

    excluded_classes: set[str]
    excluded_class_prefixes: list
    excluded_typedefs: set[str]
    excluded_template_typedefs: set[str]
    excluded_headers: set[str]
    excluded_packages: set[str]


def setup_full_environment(ocjs_root: Path, occt_root: Path) -> None:
    """Set every env-var ``ocjs_bindgen.config.paths`` consults so libclang
    resolves every transitive header.

    Pre-RE-SHIP, ``scripts/enumerate-symbols.py`` deliberately left
    ``RAPIDJSON_ROOT`` / ``FREETYPE_ROOT`` / ``EMSDK`` unset so libclang
    truncated parsing at the first unresolved header — the documented
    "mirroring the historical phase-1 truncation" hack. With the dedup
    pass active, full env resolution is safe and gives both consumers
    the same OCCT view.

    Auto-detects standard ``deps/`` layout (the one ``scripts/clone-deps.sh``
    populates); callers wanting to override a specific dep can set the
    env-var before calling this.
    """
    os.environ.setdefault("OCJS_ROOT", str(ocjs_root))
    os.environ.setdefault("OCCT_ROOT", str(occt_root))
    deps = ocjs_root / "deps"
    for var, candidate in (
        ("RAPIDJSON_ROOT", deps / "rapidjson"),
        ("FREETYPE_ROOT", deps / "freetype"),
        ("EMSDK", deps / "emsdk"),
    ):
        if not os.environ.get(var) and candidate.is_dir():
            os.environ[var] = str(candidate)
    src_dir = str(ocjs_root / "src")
    if src_dir not in sys.path:
        sys.path.insert(0, src_dir)


def is_excluded(name: str, cfg: FilterConfig) -> bool:
    """Match against the YAML's exclude.classes section (literal names +
    `prefix:` entries). Shared by the script and the walker so both
    layers honour the same exclusion contract.
    """
    if name in cfg.excluded_classes:
        return True
    return any(name.startswith(p) for p in cfg.excluded_class_prefixes)


def enumerate_occt_classes(cfg: FilterConfig, tu_info=None) -> EnumerationResult:
    """Walk every CLASS_DECL/STRUCT_DECL/ENUM_DECL/template typedef under
    ``occtBasePath`` and partition into the four buckets the YAML
    generator needs. Uses libclang exclusively — no regex, no source
    string parsing.

    Constructs ``TuInfo("")`` internally so script-level callers never
    need to import ``ocjs_bindgen.ast`` directly — the V13 "no
    duplicate walker" sentinel relies on this encapsulation. Pass an
    explicit ``tu_info`` only from parity tests that want to reuse a
    pre-built translation unit (e.g. ``discover.py`` integration).

    The template-typedef walk applies
    ``dedupeTemplateTypedefsByCanonical`` (single source of truth in
    ``pipeline.generate``) so any future canonical-collapsing logic
    lands in exactly one place. The handle-alias drop rule and the
    LProps always-include list match the legacy script byte-for-byte
    — moved here so both consumers see the same final typedef set.
    """
    import clang.cindex

    from filter.filterPackages import filterPackages
    from ocjs_bindgen.config.paths import occtBasePath
    from ocjs_bindgen.filters.typedefs import isHandleTemplateTypedef
    from ocjs_bindgen.naming import getClassJsPublicName, getEnumJsPublicName
    from ocjs_bindgen.pipeline.generate import (
        SkipException,
        dedupeTemplateTypedefsByCanonical,
        processTemplate,
    )
    from ocjs_bindgen.predicates import shouldProcessClass

    if tu_info is None:
        from ocjs_bindgen.ast import TuInfo
        tu_info = TuInfo("")

    classes: dict[str, str] = {}
    skipped_classes: set[str] = set()
    seen_class_cursors: set[int] = set()

    for child in tu_info.allChildren:
        if child.kind not in (
            clang.cindex.CursorKind.CLASS_DECL,
            clang.cindex.CursorKind.STRUCT_DECL,
        ):
            continue
        cur_id = id(child)
        if cur_id in seen_class_cursors:
            continue
        seen_class_cursors.add(cur_id)
        if child.extent.start.file is None:
            continue
        if not child.extent.start.file.name.startswith(occtBasePath):
            continue
        pkg = os.path.basename(os.path.dirname(child.location.file.name))
        if not filterPackages(pkg):
            continue
        if cfg.excluded_packages and pkg in cfg.excluded_packages:
            continue
        if not shouldProcessClass(child, occtBasePath):
            continue
        if child.spelling == "" or child.spelling.startswith("("):
            continue
        name = getClassJsPublicName(child)
        if is_excluded(name, cfg):
            skipped_classes.add(name)
            continue
        classes.setdefault(name, pkg)

    enums: dict[str, str] = {}
    for child in tu_info.enums:
        if child.extent.start.file is None:
            continue
        if not child.extent.start.file.name.startswith(occtBasePath):
            continue
        pkg = os.path.basename(os.path.dirname(child.location.file.name))
        if not filterPackages(pkg):
            continue
        if cfg.excluded_packages and pkg in cfg.excluded_packages:
            continue
        if child.spelling == "" or child.spelling.startswith("("):
            continue
        if child.kind != clang.cindex.CursorKind.ENUM_DECL:
            continue
        name = getEnumJsPublicName(child)
        if is_excluded(name, cfg):
            skipped_classes.add(name)
            continue
        enums[name] = pkg

    # Aliases that the binding generator unconditionally skips —
    # see scripts/enumerate-symbols.py's original _FILTERED_TEMPLATE_TYPEDEFS.
    _FILTERED_TEMPLATE_TYPEDEFS = frozenset({
        "TColStd_PackedMapOfInteger",
        "TColStd_SequenceOfAddress",
        "TopTools_IndexedDataMapOfShapeAddress",
    })
    _ALWAYS_INCLUDE_TEMPLATE_TYPEDEFS: dict[str, str] = {
        "GeomLProp_SLProps":   "GeomLProp",
        "GeomLProp_CLProps":   "GeomLProp",
        "GeomLProp_CLProps2d": "GeomLProp",
        "BRepLProp_SLProps":   "BRepLProp",
        "BRepLProp_CLProps":   "BRepLProp",
        "HLRBRep_SLProps":     "HLRBRep",
    }

    deduped_template_typedefs = dedupeTemplateTypedefsByCanonical(
        tu_info.templateTypedefs
    )

    typedefs: dict[str, str] = {}
    for child in deduped_template_typedefs:
        if child.extent.start.file is None:
            continue
        if not child.extent.start.file.name.startswith(occtBasePath):
            continue
        pkg = os.path.basename(os.path.dirname(child.location.file.name))
        if not filterPackages(pkg):
            continue
        if cfg.excluded_packages and pkg in cfg.excluded_packages:
            continue
        bare_name = child.spelling
        if bare_name in _FILTERED_TEMPLATE_TYPEDEFS:
            continue
        if (
            bare_name in cfg.excluded_typedefs
            or bare_name in cfg.excluded_template_typedefs
        ):
            continue
        # Use the JS-public encoded name so namespace-scoped typedefs
        # (e.g. ``IMeshData::Array1OfInteger``) carry the same
        # ``Namespace_Member`` prefix the bindings codegen emits via
        # ``getClassJsPublicName``. Without this, the enumerator
        # wrote bare ``Array1OfInteger`` to the YAML while the codegen
        # produced ``IMeshData_Array1OfInteger.cpp`` — the link step
        # then raised "symbol has no compiled .o file" for every
        # namespace-scoped typedef once the consolidated enumerator
        # gained the full deps env-var visibility (F5).
        name = getClassJsPublicName(child)
        if is_excluded(name, cfg):
            skipped_classes.add(name)
            continue
        # Smart-handle aliases are type metadata, not independent Embind
        # classes. The pointee class's smart_ptr registration owns the same
        # canonical C++ TypeID regardless of the alias's spelling.
        if isHandleTemplateTypedef(child):
            continue
        # Skip typedefs the codegen's ``processTemplate`` would reject.
        # The codegen catches ``SkipException`` and emits nothing —
        # those aliases never produce a ``.cpp``/``.o`` artifact, so
        # listing them in the YAML guarantees a verifyBindings "no
        # compiled .o file" failure at link time. The most common
        # cause is an OCCT V8 ``using A = T<X>;`` against a primary
        # template with a defaulted non-type parameter (e.g.
        # ``BRepGraph_RefsIterator::RefIterator<RefType,
        # bool TheFullTraverse = false>``): libclang's canonical drops
        # the defaulted scalar, so ``_split_template_args`` returns a
        # one-element list and the non-type slot raises "Cannot
        # extract non-type template argument [1]". Mirror the
        # codegen's filter here so the enumerator never publishes
        # symbols the bindings layer cannot honour.
        try:
            processTemplate(child)
        except SkipException:
            continue
        except Exception:
            continue
        typedefs[name] = pkg

    for forced_name, forced_pkg in _ALWAYS_INCLUDE_TEMPLATE_TYPEDEFS.items():
        if forced_name in cfg.excluded_typedefs or forced_name in cfg.excluded_template_typedefs:
            continue
        if is_excluded(forced_name, cfg):
            skipped_classes.add(forced_name)
            continue
        typedefs.setdefault(forced_name, forced_pkg)

    handle_classes: set[str] = set()
    transient_cache: dict[str, bool] = {}

    def _is_transient_derived(cursor) -> bool:
        name = cursor.spelling
        if name in transient_cache:
            return transient_cache[name]
        if name == "Standard_Transient":
            transient_cache[name] = True
            return True
        transient_cache[name] = False
        for child_cursor in cursor.get_children():
            if child_cursor.kind == clang.cindex.CursorKind.CXX_BASE_SPECIFIER:
                base_def = child_cursor.get_definition()
                if base_def is not None and _is_transient_derived(base_def):
                    transient_cache[name] = True
                    return True
                base_name = child_cursor.type.spelling.replace("class ", "")
                if base_name == "Standard_Transient":
                    transient_cache[name] = True
                    return True
        return False

    for cursor in tu_info.classDict.values():
        if cursor.kind not in (
            clang.cindex.CursorKind.CLASS_DECL,
            clang.cindex.CursorKind.STRUCT_DECL,
        ):
            continue
        js_name = getClassJsPublicName(cursor)
        if js_name in classes and _is_transient_derived(cursor):
            handle_classes.add(js_name)

    return EnumerationResult(
        classes=classes,
        enums=enums,
        typedefs=typedefs,
        skipped_classes=skipped_classes,
        handle_classes=handle_classes,
    )
