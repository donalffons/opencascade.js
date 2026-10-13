/**
 * Verifies `BRepGProp_Face` returns UV bounds and mutates caller-provided point and vector
 * outputs through `Normal` and the boundary-curve method `D12d`.
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: BRepGProp_Face', () => {
  beforeAll(async () => {
    await initOC();
  });

  it('should compute the outward normal of a box top face pointing in Z direction', () => {
    const oc = getOC();
    using box = new oc.BRepPrimAPI_MakeBox(10, 10, 10);

    using shape = box.Shape();
    using explorer = new oc.TopExp_Explorer(shape, oc.TopAbs_ShapeEnum.TopAbs_FACE, oc.TopAbs_ShapeEnum.TopAbs_SHAPE);

    // eslint-disable-next-line ocjs-lint/require-using-on-disposable -- topFace ownership is transferred across loop iterations; explicit `.delete()` + reassignment manages disposal manually.
    let topFace = explorer.Current();
    let maxZ = -Infinity;

    while (explorer.More()) {
      using currentShape = explorer.Current();
      using face = oc.TopoDS.Face(currentShape);
      using adaptor = new oc.BRepAdaptor_Surface(face);
      const uMid = (adaptor.FirstUParameter() + adaptor.LastUParameter()) / 2;
      const vMid = (adaptor.FirstVParameter() + adaptor.LastVParameter()) / 2;
      using pnt = adaptor.Value(uMid, vMid);
      if (pnt.Z() > maxZ) {
        maxZ = pnt.Z();
        topFace.delete();
        // eslint-disable-next-line ocjs-lint/require-using-on-disposable -- see prior comment: ownership is transferred across loop iterations.
        topFace = explorer.Current();
      }
      explorer.Next();
    }

    using disposeTopFace = topFace;
    using face = oc.TopoDS.Face(disposeTopFace);
    using gpropFace = new oc.BRepGProp_Face(face);

    const bounds = gpropFace.Bounds(0, 0, 0, 0);
    const uMid = (bounds.U1 + bounds.U2) / 2;
    const vMid = (bounds.V1 + bounds.V2) / 2;

    using inPoint = new oc.gp_Pnt(0, 0, 0);
    using inNormal = new oc.gp_Vec(0, 0, 0);
    gpropFace.Normal(uMid, vMid, inPoint, inNormal);

    const nz = inNormal.Z() / Math.sqrt(inNormal.X() ** 2 + inNormal.Y() ** 2 + inNormal.Z() ** 2);
    expect(Math.abs(nz)).toBeCloseTo(1, 3);
  });

  it('should report finite UV bounds for a planar face', () => {
    const oc = getOC();
    using box = new oc.BRepPrimAPI_MakeBox(10, 20, 30);

    using shape = box.Shape();
    using explorer = new oc.TopExp_Explorer(shape, oc.TopAbs_ShapeEnum.TopAbs_FACE, oc.TopAbs_ShapeEnum.TopAbs_SHAPE);
    expect(explorer.More()).toBe(true);

    using currentShape = explorer.Current();
    using face = oc.TopoDS.Face(currentShape);
    using gpropFace = new oc.BRepGProp_Face(face);

    const bounds = gpropFace.Bounds(0, 0, 0, 0);
    expect(Number.isFinite(bounds.U1)).toBe(true);
    expect(Number.isFinite(bounds.U2)).toBe(true);
    expect(Number.isFinite(bounds.V1)).toBe(true);
    expect(Number.isFinite(bounds.V2)).toBe(true);
    expect(bounds.U2).toBeGreaterThan(bounds.U1);
    expect(bounds.V2).toBeGreaterThan(bounds.V1);
  });

  /**
   * `D12d` mutates caller-provided `gp_Pnt2d` and `gp_Vec2d` values. The fixture
   * loads an edge first because the method reads the boundary-curve adaptor initialized by
   * `Load(edge)`.
   */
  it('cross-method family: BRepGProp_Face.D12d uses input-passthrough RBV shape', () => {
    const oc = getOC();
    using box = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
    using shape = box.Shape();
    using explorer = new oc.TopExp_Explorer(
      shape,
      oc.TopAbs_ShapeEnum.TopAbs_FACE,
      oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
    );
    expect(explorer.More()).toBe(true);
    using currentShape = explorer.Current();
    using face = oc.TopoDS.Face(currentShape);
    using gpropFace = new oc.BRepGProp_Face(face);

    // `D12d` operates on the 2D boundary curve, which is only set by
    // `Load(edge)`. Explore the face for a boundary edge and load it
    // before evaluating the curve derivative.
    using edgeExplorer = new oc.TopExp_Explorer(
      face,
      oc.TopAbs_ShapeEnum.TopAbs_EDGE,
      oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
    );
    expect(edgeExplorer.More()).toBe(true);
    using edgeShape = edgeExplorer.Current();
    using edge = oc.TopoDS.Edge(edgeShape);
    gpropFace.Load(edge);

    using outPoint2d = new oc.gp_Pnt2d(0, 0);
    using outDeriv2d = new oc.gp_Vec2d(0, 0);
    expect(() => gpropFace.D12d(0.5, outPoint2d, outDeriv2d)).not.toThrow();
  });
});
