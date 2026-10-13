import createModule from './experiment.mjs';
const Module = await createModule();
Module.__rbvDispose__ = function () {
  if (this.theP && typeof this.theP.delete === 'function') this.theP.delete();
  if (this.theV1 && typeof this.theV1.delete === 'function') this.theV1.delete();
  if (this.theV2 && typeof this.theV2.delete === 'function') this.theV2.delete();
};
const curve = new Module.Curve();

// Test: same result obj but replace the C++-set disposer with a fresh JS function
const result = curve.D2_val_with_dispose(0.5);
const original = result[Symbol.dispose];
console.log('original type:', typeof original, 'name:', original.name);

// Replace with a plain JS arrow function — does using accept this?
result[Symbol.dispose] = () => {
  result.theP.delete();
  result.theV1.delete();
  result.theV2.delete();
};

try {
  using r = result;
  r.theP.X();
  console.log('using OK with replaced JS fn');
} catch (e) {
  console.log('using FAILED with replaced JS fn:', e.message);
}

// Now try with the original bound function via direct call
const result2 = curve.D2_val_with_dispose(0.5);
const fn = result2[Symbol.dispose];
console.log('fn typeof:', typeof fn);
console.log('fn IsCallable:', fn instanceof Function);
console.log('fn.call works:', (() => { try { fn.call(result2); return 'yes'; } catch(e) { return e.message; } })());
