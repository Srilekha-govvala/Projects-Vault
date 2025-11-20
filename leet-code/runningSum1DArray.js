//js
var runningSum = function(nums) {
    let res=nums[0];
    let arr=[]
    arr.push(nums[0])
    for(let i=1;i<nums.length;i++){
        res=nums[i]+res
        arr.push(res)
    }
    return arr
};
nums = [3,1,2,10,1]
console.log(runningSum(nums))
//react
var runningSumReact = function(nums) {
    let sum = 0;
    return nums.map(num => sum += num);
};