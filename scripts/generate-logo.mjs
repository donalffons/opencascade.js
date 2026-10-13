/**
 * Writes the square brandmark: the two-band C on its dark tile.
 *
 *   node scripts/generate-logo.mjs            # write the assets
 *   node scripts/generate-logo.mjs --check    # fail if they have drifted
 */
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { BLACK, BOX, emit, markGroup, roundedRect } from './lib/mark-geometry.mjs';

const mark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${BOX} ${BOX}">\
<path fill="${BLACK}" d="${roundedRect(0, 0, BOX, BOX, 96)}"/>\
${markGroup({ safeArea: 0.66 })}\
</svg>
`;

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const check = process.argv.includes('--check');

emit(
  [
    [join(root, 'images/logo.svg'), mark],
    [join(root, 'docs-site/public/logo.svg'), mark],
    [join(root, 'docs-site/public/favicon.svg'), mark],
  ],
  { check },
);

console.log(check ? 'Verified 3 mark assets' : 'Wrote 3 mark assets');
