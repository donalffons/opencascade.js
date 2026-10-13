import { expectTypeOf, it } from 'vitest';
import initRuntime from '../dist/opencascade_single';
import { BRepPrimAPI_MakeBox as BRepPrimAPI_MakeBoxValue } from '../dist/opencascade_single';
import type init from '../dist/opencascade_single';
import type {
  gp_Pnt,
  gp_Vec,
  TopoDS_Shape,
  BRepPrimAPI_MakeBox,
  TopAbs_ShapeEnum,
  InitOpenCascadeOptions,
  OpenCascadeInstance,
} from '../dist/opencascade_single';

void initRuntime;
// @ts-expect-error OCCT values are properties of OpenCascadeInstance, not named ESM exports.
void BRepPrimAPI_MakeBoxValue;

it('should return correct types for gp_Pnt methods', () => {
  expectTypeOf<gp_Pnt['X']>().returns.toBeNumber();
  expectTypeOf<gp_Pnt['Y']>().returns.toBeNumber();
  expectTypeOf<gp_Pnt['Z']>().returns.toBeNumber();
  expectTypeOf<gp_Pnt['Distance']>().returns.toBeNumber();
  expectTypeOf<gp_Pnt['IsEqual']>().returns.toBeBoolean();
});

it('should return correct types for gp_Vec methods', () => {
  expectTypeOf<gp_Vec['X']>().returns.toBeNumber();
  expectTypeOf<gp_Vec['Magnitude']>().returns.toBeNumber();
});

it('should produce shape with expected properties for BRepPrimAPI_MakeBox', () => {
  expectTypeOf<BRepPrimAPI_MakeBox['Shape']>().returns.toHaveProperty('IsNull');
  expectTypeOf<BRepPrimAPI_MakeBox['Shape']>().returns.toHaveProperty('delete');
});

it('should have delete method on all bound classes', () => {
  expectTypeOf<gp_Pnt>().toHaveProperty('delete');
  expectTypeOf<gp_Vec>().toHaveProperty('delete');
  expectTypeOf<TopoDS_Shape>().toHaveProperty('delete');
  expectTypeOf<BRepPrimAPI_MakeBox>().toHaveProperty('delete');
});

it('should have members with string literal types for enum lookup objects', () => {
  expectTypeOf<TopAbs_ShapeEnum>().toBeString();
});

it('should resolve NCollection_Vec types to fixed-length tuples not number[]', () => {
  type Vec2 = [number, number];
  type Vec3 = [number, number, number];
  type Vec4 = [number, number, number, number];

  expectTypeOf<Vec2>().not.toEqualTypeOf<number[]>();
  expectTypeOf<Vec3>().not.toEqualTypeOf<number[]>();
  expectTypeOf<Vec4>().not.toEqualTypeOf<number[]>();

  expectTypeOf<[number, number]>().toEqualTypeOf<Vec2>();
  expectTypeOf<[number, number, number]>().toEqualTypeOf<Vec3>();
  expectTypeOf<[number, number, number, number]>().toEqualTypeOf<Vec4>();
});

it('should support Symbol.dispose for using declarations', () => {
  expectTypeOf<gp_Pnt>().toHaveProperty(Symbol.dispose);
  expectTypeOf<gp_Vec>().toHaveProperty(Symbol.dispose);
  expectTypeOf<TopoDS_Shape>().toHaveProperty(Symbol.dispose);
  expectTypeOf<BRepPrimAPI_MakeBox>().toHaveProperty(Symbol.dispose);
});

it('should return Promise<OpenCascadeInstance> from init', () => {
  expectTypeOf<typeof init>().returns.resolves.toEqualTypeOf<OpenCascadeInstance>();
});

it('should expose only the supported optional initialization inputs', () => {
  expectTypeOf<keyof InitOpenCascadeOptions>().toEqualTypeOf<
    'locateFile' | 'wasmBinary' | 'wasmMemory' | 'print' | 'printErr'
  >();
  expectTypeOf<InitOpenCascadeOptions['locateFile']>().toEqualTypeOf<
    ((path: string, scriptDirectory: string) => string) | undefined
  >();
  expectTypeOf<InitOpenCascadeOptions['wasmBinary']>().toEqualTypeOf<
    ArrayBuffer | Uint8Array | undefined
  >();
});
