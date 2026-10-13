/**
 * The two-sided half of the compile-failure gate: a fully correct config that
 * must produce **zero** diagnostics. Without it, a harness that silently
 * stopped compiling anything would still "pass" the negative fixtures.
 */
import { defineBuild } from '@libcascade/toolchain';

export default defineBuild({
  name: 'demo',
  bindings: ['gp_Pnt', 'BRepPrimAPI_MakeBox', 'TopoDS', 'TColgp_Array1OfPnt', 'DemoWrapper'],
  customBindings: [{ file: 'wrappers/demo.cpp', symbols: ['DemoWrapper'] }],
  settings: {
    EXPORT_ES6: true,
    MODULARIZE: true,
    INITIAL_MEMORY: '100MB',
    MAXIMUM_MEMORY: '4GB',
    STACK_SIZE: 8_388_608,
    EXPORTED_RUNTIME_METHODS: ['FS', 'wasmMemory'],
    ENVIRONMENT: ['web', 'worker', 'node'],
    ERROR_ON_UNDEFINED_SYMBOLS: false,
    EVAL_CTORS: 2,
  },
  compilerFlags: { exceptions: 'wasm', noEntry: true, simd: true, optimize: 'O3' },
  variants: [
    { name: 'single' },
    {
      name: 'multi',
      requires: ['threads'],
      settings: {
        EVAL_CTORS: null,
        USE_PTHREADS: true,
        PTHREAD_POOL_SIZE: 'navigator.hardwareConcurrency',
        SHARED_MEMORY: true,
      },
      rawFlags: ['-pthread'],
    },
  ],
});
