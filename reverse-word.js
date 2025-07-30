function revereWords(string) {
    let response = ''
    let l, r = 0
    let array = string.split('')

    while (r < array.length) {
        console.log(array[r])

        if (array[r] != ' ') {
            r += 1
        } else {
            r += 1
            l = r

            response += array
                .join('')
                .substring(l, r + 1)
                .split('')
                .reverse()
                .join('')

            console.log(response)
        }

        response += ' '
        response
    }
}

console.log(revereWords('rac car'))