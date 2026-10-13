#!/usr/bin/env bash
# clone-deps.sh — single entry point for cloning + activating every host-side
# dependency the libcascade build needs:
#
#   - OCCT, rapidjson, freetype  → git clone + checkout at DEPS.json commits
#   - emsdk                       → git clone + install + activate
#   - Python virtualenv (.venv)   → synced from pyproject.toml + uv.lock
#
# Idempotent: re-running the script on an already-prepared tree fast-paths
# every step (no clones, no installs).
#
# Usage:
#   scripts/clone-deps.sh                      # default: clone into deps/
#   scripts/clone-deps.sh --dest deps          # explicit equivalent
#   scripts/clone-deps.sh --dest ..            # legacy sibling layout
#   scripts/clone-deps.sh --python-profile test # runtime + pytest
#
# OCJS_STRICT_DEPS=1 fails fast if any cloned dep is not at its DEPS.json pin.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
DEPS_FILE="$REPO_ROOT/DEPS.json"

DEST_REL="deps"
PYTHON_PROFILE="${OCJS_PYTHON_PROFILE:-development}"

while [ "$#" -gt 0 ]; do
  case "$1" in
    --dest) DEST_REL="$2"; shift 2 ;;
    --python-profile) PYTHON_PROFILE="$2"; shift 2 ;;
    -h|--help)
      sed -n '2,20p' "${BASH_SOURCE[0]}"
      exit 0
      ;;
    *)
      echo "ERROR: Unknown flag: $1" >&2
      exit 2
      ;;
  esac
done

case "$PYTHON_PROFILE" in
  runtime|test|development) ;;
  *) echo "ERROR: Python profile must be runtime, test, or development" >&2; exit 2 ;;
esac

if [ ! -f "$DEPS_FILE" ]; then
  echo "ERROR: DEPS.json not found at $DEPS_FILE" >&2
  exit 1
fi

