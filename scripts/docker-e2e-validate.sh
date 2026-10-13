#!/usr/bin/env bash
# docker-e2e-validate.sh — production-readiness gate for the libcascade
# Docker image (PR donalffons/opencascade.js#301).
#
# Validates published images using build-configs/*.yml in this repo (not
# downstream replicad YAML). CI passes OCJS_E2E_IMAGE + OCJS_E2E_BUILD_CONFIG
# after docker/build-push-action --load; local runs build the image first.
#
# final-single / final-multi:
#   Phase 0  Build image (skipped when OCJS_E2E_IMAGE is set).
#   Phase 1  Resolve build-config YAML + artefact basename.
#   Phase 2  One bounded consumer link.
#   Phase 3  Output presence assertions.
#   Phase 4  nCollectionManifest structural provenance (linked+dropped==total).
#   Phase 5  JS smoke test.
#
# final-single also links link-filter-poc.yml from its baked single-threaded
# objects and asserts the trim ratio; no separate debug candidate is built.
#
# bindgen-base (OCJS_E2E_STAGE=bindgen-base):
#   validate full configs and perform a real trimmed regenerate/compile/link.
#   The custom build compiles all of OCCT and every binding from scratch
#   (about an hour on a 4-core runner). Pull requests skip it with
#   OCJS_E2E_BINDGEN_CUSTOM_BUILD=0 because compiled-single-threaded already
#   compiles the same content from the same bindgen-content layer; main and
#   release builds keep it before anything is published.
#
# Usage:
#   ./scripts/docker-e2e-validate.sh [--build-config <path>] [--image-tag <name>]
#
# Environment:
#   OCJS_E2E_IMAGE         Pre-built image (CI); skips Phase 0 build.
#   OCJS_E2E_BUILD_CONFIG  YAML under repo root (default: build-configs/full.yml).
#   OCJS_E2E_STAGE         final-single | final-multi | bindgen-base.
#   OCJS_E2E_CPUS          Default: host CPU count (nproc); GHA ubuntu-latest has 4
#   OCJS_DOCKER_PLATFORM   Optional docker --platform (e.g. linux/amd64)
#   OCJS_E2E_OUTPUT_DIR    Default: $REPO_ROOT/docker-e2e-output
#   OCJS_E2E_BINDGEN_CUSTOM_BUILD  bindgen-base only: 0 skips the from-scratch
#                          custom build and keeps config validation (default: 1).

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

_resolve_docker_cpus() {
  local requested="${1:-$(nproc 2>/dev/null || echo 4)}"
  local docker_max
  docker_max="$(docker info --format '{{.NCPU}}' 2>/dev/null || echo "$requested")"
  docker_max="${docker_max%%.*}"
  if [ "$requested" -gt "$docker_max" ]; then
    echo "$docker_max"
  else
    echo "$requested"
  fi
}

IMAGE_TAG="${OCJS_E2E_IMAGE:-ocjs:e2e}"
BUILD_CONFIG_DEFAULT="$REPO_ROOT/build-configs/full.yml"
BUILD_CONFIG="${OCJS_E2E_BUILD_CONFIG:-$BUILD_CONFIG_DEFAULT}"
OCJS_E2E_STAGE="${OCJS_E2E_STAGE:-final-single}"
OCJS_E2E_BINDGEN_CUSTOM_BUILD="${OCJS_E2E_BINDGEN_CUSTOM_BUILD:-1}"
OUTPUT_DIR="${OCJS_E2E_OUTPUT_DIR:-$REPO_ROOT/docker-e2e-output}"
DOCKER_CPUS="$(_resolve_docker_cpus "${OCJS_E2E_CPUS:-}")"
SKIP_BUILD=0
PLATFORM_FLAGS=()
OCJS_EXPECTED_SHA="${OCJS_EXPECTED_SHA:-$(git -C "$REPO_ROOT" rev-parse HEAD)}"
SOURCE_DATE_EPOCH="${SOURCE_DATE_EPOCH:-$(git -C "$REPO_ROOT" show -s --format=%ct HEAD)}"
BUILD_VERSION="$(node -p "require('$REPO_ROOT/package.json').version")"
BUILD_ARGS=(
  "--build-arg" "SOURCE_DATE_EPOCH=0"
  "--build-arg" "REVISION=$OCJS_EXPECTED_SHA"
  "--build-arg" "OCJS_SOURCE_DATE_EPOCH=$SOURCE_DATE_EPOCH"
  "--build-arg" "VERSION=$BUILD_VERSION"
)

