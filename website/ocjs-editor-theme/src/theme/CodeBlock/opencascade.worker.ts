import initOpenCascade, { OpenCascadeInstance, TDocStd_Document } from "opencascade.js";
// @ts-ignore
import customBuildWasm from "../../customBuild/customBuild.examples.wasm";
import customBuildJs from "../../customBuild/customBuild.examples.js";
import { expose } from "comlink";
import { TopoDS_Shape } from "opencascade.js";

export default {} as typeof Worker & { new(): Worker };

let oc: OpenCascadeInstance | undefined = undefined;

export class OpenCascadeWorker {
  oc: OpenCascadeInstance | undefined = undefined;
  async initOpenCascade() {
    oc = await initOpenCascade({
      mainJS: customBuildJs,
      mainWasm: customBuildWasm,
    });
  };
  async runOCJSCode(code: string, params?: { [key: string]: number | undefined }): Promise<Uint8Array | undefined> {
    const visualizeDoc_ = (doc: TDocStd_Document) => {
      if (!oc) throw ("OpenCascade.js not initialized");
      const docHandle = new oc.Handle_TDocStd_Document_2(doc);
      const cafWriter = new oc.RWGltf_CafWriter(new oc.TCollection_AsciiString_2("./file.glb"), true);
      cafWriter.Perform_2(docHandle, new oc.TColStd_IndexedDataMapOfStringString_1(), new oc.Message_ProgressRange_1());

      return oc.FS.readFile("./file.glb", { encoding: "binary" });
    };
    const visualizeShapes_ = (shapes_: TopoDS_Shape | TopoDS_Shape[]) => {
      if (!oc) throw ("OpenCascade.js not initialized");
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
      }.call({ oc, visualizeShapes, visualizeDoc, params }, code);
      res(undefined);
    });
  };
};

expose(OpenCascadeWorker);
