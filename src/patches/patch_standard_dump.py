#!/usr/bin/env python3
"""Idempotently patch Standard_Dump.hxx to stub OCCT_DUMP_* macros under OCCT_NO_DUMP.

When -DOCCT_NO_DUMP is defined at compile time, all 19 dump/init macros expand
to no-ops, eliminating ~200-500 KB of debug JSON serialization code from the
WASM binary. The patch is reversible via `git checkout` in the OCCT repo.
"""

import os
import sys

SENTINEL = "OCCT_NO_DUMP"

STUB_BLOCK = r"""
#ifdef OCCT_NO_DUMP
#define OCCT_CLASS_NAME(theClass) ""
#define OCCT_DUMP_CLASS_BEGIN(theOStream, theField) { }
#define OCCT_DUMP_TRANSIENT_CLASS_BEGIN(theOStream) { }
#define OCCT_DUMP_FIELD_VALUE_NUMERICAL(theOStream, theField) { }
#define OCCT_DUMP_FIELD_VALUE_NUMERICAL_INC(theOStream, theField, theIncName) { }
#define OCCT_INIT_FIELD_VALUE_REAL(theOStream, theStreamPos, theField) { }
#define OCCT_INIT_FIELD_VALUE_INTEGER(theOStream, theStreamPos, theField) { }
#define OCCT_DUMP_FIELD_VALUE_STRING(theOStream, theField) { }
#define OCCT_DUMP_FIELD_VALUE_POINTER(theOStream, theField) { }
#define OCCT_DUMP_FIELD_VALUE_GUID(theOStream, theField) { }
#define OCCT_DUMP_FIELD_VALUES_DUMPED(theOStream, theDepth, theField) { }
#define OCCT_DUMP_FIELD_VALUES_DUMPED_INC(theOStream, theDepth, theField, theIncName) { }
#define OCCT_INIT_FIELD_VALUES_DUMPED(theSStream, theStreamPos, theField) { }
#define OCCT_DUMP_STREAM_VALUE_DUMPED(theOStream, theField) { }
#define OCCT_DUMP_FIELD_VALUES_NUMERICAL(theOStream, theName, theCount, ...) { }
#define OCCT_DUMP_FIELD_VALUES_STRING(theOStream, theName, theCount, ...) { }
#define OCCT_DUMP_BASE_CLASS(theOStream, theDepth, theField) { }
#define OCCT_DUMP_VECTOR_CLASS(theOStream, theName, theCount, ...) { }
#define OCCT_INIT_VECTOR_CLASS(theOStream, theName, theStreamPos, theCount, ...) { }
#else /* !OCCT_NO_DUMP */
"""

ENDIF_LINE = "#endif /* !OCCT_NO_DUMP */\n"

FIRST_MACRO_COMMENT = "//! Converts the class type into a string value"
ENUM_LINE = "//! Kind of key in Json string"


def patch(filepath: str) -> bool:
    with open(filepath, "r") as f:
        content = f.read()

    if SENTINEL in content:
        print(f"Already patched: {filepath}")
        return True

    lines = content.split("\n")

    insert_before = None
    endif_before = None
    for i, line in enumerate(lines):
        if FIRST_MACRO_COMMENT in line and insert_before is None:
            insert_before = i
        if ENUM_LINE in line and endif_before is None:
            endif_before = i

    if insert_before is None or endif_before is None:
        print(f"ERROR: Could not find patch insertion points in {filepath}")
        print(f"  insert_before={insert_before}, endif_before={endif_before}")
        return False

    patched = []
    patched.extend(lines[:insert_before])
    for stub_line in STUB_BLOCK.strip("\n").split("\n"):
        patched.append(stub_line)
    patched.append("")
    patched.extend(lines[insert_before:endif_before])
    patched.append(ENDIF_LINE.rstrip("\n"))
    patched.append("")
    patched.extend(lines[endif_before:])

    with open(filepath, "w") as f:
        f.write("\n".join(patched))

    print(f"Patched: {filepath} ({endif_before - insert_before} lines wrapped in #ifdef)")
    return True


def main():
    occt_root = os.environ.get("OCCT_ROOT", "")
    if not occt_root:
        print("ERROR: OCCT_ROOT not set")
        sys.exit(1)

    target = os.path.join(
        occt_root,
        "src", "FoundationClasses", "TKernel", "Standard", "Standard_Dump.hxx",
    )
    if not os.path.isfile(target):
        print(f"ERROR: {target} not found")
        sys.exit(1)

    if not patch(target):
        sys.exit(1)


if __name__ == "__main__":
    main()
