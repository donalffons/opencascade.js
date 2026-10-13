#!/usr/bin/env bash
# Run the existing ocjs/run-bench.mjs harness against a previously-built
# allocator variant.
#
# Usage: ./run-variant.sh <allocator>
#   <allocator>: dlmalloc | emmalloc | mimalloc
#
# Writes results/wasm-alloc-<allocator>-latest.json (relative to the experiment
# root, NOT to wasm-allocators/).

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
EXPERIMENT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
ARTIFACT_DIR="$SCRIPT_DIR/dist-${ALLOCATOR}"
RESULTS_DIR="$EXPERIMENT_ROOT/results"

if [ ! -f "$ARTIFACT_DIR/opencascade_single.wasm" ]; then
  echo "ERROR: $ARTIFACT_DIR/opencascade_single.wasm not found." >&2
  echo "       Run ./build-variant.sh ${ALLOCATOR} first." >&2
  exit 1
fi

mkdir -p "$RESULTS_DIR"

echo "[$(date +%T)] Benchmarking ${ALLOCATOR} variant"
echo "  Artifact: $ARTIFACT_DIR"
echo "  WASM size: $(du -h "$ARTIFACT_DIR/opencascade_single.wasm" | cut -f1)"
echo ""

node "$EXPERIMENT_ROOT/ocjs/run-bench.mjs" \
  --warmup "${WARMUP:-2}" \
  --iters "${ITERS:-7}" \
  --artifact-dir "$ARTIFACT_DIR" \
  --engine "ocjs-${ALLOCATOR}" \
  --out "$RESULTS_DIR/wasm-alloc-${ALLOCATOR}-latest.json" \
  "${@:2}"

echo ""
echo "[$(date +%T)] ${ALLOCATOR} bench complete -> $RESULTS_DIR/wasm-alloc-${ALLOCATOR}-latest.json"
