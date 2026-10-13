// Option C validation harness.
//
// Runs the same 7-row test matrix against:
//   - Corpus A (current bindgen fan-out + C1 libembind)
//   - Corpus B (proposed std::optional   + C1 libembind, same patch as A)
//
// Verdict rule:
//   - Corpus A: 2/7 expected — controls (#1, #1b) PASS; 5 catalog defects FAIL
//   - Corpus B: 7/7 expected — every row PASSes
//
// Exit 0 if both modules match expectations; exit 1 otherwise.
import createA from './mod-a-fan-out.mjs';
import createB from './mod-b-optional.mjs';
import * as fs from 'node:fs';

const PASS = '\x1b[32mPASS\x1b[0m';
const FAIL = '\x1b[31mFAIL\x1b[0m';
const PAD  = (s, n) => (String(s) + ' '.repeat(n)).slice(0, n);

const buildCases = (mod) => [
  {
    id: '1', defect: 'control',
    name: 'C1 §B1 — Pnt(1,2,3) → 3-double ctor',
    run: () => {
      const p = new mod.Pnt(1, 2, 3);
      const r = p.routed;
      p.delete();
      return r === 1 ? null : `expected routed=1, got ${r}`;
    },
  },
  {
    id: '1b', defect: 'control',
    name: 'C1 §B1 — Pnt(xyz) → XYZ-taking ctor (1-arg same-arity)',
    run: () => {
      const xyz = new mod.XYZ(1, 2, 3);
      const p = new mod.Pnt(xyz);
      const r = p.routed;
      p.delete(); xyz.delete();
      return r === 2 ? null : `expected routed=2, got ${r}`;
    },
  },
  {
    id: '1c', defect: 'control',
    name: 'C1 §B1 — Pnt(vec) → Vec3-taking ctor (1-arg same-arity)',
    run: () => {
      const vec = new mod.Vec3(1, 2, 3);
      const p = new mod.Pnt(vec);
      const r = p.routed;
      p.delete(); vec.delete();
      return r === 3 ? null : `expected routed=3, got ${r}`;
    },
  },
  {
    id: '2', defect: 'FO-R3*',
    name: 'derived.Build() with no args invokes Derived_Algo::Build() — already fixed by R1/R2',
    run: () => {
      const d = new mod.Derived_Algo();
      d.Build();
      const r = d.lastBuildBy;
      d.delete();
      return r === 11 ? null : `expected lastBuildBy=11 (Derived no-arg), got ${r}`;
    },
  },
  {
    id: '3', defect: 'TR-CW',
    name: 'tool.Set("file") with default OpenMode',
    run: () => {
      const t = new mod.StrTool();
      t.Set('file');
      const r = t.routed;
      t.delete();
      return r === 1 ? null : `expected routed=1 (ReadOnly default), got ${r}`;
    },
  },
  {
    id: '4', defect: 'TR-MO',
    name: 'sampler.Sample(edge) with default first/last',
    run: () => {
      const s = new mod.Sampler();
      const e = new mod.Edge();
      s.Sample(e);
      const r = s.routed;
      e.delete();
      s.delete();
      return r === 2 ? null : `expected routed=2 (single-Edge overload, defaults), got ${r}`;
    },
  },
  {
    id: '5', defect: 'TR-RBV',
    name: 'tool.GetCurve(edge) — C++ default (0.99) must be applied, NOT undefined→0',
    run: () => {
      const t = new mod.CurveTool();
      const e = new mod.Edge();
      const cr = t.GetCurve(e);
      const r = t.routed;
      e.delete();
      t.delete();
      // routed === 1 means C++ default (0.99 > 0.5) was applied — correct.
      // routed === 2 means tol arrived as 0 (undefined cast) — silent miss.
      return (r === 1 && cr.handle === 1)
        ? null
        : `expected routed=1 handle=1 (C++ default applied), got routed=${r} handle=${cr?.handle}`;
    },
  },
  {
    id: '6', defect: 'TR-GATE',
    name: 'combo.Proc("x") — C++ default (0.99) must be applied, NOT undefined→0',
    run: () => {
      const c = new mod.Combo();
      const cr = c.Proc('x');
      const r = c.routed;
      c.delete();
      return (r === 1 && cr.handle === 2)
        ? null
        : `expected routed=1 handle=2 (C++ default applied), got routed=${r} handle=${cr?.handle}`;
    },
  },
];

