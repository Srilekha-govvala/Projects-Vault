var isAnagram = function(s, t) {
    if (s.length !==t.length) return false;
    let arr1=s.split("").sort().join("");//join()by default uses comma, if we put join("") then give clean string
    let arr2=t.split("").sort().join("");
    return arr1===arr2
};
console.log(isAnagram("tata","atta"));
console.log(isAnagram("akka","bakka"))