let graph = {}
graph["voce"] = ["alice", "bob", "claire"]
graph["bob"] = ["anuj", "peggy"]
graph["alice"] = ["peggy"]
graph["anuj"] = []
graph["peggy"] = []
graph["tom"] = []
graph["jonny"] = []

function searchQueue(name) {
    let searchList = graph[name]
    let verified = []

    while (searchList.length > 0) {
        let person = searchList.shift()

        console.log('person', person)
        console.log('searchList', searchList)
        console.log('verified', verified)

        if (verified[person] == null) {
            if (person[0] == 'l') {
                return true
            } else {
                searchList.push(...graph[person])
                verified[person] = person
            }
        }
    }

    return false
}

searchQueue("voce")

let searchList = graph["voce"]

let person = searchList.shift()

console.log(person)
console.log(searchList)

searchList.push(...graph[person])

console.log(person)
console.log(searchList)