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

const close2d = (
  point: { X(): number; Y(): number },
  expected: readonly [number, number],
  precision = 9,
): void => {
  expect(point.X()).toBeCloseTo(expected[0], precision);
  expect(point.Y()).toBeCloseTo(expected[1], precision);
};

const sortedCenters = (
  solver: InstanceType<OpenCascadeInstance['GccAna_Circ2d2TanRad']>,
): [number, number, number][] => {
  const centers: [number, number, number][] = [];
  for (let index = 1; index <= solver.NbSolutions(); index += 1) {
    using circle = solver.ThisSolution(index);
    using center = circle.Location();
    centers.push([center.X(), center.Y(), circle.Radius()]);
  }
  return centers.sort(([ax, ay], [bx, by]) => ax - bx || ay - by);
};

const assertCircleSolutionTangencies = (
  oc: OpenCascadeInstance,
  solver: InstanceType<OpenCascadeInstance['GccAna_Circ2d2TanRad']>,
  expectedRadius: number,
): void => {
  expect(solver.IsDone()).toBe(true);
  expect(solver.NbSolutions()).toBeGreaterThan(0);
  for (let index = 1; index <= solver.NbSolutions(); index += 1) {
    using solution = solver.ThisSolution(index);
    expect(solution.Radius()).toBeCloseTo(expectedRadius, 9);
    using tangent1 = new oc.gp_Pnt2d();
    using tangent2 = new oc.gp_Pnt2d();
    const params1 = solver.Tangency1(index, 0, 0, tangent1);
    const params2 = solver.Tangency2(index, 0, 0, tangent2);
    expect(Number.isFinite(params1.ParSol)).toBe(true);
    expect(Number.isFinite(params2.ParSol)).toBe(true);
    expect(solution.Contains(tangent1, TOLERANCE * 10)).toBe(true);
    expect(solution.Contains(tangent2, TOLERANCE * 10)).toBe(true);
    const qualifiers = solver.WhichQualifier(index);
    expect(typeof qualifiers.Qualif1).toBe('string');
    expect(typeof qualifiers.Qualif2).toBe('string');
  }
};

