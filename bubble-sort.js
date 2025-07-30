function bubble(nums) {
    for (let i = 0; i < nums.length; i++) {
        let isSorted = true
        console.log(nums)
        for (let j = 0; j < nums.length - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                let val = nums[j]
                nums[j] = nums[j + 1]
                nums[j + 1] = val

                isSorted = false
            }
        }

        if (isSorted) return
    }

    return nums
}

// bubble([5, 4, 3, 2, 1])
// bubble([1, 2, 3, 4, 5])
bubble([1, 2, 5, 4, 3])


// O (n*n)