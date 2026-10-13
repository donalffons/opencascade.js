#!/usr/bin/env python3
"""Enumerate all bindable OCCT symbols using libclang AST parsing.

V13 RECLAIM — this script is now a thin CLI shell over
``ocjs_bindgen.enumeration`` so it shares the OCCT view with
``discover.py`` (which the build pipeline runs through ``step_generate``).
Pre-RE-SHIP the script deliberately omitted ``RAPIDJSON_ROOT`` /
``FREETYPE_ROOT`` / ``EMSDK`` env-vars to mirror "the historical phase-1
truncation it has always relied on" — that hack is gone. The dedup pass
in ``pipeline.generate.dedupeTemplateTypedefsByCanonical`` (which the
shared enumeration module applies on every template-typedef walk)
eliminates the 43-alias collision class structurally, so the full deps
env is now safe.

Parity with ``discover.py`` is enforced by
``tests/sentinel/test_enumeration_matches_discover.py``.

Usage:
    # Auto-detect OCCT at deps/OCCT (relative to the repository root)
    python3 scripts/enumerate-symbols.py

    # Explicit OCCT source path
    python3 scripts/enumerate-symbols.py --occt-root /path/to/OCCT

    # Dry-run: print stats without writing
    python3 scripts/enumerate-symbols.py --dry-run

    # Custom output path
    python3 scripts/enumerate-symbols.py -o build-configs/my-full.yml

    # Apply bindgen-filters.yaml exclusions (default: auto-detected)
    python3 scripts/enumerate-symbols.py --filters bindgen-filters.yaml
"""

import argparse
import os
import sys
import time
from pathlib import Path

import yaml

SCRIPT_DIR = Path(__file__).resolve().parent
OCJS_ROOT = SCRIPT_DIR.parent
DEFAULT_FILTERS = OCJS_ROOT / "bindgen-filters.yaml"
DEFAULT_OUTPUT = OCJS_ROOT / "build-configs" / "full.yml"

# `ocjs_bindgen` lives under `src/` and is not pip-installed for script
# consumers — prepend so `from ocjs_bindgen.enumeration import …` resolves
# before any function-scope import below runs.
_SRC_DIR = str(OCJS_ROOT / "src")
if _SRC_DIR not in sys.path:
    sys.path.insert(0, _SRC_DIR)


def load_filters(path: Path):
    """Parse the bindgen-filters.yaml ``exclude`` section into the
    ``FilterConfig`` the shared enumeration module consumes.
    """
    from ocjs_bindgen.enumeration import FilterConfig

    with open(path) as f:
        raw = yaml.safe_load(f) or {}

    exclude = raw.get("exclude", {})

    classes: set[str] = set()
    prefixes: list[str] = []
    for item in exclude.get("classes", []):
        if isinstance(item, dict) and "prefix" in item:
            prefixes.append(item["prefix"])
        elif isinstance(item, str):
            classes.add(item)

    return FilterConfig(
        excluded_classes=classes,
        excluded_class_prefixes=prefixes,
        excluded_typedefs=set(exclude.get("typedefs", [])),
        excluded_template_typedefs=set(exclude.get("template_typedefs", [])),
        excluded_headers=set(exclude.get("headers", [])),
        excluded_packages=set(exclude.get("packages", [])),
    )


