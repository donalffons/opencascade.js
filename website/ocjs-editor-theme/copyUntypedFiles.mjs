import fs from 'fs-extra';
import { fileURLToPath } from 'url';

const srcDir = fileURLToPath(new URL('src', import.meta.url));
const libDir = fileURLToPath(new URL('lib', import.meta.url));
await fs.copy(srcDir, libDir, {
  filter(filepath) {
    return !/__tests__/.test(filepath) && !/\.tsx?$/.test(filepath);
  },
});