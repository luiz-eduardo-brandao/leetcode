class Node {
    constructor(data) {
        this.data = data;
        this.left = null
        this.right = null
    }
}

class BinaryTree {
    constructor() {
        this.root = null
    }

    insert(data) {
        if (this.root == null) {
            this.root = new Node(data)
        } else {
            this._insert_recursive(this.root, data)
        }
    }

    _insert_recursive(node, data) {
        if (node == null) {
            node = new Node(data)
        } else {
            if (data < node.data) {
                if (node.left == null) {
                    node.left = new Node(data)
                } else {
                    this._insert_recursive(node.left, data)
                }
            } else {
                if (node.right == null) {
                    node.right = new Node(data)
                } else {
                    this._insert_recursive(node.right, data)
                }
            }
        }
    }

    search(data) {
        return this._search_recursive(this.root, data)
    }

    _search_recursive(node, data) {
        if (node == null) {
            return false
        }
        if (node.data == data) {
            return true
        }
        if (data < node.data) {
            this._search_recursive(node.left, data)
        } else {
            this._search_recursive(node.right, data)
        }
    }

    preorder_traversal() {
        let result = []
        this.preorder_recursive(this.root, result)
        return result
    }

    preorder_recursive(node, result) {
        if (node != null) {
            result.push(node.data)
            this.preorder_recursive(node.left, result)
            this.preorder_recursive(node.right, result)
        }
    }

    inorder_traversal() {
        let result = []
        this.inorder_recursive(this.root, result)
        return result
    }

    inorder_recursive(node, result) {
        if (node != null) {
            this.inorder_recursive(node.left, result)
            result.push(node.data)
            this.inorder_recursive(node.right, result)
        }
    }

    postorder_traversal() {
        let result = []
        this.postorder_recursive(this.root, result)
        return result
    }

    postorder_recursive(node, result) {
        if (node != null) {
            this.postorder_recursive(node.left, result)
            this.postorder_recursive(node.right, result)
            result.push(node.data)
        }
    }

    dfs(data) {
        return this._dfs_recursive(this.root, data)
    }

    _dfs_recursive(node, data) {
        if (node == null) return false
        console.log(node.data)
        if (node.data == data) return true

        if(this._dfs_recursive(node.left, data))
            return true

        if(this._dfs_recursive(node.right, data))
            return true
    }

    bfs(data) {
        if (this.root == null) return false
        let levels = 0

        let queue = []
        queue.push(this.root)

        while (queue.length > 0) {
            let level = []

            for (let i in queue) {
                let node = queue.shift()
                level.push(node.val)

                if (node.data == data)
                    return true
    
                if (node.left != null)
                    queue.push(node.left)
    
                if (node.right != null)
                    queue.push(node.right)
            }

            if (level.length > 0) {
                levels += 1
            }

            console.log(levels)
        }

        return false
    }
}

let tree = new BinaryTree()
tree.insert(5)
tree.insert(3)
tree.insert(1)
tree.insert(10)
tree.insert(15)
tree.insert(7)
// tree.insert(20)

let s1 = tree.search(4)
let s2 = tree.search(6)

let preorder = tree.preorder_traversal()
let inorder = tree.inorder_traversal()
let postorder = tree.postorder_traversal()

// let dfs = tree.dfs(20)
let bfs = tree.bfs(15)

console.log()