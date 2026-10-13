#!/usr/bin/env node
/**
 * Load Emscripten `MODULARIZE` + `EXPORT_ES6` output for Docker smoke tests.
 * Dynamic import supports pthread builds that reject synchronous `require()`.
 */
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const jsPath = process.argv[2];
const mode = process.argv[3] ?? 'full';
if (!jsPath) {
  console.error('usage: docker-js-smoke.mjs <path/to/artifact.js> [full|simple]');
  process.exit(2);
}
if (!['full', 'simple'].includes(mode)) {
  console.error(`unknown smoke mode: ${mode}`);
  process.exit(2);
}

const absJs = path.resolve(jsPath);
const outDir = path.dirname(absJs);

let oc;
const disposables = [];

try {
  const mod = await import(pathToFileURL(absJs).href);
  const init = mod.default ?? mod;
  oc = await init({
    locateFile: (file) => path.join(outDir, file),
  });
  if (!oc) throw new Error('module init returned falsy');

  if (mode === 'simple') {
    const shape = new oc.TopoDS_Shape();
    disposables.push(shape);
    if (!shape.IsNull()) throw new Error('default TopoDS_Shape should be null');
    if (oc.Test.foo() !== 123) throw new Error('Test.foo() did not return 123');
    if (oc.TopoDS_Face !== undefined) {
      throw new Error('unlisted TopoDS_Face leaked into the trimmed build');
    }
    console.log('  PASS: minimal custom binding and symbol filtering succeeded.');
  } else {
    const p = new oc.gp_Pnt(1, 2, 3);
    const q = new oc.gp_Pnt(4, 5, 6);
    const edge = new oc.BRepBuilderAPI_MakeEdge(p, q);
    disposables.push(p, q, edge);
    if (p.X() !== 1 || p.Y() !== 2 || p.Z() !== 3) {
      throw new Error(`gp_Pnt round-trip failed: (${p.X()}, ${p.Y()}, ${p.Z()})`);
    }
    if (!edge.IsDone()) {
      throw new Error('BRepBuilderAPI_MakeEdge.IsDone() returned false');
    }
    console.log('  PASS: gp_Pnt + BRepBuilderAPI_MakeEdge round-trip succeeded.');
  }
} catch (err) {
  console.error('  FAIL:', err?.stack || err);
  process.exitCode = 1;
} finally {
  for (const value of disposables.reverse()) value.delete();
  oc?.PThread?.terminateAllThreads?.();
}
