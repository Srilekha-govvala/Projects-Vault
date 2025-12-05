let isCheckPalindrome=(s)=>{
    //lowerCase to string
    s=s.toLowerCase();
    //keep only alphanumeric characters
    let filtered=s.split("").filter(a=>a.match("[a-z0-9]"))//test/ match can be used to compare the regex, 
    // to use test we need to write in this way: filter(ch=>/[a-z0-9]/.test(ch))
    //create reversed version
    let reversed = [...filtered].reverse();
    //compare arrays as strings
    return filtered.join("")===reversed.join("")
}
let myPalindromeCheck=(s)=>{
    s=s.toLowerCase();
    let filtered=s.split("").filter(ch=>/[a-z0-9]/.test(ch))
    let str1="";
    for(let i=0;i<filtered.length;i++) str1+=filtered[i];
    let str2="";
    for(let i= filtered.length-1;i>=0;i--) str2+=filtered[i];
    return str1===str2
}
let s = "A man, a plan, a canal: Panama";
let num="145541";
let str=" ";
let sen="race a car";
console.log(isCheckPalindrome(s));
console.log(myPalindromeCheck(num));
console.log(isCheckPalindrome(str));
console.log(myPalindromeCheck(sen))