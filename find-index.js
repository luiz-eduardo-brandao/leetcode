var strStr = function(haystack, needle) {
    let left = 0, right = needle.length

    while (right <= haystack.length) {
        if (haystack.substring(left, right) == needle) {
            return left
        }

        left++
        right++
    }

    return -1



};


let result = strStr('a', 'a')

console.log(result)