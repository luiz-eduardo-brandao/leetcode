let bubble = function(nums) {
    for (_ of nums) {
        console.log(nums)
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] > nums[i+1]) {
                [nums[i], nums[i+1]] = [nums[i+1], nums[i]]
            }
        }
    }
}

bubble([2, 3, 1, 5, 4])