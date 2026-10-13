import * as fs from 'node:fs';
import * as path from 'node:path';
import type { OpenCascadeInstance } from '../../dist/opencascade_single.js';
import type { OpenCascadeInstance as OpenCascadeInstanceMulti } from '../../dist/opencascade_multi.js';
import init from '../../dist/opencascade_single.js';
import initMulti from '../../dist/opencascade_multi.js';

const DIST_DIR = path.resolve(import.meta.dirname, '../../dist');
const WASM_PATH = path.join(DIST_DIR, 'opencascade_single.wasm');
const WASM_MULTI_PATH = path.join(DIST_DIR, 'opencascade_multi.wasm');

export const wasmExists = fs.existsSync(WASM_PATH);
export const multiWasmExists = fs.existsSync(WASM_MULTI_PATH);

let _oc: OpenCascadeInstance | undefined;
let _ocMulti: OpenCascadeInstanceMulti | undefined;

/**
 * Initializes the shared OpenCASCADE WASM module.
 * Must be called once (typically in beforeAll) before using any OC bindings.
 * Safe to call multiple times -- subsequent calls are no-ops.
 * Returns the OpenCascadeInstance with all bindings.
 */
export async function initOC(): Promise<OpenCascadeInstance> {
  if (!_oc) {
    _oc = await init({
      locateFile: (filename: string) => path.join(DIST_DIR, filename),
    });
  }
  return _oc;
}

export function getOC(): OpenCascadeInstance {
  if (!_oc) throw new Error('Call initOC() before getOC()');
  return _oc;
}

/**
 * Initializes the multi-threaded OpenCASCADE WASM module from `dist/`.
 * Uses the same locateFile pattern as the `libcascade/multi/wasm`
 * subpath export. Safe to call multiple times.
 */
export async function initOCMulti(): Promise<OpenCascadeInstanceMulti> {
  if (!_ocMulti) {
    if (!multiWasmExists) {
      throw new Error('dist/opencascade_multi.wasm not found — build the MT binary first');
    }
    _ocMulti = await initMulti({
      locateFile: (filename: string) => path.join(DIST_DIR, filename),
    });
  }
  return _ocMulti;
}

export function getOCMulti(): OpenCascadeInstanceMulti {
  if (!_ocMulti) throw new Error('Call initOCMulti() before getOCMulti()');
  return _ocMulti;
}

/**
 * Whether the loaded WASM build has exception handling enabled.
 * Uses the OCJS.exceptionsEnabled() method which checks the
 * OCJS_EXCEPTIONS compile-time macro.
 */
export function isExceptionsEnabled(): boolean {
  if (!_oc) return false;
  return _oc.OCJS.exceptionsEnabled();
}

/**
 * Build a BRepGraph populated from a default `BRepPrimAPI_MakeBox` so the
 * BRepGraph smoke groups don't repeat the box+ingest setup.
 *
 * Lifetime — the graph is returned to the caller; wrap it in `using` at
 * the call site so the test's natural scope cleans up. The intermediate
 * `MakeBox` and `Shape` are disposed inside this helper since callers
 * never need them again after `Add` has captured the topology.
 */
export function buildBoxGraph(
  size: { dx: number; dy: number; dz: number } = { dx: 10, dy: 10, dz: 10 },
): InstanceType<OpenCascadeInstance['BRepGraph']> {
  const oc = getOC();
  const graph = new oc.BRepGraph();
  try {
    using box = new oc.BRepPrimAPI_MakeBox(size.dx, size.dy, size.dz);
    using shape = box.Shape();
    using shapes = graph.Shapes();
    using addResult = shapes.Add(shape);
    if (!addResult.IsOk()) {
      throw new Error('BRepGraph shape ingestion failed');
    }
    return graph;
  } catch (error) {
    graph.delete();
    throw error;
  }
}
