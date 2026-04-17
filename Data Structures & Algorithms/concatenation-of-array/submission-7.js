class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        // return [nums,nums]
        // return nums.concat(nums);
        let res = []
        for (let i=0;i<2;i++) {
           res  = res.concat(nums); 
        }
        return res;
    }
}
