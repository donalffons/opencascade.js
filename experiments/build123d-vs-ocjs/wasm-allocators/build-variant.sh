#!/usr/bin/env bash
# Build one allocator variant of the minimal samples-only OCJS WASM.
#
# Usage: ./build-variant.sh <allocator>
#   <allocator>: dlmalloc | emmalloc | mimalloc
#
# Each variant writes to a distinct OCJS_OUTPUT_DIR so the three artifacts
# coexist. The harness picks them via --artifact-dir.

set -euo pipefail

ALLOCATOR="${1:-}"
case "$ALLOCATOR" in
  dlmalloc|emmalloc|mimalloc) ;;
  *)
    echo "Usage: $0 <dlmalloc|emmalloc|mimalloc>" >&2
    exit 1
    ;;
esac

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OCJS_ROOT="$(cd "$SCRIPT_DIR/../../.." && pwd)"
YAML="$SCRIPT_DIR/samples-${ALLOCATOR}.yml"
OUT_DIR="$SCRIPT_DIR/dist-${ALLOCATOR}"

if [ ! -f "$YAML" ]; then
  echo "ERROR: $YAML not found" >&2
  exit 1
fi

mkdir -p "$OUT_DIR"

echo "[$(date +%T)] Linking ${ALLOCATOR} variant"
echo "  YAML:       $YAML"
echo "  Output dir: $OUT_DIR"
echo "  OCJS root:  $OCJS_ROOT"
echo ""

# Match the env that the warm bindings cache was compiled with
# (see repos/opencascade.js/build/build-flags.json).
export OCJS_OPT="-O3"
export OCJS_LTO="0"
export OCJS_EXCEPTIONS="1"
export OCJS_EH_MODE="wasm"
export OCJS_SIMD="1"
export OCJS_RELAXED_SIMD="0"
export THREADING="single-threaded"
export OCJS_DEFINES="OCCT_NO_DUMP"
export OCJS_UNDEFINES="OCC_CONVERT_SIGNALS"
# wasm-opt at -O3 (parity with the published OCJS build's LTO-off posture;
# the current `single-threaded` preset uses wasm-opt -O4, but we pin -O3 here
# so the allocator delta isn't confounded by binaryen's extra -O4 passes).
export OCJS_WASM_OPT_LEVEL="-O3"
export OCJS_CLOSURE="false"
export OCJS_CONVERGE="false"
export OCJS_OUTPUT_DIR="$OUT_DIR"

cd "$OCJS_ROOT"

START=$(date +%s)
./build-wasm.sh link "$YAML"
END=$(date +%s)

echo ""
echo "[$(date +%T)] ${ALLOCATOR} link complete in $((END - START))s"
echo "Artifacts:"
ls -la "$OUT_DIR"/opencascade_single.{js,wasm,wasm-symbols.json} 2>/dev/null || ls -la "$OUT_DIR"
