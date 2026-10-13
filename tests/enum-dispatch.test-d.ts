import { expectTypeOf, it } from 'vitest';
import type { IntSurf_TypeTrans, IntSurf_Situation, OpenCascadeInstance } from '../dist/opencascade_single';

/**
 * Enum-disambiguation subclasses that existed when enums were numeric.
 * With string enums + enum-aware dispatch these should no longer be exported.
 */
type IntPatchEnumSplitKeys =
  | 'IntPatch_ALine_1'
  | 'IntPatch_ALine_2'
  | 'IntPatch_WLine_1'
  | 'IntPatch_WLine_2'
  | 'IntPatch_GLine_1'
  | 'IntPatch_GLine_2'
  | 'IntPatch_GLine_4'
  | 'IntPatch_GLine_5'
  | 'IntPatch_GLine_7'
  | 'IntPatch_GLine_8'
  | 'IntPatch_GLine_10'
  | 'IntPatch_GLine_11'
  | 'IntPatch_GLine_13'
  | 'IntPatch_GLine_14';

type RemainingSplitKeys = Extract<IntPatchEnumSplitKeys, keyof OpenCascadeInstance>;

it('should not export IntPatch enum-disambiguation subclasses', () => {
  expectTypeOf<RemainingSplitKeys>().toEqualTypeOf<never>();
});

it('should NOT allow cross-assignment between IntSurf_TypeTrans and IntSurf_Situation', () => {
  expectTypeOf<IntSurf_TypeTrans>().not.toExtend<IntSurf_Situation>();
  expectTypeOf<IntSurf_Situation>().not.toExtend<IntSurf_TypeTrans>();
});
