"""Path constants and OCCT include-tree discovery used by the bindgen + WASM builders.

Extracted from `src/Common.py` as part of Phase 1 PR 1.1 of the OCJS Bindgen
Modular Refactor. The split with `flags.py` follows the dependency boundary:
`paths.py` is pure-data (env vars + filesystem walks) and is imported by
every layer; `flags.py` carries the build-flag state machine and only
matters to the WASM compile/link drivers.

Behaviour preserved bit-for-bit from the legacy `Common.py` module — every
constant retains its original spelling, every function retains its original
signature, so callers that switch their import line require zero further
changes. The legacy `src/Common.py` module re-exports every name in this
file for transitional backwards-compatibility until `Common.py` is deleted in
Phase 1 PR 1.8.
"""

from __future__ import annotations

import glob
import os
import platform
import subprocess

import yaml

from filter.filterIncludeFiles import filterIncludeFile
from filter.filterPackages import filterPackages

from .flags import (
    EXTRA_COMPILE_FLAGS,
    PATH_PREFIX_FLAGS,
    SIMD_FLAGS,
    WASM_EXCEPTION_FLAGS,
    write_build_flags,
)

OCJS_ROOT = os.environ.get("OCJS_ROOT", "/opencascade.js")
OCCT_ROOT = os.environ.get("OCCT_ROOT", "/occt")
RAPIDJSON_ROOT = os.environ.get("RAPIDJSON_ROOT", "/rapidjson")
FREETYPE_ROOT = os.environ.get("FREETYPE_ROOT", "/freetype")
EMSDK_ROOT = os.environ.get("EMSDK", "/emsdk")

occtBasePath = OCCT_ROOT + "/src/"

BUILD_DIR = os.environ.get("BUILD_DIR", OCJS_ROOT + "/build")
FLAT_INCLUDE_DIR = BUILD_DIR + "/occt-includes"
PCH_HEADER = BUILD_DIR + "/pch.h"
PCH_FILE = BUILD_DIR + "/pch.h.pch"

_DEPRECATED_DIR = "Deprecated"


def _load_excluded_includes() -> set[str]:
    """Parse the legacy `bindgen-filters.yaml` `exclude.headers` section.

    Reads the YAML directly rather than going through `BindgenConfig` because
    this is module-import-time code (called before the YAML config singleton
    is constructed). The YAML schema is part of the bindgen contract; if it
    ever moves under a more typed loader, this lookup migrates with it.
    """
    config_path = os.environ.get(
        "OCJS_BINDGEN_CONFIG",
        os.path.join(OCJS_ROOT, "bindgen-filters.yaml"),
    )
    if not os.path.isfile(config_path):
        return set()
    try:
        with open(config_path) as f:
            cfg = yaml.safe_load(f)
        return set(cfg.get("exclude", {}).get("headers", []))
    except Exception:
        return set()


_EXCLUDED_INCLUDES = _load_excluded_includes()


def getGlobalIncludes() -> tuple[list[str], list[str], list[str]]:
    """Discover OCCT headers from non-filtered packages for PCH generation.

    Uses `filterPackages` to avoid pulling platform-specific headers (OpenGL,
    D3D, etc.) that won't compile under emscripten. The flat include directory
    (built separately by `buildFlatIncludes`) contains every OCCT header for
    resolving transitive `#include` dependencies; only the lists returned here
    drive the PCH/translation-unit boundary.
    """
    includeFiles: list[str] = []
    deprecatedIncludeFiles: list[str] = []
    additionalIncludePaths: list[str] = []
    for dirpath, dirnames, filenames in os.walk(occtBasePath):
        dirnames.sort()
        filenames.sort()
        dirName = os.path.basename(dirpath)
        if dirName and not filterPackages(dirName):
            dirnames.clear()
            continue
        additionalIncludePaths.append(str(dirpath))
        is_deprecated = ("/" + _DEPRECATED_DIR + "/") in dirpath or dirpath.endswith(
            "/" + _DEPRECATED_DIR
        )
        for item in filenames:
            if filterIncludeFile(item) and item not in _EXCLUDED_INCLUDES:
                filepath = str(os.path.join(dirpath, item))
                if is_deprecated:
                    deprecatedIncludeFiles.append(filepath)
                else:
                    includeFiles.append(filepath)
    return [includeFiles, additionalIncludePaths, deprecatedIncludeFiles]


[ocIncludeFiles, ocIncludePaths, ocDeprecatedIncludeFiles] = getGlobalIncludes()

