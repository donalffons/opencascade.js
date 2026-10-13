/**
 * Smoke: Approach G — Handle output-param input elision.
 *
 * Validates that non-const `Handle<T>&` output parameters are dropped from the
 * JS-facing signature (OCCT guarantees non-const `Handle<T>&` is output-only).
 * The caller passes only the non-Handle inputs; the C++ optional_override lambda
 * declares stack-local null Handles internally and surfaces the freshly-assigned
 * wrappers as container fields disposed by the envelope's `[Symbol.dispose]`.
 *
 * Target: `BRep_Tool.PolygonOnTriangulation(Edge, Location)` — multi-Handle
 * elision overload returning `{P, T, L, [Symbol.dispose]}`. The caller never
 * constructs a `new oc.Handle_*()` placeholder; the container fields are the
 * sole wrapper allocations.
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: Handle output-param elision (Approach G)', () => {
  beforeAll(async () => { await initOC(); });

  it('container surfaces Handle outputs without any JS-side Handle wrapper input', () => {
    const oc = getOC();
    using box = new oc.BRepPrimAPI_MakeBox(10, 20, 30);
    using shape = box.Shape();
    using progressRange = new oc.Message_ProgressRange();
    using mesh = new oc.BRepMesh_IncrementalMesh(shape, 0.5, false, 0.5, false);
    mesh.Perform(progressRange);

    using edgeExplorer = new oc.TopExp_Explorer(
      shape,
      oc.TopAbs_ShapeEnum.TopAbs_EDGE,
      oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
    );
    expect(edgeExplorer.More()).toBe(true);
    using edgeCurrent = edgeExplorer.Current();
    using edge = oc.TopoDS.Edge(edgeCurrent);
    using loc = new oc.TopLoc_Location();

    using container = oc.BRep_Tool.PolygonOnTriangulation(edge, loc);

    expect(container.P).toBeDefined();
    expect(container.T).toBeDefined();
    expect(typeof container.P.isNull).toBe('function');
    expect(typeof container.T.isNull).toBe('function');
    expect(typeof container[Symbol.dispose]).toBe('function');
  });
});
