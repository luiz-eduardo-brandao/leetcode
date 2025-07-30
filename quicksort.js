function quicksort(arr) {
    if (arr.length < 2) {
        return arr
    }
    else {
        let pivot = arr[0]
        let minors = []
        let bigger = []
        
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] <= pivot) {
                minors.push(arr[i])
            } else {
                bigger.push(arr[i])
            }
        }

        let val = [...quicksort(minors), pivot, ...quicksort(bigger)]

        console.log('pivot: ', pivot)
        console.log('minors: ', minors)
        console.log('bigger: ', bigger)
        console.log('val: ', val)

        return val
    }
}

console.log(quicksort([10, 5, 2, 3, 26, 4, 6]))