function Node(val) {
    this.val = (val===undefined ? 0 : val)
    this.left = null
    this.right = null
}

function BinaryTree(val) {
    this.root = new Node(val)

    this.insert = function(val) {
        if (this.root == null) {
            this.root = new Node(val)
        } else {
            this.insertRecursive(this.root, val)
        }
    }

    this.insertRecursive = function(node, val) {
        if (val < node.val) {
            if (node.left == null) {
                node.left = new Node(val)
            } else {
                this.insertRecursive(node.left, val)
            }
        } else {
            if (node.right == null) {
                node.right = new Node(val)
            } else {
                this.insertRecursive(node.right, val)
            }
        }
    }

    this.dfs = function(val) {
        if (this.root == null) return false
        return this.dfsRecursive(this.root, val)
    }

    this.dfsRecursive = function(root, val) {
        if (root != null) {
            console.log('dfs: ', root.val)

            if (root.val == val) 
                return true

            if(this.dfsRecursive(root.left, val))
                return true

            if (this.dfsRecursive(root.right, val))
                return true
        }

        return false
    }

    this.bfs = function(val) {
        if (this.root == null) return
        let queue = []
        queue.push(this.root)

        while (queue != null && queue.length > 0) {
            let head = queue.shift()
            console.log('bfs: ', head.val)
            if (head.val == val)
                return true

            if (head.left != null)
                queue.push(head.left)

            if (head.right != null)
                queue.push(head.right)
        }

        return false
    }

    this.preorder = function() {
        let result = []
        if (this.root == null) return result
        this.preorderRecursive(this.root, result)
        console.log(result)
        return result
    }

    this.preorderRecursive = function(node, result) {
        if (node != null) {
            result.push(node.val)
            this.preorderRecursive(node.left, result)
            this.preorderRecursive(node.right, result)
        }
    }

    this.inorder = function() {
        let result = []
        if (this.root == null) return result
        this.inorderRecursive(this.root, result)
        console.log(result)
        return result
    }

    this.inorderRecursive = function(node, result) {
        if (node != null) {
            this.inorderRecursive(node.left, result)
            result.push(node.val)
            this.inorderRecursive(node.right, result)
        }
    }

    this.postorder = function() {
        let result = []
        if (this.root == null) return result
        this.postorderRecursive(this.root, result)
        console.log(result)
        return result
    }

    this.postorderRecursive = function(node, result) {
        if (node != null) {
            this.postorderRecursive(node.left, result)
            this.postorderRecursive(node.right, result)
            result.push(node.val)
        }
    }
}

let btree = new BinaryTree(5)
btree.insert(3)
btree.insert(1)
btree.insert(10)
btree.insert(7)
btree.insert(8)
btree.insert(15)
btree.insert(20)

btree.preorder()
btree.inorder()
btree.postorder()
btree.dfs(20)
let result = btree.bfs(21)
console.log(result)

let res = null