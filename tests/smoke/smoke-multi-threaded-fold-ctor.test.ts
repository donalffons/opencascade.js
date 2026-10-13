/**
 * Verifies the multi-threaded module registers folded constructors and constructs
 * `GeomAPI_PointsToBSpline` through both reduced and full argument forms.
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOCMulti, getOCMulti, multiWasmExists } from './helpers.js';

const sabAvailable = typeof SharedArrayBuffer !== 'undefined';

function buildPoints(oc: ReturnType<typeof getOCMulti>): InstanceType<ReturnType<typeof getOCMulti>['NCollection_Array1_gp_Pnt']> {
  const points = new oc.NCollection_Array1_gp_Pnt(1, 5);
  const coords: readonly [number, number, number][] = [
    [0, 0, 0],
    [1, 2, 0],
    [2, -1, 0],
    [3, 3, 0],
    [4, 0, 0],
  ];
  for (let i = 0; i < coords.length; i++) {
    using pt = new oc.gp_Pnt(coords[i]![0], coords[i]![1], coords[i]![2]);
    points.SetValue(i + 1, pt);
  }
  return points;
}

describe.skipIf(!multiWasmExists)('Smoke: multi-threaded fold-path ctor registration', () => {
  beforeAll(async () => {
    // Module init runs the runtime embind registration (EVAL_CTORS dropped on
    // the MT build). A regressed duplicate same-arity val-ctor registration
    // for a fold-path class would throw here.
    await initOCMulti();
  });

  it('the multi module initializes — runtime embind registration of folded ctors succeeds', () => {
    const oc = getOCMulti();
    expect(typeof oc.GeomAPI_PointsToBSpline).toBe('function');
  });

  it('constructs GeomAPI_PointsToBSpline via the folded smaller ctor (Points only)', () => {
    const oc = getOCMulti();
    using points = buildPoints(oc);
    using approx = new oc.GeomAPI_PointsToBSpline(points);
    expect(approx.IsDone()).toBe(true);
    // Curve() returns the dereferenced Geom_BSplineCurve; a real built curve
    // reports a positive degree.
    using curve = approx.Curve();
    expect(curve.Degree()).toBeGreaterThanOrEqual(1);
  });

  it('constructs GeomAPI_PointsToBSpline via the merged same-arity primary chain (Points, DegMin, DegMax, Continuity, Tol3D)', () => {
    const oc = getOCMulti();
    using points = buildPoints(oc);
    using approx = new oc.GeomAPI_PointsToBSpline(points, 3, 8, oc.GeomAbs_Shape.GeomAbs_C2, 1.0e-3);
    expect(approx.IsDone()).toBe(true);
    using curve = approx.Curve();
    expect(curve.Degree()).toBeGreaterThanOrEqual(3);
  });

  it.skipIf(!sabAvailable)(
    'fold-path ctor still constructs after an explicit pthread pool spin-up',
    () => {
      const oc = getOCMulti();
      using pool = oc.OSD_ThreadPool.DefaultPool(-1);
      expect(pool.NbThreads()).toBeGreaterThan(1);

      using points = buildPoints(oc);
      using approx = new oc.GeomAPI_PointsToBSpline(points);
      expect(approx.IsDone()).toBe(true);
      using curve = approx.Curve();
      expect(curve.Degree()).toBeGreaterThanOrEqual(1);
    },
    60_000,
  );
});
