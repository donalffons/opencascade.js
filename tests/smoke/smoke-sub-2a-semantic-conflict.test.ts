/**
 * Verifies `BRepMesh_IncrementalMesh` dispatch distinguishes its scalar and
 * `IMeshTools_Parameters` constructor families at overlapping arities.
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: BRepMesh_IncrementalMesh sub-2a semantic conflict (row 7)', () => {
  beforeAll(async () => { await initOC(); });

  it('arity-2 scalar variant: (shape, linDef) dispatches to the scalar fan-out branch', () => {
    const oc = getOC();
    using box = new oc.BRepPrimAPI_MakeBox(6, 6, 6);
    using shape = box.Shape();
    using mesh = new oc.BRepMesh_IncrementalMesh(shape, 0.25);
    using progressRange = new oc.Message_ProgressRange();
    mesh.Perform(progressRange);
    expect(mesh.IsDone()).toBe(true);
  });

  it('arity-5 scalar fan-out: (shape, linDef, isRel, angDef, isInParallel)', () => {
    const oc = getOC();
    using box = new oc.BRepPrimAPI_MakeBox(6, 6, 6);
    using shape = box.Shape();
    using mesh = new oc.BRepMesh_IncrementalMesh(shape, 0.25, false, 0.5, false);
    using progressRange = new oc.Message_ProgressRange();
    mesh.Perform(progressRange);
    expect(mesh.IsDone()).toBe(true);
  });

  it('arity-3 parameters-struct variant: (shape, IMeshTools_Parameters, progress?)', () => {
    const oc = getOC();
    using box = new oc.BRepPrimAPI_MakeBox(6, 6, 6);
    using shape = box.Shape();
    using params = new oc.IMeshTools_Parameters();
    using mesh = new oc.BRepMesh_IncrementalMesh(shape, params, undefined);
    expect(mesh).toBeDefined();
  });

  it('arity-2 with undefined trailing slot routes through val-default lambda: (shape, 0.1)', () => {
    const oc = getOC();
    using box = new oc.BRepPrimAPI_MakeBox(6, 6, 6);
    using shape = box.Shape();
    expect(() => new oc.BRepMesh_IncrementalMesh(shape, 0.1)).not.toThrow();
  });
});
