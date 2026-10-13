#!/usr/bin/env bash
# Consolidated runner — every front-loaded validation in sequence against
# the prod+pad libembind snapshot:
#   R1  Patch composition with current production libembind
#   R2  register_optional<T> deduplication across translation units
#   R3  std::optional<opencascade::handle<T>>
#   R4  emscripten::val vs std::optional<T> same-arity ambiguity
#   R5  Four real OCCT trailing-default shapes
#   R6  Output / inout reference param misclassification
#   T1  Multi-optional same-arity wildcard collision determinism
#   T2  .class_function static dispatcher coverage
#   T3  std::optional<T> as RETURN type
#   T4  register_optional<T> for non-default-constructible T
#   T5  -sEVAL_CTORS=2 interaction smoke test
#   U1  Mixed C2 fan-out + std::optional within one class/module
#   U3  Lifetime / destructor balance for std::optional<class T>
#   U4  Refcount balance for std::optional<opencascade::handle<T>>
#   U8  Generate v2 libembind patch and validate against pristine
#
# Exit code: 0 if every test exits 0, non-zero otherwise.
set -uo pipefail
cd "$(dirname "$0")"

LIBEMBIND_MODE="${LIBEMBIND_MODE:-prod+pad}"
export LIBEMBIND_MODE

print_header() { printf '\n===== %s =====\n' "$1"; }

print_header "R1 — 25-test suite against ${LIBEMBIND_MODE}"
node run.test.mjs > /tmp/r1.out 2>&1; r1=$?
tail -5 /tmp/r1.out

print_header "R2 — register_optional<T> dedup across translation units"
node r2.test.mjs > /tmp/r2.out 2>&1; r2=$?
tail -4 /tmp/r2.out

print_header "R3 — std::optional<opencascade::handle<T>>"
node r3.test.mjs > /tmp/r3.out 2>&1; r3=$?
tail -7 /tmp/r3.out

print_header "R4 — same-arity emscripten::val vs std::optional<T> ambiguity"
node r4.test.mjs > /tmp/r4.out 2>&1; r4=$?
tail -16 /tmp/r4.out

print_header "R5 — four real OCCT trailing-default shapes"
node r5.test.mjs > /tmp/r5.out 2>&1; r5=$?
tail -11 /tmp/r5.out

print_header "R6 — output / inout reference param misclassification"
./build.sh r6-illegal > /tmp/r6-build.out 2>&1
node r6.test.mjs > /tmp/r6.out 2>&1; r6=$?
tail -12 /tmp/r6.out

print_header "T1–T4 — Tier-3: multi-opt collision / static methods / opt-return / non-default-ctor T"
node t1-t4.test.mjs > /tmp/t14.out 2>&1; t14=$?
tail -8 /tmp/t14.out

print_header "T5 — Tier-3: -sEVAL_CTORS=2 behavioural parity"
./build.sh t5-eval-ctors > /tmp/t5-build.out 2>&1
node t5.test.mjs > /tmp/t5.out 2>&1; t5=$?
tail -5 /tmp/t5.out

print_header "U1–U4 — Tier-4: mixed dispatch / lifetime / refcount"
node u1-u3-u4.test.mjs > /tmp/u14.out 2>&1; u14=$?
tail -8 /tmp/u14.out

print_header "U8 — Tier-4: v2 libembind patch roundtrip + idempotency"
./u8.test.sh > /tmp/u8.out 2>&1; u8=$?
tail -7 /tmp/u8.out

print_header "SUMMARY (0 = pass)"
printf "  R1=%d  R2=%d  R3=%d  R4=%d  R5=%d  R6=%d   T1-4=%d  T5=%d   U1/3/4=%d  U8=%d\n" \
  "$r1" "$r2" "$r3" "$r4" "$r5" "$r6" "$t14" "$t5" "$u14" "$u8"

total=$((r1 + r2 + r3 + r4 + r5 + r6 + t14 + t5 + u14 + u8))
exit $total
