#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"

if [ "$#" -lt 6 ]; then
  echo "usage: promote-ghcr-tag.sh <immutable|mutable> <image> <tag> <sha> <version> <source>..." >&2
  exit 2
fi

mode="$1"
image="$2"
tag="$3"
full_sha="$4"
version="$5"
shift 5
sources=("$@")
reference="$image:$tag"

case "$mode" in
  immutable) mutable=false ;;
  mutable) mutable=true ;;
  *) echo "unsupported promotion mode: $mode" >&2; exit 2 ;;
esac

native_digests() {
  local source="$1"
  local digests
  digests="$(
    docker buildx imagetools inspect "$source" --raw |
      jq -r '
        if (.manifests? | type) == "array" then
          .manifests[] |
          select(.annotations["vnd.docker.reference.type"] != "attestation-manifest") |
          .digest
        else empty end
      '
  )"
  if [ -n "$digests" ]; then
    printf '%s\n' "$digests"
  else
    printf '%s\n' "${source##*@}"
  fi
}

expected_native_digests="$(
  for source in "${sources[@]}"; do native_digests "$source"; done |
    sort -u |
    paste -sd, -
)"
test -n "$expected_native_digests"

labels_match() {
  local digest labels
  IFS=, read -r -a digests <<< "$1"
  for digest in "${digests[@]}"; do
    labels="$(
      docker buildx imagetools inspect "$image@$digest" \
        --format '{{json .Image.Config.Labels}}'
    )"
    test "$(jq -r '."org.opencontainers.image.source"' <<< "$labels")" = \
      'https://github.com/taucad/opencascade.js' || return 1
    test "$(jq -r '."org.opencontainers.image.revision"' <<< "$labels")" = "$full_sha" || return 1
    test "$(jq -r '."org.opencontainers.image.version"' <<< "$labels")" = "$version" || return 1
  done
}

labels_match "$expected_native_digests"
exists=false
exact=false
signature_valid=false
if docker buildx imagetools inspect "$reference" >/dev/null 2>&1; then
  exists=true
  published_native_digests="$(
    native_digests "$reference" |
      sort -u |
      paste -sd, -
  )"
  platforms="$(
    docker buildx imagetools inspect "$reference" --raw |
      jq -r '[
        .manifests[] |
        select(.annotations["vnd.docker.reference.type"] != "attestation-manifest") |
        .platform | "\(.os)/\(.architecture)"
      ] | sort | join(",")'
  )"
  if [ "$published_native_digests" = "$expected_native_digests" ] &&
    [ "$platforms" = 'linux/amd64,linux/arm64' ] &&
    labels_match "$published_native_digests"; then
    exact=true
    if cosign verify \
      --certificate-identity-regexp '^https://github.com/taucad/opencascade\.js/\.github/workflows/docker\.yml@refs/(heads|tags)/.+' \
      --certificate-oidc-issuer https://token.actions.githubusercontent.com \
      "$reference" >/dev/null 2>&1; then
      signature_valid=true
    fi
  fi
fi

action="$(
  node "$script_dir/ghcr-promotion.mjs" decide \
    "$exists" "$mutable" "$exact" "$signature_valid"
)"
case "$action" in
  create|replace)
    docker buildx imagetools create -t "$reference" "${sources[@]}"
    ;;
  conflict)
    echo "immutable GHCR tag collision: $reference" >&2
    exit 1
    ;;
  reuse|sign) ;;
  *) echo "unsupported promotion action: $action" >&2; exit 1 ;;
esac

published_native_digests="$(
  native_digests "$reference" |
    sort -u |
    paste -sd, -
)"
test "$published_native_digests" = "$expected_native_digests"
platforms="$(
  docker buildx imagetools inspect "$reference" --raw |
    jq -r '[
      .manifests[] |
      select(.annotations["vnd.docker.reference.type"] != "attestation-manifest") |
      .platform | "\(.os)/\(.architecture)"
    ] | sort | join(",")'
)"
test "$platforms" = 'linux/amd64,linux/arm64'
labels_match "$published_native_digests"

if ! cosign verify \
  --certificate-identity-regexp '^https://github.com/taucad/opencascade\.js/\.github/workflows/docker\.yml@refs/(heads|tags)/.+' \
  --certificate-oidc-issuer https://token.actions.githubusercontent.com \
  "$reference" >/dev/null 2>&1; then
  digest="$(
    docker buildx imagetools inspect "$reference" \
      --format '{{json .Manifest}}' |
      jq -r '.digest'
  )"
  cosign sign --yes "$image@$digest"
fi
