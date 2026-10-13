import createModule from './experiment.mjs';
const Module = await createModule();
Module.__rbvDispose__ = function () {
  if (this.theP && typeof this.theP.delete === 'function') this.theP.delete();
  if (this.theV1 && typeof this.theV1.delete === 'function') this.theV1.delete();
  if (this.theV2 && typeof this.theV2.delete === 'function') this.theV2.delete();
};
const curve = new Module.Curve();

// Test 1: plain JS object with Symbol.dispose works with `using`?
{
  const plain = {};
  plain[Symbol.dispose] = function() { console.log('plain disposer ran'); };
  using x = plain;
  console.log('plain using OK');
}

// Test 2: val::object()-created object with C++-set Symbol.dispose
const result = curve.D2_val_with_dispose(0.5);
console.log('result keys:', Object.keys(result));
console.log('result has Symbol.dispose:', Symbol.dispose in result);
console.log('result[Symbol.dispose]:', typeof result[Symbol.dispose]);

const desc = Object.getOwnPropertyDescriptor(result, Symbol.dispose);
console.log('property descriptor:', desc);

// Test 3: copy properties to a plain object and try using
const copy = {};
for (const k of Object.keys(result)) copy[k] = result[k];
copy[Symbol.dispose] = result[Symbol.dispose];
try {
  using y = copy;
  console.log('copy using OK');
} catch (e) {
  console.log('copy using FAILED:', e.message);
}

// Test 4: try using on the original val::object() result
try {
  using z = result;
  console.log('val::object using OK');
} catch (e) {
  console.log('val::object using FAILED:', e.message);
}
