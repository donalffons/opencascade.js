// POC runner: loads both binding variants and runs the same test matrix
// against each. Reports PASS / WRONG-ROUTE / BINDING-ERROR / NOT-CALLABLE
// per case so the smoking-gun behaviour from src/bindings.py is reproduced
// in isolation and the proposed fix is observably correct.
//
// Each case is fully self-contained (lazy setup inside `run`) so a failure
// inside one case does not crash the rest of the matrix.
import createBroken from './broken.mjs';
import createFixed  from './fixed.mjs';

const PAD = (s, n) => (s + ' '.repeat(n)).slice(0, n);
const TAG = {
  PASS:  '\u001b[32mPASS        \u001b[0m',
  WRONG: '\u001b[33mWRONG-ROUTE \u001b[0m',
  ERR:   '\u001b[31mBINDING-ERR \u001b[0m',
  TYPE:  '\u001b[31mNOT-CALLABLE\u001b[0m',
};

const buildCases = (mod) => [
  // RC-A specimen 1: SetColor (six class-typed overloads) ---------------
  {
    name: 'SetColor(TDF_Label, TDF_Label, Type)',
    run: () => {
      const tool = new mod.XCAFDoc_ColorTool();
      tool.SetColor(new mod.TDF_Label(1), new mod.TDF_Label(2), mod.XCAFDoc_ColorType.Generic);
      return tool.lastCalled;
    },
    want: 'TDF_Label,TDF_Label,Type',
  },
  {
    name: 'SetColor(TDF_Label, Quantity_Color, Type)',
    run: () => {
      const tool = new mod.XCAFDoc_ColorTool();
      tool.SetColor(new mod.TDF_Label(1), new mod.Quantity_Color(1, 0, 0), mod.XCAFDoc_ColorType.Generic);
      return tool.lastCalled;
    },
    want: 'TDF_Label,Quantity_Color,Type',
  },
  {
    name: 'SetColor(TDF_Label, Quantity_ColorRGBA, Type)',
    run: () => {
      const tool = new mod.XCAFDoc_ColorTool();
      tool.SetColor(new mod.TDF_Label(1), new mod.Quantity_ColorRGBA(1, 0, 0, 1), mod.XCAFDoc_ColorType.Generic);
      return tool.lastCalled;
    },
    want: 'TDF_Label,Quantity_ColorRGBA,Type',
  },
  {
    name: 'SetColor(TopoDS_Shape, TDF_Label, Type)',
    run: () => {
      const tool = new mod.XCAFDoc_ColorTool();
      tool.SetColor(new mod.TopoDS_Shape(42), new mod.TDF_Label(1), mod.XCAFDoc_ColorType.Generic);
      return tool.lastCalled;
    },
    want: 'TopoDS_Shape,TDF_Label,Type',
  },
  {
    // smoke-xcaf real-world failure case.
    name: 'SetColor(TopoDS_Shape, Quantity_Color, Type)',
    run: () => {
      const tool = new mod.XCAFDoc_ColorTool();
      tool.SetColor(new mod.TopoDS_Shape(42), new mod.Quantity_Color(1, 0, 0), mod.XCAFDoc_ColorType.Generic);
      return tool.lastCalled;
    },
    want: 'TopoDS_Shape,Quantity_Color,Type',
  },
  {
    name: 'SetColor(TopoDS_Shape, Quantity_ColorRGBA, Type)',
    run: () => {
      const tool = new mod.XCAFDoc_ColorTool();
      tool.SetColor(new mod.TopoDS_Shape(42), new mod.Quantity_ColorRGBA(1, 0, 0, 1), mod.XCAFDoc_ColorType.Generic);
      return tool.lastCalled;
    },
    want: 'TopoDS_Shape,Quantity_ColorRGBA,Type',
  },

  // RC-A specimen 2: NCollection_List_Shape::Append (single-item vs splice)
  {
    // smoke-collections real-world failure case.
    name: 'List.Append(TopoDS_Shape)',
    run: () => {
      const list = new mod.NCollection_List_Shape();
      list.Append(new mod.TopoDS_Shape(42));
      return list.lastCalled;
    },
    want: 'Append(TopoDS_Shape)',
  },
  {
    name: 'List.Append(NCollection_List_Shape)',
    run: () => {
      const list  = new mod.NCollection_List_Shape();
      const list2 = new mod.NCollection_List_Shape();
      list.Append(list2);
      return list.lastCalled;
    },
    want: 'Append(NCollection_List_Shape)',
  },

  // RC-B specimen: primary FindKey must exist.
  {
    name: 'IndexedMap.FindKey(1)',
    run: () => {
      const map = new mod.NCollection_IndexedMap_Shape();
      const r = map.FindKey(1);
      return `${map.lastCalled} -> kind=${r.kind}`;
    },
    want: 'FindKey(size_t) -> kind=1',
  },
];

function runOn(label, mod) {
  console.log(`\n═══════ ${label} ═══════`);
  let pass = 0, fail = 0;
  for (const c of buildCases(mod)) {
    let tag, got;
    try {
      got = c.run();
      if (got === c.want) { tag = TAG.PASS; pass++; }
      else                { tag = TAG.WRONG; fail++; }
    } catch (e) {
      const msg = (e && e.message) ? e.message : String(e);
      tag = /is not a function/.test(msg) ? TAG.TYPE : TAG.ERR;
      got = msg.replace(/\n.*$/s, '').slice(0, 90);
      fail++;
    }
    console.log(`  ${tag} ${PAD(c.name, 50)} → ${got}`);
  }
  console.log(`  ─ ${pass} pass, ${fail} fail ─`);
  return { pass, fail };
}

(async () => {
  const brokenMod = await createBroken();
  const fixedMod  = await createFixed();
  const broken = runOn('BROKEN (current codegen pattern)', brokenMod);
  const fixed  = runOn('FIXED  (FIX-A + FIX-B + FIX-C)',  fixedMod);
  console.log('\n══════════════════════════════════════════');
  console.log(`  broken: ${broken.pass}/${broken.pass + broken.fail} pass`);
  console.log(`  fixed : ${fixed.pass}/${fixed.pass + fixed.fail} pass`);
  console.log('══════════════════════════════════════════\n');
  if (fixed.fail !== 0) process.exit(1);
})();
