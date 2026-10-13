#!/usr/bin/env bash
# Install a checksum-pinned CI tool from DEPS.json with bounded acquisition retry.

set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
manifest="$script_dir/../DEPS.json"
destination="$script_dir/../.ci-tools"
tool=""

while [ "$#" -gt 0 ]; do
  case "$1" in
    --tool) tool="$2"; shift 2 ;;
    --dest) destination="$2"; shift 2 ;;
    --manifest) manifest="$2"; shift 2 ;;
    *) echo "ERROR: unknown flag: $1" >&2; exit 2 ;;
  esac
done

case "$tool" in actionlint|vale) ;; *) echo "ERROR: --tool must be actionlint or vale" >&2; exit 2 ;; esac

case "${OCJS_CI_TOOL_PLATFORM:-$(uname -s)-$(uname -m)}" in
  Darwin-arm64) platform=darwin-arm64 ;;
  Linux-x86_64) platform=linux-amd64 ;;
  Linux-aarch64) platform=linux-arm64 ;;
  darwin-arm64|linux-amd64|linux-arm64) platform="${OCJS_CI_TOOL_PLATFORM}" ;;
  *) echo "ERROR: unsupported CI-tool platform" >&2; exit 1 ;;
esac

read_tool() {
  python3 -c "import json; print(json.load(open('$manifest'))['ci_tools']['$tool']$1)"
}

version="$(read_tool "['version']")"
base_url="$(read_tool "['base_url']")"
filename="$(read_tool "['platforms']['$platform']['filename']")"
archive_sha="$(read_tool "['platforms']['$platform']['sha256']")"
binary_sha="$(read_tool "['platforms']['$platform']['binary_sha256']")"
binary="$destination/bin/$tool"

sha256() {
  if command -v sha256sum >/dev/null 2>&1; then sha256sum "$1" | awk '{print $1}'; else shasum -a 256 "$1" | awk '{print $1}'; fi
}

if [ -x "$binary" ] && [ "$(sha256 "$binary")" = "$binary_sha" ]; then
  echo "$tool $version already verified at $binary"
  exit 0
fi

rm -f "$binary"
archive="$(mktemp -t "$tool.XXXXXX.tar.gz")"
extract_dir="$(mktemp -d -t "$tool.XXXXXX")"
trap 'rm -rf "$archive" "$extract_dir"' EXIT

curl -sSL \
  --retry 5 \
  --retry-all-errors \
  --retry-delay 0 \
  --retry-max-time 300 \
  --connect-timeout 30 \
  -o "$archive" "$base_url/$filename"

actual_archive_sha="$(sha256 "$archive")"
test "$actual_archive_sha" = "$archive_sha" || {
  echo "ERROR: $tool archive checksum mismatch: expected $archive_sha, got $actual_archive_sha" >&2
  exit 1
}

tar -xzf "$archive" -C "$extract_dir"
source_binary="$(find "$extract_dir" -type f -name "$tool" -print -quit)"
test -n "$source_binary"
actual_binary_sha="$(sha256 "$source_binary")"
test "$actual_binary_sha" = "$binary_sha" || {
  echo "ERROR: $tool binary checksum mismatch: expected $binary_sha, got $actual_binary_sha" >&2
  exit 1
}

mkdir -p "$(dirname "$binary")"
install -m 0755 "$source_binary" "$binary"
