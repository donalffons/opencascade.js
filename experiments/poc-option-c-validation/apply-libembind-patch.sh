#!/usr/bin/env bash
# Restore the vendored emsdk's libembind.js to the C1-only OCJS-patched state.
#
# Unlike the sibling PoCs (`poc-overload-dispatch-cost`, `libembind-fan-out-poc`)
# which toggle between pristine and patched libembind, this PoC uses ONE
# libembind state for BOTH builds (Corpus A and Corpus B). The validating
# claim of Option C is that retiring the C2 trailing-default fan-out requires
# zero libembind modification — see Finding 0 in
# `docs/research/ocjs-option-c-validation-experiment-design.md`.
#
# This script exists for symmetry with the sibling PoCs and to guarantee a
# deterministic libembind state before building, regardless of what the
# previous experiment may have left behind.
set -euo pipefail
cd "$(dirname "$0")"

EMSDK_LIBEMBIND="/Users/rifont/git/tau/repos/assimpjs/emsdk/upstream/emscripten/src/lib/libembind.js"
PATCHED_SNAPSHOT="$(pwd)/libembind.ocjs-patched.js"

[[ -f "${PATCHED_SNAPSHOT}" ]] || { echo "Missing ${PATCHED_SNAPSHOT}" >&2; exit 1; }

case "${1:-apply}" in
  apply|restore)
    cp "${PATCHED_SNAPSHOT}" "${EMSDK_LIBEMBIND}"
    echo "applied: ocjs-patched C1-only libembind"
    ;;
  *)
    echo "Usage: $0 [apply|restore]" >&2
    exit 1
    ;;
esac
