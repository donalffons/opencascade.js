import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';
import { expectShapeGeometry } from './geometry-helpers.js';

describe.skipIf(!wasmExists)('Smoke: suffix-free constructors and methods', () => {
  beforeAll(async () => { await initOC(); });

  describe('BRepPrimAPI_MakeBox — suffix-free constructors', () => {
    it('should construct with (dx, dy, dz)', async () => {
      const oc = getOC();
      using box = new oc.BRepPrimAPI_MakeBox(10, 20, 30);
      using shape = box.Shape();
      expect(shape.IsNull()).toBe(false);
      await expectShapeGeometry(shape, { size: [10, 20, 30], center: [5, 10, 15] });
    });

    it('should construct with (gp_Pnt, dx, dy, dz)', async () => {
      const oc = getOC();
      using origin = new oc.gp_Pnt(1, 2, 3);
      using box = new oc.BRepPrimAPI_MakeBox(origin, 10, 20, 30);
      using shape = box.Shape();
      expect(shape.IsNull()).toBe(false);
      await expectShapeGeometry(shape, { size: [10, 20, 30], center: [6, 12, 18] });
    });

    it('should construct with (gp_Pnt, gp_Pnt)', async () => {
      const oc = getOC();
      using p1 = new oc.gp_Pnt(0, 0, 0);
      using p2 = new oc.gp_Pnt(5, 10, 15);
      using box = new oc.BRepPrimAPI_MakeBox(p1, p2);
      using shape = box.Shape();
      expect(shape.IsNull()).toBe(false);
      await expectShapeGeometry(shape, { size: [5, 10, 15], center: [2.5, 5, 7.5] });
    });

    it('should construct with (gp_Ax2, dx, dy, dz)', async () => {
      const oc = getOC();
      using ax2 = new oc.gp_Ax2();
      using box = new oc.BRepPrimAPI_MakeBox(ax2, 10, 20, 30);
      using shape = box.Shape();
      expect(shape.IsNull()).toBe(false);
      await expectShapeGeometry(shape, { size: [10, 20, 30] });
    });
  });

  describe('BRepBuilderAPI_MakeEdge — suffix-free constructors', () => {
    it('should construct with (gp_Lin)', () => {
      const oc = getOC();
      using origin = new oc.gp_Pnt(0, 0, 0);
      using dir = new oc.gp_Dir(1, 0, 0);
      using lin = new oc.gp_Lin(origin, dir);
      using edge = new oc.BRepBuilderAPI_MakeEdge(lin, 0, 10);
      expect(edge.IsDone()).toBe(true);
    });

    it('should construct with (gp_Circ)', () => {
      const oc = getOC();
      using ax2 = new oc.gp_Ax2();
      using circ = new oc.gp_Circ(ax2, 5);
      using edge = new oc.BRepBuilderAPI_MakeEdge(circ);
      expect(edge.IsDone()).toBe(true);
    });

    it('should construct with (gp_Pnt, gp_Pnt)', () => {
      const oc = getOC();
      using p1 = new oc.gp_Pnt(0, 0, 0);
      using p2 = new oc.gp_Pnt(10, 0, 0);
      using edge = new oc.BRepBuilderAPI_MakeEdge(p1, p2);
      expect(edge.IsDone()).toBe(true);
    });
  });

  describe('gp_Vec — suffix-free constructors', () => {
    it('should construct with ()', () => {
      const oc = getOC();
      using vec = new oc.gp_Vec();
      expect(vec.Magnitude()).toBe(0);
    });

    it('should construct with (gp_Dir)', () => {
      const oc = getOC();
      using dir = new oc.gp_Dir(0, 0, 1);
      using vec = new oc.gp_Vec(dir);
      expect(vec.Z()).toBe(1);
      expect(vec.Magnitude()).toBeCloseTo(1);
    });

    it('should construct with (gp_XYZ)', () => {
      const oc = getOC();
      using xyz = new oc.gp_XYZ(3, 4, 0);
      using vec = new oc.gp_Vec(xyz);
      expect(vec.Magnitude()).toBe(5);
    });

    it('should construct with (number, number, number)', () => {
      const oc = getOC();
      using vec = new oc.gp_Vec(1, 2, 3);
      expect(vec.X()).toBe(1);
      expect(vec.Y()).toBe(2);
      expect(vec.Z()).toBe(3);
    });

    it('should construct with (gp_Pnt, gp_Pnt)', () => {
      const oc = getOC();
      using p1 = new oc.gp_Pnt(0, 0, 0);
      using p2 = new oc.gp_Pnt(3, 4, 0);
      using vec = new oc.gp_Vec(p1, p2);
      expect(vec.Magnitude()).toBe(5);
    });
  });

  describe('gp_Dir — suffix-free constructors', () => {
    it('should construct with (gp_Vec)', () => {
      const oc = getOC();
      using vec = new oc.gp_Vec(0, 0, 5);
      using dir = new oc.gp_Dir(vec);
      expect(dir.Z()).toBeCloseTo(1);
    });

    it('should construct with (gp_XYZ)', () => {
      const oc = getOC();
      using xyz = new oc.gp_XYZ(0, 1, 0);
      using dir = new oc.gp_Dir(xyz);
      expect(dir.Y()).toBeCloseTo(1);
    });

    it('should construct with (number, number, number)', () => {
      const oc = getOC();
      using dir = new oc.gp_Dir(0, 0, 1);
      expect(dir.Z()).toBeCloseTo(1);
    });
  });

  describe('gp_Ax1 — suffix-free constructors', () => {
    it('should construct with ()', () => {
      const oc = getOC();
      using ax = new oc.gp_Ax1();
      using disposable = ax.Direction();
      expect(disposable.Z()).toBeCloseTo(1);
    });

    it('should construct with (gp_Pnt, gp_Dir)', () => {
      const oc = getOC();
      using pnt = new oc.gp_Pnt(1, 2, 3);
      using dir = new oc.gp_Dir(0, 1, 0);
      using ax = new oc.gp_Ax1(pnt, dir);
      using disposable2 = ax.Location();
      expect(disposable2.Y()).toBe(2);
      using disposable3 = ax.Direction();
      expect(disposable3.Y()).toBeCloseTo(1);
    });
  });
});
