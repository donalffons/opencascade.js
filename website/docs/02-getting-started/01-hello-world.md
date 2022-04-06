---
sidebar_position: 1
---

# Hello World

One of the very powerful feature of OpenCascade is the ability to perform Boolean Operations. With them, you can simply add or subtract different shapes. Let's try that.

## Visualize 3D Models

Before we start, we need to find a simple of way of visualizing the 3D model we're about to create. Therefore, we will define a helper function that will convert a shape (of type `TopoDS_Shape`) into a GLB file. We can then use this common 3D file format and plug it into a 3D viewer component, like [model-viewer](https://modelviewer.dev/).

```js title="/src/shapeToUrl.js"
// Takes a TopoDS_Shape, creates a GLB file from it and returns a ObjectURL
export default function shapeToUrl(oc, shape) {
  // Create a document and add our shape
  const docHandle = new oc.Handle_TDocStd_Document_2(new oc.TDocStd_Document(new oc.TCollection_ExtendedString_1()));
  const shapeTool = oc.XCAFDoc_DocumentTool.ShapeTool(docHandle.get().Main()).get();
  shapeTool.SetShape(shapeTool.NewShape(), shape);

  // Tell OpenCascade that we want our shape to get meshed
  new oc.BRepMesh_IncrementalMesh_2(shape, 0.1, false, 0.1, false);

  // Export a GLB file (this will also perform the meshing)
  const cafWriter = new oc.RWGltf_CafWriter(new oc.TCollection_AsciiString_2("./file.glb"), true);
  cafWriter.Perform_2(docHandle, new oc.TColStd_IndexedDataMapOfStringString_1(), new oc.Message_ProgressRange_1());

  // Read the GLB file from the virtual file system
  const glbFile = oc.FS.readFile("./file.glb", { encoding: "binary" });

  return URL.createObjectURL(new Blob([glbFile.buffer], { type: "model/gltf-binary" }));
};
```

```js title="/src/index.js"
import "@google/model-viewer";
import shapeToUrl from "./visualize.js";

// ...

const oc = await initOpenCascade();
const modelUrl = shapeToUrl(oc, myShape);

// ...

export default function App() {
  return (
    // Now we can simply use the URL with model-viewer.
    <model-viewer src={modelUrl} camera-controls />
  );
}
```

:::info The example code above shows a syntax that you would use with React
The exact syntax depends on your framework and setup. OpenCascade.js is framework-independent.

:::

The examples in this documentation use this approach when presenting 3D previews of the code examples using the function `visualize` as shown below.

## Our First Model

We can now simply visualize our models. Let's subtract a sphere from a box.

```js ocjs
code: |
  const box = new oc.BRepPrimAPI_MakeBox_2(1, 1, 1);
  const sphere = new oc.BRepPrimAPI_MakeSphere_5(new oc.gp_Pnt_3(0.5, 0.5, 0.5), 0.65);
  const cut = new oc.BRepAlgoAPI_Cut_3(box.Shape(), sphere.Shape(), new oc.Message_ProgressRange_1());
  cut.Build(new oc.Message_ProgressRange_1());
  visualize(cut.Shape());
```
