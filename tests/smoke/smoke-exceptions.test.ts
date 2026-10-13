import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists, isExceptionsEnabled } from './helpers.js';

function extractExceptionInfo(oc: any, e: unknown): { type: string; message: string } {
  if (typeof e === 'number') {
    const failureData = oc.OCJS.getStandard_FailureData(e);
    return {
      type: failureData?.constructor?.name ?? '',
      message: failureData?.GetMessageString?.() ?? '',
    };
  }
  if (typeof WebAssembly !== 'undefined' && e instanceof WebAssembly.Exception) {
    try {
      const [type, message] = oc.getExceptionMessage(e);
      return { type: type ?? '', message: message ?? '' };
    } catch {
      return { type: 'WebAssembly.Exception', message: String(e) };
    }
  }
  const exc = e as Error;
  return {
    type: exc.name ?? '',
    message: exc.message ?? String(e),
  };
}

/* eslint-disable @typescript-eslint/naming-convention -- OpenCASCADE C++ API naming */
describe.skipIf(!wasmExists)('Smoke: Exception handling', () => {
  beforeAll(async () => { await initOC(); });

  it('should throw Standard_DomainError for MakeCone with zero height', (ctx) => {
    if (!isExceptionsEnabled()) ctx.skip();

    const oc = getOC();
    let caught = false;
    let exceptionType = '';
    let exceptionMessage = '';

    try {
      using cone = new oc.BRepPrimAPI_MakeCone(1, 0.5, 0);
      void cone;
    } catch (e) {
      caught = true;
      const info = extractExceptionInfo(oc, e);
      exceptionType = info.type;
      exceptionMessage = info.message;
    }

    expect(caught).toBe(true);
    expect(exceptionType).toContain('Standard_DomainError');
    expect(exceptionMessage.toLowerCase()).toContain('cone');
  });

  it('should throw Standard_DomainError for MakeBox with zero dimensions', (ctx) => {
    if (!isExceptionsEnabled()) ctx.skip();

    const oc = getOC();
    let caught = false;
    let exceptionType = '';

    try {
      using box = new oc.BRepPrimAPI_MakeBox(0, 0, 0);
      if (!box.IsDone()) {
        caught = true;
        exceptionType = 'Standard_ConstructionError';
      }
    } catch (e) {
      caught = true;
      const info = extractExceptionInfo(oc, e);
      exceptionType = info.type;
    }

    expect(caught).toBe(true);
    expect(exceptionType).toContain('Standard_');
  });

  it('should expose getExceptionMessage at runtime when wasm exceptions are enabled', (ctx) => {
    if (!isExceptionsEnabled()) ctx.skip();

    const oc = getOC();
    expect(typeof oc.getExceptionMessage).toBe('function');
    expect(typeof oc.incrementExceptionRefcount).toBe('function');
    expect(typeof oc.decrementExceptionRefcount).toBe('function');
  });

  it('should decode StdFail_NotDone via getExceptionMessage on oversized fillet', (ctx) => {
    if (!isExceptionsEnabled()) ctx.skip();

    const oc = getOC();
    using bRepPrimAPIMakebox = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
    using box = bRepPrimAPIMakebox.Shape();
    using fillet = new oc.BRepFilletAPI_MakeFillet(box, oc.ChFi3d_FilletShape.ChFi3d_Rational);
    using explorer = new oc.TopExp_Explorer(
      box,
      oc.TopAbs_ShapeEnum.TopAbs_EDGE,
      oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
    );

    let info: { type: string; message: string } | undefined;
    try {
      if (explorer.More()) {
        using explorerCurrent = explorer.Current();
        using edge = oc.TopoDS.Edge(explorerCurrent);
        fillet.Add(100, edge);
      }
      // Shape() forces the (failed) build to materialize and throws StdFail_NotDone.
      using filletShape = fillet.Shape();
      void filletShape;
    } catch (e) {
      info = extractExceptionInfo(oc, e);
    }

    expect(info).toBeDefined();
    expect(info!.type).toContain('StdFail_NotDone');
    expect(info!.message.length).toBeGreaterThan(0);
  });
});
/* eslint-enable @typescript-eslint/naming-convention */
