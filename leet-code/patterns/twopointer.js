function isPalindrome(s) {
    // Convert to lowercase and remove non-alphanumeric characters
    let cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0;
    let right = cleaned.length - 1;
    while (left < right) {
        if (cleaned[left] !== cleaned[right]) return false;
        left++;
        right--;
    }
    return true;
}

console.log(isPalindrome("Mama"))
// TEST CASES
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car"));                      // false
console.log(isPalindrome(" "));                               // true
console.log(isPalindrome("0P"));                              // false