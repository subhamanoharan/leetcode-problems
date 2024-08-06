/**
 * https://leetcode.com/problems/longest-palindromic-substring/
 * @param {string} s
 * @return {string}
 */

export const isPalindrome = (input, i1, i2) => {
  if(i1 >= i2) return true
  const v1 = input.charAt(i1)
  const v2 = input.charAt(i2)
  return v1 === v2 ? isPalindrome(input, i1+ 1, i2-1) : false
}

var longestPalindrome = function(s) {
  let longestPalindrome = s[0]
  for(let i=0; i< s.length -1; i++) {
    for(let j=s.length-1; j >= i; j--) {
      const palindrome = isPalindrome(s, i, j)
      if(palindrome) {
        const substring = s.substring(i, j+1)
        longestPalindrome = substring.length > longestPalindrome.length ?
          substring : longestPalindrome
        break;
      }
    }
  }
  return longestPalindrome
};

export default longestPalindrome;
