/**
 * Verifies `BRepOffsetAPI_MakeFilling` builds a non-planar face through its zero-argument
 * constructor and the two-argument `Add(edge, order)` trailing-default form.
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: makeNonPlanarFace canary (row 34)', () => {
  beforeAll(async () => { await initOC(); });

  it('builds a non-planar face from a 4-edge wire — POST-PHASE-4 zero-arg ctor + 2-arg Add', () => {
    const oc = getOC();
    // 4 non-coplanar corners: the 4th point is lifted out of the
    // (z=0) plane defined by the first 3 so the wire's bounded face
    // is genuinely non-planar.
    using p0 = new oc.gp_Pnt(0, 0, 0);
    using p1 = new oc.gp_Pnt(10, 0, 0);
    using p2 = new oc.gp_Pnt(10, 10, 0);
    using p3 = new oc.gp_Pnt(0, 10, 5);

    using e0Builder = new oc.BRepBuilderAPI_MakeEdge(p0, p1);
    using e1Builder = new oc.BRepBuilderAPI_MakeEdge(p1, p2);
    using e2Builder = new oc.BRepBuilderAPI_MakeEdge(p2, p3);
    using e3Builder = new oc.BRepBuilderAPI_MakeEdge(p3, p0);

    using e0 = e0Builder.Edge();
    using e1 = e1Builder.Edge();
    using e2 = e2Builder.Edge();
    using e3 = e3Builder.Edge();

    using wireBuilder = new oc.BRepBuilderAPI_MakeWire();
    wireBuilder.Add(e0);
    wireBuilder.Add(e1);
    wireBuilder.Add(e2);
    wireBuilder.Add(e3);
    expect(wireBuilder.IsDone()).toBe(true);
    using wire = wireBuilder.Wire();

    // Zero-arg ctor — POST-PHASE-4 — pre-Phase-4 replicad passes all 10
    // trailing defaults verbatim per the bug-fix audit. Once Phase 4
    // ships, the zero-arg ctor is the canonical call site.
    using filling = new oc.BRepOffsetAPI_MakeFilling();

    // 2-arg `.Add(edge, GeomAbs_C0)` is the row-34 trailing-default
    // collapse. Pre-Phase-4 this throws BindingError (see
    // `smoke-multioverload-trailing-defaults.test.ts`); post-Phase-4
    // the val-default lambda materialises `IsBound = true`.
    // FINDING: these 2-arg `Add(edge, Order)` shapes are type-ACCEPTED because
    // `TopoDS_Edge` is structurally assignable to `TopoDS_Face`, so each call
    // binds to the arity-2 `Add(Support: TopoDS_Face, Order)` overload at the
    // type level (no @ts-expect-error needed). This is a pure RUNTIME pin: the
    // embind dispatch routes the edge to the `(Constr, Order, IsBound)` branch
    // and throws pre-Phase-4 because IsBound is unset. It flips green once the
    // row-34 trailing default (IsBound=true) is materialised.
    expect(() => {
      filling.Add(e0, oc.GeomAbs_Shape.GeomAbs_C0);
      filling.Add(e1, oc.GeomAbs_Shape.GeomAbs_C0);
      filling.Add(e2, oc.GeomAbs_Shape.GeomAbs_C0);
      filling.Add(e3, oc.GeomAbs_Shape.GeomAbs_C0);
    }).not.toThrow();

    using progress = new oc.Message_ProgressRange();
    filling.Build(progress);
    expect(filling.IsDone()).toBe(true);
    using face = filling.Shape();
    expect(face.IsNull()).toBe(false);

    // Bound the wire-derived face area to confirm geometry built.
    using bbox = new oc.Bnd_Box();
    oc.BRepBndLib.Add(face, bbox, true);
    expect(bbox.IsVoid()).toBe(false);
  });
});
