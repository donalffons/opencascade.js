import { getLibcascade } from './libcascade-init.js';
import { buildShape, type ShapeKind } from './build-shape.js';
import { shapeToStep } from './shape-to-step.js';

interface Args {
  shape: ShapeKind;
  size: number;
  radius: number;
  height: number;
  out: string;
}

function parseArgs(argv: string[]): Args {
  const out: Args = { shape: 'box', size: 20, radius: 10, height: 30, out: 'out.step' };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    const next = argv[i + 1];
    if (a === '--shape' && next) {
      if (next !== 'box' && next !== 'sphere' && next !== 'cylinder') {
        throw new Error(`--shape must be one of box|sphere|cylinder; got ${next}`);
      }
      out.shape = next;
      i++;
    } else if (a === '--size' && next) {
      out.size = Number(next);
      i++;
    } else if (a === '--radius' && next) {
      out.radius = Number(next);
      i++;
    } else if (a === '--height' && next) {
      out.height = Number(next);
      i++;
    } else if (a === '--out' && next) {
      out.out = next;
      i++;
    } else if (a === '--help' || a === '-h') {
      printUsage();
      process.exit(0);
    }
  }
  return out;
}

function printUsage(): void {
  console.log(
    `Usage: libcascade-step --shape box|sphere|cylinder [--size N] [--radius N] [--height N] --out path.step

Builds a primitive shape with libcascade and writes it to a
STEP AP214 file. The output is verified by callers via the
ISO-10303-21 magic byte check (\`scripts/assert-step-magic.mjs\`).`,
  );
}

const args = parseArgs(process.argv.slice(2));

try {
  const oc = await getLibcascade();
  using shape = buildShape(oc, {
    kind: args.shape,
    size: args.size,
    radius: args.radius,
    height: args.height,
  });
  await shapeToStep(oc, shape, args.out);
  console.log(`wrote ${args.out} (${args.shape}, AP214CD)`);
} catch (err) {
  console.error(`OCCT pipeline failed: ${await decodeOcctError(err)}`);
  process.exit(1);
}

/**
 * libcascade v3 throws `WebAssembly.Exception` instances when an OCCT C++
 * exception crosses the WASM boundary. `getExceptionMessage` returns
 * `[type, message]`; the type token is omitted from the user-facing
 * string because the message is what end-users want.
 */
async function decodeOcctError(err: unknown): Promise<string> {
  if (typeof WebAssembly !== 'undefined' && err instanceof WebAssembly.Exception) {
    const oc = await getLibcascade();
    const [, message] = oc.getExceptionMessage(err);
    return message;
  }
  if (err instanceof Error) return err.message;
  return String(err);
}
