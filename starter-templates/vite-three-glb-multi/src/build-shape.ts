import type { OpenCascadeInstance, TopoDS_Shape } from 'libcascade';

/**
 * Build a representative compound: a box with a cylindrical hole cut through it.
 *
 * Demonstrates BRepPrimAPI primitive construction + BRepAlgoAPI_Cut boolean.
 * The returned `TopoDS_Shape` escapes to the caller; every intermediate
 * embind handle is captured by `using` so the runtime reclaims the WASM
 * memory at scope exit (the bindings have no GC — leaks here balloon
 * heap usage by tens of GB over a long-running session).
 */
export function buildShape(oc: OpenCascadeInstance): TopoDS_Shape {
  using boxMaker = new oc.BRepPrimAPI_MakeBox(20, 20, 20);
  using box = boxMaker.Shape();

  using origin = new oc.gp_Pnt(10, 10, -5);
  using direction = new oc.gp_Dir(0, 0, 1);
  using axis = new oc.gp_Ax2(origin, direction);
  using cylMaker = new oc.BRepPrimAPI_MakeCylinder(axis, 4, 30);
  using cyl = cylMaker.Shape();

  using cutProgress = new oc.Message_ProgressRange();
  using cut = new oc.BRepAlgoAPI_Cut(box, cyl, cutProgress);
  using buildProgress = new oc.Message_ProgressRange();
  cut.Build(buildProgress);
  return cut.Shape();
}
