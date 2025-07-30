function binarySearch(nums, value, left = 0, right = 0) {
    if(right == 0) {
        right = nums.length
    }

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

function exponentialSearch(arr, target) {
    if (arr[0] == target) {
        return 0
    }

    let n = arr.length
    let i = 1

    while (i < n && arr[i] < target) {
        i *= 2
    }

    console.log('aqui: ', i)

    if(arr[i] == target) {
        return i
    }

    binarySearch(arr, target, Math.round(i/2), Math.min(i, n-1))
}


exponentialSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,22, 23, 24,25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], 28)