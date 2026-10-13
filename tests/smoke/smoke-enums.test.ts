/**
 * Smoke tests: Enum bindings as string literal pattern.
 *
 * Validates that OCCT enums are exposed as plain string values via embind's
 * enum_value_type::string mode, producing idiomatic JavaScript objects where
 * each member is its own name as a string. This ensures:
 * - Self-documenting values (e.g., "TopAbs_FACE" instead of 4)
 * - JSON-serializable values
 * - Correct strict equality semantics
 * - Distinct value spaces across different enum types
 * - API compatibility with TopExp_Explorer and other enum-consuming functions
 * - Transparent wire-type conversion (embind maps strings to C++ integers)
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: Enum Bindings', () => {
  beforeAll(async () => {
    await initOC();
  });

  it('should represent enum values as plain strings', () => {
    const oc = getOC();
    expect(typeof oc.TopAbs_ShapeEnum.TopAbs_FACE).toBe('string');
    expect(typeof oc.TopAbs_ShapeEnum.TopAbs_EDGE).toBe('string');
    expect(typeof oc.TopAbs_Orientation.TopAbs_FORWARD).toBe('string');
  });

  it('should have correct string values matching member names', () => {
    const oc = getOC();
    expect(oc.TopAbs_ShapeEnum.TopAbs_COMPOUND).toBe('TopAbs_COMPOUND');
    expect(oc.TopAbs_ShapeEnum.TopAbs_COMPSOLID).toBe('TopAbs_COMPSOLID');
    expect(oc.TopAbs_ShapeEnum.TopAbs_SOLID).toBe('TopAbs_SOLID');
    expect(oc.TopAbs_ShapeEnum.TopAbs_SHELL).toBe('TopAbs_SHELL');
    expect(oc.TopAbs_ShapeEnum.TopAbs_FACE).toBe('TopAbs_FACE');
    expect(oc.TopAbs_ShapeEnum.TopAbs_WIRE).toBe('TopAbs_WIRE');
    expect(oc.TopAbs_ShapeEnum.TopAbs_EDGE).toBe('TopAbs_EDGE');
    expect(oc.TopAbs_ShapeEnum.TopAbs_VERTEX).toBe('TopAbs_VERTEX');
    expect(oc.TopAbs_ShapeEnum.TopAbs_SHAPE).toBe('TopAbs_SHAPE');
  });

  it('should not have .value property on enum values', () => {
    const oc = getOC();
    const face = oc.TopAbs_ShapeEnum.TopAbs_FACE;
    expect(face).not.toHaveProperty('value');
  });

  it('should serialize enum values to JSON as strings', () => {
    const oc = getOC();
    const face = oc.TopAbs_ShapeEnum.TopAbs_FACE;
    const json = JSON.stringify({ shapeType: face });
    expect(json).toBe('{"shapeType":"TopAbs_FACE"}');
    expect(JSON.parse(json).shapeType).toBe('TopAbs_FACE');
  });

  it('should support strict equality for enum values', () => {
    const oc = getOC();
    const face1 = oc.TopAbs_ShapeEnum.TopAbs_FACE;
    const face2 = oc.TopAbs_ShapeEnum.TopAbs_FACE;
    expect(face1 === face2).toBe(true);
    expect(face1).not.toBe(oc.TopAbs_ShapeEnum.TopAbs_EDGE);
  });

  it('should return all enum member names via Object.keys()', () => {
    const oc = getOC();
    const keys = Object.keys(oc.TopAbs_ShapeEnum);
    expect(keys).toContain('TopAbs_COMPOUND');
    expect(keys).toContain('TopAbs_FACE');
    expect(keys).toContain('TopAbs_EDGE');
    expect(keys).toContain('TopAbs_SHAPE');
    expect(keys.length).toBe(9);
  });

  it('should accept enum values in API functions', () => {
    const oc = getOC();
    using box = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
    using boxShape = box.Shape();
    using explorer = new oc.TopExp_Explorer(boxShape, oc.TopAbs_ShapeEnum.TopAbs_FACE, oc.TopAbs_ShapeEnum.TopAbs_SHAPE);

    let faceCount = 0;
    while (explorer.More()) {
      faceCount++;
      explorer.Next();
    }
    expect(faceCount).toBe(6);
  });

  it('should have correct string values for TopAbs_Orientation enum', () => {
    const oc = getOC();
    expect(typeof oc.TopAbs_Orientation.TopAbs_FORWARD).toBe('string');
    expect(oc.TopAbs_Orientation.TopAbs_FORWARD).toBe('TopAbs_FORWARD');
    expect(oc.TopAbs_Orientation.TopAbs_REVERSED).toBe('TopAbs_REVERSED');
    expect(oc.TopAbs_Orientation.TopAbs_INTERNAL).toBe('TopAbs_INTERNAL');
    expect(oc.TopAbs_Orientation.TopAbs_EXTERNAL).toBe('TopAbs_EXTERNAL');
  });

  it('should have correct string values for ChFi3d_FilletShape enum', () => {
    const oc = getOC();
    expect(typeof oc.ChFi3d_FilletShape.ChFi3d_Rational).toBe('string');
    expect(oc.ChFi3d_FilletShape.ChFi3d_Rational).toBe('ChFi3d_Rational');
  });

  it('should have distinct value spaces for different enum types', () => {
    const oc = getOC();
    expect(oc.TopAbs_ShapeEnum.TopAbs_COMPOUND).toBe('TopAbs_COMPOUND');
    expect(oc.TopAbs_Orientation.TopAbs_FORWARD).toBe('TopAbs_FORWARD');
    expect(oc.TopAbs_ShapeEnum.TopAbs_COMPOUND).not.toBe(oc.TopAbs_Orientation.TopAbs_FORWARD);
  });
});
