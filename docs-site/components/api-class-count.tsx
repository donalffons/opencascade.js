import { apiTree } from '../lib/api-source';

export const ApiClassCount = (): string => apiTree.totals.classes.toLocaleString();
