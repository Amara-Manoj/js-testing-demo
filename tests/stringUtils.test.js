const { isPalindrome, reverse } = require('../src/stringUtils');
test('recognizes palindrome', () => { expect(isPalindrome('Racecar')).toBe(true); });
test('recognizes non-palindrome', () => { expect(isPalindrome('Hello')).toBe(false); });
test('reverses string', () => { expect(reverse('abc')).toBe('cba'); });
test('handles null', () => { expect(reverse(null)).toBeNull(); });
