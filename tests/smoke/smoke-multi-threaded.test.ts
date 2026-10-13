import { describe, it, expect } from 'vitest';
import { fileURLToPath } from 'node:url';
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import initMulti from 'libcascade/multi';
import { initOCMulti, multiWasmExists } from './helpers.js';

const sabAvailable = typeof SharedArrayBuffer !== 'undefined';

describe('multi-threaded package subpath', () => {
  it.skipIf(!multiWasmExists)(
    'should boot via libcascade/multi and expose a thread pool with more than one worker',
    async () => {
      const wasmUrl = import.meta.resolve('libcascade/multi/wasm');
      const wasmPath = fileURLToPath(wasmUrl);
      if (!existsSync(wasmPath)) return;

      const WASM_DIR = dirname(wasmPath);
      const oc = await initMulti({ locateFile: (file: string) => join(WASM_DIR, file) });

      expect(typeof oc.BRepPrimAPI_MakeBox).toBe('function');
      expect(typeof oc.OSD_ThreadPool?.DefaultPool).toBe('function');

      using pool = oc.OSD_ThreadPool.DefaultPool(-1);
      expect(pool.NbThreads()).toBeGreaterThan(1);
    },
    60_000,
  );

  it.skipIf(!sabAvailable || !multiWasmExists)(
    'should run a parallel boolean fuse after global parallel activation',
    async () => {
      const oc = await initOCMulti();

      oc.BOPAlgo_Options.SetParallelMode(true);
      oc.BRepMesh_IncrementalMesh.SetParallelDefault(true);
      using pool = oc.OSD_ThreadPool.DefaultPool(-1);

      using boxA = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
      using boxB = new oc.BRepPrimAPI_MakeBox(5, 5, 5);
      using shapeA = boxA.Shape();
      using shapeB = boxB.Shape();
      using fuse = new oc.BRepAlgoAPI_Fuse(shapeA, shapeB);
      using progress = new oc.Message_ProgressRange();
      fuse.Build(progress);

      expect(fuse.IsDone()).toBe(true);
      using shape = fuse.Shape();
      expect(shape.IsNull()).toBe(false);
    },
    60_000,
  );
});
