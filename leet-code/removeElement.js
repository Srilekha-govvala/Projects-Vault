var removeElement = function(nums, val) {
    let newarr= nums.filter((num)=>(num!==val))
    //  let na=[];
    // for (let num of nums){
    // //    console.log(num, val)
    //     if(num!==val){
    //         na.push(num)
    //     }
        
    // }
    return newarr
    // console.log(newarr)
    return newarr.length;
};
var removeElement1 = function(nums, val) {
   return nums.filter((num)=>(num!==val)).length
};
const nums=[0,1,2,2,3,0,4,2]
const val=2;
console.log(removeElement(nums,val))
console.log(removeElement1(nums,val))
//we should not create new array and modify the array inplace
var inplacefunction=(nums,val)=>{
    let k=0;
    for (let i=0;i<nums.length;i++){
        if(nums[i]!==val){
            nums[k]=nums[i];
            k++;
        }
    }
    console.log(nums);
    return k;
}
console.log(inplacefunction(nums,val))