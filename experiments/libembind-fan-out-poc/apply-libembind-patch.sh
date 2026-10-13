#!/usr/bin/env bash
# Manages the state of the vendored assimpjs emsdk's libembind.js between
# negative and positive PoC builds.
#
# IMPORTANT: the vendored libembind.js ALREADY has the OCJS overloading
# patch baked in (10 occurrences of ensureOverloadSignatureTable confirm
# this). The pristine snapshot taken on first run IS therefore the
# "negative" baseline state — i.e. the production state of the OCJS
# WASM module without any R1+R2 hardening.
#
# Modes:
#   negative  — restore pristine (production OCJS state)
#   positive  — restore pristine, then surgically inject R1+R2:
#               Object.hasOwn gates on `proto[methodName]` reads inside
#               _embind_register_class_function and
#               _embind_register_class_class_function, plus `method`-local
#               re-reads in subsequent overloadTable conditionals.
#   restore   — restore pristine, no modifications
set -euo pipefail

EMSDK_ROOT="/Users/rifont/git/tau/repos/assimpjs/emsdk/upstream/emscripten"
LIBEMBIND="${EMSDK_ROOT}/src/lib/libembind.js"
PRISTINE="${LIBEMBIND}.pristine"

if [[ ! -f "${PRISTINE}" ]]; then
  echo "Snapshotting pristine libembind.js to ${PRISTINE}"
  cp "${LIBEMBIND}" "${PRISTINE}"
fi

ACTION="${1:-negative}"

restore_pristine() {
  echo "Restoring pristine libembind.js"
  cp "${PRISTINE}" "${LIBEMBIND}"
}

