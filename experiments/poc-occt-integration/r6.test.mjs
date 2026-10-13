// r6.test.mjs — Front-load R6: output / inout reference parameters
// MUST NOT be std::optional-wrapped.
//
// Two failure-mode classifications:
//
//   (A) std::optional<T&> — std::optional of REFERENCE. C++ forbids it
//       (until C++26). Bindgen-emitted code with this shape FAILS TO
//       COMPILE — the loudest possible failure mode, can never reach
//       runtime. Verified by `./build.sh r6-illegal` (compile log
//       checked in via `r6-illegal.compile.log`).
//
//   (B) std::optional<T> — std::optional BY VALUE substituted for a
//       T& output parameter. THIS COMPILES (bindgen wouldn't notice).
//       At runtime the C++ side mutates a LOCAL COPY of T extracted
//       from value_or — the JS caller's object is unchanged.
//       Demonstrated below.
//
// Together with R5's confirmation that legitimate trailing-default
// reference parameters (const T& with `= T()`) translate correctly via
// std::optional<T>-by-value, this means bindgen MUST classify
//   "trailing const T& with = initializer"  → std::optional<T>  ✓
//   "any non-const T& without = initializer" → KEEP as T& binding ✗ never optional
// at emission time. Misclassification of category 1 is loud (compile);
// of category 2 is silent (runtime data loss).

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const mod = await (await import('./mod-optional.mjs')).default();

const sphere = new mod.BRepPrimAPI_MakeSphere(1.0).Shape();

// (A) Loud-fail verification — confirm the compile log exists and
//     contains the expected static_assert message.
const illegalLog = join(here, 'r6-illegal.compile.log');
const haveIllegalLog = existsSync(illegalLog);
const loudFailEvidence = haveIllegalLog
  ? readFileSync(illegalLog, 'utf8')
  : '';
const loudFailDetected = /static assertion failed.*reference|is_reference_v.*optional/i.test(loudFailEvidence);

// (B) Silent-corruption demonstration — show that std::optional<gp_Pnt>
//     bound to a "would-be" output param swallows the mutation.
const callerPnt = new mod.gp_Pnt(1, 2, 3);
const correctSink = new mod.gp_Pnt(0, 0, 0);
mod.r6_correct_output_sink(sphere, correctSink);
const correctMutated = (correctSink.X() === 42 && correctSink.Y() === 43 && correctSink.Z() === 44);

const beforeBad = { x: callerPnt.X(), y: callerPnt.Y(), z: callerPnt.Z() };
mod.r6_bad_output_via_optional(sphere, callerPnt);
const afterBad = { x: callerPnt.X(), y: callerPnt.Y(), z: callerPnt.Z() };
const mutationSilentlyLost = (afterBad.x === beforeBad.x && afterBad.y === beforeBad.y && afterBad.z === beforeBad.z);

callerPnt.delete(); correctSink.delete();

console.log(`── R6 (A) std::optional<T&> compile loud-fail ──`);
console.log(`  compile log present: ${haveIllegalLog}`);
console.log(`  static_assert detected: ${loudFailDetected}`);
console.log(`  loud-fail status: ${loudFailDetected ? 'CONFIRMED' : 'NOT VERIFIED'}`);

console.log(`\n── R6 (B) std::optional<T>-by-value silent corruption demo ──`);
console.log(`  control (T& sink): caller's gp_Pnt mutated to (42,43,44)? ${correctMutated}`);
console.log(`  experiment (std::optional<T> as sink): caller's gp_Pnt unchanged after call? ${mutationSilentlyLost}`);
console.log(`    before: (${beforeBad.x}, ${beforeBad.y}, ${beforeBad.z})`);
console.log(`    after : (${afterBad.x}, ${afterBad.y}, ${afterBad.z})`);

const verdict = {
  loudFailOnReferenceOptional: loudFailDetected,
  silentLossOnByValueMisclassification: mutationSilentlyLost,
  controlCorrectSinkWorks: correctMutated,
  implication:
    'bindgen MUST classify trailing parameters by (a) presence of `=` initializer AND (b) const-ness of the reference. ' +
    'Only `const T& foo = T()` → std::optional<T> is safe. Any non-const T& parameter (with or without an = initializer) ' +
    'is an OUTPUT SINK and MUST remain a raw T& binding (the existing TR-OUT pathway). Misclassification mode A ' +
    '(emitting std::optional<T&>) fails LOUDLY at compile time. Misclassification mode B (emitting std::optional<T> ' +
    'by value for a non-const T& output param) is SILENT and corrupts data — bindgen needs an emit-time precondition ' +
    'check that refuses to wrap any non-const reference in std::optional<...>.',
};

writeFileSync(join(here, 'results.r6.json'), JSON.stringify(verdict, null, 2));
console.log(`\nR6 verdict written to results.r6.json`);

const overallPass = loudFailDetected && mutationSilentlyLost && correctMutated;
process.exit(overallPass ? 0 : 1);
