import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: BRepTools Write/Read round-trip', () => {
  beforeAll(async () => { await initOC(); });

  it('should write box to FS and read back', () => {
    const oc = getOC();
    using box = new oc.BRepPrimAPI_MakeBox(10, 20, 30);
    using shape = box.Shape();
    const brepPath = '/test.brep';
    using progress = new oc.Message_ProgressRange();

    const writeOk = oc.BRepTools.Write(shape, brepPath, progress);
    expect(writeOk).toBe(true);

    using inReadShape = new oc.TopoDS_Shape();
    using builder = new oc.BRep_Builder();
    const readOk = oc.BRepTools.Read(inReadShape, brepPath, builder, progress);
    oc.FS.unlink(brepPath);
    expect(readOk).toBe(true);
    expect(inReadShape.IsNull()).toBe(false);
  });
});
