"""Regression guard: libclang parse environment must use vendored LLVM 17 libc++.

libclang 18.1.1 must pair with libc++ 17 headers — emsdk's libc++ 23 pulls in
Clang 19+ builtins (`__builtin_ctzg`) that libclang 18 cannot resolve, silently
degrading NCollection template return types to `: int`.

Failure history:

- macOS baseline: libclang 18 + Apple libc++ ~17 = ~1-major skew, inside the
  libc++ "back to the latest released version of Clang" support window. The
  host build produced 596 NCollection declarations / 22 MB wasm.
- Pre-emsdk-routing Linux/Docker: libclang 18 + emsdk libcxx 23 = 5-major skew. Class
  bodies parsed, methods enumerated, but template instantiations transitively
  dependent on `__builtin_ctzg`/`__builtin_clzg` (Clang 19+ builtins libclang
  18 cannot resolve) silently degraded to `: int`. `_extract_template_args`
  returned `[]` for those return types. The container shipped a manifest with
  zero `NCollection_HArray1_*` entries.
- Emsdk-routing experiment (reverted): aligned host to container by routing every libclang
  invocation through emsdk's libcxx 23. Both pathways then shipped the
  smaller (broken) manifest. The fix was directionally correct (one stdlib
  for both OSes) but picked the wrong stdlib generation.
- Phase 7: vendor LLVM 17.0.6 (matching libclang 18.1.1 ± 1 major), prepend
  its libc++ 17 + clang 17 resource headers, pair with per-OS libc (Apple SDK
  on darwin via `xcrun`, `/usr/include` on Linux/Docker). Identical libc++
  parse semantics on every OS; libclang resolves every builtin its version
  knows about. Manifest regrows.

This test asserts the Phase 7 invariants directly against the real
`_get_parse_libcxx_include_paths` implementation. It is fast (no I/O beyond
`os.path.isdir` on `VENDORED_LLVM17_DIR`) and catches accidental
reintroductions of emsdk libcxx in the parse path, accidental host-system
C++ header lookup (the pre-emsdk-routing macOS bug), or accidental missing-libc
configurations (the partial-POC failure mode where libc++ 17 parses but
`uint8_t` is undefined).
"""

from __future__ import annotations

import os
from unittest.mock import patch

import pytest

from ocjs_bindgen.config import paths as paths_module

# Path prefixes that, if they appear in the parse-side include list, prove
# the function has regressed back to:
#   - host-system libc++ lookup (pre-emsdk-routing macOS divergence vector), OR
#   - emsdk libcxx lookup (post-emsdk-routing silent type-degradation vector).
_FORBIDDEN_PARSE_PREFIXES = (
    # Pre-emsdk-routing macOS Apple Xcode libc++ — relied on `xcrun --show-sdk-path`
    # for the libc++ subtree. The Phase 7 wiring may still call xcrun to
    # resolve LIBC (`<sdk>/usr/include`) but MUST NOT pull libc++ from
    # `<sdk>/usr/include/c++/v1` — that path is what the assertion catches.
    "/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX.sdk/usr/include/c++",
    "/Library/Developer/CommandLineTools/usr/include/c++",
    "/usr/include/c++",
    "/usr/local/include/c++",
    "/opt/homebrew/Cellar/llvm/",
    "/opt/homebrew/opt/llvm/",
    # Emsdk libcxx (the post-emsdk-routing / pre-Phase-7 failure vector). Both the
    # libcxx headers themselves and emsdk's clang resource directory must
    # stay out of the parse include list.
    "/upstream/emscripten/system/lib/libcxx/",
    "/upstream/lib/clang/",
)


