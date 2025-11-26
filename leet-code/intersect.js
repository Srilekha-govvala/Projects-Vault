var intersection = function(nums1, nums2) {
    let set1=new Set(nums1);
    let intersect=nums2.filter(num=>set1.has(num))
    let res=[...new Set(intersect)]
    return res
};

console.log(intersection([1,2,3,4,56,7,8],[7,7,8,9]));
console.log(intersection([1,2,2,3],[2,2]))