additionalIncludePaths = [
    RAPIDJSON_ROOT + "/include",
    FREETYPE_ROOT + "/include/freetype",
    FREETYPE_ROOT + "/include",
    OCJS_ROOT + "/src",
]


VENDORED_LLVM17_DIR = os.path.join(OCJS_ROOT, "deps", "llvm-17")


# Sentinel header that proves a libc include tree is COMPLETE enough for
# libclang to parse OCCT headers without silently degrading template types.
# OCCT transitively includes <sys/types.h> via Standard_PCharacter / FILE etc.;
# if it is missing, the parse cascade silently degrades return types to ': int'
# instead of the real OCCT classes. On Linux this header lives in glibc's
# libc6-dev package; minimal Docker images (incl. emscripten/emsdk's base) ship
# only linux-libc-dev (kernel headers) by default, leaving sys/ unpopulated.
_LIBC_SENTINEL_RELPATH = os.path.join("sys", "types.h")


def _detect_linux_multiarch_triple() -> str | None:
    """Return the Debian-style multiarch triple (e.g. ``aarch64-linux-gnu``).

    Debian/Ubuntu split libc6-dev headers across two trees:
      - ``/usr/include/<triple>/sys/types.h`` (arch-specific)
      - ``/usr/include/stdio.h``               (arch-independent)
    Both must be on libclang's include search path; querying
    ``gcc -print-multiarch`` is the canonical way to discover the triple
    (matches what gcc itself uses to resolve system headers). Falls back to
    ``dpkg-architecture -qDEB_HOST_MULTIARCH`` if gcc isn't on PATH, and
    returns None on RPM-based / non-multiarch distros (which keep everything
    under /usr/include directly).
    """
    for probe in (["gcc", "-print-multiarch"], ["dpkg-architecture", "-qDEB_HOST_MULTIARCH"]):
        try:
            triple = subprocess.run(
                probe,
                capture_output=True,
                text=True,
                timeout=5,
            ).stdout.strip()
            if triple:
                return triple
        except (FileNotFoundError, subprocess.TimeoutExpired):
            continue
    return None


def _get_host_libc_includes() -> list[str]:
    """Resolve the host libc include directories for libclang's parse pass.

    The vendored LLVM 17 tarball ships libc++ headers and a clang resource
    directory but intentionally OMITS libc — libc lives in the host SDK
    (Apple's MacOSX.sdk on darwin) or in the system include tree (glibc's
    /usr/include on linux/Docker). The parse environment needs a libc
    so `<cstdint>` → `stdint.h` resolves, `uint8_t` is known, etc.

    Returns ALL include dirs needed (multiarch-aware on Debian/Ubuntu Linux:
    both ``/usr/include`` AND ``/usr/include/<triple>`` because libc6-dev
    splits arch-specific headers like ``sys/types.h`` into the triple
    subdirectory). Validates the result via ``_LIBC_SENTINEL_RELPATH``
    (``sys/types.h``) — if neither candidate contains it, returns an empty
    list. Callers treat empty as a hard error.

    Without a complete libc the parse silently degrades integer-templated
    return types to ``': int'`` (a production failure mode where OCCT's
    Standard_Integer-templated containers collapse to bare ``int``), which
    is then surfaced by the strict-types gate at the very end of generate
    — far too late for clear diagnostics.
    """
    system = platform.system()
    if system == "Darwin":
        try:
            sdk = subprocess.run(
                ["xcrun", "--show-sdk-path"],
                capture_output=True,
                text=True,
                timeout=5,
            ).stdout.strip()
        except (FileNotFoundError, subprocess.TimeoutExpired):
            return []
        if not sdk:
            return []
        inc = os.path.join(sdk, "usr", "include")
        if os.path.isfile(os.path.join(inc, _LIBC_SENTINEL_RELPATH)):
            return [inc]
        return []

    if system == "Linux":
        if not os.path.isdir("/usr/include"):
            return []
        triple = _detect_linux_multiarch_triple()
        triple_inc = os.path.join("/usr/include", triple) if triple else None

        if triple_inc and os.path.isfile(os.path.join(triple_inc, _LIBC_SENTINEL_RELPATH)):
            # Debian/Ubuntu multiarch: both paths needed for full coverage.
            return ["/usr/include", triple_inc]
        if os.path.isfile(os.path.join("/usr/include", _LIBC_SENTINEL_RELPATH)):
            # Non-multiarch (RPM-based, Alpine, etc.).
            return ["/usr/include"]
        return []

    return []


