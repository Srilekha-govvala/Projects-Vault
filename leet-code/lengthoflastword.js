var lengthOfLastWord = function(s) {
    let strArray=s.split(" ");
    let filterArr=strArray.filter(a=>a.length>0)
    return filterArr[filterArr.length-1].length;
};
let s= "Hello World";
let t= "   fly me   to   the moon  ";
let u="luffy is still joyboy";
console.log(lengthOfLastWord(s))
console.log(lengthOfLastWord(t))
console.log(lengthOfLastWord(u))