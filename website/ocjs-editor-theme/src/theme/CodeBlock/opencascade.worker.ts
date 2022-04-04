import initOpenCascade from "opencascade.js";
import { expose } from "comlink";
import { TopoDS_Shape } from "opencascade.js";

export default {} as typeof Worker & { new(): Worker };

export async function runOCJSCode(code: string): Promise<Uint8Array | undefined> {
  const oc = await initOpenCascade();
  const visualize_ = (shape: TopoDS_Shape) => {
    const docHandle = new oc.Handle_TDocStd_Document_2(new oc.TDocStd_Document(new oc.TCollection_ExtendedString_1()));
    const shapeTool = oc.XCAFDoc_DocumentTool.ShapeTool(docHandle.get().Main()).get();
    shapeTool.SetShape(shapeTool.NewShape(), shape);

    new oc.BRepMesh_IncrementalMesh_2(shape, 0.1, false, 0.1, false);
    const cafWriter = new oc.RWGltf_CafWriter(new oc.TCollection_AsciiString_2("./file.glb"), true);
    cafWriter.Perform_2(docHandle, new oc.TColStd_IndexedDataMapOfStringString_1(), new oc.Message_ProgressRange_1());

    return oc.FS.readFile("./file.glb", { encoding: "binary" });
  };
  return await new Promise<Uint8Array | undefined>(res => {
    const visualize = (s: TopoDS_Shape) => res(visualize_(s));
    const result = function (str: string) {
      return eval(str);
    }.call({ oc, visualize }, code);
    res(undefined);
  });
}

expose(runOCJSCode);
