#!/usr/bin/env bash
# Build + benchmark all three allocator variants back-to-back, then merge the
# results into wasm-allocator-comparison.json.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
EXPERIMENT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
RESULTS_DIR="$EXPERIMENT_ROOT/results"

for ALLOC in dlmalloc emmalloc mimalloc; do
  echo ""
  echo "════════════════════════════════════════════════════════════════"
  echo "  Building ${ALLOC} variant"
  echo "════════════════════════════════════════════════════════════════"
  "$SCRIPT_DIR/build-variant.sh" "$ALLOC"

  echo ""
  echo "════════════════════════════════════════════════════════════════"
  echo "  Benchmarking ${ALLOC} variant"
  echo "════════════════════════════════════════════════════════════════"
  "$SCRIPT_DIR/run-variant.sh" "$ALLOC"
done

echo ""
echo "════════════════════════════════════════════════════════════════"
echo "  Merging results"
echo "════════════════════════════════════════════════════════════════"

node "$SCRIPT_DIR/merge-allocator-results.mjs" \
  "$RESULTS_DIR/wasm-alloc-dlmalloc-latest.json" \
  "$RESULTS_DIR/wasm-alloc-emmalloc-latest.json" \
  "$RESULTS_DIR/wasm-alloc-mimalloc-latest.json" \
  --out "$RESULTS_DIR/wasm-allocator-comparison.json"

echo ""
echo "Done. See $RESULTS_DIR/wasm-allocator-comparison.json"
