/**
 * Verifies a fuzzy fuse joins two boxes separated by 0.01 when the fuzzy tolerance is 0.1.
 * A single resulting solid proves the tolerance reached the builder algorithm.
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

function countSolids(oc: ReturnType<typeof getOC>, shape: InstanceType<ReturnType<typeof getOC>['TopoDS_Shape']>): number {
  let count = 0;
  for (
    using iterator = new oc.TopoDS_Iterator(shape, true, true);
    iterator.More();
    iterator.Next()
  ) {
    count++;
  }
  return count;
}

describe.skipIf(!wasmExists)('Smoke: fuzzy boolean fuse (SetFuzzyValue)', () => {
  beforeAll(async () => { await initOC(); });

  it('fuses two near-touching boxes into a single solid when the fuzzy value spans the gap', () => {
    const oc = getOC();

    using origin1 = new oc.gp_Pnt(0, 0, 0);
    using box1 = new oc.BRepPrimAPI_MakeBox(origin1, 1, 1, 1);
    using origin2 = new oc.gp_Pnt(1.01, 0, 0);
    using box2 = new oc.BRepPrimAPI_MakeBox(origin2, 1, 1, 1);

    using combined = new oc.BRepAlgoAPI_Fuse();

    using arguments_ = new oc.NCollection_List_TopoDS_Shape();
    using box1Shape = box1.Shape();
    using appendedArgument = arguments_.Append(box1Shape);
    void appendedArgument;
    combined.SetArguments(arguments_);

    using tools = new oc.NCollection_List_TopoDS_Shape();
    using box2Shape = box2.Shape();
    using appendedTool = tools.Append(box2Shape);
    void appendedTool;
    combined.SetTools(tools);

    combined.SetFuzzyValue(0.1);
    using progress = new oc.Message_ProgressRange();
    combined.Build(progress);

    expect(combined.IsDone()).toBe(true);
    using fused = combined.Shape();
    expect(fused.IsNull()).toBe(false);
    expect(countSolids(oc, fused)).toBe(1);
  });

  it('leaves two disjoint solids when the fuzzy value is smaller than the gap', () => {
    const oc = getOC();

    using origin1 = new oc.gp_Pnt(0, 0, 0);
    using box1 = new oc.BRepPrimAPI_MakeBox(origin1, 1, 1, 1);
    using origin2 = new oc.gp_Pnt(1.01, 0, 0);
    using box2 = new oc.BRepPrimAPI_MakeBox(origin2, 1, 1, 1);

    using box1Shape = box1.Shape();
    using box2Shape = box2.Shape();
    using fuse = new oc.BRepAlgoAPI_Fuse(box1Shape, box2Shape);
    using progress = new oc.Message_ProgressRange();
    fuse.Build(progress);

    expect(fuse.IsDone()).toBe(true);
    using fused = fuse.Shape();
    // No fuzzy welding: the 0.01 gap keeps the two boxes as separate solids.
    expect(countSolids(oc, fused)).toBe(2);
  });
});
