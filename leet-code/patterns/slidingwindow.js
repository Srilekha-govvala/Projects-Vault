function lengthOfLongestSubstring (str){
    let charSet=new Set();
    let left=0;
    let maxLength=0;
    for (let right=0;right<str.length;right++){
        while(charSet.has(str[right])){//checking whether we have a char in the set 
            charSet.delete(str[left])//removing based on character, not the index value
            left++;
        }
        charSet.add(str[right]);
        maxLength=Math.max(maxLength,right-left+1)
    }
    return maxLength
}
// TEST CASES
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb"));   // 1
console.log(lengthOfLongestSubstring("pwwkew"));  // 3
console.log(lengthOfLongestSubstring(""));        // 0
console.log(lengthOfLongestSubstring("au"));      // 2