/**
 * Regression guard for taucad/opencascade.js#35 (taucad/tau#243).
 *
 * Unpatched, `BRepOffset_MakeOffset::BuildOffsetByArc` walks a TShape-address-hashed
 * map, so on a reused instance the same shell/offset call returns a solid whose
 * sub-shapes come out in an order that depends on prior allocations. A fresh
 * instance always gave the same bytes, which is why this test deliberately
 * reuses ONE instance and churns the heap between evaluations.
 *
 * `src/patches/patch_offset_mapsf_order.py` fixes the iteration order; without
 * it libcascade 3.0.2 produces 4–5 distinct `BRepTools::Write` hashes for the
 * shell below in six rounds.
 */
import { hash } from 'node:crypto';
import { beforeAll, describe, expect, it } from 'vitest';
import { getOC, getOCMulti, initOC, initOCMulti, multiWasmExists, wasmExists } from './helpers.js';

const variants = [
  { name: 'single-threaded', exists: wasmExists, init: initOC, get: getOC },
  {
    name: 'multi-threaded',
    exists: multiWasmExists,
    init: initOCMulti,
    get: getOCMulti,
  },
] as const;

const ROUNDS = 6;

describe.each(variants)('Smoke: offset determinism under heap history ($name)', (variant) => {
  beforeAll(async () => {
    if (variant.exists) await variant.init();
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- the test walks many unrelated bindings
  const oc = (): any => variant.get();

  const brepHash = (shape: unknown): string => {
    const file = '/offset-determinism.brep';
    oc().BRepTools.Write(shape, file, new (oc().Message_ProgressRange)());
    const bytes: Uint8Array = oc().FS.readFile(file);
    oc().FS.unlink(file);
    return hash('sha256', bytes);
  };

  // Unrelated work whose results are kept alive, so later allocations land at
  // different addresses than in the previous round.
  const retained: unknown[] = [];
  const perturb = (round: number): void => {
    const box = new (oc().BRepPrimAPI_MakeBox)(10 + round, 20, 30);
    const cylinder = new (oc().BRepPrimAPI_MakeCylinder)(4, 50);
    const cut = new (oc().BRepAlgoAPI_Cut)(
      box.Shape(),
      cylinder.Shape(),
      new (oc().Message_ProgressRange)(),
    );
    retained.push(box, cylinder, cut, cut.Shape());
  };

  // The replicad vase profile from the original report, revolved about Z:
  // draw().hLine(20).smoothSplineTo(...) x3 .lineTo([0, 100]).close()
  const vase = (): unknown => {
    const point = (x: number, z: number): unknown => new (oc().gp_Pnt)(x, 0, z);
    const bezier = (poles: Array<[number, number]>): unknown => {
      const array = new (oc().NCollection_Array1_gp_Pnt)(1, poles.length);
      poles.forEach(([x, z], index) => array.SetValue(index + 1, point(x, z)));
      return new (oc().BRepBuilderAPI_MakeEdge)(new (oc().Geom_BezierCurve)(array)).Edge();
    };
    const wire = new (oc().BRepBuilderAPI_MakeWire)();
    wire.Add(new (oc().BRepBuilderAPI_MakeEdge)(point(0, 0), point(20, 0)).Edge());
    wire.Add(
      bezier([
        [20, 0],
        [26.73145600891813, 0],
        [30, 18.26854399108187],
        [30, 25],
      ]),
    );
    wire.Add(
      bezier([
        [30, 25],
        [30, 62.91952828029378],
        [22.5, 62.36015723990207],
        [22.5, 75],
      ]),
    );
    wire.Add(
      bezier([
        [22.5, 75],
        [22.5, 94.0513286938208],
        [27, 93.64955710205973],
        [27, 100],
      ]),
    );
    wire.Add(new (oc().BRepBuilderAPI_MakeEdge)(point(27, 100), point(0, 100)).Edge());
    wire.Add(new (oc().BRepBuilderAPI_MakeEdge)(point(0, 100), point(0, 0)).Edge());
    const face = new (oc().BRepBuilderAPI_MakeFace)(wire.Wire(), true).Face();
    const axis = new (oc().gp_Ax1)(new (oc().gp_Pnt)(0, 0, 0), new (oc().gp_Dir)(0, 0, 1));
    return new (oc().BRepPrimAPI_MakeRevol)(face, axis, 2 * Math.PI, false).Shape();
  };

  const topFace = (solid: unknown): unknown => {
    const explorer = new (oc().TopExp_Explorer)(
      solid,
      oc().TopAbs_ShapeEnum.TopAbs_FACE,
      oc().TopAbs_ShapeEnum.TopAbs_SHAPE,
    );
    for (; explorer.More(); explorer.Next()) {
      const face = oc().TopoDS.Face(explorer.Current());
      const props = new (oc().GProp_GProps)();
      oc().BRepGProp.SurfaceProperties(face, props, false, false);
      const centre = props.CentreOfMass();
      if (Math.abs(centre.Z() - 100) < 1e-6 && Math.abs(centre.X()) < 1e-6) return face;
    }
    throw new Error('top face not found');
  };

  const thickSolid = (): unknown => {
    const solid = vase();
    const closingFaces = new (oc().NCollection_List_TopoDS_Shape)();
    closingFaces.Append(topFace(solid));
    const maker = new (oc().BRepOffsetAPI_MakeThickSolid)();
    maker.MakeThickSolidByJoin(
      solid,
      closingFaces,
      -5,
      1e-3,
      oc().BRepOffset_Mode.BRepOffset_Skin,
      false,
      false,
      oc().GeomAbs_JoinType.GeomAbs_Arc,
      false,
      new (oc().Message_ProgressRange)(),
    );
    return maker.Shape();
  };

  const offsetShape = (shape: unknown): unknown => {
    const maker = new (oc().BRepOffsetAPI_MakeOffsetShape)();
    maker.PerformByJoin(
      shape,
      2,
      1e-3,
      oc().BRepOffset_Mode.BRepOffset_Skin,
      false,
      false,
      oc().GeomAbs_JoinType.GeomAbs_Arc,
      false,
      new (oc().Message_ProgressRange)(),
    );
    return maker.Shape();
  };

  // Two cone apexes: CorrectConicalFaces adds one apex sphere per apex to the
  // result, so its map order reaches the face order too.
  const rhombus = (): unknown => {
    const polygon = new (oc().BRepBuilderAPI_MakePolygon)(
      new (oc().gp_Pnt)(0, 0, 0),
      new (oc().gp_Pnt)(10, 0, 15),
      new (oc().gp_Pnt)(0, 0, 30),
      true,
    );
    const face = new (oc().BRepBuilderAPI_MakeFace)(polygon.Wire(), true).Face();
    const axis = new (oc().gp_Ax1)(new (oc().gp_Pnt)(0, 0, 0), new (oc().gp_Dir)(0, 0, 1));
    return new (oc().BRepPrimAPI_MakeRevol)(face, axis, 2 * Math.PI, false).Shape();
  };

  const filletedBox = (): unknown => {
    const box = new (oc().BRepPrimAPI_MakeBox)(40, 30, 20).Shape();
    const fillet = new (oc().BRepFilletAPI_MakeFillet)(
      box,
      oc().ChFi3d_FilletShape.ChFi3d_Rational,
    );
    const explorer = new (oc().TopExp_Explorer)(
      box,
      oc().TopAbs_ShapeEnum.TopAbs_EDGE,
      oc().TopAbs_ShapeEnum.TopAbs_SHAPE,
    );
    for (; explorer.More(); explorer.Next()) {
      const edge = oc().TopoDS.Edge(explorer.Current());
      const first = oc().BRep_Tool.Pnt(oc().TopExp.FirstVertex(edge, false));
      const last = oc().BRep_Tool.Pnt(oc().TopExp.LastVertex(edge, false));
      // The four vertical edges; each appears twice in the explorer, and
      // MakeFillet ignores a repeated edge.
      if (Math.abs(first.Z() - last.Z()) > 19) fillet.Add(4, edge);
    }
    return fillet.Shape();
  };

  it.skipIf(!variant.exists).each([
    ['MakeThickSolid (shell)', thickSolid],
    ['MakeOffsetShape (vase)', () => offsetShape(vase())],
    ['MakeOffsetShape (two cone apexes)', () => offsetShape(rhombus())],
    ['MakeOffsetShape (filleted box)', () => offsetShape(filletedBox())],
  ] as const)('%s is byte-identical on one instance across heap histories', (_name, build) => {
    const hashes = new Set<string>();
    for (let round = 0; round < ROUNDS; round++) {
      hashes.add(brepHash(build()));
      perturb(round);
    }
    expect(hashes.size).toBe(1);
  });
});
