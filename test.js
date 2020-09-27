import opencascade from "./dist/opencascade.wasm.js";
import { makeBottle } from "opencascade.js-examples/src/demos/bottle - basic/library";

jest.setTimeout(300000);

test('Create Polygonal Face', async () => {
  const oc = await((await new opencascade()).ready);
  const path = [[0, 0, 0], [1, 0, 0], [1, 1, 0]].map(([x, y, z]) => new oc.gp_Pnt_3(x, y, z));
  const makePolygon = new oc.BRepBuilderAPI_MakePolygon_1();
  for (let nth = 0; nth < path.length; nth++) {
    makePolygon.Add_1(path[nth]);
  }
  const wire = makePolygon.Wire();
  new oc.BRepBuilderAPI_MakeFace_15(wire, false);
});

test('Bottle Example', async () => {
  const oc = await((await new opencascade()).ready);
  const width = 50, height = 70, thickness = 30;
  makeBottle(oc, width, height, thickness);
});
