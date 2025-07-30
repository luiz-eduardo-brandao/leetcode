var countBits = function(n) {
    let arr = Array.from({ length: n + 1 }, (_, i) => {
        return hammingWeight(i)
    });

    return arr
};

var hammingWeight = function(n) {
    let bitsCounter = 0
    while (n > 0) {
        if (n % 2 != 0)
            bitsCounter++

        n = n >> 1
    }

    return bitsCounter
};


let res = countBits(5)
console.log(res)

// Input: n = 5
// Output: [0,1,1,2,1,2]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101
 