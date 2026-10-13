// PoC test matrix for the libembind Object.hasOwn hardening proposal.
//
// Loads two builds of the same bindings.cpp:
//   negative.mjs — current libembind-overloading.patch (no R1/R2)
//   positive.mjs — same patch + R1+R2 hunks (Object.hasOwn gates)
//
// Test matrix (A through G) is documented in
// docs/research/ocjs-trailing-default-arity-fan-out.md and the README.
// The smoking gun is Test C: cross-sibling regression. Negative build
// MUST throw the production BindingError there; positive build MUST pass.
import createNegative from './negative.mjs';
import createPositive from './positive.mjs';

const PASS = '\x1b[32mPASS\x1b[0m';
const FAIL = '\x1b[31mFAIL\x1b[0m';
const PAD  = (s, n) => (String(s) + ' '.repeat(n)).slice(0, n);

const buildCases = (mod) => [
  {
    id: 'A',
    name: 'Base arity-0 truncation in isolation',
    run: () => {
      const m = new mod.MakeShape();
      m.Build();
      const got = m.lastBuildBy;
      m.delete();
      return got === 'MakeShape' ? null : `expected 'MakeShape', got '${got}'`;
    },
  },
  {
    id: 'B',
    name: 'Override on derived does not corrupt base',
    run: () => {
      const t = new mod.ThruSections();
      const p = new mod.ProgressRange();
      t.Build(p);
      if (t.lastBuildBy !== 'ThruSections') {
        return `derived: expected 'ThruSections', got '${t.lastBuildBy}'`;
      }
      const m = new mod.MakeShape();
      m.Build();
      const baseGot = m.lastBuildBy;
      t.delete(); p.delete(); m.delete();
      return baseGot === 'MakeShape' ? null : `base: expected 'MakeShape', got '${baseGot}'`;
    },
  },
  {
    id: 'C',
    name: 'CROSS-SIBLING REGRESSION: chamfer.Build(progress) after splitter.Build()',
    run: () => {
      // Mirrors the production failure in smoke-fillets-chamfers.test.ts.
      // SplitShape registers an override Build that, on the negative build,
      // mutates MakeShape's inherited overloadTable signatures map. Then
      // MakeChamfer (no own Build registration) inherits the corrupted
      // dispatcher and BindingErrors when called with progress.
      const splitter = new mod.SplitShape();
      splitter.Build();
      if (splitter.lastBuildBy !== 'SplitShape') {
        return `splitter: expected 'SplitShape', got '${splitter.lastBuildBy}'`;
      }

      const chamfer = new mod.MakeChamfer();
      const p = new mod.ProgressRange();
      // Either invocation is enough to trigger the production BindingError
      // on the negative build. We exercise both arities to be thorough.
      chamfer.Build(p);
      if (chamfer.lastBuildBy !== 'MakeShape') {
        return `chamfer arity-1: expected virtual dispatch to 'MakeShape', got '${chamfer.lastBuildBy}'`;
      }
      chamfer.Build();
      if (chamfer.lastBuildBy !== 'MakeShape') {
        return `chamfer arity-0: expected virtual dispatch to 'MakeShape', got '${chamfer.lastBuildBy}'`;
      }

      splitter.delete(); chamfer.delete(); p.delete();
      return null;
    },
  },
  {
    id: 'D',
    name: 'Multi-arity primitive trailing defaults (Init fan-out)',
    run: () => {
      const t = new mod.ThruSections();
      t.Init();
      // pres3d default 1e-6 sets bit 4 (the > 0 branch), the other two are
      // false → 4.
      if (t.initState !== 4) return `Init(): expected 4, got ${t.initState}`;
      t.Init(true);
      if (t.initState !== 5) return `Init(true): expected 5, got ${t.initState}`;
      t.Init(true, true);
      if (t.initState !== 7) return `Init(true,true): expected 7, got ${t.initState}`;
      t.Init(true, true, 1.0);
      if (t.initState !== 7) return `Init(true,true,1.0): expected 7, got ${t.initState}`;
      t.delete();
      return null;
    },
  },
  {
    id: 'E',
    name: 'Implicit override (no `override` keyword) lands on derived',
    run: () => {
      const l = new mod.LegacyDerived();
      l.Build();
      const got = l.lastBuildBy;
      l.delete();
      return got === 'LegacyDerived' ? null : `expected 'LegacyDerived', got '${got}'`;
    },
  },
  {
    id: 'F',
    name: 'Independent class shares no dispatch state with MakeShape',
    run: () => {
      const m = new mod.MakeShape(); m.Build();
      const i = new mod.IndependentBuild(); i.Build();
      if (m.lastBuildBy !== 'MakeShape') {
        return `MakeShape: expected 'MakeShape', got '${m.lastBuildBy}'`;
      }
      if (i.lastBuildBy !== 'Independent') {
        return `IndependentBuild: expected 'Independent', got '${i.lastBuildBy}'`;
      }
      m.delete(); i.delete();
      return null;
    },
  },
  {
    id: 'G',
    name: 'Static method fan-out (R2): Statics.Compute() / (a) / (a,b)',
    run: () => {
      if (mod.Statics.Compute() !== 3) return `Compute(): expected 3, got ${mod.Statics.Compute()}`;
      if (mod.Statics.Compute(10) !== 12) return `Compute(10): expected 12, got ${mod.Statics.Compute(10)}`;
      if (mod.Statics.Compute(10, 20) !== 30) return `Compute(10,20): expected 30, got ${mod.Statics.Compute(10, 20)}`;
      return null;
    },
  },
];

