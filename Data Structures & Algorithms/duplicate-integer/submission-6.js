class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let vals = new Set();
        for (let i = 0; i < nums.length; i++) {
            if (!vals.has(nums[i])) {
                vals.add(nums[i])
            } else {
                return true
            }
        }
        return false
        // return ! (nums.length === new Set(nums).size);
    }
}
