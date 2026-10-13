import type { OpenCascadeInstance, TopoDS_Shape } from 'libcascade';

export type ShapeKind = 'box' | 'sphere' | 'cylinder';

export interface ShapeOptions {
  kind: ShapeKind;
  size: number;
  radius: number;
  height: number;
}

/**
 * Build one of the canonical primitive shapes. The caller owns the
 * returned `TopoDS_Shape` — use `using` at the call site to release it
 * deterministically. Every intermediate embind handle inside this
 * function is bound to `using` so the WASM heap does not leak when this
 * routine runs in a long-lived CLI loop.
 */
export function buildShape(oc: OpenCascadeInstance, opts: ShapeOptions): TopoDS_Shape {
  if (opts.kind === 'box') {
    using maker = new oc.BRepPrimAPI_MakeBox(opts.size, opts.size, opts.size);
    return maker.Shape();
  }
  if (opts.kind === 'sphere') {
    using maker = new oc.BRepPrimAPI_MakeSphere(opts.radius);
    return maker.Shape();
  }
  using maker = new oc.BRepPrimAPI_MakeCylinder(opts.radius, opts.height);
  return maker.Shape();
}
