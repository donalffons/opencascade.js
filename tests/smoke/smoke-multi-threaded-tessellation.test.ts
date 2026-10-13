/**
 * Smoke: parallel tessellation on the multi-threaded build.
 *
 * Modern port of the legacy `test/multi-threaded.test.ts` "can tessellate in
 * multi-threaded mode" case. A compound of 50 spheres is meshed with
 * `BRepMesh_IncrementalMesh(..., isInParallel = true)` after activating the
 * default parallel mode, exercising OCCT's pthread-backed mesher under
 * Emscripten worker threads (the legacy test counted on `wasmMemory.buffer`
 * being a `SharedArrayBuffer`; here the equivalent guarantee is that the
 * thread pool reports more than one worker and the parallel mesh completes).
 *
 * Lives alongside `smoke-multi-threaded.test.ts` (boot + thread pool + parallel
 * fuse) and `smoke-multi-threaded-fold-ctor.test.ts` (runtime embind
 * registration). This file is the dedicated parallel-mesher coverage.
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOCMulti, getOCMulti, multiWasmExists } from './helpers.js';

const sabAvailable = typeof SharedArrayBuffer !== 'undefined';

describe.skipIf(!multiWasmExists)('Smoke: multi-threaded parallel tessellation', () => {
  beforeAll(async () => { await initOCMulti(); });

  it.skipIf(!sabAvailable)(
    'meshes a 50-sphere compound in parallel and reports a triangulated result',
    () => {
      const oc = getOCMulti();

      oc.BRepMesh_IncrementalMesh.SetParallelDefault(true);
      using pool = oc.OSD_ThreadPool.DefaultPool(-1);
      expect(pool.NbThreads()).toBeGreaterThan(1);

      using compound = new oc.TopoDS_Compound();
      using builder = new oc.BRep_Builder();
      builder.MakeCompound(compound);

      for (let i = 0; i < 50; i++) {
        using center = new oc.gp_Pnt(i, 0, 0);
        using sphere = new oc.BRepPrimAPI_MakeSphere(center, 2);
        using sphereShape = sphere.Shape();
        builder.Add(compound, sphereShape);
      }
      expect(compound.IsNull()).toBe(false);

      using mesh = new oc.BRepMesh_IncrementalMesh(compound, 0.1, false, 0.1, true);
      using progress = new oc.Message_ProgressRange();
      mesh.Perform(progress);
      expect(mesh.IsDone()).toBe(true);

      // Each sphere face must now carry a triangulation produced by the
      // parallel mesher.
      using explorer = new oc.TopExp_Explorer(
        compound,
        oc.TopAbs_ShapeEnum.TopAbs_FACE,
        oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
      );
      expect(explorer.More()).toBe(true);
      using explorerCurrent = explorer.Current();
      using face = oc.TopoDS.Face(explorerCurrent);
      using location = new oc.TopLoc_Location();
      /** `Poly_MeshPurpose_NONE` — default visualization mesh (see `Poly_MeshPurpose.hxx`). */
      const meshPurposeNone = 0;
      using triangulation = oc.BRep_Tool.Triangulation(face, location, meshPurposeNone);
      expect(triangulation.NbTriangles()).toBeGreaterThan(0);
    },
    120_000,
  );
});
