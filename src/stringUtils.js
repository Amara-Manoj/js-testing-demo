function isPalindrome(str) {
  if (!str) return false;
  const clean = str.toLowerCase().replace(/\s+/g, '');
  return clean === clean.split('').reverse().join('');
}
function reverse(str) {
  if (str === null || str === undefined) return null;
  return str.split('').reverse().join('');
}
module.exports = { isPalindrome, reverse };
