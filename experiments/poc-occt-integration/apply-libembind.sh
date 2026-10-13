#!/usr/bin/env bash
# Switch the active libembind snapshot in the assimpjs emsdk between:
#   c1        — vendored C1-only patch (stale snapshot from poc-overload-dispatch-cost)
#   c1+pad    — c1 + bounded arity-padding extension (Gates 1–3)
#   prod      — current production patch (src/patches/libembind-overloading.patch) applied to pristine upstream
#   prod+pad  — prod + the 3 Gate-1 hunks layered on top (R1 validation)
#
# All snapshots are tracked in this experiment dir. The assimpjs emsdk path
# is the same one the sibling PoCs use; switching is a single `cp`.
#
# Usage: ./apply-libembind.sh [c1|c1+pad|prod|prod+pad]   (default: prod+pad)
set -euo pipefail
cd "$(dirname "$0")"

EMSDK_LIBEMBIND="/Users/rifont/git/tau/repos/assimpjs/emsdk/upstream/emscripten/src/lib/libembind.js"
C1_SNAPSHOT="$(cd .. && pwd)/poc-overload-dispatch-cost/libembind.ocjs-patched.js"
C1_PAD_SNAPSHOT="$(pwd)/libembind.c1+arity-pad.js"
PROD_SNAPSHOT="$(pwd)/libembind.production.js"
PROD_PAD_SNAPSHOT="$(pwd)/libembind.production+arity-pad.js"

WHICH="${1:-prod+pad}"
case "${WHICH}" in
  c1)
    cp "${C1_SNAPSHOT}" "${EMSDK_LIBEMBIND}"
    echo "applied: C1-only (stale)"
    ;;
  c1+pad)
    cp "${C1_PAD_SNAPSHOT}" "${EMSDK_LIBEMBIND}"
    echo "applied: c1 + bounded arity-pad extension (Gates 1–3 snapshot)"
    ;;
  prod)
    [[ -f "${PROD_SNAPSHOT}" ]] || { echo "missing ${PROD_SNAPSHOT}" >&2; exit 1; }
    cp "${PROD_SNAPSHOT}" "${EMSDK_LIBEMBIND}"
    echo "applied: production patch (current src/patches/libembind-overloading.patch)"
    ;;
  prod+pad)
    [[ -f "${PROD_PAD_SNAPSHOT}" ]] || { echo "missing ${PROD_PAD_SNAPSHOT}" >&2; exit 1; }
    cp "${PROD_PAD_SNAPSHOT}" "${EMSDK_LIBEMBIND}"
    echo "applied: production + bounded arity-pad extension (R1 layered)"
    ;;
  *)
    echo "Usage: $0 [c1|c1+pad|prod|prod+pad]" >&2
    exit 1
    ;;
esac