if [ -n "${OCJS_E2E_IMAGE:-}" ]; then
  SKIP_BUILD=1
fi

if [ -n "${OCJS_DOCKER_PLATFORM:-}" ]; then
  PLATFORM_FLAGS+=("--platform" "$OCJS_DOCKER_PLATFORM")
fi

while [ "$#" -gt 0 ]; do
  case "$1" in
    --build-config)   BUILD_CONFIG="$2"; shift 2 ;;
    --image-tag)      IMAGE_TAG="$2"; shift 2 ;;
    --output-dir)     OUTPUT_DIR="$2"; shift 2 ;;
    --skip-build)     SKIP_BUILD=1; shift ;;
    -h|--help)
      sed -n '2,35p' "${BASH_SOURCE[0]}"
      exit 0
      ;;
    *)
      echo "ERROR: Unknown flag: $1" >&2
      exit 2
      ;;
  esac
done

_stat_size() {
  local f="$1"
  stat -f%z "$f" 2>/dev/null || stat -c%s "$f" 2>/dev/null
}

_section() {
  echo ""
  echo "═══════════════════════════════════════════════════════════════"
  echo "  $1"
  echo "═══════════════════════════════════════════════════════════════"
}

_fail() {
  echo "FAIL: $1" >&2
  exit 1
}

_ok() {
  echo "  PASS: $1"
}

_resolve_artifact_basename() {
  local yaml_path="$1"
  awk '/^mainBuild:/{f=1} f && /^  name:/{gsub(/\.js$/,"",$2); print $2; exit}' "$yaml_path"
}

_run_link() {
  local yaml_host_path="$1"
  local yaml_host_dir
  local yaml_basename
  yaml_host_dir="$(dirname "$yaml_host_path")"
  yaml_basename="$(basename "$yaml_host_path")"
  if [ "${#PLATFORM_FLAGS[@]}" -gt 0 ]; then
    docker run --rm \
      "${PLATFORM_FLAGS[@]}" \
      --memory 8g --cpus "$DOCKER_CPUS" \
      -u "$(id -u):$(id -g)" \
      -v "$yaml_host_dir:/src:ro" \
      -v "$OUTPUT_DIR:/output" \
      -e OCJS_OUTPUT_DIR=/output \
      "$IMAGE_TAG" link "$yaml_basename"
  else
    docker run --rm \
      --memory 8g --cpus "$DOCKER_CPUS" \
      -u "$(id -u):$(id -g)" \
      -v "$yaml_host_dir:/src:ro" \
      -v "$OUTPUT_DIR:/output" \
      -e OCJS_OUTPUT_DIR=/output \
      "$IMAGE_TAG" link "$yaml_basename"
  fi
}

_run_validate() {
  local yaml_in_image="$1"
  if [ "${#PLATFORM_FLAGS[@]}" -gt 0 ]; then
    docker run --rm "${PLATFORM_FLAGS[@]}" "$IMAGE_TAG" validate "$yaml_in_image"
  else
    docker run --rm "$IMAGE_TAG" validate "$yaml_in_image"
  fi
}

