function maxProfit(prices) {
    if (prices.length <= 1) return 0

    let lowPrices = []
    let lowest = prices[0]
    for (let i = 1; i < prices.length; i++) {
        lowest = Math.min(prices[i - 1], lowest)
        lowPrices[i] = lowest
    }

    let profit = 0
    for (let i = 1; i < prices.length; i++) {
        profit = Math.max(profit, prices[i] - lowPrices[i])
    }
    return profit
}
