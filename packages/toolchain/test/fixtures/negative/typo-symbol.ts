/** A typo'd OCCT symbol must not reach the container as a runtime BindingError. */
import { defineBuild } from '@libcascade/toolchain';

export default defineBuild({
  name: 'demo',
  // EXPECT-ERROR
  bindings: ['BRepPrimAPI_MakeBoox'],
  variants: [{ name: 'single' }],
});