# ── bindgen-base: validate and perform one real custom build ────────────────
if [ "$OCJS_E2E_STAGE" = "bindgen-base" ]; then
  _section "Phase 0/2  Building image ($IMAGE_TAG)"
  if [ "$SKIP_BUILD" -eq 1 ]; then
    echo "  OCJS_E2E_IMAGE set; reusing existing image."
    docker image inspect "$IMAGE_TAG" >/dev/null 2>&1 || _fail "Image $IMAGE_TAG not present."
  else
    if [ "${#PLATFORM_FLAGS[@]}" -gt 0 ]; then
      DOCKER_BUILDKIT=1 docker build \
        "${PLATFORM_FLAGS[@]}" \
        "${BUILD_ARGS[@]}" \
        --progress=plain \
        -t "$IMAGE_TAG" \
        --target bindgen-base \
        "$REPO_ROOT"
    else
      DOCKER_BUILDKIT=1 docker build \
        "${BUILD_ARGS[@]}" \
        --progress=plain \
        -t "$IMAGE_TAG" \
        --target bindgen-base \
        "$REPO_ROOT"
    fi
    _ok "Image built"
  fi

  _section "Phase 1/3  Validating full build-configs"
  for cfg in /opencascade.js/build-configs/full.yml /opencascade.js/build-configs/full_multi.yml; do
    _run_validate "$cfg"
    _ok "validate $cfg"
  done

  if [ "$OCJS_E2E_BINDGEN_CUSTOM_BUILD" = "0" ]; then
    _section "RESULT: bindgen-base Docker E2E validation PASSED (custom build skipped)"
    echo "  Image: $IMAGE_TAG"
    echo "  OCJS_E2E_BINDGEN_CUSTOM_BUILD=0: the from-scratch custom build runs on main."
    exit 0
  fi

  _section "Phase 2/3  Minimal regenerate + compile + link"
  BUILD_CONFIG="$REPO_ROOT/tests/docker/fixtures/simple.yml"
  rm -rf "$OUTPUT_DIR"
  mkdir -p "$OUTPUT_DIR"
  _run_link "$BUILD_CONFIG"
  for ext in wasm js d.ts js.symbols build-manifest.json provenance.json; do
    test -s "$OUTPUT_DIR/customBuild.simple.$ext" \
      || _fail "Missing bindgen-base custom-build artefact: customBuild.simple.$ext"
  done
  if [ "$(find "$OUTPUT_DIR" -maxdepth 1 -type f | wc -l | tr -d ' ')" -ne 6 ]; then
    _fail "Expected exactly six bindgen-base custom-build artefacts in $OUTPUT_DIR"
  fi
  node "$SCRIPT_DIR/docker-js-smoke.mjs" "$OUTPUT_DIR/customBuild.simple.js" simple \
    || _fail "bindgen-base JS smoke test failed"
  _ok "bindgen-base custom build"

  _section "RESULT: bindgen-base Docker E2E validation PASSED"
  echo "  Image: $IMAGE_TAG"
  exit 0
fi

# ── final-single / final-multi: full link gate ──────────────────────────────
_section "Phase 0/5  Building image ($IMAGE_TAG)"
if [ "$SKIP_BUILD" -eq 1 ]; then
  echo "  OCJS_E2E_IMAGE set; reusing existing image."
  docker image inspect "$IMAGE_TAG" >/dev/null 2>&1 || _fail "Image $IMAGE_TAG not present."
else
  target="final-single"
  if [ "$OCJS_E2E_STAGE" = "final-multi" ]; then
    target="final-multi"
  fi
  if [ "${#PLATFORM_FLAGS[@]}" -gt 0 ]; then
    DOCKER_BUILDKIT=1 docker build \
      "${PLATFORM_FLAGS[@]}" \
      "${BUILD_ARGS[@]}" \
      --progress=plain \
      -t "$IMAGE_TAG" \
      --target "$target" \
      "$REPO_ROOT"
  else
    DOCKER_BUILDKIT=1 docker build \
      "${BUILD_ARGS[@]}" \
      --progress=plain \
      -t "$IMAGE_TAG" \
      --target "$target" \
      "$REPO_ROOT"
  fi
  _ok "Image built"
fi

_section "Phase 1/5  Resolving build-config YAML"
if [ ! -f "$BUILD_CONFIG" ]; then
  _fail "BUILD_CONFIG not found at $BUILD_CONFIG
Override with --build-config <path> or OCJS_E2E_BUILD_CONFIG=<path>."
fi
BUILD_CONFIG_ABS="$(cd "$(dirname "$BUILD_CONFIG")" && pwd)/$(basename "$BUILD_CONFIG")"
ARTIFACT_BASENAME="$(_resolve_artifact_basename "$BUILD_CONFIG_ABS")"
if [ -z "$ARTIFACT_BASENAME" ]; then
  _fail "Could not read mainBuild.name from $BUILD_CONFIG_ABS"
fi
_ok "Using $BUILD_CONFIG_ABS (artefact prefix: ${ARTIFACT_BASENAME})"

rm -rf "$OUTPUT_DIR"
mkdir -p "$OUTPUT_DIR"

