"""libclang translation-unit construction.

Single source of truth for `clang.cindex.Index.create()` + `index.parse()`.
Every other layer of the bindgen consumes the resulting TU through `TuInfo`
in `cursors.py`; nothing else should reach for libclang directly.

Behaviour preserved bit-for-bit from the legacy `TuInfo.parse` function as of
Phase 1 PR 1.2 of the OCJS Bindgen Modular Refactor.
"""

from __future__ import annotations

import clang.cindex

from ocjs_bindgen.config.paths import (
    includePathArgs,
    ocAllIncludeStatements,
    ocDeprecatedNCollectionAliasIncludeStatements,
)


def parse_with_deprecated_ncollection_aliases():
    """Build a typedef-discovery-only TU that ALSO sees Deprecated/NCollectionAliases.

    Mirrors :func:`parse` exactly except for one additional ``#include``
    block: the OCCT V8 ``Deprecated/NCollectionAliases/*.hxx`` headers
    (pure typedef forwarders like
    ``typedef NCollection_Array1<gp_Pnt> TColgp_Array1OfPnt;``).

    Used ONLY by :func:`ocjs_bindgen.discover.discover_ncollection_types`
    to populate the alias map serialised into
    ``ncollection-manifest.json::template_typedefs``. The codegen
    pipeline (:mod:`ocjs_bindgen.pipeline.generate`) still parses the
    main translation unit via :func:`parse` so it never sees the
    deprecated typedefs as binding candidates — preventing spurious
    ``class_<TColgp_Array1OfPnt>("TColgp_Array1OfPnt")`` emissions
    that would fail compile-bindings (the underlying typedef args
    can reference forward-only declarations of types that the
    bindgen never actually compiles).

    Diagnostics are suppressed because the deprecated headers
    intentionally reference OCCT-V8-removed types in a few places
    (`BOPDS_ListOfPaveBlock.hxx file not found`) — printing them on
    every discover run is noise; the unreachable typedefs are
    correctly filtered out by ``_type_is_reachable``.
    """
    index = clang.cindex.Index.create()
    return index.parse(
        "myMain.h",
        [
            "-x",
            "c++",
            "-stdlib=libc++",
            "-Wno-unused-command-line-argument",
            "-nostdinc++",
            "-D__EMSCRIPTEN__",
        ]
        + includePathArgs,
        [["myMain.h", ocAllIncludeStatements + "\n" + ocDeprecatedNCollectionAliasIncludeStatements]],
    )


def parse(custom_cpp_source: str = ""):
    """Build the synthetic `myMain.h` TU that drives all bindgen.

    The TU's primary file is a virtual `myMain.h` whose contents are the
    sorted list of OCCT include statements (from
    `ocjs_bindgen.config.paths.ocAllIncludeStatements`) followed by any
    additional C++ supplied by the caller (e.g. NCollection `using`-decls
    emitted by the Phase 1 discovery scan, or YAML `additionalCppFiles`).

    Diagnostics from libclang are printed verbatim — they are useful when
    debugging include-path or PCH issues but do not influence the bindgen
    output.
    """
    index = clang.cindex.Index.create()
    translationUnit = index.parse(
        "myMain.h",
        [
            "-x",
            "c++",
            "-stdlib=libc++",
            # R7 — libclang's parser invocation re-broadcasts the linker-only
            # `-stdlib=libc++` flag as an `-Wunused-command-line-argument`
            # warning on every parse (the parse step itself doesn't link, so
            # `-stdlib=` is "unused" in libclang's eyes). The flag is
            # required for the link/PCH path though, so we keep it and
            # explicitly suppress the diagnostic — no point in clearing 600+
            # noise lines on every parse run when the flag is intentional.
            "-Wno-unused-command-line-argument",
            # Suppress libclang's default C++ stdlib search paths. Without
            # this, on Linux libclang ALSO adds GCC's libstdc++ paths
            # (/usr/lib/gcc/<triple>/N/include/c++/N/), which conflict with
            # the vendored LLVM 17 libc++ headers: <stdlib.h> resolves first
            # to libstdc++'s wrapper, which redeclares names the libc++
            # `__config` block reserves, producing thousands of cascading
            # "no member named X in namespace 'std'" errors and degrading
            # template returns to ': int' (Phase 7 failure cascade). Apple
            # macOS is unaffected because clang's default there only
            # searches Apple's libc++, which our explicit -I supersedes.
            "-nostdinc++",
            "-D__EMSCRIPTEN__",
        ]
        + includePathArgs,
        [["myMain.h", ocAllIncludeStatements + "\n" + custom_cpp_source]],
    )

    if len(translationUnit.diagnostics) > 0:
        print("Diagnostic Messages:")
        for d in translationUnit.diagnostics:
            print("  " + d.format())

    return translationUnit


