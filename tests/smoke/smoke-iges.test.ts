import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: IGESControl Writer and Reader', () => {
  beforeAll(async () => { await initOC(); });

  it('should write box to IGES and read back with shape verification', () => {
    const oc = getOC();
    using box = new oc.BRepPrimAPI_MakeBox(10, 20, 30);
    using shape = box.Shape();

    const igesPath = '/test.igs';
    using writer = new oc.IGESControl_Writer();
    using messageProgressrange = new oc.Message_ProgressRange();
    const addOk = writer.AddShape(shape, messageProgressrange);
    expect(addOk).toBe(true);

    writer.ComputeModel();
    writer.Write(igesPath, false);

    const fileData = oc.FS.readFile(igesPath);
    expect(fileData.byteLength ?? fileData.length).toBeGreaterThan(500);

    using reader = new oc.IGESControl_Reader();
    const readResult = reader.ReadFile(igesPath);
    expect(readResult).toBe(oc.IFSelect_ReturnStatus.IFSelect_RetDone);

    using messageProgressrange2 = new oc.Message_ProgressRange();
    reader.TransferRoots(messageProgressrange2);
    const nbShapes = reader.NbShapes();
    expect(nbShapes).toBe(1);

    using readShape = reader.OneShape();
    expect(readShape.IsNull()).toBe(false);

    oc.FS.unlink(igesPath);
  });
});
