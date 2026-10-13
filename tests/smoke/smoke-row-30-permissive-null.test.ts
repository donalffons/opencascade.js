/**
 * Verifies permissive-null handling is not applied to value-typed reporter defaults.
 * `undefined` selects the default `Message_ProgressRange`, while `null` raises the
 * strict-null binding error.
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

const RULE_5_NULL_ERROR_FRAGMENT = /null is not a valid value/;

describe.skipIf(!wasmExists)('Smoke: row-30 permissive-null carve-out', () => {
  beforeAll(async () => { await initOC(); });

  /**
   * Value-typed reporter parameters are outside the permissive handle carve-out. This fixture
   * proves `undefined` and `null` take different branches on the same `Build` slot.
   */
  const makeFuseFixture = () => {
    const oc = getOC();
    using box1 = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
    using box2 = new oc.BRepPrimAPI_MakeBox(5, 5, 5);
    const a = box1.Shape();
    const b = box2.Shape();
    return { a, b };
  };

  describe('carve-out scoping: value-typed reporter slot stays rule-5 strict', () => {
    it('undefined → default reporter (Build succeeds): carve-out default branch', () => {
      const { a, b } = makeFuseFixture();
      using ashape = a;
      using bshape = b;
      const oc = getOC();
      using fuse = new oc.BRepAlgoAPI_Fuse(ashape, bshape);
      expect(() => fuse.Build.call(fuse, undefined)).not.toThrow();
      expect(fuse.IsDone()).toBe(true);
    });

    it('null → rule-5 BindingError (carve-out NOT applied to value-typed slot)', () => {
      const { a, b } = makeFuseFixture();
      using ashape = a;
      using bshape = b;
      const oc = getOC();
      using fuse = new oc.BRepAlgoAPI_Fuse(ashape, bshape);
      // @ts-expect-error - null is not a valid Message_ProgressRange (rule-5 strict null; row-30 carve-out is scoped out of value-typed reporter slots)
      expect(() => fuse.Build.call(fuse, null)).toThrow(RULE_5_NULL_ERROR_FRAGMENT);
    });
  });
});
