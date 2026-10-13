// Programmatic assertion that the generated experiment.d.ts:
//
//   1. Carries the EXACT registered TS string for every Strategy D
//      adapter (the register_type<>() pinning works as documented).
//   2. Declares Strategy F's NCollectionLiveHandle with Size/Kind/At/ToArray.
//   3. Contains zero literal `unknown` tokens anywhere.
//
// Source of truth for the expected adapter signatures lives in this file
// — keep aligned with the register_type<>() calls in experiment.cpp.

import { readFileSync } from "node:fs";

const dts = readFileSync(new URL("./experiment.d.ts", import.meta.url), "utf8");

let failures = 0;
const ok = (label, cond, detail = "") => {
  const status = cond ? "ok " : "FAIL";
  if (!cond) failures += 1;
  console.log(`  ${status}  ${label}${detail ? "  — " + detail : ""}`);
};

const lineFor = (sig) => dts.split("\n").find((l) => l.includes(sig));

const expectExact = (name, expectedSig) => {
  const line = lineFor(name + "(");
  ok(`${name} present`,            !!line);
  ok(`${name} signature exact`,    line && line.trim() === expectedSig.trim(),
     line ? `got: ${line.trim()}` : "missing line");
};

console.log("== Strategy D adapter signatures (exact match) ==");
expectExact("getArray1Pnt3_strategyD",         "getArray1Pnt3_strategyD(_0: number): Pnt3[];");
expectExact("getArray1Double_strategyD",       "getArray1Double_strategyD(_0: number): number[];");
expectExact("getArray1Int_strategyD",          "getArray1Int_strategyD(_0: number): number[];");
expectExact("getArray2Pnt3_strategyD",         "getArray2Pnt3_strategyD(_0: number, _1: number): Pnt3[][];");
expectExact("getArray2Double_strategyD",       "getArray2Double_strategyD(_0: number, _1: number): number[][];");
expectExact("getDynArrayPnt3_strategyD",       "getDynArrayPnt3_strategyD(_0: number): Pnt3[];");
expectExact("getDynArrayDouble_strategyD",     "getDynArrayDouble_strategyD(_0: number): number[];");
expectExact("getSequencePnt3_strategyD",       "getSequencePnt3_strategyD(_0: number): Pnt3[];");
expectExact("getListPnt3_strategyD",           "getListPnt3_strategyD(_0: number): Pnt3[];");
expectExact("getMapInt_strategyD",             "getMapInt_strategyD(_0: number): number[];");
expectExact("getMapEdgeKey_strategyD",         "getMapEdgeKey_strategyD(_0: number): EdgeKey[];");
expectExact("getDataMapStrPnt_strategyD",      "getDataMapStrPnt_strategyD(_0: number): Map<string, Pnt3>;");
expectExact("getDataMapStrPnt_strategyD_kv",   "getDataMapStrPnt_strategyD_kv(_0: number): { keys: string[], values: Pnt3[] };");
expectExact("getDataMapIntPnt_strategyD",      "getDataMapIntPnt_strategyD(_0: number): Map<number, Pnt3>;");
expectExact("getIndexedMapStr_strategyD",      "getIndexedMapStr_strategyD(_0: number): string[];");
expectExact("getIDataMapStrPnt_strategyD",     "getIDataMapStrPnt_strategyD(_0: number): Array<{ key: string, value: Pnt3 }>;");
expectExact("getDoubleMapIntStr_strategyD",    "getDoubleMapIntStr_strategyD(_0: number): Array<[number, string]>;");

console.log("\n== Strategy Dp (typed_memory_view) signatures ==");
expectExact("getArray1Double_strategyDp",            "getArray1Double_strategyDp(_0: number): Float64Array;");
expectExact("getArray1Int_strategyDp",               "getArray1Int_strategyDp(_0: number): Int32Array;");
expectExact("getArray1Pnt3_strategyDp_interleaved",  "getArray1Pnt3_strategyDp_interleaved(_0: number): Float64Array;");
expectExact("getArray2Double_strategyDp",            "getArray2Double_strategyDp(_0: number, _1: number): Float64Array;");
expectExact("getDynArrayDouble_strategyDp",          "getDynArrayDouble_strategyDp(_0: number): Float64Array;");
expectExact("getArray1Double_strategyDp_owned",      "getArray1Double_strategyDp_owned(_0: number): { view: Float64Array, ptr: number, len: number };");

console.log("\n== Strategy F NCollectionLiveHandle surface ==");
{
  const lhBlock = dts.match(/interface NCollectionLiveHandle[\s\S]*?\}/);
  ok("NCollectionLiveHandle interface present", !!lhBlock);
  ok("declares Size()",    lhBlock && /Size\(\):\s*number;/.test(lhBlock[0]));
  ok("declares Kind()",    lhBlock && /Kind\(\):\s*number;/.test(lhBlock[0]));
  ok("declares At(_0)",    lhBlock && /At\(_0:\s*number\):\s*any;/.test(lhBlock[0]));
  ok("declares ToArray()", lhBlock && /ToArray\(\):\s*any;/.test(lhBlock[0]));
}

console.log("\n== OQ1 handle envelope split-API ==");
expectExact("getHandleArray1_unwrapped",
            "getHandleArray1_unwrapped(_0: number): Pnt3[];");
expectExact("acquireHandleArray1",
            "acquireHandleArray1(_0: number): Handle_NCollection_HArray1OfPnt | null;");
expectExact("materializeFromHandle",
            "materializeFromHandle(_0: Handle_NCollection_HArray1OfPnt | null): Pnt3[];");

console.log("\n== Zero `unknown` invariant (excluding emscripten factory boilerplate) ==");
{
  // The only legitimate `unknown` token in --emit-tsd output is on the
  // MainModuleFactory boilerplate line `(options?: unknown)`. That comes
  // from emscripten's runtime template, not our bindings, so it does not
  // count against the Option D invariant.
  const offendingLines = dts
    .split("\n")
    .map((l, i) => ({ l, i }))
    .filter(({ l }) => /\bunknown\b/.test(l) && !/MainModuleFactory.*options\?: unknown/.test(l));
  ok("no `unknown` in binding-emitted lines",
     offendingLines.length === 0,
     offendingLines.length
       ? "lines: " + offendingLines.map((x) => `${x.i + 1}: ${x.l.trim()}`).join(" | ")
       : "");
}

console.log(`\n${failures === 0 ? "PASS" : "FAIL"}: ${failures} d.ts assertion(s) failed`);
process.exit(failures === 0 ? 0 : 1);
