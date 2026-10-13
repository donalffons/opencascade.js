/**
 * Docker build-flow tests against the PUBLISHED GHCR images.
 *
 * Modern replacement for the legacy Docker-driven custom-build suite
 * (`test/customBuilds.test.ts`, `test/multi-threaded.test.ts`,
 * `test/progressIndicator.test.ts`), which shelled out to the upstream
 * `donalffons/opencascade.js` image. Here each case runs
 * `ghcr.io/taucad/opencascade.js:{single,multi}-threaded link <yaml>`, then
 * loads the produced ES module and asserts observable behaviour.
 *
 * Opt-in (Docker + several minutes per link): `OCJS_DOCKER_TESTS=1`.
 * Run with: `pnpm test:docker` (see package.json / tests/docker/README intent).
 */
import { describe, it, expect } from 'vitest';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { NodeIO } from '@gltf-transform/core';
import {
  SINGLE_IMAGE,
  MULTI_IMAGE,
  runLink,
  loadModule,
  dockerTestsEnabled,
} from './docker-helpers.js';

const STAGE = process.env.OCJS_DOCKER_STAGE ?? 'all';
const CANDIDATE_OUTPUT_DIR = process.env.OCJS_DOCKER_OUTPUT_DIR;

function expectArtifacts(workDir: string, base: string): void {
  for (const ext of ['js', 'wasm', 'd.ts', 'js.symbols', 'build-manifest.json', 'provenance.json']) {
    const file = path.join(workDir, `${base}.${ext}`);
    expect(fs.existsSync(file), `expected artifact ${base}.${ext}`).toBe(true);
  }
}

async function expectColoredGlb(
  image: string,
  fixture: string,
  workName: string,
  base: string,
): Promise<void> {
  const { status, workDir, stderr } = runLink(image, fixture, workName);
  expect(status, stderr).toBe(0);
  expectArtifacts(workDir, base);

  const oc = await loadModule(workDir, `${base}.js`);
  try {
    using box = new oc.BRepPrimAPI_MakeBox(10, 20, 30);
    using shape = box.Shape();
    using documentName = new oc.TCollection_ExtendedString();
    using document = new oc.TDocStd_Document(documentName);
    using mainLabel = document.Main();
    using shapeTool = oc.XCAFDoc_DocumentTool.ShapeTool(mainLabel);
    using colorTool = oc.XCAFDoc_DocumentTool.ColorTool(mainLabel);
    using shapeLabel = shapeTool.NewShape();
    shapeTool.SetShape(shapeLabel, shape);
    using color = new oc.Quantity_ColorRGBA(1, 0, 0, 0.5);
    colorTool.SetColor(shapeLabel, color, oc.XCAFDoc_ColorType.XCAFDoc_ColorSurf);
    using mesh = new oc.BRepMesh_IncrementalMesh(shape, 0.1, false, 0.1, false);

    const glbPath = '/colored.glb';
    using pathValue = new oc.TCollection_AsciiString(glbPath);
    using writer = new oc.RWGltf_CafWriter(pathValue, true);
    using metadata = new oc.TColStd_IndexedDataMapOfStringString();
    using progress = new oc.Message_ProgressRange();
    expect(writer.Perform(document, metadata, progress)).toBe(true);

    const glb = oc.FS.readFile(glbPath) as Uint8Array;
    const parsed = await new NodeIO().readBinary(glb);
    const primitives = parsed
      .getRoot()
      .listMeshes()
      .flatMap((entry) => entry.listPrimitives());
    expect(primitives.length).toBeGreaterThan(0);
    expect(primitives.every((entry) => entry.getIndices()?.getCount())).toBe(true);
    expect(
      primitives.every((entry) => (entry.getAttribute('POSITION')?.getCount() ?? 0) > 0),
    ).toBe(true);
    expect(primitives[0]?.getMaterial()?.getBaseColorFactor()).toStrictEqual([1, 0, 0, 0.5]);
  } finally {
    oc.PThread?.terminateAllThreads?.();
  }
}

describe.skipIf(!dockerTestsEnabled() || !['all', 'final-single'].includes(STAGE))('Docker build flow (single candidate)', () => {
  it(
    'single image: strictly links and exports indexed colored GLB',
    async () => {
      await expectColoredGlb(
        SINGLE_IMAGE,
        'colored-gltf-single.yml',
        'colored-gltf-single',
        'customBuild.colored-gltf-single',
      );
    },
  );

  it(
    'single image: builds a custom module that loads and instantiates OCCT',
    async () => {
      const { status, workDir, stderr } = runLink(SINGLE_IMAGE, 'simple.yml', 'simple');
      expect(status, stderr).toBe(0);
      expectArtifacts(workDir, 'customBuild.simple');

      const oc = await loadModule(workDir, 'customBuild.simple.js');

      // OCCT instantiates: a default TopoDS_Shape is null.
      const shape = new oc.TopoDS_Shape();
      expect(shape.IsNull()).toBe(true);
      shape.delete();

      // The class from additionalCppFiles is bound and callable.
      expect(oc.Test.foo()).toBe(123);

      // Symbol filtering: an unlisted OCCT class is absent from the build.
      expect(typeof oc.TopoDS_Face).toBe('undefined');
    },
  );

  it(
    'single image: rejects a config with an unknown key nested under mainBuild',
    () => {
      const { status } = runLink(SINGLE_IMAGE, 'errorUnknownProp1.yml', 'err1');
      expect(status).not.toBe(0);
    },
  );

  it(
    'single image: rejects a config with an unknown top-level key',
    () => {
      const { status } = runLink(SINGLE_IMAGE, 'errorUnknownProp2.yml', 'err2');
      expect(status).not.toBe(0);
    },
  );

});

