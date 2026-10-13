// Quick correctness check: confirm each variant loads + dispatch routes correctly.
import createBaseline from './baseline.mjs';
import createPatched  from './patched.mjs';
import createA2 from './patched-a-n2.mjs';
import createA4 from './patched-a-n4.mjs';
import createA6 from './patched-a-n6.mjs';
import createA8 from './patched-a-n8.mjs';

const b = await createBaseline();
const p = await createPatched();
console.log('baseline & patched corpus-B loaded');
const lin = new b.gp_Lin(1); const cir = new b.gp_Circ(2);
console.log('  baseline makeEdge_FromLin (lin).routed =', b.makeEdge_FromLin(lin).routed, '(want 1)');
console.log('  patched  makeEdge_FromLin (lin).routed =', p.makeEdge_FromLin(new p.gp_Lin(1)).routed, '(want 1)');
console.log('  baseline makeEdge_FromCirc(cir).routed =', b.makeEdge_FromCirc(cir).routed, '(want 2)');

for (const [n, ctor] of [[2, createA2], [4, createA4], [6, createA6], [8, createA8]]) {
  const m = await ctor();
  const targets = [['gp_Lin', 1]];
  if (n >= 2) targets.push(['gp_Circ', 2]);
  if (n >= 4) targets.push(['gp_Elips', 3], ['gp_Hypr', 4]);
  if (n >= 6) targets.push(['gp_Parab', 5], ['Geom_Curve', 6]);
  if (n >= 8) targets.push(['Geom2d_Curve', 7], ['Adaptor3d_Curve', 8]);
  console.log(`patched-a-n${n}:`);
  for (const [typeName, want] of targets) {
    const arg = new m[typeName](1);
    const got = new m.EdgeMaker(arg).routed;
    console.log(`  EdgeMaker(${typeName}).routed = ${got} ${got === want ? '✓' : 'FAIL (want ' + want + ')'}`);
  }
}
