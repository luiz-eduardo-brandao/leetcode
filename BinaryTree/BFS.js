// BFS - Breadth First Search - Busca em Amplitude

function TreeNode(val) {
    this.val = (val===undefined ? 0 : val)
    this.left = null
    this.right = null
}

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

var levelOrder = function(root) {
    if (root == null) return null
    let result = []
    let queue = []
    queue.push(root)

    while (queue != null && queue.length > 0) {
        let newArray = []
        let appendQueue = []
        while(queue != null && queue.length > 0){
            let head = queue.shift()

            newArray.push(head.val)

            if (head.left != null)
                appendQueue.push(head.left)
        
            if (head.right != null)
                appendQueue.push(head.right)
        }

        result.push(newArray)
        queue.push(...appendQueue)
    }

    return result
};

let root = new TreeNode(3)
root.left = new TreeNode(9)
root.left.left = new TreeNode(8)
root.right = new TreeNode(20)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)

let res = levelOrder(root)
console.log(res)