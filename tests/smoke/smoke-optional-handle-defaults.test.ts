/**
 * Verifies value-class trailing defaults on inherited `Build` methods. Omitted and
 * `undefined` arguments use the C++ default, explicit values pass through, and `null`
 * raises the strict-null binding error.
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

const RULE_5_NULL_ERROR_FRAGMENT = /null is not a valid value/;

describe.skipIf(!wasmExists)('Smoke: handle-typed trailing-default routing', () => {
  beforeAll(async () => {
    await initOC();
  });

  /** Build a 10x10x10 box and a 5x5x5 box, return their owned Shapes. */
  const makeFuseFixture = () => {
    const oc = getOC();
    using box1 = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
    using box2 = new oc.BRepPrimAPI_MakeBox(5, 5, 5);
    const a = box1.Shape();
    const b = box2.Shape();
    return { a, b };
  };

  describe('BRepAlgoAPI_Fuse.Build(Message_ProgressRange = Message_ProgressRange())', () => {
    it('(a) omitted arg → nullopt → default Handle: Build() with no args succeeds', () => {
      const oc = getOC();
      const { a, b } = makeFuseFixture();
      using ashape = a;
      using bshape = b;
      using fuse = new oc.BRepAlgoAPI_Fuse(ashape, bshape);
      expect(() => fuse.Build.call(fuse)).not.toThrow();
      expect(fuse.IsDone()).toBe(true);
    });

    it('(b) explicit Message_ProgressRange → caller value passed through', () => {
      const oc = getOC();
      const { a, b } = makeFuseFixture();
      using ashape = a;
      using bshape = b;
      using fuse = new oc.BRepAlgoAPI_Fuse(ashape, bshape);
      using progress = new oc.Message_ProgressRange();
      expect(() => fuse.Build(progress)).not.toThrow();
      expect(fuse.IsDone()).toBe(true);
    });

    it('(c) explicit null → THROWS rule-5 BindingError (strict-null per policy rule 5)', () => {
      const oc = getOC();
      const { a, b } = makeFuseFixture();
      using ashape = a;
      using bshape = b;
      using fuse = new oc.BRepAlgoAPI_Fuse(ashape, bshape);
      // @ts-expect-error - null is not a valid Message_ProgressRange
      expect(() => fuse.Build.call(fuse, null)).toThrow(RULE_5_NULL_ERROR_FRAGMENT);
    });

    it('(d) explicit undefined → default Handle (undefined collapses to default expression)', () => {
      const oc = getOC();
      const { a, b } = makeFuseFixture();
      using ashape = a;
      using bshape = b;
      using fuse = new oc.BRepAlgoAPI_Fuse(ashape, bshape);
      expect(() => fuse.Build.call(fuse, undefined)).not.toThrow();
      expect(fuse.IsDone()).toBe(true);
    });
  });

  describe('BRepFilletAPI_MakeChamfer.Build(Message_ProgressRange = Message_ProgressRange()) — inherited default', () => {
    const makeChamferFixture = () => {
      const oc = getOC();
      const box = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
      const boxShape = box.Shape();
      const explorer = new oc.TopExp_Explorer(
        boxShape,
        oc.TopAbs_ShapeEnum.TopAbs_EDGE,
        oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
      );
      const explorerCurrent = explorer.Current();
      const edge = oc.TopoDS.Edge(explorerCurrent);
      const chamfer = new oc.BRepFilletAPI_MakeChamfer(boxShape);
      chamfer.Add(1, edge);
      return { box, boxShape, explorer, explorerCurrent, edge, chamfer };
    };

    it('(a) omitted arg → nullopt → default Handle: chamfer.Build()', () => {
      const ctx = makeChamferFixture();
      try {
        expect(() => ctx.chamfer.Build()).not.toThrow();
      } finally {
        ctx.chamfer.delete();
        ctx.edge.delete();
        ctx.explorerCurrent.delete();
        ctx.explorer.delete();
        ctx.boxShape.delete();
        ctx.box.delete();
      }
    });

    it('(c) explicit null → THROWS rule-5 BindingError (strict-null per policy rule 5)', () => {
      const ctx = makeChamferFixture();
      try {
        // @ts-expect-error - null is not a valid Message_ProgressRange (rule-5 strict null)
        expect(() => ctx.chamfer.Build.call(ctx.chamfer, null)).toThrow(RULE_5_NULL_ERROR_FRAGMENT);
      } finally {
        ctx.chamfer.delete();
        ctx.edge.delete();
        ctx.explorerCurrent.delete();
        ctx.explorer.delete();
        ctx.boxShape.delete();
        ctx.box.delete();
      }
    });

    it('(d) explicit undefined → default Handle (undefined collapses to default expression)', () => {
      const ctx = makeChamferFixture();
      try {
        expect(() => ctx.chamfer.Build.call(ctx.chamfer, undefined)).not.toThrow();
      } finally {
        ctx.chamfer.delete();
        ctx.edge.delete();
        ctx.explorerCurrent.delete();
        ctx.explorer.delete();
        ctx.boxShape.delete();
        ctx.box.delete();
      }
    });
  });
});
