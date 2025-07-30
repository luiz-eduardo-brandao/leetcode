var hammingWeight = function(n) {
    let bitsCounter = 0
    while (n > 0) {
        if (n % 2 != 0)
            bitsCounter++

        n = n >> 1
    }

    return bitsCounter
};


let res = hammingWeight(2147483645)
console.log(res)

// Input: n = 11

// Output: 3

// Explanation:

// The input binary string 1011 has a total of three set bits.