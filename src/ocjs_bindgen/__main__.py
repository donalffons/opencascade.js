"""CLI entry point for the libcascade binding generator.

Usage:
    python -m ocjs_bindgen --config bindgen-filters.yaml
    python -m ocjs_bindgen --config bindgen-filters.yaml --custom-code "typedef ..." --custom-only
"""

import argparse
import os
import sys


def main():
    parser = argparse.ArgumentParser(
        prog="ocjs-bindgen",
        description="Generate Embind C++ and TypeScript bindings from OCCT headers",
    )
    parser.add_argument(
        "--config", "-c",
        default=None,
        help="Path to bindgen-filters.yaml (default: $OCJS_BINDGEN_CONFIG or auto-detect)",
    )
    parser.add_argument(
        "--output", "-o",
        default=None,
        help="Output directory for generated bindings (default: $OCJS_ROOT/build/bindings)",
    )
    parser.add_argument(
        "--custom-code",
        default="",
        help="Additional C++ code (e.g. Handle typedefs) to parse",
    )
    parser.add_argument(
        "--custom-only",
        action="store_true",
        help="Only generate bindings for custom code (skip OCCT headers)",
    )
    parser.add_argument(
        "--no-deprecated",
        action="store_true",
        help="Exclude all deprecated OCCT symbols regardless of YAML config",
    )
    args = parser.parse_args()

    from ocjs_bindgen.config import get_config
    config = get_config(args.config)

    if args.no_deprecated:
        config.set_no_deprecated()

    # Patch filter functions BEFORE importing generateBindings / bindings / Common,
    # because those modules bind filter functions at import time.
    from ocjs_bindgen import filters
    filters.install(config)

    # `src/` still hosts `filter/` and other shell-script-callable helpers
    # (`compileBindings.py`, `extract-docs.py`, `provenance.py`,
    # `patches/patch_*.py`) that PR 3.4 will migrate into
    # `ocjs_bindgen/`. Keeping `src/` on `sys.path` lets `from filter.X import Y`
    # imports inside the bindgen continue to resolve.
    src_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    if src_dir not in sys.path:
        sys.path.insert(0, src_dir)

    from ocjs_bindgen.pipeline import generate as generateBindings

    # Merge template typedef exclusions from config into the hardcoded set
    if config.excluded_template_typedefs:
        generateBindings._FILTERED_TEMPLATE_TYPEDEFS = (
            generateBindings._FILTERED_TEMPLATE_TYPEDEFS | config.excluded_template_typedefs
        )

    if args.output:
        generateBindings.libraryBasePath = args.output
        generateBindings.buildDirectory = os.path.dirname(args.output)

    if args.custom_only and args.custom_code:
        generateBindings.generateCustomCodeBindings(args.custom_code)
    else:
        _run_full_pipeline(generateBindings)

    _report_any_resolutions()
    print("Binding generation complete.", flush=True)


def _run_full_pipeline(gen):
    """Run the full binding generation pipeline with two-phase NCollection discovery."""
    from ocjs_bindgen.ast import TuInfo
    from ocjs_bindgen.codegen.bindings import TypescriptBindings
    from ocjs_bindgen.config.paths import BUILD_DIR, ocIncludeStatements
    from ocjs_bindgen.discover import discover_ncollection_types, generate_using_declarations, write_manifest

    os.makedirs(gen.libraryBasePath, exist_ok=True)
    # Phase 1: Discovery scan — parse TU without using declarations to find
    # NCollection template instantiations in bound class method signatures
    scan_tuInfo = TuInfo("")
    discovered = discover_ncollection_types(scan_tuInfo, gen.filterClasses)
    using_decls = generate_using_declarations(discovered)
    if discovered:
        write_manifest(
            discovered,
            os.environ.get("OCJS_MANIFEST_DIR", BUILD_DIR),
            tuInfo=scan_tuInfo,
        )

    # Phase 2: Re-parse TU with auto-generated using declarations so the AST
    # sees the new type aliases
    tuInfo = TuInfo(using_decls)

    # Pre-compute global export names before processing so that
    # `TypescriptBindings.resolve_type` can recognize cross-class references
    # as exported symbols instead of emitting `unknown` for them.
    TypescriptBindings.prepare_known_exports(tuInfo, gen.filterClasses, gen.filterTemplates)

    embindPreamble = ocIncludeStatements + "\n" + gen.referenceTypeTemplateDefs
    if using_decls:
        embindPreamble += "\n" + using_decls

    gen.process(
        tuInfo, ".cpp",
        gen.embindGenerationFuncClasses,
        gen.embindGenerationFuncTemplates,
        gen.embindGenerationFuncEnums,
        embindPreamble, False,
    )
    gen.process(
        tuInfo, ".d.ts.json",
        gen.typescriptGenerationFuncClasses,
        gen.typescriptGenerationFuncTemplates,
        gen.typescriptGenerationFuncEnums,
        "", False,
    )


def _report_any_resolutions():
    """Report all type resolution failures collected during generation.

    PR 1.6 — reads from the :data:`DIAGNOSTICS` singleton instead of
    ``TypescriptBindings._any_reasons``. The shape is preserved bit-for-bit
    so ``any-type-report.json`` content stays byte-identical.
    """
    from ocjs_bindgen.diagnostics import DIAGNOSTICS
    any_reasons = DIAGNOSTICS.any_reasons
    if not any_reasons:
        return
    import json
    total_any = 0
    report = {}
    for reason, types in sorted(any_reasons.items()):
        subtotal = sum(types.values())
        total_any += subtotal
        ordered_types = sorted(types.items(), key=lambda item: (-item[1], item[0]))
        report[reason] = {"count": subtotal, "types": dict(ordered_types)}
        print(f"\n  [{reason}] ({subtotal} occurrences):", flush=True)
        for t, count in ordered_types[:15]:
            print(f"    {t}: {count}", flush=True)
        remaining = len(types) - 15
        if remaining > 0:
            print(f"    ... and {remaining} more unique types", flush=True)
    print(f"\n  Total any resolutions: {total_any}", flush=True)

    report_path = os.path.join(
        os.environ.get(
            "OCJS_MANIFEST_DIR",
            os.path.join(os.environ.get("OCJS_ROOT", "."), "build"),
        ),
        "any-type-report.json",
    )
    os.makedirs(os.path.dirname(report_path), exist_ok=True)
    with open(report_path, "w") as f:
        json.dump(report, f, indent=2)
    print(f"  Report written to {report_path}", flush=True)


if __name__ == "__main__":
    main()