def _get_parse_libcxx_include_paths() -> list[str]:
    """Return vendored libc++ 17 + clang 17 resource + per-OS libc paths.

    The parse pass uses pip's `libclang==18.1.1`, which falls inside the
    libc++ N±1 support window only when paired with libc++ 17 or 18
    headers. emsdk's bundled libcxx tracks clang main and now ships
    libc++ 23 calls to `__builtin_ctzg`/`__builtin_clzg` (Clang 19+
    builtins libclang 18 cannot resolve) — using those headers as the
    parse-side stdlib causes silent template-instantiation degradation
    that wipes ~432 NCollection types from `build/ncollection-manifest.json`.

    The vendored LLVM 17 tarball pinned in `DEPS.json` `dependencies.llvm17`
    is the matching libc++ for libclang 18.1.1. The same tarball is
    downloaded by `scripts/clone-deps.sh` on every OS; the only host-
    dependent component is libc (Apple SDK on darwin, /usr/include on
    Linux/Docker).

    Failure mode: if `deps/llvm-17/include/c++/v1` is missing, raise
    immediately — silently falling back to emsdk's libcxx would
    reintroduce the template-instantiation degradation.
    """
    libcxx_inc = os.path.join(VENDORED_LLVM17_DIR, "include", "c++", "v1")
    clang_resource = os.path.join(VENDORED_LLVM17_DIR, "lib", "clang", "17", "include")

    if not os.path.isdir(libcxx_inc):
        raise RuntimeError(
            "Vendored LLVM 17 libc++ headers missing at "
            f"{libcxx_inc}. Run scripts/clone-deps.sh to download + "
            "extract the pinned LLVM 17.0.6 tarball "
            "(see DEPS.json dependencies.llvm17). Without these "
            "headers libclang 18.1.1 will be paired with emsdk's "
            "libcxx 23 and silently degrade NCollection method "
            "signatures to ': int' — the vendored libc++ 17 / clang 17 "
            "resource tree is the matching parse-side stdlib for "
            "libclang==18.1.1."
        )

    # libc++ <__config> does `#include <__config_site>` — that header carries
    # build-time configuration (`_LIBCPP_HAS_NO_FILESYSTEM`, ABI tags, etc.)
    # and must be findable. Tarball layouts differ:
    #   - Apple darwin tarballs: include/c++/v1/__config_site (alongside
    #     __config, so `-I include/c++/v1` already covers it).
    #   - Linux tarballs: include/<host-triple>/c++/v1/__config_site
    #     (a per-target subdirectory, NOT under include/c++/v1). We glob for
    #     it and prepend its parent so libc++ resolves cleanly.
    # Without this prepend, every translation unit fails at `__config_site`
    # not-found, which then cascades into the Phase 7 silent type-degradation
    # because libclang error-recovers by treating all templated returns as int.
    config_site_inc: str | None = None
    if not os.path.isfile(os.path.join(libcxx_inc, "__config_site")):
        matches = glob.glob(
            os.path.join(VENDORED_LLVM17_DIR, "include", "*", "c++", "v1", "__config_site")
        )
        matches.sort()
        if len(matches) == 1:
            config_site_inc = os.path.dirname(matches[0])
        elif not matches:
            raise RuntimeError(
                "libc++ __config_site not found under "
                f"{VENDORED_LLVM17_DIR}/include/. Searched both "
                f"include/c++/v1/__config_site and "
                f"include/*/c++/v1/__config_site. The vendored LLVM 17 "
                "tarball appears to be incomplete or repackaged — re-run "
                "scripts/clone-deps.sh to redownload (DEPS.json sha256 "
                "verification should catch corruption). Without "
                "__config_site libc++'s `__config` fails to parse and "
                "every NCollection template degrades to ': int'."
            )
        else:
            raise RuntimeError(
                "multiple libc++ __config_site candidates found; "
                + ", ".join(matches)
            )

    libc_incs = _get_host_libc_includes()
    if not libc_incs:
        system = platform.system()
        install_hint = {
            "Linux": (
                "Install glibc userspace headers: `apt-get install libc6-dev` "
                "(Debian/Ubuntu) or distro equivalent. The base image's "
                "linux-libc-dev only ships kernel headers (/usr/include/stdint.h "
                "etc.); sys/types.h must exist at /usr/include/sys/types.h or "
                "/usr/include/<multiarch-triple>/sys/types.h (Debian splits "
                "arch-specific headers via DEB_HOST_MULTIARCH)."
            ),
            "Darwin": (
                "Install Xcode Command Line Tools: `xcode-select --install`. "
                "`xcrun --show-sdk-path` must resolve to an SDK whose "
                "usr/include/sys/types.h exists."
            ),
        }.get(system, "Install your platform's libc development headers.")
        raise RuntimeError(
            "Host libc include directory missing or incomplete (no "
            f"sys/types.h on {system}). libclang's parse pass needs a "
            "complete libc to resolve OCCT's transitive system-header "
            "deps; without it template return types silently degrade to "
            f"': int'. {install_hint}"
        )
    # Order: __config_site dir FIRST (so `#include <__config_site>` from
    # libc++ <__config> resolves), then the main libc++ tree, then clang
    # resource, then libc dirs. Apple tarballs have config_site_inc=None
    # (already inside libcxx_inc) — that path just falls through.
    head = [config_site_inc] if config_site_inc else []
    return [*head, libcxx_inc, clang_resource, *libc_incs]


