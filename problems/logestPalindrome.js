function longestPalindrome(s) {
    const overlap = s.split("").map((value) => {
        return value.charCodeAt(0)
    })

    const overlapping = []
    let ptr1 = 0
    let ptr2 = 1
    let diff = 1

    do {
        if (overlap[ptr1] !== overlap[ptr2]) {
            overlapping.push(diff)
            diff = 1
            ptr1 = ptr2
            ptr2 += 1
        } else {
            diff += 1
            ptr2 += 1
        }
        if (ptr2 === overlap.length) {
            overlapping.push(diff)
        }
    } while (ptr2 !== overlap.length)

    let answer = 0
    for (let i = 0; i < overlapping.length; i++) {
        answer += Math.floor(overlapping[i] / 2) * 2
    }

    return s.length % 2 === 0 ? answer + 1 : answer
}
