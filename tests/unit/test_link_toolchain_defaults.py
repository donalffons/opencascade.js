"""Link defaults that custom builds inherit from `ocjs_bindgen.link.yaml_build`.

Covers the stack-size default (Emscripten's own 64 KB overflows on deep OCCT
recursion) and the wasm-opt pass order that writes `.js.symbols` for the
binary that ships rather than the one emcc produced.
"""

from __future__ import annotations

import pytest

from ocjs_bindgen.link.yaml_build import (
  DEFAULT_STACK_SIZE,
  _emits_symbol_map,
  _sets_emcc_setting,
  _wasm_opt_pass_flags,
)


def test_default_stack_size_matches_full_build() -> None:
  assert DEFAULT_STACK_SIZE == 8_388_608


@pytest.mark.parametrize(
  "flags",
  [
    ["-sSTACK_SIZE=1048576"],
    ["-O3", "-s", "STACK_SIZE=1MB"],
    ["-sTOTAL_STACK=1048576"],
  ],
)
def test_detects_explicit_stack_size(flags) -> None:
  assert _sets_emcc_setting(flags, "STACK_SIZE", "TOTAL_STACK")


@pytest.mark.parametrize(
  "flags",
  [
    [],
    ["-sASYNCIFY_STACK_SIZE=4096"],
    ["-sDEFAULT_PTHREAD_STACK_SIZE=65536"],
    ["-s"],
  ],
)
def test_ignores_unrelated_stack_settings(flags) -> None:
  assert not _sets_emcc_setting(flags, "STACK_SIZE", "TOTAL_STACK")


def test_detects_symbol_map_flag() -> None:
  assert _emits_symbol_map(["-O3", "--emit-symbol-map"])
  assert _emits_symbol_map(["-emit-symbol-map"])
  assert not _emits_symbol_map(["-O3"])


def test_symbol_map_is_printed_after_every_pass_and_before_strip() -> None:
  flags = _wasm_opt_pass_flags(
    "-O3",
    converge=True,
    extra_passes=["--merge-similar-functions"],
    symbol_map="/out/demo.js.symbols",
  )
  assert flags == [
    "-O3",
    "--converge",
    "--merge-similar-functions",
    "--symbolmap=/out/demo.js.symbols",
    "--strip-debug",
    "--strip-producers",
  ]


def test_no_symbol_map_pass_without_map() -> None:
  flags = _wasm_opt_pass_flags("-O3", converge=False, extra_passes=[])
  assert flags == ["-O3", "--strip-debug", "--strip-producers"]
