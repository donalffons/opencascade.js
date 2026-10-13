#!/usr/bin/env python3
"""Idempotently add explicit noexcept destructors to OCCT classes with large
generated destructors.

When a class has many Handle<> (reference-counted pointer) members and no
explicit destructor, the compiler generates an implicit destructor at every
destruction site.  With -O3, LLVM inlines these destructors and generates
combinatorial EH cleanup code for all Handle<> members, producing functions
that are tens to hundreds of KB.  By adding explicit out-of-line `noexcept`
destructors, the compiler generates them once and skips landing-pad code.

Targets are the largest destructors from Finding 5 of the WASM binary size
forensics research (total ~627 KB across the top 30 functions).

Reversible via `git checkout` in the OCCT tree.
"""

import os
import sys
from dataclasses import dataclass

SENTINEL = "OCJS_PATCH_NOEXCEPT_DTOR"


@dataclass
class PatchTarget:
    class_name: str
    hxx_rel: str | None  # relative path from OCCT root to header (None for local classes)
    cxx_rel: str  # relative path from OCCT root to source

    # Header patching
    hxx_marker: str | None  # line to search for in header (insert dtor after this)
    hxx_is_override: bool = False  # whether destructor needs `override` specifier

    # Source patching
    cxx_marker: str | None = None  # line to search for in source (insert dtor after this)

    # For classes that already have an explicit destructor (just need noexcept added)
    existing_dtor_decl: str | None = None  # existing declaration to replace in header
    existing_dtor_def: str | None = None  # existing definition to replace in source

    # For local classes defined entirely in a .cxx file
    existing_dtor_inline: str | None = None  # inline dtor to replace in .cxx


TARGETS = [
    # #4 in Finding 5: 222 KB — no explicit dtor, has RTTI
    PatchTarget(
        class_name="Resource_Manager",
        hxx_rel="src/FoundationClasses/TKernel/Resource/Resource_Manager.hxx",
        cxx_rel="src/FoundationClasses/TKernel/Resource/Resource_Manager.cxx",
        hxx_marker="Standard_EXPORT Resource_Manager();",
        cxx_marker="IMPLEMENT_STANDARD_RTTIEXT(Resource_Manager, Standard_Transient)",
    ),

    # #6 in Finding 5: 134 KB — local class in .cxx with existing `= default` dtor
    PatchTarget(
        class_name="BOPAlgo_ShapeSolid",
        hxx_rel=None,
        cxx_rel="src/ModelingAlgorithms/TKBO/BOPAlgo/BOPAlgo_CheckerSI_1.cxx",
        hxx_marker=None,
        existing_dtor_inline="virtual ~BOPAlgo_ShapeSolid() = default;",
    ),

    # #9 in Finding 5: 106 KB — no explicit dtor, has RTTI
    PatchTarget(
        class_name="BRepFill_NSections",
        hxx_rel="src/ModelingAlgorithms/TKBool/BRepFill/BRepFill_NSections.hxx",
        cxx_rel="src/ModelingAlgorithms/TKBool/BRepFill/BRepFill_NSections.cxx",
        hxx_marker="const bool                                Build = true);",
        cxx_marker="IMPLEMENT_STANDARD_RTTIEXT(BRepFill_NSections, BRepFill_SectionLaw)",
    ),

    # #16 in Finding 5: 69 KB — no explicit dtor, no RTTI
    PatchTarget(
        class_name="BRepOffsetAPI_ThruSections",
        hxx_rel="src/ModelingAlgorithms/TKOffset/BRepOffsetAPI/BRepOffsetAPI_ThruSections.hxx",
        cxx_rel="src/ModelingAlgorithms/TKOffset/BRepOffsetAPI/BRepOffsetAPI_ThruSections.cxx",
        hxx_marker="const double pres3d  = 1.0e-06);",
        cxx_marker="BRepOffsetAPI_ThruSections::BRepOffsetAPI_ThruSections(const bool   isSolid,",
    ),

    # #26 in Finding 5: 48 KB — already has explicit dtor `override`, needs noexcept
    PatchTarget(
        class_name="BRepMeshData_Edge",
        hxx_rel="src/ModelingAlgorithms/TKMesh/BRepMeshData/BRepMeshData_Edge.hxx",
        cxx_rel="src/ModelingAlgorithms/TKMesh/BRepMeshData/BRepMeshData_Edge.cxx",
        hxx_marker=None,
        hxx_is_override=True,
        existing_dtor_decl="Standard_EXPORT ~BRepMeshData_Edge() override;",
        existing_dtor_def="BRepMeshData_Edge::~BRepMeshData_Edge() = default;",
    ),

    # #29 in Finding 5: 48 KB — no explicit dtor, has RTTI
    PatchTarget(
        class_name="BRepBlend_Line",
        hxx_rel="src/ModelingAlgorithms/TKFillet/BRepBlend/BRepBlend_Line.hxx",
        cxx_rel="src/ModelingAlgorithms/TKFillet/BRepBlend/BRepBlend_Line.cxx",
        hxx_marker="Standard_EXPORT BRepBlend_Line();",
        cxx_marker="IMPLEMENT_STANDARD_RTTIEXT(BRepBlend_Line, Standard_Transient)",
    ),

    PatchTarget(
        class_name="STEPCAFControl_ActorWrite",
        hxx_rel="src/DataExchange/TKDESTEP/STEPCAFControl/STEPCAFControl_ActorWrite.hxx",
        cxx_rel="src/DataExchange/TKDESTEP/STEPCAFControl/STEPCAFControl_ActorWrite.cxx",
        hxx_marker="Standard_EXPORT STEPCAFControl_ActorWrite();",
        cxx_marker="IMPLEMENT_STANDARD_RTTIEXT(STEPCAFControl_ActorWrite, STEPControl_ActorWrite)",
    ),
]


