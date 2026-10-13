/**
 * Defines gated runtime and declaration checks for `std::optional<T>` return values.
 * No bound OCCT method exposes a constructible optional primitive return, so the cases are skipped
 * behind `OPTIONAL_RETURN_AVAILABLE`.
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, wasmExists } from './helpers.js';

const OPTIONAL_RETURN_AVAILABLE = false;

describe.skipIf(!wasmExists)('Smoke: std::optional<T> return types (T3)', () => {
  beforeAll(async () => { await initOC(); });

  it.skipIf(!OPTIONAL_RETURN_AVAILABLE)(
    'std::optional<T>(v) round-trips to JS v',
    () => {
      // Activation-gate premise pin: no production binding emits
      // std::optional<T> as a return type yet (bindgen only consumes it as a
      // param wrapper). Flipping OPTIONAL_RETURN_AVAILABLE un-skips this and
      // fails here, forcing the real round-trip body to be written:
      //   const result = oc.SomeClass.maybeValue(true);
      //   expect(result).toBe(42);
      expect(OPTIONAL_RETURN_AVAILABLE).toBe(false);
    },
  );

  it.skipIf(!OPTIONAL_RETURN_AVAILABLE)(
    'std::nullopt round-trips to JS undefined',
    () => {
      // Activation-gate premise pin (see first test). Real body when flipped:
      //   const result = oc.SomeClass.maybeValue(false);
      //   expect(result).toBeUndefined();
      expect(OPTIONAL_RETURN_AVAILABLE).toBe(false);
    },
  );

  it.skipIf(!OPTIONAL_RETURN_AVAILABLE)(
    'TypeScript .d.ts renders the return as T | undefined',
    () => {
      // Activation-gate premise pin (see first test). Real body when flipped:
      //   const dts = readDtsFor('SomeClass.maybeValue');
      //   expect(dts).toMatch(/maybeValue\([^)]*\):\s*number\s*\|\s*undefined/);
      expect(OPTIONAL_RETURN_AVAILABLE).toBe(false);
    },
  );
});
