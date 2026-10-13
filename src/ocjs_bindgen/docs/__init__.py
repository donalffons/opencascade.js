"""Doxygen → JSON extraction package.

PR 3.4 (partial) — establishes the target package location for the
existing `src/extract-docs.py` orphan script. The script body itself
remains at the legacy path while shell invocations
(`build-wasm.sh:447`) keep working byte-identically; a follow-up PR will
move the script body in and update the shell entry points in the same
commit.

The skeleton exists today so:
  * Future Python callers can `from ocjs_bindgen.docs import extract`
    once the script body lands here, mirroring every other phase-3
    package layout.
  * The package boundary is reviewable in isolation from the eventual
    shell-script flag flip, keeping the byte-parity sentinel green at
    every step.
"""
