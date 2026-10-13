import { beforeAll, describe, expect, it } from 'vitest';
import type { OpenCascadeInstance } from '../../dist/opencascade_single.js';
import {
  getOC,
  getOCMulti,
  initOC,
  initOCMulti,
  multiWasmExists,
  wasmExists,
} from './helpers.js';

type MathOC = Pick<
  OpenCascadeInstance,
  | 'Message_ProgressRange'
  | 'gp_XY'
  | 'gp_XYZ'
  | 'math_Gauss'
  | 'math_Matrix'
  | 'math_VectorBase_double'
  | 'math_VectorBase_int'
>;
type DoubleVector = InstanceType<MathOC['math_VectorBase_double']>;
type IntVector = InstanceType<MathOC['math_VectorBase_int']>;
type Matrix = InstanceType<MathOC['math_Matrix']>;

const variants = [
  { name: 'single-threaded', exists: wasmExists, init: initOC, get: getOC },
  { name: 'multi-threaded', exists: multiWasmExists, init: initOCMulti, get: getOCMulti },
] as const;

const double2 = (oc: MathOC, x: number, y: number): DoubleVector => {
  using xy = new oc.gp_XY(x, y);
  return new oc.math_VectorBase_double(xy);
};

const double3 = (oc: MathOC, x: number, y: number, z: number): DoubleVector => {
  using xyz = new oc.gp_XYZ(x, y, z);
  return new oc.math_VectorBase_double(xyz);
};

const int3 = (oc: MathOC, x: number, y: number, z: number): IntVector => {
  using xyz = new oc.gp_XYZ(x, y, z);
  return new oc.math_VectorBase_int(xyz);
};

const vectorValues = (vector: DoubleVector | IntVector): number[] => {
  const values = [];
  for (let index = vector.Lower(); index <= vector.Upper(); index += 1) {
    values.push(vector.Value(index));
  }
  return values;
};

const matrix2 = (
  oc: MathOC,
  values: readonly [number, number, number, number],
): Matrix => {
  const matrix = new oc.math_Matrix(1, 2, 1, 2, 0);
  using row1 = double2(oc, values[0], values[1]);
  using row2 = double2(oc, values[2], values[3]);
  matrix.SetRow(1, row1);
  matrix.SetRow(2, row2);
  return matrix;
};

const matrixValues = (matrix: Matrix): number[][] => {
  const rows = [];
  for (let row = matrix.LowerRow(); row <= matrix.UpperRow(); row += 1) {
    const values = [];
    for (let col = matrix.LowerCol(); col <= matrix.UpperCol(); col += 1) {
      values.push(matrix.Value(row, col));
    }
    rows.push(values);
  }
  return rows;
};

const expectVectorClose = (
  vector: DoubleVector | IntVector,
  expected: readonly number[],
  precision = 12,
): void => {
  expect(vectorValues(vector)).toHaveLength(expected.length);
  vectorValues(vector).forEach((value, index) => {
    expect(value).toBeCloseTo(expected[index], precision);
  });
};

const expectMatrixClose = (
  matrix: Matrix,
  expected: readonly (readonly number[])[],
  precision = 12,
): void => {
  const actual = matrixValues(matrix);
  expect(actual.map((row) => row.length)).toEqual(expected.map((row) => row.length));
  actual.forEach((row, rowIndex) => {
    row.forEach((value, colIndex) => {
      expect(value).toBeCloseTo(expected[rowIndex][colIndex], precision);
    });
  });
};

const expectWasmException = (operation: () => void): void => {
  expect(operation).toThrow(WebAssembly.Exception);
};

