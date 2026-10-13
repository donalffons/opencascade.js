/**
 * Type-level contract tests for OCJS cross-boundary return shapes under the
 * minimal-transformation return-shape contract.
 *
 * - S0: direct value_object return (unaffected by the transformation).
 * - S1: primitive-only envelope (renamed C++-return field → `returnValue`).
 * - S2: val::object envelope with `[Symbol.dispose]` (Handle / mixed cases).
 * - S3 (new): class-only methods collapse to a plain native (or `void`)
 *   return — class refs are mutated in place, never mirrored.
 *
 */
import { expectTypeOf, it, describe } from 'vitest';
import type {
  BRepGProp,
  BRepGraph_ParentExplorer,
  BRepTools,
  GProp_GProps,
  Geom2dAPI_InterCurveCurve,
  Geom2d_Curve,
  GeomAPI_ProjectPointOnSurf,
  Geom_Curve,
  Geom_Surface,
  Quantity_Color,
  TDF_Label,
  TopoDS_Face,
  TopoDS_Shape,
  XCAFDoc_ClippingPlaneTool,
  XCAFDoc_ColorTool,
} from '../dist/opencascade_single';

describe('Shape S0 — direct value_object return (BRepGraph_ParentExplorer.GetConfig)', () => {
  it('returns the OCCT struct directly with named fields', () => {
    type ConfigReturn = ReturnType<BRepGraph_ParentExplorer['GetConfig']>;

    expectTypeOf<ConfigReturn>().toHaveProperty('Mode');
    expectTypeOf<ConfigReturn>().toHaveProperty('EmitAvoidKind');
    expectTypeOf<ConfigReturn['EmitAvoidKind']>().toEqualTypeOf<boolean>();
  });

  it('does not wrap in an RBV envelope (no result / returnValue field, no Symbol.dispose)', () => {
    type ConfigReturn = ReturnType<BRepGraph_ParentExplorer['GetConfig']>;

    expectTypeOf<ConfigReturn>().not.toHaveProperty('result');
    expectTypeOf<ConfigReturn>().not.toHaveProperty('returnValue');
    expectTypeOf<ConfigReturn>().not.toHaveProperty(Symbol.dispose);
  });
});

describe('Shape S1 — value_object envelope (primitive T& outputs)', () => {
  it('should return object with U1, U2, V1, V2 from Geom_Surface.Bounds', () => {
    type BoundsReturn = ReturnType<Geom_Surface['Bounds']>;

    expectTypeOf<BoundsReturn>().toHaveProperty('U1');
    expectTypeOf<BoundsReturn>().toHaveProperty('U2');
    expectTypeOf<BoundsReturn>().toHaveProperty('V1');
    expectTypeOf<BoundsReturn>().toHaveProperty('V2');
  });

  it('should require all four output slots for Bounds (virtual — no optional shortcut)', () => {
    // Geom_Surface::Bounds is `virtual … = 0`, overridden `final` on every
    // concrete surface. The bindgen emits an embind binding on each declaring
    // class, so a derived instance carries two arity-4 registrations and a
    // short call throws at runtime (`invalid signature (undefined,…)`). The
    // `.d.ts` therefore keeps every slot REQUIRED — see the virtuality gate in
    // `_outputArityIsUnambiguous`.
    expectTypeOf<Geom_Surface['Bounds']>().toBeCallableWith(0, 0, 0, 0);
    expectTypeOf<Geom_Surface['Bounds']>().parameters.toEqualTypeOf<
      [U1: number, U2: number, V1: number, V2: number]
    >();
  });

  it('should not carry Symbol.dispose on Bounds return (primitives only, void native return)', () => {
    type BoundsReturn = ReturnType<Geom_Surface['Bounds']>;

    expectTypeOf<BoundsReturn>().not.toHaveProperty(Symbol.dispose);
    // Bounds has a void C++ return, so no envelope field is named.
    expectTypeOf<BoundsReturn>().not.toHaveProperty('returnValue');
  });

  it('should return object with U, V from GeomAPI_ProjectPointOnSurf.LowerDistanceParameters', () => {
    type LdpReturn = ReturnType<GeomAPI_ProjectPointOnSurf['LowerDistanceParameters']>;

    expectTypeOf<LdpReturn>().toHaveProperty('U');
    expectTypeOf<LdpReturn>().toHaveProperty('V');
  });

  it('should make both LowerDistanceParameters output slots optional (non-virtual, unique arity)', () => {
    // GeomAPI_ProjectPointOnSurf::LowerDistanceParameters is non-virtual with a
    // unique kept arity, so the libembind arity-pad dispatcher resolves the
    // short call: `ldp()` returns { U, V } at runtime. The `.d.ts` mirrors that
    // by typing both trailing primitive outputs optional.
    type Params = Parameters<GeomAPI_ProjectPointOnSurf['LowerDistanceParameters']>;
    expectTypeOf<Params>().toEqualTypeOf<[U?: number, V?: number]>();
    expectTypeOf<GeomAPI_ProjectPointOnSurf['LowerDistanceParameters']>().toBeCallableWith();
    expectTypeOf<GeomAPI_ProjectPointOnSurf['LowerDistanceParameters']>().toBeCallableWith(0, 0);
  });

  it('should return object with UMin, UMax, VMin, VMax from BRepTools.UVBounds', () => {
    type UvBoundsReturn = ReturnType<(typeof BRepTools)['UVBounds']>;

    expectTypeOf<UvBoundsReturn>().toHaveProperty('UMin');
    expectTypeOf<UvBoundsReturn>().toHaveProperty('UMax');
    expectTypeOf<UvBoundsReturn>().toHaveProperty('VMin');
    expectTypeOf<UvBoundsReturn>().toHaveProperty('VMax');
  });

  it('should make the trailing primitive outputs optional on the Face-only UVBounds overload', () => {
    // BRepTools::UVBounds is a static method whose Face-only overload has a
    // unique kept arity (5), so `UVBounds(face)` dispatches and returns the
    // envelope at runtime. The wire signature keeps F required and types the
    // four trailing outputs optional. (replicad calls `UVBounds(this.wrapped)`.)
    type FaceOnly = Extract<
      (typeof BRepTools)['UVBounds'],
      (F: TopoDS_Face, UMin?: number, UMax?: number, VMin?: number, VMax?: number) => unknown
    >;
    expectTypeOf<FaceOnly>().not.toBeNever();
    expectTypeOf<FaceOnly>().toBeCallableWith({} as TopoDS_Face);
  });

  it('should not return void from UVBounds', () => {
    expectTypeOf<ReturnType<(typeof BRepTools)['UVBounds']>>().not.toBeVoid();
  });
});

