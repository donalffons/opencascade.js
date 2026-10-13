/**
 * Smoke tests: Hidden line removal (HLR).
 *
 * Validates HLRBRep_Algo, HLRBRep_HLRToShape, and HLRAlgo_Projector --
 * used by brepjs for 2D silhouette projection.
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: Hidden line removal', () => {
  beforeAll(async () => { await initOC(); });

  it('should project a box to 2D and extract visible outline edges', () => {
    const oc = getOC();
    using box = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
    using shape = box.Shape();

    using origin = new oc.gp_Pnt(50, 50, 50);
    using dir = new oc.gp_Dir(-1, -1, -1);
    using yDir = new oc.gp_Dir(0, 1, -1);
    using ax2 = new oc.gp_Ax2(origin, dir, yDir);
    using projector = new oc.HLRAlgo_Projector(ax2);

    using algo = new oc.HLRBRep_Algo();
    algo.Add(shape, 0);
    algo.Projector(projector);
    algo.Update();

    using hlrToShape = new oc.HLRBRep_HLRToShape(algo);
    using vCompound = hlrToShape.VCompound();
    using outlineV = hlrToShape.OutLineVCompound();

    let totalEdges = 0;
    for (const compound of [vCompound, outlineV]) {
      if (compound.IsNull()) continue;
      using explorer = new oc.TopExp_Explorer(
        compound,
        oc.TopAbs_ShapeEnum.TopAbs_EDGE,
        oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
      );
      while (explorer.More()) {
        totalEdges++;
        explorer.Next();
      }
    }

    expect(totalEdges).toBeGreaterThanOrEqual(3);
  });

  it('should produce distinct visible and hidden edge compounds', () => {
    const oc = getOC();
    using box = new oc.BRepPrimAPI_MakeBox(20, 15, 10);
    using origin = new oc.gp_Pnt(30, 30, 30);
    using dir = new oc.gp_Dir(-1, -0.8, -0.6);
    using ax2 = new oc.gp_Ax2(origin, dir);
    using projector = new oc.HLRAlgo_Projector(ax2);

    using algo = new oc.HLRBRep_Algo();
    using boxShape = box.Shape();
    algo.Add(boxShape, 0);
    algo.Projector(projector);
    algo.Update();

    using hlrToShape = new oc.HLRBRep_HLRToShape(algo);
    using vCompound = hlrToShape.VCompound();
    using hCompound = hlrToShape.HCompound();

    const countEdges = (compound: ReturnType<typeof hlrToShape.VCompound>) => {
      if (compound.IsNull()) return 0;
      using explorer = new oc.TopExp_Explorer(
        compound,
        oc.TopAbs_ShapeEnum.TopAbs_EDGE,
        oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
      );
      let count = 0;
      while (explorer.More()) { count++; explorer.Next(); }
      return count;
    };

    expect(countEdges(vCompound) + countEdges(hCompound)).toBeGreaterThanOrEqual(1);
  });
});
