function TreeNode(val) {
    this.val = (val===undefined ? 0 : val)
    this.left = null
    this.right = null
}


let buildTree = function(inorder, postorder) {
    if (inorder == null || postorder == null
        || inorder.length == 0 || postorder.length == 0
    ) {
        return null
    }

    let root = new TreeNode(postorder.pop())
    let rootIndex = inorder.indexOf(root.val)

    root.right = buildTree(inorder.slice(rootIndex+1, inorder.length), postorder)
    root.left = buildTree(inorder.slice(0, rootIndex), postorder)

    return root;
}

let res = buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3])
console.log(res)