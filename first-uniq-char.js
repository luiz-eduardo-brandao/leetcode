function firstUniqChar(string) {
    let i = 0
	let counter = {}

	while (i < string.length) {
		let v = string[i]

		if(counter[v]) {
			counter[v][1] += 1
		} else {
			counter[v] = [i, 1]
		}

		i++
	}

	// console.log(counter)

	for (let ch in counter) {
		if(counter[ch][1] == 1) {
			return counter[ch][0]
		}
	}

	return -1
}

console.log(firstUniqChar('leetcode'))
console.log(firstUniqChar('loveleetcode'))
console.log(firstUniqChar('aabb'))