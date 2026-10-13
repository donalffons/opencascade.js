// POC 2: replicate the actual test scenarios that fail.
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import init from '../../build-configs/opencascade_single.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BUILD_DIR = path.resolve(__dirname, '../../build-configs');
const oc = await init({ locateFile: (f) => path.join(BUILD_DIR, f) });

console.log('=== POC A: double-dispose idempotency ===');
{
  const p0 = new oc.gp_Pnt(0, 0, 0);
  const p1 = new oc.gp_Pnt(10, 0, 0);
  const seg = new oc.GC_MakeSegment(p0, p1);
  const curve = seg.Value();
  const inP = new oc.gp_Pnt();
  const inV = new oc.gp_Vec();
  const result = curve.D1(0.5, inP, inV);
  result[Symbol.dispose]();
  try {
    result[Symbol.dispose]();
    console.log('  second dispose: OK (idempotent)');
  } catch (e) {
    console.log('  second dispose: THREW:', e.message);
  }
  // cleanup
  for (const o of [inV, inP, curve, seg, p1, p0]) {
    try { o.delete(); } catch {}
  }
}

console.log('\n=== POC B: using-scope auto-dispose after manual dispose ===');
{
  const block = () => {
    const p0 = new oc.gp_Pnt(0, 0, 0);
    const p1 = new oc.gp_Pnt(10, 0, 0);
    const seg = new oc.GC_MakeSegment(p0, p1);
    const curve = seg.Value();
    {
      using inP = new oc.gp_Pnt();
      using inV = new oc.gp_Vec();
      using result = curve.D1(0.5, inP, inV);
      result[Symbol.dispose]();
      // scope exit will call result[Symbol.dispose]() AGAIN, then inV.dispose(), then inP.dispose()
    }
    for (const o of [curve, seg, p1, p0]) try { o.delete(); } catch {}
  };
  try {
    block();
    console.log('  using-scope path: OK');
  } catch (e) {
    console.log('  using-scope path: THREW:', e.message);
  }
}

console.log('\n=== POC C: only using, no manual dispose ===');
{
  const block = () => {
    const p0 = new oc.gp_Pnt(0, 0, 0);
    const p1 = new oc.gp_Pnt(10, 0, 0);
    const seg = new oc.GC_MakeSegment(p0, p1);
    const curve = seg.Value();
    {
      using inP = new oc.gp_Pnt();
      using inV = new oc.gp_Vec();
      using result = curve.D1(0.5, inP, inV);
      // no manual dispose, just scope exit
    }
    for (const o of [curve, seg, p1, p0]) try { o.delete(); } catch {}
  };
  try {
    block();
    console.log('  using-scope path: OK');
  } catch (e) {
    console.log('  using-scope path: THREW:', e.message);
  }
}

console.log('\n=== done ===');
