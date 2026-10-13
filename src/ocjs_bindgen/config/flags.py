"""Build-flag state machine for the WASM compile/link drivers.

Extracted from `src/Common.py` as part of Phase 1 PR 1.1 of the OCJS Bindgen
Modular Refactor. Holds the environment-derived compile-flag constants (SIMD,
WASM exceptions, extra cflags) plus the on-disk `build-flags.json` write/check
pair that guards against mixing artifacts compiled under incompatible flag
sets.

The split with `paths.py` mirrors the import-graph the blueprint identified:
flag handling is consumed only by the compile/link drivers (`buildPch`,
`compileBindings`, `buildFromYaml.link_with_emcc`), whereas path discovery is
consumed by every layer (including AST parsing and codegen).

`paths.py` re-exports `write_build_flags` so existing callers that imported
the symbol from `Common` continue to work via the shim until Phase 1 PR 1.8
deletes the legacy module.
"""

from __future__ import annotations

import json
import os
from pathlib import Path

from ocjs_bindgen.build_state import _write_json_atomic

USE_WASM_EXCEPTIONS: bool = os.environ.get("OCJS_EXCEPTIONS", "0") == "1"
_EH_MODE: str = os.environ.get("OCJS_EH_MODE", "wasm")

if USE_WASM_EXCEPTIONS:
    WASM_EXCEPTION_FLAGS: list[str] = (
        ["-fexceptions"] if _EH_MODE == "js" else ["-fwasm-exceptions"]
    )
    WASM_EXCEPTION_FLAGS.append("-DOCJS_EXCEPTIONS_ENABLED=1")
else:
    WASM_EXCEPTION_FLAGS = ["-sSUPPORT_LONGJMP=0", "-sDISABLE_EXCEPTION_CATCHING=1"]

USE_SIMD: bool = os.environ.get("OCJS_SIMD", "0") == "1"
USE_RELAXED_SIMD: bool = USE_SIMD and os.environ.get("OCJS_RELAXED_SIMD", "0") == "1"

SIMD_FLAGS: list[str] = []
if USE_SIMD:
    SIMD_FLAGS.append("-msimd128")
if USE_RELAXED_SIMD:
    SIMD_FLAGS.append("-mrelaxed-simd")


def _parse_extra_compile_flags() -> list[str]:
    flags: list[str] = []
    defines = os.environ.get("OCJS_DEFINES", "")
    if defines:
        flags.extend(f"-D{d.strip()}" for d in defines.split(",") if d.strip())
    undefines = os.environ.get("OCJS_UNDEFINES", "")
    if undefines:
        flags.extend(f"-U{u.strip()}" for u in undefines.split(",") if u.strip())
    return flags


EXTRA_COMPILE_FLAGS: list[str] = _parse_extra_compile_flags()


PATH_PREFIX_FLAGS: list[str] = []
for _root_env, _virtual_root in (
    ("OCJS_ROOT", "/ocjs"),
    ("OCCT_ROOT", "/occt"),
    ("EMSDK", "/emsdk"),
):
    _actual_root = os.environ.get(_root_env)
    if not _actual_root:
        continue
    PATH_PREFIX_FLAGS.extend([
        f"-ffile-prefix-map={_actual_root}={_virtual_root}",
        f"-fmacro-prefix-map={_actual_root}={_virtual_root}",
    ])

# `BUILD_FLAGS_PATH` is derived from the `BUILD_DIR` constant in `paths.py`.
# Resolving it lazily inside the read/write helpers keeps the module
# import-graph acyclic — `flags.py` does not need to import `paths.py`.
_BUILD_FLAGS_FILENAME = "build-flags.json"


def _build_flags_path() -> str:
    """Resolve the on-disk path lazily to avoid a circular import."""
    build_dir = os.environ.get("BUILD_DIR")
    if not build_dir:
        ocjs_root = os.environ.get("OCJS_ROOT", "/opencascade.js")
        build_dir = ocjs_root + "/build"
    return os.path.join(build_dir, _BUILD_FLAGS_FILENAME)


# Keep the legacy public constant name for backwards-compatibility with
# `from Common import BUILD_FLAGS_PATH`. Resolved at import time, which
# matches the legacy semantics.
BUILD_FLAGS_PATH: str = _build_flags_path()

_BUILD_FLAG_KEYS = [
    "OCJS_OPT",
    "OCJS_EXTRA_CFLAGS",
    "OCJS_LTO",
    "OCJS_EXCEPTIONS",
    "OCJS_EH_MODE",
    "OCJS_SIMD",
    "OCJS_RELAXED_SIMD",
    "THREADING",
    "OCJS_DEFINES",
    "OCJS_UNDEFINES",
]

_BUILD_FLAG_DEFAULTS = {
    "OCJS_OPT": "-O3",
    "OCJS_EXTRA_CFLAGS": "",
    "OCJS_LTO": "1",
    "OCJS_EXCEPTIONS": "0",
    "OCJS_EH_MODE": "wasm",
    "OCJS_SIMD": "0",
    "OCJS_RELAXED_SIMD": "0",
    "THREADING": "single-threaded",
    "OCJS_DEFINES": "",
    "OCJS_UNDEFINES": "",
}


class BuildFlagMismatch(Exception):
    """Raised when the on-disk flag manifest disagrees with the environment.

    Mixing artifacts compiled under different flag sets produces silently
    broken WASM (e.g. exception-mode mismatch corrupts unwinding). The check
    is hard-fail rather than warn so the user is forced to rebuild from a
    consistent baseline.
    """


def _current_build_flags() -> dict:
    return {k: os.environ.get(k, _BUILD_FLAG_DEFAULTS[k]) for k in _BUILD_FLAG_KEYS}


def write_build_flags(path: str = "") -> None:
    if not path:
        path = BUILD_FLAGS_PATH
    flags = _current_build_flags()
    os.makedirs(os.path.dirname(path), exist_ok=True)
    _write_json_atomic(Path(path), flags)
    print(f"Build flags written to {path}")


def validate_build_flags(path: str = "") -> None:
    if not path:
        path = BUILD_FLAGS_PATH
    if not os.path.isfile(path):
        return
    with open(path) as f:
        stored = json.load(f)
    current = _current_build_flags()
    mismatches = []
    for key in _BUILD_FLAG_KEYS:
        stored_val = stored.get(key, _BUILD_FLAG_DEFAULTS[key])
        current_val = current[key]
        if stored_val != current_val:
            mismatches.append((key, current_val, stored_val))
    if not mismatches:
        return
    lines = [
        "ERROR: Build flag mismatch — artifacts in build/ were compiled with different settings.",
        "",
        f"  {'Flag':<20s} {'Environment':<20s} {'build/build-flags.json':<25s}",
        f"  {'─' * 20} {'─' * 20} {'─' * 25}",
    ]
    for key, cur, stored_val in mismatches:
        lines.append(f"  {key:<20s} {cur:<20s} {stored_val:<25s}")
    lines.extend(
        [
            "",
            "Artifacts cannot be mixed across different compile-flag configurations.",
            "",
            "To fix, choose one of:",
            "  1. Rebuild everything:  ./build-wasm.sh full <yaml>",
            "  2. Rebuild from PCH:    ./build-wasm.sh pch bindings link <yaml>",
        ]
    )
    example_key, example_val, _ = mismatches[0]
    lines.append(
        f"  3. Match the artifacts: export {example_key}={stored.get(example_key, '')}"
    )
    msg = "\n".join(lines)
    raise BuildFlagMismatch(msg)