const runModule = async (label, factory) => {
  const mod = await factory({});
  const cases = buildCases(mod);
  const results = cases.map((c) => {
    try {
      const err = c.run();
      return { id: c.id, defect: c.defect, name: c.name, status: err == null ? 'PASS' : 'FAIL', detail: err };
    } catch (e) {
      return { id: c.id, defect: c.defect, name: c.name, status: 'FAIL', detail: `THREW: ${e?.message ?? e}` };
    }
  });
  const pass = results.filter((r) => r.status === 'PASS').length;
  const total = results.length;
  console.log(`\n══════ ${label} — ${pass}/${total} passed ══════`);
  for (const r of results) {
    const status = r.status === 'PASS' ? PASS : FAIL;
    console.log(`  [${status}] ${PAD(r.id, 3)} ${PAD(r.defect, 9)} ${r.name}`);
    if (r.detail) console.log(`           ↳ ${r.detail}`);
  }
  return { label, pass, total, results };
};

const a = await runModule('Corpus A (current bindgen fan-out)',     createA);
const b = await runModule('Corpus B (proposed std::optional)',       createB);

// Expected outcome reflects what Option C's design SHOULD deliver — actual
// deviations from these expectations are the empirical findings worth
// reporting up to the strategic-direction doc.
//
// Controls (1, 1b, 1c) — both corpora should PASS (C1 §B1 preserved).
// FO-R3* (2)            — both corpora should PASS (already fixed by R1/R2 in C1).
// C2 catalog defects (3, 4, 5, 6) — Corpus A FAIL, Corpus B PASS (the Option C claim).
const CONTROLS = new Set(['1', '1b', '1c', '2']);
const aExpected = (r) => (CONTROLS.has(r.id) ? 'PASS' : 'FAIL');
const bExpected = (_r) => 'PASS';

const aMatches = (r) => r.status === aExpected(r);
const bMatches = (r) => r.status === bExpected(r);

const aExpectationsMet = a.results.every(aMatches);
const bExpectationsMet = b.results.every(bMatches);

const aDeviating = a.results.filter((r) => !aMatches(r)).map((r) => `#${r.id} (${r.defect})`);
const bDeviating = b.results.filter((r) => !bMatches(r)).map((r) => `#${r.id} (${r.defect})`);

console.log('\n══════ Option C verdict ══════');
console.log(`  Corpus A: ${a.pass}/${a.total} — expected 4/${a.total} (controls + FO-R3*).   ${aExpectationsMet ? '✓ matches expectation' : `✗ DEVIATES on ${aDeviating.join(', ')}`}`);
console.log(`  Corpus B: ${b.pass}/${b.total} — expected ${b.total}/${b.total} (all pass).     ${bExpectationsMet ? '✓ matches expectation' : `✗ DEVIATES on ${bDeviating.join(', ')}`}`);

const verdict = aExpectationsMet && bExpectationsMet
  ? 'Option C VALIDATED — std::optional<T> collapses every C2 catalog defect with zero libembind modification.'
  : 'Option C NOT validated as designed — review the deviating rows above.';
console.log(`  ${verdict}\n`);

fs.writeFileSync('./results.json', JSON.stringify({
  a, b,
  expectations: { a: '4/8 (controls + FO-R3*)', b: '8/8 (all pass)' },
  deviations: { a: aDeviating, b: bDeviating },
  aExpectationsMet, bExpectationsMet,
  verdict,
  timestamp: new Date().toISOString(),
}, null, 2));

process.exit(aExpectationsMet && bExpectationsMet ? 0 : 1);
