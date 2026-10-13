import { describe, it, expect } from 'vitest';
import {
  API_PACKAGE_PAGE_SIZE,
  packagePageCount,
  pageSegmentFor,
  parsePageSegment,
  slicePackageClasses,
} from '../../lib/api-package-pagination';

describe('api-package-pagination', () => {
  it('should split 877 classes into nine static pages', () => {
    expect(packagePageCount(877)).toBe(9);
    expect(pageSegmentFor(1)).toBeUndefined();
    expect(pageSegmentFor(9)).toBe('page-9');
    expect(parsePageSegment('page-9')).toBe(9);
    expect(parsePageSegment('page-1')).toBeUndefined();
  });

  it('should slice classes for the requested page', () => {
    const classes = Array.from({ length: 877 }, (_, i) => i);
    const { slice, page, pageCount } = slicePackageClasses(classes, 9);
    expect(page).toBe(9);
    expect(pageCount).toBe(9);
    expect(slice).toHaveLength(877 - 8 * API_PACKAGE_PAGE_SIZE);
  });
});
