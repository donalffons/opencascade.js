/**
 * Type-level tests for NCollection_Vector and NCollection_DoubleMap resolution.
 *
 * After adding these containers to auto-discovery, methods returning
 * NCollection_Vector<T> or NCollection_DoubleMap<K,V> should resolve
 * to concrete bound types, not `any`.
 */
import { expectTypeOf, it, describe } from 'vitest';
import type { BOPDS_DS } from '../dist/opencascade_single';

describe('NCollection_Vector types in BOPDS_DS', () => {
  it('BOPDS_DS.InterfVV() should not return any', () => {
    expectTypeOf<BOPDS_DS['InterfVV']>().returns.not.toBeAny();
  });

  it('BOPDS_DS.InterfVE() should not return any', () => {
    expectTypeOf<BOPDS_DS['InterfVE']>().returns.not.toBeAny();
  });

  it('BOPDS_DS.InterfEE() should not return any', () => {
    expectTypeOf<BOPDS_DS['InterfEE']>().returns.not.toBeAny();
  });

  it('BOPDS_DS.InterfEF() should not return any', () => {
    expectTypeOf<BOPDS_DS['InterfEF']>().returns.not.toBeAny();
  });

  it('BOPDS_DS.InterfFF() should not return any', () => {
    expectTypeOf<BOPDS_DS['InterfFF']>().returns.not.toBeAny();
  });
});
