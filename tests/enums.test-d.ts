import { expectTypeOf, it } from 'vitest';
import type {
  IntSurf_TypeTrans,
  IntSurf_Situation,
  TopAbs_ShapeEnum,
} from '../dist/opencascade_single';

it('should resolve IntSurf_TypeTrans to a string literal union', () => {
  expectTypeOf<IntSurf_TypeTrans>().toBeString();
  expectTypeOf<'IntSurf_In'>().toExtend<IntSurf_TypeTrans>();
  expectTypeOf<'IntSurf_Out'>().toExtend<IntSurf_TypeTrans>();
  expectTypeOf<'IntSurf_Touch'>().toExtend<IntSurf_TypeTrans>();
  expectTypeOf<'IntSurf_Undecided'>().toExtend<IntSurf_TypeTrans>();
});

it('should resolve IntSurf_Situation to a string literal union', () => {
  expectTypeOf<IntSurf_Situation>().toBeString();
  expectTypeOf<'IntSurf_Inside'>().toExtend<IntSurf_Situation>();
  expectTypeOf<'IntSurf_Outside'>().toExtend<IntSurf_Situation>();
  expectTypeOf<'IntSurf_Unknown'>().toExtend<IntSurf_Situation>();
});

it('should resolve TopAbs_ShapeEnum to a string type', () => {
  expectTypeOf<TopAbs_ShapeEnum>().toBeString();
});

it('should NOT allow cross-assignment between different enum types', () => {
  expectTypeOf<IntSurf_TypeTrans>().not.toExtend<IntSurf_Situation>();
  expectTypeOf<IntSurf_Situation>().not.toExtend<IntSurf_TypeTrans>();
});
