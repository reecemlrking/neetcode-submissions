class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let prefix = [0];
        let suffix = [];
        for (let i = 1; i < height.length; i++) {
            prefix[i] = Math.max(...height.slice(0,i));
        }
        for (let j = height.length - 2; j >= 0; j--) {
            suffix[j] = Math.max(...height.slice(j,height.length));
        }
        suffix.push(0);
        console.log(prefix)
        console.log(suffix)
        let volume = 0;
        for (let i = 0; i < height.length;i++) {
            let val = Math.min(prefix[i], suffix[i]) - height[i];
            volume += val > 0 ? val : 0;
        }
        return volume;
    }
}
