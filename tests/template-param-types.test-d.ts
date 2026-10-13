/**
 * Type-level tests for unresolved template parameter resolution.
 *
 * BVH template classes use dependent types like `typename T::Point` and
 * `typename T::Target`. After template-parameter substitution produces
 * `ConcreteClass::Point`, the resolver should look up the nested typedef.
 *
 * Known limitation: BRepExtrema_TriangleSet.Box() returns BVH_Box<double,3>
 * which requires binding the BVH_Box template instantiation. The resolver
 * correctly identifies the type but it has no Embind class_ binding.
 */
import { expectTypeOf, it, describe } from 'vitest';
import type { BRepExtrema_TriangleSet } from '../dist/opencascade_single';

describe('Template parameter dependent type resolution', () => {
  it('BRepExtrema_TriangleSet.Box() returns BVH_Box<double,3> (unbound template)', () => {
    expectTypeOf<BRepExtrema_TriangleSet['Box']>().returns.toBeAny();
  });

  it('BRepExtrema_TriangleSet constructor param should not be any', () => {
    expectTypeOf<BRepExtrema_TriangleSet>().constructorParameters.not.toBeAny();
  });
});
