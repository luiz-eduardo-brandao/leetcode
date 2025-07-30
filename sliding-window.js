function maximumLenngthSubstring(string) {
    let left = 0, rigth = 0
    let max = 1
    let counter = {}

    counter[string[0]] = 1

    while (rigth < string.length - 1) 
    {
        rigth += 1

        if (counter[string[rigth]]) {
            counter[string[rigth]] += 1
        }
        else {
            counter[string[rigth]] = 1
        }

        while (counter[string[rigth]] == 3) {
            counter[string[left]] -= 1
            left += 1
        }

        let current = (rigth - left) + 1
        max = current > max ? current : max
    }

    return max
}


console.log(maximumLenngthSubstring('bcbbbcba'))
