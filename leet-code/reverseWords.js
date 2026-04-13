function rev(s){
    let currentWord="";
    let words=[];
    for(let i=0;i<s.length;i++){
        if(s[i]!== " "){
            //building a word by concatinating the characters
            currentWord+=s[i];
        }else{
            if(currentWord.length>0){
                //adding the word in the new array
                words.push(currentWord)//word will be added in the left-right manner when we use push in the array
                currentWord="";
            }
        }
    }
    if(currentWord.length>0){words.push(currentWord)}
    let result=""
    for(let j= words.length-1;j>=0;j--){
        result+=words[j];
        if(j>0) result+=" ";
    }
    return result;
}
console.log(rev(" the sk y  is blue "));