def enumerate_symbols(occt_root: Path, filter_path: Path):
    """Set up the full libclang environment, parse OCCT headers, and
    return the consolidated enumeration result. Delegates every walker
    detail to ``ocjs_bindgen.enumeration``.
    """
    from ocjs_bindgen.enumeration import (
        enumerate_occt_classes,
        setup_full_environment,
    )

    setup_full_environment(OCJS_ROOT, occt_root)

    # Import below MUST come after `setup_full_environment` so
    # `ocjs_bindgen.config.paths` reads the resolved deps env-vars at
    # module-import time. Same import order the bindgen uses.
    from ocjs_bindgen.config.paths import occtBasePath

    cfg = load_filters(filter_path)

    print(f"OCCT source:  {occtBasePath}")
    print(f"Filters:      {filter_path}")
    print("Parsing OCCT headers with libclang (full deps env)...")

    t0 = time.time()
    # `enumerate_occt_classes` constructs its own TuInfo internally so the
    # script never holds a direct reference to the AST — this is what keeps
    # the V13 "no duplicate walker" sentinel green and prevents the script
    # from drifting out of sync with discover.py at the cursor-iteration
    # layer.
    result = enumerate_occt_classes(cfg)
    parse_time = time.time() - t0
    print(f"Parsed and enumerated in {parse_time:.1f}s\n")

    return result


# ── YAML generation ──────────────────────────────────────────────────


def generate_yaml(classes, enums, typedefs, handle_classes: set[str]) -> str:
    all_symbols = sorted(set(classes) | set(enums) | set(typedefs))

    lines = [
        "mainBuild:",
        "  name: opencascade_single.js",
        "  bindings:",
    ]

    for sym in all_symbols:
        lines.append(f"  - symbol: {sym}")

    # NOTE: TColStd_IndexedDataMapOfStringString and TopoDS_Bind_ are NOT
    # re-emitted here — they are the canonical responsibility of the built-in
    # binding source in src/ocjs_bindgen/embind_builtins.py. Re-registering
    # them here would emit two
    # `class_<…>("TColStd_IndexedDataMapOfStringString")` blocks — Embind
    # enforces uniqueness on JS public names and aborts Module()
    # instantiation with `BindingError: Cannot register public name 'X'
    # twice`. TopoDS_Cast (the legacy static-method namespace) remains
    # here because BUILTIN registers `TopoDS` instead under a distinct
    # JS name; both can coexist.
    lines.extend([
        "  additionalBindFiles:",
        "  - full-bindings.cpp",
        "  emccFlags:",
        # Native WASM exception handling (matches OCJS_CONFIG=single-threaded
        # in nx.json which compiles every .o with -fwasm-exceptions). Without
        # these the link emits a wasm whose runtime imports a `Tag` that the
        # generated loader never sets up, so every Module() invocation fails
        # with `LinkError: tag import requires a WebAssembly.Tag`. The
        # The explicit runtime-method exports are enforced by yaml_build.py
        # (raises if any helper is missing alongside -fwasm-exceptions).
        "  - -fwasm-exceptions",
        "  - -sEXPORT_ES6=1",
        "  - -sMODULARIZE",
        "  - -sALLOW_MEMORY_GROWTH=1",
        '  - -sEXPORTED_RUNTIME_METHODS=["FS","wasmMemory","getExceptionMessage","incrementExceptionRefcount","decrementExceptionRefcount"]',
        "  - -sINITIAL_MEMORY=128MB",
        "  - -sMAXIMUM_MEMORY=4GB",
        "  - -sUSE_FREETYPE=1",
        "  - --no-entry",
        # NOTE: -sDISABLE_EXCEPTION_CATCHING / -sDISABLE_EXCEPTION_THROWING
        # MUST NOT be set when -fwasm-exceptions is on. Emcc will warn but
        # still emit a wasm whose runtime imports a Tag (under module "a"
        # name "Mc") that the generated JS loader never wires up — so the
        # module fails to instantiate with `LinkError: tag import requires
        # a WebAssembly.Tag`. The two cannot coexist; native WASM EH owns
        # the runtime side end-to-end. (Pre-V8 builds carried these flags
        # because OCJS_EXCEPTIONS=0 was the default; they are stale now.)
        # Symbol map for stack-trace demangling in browser devtools and the
        # validate-build.py post-link verifier. Without it the wasm symbol
        # table cannot be cross-referenced against the YAML manifest.
        "  - --emit-symbol-map",
        # 8 MiB stack — OCCT's deep recursion in topology traversal and STEP
        # parsing exceeds the 64 KiB emcc default; without this, smoke tests
        # crash with `RuntimeError: call stack exhausted` on STEP imports.
        "  - -sSTACK_SIZE=8388608",
        # Enable BigInt for i64 ABI — required for OCCT's int64_t shape IDs
        # so they round-trip without precision loss across the JS boundary.
        "  - -sWASM_BIGINT",
        # Constant-evaluate global ctors at link time; shrinks startup by
        # ~30% and reduces wasm size by avoiding redundant init blocks.
        "  - -sEVAL_CTORS=2",
        # 128-bit SIMD instructions (matches OCJS_CONFIG=single-threaded in
        # nx.json and the per-.o `-msimd128` set in compile-bindings).
        "  - -msimd128",
        # Optimization level. -O3 is the production target; debug builds
        # should override via OCJS_CONFIG, never edit this line.
        "  - -O3",
    ])

    return "\n".join(lines) + "\n"


