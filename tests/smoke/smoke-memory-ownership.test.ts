/**
 * Verifies that `delete()` (and `using`) frees the C++ object behind a JS handle, and
 * that handles to memory C++ still owns (raw `T*` returns and non-copyable reference
 * returns) are borrowed: deleting them releases the JS handle only.
 *
 * Regression coverage for https://github.com/taucad/opencascade.js/issues/40, where
 * every class declaring OCCT's placement `operator delete` got an empty destructor.
 */
import * as path from 'node:path';
import { describe, it, expect, beforeAll } from 'vitest';
import type { OpenCascadeInstance } from '../../dist/opencascade_single.js';
import init from '../../dist/opencascade_single.js';
import { initOC, getOC, wasmExists } from './helpers.js';

const MB = 2 ** 20;

/** Embind's handle methods, which the generated declarations leave out. */
interface EmbindHandle {
  clone(): EmbindHandle;
  delete(): void;
  isDeleted(): boolean;
}
const DIST_DIR = path.resolve(import.meta.dirname, '../../dist');

/**
 * Runs `body` against a fresh instance, so earlier tests can't leave heap headroom
 * that hides a leak, and returns how many bytes the wasm heap grew. Each case below
 * leaks well past the initial 128 MB heap when destructors are missing.
 */
async function heapGrowth(body: (oc: OpenCascadeInstance) => void, iterations: number): Promise<number> {
  const oc = await init({ locateFile: (filename: string) => path.join(DIST_DIR, filename) });
  const heapBytes = (): number => oc.wasmMemory.buffer.byteLength;
  for (let i = 0; i < 5; i++) body(oc);
  const before = heapBytes();
  for (let i = 0; i < iterations; i++) body(oc);
  return heapBytes() - before;
}

/* eslint-disable @typescript-eslint/naming-convention -- OpenCASCADE C++ API naming */
describe.skipIf(!wasmExists)('Smoke: memory ownership', () => {
  beforeAll(async () => {
    await initOC();
  });

  describe('delete() frees the C++ object', () => {
    it('NCollection_Array1 releases its buffer (2.4 MB x 300)', async () => {
      const growth = await heapGrowth((oc) => {
        // eslint-disable-next-line ocjs-lint/require-using-on-disposable -- the test exercises an explicit `.delete()` call.
        const points = new oc.NCollection_Array1_gp_Pnt(1, 100_000);
        points.delete();
      }, 300);
      expect(growth).toBeLessThan(16 * MB);
    });

    it('`using` releases an NCollection_Array1_double buffer (8 MB x 100)', async () => {
      const growth = await heapGrowth((oc) => {
        using values = new oc.NCollection_Array1_double(1, 1_000_000);
        values.SetValue(1, 1);
      }, 100);
      expect(growth).toBeLessThan(16 * MB);
    });

    it('BRepAlgoAPI_Cut and its inputs are freed without Clear()', async () => {
      const growth = await heapGrowth((oc) => {
        using makeBox = new oc.BRepPrimAPI_MakeBox(40, 30, 20);
        using box = makeBox.Shape();
        using origin = new oc.gp_Pnt(20, 15, -1);
        using dir = new oc.gp_Dir(0, 0, 1);
        using ax = new oc.gp_Ax2(origin, dir);
        using makeCylinder = new oc.BRepPrimAPI_MakeCylinder(ax, 4, 22);
        using cylinder = makeCylinder.Shape();
        using range = new oc.Message_ProgressRange();
        using cut = new oc.BRepAlgoAPI_Cut(box, cylinder, range);
        using result = cut.Shape();
        expect(result.IsNull()).toBe(false);
      }, 1500);
      expect(growth).toBeLessThan(16 * MB);
    });
  });

  describe('borrowed handles do not free memory C++ owns', () => {
    it('deleting the builder returned by BRepAlgoAPI_Cut.Builder() leaves the algorithm intact', () => {
      const oc = getOC();
      for (let i = 0; i < 50; i++) {
        using makeBox = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
        using box = makeBox.Shape();
        using makeSphere = new oc.BRepPrimAPI_MakeSphere(6);
        using sphere = makeSphere.Shape();
        using range = new oc.Message_ProgressRange();
        using cut = new oc.BRepAlgoAPI_Cut(box, sphere, range);

        // eslint-disable-next-line ocjs-lint/require-using-on-disposable -- the test deletes this borrowed handle and its clone explicitly.
        const builder = cut.Builder() as unknown as EmbindHandle;
        const alias = builder.clone();
        builder.delete();
        alias.delete();
        expect(builder.isDeleted()).toBe(true);

        expect(cut.IsDone()).toBe(true);
        using result = cut.Shape();
        expect(result.IsNull()).toBe(false);
      }
    });

    it('deleting an ExtremaPC result reference does not free the evaluator member', () => {
      const oc = getOC();
      using origin = new oc.gp_Pnt(0, 0, 0);
      using dir = new oc.gp_Dir(0, 0, 1);
      using ax = new oc.gp_Ax2(origin, dir);
      using circle = new oc.gp_Circ(ax, 5);
      using evaluator = new oc.ExtremaPC_Circle(circle);
      using query = new oc.gp_Pnt(10, 0, 0);
      for (let i = 0; i < 50; i++) {
        using result = evaluator.Perform(query, 1e-7, 'MinMax');
        expect(result.IsDone()).toBe(true);
      }
    });

    it('constructors still return owning handles', async () => {
      const growth = await heapGrowth((oc) => {
        // eslint-disable-next-line ocjs-lint/require-using-on-disposable -- the test deletes the handle and its clone explicitly.
        const values = new oc.NCollection_Array1_double(1, 1_000_000) as unknown as EmbindHandle;
        const alias = values.clone();
        values.delete();
        alias.delete();
      }, 100);
      expect(growth).toBeLessThan(16 * MB);
    });
  });
});
