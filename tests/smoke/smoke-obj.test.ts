import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: RWObj_CafWriter OBJ export', () => {
  beforeAll(async () => { await initOC(); });

  it('should export box to OBJ via XCAF document with correct geometry', () => {
    const oc = getOC();
    using box = new oc.BRepPrimAPI_MakeBox(10, 20, 30);
    using shape = box.Shape();

    using tCollectionExtendedstring = new oc.TCollection_ExtendedString();
    using doc = new oc.TDocStd_Document(tCollectionExtendedstring);
    using disposable = doc.Main();
    using shapeTool = oc.XCAFDoc_DocumentTool.ShapeTool(disposable);
    using newShape = shapeTool.NewShape();
    shapeTool.SetShape(newShape, shape);
    using bRepMeshIncrementalmesh = new oc.BRepMesh_IncrementalMesh(shape, 0.1, false, 0.1, false);
    bRepMeshIncrementalmesh;

    const objPath = '/test.obj';
    using tCollectionAsciistring = new oc.TCollection_AsciiString(objPath);
    using cafWriter = new oc.RWObj_CafWriter(tCollectionAsciistring);
    using tColStdIndexeddatamapofstringstring = new oc.TColStd_IndexedDataMapOfStringString();
    using messageProgressrange = new oc.Message_ProgressRange();
    cafWriter.Perform(doc, tColStdIndexeddatamapofstringstring, messageProgressrange);

    const fileData = oc.FS.readFile(objPath, { encoding: 'utf8' }) as string;
    expect(fileData.length).toBeGreaterThan(100);

    const lines = fileData.split('\n');
    const vertexCount = lines.filter((l: string) => l.startsWith('v ')).length;
    const faceCount = lines.filter((l: string) => l.startsWith('f ')).length;

    expect(vertexCount).toBeGreaterThanOrEqual(8);
    expect(faceCount).toBeGreaterThanOrEqual(12);

    oc.FS.unlink(objPath);
  });
});
