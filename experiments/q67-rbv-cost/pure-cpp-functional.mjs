// Functional verification: pure-C++ V6 disposer actually frees the contained
// Pnt3 instances (i.e., V8 invokes the cached `new Function(...)` JS callable
// with this = container, and the body iterates and calls .delete()).

import createModule from './pure-cpp.mjs';
const Module = await createModule();
console.log('Node:', process.versions.node, 'V8:', process.versions.v8);

// Patch Pnt3.prototype.delete to count invocations
const realDelete = Module.Pnt3.prototype.delete;
let deleteCount = 0;
Module.Pnt3.prototype.delete = function () {
  deleteCount++;
  return realDelete.apply(this, arguments);
};

console.log('--- V6 cached: synchronous, no scope ---');
{
  deleteCount = 0;
  const r = Module.Container.makeV6_cached();
  console.log(`  pre-dispose deleteCount=${deleteCount}`);
  r[Symbol.dispose]();
  console.log(`  post-dispose deleteCount=${deleteCount}  (expected 2)`);
}

console.log('--- V6 cached: with `using` declaration ---');
{
  deleteCount = 0;
  {
    using r = Module.Container.makeV6_cached();
    console.log(`  inside scope deleteCount=${deleteCount}  (expected 0)`);
    void r;
  }
  console.log(`  after scope deleteCount=${deleteCount}  (expected 2)`);
}

console.log('--- V6 cached: SuppressedError handling (throwing inside scope) ---');
{
  deleteCount = 0;
  try {
    using r = Module.Container.makeV6_cached();
    void r;
    throw new Error('user error');
  } catch (e) {
    console.log(`  caught: ${e.message}, deleteCount=${deleteCount}  (expected 2)`);
  }
}

console.log('--- V6 cached: DisposableStack interop ---');
{
  deleteCount = 0;
  const stack = new DisposableStack();
  stack.use(Module.Container.makeV6_cached());
  stack.use(Module.Container.makeV6_cached());
  console.log(`  pre-dispose deleteCount=${deleteCount}  (expected 0)`);
  stack.dispose();
  console.log(`  post-dispose deleteCount=${deleteCount}  (expected 4)`);
}

console.log('--- V8 14.1+ users (Node 25+) get identical behavior natively ---');
