/**
 * Type-level tests for STL template type resolution.
 *
 * Validates that std::vector<T> resolves to T[] and that mesh data
 * fields backed by std::vector types get concrete array types.
 */
import { expectTypeOf, it, describe } from 'vitest';
import type { RWGltf_CafWriter_Mesh } from '../dist/opencascade_single';

describe('std::vector type resolution in mesh data', () => {
  it('RWGltf_CafWriter_Mesh.NodesVec should not be any', () => {
    expectTypeOf<RWGltf_CafWriter_Mesh['NodesVec']>().not.toBeAny();
  });

  it('RWGltf_CafWriter_Mesh.NormalsVec should not be any', () => {
    expectTypeOf<RWGltf_CafWriter_Mesh['NormalsVec']>().not.toBeAny();
  });

  it('RWGltf_CafWriter_Mesh.TexCoordsVec should not be any', () => {
    expectTypeOf<RWGltf_CafWriter_Mesh['TexCoordsVec']>().not.toBeAny();
  });

  it('RWGltf_CafWriter_Mesh.IndicesVec should not be any', () => {
    expectTypeOf<RWGltf_CafWriter_Mesh['IndicesVec']>().not.toBeAny();
  });
});
