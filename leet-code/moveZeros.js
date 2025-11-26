var moveZeroes = function (nums) {
    let k = 0;
    //first placing non-zero values to the front
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[k] = nums[i]
            k++
        }
    }
    // placing rest with zeros
    for (let i = k; i < nums.length; i++) {
        nums[i] = 0
    }
};
let nums=[0,1,0,3,12]
moveZeroes(nums)
console.log(nums)