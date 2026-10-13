#!/usr/bin/env bash
# Toggle vendored emsdk libembind.js between pristine upstream 5.0.1 and the
# OCJS-overloading-patched variant. Both source snapshots live next to this
# script (libembind.upstream-5.0.1.js and libembind.ocjs-patched.js) so the
# toggle is deterministic and byte-reversible.
set -euo pipefail
cd "$(dirname "$0")"

EMSDK_LIBEMBIND="/Users/rifont/git/tau/repos/assimpjs/emsdk/upstream/emscripten/src/lib/libembind.js"
UPSTREAM_SNAPSHOT="$(pwd)/libembind.upstream-5.0.1.js"
PATCHED_SNAPSHOT="$(pwd)/libembind.ocjs-patched.js"

[[ -f "${UPSTREAM_SNAPSHOT}" ]] || { echo "Missing ${UPSTREAM_SNAPSHOT}" >&2; exit 1; }
[[ -f "${PATCHED_SNAPSHOT}"  ]] || { echo "Missing ${PATCHED_SNAPSHOT}"  >&2; exit 1; }

case "${1:-baseline}" in
  baseline)
    cp "${UPSTREAM_SNAPSHOT}" "${EMSDK_LIBEMBIND}"
    echo "baseline (pristine emscripten 5.0.1 libembind.js — arity-only dispatch)"
    ;;
  patched)
    cp "${PATCHED_SNAPSHOT}"  "${EMSDK_LIBEMBIND}"
    echo "patched (OCJS-overloading C1 same-arity type-based dispatch)"
    ;;
  restore)
    cp "${PATCHED_SNAPSHOT}"  "${EMSDK_LIBEMBIND}"
    echo "restored to ocjs-patched state"
    ;;
  *)
    echo "Usage: $0 [baseline|patched|restore]" >&2
    exit 1
    ;;
esac
