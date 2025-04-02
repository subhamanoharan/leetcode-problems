import canPlaceFlowers from './index'

describe("canPlaceFlowers", () => {
    test('when flower bed has no plots', () => {
      expect(canPlaceFlowers([], 1)).toBe(false);
    });

    test('when flower bed has 1 plot without flowers and can plant one', () => {
      expect(canPlaceFlowers([0], 1)).toBe(true);
    });

    test('when flower bed has 1 plot without flowers and cannot plant two', () => {
      expect(canPlaceFlowers([0], 2)).toBe(false);
    });

    test('when flower bed has 2 plot without flowers and can plant one', () => {
      expect(canPlaceFlowers([0, 0], 1)).toBe(true);
    });

    test('when flower bed has 2 plot without flowers and cannot plant two', () => {
      expect(canPlaceFlowers([0, 0], 2)).toBe(false);
    });

    test('when flower bed has 3 plot without flowers and can plant two', () => {
      expect(canPlaceFlowers([0, 0, 0], 2)).toBe(true);
    });

    test('when flower bed has 3 plot without flowers and cannot plant three', () => {
      expect(canPlaceFlowers([0, 0, 0], 3)).toBe(false);
    });

    test('when flower bed has 1 plot with flowers and cannot plant one', () => {
      expect(canPlaceFlowers([1], 1)).toBe(false);
    });

    test('when flower bed has 2 plot - one with flowers, one empty and cannot plant one', () => {
      expect(canPlaceFlowers([1, 0], 1)).toBe(false);
    });

    test('when flower bed has 3 plot - one with flowers, two empty and cannot plant one', () => {
      expect(canPlaceFlowers([0, 1, 0], 1)).toBe(false);
    });

    test('when flower bed has 3 plot - first one with flowers, two empty and can plant one', () => {
      expect(canPlaceFlowers([1, 0, 0], 1)).toBe(true);
    });

    test('when flower bed has 3 plot - last one with flowers, two empty and can plant one', () => {
      expect(canPlaceFlowers([0, 0, 1], 1)).toBe(true);
    });
  });