CANDIDATE_JS="$OUTPUT_DIR/${ARTIFACT_BASENAME}.js"
PROV_FILE="$OUTPUT_DIR/${ARTIFACT_BASENAME}.provenance.json"

_section "Phase 2/5  Consumer link against ${ARTIFACT_BASENAME}"
_run_link "$BUILD_CONFIG_ABS"
_ok "Consumer link"

_section "Phase 3/5  Asserting output artefacts"
EXPECTED_ARTIFACTS=(
  "${ARTIFACT_BASENAME}.wasm"
  "${ARTIFACT_BASENAME}.js"
  "${ARTIFACT_BASENAME}.d.ts"
  "${ARTIFACT_BASENAME}.js.symbols"
  "${ARTIFACT_BASENAME}.provenance.json"
  "${ARTIFACT_BASENAME}.build-manifest.json"
)
for f in "${EXPECTED_ARTIFACTS[@]}"; do
  if [ ! -f "$OUTPUT_DIR/$f" ]; then
    _fail "Missing artefact: $OUTPUT_DIR/$f"
  fi
  _ok "$f ($(_stat_size "$OUTPUT_DIR/$f") bytes)"
done
if [ "$(find "$OUTPUT_DIR" -maxdepth 1 -type f | wc -l | tr -d ' ')" -ne 6 ]; then
  _fail "Expected exactly six artefacts in $OUTPUT_DIR"
fi

CANDIDATE_JS="$OUTPUT_DIR/${ARTIFACT_BASENAME}.js"
PROV_FILE="$OUTPUT_DIR/${ARTIFACT_BASENAME}.provenance.json"

_section "Phase 4/5  nCollectionManifest provenance (structural)"
python3 "$SCRIPT_DIR/docker-ncollection-check.py" structural "$PROV_FILE" \
  || _fail "nCollectionManifest provenance assertion failed"

if [ -n "${OCJS_EXPECTED_SHA:-}" ]; then
  python3 - "$PROV_FILE" "${OCJS_EXPECTED_SHA}" "${SOURCE_DATE_EPOCH:-}" <<'PY'
import datetime
import json
import sys

path, expected_sha, epoch = sys.argv[1:]
with open(path) as source:
    provenance = json.load(source)
actual_sha = provenance.get("source", {}).get("opencascadejsCommit")
if actual_sha != expected_sha:
    raise SystemExit(f"{path}: expected source SHA {expected_sha}, got {actual_sha}")
if epoch:
    expected_time = datetime.datetime.fromtimestamp(int(epoch), datetime.timezone.utc)
    actual_time = datetime.datetime.fromisoformat(provenance["timestamp"])
    if actual_time != expected_time:
        raise SystemExit(f"{path}: expected timestamp {expected_time.isoformat()}, got {actual_time.isoformat()}")
PY
  _ok "source SHA + deterministic timestamp"
fi

if [ "$OCJS_E2E_STAGE" = "final-single" ]; then
  _section "Phase 4b/5  Link-filter trim gate from baked single-threaded objects"
  FULL_OUTPUT_DIR="$OUTPUT_DIR"
  OUTPUT_DIR="${FULL_OUTPUT_DIR}-link-filter"
  rm -rf "$OUTPUT_DIR"
  mkdir -p "$OUTPUT_DIR"
  _run_link "$REPO_ROOT/build-configs/link-filter-poc.yml"
  for ext in wasm js d.ts js.symbols build-manifest.json provenance.json; do
    test -s "$OUTPUT_DIR/opencascade_linkfilter_poc.$ext" \
      || _fail "Missing link-filter artefact: opencascade_linkfilter_poc.$ext"
  done
  python3 "$SCRIPT_DIR/docker-ncollection-check.py" trim \
    "$OUTPUT_DIR/opencascade_linkfilter_poc.provenance.json"
  OUTPUT_DIR="$FULL_OUTPUT_DIR"
  _ok "link-filter trim gate"
fi

_section "Phase 5/5  JS smoke test against ${ARTIFACT_BASENAME}.js"
node "$SCRIPT_DIR/docker-js-smoke.mjs" "$CANDIDATE_JS" || _fail "JS smoke test failed"

_section "RESULT: Docker E2E validation PASSED"
echo "  Image:       $IMAGE_TAG"
echo "  Config:      $BUILD_CONFIG_ABS"
echo "  Output dir:  $OUTPUT_DIR"
