/**
 * Merge the three allocator-variant benchmark JSONs into a side-by-side
 * comparison, with pairwise ratios specific to the allocator question.
 *
 * Each input is expected to have:
 *   { engine: "ocjs-<allocator>", samples: { <name>: { medianMs, ... }, ... }, ...meta }
 *
 * Output ratios (treating dlmalloc as the OCJS production baseline):
 *   - emmalloc / dlmalloc  → emmalloc speedup or slowdown vs current default
 *   - mimalloc / dlmalloc  → mimalloc speedup or slowdown vs current default
 *   - mimalloc / emmalloc  → secondary; isolates mimalloc's per-thread heap
 *                            design from any dlmalloc-vs-newer-allocator effect
 *
 * Usage:
 *   node merge-allocator-results.mjs \
 *     ../results/wasm-alloc-dlmalloc-latest.json \
 *     ../results/wasm-alloc-emmalloc-latest.json \
 *     ../results/wasm-alloc-mimalloc-latest.json \
 *     --out ../results/wasm-allocator-comparison.json
 */
import * as fs from 'node:fs';
import * as path from 'node:path';

const ALIAS = {
  'ocjs-dlmalloc': 'dlmalloc',
  'ocjs-emmalloc': 'emmalloc',
  'ocjs-mimalloc': 'mimalloc',
};

const args = process.argv.slice(2);
let out = '';
const files = [];
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--out' && args[i + 1]) out = args[++i];
  else if (args[i].endsWith('.json')) files.push(args[i]);
}
if (files.length === 0) {
  console.error('Usage: merge-allocator-results.mjs <a.json> <b.json> [<c.json>] --out <out.json>');
  process.exit(1);
}

const datasets = files.map((p) => {
  const data = JSON.parse(fs.readFileSync(p, 'utf8'));
  const engine = data.engine ?? path.basename(p);
  const alias = ALIAS[engine] ?? engine;
  return { path: p, engine, alias, data };
});

const order = ['dlmalloc', 'emmalloc', 'mimalloc'];
datasets.sort((a, b) => {
  const ia = order.indexOf(a.alias);
  const ib = order.indexOf(b.alias);
  return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
});

const sampleNames = [
  ...new Set(datasets.flatMap((d) => Object.keys(d.data.samples ?? {}))),
].sort();

const ratioPairs = [
  { num: 'emmalloc', den: 'dlmalloc', label: 'emmalloc vs dlmalloc baseline' },
  { num: 'mimalloc', den: 'dlmalloc', label: 'mimalloc vs dlmalloc baseline' },
  { num: 'mimalloc', den: 'emmalloc', label: 'mimalloc vs emmalloc' },
];

const rows = sampleNames.map((name) => {
  const medians = {};
  const minMs = {};
  const maxMs = {};
  for (const d of datasets) {
    const s = d.data.samples?.[name];
    medians[d.alias] = s?.medianMs ?? null;
    minMs[d.alias] = s?.minMs ?? null;
    maxMs[d.alias] = s?.maxMs ?? null;
  }
  const ratios = {};
  for (const { num, den } of ratioPairs) {
    const n = medians[num];
    const dn = medians[den];
    ratios[`${num}/${den}`] = n != null && dn != null && dn > 0 ? n / dn : null;
  }
  // Identify the per-sample winner and spread (max-min across allocators).
  const valid = Object.entries(medians).filter(([, v]) => v != null);
  let winner = null;
  let winnerMs = null;
  let spreadMs = null;
  if (valid.length >= 2) {
    const sorted = [...valid].sort((a, b) => a[1] - b[1]);
    winner = sorted[0][0];
    winnerMs = sorted[0][1];
    spreadMs = sorted[sorted.length - 1][1] - sorted[0][1];
  }
  return { name, medians, minMs, maxMs, ratios, winner, winnerMs, spreadMs };
});

// Compute geometric-mean ratio across all samples for each pairwise comparison.
function geoMean(values) {
  const v = values.filter((x) => x != null && x > 0);
  if (v.length === 0) return null;
  const sumLog = v.reduce((acc, x) => acc + Math.log(x), 0);
  return Math.exp(sumLog / v.length);
}
const overallRatios = {};
for (const { num, den } of ratioPairs) {
  overallRatios[`${num}/${den}`] = geoMean(rows.map((r) => r.ratios[`${num}/${den}`]));
}

// Tally per-sample winners (excluding ties within 2% to avoid noise-driven crowns).
const tallies = { dlmalloc: 0, emmalloc: 0, mimalloc: 0, tie: 0 };
for (const r of rows) {
  if (!r.winner || r.winnerMs == null) continue;
  // Tie detection: every other allocator within 2% of the winner is treated as a tie.
  const others = Object.entries(r.medians).filter(([k, v]) => v != null && k !== r.winner);
  const close = others.filter(([, v]) => v / r.winnerMs <= 1.02);
  if (close.length > 0) tallies.tie++;
  else tallies[r.winner] = (tallies[r.winner] ?? 0) + 1;
}

const meta = {};
for (const d of datasets) {
  meta[d.alias] = {
    engine: d.engine,
    file: d.path,
    warmup: d.data.warmup,
    iterations: d.data.iterations,
    ocjsLoadMs: d.data.ocjsLoadMs,
    wasmSize: d.data.wasmSize,
  };
}

const comparison = {
  generatedAt: new Date().toISOString(),
  allocators: datasets.map((d) => d.alias),
  meta,
  ratioPairs,
  overallRatios,
  perSampleWinnerTally: tallies,
  rows,
};

const outPath = out || 'results/wasm-allocator-comparison.json';
fs.mkdirSync(path.dirname(path.resolve(outPath)), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(comparison, null, 2));
console.log(JSON.stringify(comparison, null, 2));