describe('Shape S2 — val::object envelope (Handle<T> outputs, Approach G elision)', () => {
  it('should return object with Curve1 and Curve2 from Segment', () => {
    type SegmentReturn = ReturnType<Geom2dAPI_InterCurveCurve['Segment']>;

    expectTypeOf<SegmentReturn>().toHaveProperty('Curve1');
    expectTypeOf<SegmentReturn>().toHaveProperty('Curve2');

    expectTypeOf<SegmentReturn['Curve1']>().toMatchTypeOf<Geom2d_Curve>();
    expectTypeOf<SegmentReturn['Curve2']>().toMatchTypeOf<Geom2d_Curve>();
  });

  it('should expose only Index on Segment (Handle outputs elided from JS arity)', () => {
    expectTypeOf<Geom2dAPI_InterCurveCurve['Segment']>().toBeCallableWith(1);
    expectTypeOf<Geom2dAPI_InterCurveCurve['Segment']>().parameters.toEqualTypeOf<[Index: number]>();
  });

  it('should attach Symbol.dispose to the Segment return envelope', () => {
    type SegmentReturn = ReturnType<Geom2dAPI_InterCurveCurve['Segment']>;

    expectTypeOf<SegmentReturn>().toHaveProperty(Symbol.dispose);
  });

  it('should not return void from Segment', () => {
    expectTypeOf<ReturnType<Geom2dAPI_InterCurveCurve['Segment']>>().not.toBeVoid();
  });

  it('should rename the C++-return field to returnValue (no legacy `result`)', () => {
    // Pick a mixed-output method where the envelope must carry both the
    // native return and a Handle field — GetClippingPlane is the canonical
    // example from the research doc.
    type Tool = XCAFDoc_ClippingPlaneTool;
    type R = ReturnType<Tool['GetClippingPlane']>;

    expectTypeOf<R>().toHaveProperty('returnValue');
    expectTypeOf<R>().not.toHaveProperty('result');
    expectTypeOf<R['returnValue']>().toEqualTypeOf<boolean>();
    expectTypeOf<R>().toHaveProperty('theName');
    expectTypeOf<R>().toHaveProperty('theCapping');
    expectTypeOf<R['theCapping']>().toEqualTypeOf<boolean>();
    expectTypeOf<R>().toHaveProperty(Symbol.dispose);
  });
});

describe('Shape S3 — class-only methods collapse to native return', () => {
  it('Geom_Curve.D1 returns void (class refs mutated in place)', () => {
    expectTypeOf<ReturnType<Geom_Curve['D1']>>().toEqualTypeOf<void>();
  });

  it('Geom_Curve.D0 returns void', () => {
    expectTypeOf<ReturnType<Geom_Curve['D0']>>().toEqualTypeOf<void>();
  });

  it('BRepGProp.VolumeProperties exposes a non-void native return when present', () => {
    // The 6-arg overload has `Eps: number` and returns a `number` (mass).
    type Overloads = (typeof BRepGProp)['VolumeProperties'];
    type WithEps = Extract<
      Overloads,
      (
        S: TopoDS_Shape,
        VProps: GProp_GProps,
        Eps: number,
        OnlyClosed: boolean,
        SkipShared: boolean,
      ) => number
    >;
    expectTypeOf<WithEps>().not.toBeNever();
  });

  it('XCAFDoc_ColorTool.GetColor returns boolean (no envelope)', () => {
    type Overloads = (typeof XCAFDoc_ColorTool)['GetColor'];
    type Two = Extract<Overloads, (lab: TDF_Label, col: Quantity_Color) => boolean>;
    expectTypeOf<Two>().not.toBeNever();
  });

  it('class-only returns are not envelopes (no returnValue, no Symbol.dispose)', () => {
    type D1Return = ReturnType<Geom_Curve['D1']>;
    expectTypeOf<D1Return>().not.toHaveProperty('result');
    expectTypeOf<D1Return>().not.toHaveProperty('returnValue');
    expectTypeOf<D1Return>().not.toHaveProperty(Symbol.dispose);
  });
});