describe.each(variants)('Smoke: FluidCAD math workflows ($name)', (variant) => {
  beforeAll(async () => {
    if (variant.exists) await variant.init();
  });

  describe.skipIf(!variant.exists)('GccAna tangent-circle workflows', () => {
    it('should solve the symmetric point-point and perpendicular line-line fixtures exactly', () => {
      const oc = variant.get() as OpenCascadeInstance;
      using left = new oc.gp_Pnt2d(-5, 0);
      using right = new oc.gp_Pnt2d(5, 0);
      using pointPoint = new oc.GccAna_Circ2d2TanRad(left, right, 13, TOLERANCE);
      expect(pointPoint.IsDone()).toBe(true);
      expect(sortedCenters(pointPoint)).toEqual([
        [0, -12, 13],
        [0, 12, 13],
      ]);

      using origin = new oc.gp_Pnt2d(0, 0);
      using xDirection = new oc.gp_Dir2d(1, 0);
      using yDirection = new oc.gp_Dir2d(0, 1);
      using xAxis = new oc.gp_Lin2d(origin, xDirection);
      using yAxis = new oc.gp_Lin2d(origin, yDirection);
      using qualifiedX = oc.GccEnt.Unqualified(xAxis);
      using qualifiedY = oc.GccEnt.Unqualified(yAxis);
      using lineLine = new oc.GccAna_Circ2d2TanRad(
        qualifiedX,
        qualifiedY,
        2,
        TOLERANCE,
      );
      expect(lineLine.IsDone()).toBe(true);
      expect(sortedCenters(lineLine)).toEqual([
        [-2, -2, 2],
        [-2, 2, 2],
        [2, -2, 2],
        [2, 2, 2],
      ]);
    });

    it('should exercise all six FluidCAD analytic constructor families', () => {
      const oc = variant.get() as OpenCascadeInstance;
      using origin = new oc.gp_Pnt2d(0, 0);
      using farPoint = new oc.gp_Pnt2d(10, 0);
      using upperPoint = new oc.gp_Pnt2d(0, 10);
      using xDirection = new oc.gp_Dir2d(1, 0);
      using yDirection = new oc.gp_Dir2d(0, 1);
      using xLine = new oc.gp_Lin2d(origin, xDirection);
      using yLine = new oc.gp_Lin2d(origin, yDirection);
      using verticalLinePoint = new oc.gp_Pnt2d(6, 0);
      using verticalLine = new oc.gp_Lin2d(verticalLinePoint, yDirection);
      using circleAxis = new oc.gp_Ax2d(origin, xDirection);
      using circle = new oc.gp_Circ2d(circleAxis, 2, true);
      using otherCenter = new oc.gp_Pnt2d(10, 0);
      using otherAxis = new oc.gp_Ax2d(otherCenter, xDirection);
      using otherCircle = new oc.gp_Circ2d(otherAxis, 2, true);
      using qualifiedCircle = oc.GccEnt.Unqualified(circle);
      using qualifiedOtherCircle = oc.GccEnt.Unqualified(otherCircle);
      using qualifiedX = oc.GccEnt.Unqualified(xLine);
      using qualifiedY = oc.GccEnt.Unqualified(yLine);
      using qualifiedVertical = oc.GccEnt.Unqualified(verticalLine);

      using circleCircle = new oc.GccAna_Circ2d2TanRad(
        qualifiedCircle,
        qualifiedOtherCircle,
        3,
        TOLERANCE,
      );
      using circleLine = new oc.GccAna_Circ2d2TanRad(
        qualifiedCircle,
        qualifiedVertical,
        2,
        TOLERANCE,
      );
      using circlePoint = new oc.GccAna_Circ2d2TanRad(
        qualifiedCircle,
        farPoint,
        4,
        TOLERANCE,
      );
      using linePoint = new oc.GccAna_Circ2d2TanRad(
        qualifiedX,
        upperPoint,
        5,
        TOLERANCE,
      );
      using lineLine = new oc.GccAna_Circ2d2TanRad(
        qualifiedX,
        qualifiedY,
        2,
        TOLERANCE,
      );
      using pointPoint = new oc.GccAna_Circ2d2TanRad(origin, farPoint, 5, TOLERANCE);

      for (const [solver, radius] of [
        [circleCircle, 3],
        [circleLine, 2],
        [circlePoint, 4],
        [linePoint, 5],
        [lineLine, 2],
        [pointPoint, 5],
      ] as const) {
        assertCircleSolutionTangencies(oc, solver, radius);
      }
    });
  });

  describe.skipIf(!variant.exists)('GccAna tangent-line workflows', () => {
    it('should solve point-point, circle-point, and all four symmetric circle-circle tangents', () => {
      const oc = variant.get() as OpenCascadeInstance;
      using left = new oc.gp_Pnt2d(-5, 0);
      using right = new oc.gp_Pnt2d(5, 0);
      using pointPoint = new oc.GccAna_Lin2d2Tan(left, right, TOLERANCE);
      expect(pointPoint.IsDone()).toBe(true);
      expect(pointPoint.NbSolutions()).toBe(1);
      using pointLine = pointPoint.ThisSolution(1);
      expect(pointLine.Contains(left, TOLERANCE)).toBe(true);
      expect(pointLine.Contains(right, TOLERANCE)).toBe(true);

      using direction = new oc.gp_Dir2d(1, 0);
      using leftAxis = new oc.gp_Ax2d(left, direction);
      using rightAxis = new oc.gp_Ax2d(right, direction);
      using leftCircle = new oc.gp_Circ2d(leftAxis, 2, true);
      using rightCircle = new oc.gp_Circ2d(rightAxis, 2, true);
      using qualifiedLeft = oc.GccEnt.Unqualified(leftCircle);
      using qualifiedRight = oc.GccEnt.Unqualified(rightCircle);
      using circlePoint = new oc.GccAna_Lin2d2Tan(qualifiedLeft, right, TOLERANCE);
      expect(circlePoint.IsDone()).toBe(true);
      expect(circlePoint.NbSolutions()).toBe(2);
      for (let index = 1; index <= circlePoint.NbSolutions(); index += 1) {
        using line = circlePoint.ThisSolution(index);
        expect(line.Distance(left)).toBeCloseTo(2, 9);
        expect(line.Contains(right, TOLERANCE)).toBe(true);
      }

      using circleCircle = new oc.GccAna_Lin2d2Tan(
        qualifiedLeft,
        qualifiedRight,
        TOLERANCE,
      );
      expect(circleCircle.IsDone()).toBe(true);
      expect(circleCircle.NbSolutions()).toBe(4);
      for (let index = 1; index <= circleCircle.NbSolutions(); index += 1) {
        using line = circleCircle.ThisSolution(index);
        expect(line.Distance(left)).toBeCloseTo(2, 9);
        expect(line.Distance(right)).toBeCloseTo(2, 9);
        using tangent1 = new oc.gp_Pnt2d();
        using tangent2 = new oc.gp_Pnt2d();
        circleCircle.Tangency1(index, 0, 0, tangent1);
        circleCircle.Tangency2(index, 0, 0, tangent2);
        expect(leftCircle.Contains(tangent1, TOLERANCE * 10)).toBe(true);
        expect(rightCircle.Contains(tangent2, TOLERANCE * 10)).toBe(true);
      }
    });
  });

  describe.skipIf(!variant.exists)('Geom2dGcc FluidCAD curve workflows', () => {
    it('should solve every curve/point and curve/curve facade overload', () => {
      const oc = variant.get() as OpenCascadeInstance;
      using direction = new oc.gp_Dir2d(1, 0);
      using leftCenter = new oc.gp_Pnt2d(-5, 0);
      using rightCenter = new oc.gp_Pnt2d(5, 0);
      using leftAxis = new oc.gp_Ax2d(leftCenter, direction);
      using rightAxis = new oc.gp_Ax2d(rightCenter, direction);
      using leftCircle = new oc.gp_Circ2d(leftAxis, 2, true);
      using rightCircle = new oc.gp_Circ2d(rightAxis, 2, true);
      using leftGeometry = new oc.Geom2d_Circle(leftCircle);
      using rightGeometry = new oc.Geom2d_Circle(rightCircle);
      using leftAdaptor = new oc.Geom2dAdaptor_Curve(leftGeometry);
      using rightAdaptor = new oc.Geom2dAdaptor_Curve(rightGeometry);
      using qualifiedLeft = new oc.Geom2dGcc_QualifiedCurve(
        leftAdaptor,
        oc.GccEnt_Position.GccEnt_unqualified,
      );
      using qualifiedRight = new oc.Geom2dGcc_QualifiedCurve(
        rightAdaptor,
        oc.GccEnt_Position.GccEnt_unqualified,
      );
      using point = new oc.gp_Pnt2d(5, 0);
      using geometryPoint = new oc.Geom2d_CartesianPoint(point);

      using curveCurveCircle = new oc.Geom2dGcc_Circ2d2TanRad(
        qualifiedLeft,
        qualifiedRight,
        3,
        TOLERANCE,
      );
      using curvePointCircle = new oc.Geom2dGcc_Circ2d2TanRad(
        qualifiedLeft,
        geometryPoint,
        4,
        TOLERANCE,
      );
      using qualifiedLeftCircle = oc.GccEnt.Unqualified(leftCircle);
      using qRightCurve = new oc.Geom2dGcc_QCurve(
        rightAdaptor,
        oc.GccEnt_Position.GccEnt_unqualified,
      );
      using curveCurveCircleGeo = new oc.Geom2dGcc_Circ2d2TanRadGeo(
        qualifiedLeftCircle,
        qRightCurve,
        3,
        TOLERANCE,
      );
      using otherGeometryPoint = new oc.Geom2d_CartesianPoint(leftCenter);
      using pointPointCircle = new oc.Geom2dGcc_Circ2d2TanRad(
        otherGeometryPoint,
        geometryPoint,
        5,
        TOLERANCE,
      );
      for (const solver of [
        curveCurveCircle,
        curvePointCircle,
        pointPointCircle,
        curveCurveCircleGeo,
      ]) {
        expect(solver.IsDone()).toBe(true);
        expect(solver.NbSolutions()).toBeGreaterThan(0);
        using solution = solver.ThisSolution(1);
        expect(solution.Radius()).toBeGreaterThan(0);
        using tangent1 = new oc.gp_Pnt2d();
        using tangent2 = new oc.gp_Pnt2d();
        solver.Tangency1(1, 0, 0, tangent1);
        solver.Tangency2(1, 0, 0, tangent2);
        expect(solution.Contains(tangent1, TOLERANCE * 10)).toBe(true);
        expect(solution.Contains(tangent2, TOLERANCE * 10)).toBe(true);
      }

      using curveCurve = new oc.Geom2dGcc_Lin2d2Tan(
        qualifiedLeft,
        qualifiedRight,
        TOLERANCE,
      );
      using curveCurveSeeded = new oc.Geom2dGcc_Lin2d2Tan(
        qualifiedLeft,
        qualifiedRight,
        TOLERANCE,
        0,
        0,
      );
      using curvePoint = new oc.Geom2dGcc_Lin2d2Tan(qualifiedLeft, point, TOLERANCE);
      using curvePointSeeded = new oc.Geom2dGcc_Lin2d2Tan(
        qualifiedLeft,
        point,
        TOLERANCE,
        0,
      );
      for (const solver of [curveCurve, curveCurveSeeded, curvePoint, curvePointSeeded]) {
        expect(solver.IsDone()).toBe(true);
        expect(solver.NbSolutions()).toBeGreaterThan(0);
        using line = solver.ThisSolution(1);
        using tangent1 = new oc.gp_Pnt2d();
        using tangent2 = new oc.gp_Pnt2d();
        solver.Tangency1(1, 0, 0, tangent1);
        solver.Tangency2(1, 0, 0, tangent2);
        expect(line.Contains(tangent1, TOLERANCE * 10)).toBe(true);
        expect(line.Contains(tangent2, TOLERANCE * 10)).toBe(true);
      }
    });
  });

  describe.skipIf(!variant.exists)('ProjLib.Project overload matrix', () => {
    it('should project all six plane primitives and preserve a rotated local frame', () => {
      const oc = variant.get() as OpenCascadeInstance;
      using origin = new oc.gp_Pnt(0, 0, 0);
      using z = new oc.gp_Dir(0, 0, 1);
      using x = new oc.gp_Dir(1, 0, 0);
      using axis3 = new oc.gp_Ax3(origin, z, x);
      using axis2 = new oc.gp_Ax2(origin, z, x);
      using plane = new oc.gp_Pln(axis3);
      using point = new oc.gp_Pnt(3, 4, 0);
      using line = new oc.gp_Lin(point, x);
      using circle = new oc.gp_Circ(axis2, 2);
      using ellipse = new oc.gp_Elips(axis2, 4, 2);
      using parabola = new oc.gp_Parab(axis2, 2);
      using hyperbola = new oc.gp_Hypr(axis2, 4, 2);
      using point2d = oc.ProjLib.Project(plane, point);
      using line2d = oc.ProjLib.Project(plane, line);
      using circle2d = oc.ProjLib.Project(plane, circle);
      using ellipse2d = oc.ProjLib.Project(plane, ellipse);
      using parabola2d = oc.ProjLib.Project(plane, parabola);
      using hyperbola2d = oc.ProjLib.Project(plane, hyperbola);
      close2d(point2d, [3, 4]);
      using lineLocation = line2d.Location();
      using lineDirection = line2d.Direction();
      close2d(lineLocation, [3, 4]);
      close2d(lineDirection, [1, 0]);
      using circleLocation = circle2d.Location();
      using ellipseLocation = ellipse2d.Location();
      using parabolaLocation = parabola2d.Location();
      using hyperbolaLocation = hyperbola2d.Location();
      close2d(circleLocation, [0, 0]);
      close2d(ellipseLocation, [0, 0]);
      close2d(parabolaLocation, [0, 0]);
      close2d(hyperbolaLocation, [0, 0]);
      expect(circle2d.Radius()).toBeCloseTo(2, 12);
      expect([ellipse2d.MajorRadius(), ellipse2d.MinorRadius()]).toEqual([4, 2]);
      expect(parabola2d.Focal()).toBeCloseTo(2, 12);
      expect([hyperbola2d.MajorRadius(), hyperbola2d.MinorRadius()]).toEqual([4, 2]);

      using translatedOrigin = new oc.gp_Pnt(10, 20, 30);
      using localX = new oc.gp_Dir(0, 1, 0);
      using rotatedAxis = new oc.gp_Ax3(translatedOrigin, z, localX);
      using rotatedPlane = new oc.gp_Pln(rotatedAxis);
      using translatedPoint = new oc.gp_Pnt(10, 23, 30);
      using translatedPoint2d = oc.ProjLib.Project(rotatedPlane, translatedPoint);
      close2d(translatedPoint2d, [3, 0]);
    });

    it('should project point/line/circle overloads on every analytic curved surface', () => {
      const oc = variant.get() as OpenCascadeInstance;
      using origin = new oc.gp_Pnt(0, 0, 0);
      using z = new oc.gp_Dir(0, 0, 1);
      using x = new oc.gp_Dir(1, 0, 0);
      using axis3 = new oc.gp_Ax3(origin, z, x);

      using cylinder = new oc.gp_Cylinder(axis3, 5);
      using cylinderPoint = new oc.gp_Pnt(0, 5, 7);
      using cylinderLine = new oc.gp_Lin(cylinderPoint, z);
      using cylinderCircleOrigin = new oc.gp_Pnt(0, 0, 7);
      using cylinderCircleAxis = new oc.gp_Ax2(cylinderCircleOrigin, z, x);
      using cylinderCircle = new oc.gp_Circ(cylinderCircleAxis, 5);
      using cylinderPoint2d = oc.ProjLib.Project(cylinder, cylinderPoint);
      using cylinderLine2d = oc.ProjLib.Project(cylinder, cylinderLine);
      using cylinderCircle2d = oc.ProjLib.Project(cylinder, cylinderCircle);
      close2d(cylinderPoint2d, [Math.PI / 2, 7]);
      using cylinderLineLocation = cylinderLine2d.Location();
      using cylinderLineDirection = cylinderLine2d.Direction();
      using cylinderCircleLocation = cylinderCircle2d.Location();
      using cylinderCircleDirection = cylinderCircle2d.Direction();
      close2d(cylinderLineLocation, [Math.PI / 2, 7]);
      close2d(cylinderLineDirection, [0, 1]);
      close2d(cylinderCircleLocation, [0, 7]);
      close2d(cylinderCircleDirection, [1, 0]);

      using cone = new oc.gp_Cone(axis3, Math.PI / 4, 2);
      using conePoint = new oc.gp_Pnt(0, 5, 3);
      using coneDirection = new oc.gp_Dir(0, 1, 1);
      using coneLine = new oc.gp_Lin(conePoint, coneDirection);
      using coneCircleOrigin = new oc.gp_Pnt(0, 0, 3);
      using coneCircleAxis = new oc.gp_Ax2(coneCircleOrigin, z, x);
      using coneCircle = new oc.gp_Circ(coneCircleAxis, 5);
      using conePoint2d = oc.ProjLib.Project(cone, conePoint);
      using coneLine2d = oc.ProjLib.Project(cone, coneLine);
      using coneCircle2d = oc.ProjLib.Project(cone, coneCircle);
      close2d(conePoint2d, [Math.PI / 2, 3 * Math.SQRT2]);
      using coneLineLocation = coneLine2d.Location();
      using coneLineDirection2d = coneLine2d.Direction();
      using coneCircleLocation = coneCircle2d.Location();
      using coneCircleDirection = coneCircle2d.Direction();
      close2d(coneLineLocation, [Math.PI / 2, 3 * Math.SQRT2]);
      close2d(coneLineDirection2d, [0, 1]);
      close2d(coneCircleLocation, [0, 3 * Math.SQRT2]);
      close2d(coneCircleDirection, [1, 0]);

      using baseAxis = new oc.gp_Ax2(origin, z, x);
      using sphere = new oc.gp_Sphere(axis3, 5);
      using spherePoint = new oc.gp_Pnt(0, 5, 0);
      using sphereCircle = new oc.gp_Circ(baseAxis, 5);
      using spherePoint2d = oc.ProjLib.Project(sphere, spherePoint);
      using sphereCircle2d = oc.ProjLib.Project(sphere, sphereCircle);
      close2d(spherePoint2d, [Math.PI / 2, 0]);
      using sphereCircleLocation = sphereCircle2d.Location();
      using sphereCircleDirection = sphereCircle2d.Direction();
      close2d(sphereCircleLocation, [0, 0]);
      close2d(sphereCircleDirection, [1, 0]);

      using torus = new oc.gp_Torus(axis3, 5, 2);
      using torusPoint = new oc.gp_Pnt(0, 7, 0);
      using torusCircle = new oc.gp_Circ(baseAxis, 7);
      using torusPoint2d = oc.ProjLib.Project(torus, torusPoint);
      using torusCircle2d = oc.ProjLib.Project(torus, torusCircle);
      close2d(torusPoint2d, [Math.PI / 2, 0]);
      using torusCircleLocation = torusCircle2d.Location();
      using torusCircleDirection = torusCircle2d.Direction();
      close2d(torusCircleLocation, [0, 0]);
      close2d(torusCircleDirection, [1, 0]);
    });
  });
});
