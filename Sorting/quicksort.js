let quicksort = function(arr, left, right) {
    if (left < right) {
        console.log(arr)
        pi = partition(arr, left, right)
        quicksort(arr, left, pi-1)
        quicksort(arr, pi+1, right)
    }
}

let partition = function(arr, left, right) {
    let subArray = arr.slice(left, right)
    let pivot = arr[right]

    let i = left-1

    for (let j = left; j < right; j++) {
        if (arr[j] <= pivot) {
            i++
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
        
    }
    [arr[i+1], arr[right]] = [arr[right], arr[i+1]]
    return i+1
}

let arr = [0, 3, 6, 7, 9, 8, 4, 2, 1, 5]
let res = quicksort(arr, 0, arr.length - 1)
console.log(res)