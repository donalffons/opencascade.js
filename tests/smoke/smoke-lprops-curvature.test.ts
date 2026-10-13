/**
 * Verifies curvature calculations for curve and surface local-properties classes across sphere,
 * cylinder, plane, and circle fixtures.
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: LProps curvature (F1 template-alias fix)', () => {
  beforeAll(async () => {
    await initOC();
  });

  describe('GeomLProp_SLProps -- surface local properties', () => {
    it('exposes the GeomLProp_SLProps class on the OC instance', () => {
      const oc = getOC();
      expect(typeof oc.GeomLProp_SLProps).toBe('function');
    });

    it('reports MeanCurvature = 1/R and GaussianCurvature = 1/R^2 for an analytic sphere', () => {
      const oc = getOC();
      const radius = 5;
      using origin = new oc.gp_Pnt(0, 0, 0);
      using zDir = new oc.gp_Dir(0, 0, 1);
      using xDir = new oc.gp_Dir(1, 0, 0);
      using ax3 = new oc.gp_Ax3(origin, zDir, xDir);
      using sphere = new oc.Geom_SphericalSurface(ax3, radius);

      // GeomLProp_SLProps takes (Surface, U, V, N, Resolution).
      // Pick (U,V) away from poles to keep curvature definitions stable.
      using props = new oc.GeomLProp_SLProps(sphere, 0.5, 0.5, 2, 1e-6);

      expect(props.IsCurvatureDefined()).toBe(true);
      // Sign of MeanCurvature depends on the surface normal orientation; the
      // analytic spherical surface's `gp_Ax3` defaults flip the normal inward
      // so OCCT reports -1/R. Compare on magnitude.
      expect(Math.abs(props.MeanCurvature())).toBeCloseTo(1 / radius, 5);
      expect(props.GaussianCurvature()).toBeCloseTo(1 / (radius * radius), 5);
    });

    it('reports zero curvature on a plane', () => {
      const oc = getOC();
      using origin = new oc.gp_Pnt(0, 0, 0);
      using zDir = new oc.gp_Dir(0, 0, 1);
      using xDir = new oc.gp_Dir(1, 0, 0);
      using ax3 = new oc.gp_Ax3(origin, zDir, xDir);
      using plane = new oc.Geom_Plane(ax3);

      using props = new oc.GeomLProp_SLProps(plane, 0.5, 0.5, 2, 1e-6);
      expect(props.IsCurvatureDefined()).toBe(true);
      expect(props.MeanCurvature()).toBeCloseTo(0, 6);
      expect(props.GaussianCurvature()).toBeCloseTo(0, 6);
    });

    it('reports MeanCurvature = 1/(2R), GaussianCurvature = 0 for a cylinder', () => {
      const oc = getOC();
      const radius = 3;
      using origin = new oc.gp_Pnt(0, 0, 0);
      using zDir = new oc.gp_Dir(0, 0, 1);
      using xDir = new oc.gp_Dir(1, 0, 0);
      using ax3 = new oc.gp_Ax3(origin, zDir, xDir);
      using cyl = new oc.Geom_CylindricalSurface(ax3, radius);

      using props = new oc.GeomLProp_SLProps(cyl, 0.5, 1.0, 2, 1e-6);
      expect(props.IsCurvatureDefined()).toBe(true);
      // For a cylinder of radius R, principal curvatures are (1/R, 0)
      // so mean = 1/(2R), gaussian = 0.
      expect(Math.abs(props.MeanCurvature())).toBeCloseTo(1 / (2 * radius), 5);
      expect(props.GaussianCurvature()).toBeCloseTo(0, 6);
    });
  });

  describe('GeomLProp_CLProps -- curve local properties', () => {
    it('exposes the GeomLProp_CLProps class on the OC instance', () => {
      const oc = getOC();
      expect(typeof oc.GeomLProp_CLProps).toBe('function');
    });

    it('reports Curvature = 1/R on a circle', () => {
      const oc = getOC();
      const radius = 4;
      using origin = new oc.gp_Pnt(0, 0, 0);
      using zDir = new oc.gp_Dir(0, 0, 1);
      using ax2 = new oc.gp_Ax2(origin, zDir);
      using circle = new oc.Geom_Circle(ax2, radius);

      // GeomLProp_CLProps takes (Curve, U, N, Resolution); N up to 3 for curvature.
      using props = new oc.GeomLProp_CLProps(circle, 0.0, 2, 1e-6);
      expect(props.Curvature()).toBeCloseTo(1 / radius, 5);
    });
  });

  describe('BRepLProp_SLProps -- surface local properties via BRepAdaptor', () => {
    it('exposes the BRepLProp_SLProps class on the OC instance', () => {
      const oc = getOC();
      expect(typeof oc.BRepLProp_SLProps).toBe('function');
    });

    it('computes mean curvature on a face from a sphere shape', () => {
      const oc = getOC();
      const radius = 7;
      using sphereMaker = new oc.BRepPrimAPI_MakeSphere(radius);
      using sphereShape = sphereMaker.Shape();

      using explorer = new oc.TopExp_Explorer(sphereShape, oc.TopAbs_ShapeEnum.TopAbs_FACE);
      expect(explorer.More()).toBe(true);
      using rawFace = explorer.Current();
      using face = oc.TopoDS.Face(rawFace);

      using adaptor = new oc.BRepAdaptor_Surface(face);
      using props = new oc.BRepLProp_SLProps(adaptor, 0.5, 0.5, 2, 1e-6);
      expect(props.IsCurvatureDefined()).toBe(true);
      expect(Math.abs(props.MeanCurvature())).toBeCloseTo(1 / radius, 4);
    });
  });

  describe('BRepLProp_CLProps -- curve local properties via BRepAdaptor', () => {
    it('exposes the BRepLProp_CLProps class on the OC instance', () => {
      const oc = getOC();
      expect(typeof oc.BRepLProp_CLProps).toBe('function');
    });
  });

  describe('HLRBRep_SLProps -- HLR-side surface local properties', () => {
    it('exposes the HLRBRep_SLProps class on the OC instance', () => {
      const oc = getOC();
      expect(typeof oc.HLRBRep_SLProps).toBe('function');
    });
  });
});
