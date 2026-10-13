/**
 * Verifies `IFSelect_Act.SetGroup(group, file = "")` accepts both one- and two-argument calls
 * and exposes the trailing C-string parameter as optional in TypeScript.
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: TR-CW C-string-wrapper trailing-default gate', () => {
  beforeAll(async () => { await initOC(); });

  describe('IFSelect_Act.SetGroup(group, file = "")', () => {
    it('counterfactual: 2-arg full-arity call succeeds (proves binding is sound)', () => {
      const oc = getOC();
      expect(() => {
        oc.IFSelect_Act.SetGroup('tau-tr-cw-smoke', '');
      }).not.toThrow();
    });

    it('1-arg call succeeds (file defaults to "") — TR-CW trailing default now emitted', () => {
      const oc = getOC();
      expect(() => {
        // `.d.ts` now declares `SetGroup(group: string, file?: string)`: the
        // val-default cstring binding accepts the 1-arg call (file → "") and
        // the TS emitter renders the trailing default as optional, so the call
        // typechecks without a suppression.
        oc.IFSelect_Act.SetGroup('tau-tr-cw-smoke-defaulted');
      }).not.toThrow();
    });
  });
});