includePathArgs = list(
    dict.fromkeys(
        ["-I" + p for p in ocIncludePaths]
        + ["-I" + FLAT_INCLUDE_DIR]
        + ["-I" + p for p in _get_parse_libcxx_include_paths()]
        + ["-I" + p for p in additionalIncludePaths]
    )
)

ocIncludeStatements = os.linesep.join(
    map(lambda x: '#include "' + os.path.basename(x) + '"', list(sorted(ocIncludeFiles)))
)
ocAllIncludeStatements = ocIncludeStatements


# V1 RE-SHIP — separate include statement stream for Deprecated/NCollectionAliases
# headers (pure typedef forwarders like
# `typedef NCollection_Array1<gp_Pnt> TColgp_Array1OfPnt;` moved out
# of the main include set in OCCT V8).
#
# Kept OUT of `ocAllIncludeStatements` on purpose: pulling them into
# the main translation unit triggers codegen to emit a
# `class_<TColgp_Array1OfPnt>("TColgp_Array1OfPnt")` binding for every
# alias, which then fails compile-bindings because the underlying
# type's args (e.g. `IntRes2d_IntersectionSegment`) are forward-
# declared but never bound. Discovery (`discover.py`) does a separate
# libclang parse that *does* include these headers, populates the
# typedef alias map (`ncollection-manifest.json::template_typedefs`),
# and the validator (`validate-build.py`) consults that map to
# downgrade YAML symbols like `TColgp_Array1OfPnt` from
# `truly_missing` to `alias_resolved` without ever needing them in
# the compile/link path.
ocDeprecatedNCollectionAliasIncludeStatements = os.linesep.join(
    '#include "' + os.path.basename(x) + '"'
    for x in sorted(ocDeprecatedIncludeFiles)
    if "/NCollectionAliases/" in x
)


def buildFlatIncludes() -> str:
    """Materialise a flat directory of symlinks to every OCCT header.

    Includes headers from every package (even filtered ones) because they're
    needed for type resolution during compilation but don't affect WASM binary
    size. Package filtering is applied at the `.o` compile/link level.
    """
    from pathlib import Path

    from ocjs_bindgen.build_state import replace_tree

    header_exts = {".hxx", ".h", ".lxx", ".gxx", ".pxx"}
    headers: dict[str, list[str]] = {}
    for dirpath, dirnames, filenames in os.walk(occtBasePath):
        dirnames.sort()
        filenames.sort()
        for fname in filenames:
            if os.path.splitext(fname)[1].lower() in header_exts:
                headers.setdefault(fname, []).append(
                    os.path.abspath(os.path.join(dirpath, fname))
                )
    collisions = {
        name: paths
        for name, paths in headers.items()
        if len(paths) > 1
    }
    if collisions:
        detail = "; ".join(
            f"{name}=[{', '.join(paths)}]"
            for name, paths in sorted(collisions.items())
        )
        raise RuntimeError(f"duplicate flat OCCT headers: {detail}")

    destination = Path(FLAT_INCLUDE_DIR)

    def populate(stage: Path) -> None:
        for name, (source,) in sorted(headers.items()):
            target = stage / name
            target.symlink_to(os.path.relpath(source, target.parent))

    replace_tree(destination, populate)
    count = len(headers)
    print(f"Flat includes: {count} files symlinked into {FLAT_INCLUDE_DIR}/")
    return FLAT_INCLUDE_DIR


def getFlatIncludePaths() -> list[str]:
    """Return the canonical, generated OCCT include topology."""
    return [FLAT_INCLUDE_DIR] + additionalIncludePaths


