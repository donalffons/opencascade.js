// Orchestrator — runs every harness in sequence and surfaces an aggregate
// pass/fail. Used by the comprehensive POC's CI smoke command.
//
//   node --expose-gc run.mjs

import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));

const stages = [
  { label: "parity",     args: ["parity.mjs"] },
  { label: "mutation",   args: ["mutation.mjs"] },
  { label: "leak",       args: ["--expose-gc", "leak.mjs"] },
  { label: "dts-assert", args: ["dts-assert.mjs"] },
  { label: "bench",      args: ["--expose-gc", "bench.mjs"] },
];

let failed = 0;
for (const { label, args } of stages) {
  console.log(`\n────────────────────────────────────────  ${label.toUpperCase()}\n`);
  const r = spawnSync("node", args, { cwd: here, stdio: "inherit" });
  if (r.status !== 0) {
    failed += 1;
    console.error(`  ${label} exited with status ${r.status}`);
  }
}
console.log(`\n=========================================\n${failed === 0 ? "ALL PASS" : `${failed} stage(s) FAILED`}`);
process.exit(failed === 0 ? 0 : 1);
