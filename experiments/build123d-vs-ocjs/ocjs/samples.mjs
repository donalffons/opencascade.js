/**
 * Frontier OCCT workloads mirroring python/samples.py (build123d) and
 * native/samples.cpp.
 *
 * Every sample that batches >1 boolean operation uses the canonical
 * `BRepAlgoAPI_BuilderAlgo` multi-tool form (`SetArguments + SetTools + Build`)
 * — the iterative `Op(prev, next)` chain is the previous-baseline anti-pattern
 * (preserved historically in F13's per-engine 09b/09 + 10b/10 ratios). See
 * F14 — Frontier benchmark sample (see experiments/build123d-vs-ocjs/README.md).
 * Performance — is the canonical comparison and uses these samples directly.
 *
 * Uses `using` declarations (Node 22+/V8 12.4+) for automatic OCCT handle
 * disposal, matching the convention in tests/smoke/*.test.ts.
 */

/** @param {import('../../../build-configs/opencascade_single.js').OpenCascadeInstance} oc */

export function sample01_primitiveBox(oc) {
  using box = new oc.BRepPrimAPI_MakeBox(10, 20, 30);
  using shape = box.Shape();
  if (shape.IsNull()) throw new Error('null shape');
}

export function sample02_primitiveCylinder(oc) {
  using cyl = new oc.BRepPrimAPI_MakeCylinder(5, 15);
  using shape = cyl.Shape();
  if (shape.IsNull()) throw new Error('null shape');
}

export function sample03_booleanFuse(oc) {
  using box1 = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
  using box2 = new oc.BRepPrimAPI_MakeBox(5, 5, 5);
  using s1 = box1.Shape();
  using s2 = box2.Shape();
  using pr = new oc.Message_ProgressRange();
  using fuse = new oc.BRepAlgoAPI_Fuse(s1, s2, pr);
  using pr2 = new oc.Message_ProgressRange();
  fuse.Build(pr2);
  using out = fuse.Shape();
  if (out.IsNull()) throw new Error('null fuse');
}

// Multi-tool BRepAlgoAPI_Cut: 1 BOPDS init over base + 25 cylinder tools,
// instead of 25 separate inits over (current, tool). See F14.
export function sample04_booleanCutGrid(oc) {
  using baseMaker = new oc.BRepPrimAPI_MakeBox(100, 100, 10);
  const tools = [];
  try {
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        using origin = new oc.gp_Pnt(10 + i * 20, 10 + j * 20, -5);
        using zDir = new oc.gp_Dir(0, 0, 1);
        using ax = new oc.gp_Ax2(origin, zDir);
        using cylMaker = new oc.BRepPrimAPI_MakeCylinder(ax, 2, 20);
        tools.push(cylMaker.Shape());
      }
    }
    using args = new oc.NCollection_List_TopoDS_Shape();
    using toolsList = new oc.NCollection_List_TopoDS_Shape();
    using base = baseMaker.Shape();
    args.Append(base);
    for (const t of tools) toolsList.Append(t);
    using cut = new oc.BRepAlgoAPI_Cut();
    cut.SetArguments(args);
    cut.SetTools(toolsList);
    using pr = new oc.Message_ProgressRange();
    cut.Build(pr);
    using out = cut.Shape();
    if (out.IsNull()) throw new Error('null cut grid');
  } finally {
    for (const t of tools) t.delete();
  }
}

export function sample05_loftThruSections(oc) {
  using loft = new oc.BRepOffsetAPI_ThruSections(true, false, 1e-6);
  const profiles = [
    { z: 0, radius: 10 },
    { z: 15, radius: 5 },
    { z: 30, radius: 8 },
  ];
  for (const { z, radius } of profiles) {
    using center = new oc.gp_Pnt(0, 0, z);
    using dir = new oc.gp_Dir(0, 0, 1);
    using ax = new oc.gp_Ax2(center, dir);
    using circle = new oc.Geom_Circle(ax, radius);
    using edge = new oc.BRepBuilderAPI_MakeEdge(circle);
    using e = edge.Edge();
    using wireMaker = new oc.BRepBuilderAPI_MakeWire(e);
    using w = wireMaker.Wire();
    loft.AddWire(w);
  }
  loft.CheckCompatibility(false);
  using shape = loft.Shape();
  if (shape.IsNull()) throw new Error('null loft');
}

export function sample06_pipeShellSweep(oc) {
  using p1 = new oc.gp_Pnt(0, 0, 0);
  using p2 = new oc.gp_Pnt(0, 0, 30);
  using spineEdge = new oc.BRepBuilderAPI_MakeEdge(p1, p2);
  using eSpine = spineEdge.Edge();
  using spineWire = new oc.BRepBuilderAPI_MakeWire(eSpine);

  using axOrigin = new oc.gp_Pnt(0, 0, 0);
  using axDir = new oc.gp_Dir(0, 0, 1);
  using ax = new oc.gp_Ax2(axOrigin, axDir);
  using circle = new oc.Geom_Circle(ax, 5);
  using profileEdge = new oc.BRepBuilderAPI_MakeEdge(circle);
  using eProf = profileEdge.Edge();
  using profileWire = new oc.BRepBuilderAPI_MakeWire(eProf);

  using sw = spineWire.Wire();
  using pipeShell = new oc.BRepOffsetAPI_MakePipeShell(sw);
  using pw = profileWire.Wire();
  pipeShell.Add(pw, false, false);
  using progress = new oc.Message_ProgressRange();
  pipeShell.Build(progress);
  pipeShell.MakeSolid();
  using shape = pipeShell.Shape();
  if (shape.IsNull()) throw new Error('null pipe');
}

