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

const TOLERANCE = 1e-9;

const variants = [
  { name: 'single-threaded', exists: wasmExists, init: initOC, get: getOC },
  { name: 'multi-threaded', exists: multiWasmExists, init: initOCMulti, get: getOCMulti },
] as const;

const assertCircleResult = (
  solver: {
    IsDone(): boolean;
    NbSolutions(): number;
    ThisSolution(index: number): InstanceType<OpenCascadeInstance['gp_Circ2d']>;
  },
  expected: readonly [number, number, number],
): void => {
  expect(solver.IsDone()).toBe(true);
  expect(solver.NbSolutions()).toBeGreaterThan(0);
  using circle = solver.ThisSolution(1);
  using center = circle.Location();
  expect(center.X()).toBeCloseTo(expected[0], 9);
  expect(center.Y()).toBeCloseTo(expected[1], 9);
  expect(circle.Radius()).toBeCloseTo(expected[2], 9);
};

describe.each(variants)('Smoke: contributor math symbols ($name)', (variant) => {
  beforeAll(async () => {
    if (variant.exists) await variant.init();
  });

  describe.skipIf(!variant.exists)('Gcc analytic construction family', () => {
    it('should construct and validate every contributed analytic solver', () => {
      const oc = variant.get() as OpenCascadeInstance;
      using origin = new oc.gp_Pnt2d(0, 0);
      using xDirection = new oc.gp_Dir2d(1, 0);
      using yDirection = new oc.gp_Dir2d(0, 1);
      using xLine = new oc.gp_Lin2d(origin, xDirection);

      using minusOne = new oc.gp_Pnt2d(-1, 0);
      using plusOne = new oc.gp_Pnt2d(1, 0);
      using onLine = new oc.GccAna_Circ2d2TanOn(
        minusOne,
        plusOne,
        xLine,
        TOLERANCE,
      );
      assertCircleResult(onLine, [0, 0, 1]);
      using centerOnLine = new oc.gp_Pnt2d();
      const onLineResult = onLine.CenterOn3(1, 0, centerOnLine);
      expect(Number.isFinite(onLineResult.ParArg)).toBe(true);
      expect(xLine.Contains(centerOnLine, TOLERANCE * 10)).toBe(true);

      using p1 = new oc.gp_Pnt2d(0, 0);
      using p2 = new oc.gp_Pnt2d(4, 0);
      using p3 = new oc.gp_Pnt2d(0, 3);
      using threeTangencies = new oc.GccAna_Circ2d3Tan(p1, p2, p3, TOLERANCE);
      assertCircleResult(threeTangencies, [2, 1.5, 2.5]);
      for (const [method, point] of [
        [threeTangencies.Tangency1.bind(threeTangencies), p1],
        [threeTangencies.Tangency2.bind(threeTangencies), p2],
        [threeTangencies.Tangency3.bind(threeTangencies), p3],
      ] as const) {
        using tangent = new oc.gp_Pnt2d();
        method(1, 0, 0, tangent);
        expect(tangent.Distance(point)).toBeCloseTo(0, 9);
      }

      using centered = new oc.GccAna_Circ2dTanCen(p3, p1);
      assertCircleResult(centered, [0, 0, 3]);
      using centeredTangent = new oc.gp_Pnt2d();
      centered.Tangency1(1, 0, 0, centeredTangent);
      expect(centeredTangent.Distance(p3)).toBeCloseTo(0, 9);

      using unitAxis = new oc.gp_Ax2d(origin, xDirection);
      using unitCircle = new oc.gp_Circ2d(unitAxis, 1, true);
      using outsideCircle = oc.GccEnt.Outside(unitCircle);
      using linePoint = new oc.gp_Pnt2d(2, 0);
      using verticalLine = new oc.gp_Lin2d(linePoint, yDirection);
      using tangentOnRadius = new oc.GccAna_Circ2dTanOnRad(
        outsideCircle,
        verticalLine,
        1,
        TOLERANCE,
      );
      expect(tangentOnRadius.IsDone()).toBe(true);
      expect(tangentOnRadius.NbSolutions()).toBe(1);
      using tangentOnRadiusCircle = tangentOnRadius.ThisSolution(1);
      expect(tangentOnRadiusCircle.Radius()).toBeCloseTo(1, 9);
      using solutionCenter = tangentOnRadiusCircle.Location();
      expect(verticalLine.Contains(solutionCenter, TOLERANCE * 10)).toBe(true);
      using radiusCenter = new oc.gp_Pnt2d();
      const centerResult = tangentOnRadius.CenterOn3(1, 0, radiusCenter);
      expect(Number.isFinite(centerResult.ParArg)).toBe(true);

      using oblique = new oc.GccAna_Lin2dTanObl(origin, xLine, Math.PI / 4);
      expect(oblique.IsDone()).toBe(true);
      expect(oblique.NbSolutions()).toBe(1);
      using obliqueLine = oblique.ThisSolution(1);
      using obliqueDirection = obliqueLine.Direction();
      expect(Math.abs(obliqueDirection.Angle(xDirection))).toBeCloseTo(Math.PI / 4, 9);
      expect(obliqueLine.Contains(origin, TOLERANCE)).toBe(true);

      using parallel = new oc.GccAna_Lin2dTanPar(p3, xLine);
      expect(parallel.IsDone()).toBe(true);
      using parallelLine = parallel.ThisSolution(1);
      using parallelDirection = parallelLine.Direction();
      expect(Math.abs(parallelDirection.Angle(xDirection))).toBeCloseTo(0, 9);
      expect(parallelLine.Contains(p3, TOLERANCE)).toBe(true);

      using perpendicular = new oc.GccAna_Lin2dTanPer(origin, xLine);
      expect(perpendicular.IsDone()).toBe(true);
      using perpendicularLine = perpendicular.ThisSolution(1);
      using perpendicularDirection = perpendicularLine.Direction();
      expect(Math.abs(perpendicularDirection.Angle(xDirection))).toBeCloseTo(Math.PI / 2, 9);
      expect(perpendicularLine.Contains(origin, TOLERANCE)).toBe(true);
    });

    it('should smoke every GccEnt qualifier factory and position conversion', () => {
      const oc = variant.get() as OpenCascadeInstance;
      const positions = [
        oc.GccEnt_Position.GccEnt_unqualified,
        oc.GccEnt_Position.GccEnt_enclosing,
        oc.GccEnt_Position.GccEnt_enclosed,
        oc.GccEnt_Position.GccEnt_outside,
        oc.GccEnt_Position.GccEnt_noqualifier,
      ];
      for (const position of positions) {
        const encoded = oc.GccEnt.PositionToString(position);
        expect(oc.GccEnt.PositionFromString(encoded)).toBe(position);
        expect(oc.GccEnt.PositionFromString(encoded.toLowerCase(), position)).toEqual({
          returnValue: true,
          thePosition: position,
        });
      }

      using origin = new oc.gp_Pnt2d(0, 0);
      using direction = new oc.gp_Dir2d(1, 0);
      using line = new oc.gp_Lin2d(origin, direction);
      using axis = new oc.gp_Ax2d(origin, direction);
      using circle = new oc.gp_Circ2d(axis, 2, true);
      using unqualifiedLine = oc.GccEnt.Unqualified(line);
      using enclosedLine = oc.GccEnt.Enclosed(line);
      using outsideLine = oc.GccEnt.Outside(line);
      using unqualifiedCircle = oc.GccEnt.Unqualified(circle);
      using enclosingCircle = oc.GccEnt.Enclosing(circle);
      using enclosedCircle = oc.GccEnt.Enclosed(circle);
      using outsideCircle = oc.GccEnt.Outside(circle);
      expect(unqualifiedLine.IsUnqualified()).toBe(true);
      expect(enclosedLine.IsEnclosed()).toBe(true);
      expect(outsideLine.IsOutside()).toBe(true);
      expect(unqualifiedCircle.IsUnqualified()).toBe(true);
      expect(enclosingCircle.IsEnclosing()).toBe(true);
      expect(enclosedCircle.IsEnclosed()).toBe(true);
      expect(outsideCircle.IsOutside()).toBe(true);
    });
  });

  describe.skipIf(!variant.exists)('Geom2dGcc facade and support family', () => {
    it('should execute every contributed facade, Geo, and Iter class', () => {
      const oc = variant.get() as OpenCascadeInstance;
      using origin = new oc.gp_Pnt2d(0, 0);
      using minusOne = new oc.gp_Pnt2d(-1, 0);
      using plusOne = new oc.gp_Pnt2d(1, 0);
      using p3 = new oc.gp_Pnt2d(0, 3);
      using p4 = new oc.gp_Pnt2d(4, 0);
      using xDirection = new oc.gp_Dir2d(1, 0);
      using yDirection = new oc.gp_Dir2d(0, 1);
      using xLine = new oc.gp_Lin2d(origin, xDirection);
      using xLineGeometry = new oc.Geom2d_Line(xLine);
      using xLineAdaptor = new oc.Geom2dAdaptor_Curve(xLineGeometry);
      using circleAxis = new oc.gp_Ax2d(origin, xDirection);
      using circle = new oc.gp_Circ2d(circleAxis, 1, true);
      using circleGeometry = new oc.Geom2d_Circle(circle);
      using circleAdaptor = new oc.Geom2dAdaptor_Curve(circleGeometry);
      using qualifiedCircle = new oc.Geom2dGcc_QualifiedCurve(
        circleAdaptor,
        oc.GccEnt_Position.GccEnt_unqualified,
      );
      using qCircle = new oc.Geom2dGcc_QCurve(
        circleAdaptor,
        oc.GccEnt_Position.GccEnt_unqualified,
      );
      using qOutsideCircle = new oc.Geom2dGcc_QCurve(
        circleAdaptor,
        oc.GccEnt_Position.GccEnt_outside,
      );
      using qLine = new oc.Geom2dGcc_QCurve(
        xLineAdaptor,
        oc.GccEnt_Position.GccEnt_unqualified,
      );
      using geomOrigin = new oc.Geom2d_CartesianPoint(origin);
      using geomMinusOne = new oc.Geom2d_CartesianPoint(minusOne);
      using geomPlusOne = new oc.Geom2d_CartesianPoint(plusOne);
      using geomP3 = new oc.Geom2d_CartesianPoint(p3);
      using geomP4 = new oc.Geom2d_CartesianPoint(p4);
      using centerLinePoint = new oc.gp_Pnt2d(2, 0);
      using centerLine = new oc.gp_Lin2d(centerLinePoint, yDirection);
      using centerLineGeometry = new oc.Geom2d_Line(centerLine);
      using centerLineAdaptor = new oc.Geom2dAdaptor_Curve(centerLineGeometry);

      using twoOn = new oc.Geom2dGcc_Circ2d2TanOn(
        geomMinusOne,
        geomPlusOne,
        xLineAdaptor,
        TOLERANCE,
      );
      using twoOnGeo = new oc.Geom2dGcc_Circ2d2TanOnGeo(
        minusOne,
        plusOne,
        xLineAdaptor,
        TOLERANCE,
      );
      for (const solver of [twoOn, twoOnGeo]) {
        expect(solver.IsDone()).toBe(true);
        expect(solver.NbSolutions()).toBe(1);
        using solution = solver.ThisSolution(1);
        expect(solution.Radius()).toBeCloseTo(1, 9);
      }

      // The exact collinear initial guess makes OCCT's iterative system singular.
      // Exercising that deterministic failure still proves the six-argument overload
      // dispatches into the native solver instead of dying in Embind conversion.
      expect(
        () => new oc.Geom2dGcc_Circ2d2TanOnIter(
          qOutsideCircle,
          p4,
          xLine,
          0,
          2.5,
          TOLERANCE,
        ),
      ).toThrow(WebAssembly.Exception);

      using three = new oc.Geom2dGcc_Circ2d3Tan(
        geomOrigin,
        geomP4,
        geomP3,
        TOLERANCE,
      );
      expect(three.IsDone()).toBe(true);
      expect(three.NbSolutions()).toBe(1);
      using threeSolution = three.ThisSolution(1);
      expect(threeSolution.Radius()).toBeCloseTo(2.5, 9);

      using pointA = new oc.gp_Pnt2d(-1, 1);
      using pointB = new oc.gp_Pnt2d(1, 1);
      using threeIter = new oc.Geom2dGcc_Circ2d3TanIter(
        qLine,
        pointA,
        pointB,
        0,
        TOLERANCE,
      );
      expect(threeIter.IsDone()).toBe(true);
      using threeIterSolution = threeIter.ThisSolution();
      expect(threeIterSolution.Radius()).toBeCloseTo(1, 7);

      using tangentCenter = new oc.Geom2dGcc_Circ2dTanCen(
        qualifiedCircle,
        geomP3,
        TOLERANCE,
      );
      using tangentCenterGeo = new oc.Geom2dGcc_Circ2dTanCenGeo(
        qCircle,
        p3,
        TOLERANCE,
      );
      for (const solver of [tangentCenter, tangentCenterGeo]) {
        expect(solver.IsDone()).toBe(true);
        expect(solver.NbSolutions()).toBe(2);
        using solution = solver.ThisSolution(1);
        using center = solution.Location();
        expect(center.Distance(p3)).toBeCloseTo(0, 9);
      }

      using tangentOnRadius = new oc.Geom2dGcc_Circ2dTanOnRad(
        qualifiedCircle,
        centerLineAdaptor,
        1,
        TOLERANCE,
      );
      using tangentOnRadiusGeo = new oc.Geom2dGcc_Circ2dTanOnRadGeo(
        qOutsideCircle,
        centerLine,
        1,
        TOLERANCE,
      );
      for (const solver of [tangentOnRadius, tangentOnRadiusGeo]) {
        expect(solver.IsDone()).toBe(true);
        expect(solver.NbSolutions()).toBeGreaterThan(0);
        using solution = solver.ThisSolution(1);
        expect(solution.Radius()).toBeCloseTo(1, 9);
      }

      using tangentLineIter = new oc.Geom2dGcc_Lin2d2TanIter(
        qCircle,
        p4,
        Math.acos(1 / 4),
        TOLERANCE,
      );
      expect(tangentLineIter.IsDone()).toBe(true);
      using tangentLine = tangentLineIter.ThisSolution();
      expect(tangentLine.Contains(p4, TOLERANCE * 10)).toBe(true);

      using oblique = new oc.Geom2dGcc_Lin2dTanObl(
        qualifiedCircle,
        xLine,
        TOLERANCE,
        Math.PI / 4,
      );
      using obliqueIter = new oc.Geom2dGcc_Lin2dTanOblIter(
        qCircle,
        xLine,
        0,
        TOLERANCE,
        Math.PI / 4,
      );
      expect(oblique.IsDone()).toBe(true);
      expect(oblique.NbSolutions()).toBeGreaterThan(0);
      expect(obliqueIter.IsDone()).toBe(true);
      using obliqueSolution = oblique.ThisSolution(1);
      using obliqueIterSolution = obliqueIter.ThisSolution();
      using obliqueDirection = obliqueSolution.Direction();
      using obliqueIterDirection = obliqueIterSolution.Direction();
      expect(Math.abs(obliqueDirection.Angle(xDirection))).toBeCloseTo(Math.PI / 4, 7);
      expect(Math.abs(obliqueIterDirection.Angle(xDirection))).toBeCloseTo(Math.PI / 4, 7);
    });
  });

  describe.skipIf(!variant.exists)('ProjLib supporting projectors', () => {
    it('should execute each constructible analytic projector', () => {
      const oc = variant.get() as OpenCascadeInstance;
      using origin = new oc.gp_Pnt(0, 0, 0);
      using z = new oc.gp_Dir(0, 0, 1);
      using x = new oc.gp_Dir(1, 0, 0);
      using axis3 = new oc.gp_Ax3(origin, z, x);
      using axis2 = new oc.gp_Ax2(origin, z, x);
      using plane = new oc.gp_Pln(axis3);
      using linePoint = new oc.gp_Pnt(0, 5, 7);
      using line = new oc.gp_Lin(linePoint, z);
      using circle = new oc.gp_Circ(axis2, 5);
      using cylinder = new oc.gp_Cylinder(axis3, 5);
      using cone = new oc.gp_Cone(axis3, Math.PI / 4, 2);
      using sphere = new oc.gp_Sphere(axis3, 5);
      using torus = new oc.gp_Torus(axis3, 3, 2);

      using baseProjector = new oc.ProjLib_Projector();
      expect(baseProjector.IsDone()).toBe(false);
      baseProjector.SetType(oc.GeomAbs_CurveType.GeomAbs_Line);
      baseProjector.Done();
      expect(baseProjector.IsDone()).toBe(true);
      expect(baseProjector.GetType()).toBe(oc.GeomAbs_CurveType.GeomAbs_Line);

      using planeProjector = new oc.ProjLib_Plane(plane, line);
      using cylinderProjector = new oc.ProjLib_Cylinder(cylinder, line);
      using coneDirection = new oc.gp_Dir(0, 1, 1);
      using conePoint = new oc.gp_Pnt(0, 5, 3);
      using coneLine = new oc.gp_Lin(conePoint, coneDirection);
      using coneProjector = new oc.ProjLib_Cone(cone, coneLine);
      using sphereProjector = new oc.ProjLib_Sphere(sphere, circle);
      using torusCircle = new oc.gp_Circ(axis2, 5);
      using torusProjector = new oc.ProjLib_Torus(torus, torusCircle);
      for (const projector of [
        planeProjector,
        cylinderProjector,
        coneProjector,
        sphereProjector,
        torusProjector,
      ]) {
        expect(projector.IsDone()).toBe(true);
        expect(projector.GetType()).toBe(oc.GeomAbs_CurveType.GeomAbs_Line);
        using projected = projector.Line();
        using location = projected.Location();
        expect(Number.isFinite(location.X())).toBe(true);
        expect(Number.isFinite(location.Y())).toBe(true);
      }
    });

    it('should smoke the safely default-constructible projection helpers', () => {
      const oc = variant.get() as OpenCascadeInstance;
      using origin = new oc.gp_Pnt(0, 0, 0);
      using z = new oc.gp_Dir(0, 0, 1);
      using x = new oc.gp_Dir(1, 0, 0);
      using axis = new oc.gp_Ax3(origin, z, x);
      using projectedCurve = new oc.ProjLib_ProjectedCurve();
      expect(projectedCurve.GetType()).toBe(oc.GeomAbs_CurveType.GeomAbs_BSplineCurve);
      using projectOnPlane = new oc.ProjLib_ProjectOnPlane(axis);
      using returnedPlane = projectOnPlane.GetPlane();
      using returnedLocation = returnedPlane.Location();
      expect([returnedLocation.X(), returnedLocation.Y(), returnedLocation.Z()]).toEqual([0, 0, 0]);
      using projectOnSurface = new oc.ProjLib_ProjectOnSurface();
      expect(projectOnSurface.IsDone()).toBe(false);
    });

    it('should evaluate ProjLib_PrjFunc and ProjLib_PrjResolve on an analytic plane', () => {
      const oc = variant.get() as OpenCascadeInstance;
      using origin = new oc.gp_Pnt(0, 0, 0);
      using xDirection = new oc.gp_Dir(1, 0, 0);
      using zDirection = new oc.gp_Dir(0, 0, 1);
      using line = new oc.gp_Lin(origin, xDirection);
      using lineGeometry = new oc.Geom_Line(line);
      using curve = new oc.GeomAdaptor_Curve(lineGeometry);
      using axis = new oc.gp_Ax3(origin, zDirection, xDirection);
      using plane = new oc.gp_Pln(axis);
      using planeGeometry = new oc.Geom_Plane(plane);
      using surface = new oc.GeomAdaptor_Surface(planeGeometry);

      using uv = new oc.gp_XY(2, 0);
      using variables = new oc.math_VectorBase_double(uv);
      using residual = new oc.math_VectorBase_double(1, 2, 0);
      using jacobian = new oc.math_Matrix(1, 2, 1, 2, 0);
      using functionSet = new oc.ProjLib_PrjFunc(curve, 2, surface, 1);
      expect(functionSet.NbVariables()).toBe(2);
      expect(functionSet.NbEquations()).toBe(2);
      expect(functionSet.Value(variables, residual)).toBe(true);
      expect([residual.Value(1), residual.Value(2)]).toEqual([0, 0]);
      expect(functionSet.Derivatives(variables, jacobian)).toBe(true);
      expect([
        jacobian.Value(1, 1),
        jacobian.Value(1, 2),
        jacobian.Value(2, 1),
        jacobian.Value(2, 2),
      ]).toEqual([1, 0, 0, 1]);
      expect(functionSet.Values(variables, residual, jacobian)).toBe(true);
      using functionSolution = functionSet.Solution();
      expect([functionSolution.X(), functionSolution.Y()]).toEqual([2, 0]);

      using resolver = new oc.ProjLib_PrjResolve(curve, surface, 1);
      using tolerance = new oc.gp_Pnt2d(1e-9, 1e-9);
      using lower = new oc.gp_Pnt2d(-10, -10);
      using upper = new oc.gp_Pnt2d(10, 10);
      resolver.Perform(2, 0, 0, tolerance, lower, upper, 1e-12, true);
      expect(resolver.IsDone()).toBe(true);
      using resolverSolution = resolver.Solution();
      expect(resolverSolution.X()).toBeCloseTo(2, 9);
      expect(resolverSolution.Y()).toBeCloseTo(0, 9);
    });

    it('should smoke the contributed projection approximation controls', () => {
      const oc = variant.get() as OpenCascadeInstance;
      using origin = new oc.gp_Pnt(0, 0, 0);
      using xDirection = new oc.gp_Dir(1, 0, 0);
      using zDirection = new oc.gp_Dir(0, 0, 1);
      using line = new oc.gp_Lin(origin, xDirection);
      using lineGeometry = new oc.Geom_Line(line);
      using curve = new oc.GeomAdaptor_Curve(lineGeometry);
      using axis = new oc.gp_Ax3(origin, zDirection, xDirection);
      using plane = new oc.gp_Pln(axis);
      using planeGeometry = new oc.Geom_Plane(plane);
      using surface = new oc.GeomAdaptor_Surface(planeGeometry);

      using projected = new oc.ProjLib_CompProjectedCurve(
        surface,
        curve,
        1e-9,
        1e-9,
      );
      expect(projected.NbCurves()).toBeGreaterThanOrEqual(0);
      expect(projected.FirstParameter()).toBeLessThan(projected.LastParameter());
      expect(projected.GetTolerance()).toEqual({ TolU: 1e-9, TolV: 1e-9 });

      using approximation = new oc.ProjLib_ComputeApprox();
      approximation.SetTolerance(1e-5);
      approximation.SetDegree(2, 8);
      approximation.SetMaxSegments(32);
      expect(approximation.Tolerance()).toBeCloseTo(1e-5, 12);

      using polarApproximation = new oc.ProjLib_ComputeApproxOnPolarSurface();
      polarApproximation.SetTolerance(1e-5);
      polarApproximation.SetDegree(2, 8);
      polarApproximation.SetMaxSegments(32);
      polarApproximation.SetMaxDist(1);
      expect(polarApproximation.IsDone()).toBe(false);
    });
  });

  describe.skipIf(!variant.exists)('walking-line approximation constructors', () => {
    it('should construct and configure every contributed compute-line family', () => {
      const oc = variant.get() as OpenCascadeInstance;
      using brepBezier = new oc.BRepApprox_TheComputeLineBezierOfApprox();
      using brepLine = new oc.BRepApprox_TheComputeLineOfApprox();
      using geomBezier = new oc.GeomInt_TheComputeLineBezierOfWLApprox();
      using geomLine = new oc.GeomInt_TheComputeLineOfWLApprox();

      for (const calculator of [brepBezier, brepLine, geomBezier, geomLine]) {
        calculator.SetDegrees(2, 5);
        calculator.SetTolerances(1e-5, 1e-6);
        expect(typeof calculator.IsAllApproximated()).toBe('boolean');
        expect(typeof calculator.IsToleranceReached()).toBe('boolean');
      }

      brepLine.SetContinuity(2);
      geomLine.SetContinuity(2);
    });
  });
});
