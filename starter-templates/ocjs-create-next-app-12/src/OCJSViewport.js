import { useState, useEffect } from "react";
import shapeToUrl from "../src/shapeToUrl";
import initOpenCascade from "opencascade.js";
import "@google/model-viewer";

export default function OCJSViewport() {
  const [modelUrl, setModelUrl] = useState();
  useEffect(() => {
    initOpenCascade().then(oc => {
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
      const result = fuse.Shape().Moved(makeRotation(-30 * Math.PI / 180), false);

      setModelUrl(shapeToUrl(oc, result));
    });
  }, []);

  return (
    modelUrl === undefined ? "Loading..." : (
      <model-viewer class="viewport" src={modelUrl} camera-controls />
    )
  );
}
