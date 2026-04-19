class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // start with l and r pointers and i, j indicies.
        // move i right one, check if is bigger, if yes,
        // update l, if no, do nothing. Do same with j and r.
        // keep a running max to return at the end.

        let l = 0, i = 0;
        let r = heights.length - 1, j = heights.length - 1;
        let max = (r-l) * Math.min(heights[r], heights[l]);
        while (l < r && i < j) {
            console.log(l,r,i,j)
            let nmax = (j - i) * Math.min(heights[j], heights[i]);
            max = nmax > max ? nmax : max;
            if (heights[i] < heights[j]) {
                i++;
            } else {
                j--;
            }
        }
        return max;
    }
}
