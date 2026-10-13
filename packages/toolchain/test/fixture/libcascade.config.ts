import { defineBuild } from '@libcascade/toolchain';

export default defineBuild({
  name: 'demo',
  bindings: ['gp_Pnt', 'BRepPrimAPI_MakeBox', 'DemoWrapper'],
  customBindings: [{ file: 'wrappers/demo.cpp', symbols: ['DemoWrapper'] }],
  settings: {
    EXPORT_ES6: true,
    MODULARIZE: true,
    INITIAL_MEMORY: '100MB',
    EXPORTED_RUNTIME_METHODS: ['FS'],
    EVAL_CTORS: 2,
  },
  compilerFlags: { exceptions: 'wasm', noEntry: true, simd: true, optimize: 'O3' },
  variants: [
    { name: 'single' },
    {
      name: 'multi',
      requires: ['threads'],
      settings: { EVAL_CTORS: null, USE_PTHREADS: true, ENVIRONMENT: ['web', 'worker', 'node'] },
      rawFlags: ['-pthread'],
    },
  ],
});
