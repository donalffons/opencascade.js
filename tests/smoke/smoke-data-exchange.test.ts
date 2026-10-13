import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: Data exchange (STEP, STL)', () => {
  beforeAll(async () => {
    await initOC();
  });

  it('should transfer a shape successfully with STEPControl_Writer', () => {
    const oc = getOC();
    using box = new oc.BRepPrimAPI_MakeBox(10, 20, 30);
    using shape = box.Shape();
    expect(shape.IsNull()).toBe(false);

    using writer = new oc.STEPControl_Writer();
    using messageProgressrange = new oc.Message_ProgressRange();
    const transferStatus = writer.Transfer(
      shape,
      oc.STEPControl_StepModelType.STEPControl_AsIs,
      false,
      messageProgressrange,
    );

    expect(transferStatus).toBe(oc.IFSelect_ReturnStatus.IFSelect_RetDone);

    using model = writer.Model(false);
    expect(model.NbEntities()).toBeGreaterThan(0);
  });

  it('should read and transfer shapes from STEP data with STEPControl_Reader', () => {
    const oc = getOC();
    const stepContent = [
      'ISO-10303-21;',
      'HEADER;',
      "FILE_DESCRIPTION((''), '2;1');",
      "FILE_NAME('test.stp', '2026-01-01', (''), (''), '', '', '');",
      "FILE_SCHEMA(('AUTOMOTIVE_DESIGN'));",
      'ENDSEC;',
      'DATA;',
      "#1 = APPLICATION_PROTOCOL_DEFINITION('', 'automotive_design', 2000, #2);",
      "#2 = APPLICATION_CONTEXT('');",
      'ENDSEC;',
      'END-ISO-10303-21;',
    ].join('\n');

    const stepPath = '/test_minimal.stp';
    oc.FS.writeFile(stepPath, stepContent);

    using reader = new oc.STEPControl_Reader();
    const readStatus = reader.ReadFile(stepPath);
    expect(readStatus).toBe(oc.IFSelect_ReturnStatus.IFSelect_RetDone);

    try {
      oc.FS.unlink(stepPath);
    } catch {
      /* file may not exist if ReadFile failed */
    }
  });

  it('should mesh shape and write STL via FS with BRepMesh_IncrementalMesh', () => {
    const oc = getOC();
    using box = new oc.BRepPrimAPI_MakeBox(5, 5, 5);
    using shape = box.Shape();

    using mesh = new oc.BRepMesh_IncrementalMesh(shape, 0.1, false, 0.5, false);
    using messageProgressrange2 = new oc.Message_ProgressRange();
    mesh.Perform(messageProgressrange2);

    const stlPath = '/test.stl';
    using stlWriter = new oc.StlAPI_Writer();
    using messageProgressrange3 = new oc.Message_ProgressRange();
    const stlSuccess = stlWriter.Write(shape, stlPath, messageProgressrange3);
    expect(stlSuccess).toBe(true);

    const fileData = oc.FS.readFile(stlPath);
    expect(fileData.byteLength ?? fileData.length).toBeGreaterThan(0);

    oc.FS.unlink(stlPath);
  });
});
