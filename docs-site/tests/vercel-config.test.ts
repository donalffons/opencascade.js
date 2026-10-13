import { describe, expect, it } from 'vitest';
import config from '../vercel.json';

describe('Vercel deployment ownership', () => {
  it('should disable direct Git deployments', () => {
    expect(config.git.deploymentEnabled).toBe(false);
    expect(config).not.toHaveProperty('ignoreCommand');
  });
});
