function TreeNode(val) {
    this.val = (val===undefined ? 0 : val)
    this.left = null
    this.right = null
}


var isSameTree = function(p, q) {
    if (p == null && q == null) return true

    if (p != null && q != null) {
        if (p.val != q.val) return false
    
        if (!isSameTree(p.left, q.left))
            return false
    
        if (!isSameTree(p.right, q.right))
            return false
    
        return true
    }

    return false
};


// p = new TreeNode(1)
// p.left = new TreeNode(2)
// p.right = new TreeNode(3)

// q = new TreeNode(1)
// q.left = new TreeNode(2)
// q.right = new TreeNode(3)


p = new TreeNode(1)
p.left = new TreeNode(2)

q = new TreeNode(1)
q.right = new TreeNode(2)

let res = isSameTree(p, q)
console.log(res)