#!/usr/bin/env bash
# Run the native bench (after build-bench.sh has produced the binary)
# and write JSON results into ../results/.
#
# Usage:
#   ./run-bench.sh lto    [--warmup 2 --iters 7]
#   ./run-bench.sh nolto  [--warmup 2 --iters 7]

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OCJS_ROOT="$(cd "$SCRIPT_DIR/../../.." && pwd)"
RESULTS_DIR="$SCRIPT_DIR/../results"

VARIANT="${1:-lto}"
case "$VARIANT" in
  lto|nolto) ;;
  *) echo "Usage: $0 {lto|nolto} [extra bench args]" >&2; exit 1 ;;
esac
shift

BENCH="$OCJS_ROOT/build-native-bench-$VARIANT/bench"
if [ ! -x "$BENCH" ]; then
  echo "ERROR: bench binary not found at $BENCH" >&2
  echo "Run build-bench.sh $VARIANT first." >&2
  exit 1
fi

mkdir -p "$RESULTS_DIR"

EXTRA_FLAGS=""
[ "$VARIANT" = "lto" ] && EXTRA_FLAGS="--lto"

"$BENCH" \
  --engine "native-cpp-occt-$VARIANT" \
  --out "$RESULTS_DIR/native-$VARIANT-latest.json" \
  $EXTRA_FLAGS \
  --warmup "${WARMUP:-2}" \
  --iters "${ITERS:-7}" \
  "$@"

echo
echo "Wrote: $RESULTS_DIR/native-$VARIANT-latest.json"
