/**
 * Verifies generated return-by-value wrappers include both full-arity and trailing-default
 * `Perform` registrations.
 */
import * as fs from 'node:fs';
import * as path from 'node:path';
import { describe, it, expect } from 'vitest';

const BINDING_CPP = path.resolve(
  import.meta.dirname,
  '../../build/bindings/ModelingData/TKGeomBase/ExtremaPC/ExtremaPC_Curve.hxx/ExtremaPC_Curve.cpp',
);
const bindingExists = fs.existsSync(BINDING_CPP);

describe.skipIf(!bindingExists)('Smoke: TR-RBV return-wrapper trailing-default gate', () => {
  it('emits full-arity and truncated Perform wrappers', () => {
    const cpp = fs.readFileSync(BINDING_CPP, 'utf8');
    const performEntries = cpp.match(/\.function\("Perform"/g) ?? [];
    expect(performEntries.length).toBeGreaterThanOrEqual(2);
  });
});
