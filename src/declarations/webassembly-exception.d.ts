declare global {
  namespace WebAssembly {
    /**
     * Native exception object thrown by a build using `-fwasm-exceptions`.
     * Its structural declaration merges with standard-library definitions.
     */
    interface Exception {
      readonly [Symbol.toStringTag]: 'WebAssembly.Exception';
    }
  }
}

export {};
