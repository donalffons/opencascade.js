// Asserts that Strategy A (live class binding) and Strategy D (boundary
// narrowed adapter) produce equivalent data for every shape. Strategy Dp
// (typed_memory_view) is also checked where it applies.

import createModule from "./experiment.mjs";

const Module = await createModule();
const N = 64;

let failures = 0;
const ok = (label, cond, detail = "") => {
  const status = cond ? "ok " : "FAIL";
  if (!cond) failures += 1;
  console.log(`  ${status}  ${label}${detail ? "  — " + detail : ""}`);
};

const eqPnt = (a, b) =>
  Math.abs(a.x - b.x) < 1e-12 && Math.abs(a.y - b.y) < 1e-12 && Math.abs(a.z - b.z) < 1e-12;

console.log("== Array1<Pnt3> ==");
{
  const a = Module.getArray1Pnt3_strategyA(N);
  const d = Module.getArray1Pnt3_strategyD(N);
  ok("D returns Array", Array.isArray(d));
  ok("lengths match", a.Length() === d.length, `A=${a.Length()} D=${d.length}`);
  let allEq = true;
  for (let i = 0; i < N; i++) if (!eqPnt(a.Value(i), d[i])) { allEq = false; break; }
  ok("element parity", allEq);
  a.delete();
}

console.log("== Array1<double> ==");
{
  const a = Module.getArray1Double_strategyA(N);
  const d = Module.getArray1Double_strategyD(N);
  const dp = Module.getArray1Double_strategyDp(N);
  ok("D length", d.length === N);
  ok("Dp length", dp.length === N);
  let allEq = true;
  for (let i = 0; i < N; i++) {
    if (a.Value(i) !== d[i] || a.Value(i) !== dp[i]) { allEq = false; break; }
  }
  ok("A == D == Dp", allEq);
  ok("Dp is Float64Array", dp instanceof Float64Array);
  a.delete();
}

console.log("== Array1<int> ==");
{
  const a = Module.getArray1Int_strategyA(N);
  const d = Module.getArray1Int_strategyD(N);
  const dp = Module.getArray1Int_strategyDp(N);
  let allEq = true;
  for (let i = 0; i < N; i++) {
    if (a.Value(i) !== d[i] || a.Value(i) !== dp[i]) { allEq = false; break; }
  }
  ok("A == D == Dp", allEq);
  ok("Dp is Int32Array", dp instanceof Int32Array);
  a.delete();
}

console.log("== Array2<Pnt3> ==");
{
  const rows = 4, cols = 5;
  const a = Module.getArray2Pnt3_strategyA(rows, cols);
  const d = Module.getArray2Pnt3_strategyD(rows, cols);
  ok("D rows", d.length === rows);
  ok("D cols", d[0].length === cols);
  let allEq = true;
  for (let r = 0; r < rows && allEq; r++)
    for (let c = 0; c < cols && allEq; c++)
      if (!eqPnt(a.Value(r, c), d[r][c])) allEq = false;
  ok("element parity", allEq);
  a.delete();
}

console.log("== Array2<double> ==");
{
  const rows = 4, cols = 5;
  const a = Module.getArray2Double_strategyA(rows, cols);
  const d = Module.getArray2Double_strategyD(rows, cols);
  const dp = Module.getArray2Double_strategyDp(rows, cols);
  ok("Dp is Float64Array length=rows*cols", dp instanceof Float64Array && dp.length === rows * cols);
  let allEq = true;
  for (let r = 0; r < rows && allEq; r++)
    for (let c = 0; c < cols && allEq; c++)
      if (a.Value(r, c) !== d[r][c] || a.Value(r, c) !== dp[r * cols + c]) allEq = false;
  ok("A == D == Dp", allEq);
  a.delete();
}

console.log("== DynamicArray<Pnt3> ==");
{
  const a = Module.getDynArrayPnt3_strategyA(N);
  const d = Module.getDynArrayPnt3_strategyD(N);
  ok("size match", Number(a.Size()) === d.length);
  let allEq = true;
  for (let i = 0; i < N; i++) if (!eqPnt(a.Value(i), d[i])) { allEq = false; break; }
  ok("element parity", allEq);
  a.delete();
}

console.log("== Sequence<Pnt3> ==");
{
  const a = Module.getSequencePnt3_strategyA(N);
  const d = Module.getSequencePnt3_strategyD(N);
  let allEq = true;
  for (let i = 0; i < N; i++) if (!eqPnt(a.Value(i + 1), d[i])) { allEq = false; break; }
  ok("element parity", allEq);
  a.delete();
}

console.log("== List<Pnt3> ==");
{
  const a = Module.getListPnt3_strategyA(N);
  const d = Module.getListPnt3_strategyD(N);
  ok("D length", d.length === N);
  ok("first matches", eqPnt({ x: 0, y: 0, z: 0 }, d[0]));
  a.delete();
}

console.log("== Map<int> ==");
{
  const a = Module.getMapInt_strategyA(N);
  const d = Module.getMapInt_strategyD(N);
  ok("D length", d.length === N);
  ok("All keys present in A", d.every((k) => a.Contains(k)));
  a.delete();
}