def _read(path: str) -> str:
    with open(path, encoding="utf-8") as f:
        return f.read()


def _write(path: str, content: str) -> None:
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)


def patch_add_dtor_declaration(hxx_path: str, target: PatchTarget) -> bool:
    """Add a new noexcept destructor declaration to a header file."""
    content = _read(hxx_path)

    if SENTINEL in content:
        print(f"  Already patched (declaration): {hxx_path}")
        return True

    if not target.hxx_marker or target.hxx_marker not in content:
        print(f"  ERROR: marker not found in {hxx_path}: {target.hxx_marker!r}")
        return False

    override = " override" if target.hxx_is_override else ""
    dtor_decl = f"  Standard_EXPORT ~{target.class_name}() noexcept{override}; // {SENTINEL}"
    replacement = f"{target.hxx_marker}\n\n{dtor_decl}"
    _write(hxx_path, content.replace(target.hxx_marker, replacement, 1))
    print(f"  Patched (declaration): {hxx_path}")
    return True


def patch_replace_dtor_declaration(hxx_path: str, target: PatchTarget) -> bool:
    """Replace an existing destructor declaration with a noexcept version."""
    content = _read(hxx_path)

    if SENTINEL in content:
        print(f"  Already patched (declaration): {hxx_path}")
        return True

    old_decl = target.existing_dtor_decl
    if not old_decl or old_decl not in content:
        print(f"  ERROR: existing dtor declaration not found in {hxx_path}: {old_decl!r}")
        return False

    override = " override" if target.hxx_is_override else ""
    new_decl = f"Standard_EXPORT ~{target.class_name}() noexcept{override}; // {SENTINEL}"
    _write(hxx_path, content.replace(old_decl, new_decl, 1))
    print(f"  Patched (declaration replaced): {hxx_path}")
    return True