apply_r1_r2() {
  echo "Injecting R1+R2 Object.hasOwn gates"
  python3 - "${LIBEMBIND}" <<'PY'
import re, sys, pathlib

path = pathlib.Path(sys.argv[1])
src = path.read_text()

# R1: _embind_register_class_function — gate proto[methodName] read on
# Object.hasOwn so inherited overload tables are treated as absent.
# Match by the unique surrounding context (the `instancePrototype` line +
# the var method declaration immediately after) so we don't misfire.
r1_old = """      var proto = classType.registeredClass.instancePrototype;
      var method = proto[methodName];

      var rawSignatureArray = rawArgTypes.slice(2);
      var rawSignatureString = rawSignatureArray.join(', ');
      if (undefined === method || (undefined === method.overloadTable && method.className !== classType.name && method.signature === rawSignatureString)) {
        // This is the first overload to be registered, OR we are replacing a
        // function in the base class with a function in the derived class.
        unboundTypesHandler.argCount = argCount - 2;
        unboundTypesHandler.signature = rawSignatureString;
        unboundTypesHandler.className = classType.name;
        proto[methodName] = unboundTypesHandler;
      } else if (
        (undefined === proto[methodName].overloadTable && proto[methodName].argCount !== argCount - 2)
        || (undefined !== proto[methodName].overloadTable && undefined === proto[methodName].overloadTable[argCount - 2])) 
      {
        // There was an existing function with the same name registered. Set up
        // a function overload routing table.
        ensureOverloadTable(proto, methodName, humanName);
        unboundTypesHandler.signature = rawSignatureString;
        proto[methodName].overloadTable[argCount - 2] = unboundTypesHandler;
      } else {
        ensureOverloadSignatureTable(proto, methodName, humanName, argCount - 2);
        proto[methodName].overloadTable[argCount - 2].signatures[rawSignatureString] = unboundTypesHandler;
      }"""

r1_new = """      var proto = classType.registeredClass.instancePrototype;
      // R1 (Object.hasOwn gate): treat inherited overload tables as absent
      // for registration purposes. Walking the prototype chain causes
      // derived classes to mutate the base's overloadTable, corrupting
      // unrelated siblings. See
      // docs/research/ocjs-trailing-default-arity-fan-out.md
      var method = Object.hasOwn(proto, methodName) ? proto[methodName] : undefined;

      var rawSignatureArray = rawArgTypes.slice(2);
      var rawSignatureString = rawSignatureArray.join(', ');
      if (undefined === method || (undefined === method.overloadTable && method.className !== classType.name && method.signature === rawSignatureString)) {
        // This is the first overload to be registered, OR we are replacing a
        // function in the base class with a function in the derived class.
        unboundTypesHandler.argCount = argCount - 2;
        unboundTypesHandler.signature = rawSignatureString;
        unboundTypesHandler.className = classType.name;
        proto[methodName] = unboundTypesHandler;
      } else if (
        (undefined === method.overloadTable && method.argCount !== argCount - 2)
        || (undefined !== method.overloadTable && undefined === method.overloadTable[argCount - 2])) 
      {
        // There was an existing function with the same name registered. Set up
        // a function overload routing table.
        ensureOverloadTable(proto, methodName, humanName);
        unboundTypesHandler.signature = rawSignatureString;
        proto[methodName].overloadTable[argCount - 2] = unboundTypesHandler;
      } else {
        ensureOverloadSignatureTable(proto, methodName, humanName, argCount - 2);
        proto[methodName].overloadTable[argCount - 2].signatures[rawSignatureString] = unboundTypesHandler;
      }"""

if r1_old not in src:
    print("ERROR: R1 anchor not found in libembind.js — has the file drifted?", file=sys.stderr)
    sys.exit(1)
src = src.replace(r1_old, r1_new, 1)

# R2: _embind_register_class_class_function — same gate, same pattern.
# `proto` here is `classType.registeredClass.constructor` (the static-method
# receiver), so inheritance is via the constructor function's __proto__
# chain. Same correctness invariant applies.
r2_old = """      var proto = classType.registeredClass.constructor;
      var rawSignatureArray = rawArgTypes.slice(1);
      var rawSignatureString = rawSignatureArray.join(', ');
      if (undefined === proto[methodName]) {
        // This is the first function to be registered with this name.
        unboundTypesHandler.argCount = argCount-1;
        proto[methodName] = unboundTypesHandler;
      } else if (
        (undefined === proto[methodName].overloadTable && proto[methodName].argCount !== argCount - 1)
        || (undefined !== proto[methodName].overloadTable && undefined === proto[methodName].overloadTable[argCount - 1])
      ) {
        // There was an existing function with the same name registered. Set up
        // a function overload routing table.
        ensureOverloadTable(proto, methodName, humanName);
        unboundTypesHandler.signature = rawSignatureString;
        proto[methodName].overloadTable[argCount-1] = unboundTypesHandler;
      } else {
        ensureOverloadSignatureTable(proto, methodName, humanName, argCount - 1);
        proto[methodName].overloadTable[argCount-1].signatures[rawSignatureString] = unboundTypesHandler;
      }"""

r2_new = """      var proto = classType.registeredClass.constructor;
      // R2 (Object.hasOwn gate): mirror of R1 for static methods. The
      // constructor function inherits via __proto__; inherited static
      // overload tables must not be mutated cross-class.
      var method = Object.hasOwn(proto, methodName) ? proto[methodName] : undefined;
      var rawSignatureArray = rawArgTypes.slice(1);
      var rawSignatureString = rawSignatureArray.join(', ');
      if (undefined === method) {
        // This is the first function to be registered with this name.
        unboundTypesHandler.argCount = argCount-1;
        proto[methodName] = unboundTypesHandler;
      } else if (
        (undefined === method.overloadTable && method.argCount !== argCount - 1)
        || (undefined !== method.overloadTable && undefined === method.overloadTable[argCount - 1])
      ) {
        // There was an existing function with the same name registered. Set up
        // a function overload routing table.
        ensureOverloadTable(proto, methodName, humanName);
        unboundTypesHandler.signature = rawSignatureString;
        proto[methodName].overloadTable[argCount-1] = unboundTypesHandler;
      } else {
        ensureOverloadSignatureTable(proto, methodName, humanName, argCount - 1);
        proto[methodName].overloadTable[argCount-1].signatures[rawSignatureString] = unboundTypesHandler;
      }"""

if r2_old not in src:
    print("ERROR: R2 anchor not found in libembind.js — has the file drifted?", file=sys.stderr)
    sys.exit(1)
src = src.replace(r2_old, r2_new, 1)

path.write_text(src)
print("R1+R2 applied successfully")
PY
}

case "${ACTION}" in
  negative)
    restore_pristine
    echo "Negative state ready (pristine libembind.js with OCJS overloading patch only)"
    ;;
  positive)
    restore_pristine
    apply_r1_r2
    echo "Positive state ready (OCJS overloading patch + R1+R2 Object.hasOwn gates)"
    ;;
  restore)
    restore_pristine
    ;;
  *)
    echo "Unknown action: ${ACTION}" >&2
    echo "Usage: $0 [negative|positive|restore]" >&2
    exit 1
    ;;
esac
