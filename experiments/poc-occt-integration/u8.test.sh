#!/usr/bin/env bash
# u8.test.sh — Tier-4 U8: generate the v2 libembind-overloading.patch
# (production-current + 3 Gate-1 hunks) and validate it against pristine
# upstream emscripten.
#
# Three assertions:
#   (1) `diff -u pristine production+pad` produces a patch file that
#       PRODUCTION's `patch` tool accepts (clean apply).
#   (2) Applying the v2 patch to pristine yields a file BYTE-IDENTICAL
#       to libembind.production+arity-pad.js (no drift).
#   (3) Double-applying the v2 patch FAILS LOUDLY (idempotency check —
#       a build hiccup that runs the patch step twice must not silently
#       corrupt the file).
#
# Writes results.u8.json with structured outcomes.
set -uo pipefail
cd "$(dirname "$0")"

PRISTINE="/Users/rifont/git/tau/repos/emscripten/src/lib/libembind.js"
PROD_PAD="libembind.production+arity-pad.js"
V2_PATCH="libembind-overloading.v2.patch"
TMP_DIR="/tmp/u8-roundtrip"
RESULTS="results.u8.json"

[[ -f "${PRISTINE}" ]] || { echo "missing pristine: ${PRISTINE}" >&2; exit 1; }
[[ -f "${PROD_PAD}" ]] || { echo "missing prod+pad: ${PROD_PAD}" >&2; exit 1; }

rm -rf "${TMP_DIR}"; mkdir -p "${TMP_DIR}"

# ── (0) Generate the v2 patch from pristine → prod+pad ───────────────
echo "── U8 (0): generating ${V2_PATCH} via diff -u ${PRISTINE} → ${PROD_PAD} ──"
diff -u "${PRISTINE}" "${PROD_PAD}" > "${V2_PATCH}" || true   # diff exits 1 if files differ
v2_lines=$(wc -l < "${V2_PATCH}")
v2_hunks=$(grep -c '^@@' "${V2_PATCH}" || true)
echo "  v2 patch: ${v2_lines} lines, ${v2_hunks} hunks"

# ── (1) Clean-apply assertion ────────────────────────────────────────
echo "── U8 (1): apply v2 patch to pristine ──"
cp "${PRISTINE}" "${TMP_DIR}/test1.js"
if patch "${TMP_DIR}/test1.js" < "${V2_PATCH}" > "${TMP_DIR}/apply1.log" 2>&1; then
  apply1="clean-apply"
  echo "  ✓ clean apply"
else
  apply1="apply-failed"
  echo "  ✗ apply failed"
  cat "${TMP_DIR}/apply1.log"
fi

# ── (2) Byte-identical roundtrip assertion ───────────────────────────
echo "── U8 (2): patched pristine === libembind.production+arity-pad.js ──"
if diff -q "${TMP_DIR}/test1.js" "${PROD_PAD}" > "${TMP_DIR}/diff1.log" 2>&1; then
  roundtrip="identical"
  echo "  ✓ byte-identical"
else
  roundtrip="drift"
  echo "  ✗ DRIFT: patched pristine != prod+pad snapshot"
  diff "${TMP_DIR}/test1.js" "${PROD_PAD}" | head -20
fi

# ── (3) Double-apply idempotency (must FAIL LOUDLY) ──────────────────
echo "── U8 (3): double-apply must fail loudly ──"
cp "${TMP_DIR}/test1.js" "${TMP_DIR}/test2.js"
# `patch` will detect "patch already applied" and prompt — we use
# `--forward -N` to make it non-interactive and check the exit code.
if patch --forward -N "${TMP_DIR}/test2.js" < "${V2_PATCH}" > "${TMP_DIR}/apply2.log" 2>&1; then
  double_apply="silent-accept"
  echo "  ✗ second apply SILENTLY ACCEPTED — idempotency hazard"
  tail -10 "${TMP_DIR}/apply2.log"
else
  double_apply="loud-fail"
  echo "  ✓ second apply rejected"
  head -5 "${TMP_DIR}/apply2.log" | sed 's/^/    /'
fi

# ── (4) Compare with the production patch line count ────────────────
prod_patch="../../src/patches/libembind-overloading.patch"
prod_lines=$(wc -l < "${prod_patch}")
prod_hunks=$(grep -c '^@@' "${prod_patch}" || true)
delta_lines=$(( v2_lines - prod_lines ))
delta_hunks=$(( v2_hunks - prod_hunks ))
echo "── U8 (4): patch growth vs current production ──"
echo "  current production: ${prod_lines} lines / ${prod_hunks} hunks"
echo "  v2 (current + arity-pad): ${v2_lines} lines / ${v2_hunks} hunks"
echo "  delta: +${delta_lines} lines / +${delta_hunks} hunks"

# ── Summary + JSON ───────────────────────────────────────────────────
verdict_pass=true
[[ "${apply1}" == "clean-apply" ]]      || verdict_pass=false
[[ "${roundtrip}" == "identical" ]]     || verdict_pass=false
[[ "${double_apply}" == "loud-fail" ]]  || verdict_pass=false

if [[ "${verdict_pass}" == "true" ]]; then
  verdict='v2 patch is deployment-ready: applies cleanly to pristine upstream emscripten, produces a byte-identical libembind to the in-tree snapshot, and double-application is rejected loudly. Gate 4 can drop libembind-overloading.v2.patch into src/patches/ directly.'
else
  verdict='At least one U8 assertion failed — patch artefact is not deployment-ready. See test outputs above.'
fi

cat > "${RESULTS}" <<JSON
{
  "v2PatchPath": "${V2_PATCH}",
  "v2PatchLines": ${v2_lines},
  "v2PatchHunks": ${v2_hunks},
  "productionPatchLines": ${prod_lines},
  "productionPatchHunks": ${prod_hunks},
  "deltaLines": ${delta_lines},
  "deltaHunks": ${delta_hunks},
  "cleanApply": "${apply1}",
  "byteIdenticalRoundtrip": "${roundtrip}",
  "doubleApplyBehaviour": "${double_apply}",
  "verdict": "${verdict}",
  "allPass": ${verdict_pass}
}
JSON

echo
echo "── U8 SUMMARY ──"
echo "  (1) clean apply: ${apply1}"
echo "  (2) roundtrip:   ${roundtrip}"
echo "  (3) double-apply: ${double_apply}"
echo "  (4) +${delta_lines} lines / +${delta_hunks} hunks vs production"
echo "  verdict: ${verdict}"

[[ "${verdict_pass}" == "true" ]] && exit 0 || exit 1
