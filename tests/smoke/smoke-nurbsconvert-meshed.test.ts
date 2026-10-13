/**
 * Regression guard for taucad/opencascade.js#39 (item 3).
 *
 * Unpatched, converting an already-meshed shape whose faces are already B-spline
 * (the result of a first `BRepBuilderAPI_NurbsConvert`) rebuilds those faces as
 * bare triangulations with no surface. That attaches pcurves on the surface-less
 * faces to the INPUT edges, and the next face's `IsConvert()` dereferences the
 * null surface, which traps in WASM.
 *
 * `src/patches/patch_nurbsconvert_mesh_only_face.py` makes unconverted faces
 * keep their surface.
 */
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

describe.each(variants)('Smoke: NurbsConvert of a meshed B-spline shape ($name)', (variant) => {
  beforeAll(async () => {
    if (variant.exists) await variant.init();
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- the test walks many unrelated bindings
  const oc = (): any => variant.get();

  const subShapes = (shape: unknown, type: 'TopAbs_FACE' | 'TopAbs_EDGE'): unknown[] => {
    const found: unknown[] = [];
    const explorer = new (oc().TopExp_Explorer)(
      shape,
      oc().TopAbs_ShapeEnum[type],
      oc().TopAbs_ShapeEnum.TopAbs_SHAPE,
    );
    for (; explorer.More(); explorer.Next()) found.push(explorer.Current());
    return found;
  };

  // Number of curve representations (3D curve, pcurves, polygons) per edge.
  const edgeRepresentationCounts = (shape: unknown): number[] =>
    subShapes(shape, 'TopAbs_EDGE').map((edge) => {
      const representations = new (oc().NCollection_List_handle_BRep_CurveRepresentation)(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any -- TShape is a BRep_TEdge here
        (edge as any).TShape().Curves(),
      );
      return representations.Extent() as number;
    });

  const primitives = [
    [
      'box',
      () =>
        new (oc().BRepPrimAPI_MakeBox)(
          new (oc().gp_Pnt)(0, 0, 0),
          new (oc().gp_Pnt)(1, 2, 3),
        ).Shape(),
    ],
    ['cylinder', () => new (oc().BRepPrimAPI_MakeCylinder)(2, 5).Shape()],
    ['sphere', () => new (oc().BRepPrimAPI_MakeSphere)(3).Shape()],
  ] as const;

  it.skipIf(!variant.exists).each(primitives)(
    'converts a meshed, already-NURBS %s without trapping or mutating the input',
    (_name, build) => {
      const nurbs = new (oc().BRepBuilderAPI_NurbsConvert)(build(), false).Shape();
      new (oc().BRepMesh_IncrementalMesh)(nurbs, 0.1, false, 0.5, false);
      const before = edgeRepresentationCounts(nurbs);

      const converted = new (oc().BRepBuilderAPI_NurbsConvert)(nurbs, false).Shape();

      expect(edgeRepresentationCounts(nurbs)).toEqual(before);
      expect(new (oc().BRepCheck_Analyzer)(converted, true, false).IsValid()).toBe(true);
      const faces = subShapes(converted, 'TopAbs_FACE');
      expect(faces.length).toBe(subShapes(nurbs, 'TopAbs_FACE').length);
      for (const face of faces) {
        // Handle-returning accessors are elided: a missing surface comes back as null.
        expect(oc().BRep_Tool.Surface(oc().TopoDS.Face(face))).not.toBeNull();
      }
    },
  );
});
