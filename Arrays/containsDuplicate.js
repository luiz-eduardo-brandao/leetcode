// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array 
// such that nums[i] == nums[j] and abs(i - j) <= k.

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false


var containsNearbyDuplicate = function(nums, k) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if(map.has(nums[i])) {
            const j = map.get(nums[i])
            const abs = Math.abs(i - j)
            if (abs <= k) return true
        }

        map.set(nums[i],  i)
    }

    return false
}

let r2 = containsNearbyDuplicate([1,2,2,3], 3)
// let r1 = containsNearbyDuplicate([0,1,2,3,2,5], 3)
// let r1 = containsNearbyDuplicate([1,2,3,1], 3)
// let r3 = containsNearbyDuplicate([1,2,3,1,2,3], 2)
console.log(r2)