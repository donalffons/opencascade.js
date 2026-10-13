#!/usr/bin/env bash

set -euo pipefail

TARBALL="${OCJS_PACKAGE_TARBALL:?OCJS_PACKAGE_TARBALL is required}"
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT

node -e "require('node:fs').writeFileSync(process.argv[1], JSON.stringify({ private: true, type: 'module' }) + '\n')" \
  "$WORK/package.json"
cp "$ROOT/scripts/browser-runtime-matrix.mjs" "$WORK/browser-runtime-matrix.mjs"
mkdir -p "$WORK/lib"
cp "$ROOT/scripts/lib/browser-runtime-result.mjs" "$WORK/lib/browser-runtime-result.mjs"

npm install \
  --prefix "$WORK" \
  --ignore-scripts \
  --no-audit \
  --no-fund \
  --no-package-lock \
  "$TARBALL" \
  playwright@1.60.0

(
  cd "$WORK"
  npx --no-install playwright install --with-deps chromium firefox webkit
  node browser-runtime-matrix.mjs node_modules/libcascade
)
