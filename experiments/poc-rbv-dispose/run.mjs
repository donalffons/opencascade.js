// POC: investigate Input-Passthrough RBV dispose semantics.
// Hypothesis: when a class-type arg is passed by value to the C++ lambda and
// stored into val::object(), Embind's val::set may share the same C++ pointer
// as the JS-passed input (NOT a copy), so disposing the container deletes the
// JS-side variable's underlying object.
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import init from '../../build-configs/opencascade_single.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BUILD_DIR = path.resolve(__dirname, '../../build-configs');
const oc = await init({ locateFile: (f) => path.join(BUILD_DIR, f) });

console.log('=== POC 1: pointer identity between JS input and container output ===');
const p0 = new oc.gp_Pnt(0, 0, 0);
const p1 = new oc.gp_Pnt(10, 0, 0);
const seg = new oc.GC_MakeSegment(p0, p1);
const curve = seg.Value();
const inP = new oc.gp_Pnt();
const inV = new oc.gp_Vec();
console.log('  inP.$$.ptr =', inP.$$.ptr, ' inV.$$.ptr =', inV.$$.ptr);
const result = curve.D1(0.5, inP, inV);
console.log('  result.P.$$.ptr =', result.P?.$$?.ptr, ' same as inP? ', result.P?.$$?.ptr === inP.$$.ptr);
console.log('  result.V1.$$.ptr =', result.V1?.$$?.ptr, ' same as inV? ', result.V1?.$$?.ptr === inV.$$.ptr);
console.log('  result keys =', Object.keys(result));

console.log('=== POC 2: read modified values via result ===');
console.log('  result.P.X() =', result.P?.X(), 'Y =', result.P?.Y(), 'Z =', result.P?.Z());
console.log('  inP.X()      =', inP.X(), 'Y =', inP.Y(), 'Z =', inP.Z());

console.log('=== POC 3: dispose container, then check inP ===');
result[Symbol.dispose]();
try {
  console.log('  inP.X() after dispose =', inP.X());
} catch (e) {
  console.log('  inP.X() THREW:', e.message);
}

console.log('=== POC 4: manual delete chain ===');
for (const [name, obj] of [['p0', p0], ['p1', p1], ['seg', seg], ['curve', curve], ['inP', inP], ['inV', inV]]) {
  try { obj.delete(); console.log('  ' + name + '.delete OK'); }
  catch (e) { console.log('  ' + name + '.delete threw:', e.message); }
}

console.log('=== done ===');
