/**
 * Smoke tests: STEP/IGES transfer internals.
 *
 * Validates Interface_Static configuration and XSControl_WorkSession.
 * Note: Some STEP-specific features require the STEP controller to be loaded,
 * which may not be available in all build configurations.
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: Interface and XSControl', () => {
  beforeAll(async () => { await initOC(); });

  it('should construct an Interface_Static instance and access tolerance precision', () => {
    const oc = getOC();
    const val = oc.Interface_Static.IVal('read.precision.mode');
    expect(typeof val).toBe('number');
  });

  it('should construct an XSControl_WorkSession without error', () => {
    const oc = getOC();
    using ws = new oc.XSControl_WorkSession();
    const normName = ws.SelectedNorm(false);
    expect(typeof normName).toBe('string');
  });
});
