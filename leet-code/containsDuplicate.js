var containDuplicate =(nums)=>{
    let unique= new Set(nums);
    if(unique.size!==nums.length){
        return true
    } return false
}
const nums = [1,1,1,3,3,4,3,2,4,2]
console.log(containDuplicate(nums))
//without set
var foroffunc=(nums)=>{
    let seen={}
    for (let num of nums){
        if(seen[num]) return true;
        seen[num]=true;
    }
    return false
}
console.log(foroffunc(nums));