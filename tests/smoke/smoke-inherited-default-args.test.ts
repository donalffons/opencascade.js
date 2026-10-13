/**
 * Verifies inherited `Build` methods retain their default argument dispatch on concrete
 * builder classes and registration order does not change which implementation is invoked.
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: inherited trailing-default arity fan-out', () => {
  beforeAll(async () => { await initOC(); });

  /**
   * Helper: build a 10×10×10 box and pull the first edge out for chamfer/fillet input.
   * Returned objects are caller-disposed.
   */
  const makeBoxAndFirstEdge = () => {
    const oc = getOC();
    const box = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
    const boxShape = box.Shape();
    const explorer = new oc.TopExp_Explorer(
      boxShape,
      oc.TopAbs_ShapeEnum.TopAbs_EDGE,
      oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
    );
    if (!explorer.More()) {
      box.delete(); boxShape.delete(); explorer.delete();
      throw new Error('TopExp_Explorer found no edges in box');
    }
    const explorerCurrent = explorer.Current();
    const edge = oc.TopoDS.Edge(explorerCurrent);
    return { box, boxShape, explorer, explorerCurrent, edge };
  };

  /**
   * Test A — Inherited arity-0 Build() on a derived class WITHOUT its own
   * Build override. Production smoking gun for `chamfer.Build()`: dispatch
   * walks the prototype chain to BRepBuilderAPI_MakeShape's truncation
   * lambda, which calls `self.Build()` — virtual dispatch in C++ then
   * lands on the concrete chamfer implementation.
   */
  it('A. chamfer.Build() (arity-0) dispatches via inherited truncation + virtual call', () => {
    const oc = getOC();
    const ctx = makeBoxAndFirstEdge();
    try {
      using chamfer = new oc.BRepFilletAPI_MakeChamfer(ctx.boxShape);
      chamfer.Add(2, ctx.edge);
      expect(() => chamfer.Build()).not.toThrow();
      using shape = chamfer.Shape();
      expect(shape.IsNull()).toBe(false);
    } finally {
      ctx.edge.delete();
      ctx.explorerCurrent.delete();
      ctx.explorer.delete();
      ctx.boxShape.delete();
      ctx.box.delete();
    }
  });

  /**
   * Test B — Arity-0 Build() on a derived class WITH explicit override.
   * SplitShape registers its own Build override; the truncation lambda
   * lives on SplitShape's instancePrototype directly.
   */
  it('B. splitter.Build() (arity-0) dispatches via own-class truncation', () => {
    const oc = getOC();
    using box = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
    using boxShape = box.Shape();
    using splitter = new oc.BRepFeat_SplitShape(boxShape);
    expect(() => splitter.Build()).not.toThrow();
  });

  /**
   * Test C — Arity-0 Build() on ThruSections. Has explicit override AND
   * multi-arity primitive defaults on `Init`. Validates that the override
   * truncation works in the presence of sibling truncations from Init.
   */
  it('C. thrusections.Build() (arity-0) on a class that also has Init multi-arity defaults', () => {
    const oc = getOC();
    using p0 = new oc.gp_Pnt(0, -10, -5);
    using p1 = new oc.gp_Pnt(0,  10, -5);
    using p2 = new oc.gp_Pnt(0,  10,  5);
    using p3 = new oc.gp_Pnt(0, -10,  5);
    using polyA = new oc.BRepBuilderAPI_MakePolygon(p0, p1, p2, p3, true);
    using wireA = polyA.Wire();
    using p4 = new oc.gp_Pnt(20, -15, -8);
    using p5 = new oc.gp_Pnt(20,  15, -8);
    using p6 = new oc.gp_Pnt(20,  15,  8);
    using p7 = new oc.gp_Pnt(20, -15,  8);
    using polyB = new oc.BRepBuilderAPI_MakePolygon(p4, p5, p6, p7, true);
    using wireB = polyB.Wire();

    using loft = new oc.BRepOffsetAPI_ThruSections(true, false, 1e-6);
    loft.AddWire(wireA);
    loft.AddWire(wireB);
    expect(() => loft.Build()).not.toThrow();
    using shape = loft.Shape();
    expect(shape.IsNull()).toBe(false);
  });

  /**
   * Invokes SplitShape before Chamfer to verify sibling registrations keep independent inherited
   * dispatch tables.
   */
  it('D. CROSS-SIBLING — SplitShape first, then MakeChamfer Build(progress) AND Build()', () => {
    const oc = getOC();
    using box1 = new oc.BRepPrimAPI_MakeBox(8, 8, 8);
    using box1Shape = box1.Shape();
    using splitter = new oc.BRepFeat_SplitShape(box1Shape);
    splitter.Build();

    const ctx = makeBoxAndFirstEdge();
    try {
      using chamfer = new oc.BRepFilletAPI_MakeChamfer(ctx.boxShape);
      chamfer.Add(1, ctx.edge);
      using progress = new oc.Message_ProgressRange();
      expect(() => chamfer.Build(progress)).not.toThrow();
      // Re-run Build() (arity-0) on the same chamfer to exercise inherited
      // truncation after the production trigger has fired.
      expect(() => chamfer.Build()).not.toThrow();
    } finally {
      ctx.edge.delete();
      ctx.explorerCurrent.delete();
      ctx.explorer.delete();
      ctx.boxShape.delete();
      ctx.box.delete();
    }
  });

  /**
   * Repeats the sibling-dispatch check in reverse order to prove registration order is irrelevant.
   */
  it('E. CROSS-SIBLING reversed — Chamfer first, then SplitShape Build()', () => {
    const oc = getOC();
    const ctx = makeBoxAndFirstEdge();
    try {
      using chamfer = new oc.BRepFilletAPI_MakeChamfer(ctx.boxShape);
      chamfer.Add(1, ctx.edge);
      using progress = new oc.Message_ProgressRange();
      chamfer.Build(progress);

      using box2 = new oc.BRepPrimAPI_MakeBox(6, 6, 6);
      using box2Shape = box2.Shape();
      using splitter = new oc.BRepFeat_SplitShape(box2Shape);
      expect(() => splitter.Build()).not.toThrow();
    } finally {
      ctx.edge.delete();
      ctx.explorerCurrent.delete();
      ctx.explorer.delete();
      ctx.boxShape.delete();
      ctx.box.delete();
    }
  });

  /**
   * Test F — Multi-arity primitive trailing defaults. ThruSections.Init
   * has three primitive defaults `(bool=false, bool=false, double=1e-6)`;
   * fan-out emits arity-0/1/2/3 truncation lambdas. Validates each.
   */
  it('F. thrusections.Init() / Init(true) / Init(true,false) / Init(true,false,1e-6)', () => {
    const oc = getOC();
    using loft1 = new oc.BRepOffsetAPI_ThruSections();
    expect(() => loft1.Init()).not.toThrow();

    using loft2 = new oc.BRepOffsetAPI_ThruSections();
    expect(() => loft2.Init(true)).not.toThrow();

    using loft3 = new oc.BRepOffsetAPI_ThruSections();
    expect(() => loft3.Init(true, false)).not.toThrow();

    using loft4 = new oc.BRepOffsetAPI_ThruSections();
    expect(() => loft4.Init(true, false, 1e-6)).not.toThrow();
  });

  /**
   * Test G — Real-world flow regression-pin: all four sibling classes
   * exercised in interleaved order with mixed arities. Sanity-checks that
   * even the most complex registration scenario in production OCCT does
   * not corrupt dispatch tables.
   */
  it('G. Mixed sibling flow — ThruSections + SplitShape + MakeChamfer + MakeFillet interleaved', () => {
    const oc = getOC();

    // ThruSections Build() (arity-0)
    using p0 = new oc.gp_Pnt(0, -5, -5);
    using p1 = new oc.gp_Pnt(0,  5, -5);
    using p2 = new oc.gp_Pnt(0,  5,  5);
    using p3 = new oc.gp_Pnt(0, -5,  5);
    using polyA = new oc.BRepBuilderAPI_MakePolygon(p0, p1, p2, p3, true);
    using wireA = polyA.Wire();
    using p4 = new oc.gp_Pnt(10, -7, -7);
    using p5 = new oc.gp_Pnt(10,  7, -7);
    using p6 = new oc.gp_Pnt(10,  7,  7);
    using p7 = new oc.gp_Pnt(10, -7,  7);
    using polyB = new oc.BRepBuilderAPI_MakePolygon(p4, p5, p6, p7, true);
    using wireB = polyB.Wire();
    using loft = new oc.BRepOffsetAPI_ThruSections(true, false, 1e-6);
    loft.AddWire(wireA);
    loft.AddWire(wireB);
    expect(() => loft.Build()).not.toThrow();

    // SplitShape Build() (arity-0) on an unrelated shape
    using box1 = new oc.BRepPrimAPI_MakeBox(8, 8, 8);
    using box1Shape = box1.Shape();
    using splitter = new oc.BRepFeat_SplitShape(box1Shape);
    expect(() => splitter.Build()).not.toThrow();

    // MakeChamfer Build(progress) (arity-1, inherited dispatch)
    const ctx1 = makeBoxAndFirstEdge();
    try {
      using chamfer = new oc.BRepFilletAPI_MakeChamfer(ctx1.boxShape);
      chamfer.Add(1, ctx1.edge);
      using progress1 = new oc.Message_ProgressRange();
      expect(() => chamfer.Build(progress1)).not.toThrow();
    } finally {
      ctx1.edge.delete();
      ctx1.explorerCurrent.delete();
      ctx1.explorer.delete();
      ctx1.boxShape.delete();
      ctx1.box.delete();
    }

    // MakeFillet Build() (arity-0, inherited dispatch — twin of chamfer)
    const ctx2 = makeBoxAndFirstEdge();
    try {
      using fillet = new oc.BRepFilletAPI_MakeFillet(
        ctx2.boxShape,
        oc.ChFi3d_FilletShape.ChFi3d_Rational,
      );
      fillet.Add(1, ctx2.edge);
      expect(() => fillet.Build()).not.toThrow();
    } finally {
      ctx2.edge.delete();
      ctx2.explorerCurrent.delete();
      ctx2.explorer.delete();
      ctx2.boxShape.delete();
      ctx2.box.delete();
    }
  });
});
