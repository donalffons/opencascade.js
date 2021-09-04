import initOpenCascade, { OpenCascadeInstance } from "opencascade.js/dist/node.js"

let oc: OpenCascadeInstance = undefined;

beforeAll(async () => {
  oc = await initOpenCascade();
});

it("create polygon", async () => {
  const path = [[-1, 0, 0], [1, 0, 0], [1, 1, 0]].map(([x, y, z]) => new oc.gp_Pnt_3(x, y, z));
  const wire = new oc.BRepBuilderAPI_MakePolygon_3(path[0], path[1], path[2], true).Wire();
  new oc.BRepBuilderAPI_MakeFace_15(wire, false).Shape();
});
