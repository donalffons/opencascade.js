declare namespace WebAssembly {
  class Exception extends Error {
    constructor(tag: WebAssembly.Tag, payload: unknown[], options?: { traceStack?: boolean });
    is(tag: WebAssembly.Tag): boolean;
    getArg(tag: WebAssembly.Tag, index: number): unknown;
  }

  class Tag {
    constructor(descriptor: { parameters: string[] });
  }
}
