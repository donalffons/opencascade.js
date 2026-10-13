/**
 * Imports an IGES file from Emscripten's virtual filesystem and verifies the resulting shape.
 * The fixture also exercises the Node host shims used by the IGES reader.
 */
import * as fs from 'node:fs';
import * as path from 'node:path';
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

const CONE_IGES = path.join(import.meta.dirname, 'data', 'cone.iges');

describe.skipIf(!wasmExists)('Smoke: IGES file import (getpwuid patch canary)', () => {
  beforeAll(async () => { await initOC(); });

  it('reads an on-disk IGES file from the virtual FS and transfers roots', () => {
    const oc = getOC();
    const igesBytes = new Uint8Array(fs.readFileSync(CONE_IGES));

    oc.FS.writeFile('/cone.iges', igesBytes);

    using reader = new oc.IGESControl_Reader();
    const readResult = reader.ReadFile('/cone.iges');
    expect(readResult).toBe(oc.IFSelect_ReturnStatus.IFSelect_RetDone);

    using progress = new oc.Message_ProgressRange();
    // This is the call that historically tripped the getpwuid abort.
    reader.TransferRoots(progress);

    expect(reader.NbShapes()).toBeGreaterThan(0);
    using shape = reader.OneShape();
    expect(shape.IsNull()).toBe(false);

    oc.FS.unlink('/cone.iges');
  });
});
