import longestPalindrome, {isPalindrome} from './index'

describe("longestPalindrome", () => {
    test("when string is ''", () => {
      expect(longestPalindrome('')).toBeUndefined();
    });

    test('when string is of length 1', () => {
      expect(longestPalindrome('a')).toEqual('a');
    });

    test('when string is of length 2 and not a palindrome', () => {
      expect(longestPalindrome('ab')).toEqual('a');
    });

    test('when string is of length 2 and is a palindrome', () => {
      expect(longestPalindrome('aa')).toEqual('aa');
    });

    test('when string is of length 3 and has a palindrome', () => {
      expect(longestPalindrome('aab')).toEqual('aa');
    });

    test('when string is of length 3 and has a palindrome', () => {
      expect(longestPalindrome('bab')).toEqual('bab');
    });

    test('when string  has a palindrome', () => {
      expect(longestPalindrome('babad')).toEqual('bab');
    });

    test('testcase', () => {
      expect(longestPalindrome('cbbd')).toEqual('bb');
    });

});

describe("isPalindrome", () => {
  it('should return true when string is empty', () => {
    const input = ''
    expect(isPalindrome(input, 0, input.length - 1)).toBeTruthy();
  })

  it('should return true when string is a single letter', () => {
    const input = 'a'
    expect(isPalindrome(input, 0, input.length - 1)).toBeTruthy();
  })

  it('should return true when string is a two letter palindrome', () => {
    const input = 'aa'
    expect(isPalindrome(input, 0, input.length - 1)).toBeTruthy();
  })

  it('should return false when string is not a palindrome', () => {
    const input = 'ab'
    expect(isPalindrome(input, 0, input.length - 1)).not.toBeTruthy();
  })

  it('should return true when string is odd length palindrome', () => {
    const input = 'aba'
    expect(isPalindrome(input, 0, input.length - 1)).toBeTruthy();
  })

  it('should return true when string is a odd length palindrome', () => {
    const input = 'abeba'
    expect(isPalindrome(input, 0, input.length - 1)).toBeTruthy();
  })

  it('should return false when string is odd length and not a palindrome', () => {
    const input = 'abegfbc'
    expect(isPalindrome(input, 0, input.length - 1)).not.toBeTruthy();
  })
})
