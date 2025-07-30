function missingNumber(nums) {
    let res = nums.length

    for (let i in nums) {
        res += (i - nums[i])
    }

    return res
}

let arr = [0, 1, 3, 2, 5]

console.log(missingNumber(arr))