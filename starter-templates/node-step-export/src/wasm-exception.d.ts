// WebAssembly JS Exception Handling — `WebAssembly.Exception` is implemented
// in Node 22+ but the TS 5.9 lib does not yet ship the declaration.
// `libcascade` uses `WebAssembly.Exception` as the canonical
// OCCT failure carrier, so we augment the ambient namespace here. Drop
// this block once TS lib catches up to the WebAssembly exception-handling
// proposal.
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
