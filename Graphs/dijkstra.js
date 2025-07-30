function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
};

let dijkstra = function(graph, start) {
    let queue = [[0, start]]
    let distances = {}

    for (let node in graph) {
        distances[node] = Infinity
    }
    
    distances[start] = 0

    while (queue != null && queue.length > 0) {
        let [currentDistance, currentNode] = queue.shift()

        if (currentDistance > distances[currentNode]) continue;

        let neighbors = graph[currentNode]

        for (let item of neighbors) {
            let [neighbor, weight] = item
            
            let distance = currentDistance + weight

            if (distance < distances[neighbor]) {
                distances[neighbor] = distance
    
                queue.push([distance, neighbor])
            }
        }
    }

    return distances
}

const graph = {
    'A': [['B', 1], ['C', 4]],
    'B': [['A', 1], ['C', 2], ['D', 5]],
    'C': [['A', 4], ['B', 2], ['D', 1]],
    'D': [['B', 5], ['C', 1]]
}

let res = dijkstra(graph, 'A')
console.log(res)