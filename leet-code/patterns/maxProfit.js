let maxProfit = (prices) => {
    let minPrice = prices[0];
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        let price = prices[i];
        let profit = price - minPrice;
        maxProfit = Math.max(maxProfit, profit)
        minPrice = Math.min(minPrice, price)
    }
    return maxProfit
}
// TEST CASES
console.log(maxProfit([7, 1, 5, 3, 6, 4]));    // 5
console.log(maxProfit([7, 6, 4, 3, 1]));       // 0
console.log(maxProfit([2, 4, 1, 7, 5, 11]));   // 10
console.log(maxProfit([2, 1, 2, 0, 1]));       // 1
console.log(maxProfit([3, 3]));                // 0
console.log(maxProfit([3, 8]));                // 5
console.log(maxProfit([10, 3]));                // 0