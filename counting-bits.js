var countBits = function(n) {
    let i = 0
    let ans = []

    while (n >= 0) {
        let count = 0
        let step = i

        while (step !== 0) {
            count += step & 1
            step = step >>> 1
        }
        
        ans.push(count)
        i++

        if (n == 0) {
            return ans
        }

        n -= 1
    }

    return ans
};

console.log(countBits(5))