console.log("== Map<EdgeKey> ==");
{
  const a = Module.getMapEdgeKey_strategyA(N);
  const d = Module.getMapEdgeKey_strategyD(N);
  ok("D length", d.length === N);
  ok("All keys present in A", d.every((k) => a.Contains(k)));
  a.delete();
}

console.log("== DataMap<string,Pnt3> ==");
{
  const a = Module.getDataMapStrPnt_strategyA(N);
  const d = Module.getDataMapStrPnt_strategyD(N);
  const dKv = Module.getDataMapStrPnt_strategyD_kv(N);
  ok("D is Map", d instanceof Map);
  ok("D size", d.size === N);
  ok("Dkv keys/values arrays", Array.isArray(dKv.keys) && Array.isArray(dKv.values));
  let allEq = true;
  for (let i = 0; i < N; i++) {
    const k = `pt${i}`;
    if (!eqPnt(a.Find(k), d.get(k))) { allEq = false; break; }
  }
  ok("A == D values", allEq);
  a.delete();
}

console.log("== DataMap<int,Pnt3> ==");
{
  const a = Module.getDataMapIntPnt_strategyA(N);
  const d = Module.getDataMapIntPnt_strategyD(N);
  ok("D is Map", d instanceof Map);
  let allEq = true;
  for (let i = 0; i < N; i++) {
    const k = i * 17;
    if (!eqPnt(a.Find(k), d.get(k))) { allEq = false; break; }
  }
  ok("A == D values", allEq);
  a.delete();
}

console.log("== IndexedMap<string> ==");
{
  const a = Module.getIndexedMapStr_strategyA(N);
  const d = Module.getIndexedMapStr_strategyD(N);
  ok("D length", d.length === N);
  ok("insertion order preserved", d.every((k, i) => k === a.FindKey(i + 1)));
  a.delete();
}

console.log("== IndexedDataMap<string,Pnt3> ==");
{
  const a = Module.getIDataMapStrPnt_strategyA(N);
  const d = Module.getIDataMapStrPnt_strategyD(N);
  ok("D length", d.length === N);
  ok("D entries shape", d.every((e) => typeof e.key === "string" && e.value));
  let allEq = true;
  for (let i = 0; i < N; i++) {
    if (a.FindKey(i + 1) !== d[i].key) { allEq = false; break; }
    if (!eqPnt(a.FindFromIndex(i + 1), d[i].value)) { allEq = false; break; }
  }
  ok("insertion order + parity", allEq);
  a.delete();
}

console.log("== DoubleMap<int,string> ==");
{
  const a = Module.getDoubleMapIntStr_strategyA(N);
  const d = Module.getDoubleMapIntStr_strategyD(N);
  ok("D length", d.length === N);
  let allEq = true;
  for (let i = 0; i < N; i++) {
    const [k1, k2] = d[i];
    if (a.Find1(k1) !== k2 || a.Find2(k2) !== k1) { allEq = false; break; }
  }
  ok("bidirectional consistency", allEq);
  a.delete();
}

console.log("== Strategy Dp interleaved Pnt3 ==");
{
  const dp = Module.getArray1Pnt3_strategyDp_interleaved(N);
  ok("length === 3*N", dp.length === 3 * N);
  let allEq = true;
  for (let i = 0; i < N; i++) {
    if (dp[i * 3] !== i || dp[i * 3 + 1] !== i * 2 || dp[i * 3 + 2] !== i * 3) {
      allEq = false; break;
    }
  }
  ok("xyz triples match", allEq);
}

console.log("== Strategy F NCollectionLiveHandle ==");
{
  const lh = Module.getLiveHandle_Array1Pnt3(N);
  ok("Size", Number(lh.Size()) === N);
  const a = Module.getArray1Pnt3_strategyA(N);
  let allEq = true;
  for (let i = 0; i < N; i++) {
    const v = lh.At(i);
    if (!eqPnt(a.Value(i), v)) { allEq = false; break; }
  }
  ok("At(i) parity with Strategy A", allEq);
  const bulk = lh.ToArray();
  ok("ToArray() length", bulk.length === N);
  ok("ToArray() parity", bulk.every((v, i) => eqPnt(v, a.Value(i))));
  a.delete();
  lh.delete();
}

console.log("== OQ1 handle envelope ==");
{
  const h = Module.acquireHandleArray1(N);
  ok("UseCount === 1", Number(Module.getHandleUseCount(h)) === 1);
  const items = Module.materializeFromHandle(h);
  ok("items length", items.length === N);
  ok("items first matches", eqPnt(items[0], { x: 0, y: 0, z: 0 }));
  ok("UseCount unchanged after materialize", Number(Module.getHandleUseCount(h)) === 1);
  h.delete();
  const items2 = Module.getHandleArray1_unwrapped(N);
  ok("unwrapped length", items2.length === N);
}

console.log("== OQ4 iterator ==");
{
  const src = Module.getIterator_strategyD(N);
  const iter = {
    next() { return Module.iteratorNextPnt3(src); },
    [Symbol.iterator]() { return this; },
  };
  const collected = [];
  for (const v of iter) collected.push(v);
  ok("iterator yields N items", collected.length === N);
  ok("first item parity", eqPnt(collected[0], { x: 0, y: 0, z: 0 }));
}

console.log(`\n${failures === 0 ? "PASS" : "FAIL"}: ${failures} parity check(s) failed`);
process.exit(failures === 0 ? 0 : 1);
