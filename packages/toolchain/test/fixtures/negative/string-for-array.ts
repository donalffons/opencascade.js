/** `ENVIRONMENT` is a typed array; the renderer owns the comma grammar, not the config. */
import { defineBuild } from '@libcascade/toolchain';

export default defineBuild({
  name: 'demo',
  bindings: ['gp_Pnt'],
  settings: {
    // EXPECT-ERROR
    ENVIRONMENT: 'web,worker',
  },
  variants: [{ name: 'single' }],
});
