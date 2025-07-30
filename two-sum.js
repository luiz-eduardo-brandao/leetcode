function twoSum(nums, target) {
    let hashes = {}
    
    for (let i = 0; i < nums.length; i++) {
        let value = target - nums[i]

        if(hashes[nums[i]] >= 0) {
            return [hashes[nums[i]], i]
        }

        hashes[value] = i
    } 
}


console.log(twoSum([2, 11, 15, 7], 9))