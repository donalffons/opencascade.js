#!/usr/bin/env python3
"""Idempotently patch STEPCAFControl_Controller.cxx.

Replaces IMPLEMENT_STANDARD_RTTIEXT with explicit get_type_descriptor() /
DynamicType() that share a single file-local static descriptor via one helper.
This avoids Emscripten/WASM duplicating the lazy static-init / type-registration
path that profiling attributes to an oversized DynamicType() symbol.

Reversible via `git checkout` in the OCCT tree.
"""

import os
import sys

RTTI_SENTINEL = "OCJS_STEPCAF_RTTI_PATCH_MARKER"

OLD_MACRO = "IMPLEMENT_STANDARD_RTTIEXT(STEPCAFControl_Controller, STEPControl_Controller)"

REPLACEMENT = f"""\
// {RTTI_SENTINEL}: explicit RTTI replaces IMPLEMENT_STANDARD_RTTIEXT (see src/patches/patch_stepcaf_dyntype.py)
OCCT_CHECK_BASE_CLASS(STEPCAFControl_Controller, STEPControl_Controller)
namespace
{{
const occ::handle<Standard_Type>& steocaf_control_controller_type_descriptor()
{{
  static const occ::handle<Standard_Type> THE_TYPE_INSTANCE =
    Standard_Type::Register(typeid(STEPCAFControl_Controller),
                            STEPCAFControl_Controller::get_type_name(),
                            sizeof(STEPCAFControl_Controller),
                            STEPControl_Controller::get_type_descriptor());
  return THE_TYPE_INSTANCE;
}}
}} // namespace

const occ::handle<Standard_Type>& STEPCAFControl_Controller::get_type_descriptor()
{{
  return steocaf_control_controller_type_descriptor();
}}

const occ::handle<Standard_Type>& STEPCAFControl_Controller::DynamicType() const
{{
  return steocaf_control_controller_type_descriptor();
}}
"""

def ensure_rtti_patch(content: str) -> tuple[str, bool]:
    if RTTI_SENTINEL in content:
        return content, False

    if OLD_MACRO not in content:
        raise RuntimeError(f"Expected macro not found: {OLD_MACRO!r}")

    return content.replace(OLD_MACRO, REPLACEMENT.rstrip("\n"), 1), True


def patch(filepath: str) -> bool:
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    try:
        new_content, patched_rtti = ensure_rtti_patch(content)
    except RuntimeError as error:
        print(f"ERROR: {error}")
        return False

    if new_content == content:
        print(f"Already patched: {filepath}")
        return True

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(new_content)

    print(f"Patched: {filepath}")
    if patched_rtti:
        print("  Replaced IMPLEMENT_STANDARD_RTTIEXT with explicit get_type_descriptor() +")
        print("  DynamicType() sharing steocaf_control_controller_type_descriptor() (single static).")
    return True


def main():
    occt_root = os.environ.get("OCCT_ROOT", "")
    if not occt_root:
        print("ERROR: OCCT_ROOT not set")
        sys.exit(1)

    target = os.path.join(
        occt_root,
        "src",
        "DataExchange",
        "TKDESTEP",
        "STEPCAFControl",
        "STEPCAFControl_Controller.cxx",
    )
    if not os.path.isfile(target):
        print(f"ERROR: {target} not found")
        sys.exit(1)

    if not patch(target):
        sys.exit(1)


if __name__ == "__main__":
    main()
