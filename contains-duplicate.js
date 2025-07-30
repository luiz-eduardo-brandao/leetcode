var containsNearbyDuplicate = function(nums, k) {
    let i = 1
    let hashes = {}
    
    hashes[nums[0]] = 0

    while (i < nums.length) {
        if (hashes[nums[i]] >= 0) {
            if (i == hashes[nums[i]]) {

            }
        }


        if (nums[l] == nums[r] && Math.abs(l - r) <= k) {
            return true
        }
    }
    
    return false
};


// console.log(containsNearbyDuplicate([1, 2, 3, 1], 3))
// console.log(containsNearbyDuplicate([1, 0, 1, 1], 1))
// console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2))
// console.log(containsNearbyDuplicate([1,2,3,4,5,6,7,8,9,9], 3))
console.log(containsNearbyDuplicate([1,2,2,3], 3))