# ── CLI ───────────────────────────────────────────────────────────────


def main():
    parser = argparse.ArgumentParser(
        description="Enumerate bindable OCCT symbols via libclang and generate build-configs/full.yml"
    )
    parser.add_argument(
        "--occt-root",
        type=Path,
        default=None,
        help="Path to OCCT source checkout (default: deps/OCCT relative to OCJS root — "
             "the same tree the build pipeline compiles, kept in sync via "
             "scripts/clone-deps.sh and DEPS.json)",
    )
    parser.add_argument(
        "--filters",
        type=Path,
        default=DEFAULT_FILTERS,
        help=f"Path to bindgen-filters.yaml (default: {DEFAULT_FILTERS})",
    )
    parser.add_argument(
        "-o", "--output",
        type=Path,
        default=DEFAULT_OUTPUT,
        help=f"Output YAML path (default: {DEFAULT_OUTPUT})",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Print stats without writing the output file",
    )
    args = parser.parse_args()

    occt_root = args.occt_root
    if occt_root is None:
        occt_root = Path(os.environ.get("OCCT_ROOT", str(OCJS_ROOT / "deps" / "OCCT")))

    if not occt_root.is_dir():
        print(f"ERROR: OCCT root not found: {occt_root}", file=sys.stderr)
        print("Set --occt-root or OCCT_ROOT environment variable.", file=sys.stderr)
        sys.exit(1)

    if not (occt_root / "src").is_dir():
        print(f"ERROR: OCCT source dir not found: {occt_root / 'src'}", file=sys.stderr)
        sys.exit(1)

    if not args.filters.is_file():
        print(f"ERROR: Filter config not found: {args.filters}", file=sys.stderr)
        sys.exit(1)

    result = enumerate_symbols(occt_root, args.filters)
    classes = result.classes
    enums = result.enums
    typedefs = result.typedefs
    skipped = result.skipped_classes
    handle_classes = result.handle_classes
    total = len(classes) + len(enums) + len(typedefs)

    print(f"{'═' * 56}")
    print("  Symbol Enumeration Results (libclang AST)")
    print(f"{'═' * 56}")
    print(f"  Classes:            {len(classes):>5}")
    print(f"  Enums:              {len(enums):>5}")
    print(f"  Template typedefs:  {len(typedefs):>5}")
    print(f"  Transient-derived:  {len(handle_classes):>5} (isNull/nullify via inheritance)")
    print(f"  {'─' * 40}")
    print(f"  Total symbols:      {total:>5}")
    print(f"  Excluded classes:   {len(skipped):>5}")
    print(f"{'═' * 56}")

    if args.dry_run:
        print("\n[dry-run] No file written.")
        return

    args.output.parent.mkdir(parents=True, exist_ok=True)
    content = generate_yaml(classes, enums, typedefs, handle_classes)
    args.output.write_text(content)
    print(f"\nWrote {total} symbols to {args.output}")


if __name__ == "__main__":
    main()
