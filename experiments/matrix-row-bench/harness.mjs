// harness.mjs — common per-row test infrastructure.
//
// Per-row .test.mjs files import this harness, call defineRow(rowId, runner)
// once, and exit. The harness owns:
//   1. Loading the synthetic + real OCCT bindings module (when available)
//   2. Invoking the row's runner against each of its expected JS call shapes
//   3. Capturing per-shape outcome (correctness, error message, runtime)
//   4. Emitting a structured per-row JSON to results/per-row/row-NN.json
//   5. Returning a success / failure / pending verdict to the calling process
//
// Modes:
//   - 'live'    — bindings WASM present; harness invokes the real lambda
//   - 'scaffold'— bindings WASM absent; harness emits a 'pending build'
//                 placeholder result so the bench runner can still aggregate
//                 a full 38-row report (used for scaffold-mode baseline).
//
// The runner signature is:
//   runner({ mod, shape, mode }) -> { result?: any, error?: string }
//
// Modes the harness selects automatically; the row test does not branch.

import { writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { performance } from 'node:perf_hooks';

import { ROW_BY_ID } from './rows/registry.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const RESULTS_PER_ROW = join(HERE, 'results', 'per-row');
mkdirSync(RESULTS_PER_ROW, { recursive: true });

const BINDINGS_MJS = join(HERE, 'mod-rows.mjs');
const BINDINGS_VAL_MJS = join(HERE, 'mod-rows-val.mjs');
const BINDINGS_OPT_MJS = join(HERE, 'mod-rows-optional.mjs');

const FALLBACK_RUNTIME_NS = 1500;

const loadModuleOnce = (() => {
  const cache = new Map();
  return async (path) => {
    if (cache.has(path)) return cache.get(path);
    if (!existsSync(path)) {
      cache.set(path, null);
      return null;
    }
    try {
      const factory = (await import(path)).default;
      const mod = await factory();
      cache.set(path, mod);
      return mod;
    } catch (err) {
      cache.set(path, { __loadError: String(err?.message ?? err) });
      return cache.get(path);
    }
  };
})();

const detectMode = async () => {
  const mod = await loadModuleOnce(BINDINGS_MJS);
  if (mod && !mod.__loadError) return { mode: 'live', mod };
  if (mod && mod.__loadError) {
    return { mode: 'scaffold', mod: null, loadError: mod.__loadError };
  }
  return { mode: 'scaffold', mod: null, loadError: null };
};

const scoreErrorClarity = (errorMessage) => {
  if (!errorMessage) return null;
  const msg = String(errorMessage);
  let score = 0;
  if (msg && msg.length > 0) score = 1;
  if (/parameter|position|argument|arg/i.test(msg)) score = Math.max(score, 2);
  if (/expected|got|received|type/i.test(msg)) score = Math.max(score, 2);
  if (/expected|got|received/.test(msg) && /(parameter|position|argument)/i.test(msg)) score = 3;
  return {
    score,
    message: msg.slice(0, 280),
    namesPosition: /parameter|position|argument|arg ?\d+/i.test(msg),
    namesExpectedType: /expected/i.test(msg),
    namesReceivedType: /(got|received|was)/i.test(msg),
    namesSuggestion: /try|hint|suggest|use /i.test(msg),
  };
};

const runShape = async ({ runner, mod, shape, mode }) => {
  const t0 = performance.now();
  let result;
  let error;
  try {
    const outcome = await runner({ mod, shape, mode });
    result = outcome?.result;
    error = outcome?.error;
  } catch (e) {
    error = String(e?.message ?? e);
  }
  const t1 = performance.now();
  const ns = Math.max(1, Math.round((t1 - t0) * 1_000_000));
  const expectedError = Boolean(shape.errorExpected);
  const actualError = Boolean(error);
  const correct = expectedError ? actualError : !actualError;
  return {
    shapeName: shape.name,
    args: shape.args,
    expect: shape.expect,
    errorExpected: expectedError,
    correct,
    result,
    error: error ?? null,
    errorClarity: scoreErrorClarity(error),
    runtimeNs: ns,
  };
};

export const defineRow = async (rowId, runner) => {
  const row = ROW_BY_ID.get(rowId);
  if (!row) throw new Error(`defineRow: unknown row id ${rowId}`);
  const { mode, mod, loadError } = await detectMode();

  const shapes = [];
  for (const shape of row.shapes) {
    if (mode === 'scaffold') {
      shapes.push({
        shapeName: shape.name,
        args: shape.args,
        expect: shape.expect,
        errorExpected: Boolean(shape.errorExpected),
        correct: null,
        result: null,
        error: null,
        errorClarity: null,
        runtimeNs: FALLBACK_RUNTIME_NS,
        scaffold: true,
      });
    } else {
      const outcome = await runShape({ runner, mod, shape, mode });
      shapes.push(outcome);
    }
  }

  const allCorrect = shapes.every((s) => s.correct === true);
  const anyIncorrect = shapes.some((s) => s.correct === false);
  const correctness = mode === 'scaffold' ? null : !anyIncorrect && allCorrect;

  const verdict = (() => {
    if (row.blockedByPhase1) return 'pending-phase-1';
    if (mode === 'scaffold') return 'pending-build';
    if (correctness === true) return 'pass';
    return 'fail';
  })();

  const errorClarityScores = shapes
    .map((s) => s.errorClarity?.score)
    .filter((v) => typeof v === 'number');
  const errorClarityMax = errorClarityScores.length === 0 ? null : Math.max(...errorClarityScores);

  const tsFidelity = mode === 'scaffold'
    ? { declared: null, callable: null, match: null, scaffold: true }
    : { declared: 'pending-ts-emitter', callable: 'pending-ts-emitter', match: null };

  const runtimes = shapes.map((s) => s.runtimeNs).filter((v) => typeof v === 'number');
  const meanRuntimeNs = runtimes.length === 0
    ? null
    : Math.round(runtimes.reduce((a, b) => a + b, 0) / runtimes.length);

  const record = {
    rowId: row.id,
    slug: row.slug,
    description: row.description,
    primitive: row.primitive,
    productionInstances: row.productionInstances,
    speculative: Boolean(row.speculative),
    blockedByPhase1: Boolean(row.blockedByPhase1),
    bothPrimitives: Boolean(row.bothPrimitives),
    testSubject: row.testSubject,
    mode,
    loadError: loadError ?? null,
    verdict,
    correctness,
    errorClarityMax,
    tsFidelity,
    meanRuntimeNs,
    shapes,
    timestamp: new Date().toISOString(),
  };

  const outPath = join(RESULTS_PER_ROW, `row-${String(row.id).padStart(2, '0')}.json`);
  writeFileSync(outPath, JSON.stringify(record, null, 2));

  const summary = [
    `[row ${String(row.id).padStart(2, '0')}]`,
    `${row.slug.padEnd(38)}`,
    `prim=${row.primitive.padEnd(8)}`,
    `mode=${mode}`,
    `verdict=${verdict}`,
  ].join('  ');
  console.log(summary);

  return record;
};

export const loadValAndOptionalForQ3 = async () => {
  const val = await loadModuleOnce(BINDINGS_VAL_MJS);
  const opt = await loadModuleOnce(BINDINGS_OPT_MJS);
  return {
    val: val && !val.__loadError ? val : null,
    opt: opt && !opt.__loadError ? opt : null,
    valLoadError: val?.__loadError ?? null,
    optLoadError: opt?.__loadError ?? null,
  };
};

export const isLive = async () => {
  const { mode } = await detectMode();
  return mode === 'live';
};
