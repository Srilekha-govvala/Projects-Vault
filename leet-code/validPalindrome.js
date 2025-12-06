var validPalindrome = function (s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] === s[right]) {
            left++;
            right--;
        } else {
            return isPal(s, left + 1, right) || isPal(s, left, right - 1)
        }
        return true
    }
    function isPal(s, left, right) {
        while (left < right) {
            if (s[left] !== s[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true
    }
};
let s = "aba"
console.log(validPalindrome(s))