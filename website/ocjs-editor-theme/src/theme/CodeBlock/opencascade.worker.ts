import initOpenCascade, { TDocStd_Document } from "opencascade.js";
import { expose } from "comlink";
import { TopoDS_Shape } from "opencascade.js";

export default {} as typeof Worker & { new(): Worker };

export async function runOCJSCode(code: string): Promise<Uint8Array | undefined> {
  const oc = await initOpenCascade();
  const visualizeDoc_ = (doc: TDocStd_Document) => {
    const docHandle = new oc.Handle_TDocStd_Document_2(doc);
    const cafWriter = new oc.RWGltf_CafWriter(new oc.TCollection_AsciiString_2("./file.glb"), true);
    cafWriter.Perform_2(docHandle, new oc.TColStd_IndexedDataMapOfStringString_1(), new oc.Message_ProgressRange_1());

    return oc.FS.readFile("./file.glb", { encoding: "binary" });
  };
  const visualizeShapes_ = (shapes_: TopoDS_Shape | TopoDS_Shape[]) => {
    const shapes = Array.isArray(shapes_) ? shapes_ : [shapes_];
    const doc = new oc.TDocStd_Document(new oc.TCollection_ExtendedString_1());
    const shapeTool = oc.XCAFDoc_DocumentTool.ShapeTool(doc.Main()).get();
    for (const s of shapes) {
      shapeTool.SetShape(shapeTool.NewShape(), s);
      new oc.BRepMesh_IncrementalMesh_2(s, 0.1, false, 0.1, false);
    }

    return visualizeDoc_(doc);
  };
  return await new Promise<Uint8Array | undefined>(res => {
    const visualizeShapes = (s: TopoDS_Shape) => res(visualizeShapes_(s));
    const visualizeDoc = (d: TDocStd_Document) => res(visualizeDoc_(d));
    const result = function (str: string) {
      return eval(str);
    }.call({ oc, visualizeShapes, visualizeDoc }, code);
    res(undefined);
  });
}

expose(runOCJSCode);