_PARSE_STUBS_DIR = os.path.join(
    os.path.dirname(os.path.abspath(__file__)),
    "..",
    "ast",
    "parse_stubs",
)


def getBindingSourceParseIncludePaths() -> list[str]:
    """Return the full -I path set for libclang to parse the link-stage
    `BUILTIN_BINDINGS_SOURCE + consumer additionalBindFiles` TU.

    Combines (in deliberate path-search order):
      1. ``ast/parse_stubs/`` — minimal parse-only Embind / em_js / val
         stubs that shadow ``<emscripten/bind.h>``, ``<emscripten/em_js.h>``,
         ``<emscripten/val.h>``. See ``ast/parse_stubs/README.md``.
         libclang 18 cannot consume emsdk's bundled libcxx-23 (needs
         Clang 19+ builtins like ``__builtin_ctzg``); the stub Embind
         declarations parse on any target so the AST walker still
         surfaces every ``class_<T>("Name")`` CALL_EXPR. The real
         ``emcc -c`` compile preceding the parse uses the real headers
         — the stubs are AST-extraction-only.
      2. The OCCT/freetype/rapidjson include set used by ``emcc -c``. A
         built tree uses the canonical flat OCCT include directory;
         a clean checkout falls back to the source package include
         directories discovered by :func:`getGlobalIncludes`. The fallback
         lets quality tests exercise this parser after ``setup`` without
         manufacturing the ``pch`` target's build output first.
      3. The vendored libc++ 17 + clang 17 resource + host libc paths
         (``_get_parse_libcxx_include_paths``) — the matching stdlib
         for libclang 18, identical to the main bindgen parse pass.

    Distinct from the bindgen's main ``includePathArgs`` (used by
    :func:`parse` for the OCCT ``myMain.h`` TU): the link-stage TU has
    Embind code that the bindgen's main parse never touches.
    """
    parse_stubs = os.path.abspath(_PARSE_STUBS_DIR)
    paths: list[str] = []
    if os.path.isdir(parse_stubs):
        paths.append(parse_stubs)

    materialized_occt_paths = (
        [FLAT_INCLUDE_DIR] if os.path.isdir(FLAT_INCLUDE_DIR) else []
    )
    if materialized_occt_paths:
        paths.extend(materialized_occt_paths)
    else:
        paths.extend(ocIncludePaths)
    paths.extend(additionalIncludePaths)

    for p in _get_parse_libcxx_include_paths():
        if p not in paths:
            paths.append(p)
    return paths


def buildPch(threading: str = "single-threaded") -> None:
    """Generate and precompile the unified header (PCH).

    Precompiles all OCCT headers once, so each binding file loads the binary
    PCH instead of reparsing them. Combined with flat includes, this gives
    ~25× compilation speedup.
    """
    temporary_header = f"{PCH_HEADER}.tmp-{os.getpid()}"
    with open(temporary_header, "w") as f:
        f.write("#ifndef OCJS_PCH_H\n#define OCJS_PCH_H\n")
        f.write(ocIncludeStatements)
        _occt_leaked_macros = ["CONSTRUCTOR", "DESTRUCTOR", "OPTIONAL", "DEFINE"]
        f.write("\n")
        for m in _occt_leaked_macros:
            f.write(f"#ifdef {m}\n#undef {m}\n#endif\n")
        f.write("#include <emscripten/bind.h>\n")
        f.write("#include <functional>\n")
        f.write("#endif\n")
    os.replace(temporary_header, PCH_HEADER)

    OPT_LEVEL = os.environ.get("OCJS_OPT", "-O0")
    USE_LTO = os.environ.get("OCJS_LTO", "0") == "1"
    flat_paths = getFlatIncludePaths()

    exception_flags = WASM_EXCEPTION_FLAGS
    command = [
        "emcc",
        "-std=c++17",
        *(["-flto"] if USE_LTO else []),
        *exception_flags,
        *SIMD_FLAGS,
        *EXTRA_COMPILE_FLAGS,
        *PATH_PREFIX_FLAGS,
        "-DIGNORE_NO_ATOMICS=1",
        "-DOCCT_NO_PLUGINS",
        "-frtti",
        "-DHAVE_RAPIDJSON",
        OPT_LEVEL,
        "-Wno-unused-parameter",
        "-Wno-unused-variable",
        "-Wno-non-virtual-dtor",
        "-Wno-deprecated-declarations",
        "-Werror=return-type",
        "-pthread" if threading == "multi-threaded" else "",
        *["-I" + p for p in flat_paths],
        # Omit source-file mtimes from the PCH. Without this flag clang embeds
        # the header's mtime and re-checks it on every consumer compile, which
        # breaks the moment Nx, Docker image layers, or named volumes restore
        # the header with a fresh mtime — yielding thousands of false
        # "fatal error: ... mtime changed" failures. See _assert_pch_survives_mtime_bump
        # below for the regression guard.
        "-Xclang", "-fno-pch-timestamp",
        "-x",
        "c++-header",
        PCH_HEADER,
        "-o",
        PCH_FILE,
    ]
    command = [c for c in command if c]

    print(f"Building PCH ({len(ocIncludeFiles)} headers)...")
    temporary_pch = f"{PCH_FILE}.tmp-{os.getpid()}"
    compile_command = [*command[:-1], temporary_pch]
    try:
        result = subprocess.run(compile_command, capture_output=True, text=True)
        if result.returncode != 0:
            print("PCH compilation failed!")
            print(result.stderr)
            raise RuntimeError("PCH compilation failed")
        os.replace(temporary_pch, PCH_FILE)
    finally:
        try:
            os.unlink(temporary_pch)
        except FileNotFoundError:
            pass

    size_mb = os.path.getsize(PCH_FILE) / (1024 * 1024)
    print(f"PCH ready: {PCH_FILE} ({size_mb:.0f} MB)")
    _assert_pch_survives_mtime_bump(command)
    write_build_flags()