class TestVendoredLlvm17Wins:
    """`_get_parse_libcxx_include_paths` must prepend LLVM 17 + add per-OS libc."""

    def test_libcxx_v1_present_before_clang_resource(self) -> None:
        """libc++ headers must precede the clang resource dir in the search path.

        Apple tarballs ship ``__config_site`` inside ``include/c++/v1``, so
        the main libcxx dir IS the first entry. Linux tarballs split
        ``__config_site`` into a per-host-triple sub-tree
        (``include/<triple>/c++/v1/__config_site``); on those platforms the
        per-triple dir comes FIRST (so ``#include <__config_site>`` resolves)
        followed by the arch-independent main libc++ tree. Either way,
        libcxx must win the search race over the clang resource dir so
        ``<cstdint>`` etc. resolve to LLVM 17's `__libcpp_ctz`-style
        intrinsics, not to emsdk libcxx 23's `__builtin_ctzg` calls that
        libclang 18 cannot parse.
        """
        paths = paths_module._get_parse_libcxx_include_paths()
        assert len(paths) >= 2, (
            f"Expected at least 2 parse-side include paths (libc++ + clang "
            f"resource); got {len(paths)}: {paths!r}."
        )
        libcxx_main = os.path.join(
            paths_module.VENDORED_LLVM17_DIR, "include", "c++", "v1"
        )
        clang_resource = os.path.join(
            paths_module.VENDORED_LLVM17_DIR, "lib", "clang", "17", "include"
        )
        assert libcxx_main in paths, (
            f"Main libc++ dir {libcxx_main!r} missing from parse paths "
            f"{paths!r}. This is the directory containing <__config>, "
            f"<cstdint> etc. — without it nothing parses."
        )
        assert clang_resource in paths, (
            f"Clang 17 resource dir {clang_resource!r} missing from parse "
            f"paths {paths!r}. libc++ references clang builtins defined "
            f"here; mismatching produces SFINAE drift."
        )
        assert paths.index(libcxx_main) < paths.index(clang_resource), (
            f"Main libc++ must come BEFORE clang resource dir in {paths!r}. "
            f"Header search order matters for ABI/intrinsic resolution."
        )

    def test_config_site_resolvable_through_include_path(self) -> None:
        """``__config_site`` must be findable via the returned include paths.

        libc++ ``<__config>`` does ``#include <__config_site>`` — that header
        carries build-time ABI flags. If its dir isn't on the parse path
        every translation unit fails at the very first libc++ include and
        the parse cascade silently degrades all templated returns to ': int'
        (Phase 7 failure mode). Apple tarballs co-locate it with
        ``__config``; Linux tarballs split it into a per-triple sub-tree.
        """
        paths = paths_module._get_parse_libcxx_include_paths()
        found_in = [
            p for p in paths if os.path.isfile(os.path.join(p, "__config_site"))
        ]
        assert found_in, (
            f"__config_site not findable through any of the returned parse "
            f"paths {paths!r}. The vendored LLVM 17 tarball ships it either "
            f"inside include/c++/v1/ (Apple layout) or under "
            f"include/<host-triple>/c++/v1/ (Linux layout) — paths.py must "
            f"detect both."
        )

    def test_no_forbidden_parse_prefix_leaks_through(self) -> None:
        """No returned path may reintroduce a known broken-config vector."""
        paths = paths_module._get_parse_libcxx_include_paths()
        for p in paths:
            for forbidden in _FORBIDDEN_PARSE_PREFIXES:
                assert forbidden not in p, (
                    f"Forbidden parse-side prefix leaked: {p!r} contains "
                    f"{forbidden!r}. This is either a pre-emsdk-routing macOS Apple "
                    f"libc++ leak or a post-emsdk-routing emsdk libcxx leak — both "
                    f"failure modes are documented in "
                    f"Use vendored LLVM 17 libc++ from DEPS.json, not emsdk or host libc++."
                )


class TestHostLibcResolution:
    """Per-OS libc include(s) must be appended (Apple SDK / /usr/include[/triple])."""

    def test_libc_include_is_present(self) -> None:
        """Resolved libc include(s) must be on the parse path AND non-empty.

        On any supported OS (darwin or linux) `_get_host_libc_includes`
        should resolve at least one real directory containing
        `sys/types.h`; if it doesn't, the parse will silently degrade
        `uint8_t`-templated returns to ': int' and the strict-types gate
        will fire ~30 minutes later at link time.
        """
        paths = paths_module._get_parse_libcxx_include_paths()
        libc_incs = paths_module._get_host_libc_includes()
        assert libc_incs, (
            "_get_host_libc_includes returned []. On macOS this means "
            "xcrun --show-sdk-path failed or the SDK has no "
            "usr/include/sys/types.h. On Linux this means neither "
            "/usr/include/sys/types.h NOR "
            "/usr/include/<multiarch-triple>/sys/types.h exists — install "
            "libc6-dev (or distro equivalent). Either way, the parse pass "
            "will silently degrade integer-templated NCollection return "
            "types to ': int' and ~432 declarations will vanish from the "
            "manifest."
        )
        for libc in libc_incs:
            assert libc in paths, (
                f"Resolved libc include {libc!r} not present in parse "
                f"paths {paths!r}. The Phase 7 wiring must append every "
                f"host libc directory after libc++ + resource dir."
            )

    def test_libc_includes_exist_on_disk(self) -> None:
        """Every returned libc directory must exist on disk."""
        for libc in paths_module._get_host_libc_includes():
            assert os.path.isdir(libc), (
                f"_get_host_libc_includes returned {libc!r} but the "
                f"directory does not exist. The helper must os.path.isdir-"
                f"check before returning to avoid downstream parse errors."
            )

    def test_libc_sentinel_present_in_at_least_one_returned_dir(self) -> None:
        """`sys/types.h` must be findable across the returned libc dirs.

        Single-arch (Apple SDK, RPM-based Linux) puts everything under one
        dir; Debian multiarch splits arch-specific headers into a triple
        subdir while leaving arch-independent headers in /usr/include. The
        sentinel must resolve in *some* returned dir or libclang will fail
        to parse the OCCT transitive include graph.
        """
        libc_incs = paths_module._get_host_libc_includes()
        if not libc_incs:
            pytest.skip("No libc resolved (caught by earlier test)")
        found_in = [
            libc for libc in libc_incs
            if os.path.isfile(os.path.join(libc, "sys", "types.h"))
        ]
        assert found_in, (
            f"sys/types.h not found in any of {libc_incs!r}. The helper "
            f"returned non-empty but the sentinel-search invariant broke. "
            f"This is a bug in _get_host_libc_includes — it should only "
            f"return dirs after sentinel verification."
        )


