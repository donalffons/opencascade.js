/**
 * Fixture: the drift case. Neither symbol below is in
 * `test/fixture/libcascade.config.ts`, so `libcascade check` must exit 1 and
 * name both — the failure class that would otherwise surface as a runtime
 * `BindingError` on whichever code path first touches them.
 */
declare const oc: any;

// Bare type-only reference: no `oc.` prefix, so only the token match sees it.
import type { TopoDS_Wire } from 'demo-occt';

export const fillet = (wire: TopoDS_Wire): unknown => {
  const api = new oc.ChFi2d_FilletAPI();
  api.Init(wire);
  return api;
};
