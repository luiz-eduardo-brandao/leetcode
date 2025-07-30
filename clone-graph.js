class Node {
    constructor(val, neighbors = []) {
        this.val = val,
        this.neighbors = neighbors
    }

    addNeighbors(neighbors) {
        this.neighbors = neighbors
    }
}

function cloneGraph(node) {
    if (node == null) return node

    let q = [node]
    let clones = {}
    clones[node.val] = new Node(node.val)

    while (q.length > 0) {
        let curr = q.shift()
        let curr_clone = clones[curr.val]

        for (let i = 0; i < curr.neighbors.length; i++) {
            let n = curr.neighbors[i]
            if (clones[n.val] == null) {
                clones[n.val] = new Node(n.val)
                q.push(n)
            }

            curr_clone.neighbors.push(clones[n.val])
        }
    }

    return clones[node.val]
}

let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)
let node4 = new Node(4)
node1.addNeighbors([node2, node3])
node2.addNeighbors([node1, node4])
node3.addNeighbors([node1, node4])
node4.addNeighbors([node2, node3])


let result = cloneGraph(node1)
console.log(result)