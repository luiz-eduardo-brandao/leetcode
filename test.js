var containsNearbyDuplicate = function(nums, k) {
    let left = 0, right = 1

    while (right < nums.length) {
        while (left < right && right < nums.length) {
            let abs = Math.abs(left - right)
            
            if (nums[left] == nums[right] && abs <= k) {
                return true
            }

            if (abs < k) {
                right++
            } else {
                left++
            }
        }

        right++
    }

    return false
};


console.log(containsNearbyDuplicate([1,2,3,4,5,6,7,8,9,9], 3))