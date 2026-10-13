/** An `-s` name emsdk does not define must not survive to the emcc command line. */
import { defineBuild } from '@libcascade/toolchain';

export default defineBuild({
  name: 'demo',
  bindings: ['gp_Pnt'],
  settings: {
    // EXPECT-ERROR
    INITIAL_MEMORYY: '100MB',
  },
  variants: [{ name: 'single' }],
});
