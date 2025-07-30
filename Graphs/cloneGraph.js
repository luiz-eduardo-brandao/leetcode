function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
};
 
var cloneGraph = function(node) {
    if (node == null) return new Node()
    if (node.neighbors == null || !node.neighbors.length > 0) return node

    let queue = [node]
    let clones = new Map()
    clones.set(node.val, new Node(node.val))

    while (queue != null && queue.length > 0) {
        let head = queue.shift()
        let currentClone = clones.get(head.val)

        for (let neighbor of head.neighbors) {
            if (!clones.get(neighbor.val)) {
                clones.set(neighbor.val, new Node(neighbor.val))
                queue.push(neighbor)
            }

            currentClone.neighbors.push(clones.get(neighbor.val))
        }

    }

    return clones.get(node.val)
};

let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)
let node4 = new Node(4)

node1.neighbors = [node2, node4]
node2.neighbors = [node1, node3]
node3.neighbors = [node2, node4]
node4.neighbors = [node1, node3]

let res = cloneGraph(node1)
console.log(res)