class TestMissingVendoredLlvmFailsLoud:
    """If `deps/llvm-17/include/c++/v1` is absent, the loader must abort."""

    def test_raises_when_vendored_dir_missing(self, tmp_path) -> None:
        """Silent fallback to emsdk libcxx is forbidden — must RuntimeError."""
        # Patch VENDORED_LLVM17_DIR to a path that doesn't exist; the
        # helper must raise rather than silently return a degraded path
        # list. Anything else and a missing clone-deps run becomes a
        # post-deploy "where did half the types go" mystery.
        missing = str(tmp_path / "no-such-llvm-17")
        with patch.object(paths_module, "VENDORED_LLVM17_DIR", missing):
            with pytest.raises(RuntimeError) as excinfo:
                paths_module._get_parse_libcxx_include_paths()
            msg = str(excinfo.value)
            assert "clone-deps.sh" in msg, (
                f"Error message must point operators at the fix "
                f"(clone-deps.sh) — got {msg!r}. Cryptic failures here "
                f"cost hours of debugging."
            )
            assert "Phase 7" in msg or "libclang" in msg, (
                f"Error message should reference the research doc or "
                f"libclang version for context — got {msg!r}."
            )


class TestVendoredPathListShape:
    """The path list shape (suffixes, length) must be stable for cache-key hashing."""

    def test_baseline_suffixes_are_canonical(self) -> None:
        """The vendored libc++ + resource dir suffixes must remain stable.

        On Linux the per-host-triple ``__config_site`` dir is added too,
        but its suffix varies by host triple (``aarch64-unknown-linux-gnu``,
        ``x86_64-unknown-linux-gnu``, etc.). We assert the invariant
        baseline (libc++ main + clang resource) is always present, and
        that any additional vendored entries terminate in ``c++/v1``
        (the __config_site dir convention).
        """
        paths = paths_module._get_parse_libcxx_include_paths()
        vendored_prefix = paths_module.VENDORED_LLVM17_DIR
        vendored_suffixes = sorted(
            p.removeprefix(vendored_prefix)
            for p in paths
            if p.startswith(vendored_prefix)
        )
        required = {
            "/include/c++/v1",
            "/lib/clang/17/include",
        }
        missing = required - set(vendored_suffixes)
        assert not missing, (
            f"Vendored LLVM 17 invariant suffixes missing: {missing!r}; "
            f"got {vendored_suffixes!r}. These must always be present — "
            f"changing the baseline silently invalidates every consumer's "
            f"Nx cache."
        )
        extras = set(vendored_suffixes) - required
        for extra in extras:
            assert extra.endswith("/c++/v1"), (
                f"Unexpected vendored LLVM 17 suffix {extra!r}. Only the "
                f"per-host-triple __config_site dir (suffix `/c++/v1`) is "
                f"allowed in addition to the invariant baseline."
            )

    def test_no_emsdk_libcxx_in_path_list(self) -> None:
        """The post-emsdk-routing emsdk libcxx routing must stay removed."""
        paths = paths_module._get_parse_libcxx_include_paths()
        emsdk_libcxx_marker = "/emscripten/system/lib/libcxx/"
        for p in paths:
            assert emsdk_libcxx_marker not in p, (
                f"emsdk libcxx leak detected: {p!r}. The Phase 7 wiring "
                f"REMOVED emsdk's libcxx 23 from the parse path because "
                f"libclang 18.1.1 cannot resolve its Clang-19+ builtins. "
                f"Re-adding it reintroduces the silent type-degradation "
                f"bug — see "
                f"Use vendored LLVM 17 libc++ from DEPS.json, not emsdk or host libc++."
            )
