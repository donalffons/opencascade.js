import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

/**
 * Verifies same-arity integer and floating-point overloads dispatch through
 * `Number.isInteger()`. Integer-valued numbers select integer overloads; other numbers select
 * floating-point overloads.
 */
describe.skipIf(!wasmExists)('Smoke: int/double dispatch (formerly ambiguous)', () => {
  beforeAll(async () => { await initOC(); });

  describe('2D SetCoord — int-indexed overload via dispatch', () => {
    it('gp_XY.SetCoord routes integers to indexed overload', () => {
      const oc = getOC();
      using xy = new oc.gp_XY(0, 0);
      xy.SetCoord(1, 5.0);
      expect(xy.X()).toBe(5.0);

      xy.SetCoord(2, 7.0);
      expect(xy.Y()).toBe(7.0);
    });

    it('gp_Pnt2d.SetCoord routes integers to indexed overload', () => {
      const oc = getOC();
      using pnt = new oc.gp_Pnt2d(0, 0);
      pnt.SetCoord(1, 7.0);
      expect(pnt.X()).toBe(7.0);

      pnt.SetCoord(2, 4.0);
      expect(pnt.Y()).toBe(4.0);
    });

    it('gp_Vec2d.SetCoord routes integers to indexed overload', () => {
      const oc = getOC();
      using vec = new oc.gp_Vec2d(0, 0);
      vec.SetCoord(1, 9.0);
      expect(vec.X()).toBe(9.0);

      vec.SetCoord(2, 3.0);
      expect(vec.Y()).toBe(3.0);
    });

    it('gp_Dir2d.SetCoord routes integers to indexed overload', () => {
      const oc = getOC();
      using dir = new oc.gp_Dir2d(1, 0);
      dir.SetCoord(1, 3.0);
      dir.SetCoord(2, 4.0);
      const len = Math.sqrt(dir.X() ** 2 + dir.Y() ** 2);
      expect(len).toBeCloseTo(1.0, 5);
      expect(dir.Y()).not.toBe(0);
    });
  });

  describe('TCollection constructors — Standard_Integer vs Standard_Real at arity 1', () => {
    it('TCollection_AsciiString dispatches integer vs real', () => {
      const oc = getOC();
      using fromInt = new oc.TCollection_AsciiString(42);
      expect(fromInt.Length()).toBeGreaterThan(0);

      using fromReal = new oc.TCollection_AsciiString(3.14);
      expect(fromReal.Length()).toBeGreaterThan(0);
    });

    it('TCollection_ExtendedString dispatches integer vs real', () => {
      const oc = getOC();
      using fromInt = new oc.TCollection_ExtendedString(42);
      expect(fromInt.Length()).toBeGreaterThan(0);

      using fromReal = new oc.TCollection_ExtendedString(3.14);
      expect(fromReal.Length()).toBeGreaterThan(0);
    });

  });
});
