function TreeNode(value, left, right){
    this.value=(value===undefined?0:value);
    this.left=(left===undefined?null:left);
    this.right=(right===undefined?null:right);
}

function levelOrder(root){
    if (!root) return [];
    let result=[];
    let queue=[root];
    while (queue.length>0){
        let currentLevel=[];
        for(let i=0;i<queue.length;i++){
            let node=queue.shift();
            currentLevel.push(node.value)
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        result.push(currentLevel)
    }
    return result;
}

// TEST CASES
// Test 1: Complete tree
const root1 = new TreeNode(3,
    new TreeNode(9),
    new TreeNode(20,
        new TreeNode(15),
        new TreeNode(7)
    )
);
console.log(levelOrder(root1));
// Expected: [[3],[9,20],[15,7]]

// Test 2: Single node
const root2 = new TreeNode(1);
console.log(levelOrder(root2));
// Expected: [[1]]

// Test 3: Empty tree
console.log(levelOrder(null));
// Expected: []

// Test 4: Skewed tree
const root3 = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(3)
    )
);
console.log(levelOrder(root3));
// Expected: [[1],[2],[3]]