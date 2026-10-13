// Probe each pure-C++ variant for V8 13.6 `using` compatibility.
// Goal: identify any path that produces an unbound callable usable as
// Symbol.dispose, attached entirely from C++, with no JS file authored.

import createModule from './pure-cpp.mjs';
const Module = await createModule();
console.log('Node:', process.versions.node, 'V8:', process.versions.v8);
console.log('--- pure-C++ Symbol.dispose probe ---');

function probe(label, factory) {
  let inspectionLine = '';
  try {
    const result = factory();
    const fn = result[Symbol.dispose];
    inspectionLine =
      `   typeof:${typeof fn} ` +
      `name:'${fn?.name ?? ''}' ` +
      `boundTarget:${fn && '__BoundTargetFunction__' in fn} ` +
      `isFn:${typeof fn === 'function'}`;
    using r = result;
    void r;
    console.log(`  ${label.padEnd(22)} OK     ${inspectionLine}`);
  } catch (e) {
    console.log(`  ${label.padEnd(22)} THROW  ${inspectionLine}`);
    console.log(`     ${e.message}`);
  }
}

probe('V6 fn_ctor (new Function)',  () => Module.Container.makeV6_fn_ctor());
probe('V6 fn_ctor (cached static)', () => Module.Container.makeV6_cached());
probe('V7 embind free function',    () => Module.Container.makeV7_embind_fn());
probe('V8 class_function static',   () => Module.Container.makeV8_cls_static());
probe('V9 prototype method',        () => Module.Container.makeV9_cls_proto_method());

console.log('\n--- compare: same disposers attached *not* via val::object() ---');
function probePlain(label, fn) {
  try {
    const obj = {};
    obj[Symbol.dispose] = fn;
    using r = obj;
    void r;
    console.log(`  ${label.padEnd(22)} OK`);
  } catch (e) {
    console.log(`  ${label.padEnd(22)} THROW: ${e.message}`);
  }
}

probePlain('embind free fn (plain)', Module.__embind_dispose__);
probePlain('class_function static',  Module.StubClass.disposeStatic);
probePlain('class member method',    Module.StubClass.prototype.disposeMember);
const fnCtor = new Function('return 1');
probePlain('JS Function ctor',       fnCtor);
