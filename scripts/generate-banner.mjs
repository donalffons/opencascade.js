/**
 * Writes the wide banner used at the top of the README: the mark, the wordmark,
 * and the yellow rule, on a dark rounded ground.
 *
 * The mark comes from the same libcascade-built geometry as the square logo, so
 * the two can never disagree. The wordmark is committed outlines — see
 * `lib/wordmark.mjs` for why.
 *
 *   node scripts/generate-banner.mjs            # write the asset
 *   node scripts/generate-banner.mjs --check    # fail if it has drifted
 */
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { BLACK, YELLOW, emit, markGroup, markTransform, roundedRect } from './lib/mark-geometry.mjs';
import { WORDMARK_PATH, WORDMARK_BOX } from './lib/wordmark.mjs';

const HEIGHT = 260;
const MARK_SIZE = 134;
const COLUMN_GAP = 44;
const SIDE_PADDING = 100;
const RULE_HEIGHT = 8;
const RULE_GAP = 22;
const CORNER_RADIUS = 36;

const wordWidth = WORDMARK_BOX.x2 - WORDMARK_BOX.x1;
const mark = markTransform({ size: MARK_SIZE, safeArea: 1 });
const contentWidth = mark.width + COLUMN_GAP + wordWidth;
const width = Math.round(contentWidth + SIDE_PADDING * 2);
const left = (width - contentWidth) / 2;

// Centre the mark on the wordmark's optical middle, not on its baseline.
const baseline = HEIGHT / 2 - (WORDMARK_BOX.y1 + WORDMARK_BOX.y2) / 2;
const wordLeft = left + mark.width + COLUMN_GAP - WORDMARK_BOX.x1;

const banner = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${HEIGHT}" width="${width}" height="${HEIGHT}">
<path fill="${BLACK}" d="${roundedRect(0, 0, width, HEIGHT, CORNER_RADIUS)}"/>
${markGroup({ size: MARK_SIZE, safeArea: 1, offsetX: left, offsetY: (HEIGHT - MARK_SIZE) / 2 })}
<path fill="#ffffff" transform="translate(${wordLeft.toFixed(4)} ${baseline.toFixed(4)})" d="${WORDMARK_PATH}"/>
<rect x="${(wordLeft + WORDMARK_BOX.x1).toFixed(2)}" y="${(baseline + WORDMARK_BOX.y2 + RULE_GAP).toFixed(2)}" width="${wordWidth.toFixed(2)}" height="${RULE_HEIGHT}" fill="${YELLOW}"/>
</svg>
`;

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const check = process.argv.includes('--check');

emit([[join(root, 'images/banner.svg'), banner]], { check });

console.log(check ? 'Verified the banner' : `Wrote the banner (${width}×${HEIGHT})`);
