export * from './dist/opencascade';
import opencascade from './dist/opencascade';

export function initOpenCascade(): Promise<typeof opencascade>;