def parse_binding_source(cpp_source: str, include_paths: list[str]):
    """Build a translation unit for self-contained binding source.

    Unlike :func:`parse`, the primary virtual file IS the snippet (not
    ``myMain.h``) and the caller passes the include path set the same
    way :func:`getFlatIncludePaths` already does for the link-time
    ``emcc -c`` compile. This brings the Embind headers
    (``emscripten/bind.h``) and the OCCT headers the snippet ``#include``s
    into scope so ``class_<T>("Name")`` resolves as a real CALL_EXPR in
    the AST — not a string match.

    Used by the link stage to
    extract every Embind registration name from the combined
    ``BUILTIN_BINDINGS_SOURCE + consumer additionalBindFiles``
    translation unit and write them to ``build/additional-bind-symbols.json``
    so the post-link symbol resolver
    (:mod:`ocjs_bindgen.link.manifest_registry`) can bucket builtin
    registrations out of ``truly_missing`` without re-parsing C++.

    ``include_paths`` MUST start with ``ast/parse_stubs/`` (see
    :func:`getBindingSourceParseIncludePaths`) so the parse-only
    Embind stub headers shadow emsdk's real ``<emscripten/bind.h>``.
    The real headers depend on libcxx-23 builtins (``__builtin_ctzg``)
    that libclang 18.1.1 cannot resolve; the stubs declare the same
    surface in a target-agnostic form so the AST walker still surfaces
    every registration name. The real ``emcc -c`` compile preceding
    this parse uses the real headers.

    Warnings are not printed here — the same source is compiled by the
    link's ``emcc -c`` invocation, which owns ordinary compiler diagnostics.
    Errors are different: continuing after a failed AST parse can silently
    produce an empty registration manifest, so fatal parse diagnostics abort
    this producer with the original libclang messages.
    """
    index = clang.cindex.Index.create()
    translation_unit = index.parse(
        "binding-source.cpp",
        [
            "-x",
            "c++",
            "-std=c++17",
            "-stdlib=libc++",
            "-Wno-unused-command-line-argument",
            "-nostdinc++",
            "-D__EMSCRIPTEN__",
            # Mirror the real `emcc -c` invocation's PCH posture: the link
            # stage compiles this same source with `-include-pch
            # build/pch.h.pch`, where the PCH unconditionally pulls in
            # `<emscripten/bind.h>` (see `paths.buildPch`). Several
            # blocks — including BUILTIN_BINDINGS_SOURCE — rely on
            # that implicit include and never `#include
            # <emscripten/bind.h>` themselves. The parse-stubs shadow of
            # bind.h is on the include path, so this force-include
            # resolves to the stub and brings every Embind template into
            # scope without re-parsing the PCH.
            "-include",
            "emscripten/bind.h",
            *["-I" + p for p in include_paths],
        ],
        [["binding-source.cpp", cpp_source]],
    )
    errors = [
        diagnostic
        for diagnostic in translation_unit.diagnostics
        if diagnostic.severity >= clang.cindex.Diagnostic.Error
    ]
    if errors:
        formatted = "\n".join(diagnostic.format() for diagnostic in errors)
        raise RuntimeError(
            "libclang failed to parse binding source; refusing to "
            f"emit an incomplete registration manifest:\n{formatted}"
        )
    return translation_unit
