/** The root contract is universal; configs cannot restore the removed mode switch. */
import { defineBuild } from '@libcascade/toolchain';

export default defineBuild({
  name: 'demo',
  bindings: ['gp_Pnt'],
  variants: [{ name: 'single' }],
  // EXPECT-ERROR
  assemble: { exports: 'factory' },
});
