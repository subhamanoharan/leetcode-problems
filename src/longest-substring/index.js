/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * @param {string} s
 * @return {number}
 */
const getLongestSubstringWithoutRepetition = (s) => {
  let validSubstring = ''
  let maxLength = 0
  for(let i=0;i<s.length;i++) {
    const char = s[i]
    validSubstring = validSubstring.includes(char) ?
      validSubstring.substring(validSubstring.indexOf(char) + 1) + char :
      validSubstring + char
    maxLength = Math.max(validSubstring.length, maxLength)
  }
  return maxLength
}

var lengthOfLongestSubstring = function(s) {
  if(!s) return 0
  return getLongestSubstringWithoutRepetition(s)
};

export default lengthOfLongestSubstring;
