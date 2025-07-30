function TreeNode(val) {
    this.val = (val===undefined ? 0 : val)
    this.left = null
    this.right = null
}

// Input: root = [3,9,20,null,null,15,7]
// Output: 3

var maxDepth = function(root) {
    if (root == null) return 0
    let queue = []
    queue.push(root)

    let levels = 0

    while (queue != null && queue.length > 0) {
        let appendQueue = []
        levels++
        while (queue != null && queue.length > 0) {
            let head = queue.shift()

            if (head.left != null)
                appendQueue.push(head.left)

            if (head.right != null)
                appendQueue.push(head.right)
        }

        queue.push(...appendQueue)
    }

    return levels
};

// root = new TreeNode(3)
// root.left = new TreeNode(9)
// root.right = new TreeNode(20)
// root.right.left = new TreeNode(15)
// root.right.right = new TreeNode(7)


root = new TreeNode(1)
root.right = new TreeNode(2)


let res = maxDepth(root)
console.log(res)