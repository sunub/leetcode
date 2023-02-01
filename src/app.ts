function minCostClimbingStairs(cost: number[]): number {
    const mountain = [0, ...cost, 0]
    let ptr1 = 0,
        ptr2 = 1
    const length = mountain.length - 1

    let minCost = new Array(2).fill(0)

    for (let i = 0; i < length; i++) {
        let minJump1, minJump2
        if (ptr2 + 1 < length && ptr2 + 2 < length) {
            if (mountain[ptr2 + 1] > mountain[ptr2 + 2]) {
                minJump1 = ptr2 + 2
            } else if (mountain[ptr2 + 1] < mountain[ptr2 + 2]) {
                minJump1 = ptr2 + 1
            } else {
                minJump1 = ptr2 + 2
            }

            minCost[1] += mountain[minJump2]
            ptr2 = minJump2
        }
        if (ptr1 + 1 < length && ptr1 + 2 < length) {
            if (mountain[ptr2 + 1] > mountain[ptr2 + 2]) {
                minJump1 = ptr2 + 2
            } else if (mountain[ptr2 + 1] < mountain[ptr2 + 2]) {
                minJump1 = ptr2 + 1
            } else {
                minJump1 = ptr2 + 2
            }

            minCost[0] += mountain[minJump1]
            ptr1 = minJump1
        }
    }

    return Math.min(...minCost)
}

console.log(minCostClimbingStairs([0, 1, 1, 1]))
