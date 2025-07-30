class Node {
    constructor(val, neighbors = []) {
        this.val = val === undefined ? 0 : val;
        this.neighbors = neighbors === undefined ? [] : neighbors;
    }
}

var cloneGraph = function(node) {
    if (node == null) return null

    let queue = [node]
    let clones = {}
    clones[node.val] = new Node(node.val)

    while (queue.length > 0) {
        let curr = queue.shift()
        let curr_clone = clones[curr.val]

        for (let i = 0; i < curr.neighbors.length; i++) {
            let n = curr.neighbors[i]
            if (clones[n.val] == null) {
                clones[n.val] = new Node(n.val)
                queue.push(n)
            }

            curr_clone.neighbors.push(clones[n.val])
        }
    }

    return clones[node.val]
};

let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)
let node4 = new Node(4)
node1.neighbors = [node2, node4]
node2.neighbors = [node1, node3]
node3.neighbors = [node2, node4]
node4.neighbors = [node1, node3]

let result = cloneGraph(node1)
console.log(result)