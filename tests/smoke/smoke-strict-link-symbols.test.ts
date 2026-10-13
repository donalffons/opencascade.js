import { beforeAll, describe, expect, it } from 'vitest';

import { getOC, initOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: restored strict-link symbols', () => {
  beforeAll(async () => {
    await initOC();
  });

  it('calls the restored TCollection_AsciiString static overload', () => {
    const oc = getOC();
    using value = new oc.TCollection_AsciiString('libcascade');

    expect(oc.TCollection_AsciiString.IsEqual(value, 'libcascade')).toBe(true);
    expect(oc.TCollection_AsciiString.IsEqual(value, 'other')).toBe(false);
  });

  it('calls the restored BRepBlend_CSWalking status methods', () => {
    const oc = getOC();
    using origin = new oc.gp_Pnt(0, 0, 0);
    using xDirection = new oc.gp_Dir(1, 0, 0);
    using zDirection = new oc.gp_Dir(0, 0, 1);
    using line = new oc.Geom_Line(origin, xDirection);
    using plane = new oc.Geom_Plane(origin, zDirection);
    using curve = new oc.GeomAdaptor_Curve(line);
    using surface = new oc.GeomAdaptor_Surface(plane);
    using domain = new oc.BRepTopAdaptor_TopolTool();
    using walking = new oc.BRepBlend_CSWalking(curve, surface, domain);

    expect(walking.IsDone()).toBe(false);
    let threw = false;
    try {
      using lineResult = walking.Line();
      void lineResult;
    } catch {
      threw = true;
    }
    expect(threw).toBe(true);
  });
});
