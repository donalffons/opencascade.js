/**
 * Smoke tests: Precision constants and Standard_ classes.
 *
 * Validates Precision tolerance constants and Standard_Failure lifecycle.
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: Precision and Standard', () => {
  beforeAll(async () => { await initOC(); });

  it('should return Precision.Confusion as a small positive number less than 1e-5', () => {
    const oc = getOC();
    const confusion = oc.Precision.Confusion();

    expect(confusion).toBeGreaterThan(0);
    expect(confusion).toBeLessThan(1e-5);
  });

  it('should maintain Precision.Intersection <= Precision.Confusion ordering invariant', () => {
    const oc = getOC();
    const intersection = oc.Precision.Intersection();
    const confusion = oc.Precision.Confusion();

    expect(intersection).toBeLessThanOrEqual(confusion);
    expect(intersection).toBeGreaterThan(0);
  });

  it('should return positive Angular and Approximation precision values', () => {
    const oc = getOC();

    expect(oc.Precision.Angular()).toBeGreaterThan(0);
    expect(oc.Precision.Angular()).toBeLessThan(1e-5);

    expect(oc.Precision.Approximation()).toBeGreaterThan(0);
    expect(oc.Precision.Approximation()).toBeGreaterThanOrEqual(oc.Precision.Confusion());
  });

  it('should preserve the error message string through Standard_Failure construction', () => {
    const oc = getOC();
    using failure = new oc.Standard_Failure('test error 42');

    expect(failure.GetMessageString()).toBe('test error 42');
  });
});
