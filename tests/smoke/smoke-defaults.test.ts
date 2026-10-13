import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';
import { expectShapeGeometry } from './geometry-helpers.js';

describe.skipIf(!wasmExists)('Smoke: default parameter support', () => {
  beforeAll(async () => { await initOC(); });

  describe('BRepMesh_IncrementalMesh — omitting trailing defaults', () => {
    it('should accept 2 args (shape, linearDeflection) omitting isRelative, angDeflection, isInParallel', () => {
      const oc = getOC();
      using box = new oc.BRepPrimAPI_MakeBox(10, 20, 30);
      using shape = box.Shape();

      using mesh = new oc.BRepMesh_IncrementalMesh(shape, 0.1);
      using progressRange = new oc.Message_ProgressRange();
      mesh.Perform(progressRange);
      expect(mesh.IsDone()).toBe(true);
    });

    it('should accept 3 args (shape, linearDeflection, isRelative) omitting angDeflection, isInParallel', () => {
      const oc = getOC();
      using box = new oc.BRepPrimAPI_MakeBox(10, 20, 30);
      using shape = box.Shape();

      using mesh = new oc.BRepMesh_IncrementalMesh(shape, 0.1, false);
      using progressRange = new oc.Message_ProgressRange();
      mesh.Perform(progressRange);
      expect(mesh.IsDone()).toBe(true);
    });

    it('should accept 4 args (shape, linearDeflection, isRelative, angDeflection) omitting isInParallel', () => {
      const oc = getOC();
      using box = new oc.BRepPrimAPI_MakeBox(10, 20, 30);
      using shape = box.Shape();

      using mesh = new oc.BRepMesh_IncrementalMesh(shape, 0.1, false, 0.5);
      using progressRange = new oc.Message_ProgressRange();
      mesh.Perform(progressRange);
      expect(mesh.IsDone()).toBe(true);
    });

    it('should still accept full 5 args', () => {
      const oc = getOC();
      using box = new oc.BRepPrimAPI_MakeBox(10, 20, 30);
      using shape = box.Shape();

      using mesh = new oc.BRepMesh_IncrementalMesh(shape, 0.1, false, 0.5, false);
      using progressRange = new oc.Message_ProgressRange();
      mesh.Perform(progressRange);
      expect(mesh.IsDone()).toBe(true);
    });
  });

  describe('BRepAlgoAPI_Fuse — omitting trailing defaults', () => {
    it('should accept 2 args (S1, S2) omitting Message_ProgressRange', async () => {
      const oc = getOC();
      using box1 = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
      using box2 = new oc.BRepPrimAPI_MakeBox(5, 5, 5);

      using box1Shape = box1.Shape();
      using box2Shape = box2.Shape();
      using fuse = new oc.BRepAlgoAPI_Fuse(box1Shape, box2Shape);
      using messageProgressrange = new oc.Message_ProgressRange();
      fuse.Build(messageProgressrange);
      using shape = fuse.Shape();
      expect(shape.IsNull()).toBe(false);

      await expectShapeGeometry(shape, { size: [10, 10, 10] });
    });
  });
});
