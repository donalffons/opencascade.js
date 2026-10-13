/**
 * Verifies `BRepOffsetAPI_ThruSections.Build` accepts its omitted default progress range,
 * accepts an explicit range, and produces valid loft shapes through explicit and implicit builds.
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: BRepOffsetAPI_ThruSections.Build() arg trap', () => {
  beforeAll(async () => { await initOC(); });

  /**
   * The transcript pattern: model called `loft.Build()` with no argument,
   * received `TypeError: Cannot read properties of undefined (reading 'Zc')`,
   * and proceeded to chase six different memory-management hypotheses.
   *
   * This test asserts the call succeeds — locking in the FAILURE so the bug
   * is captured in the test suite. When the binding is fixed (defaulted
   * ProgressRange, or a developer-facing error), this assertion flips to
   * green and the regression is closed.
   */
  it('FAILING REPRO — Build() with no argument should not throw a minified TypeError', () => {
    const oc = getOC();

    // Two rectangle sections at different X positions — minimum viable loft.
    using p0a = new oc.gp_Pnt(0, -50, -20);
    using p1a = new oc.gp_Pnt(0,  50, -20);
    using p2a = new oc.gp_Pnt(0,  50,  20);
    using p3a = new oc.gp_Pnt(0, -50,  20);
    using polyA = new oc.BRepBuilderAPI_MakePolygon(p0a, p1a, p2a, p3a, true);
    using wireA = polyA.Wire();

    using p0b = new oc.gp_Pnt(200, -100, -30);
    using p1b = new oc.gp_Pnt(200,  100, -30);
    using p2b = new oc.gp_Pnt(200,  100,  30);
    using p3b = new oc.gp_Pnt(200, -100,  30);
    using polyB = new oc.BRepBuilderAPI_MakePolygon(p0b, p1b, p2b, p3b, true);
    using wireB = polyB.Wire();

    using loft = new oc.BRepOffsetAPI_ThruSections(true, false, 1e-6);
    loft.AddWire(wireA);
    loft.AddWire(wireB);
    loft.CheckCompatibility(false);

    // The repro call. The rebuilt .d.ts now types the progress arg as
    // optional — `Build(theRange?: Message_ProgressRange): void` — so
    // `loft.Build()` is TYPE-valid (the arg-trap's type side is resolved;
    // formerly this needed a @ts-expect-error against a required-arg
    // signature). The remaining pin is purely RUNTIME: pre-fix the embind
    // wrapper throws the minified `Cannot read properties of undefined
    // (reading 'Zc')` TypeError on omission. This assertion flips green
    // once the binding materialises the defaulted ProgressRange.
    expect(() => loft.Build()).not.toThrow();

    using shape = loft.Shape();
    expect(shape.IsNull()).toBe(false);
  });

  /**
   * Positive control 1: the documented usage with an explicit
   * `Message_ProgressRange` works exactly as the .d.ts signature implies.
   */
  it('PASSING — Build(progressRange) with explicit Message_ProgressRange', () => {
    const oc = getOC();

    using p0a = new oc.gp_Pnt(0, -50, -20);
    using p1a = new oc.gp_Pnt(0,  50, -20);
    using p2a = new oc.gp_Pnt(0,  50,  20);
    using p3a = new oc.gp_Pnt(0, -50,  20);
    using polyA = new oc.BRepBuilderAPI_MakePolygon(p0a, p1a, p2a, p3a, true);
    using wireA = polyA.Wire();

    using p0b = new oc.gp_Pnt(200, -100, -30);
    using p1b = new oc.gp_Pnt(200,  100, -30);
    using p2b = new oc.gp_Pnt(200,  100,  30);
    using p3b = new oc.gp_Pnt(200, -100,  30);
    using polyB = new oc.BRepBuilderAPI_MakePolygon(p0b, p1b, p2b, p3b, true);
    using wireB = polyB.Wire();

    using loft = new oc.BRepOffsetAPI_ThruSections(true, false, 1e-6);
    loft.AddWire(wireA);
    loft.AddWire(wireB);
    loft.CheckCompatibility(false);

    using progress = new oc.Message_ProgressRange();
    expect(() => loft.Build(progress)).not.toThrow();

    using shape = loft.Shape();
    expect(shape.IsNull()).toBe(false);
  });

  /**
   * Positive control 2: skipping the explicit `Build()` entirely and going
   * straight to `Shape()` works because OCCT's
   * `BRepBuilderAPI_MakeShape::Shape()` invokes `Build()` internally with
   * its own ProgressRange. This is the path used by every other smoke test
   * (e.g. `smoke-sweep-loft.test.ts`) and is the recommended workaround for
   * consumers until the explicit `Build()` arg trap is fixed.
   */
  it('PASSING — Shape() without explicit Build() implicitly builds', () => {
    const oc = getOC();

    using p0a = new oc.gp_Pnt(0, -50, -20);
    using p1a = new oc.gp_Pnt(0,  50, -20);
    using p2a = new oc.gp_Pnt(0,  50,  20);
    using p3a = new oc.gp_Pnt(0, -50,  20);
    using polyA = new oc.BRepBuilderAPI_MakePolygon(p0a, p1a, p2a, p3a, true);
    using wireA = polyA.Wire();

    using p0b = new oc.gp_Pnt(200, -100, -30);
    using p1b = new oc.gp_Pnt(200,  100, -30);
    using p2b = new oc.gp_Pnt(200,  100,  30);
    using p3b = new oc.gp_Pnt(200, -100,  30);
    using polyB = new oc.BRepBuilderAPI_MakePolygon(p0b, p1b, p2b, p3b, true);
    using wireB = polyB.Wire();

    using loft = new oc.BRepOffsetAPI_ThruSections(true, false, 1e-6);
    loft.AddWire(wireA);
    loft.AddWire(wireB);
    loft.CheckCompatibility(false);

    // No explicit Build() call.
    using shape = loft.Shape();
    expect(shape.IsNull()).toBe(false);
  });

  /**
   * Positive control 3: confirms that 3+ sections work fine with a proper
   * `Build(progress)` — the agent's transcript blamed "table index out of
   * bounds" on the section count, but that was a downstream symptom of a
   * different earlier corruption (a degenerate `GeomAPI_Interpolate` call
   * that poisoned the WASM instance for every subsequent test).
   */
  it('PASSING — 7-section straight-edge loft with explicit progressRange', () => {
    const oc = getOC();

    const stations: Array<[number, number, number]> = [
      [   0,  60,  30],
      [ 200,  90,  45],
      [ 500, 120,  60],
      [ 900, 140,  70],
      [1300, 130,  65],
      [1700, 110,  55],
      [2000,  80,  40],
    ];

    // Per-station geometry is transient: `BRepOffsetAPI_ThruSections.AddWire`
    // copies the TopoDS_Wire into its internal section list, so the JS
    // wrappers can be freed at each iteration's scope exit. This mirrors the
    // established loop pattern in `smoke-sweep-loft.test.ts` — `using` for
    // every disposable, no manual try/finally.
    using loft = new oc.BRepOffsetAPI_ThruSections(true, false, 1e-6);
    for (const [x, hw, hh] of stations) {
      using p0 = new oc.gp_Pnt(x, -hw, -hh);
      using p1 = new oc.gp_Pnt(x,  hw, -hh);
      using p2 = new oc.gp_Pnt(x,  hw,  hh);
      using p3 = new oc.gp_Pnt(x, -hw,  hh);
      using poly = new oc.BRepBuilderAPI_MakePolygon(p0, p1, p2, p3, true);
      using wire = poly.Wire();
      loft.AddWire(wire);
    }
    loft.CheckCompatibility(true);

    using progress = new oc.Message_ProgressRange();
    loft.Build(progress);

    using shape = loft.Shape();
    expect(shape.IsNull()).toBe(false);
  });
});