# Resolve DEST to absolute path relative to repo root.
case "$DEST_REL" in
  /*) DEST_DIR="$DEST_REL" ;;
  *)  DEST_DIR="$REPO_ROOT/$DEST_REL" ;;
esac
mkdir -p "$DEST_DIR"

if ! command -v python3 >/dev/null 2>&1; then
  echo "ERROR: python3 is required to parse DEPS.json" >&2
  exit 1
fi

read_dep() {
  python3 -c "
import json
deps = json.load(open('$DEPS_FILE'))['dependencies']
print(deps['$1'].get('$2', ''))
"
}

retry_acquisition() {
  local attempt
  for attempt in 1 2 3 4 5; do
    "$@" && return 0
    [ "$attempt" -lt 5 ] || return 1
    sleep "$((attempt * attempt * 2))"
  done
}

retry_clone() {
  local repo="$1"
  local target="$2"
  local attempt
  for attempt in 1 2 3 4 5; do
    rm -rf "$target"
    git clone --quiet "$repo" "$target" && return 0
    [ "$attempt" -lt 5 ] || return 1
    sleep "$((attempt * attempt * 2))"
  done
}

clone_or_checkout() {
  local name="$1"
  local repo="$2"
  local commit="$3"
  local target="$DEST_DIR/$name"

  if [ -e "$target" ] && [ ! -d "$target/.git" ]; then
    echo "Removing incomplete $name checkout at $target..."
    rm -rf "$target"
  fi
  if [ ! -d "$target/.git" ]; then
    echo "Cloning $name from $repo..."
    retry_clone "$repo" "$target" || {
      rm -rf "$target"
      echo "ERROR: failed to clone pinned dependency $name" >&2
      exit 1
    }
  fi

  local current
  current="$(git -C "$target" rev-parse HEAD)"
  if [ "$current" != "$commit" ]; then
    echo "Checking out $name at $commit..."
    retry_acquisition git -C "$target" fetch --quiet origin "$commit"
    git -C "$target" checkout --quiet "$commit"
  else
    echo "$name already at $commit"
  fi
}

# ── 1. Source dependencies ──────────────────────────────────────────────────
clone_or_checkout "OCCT"      "$(read_dep occt repository)"      "$(read_dep occt commit)"
clone_or_checkout "rapidjson" "$(read_dep rapidjson repository)" "$(read_dep rapidjson commit)"
clone_or_checkout "freetype"  "$(read_dep freetype repository)"  "$(read_dep freetype commit)"

# ── 2. Emscripten SDK ───────────────────────────────────────────────────────
EMSDK_REPO=$(read_dep emscripten repository)
EMSDK_COMMIT=$(read_dep emscripten commit)
EMSDK_VERSION=$(read_dep emscripten emsdk_version)
EMSDK_DIR="$DEST_DIR/emsdk"

# Skip clone when an emsdk script is already present. This covers both the
# host case (a previous clone-deps run populated deps/emsdk/.git) and the
# Docker case (the emscripten/emsdk base image ships /emsdk with the `emsdk`
# script but typically strips the .git directory for image-size reasons).
if [ ! -x "$EMSDK_DIR/emsdk" ]; then
  echo "Cloning emsdk from $EMSDK_REPO..."
  [ ! -e "$EMSDK_DIR" ] || rm -rf "$EMSDK_DIR"
  retry_clone "$EMSDK_REPO" "$EMSDK_DIR" || {
    rm -rf "$EMSDK_DIR"
    echo "ERROR: failed to clone pinned dependency emsdk" >&2
    exit 1
  }
fi

if [ -d "$EMSDK_DIR/.git" ] && [ "$(git -C "$EMSDK_DIR" rev-parse HEAD)" != "$EMSDK_COMMIT" ]; then
  echo "Checking out emsdk at $EMSDK_COMMIT..."
  retry_acquisition git -C "$EMSDK_DIR" fetch --quiet origin "$EMSDK_COMMIT"
  git -C "$EMSDK_DIR" checkout --quiet "$EMSDK_COMMIT"
fi

if ! "$EMSDK_DIR/emsdk" list 2>/dev/null | grep -q "$EMSDK_VERSION.*INSTALLED"; then
  echo "Installing emsdk $EMSDK_VERSION..."
  retry_acquisition "$EMSDK_DIR/emsdk" install "$EMSDK_VERSION"
fi

# emsdk activate is non-idempotent in an annoying way: it always rotates
# .emscripten → .emscripten.old via os.rename + os.remove, which fails with
# EACCES if the running user can't write to $EMSDK_DIR. The Docker image
# pre-activates emsdk during build (root) and then is invoked under
# `-u "$(id -u):$(id -g)"` (non-root) where /emsdk is root-owned 0755, so an
# unconditional re-activation breaks the canonical Quickstart pattern. Skip
# when .emscripten already exists with content — emcc reads that file on
# every invocation, so re-activation is a no-op when it is already populated.
if [ -s "$EMSDK_DIR/.emscripten" ]; then
  echo "emsdk $EMSDK_VERSION already active ($EMSDK_DIR/.emscripten present), skipping activate"
else
  echo "Activating emsdk $EMSDK_VERSION..."
  "$EMSDK_DIR/emsdk" activate "$EMSDK_VERSION"
fi

# ── 3. Python virtualenv ────────────────────────────────────────────────────
# Project-local venv pinned to 3.14 for OCCT V8 bindgen toolchain
# (Python Toolchain Reshaping).
VENV_DIR="$REPO_ROOT/.venv"
REQUIRED_PYTHON_MINOR="3.14"

if ! command -v uv >/dev/null 2>&1; then
  echo "ERROR: uv is required to sync the locked Python environment." >&2
  echo "Install it from https://docs.astral.sh/uv/ and rerun clone-deps." >&2
  exit 1
fi

if [ ! -x "$VENV_DIR/bin/python" ]; then
  echo "Creating project-local venv at $VENV_DIR (Python $REQUIRED_PYTHON_MINOR via uv)..."
  uv venv --python "${REQUIRED_PYTHON_MINOR}" "$VENV_DIR"
fi

echo "Installing Python requirements for the $PYTHON_PROFILE profile..."
if command -v sha256sum >/dev/null 2>&1; then
  PROFILE_HASH="$(printf '%s\0' "$PYTHON_PROFILE" | cat - "$REPO_ROOT/pyproject.toml" "$REPO_ROOT/uv.lock" "$0" | sha256sum | awk '{print $1}')"
else
  PROFILE_HASH="$(printf '%s\0' "$PYTHON_PROFILE" | cat - "$REPO_ROOT/pyproject.toml" "$REPO_ROOT/uv.lock" "$0" | shasum -a 256 | awk '{print $1}')"
fi
PROFILE_SENTINEL="$VENV_DIR/.deps-$PYTHON_PROFILE-$PROFILE_HASH.ready"

if [ -f "$PROFILE_SENTINEL" ] && [ "${OCJS_FORCE_PYTHON_SYNC:-0}" != "1" ]; then
  echo "Python $PYTHON_PROFILE profile already verified ($PROFILE_SENTINEL)"
else
  case "$PYTHON_PROFILE" in
    runtime) UV_PROJECT_ENVIRONMENT="$VENV_DIR" uv sync --project "$REPO_ROOT" --frozen --no-dev ;;
    test) UV_PROJECT_ENVIRONMENT="$VENV_DIR" uv sync --project "$REPO_ROOT" --frozen --no-dev --group test ;;
    development) UV_PROJECT_ENVIRONMENT="$VENV_DIR" uv sync --project "$REPO_ROOT" --frozen --all-groups ;;
  esac
  rm -f "$VENV_DIR"/.deps-*.ready
  touch "$PROFILE_SENTINEL"
fi

# ── 4. Vendored LLVM 17 toolchain ───────────────────────────────────────────
# Parse-side libc++/clang headers paired with pip libclang==18.1.1 (N-1 compat
# window per libc++ support policy). Routes the discover pass through a stdlib
# the bundled libclang can fully understand, sidestepping the libclang 18 ↔
# emsdk clang 23 version skew that causes class-body parse failures.
# Vendored LLVM 17 libc++ required for libclang 18.1.1 parse pass.

LLVM17_DIR="$DEST_DIR/llvm-17"

if [ ! -d "$LLVM17_DIR" ]; then
  case "$(uname -s)-$(uname -m)" in
    Darwin-arm64)  LLVM17_PLATFORM="darwin-arm64" ;;
    Linux-x86_64)  LLVM17_PLATFORM="linux-x86_64" ;;
    Linux-aarch64) LLVM17_PLATFORM="linux-aarch64" ;;
    *)
      cat >&2 <<EOF
ERROR: Vendored LLVM 17 has no prebuilt tarball for $(uname -s)-$(uname -m).
Supported platforms: darwin-arm64, linux-x86_64, linux-aarch64.

Either add a sha256-pinned tarball for this platform to DEPS.json under
dependencies.llvm17.platforms, or run the build on one of the supported
host architectures.
EOF
      exit 1
      ;;
  esac

  LLVM17_VERSION=$(read_dep llvm17 version)
  LLVM17_BASE_URL=$(read_dep llvm17 base_url)
  LLVM17_FILENAME="$(python3 -c "
import json
deps = json.load(open('$DEPS_FILE'))['dependencies']
print(deps['llvm17']['platforms']['$LLVM17_PLATFORM']['filename'])
")"
  LLVM17_SHA256="$(python3 -c "
import json
deps = json.load(open('$DEPS_FILE'))['dependencies']
print(deps['llvm17']['platforms']['$LLVM17_PLATFORM']['sha256'])
")"

  LLVM17_URL="$LLVM17_BASE_URL/$LLVM17_FILENAME"
  LLVM17_TMP="$(mktemp -t llvm17.XXXXXX.tar.xz)"
  trap 'rm -f "$LLVM17_TMP"' EXIT

  echo "Downloading LLVM $LLVM17_VERSION ($LLVM17_PLATFORM, $LLVM17_FILENAME)..."
  if ! curl -sSL \
    --retry 5 \
    --retry-all-errors \
    --retry-delay 0 \
    --retry-max-time 300 \
    --connect-timeout 30 \
    -o "$LLVM17_TMP" "$LLVM17_URL"; then
    echo "ERROR: failed to download $LLVM17_URL" >&2
    exit 1
  fi

  if command -v shasum >/dev/null 2>&1; then
    ACTUAL_SHA="$(shasum -a 256 "$LLVM17_TMP" | awk '{print $1}')"
  elif command -v sha256sum >/dev/null 2>&1; then
    ACTUAL_SHA="$(sha256sum "$LLVM17_TMP" | awk '{print $1}')"
  else
    echo "ERROR: neither shasum nor sha256sum is available for verification" >&2
    exit 1
  fi

  if [ "$ACTUAL_SHA" != "$LLVM17_SHA256" ]; then
    cat >&2 <<EOF
ERROR: LLVM 17 tarball sha256 mismatch.
  url:      $LLVM17_URL
  expected: $LLVM17_SHA256
  actual:   $ACTUAL_SHA

Refusing to extract a tarball whose bytes do not match the pinned hash in
DEPS.json. If LLVM has legitimately republished the tarball, update the
sha256 in DEPS.json after verifying the new bytes against an independent
source (e.g. the LLVM release announcement).
EOF
    exit 1
  fi

  echo "Extracting LLVM $LLVM17_VERSION to $LLVM17_DIR..."
  rm -rf "$LLVM17_DIR.tmp"
  mkdir -p "$LLVM17_DIR.tmp"
  if ! tar -xJf "$LLVM17_TMP" --strip-components=1 -C "$LLVM17_DIR.tmp"; then
    echo "ERROR: failed to extract $LLVM17_TMP" >&2
    rm -rf "$LLVM17_DIR.tmp"
    exit 1
  fi
  mv "$LLVM17_DIR.tmp" "$LLVM17_DIR"

  if [ "$(uname -s)" = "Darwin" ]; then
    xattr -dr com.apple.quarantine "$LLVM17_DIR" 2>/dev/null || true
  fi
else
  echo "LLVM 17 already vendored at $LLVM17_DIR"
fi

# ── 5. Optional strict-commit gate ──────────────────────────────────────────
if [ "${OCJS_STRICT_DEPS:-0}" = "1" ]; then
  echo "Validating dependency commits..."
  "$VENV_DIR/bin/python" -c "
import json, subprocess, os, sys
deps = json.load(open('$DEPS_FILE'))['dependencies']
checks = [
    ('occt',     '$DEST_DIR/OCCT'),
    ('rapidjson', '$DEST_DIR/rapidjson'),
    ('freetype',  '$DEST_DIR/freetype'),
    ('emscripten', '$EMSDK_DIR'),
]
errors = []
for name, path in checks:
    if not os.path.isdir(os.path.join(path, '.git')):
        if name != 'emscripten':
            errors.append(f'  {name}: not a git repo at {path}')
        continue
    expected = deps[name]['commit']
    actual = subprocess.check_output(['git', '-C', path, 'rev-parse', 'HEAD'], text=True).strip()
    if actual != expected:
        errors.append(f'  {name}: expected {expected[:12]}, got {actual[:12]}')
    dirty = subprocess.check_output(['git', '-C', path, 'status', '--porcelain'], text=True).strip()
    if dirty:
        errors.append(f'  {name}: checkout is dirty')
if errors:
    print('ERROR: Dependency commit mismatch:', file=sys.stderr)
    for e in errors:
        print(e, file=sys.stderr)
    sys.exit(1)
"
fi

echo "All dependencies ready in $DEST_DIR"
