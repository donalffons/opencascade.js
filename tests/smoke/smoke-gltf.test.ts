import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: RWGltf_CafWriter GLB export', () => {
  beforeAll(async () => { await initOC(); });

  it('should export box to GLB via XCAF document', () => {
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

    const glbPath = '/test.glb';
    using tCollectionAsciistring = new oc.TCollection_AsciiString(glbPath);
    using cafWriter = new oc.RWGltf_CafWriter(
      tCollectionAsciistring,
      true,
    );
    using tColStdIndexeddatamapofstringstring = new oc.TColStd_IndexedDataMapOfStringString();
    using messageProgressrange = new oc.Message_ProgressRange();
    expect(
      cafWriter.Perform(doc, tColStdIndexeddatamapofstringstring, messageProgressrange),
    ).toBe(true);

    const stat = oc.FS.stat(glbPath);
    expect(stat.size).toBeGreaterThan(0);
  });
});
