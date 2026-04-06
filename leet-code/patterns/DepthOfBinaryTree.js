function TreeNode(value, left, right){
    this.value=(value===undefined?0:value);
    this.left=(left===undefined?null:left);
    this.right=(right===undefined?null:right);
}
function maxDepth(root){
    if (!root) return 0;
    const leftDepth=maxDepth(root.left);
    const rightDepth=maxDepth(root.right);

    return 1+Math.max(leftDepth,rightDepth)
}

// TEST CASES
// Test 1: Balanced tree
const root1 = new TreeNode(3,
    new TreeNode(9),
    new TreeNode(20,
        new TreeNode(15),
        new TreeNode(7)
    )
);
console.log(maxDepth(root1));
// Expected: 3

// Test 2: Linear tree
const root2 = new TreeNode(2,
    null,
    new TreeNode(3)
);
console.log(maxDepth(root2));
// Expected: 2

// Test 3: Single node
const root3 = new TreeNode(1);
console.log(maxDepth(root3));
// Expected: 1

// Test 4: Empty tree
console.log(maxDepth(null));
// Expected: 0

// Test 5: Deeper tree
const root4 = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(3,
            new TreeNode(4)
        )
    )
);
console.log(maxDepth(root4));
// Expected: 4