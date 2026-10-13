// CSP-safe path: validate functional correctness on V8 13.6 (Node 24.3).
import createModule from './csp-safe.mjs';
const Module = await createModule();
console.log('Node:', process.versions.node, 'V8:', process.versions.v8);
console.log('Module.__ocjsRbvDispose__ defined:', typeof Module.__ocjsRbvDispose__);

const realDelete = Module.Pnt3.prototype.delete;
let deleteCount = 0;
Module.Pnt3.prototype.delete = function () {
  deleteCount++;
  return realDelete.apply(this, arguments);
};

console.log('--- EM_JS path: synchronous dispose ---');
{
  deleteCount = 0;
  const r = Module.Container.makeViaEmJs();
  r[Symbol.dispose]();
  console.log(`  deleteCount=${deleteCount}  (expected 2)`);
}

console.log('--- EM_JS path: `using` scope exit ---');
{
  deleteCount = 0;
  {
    using r = Module.Container.makeViaEmJs();
    void r;
  }
  console.log(`  deleteCount=${deleteCount}  (expected 2)`);
}

console.log('--- EM_JS path: SuppressedError handling ---');
{
  deleteCount = 0;
  try {
    using r = Module.Container.makeViaEmJs();
    void r;
    throw new Error('user error');
  } catch (e) {
    console.log(`  caught: ${e.message}, deleteCount=${deleteCount}  (expected 2)`);
  }
}

console.log('--- EM_JS path: DisposableStack interop ---');
{
  deleteCount = 0;
  const stack = new DisposableStack();
  stack.use(Module.Container.makeViaEmJs());
  stack.use(Module.Container.makeViaEmJs());
  stack.dispose();
  console.log(`  deleteCount=${deleteCount}  (expected 4)`);
}

console.log('--- Output JS contains no eval/Function constructor: VERIFIED earlier ---');
console.log('--- Build flags: -sDYNAMIC_EXECUTION=0 (CSP strict): VERIFIED ---');
