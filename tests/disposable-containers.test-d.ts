/**
 * Type-level tests for `[Symbol.dispose](): void` emission under the
 * minimal-transformation return-shape contract.
 *
 * Positive cases — envelope still owns embind-managed fields:
 * - `Geom2dAPI_InterCurveCurve.Segment` envelope owns elided Handle outputs.
 * - `XCAFDoc_ClippingPlaneTool.GetClippingPlane` envelope owns a Handle field
 *   (`theName`) alongside the renamed `returnValue` and a primitive output.
 *
 * Negative cases — no envelope at all (class outputs are mutated in place and
 * collapse the return to a native value or `void`):
 * - `Geom_Curve.D1/D2/D3` mutate `gp_Pnt`/`gp_Vec` args in place; the dts
 *   return type is now `void` — no envelope, no `Symbol.dispose`.
 * - `Geom_Surface.Bounds`, `GeomAPI_ProjectPointOnSurf.LowerDistanceParameters`,
 *   `BRepTools.UVBounds` keep their primitive-only envelopes (S1) which never
 *   needed `Symbol.dispose`.
 *
 */
import { expectTypeOf, it, describe } from 'vitest';
import type {
  Geom2dAPI_InterCurveCurve,
  Geom_Curve,
  Geom_Surface,
  GeomAPI_ProjectPointOnSurf,
  BRepTools,
  XCAFDoc_ClippingPlaneTool,
} from '../dist/opencascade_single';

describe('Symbol.dispose — positive cases (envelope owns a Handle field)', () => {
  it('Geom2dAPI_InterCurveCurve.Segment envelope is disposable (Handle outputs)', () => {
    type R = ReturnType<Geom2dAPI_InterCurveCurve['Segment']>;
    expectTypeOf<R>().toHaveProperty(Symbol.dispose);
    expectTypeOf<R[typeof Symbol.dispose]>().toEqualTypeOf<() => void>();
  });

  it('XCAFDoc_ClippingPlaneTool.GetClippingPlane envelope is disposable (mixed: Handle + primitive)', () => {
    type Tool = XCAFDoc_ClippingPlaneTool;
    type R = ReturnType<Tool['GetClippingPlane']>;
    expectTypeOf<R>().toHaveProperty(Symbol.dispose);
  });
});

describe('Symbol.dispose — negative cases (no envelope at all)', () => {
  it('Geom_Curve.D1 collapses to void (class refs mutated in place, no envelope)', () => {
    expectTypeOf<ReturnType<Geom_Curve['D1']>>().toEqualTypeOf<void>();
  });

  it('Geom_Curve.D2 collapses to void', () => {
    expectTypeOf<ReturnType<Geom_Curve['D2']>>().toEqualTypeOf<void>();
  });

  it('Geom_Curve.D3 collapses to void', () => {
    expectTypeOf<ReturnType<Geom_Curve['D3']>>().toEqualTypeOf<void>();
  });

  it('Geom_Curve.D0 collapses to void', () => {
    expectTypeOf<ReturnType<Geom_Curve['D0']>>().toEqualTypeOf<void>();
  });
});

describe('Symbol.dispose — negative cases (primitive-only envelopes never disposable)', () => {
  it('Geom_Surface.Bounds is NOT disposable', () => {
    type R = ReturnType<Geom_Surface['Bounds']>;
    expectTypeOf<R>().not.toHaveProperty(Symbol.dispose);
  });

  it('GeomAPI_ProjectPointOnSurf.LowerDistanceParameters is NOT disposable', () => {
    type R = ReturnType<GeomAPI_ProjectPointOnSurf['LowerDistanceParameters']>;
    expectTypeOf<R>().not.toHaveProperty(Symbol.dispose);
  });

  it('BRepTools.UVBounds is NOT disposable', () => {
    type R = ReturnType<(typeof BRepTools)['UVBounds']>;
    expectTypeOf<R>().not.toHaveProperty(Symbol.dispose);
  });
});
