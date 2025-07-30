var removeDuplicates = function(nums) {
    let numbers = new Map()
    let expectedNums = []
    let count = 0
    for (i = 0; i < nums.length; i++) {
        if(numbers.has(nums[i])) {
            count++
        } else {
            expectedNums.push(nums[i])
            numbers.set(nums[i], i)
        }
    }

    const arrayPreenchido = Array.from({ length: count }, (_, index) => '_')
    let size = expectedNums.length
    expectedNums.push(...arrayPreenchido)
    return [size, expectedNums]
};


let res = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])
console.log(res)