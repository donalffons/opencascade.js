// r4.test.mjs — Front-load R4: same-arity emscripten::val vs
// std::optional<T> ambiguity.
//
// ValOptAmbig has two sibling .probe(arity=1) overloads:
//   probe(emscripten::val)
//   probe(std::optional<double>)
//
// Both register as `emscripten::val`-typed slots in the C1
// signaturesArray (EmValOptionalType.name === "emscripten::val"). The
// open question: does C1's match-loop dispatch deterministically? My
// optional-wildcard hunk in $getSignature treats optional slots as
// wildcard match, which could amplify this ambiguity.
//
// Call shapes:
//   probe(42)          → number — both overloads' "field === 'emscripten::val'"
//                        branch matches (val) AND the optional-wildcard
//                        matches (opt). Whichever fires first wins.
//   probe({a: 1})      → object — same situation
//   probe(undefined)   → undefined — val overload matches (val), optional
//                        overload matches via wildcard → if optional fires
//                        we see "opt-99.000000" (value_or default)
//   probe()            → arity-pad to 1 → undefined → same as above
//
// Result classification:
//   - all calls dispatch to ONE consistent sibling (val OR opt) → benign,
//     bindgen can emit a guard rule (forbid co-registration of val+opt at
//     same arity).
//   - mixed dispatch (some calls go to val, others to opt) →
//     misdispatch-by-input-type — SILENT and dangerous; bindgen MUST
//     emit a hard guard before this co-registration is allowed.

import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const mod = await (await import('./mod-optional.mjs')).default();

const probes = [
  { id: '(1) probe(42)',          fn: (o) => o.probe(42) },
  { id: '(2) probe({})',          fn: (o) => o.probe({}) },
  { id: '(3) probe(undefined)',   fn: (o) => o.probe(undefined) },
  { id: '(4) probe() arity-pad',  fn: (o) => o.probe() },
];

const observed = [];
const runOrder = (label, Ctor) => {
  console.log(`\n  -- ${label} (registration order shown below) --`);
  for (const p of probes) {
    const o = new Ctor();
    let dispatched, error;
    try { p.fn(o); dispatched = o.lastDispatched; }
    catch (e) { error = String(e?.message ?? e); }
    o.delete();
    observed.push({ order: label, id: p.id, dispatched, error });
    console.log(`  ${p.id} → ${error ? `THREW: ${error.slice(0, 80)}` : `dispatched=${dispatched}`}`);
  }
};
runOrder('val-first', mod.ValOptAmbig);
runOrder('opt-first', mod.ValOptAmbigRev);

const summarise = (order) => {
  const subset = observed.filter((o) => o.order === order);
  const set = new Set(subset.filter((o) => o.dispatched).map((o) => o.dispatched.startsWith('opt-') ? 'opt' : o.dispatched));
  return { order, set: [...set], allSame: set.size === 1, threw: subset.some((s) => s.error) };
};
const valFirst = summarise('val-first');
const optFirst = summarise('opt-first');
const winnerVF = valFirst.set.join('|');
const winnerOF = optFirst.set.join('|');

const verdict = (() => {
  if (valFirst.threw || optFirst.threw) {
    return { classification: 'overload-rejected', detail: 'Dispatcher refused at least one call — loud failure.' };
  }
  if (valFirst.allSame && optFirst.allSame && winnerVF === winnerOF) {
    return {
      classification: `benign-deterministic-always-${winnerVF}`,
      detail: `Both registration orders dispatch to "${winnerVF}". Winner is type-priority-based, not registration-order-based. bindgen MUST forbid val+optional co-registration at same arity — the loser overload is permanently unreachable.`,
    };
  }
  if (valFirst.allSame && optFirst.allSame && winnerVF !== winnerOF) {
    return {
      classification: 'benign-deterministic-first-registered-wins',
      detail: `val-first → "${winnerVF}", opt-first → "${winnerOF}". Winner = first-registered overload. bindgen MUST forbid val+optional co-registration at same arity — the second overload is permanently unreachable, regardless of emission order.`,
    };
  }
  return {
    classification: 'silent-misdispatch',
    detail: `Mixed dispatch across call shapes — silent data-corruption risk. bindgen MUST add a hard emit-time guard.`,
  };
})();

console.log(`\nR4 verdict: ${verdict.classification}`);
console.log(`  detail: ${verdict.detail}`);

writeFileSync(join(here, 'results.r4.json'), JSON.stringify({ observed, valFirst, optFirst, verdict }, null, 2));
process.exit(0);