def _assert_pch_survives_mtime_bump(pch_build_command: list[str]) -> None:
    """Catch missing -Xclang -fno-pch-timestamp at PCH-build time.

    Touches PCH_HEADER's mtime, then re-uses the PCH as a consumer would. If
    the PCH embedded the source mtime, clang refuses with "fatal error: file
    ... has been modified since the precompiled header ... was built: mtime
    changed". This guard turns that 40-minute distributed failure mode into a
    1-second local failure at PCH-build time. See plan
    pch-mtime-eliminate_e887edab.plan.md for the full root cause.
    """

    original_mtime = os.path.getmtime(PCH_HEADER)
    try:
        # Bump mtime by 2s to clear any filesystem mtime granularity (HFS+,
        # some FUSE mounts) — small enough to be invisible to Nx's content-
        # hash inputs, large enough that no clock skew swallows it.
        os.utime(PCH_HEADER, (original_mtime + 2, original_mtime + 2))

        # Strip PCH_HEADER from the original build command and reuse all other
        # flags so the include paths, threading, exceptions, SIMD, etc. match
        # exactly. The consumer command below compiles a trivial TU through
        # the PCH and discards the output.
        consumer_cmd = [
            "emcc",
            *[
                arg
                for arg in pch_build_command[1:]
                if arg
                not in (
                    PCH_HEADER,
                    PCH_FILE,
                    "-o",
                    "-x",
                    "c++-header",
                )
            ],
            "-include-pch",
            PCH_FILE,
            "-x",
            "c++",
            "-c",
            "-",
            "-o",
            os.devnull,
        ]

        probe = subprocess.run(
            consumer_cmd,
            input="int main() { return 0; }\n",
            capture_output=True,
            text=True,
            timeout=120,
        )

        if probe.returncode != 0:
            mtime_drift_detected = (
                "mtime changed" in probe.stderr
                or "has been modified since the precompiled header" in probe.stderr
            )
            if mtime_drift_detected:
                raise RuntimeError(
                    "Precompiled header was built with an embedded source "
                    "timestamp. This breaks every cache restore (Nx, Docker "
                    "volumes, image layers) because the restored header's "
                    "mtime no longer matches the timestamp baked into the "
                    "PCH, producing thousands of false 'mtime changed' "
                    "compile failures.\n"
                    "\n"
                    "Action: ensure the PCH build command in "
                    "ocjs_bindgen.config.paths.buildPch passes "
                    "'-Xclang -fno-pch-timestamp' to emcc. Do not remove "
                    "that flag without replacing the consumer-side "
                    "validation strategy."
                )
            print(
                "WARNING: PCH mtime-bump regression guard could not run a "
                "consumer compile probe. This does NOT prove the PCH is "
                "timestamp-free; investigate before shipping.\n"
                f"  emcc exit: {probe.returncode}\n"
                f"  stderr (truncated): {probe.stderr[:500]}"
            )
    finally:
        # Restore the original mtime so downstream consumers see the same
        # header they would have seen had this guard never run.
        os.utime(PCH_HEADER, (original_mtime, original_mtime))
