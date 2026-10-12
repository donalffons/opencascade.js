/**
 * Defines gated coverage for a class that combines trailing-default fan-out and a genuine
 * `std::optional<T>` parameter. No constructible bound class exposes both shapes, so the
 * cases stay skipped behind `MIXED_DISPATCH_AVAILABLE`.
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, wasmExists } from './helpers.js';

const MIXED_DISPATCH_AVAILABLE = false;

describe.skipIf(!wasmExists)('Smoke: mixed fan-out + std::optional dispatch in one class (U1)', () => {
  beforeAll(async () => { await initOC(); });

  it.skipIf(!MIXED_DISPATCH_AVAILABLE)(
    'fan-out method dispatches independently of std::optional method on same prototype',
    () => {
      // Activation-gate premise pin: no constructible bound class pairs a
      // genuine std::optional<T> parameter (the BRepGraph_*Explorer ctors)
      // with an independent fan-out sibling (see the file-level JSDoc). The
      // mixed-dispatch condition therefore cannot yet be reproduced.
      // Flipping MIXED_DISPATCH_AVAILABLE un-skips this and fails here,
      // forcing the real body below to be written:
      //   const oc = getOC();
      //   using instance = new oc[MIGRATED_CLASS_NAME]();
      //   expect(instance[FANOUT_METHOD](1)).toBe(<expected>);
      //   expect(instance[OPTIONAL_METHOD](1)).toBe(<expected>);
      expect(MIXED_DISPATCH_AVAILABLE).toBe(false);
    },
  );

  it.skipIf(!MIXED_DISPATCH_AVAILABLE)(
    'parity: fan-out and std::optional methods return equivalent values at every arity',
    () => {
      // Activation-gate premise pin (see first test). Real body when flipped:
      //   for (const args of [[], [1], [1, true], [1, true, 0.5]]) {
      //     expect(instance[FANOUT_METHOD](...args)).toBe(instance[OPTIONAL_METHOD](...args));
      //   }
      expect(MIXED_DISPATCH_AVAILABLE).toBe(false);
    },
  );

  it.skipIf(!MIXED_DISPATCH_AVAILABLE)(
    'arity-0 omission works on both method names independently',
    () => {
      // Activation-gate premise pin (see first test). Real body when flipped:
      //   expect(() => instance[FANOUT_METHOD]()).not.toThrow();
      //   expect(() => instance[OPTIONAL_METHOD]()).not.toThrow();
      expect(MIXED_DISPATCH_AVAILABLE).toBe(false);
    },
  );
});