describe.skipIf(!dockerTestsEnabled() || !['all', 'final-multi'].includes(STAGE))('Docker build flow (multi candidate)', () => {
  it(
    'multi image: strictly links and exports indexed colored GLB',
    async () => {
      await expectColoredGlb(
        MULTI_IMAGE,
        'colored-gltf-multi.yml',
        'colored-gltf-multi',
        'customBuild.colored-gltf-multi',
      );
    },
  );

  it(
    'multi image: builds a pthread module that reports parallel mode and meshes in parallel',
    async () => {
      const { status, workDir, stderr, base } = CANDIDATE_OUTPUT_DIR
        ? {
            status: 0,
            workDir: CANDIDATE_OUTPUT_DIR,
            stderr: '',
            base: 'opencascade_multi',
          }
        : {
            ...runLink(MULTI_IMAGE, 'multi-threaded.yml', 'multi'),
            base: 'customBuild.multi-threaded',
          };
      expect(status, stderr).toBe(0);
      expectArtifacts(workDir, base);

      const oc = await loadModule(workDir, `${base}.js`);

      // Parallel mode: the pre-spawned thread pool reports more than one worker.
      const pool = oc.OSD_ThreadPool.DefaultPool(-1);
      expect(pool.NbThreads()).toBeGreaterThan(1);

      // Build a compound of spheres and mesh it in parallel.
      oc.BRepMesh_IncrementalMesh.SetParallelDefault(true);
      const compound = new oc.TopoDS_Compound();
      const builder = new oc.BRep_Builder();
      builder.MakeCompound(compound);
      for (let i = 0; i < 50; i++) {
        const center = new oc.gp_Pnt(i, 0, 0);
        const sphere = new oc.BRepPrimAPI_MakeSphere(center, 2);
        const sphereShape = sphere.Shape();
        builder.Add(compound, sphereShape);
        sphereShape.delete();
        sphere.delete();
        center.delete();
      }

      const mesh = new oc.BRepMesh_IncrementalMesh(compound, 0.1, false, 0.1, true);
      const progress = new oc.Message_ProgressRange();
      mesh.Perform(progress);
      expect(mesh.IsDone()).toBe(true);

      progress.delete();
      mesh.delete();
      compound.delete();
      builder.delete();
      pool.delete();

      oc.PThread?.terminateAllThreads?.();
    },
  );

});

describe.skipIf(!dockerTestsEnabled() || !['all', 'final-single'].includes(STAGE))('Docker progress behavior (single candidate)', () => {
  it(
    'single image: progress indicator wiring — Show callbacks fire and UserBreak cancels',
    async () => {
      const { status, workDir, stderr } = runLink(
        SINGLE_IMAGE,
        'progress-indicator.yml',
        'progress',
      );
      expect(status, stderr).toBe(0);
      expectArtifacts(workDir, 'customBuild.progress-indicator');

      const oc = await loadModule(workDir, 'customBuild.progress-indicator.js');

      // A JS-derived progress indicator observes Show callbacks during a fuse.
      let showCalls = 0;
      const ReportingIndicator = oc.Message_ProgressIndicator_JS.extend(
        'Message_ProgressIndicator_JS',
        {
          Show() {
            showCalls++;
          },
          UserBreak() {
            return false;
          },
        },
      );
      const reporter = new ReportingIndicator();
      expect(reporter.GetPosition()).toBe(0);

      const a1 = new oc.gp_Pnt(0, 0, 0);
      const boxA = new oc.BRepPrimAPI_MakeBox(a1, 2, 1, 1);
      const a2 = new oc.gp_Pnt(1, 0, 0);
      const boxB = new oc.BRepPrimAPI_MakeBox(a2, 2, 1, 1);
      const sA = boxA.Shape();
      const sB = boxB.Shape();

      const fuse = new oc.BRepAlgoAPI_Fuse(sA, sB, reporter.Start_1());
      const body = fuse.Shape();
      expect(body.IsNull()).toBe(false);
      expect(showCalls).toBeGreaterThan(100);
      expect(reporter.GetPosition()).toBe(1);

      // A cancelling indicator (UserBreak -> true) yields a null result.
      const CancellingIndicator = oc.Message_ProgressIndicator_JS.extend(
        'Message_ProgressIndicator_JS',
        {
          Show() {},
          UserBreak() {
            return true;
          },
        },
      );
      const canceller = new CancellingIndicator();
      const c1 = new oc.gp_Pnt(0, 0, 0);
      const boxC = new oc.BRepPrimAPI_MakeBox(c1, 2, 1, 1);
      const c2 = new oc.gp_Pnt(1, 0, 0);
      const boxD = new oc.BRepPrimAPI_MakeBox(c2, 2, 1, 1);
      const sC = boxC.Shape();
      const sD = boxD.Shape();
      const cancelledFuse = new oc.BRepAlgoAPI_Fuse(sC, sD, canceller.Start_1());
      const cancelledBody = cancelledFuse.Shape();
      expect(cancelledBody.IsNull()).toBe(true);
    },
  );
});
