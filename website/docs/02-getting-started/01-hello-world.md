---
sidebar_position: 1
---

# Hello, World!

One of the very powerful feature of OpenCascade is the ability to perform Boolean Operations. With them, you can simply add or subtract different shapes. Let's try that.

## Install OpenCascade.js

In your JavaScript project, first install OpenCascade.js via `npm` or `yarn` using the `@beta` tag.

```bash
npm install opencascade.js@beta # or: yarn add opencascade.js@beta
```

## Visualize 3D Models

Next, we need a simple of way of visualizing the 3D model we're about to create. We will do that using two helper functions:

* `visualizeDoc`: Takes a document (of type [`TDocStd_Document`](https://ocjs.org/reference-docs/classes/TDocStd_Document.html)) as a parameter and returns an [ObjectURL](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL) to a [GLB](https://www.khronos.org/gltf/) via the following steps
  1. Triangulate the document
  2. Export it as a GLB file to the virtual file system
  3. Read that GLB file and convert it into an ObjectURL
  4. Pass the ObjectURL to the [model-viewer](https://modelviewer.dev/) web component, which takes care of rendering

* `visualizeShapes`: Takes one or more shapes (of type [`TopoDS_Shape`](https://ocjs.org/reference-docs/classes/TopoDS_Shape.html)) as a parameter, then creates a document and adds all given shapes to it. Then it calls `visualizeDoc` and returns the resulting `ObjectURL`.

:::info

All [examples](https://ocjs.org/docs/examples/ocjs-logo) in this documentation use these two functions to visualize the results.

:::

```js title="/src/visualize.js"
// Takes a TDocStd_Document, creates a GLB file from it and returns a ObjectURL
export function visualizeDoc = (oc, doc) => {
  // Export a GLB file (this will also perform the meshing)
  const cafWriter = new oc.RWGltf_CafWriter(new oc.TCollection_AsciiString_2("./file.glb"), true);
  cafWriter.Perform_2(new oc.Handle_TDocStd_Document_2(doc), new oc.TColStd_IndexedDataMapOfStringString_1(), new oc.Message_ProgressRange_1());

  // Read the GLB file from the virtual file system
  const glbFile = oc.FS.readFile("./file.glb", { encoding: "binary" });
  return URL.createObjectURL(new Blob([glbFile.buffer], { type: "model/gltf-binary" }));
}

// Takes TopoDS_Shape, add to document, create GLB file from it and returns a ObjectURL
export function visualizeShapes(oc, shapes) {
  const shapes = Array.isArray(shapes_) ? shapes_ : [shapes_];

  // Create a document add our shapes
  const doc = new oc.TDocStd_Document(new oc.TCollection_ExtendedString_1());
  const shapeTool = oc.XCAFDoc_DocumentTool.ShapeTool(doc.Main()).get();
  for (const s of shapes) {
    shapeTool.SetShape(shapeTool.NewShape(), s);
    // Tell OpenCascade that we want our shape to get meshed
    new oc.BRepMesh_IncrementalMesh_2(s, 0.1, false, 0.1, false);
  }

  // Return our visualized document
  return visualizeDoc_(oc, doc);
}
```

We can now simply initialize OpenCascade.js, create our model and visualize it like this:

```js title="/src/index.js"
import "@google/model-viewer";
import { visualizeShapes } from "./visualize.js";
import initOpenCascade from "opencascade.js";

// ...

const oc = await initOpenCascade();
const modelUrl = visualizeShapes(oc, myShape);

// ...

export default function App() {
  return (
    // Now we can simply use the URL with model-viewer.
    <model-viewer src={modelUrl} camera-controls enable-pan />
  );
}
```

:::info The example code above shows a syntax that you would use with React

The exact syntax depends on your framework and setup. OpenCascade.js is framework-independent.

:::

## Our First Model

We can now simply visualize our models. Let's subtract a sphere from a box.

```js ocjs
params:
  sphereSize:
    type: range
    default: 0.65
    lower: 0.51
    upper: 0.8
    step: 0.01
code: |
  const { sphereSize } = params;
  const box = new oc.BRepPrimAPI_MakeBox_2(1, 1, 1);
  const sphere = new oc.BRepPrimAPI_MakeSphere_5(new oc.gp_Pnt_3(0.5, 0.5, 0.5), sphereSize);
  const cut = new oc.BRepAlgoAPI_Cut_3(box.Shape(), sphere.Shape(), new oc.Message_ProgressRange_1());
  cut.Build(new oc.Message_ProgressRange_1());
  visualizeShapes(cut.Shape());
```

## Configure Your Bundler

Before you can run this code, you likely need to [configure your bundler](/docs/getting-started/configure-bundler).

If you want to learn more, check out our other [examples](/docs/examples/ocjs-logo)!