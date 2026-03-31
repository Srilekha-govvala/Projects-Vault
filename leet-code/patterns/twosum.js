function twoSum(arr,target){
    const map=new Map();
    for(let i=0;i<arr.length;i++){
        let num=arr[i];
        let complement=target-arr[i];
        if(map.has(complement)){
            return [map.get(complement),i]
        }
        map.set(num,i)
    }
    return []
}
// TEST CASES
console.log(twoSum([2, 7, 11, 15], 9));      // [0, 1]
console.log(twoSum([3, 2, 4], 6));           // [1, 2]
console.log(twoSum([3, 3], 6));              // [0, 1]
console.log(twoSum([2, 5, 5, 11], 10));      // [1, 2]
console.log(twoSum([-1, -2, -3, -6], -5));   // [0, 2] or [1, 3]