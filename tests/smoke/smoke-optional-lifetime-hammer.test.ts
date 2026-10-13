/**
 * Exercises repeated value-class calls for heap stability and verifies handle reference
 * counts remain observable. Optional-handle coverage is gated because no constructible binding
 * exposes that parameter shape.
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: std::optional<T> lifetime & refcount safety', () => {
  beforeAll(async () => { await initOC(); });

  describe('U3 — class-typed std::optional<T> hammer (Message_ProgressRange via BRepAlgoAPI_Fuse.Build)', () => {
    it('200x Build(progress) with fresh ProgressRange each call leaves heap bounded', () => {
      const oc = getOC();
      const HAMMER = 200;

      const warmups = 5;
      for (let i = 0; i < warmups; i++) {
        using a = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
        using b = new oc.BRepPrimAPI_MakeBox(5, 5, 5);
        using ashape = a.Shape();
        using bshape = b.Shape();
        using fuse = new oc.BRepAlgoAPI_Fuse(ashape, bshape);
        using progress = new oc.Message_ProgressRange();
        fuse.Build(progress);
      }
      if (typeof globalThis.gc === 'function') globalThis.gc();
      const heapBefore = process.memoryUsage().heapUsed;

      for (let i = 0; i < HAMMER; i++) {
        using a = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
        using b = new oc.BRepPrimAPI_MakeBox(5, 5, 5);
        using ashape = a.Shape();
        using bshape = b.Shape();
        using fuse = new oc.BRepAlgoAPI_Fuse(ashape, bshape);
        using progress = new oc.Message_ProgressRange();
        fuse.Build(progress);
        expect(fuse.IsDone()).toBe(true);
      }
      if (typeof globalThis.gc === 'function') globalThis.gc();
      const heapAfter = process.memoryUsage().heapUsed;

      // Heap drift budget: 8 MB. The hammer creates 200 fresh boxes + shapes
      // + fuses each iteration; some JS-side heap churn is expected. The
      // assertion is meant to catch ORDER-OF-MAGNITUDE regression (true
      // leak) not noise. The PoC's U3 zero-leak result was measured on
      // raw counters with no JS overhead.
      const driftBytes = heapAfter - heapBefore;
      expect(driftBytes).toBeLessThan(8 * 1024 * 1024);
    });
  });

  describe('U4 — handle refcount stability through optional-wrapped wire path', () => {
    const OPTIONAL_HANDLE_PARAM_AVAILABLE = false;

    it('GetRefCount is exposed on Standard_Transient-derived handles (precondition for U4)', () => {
      const oc = getOC();
      using gpPnt = new oc.gp_Pnt();
      using gpDir = new oc.gp_Dir(1, 0, 0);
      using ax1 = new oc.gp_Ax1(gpPnt, gpDir);
      using line = new oc.Geom_Line(ax1);
      expect(typeof line.GetRefCount).toBe('function');
      expect(line.GetRefCount()).toBeGreaterThanOrEqual(1);
    });

    it.skipIf(!OPTIONAL_HANDLE_PARAM_AVAILABLE)(
      'POST-MIGRATION ACTIVATION — 500x optional<handle<T>> call sweep returns refcount to baseline',
      () => {
        // Activate when bindgen migrates a method with an
        // `optional<handle<T>>` parameter shape. Pattern:
        //
        //   const oc = getOC();
        //   using handle = new oc.SomeStandardTransient(...);
        //   const baseline = handle.GetRefCount();
        //
        //   for (let i = 0; i < 100; i++) {
        //     oc.MigratedClass.methodWithOptionalHandle(input, handle);
        //   }
        //   for (let i = 0; i < 100; i++) {
        //     oc.MigratedClass.methodWithOptionalHandle(input, null);
        //   }
        //   for (let i = 0; i < 100; i++) {
        //     oc.MigratedClass.methodWithOptionalHandle(input, undefined);
        //   }
        //   for (let i = 0; i < 100; i++) {
        //     oc.MigratedClass.methodWithOptionalHandle(input);
        //   }
        //
        //   expect(handle.GetRefCount()).toBe(baseline);
        //
        // Activation-gate premise pin: no production method exposes an
        // `optional<handle<T>>` parameter yet. Flipping
        // OPTIONAL_HANDLE_PARAM_AVAILABLE un-skips this and fails here,
        // forcing the 500x refcount-sweep body above to be written.
        expect(OPTIONAL_HANDLE_PARAM_AVAILABLE).toBe(false);
      },
    );
  });
});
