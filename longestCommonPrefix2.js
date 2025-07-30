var longestCommonPrefix = function(arr1, arr2) {
    let set = new Set();

    for (let num of arr2) {
        let s = String(num)
        for (let i = 0; i <= s.length; i++) {
            set.add(s.substring(0, i))
        }
    }

    let maxLength = 0

    for (let num of arr1) {
        let s = String(num)
        for (let i = s.length; i >= 1; i--) {
            let prefix = s.substring(0, i)
            if (set.has(prefix)) {
                maxLength = Math.max(maxLength, i)
                break;
            }
        }
    }

    return maxLength
};

// let result = longestCommonPrefix([1, 10, 100], [1000])
let result = longestCommonPrefix([1, 2, 3], [4, 4, 4])
console.log(result)