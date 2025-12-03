var majorityElement = function (nums) {
    //sorting method 
    nums.sort((a, b) => a - b);
    return nums[Math.floor(nums.length / 2)];
}  
var majorityElement2 = function(nums){
    //boyer-Moore Voting method
    let candidate=null;
    let count=0;
    for (let num of nums){
        if(count === 0){
            candidate=num
        }
        count+=(num === candidate)?1:-1;
    }
    return candidate;
}
var nums = [2,2,1,1,1,2,2]
console.log(majorityElement(nums))
var nums=[3,2,3]
console.log(majorityElement2(nums))