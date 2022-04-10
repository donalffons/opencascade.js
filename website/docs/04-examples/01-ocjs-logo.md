---
sidebar_position: 1
---

# OpenCascade.js Logo

Here is a slightly more advanced example, which shows how to create a version of the OpenCascade.js logo with a bunch of boolean operations and 1 sphere.

```js ocjs
code: |
  const sphere = new oc.BRepPrimAPI_MakeSphere_1(1);

  // Take shape and subtract a translated and scaled sphere from it
  const makeCut = (shape, translation, scale) => {
    const tf = new oc.gp_Trsf_1();
    tf.SetTranslation_1(new oc.gp_Vec_4(translation[0], translation[1], translation[2]));
    tf.SetScaleFactor(scale);
    const loc = new oc.TopLoc_Location_2(tf);

    const cut = new oc.BRepAlgoAPI_Cut_3(shape, sphere.Shape().Moved(loc, false), new oc.Message_ProgressRange_1());
    cut.Build(new oc.Message_ProgressRange_1());

    return cut.Shape();
  };

  // Let's make some cuts
  const cut1 = makeCut(sphere.Shape(), [0, 0, 0.7], 1);
  const cut2 = makeCut(cut1, [0, 0, -0.7], 1);
  const cut3 = makeCut(cut2, [0, 0.25, 1.75], 1.825);
  const cut4 = makeCut(cut3, [4.8, 0, 0], 5);

  // Rotate around the Z axis
  const makeRotation = (rotation) => {
    const tf = new oc.gp_Trsf_1();
    tf.SetRotation_1(new oc.gp_Ax1_2(new oc.gp_Pnt_1(), new oc.gp_Dir_4(0, 0, 1)), rotation);
    const loc = new oc.TopLoc_Location_2(tf);
    return loc;
  };

  // Combine the result
  const fuse = new oc.BRepAlgoAPI_Fuse_3(cut4, cut4.Moved(makeRotation(Math.PI), false), new oc.Message_ProgressRange_1());
  fuse.Build(new oc.Message_ProgressRange_1());
  const result = fuse.Shape().Moved(makeRotation(-30*Math.PI/180), false);

  // Create document, add result and tessellate
  const doc = new oc.TDocStd_Document(new oc.TCollection_ExtendedString_1());
  const shapeTool = oc.XCAFDoc_DocumentTool.ShapeTool(doc.Main()).get();
  new oc.BRepMesh_IncrementalMesh_2(result, 0.1, false, 0.1, false);

  // Add colors
  for(const it1 = new oc.TopoDS_Iterator_2(result, true, true); it1.More(); it1.Next()) {
    let i = 0;
    for(const it2 = new oc.TopoDS_Iterator_2((new oc.TopoDS_Iterator_2(it1.Value(), true, true)).Value(), true, true); it2.More(); it2.Next()) {
      const newShape = shapeTool.NewShape();
      shapeTool.SetShape(newShape, it2.Value());

      const vmtool = oc.XCAFDoc_DocumentTool.VisMaterialTool(newShape).get();
      const visMat = new oc.XCAFDoc_VisMaterial();
      const matLabel = vmtool.AddMaterial_1(new oc.Handle_XCAFDoc_VisMaterial_2(visMat), new oc.TCollection_AsciiString_2(`myMatName${Math.random()}`));
      vmtool.SetShapeMaterial_1(newShape, matLabel);
      const visMatPbr = new oc.XCAFDoc_VisMaterialPBR();
      if(i === 3) {
        visMatPbr.BaseColor = new oc.Quantity_ColorRGBA_5(0.6, 0.5, 0, 1);
      } else {
        visMatPbr.BaseColor = new oc.Quantity_ColorRGBA_5(0.3, 0.3, 0.3, 1);
      }
      visMat.SetPbrMaterial(visMatPbr);

      i++;
    }
  }

  visualizeDoc(doc);
```

:::tip If this code looks confusing, don't worry

The main takeaway of this example is just that boolean operations allow you to create highly complex shapes that would be difficult or impossible to achieve using classical polygon-based modeling.

:::
