#!/usr/bin/env node
/**
 * Generate the symbol catalog used by config validation and symbol detection.
 * It contains names, kinds, ancestors, and member-referenced types; prose stays
 * in `libcascade/api-reference.json`.
 */
import { loadSymbolUniverse, referencedTypes, writeGenerated } from './lib/symbols.mjs';

const { provenance, entries } = loadSymbolUniverse();
const universe = new Set(entries.map((entry) => entry.name));

const catalog = {
  $generatedBy: `packages/toolchain/scripts/generate-symbol-catalog.mjs from ${provenance} — do not edit.`,
  // Empty `parents` / `referencedTypes` are omitted rather than written as
  // `[]` (~90 KB of the shipped bytes); consumers read them as `?? []`.
  symbols: entries.map((entry) => {
    const referenced = referencedTypes(entry, universe);
    return {
      name: entry.name,
      kind: entry.kind,
      ...(entry.parents.length > 0 ? { parents: entry.parents } : {}),
      ...(referenced.length > 0 ? { referencedTypes: referenced } : {}),
    };
  }),
};

writeGenerated('symbol-catalog.json', `${JSON.stringify(catalog)}\n`);
process.stdout.write(`  ${catalog.symbols.length} symbols\n`);
