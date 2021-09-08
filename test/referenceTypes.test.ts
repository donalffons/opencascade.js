import initOpenCascade, { OpenCascadeInstance } from "opencascade.js/dist/node.js"

let oc: OpenCascadeInstance = undefined;

beforeAll(async () => {
  oc = await initOpenCascade();
});

it("can handle js reference types for cpp reference types (numbers)", () => {
  const path = [[-1, 0, 0], [1, 0, 0], [1, 1, 0]].map(([x, y, z]) => new oc.gp_Pnt_3(x, y, z));
  const makePolygon = new oc.BRepBuilderAPI_MakePolygon_3(path[0], path[1], path[2], true);
  const wire = makePolygon.Wire();
  const makeFace = new oc.BRepBuilderAPI_MakeFace_15(wire, false);
  const u0 = { current: 0 };
  const u1 = { current: 0 };
  const v0 = { current: 0 };
  const v1 = { current: 0 };
  oc.BRepTools.UVBounds_1(makeFace.Face(), u0, u1, v0, v1);
  expect(u0.current).toBeCloseTo(-1.191);
  expect(u1.current).toBeCloseTo(0.809);
  expect(v0.current).toBeCloseTo(-0.309);
  expect(v1.current).toBeCloseTo(0.691);
});

it("can handle js non-reference types for cpp reference types (numbers)", () => {
  const path = [[-1, 0, 0], [1, 0, 0], [1, 1, 0]].map(([x, y, z]) => new oc.gp_Pnt_3(x, y, z));
  const makePolygon = new oc.BRepBuilderAPI_MakePolygon_3(path[0], path[1], path[2], true);
  const wire = makePolygon.Wire();
  const makeFace = new oc.BRepBuilderAPI_MakeFace_15(wire, false);
  oc.BRepTools.UVBounds_1(makeFace.Face(), 1, 2, 3, 4); // this makes no sense, but it should be valid code
});
