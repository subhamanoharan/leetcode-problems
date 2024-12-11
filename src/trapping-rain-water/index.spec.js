import trap from './index'

describe("trap rain water", () => {
    test('when array is empty', () => {
      expect(trap([])).toBe(0);
    });

    test('when elevations has single element', () => {
      expect(trap([1])).toBe(0);
    });
    test('when elevations has two elements', () => {
      expect(trap([1, 2])).toBe(0);
    });

    test('when elevations has three elements which are only elevations', () => {
      expect(trap([1, 2, 3])).toBe(0);
    });

    test('when elevations has three elements which have depression', () => {
      expect(trap([1, 0, 1])).toBe(1);
    });

    test('when elevations has three elements which have depression with value > 1', () => {
      expect(trap([3, 1, 3])).toBe(2);
    });

    test('when elevations has four elements with one depression with value > 1', () => {
      expect(trap([3, 1, 0, 1])).toBe(1);
    });

    test('when initial elevation ', () => {
      expect(trap([0,1])).toBe(0);
    });

    test('when elevations has multiple elements ', () => {
      expect(trap([0,1,0,2,1,0,1,3,2,1,2,1])).toBe(6);
    });

    test('when elevations has multiple elements ', () => {
      expect(trap([4, 2, 3])).toBe(1);
    });
})
