function binarySearch(nums, value) {
    let left = 0
    let right = nums.length

    while (left < right) {
        let mid = Math.round((left + right) / 2)

        console.log(mid)

        if (nums[mid] == value) {
            console.log('done!', nums[mid])
            return nums[mid]
        }

        if (nums[mid] < value) {
            left = mid + 1
        }
        else {
            rigth = mid
        }
    }
}


binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 17)