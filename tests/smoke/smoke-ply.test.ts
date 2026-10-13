import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: RWPly_CafWriter PLY export', () => {
  beforeAll(async () => { await initOC(); });

  it('should export box to PLY via XCAF document with correct geometry', () => {
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

    const plyPath = '/test.ply';
    using tCollectionAsciistring = new oc.TCollection_AsciiString(plyPath);
    using cafWriter = new oc.RWPly_CafWriter(
      tCollectionAsciistring,
    );
    using tColStdIndexeddatamapofstringstring = new oc.TColStd_IndexedDataMapOfStringString();
    using messageProgressrange = new oc.Message_ProgressRange();
    cafWriter.Perform(
      doc,
      tColStdIndexeddatamapofstringstring,
      messageProgressrange,
    );

    const fileData = oc.FS.readFile(plyPath, { encoding: 'utf8' }) as string;
    expect(fileData.length).toBeGreaterThan(100);

    const vertexMatch = fileData.match(/element vertex (\d+)/);
    const faceMatch = fileData.match(/element face (\d+)/);

    expect(vertexMatch).toBeTruthy();
    expect(faceMatch).toBeTruthy();

    const vertexCount = Number.parseInt(vertexMatch![1]!, 10);
    const faceCount = Number.parseInt(faceMatch![1]!, 10);

    expect(vertexCount).toBeGreaterThanOrEqual(8);
    expect(faceCount).toBeGreaterThanOrEqual(12);

    oc.FS.unlink(plyPath);
  });
});