export function sample07_surfaceFillingPatch(oc) {
  using p1 = new oc.gp_Pnt(0, 0, 0);
  using p2 = new oc.gp_Pnt(10, 0, 0);
  using p3 = new oc.gp_Pnt(10, 10, 0);
  using p4 = new oc.gp_Pnt(0, 10, 0);
  using em1 = new oc.BRepBuilderAPI_MakeEdge(p1, p2);
  using em2 = new oc.BRepBuilderAPI_MakeEdge(p2, p3);
  using em3 = new oc.BRepBuilderAPI_MakeEdge(p3, p4);
  using em4 = new oc.BRepBuilderAPI_MakeEdge(p4, p1);
  using e1 = em1.Edge();
  using e2 = em2.Edge();
  using e3 = em3.Edge();
  using e4 = em4.Edge();

  using filling = new oc.BRepOffsetAPI_MakeFilling(
    3, 15, 2, false, 1e-3, 1e-4, 1e-1, 0.1, 8, 9,
  );
  filling.Add(e1, oc.GeomAbs_Shape.GeomAbs_C0, true);
  filling.Add(e2, oc.GeomAbs_Shape.GeomAbs_C0, true);
  filling.Add(e3, oc.GeomAbs_Shape.GeomAbs_C0, true);
  filling.Add(e4, oc.GeomAbs_Shape.GeomAbs_C0, true);
  using pr = new oc.Message_ProgressRange();
  filling.Build(pr);
  using face = filling.Shape();
  if (face.IsNull()) throw new Error('null fill');
}

export function sample08_filletAllEdges(oc) {
  using box = new oc.BRepPrimAPI_MakeBox(20, 20, 20);
  using boxShape = box.Shape();
  using fillet = new oc.BRepFilletAPI_MakeFillet(
    boxShape,
    oc.ChFi3d_FilletShape.ChFi3d_Rational,
  );
  using explorer = new oc.TopExp_Explorer(
    boxShape,
    oc.TopAbs_ShapeEnum.TopAbs_EDGE,
    oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
  );
  while (explorer.More()) {
    using cur = explorer.Current();
    using edge = oc.TopoDS.Edge(cur);
    fillet.Add(3, edge);
    explorer.Next();
  }
  using pr = new oc.Message_ProgressRange();
  fillet.Build(pr);
  using shape = fillet.Shape();
  if (shape.IsNull()) throw new Error('null fillet');
}

// Multi-tool BRepAlgoAPI_Fuse: 1 BOPDS init over args + 39 box tools,
// instead of 39 separate (prev, next) inits in a chain. See F14.
function buildOverlappingBoxesShapes(oc, count = 40, spacing = 3.0, side = 4.0) {
  const shapes = [];
  for (let i = 0; i < count; i++) {
    using origin = new oc.gp_Pnt(i * spacing, 0, 0);
    using maker = new oc.BRepPrimAPI_MakeBox(origin, side, side, side);
    shapes.push(maker.Shape());
  }
  return shapes;
}

function fuseOverlappingBoxesMultiTool(oc, shapes) {
  using args = new oc.NCollection_List_TopoDS_Shape();
  using tools = new oc.NCollection_List_TopoDS_Shape();
  args.Append(shapes[0]);
  for (let i = 1; i < shapes.length; i++) tools.Append(shapes[i]);
  using fuse = new oc.BRepAlgoAPI_Fuse();
  fuse.SetArguments(args);
  fuse.SetTools(tools);
  using pr = new oc.Message_ProgressRange();
  fuse.Build(pr);
  return fuse.Shape();
}

export function sample09_fuseManyBoxes(oc) {
  const shapes = buildOverlappingBoxesShapes(oc);
  let outShape = null;
  try {
    outShape = fuseOverlappingBoxesMultiTool(oc, shapes);
    if (outShape.IsNull()) throw new Error('null multi-tool fuse');
  } finally {
    for (const s of shapes) s.delete();
    if (outShape) outShape.delete();
  }
}

export function sample10_meshIncremental(oc) {
  const shapes = buildOverlappingBoxesShapes(oc);
  let outShape = null;
  try {
    outShape = fuseOverlappingBoxesMultiTool(oc, shapes);
    if (outShape.IsNull()) throw new Error('null multi-tool fuse');
    using mesh = new oc.BRepMesh_IncrementalMesh(outShape, 0.25, false, 0.5, false);
    void mesh;
    using loc = new oc.TopLoc_Location();
    const meshPurposeNone = 0;
    using expf = new oc.TopExp_Explorer(
      outShape,
      oc.TopAbs_ShapeEnum.TopAbs_FACE,
      oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
    );
    if (!expf.More()) throw new Error('no faces');
    using fc = expf.Current();
    using face = oc.TopoDS.Face(fc);
    using tri = oc.BRep_Tool.Triangulation(face, loc, meshPurposeNone);
    if (tri.NbTriangles() < 1) throw new Error('no triangles');
  } finally {
    for (const s of shapes) s.delete();
    if (outShape) outShape.delete();
  }
}

export const SAMPLES = {
  '01_primitive_box': sample01_primitiveBox,
  '02_primitive_cylinder': sample02_primitiveCylinder,
  '03_boolean_fuse': sample03_booleanFuse,
  '04_boolean_cut_grid': sample04_booleanCutGrid,
  '05_loft_thru_sections': sample05_loftThruSections,
  '06_pipe_shell_sweep': sample06_pipeShellSweep,
  '07_surface_filling_patch': sample07_surfaceFillingPatch,
  '08_fillet_all_edges': sample08_filletAllEdges,
  '09_fuse_many_boxes': sample09_fuseManyBoxes,
  '10_mesh_incremental': sample10_meshIncremental,
};
