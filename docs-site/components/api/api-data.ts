import { promises as fs } from 'node:fs';
import { join, resolve } from 'node:path';
import type { ApiIndex, ApiShard } from './types';

const DATA_DIR = resolve(process.cwd(), 'data');

let indexPromise: Promise<ApiIndex> | undefined;

export const loadIndex = (): Promise<ApiIndex> => {
  if (!indexPromise) {
    indexPromise = fs
      .readFile(join(DATA_DIR, 'index.json'), 'utf8')
      .then((raw) => JSON.parse(raw) as ApiIndex);
  }
  return indexPromise;
};

const shardCache = new Map<string, Promise<ApiShard>>();

export const loadShard = (shardKey: string): Promise<ApiShard> => {
  let promise = shardCache.get(shardKey);
  if (!promise) {
    promise = fs
      .readFile(join(DATA_DIR, `${shardKey}.json`), 'utf8')
      .then((raw) => JSON.parse(raw) as ApiShard);
    shardCache.set(shardKey, promise);
  }
  return promise;
};
