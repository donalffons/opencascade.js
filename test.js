import opencascade from "./dist/opencascade.wasm.js";
import { makeBottle } from "opencascade.js-examples/src/demos/bottle - basic/library";

jest.setTimeout(300000);

test('Create Polygonal Face', async () => {
  const oc = await((await new opencascade()).ready);
  const builder = new oc.BRep_Builder();
  const aComp = new oc.TopoDS_Compound();
  builder.MakeCompound(aComp);
  const path = [[0, 0, 0], [100, 0, 0], [100, 100, 0]].map(([x, y, z]) => new oc.gp_Pnt_3(x, y, z));
  const makePolygon = new oc.BRepBuilderAPI_MakePolygon_3(path[0], path[1], path[2], true);
  const wire = makePolygon.Wire();
  const f = new oc.BRepBuilderAPI_MakeFace_15(wire, false);
  builder.Add(aComp, f.Shape());
});

test('Bottle Example', async () => {
  const oc = await((await new opencascade()).ready);
  const width = 50, height = 70, thickness = 30;
  makeBottle(oc, width, height, thickness);
});
