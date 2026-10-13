// ts-fidelity.mjs — compare declared vs runtime-callable TS surface per row.
//
// The full check requires running the OCJS bindgen TS emitter against the
// row's binding source to produce a .d.ts fragment, then statically
// extracting the declared overload signatures and comparing them against
// the runtime-callable shapes the row's tests exercised.
//
// In scaffold mode (no bindgen run) this module emits a 'pending-ts-emitter'
// marker so the bench runner still aggregates a complete table. The shape
// of the live-mode output is documented in the per-row JSON schema:
//   {
//     declared: ['(a: bool) => void', '() => void'],
//     callable: ['(a: bool) => void', '() => void'],
//     match: true,
//     diff: { onlyDeclared: [], onlyCallable: [] }
//   }
//
// To wire live-mode comparison post-Phase-1:
//   1. Invoke `python -m ocjs_bindgen --filter Row<NN>_<Class> --tsdir <tmp>`
//      against the synthetic bindings (this requires the full bindgen
//      Python toolchain — see paths.py).
//   2. Parse the emitted .d.ts via `typescript` compiler API (already a
//      build-time dep) to extract overload signatures by class+method name.
//   3. Cross-check each signature against the row's `shapes` array — every
//      declared overload should accept at least one shape's arg-tuple types
//      and every callable shape should match at least one declared overload.

export const scoreTsFidelity = (perRowRecord) => {
  if (perRowRecord.mode === 'scaffold') {
    return {
      rowId: perRowRecord.rowId,
      scaffold: true,
      match: null,
      declared: null,
      callable: null,
      note: 'pending-ts-emitter — requires Phase 1 bindgen integration',
    };
  }
  if (perRowRecord.tsFidelity?.declared === 'pending-ts-emitter') {
    return {
      rowId: perRowRecord.rowId,
      scaffold: false,
      match: null,
      declared: null,
      callable: null,
      note: 'TS emitter not yet wired; bindings WASM is live but .d.ts comparison TODO',
    };
  }
  return {
    rowId: perRowRecord.rowId,
    scaffold: false,
    declared: perRowRecord.tsFidelity.declared,
    callable: perRowRecord.tsFidelity.callable,
    match: perRowRecord.tsFidelity.match,
    diff: perRowRecord.tsFidelity.diff,
  };
};
