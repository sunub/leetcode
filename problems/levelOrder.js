function levelOrder(root) {
    const queue = [root],
        answer = []
    while (queue) {
        const qlen = queue.length,
            row = []
        for (let i = 0; i < qlen; i++) {
            let curr = queue.shift()
            row.push(curr.val)
            if (curr.left) queue.push(curr.left)
            if (curr.right) queue.push(curr.right)
        }
        answer.push(row)
    }
    return answer
}
