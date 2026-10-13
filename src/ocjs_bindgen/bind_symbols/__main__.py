"""CLI entry point for ``python -m ocjs_bindgen.bind_symbols``.

Driven by ``build-wasm.sh bind-symbols <yaml-path>``; resolves the build
dir from ``BUILD_DIR`` (the same env the rest of the link toolchain reads)
falling back to ``<OCJS_ROOT>/build`` so direct invocations still work.
"""

from __future__ import annotations

import sys
from argparse import ArgumentParser

from ocjs_bindgen.bind_symbols import main as run
from ocjs_bindgen.config.paths import BUILD_DIR


def cli() -> int:
    parser = ArgumentParser(
        prog="python -m ocjs_bindgen.bind_symbols",
        description=(
            "Extract Embind registration names from BUILTIN_BINDINGS_SOURCE "
            "+ the consumer YAML's additionalBindFiles via libclang AST, "
            "writing the union to build/additional-bind-symbols.json."
        ),
    )
    parser.add_argument(
        "yaml_path",
        metavar="FILE.yml",
        help="Custom build YAML config (consumed by yaml_build.runBuild)",
    )
    parser.add_argument(
        "--build-dir",
        default=BUILD_DIR,
        help="Override the build directory (default: $BUILD_DIR or repo build/)",
    )
    args = parser.parse_args()
    run(args.yaml_path, args.build_dir)
    return 0


if __name__ == "__main__":
    sys.exit(cli())