describe.each(variants)('Smoke: complete math bindings ($name)', (variant) => {
  beforeAll(async () => {
    if (variant.exists) await variant.init();
  });

  describe.skipIf(!variant.exists)('math_VectorBase<double>', () => {
    it('should construct, store, slice, expose Array1, and resize values', () => {
      const oc: MathOC = variant.get();
      using fromXY = double2(oc, 3, 4);
      using fromXYZ = double3(oc, 3, 4, 12);
      using copy = new oc.math_VectorBase_double(fromXYZ);
      using bounds = new oc.math_VectorBase_double(-1, 1);
      using initialized = new oc.math_VectorBase_double(2, 4, 7);
      expectVectorClose(fromXY, [3, 4]);
      expectVectorClose(fromXYZ, [3, 4, 12]);
      expect([bounds.Lower(), bounds.Upper(), bounds.Length()]).toEqual([-1, 1, 3]);
      expectVectorClose(initialized, [7, 7, 7]);
      copy.Multiply(2);
      expectVectorClose(copy, [6, 8, 24]);
      expectVectorClose(fromXYZ, [3, 4, 12]);

      using six = new oc.math_VectorBase_double(1, 6, 0);
      using first = double3(oc, 1, 2, 3);
      using second = double3(oc, 4, 5, 6);
      six.Set(1, 3, first);
      six.Set(4, 6, second);
      using sliced = six.Slice(2, 5);
      expectVectorClose(sliced, [2, 3, 4, 5]);
      using array = six.Array1();
      expect([array.Lower(), array.Upper(), array.Value(4)]).toEqual([1, 6, 4]);
      six.Resize(8);
      using grownPrefix = six.Slice(1, 6);
      expectVectorClose(grownPrefix, [1, 2, 3, 4, 5, 6]);
      six.Resize(4);
      expectVectorClose(six, [1, 2, 3, 4]);
      six.Init(9);
      expectVectorClose(six, [9, 9, 9, 9]);
    });

    it('should cover norm, extrema, unary, scalar, and vector arithmetic', () => {
      const oc: MathOC = variant.get();
      using source = double3(oc, 3, 4, 12);
      expect(source.Norm()).toBeCloseTo(13, 12);
      expect(source.Norm2()).toBeCloseTo(169, 12);
      expect(source.Max()).toBe(3);
      expect(source.Min()).toBe(1);

      using normalized = source.Normalized();
      expectVectorClose(normalized, [3 / 13, 4 / 13, 12 / 13]);
      source.Normalize();
      expectVectorClose(source, [3 / 13, 4 / 13, 12 / 13]);
      using inverse = source.Inverse();
      expectVectorClose(inverse, [12 / 13, 4 / 13, 3 / 13]);
      source.Invert();
      expectVectorClose(source, [12 / 13, 4 / 13, 3 / 13]);
      using opposite = source.Opposite();
      expectVectorClose(opposite, [-12 / 13, -4 / 13, -3 / 13]);

      using left = double3(oc, 1, 2, 3);
      using right = double3(oc, 4, 5, 6);
      using result = new oc.math_VectorBase_double(1, 3, 0);
      result.Multiply(2, left);
      expectVectorClose(result, [2, 4, 6]);
      result.Multiply(3);
      expectVectorClose(result, [6, 12, 18]);
      using multiplied = left.Multiplied(2);
      using tMultiplied = left.TMultiplied(3);
      expectVectorClose(multiplied, [2, 4, 6]);
      expectVectorClose(tMultiplied, [3, 6, 9]);
      expect(left.Multiplied(right)).toBe(32);
      result.Divide(6);
      expectVectorClose(result, [1, 2, 3]);
      using divided = result.Divided(2);
      expectVectorClose(divided, [0.5, 1, 1.5]);

      result.Add(right);
      expectVectorClose(result, [5, 7, 9]);
      result.Add(left, right);
      expectVectorClose(result, [5, 7, 9]);
      using added = left.Added(right);
      expectVectorClose(added, [5, 7, 9]);
      result.Subtract(left, right);
      expectVectorClose(result, [-3, -3, -3]);
      result.Subtract(left);
      expectVectorClose(result, [-4, -5, -6]);
      using subtracted = right.Subtracted(left);
      expectVectorClose(subtracted, [3, 3, 3]);
      using initialized = result.Initialized(right);
      expectVectorClose(initialized, [4, 5, 6]);
      right.Multiply(2);
      expectVectorClose(initialized, [4, 5, 6]);
    });

    it('should cover every vector and matrix interoperability overload', () => {
      const oc: MathOC = variant.get();
      using vector = double3(oc, 3, 4, 12);
      using diagonal = new oc.math_Matrix(1, 3, 1, 3, 0);
      diagonal.SetDiag(2);
      using result = new oc.math_VectorBase_double(1, 3, 0);
      result.Multiply(vector, diagonal);
      expectVectorClose(result, [6, 8, 24]);
      result.Multiply(diagonal, vector);
      expectVectorClose(result, [6, 8, 24]);
      using multiplied = vector.Multiplied(diagonal);
      expectVectorClose(multiplied, [6, 8, 24]);
      result.TMultiply(diagonal, vector);
      expectVectorClose(result, [6, 8, 24]);
      result.TMultiply(vector, diagonal);
      expectVectorClose(result, [6, 8, 24]);
    });

    it('should throw the exact WASM exception category for invalid vector operations', () => {
      const oc: MathOC = variant.get();
      using vector = double3(oc, 0, 0, 0);
      using short = double2(oc, 1, 2);
      expectWasmException(() => vector.Value(4));
      expectWasmException(() => vector.Set(1, 3, short));
      expectWasmException(() => vector.Normalize());
      expectWasmException(() => vector.Divide(0));
      expectWasmException(() => vector.Add(short));
    });
  });

  describe.skipIf(!variant.exists)('math_Matrix', () => {
    it('should cover ranges, determinant, inverse, transpose, and assignment', () => {
      const oc: MathOC = variant.get();
      using source = matrix2(oc, [4, 7, 2, 6]);
      expect([source.RowNumber(), source.ColNumber()]).toEqual([2, 2]);
      expect([source.LowerRow(), source.UpperRow(), source.LowerCol(), source.UpperCol()]).toEqual([1, 2, 1, 2]);
      expect(source.Determinant()).toBeCloseTo(10, 12);
      using copy = new oc.math_Matrix(source);
      copy.Multiply(2);
      expectMatrixClose(source, [[4, 7], [2, 6]]);
      using inverse = source.Inverse();
      expectMatrixClose(inverse, [[0.6, -0.7], [-0.2, 0.4]]);
      using mutableInverse = new oc.math_Matrix(source);
      mutableInverse.Invert();
      expectMatrixClose(mutableInverse, [[0.6, -0.7], [-0.2, 0.4]]);
      using transposed = source.Transposed();
      expectMatrixClose(transposed, [[4, 2], [7, 6]]);
      using mutableTranspose = new oc.math_Matrix(source);
      mutableTranspose.Transpose();
      expectMatrixClose(mutableTranspose, [[4, 2], [7, 6]]);
      using assignedTarget = new oc.math_Matrix(1, 2, 1, 2, 0);
      using initialized = assignedTarget.Initialized(source);
      source.Multiply(3);
      expectMatrixClose(initialized, [[4, 7], [2, 6]]);
    });

    it('should cover every multiplication, division, addition, and subtraction overload', () => {
      const oc: MathOC = variant.get();
      using left = matrix2(oc, [1, 2, 3, 4]);
      using right = matrix2(oc, [2, 0, 0, 2]);
      using result = new oc.math_Matrix(1, 2, 1, 2, 0);
      result.Multiply(left, right);
      expectMatrixClose(result, [[2, 4], [6, 8]]);
      result.Multiply(right);
      expectMatrixClose(result, [[4, 8], [12, 16]]);
      result.Multiply(0.5);
      expectMatrixClose(result, [[2, 4], [6, 8]]);
      using row = double2(oc, 1, 2);
      using col = double2(oc, 3, 4);
      result.Multiply(row, col);
      expectMatrixClose(result, [[3, 4], [6, 8]]);

      using scalarProduct = left.Multiplied(2);
      using matrixProduct = left.Multiplied(right);
      using vectorProduct = left.Multiplied(col);
      expectMatrixClose(scalarProduct, [[2, 4], [6, 8]]);
      expectMatrixClose(matrixProduct, [[2, 4], [6, 8]]);
      expectVectorClose(vectorProduct, [11, 25]);
      using tScaled = left.TMultiplied(2);
      expectMatrixClose(tScaled, [[2, 4], [6, 8]]);
      using tProduct = left.TMultiply(right);
      expectMatrixClose(tProduct, [[2, 6], [4, 8]]);
      result.TMultiply(left, right);
      expectMatrixClose(result, [[2, 6], [4, 8]]);

      result.Divide(2);
      using divided = result.Divided(2);
      expectMatrixClose(divided, [[0.5, 1.5], [1, 2]]);
      result.Add(left);
      result.Add(left, right);
      expectMatrixClose(result, [[3, 2], [3, 6]]);
      using added = left.Added(right);
      expectMatrixClose(added, [[3, 2], [3, 6]]);
      result.Subtract(left, right);
      expectMatrixClose(result, [[-1, 2], [3, 2]]);
      result.Subtract(right);
      expectMatrixClose(result, [[-3, 2], [3, 0]]);
      using subtracted = left.Subtracted(right);
      expectMatrixClose(subtracted, [[-1, 2], [3, 2]]);
      using opposite = left.Opposite();
      expectMatrixClose(opposite, [[-1, -2], [-3, -4]]);
    });

    it('should cover block, row, column, diagonal, and swap operations', () => {
      const oc: MathOC = variant.get();
      using matrix = new oc.math_Matrix(1, 2, 1, 2, 0);
      using source = matrix2(oc, [1, 2, 3, 4]);
      matrix.Set(1, 2, 1, 2, source);
      expectMatrixClose(matrix, [[1, 2], [3, 4]]);
      using row = double2(oc, 5, 6);
      using col = double2(oc, 7, 8);
      matrix.SetRow(1, row);
      matrix.SetCol(2, col);
      expectMatrixClose(matrix, [[5, 7], [3, 8]]);
      using readRow = matrix.Row(1);
      using readCol = matrix.Col(2);
      expectVectorClose(readRow, [5, 7]);
      expectVectorClose(readCol, [7, 8]);
      matrix.SetDiag(9);
      expectMatrixClose(matrix, [[9, 7], [3, 9]]);
      matrix.SwapRow(1, 2);
      matrix.SwapCol(1, 2);
      expectMatrixClose(matrix, [[9, 3], [7, 9]]);
      matrix.Init(4);
      expectMatrixClose(matrix, [[4, 4], [4, 4]]);
    });

    it('should throw the exact WASM exception category for invalid matrix operations retained in the production build', () => {
      const oc: MathOC = variant.get();
      using nonSquare = new oc.math_Matrix(1, 2, 1, 3, 0);
      using singular = matrix2(oc, [1, 2, 2, 4]);
      using square = matrix2(oc, [1, 0, 0, 1]);
      expect(nonSquare.Determinant()).toBeCloseTo(0, 12);
      expectWasmException(() => nonSquare.Transpose());
      expectWasmException(() => nonSquare.Invert());
      expectWasmException(() => singular.Invert());
      expectWasmException(() => square.Divide(0));
      expectWasmException(() => square.Value(3, 1));
    });
  });

  describe.skipIf(!variant.exists)('math_Gauss', () => {
    it('should solve both vector overloads and expose determinant and inverse', () => {
      const oc: MathOC = variant.get();
      using matrix = matrix2(oc, [4, 7, 2, 6]);
      using progress = new oc.Message_ProgressRange();
      using shortest = new oc.math_Gauss(matrix);
      using full = new oc.math_Gauss(matrix, 1e-12, progress);
      expect(shortest.IsDone()).toBe(true);
      expect(full.IsDone()).toBe(true);
      using b = double2(oc, 1, 0);
      using x = new oc.math_VectorBase_double(1, 2, 0);
      full.Solve(b, x);
      expectVectorClose(x, [0.6, -0.2]);
      expectVectorClose(b, [1, 0]);
      full.Solve(b);
      expectVectorClose(b, [0.6, -0.2]);
      expect(full.Determinant()).toBeCloseTo(10, 12);
      using inverse = new oc.math_Matrix(1, 2, 1, 2, 0);
      full.Invert(inverse);
      expectMatrixClose(inverse, [[0.6, -0.7], [-0.2, 0.4]]);
    });

    it('should report a singular decomposition without invoking unavailable operations', () => {
      const oc: MathOC = variant.get();
      using singular = matrix2(oc, [1, 2, 2, 4]);
      using gauss = new oc.math_Gauss(singular);
      expect(gauss.IsDone()).toBe(false);
      expect(gauss.Determinant()).toBeCloseTo(0, 12);
    });
  });

  describe.skipIf(!variant.exists)('math_VectorBase<int>', () => {
    it('should preserve integer-specific construction, storage, and arithmetic semantics', () => {
      const oc: MathOC = variant.get();
      using source = int3(oc, 1, 2, 3);
      using copy = new oc.math_VectorBase_int(source);
      copy.Multiply(2);
      expectVectorClose(copy, [2, 4, 6]);
      expectVectorClose(source, [1, 2, 3]);
      using replacement = int3(oc, 4, 5, 6);
      source.Set(1, 3, replacement);
      using sliced = source.Slice(1, 3);
      expectVectorClose(sliced, [4, 5, 6]);
      source.Resize(5);
      using grownPrefix = source.Slice(1, 3);
      expectVectorClose(grownPrefix, [4, 5, 6]);
      source.Resize(3);
      using added = source.Added(copy);
      using subtracted = source.Subtracted(copy);
      expectVectorClose(added, [6, 9, 12]);
      expectVectorClose(subtracted, [2, 1, 0]);
      expect(source.Multiplied(copy)).toBe(64);
      using scaled = source.Multiplied(3);
      expectVectorClose(scaled, [12, 15, 18]);
      using array = source.Array1();
      expect([array.Lower(), array.Upper(), array.Value(2)]).toEqual([1, 3, 5]);
    });
  });
});
