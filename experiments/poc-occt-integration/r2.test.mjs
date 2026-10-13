// r2.test.mjs — Front-load R2: does linking two TUs that both call
// `register_optional<T>()` (for the same T) throw at module-init time?
//
// We attempt to instantiate `mod-r2.mjs` which links:
//   1. bindings-optional.cpp (calls register_optional<bool>(), <double>())
//   2. bindings-r2-dup-optional.cpp (calls them AGAIN)
//
// Outcomes:
//   - resolves cleanly → embind is idempotent / tolerant of dup register;
//     bindgen does not need TU-level global dedup at emission time.
//   - rejects with "Cannot register type 'std::optional<X>' twice" →
//     bindgen MUST either:
//       (a) emit register_optional<T> once per T per whole-build (hard
//           for incremental builds across toolkits), or
//       (b) ship a libembind patch that makes _embind_register_optional
//           idempotent (the fourth hunk on top of the 3 we have).
//
// Either way the result is actionable. Result is written to
// `results.r2.json` for the README to consume.

import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));

let result;
try {
  const factory = (await import('./mod-r2.mjs')).default;
  const mod = await factory();
  // Sanity-call something so we know the module actually works after dup-register.
  const sphere = new mod.BRepPrimAPI_MakeSphere(10.0).Shape();
  const im = new mod.BRepMesh_IncrementalMesh(sphere, 0.5);
  if (!im.IsDone()) throw new Error('IM did not converge in r2 module');
  const tri = mod.count_triangles(sphere);
  result = {
    outcome: 'resolved-cleanly',
    triangles: tri,
    rootCause:
      'register_optional<T>() in emsdk bind.h:1801 uses a `thread_local static bool hasRun` ' +
      'guard. The C++ template instantiation is COMDAT-deduplicated at link time, so both TUs ' +
      'share the SAME hasRun. Second invocation is a guaranteed no-op — _embind_register_optional ' +
      'is only called ONCE per T per module regardless of how many TUs invoke register_optional<T>.',
    implication:
      'bindgen does NOT need TU-level emission dedup; no libembind hunk required. The C++ idempotency ' +
      'guarantee lives in upstream emscripten and is unconditional.',
  };
} catch (e) {
  const msg = String(e?.message ?? e);
  const duplicate = /register.*type.*twice/i.test(msg) || /already.*registered/i.test(msg);
  result = {
    outcome: duplicate ? 'duplicate-register-rejected' : 'other-error',
    error: msg,
    implication: duplicate
      ? 'embind rejects duplicate register_optional<T>(). bindgen MUST either ' +
        '(a) emit register_optional<T> once per T per whole-build, or (b) ship ' +
        'a libembind patch making _embind_register_optional idempotent.'
      : 'Unexpected failure mode — investigate before bindgen migration.',
  };
}

console.log(`R2 outcome: ${result.outcome}`);
if (result.error) console.log(`  error: ${result.error}`);
if (result.triangles !== undefined) console.log(`  triangles (sanity): ${result.triangles}`);
console.log(`  implication: ${result.implication}`);

writeFileSync(join(here, 'results.r2.json'), JSON.stringify(result, null, 2));
process.exit(result.outcome === 'resolved-cleanly' ? 0 : 1);
