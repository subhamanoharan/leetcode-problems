import lengthOfLongestSubstring, {} from './index'

describe("getLongestSubstringWithoutRepetition", () => {
    test('when string is null', () => {
      expect(lengthOfLongestSubstring(null)).toEqual(0);
    });

    test('when string is empty', () => {
      expect(lengthOfLongestSubstring('')).toEqual(0);
    });

    test('when string has length 1', () => {
      expect(lengthOfLongestSubstring('a')).toEqual(1);
    });

    test('when string has length 2 with no repetition', () => {
      expect(lengthOfLongestSubstring('ab')).toEqual(2);
    });

    test('when string has length 2 with repetition', () => {
      expect(lengthOfLongestSubstring('aa')).toEqual(1);
    });

    test('when string has no repetition at the end', () => {
      expect(lengthOfLongestSubstring('aabcd')).toEqual(4);
    });

    test('when string has no repetition in the middle', () => {
      expect(lengthOfLongestSubstring('aabcdaeaa')).toEqual(5);
    });

    test('testcase1', () => {
      expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3);
    });

    test('testcase2', () => {
      expect(lengthOfLongestSubstring('bbbbb')).toEqual(1);
    });

    test('testcase3', () => {
      expect(lengthOfLongestSubstring('pwwkew')).toEqual(3);
    });

    test('testcase4', () => {
      expect(lengthOfLongestSubstring('ohvhjdml')).toEqual(6);
    });
});
