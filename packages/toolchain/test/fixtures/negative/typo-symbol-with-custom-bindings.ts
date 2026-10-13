/**
 * The `NoInfer` guard: declaring custom symbols must widen `bindings` by exactly
 * those symbols, not by "any string that happens to be listed".
 */
import { defineBuild } from '@libcascade/toolchain';

export default defineBuild({
  name: 'demo',
  // EXPECT-ERROR
  bindings: ['BRepPrimAPI_MakeBoox', 'DemoWrapper'],
  customBindings: [{ file: 'wrappers/demo.cpp', symbols: ['DemoWrapper'] }],
  variants: [{ name: 'single' }],
});
