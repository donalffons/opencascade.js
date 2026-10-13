import 'server-only';
import { promises as fs } from 'node:fs';
import { join, resolve } from 'node:path';

export type TypeHit = {
  readonly url: string;
  readonly fragment: string;
  readonly shard: string;
};

type TypeIndexFile = {
  readonly schema: number;
  readonly denylist: readonly string[];
  readonly entries: ReadonlyArray<readonly [string, TypeHit]>;
};

const DATA_PATH = resolve(process.cwd(), 'data/api-type-index.json');

let loaded: Promise<{ denylist: ReadonlySet<string>; entries: ReadonlyMap<string, TypeHit> }> | undefined;

/**
 * Lazily loads `data/api-type-index.json` once per server process. The 900 KB
 * JSON stays out of the Next module graph; only the parsed `Map` and `Set`
 * sit in heap.
 */
export const loadTypeIndex = (): Promise<{ denylist: ReadonlySet<string>; entries: ReadonlyMap<string, TypeHit> }> => {
  if (!loaded) {
    loaded = fs.readFile(join(DATA_PATH), 'utf8').then((raw) => {
      const parsed = JSON.parse(raw) as TypeIndexFile;
      return {
        denylist: new Set(parsed.denylist),
        entries: new Map(parsed.entries),
      };
    });
  }
  return loaded;
};
