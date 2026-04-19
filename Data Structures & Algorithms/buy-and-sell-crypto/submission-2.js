class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0;
        for (let i = 1; i < prices.length; i++) {
            let val = prices[i] - Math.min(...prices.slice(0,i));
            max = Math.max(max, val);
        }
        return max;
    }
}