function runOn(label, mod) {
  console.log(`\n═══════ ${label} ═══════`);
  let pass = 0, fail = 0;
  const results = [];
  for (const c of buildCases(mod)) {
    let tag, detail = '';
    try {
      const err = c.run();
      if (err === null) { tag = PASS; pass++; }
      else { tag = FAIL; fail++; detail = err; }
    } catch (e) {
      tag = FAIL; fail++;
      const msg = (e && e.message) ? e.message : String(e);
      detail = `THREW: ${msg.replace(/\n.*$/s, '').slice(0, 120)}`;
    }
    results.push({ id: c.id, tag: tag === PASS ? 'pass' : 'fail', detail });
    console.log(`  ${tag} ${c.id}. ${PAD(c.name, 64)}${detail ? '  → ' + detail : ''}`);
  }
  console.log(`  ${pass}/${pass + fail} passed`);
  return { pass, fail, results };
}

(async () => {
  const negativeMod = await createNegative();
  const positiveMod = await createPositive();

  const negative = runOn('NEGATIVE (current libembind patch — should reproduce regression)', negativeMod);
  const positive = runOn('POSITIVE (current patch + R1+R2 Object.hasOwn gates — should pass all)', positiveMod);

  console.log('\n══════════════════════════════════════════════════════════════════');
  console.log(`  negative: ${negative.pass}/${negative.pass + negative.fail}`);
  console.log(`  positive: ${positive.pass}/${positive.pass + positive.fail}`);
  console.log('══════════════════════════════════════════════════════════════════');

  // Success criteria:
  //   - Negative build MUST exhibit the regression (Test C fails — the
  //     production smoking gun). Other tests may also fail because the
  //     corruption is registration-order-sensitive: every class registering
  //     after a prior class's truncation table mutates the inherited entry,
  //     so cascading failures are expected and corroborate the diagnosis.
  //   - Positive build MUST pass all 7 tests.
  const negativeC = negative.results.find((r) => r.id === 'C');
  const negativeReproducedRegression = negativeC?.tag === 'fail';
  const negativeFailures = negative.results.filter((r) => r.tag === 'fail').map((r) => r.id);
  const positiveAllPass = positive.fail === 0;

  console.log('');
  if (negativeReproducedRegression) {
    console.log(`  ✓ Negative build reproduces the cross-sibling regression. Failing tests: ${negativeFailures.join(', ')}`);
    if (negativeFailures.length > 1) {
      console.log('    (Cascade beyond Test C confirms the corruption is registration-order-sensitive,');
      console.log('     not isolated to the chamfer scenario — every class registering after a prior');
      console.log("     truncation table mutates the inherited entry. This widens, rather than weakens,");
      console.log('     the diagnosis.)');
    }
  } else {
    console.log('  ✗ Negative build did NOT reproduce the regression — Test C passed unexpectedly.');
    console.log('    The PoC cannot validate the fix without first reproducing the bug.');
  }
  if (positiveAllPass) {
    console.log('  ✓ Positive build passes all 7 tests.');
  } else {
    console.log(`  ✗ Positive build has failures: ${positive.results.filter((r) => r.tag === 'fail').map((r) => r.id).join(', ')}`);
  }

  if (!negativeReproducedRegression || !positiveAllPass) {
    process.exit(1);
  }
  console.log('\n  PoC validated: R1+R2 fixes the cross-sibling regression without breaking other dispatch paths.');
})();
