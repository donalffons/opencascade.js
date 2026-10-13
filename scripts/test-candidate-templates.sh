#!/usr/bin/env bash

set -euo pipefail

TARBALL="${OCJS_PACKAGE_TARBALL:?OCJS_PACKAGE_TARBALL is required}"
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
WORK="$(mktemp -d)"
SERVER_PID=""
trap 'test -z "$SERVER_PID" || kill "$SERVER_PID" 2>/dev/null || true; rm -rf "$WORK"' EXIT

copy_source_tree() {
  local source="$1"
  local destination="$2"
  mkdir -p "$destination"
  tar \
    --exclude='./node_modules' \
    --exclude='./dist' \
    --exclude='./.next' \
    --exclude='./.vercel' \
    --exclude='./tsconfig.tsbuildinfo' \
    --exclude='./public/opencascade_single.wasm' \
    -C "$source" -cf - . | tar -C "$destination" -xf -
}

mkdir -p "$WORK/starter-templates"
copy_source_tree "$ROOT/starter-templates/_shared" "$WORK/starter-templates/_shared"
for name in vite-three-glb vite-three-glb-multi next-three-glb node-step-export; do
  copy_source_tree "$ROOT/starter-templates/$name" "$WORK/starter-templates/$name"
  node - "$WORK/starter-templates/$name/package.json" "$TARBALL" <<'NODE'
const fs = require('node:fs');
const path = require('node:path');
const [manifestPath, tarball] = process.argv.slice(2);
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
manifest.dependencies.libcascade = `file:${path.resolve(tarball)}`;
fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
NODE
  (
    cd "$WORK/starter-templates/$name"
    corepack pnpm@9.15.9 install --ignore-workspace --no-frozen-lockfile
    corepack pnpm@9.15.9 build
  )
done

npm install --prefix "$WORK/starter-templates" --ignore-scripts --no-audit --no-fund playwright@1.60.0 pngjs@7.0.0
npx --prefix "$WORK/starter-templates" playwright install chromium

run_browser_smoke() {
  local name="$1"
  local start="$2"
  local url="$3"
  (
    cd "$WORK/starter-templates/$name"
    corepack pnpm@9.15.9 "$start"
  ) >"$WORK/$name.log" 2>&1 &
  SERVER_PID=$!
  for _ in $(seq 1 60); do
    curl --silent --fail "$url" >/dev/null && break
    sleep 1
  done
  curl --silent --fail "$url" >/dev/null
  (cd "$WORK/starter-templates/$name" && corepack pnpm@9.15.9 smoke)
  kill "$SERVER_PID"
  wait "$SERVER_PID" 2>/dev/null || true
  SERVER_PID=""
}

run_browser_smoke vite-three-glb preview http://127.0.0.1:4173
run_browser_smoke vite-three-glb-multi preview http://127.0.0.1:4173
run_browser_smoke next-three-glb start http://127.0.0.1:3000
(cd "$WORK/starter-templates/node-step-export" && corepack pnpm@9.15.9 smoke)
