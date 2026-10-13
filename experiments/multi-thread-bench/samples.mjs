// Multi-thread benchmark sample set.
//
// Mirrors `experiments/build123d-vs-ocjs/ocjs/samples.mjs` 1:1 for the first
// 10 samples (so the per-sample wall-time numbers are directly comparable
// across the build123d-vs-ocjs benchmark and this one), plus a STEP-import
// sample (11) that loads the 21-solid `main-assembly.step` asset used by
// `experiments/replicad-impact-poc/replicad-equivalent/examples/m6-step-single.mjs`.
//
// The `MT_OPTS` env knob controls whether each sample opts each algorithm
// into multi-threaded execution at the OCCT runtime layer. The exact same
// JS source runs against both binaries -- when MT_OPTS=false, the parallel
// flag is left at OCCT's default (off), which is the only honest way to
// compare single-threaded perf against multi-threaded perf without changing
// the workload.

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const STEP_HOST_PATH = path.resolve(__dirname, '../replicad-impact-poc/assets/main-assembly.step');
const STEP_FS_PATH = '/tmp/main-assembly.step';

// Lazily-staged STEP bytes; the harness must call `prewarmStep(oc)` before
// running sample 11 so the per-iteration timer excludes disk I/O.
let _stepPrewarmed = new WeakSet();
export function prewarmStep(oc) {
  if (_stepPrewarmed.has(oc)) return;
  const bytes = readFileSync(STEP_HOST_PATH);
  oc.FS.writeFile(STEP_FS_PATH, bytes);
  _stepPrewarmed.add(oc);
}

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

export function sample03_booleanFuse(oc, { parallel = false } = {}) {
  using box1 = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
  using box2 = new oc.BRepPrimAPI_MakeBox(5, 5, 5);
  using s1 = box1.Shape();
  using s2 = box2.Shape();
  using pr = new oc.Message_ProgressRange();
  using fuse = new oc.BRepAlgoAPI_Fuse(s1, s2, pr);
  fuse.SetRunParallel(parallel);
  using pr2 = new oc.Message_ProgressRange();
  fuse.Build(pr2);
  using out = fuse.Shape();
  if (out.IsNull()) throw new Error('null fuse');
}

export function sample04_booleanCutGrid(oc, { parallel = false } = {}) {
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
    cut.SetRunParallel(parallel);
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

function buildOverlappingBoxesShapes(oc, count = 40, spacing = 3.0, side = 4.0) {
  const shapes = [];
  for (let i = 0; i < count; i++) {
    using origin = new oc.gp_Pnt(i * spacing, 0, 0);
    using maker = new oc.BRepPrimAPI_MakeBox(origin, side, side, side);
    shapes.push(maker.Shape());
  }
  return shapes;
}

function fuseOverlappingBoxesMultiTool(oc, shapes, parallel) {
  using args = new oc.NCollection_List_TopoDS_Shape();
  using tools = new oc.NCollection_List_TopoDS_Shape();
  args.Append(shapes[0]);
  for (let i = 1; i < shapes.length; i++) tools.Append(shapes[i]);
  using fuse = new oc.BRepAlgoAPI_Fuse();
  fuse.SetArguments(args);
  fuse.SetTools(tools);
  fuse.SetRunParallel(parallel);
  using pr = new oc.Message_ProgressRange();
  fuse.Build(pr);
  return fuse.Shape();
}

export function sample09_fuseManyBoxes(oc, { parallel = false } = {}) {
  const shapes = buildOverlappingBoxesShapes(oc);
  let outShape = null;
  try {
    outShape = fuseOverlappingBoxesMultiTool(oc, shapes, parallel);
    if (outShape.IsNull()) throw new Error('null multi-tool fuse');
  } finally {
    for (const s of shapes) s.delete();
    if (outShape) outShape.delete();
  }
}

export function sample10_meshIncremental(oc, { parallel = false } = {}) {
  const shapes = buildOverlappingBoxesShapes(oc);
  let outShape = null;
  try {
    outShape = fuseOverlappingBoxesMultiTool(oc, shapes, parallel);
    if (outShape.IsNull()) throw new Error('null multi-tool fuse');
    using mesh = new oc.BRepMesh_IncrementalMesh(outShape, 0.25, false, 0.5, parallel);
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

// Sample 11 — STEP import + mesh. STEPControl_Reader has no parallel path,
// but BRepMesh_IncrementalMesh on the 21-solid compound exercises the
// per-face mesh scatter heavily (this is the headline meshing workload).
export function sample11_stepImportAndMesh(oc, { parallel = false } = {}) {
  prewarmStep(oc);
  using reader = new oc.STEPControl_Reader();
  const status = reader.ReadFile(STEP_FS_PATH);
  if (status !== oc.IFSelect_ReturnStatus.IFSelect_RetDone) {
    throw new Error(`ReadFile failed: ${status}`);
  }
  using pr = new oc.Message_ProgressRange();
  const n = reader.TransferRoots(pr);
  if (n === 0) throw new Error('TransferRoots: 0 shapes');
  using shape = reader.OneShape();
  if (shape.IsNull()) throw new Error('null STEP shape');
  // Mesh the entire compound with a moderate deflection. This is the heaviest
  // meshing workload in the suite -- 21 solids, hundreds of faces, every
  // face independently triangulated.
  using mesh = new oc.BRepMesh_IncrementalMesh(shape, 0.5, false, 0.3, parallel);
  void mesh;
  // Touch the first face's triangulation to ensure the mesh is materialised.
  using loc = new oc.TopLoc_Location();
  using expf = new oc.TopExp_Explorer(
    shape,
    oc.TopAbs_ShapeEnum.TopAbs_FACE,
    oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
  );
  if (!expf.More()) throw new Error('no STEP faces');
  using fc = expf.Current();
  using face = oc.TopoDS.Face(fc);
  using tri = oc.BRep_Tool.Triangulation(face, loc, 0);
  if (tri.NbTriangles() < 1) throw new Error('no triangles on first STEP face');
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
  '11_step_import_and_mesh': sample11_stepImportAndMesh,
};

// Which samples actually exercise an OCCT API that has a parallel path.
// Used by the harness to label runs and to gate the BOPAlgo global toggle.
export const PARALLEL_AWARE_SAMPLES = new Set([
  '03_boolean_fuse',
  '04_boolean_cut_grid',
  '09_fuse_many_boxes',
  '10_mesh_incremental',
  '11_step_import_and_mesh',
]);