def patch_add_dtor_definition(cxx_path: str, target: PatchTarget) -> bool:
    """Add a noexcept destructor definition to a source file."""
    content = _read(cxx_path)

    if SENTINEL in content:
        print(f"  Already patched (definition): {cxx_path}")
        return True

    marker = target.cxx_marker
    if not marker or marker not in content:
        print(f"  ERROR: marker not found in {cxx_path}: {marker!r}")
        return False

    dtor_def = (
        f"\n// {SENTINEL}: explicit noexcept destructor eliminates EH landing pads\n"
        f"{target.class_name}::~{target.class_name}() noexcept = default;\n"
    )

    # For constructor markers, insert *before* the marker line
    if f"{target.class_name}::{target.class_name}(" in marker:
        replacement = f"{dtor_def}\n{marker}"
    else:
        replacement = f"{marker}{dtor_def}"

    _write(cxx_path, content.replace(marker, replacement, 1))
    print(f"  Patched (definition): {cxx_path}")
    return True


def patch_replace_dtor_definition(cxx_path: str, target: PatchTarget) -> bool:
    """Replace an existing destructor definition with a noexcept version."""
    content = _read(cxx_path)

    if SENTINEL in content:
        print(f"  Already patched (definition): {cxx_path}")
        return True

    old_def = target.existing_dtor_def
    if not old_def or old_def not in content:
        print(f"  ERROR: existing dtor definition not found in {cxx_path}: {old_def!r}")
        return False

    new_def = (
        f"// {SENTINEL}: explicit noexcept destructor eliminates EH landing pads\n"
        f"{target.class_name}::~{target.class_name}() noexcept = default;"
    )
    _write(cxx_path, content.replace(old_def, new_def, 1))
    print(f"  Patched (definition replaced): {cxx_path}")
    return True


def patch_inline_dtor(cxx_path: str, target: PatchTarget) -> bool:
    """Replace an inline destructor with a noexcept version (local classes)."""
    content = _read(cxx_path)

    if SENTINEL in content:
        print(f"  Already patched (inline): {cxx_path}")
        return True

    old_inline = target.existing_dtor_inline
    if not old_inline or old_inline not in content:
        print(f"  ERROR: inline dtor not found in {cxx_path}: {old_inline!r}")
        return False

    new_inline = f"virtual ~{target.class_name}() noexcept = default; // {SENTINEL}"
    _write(cxx_path, content.replace(old_inline, new_inline, 1))
    print(f"  Patched (inline): {cxx_path}")
    return True


def patch_target(occt_root: str, target: PatchTarget) -> bool:
    cxx_path = os.path.join(occt_root, target.cxx_rel)
    if not os.path.isfile(cxx_path):
        print(f"  ERROR: {cxx_path} not found")
        return False

    ok = True

    # Case 1: local class with inline dtor (no separate header)
    if target.existing_dtor_inline:
        return patch_inline_dtor(cxx_path, target)

    # Case 2: class with header + source
    if target.hxx_rel:
        hxx_path = os.path.join(occt_root, target.hxx_rel)
        if not os.path.isfile(hxx_path):
            print(f"  ERROR: {hxx_path} not found")
            return False

        if target.existing_dtor_decl:
            ok = patch_replace_dtor_declaration(hxx_path, target) and ok
        else:
            ok = patch_add_dtor_declaration(hxx_path, target) and ok

    # Source file: replace existing or add new definition
    if target.existing_dtor_def:
        ok = patch_replace_dtor_definition(cxx_path, target) and ok
    elif target.cxx_marker:
        ok = patch_add_dtor_definition(cxx_path, target) and ok

    return ok


def main() -> None:
    occt_root = os.environ.get("OCCT_ROOT", "")
    if not occt_root:
        print("ERROR: OCCT_ROOT not set")
        sys.exit(1)

    print(f"Patching {len(TARGETS)} OCCT classes with noexcept destructors...")
    all_ok = True

    for target in TARGETS:
        print(f"\n[{target.class_name}]")
        ok = patch_target(occt_root, target)
        if not ok:
            all_ok = False

    if not all_ok:
        print("\nERROR: Some patches failed")
        sys.exit(1)

    print(f"\nAll {len(TARGETS)} classes patched successfully.")


if __name__ == "__main__":
    main()
