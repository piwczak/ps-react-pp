import { getWidthAsPercentOfTotalWidth } from './percentUtils';

describe('getWidthAsPercentOfTotalWidth', () => {
  test('should return 250 with total width 50 and percent of 50', () => {
    const width = getWidthAsPercentOfTotalWidth(50, 500);
    expect(width).toBe(250);
  });
});
