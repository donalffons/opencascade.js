/**
 * Image-derived generator inputs.
 *
 * Everything the generated type layer needs that only the *image* knows —
 * emsdk's `settings.js` and legacy-settings tables, the bindgen's OCCT typedef
 * alias index, and the Embind builtin registrations — is read out of the
 * container in a single run so the generated artifacts are in lockstep with
 * the image they are published beside.
 */
import { spawnSync } from 'node:child_process';
import * as fs from 'node:fs';
import * as path from 'node:path';

const IMAGES_PATH = path.resolve(import.meta.dirname, '../../generated/images.json');

/** Probe `$LIBCASCADE_CONTAINER_CMD` → `docker` → `podman`, same order as the driver. */
export const resolveEngine = (env = process.env) => {
  const override = env.LIBCASCADE_CONTAINER_CMD;
  const candidates = override ? [override] : ['docker', 'podman'];
  for (const candidate of candidates) {
    const probe = spawnSync(candidate, ['version'], { stdio: 'ignore' });
    if (probe.status === 0) return candidate;
  }
  throw new Error(
    `No container engine found (probed: ${candidates.join(', ')}). The generators read emsdk and ` +
      'bindgen facts out of the image; install Docker/Podman or set $LIBCASCADE_CONTAINER_CMD.',
  );
};

/**
 * Reference of the image the generators read from.
 *
 * `$LIBCASCADE_IMAGE` (the local-image dev loop) wins; otherwise the pinned
 * single-threaded reference — by digest once `generate-images` has resolved it.
 *
 * @returns The image reference and whether an override replaced the pinned one.
 */
export const resolveImage = (env = process.env) => {
  const override = env.LIBCASCADE_IMAGE;
  if (override) return { reference: override, overridden: true };
  const images = JSON.parse(fs.readFileSync(IMAGES_PATH, 'utf8'));
  const { repository, singleThreaded } = images;
  const reference = singleThreaded.digest
    ? `${repository}@${singleThreaded.digest}`
    : `${repository}:${singleThreaded.tag}`;
  return { reference, overridden: false };
};

/** Python read out of the image; keep it dependency-free and side-effect-free. */
const FACTS_SCRIPT = `
import json, os, re, sys
EMSDK = '/emsdk/upstream/emscripten'
sys.path.insert(0, EMSDK)
from tools.settings import LEGACY_SETTINGS, DEPRECATED_SETTINGS
nc = json.load(open('/opencascade.js/build/ncollection-manifest.json'))
builtins_src = open('/opencascade.js/src/ocjs_bindgen/embind_builtins.py').read()
print(json.dumps({
  'emscriptenVersion': open(os.path.join(EMSDK, 'emscripten-version.txt')).read().strip().strip('"'),
  'settingsJs': open(os.path.join(EMSDK, 'src/settings.js')).read(),
  'legacySettings': [[entry[0], entry[1]] for entry in LEGACY_SETTINGS],
  'deprecatedSettings': sorted(DEPRECATED_SETTINGS),
  'templateTypedefs': nc['template_typedefs'],
  'builtinSymbols': sorted(set(re.findall(r'class_<.+?>\\("([A-Za-z0-9_]+)"\\)', builtins_src))),
}, sort_keys=True))
`;

/** @type {ReturnType<typeof readImageFacts> | undefined} */
let cached;

/**
 * Read every image-derived generator input in one container run.
 *
 * @returns emsdk version, `settings.js` text, legacy/deprecated setting tables,
 *   the OCCT typedef alias names, and the Embind builtin symbol names.
 * @throws Error when no engine is available or the container run fails.
 */
export const readImageFacts = () => {
  if (cached) return cached;
  const engine = resolveEngine();
  const { reference, overridden } = resolveImage();
  if (overridden) {
    process.stderr.write(
      `libcascade: generating from image override "${reference}" — the artifacts will carry no ` +
        'reproducible provenance. Unset $LIBCASCADE_IMAGE for release generation.\n',
    );
  }
  const result = spawnSync(
    engine,
    ['run', '--rm', '--pull=missing', '--entrypoint', 'python3', '-i', reference],
    { input: FACTS_SCRIPT, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 },
  );
  if (result.status !== 0) {
    throw new Error(
      `${engine} run … ${reference} python3 exited with status ${result.status}.\n${result.stderr}`,
    );
  }
  cached = { ...JSON.parse(result.stdout), imageReference: reference };
  return cached;
};
