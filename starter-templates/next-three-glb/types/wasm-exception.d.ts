// WebAssembly JS Exception Handling — `WebAssembly.Exception` is implemented
// in every modern browser and Node 22+, but the TS 5.9 `lib.dom.d.ts` does
// not yet ship the declaration. `libcascade` uses
// `WebAssembly.Exception` as the canonical OCCT failure carrier, so we
// augment the ambient namespace here. Drop this block once TS `lib.dom`
// catches up to the WebAssembly exception-handling proposal.
declare namespace WebAssembly {
  interface Exception extends Error {
    getArg(tag: unknown, index: number): unknown;
    is(tag: unknown): boolean;
  }
  const Exception: {
    prototype: Exception;
    new (tag: unknown, payload: unknown[]): Exception;
  };
}
