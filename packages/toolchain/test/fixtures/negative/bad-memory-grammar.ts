/** Proves `MemorySize` rejects lowercase suffixes that emcc does not parse as byte units. */
import { defineBuild } from '@libcascade/toolchain';

export default defineBuild({
  name: 'demo',
  bindings: ['gp_Pnt'],
  settings: {
    // EXPECT-ERROR
    INITIAL_MEMORY: '100mb',
  },
  variants: [{ name: 'single' }],
});
