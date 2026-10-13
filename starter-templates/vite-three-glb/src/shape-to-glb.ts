import type { OpenCascadeInstance, TopoDS_Shape } from 'libcascade';

/**
 * Mesh `shape` with BRepMesh_IncrementalMesh and write a single-doc GLB
 * via RWGltf_CafWriter. Returns the GLB bytes as a Uint8Array suitable
 * for three.js GLTFLoader.parse().
 *
 * Every embind handle is captured by `using` so `[Symbol.dispose]` runs
 * deterministically at scope exit. Without that discipline the WASM heap
 * accumulates one allocation per call — sustained pipelines have been
 * measured leaking into the tens of gigabytes.
 *
 * The document is constructed directly via `TDocStd_Document` rather than
 * through `XCAFApp_Application.GetApplication()` to avoid the v3 codegen
 * overload ambiguity on `NewDocument` and to keep the example free of
 * application-singleton state.
 */
export function shapeToGlb(oc: OpenCascadeInstance, shape: TopoDS_Shape): Uint8Array {
  using mesh = new oc.BRepMesh_IncrementalMesh(shape, 0.1, false, 0.5, false);
  using meshProgress = new oc.Message_ProgressRange();
  mesh.Perform(meshProgress);

  using formatString = new oc.TCollection_ExtendedString('BinXCAF');
  using doc = new oc.TDocStd_Document(formatString);
  using mainLabel = doc.Main();
  using shapeTool = oc.XCAFDoc_DocumentTool.ShapeTool(mainLabel);
  using newShapeLabel = shapeTool.NewShape();
  shapeTool.SetShape(newShapeLabel, shape);

  const tmpFile = '/glb.glb';
  using tmpFilePath = new oc.TCollection_AsciiString(tmpFile);
  using writer = new oc.RWGltf_CafWriter(tmpFilePath, true);
  using fileInfo = new oc.TColStd_IndexedDataMapOfStringString();
  using writeProgress = new oc.Message_ProgressRange();
  const ok = writer.Perform(doc, fileInfo, writeProgress);
  if (!ok) throw new Error('libcascade: RWGltf_CafWriter.Perform returned false');

  const fs = oc.FS;
  const bytes = fs.readFile(tmpFile);
  fs.unlink(tmpFile);
  return bytes;
}
