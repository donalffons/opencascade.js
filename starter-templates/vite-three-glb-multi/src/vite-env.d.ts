/// <reference types="vite/client" />

// WebAssembly JS Exception Handling — `WebAssembly.Exception` is implemented
// in every modern browser but the TS 5.9 lib.dom.d.ts doesn't ship the
// declaration yet. `libcascade` uses `WebAssembly.Exception` as
// the canonical OCCT failure carrier, so we augment the ambient namespace
// here. Drop this block once TS lib.dom catches up.
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
