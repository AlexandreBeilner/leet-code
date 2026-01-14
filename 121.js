/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length === 1) return 0;

    let lastCandidate = prices[0];
    let bestSell = 0;

    for (let i = 0; i<prices.length; i++) {
        if (prices[i] < lastCandidate) {
            lastCandidate = prices[i]
        }

        if (prices[i] - lastCandidate > bestSell) {
            bestSell = prices[i] - lastCandidate;
        }
    }

    return bestSell;
};
//qual foi a melhor venda até ele achar um menor que ele

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));
console.log(maxProfit([2, 8, 4, 5, 1, 3]));

