/**
 * The allowances every reference-yml comparison is asserted modulo, in one
 * place so the renderer gate (`render-parity.test.ts`) and the migrator gate
 * (`migrate.test.ts`) grant exactly the same ones, documented once.
 *
 * Not a test file: no `describe`, so vitest's `test/**\/*.test.ts` glob leaves
 * it alone and importing it twice registers nothing twice.
 */

/** emcc reads a valueless `-sNAME` as `-sNAME=1`. */
export const normalizeFlag = (flag: string): string =>
  /^-s[A-Za-z0-9_]+$/.test(flag) ? `${flag}=1` : flag;

/**
 * Count flags by name, normalising the bare form.
 *
 * emcc treats distinct flags as order-insensitive and the renderer emits a
 * canonical order, so a multiset is the strongest true statement about a
 * rendered flag list against a hand-ordered reference.
 *
 * @param flags - One build's `emccFlags`.
 * @returns Flag → occurrence count.
 */
export const flagMultiset = (flags: readonly string[]): Record<string, number> => {
  const counts: Record<string, number> = {};
  for (const flag of flags) {
    const key = normalizeFlag(flag);
    counts[key] = (counts[key] ?? 0) + 1;
  }
  return counts;
};

/**
 * emsdk 6.0.5 migration delta (opencascade.js commit 7734d9d): the link
 * pipeline replaced `-sEXPORT_EXCEPTION_HANDLING_HELPERS` with the three
 * exception helpers listed in `-sEXPORTED_RUNTIME_METHODS`, and hard-fails
 * `-fwasm-exceptions` builds without them. Upstream's own full.yml received
 * exactly this rewrite; replicad's ytt-generated build-config ymls predate it
 * (they pin the older canary image). Both the toolchain config and `libcascade
 * migrate` target the current image, so parity against those stale references
 * is asserted modulo this one documented flag rewrite.
 *
 * @param flags - The reference yml's `emccFlags`.
 * @returns The same flags as the current image wants them.
 */
export const applyEmsdk605ExceptionDelta = (flags: readonly string[]): string[] =>
  flags
    .filter((flag) => normalizeFlag(flag) !== '-sEXPORT_EXCEPTION_HANDLING_HELPERS=1')
    .map((flag) =>
      flag === '-sEXPORTED_RUNTIME_METHODS=["FS","wasmMemory"]'
        ? '-sEXPORTED_RUNTIME_METHODS=["FS","wasmMemory","getExceptionMessage","incrementExceptionRefcount","decrementExceptionRefcount"]'
        : flag,
    );

/**
 * Remove `-sUSE_PTHREADS=1` when the reference also carries its `-pthread`
 * equivalent.
 *
 * @param flags - The reference yml's `emccFlags`.
 * @returns Flags without the redundant legacy alias.
 */
export const dropDeprecatedUsePthreads = (flags: readonly string[]): string[] =>
  flags.filter((flag) => normalizeFlag(flag) !== '-sUSE_PTHREADS=1');
