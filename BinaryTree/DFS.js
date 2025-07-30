// DFS - Depth First Search - Busca em Profundidade

// Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// Output: true
// Explanation: The root-to-leaf path with the target sum is shown.

function TreeNode(val) {
    this.val = (val===undefined ? 0 : val)
    this.left = null
    this.right = null
}

var hasPathSum = function(root, targetSum) {
    let dfsRecursive = function(root, current, target) {
        if (root == null) return false

        current += root.val

        if (root.left == null && root.right == null) {
            if (current == target)
                return true
        } else {
            if (dfsRecursive(root.left, current, target))
                return true
            if (dfsRecursive(root.right, current, target))
                return true
        }

        current -= root.val
        return false
    }

    let current = 0
    let result = dfsRecursive(root, current, targetSum)

    return result
};

let root = new TreeNode(5)
root.left = new TreeNode(4)
root.left.left = new TreeNode(11)
root.left.left.left = new TreeNode(7)
root.left.left.right = new TreeNode(2)

root.right = new TreeNode(8)
root.right.left = new TreeNode(13)
root.right.right = new TreeNode(4)
root.right.right.right = new TreeNode(1)

let res = hasPathSum(root, 22)
console.log(res)